# Using page placeholders from Application Customizer (Hello World part 2)

>**Note:** The SharePoint Framework Extensions are currently in preview and are subject to change. SharePoint Framework Extensions are not currently supported for use in production environments.

Application Customizers also provide access to well known locations in the page, which you can modify based on your business and functional requirements. Typical scenarios would be dynamic header and footer experiences, which would be visible across all the pages in SharePoint Online. 

This model is similar to using a UserCustomAction collection in a Site or Web object to associate custom JavaScript to modify the page experience. The key difference or advantage with SPFx extensions is that you have guaranteed elements on the page regardless of any HTML/DOM structure modifications in future changes to SharePoint Online.

In this article, we'll continue extending the hello world extension built in the previous article [Build your first SharePoint Framework Extension (Hello World part 1)](./build-a-hello-world-extension.md) to take advantage of the page placeholders. 

## Getting access to page placeholders

Application Customizer extensions are supported with `Site`, `Web` and `List` scopes. You can control the scope by deciding where or how the Application Customizer will be registered in your SharePoint tenant. When the Application Customizer exists in the scope and is being rendered, you can use the following method to get access to the placeholder. Once you have received the placeholder object, you have full control over what will be presented to the end user.

Notice that we are requesting a well-known placeholder by using the corresponding well-known identifier. In this case, the code is accessing the header section of the page using the `PageHeader` identifier. 

```ts
    // Handling the header placeholder
    if (!this._headerPlaceholder) {
      this._headerPlaceholder = this.context.placeholders.tryAttach(
        'PageHeader',
        {
          onDispose: this._onDispose
        });
    }
```

In the following steps, we'll modify the previously created hello word Application Customizer to access placeholders and modify their content by adding custom html elements to them. 

Switch to Visual Studio Code (or your preferred IDE) and open **src\extensions\helloWorld\HelloWorldApplicationCustomizer.ts.**

Add the `Placeholder` to the import from `@microsoft/sp-application-base` by updating the import statement as follows:

```ts
import {
  BaseApplicationCustomizer,
  Placeholder
} from '@microsoft/sp-application-base';
```

Also add the following import statements after the `strings` import at the top of the file:

* We will create style definitions for the output in the following steps
* `escape` is used to escape Application Customizer properties  

```ts
import styles from './AppCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset'; 
```

Create a new file named **AppCustomizer.module.scss** under the **src\extensions\helloWorld** folder. 

Update **AppCustomizer.module.scss** as follows:

* These are the styles that will be used within the outputed html for the header and footer placeholders.

```css
.app {
  .header {
    height:60px; 
    text-align:center; 
    line-height:2.5; 
    font-weight:bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer {
    height:40px; 
    text-align:center; 
    line-height:2.5; 
    font-weight:bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

```

Move back to **HelloWorldApplicationCustomizer.ts** and update the **IHelloWorldApplicationCustomizerProperties** interface to have specific properties for Header and Footer as follows.

* If your command set uses the ClientSideComponentProperties JSON input, it will be deserialized into the `BaseExtension.properties` object. You can define an interface to describe it.

```ts
export interface IHelloWorldApplicationCustomizerProperties {
  Header: string;
  Footer: string;
}
```

Add the following private variables inside of the **HelloWorldApplicationCustomizer** class. In this scenario, these could just be local variables in an `onRender` method, but if you want to share them with other objects you define them as private variables. 

```ts
export default class HelloWorldApplicationCustomizer
  extends BaseApplicationCustomizer<IHelloWorldApplicationCustomizerProperties> {
  
  // These have been added
  private _headerPlaceholder: Placeholder;
  private _footerPlaceholder: Placeholder;
```

Update the `onRender` method with the following code:

* We use `this.context.placeholders.tryAttach` to get access on the placeholder
* Extension code should not assume that the expected placeholder is available
* The code expects custom properties called `Header`and `Footer`. If the properties exist, they will be rendered inside of the placeholders.
* Notice that the code path for both the header and the footer is almost identical in the below method. The only differences are the variables used and the style definitions.

