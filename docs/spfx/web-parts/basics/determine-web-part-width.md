---
title: Determine the rendered web part width
description: Learn how to determine the rendered width of a web part and handle when the web part is resized.
ms.date: 03/30/2021
ms.localizationpriority: medium
---
# Determine the rendered web part size

Sometimes custom SharePoint Framework (SPFx) applications need to know the rendered size of a web part for various reasons. This value can change when web parts are viewed on different devices, such as a desktop or mobile browser.

The rendered size of the web part can also be influenced based on where it's placed on a page. If the web part is used as a [single part app pages](../single-part-app-pages.md), it could be one size, but if also used as a web part render in a page layout with just one column or multiple columns, it could be rendered in a completely different size.

The functionality of the web part could differ based on the size of the rendered web part.

Introduced in the SPFx v1.12 release, developers can determine the width of the rendered web part. Previously, the only way to reliably determine this value was through unsupported means, such as inspecting the page DOM.

## Obtain the rendered web part width

The `width` property on the web part class returns the current rendered width of the web part as a number. Web parts should utilize this property to perform operations such as any conditional styling of components based on the initial available width for the web part.

```typescript
public render(): void {
  this.domElement.innerHTML = `
    <div class="${ styles.helloWorld }">
      <div class="${ styles.container }">
        <div class="${ styles.row }">
          <div class="${ styles.column }">
            <p class="${ styles.description }">Web Part width: ${this.width}</p>
          </div>
        </div>
      </div>
    </div>`;
}
```

## Detect when the web part width changes

Developers can also determine when the web part's rendered width changes by handling an event:

```typescript
protected onAfterResize(newWidth: number): void;
```

This API is invoked when the web part container DOM element width is changed, such as when the browser window is resized and when the property pane is toggled open/closed.

Web parts should utilize this method to perform operations such as potentially re-rendering components based on the new available width for the web part.

```typescript
protected onAfterResize(newWidth: number) {
  console.log(`the new width of the web part is ${newWidth}`);
}
```
