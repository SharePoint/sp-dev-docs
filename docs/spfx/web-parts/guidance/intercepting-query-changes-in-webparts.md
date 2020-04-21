---
title: Intercepting Query String Changes in Web Parts
description: Building web parts that respond to query string changes.
ms.author: bekaise
ms.date: 01/28/2020
ms.prod: sharepoint
localization_priority: Normal
---

# Intercepting Query String Changes in Web Parts

When building a web part that needs to take into account query string changes, you can use the web API `window.location.search` to read the query string. However if the user proceeds to click a link on the page that contains the same path as the current URL and only the query string changes, the URL in the address bar will be updated but the page will not re-render (due to performance reasons). This document is aimed at showing how you can take advantage of other web APIs to track query string changes and respond to them in your web part.

First let's assume you have a basic web part class that renders the current query string.

```typescript
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = window.location.search;
  }
}
```

We can use the following changes to trigger our web part to re-render in the event of a query string update:

```typescript
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public onInit(): Promise<void> {
    (function (history) {
      var pushState = history.pushState;
      history.pushState = function (state, key, path) {
          this._onUrlChange();
          return pushState.apply(history, arguments);
      };
    })(window.history);

    window.addEventListener('popstate', function (e) {
      this._onUrlChange();
    });

    return Promise.resolve();
  }

  public render(): void {
    this.domElement.innerHTML = window.location.query;
  }

  private _onUrlChange(): void {
    // any logic you might want to trigger when the query string updates
    // e.g. fetching data
    this.render();
  }
}
```

There are two parts to what we are doing in onInit:

1. Ensuring that whenever pushState is called by other javascript we trigger our `_onUrlChange` method.
1. Ensuring that whenever the browser fires a 'popstate' event (for example, user pressing the browser back button) we trigger our `_onUrlChange` method.
