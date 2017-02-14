# Optimize builds for production

When deploying SharePoint Framework solutions to production you should always use a release build of your project which is optimized for performance. This article illustrates the main differences between debug and release builds and shows how you can optimize your bundle for use in production environments.

## Use release builds in production

When building a SharePoint Framework project, you can choose whether you want to build it in a debug or release mode. By default, SharePoint Framework projects are built in debug mode, which makes it easier for you to debug code. But when your code is finished and is working as expected, you should build it in release mode to optimize it for running in the production environment.

> For more information about building your project in release mode, see the [SharePoint Framework Toolchain](./sharepoint-framework-toolchain) article.

The main difference between the output of a debug and release build is, that the release version of the generated bundle is minified and significantly smaller in size than its debug equivalent. To illustrate the difference, compare the size of the debug and release version of a SharePoint Framework project with a web part using Angular.

![Image with two Explorer windows displayed side by side with the debug and release version of the generated bundle highlighted](../../../images/guidance-productionbuilds-debug-vs-ship-bundle.png)

The debug version of the bundle is 1255 KB while its release equivalent is only 177 KB. The difference in size between the debug and release version of the generated bundle will differ depending on the libraries used in your project. Still, the release build will always be significantly smaller than a debug build, which is why you should always deploy the output of release builds to production.

## Don't include third party libraries in the bundle

When building SharePoint Framework solutions, you can benefit of many existing JavaScript libraries to solve common problems. Using existing libraries allows you to be more productive and lets you focus on the added value for your organization, instead of on developing generic functionality, required by your solution.

By default, when referencing third party libraries in your project, SharePoint Framework will include them in the generated bundle. As a result, users working with your solution, would end up downloading the same library multiple times - once with each component. The total page size would grow significantly taking longer to load and leading to a poor user experience, particularly on slower networks.

![Microsoft Edge developer tools showing on the network tab two web part bundles being loaded](../../../images/guidance-productionbuilds-two-bundles-with-libraries.png)

When working with third party libraries, you should always consider loading them from an external location: either a public CDN or a hosting location owned by your organization. First of all, this allows you to exclude the library from your bundle, significantly decreasing its size. Additionally, if the hosting location from which you are loading the library is optimized for serving static assets, users working with your solution will need to load the library only once. On subsequent requests, or even when using your solution in the future, the web browser will reuse the previously cached copy of the library rather than downloading it again. As a result, the page with your solution will load significantly faster.

## Verify the contents of your bundle

When building your project in the debug mode, the SharePoint Framework provides you with the [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/) chart showing the different scripts included in the generated bundle. You can find this chart in the **./dist/[solution-name].stats.html** file.

![Webpack Visualizer chart illustrating the contents of a sample SharePoint Framework bundle](../../../images/guidance-productionbuilds-webpack-visualizer-angular.png)

Using the Webpack Visualizer chart is a convenient way for you to verify, that the generated bundle doesn't contain any unnecessary scripts and how the included scripts affect the total bundle size. Keep in mind, that the displayed size reflects the debug build and would be significantly smaller for a release build.

More detailed information, used to generate the chart, is included in the **./dist/[solution-name].stats.json** file. Using this file you can find out why a specific script has been included in the bundle or if a particular script is used in multiple bundles. With this information you can optimize your bundles improving the loading time of your solution.

## Choose your primary client-side library

If there are multiple components on the same page, or even on different pages across the portal, and they all use the same library loaded from the same URL, the web browser will also reuse the copy it cached previously, which will lead to the portal loading faster. This is exactly why it is essential for organizations to rationalize which libraries and in which versions they use and where they load them from, not only for a specific project but for the whole organization. Such policy will let users working with the different applications be more productive by loading the applications faster. By reusing the previously downloaded assets, it will also limit the load on the network freeing its bandwidth for other purposes.

> For more information about working with external libraries see the [Use existing JavaScript libraries in SharePoint Framework client-side web parts](../webparts/guidance/use-existing-javascript-libraries) article.

## Reference only the necessary components

Sometimes, when working with external libraries, you might actually not need the whole library but only a small portion of it. Including the whole library will unnecessary add to the size of your bundle increasing its load time. Instead, you should always consider loading only the specific parts of the particular library that you actually need.

To illustrate this, take the [Lodash](https://lodash.com) library as an example. Lodash is a collection of utilities helping you to perform certain operations in your code. The odds are high, that when working with Lodash, you will only need a few specific methods rather than the complete library. If you however referenced the whole library using the following code:

```ts
import * as _ from 'lodash';
```

It would add 533 KB to your unoptimized bundle.

![The complete Lodash library included in a bundle, highlighted in the Webpack Visualizer chart](../../../images/guidance-productionbuilds-import-lodash.png)

Instead, if you referenced only the specific Lodash method using the following code:

```ts
const at: any = require('lodash/at');
```

It would add 42 KB to your unoptimized bundle.

![Specific Lodash method included in a bundle, highlighted in the Webpack Visualizer chart](../../../images/guidance-productionbuilds-import-lodash-at.png)

Specifically with regards to Lodash, but which could also be the case with other libraries, referencing specific methods instead of the whole library comes with a price. Currently, Lodash doesn't support loading specific methods inside of SharePoint Framework projects using the **import** notation. Instead, you have to use a **require** statement which doesn't offer you the typesafety capabilities that using the **import** statement does. Eventually it is up to you to decide if loading significantly more code into your bundles is worth preserving the typesafety capabilities.

> Some of the Lodash methods are provided with the SharePoint Framework in the **@microsoft/sp-lodash-subset** library. Before using Lodash, verify if the method that you want to use isn't already available in the **@microsoft/sp-lodash-subset** library, which is already available as a part of the SharePoint Framework and does not need to be included in your bundle.