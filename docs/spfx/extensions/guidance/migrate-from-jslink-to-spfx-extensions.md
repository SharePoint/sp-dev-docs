---
title: Tutorial - Migrating from JSLink to SharePoint Framework Extensions
description: Migrate from old "classic" customizations to the new model based on SharePoint Framework Extensions.
ms.date: 01/11/2018
ms.prod: sharepoint
---

# Migrating from JSLink to SharePoint Framework Extensions

Since Microsoft SharePoint 2013, most of the enterprise solutions built on top of Office 365 and SharePoint Online leveraged the `JSLink` property of fields and list views to customize the rendering of fields. However, within the new "modern" UI of SharePoint Online, most of those customizations are no longer available. Fortunately, with the new SharePoint Framework Extensions, you can now provide almost the same functionality in the "modern" UI. 

In this tutorial you learn how to migrate from the old "classic" customizations to the new model based on SharePoint Framework Extensions.

> [!NOTE]
> For more information about how to build SharePoint Framework Extensions, see [Overview of SharePoint Framework Extensions](../overview-extensions.md).

First, let's introduce the available options when developing SharePoint Framework Extensions:

* **Application Customizer**. Extend the native "modern" UI of SharePoint Online by adding custom HTML elements and client-side code to pre-defined placeholders of "modern" pages. At the time of this writing, the available placeholders are the header and the footer of every "modern" page.
* **Command Set**. Add custom ECB menu items or custom buttons to the command bar of a list view for a list or a library. You can associate any JavaScript (TypeScript) action to these commands.
* **Field Customizer**. Customize the rendering of a field in a list view by using custom HTML elements and client-side code.

The most useful option in our context is the Field Customizer extension.

Assume that you are in SharePoint Online, and you have a custom list with a custom field called "Color", which is of type **Choice** and which can assume the following values: _Red_, _Green_, _Blue_, _Yellow_. Assume that you have a custom value for the `JSLink` property of the list view rendering web part of the custom list. 

In the following code snippet, you can see the JavaScript code referenced by the `JSLink` property (**customColorRendering.js**).

```JavaScript
// Define a namespace for the custom rendering code
var customJSLinkRendering = customJSLinkRendering || {}; 

// Define a function that declare the custom rendering rules for the target list view
customJSLinkRendering.CustomizeFieldRendering = function () {  

    // Define a custom object to configure the rendering template overrides
    var customRenderingOverride = {};
    customRenderingOverride.Templates = {};
    customRenderingOverride.Templates.Fields = 
    { 
        // Declare the custom rendering function for the 'View' of field 'Color'
        'Color': 
        { 
            'View': customJSLinkRendering.RenderColorField 
        } 
    }; 

    // Register the custom rendering template
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride); 
}; 

// Declare the custom rendering function for the 'View' of field 'Color'
customJSLinkRendering.RenderColorField = function (context)  
{ 
    var colorField = context.CurrentItem.Color; 

    // Declare a local variable to hold the output color
    var color = '';

    // Evaluate the values of the 'Color' field and render it accordingly
    switch (colorField)
    {
        case 'Red':
            color = 'red';
            break;
        case 'Green':
            color = 'green';
            break;
        case 'Blue':
            color = 'blue';
            break;
        case 'Yellow':
            color = 'yellow';
            break;
        default:
            color = 'white';
            break;
    }

    // Render the output for the 'Color' field
    return "<div style='float: left; width: 20px; height: 20px; margin: 5px; border: 1px solid rgba(0,0,0,.2);background:" + color + "' />"; 
}; 

// Invoke the custom rendering function
customJSLinkRendering.CustomizeFieldRendering();
```

<br/>

Moreover, in the following screenshot you can see how the `JSLink` property is configured in the list view web part.

![The configuration of the JSLink property in the list view web part](../../../images/jslink-field-configuration.png)

<br/>

If you uploaded the JavaScript file into the **Site Assets** library, the value for the `JSLink` property can be `"~site/SiteAssets/customColorRendering.js"`.

For the sake of completeness, you can see how the custom rendering of the list works.

