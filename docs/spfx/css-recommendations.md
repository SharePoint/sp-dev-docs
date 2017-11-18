---
title: Recommendations for working with CSS in SharePoint Framework solutions
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Recommendations for working with CSS in SharePoint Framework solutions

When building SharePoint Framework solutions, you can use CSS to define how your customization should look like and behave. This article describes how you can make the best use of the capabilities provided with the SharePoint Framework and build your CSS styles in a robust way.

## SharePoint Framework customizations are part of the page

When building SharePoint customizations using the add-in model, the solution is isolated from other elements on the page. Your code is executed either in an iframe, as an add-in part, or as an immersive application taking control of the whole page. In both cases, your code is not affected by other elements and styles defined on the page.

SharePoint Framework solutions are a part of the page and integrate fully with the page's DOM. While this removes a number of restrictions that come with the add-in model, it exposes your solution to a risk. Because it's a part of the page, unless explicitly isolated, all CSS styles present on the page will apply to it, potentially resulting in an experience different from intended. To avoid such risks, you should define your CSS styles in such a way so that they won't affect anything else on the page other than your customization.

## Organize CSS files in your solution

The UI of your solutions often consists of multiple building blocks. In many JavaScript libraries these building blocks are called components. A component can be simple and define only the presentation or it can be more complex and include state and other components. Splitting your solution into multiple components allows you to simplify the development process and makes them easier to test and reuse in your solution.

Because components have presentation, they often require CSS styles. Ideally, components should be isolated and be able to be used on their own. With that in mind, it makes perfect sense for you to store CSS styles for the particular component along with all other asset files next to the component. Following, is a sample structure of a React application with a number of components each with its own CSS file.

```text
todoWebPart\components
                      \todoList
                               \todoList.tsx
                               \todoList.module.scss
                      \todoItem
                               \todoItem.tsx
                               \todoItem.module.scss
```

## Use Sass

In the SharePoint Framework you can use both CSS and Sass. Sass is a superset of CSS and offers you a number of features such as using variables, nesting selectors or using mixins - all of which simplify working with and managing CSS styles over long term. For a complete set of features see the [Sass website](http://sass-lang.com). All valid CSS is also valid Sass which is very helpful if you haven't worked with Sass before and want to gradually learn its capabilities.

## Avoid using ID's in markup

Using the SharePoint Framework you build customizations that end-users add to SharePoint. It's impossible to tell upfront if the particular customization will be used only once on a page or if there will be multiple instances of it. To avoid issues, you should always assume that there are multiple instances of your customization on the same page. With that in mind, you should avoid using any ID's in your markup. ID's are meant to be unique on a page and if a user added your web part to the page twice, it would violate this premise possibly leading to errors.

**Bad practice:**

```ts
// ...

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div id="helloWorld">
        Hello world
      </div>`;
  }

  // ...
}
```

**Good practice:**

```ts
// ...

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.helloWorld}">
        Hello world
      </div>`;
  }

  // ...
}
```

## Use CSS modules to avoid styling conflicts

SharePoint Framework solutions are a part of the page. To ensure that CSS styles for one component don't affect other elements on the page, you should define your CSS selectors in such a way that they apply only to the DOM of your solution. It's tedious and error-prone to do this manually, but SharePoint Framework can do this automatically for you.

