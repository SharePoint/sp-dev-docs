---
title: Use page placeholders from Application Customizer (Hello World part 2)
description: Extend your Hello World extension to take advantage of page placeholders by using SharePoint Framework (SPFx) Extensions. 
ms.date: 03/14/2019
ms.prod: sharepoint
---

# Use page placeholders from Application Customizer (Hello World part 2)

Application Customizers provide access to well-known locations on SharePoint pages that you can modify based on your business and functional requirements. For example, you can create dynamic header and footer experiences that render across all the pages in SharePoint Online. 

This model is similar to using a **UserCustomAction** collection in a **Site** or **Web** object to modify the page experience via custom JavaScript. The key difference or advantage with SharePoint Framework (SPFx) Extensions is that your page elements won't change if changes are made to the HTML/DOM structure in SharePoint Online.

This article describes how to extend your [Hello World extension](./build-a-hello-world-extension.md) to take advantage of page placeholders. 

You can also follow these steps by watching the video on the SharePoint PnP YouTube Channel:

<br/>

> [!Video https://www.youtube.com/embed/gVDOLGkr-ag]

<br/> 

## Get access to page placeholders

Application Customizer extensions are supported with `Site`, `Web`, and `List` scopes. You can control the scope by deciding where or how the Application Customizer is registered in your SharePoint tenant.

> [!NOTE] 
> Feature xml based registration of application customizer is only supported with web or list level. You can however activate application customizer more widely either using *tenant wide deployment of extensions capability* or by associating application customizer to the `UserCustomAction` collection in `Site` object level.

When the Application Customizer exists in the scope and is being rendered, you can use the following method to get access to the placeholder.

```typescript
    // Handling the Bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Bottom,
          { onDispose: this._onDispose });
    ...
    }
```

After you get the placeholder object, you have full control over what is presented to the end user.

Notice that you're requesting a well-known placeholder by using the corresponding well-known identifier. In this case, the code is accessing the footer section of the page by using the `Bottom` identifier. 

### Modify the Application Customizer to access and modify placeholders by adding custom HTML elements

1. Install the `@microsoft/sp-office-ui-fabric-core` package to enable importing from SPFabricCore.scss. We will use this for defining rendering styles for our place holders.

  ```
  npm install @microsoft/sp-office-ui-fabric-core
  ```

2. Create a new file named **AppCustomizer.module.scss** under the **src\extensions\helloWorld** folder. 

3. Update **AppCustomizer.module.scss** as follows:

	> [!NOTE] 
	> These are the styles that are used in the HTML output for the header and footer placeholders.

	```css
      @import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss';

      .app {
        .top {
            height:60px;
            text-align:center;
            line-height:2.5;
            font-weight:bold;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $ms-color-themePrimary;
            color: $ms-color-white;

        }

        .bottom {
            height:40px;
            text-align:center;
            line-height:2.5;
            font-weight:bold;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $ms-color-themePrimary;
            color: $ms-color-white;
        }
      }
	```

4. In Visual Studio Code (or your preferred IDE), open **src\extensions\helloWorld\HelloWorldApplicationCustomizer.ts.**

5. Add the `PlaceholderContent` and `PlaceholderName` to the import from `@microsoft/sp-application-base` by updating the import statement as follows:

	```typescript
		import {
			BaseApplicationCustomizer, 
			PlaceholderContent,
			PlaceholderName
		} from '@microsoft/sp-application-base';
	```
	
	Also add the following import statements after the `strings` import at the top of the file:

	```typescript
		import styles from './AppCustomizer.module.scss';
		import { escape } from '@microsoft/sp-lodash-subset';
	```

	You use `escape` to escape Application Customizer properties. You'll create style definitions for the output in the following steps.  

> [!NOTE] 
> After pasting in the code snippet above you might be presented with an error if you use Visual Studio Code. These errors will disappear after you build the solution when the scss file is compiled into a class.

6. In the **HelloWorldApplicationCustomizer.ts** file, update the **IHelloWorldApplicationCustomizerProperties** interface to add specific properties for Header and Footer, as follows.

  > [!NOTE] 
  > If your Command Set uses the ClientSideComponentProperties JSON input, it is deserialized into the `BaseExtension.properties` object. You can define an interface to describe it.

  ```typescript
    export interface IHelloWorldApplicationCustomizerProperties {
      Top: string;
      Bottom: string;
    }
  ```

7. Add the following private variables inside the **HelloWorldApplicationCustomizer** class. In this scenario, these can just be local variables in an `onRender` method, but if you want to share them with other objects, define them as private variables. 

  ```typescript
    export default class HelloWorldApplicationCustomizer
      extends BaseApplicationCustomizer<IHelloWorldApplicationCustomizerProperties> {

      // These have been added
      private _topPlaceholder: PlaceholderContent | undefined;
      private _bottomPlaceholder: PlaceholderContent | undefined;
  ```

8. Update the `onInit` method code as follows:

  ```typescript
      @override
      public onInit(): Promise<void> {
        Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

        // Wait for the placeholders to be created (or handle them being changed) and then
	// render.
        this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
	
        return Promise.resolve<void>();
      }
  ```

9. Create a new `_renderPlaceHolders` private method with the following code:

	```typescript
		private _renderPlaceHolders(): void {
			console.log("HelloWorldApplicationCustomizer._renderPlaceHolders()");
			console.log(
				"Available placeholders: ",
				this.context.placeholderProvider.placeholderNames
					.map(name => PlaceholderName[name])
					.join(", ")
			);

			// Handling the top placeholder
			if (!this._topPlaceholder) {
				this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
					PlaceholderName.Top,
					{ onDispose: this._onDispose }
				);

				// The extension should not assume that the expected placeholder is available.
				if (!this._topPlaceholder) {
					console.error("The expected placeholder (Top) was not found.");
					return;
				}

				if (this.properties) {
					let topString: string = this.properties.Top;
					if (!topString) {
						topString = "(Top property was not defined.)";
					}

					if (this._topPlaceholder.domElement) {
						this._topPlaceholder.domElement.innerHTML = `
						<div class="${styles.app}">
							<div class="${styles.top}">
								<i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
									topString
								)}
							</div>
						</div>`;
					}
				}
			}

			// Handling the bottom placeholder
			if (!this._bottomPlaceholder) {
				this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
					PlaceholderName.Bottom,
					{ onDispose: this._onDispose }
				);

				// The extension should not assume that the expected placeholder is available.
				if (!this._bottomPlaceholder) {
					console.error("The expected placeholder (Bottom) was not found.");
					return;
				}

				if (this.properties) {
					let bottomString: string = this.properties.Bottom;
					if (!bottomString) {
						bottomString = "(Bottom property was not defined.)";
					}

					if (this._bottomPlaceholder.domElement) {
						this._bottomPlaceholder.domElement.innerHTML = `
						<div class="${styles.app}">
							<div class="${styles.bottom}">
								<i class="ms-Icon ms-Icon--Info" aria-hidden="true"></i> ${escape(
									bottomString
								)}
							</div>
						</div>`;
					}
				}
			}
		}

	```

	<br/>

	Note the following about this code:
	* Use `this.context.placeholderProvider.tryCreateContent` to get access to the placeholder.
	* Extension code should not assume that the expected placeholder is available.
	* The code expects custom properties called `Top` and `Bottom`. If the properties exist, they render inside the placeholders.
	* Notice that the code path for both the top and bottom placeholders is almost identical. The only differences are the variables used and the style definitions.
	* It is possible to use the class names defined in the style sheet directly but it is not recommended. In case no style sheet reference defined in the ```styles``` variable is found in the code, the style sheet won't get added to the page. This is because unused references will get removed during build process.