![The custom rendering for the "Color" field of the custom list](../../../images/jslink-field-output.png)

As you can see, "Color" fields render a colored box filled with the color selected at the item level.

> [!NOTE]
> To provision this kind of solution in a "classic" site you can eventually use a PnP Provisioning Template, which can provision both the list with the custom field, and the `JSLink` property at once.

To migrate the previous solution to the SharePoint Framework, see the following steps.

> [!NOTE]
> Before following the steps in this article, be sure to [Set up your development environment](../../set-up-your-development-environment.md).

## Create a new SharePoint Framework solution

1. Open the command line tool of your choice (for example, PowerShell, CMD.EXE, Cmder). Create a new folder for the solution named **spfx-custom-field-extension**, and create a new SharePoint Framework solution by running the Yeoman generator with the following command:

    ```
    yo @microsoft/sharepoint
    ```

2. When prompted by the tool, provide the following answers:
    
    * Accept the default name **spfx-custom-field-extension** for your solution, and select Enter.
    * Select **SharePoint Online only (latest)**, and select Enter.
    * Select **Use the current folder**, and select Enter.
    * Select **N** to require the extension to be installed on each site explicitly when it's being used.
    * Select **Extension** as the client-side component type to be created.
    * Select **Field Customizer** as the extension type to be created.
    * Provide **CustomColorField** as the name for your Field Customizer.
    * Select to not use any specific JavaScript framework by selecting the **No JavaScript framework** option.

    ![The Yeoman generator UI while creating the custom footer solution](../../../images/spfx-custom-field-extension-yeoman.png)

    At this point, Yeoman installs the required dependencies and scaffolds the solution files and folders along with the **CustomColorField** extension. This might take a few minutes.

    When the scaffold is complete, you should see the following message indicating a successful scaffold:

    ![The scaffolding completed](../../../images/spfx-custom-field-extension-yeoman-completed.png)

3. To lock down the version of the project dependencies, run the following command:

    ```
    npm shrinkwrap
    ```

4. Start Visual Studio Code (or the code editor of your choice) and start developing the solution. To start Visual Studio Code, you can execute the following statement.

    ```
    code .
    ```

## Define the new Field Customizer with JavaScript

To reproduce the same behavior of the `JSLink` custom field rendering, you need to implement the same logic by using client-side code within the new SharePoint Framework solution. To accomplish this task, complete the following steps.

1. Open the file **CustomColorFieldFieldCustomizer.manifest.json** in the **src/extensions/customColorField** folder. Copy the value of the `id` property and store it in a safe place because you need it later.

