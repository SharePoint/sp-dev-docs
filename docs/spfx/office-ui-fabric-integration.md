---
title: Using Office UI Fabric Core and Fabric React in SharePoint Framework
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Using Office UI Fabric Core and Fabric React in SharePoint Framework

The Office UI Fabric is the official front-end framework for building experiences in Office 365 and SharePoint. SharePoint provides seamless integration with Fabric that enables Microsoft to deliver a robust and consistent design language across various SharePoint experiences such as modern team sites, modern pages, and modern lists. Additionally, the Office UI Fabric is available for developers in the SharePoint Framework when building custom SharePoint solutions.

## Summary

Microsoft uses Fabric Core and Fabric React in SharePoint. Microsoft regularly pushes updates to SharePoint Online which could also update the Fabric Core and Fabric React versions as well. These updates could potentially conflict with third party customer solutions built with previous versions of Fabric Core and Fabric React, which could cause exceptions in those customizations. The primary reason for these types of breaks is the use of **Global CSS styles** in both Fabric libraries. Such conflicts need to be avoided at all costs. 

> The challenge with Global CSS styles is well explained in the following presentation within the context of React and JS: [React CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js).

In order to achieve reliability, one of the main problems we need to solve is that of **Global CSS styles**. This accounts to not using global class names in the HTML markup and instead using Fabric Core mixins and variables in the SASS declaration file. This involves importing the Fabric Core's SASS declarations in your SASS file and then consuming the variables and mixins appropriately. 

## Goals

The goal of the SharePoint Framework is to allow both Microsoft and customers build rich, beautiful, and consistent user experiences on top of SharePoint. In accordance with these goals, below are the key design  principles:

* Customers should be able to smoothly and reliably consume Fabric Core and Fabric React in their solutions.
* Microsoft will roll out updated experiences that consume updated versions of Fabric Core and Fabric React in SharePoint without conflicting with customer's solutions.
* Customers can customize and override the default styles, designs, and components to tailor the solution's needs.

There are two parts of the Office UI Fabric that are available to be used by developers:

* [Office UI Fabric Core](http://dev.office.com/fabric)

  A set of core styles, typography, a responsive grid, animations, icons, and other fundamental building blocks of the overall design language.

* [Office UI Fabric React](http://dev.office.com/fabric#/components)

  A set of React components built on top of the Fabric design language for use in React-based projects.

## SPFx Fabric Core Package

The SPFx Fabric Core npm package - sp-office-ui-fabric-core - contains a subset of supported Fabric Core styles that can be safely consumed within a SharePoint Framework component. 

The following core styles are supported in the package:
- Typography
- Layouts
- Colors
- Themes
- Localization

The following are not yet supported in the package:
- Animations
- Icons

Starting with the SharePoint Framework yeoman generator version 1.3.4, the default project (web parts and extensions) templates will come setup with the new sp-office-ui-fabric-core package and consume core styles from the package instead of using global CSS styles. 

### Updating existing projects

To use the SPFx Fabric Core package in your existing project, install the package as dev dependency:

```
npm install @microsoft/sp-office-ui-fabric-core --save-dev
```

Once installed, you can then import the Fabric Core SASS declarations in your SASS defintion file and use the mixins and variables as decribed in the section below. 

### Using Fabric Core styles

In order to use the Fabric Core styles first you will need to import the SPFabricCore declarations in your SASS file.

> Note: Make sure you have the sp-office-ui-fabric-core npm package installed.

```css
@import '~@microsoft/sp-office-ui-fabric-core/dist/sass/SPFabricCore.scss';
```

Now, you can use the core styles as mixins and variables.

```css
.row {
    @include ms-Grid-row;
    @include ms-fontColor-white;
    background-color: $ms-color-themeDark;
    padding: 20px;
  }
 ``` 

## Using Office UI Fabric React

It is recommended to install the latest Office UI Fabric React package and place an explicit dependency on that specific version of the package. This will include the components used in your SPFx solution in your component bundle, either the web part or extension depending on where you use the Fabric React components. 

> Please note that Fabric React versions 2.x or older are not supported in SharePoint Framework.

Once the Fabric React package is installed, you can import the required components from the Fabric React bundle.

```Javascript
//import Button component from Fabric React Button bundle
import { Button } from 'office-ui-fabric-react/lib/Button';

//use it in your component
render() {
  ...
  <div>
    <Button>click me</Button>
  </div>
  ...
}
```

Fabric React package includes the supported Fabric Core styles used in the Fabric React components. It is recommended to import the Fabric Core styles from the Fabric React package instead of the sp-office-ui-fabric-core package to ensure the right styles are used in your component. 

Since the sp-office-ui-fabric-core package is already installed in your solution by the yeoman generator, it is recommended to uninstall that package if you decide to use Fabric Components and reduce your component bundle size.

```
npm uninstall @microsoft/sp-office-ui-fabric-core --save-dev
```

Then you can import the core styles from the SASS declarations available in the Fabric React packge.

```css
@import '~office-ui-fabric-react/dist/sass/References.scss';
```

### Understanding this approach and its shortcomings

Fabric Components in your solution are locked to that specific version of Fabric React you installed. You will need to update the Fabric React package to get any new components if they are available in a newer package version. Since the Fabric Components are included in the component bundle, it may increase the size of your component bundle. However, this approach is the only approach that is officially supported when Office UI Fabric React is being used in SharePoint Framework solutions.


## Additional Details on the CSS Challenge with Office UI Fabric
The following concepts and references provide insights on the challenge with Office UI Fabric usage in the context of client-side web parts. 

**Global CSS styles** and how to avoid them at all cost: this is a big problem. Today, both Fabric Core and Fabric React have global styles. Lack of any native solutions from the browser to manage the style scoping makes this a very difficult problem.
  
  - [Scope CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope) is in early stages of discussion. 
  - iframes are not a good option to isolate styles.
  - [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is another standard that talks about scoped styles but is still in discussion stages.
  - [This](https://speakerdeck.com/vjeux/react-css-in-js) discussion explains the problem well. There is plenty of other documentation on the web about the solutions to the global namespace menace.
 
**[CSS Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)** and how it applies to web UI. Higher specificity styles override the lower specificity styles, but the key thing to understand is how the specificity rules apply. In general, the precedence order from highest to lowest is as follows:
  - The style attribute (e.g. `style="background:red;"`)
  - Id selectors (e.g. `#myDiv { }`)
  - Class selectors (e.g. `.myCssClass{}`), attributre selectors (e.g. `[type="radio"]`), and pseudo-classes (e.g. `:hover`)
  - Type selectors (e.g. `h1`)

***Loading order*** - If two classes are applied on an element and they have the same specificity, the class that is loaded later takes precedence. As shown in the code below, the button will appear red. If the order of the style tags is changed, the button will appear green. This is an important concept, and if not used correctly, the user experience can become load order dependent (i.e. inconsistent).

```HTML
<style>
  .greenButton { color: green; }
</style>
<style>
  .redButton { color: red; }
</style>
<body>
  <button class="greenButton redButton"></button>
</body>
```

## Other Approaches Considered and Discarded
Here are some additional insights on the other approaches which were considered, but discarded, since they did not achieve the key objectives to enable 3rd party developers to safely use the Office UI Fabric styles.

**Office UI Fabric Core**

The web part developer would not be required to do anything explicitly to get the scoping to work. We planned to solve this problem through CSS specificity and descendant selectors. The Fabric Core team would ship multiple copies of Fabric Core css. e.g. `fabric-6.css`, `fabric-6-scoped.css`, `fabric-6.0.0.css`, `fabric-6.0.0-scoped.css`.

All the styles in the scoped CSS files would be inside a descendant selector e.g. `"ms-Fabric-core--v6 ms-Icon--List"`. At compile time, the tooling would collect the version of the Office UI Fabric Core the web part was built with. This version could be the one that comes with SPFx. Alternatively, web part developers could specify an explicit dependency on a specific version of Office UI Fabric Core in their **package.json** file.

The web part div would be assigned this scope i.e. `<div data-sp-webpart class="ms-Fabric-core--v6">`. The framework would load the specific major version of the Fabric core scoped CSS file. If the web part was built with version 6.0.0 of Fabric core CSS, the framework would download `fabric-6-scoped.css` when the web part was loaded.

The rest of the page would contain unscoped Office UI Fabric Core styles. This way, as per CSS specificity rules, the scoped CSS would take precedence within the web part div. The web part and its contents would align to the specific version of the Office UI Fabric Core the developer had chosen.

**Overriding** Fabric Core styles would not be supported.  

```Javascript
// Sample of how the scoping would work.
import { SPComponentLoader } from '@microsoft/sp-loader';

export default class MyWebPart {
    constructor() {
        super();

        SPComponentLoader.loadCss('https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/6.0.0/css/fabric-6.0.0.scoped.css');
    }
}

protected render(): void {
  <div className={css('ms-Fabric-core--v6')}>
    { // Rest of the web part UI }
  </div>
}
```

After analyzing this strategy for a while it was decided that the descendant selector approach has two serious shortcomings that would make it impossible to build a web part that would never break.

**Lack of reliable nesting support** - This approach only works if the Microsoft user experience (i.e. page and first party web parts) use an unscoped version of the Office UI Fabric Core. i.e. `ms-Icon--List` while the third party web parts only use scoped Office UI Fabric Core css as explained above. The reason being that the specificity of the scoped CSS applied on the web part overrides unscoped CSS on the page. Keep in mind, as explained above, if CSS specificity of two classes is the same, then their loading order plays a role in how the CSS classes will be applied. The class that loads later will take precedence. Hence, the higher specificity of the scoped CSS is important in getting a consistent experience.

Further, multiple extensions, one contained in the other, cannot use different Fabric Core versions. For instance, in the 
following example, only `ms-Fabric-core--v6` would get applied:

```HTML
<div className={css('ms-Fabric-core--v6')}>
  { // Rest of the web part UI }
    { // inside of this SPExtension trying to use different Fabric core version does not work }
    <div className={css('ms-Fabric-core--v8')}>
    </div>
</div>
```

Here's a more simplistic sample demonstrating the challenge:

```HTML
<html>
<head>
  <title>CSS specifity test</title>
  <style>
  .myButton {
      background-color: brown;
      color: brown;
      height: 20px;
      width: 40px;
  }
  </style>
  <style>
  .scope2 .myButton {
      background-color: green;
      color: green;
  }
  </style>
  <style>
  .scope3 .myButton {
      background-color: yellow;
      color: yellow;
  }
  </style>
  <style>
  .scope1 .myButton {
      background-color: red;
      color: red;
  }
  </style>
</head>
<body>
  <div>
    <span>These tests demonstrate descendant selectors, nesting and load order problems.</span>

    <div>
      <br/>
      <span>This test depicts that a descendant selector with the same specificity does not allow nesting.
      All buttons below do not take the innermost scope (i.e. they should be different colors), but they are all red.
      Further, if you change the ordering of the style tags, the colors will change. (i.e. the UI is load order dependant.)</span> 
      <div class='scope1'>
        <button class='myButton'</button>
        <div class='scope2'>
          <button class='myButton'></button>
          <div class='scope3'>
            <button class='myButton'></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

**Leakage from unscoped classes** - There is another problem with descendant selectors. Note in the above example, the height and the width styles from the unscoped myButton class are applied to all the buttons. This implies that a change in that style could inadvertently break html using scoped markup. Say for example, for some reason at the app level we decide to make height 0px on the myButton class. That will result in all 3rd party web parts using the myButton class to have a height of 0px (i.e. a serious regression in the user experience).