10. Add the following method after the `_renderPlaceHolders` method. In this case, you simply output a console message when the extension is removed from the page. 

	```typescript
	    private _onDispose(): void {
	      console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
	    }
	```

You're now ready to test your code in SharePoint Online.

## Test your code

1. Move to the **serve.json** file in the **config** folder as we need to adjust the settings since we introduced two new properties for the extension. Update properties section in the file to have *Top* and *Bottom* messages.

	![Updated server json file with new properties](../../../images/ext-app-vscode-serve.png)
	
2. Switch to the console window that is running `gulp serve` and check for errors. Gulp reports any errors in the console; you'll need to fix them before you proceed. If you have the solution already running, restart it, so that we get the updated settings applied from the **serve.json file**.
	
	```
	gulp serve
	```

3 Select **Load debug scripts** to continue loading scripts from your local host.

![Allow Debug Manifest question from the page](../../../images/ext-app-debug-manifest-message.png)

You should now see the custom header and footer content in your page. 

![Custom header and footer elements rendered in the page](../../../images/ext-app-header-footer-visible.png)

## Next steps

Congratulations, you built your own custom header and footer using the Application Customizer!

To continue building out your extension, see [Deploy your extension to SharePoint (Hello World part 3)](./serving-your-extension-from-sharepoint.md). You will learn how to deploy and preview the Hello World extension in a SharePoint site collection without using **Debug** query parameters. 

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, please report that to SharePoint engineering by using the [issue list at the sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues) or by adding a comment to this article. Thanks for your input in advance.