2. Open the **CustomColorFieldFieldCustomizer.ts** file in the **src/extensions/customColorField** folder, and edit the content according to the following code snippet:

    ``` TypeScript
    import { Log } from '@microsoft/sp-core-library';
    import { override } from '@microsoft/decorators';
    import {
    BaseFieldCustomizer,
    IFieldCustomizerCellEventParameters
    } from '@microsoft/sp-listview-extensibility';

    import * as strings from 'CustomColorFieldFieldCustomizerStrings';
    import styles from './CustomColorFieldFieldCustomizer.module.scss';

    /**
    * If your field customizer uses the ClientSideComponentProperties JSON input,
    * it will be deserialized into the BaseExtension.properties object.
    * You can define an interface to describe it.
    */
    export interface ICustomColorFieldFieldCustomizerProperties {
    // This is an example; replace with your own property
    sampleText?: string;
    }

    const LOG_SOURCE: string = 'CustomColorFieldFieldCustomizer';

    export default class CustomColorFieldFieldCustomizer
    extends BaseFieldCustomizer<ICustomColorFieldFieldCustomizerProperties> {

    @override
    public onInit(): Promise<void> {
        // Add your custom initialization to this method.  The framework will wait
        // for the returned promise to resolve before firing any BaseFieldCustomizer events.
        Log.info(LOG_SOURCE, 'Activated CustomColorFieldFieldCustomizer with properties:');
        Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
        Log.info(LOG_SOURCE, `The following string should be equal: "CustomColorFieldFieldCustomizer" and "${strings.Title}"`);
        return Promise.resolve();
    }

    @override
    public onRenderCell(event: IFieldCustomizerCellEventParameters): void {

        var colorField = event.fieldValue; 
        
        // Declare a local variable to hold the output color
        var color = '';

        // Evaluate the values of the 'Color' field and render it accordingly
        switch (colorField)
        {
            case 'Red':
                color = 'red';
                break;
            case 'Green':
                color = 'green';
                break;
            case 'Blue':
                color = 'blue';
                break;
            case 'Yellow':
                color = 'yellow';
                break;
            default:
                color = 'white';
                break;
        }
        
        // Render the output for the 'Color' field
        event.domElement.innerHTML = "<div style='float: left; width: 20px; height: 20px; margin: 5px; border: 1px solid rgba(0,0,0,.2);background:" + color + "' />"; 
    }

    @override
    public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
        // This method should be used to free any resources that were allocated during rendering.
        // For example, if your onRenderCell() called ReactDOM.render(), then you should
        // call ReactDOM.unmountComponentAtNode() here.
        super.onDisposeCell(event);
    }
    }
    ```

    As you can see, the content of the method `onRenderCell` is almost the same as the previous `RenderColorField` method in the `JSLink` implementation. The only differences are:

    - To retrieve the current field value, you need to read the `event.fieldValue` property of the input argument of the `onRenderCell` method.
    - To return the custom HTML code to render the field, you need to assign a value to the `innerHTML` property of the `event.domElement` object, which represents the output HTML container of the field rendering.

    Aside from these small changes, you can reuse almost the same JavaScript code as before.

    In the following figure, you can see the resulting output.

    ![The Field Customizer rendered in "modern" list](../../../images/spfx-custom-field-extension-output.png)

## Test the solution in debug mode

1. Go back to the console window and run the following command to build the solution and run the local Node.js server to host it.

    ```
    gulp serve --nobrowser
    ```

2. Open your favorite browser, and go to a "modern" list, which has a custom field with the name **Color** and the type **Choice** with the same value options as before (Red, Green, Blue, Yellow). You can eventually use the list you created in the "classic" site, just viewing it with the new "modern" experience. Now, append the following query string parameters to the **AllItems.aspx** page URL.

    ```
    ?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&fieldCustomizers={"Color":{"id":"c3070978-d85e-4298-8758-70b5b5933076"}}
    ```

    In this query string, replace the GUID with the `id` value you saved from the **CustomColorFieldFieldCustomizer.manifest.json** file, and the **Color** object name refers to the name of the field to customize. If you like, you can also provide a custom configuration object, serialized in JSON format, as an additional parameter for the field customizer construction.

    Notice that when executing the page request, you are prompted with a warning message box with the title "Allow debug scripts?", which asks your consent to run code from localhost for security reasons. Of course, if you want to locally debug and test the solution, you have to allow it to "Load debug scripts."

## Define the new Field Customizer with TypeScript

You are now ready to replace the JavaScript code with TypeScript to benefit from the fully typed approach of TypeScript.

1. Open the file **CustomColorFieldFieldCustomizer.module.scss** in the **src/extensions/customColorField** folder. This file, which is a Sass CSS, represents the UI style for the field customizer. Replace the content of the SCSS file with the following.

    ``` SCSS
    .CustomColorField {
    .cell {
        float: left;
        width: 20px; 
        height: 20px; 
        margin: 5px; 
        border: 1px solid rgba(0,0,0,.2);
    }

    .cellRed {
        background: red;
    }

    .cellGreen {
        background: green;
    }

    .cellBlue {
        background: blue;
    }

    .cellYellow {
        background: yellow;
    }

    .cellWhite {
        background: white;
    }
    }
    ```

