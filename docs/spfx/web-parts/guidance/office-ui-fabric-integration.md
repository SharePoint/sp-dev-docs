# Using Office UI Fabric Core and Fabric React in SPFx client-side web parts

Office UI Fabric is the official front-end framework for building experiences in Office 365 and SharePoint. SharePoint provides a seamless integration with Fabric that enables Microsoft to deliver robust and consistent design language across various SharePoint experiences such as modern team sites, modern pages and modern lists. Additionally, we want Office UI Fabric to be available for developers in SharePoint Framework to build custom SharePoint solutions.

> Integration and usage of Office UI Fabric is still a work in progress. The purpose of this document is to provide a status update to SPFx developers. Very soon we plan to publish a final plan.

## Goals

There are two parts of Office UI Fabric that are expected to be used by developers:

  1. [Office UI Fabric Core](http://dev.office.com/fabric) a.k.a. Fabric Core - this is a set of core style, typography, responsive grid, animations, icons and other fundamental building blocks of the overall design language.

  2. [Office UI Fabric React](http://dev.office.com/fabric#/components) a.k.a. Fabric React - this package contains a set of React components built on top of the Fabric design language.
  
One of the goals of SharePoint Framework is to allow both Microsoft and customers to build rich, beautiful and consistent solutions on top of SharePoint. Based on that, here are our design principles:

* All customers to smoothly and reliably consume Fabric Core and Fabric React in their solutions.
* Microsoft to roll out updated experiences that consume updated versions of Fabric Core and Fabric React in SharePoint without conflicting with customer's solutions.
* Customers to customize and override the styles, designs and components tailored to their solution's needs.
* Customers should be able to build solutions with non-React based frameworks.

## Summary

Microsoft uses Fabric Core and Fabric React in SharePoint. Microsoft keeps pushing updates to the SharePoint Online on a regular basis and SharePoint experiences are likely to keep updating the version of Fabric Core and Fabric React they use. These updates can potentially conflict with third party solutions that were possibly built with previous version of Fabric Core and Fabric React, which can cause exceptions in the customizations. The primary reason for these breaks is the use of **Global CSS styles** in both Fabric libraries. Such conflicts need to be avoided at all cost. 

In order to achieve reliability, one of the main problems we need to solve is that of **Global CSS styles**. Both Fabric Core and fabric.component.css use global styles at the current time.

For the above-mentioned reasons, at the current time, customer solutions cannot yet safely use parts of Fabric. That said, we do understand that developers need Fabric Core and Fabric React to build their solutions. We are working to resolve this as quickly as possible.

Here's a summary of currently supported options to use Office UI Fabric with SharePoint Framework solution based on used JavaScript framework

- React - You can only use Office UI Fabric safely by **statically link** to the Fabric React components
- Other JS libraries - Usage of Office UI Fabric with SharePoint Framework solution is **not** supported

> Example for the current versioning challenge - A web part consumes the class ms-Icon--list when they build their web part. At a later date, Fabric decides to change the definition of this class. The web part that had made an assumption on the previous implementation can break. Similarly, let's say, the web part uses the class ms-Button from Fabric React. And at a future date the Fabric React team changes the implementation of the Button in a big way along with the styles in the ms-Button class. That would likely break the web part.

> Challenge with Global CSS styles in well explained in the following presentation in the context of React and JSS  - [React CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js).

## How to use Office UI Fabric React in safe way in your web part

Here are recommendations to use Fabric in React based web parts in safe and reliable way. 

- Web part developers are required to take an explicit dependency on a specific version of Fabric React version 2.0 in their package.json file "office-ui-fabric-react":"2.0.0". Please note, Fabric React versions older than 2.x are not supported.
- The web part developer will need to **statically link** to the Fabric React components. This will include the Fabric React component in your web part bundle. If the page level implementation of the Button were to change, it will not affect your web part adversely.
- **Overriding** Fabric React component styles should be done only sparingly and inside a local scope. A developer can override using custom CSS classes with !important and style tags. Both will have a higher specificity than the component classes. Please note, if you override using a simple class, then you can run into load order issues. i.e. if ms-Button loads after your class, it will take precedence because their specificity is same.
- **Theming** should just work by default. No extra work is required on the part of the developer.

Following code snippet shows how to perform static and dynamic linking of libraries.

```Javascript
  // This sample demonstrates how static linking should be done for Fabric React components.
  // Remember to explicitly add a dependency on a specific version of 
  // office-ui-fabric-react in your package.json file.

  // correct - static linking.
  import { Button } from 'office-ui-fabric-react/lib/Button';

  // incorrect - dynamic linking.
  import { Button } from '@microsoft/office-ui-fabric-react';

  render() {
    ...
    <div>
      <Button>click me</Button>
    </div>
    ...
  }
```

***Understanding this approach and its shortcomings***

- Components in your web part are locked to a version of Fabric React you used when you built the web part. They will not automatically evolve with the surrounding page. You will need to manually update your web part to adapt to newer versions of Fabric React.
- The page may be less performant as it may load more CSS, but it will be reliable.
- The static linking bloats up your web part bundle, but dynamic linking is too fragile with future updates introduced in SharePoint Online. Static linking is the only approach that is officially supported when Office UI Fabric React is being used in the SharePoint Framework solutions.

### Currently unsupported features

-  **Office UI Fabric Core**: Fabric Core implementation uses current global styles e.g. .ms-Icon--list and hence there is no safe way to use Fabric core in your web part without potential challenges in the future. Work is being done to address this challenge and more details will be shared when situation changes.

- **fabric.components.css**: This file contains global classes that conflict with Fabric React. e.g. ms-Button in fabric.component.css will override the Button styles in Fabric React Button component. Including fabric.component.css in a web part is bound to break the surrounding page or other web parts on the page. We are working on a solution and will release an update shortly.


## Using Office UI Fabric with non-React based web parts

This is currently not supported and possible implementations could have unexpected issues when newer version of the Office UI Fabric is released. We are working to on creating a reliable integration story for **Office UI Fabric Core**, **fabric.component.css** and **Non-React based web parts**. 

## Additional details on the CSS challenge with Office UI Fabric
Following concepts and references provide insights on the challenge with Office UI Fabric usage in the context of client-side web parts. 

**Global CSS styles** and how to avoid them at all cost: this is a big problem. Today, both Fabric Core has styles. Lack of any native solutions from the browser to manage the style scoping makes this a very difficult problem.
  
  - [Scope CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope) is in early stages of discussion. 
  - iframes are not a good option to isolate styles.
  - [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is another standard that talks about scoped styles but is still in discussion stages.
          
    [This](https://speakerdeck.com/vjeux/react-css-in-js) discussion explains the problem well. There is plenty of other documentation on the web about the solutions to the global namespace menace.
 
**[CSS Specifity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)** and how it applies to web UI. Higher specificity styles override the lower specificity styles.  But the key thing to understand is how the specificity rules apply. In general, the precedence order is as follows:
  - The style (e.g. style="background:red;") attribute has the highest specifity.
  - Id selectors (e.g. #myDiv { }) is next in the list.
  - Class selectors (e.g. .myCssClass{}), attributre selectors (e.g. [type="radio"]) and pseudo-classes (e.g. :hover)
    come next.
  - Type selectors (e.g. h1) come last.

***Loading order*** - If two classes are applied on an element and they have the same specificity, the class that is loaded later take precedence. As shown in the code, the button will appear red. If the order of the style tags is changed, the button will appear green. This is an important concept and if not used correctly, the user experience can become load order dependent i.de. inconsistent.

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

## Other approaches considered and discarded
Here are some additional insights on the other approaches which were considered, but discarded, since they did not achieve the key objectives to enable 3rd party developers to safely use Office UI Fabric styles.

**Office UI Fabric Core**

The web part developer will not be required to do anything explicitly to get the scoping to work. We plan to solve this problem through CSS specificity and descendant selector. The Fabric Core team will ship multiple copies of Fabric Core css. e.g. `fabric-6.css`, `fabric-6-scoped.css`, `fabric-6.0.0.css`, `fabric-6.0.0-scoped.css`.

All the styles in the scoped CSS files are inside a descendant selector e.g. "ms-Fabric-core--v6 ms-Icon--list". At compile time tooling will collect the version of the Office UI Fabric Core the web part was built with. This version can be the one that comes with SPFx. Alternatively, web part developers could take an explicit dependency on a specific version if Office UI Fabric Core in their package.json file.

The web part div will be assigned this scope i.e. `<div data-sp-webpart class="ms-Fabric-core--v6">`. The framework will load the specific major version of the Fabric core scoped CSS file. If the web part is built with version 6.0.0 of Fabric core CSS, the framework will download fabric-6-scoped.css at web part load time.

The rest of the page will contain unscoped Office UI Fabric Core. This way, as per CSS specificity rules, the scoped CSS take precedence inside the web part div. The whole web part and its contents will align to a specific version of Office UI Fabric Core the developer has chosen.

**Overriding** Fabric Core styles is not supported.  

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

After analyzing for a while we decided that the descendant selector approach has two serious shortcomings because of which it is impossible to build a web part that will never break.

**Lack of reliable nesting support** - This approach only works if the Microsoft user experience (i.e. page and first party web parts) use uncoped version of Office UI Fabric Core. i.e. ms-Icon--list and the third party web parts use only the scoped Office UI Fabric Core css as explained above. The reason being that the specificity of the scoped CSS applied on the web part overrides unscoped CSS on the page. Please note, as explained above, if CSS specificity of two classes is the same then their loading order plays a role in how the CSS classes will be applied. The class that loads later will take precedence. Hence, the higher specificity of the scoped CSS is important in getting a consistent experience.

Further, multiple extensions, one contained in the other, cannot use different Fabric Core versions. i.e. in the 
following example, only ms-Fabric-core--v6 will get applied.

```HTML
<div className={css('ms-Fabric-core--v6')}>
  { // Rest of the web part UI }
    { // inside of this SPExtension trying to use different Fabric core version does not work }
    <div className={css('ms-Fabric-core--v8')}>
    </div>
</div>
```

Here's a more simplistic sample demonstrating the challenge.

```HTML
  <html>
  <head>
  <title>CSS specifity test</title>
  <style>
  .myButton {
      background-color: brown;
      color:brown;
      height:20px;
      width:40px;
  }
  </style>
  <style>
  .scope2 .myButton {
      background-color: green;
      color:green;
  }
  </style>
  <style>
  .scope3 .myButton {
      background-color: yellow;
      color:yellow;
  }
  </style>
  <style>
  .scope1 .myButton {
      background-color: red;
      color:red;
  }
  </style>
</head>
<body>
  <div>
    <span>These tests demonstrate descendant selectors, nesting and load order problems.</span>

    <div>
      <br/>
      <span>This test depicts that a descendant selector with the same specificity do not allow nesting.
      All buttons below do not take the innermost scope i.e. they should be different colors, but they are red.
      Further, if you change the ordering of the style tags, the colors will change. i.e. the UI is load order dependant.</span> 
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

**Leakage from unscoped classes** - There is another problem with descendant selectors. Note in the above example, the height and the width styles from the unscoped myButton class are applied to all the buttons. This implies that a change in that style could inadvertently break html using scoped markup. Say for example, for some reason at the app level we decide to make height 0px on the myButton class. That will result in all 3rd party web parts using the myButton class to have a height of 0 i.e. a serious regression in the user experience.
