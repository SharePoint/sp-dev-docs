---
title: Build your first Field Customizer extension
description: Extensions are client-side components that run inside the context of a SharePoint page. Extensions can be deployed to SharePoint Online, and you can use modern JavaScript tools and libraries to build them.
ms.date: 06/15/2021
ms.prod: sharepoint
ms.custom: scenarios:getting-started
---

# Build your first Field Customizer extension

Extensions are client-side components that run inside the context of a SharePoint page. Extensions can be deployed to SharePoint Online, and you can use modern JavaScript tools and libraries to build them.

You can follow these steps by watching the video on the SharePoint PnP YouTube Channel:

> [!Video https://www.youtube.com/embed/mBZ7Sq_KfDA]

## Create an extension project

1. Create a new project directory in your favorite location.

    ```console
    md field-extension
    ```

1. Go to the project directory.

    ```console
    cd field-extension
    ```

1. Create a new HelloWorld extension by running the Yeoman SharePoint Generator.

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted, enter the following values (*select the default option for all prompts omitted below*):

    - **What is your solution name?**: field-extension
    - **Will the components in the solution require permissions to access web APIs that are unique and not shared with other components in the tenant? (y/n)** n
    - **Which type of client-side component to create?**: Extension
    - **Which type of client-side extension to create?** Field Customizer
    - **What is your Field Customizer name?** HelloWorld
    - **What is your Field Customizer description?** HelloWorld description
    - **Which framework would you like to use?**: No JavaScript Framework

    At this point, Yeoman installs the required dependencies and scaffolds the solution files along with the **HelloWorld** extension. This might take a few minutes.

1. Type the following into the console to start Visual Studio Code.

    ```console
    code .
    ```

    > [!NOTE]
    > Because the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor that supports client-side development to build your extension.

1. Open the **./src/extensions/helloWorld/HelloWorldFieldCustomizer.manifest.json** file.

    This file defines your extension type and a unique identifier `id` for your extension. You need this unique identifier later when debugging and deploying your extension to SharePoint.

## Code your Field Customizer

Open the **./src/extensions/helloWorld/HelloWorldFieldCustomizer.ts** file.

Notice that the base class for the Field Customizer is imported from the **sp-listview-extensibility** package, which contains SharePoint Framework code required by the Field Customizer.

```typescript
import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';
```

The logic for your Field Customizer is contained in the `onInit()`, `onRenderCell()`, and `onDisposeCell()` methods.

- `onInit()` is where you'll execute the setup needed for your extension. This event occurs after `this.context` and `this.properties` are assigned, but before the page DOM is ready. As with web parts, `onInit()` returns a promise that you can use to do asynchronous operations; `onRenderCell()` isn't called until your promise has resolved. If you don’t need that, simply return `Promise.resolve<void>();`.
- `onRenderCell()` occurs when each cell is rendered. It provides an `event.domElement` HTML element where your code can write its content.
- `onDisposeCell()` occurs immediately before the `event.cellDiv` is deleted. It can be used to free any resources that were allocated during field rendering. For example, if `onRenderCell()` mounted a React element, `onDisposeCell()` must be used to free it; otherwise, a resource leak would occur.

The following are the contents of `onRenderCell()` and `onDisposeCell()` in the default solution:

```typescript
@override
public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
  // Use this method to perform your custom cell rendering.
  const text: string = `${this.properties.sampleText}: ${event.fieldValue}`;

  event.domElement.innerText = text;

  event.domElement.classList.add(styles.cell);
}

@override
public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
  super.onDisposeCell(event);
}
```

## Debug your Field Customizer

You can't use the local Workbench to test SharePoint Framework Extensions. You need to test and develop them directly against a live SharePoint Online site. You don't have to deploy your customization to the app catalog to do this, which makes the debugging experience simple and efficient.

1. To test your extension, you'll need to first create the field to test the customizer in. So move to the site in your SharePoint Online tenant where you want to test the field customizer.
1. Navigate to the **Site Contents** page.
1. On the toolbar, select **New**, and then select **List**.

    ![Creating a new list](../../../images/ext-field-create-new-list.png)

1. Create a new list named **Orders**, and then select **Create**.

    ![Creating a new list with name of Orders](../../../images/ext-field-create-new-list-order.png)

1. Select the **+** sign, and then select **Number** to create a new Number field for the list.

    ![Creating a new Number field](../../../images/ext-field-new-number-field.png)

1. Set the name of the field to **Percent**, and then select **Save**.

    ![Creating a new field called Percent](../../../images/ext-field-new-number-field-percent.png)

1. Add a few items with different numbers in the percent field. We'll modify the rendering later in this tutorial, so the different numbers will be presented differently based on your custom implementation.

    ![Creating items in the newly created list with different values in the Percent field](../../../images/ext-field-create-items-to-list.png)

1. Within Visual Studio Code, open the **./config/serve.json** file.

    Set the `InternalFieldName` attribute to `Percent` for the field name, which we created. Update the `pageUrl` attributes to match a URL of the list which we created in the preview steps. After the changes, your **serve.json** should look like the following code:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/core-build/serve.schema.json",
      "port": 4321,
      "https": true,
      "serveConfigurations": {
        "default": {
          "pageUrl": "https://sppnp.sharepoint.com/sites/Group/Lists/Orders/AllItems.aspx",
          "fieldCustomizers": {
            "Percent": {
              "id": "b909e395-f714-421f-94e0-d638dafeb210",
                "properties": {
                "sampleText": "Value"
              }
            }
          }
        },
        "helloWorld": {
          "pageUrl": "https://sppnp.sharepoint.com/sites/Group/Lists/Orders/AllItems.aspx",
          "fieldCustomizers": {
            "Percent": {
              "id": "b909e395-f714-421f-94e0-d638dafeb210",
              "properties": {
                "sampleText": "Value"
              }
            }
          }
        }
      }
    }
    ```

    > [!NOTE]
    > The GUID in the above JSON excerpt is the unique ID of the SPFx extension component. This is defined in the component's manifest. The GUID in your solution will be different as every component ID is unique.

1. Compile your code and host the compiled files from the local machine by running this command:

    ```console
    gulp serve
    ```

    When the code compiles without errors, it serves the resulting manifest from **https://localhost:4321**.

    ![gulp serve](../../../images/ext-field-gulp-serve.png)

    This will start your default browser and load the page defined in **serve.json** file.

1. Accept the loading of debug manifests by selecting **Load debug scripts** when prompted.

    ![Accept loading debug scripts](../../../images/ext-field-accept-debug-scripts.png)

    Notice how the **Percent** column values are now presented with an additional prefix string as **Value:**, which is provided as a property for the Field Customizer.

    ![List view with field customizer rendered for percent field](../../../images/ext-field-default-customizer-output.png)

## Enhance the Field Customizer rendering

Now that we've successfully tested the out-of-the-box starting point of the Field Customizer, let's modify the logic slightly to have a more polished rendering of the field value.

1. Open the **./src/extensions/helloWorld/HelloWorldFieldCustomizer.module.scss** file, and update the styling definition as follows.

    ```scss
    .HelloWorld {
      .cell {
        display: inline-block;
      }
      .full {
        background-color: #e5e5e5;
        width: 100px;
      }
    }
    ```

1. Open the file **./src/extensions/helloWorld/HelloWorldFieldCustomizer.ts** and update the `onRenderCell()` method as follows.

    ```typescript
    @override
    public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
      event.domElement.classList.add(styles.cell);
      event.domElement.innerHTML = `
        <div class='${styles.HelloWorld}'>
            <div class='${styles.full}'>
            <div style='width: ${event.fieldValue}px; background:#0094ff; color:#c0c0c0'>
                &nbsp; ${event.fieldValue}
            </div>
            </div>
        </div>`;
    }
    ```

1. In the console window, ensure that you don't have any errors. If the solution isn't running, execute the following task:

    ```console
    gulp serve
    ```

1. In your previously created list, refresh the browser window with the debugging query parameters or restart the browser with **gulp serve**.
1. Accept the loading of debug manifests by selecting **Load debug scripts** when prompted.

    ![Accept loading debug scripts](../../../images/ext-field-accept-debug-scripts.png)

    Note how we changed the field rendering style completely. The field value is indicated by using a graphical representation of the value.

    ![Graphical Representation of Percent](../../../images/ext-field-percent-field-graphic.png)

## Add the field definition to the solution package for deployment

Now that we've tested our solution properly in debug mode, we can package this to be deployed automatically as part of the solution package deployed to the sites.

1. Install the solution package to the site where it should be installed, so that the extension manifest is included for execution.
1. Associate the Field Customizer to an existing field in the site. You can do this programmatically using the SharePoint REST or CSOM API, or by using the Feature Framework in of the SharePoint Framework solution package. In this tutorial, we'll use the Feature Framework's xml files. You need to associate the following properties in the `SPField` object at the site or list level.
    - `ClientSideComponentId`: this is the identifier (GUID) of the Field Customizer that has been installed in the app catalog.
    - `ClientSideComponentProperties`: this is an optional parameter that can be used to provide properties for the Field Customizer instance.

    You can control the requirement to add a solution containing your extension to the site with the `skipFeatureDeployment` property in **./config/package-solution.json** file. Even though you wouldn't require the solution to be installed on the site, you'd need to associate `ClientSideComponentId` to specific objects for the extension to be visible.

    You can use, for example,  [Set-PnPField cmdlet](/powershell/module/sharepoint-pnp/set-pnpfield) from PnP PowerShell cmdlets to programatically associate an extension to existing fields in your sites.

    [!INCLUDE [pnp-powershell](../../../../includes/snippets/open-source/pnp-powershell.md)]

### Review the elements.xml file

In the following steps, we review the default field definition, which was automatically created and will then be used to automatically deploy needed configurations when the solution package is installed on a site.

1. Return to your solution in Visual Studio Code (or to your preferred editor).
1. Open the file **./sharepoint/assets/elements.xml**.

    ![assets folder in solution structure](../../../images/ext-field-assets-folder.png)

Look at the XML in this file. The `ClientSideComponentId` property has been automatically updated to the unique ID of your Field Customizer available in the **./src/extensions/helloWorld/HelloWorldFieldCustomizer.manifest.json** file. You'll need to adjust this file matching on your field type and details.

> [!NOTE]
> For more information on the Feature Framework XML schema, see: [SharePoint schema reference](/sharepoint/dev/schema/field-definitions).

```xml
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <Field ID="{060E50AC-E9C1-3D3C-B1F9-DE0BCAC200F6}"
          Name="SPFxPercentage"
          DisplayName="Percentage"
          Type="Number"
          Min="0"
          Required="FALSE"
          Group="SPFx Columns"
          ClientSideComponentId="7e7a4262-d02b-49bf-bfcb-e6ef1716aaef">
  </Field>