2. Replace the implementation of the `onRenderCell` method with the following code excerpt.

    ``` TypeScript
    @override
    public onRenderCell(event: IFieldCustomizerCellEventParameters): void {

    // Read the current field value
    let colorField: String = event.fieldValue; 

    // Add the main style to the field container element
    event.domElement.classList.add(styles.CustomColorField);

    // Get a reference to the output HTML
    let fieldHtml: HTMLDivElement = event.domElement.firstChild as HTMLDivElement;

    // Add the standard style
    fieldHtml.classList.add(styles.cell);

    // Add the colored style
    switch(colorField)
    {
        case "Red":
        fieldHtml.classList.add(styles.cellRed);
        break;
        case "Green":
        fieldHtml.classList.add(styles.cellGreen);
        break;
        case "Blue":
        fieldHtml.classList.add(styles.cellBlue);
        break;
        case "Yellow":
        fieldHtml.classList.add(styles.cellYellow);
        break;
        default:
        fieldHtml.classList.add(styles.cellWhite);
        break;
    }
    }
    ```

    Notice that the new method implementation uses a fully typed approach, and assigns the `cell` CSS class to the `DIV` element child of the current field element, together with another custom CSS class to define the target color of the `DIV` based on the currently selected value for the field.

3. Run the Field Customizer one more time in debug mode and view the results.

## Package and host the solution

If you are happy with the result, you are now ready to package the solution and host it in a real hosting infrastructure.
Before building the bundle and the package, you need to declare an XML Feature Framework file to provision the extension.

### Review Feature Framework elements

1. In the code editor, open the **/sharepoint/assets** sub-folder of the solution folder and edit the **elements.xml** file. In the following code excerpt, you can see how the file should look.

    ```XML
    <?xml version="1.0" encoding="utf-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
        <Field ID="{40475661-efaf-447a-a220-c992b20ec1c3}"
                Name="SPFxColor"
                DisplayName="Color"
                Title="Color"
                Type="Choice"
                Required="FALSE"
                Group="SPFx Columns"
                ClientSideComponentId="c3070978-d85e-4298-8758-70b5b5933076">
        </Field>
    </Elements>
    ```

    As you can see, it reminds us of a SharePoint Feature Framework file, but it defines a custom `Field` element with a field type `Choice`, which uses the `ClientSideComponentId` attribute to reference the `id` of the Field Customizer, and there could be a `ClientSideComponentProperties` attribute to configure the custom configuration properties required by the extension.

2. Open the **package-solution.json** file in the **/config** folder of the solution. Within the file, you can see that there is a reference to the **elements.xml** file in the `assets` section.

    ```JSON
    {
    "$schema": "https://dev.office.com/json-schemas/spfx-build/package-solution.schema.json",
    "solution": {
        "name": "spfx-custom-field-extension-client-side-solution",
        "id": "ab0fbbf8-01ba-4633-8498-46cfd5652619",
        "version": "1.0.0.0",
        "features": [
        {
            "title": "Application Extension - Deployment of custom action.",
            "description": "Deploys a custom action with ClientSideComponentId association",
            "id": "090dc976-878d-44fe-8f8e-ac603d094aa1",
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
        "zippedPackage": "solution/spfx-custom-field-extension.sppkg"
    }
    }
    ```

### Enable the CDN in your Office 365 tenant

Now you need to host the extension in a hosting environment. Office 365 CDN is the easiest way to host SharePoint Framework solutions directly from your tenant while still taking advantage of the Content Delivery Network (CDN) service for faster load times of your assets.

1. Download the [SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588) to ensure that you have the latest version.

2. Connect to your SharePoint Online tenant by using PowerShell:
    
    ```powershell
    Connect-SPOService -Url https://[tenant]-admin.sharepoint.com
    ```
    
3. Get the current status of public CDN settings from the tenant level by executing the following commands one-by-one: 
    
    ```powershell
    Get-SPOTenantCdnEnabled -CdnType Public
    Get-SPOTenantCdnOrigins -CdnType Public
    Get-SPOTenantCdnPolicies -CdnType Public
    ```
    
4. Enable public CDN in the tenant:
    
    ```powershell
    Set-SPOTenantCdnEnabled -CdnType Public
    ```
    
    Public CDN has now been enabled in the tenant by using the default file type configuration allowed. This means that the following file type extensions are supported: CSS, EOT, GIF, ICO, JPEG, JPG, JS, MAP, PNG, SVG, TTF, and WOFF.

