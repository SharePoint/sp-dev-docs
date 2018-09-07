---
title: Build your first Field Customizer extension
description: Create an extension project, and then code and debug your extension by using SharePoint Framework (SPFx) Extensions.
ms.date: 08/28/2018
ms.prod: sharepoint
---

# Build your first Field Customizer extension

Extensions are client-side components that run inside the context of a SharePoint page. Extensions can be deployed to SharePoint Online, and you can use modern JavaScript tools and libraries to build them.

You can follow these steps by watching the video on the SharePoint PnP YouTube Channel:

<br/>

> [!Video https://www.youtube.com/embed/q5gLIyhIkJo]

<br/> 

## Create an extension project

1. Create a new project directory in your favorite location.
    
    ```
    md field-extension
    ```
    
2. Go to the project directory.
    
    ```
    cd field-extension
    ```
    
3. Create a new HelloWorld extension by running the Yeoman SharePoint Generator.
    
    ```
    yo @microsoft/sharepoint
    ```
    
4. When prompted:
    
    * Accept the default value of **field-extension** as your solution name, and then select Enter.
    * Select **SharePoint Online only (latest)**, and select Enter.
    * Select **Use the current folder**, and select Enter.
    * Select **N** to require the extension to be installed on each site explicitly when it's being used.
    * Select **Extension** as the client-side component type to be created. 
    * Select **Field Customizer** as the extension type to be created.
    
5. The next set of prompts ask for specific information about your extension:
     
    * Accept the default value of **HelloWorld** as your extension name, and then select Enter.
    * Accept the default value of **HelloWorld description** as your extension description, and select Enter.
    * Accept the default value of **No JavaScript Framework** as the framework selection, and select Enter. 
    
    ![Yeoman SharePoint generator prompts to create an extension solution](../../../images/ext-field-yeoman-prompts.png)
    
    At this point, Yeoman installs the required dependencies and scaffolds the solution files along with the **HelloWorld** extension. This might take a few minutes.
    
    When the scaffold is complete, you should see the following message indicating a successful scaffold:
    
    ![SharePoint client-side solution scaffolded successfully](../../../images/ext-field-yeoman-complete.png)
    
    For information about troubleshooting any errors, see [Known issues](../../known-issues-and-common-questions.md).

   
6. Type the following into the console to start Visual Studio Code.
    
    ```
    code .
    ```
    
    > [!NOTE] 
    > Because the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor that supports client-side development to build your extension.

    Note how the default solution structure looks like the solution structure of client-side web parts. This is the basic SharePoint Framework solution structure, with similar configuration options across all solution types.

    ![SharePoint Framework solution opened after initial scaffolding](../../../images/ext-field-vscode-solution-structure.png)

7. Open **HelloWorldFieldCustomizer.manifest.json** in the **src\extensions\helloWorld** folder.

    This file defines your extension type and a unique identifier `id` for your extension. You need this unique identifier later when debugging and deploying your extension to SharePoint.

    ![Application Customizer manifest json content](../../../images/ext-field-vscode-manifest.png)

## Code your Field Customizer 

Open the **HelloWorldFieldCustomizer.ts** file in the **src\extensions\helloWorld** folder.

Notice that the base class for the Field Customizer is imported from the **sp-listview-extensibility** package, which contains SharePoint Framework code required by the Field Customizer.

```typescript
import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';
```

The logic for your Field Customizer is contained in the **OnInit()**, **onRenderCell()**, and **onDisposeCell()** methods.

* **onInit()** is where you should perform any setup needed for your extension. This event occurs after `this.context` and `this.properties` are assigned, but before the page DOM is ready. As with web parts, `onInit()` returns a promise that you can use to perform asynchronous operations; `onRenderCell()` is not called until your promise has resolved. If you don’t need that, simply return `Promise.resolve<void>();`.
* **onRenderCell()** occurs when each cell is rendered. It provides an `event.domElement` HTML element where your code can write its content.
* **onDisposeCell()** occurs immediately before the `event.cellDiv` is deleted. It can be used to free any resources that were allocated during field rendering. For example, if `onRenderCell()` mounted a React element, `onDisposeCell()` must be used to free it; otherwise, a resource leak would occur. 

The following are the contents of **onRenderCell()** and **onDisposeCell()** in the default solution:

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
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    super.onDisposeCell(event);
  }
