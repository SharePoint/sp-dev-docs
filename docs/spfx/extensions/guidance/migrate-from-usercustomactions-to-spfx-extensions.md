---
title: Tutorial - Migrating from UserCustomAction to SharePoint Framework Extensions
description: Migrate from old "classic" customizations to the new model based on SharePoint Framework Extensions.
ms.date: 01/11/2018
ms.prod: sharepoint
---

# Migrating from UserCustomAction to SharePoint Framework Extensions

During the last few years, most of the enterprise solutions built on top of Office 365 and SharePoint Online leveraged the site _CustomAction_ capability of the SharePoint Feature Framework to extend the UI of pages. However, within the new "modern" UI of SharePoint Online, most of those customizations are no longer available. Fortunately, with the new SharePoint Framework Extensions, you can provide similar functionality in the "modern" UI.

In this tutorial, you learn how to migrate from the old "classic" customizations to the new model based on SharePoint Framework Extensions.

> [!NOTE]
> For more information about how to build SharePoint Framework Extensions, see [Overview of SharePoint Framework Extensions](../overview-extensions.md).

First, let's introduce the available options when developing SharePoint Framework Extensions:

* **Application Customizer**. Extend the native "modern" UI of SharePoint Online by adding custom HTML elements and client-side code to pre-defined placeholders of "modern" pages. At the time of this writing, the available placeholders are the header and the footer of every "modern" page.
* **Command Set**. Add custom ECB menu items or custom buttons to the command bar of a list view for a list or a library. You can associate any JavaScript (TypeScript) action to these commands.
* **Field Customizer**. Customize the rendering of a field in a list view by using custom HTML elements and client-side code.

The most useful option in our context is the Application Customizer extension.

Assume that you have a _CustomAction_ in SharePoint Online in order to have a custom footer in all of the site's pages.

In the following code snippet, you can see the XML code defining that _CustomAction_ by using the SharePoint Feature Framework.

```XML
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <CustomAction Id="jQueryCDN"
                Title="jQueryCDN"
                Description="Loads jQuery from the public CDN"
                ScriptSrc="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                Location="ScriptLink"
                Sequence="100" />
  <CustomAction Id="spoCustomBar"
                Title="spoCustomBar"
                Description="Loads a script to rendere a custom footer"
                Location="ScriptLink"
                ScriptSrc="SiteAssets/SPOCustomUI.js"
                Sequence="200" />
</Elements>
```

As you can see, the feature elements file defines a few elements of type _CustomAction_ to include in the pages of the target site: jQuery, loaded through the public CDN, and a custom JavaScript file that renders the custom footer.

For the sake of completeness, you can see the JavaScript code that renders a custom footer, whose menu items are pre-defined in code for the sake of simplicity.

```JavaScript
var SPOCustomUI = SPOCustomUI || {};

SPOCustomUI.setUpCustomFooter = function () {
    if ($("#SPOCustomFooter").length)
        return;

    var footerContainer = $("<div>");
    footerContainer.attr("id", "SPOCustomFooter");

    footerContainer.append("<ul>");

    $("#s4-workspace").append(footerContainer);
}

SPOCustomUI.addCustomFooterText = function (id, text) {
    if ($("#" + id).length)
        return;

    var customElement = $("<div>");
    customElement.attr("id", id);
    customElement.html(text);

    $("#SPOCustomFooter > ul").before(customElement);

    return customElement;
}

SPOCustomUI.addCustomFooterLink = function (id, text, url) {
    if ($("#" + id).length)
        return;

    var customElement = $("<a>");
    customElement.attr("id", id);
    customElement.attr("href", url);
    customElement.html(text);

    $("#SPOCustomFooter > ul").append($("<li>").append(customElement));

    return customElement;
}

SPOCustomUI.loadCSS = function (url) {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = url;
    head.appendChild(style);
}

SPOCustomUI.init = function (whenReadyDoFunc) {
    // avoid executing inside iframes (used by Sharepoint for dialogs)
    if (self !== top) return;

    if (!window.jQuery) {
        // jQuery is needed for Custom Bar to run
        setTimeout(function () { SPOCustomUI.init(whenReadyDoFunc); }, 50);
    } else {
        $(function () {
            SPOCustomUI.setUpCustomFooter();
            whenReadyDoFunc();
        });
    }
}

// The following initializes the custom footer with some fake links
SPOCustomUI.init(function () {

    var currentScriptUrl;

    var currentScript = document.querySelectorAll("script[src*='SPOCustomUI']");
    if (currentScript.length > 0) {
        currentScriptUrl = currentScript[0].src;
    }
    if (currentScriptUrl != undefined) {
        var currentScriptBaseUrl = currentScriptUrl.substring(0, currentScriptUrl.lastIndexOf('/') + 1);
        SPOCustomUI.loadCSS(currentScriptBaseUrl + 'SPOCustomUI.css');
    }

    SPOCustomUI.addCustomFooterText('SPOFooterCopyright', '&copy; 2017, Contoso Inc.');
    SPOCustomUI.addCustomFooterLink('SPOFooterCRMLink', 'CRM', 'CRM.aspx');
    SPOCustomUI.addCustomFooterLink('SPOFooterSearchLink', 'Search Center', 'SearchCenter.aspx');
    SPOCustomUI.addCustomFooterLink('SPOFooterPrivacyLink', 'Privacy Policy', 'Privacy.aspx');
});
```

