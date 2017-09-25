# Build your first Field Customizer extension

Extensions are client-side components that run inside the context of a SharePoint page. Extensions can be deployed to SharePoint Online and you can use modern JavaScript tools and libraries to build them.

You can also follow these steps by watching the video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=fijOzUmlXrY&list=PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV). 

<a href="https://www.youtube.com/watch?v=4wgZy5tm4yo">
<img src="../../../images/spfx-ext-youtube-tutorialfield.png" alt="Screenshot of the YouTube video player for this tutorial" />
</a>

## Create an extension project
Create a new project directory in your favorite location.

```
md field-extension
```

Go to the project directory.

```
cd field-extension
```

Create a new HelloWorld extension by running the Yeoman SharePoint Generator.

```
yo @microsoft/sharepoint
```

When prompted:

* Accept the default value of **field-extension** as your solution name and press **Enter**.
* Choose **SharePoint Online only (latest)**, and press **Enter**.
* Choose **Use the current folder** and press **Enter**.
* Choose **N** to require extension to be installed on each site explicitly when it's being used.
* Choose **Extension** as the client-side component type to be created. 
* Choose **Field Customizer** as the extension type to be created.

The next set of prompts will ask for specific information about your extension:

* Accept the default value of **HelloWorld** as your extension name and press **Enter**.
* Accept the default value of **HelloWorld description** as your extension description and press **Enter**.
* Accept the default **No JavaScript Framework** as the framework selection and press **Enter** 

![Yeoman SharePoint generator prompts to create an extension solution](../../../images/ext-field-yeoman-prompts.png)

At this point, Yeoman will install the required dependencies and scaffold the solution files along with the **HelloWorld** extension. This might take a few minutes. 

When the scaffold is complete, you should see the following message indicating a successful scaffold:

![SharePoint client-side solution scaffolded successfully](../../../images/ext-field-yeoman-complete.png)

For information about troubleshooting any errors, see [Known issues](../../known-issues-and-common-questions.md).

Once the solution scaffolding is completed, type the following into the console to start Visual Studio Code.

```
code .
```

> Notice that because the SharePoint client-side solution is HTML/TypeScript based, you can use any code editor that supports client-side development to build your extension.

Notice how the default solution structure is like the solution structure of client-side web parts. This is the basic SharePoint Framework solution structure with similar configuration options across all solution types.

![SharePoint Framework solution opened after initial scaffolding](../../../images/ext-field-vscode-solution-structure.png)

Open **HelloWorldFieldCustomizer.manifest.json** at the **src\extensions\helloWorld** folder.

This file defines your extension type and a unique identifier **“id”** for your extension. You’ll need this unique identifier later when debugging and deploying your extension to SharePoint.

![Application customizer manifest json content](../../../images/ext-field-vscode-manifest.png)

## Coding your Field Customizer 
Open the **HelloWorldFieldCustomizer.ts** file in the **src\extensions\helloWorld** folder.

Notice that the base class for the Field Customizer is imported from the **sp-application-base** package, which contains SharePoint framework code required by the Field Customizer.

```ts
import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';
```

The logic for your Field Customizer is contained in the **OnInit()**, **onRenderCell()**, and **onDisposeCell()** methods.

* **onInit():**  this is where you should perform any setup needed for your extension. This event occurs after `this.context` and `this.properties` are assigned, but before the page DOM is ready. As with web parts, `onInit()` returns a promise that you can use to perform asynchronous operations; `onRenderCell()` will not be called until your promise has resolved. If you don’t need that, simply return `Promise.resolve<void>();`.
* **onRenderCell():**  This event occurs when each cell is rendered. It provides an `event.domElement` HTML element where your code can write its content.
* **onDisposeCell():** This event occurs immediately before the `event.cellDiv` is deleted. It can be used to free any resources that were allocated during field rendering. For example, if `onRenderCell()` mounted a React element, `onDisposeCell()` must be used to free it, otherwise a resource leak would occur. 

Below are the contents of **onRenderCell()** and **onDisposeCell()** in the default solution:

```ts
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

## Debugging your Field Customizer using gulp serve and query string parameters
SharePoint Framework extensions cannot currently be tested using the local workbench, so you'll need to test and develop them directly against a live SharePoint Online site. You do not however need to deploy your customization to the app catalog to do this, which keeps the debugging experience simple and efficient.

First, compile your code and host the compiled files from the local machine by running this command:
```
gulp serve --nobrowser
```

Notice that we used the `--nobrowser` option, since there's no value in launching the local workbench since you currently cannot debug extensions locally.

Once it compiles the code without errors, it will serve the resulting manifest from https://localhost:4321.

![gulp serve](../../../images/ext-field-gulp-serve.png)

To test your extension, navigate to a site in your SharePoint Online tenant.

Move to the **Site Contents** page.

Click **New** from the toolbar and choose **List**:

![Creating a new list](../../../images/ext-field-create-new-list.png)

Create a new list named *Orders* and click **Create**:

![Creating a new list with name of Orders](../../../images/ext-field-create-new-list-order.png)

Click the **plus** sign and choose **Number** to create a new Number field for the list:

![Creating a new Number field](../../../images/ext-field-new-number-field.png)

Set name of the field to **Percent** and click **Save**:

![Creating a new field called Percent](../../../images/ext-field-new-number-field-percent.png)

Add a few items with different numbers in the percent field. We'll modify the rendering later in this tutorial, so the different numbers will be presented differently based on your custom implementation.

![Creating items in the newly created list with different values in the Percent field](../../../images/ext-field-create-items-to-list.png)

Since our Field Customizer is still hosted in localhost and is running, we can use specific debug query parameters to execute the code in the newly created list.

Append the following query string parameters to the URL. Notice that you will need to update the id to match your own extension identifier available from the **HelloWorldFieldCustomizer.manifest.json** file:

```
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&fieldCustomizers={"Percent":{"id":"45a1d299-990d-4917-ba62-7cb67158be16","properties":{"sampleText":"Hello!"}}}
```
More detail about the URL query parameters:

* **loadSPFX=true:**  ensures that the SharePoint Framework is loaded on the page. For performance reasons, the framework is not normally loaded unless at least one extension is registered. Since no components are registered yet, we must explicitly load the framework.
* **debugManifestsFile:**  specifies that we want to load SPFx components that are being locally served. Normally the loader only looks for components in the App Catalog (for your deployed solution) and the SharePoint manifest server (for the system libraries).
* **fieldCustomizers**:  Indicates which fields in your list should have their rendering controlled by the Field Customizer. The ID parameter specifies the GUID of the extension that should be used to control the rendering of the field. The properties parameter is an optional text string containing a JSON object that will be deserialized into `this.properties` for your extension.
    * **Key:** use the internal name of the field as the key
    * **Id:** the guid of the field customizer extension associated with this field
    * **Properties:** property values defined in the extension. In this example, *‘sampleText’* is a property defined by the extension

The full URL should look similar to the following, depending on your tenant URL and the location of the newly created list:

```
contoso.sharepoint.com/Lists/Orders/AllItems.aspx?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&fieldCustomizers={"Percent":{"id":"45a1d299-990d-4917-ba62-7cb67158be16","properties":{"sampleText":"Hello!"}}}
```

Accept the loading of Debug Manifests, by clicking **Load debug scripts** when prompted:

![Accept loading debug scripts](../../../images/ext-field-accept-debug-scripts.png)

Notice how the Percent values are now presented with additional prefix string as 'Hello!: ', which is provided as a property for the field customizer:

![List view with field customizer rendered for percent field](../../../images/ext-field-default-customizer-output.png)

## Enhancing the Field Customizer rendering
Now that we have successfully tested the out of the box starting point of the Field Customizer, let's modify the logic slightly to have a more polished rendering of the field value. 

Open the **HelloWorld.module.scss** file in the **src\extensions\helloWorld** folder and update the styling definition as follows.

```
.HelloWorld {
  .cell {
    display: 'inline-block';
  }
  .full {
    background-color: '#e5e5e5';
    width: '100px';
  }
}

```
Open the **HelloWorldFieldCustomizer.ts** file in the **src\extensions\helloWorld** folder and update the **onRednerCell** method as follows.

```ts
  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {

    event.domElement.classList.add(styles.cell);
    event.domElement.innerHTML = `
                <div class='${styles.full}'>
                  <div style='width: ${event.fieldValue}px; background:#0094ff; color:#c0c0c0'>
                    &nbsp; ${event.fieldValue}
                  </div>
                </div>`;
  }