5. Open up a browser and move to a site collection where you'd like to host your CDN library. This could be any site collection in your tenant. In this tutorial, we create a specific library to act as your CDN library, but you can also use a specific folder in any existing document library as the CDN endpoint.

6. Create a new document library on your site collection called **CDN**, and add a folder named **customcolorfield** to it.
    
7. In the PowerShell console, add a new CDN origin. In this case, we are setting the origin as `*/cdn`, which means that any relative folder with the name of **cdn** acts as a CDN origin.
    
    ```powershell
    Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl */cdn
    ```
    
8. Execute the following command to get the list of CDN origins from your tenant:
    
    ```powershell
    Get-SPOTenantCdnOrigins -CdnType Public
    ```
    
    Note that your newly added origin is listed as a valid CDN origin. Final configuration of the origin takes approximately 15 minutes, so we can continue provisioning the extension, which is hosted from the origin after deployment is completed. 

    ![List of public origins in tenant](../../../images/ext-app-cdn-origins-pending.png)

    When the origin is listed without the `(configuration pending)` text, it is ready to be used in your tenant. This indicates an on-going configuration between SharePoint Online and the CDN system. 

### Update the solution settings and publish it on the CDN

Next, you need to update the solution to use the just created CDN as the hosting enviroment, and you need to publish the solution bundle to the CDN. To accomplish this task, follow these steps.

1. Return to the previously created solution to perform the needed URL updates.
    
2. Update the **write-manifests.json** file (under the **config** folder) as follows to point to your CDN endpoint. Use `publiccdn.sharepointonline.com` as the prefix, and then extend the URL with the actual path of your tenant. The format of the CDN URL is as follows:
    
    ```
    https://publiccdn.sharepointonline.com/[tenant host name]/sites/[site]/[library]/[folder]
    ```
    
    ![Updated write manifest content with path to CDN endpoint](../../../images/spfx-custom-field-extension-manifest.png)

3. Save your changes.

4. Execute the following task to bundle your solution. This executes a release build of your project using the CDN URL specified in the **write-manifests.json** file. The output of this command is located in the **./temp/deploy** folder. These are the files that you need to upload to the SharePoint folder acting as your CDN endpoint. 
    
    ```
    gulp bundle --ship
    ```
    
5. Execute the following task to package your solution. This command creates an **spfx-custom-field-extension.sppkg** package in the **sharepoint/solution** folder and also prepares the assets in the **temp/deploy** folder to be deployed to the CDN.
    
    ```
    gulp package-solution --ship
    ```
    
6. Upload or drag-and-drop the newly created client-side solution package to the App Catalog in your tenant, and then select the **Deploy** button.

    ![App Catalog Trust Dialog with path to CDN endpoint](../../../images/spfx-custom-field-extension-address.png)

7. Upload or drag-and-drop the files in the **temp/deploy** folder to the **CDN/customcolorfield** folder created earlier.

## Install and run the solution

1. Open the browser and navigate to any target "modern" site.

2. Go to the **Site Contents** page and select to add a new **App**.

3. Select to install a new app **From Your Organization** to browse the solutions available in the App Catalog.

4. Select the solution called **spfx-custom-field-extension-client-side-solution** and install it on the target site.

    ![Add an App UI to add the solution to a site](../../../images/spfx-custom-field-extension-add-app.png)

5. After the application installation is completed, create a new custom list, edit the list settings, and add a new column from already existing site columns. Select the group of columns called **SPFx Columns** and add the **Color** field.

    ![The Field Customizer in action](../../../images/spfx-custom-field-extension-add-field.png)

6. Edit the just added field and configure some color values ( such as Red, Green, Blue, Yellow), and then save the field settings.

7. Add some items to the list and see the output in the list view. It should look like the one in the following screenshot.

    ![The Field Customizer in action](../../../images/spfx-custom-field-extension-final-output.png)

Enjoy your new Field Customizer built by using the SharePoint Framework Extensions!

## See also

- [Overview of SharePoint Framework Extensions](../overview-extensions.md)
