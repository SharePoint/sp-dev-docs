---
title: Intercepting Query String Changes in Web Parts
description: Building web parts that respond to query string changes.
ms.author: bekaise
ms.date: 07/01/2020
ms.localizationpriority: medium
---

# Intercepting Query String Changes in Web Parts

When building a web part that needs to take into account query string changes, you can use the web API `window.location.search` to read the query string (also known as URL parameters). However if the user proceeds to click a link on the page that contains the same path as the current URL and only the query string changes, the URL in the address bar will be updated but the page won't re-render (because of performance reasons). This document is aimed at showing how you can take advantage of other web APIs to track query string changes and respond to them in your web part.

First let's assume you have a basic web part class that renders the current query string.

```typescript
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = window.location.search;
  }
}
```

We can use the following changes to trigger our web part to re-render when a URL parameter update:

```typescript
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public onInit(): Promise<void> {
    ((history) => {
      var pushState = history.pushState;
      history.pushState = (state, key, path) => {
          pushState.apply(history, [state, key, path]);
          this._onUrlChange(path);
      };
    })(window.history);

    window.addEventListener('popstate', function (e) {
      // Currently browsing by the browser history buttons ( back / forward )
      // doesn't cause any effect on a sp conditionally loaded page.
      // this._onUrlChange();
    });

    return Promise.resolve();
  }

  public render(): void {
    this.domElement.innerHTML = window.location.search;
  }

  private _onUrlChange(newpath = window.location.search): void {
    // any logic you might want to trigger when the query string updates
    // e.g. fetching data
    // e.g. logging the URL changes // console.log(newpath)
    this.render();
  }
}
```

There are two parts to what we are doing in onInit:

1. Ensuring that whenever pushState is called by other JavaScript we trigger our `_onUrlChange()` method.
1. Ensuring that whenever the browser fires a `popstate` event (for example, user pressing the browser back button) we trigger our `_onUrlChange()` method.