To help you avoid stylings conflicts, SharePoint Framework uses [CSS modules](https://github.com/css-modules/css-modules). When building the project, the SharePoint Framework toolchain processes all files with the **.module.scss** extension. For each file, it reads all class selectors and appends a unique hash value to them. Once finished, it writes the updated selectors to intermediate CSS files that are included in the generated web part bundle.

Following the example above, assume you had the following two Sass files:

**todoList.module.scss:**

```scss
.todoList {
  margin: 1em 0;

  .text {
    font-weight: bold;
    font-size: 1.5em;
  }
}
```

**todoItem.module.scss:**

```scss
.todoItem {
  padding: 0.5em 1em;

  .text {
    font-size: 0.9em;
  }
}
```

After building the project, in the **lib** folder you would see the following two CSS files generated (line breaks and indenting added for readability):

**todoList.module.css:**

```css
.todoList_3e9d35f0 {
  margin:1em 0
}

.todoList_3e9d35f0 .text_3e9d35f0 {
  font-weight:700;
  font-size:1.5em
}
```

**todoItem.module.css:**

```css
.todoItem_f7081cc4 {
  padding:.5em 1em
}

.todoItem_f7081cc4 .text_f7081cc4 {
  font-size:.9em
}
```

Even though there was a **.text** class defined in both Sass files, notice how in the generated CSS files it has two different hashes appended to it, becoming a unique class name specific to each component.

The CSS class names in CSS modules are generated dynamically, which makes it impossible for you to refer to them in your code directly. Instead, when processing CSS modules, the SharePoint Framework toolchain generates a JavaScript file with references to the generated class names.

**todoList.module.scss.js:**

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
require('./todoList.module.css');
var styles = {
    todoList: 'todoList_3e9d35f0',
    text: 'text_3e9d35f0',
};
exports.default = styles;
/* tslint:enable */

//# sourceMappingURL=todoList.module.scss.js.map
```

To use the generated class names in your code, you first import the styles of your component and then use the property pointing to the particular class:

```ts
import styles from './todoList.module.scss';
// ...

export default class TodoList extends React.Component<ITodoListProps, void> {
  public render(): React.ReactElement<ITodoListProps> {
    return (
      <div className={styles.todoList}>
        <div className={styles.text}>Hello world</div>
      </div>
    );
  }
}
```

For the CSS modules to work correctly you have to meet the following conditions:

* your Sass files must have the **.module.scss** extension. If you use the **.scss** extension without **.module**, you will see a warning in the build process. The Sass file will be transpiled to an intermediate CSS file but the class names **will not be made unique**. In cases, when you need to override 3rd party CSS styles, this might be intended
* your CSS class names must be valid JavaScript variable names, so for example they cannot contain hyphens: `todoList` is correct but `todo-list` isn't
* camelCase naming for classes is recommended, but it's not enforced

## Wrap your CSS styles in a class named after the component

By combining CSS modules with Sass' support for nesting rule sets you can simplify your CSS styles and ensure that they won't affect other elements on the page.

When building CSS styles for a component, wrap them in a class named after the component. Then, in the component, assign that class to the component's root element.

**todoList.module.scss:**

```scss
.todoList {
  a {
    display: block;
  }
}
```

**TodoList.tsx:**

```tsx
// ...

export default class TodoList extends React.Component<ITodoListProps, void> {
  public render(): React.ReactElement<ITodoListProps> {
    return (
      <div className={styles.todoList}>
        ...
      </div>
    );
  }
}
```

After transpilation, the generated CSS file will look similar to:

```css
.todoList_3e9d35f0 a {
  display: block;
}
```

Because the selector begins with the unique class name, specific to your component, the alternative presentation will apply only to hyperlinks inside your component.

## Vendor prefix handling in SPFX
In SPFx no vendor prefixed style properties are required in the SASS or CSS files of a project. If some of the SPFx supported browsers require prefixes they were added after the SASS to CSS compilation automatically. This method is also known as auto-prefixing and is a fundamental part of the CSS build chain in SPFx.
In case a web part should use the new flex box model defined by `display: flex` declaration. Some older WebKit-based and Internet Explorer versions require a particular vendor prefix defined in the CSS.

```css
.container{
  display: flex;
}
```

In the SASS code of the SPFx artefact does not need to have vendor prefixes included. After the SASS-to-CSS compilation, those were added automatically resulting in the following CSS declaration.

```css
.container_7e976ae1 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex
}
```

Removing already applied prefixes does not only make the code cleaner of the artefact. It also makes it easier to read and future-ready. This process is also configured to support only SPFx supported browser and makes it more error safe.
In case a web part already has vendor prefixes included in the SASS files that are not needed anymore the same process removes those declarations automatically.
The following example makes use of the border-radius property. A property that does not require vendor prefixes on the supported systems.

```css
.container {
  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: 7px;
  /* Firefox 1-3.6 */
  -moz-border-radius: 7px;
  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 7px;
}
```

The resulting CSS in the package will be converted to the following code.

```css
.container_9e54c0b0 {
  border-radius: 7px
}
```

For more details on auto-prefixing look at the documentation in the 'auto prefix' GitHub repository. The databased throughout this process is available on [caniuse.com](https://caniuse.com).

## Integrate Office UI Fabric

By making your customizations look and behave like the standard functionality of SharePoint and Office 365 you will make it easier for the end-users to work with them. Office UI Fabric offers you a set of controls and styles for use in your customizations to seamlessly integrate with the existing user experience. For more information on using Office UI Fabric in the SharePoint Framework, read the [Office UI Fabric integration guide](../office-ui-fabric-integration.md).

## Use theme colors

SharePoint allows users to choose the theme color for their sites. In your SharePoint Framework customizations you should follow the theme selected by the users to make your customization look like an integral part of the site rather than unnecessarily stand out. Because the theme is set by users in their site, you cannot tell upfront which colors your customization should use, but SharePoint Framework can dynamically load the currently active color scheme automatically for you. For more information about this capability read the [guide on using theme colors](./use-theme-colors-in-your-customizations.md).