</Elements>
```

### Ensure that definitions are taken into account within the build pipeline

Open the **./config/package-solution.json** file.

The **package-solution.json** file defines the package metadata as shown in the following code. To ensure that the **element.xml** file is taken into account while the solution package is created, the default scaffolding of this file is updated to include additional details for a feature definition. This feature definition is used to provision and execute the **elements.xml** file.

Also notice that the `includeClientSideAssets` attribute is set to `true`. This means the JavaScript assets will be included in the **\*.sppkg** file:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
  "solution": {
    "name": "field-extension-client-side-solution",
    "id": "80c04d1b-dca7-4d0a-86c0-9aedf904704f",
    "version": "1.0.0.0",
    "includeClientSideAssets": true,
    "isDomainIsolated": false,
    "features": [
      {
        "title": "Application Extension - Deployment of custom action.",
        "description": "Deploys a custom action with ClientSideComponentId association",
        "id": "b27507b9-7c2a-4398-8946-7438571f16f6",
        "version": "1.0.0.0",
        "assets": {
          "elementManifests": [
            "elements.xml"
          ]
        }
      }
    ]
  },
  "paths": {
    "zippedPackage": "solution/field-extension.sppkg"
  }
}
```

## Deploy the field to SharePoint Online and host JavaScript from local host