```

## Debug your Field Customizer

You cannot currently use the local Workbench to test SharePoint Framework Extensions. You need to test and develop them directly against a live SharePoint Online site. You don't have to deploy your customization to the app catalog to do this, which makes the debugging experience simple and efficient.


1. To test your extension, you will need to first create the field to test the customizer in. So move to the site in your SharePoint Online tenant where you want to test the field customizer.

2. Move to the **Site Contents** page.

3. On the toolbar, select **New**, and then select **List**.
    
    ![Creating a new list](../../../images/ext-field-create-new-list.png)
    
4. Create a new list named **Orders**, and then select **Create**.
    
    ![Creating a new list with name of Orders](../../../images/ext-field-create-new-list-order.png)
    
5. Select the **plus** sign, and then select **Number** to create a new Number field for the list.
    
    ![Creating a new Number field](../../../images/ext-field-new-number-field.png)
    
6. Set the name of the field to **Percent**, and then select **Save**.
    
    ![Creating a new field called Percent](../../../images/ext-field-new-number-field-percent.png)
    
7. Add a few items with different numbers in the percent field. We'll modify the rendering later in this tutorial, so the different numbers will be presented differently based on your custom implementation.

    ![Creating items in the newly created list with different values in the Percent field](../../../images/ext-field-create-items-to-list.png)

8. Move back to Visual Studio Code and open **serve.json** file from **config** folder. Update **InternalFieldName** attribute as **Percent** based on the field name, which we just created. Update also **pageUrl** attribute to match an URL of the list which we just created in preview steps. After edits your server.json should look somewhat following.

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

9. Compile your code and host the compiled files from the local machine by running this command:
    
    ```
    gulp serve
    ```
    When the code compiles without errors, it serves the resulting manifest from https://localhost:4321.

    ![gulp serve](../../../images/ext-field-gulp-serve.png)

    This will also start your default browser within the URL defined in **server.json** file. Notice that at least in Windows, you can control which browser window is used by activating the preferred one before executing this command.
    
10. Accept the loading of debug manifests by selecting **Load debug scripts** when prompted.

    ![Accept loading debug scripts](../../../images/ext-field-accept-debug-scripts.png)

    Notice how the Percent values are now presented with an additional prefix string as `Value: `, which is provided as a property for the Field Customizer.

    ![List view with field customizer rendered for percent field](../../../images/ext-field-default-customizer-output.png)

## Enhance the Field Customizer rendering

Now that we have successfully tested the out-of-the-box starting point of the Field Customizer, let's modify the logic slightly to have a more polished rendering of the field value.

1. Open the **HelloWorld.module.scss** file in the **src\extensions\helloWorld** folder, and update the styling definition as follows.

    ```
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
    
2. Open the **HelloWorldFieldCustomizer.ts** file in the **src\extensions\helloWorld** folder, and update the **onRenderCell** method as follows.

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

3. In your console window, ensure that you do not have any exceptions. If you do not have the solution running in *localhost*, execute the following command:

    ```
    gulp serve
    ```

4. In your previously created list, refresh the browser window with the debugging query parameters or restart the browser with `gulp serve`. 

5. Accept the loading of debug manifests by selecting **Load debug scripts** when prompted.

    ![Accept loading debug scripts](../../../images/ext-field-accept-debug-scripts.png)

    <br/>

    Note how we changed the field rendering style completely. The field value is indicated by using a graphical representation of the value.

    ![Graphical Representation of Percent](../../../images/ext-field-percent-field-graphic.png)

## Add the field definition to the solution package for deployment

Now that we have tested our solution properly in debug mode, we can package this to be deployed automatically as part of the solution package deployed to the sites.

1. Install the solution package to the site where it should be installed, so that the extension manifest is white listed for execution.

