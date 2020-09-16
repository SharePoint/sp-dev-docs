---
title: SharePoint Framework guidance on dynamic loading of packages
description: Techniques to optimize the run-time size and execution speed of your SharePoint Framework component.
ms.date: 09/16/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Dynamic loading of packages in SharePoint Framework

When building SharePoint Framework components, it's common to reference third-party libraries such as [Office UI Fabric React](https://www.npmjs.com/package/office-ui-fabric-react) for user interface controls or [Moment.js](https://momentjs.com/) for time handling. Each of these libraries will add size of the bundled JavaScript file for the component. As an example, Moment.js adds ~250 KB to the resulting bundle!

> [!NOTE]
> A JavaScript *bundle* is a JavaScript file that combines one or more JavaScript files or style sheets. When you package an SPFx solution, by default all your code, and the libraries you import into your project, are bundled into one **\*.js** file. Splitting up a bundle is the operation of generating multiple **\*.js** files instead of one, so that they can be loaded individually.

Depending on the component, these third-party libraries may or may not be used in all parts of the components lifecycle. Maybe they're only used in edit mode or in the property pane, or maybe they're needed once a user clicks a link or button in the component.

If the SPFx component is more like a single page application (SPA), optimizing the size might not be important, but if it's a web part added to a page or even used multiple times on a page, like a search web part, then reducing the amount of script loaded and the amount of script being executed on a page matters for load time of the page. This can have a significant impact on mobile experiences.

To improve on the speed a SPFx component takes to load on a page it's possible to take advantage of splitting the bundle into multiple JavaScript parts, and dynamically load these individually bundled packages as needed.

## Split up multiple web parts to be loaded individually

An SPFx project with multiple web parts or extensions contains the file **./config/config.json** similar to the following:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/config.2.0.schema.json",
  "version": "2.0",
  "bundles": {
    "my-spfx": {
      "components": [
        {
          "entrypoint": "./lib/webparts/part1/part1.js",
          "manifest": "./src/webparts/part1/part1.manifest.json"
        },
        {
          "entrypoint": "./lib/webparts/part2/part2.js",
          "manifest": "./src/webparts/part2/part2.manifest.json"
        }
      ]
    }
  },
  "externals": {},
  "localizedResources": {}
}
```

In the above configuration, both web parts are included in the same JavaScript bundle. This means when a user adds one of the web parts to a page, both are loaded. For scenarios where both web parts are on the same page at the same time, this is fine as it reduced load time downloading one file instead of two.

If however the web parts are used separately, then it's better to have them split into two files to reduce what the page needs to download to run just one of them.

This can be achieved by modifying **config/config.json** so that each web part is bundled as a separate JavaScript file:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/config.2.0.schema.json",
  "version": "2.0",
  "bundles": {
    "my-spfx-1": {
      "components": [
        {
          "entrypoint": "./lib/webparts/part1/part1.js",
          "manifest": "./src/webparts/part1/part1.manifest.json"
        }
      ]
    },
    "my-spfx-2": {
      "components": [
        {
          "entrypoint": "./lib/webparts/part2/part2.js",
          "manifest": "./src/webparts/part2/part2.manifest.json"
        }
      ]
    }
  },
  "externals": {},
  "localizedResources": {}
}
```

## Analyze your bundle

In order to get an overview of where to start,  optimize, see the article [Optimize SharePoint Framework builds for production](./toolchain/optimize-builds-for-production.md), which illustrates how you can get a visual map of which part of your code or third-party library takes up space in your bundle.

## Load third-party components dynamically

When a SharePoint Framework solution is packaged, the build toolchain uses [webpack](https://webpack.js.org/) to generate the bundle(s). One of webpack's features is the ability to dynamically import parts of an application. You can implement this in SharePoint Framework projects with a minor code refactoring.

### Normal import

In the following code, the Moment.js library will be included solution's JavaScript bundle. This code will always be loaded on the page even if the method `GetTime()` is never called.

```typescript
import * as moment from moment

export default class MyClass {
  public GetTime(dateString:string){
    return moment(dateString).format("LL");
  }
}
```

### Dynamic import

However, in the following code, the Moment.js library is asynchronously loaded when the `GetTime()` method is called, which will reduce the initial load and execution time. Notice the additional `webpackChuckName` code comment

```typescript
export default class MyClass {
  public async GetTime(dateString:string) {
    const moment = await import(
      /* webpackChunkName: 'my-moment' */
      'moment'
    );
    return moment(dateString).format("LL");
  }
}
```

> [!NOTE]
> If your **config/tsconfig.json** file has `"module": "commonjs"` and not `"module": "esnext"`, you'll need the following work-around in order for the dynamic library to be split out of the bundle.

```typescript
declare var System: any;

export default class MyClass {
  public async GetTime(dateString:string){
    const moment = await System.import(
      /* webpackChunkName: 'my-moment' */
      'moment'
    );
    return moment(dateString).format("LL");
  }
}
```

### Verify code splitting and dynamic import

To verify that dynamic import is happening, open the **./dist** folder after executing the **gulp bundle** task and look for the dynamically loaded library as a separate JavaScript file. In the following image, the Moment.js library is split into its own file.

![Multiple bundles](../images/dynamic-bundling.png)

Not every file or library should be dynamically imported. Instead, consider grouping like code blocks together for certain scenarios or capabilities into a single bundle.

For example, create a file **MyStuff.ts, which references a number of libraries, and then dynamically load **MyStuff**. In this case, the libraries **third-party** and **left-party** will be bundled into **my-stuff.js**.

```typescript
// MyStuff.ts

import { Something } from 'third-party;'
import * as Foo from 'left-party';

// Other file
await import(
  /* webpackChunkName: 'my-stuff' */
  './MyStuff'
);
```

## Special property pane dynamic loading

Another use case for this capability is to dynamically import code that is only used in the property pane. In this case, you should only download this code into the browser when the web part's property pane is active.

In your main web part file, create a method named `loadPropertyPaneResources()`. This method will execute before the property pane of a web part is shown. This allows dynamic loading of resources needed for the property pane only.

1. Create a new file **HelloWorldWebPartPropertyPaneStuff.ts**
1. Move all property pane-related code to that file
1. Create the following method in the main web part class

```typescript
protected loadPropertyPaneResources(): Promise<void> {
  return import(
    /* webpackChunkName: 'HelloWorldWebPartPropertyPaneStuff' */
    './HelloWorldWebPartPropertyPaneStuff'
  ).then(component => {
    this._propertyPaneHelper = new component.HelloWorldWebPartPropertyPaneStuff(this);
  });
}
```

## Summary

When building SPFx solutions consisting of several components or if you're using third-party libraries, consider dynamic imports. First analyze the resulting bundle size, and use the strategies outlined in this page to split the code into multiple bundles where each one is loaded only when needed. This will reduce the time it takes for an end user to load and execute the page.