```

Switch back to your console window and ensure that you do not have any exceptions. If you do not have the solution running in *localhost*, execute the following command:

```
gulp serve --nobrowser
```

Move back to your previously created list and use the same query parameter as used previously with the Field being 'Percent' and the Id being updated to your extension identifier available from the **HelloWorldFieldCustomizer.manifest.json** file.

Accept the loading of Debug Manifests, by clicking **Load debug scripts** when prompted.

![Accept loading debug scripts](../../../images/ext-field-accept-debug-scripts.png)

Notice how we have changed the field rendering style completely. The field value is indicated using a graphical representation of the value.

![Graphical Representation of Percent](../../../images/ext-field-percent-field-graphic.png)

## Add the field definition to the solution package for deployment
Now that we have tested our solution properly in debug mode, we can package this to be deployed automatically as part of the solution package deployed to the sites. There are few things to take care of here.

1. Install the solution package to the site where it should be installed, so that the extension manifest is being white listed for execution
2. Associate the Field Customizer to an existing field in the site. This can be performed programmatically (CSOM/REST) or by using the feature framework inside of the SharePoint Framework solution package. You'll need to associate the following properties in the *SPField* object at the site or list level.
    * **ClientSiteComponentId:** This is the identifier (GUID) of the Field Customizer, which has been installed in the app catalog. 
    * **ClientSideComponentProperties:** This is an optional parameter, which can be used to provide properties for the Field Customizer instance.

> Notice, you can control the requirement to add a solution containing your extension to the site by using `skipFeatureDeployment` setting in **package-solution.json**. Event though you would not require solution to be installed on the site, you'd need to associate **ClientSideComponentId** to specific objects for the extension to be visible.

In the following steps, we'll review default field definition, which was automatically created and will then be used to automatically deploy needed needed configurations when the solution package is installed on a site.

Return to your solution in Visual Studio Code (or to your preferred editor).

Extend **sharepoint** folder and **assets** sub folder in the root of the solution to see existing **elements.xml** file. 

![assets folder in solution structure](../../../images/ext-field-assets-folder.png)

### Review elements.xml file 
Open **elements.xml** file inside the **sharepoint\assets** folder.

Notice the following xml structure into **elements.xml**.  **ClientSideComponentId** property has been automatically updated to the unique Id of your Field Customizer available in the **HelloWorldFieldCustomizer.manifest.json** file in the **src\extensions\helloWorld** folder.

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

Open **package-solution.json** from the **config** folder. The **package-solution.json** file defines the package metadata as shown in the following code:

```json
{
  "solution": {
    "name": "field-extension-client-side-solution",
    "id": "11cd343e-1ce6-462c-8acb-929804d0c3b2",
    "version": "1.0.0.0",
    "skipFeatureDeployment": false,
    "features": [{
      "title": "Field Extension - Deployment of custom field.",
      "description": "Deploys a custom field with ClientSideComponentId association",
      "id": "123fe847-ced2-3036-b564-8dad5c6c6e83",
      "version": "1.0.0.0",
      "assets": {        
        "elementManifests": [
          "elements.xml"
        ]
      }
    }]
  },
  "paths": {
    "zippedPackage": "solution/field-extension.sppkg"
  }
}

```

To ensure that **element.xml** file is taken into account while the solution is being packaged, default scaffolding has added needed configuration to define a Feature Framework feature definition for the solution package.


## Deploy the field to SharePoint Online and host JavaScript from local host
Now you are ready to deploy the solution to a SharePoint site and to get the field association automatically included in a field. 

In the console window, enter the following command to package your client-side solution that contains the extension, so that we get the basic structure ready for packaging:

```
gulp bundle
```

Next, execute the following command so that the solution package is created:

```
gulp package-solution
```

The command will create the package in the **sharepoint/solution** folder:

```
field-extension.sppkg
```

Next you need to deploy the package that was generated to the App Catalog.

Go to your tenant's **App Catalog** and open the **Apps for SharePoint** library.

Upload or drag and drop the `field-extension.sppkg` located in the **sharepoint/solution** folder to the App Catalog. SharePoint will display a dialog and ask you to trust the client-side solution.

Notice that we did not update the URLs for hosting the solution for this deployment, so the URL is still pointing to https://localhost:4321. Click the **Deploy** button.

![Deploy Dialog](../../../images/ext-field-sppkg-deploy-trust.png)

Go to the site where you want to test SharePoint asset provisioning. This could be any site collection in the tenant where you deployed this solution package.

Choose the gears icon on the top navigation bar on the right and choose **Add an app** to go to your Apps page.

In the **Search** box, enter '**field**' and press *Enter* to filter your apps.

![installing field customizer to site](../../../images/ext-field-install-solution-to-site.png)

Choose the **field-extension-client-side-solution** app to install the solution on the site. Once the installation is completed, refresh the page by pressing **F5**.

When the solution has been installed, Click **New** from the toolbar in **Site Contents** page and choose **List**:

![Creating a new list](../../../images/ext-field-create-new-list.png)

Create a list named **Invoices**:

When the new list has been created, move back to the **Site Contents** page and choose **Settings** from the context menu of the just created list:

![List settings for the new list](../../../images/ext-field-list-settings.png)

Choose **Add from existing site columns** under the **Columns** section:

Choose the **Percentage** field which was provisioned from the solution package, under the **SPFx Columns** group:

![Adding Percentage field to list](../../../images/ext-field-add-field-to-list.png)

Click **OK**.

Move back to your console and ensure that the solution is running. If it's not running, execute the following command in the solution folder:

```
gulp serve --nobrowser
```
Navigate to the newly created **Invoices** list and add a few new items to the list with different values in the Percentage column to see how the field is being rendered without the Debug query parameters.

![Field Rendering without Debug Query Parameters](../../../images/ext-field-render-field-without-debug.png)

In this case, we continued to host the JavaScript from the localhost, but you could just as well relocate the assets to any CDN and update the URL to enable the loading of the JavaScript assets outside of the localhost as well.

The process for publishing your app is identical among the different extension types. You can follow the following publishing steps to update the assets to be hosted from a CDN.

* [Deploy extension to Office 365 CDN](./hosting-extension-from-office365-cdn.md).
