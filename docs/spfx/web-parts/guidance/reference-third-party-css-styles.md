# Reference third-party CSS styles in SharePoint Framework web parts

> **Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.

There are many third-party libraries that you can leverage to build rich SharePoint Framework client-side web parts. In addition to scripts, these libraries often contain additional assets such as stylesheets. This article shows two different approaches to include third-party CSS styles in web parts and how each approach affects the resulting web part bundle. The example web part discussed in this article uses jQuery and jQuery UI to display an accordion.

![jQuery UI accordion rendered by a SharePoint Framework client-side web part](../../../../images/thirdpartycss-accordion-styled.png)

> **Note:** Before following the steps in this article, be sure to [set up your SharePoint client-side web part development environment](../../set-up-your-development-environment).

## Prepare the project

### Create a new project

Start by creating a new folder for your project.

```sh
md js-thirdpartycss
```

Go to the project folder.

```sh
cd js-thirdpartycss
```

In the project folder run the SharePoint Framework Yeoman generator to scaffold a new SharePoint Framework project.

```sh
yo @microsoft/sharepoint
```

When prompted, enter the following values:

- **js-thirdpartycss** as your solution name
- **Use the current folder** for the location to place the files
- **jQuery accordion** as your web part name
- **Shows jQuery accordion** as your web part description
- **no javaScript web framework** as the starting point to build the web part

![The SharePoint Framework Yeoman generator with the default choices](../../../../images/thirdpartycss-yeoman.png)

Once the scaffolding completes, open your project folder in your code editor. This article uses Visual Studio Code in the steps and screenshots but you can use any editor you prefer.

![The SharePoint Framework project open in Visual Studio Code](../../../../images/thirdpartycss-visual-studio-code.png)

### Add test content

In the code editor open the **./src/webparts/jQueryAccordion/JQueryAccordionWebPart.ts** file. Change the **render** method to:

```ts
export default class JQueryAccordionWebPart extends BaseClientSideWebPart<IJQueryAccordionWebPartProps> {
  // ...
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.jQueryAccordion}">
        <div class="accordion">
          <h3>Information</h3>
          <div>
            <p>
            The Volcanoes, crags, and caves park is a scenic destination for
            many visitors each year. To ensure everyone has a good
            experience and to preserve the natural beauty, access is
            restricted based on a permit system.
            </p>
            <p>
            Activities include viewing active volcanoes, skiing on mountains,
            walking across lava fields, and caving (spelunking) in caves
            left behind by the lava.
            </p>
          </div><h3>Snow permit</h3>
          <div>
            <p>
            The Northern region has snow in the mountains during winter.
            Purchase a snow permit for access to approved ski areas.
            </p>
          </div>
          <h3>Hiking permit</h3>
          <div>
            <p>
            The entire region has hiking trails for your enjoyment.
            Purchase a hiking permit for access to approved trails.
            </p>
          </div>
          <h3>Volcano access</h3>
          <div>
            <p>
            The volcanic region is beautiful but also dangerous. Each
            area may have restrictions based on wind and volcanic
            conditions. There are three type of permits based on activity.
            </p>
            <ul>
              <li>Volcano drive car pass</li>
              <li>Lava field access permit</li>
              <li>Caving permit</li>
            </ul>
          </div>
        </div>
      </div>`;

      ($('.accordion', this.domElement) as any).accordion();
  }
  // ...
}
```

If you build the project now, you get an error stating that **$** is undefined. This is because the project refers to jQuery without loading it first. There are two approaches to loading the libraries. Neither approach impacts how you use the scripts in code.

## Approach 1: Include third-party libraries in the bundle

The easiest way to reference a third-party library in SharePoint Framework projects is to include it in the generated bundle. The library is installed as a package and referenced in the project. When bundling the project, Webpack will pick up the reference to the library and include it in the generated bundle.

### Install libraries

Install jQuery and jQuery UI by running the following command:

```sh
npm install jquery jquery-ui --save
```

Because you are building your web part in TypeScript you also need TypeScript typings for jQuery that you can install by running the following command:

```sh
npm install @types/jquery --save-dev
```

### Reference libraries in the web part

After installing libraries, the next step is to reference them in the project. In the code editor open the **./src/webparts/jQueryAccordion/JQueryAccordionWebPart.ts** file. In its top section, just below the last **import** statement, add references to jQuery and jQuery UI.

```ts
import * as $ from 'jquery';
require('../../../node_modules/jquery-ui/ui/widgets/accordion');
```

Because you installed the TypeScript typings for the jQuery package, you can reference it using an **import** statement. However, the jQuery UI package is built differently. Unlike how many modules are structured, there is no main entry point with a reference to all components that you can use. Instead you refer directly to the specific component that you want to use. The entry point of that component contains all references to dependencies that it needs to work correctly.

Confirm that the project is building by running the following command:

```sh
gulp serve
```

After adding the web part to the canvas you should see the accordion working.

![jQuery UI accordion without styles rendered by a SharePoint Framework client-side web part](../../../../images/thirdpartycss-accordion-unstyled.png)

At this point you have referenced only the jQuery UI scripts which explains why the accordion is not styled. Next you will add the missing CSS stylesheets to brand the accordion.

### Reference third-party CSS stylesheets in the web part

Adding references to third-party CSS stylesheets that are a part of packages installed in the project is as simple as adding references to the packages themselves. The SharePoint Framework offers standard support for loading CSS files through Webpack.

In the code editor open the **./src/webparts/jQueryAccordion/JQueryAccordionWebPart.ts** file. Just below the last **require** statement, add references to jQuery UI accordion CSS files.

```ts
require('../../../node_modules/jquery-ui/themes/base/core.css');
require('../../../node_modules/jquery-ui/themes/base/accordion.css');
require('../../../node_modules/jquery-ui/themes/base/theme.css');
```

Referencing CSS files that are part of a package in the project is similar to adding references to JavaScript files. All you need to do is specify the relative path to the CSS file that you want to load including the **.css** extension. When bundling the project, Webpack will process these references and include the files in the generated web part bundle.

Confirm that the project is building by running the following command:

```sh
gulp serve
```

The accordion should be displayed correctly and branded using the standard jQuery UI theme.

![jQuery UI accordion branded using the default jQuery UI theme rendered by a SharePoint Framework client-side web part](../../../../images/thirdpartycss-accordion-styled.png)

### Analyze the contents of the generated web part bundle

The easiest way to use third-party libraries and their resources is by including them in the generated web part bundle. In this approach Webpack will automatically resolve all dependencies between the different libraries and will ensure that all scripts are loaded in the correct order. The downside of this approach is that all referenced resources are loaded separately with every web part. So if you have multiple web parts in your project, all using jQuery UI, each web part will load its own copy of jQuery UI and slow down the page.

To see the impact of the libraries on the size of the generated web part bundle, after bundling the project open the **./dist/js-thirdpartycss.stats.html** file in the web browser. Move your mouse over the chart and you will see, for example, that the jQuery UI CSS files referenced by the web part make up over 6% of the total web part bundle size.

![jQuery UI CSS highlighted in the chart illustrating the size of the different pieces of the generated web part bundle](../../../../images/thirdpartycss-jquery-ui-css-size.png)

As mentioned in the disclaimer below the chart, the sizes are indicative and reflect the size of the debug version of the bundle. The release version of the bundle would be significantly smaller. Still it's good to realize which different pieces compose the web part bundle and what's their relative size compared to other elements in the bundle.

## Approach 2: Load third-party libraries from a URL

Another way to reference third-party libraries in the SharePoint Framework is by referencing them from a URL such as a public CDN or a privately managed location. The biggest benefit is that if you're loading a frequently used library from a public location, there is a chance that users might already have that particular library downloaded on their computer. In that case the SharePoint Framework will reuse the cached library loading your web part faster.

Even if you cannot use a public CDN to load libraries from a central location it is a good practice from the performance point of view. Pointing to a URL allows your users to download the script only once and reuse it across the whole portal, significantly speeding up loading pages and improving the user experience.

When loading third-party libraries from public URLs keep in mind that there is a risk involved in using those libraries. Since you don't manage the hosting location of any particular script you can't be sure of its contents. Scripts loaded by the SharePoint Framework run under the context of the current user and are allowed to do whatever that user can do. Also, if the hosting location is offline, your web part won't work.

### Install typings for libraries

When you reference third-party libraries from a URL, you don't need to install them as packages in your project. You do have to install their TypeScript typings if you want the benefit of type safety checks during development.

Assuming you start with an empty project created as described previously in this article, install TypeScript typings for jQuery by running the following command:

```sh
npm install @types/jquery --save-dev
```

### Specify URLs of libraries

To load third-party libraries from a URL, you have to specify the URL where they are located in the configuration of your project. In the code editor open the **./config/config.json** file. In the **externals** section add the following JSON:

```json
{
  //...
  "externals": {
    //...
    "jquery": "https://code.jquery.com/jquery-3.1.1.min.js",
    "jquery-ui": "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
    //...
  }
  //...
}
```

### Reference libraries from the URL in the web part

Having specified the URL that the SharePoint Framework should use to load jQuery and jQuery UI, the next step is to reference them in the project. In the code editor open the **./src/webparts/jQueryAccordion/JQueryAccordionWebPart.ts** file. In its top section, just below the last **import** statement, add the following references to jQuery and jQuery UI:

```ts
import * as $ from 'jquery';
require('jquery-ui');
```

Compared to how you were referencing both libraries when they were installed as packages in your project, referencing them from the URL is very similar. Because jQuery has its TypeScript typings installed it can be referenced using an **import** statement. For jQuery UI all you want is to load the script on the page.

Because you registered **jquery** and **jquery-ui** in the project configuration as external resources, when you reference any of these libraries, the SharePoint Framework will use the specified URLs to load them at runtime. When bundling the project, these resources will be marked as externals and will therefore be excluded from the bundle.

One difference to keep in mind is that previously you specified to load the accordion from the jQuery UI package, but now you're referring to jQuery UI from the CDN which contains all jQuery UI components.

Confirm that the project is building by running the following command:

```sh
gulp serve
```

After adding the web part to the canvas you should see the accordion working.

![jQuery UI accordion without styles rendered by a SharePoint Framework client-side web part](../../../../images/thirdpartycss-accordion-unstyled.png)

In your web browser, open the developer tools, switch to the tab showing the network requests, and reload the page. You should see how both jQuery and jQuery UI are loaded from the CDN.

![jQuery and jQuery UI request highlighted in Microsoft Edge developer tools](../../../../images/thirdpartycss-libraries-cdn.png)

At this point you have referenced only the jQuery UI scripts which explains why the accordion is not styled. Next you will add the missing CSS stylesheets to brand the accordion.

### Reference third-party CSS stylesheets from URL in the web part

Adding references to third-party CSS stylesheets from a URL is different than referencing resources from project packages. While the project configuration in the **config.json** file allows you to specify external resources, it applies only to scripts. To reference CSS stylesheets from a URL you have to use the **SPModuleLoader** instead.

#### Define SPModuleLoader as external resource

In the code editor open the **./config/config.json** file. In the **externals** section add the following JSON:

```json
{
  // ...
  "externals": {
    // ...
    "@microsoft/sp-module-loader": "node_modules/@microsoft/sp-module-loader/dist/sp-module-loader.js"
  }
  // ...
}
```

This line specifies that the **@microsoft/sp-module-loader** package is an external package and shouldn't be included in the bundle. **sp-module-loader** is a part of the SharePoint Framework and doesn't need to be loaded by your web part. Without including this line, you would get errors when trying to build the project.

#### Load CSS from the URL using the SPModuleLoader

In the code editor open the **./src/webparts/jQueryAccordion/JQueryAccordionWebPart.ts** file. In the top section of the file, just after the last **import** statement, add the following code:

```ts
import SPModuleLoader from '@microsoft/sp-module-loader';
```

In the same file change the web part constructor to:

```ts
export default class JQueryAccordionWebPart extends BaseClientSideWebPart<IJQueryAccordionWebPartProps> {
  public constructor(context: IWebPartContext) {
    super(context);

    SPModuleLoader.loadCss('https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.min.css');
  }

  // ...
}
```

When the web part is instantiated on the page, it will load the jQuery UI CSS from the specified URL. This CSS stylesheet is the combined and optimized version of the jQuery UI CSS that contains the basic styles, theme, and styling for all components.

Confirm that the project is building by running the following command:

```sh
gulp serve
```

The accordion should be displayed correctly and branded using the standard jQuery UI Theme.

![jQuery UI accordion branded using the default jQuery UI theme rendered by a SharePoint Framework client-side web part](../../../../images/thirdpartycss-accordion-styled.png)

### Analyze the contents of the generated web part bundle loading resources from URL

After building the project in the web browser open the **./dist/js-thirdpartycss.stats.html** file. Notice how the overall bundle is significantly smaller (19KB compared to over 300KB when including jQuery and jQuery UI in the bundle) and how jQuery and jQuery UI are not listed in the chart since they are loaded at runtime.