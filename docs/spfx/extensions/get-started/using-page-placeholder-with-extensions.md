# Use page placeholders from Application Customizer (Hello World part 2)

Application Customizers provide access to well-known locations on SharePoint pages that you can modify based on your business and functional requirements. For example, you can create dynamic header and footer experiences that render across all the pages in SharePoint Online. 

This model is similar to using a **UserCustomAction** collection in a **Site** or **Web** object to modify the page experience via custom JavaScript. The key difference or advantage with SharePoint Framework (SPFx) Extensions is that your page elements won't change if changes are made to the HTML/DOM structure in SharePoint Online.

This article describes how to extend your [Hello World extension](./build-a-hello-world-extension.md) to take advantage of page placeholders. You can also follow these steps by watching the video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=ipRw6o6bOTw&list=PLR9nK3mnD-OXtWO5AIIr7nCR3sWutACpV).

<a href="https://www.youtube.com/watch?v=3LXuYBaJ1Lc">
<img src="../../../images/spfx-ext-youtube-tutorial2.png" alt="Screenshot of the YouTube video player for this tutorial" />
</a>

## Get access to page placeholders

Application Customizer extensions are supported with `Site`, `Web`, and `List` scopes. You can control the scope by deciding where or how the Application Customizer will be registered in your SharePoint tenant. When the Application Customizer exists in the scope and is being rendered, you can use the following method to get access to the placeholder. 

```ts
    // Handling the Bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Bottom,
          { onDispose: this._onDispose });
    ...
    }
```

After you get the placeholder object, you have full control over what will be presented to the end user.

Notice that you're requesting a well-known placeholder by using the corresponding well-known identifier. In this case, the code is accessing the footer section of the page using the `Bottom` identifier. 

In the following steps, you'll modify the Hello World Application Customizer to access and modify placeholders by adding custom HTML elements.

1. In Visual Studio Code (or your preferred IDE), open **src\extensions\helloWorld\HelloWorldApplicationCustomizer.ts.**

2. Add the `PlaceholderContent` and `PlaceholderName` to the import from `@microsoft/sp-application-base` by updating the import statement as follows:

	```ts
	import {
	  BaseApplicationCustomizer, 
	  PlaceholderContent,
	  PlaceholderName
	} from '@microsoft/sp-application-base';
	```
	
	  Also add the following import statements after the `strings` import at the top of the file:

	```ts
	import styles from './AppCustomizer.module.scss';
	import { escape } from '@microsoft/sp-lodash-subset'; 
	```

	You use `escape` to escape Application Customizer properties. You'll create style definitions for the output in the following steps.  

3. Create a new file named **AppCustomizer.module.scss** under the **src\extensions\helloWorld** folder. 

