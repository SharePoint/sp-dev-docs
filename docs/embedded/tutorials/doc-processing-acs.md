---
title: Document Processing with Azure Cognitive Services
description: Enabling document processing with Azure Cognitive Services.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# Enabling Document Processing with Azure Cognitive Services

## Utilizing Azure Cognitive Services

Azure Cognitive Services is a set of cloud-based APIs that you can use in AI applications and data flows. It provides pre-trained models that are ready to use in your applications, requiring no data and no model training on your part. They can be easily integrated into applications via HTTP REST interfaces.

You have already learned how to use webhooks with [the application](/training/modules/sharepoint-embedded-create-app/) to get a notification whenever an existing file is updated, or a new file is uploaded in the [Using Webhooks tutorial](./using-webhooks.md). This tutorial will cover connecting it with Azure Cognitive Services to extract data from invoices.

To set up automatic AI processing with your current SharePoint application upon a change in your container, you need to follow [Using Webhooks](./using-webhooks.md) and then:

1. Get the delta changes of the container. You're currently able to get the notification whenever there's any change in our container and will now get the files that are added or updated.
1. Call Azure Cognitive Services’s Document Intelligence service API. You'll need to create an Azure AI resource to use the API to extract the fields from an image and get the extracted files. You might store them as shown in this tutorial or you might process them as you like.
![document processing schema](../images/Document-Processing.png)

> [!TIP]
> To learn more about the Microsoft Graph APIs used in this tutorial, see [Track changes for a Drive](/graph/api/driveitem-delta), [Get a DriveItem resource](/graph/api/driveitem-get), and [Upload or replace the contents of a DriveItem](/graph/api/driveitem-put-content).

## Get the delta changes of a container

Open **GraphProvider.ts** and implement the method `getDriveChanges` to get the list of changed items.

```typescript
public static async getDriveChanges(driveId: string): Promise<any[]> {
  let changedItems: any[] = [];
  const driveDeltaBasePath: string = `/drives/${driveId}/items/root/delta`;
  let driveDeltaTokenParams: string = "";
  let hasMoreChanges: boolean = true;
  try{
    do {
      if (this.changeTokens.has(driveId)) {
        driveDeltaTokenParams = `?token=${this.changeTokens.get(driveId)}`
      }
      const response = await this.graphClient.api(driveDeltaBasePath + driveDeltaTokenParams).get();
      changedItems.push(...response.value);
      if (response['@odata.nextLink']) {
        const token = new URL(response['@odata.nextLink']).searchParams.get('token');
        this.changeTokens.set(driveId, token);
      } else {
        hasMoreChanges = false;
        const token = new URL(response['@odata.deltaLink']).searchParams.get('token');
        this.changeTokens.set(driveId, token);
      }
      console.log(this.changeTokens.get(driveId));
    } while (hasMoreChanges);
  }
  catch(err){
    console.log(err);
  }
  return changedItems;
}
```

Implement the method `getDriveItem` to fetch a file from a container.

```typescript
public static async getDriveItem(driveId: string, itemId: string): Promise<any> {
  return await this.graphClient.api(`/drives/${driveId}/items/${itemId}`).get();
}
```

Create a new file **ReceiptProcessor.ts** and implement a method `processDrive`.

```typescript
export abstract class ReceiptProcessor {

  public static async processDrive(driveId: string): Promise<void> {
    const changedItems = await GraphProvider.getDriveChanges(driveId);
    for (const changedItem of changedItems) {
      try {
        const item = await GraphProvider.getDriveItem(driveId, changedItem.id);
        const extension = this.getFileExtension(item.name);
        if (this.SUPPORTED_FILE_EXTENSIONS.includes(extension.toLowerCase())) {
          console.log(item.name);
          const url = item["@microsoft.graph.downloadUrl"];
          const receipt = await this.analyzeReceiptStream(await this.getDriveItemStream(url));
          const receiptString = JSON.stringify(receipt, null, 2)
          const fileName = this.getFileDisplayName(item.name) + "-extracted-fields.json";
          const parentId = item.parentReference.id;
          await GraphProvider.addDriveItem(driveId, parentId, fileName, receiptString);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
```

At this point if you restart the app along with tunneling and subscription, you should see the recently added/updated files listed in the console.

## Call Azure Cognitive Services' Document Intelligence service API

To use the Azure Cognitive Services Document Intelligence APIs, you need to create a Multi-Service or Document Intelligence resource for Azure AI Service. Refer to the following tutorials to create the resource:

- [Quickstart: Create a multi-service resource for Azure AI services](/azure/ai-services/multi-service-resource?tabs=windows&pivots=azportal)
- [Get started with Document Intelligence](/azure/ai-services/document-intelligence/quickstarts/get-started-sdks-rest-api?view=doc-intel-3.1.0&viewFallbackFrom=form-recog-3.0.0&preserve-view=true&pivots=programming-language-javascript)

After this step, you should have an endpoint and a key ready to use.

Now open **ReceiptProcessor.ts** to create method `dac` to store the Azure Cognitive Services credentials.

```typescript
private static dac = new DocumentAnalysisClient(
  `${process.env["DAC_RESOURCE_ENDPOINT"]}`,
  new AzureKeyCredential(`${process.env["DAC_RESOURCE_KEY"]}`)
);
```

Create method `getDriveItemStream`.

```typescript
private static async getDriveItemStream(url: string): Promise<Readable> {
  const token = GraphProvider.graphAccessToken;
  const config: AxiosRequestConfig = {
    method: "get",
    url: url,
    headers: {
      "Authorization": `Bearer ${token}`
    },
    responseType: 'stream'
  };
  const response = await axios.get<Readable>(url, config);
  return response.data;
}
```

Create method `analyzeReceiptStream` to get the OCR fields through Azure Cognitive Services processing. Here we're taking the `prebuilt-invoice` model, but other models can be chosen.

```typescript
private static async analyzeReceiptStream(stream: Readable): Promise<any> {
  const poller = await this.dac.beginAnalyzeDocument("prebuilt-invoice", stream, {
    onProgress: ({ status }) => {
      console.log(`status: ${status}`);
    },
  });

  const {
    documents: [result] = [],
  } = await poller.pollUntilDone();

  const fields = result?.fields;
  this.removeUnwantedFields(fields);
  return fields;
}
```

Create method `removeUnwantedFields` to remove the undesirable fields in Azure Cognitive Services’s response.

```typescript
private static removeUnwantedFields(fields: any) {
  for (const prop in fields) {
    if (prop === 'boundingRegions' || prop === 'content' || prop === 'spans') {
      delete fields[prop];
    }
    if (typeof fields[prop] === 'object') {
      this.removeUnwantedFields(fields[prop]);
    }
  }
}
```

Finally, open **GraphProvider.ts** to add the `addDriveItem` method at the end of the `GraphProvider` class.

```typescript
public static async addDriveItem(driveId: string, parentId: any, fileName: string, receiptString: string) {
  await this.graphClient.api(`/drives/${driveId}/items/${parentId}:/${fileName}:/content`).put(receiptString);
}
```

Now, restart the demo app and set up the tunneling using ngrok and delta change subscription on the container again.

If you add/update any file (supported formats: JPEG, JPG, PNG, BMP, TIFF, PDF) in this container, you should see a new JSON file created and containing the fields extracted from the file.