```ts
  @override
  public onRender(): void {

    console.log('CustomHeader.onRender()');
    console.log('Available placeholders: ',
      this.context.placeholders.placeholderNames.join(', '));

    // Handling the header placeholder
    if (!this._headerPlaceholder) {
      this._headerPlaceholder = this.context.placeholders.tryAttach(
        'PageHeader',
        {
          onDispose: this._onDispose
        });

      // The extension should not assume that the expected placeholder is available.
      if (!this._headerPlaceholder) {
        console.error('The expected placeholder (PageHeader) was not found.');
        return;
      }

      if (this.properties) {
        let headerString: string = this.properties.Header;
        if (!headerString) {
          headerString = '(Header property was not defined.)';
        }

        if (this._headerPlaceholder.domElement) {
          this._headerPlaceholder.domElement.innerHTML = `
                <div class="${styles.app}">
                  <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.header}">
                    <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(headerString)}
                  </div>
                </div>`;
        }
      }
    }

    // Handling the footer placeholder
    if (!this._footerPlaceholder) {
      this._footerPlaceholder = this.context.placeholders.tryAttach(
        'PageFooter',
        {
          onDispose: this._onDispose
        });

      // The extension should not assume that the expected placeholder is available.
      if (!this._footerPlaceholder) {
        console.error('The expected placeholder (PageFooter) was not found.');
        return;
      }

      if (this.properties) {
        let footerString: string = this.properties.Footer;
        if (!footerString) {
          footerString = '(Footer property was not defined.)';
        }

        if (this._footerPlaceholder.domElement) {
          this._footerPlaceholder.domElement.innerHTML = `
                <div class="${styles.app}">
                  <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.footer}">
                    <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(footerString)}
                  </div>
                </div>`;
        }
      }
    }
  }

```

Add the following method after the `onRender` method. In this case, we simply output a console message, when the extension is removed from the page. 

```ts
 private _onDispose(): void {
    console.log('[CustomHeader._onDispose] Disposed custom header.');
  }

```

The code is now ready to be tested in SharePoint Online. 

Switch to the console window that is running `gulp serve` and check if there are any errors. If there are errors, gulp reports them in the console and you will need to fix them before proceeding.

If you don't have the solution running currently, execute the following command and ensure you don't have any errors.

```
gulp serve --nobrowser
```

Navigate to an out of the box modern list in SharePoint Online. This can be a list or a library for the initial testing. 

To test your extension, append the following query string parameters to the URL:

* Notice that the GUID used in this query parameter has to match on the ID attribute of your Application Customizer available from **HelloWorldApplicationCustomizer.manifest.json**.
* We also use Header and Footer JSON properties to provide parameters or configurations to the Application Customizer. In this case, we simply output these values, but you could adjust the behavior based on the properties in actual production usage. 

```
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"5fc73e12-8085-4a4b-8743-f6d02ffe1240":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"Header":"Header area of the page","Footer":"Footer area in the page"}}}
```
The full URL to request would be something like the following:

```
contoso.sharepoint.com/Lists/Contoso/AllItems.aspx?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"5fc73e12-8085-4a4b-8743-f6d02ffe1240":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"Header":"Header area of the page","Footer":"Footer area in the page"}}}
```

![Allow Debug Manifest question from the page](../../../../images/ext-app-debug-manifest-message.png)

Click the "**Load debug scripts**" button to continue loading scripts from your local host.

You should now see the custom header and footer content in your page. 

![Custom header and footer elements rendered in the page](../../../../images/ext-app-header-footer-visible.png)

## Next steps
Congratulations on building your own custom header and footer using the Application Customizer! You can continue building out your Hello World Extension in the next topic [Deploy your extension to site collection (Hello world part 3)](./serving-your-extension-from-sharepoint.md). You will learn how to deploy and preview the Hello World extension in a SharePoint site collection without using **Debug** query parameters. 