<br/>

In the following figure you can see the output of the previous custom action, within the home page of a classic site.

![The custom footer in a classic page](../../../images/user-custom-action-footer-sample.png)

<br/>

To migrate the previous solution to the "modern" UI, see the following steps.

> [!NOTE]
> Before following the steps in this article, be sure to [Set up your development environment](../../set-up-your-development-environment.md).

## Create a new SharePoint Framework solution

1. Open the command line tool of your choice (for example, PowerShell, CMD.EXE, Cmder). Create a new folder for the solution named **spfx-react-custom-footer**, and create a new SharePoint Framework solution by running the Yeoman generator with the following command:

    ```
    yo @microsoft/sharepoint
    ```

2. When prompted by the tool, provide the following answers:

    * Accept the default name **spfx-react-custom-footer** for your solution, and select Enter.
    * Select **SharePoint Online only (latest)**, and select Enter.
    * Select **Use the current folder**, and select Enter.
    * Select **N** to require the extension to be installed on each site explicitly when it's being used.
    * Select **Extension** as the client-side component type to be created.
    * Select **Application Customizer** as the extension type to be created.
    * Provide **CustomFooter** as the name for your Application Customizer.

    ![The Yeoman generator UI while creating the custom footer solution](../../../images/spfx-react-custom-footer-yeoman.png)

    At this point, Yeoman installs the required dependencies and scaffolds the solution files and folders along with the **CustomFooter** extension. This might take a few minutes.

    When the scaffold is complete, you should see the following message indicating a successful scaffold:

    ![The scaffolding completed](../../../images/spfx-react-custom-footer-yeoman-completed.png)

3. To lock down the version of the project dependencies, run the following command:

    ```
    npm shrinkwrap
    ```

4. Start Visual Studio Code (or the code editor of your choice) and start developing the solution. To start Visual Studio Code, you can execute the following statement.

    ```
    code .
    ```

## Define the new UI elements

The UI elements of the custom footer are rendered using React and a custom React component. Of course, you can create the UI elements of the sample footer with whatever technology you like. In this tutorial, we use React to leverage the Office UI Fabric components for React.

> [!NOTE]
> For more information about developing solutions with React, see [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html).

1. Open the file **CustomFooterApplicationCustomizer.manifest.json** in the **src/extensions/customFooter** folder. Copy the value of the `id` property and store it in a safe place because you need it later.

2. Open the **CustomFooterApplicationCustomizer.ts** file in the **src/extensions/customFooter** folder, and import the types `PlaceholderContent` and `PlaceholderName` from the package `'@microsoft/sp-application-base'`. At the very beginning of the file, add the import directives for React.

    In the following code excerpt, you can see the imports section of the **CustomFooterApplicationCustomizer.ts** file.

    ```TypeScript
    import * as React from 'react';
    import * as ReactDom from 'react-dom';

    import { override } from '@microsoft/decorators';
    import { Log } from '@microsoft/sp-core-library';
    import {
    BaseApplicationCustomizer,
    PlaceholderContent,
    PlaceholderName
    } from '@microsoft/sp-application-base';
    import { Dialog } from '@microsoft/sp-dialog';

    import * as strings from 'CustomFooterApplicationCustomizerStrings';
    import CustomFooter from './components/CustomFooter';
    ```

3. Locate the definition of the class `CustomFooterApplicationCustomizer` and declare a new private member called `bottomPlaceholder` of type `PlaceholderContent | undefined`. 