4. Update **AppCustomizer.module.scss** as follows:

	> [!NOTE] 
	> These are the styles that will be used in the HTML output for the header and footer placeholders.

	  ```css
	  .app {
	    .top {
	      height:60px;
	      text-align:center;
	      line-height:2.5;
	      font-weight:bold;
	      display: flex;
	      align-items: center;
	      justify-content: center;
	    }

	    .bottom {
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

5. In the **HelloWorldApplicationCustomizer.ts** file, update the **IHelloWorldApplicationCustomizerProperties** interface to add specific properties for Header and Footer, as follows.

	> [!NOTE] 
	> If your command set uses the ClientSideComponentProperties JSON input, it will be deserialized into the `BaseExtension.properties` object. You can define an interface to describe it.

	```ts
	export interface IHelloWorldApplicationCustomizerProperties {
	  Top: string;
	  Bottom: string;
	}
	```

6. Add the following private variables inside the **HelloWorldApplicationCustomizer** class. In this scenario, these can just be local variables in an `onRender` method, but if you want to share them with other objects,  define them as private variables. 

	  ```ts
	  export default class HelloWorldApplicationCustomizer
	    extends BaseApplicationCustomizer<IHelloWorldApplicationCustomizerProperties> {

	    // These have been added
	    private _topPlaceholder: PlaceholderContent | undefined;
	    private _bottomPlaceholder: PlaceholderContent | undefined;
  	```

7. Update the `onInit` method code as follows:

	  ```ts
	    @override
	    public onInit(): Promise<void> {
	      Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

	      // Added to handle possible changes on the existence of placeholders.
	      this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);

	      // Call render method for generating the HTML elements.
	      this._renderPlaceHolders();
	      return Promise.resolve<void>();
	    }
	  ```


8. Create a new `_renderPlaceHolders` private method with the following code:

	  ```ts
	    private _renderPlaceHolders(): void {

	      console.log('HelloWorldApplicationCustomizer._renderPlaceHolders()');
	      console.log('Available placeholders: ',
		this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', '));

	      // Handling the top placeholder
	      if (!this._topPlaceholder) {
		this._topPlaceholder =
		  this.context.placeholderProvider.tryCreateContent(
		    PlaceholderName.Top,
		    { onDispose: this._onDispose });

		// The extension should not assume that the expected placeholder is available.
		if (!this._topPlaceholder) {
		  console.error('The expected placeholder (Top) was not found.');
		  return;
		}

		if (this.properties) {
		  let topString: string = this.properties.Top;
		  if (!topString) {
		    topString = '(Top property was not defined.)';
		  }

		  if (this._topPlaceholder.domElement) {
		    this._topPlaceholder.domElement.innerHTML = `
			  <div class="${styles.app}">
			    <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.top}">
			      <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(topString)}
			    </div>
			  </div>`;
		  }
		}
	      }

	      // Handling the bottom placeholder
	      if (!this._bottomPlaceholder) {
		this._bottomPlaceholder =
		  this.context.placeholderProvider.tryCreateContent(
		    PlaceholderName.Bottom,
		    { onDispose: this._onDispose });

		// The extension should not assume that the expected placeholder is available.
		if (!this._bottomPlaceholder) {
		  console.error('The expected placeholder (Bottom) was not found.');
		  return;
		}

		if (this.properties) {
		  let bottomString: string = this.properties.Bottom;
		  if (!bottomString) {
		    bottomString = '(Bottom property was not defined.)';
		  }

		  if (this._bottomPlaceholder.domElement) {
		    this._bottomPlaceholder.domElement.innerHTML = `
			  <div class="${styles.app}">
			    <div class="ms-bgColor-themeDark ms-fontColor-white ${styles.bottom}">
			      <i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(bottomString)}
			    </div>
			  </div>`;
		  }
		}
	      }
	    }
	  ```

	  * Use `this.context.placeholderProvider.tryCreateContent` to get access to the placeholder.
	  * Extension code should not assume that the expected placeholder is available.
	  * The code expects custom properties called `Top` and `Bottom`. If the properties exist, they will render inside the placeholders.
	  * Notice that the code path for both the top and the bottom placeholders is almost identical. The only differences are the variables used and the style definitions.

9. Add the following method after the `_renderPlaceHolders` method. In this case, you simply output a console message when the extension is removed from the page. 

	  ```ts
	    private _onDispose(): void {
	      console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
	    }
	  ```

You're now ready to test your code in SharePoint Online.

## Test your code

Switch to the console window that is running `gulp serve` and check for errors. Gulp reports any errors in the console; you'll need to fix them before you proceed.

If you don't have the solution running, use the following command to check for errors.

```
gulp serve --nobrowser
```

Go to a modern list in SharePoint Online. This can be a list or a library. 

To test your extension, append the following query string parameters to the URL:


```
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"e5625e23-5c5a-4007-a335-e6c2c3afa485":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"Top":"Top area of the page","Bottom":"Bottom area in the page"}}}
```

* Notice that the GUID used in this query parameter has to match on the ID attribute of your Application Customizer. This is available in the **HelloWorldApplicationCustomizer.manifest.json** file.
* You use Header and Footer JSON properties to provide parameters or configurations to the Application Customizer. In this case, you simply output these values. You can also adjust the behavior based on the properties used in production. 

The full URL should look similar to the following:

```
contoso.sharepoint.com/Lists/Contoso/AllItems.aspx?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"e5625e23-5c5a-4007-a335-e6c2c3afa485":{"location":"ClientSideExtension.ApplicationCustomizer","properties":{"Top":"Top area of the page","Bottom":"Bottom area in the page"}}}
```

Choose **Load debug scripts** to continue loading scripts from your local host.

![Allow Debug Manifest question from the page](../../../images/ext-app-debug-manifest-message.png)

You should now see the custom header and footer content in your page. 

![Custom header and footer elements rendered in the page](../../../images/ext-app-header-footer-visible.png)

## Next steps
Congratulations, you've built your own custom header and footer using the Application Customizer! To continue building out your extension, see [Deploy your extension to SharePoint (Hello World part 3)](./serving-your-extension-from-sharepoint.md). You will learn how to deploy and preview the Hello World extension in a SharePoint site collection without using **Debug** query parameters. 

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, please report that to SharePoint engineering using the [issue list at sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues). Thanks for your input advance.