Now you're ready to deploy the solution to a SharePoint site and get the field association automatically included in a field. We'll use the **--ship** option with this packaging so all assets are packaged automatically in the solution package.

1. In the console window, enter the following command to package your client-side solution that contains the extension so that we get the basic structure ready for packaging:

    ```console
    gulp bundle --ship
    ```

1. Execute the following command so that the solution package is created:

    ```console
    gulp package-solution --ship
    ```

    The command creates the package: **./sharepoint/solution/field-extension.sppkg**:

1. You now need to deploy the package that was generated to the app catalog. To do this, go to your tenant's app catalog and open the **Apps for SharePoint** library.
1. Upload the file **./sharepoint/solution/field-extension.sppkg** to the app catalog.

    Notice that SharePoint displays the trust dialog and asks you to trust the client-side solution with **SharePoint Online** as the domain. Your assets will be automatically hosted either from app catalog URL or from Microsoft 365 public CDN, depending on your tenant settings.

1. Select the **Deploy** button.

    ![Deploy Dialog](../../../images/ext-field-sppkg-deploy-trust.png)

1. Go to the site where you want to test SharePoint asset provisioning. This could be any site collection in the tenant where you deployed this solution package.
1. Select the gears icon on the top navigation bar on the right, and then select **Add an app**.
1. In the **Search** box, enter **field**, and then select <kbd>ENTER</kbd> to filter your apps.

    ![installing field customizer to site](../../../images/ext-field-install-solution-to-site.png)

1. Select the **field-extension-client-side-solution** app to install the solution on the site. After the installation is complete, refresh the page.
1. When the solution has been installed, select **New** from the toolbar on the **Site Contents** page, and then select **List**.

    ![Creating a new list](../../../images/ext-field-create-new-list.png)

1. Create a list named **Invoices**.
1. When the new list is created, on the **Site Contents** page, select **Settings** from the menu of the newly created list.

    ![List settings for the new list](../../../images/ext-field-list-settings.png)

1. Select **Columns** > **Add from existing site columns**.
1. Select the **SPFx Columns** > **Percentage** field that was provisioned from the solution package, and then select **OK**.

    ![Adding Percentage field to list](../../../images/ext-field-add-field-to-list.png)

1. Go to the newly created **Invoices** list. Add a few items to the list with different values in the Percentage column to determine how the field is rendering without the debug query parameters.

![Field Rendering without Debug Query Parameters](../../../images/ext-field-render-field-without-debug.png)

The process for publishing your app is identical among the different extension types.

> [!NOTE]
> This was a relatively simple field customizer with functionality that could also have been achieved with [Use column formatting to customize SharePoint](../../../declarative-customization/column-formatting.md). Column formatting however does not support actual custom code. Notice that field customizers cannot be modified by end users from the user interface which enables additional use cases.

## See also

- [Build your first ListView Command Set extension](building-simple-cmdset-with-dialog-api.md)
- [Overview of SharePoint Framework Extensions](../overview-extensions.md)