2. Associate the Field Customizer to an existing field in the site. You can do this programmatically (CSOM/REST) or by using the feature framework inside of the SharePoint Framework solution package. In this tutorial, we will be using feature framework xml files. You need to associate the following properties in the `SPField` object at the site or list level.
    - **ClientSiteComponentId** is the identifier (GUID) of the Field Customizer, which has been installed in the app catalog.
    - **ClientSideComponentProperties** is an optional parameter, which can be used to provide properties for the Field Customizer instance.

    Note that you can control the requirement to add a solution containing your extension to the site by using the `skipFeatureDeployment` setting in **package-solution.json**. Even though you would not require the solution to be installed on the site, you'd need to associate **ClientSideComponentId** to specific objects for the extension to be visible.

    You can use for example [Set-PnPField cmdlet](https://docs.microsoft.com/en-us/powershell/module/sharepoint-pnp/set-pnpfield?view=sharepoint-ps) from PnP PowerShell cmdlets to programatically associate an extension to existing fields in your sites.

    In the following steps, we review the default field definition, which was automatically created and will then be used to automatically deploy needed configurations when the solution package is installed on a site.

3. Return to your solution in Visual Studio Code (or to your preferred editor).

4. Extend the **sharepoint** folder and **assets** sub folder in the root of the solution to see the existing **elements.xml** file. 
    
    ![assets folder in solution structure](../../../images/ext-field-assets-folder.png)

<br/>

### Review the elements.xml file 

Open the **elements.xml** file inside the **sharepoint\assets** folder.

Note the following XML structure in **elements.xml**.  The **ClientSideComponentId** property has been automatically updated to the unique ID of your Field Customizer available in the **HelloWorldFieldCustomizer.manifest.json** file in the **src\extensions\helloWorld** folder. You will need to adjust this file matching on your field type and details. 

> [!NOTE]
> You can find more details on supported xml structures for SharePoint Feature Framework from the [SharePoint schema reference](https://docs.microsoft.com/en-us/sharepoint/dev/schema/field-definitions).

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

<br/>

### Ensure that definitions are taken into account within the build pipeline

Open **package-solution.json** from the **config** folder. The **package-solution.json** file defines the package metadata as shown in the following code. To ensure that the **element.xml** file is taken into account while the solution is being packaged, default scaffolding added needed configuration to define a feature framework feature definition for the solution package.

Notice also that by default **includeClientSideAssets** attribute is set to true, meaning that the JavaScript assets are automatically packaged inside of the **sppkg** file.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
  "solution": {
    "name": "field-extension-client-side-solution",
    "id": "80c04d1b-dca7-4d0a-86c0-9aedf904704f",
    "version": "1.0.0.0",
    "includeClientSideAssets": true,
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

Now you are ready to deploy the solution to a SharePoint site and get the field association automatically included in a field. We will use the `ship` option with this packaging, so that all assets are packaged automatically inside of the solution package.

1. In the console window, enter the following command to package your client-side solution that contains the extension so that we get the basic structure ready for packaging:

    ```
    gulp bundle --ship
    ```

2. Execute the following command so that the solution package is created:

    ```
    gulp package-solution --ship
    ```

    The command creates the package in the **sharepoint/solution** folder:

    ```
    field-extension.sppkg
    ```

3. You now need to deploy the package that was generated to the app catalog. To do this, go to your tenant's **app catalog** and open the **Apps for SharePoint** library.

4. Upload or drag-and-drop the `field-extension.sppkg` located in the **sharepoint/solution** folder to the app catalog. 

    Notice how SharePoint displays the trust dialog and asks you to trust the client-side solution with *SharePoint Online* as the domain. Your assets will be automatically hosted either from app catalog URL or from Office 365 public CDN, depending on your tenant settings.
    
5. Select the **Deploy** button.

    ![Deploy Dialog](../../../images/ext-field-sppkg-deploy-trust.png)

6. Go to the site where you want to test SharePoint asset provisioning. This could be any site collection in the tenant where you deployed this solution package.

7. Select the gears icon on the top navigation bar on the right, and then select **Add an app** to go to your Apps page.

8. In the **Search** box, enter **field**, and then select Enter to filter your apps.

    ![installing field customizer to site](../../../images/ext-field-install-solution-to-site.png)

9. Select the **field-extension-client-side-solution** app to install the solution on the site. After the installation is complete, refresh the page by selecting F5.

10. When the solution has been installed, select **New** from the toolbar on the **Site Contents** page, and then select **List**.

    ![Creating a new list](../../../images/ext-field-create-new-list.png)

11. Create a list named **Invoices**.

12. When the new list is created, on the **Site Contents** page, select **Settings** from the menu of the newly created list.

    ![List settings for the new list](../../../images/ext-field-list-settings.png)

13. Under **Columns**, select **Add from existing site columns**.

14. Under the **SPFx Columns** group, select the **Percentage** field that was provisioned from the solution package, and then select **OK**.

    ![Adding Percentage field to list](../../../images/ext-field-add-field-to-list.png)

15. Go to the newly created **Invoices** list. Add a few items to the list with different values in the Percentage column to determine how the field is rendering without the debug query parameters.

![Field Rendering without Debug Query Parameters](../../../images/ext-field-render-field-without-debug.png)

The process for publishing your app is identical among the different extension types.

> [!NOTE]
> This was relatively simple field customizer with functionality, which could have been also achieved with [column formatting capability](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting). Column formatting does not however supporting actual custom script. Field customizers cannot be also be modified by end users from the user interface, which enables also different use cases.

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, please report that to SharePoint engineering by using the [issue list at the sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues) or by adding a comment to this article. Thanks for your input in advance.

## See also

- [Build your first ListView Command Set extension](./building-simple-cmdset-with-dialog-api.md)
- [Overview of SharePoint Framework Extensions](../overview-extensions.md)