4. Within the override of the `onInit` method, invoke a custom function called `renderPlaceHolders`, and define that function.

    In the following code excerpt you can see the implementation of the custom footer Application Customizer class.

    ```TypeScript
    /** A Custom Action which can be run during execution of a Client Side Application */
    export default class CustomFooterApplicationCustomizer
    extends BaseApplicationCustomizer<ICustomFooterApplicationCustomizerProperties> {

    // This private member holds a reference to the page's footer
    private _bottomPlaceholder: PlaceholderContent | undefined;

    @override
    public onInit(): Promise<void> {
        Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

        let message: string = this.properties.testMessage;
        if (!message) {
        message = '(No properties were provided.)';
        }

        // Call render method for rendering the needed html elements
        this._renderPlaceHolders();

        return Promise.resolve();
    }

    private _renderPlaceHolders(): void {

        // Handling the bottom placeholder
        if (!this._bottomPlaceholder) {
        this._bottomPlaceholder =
            this.context.placeholderProvider.tryCreateContent(
            PlaceholderName.Bottom);

        // The extension should not assume that the expected placeholder is available.
        if (!this._bottomPlaceholder) {
            console.error('The expected placeholder (Bottom) was not found.');
            return;
        }

        const element: React.ReactElement<{}> = React.createElement(CustomFooter);
        
        ReactDom.render(element, this._bottomPlaceholder.domElement);
        }
    }
    }
    ```

    The `renderPlaceHolders` method searches for the placeholder of type `Bottom`, and if any, it renders its content. In fact, at the very end of the `renderPlaceHolders` method, the code creates a new instance of a `CustomFooter` React component, and renders it within the placeholder of the pages' bottom (i.e. where the footer should be rendered).

    > [!NOTE]
    > The React component is the replacement in the "modern" UI for the JavaScript file in the "classic" model. Of course, you can render the entire footer by using pure JavaScript code and reusing most of the code that you already have. However, it is better to consider to upgrade the implementation not only from a technology perspective, but also from a code perspective.

5. Add a new folder named **components** within the **src/extensions/customFooter** folder. Create a new file within the new folder, and name it **CustomFooter.tsx**.

    In the following code excerpt, you can see the component source file.

    ```TypeScript
    import * as React from 'react';

    import { CommandButton } from 'office-ui-fabric-react/lib/Button';

    export default class CustomFooter extends React.Component<{}, {}> {

    public render(): React.ReactElement<{}> {

        return (
        <div className={`ms-bgColor-neutralLighter ms-fontColor-white`}>
            <div className={`ms-bgColor-neutralLighter ms-fontColor-white`}>
                <div className={`ms-Grid`}>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                            <CommandButton 
                                data-automation="CopyRight"
                                href={`CRM.aspx`}>&copy; 2017, Contoso Inc.</CommandButton>
                        </div>
                        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                        <CommandButton 
                                data-automation="CRM"
                                iconProps={ { iconName: 'People' } }
                                href={`CRM.aspx`}>CRM</CommandButton>
                        </div>
                        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                        <CommandButton 
                                data-automation="SearchCenter"
                                iconProps={ { iconName: 'Search' } }
                                href={`SearchCenter.aspx`}>Search Center</CommandButton>
                        </div>
                        <div className="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                            <CommandButton 
                                data-automation="Privacy"
                                iconProps={ { iconName: 'Lock' } }
                                href={`Privacy.aspx`}>Privacy Policy</CommandButton>
                        </div>
                        <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    }
    ```

    Teaching you how to write a React component is out of scope for this document. Nevertheless, notice the `import` statements at the beginning, where the component imports React, and the `CommandButton` React component from the Office UI Fabric components library.
    
    In the `render` method of the component, it defined the output of the `CustomFooter` with few instances of the `CommandButton` component for the links in the footer. All the HTML output is wrapped within a Grid layout of Office UI Fabric.
    
    > [!NOTE]
    > For more information about the grid layout of Office UI Fabric, see [Responsive Layout](https://developer.microsoft.com/en-us/fabric#/styles/layout).

    In the following figure, you can see the resulting output.

    ![The custom footer rendered in a "modern" site](../../../images/spfx-react-custom-footer-output.png)

## Test the solution in debug mode

1. Go back to the console window and run the following command to build the solution and run the local Node.js server to host it.

    ```
    gulp serve --nobrowser
    ```

2. Now open your favorite browser and go to a "modern" page of any "modern" team site. Now, append the following query string parameters to the page's URL.

    ```
    ?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"82242bbb-f951-4c71-a978-80eb8f35e4c1":{"location":"ClientSideExtension.ApplicationCustomizer"}}
    ```

    In this query string, replace the GUID with the `id` value you saved from the **CustomFooterApplicationCustomizer.manifest.json** file. 
    
    Notice that when executing the page request, you are prompted with a warning message box with the title "Allow debug scripts?", which asks your consent to run code from localhost for security reasons. Of course, if you want to locally debug and test the solution, you have to allow it to "Load debug scripts."

> Alternatively, you can create serve configuration entries in the `config/serve.json` file in your project to automate the creation of the debug query string parameters as outlined in this document: [Debug SharePoint Framework solutions on modern SharePoint pages](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/debug-modern-pages#debug-sharepoint-framework-extensions-on-modern-sharepoint-pages)

## Package and host the solution

If you are happy with the result, you are now ready to package the solution and host it in a real hosting infrastructure.
Before building the bundle and the package, you need to declare an XML Feature Framework file to provision the extension.

### Review Feature Framework elements

1. In the code editor, open the **/sharepoint/assets** sub-folder of the solution folder, and edit the **elements.xml** file. In the following code excerpt, you can see how the file should look.

    ```XML
    <?xml version="1.0" encoding="utf-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
        <CustomAction
            Title="CustomFooter"
            Location="ClientSideExtension.ApplicationCustomizer"
            ClientSideComponentId="82242bbb-f951-4c71-a978-80eb8f35e4c1">
        </CustomAction>
    </Elements>
    ```

    As you can see, it reminds us of the SharePoint Feature Framework file that we saw in the "classic" model, but it uses the `ClientSideComponentId` attribute to reference the `id` of the custom extension. You can also add a `ClientSideComponentProperties` attribute, if you need to provide custom settings to the extension, which is not the case in this tutorial.

2. Open the **package-solution.json** file under the **/config** folder of the solution. Within the file, you can see that there is a reference to the **elements.xml** file within the `assets` section.

    ```JSON
    {
    "$schema": "https://dev.office.com/json-schemas/spfx-build/package-solution.schema.json",
    "solution": {
        "name": "spfx-react-custom-footer-client-side-solution",
        "id": "911728a5-7bde-4453-97b2-2eba59277ed3",
        "version": "1.0.0.0",
        "features": [
        {
            "title": "Application Extension - Deployment of custom action.",
            "description": "Deploys a custom action with ClientSideComponentId association",
            "id": "f16a2612-3163-46ad-9664-3d3daac68cff",
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
        "zippedPackage": "solution/spfx-react-custom-footer.sppkg"
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

6. Create a new document library on your site collection called **CDN** and add a folder named **customfooter** to it.
    
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
    
2. Update the _write-manifests.json_ file (under the _config_ folder) as follows to point to your CDN endpoint. Use `publiccdn.sharepointonline.com` as the prefix, and then extend the URL with the actual path of your tenant. The format of the CDN URL is as follows:
    
    ```
    https://publiccdn.sharepointonline.com/[tenant host name]/sites/[site]/[library]/[folder]
    ```
    
    ![Updated write manifest content with path to CDN endpoint](../../../images/spfx-react-custom-footer-write-manifest.png)

3. Save your changes.

4. Execute the following task to bundle your solution. This executes a release build of your project using the CDN URL specified in the **write-manifests.json** file. The output of this command is located in the **./temp/deploy** folder. These are the files that you need to upload to the SharePoint folder acting as your CDN endpoint. 
    
    ```
    gulp bundle --ship
    ```
    
5. Execute the following task to package your solution. This command creates an **spfx-react-custom-footer.sppkg** package in the **sharepoint/solution** folder and prepares the assets in the **temp/deploy** folder to be deployed to the CDN.
    
    ```
    gulp package-solution --ship
    ```
    
6. Upload or drag-and-drop the newly created client-side solution package to the app catalog in your tenant, and then select the _Deploy_ button.

    ![app catalog Trust Dialog with path to CDN endpoint](../../../images/spfx-react-custom-footer-cdn-address.png)

7. Upload or drag-and-drop the files in the **temp/deploy** folder to the **CDN/customfooter** folder created earlier.

### Install and run the solution

1. Open the browser and navigate to any target "modern" site.

2. Go to the **Site Contents** page and select to add a new **App**.

3. Select to install a new app **From Your Organization** to browse the solutions available in the app catalog.

4. Select the solution called **spfx-react-custom-footer-client-side-solution** and install it on the target site.

    ![Add an App UI to add the solution to a site](../../../images/spfx-react-custom-footer-add-app.png)

5. After the application installation is completed, refresh the page or go to the home page of the site. You should be able to see the custom footer in action.

Enjoy your new custom footer built by using the SharePoint Framework Extensions!

## See also

- [Overview of SharePoint Framework Extensions](../overview-extensions.md)
