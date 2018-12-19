---
title: Share data between client-side web parts
description: Approaches you can use to share data and store retrieved data across multiple web parts in SharePoint.
ms.date: 01/10/2018
ms.prod: sharepoint
---


# Share data between client-side web parts

When building client-side web parts, loading data once and reusing it across different web parts helps you improve the performance of your pages and decrease the load on your network. This article describes a number of approaches that you can use to share data across multiple web parts.

## Why share data between web parts

Often, when building web parts, a number of them are used together on one page. If you consider each web part as a standalone part of the page, you may end up in a situation where you are loading a similar or even the same set of data multiple times on the same page. This unnecessarily slows down the loading of the page and increases traffic on your network.

![Two web parts on one page loading similar sets of data separately](../../../images/guidance-sharingdata-loading-data-separately.png)

<br/>

A sample service responsible for loading the data could look like the following:

```typescript
import { IDocument } from './IDocument';

export class DocumentsService {
    public static getRecentDocument(): Promise<IDocument> {
        return new Promise<IDocument>((resolve: (document: IDocument) => void, reject: (error: any) => void): void => {
            // [...] reach out to a remote API
            resolve(recentDocument);
        });
    }

    public static getRecentDocuments(startFrom: number = 0): Promise<IDocument[]> {
        return new Promise<IDocument[]>((resolve: (documents: IDocument[]) => void, reject: (error: any) => void): void => {
            // [...] reach out to a remote API
            resolve(recentDocuments);
        });
    }
}
```

<br/>

SharePoint Framework client-side web parts would consume this service by using the following code:

```typescript
import { DocumentsService, IDocument } from '../../services';

export default class RecentDocumentsWebPart extends BaseClientSideWebPart<IRecentDocumentsWebPartProps> {

  public render(): void {
    this.context.statusRenderer.displayLoadingIndicator(this.domElement, 'documents');

    DocumentsService.getRecentDocuments(this.properties.startFrom)
      .then((documents: IDocument[]): void => {
        const element: React.ReactElement<IRecentDocumentsProps> = React.createElement(
          RecentDocuments,
          {
            documents: documents
          }
        );

        this.context.statusRenderer.clearLoadingIndicator(this.domElement);
        ReactDom.render(element, this.domElement);
      });
  }

  // ...
}
```

<br/>

To improve the loading time of the page and decrease the traffic on your network, you can build your web parts in such a way that they load the data only once. Whenever one of the web parts on the page requests a specific set of data, it reuses data loaded previously if possible.

## Store the retrieved data in a globally-scoped variable

> [!NOTE] 
> Globally-scoped variables are generally a bad idea. However, for illustration and simplicity purposes, we are using them here as "demo code." There are many patterns around this issue, including importing/exporting modules by using TypeScript concepts.

Web parts built using the SharePoint Framework are isolated into separate modules. This way, one web part cannot directly access data and properties stored by another web part. One way to overcome this design characteristic and make data loaded by one web part available to other web parts on the page is to assign the retrieved data to a globally-scoped variable.

Using the data access service shown earlier, it could be changed as follows:

```typescript
import { IDocument } from './IDocument';

export class DocumentsService {
    public static getRecentDocument(): Promise<IDocument> {
        return new Promise<IDocument>((resolve: (document: IDocument) => void, reject: (error: any) => void): void => {
            this.ensureRecentDocuments()
                .then((recentDocuments: IDocument[]): void => {
                    resolve(recentDocuments[0]);
                });
        });
    }

    public static getRecentDocuments(startFrom: number = 0): Promise<IDocument[]> {
        return new Promise<IDocument[]>((resolve: (documents: IDocument[]) => void, reject: (error: any) => void): void => {
            this.ensureRecentDocuments()
                .then((recentDocuments: IDocument[]): void => {
                    resolve(recentDocuments.slice(startFrom, startFrom + 3));
                });
        });
    }

    private static ensureRecentDocuments(): Promise<IDocument[]> {
        return new Promise<IDocument[]>((resolve: (recentDocuments: IDocument[]) => void, reject: (error: any) => void): void => {
            if ((window as any).loadedData) {
                // data already loaded so reuse
                resolve((window as any).loadedData);
                return;
            }

            if ((window as any).loadingData) {
                // data is being loaded, wait a moment and try again
                window.setTimeout((): void => {
                    DocumentsService.ensureRecentDocuments()
                        .then((recentDocuments: IDocument[]): void => {
                            resolve(recentDocuments);
                        });
                }, 100);
            }
            else {
                (window as any).loadingData = true;
                // data not loaded yet, call the remote API,
                // store the data for subsequent requests, and resolve the Promise
                (window as any).loadedData = loadedData;
                (window as any).loadingData = false;
                resolve((window as any).loadedData);
            }
        });
    }
}
```

<br/>

Notice how loading the data has been moved from the specific methods to the `ensureRecentDocuments` method. If the data has been loaded previously, the method resolves the promise immediately by returning the previously loaded documents. If the data is currently being loaded, the method waits for 100 ms and tries resolving the promise again.

If you look at the log in the developer tools, you notice that the remote API is now called only once.

![One log statement referring to loading data for both web parts](../../../images/guidance-sharingdata-reusing-data-global-variable-loading-message.png)

<br/>

Looking at the informational messages, you can confirm that when the second web part tries to load the data, it detects that the data is already being loaded. After the data is loaded, it reuses the existing data rather than loading it itself.

![Information message from the log showing how the second web part waits on data to be loaded](../../../images/guidance-sharingdata-reusing-data-global-variable-waiting-message.png)

<br/>

Using a globally-scoped variable is the easiest way to exchange data between different web parts on the page. One downside of using this approach, however, is that the data is exposed not only to web parts but also to all other elements on the page. This introduces the risk of other elements on the page using the same variable as you to store their data, potentially overwriting your data.

## Store the retrieved data in a cookie

Another approach to exchange data across different web parts is by storing the data in a cookie. The added benefit of using cookies is that you can persist the data for longer periods of time. So in cases where the data doesn't change often, you can load the data once and reuse it not only across different web parts but also across different pages.

The implementation that uses cookies is very similar to how you store data in a globally-scoped variable. The only difference is that the actual data would be stored in a cookie.

```typescript
import { IDocument } from './IDocument';
import * as Cookies from 'js-cookie';

export class DocumentsService {
    private static cookieName: string = 'recentDocuments';

    public static getRecentDocument(): Promise<IDocument> {
        return new Promise<IDocument>((resolve: (document: IDocument) => void, reject: (error: any) => void): void => {
            this.ensureRecentDocuments()
                .then((recentDocuments: IDocument[]): void => {
                    resolve(recentDocuments[0]);
                });
        });
    }

    public static getRecentDocuments(startFrom: number = 0): Promise<IDocument[]> {
        return new Promise<IDocument[]>((resolve: (documents: IDocument[]) => void, reject: (error: any) => void): void => {
            this.ensureRecentDocuments()
                .then((recentDocuments: IDocument[]): void => {
                    resolve(recentDocuments.slice(startFrom, startFrom + 3));
                });
        });
    }

    private static ensureRecentDocuments(): Promise<IDocument[]> {
        return new Promise<IDocument[]>((resolve: (recentDocuments: IDocument[]) => void, reject: (error: any) => void): void => {
            let loadedData: IDocument[] = Cookies.getJSON(DocumentsService.cookieName);
            if (loadedData) {
                // data already loaded so reuse
                resolve(loadedData);
                return;
            }

            if ((window as any).loadingData) {
                // data is being loaded, wait a moment and try again
                window.setTimeout((): void => {
                    DocumentsService.ensureRecentDocuments()
                        .then((recentDocuments: IDocument[]): void => {
                            resolve(recentDocuments);
                        });
                }, 100);
            }
            else {
                (window as any).loadingData = true;
                // data not loaded yet, call the remote API,
                // store the data for subsequent requests, and resolve the Promise
                Cookies.set(DocumentsService.cookieName, loadedData, {
                    expires: 1,
                    path: '/'
                });
                (window as any).loadingData = false;
                resolve(loadedData);
            }
        });
    }
}
```

<br/>

In the previous example, the [js-cookie](https://www.npmjs.com/package/js-cookie) package is used to simplify working with cookies. Using the parameters passed into the `Cookies.set()` method, you can specify to which pages and for how long the retrieved data should be available.

When you load the page in Microsoft Edge for the first time, you see that the data is retrieved once and reused by both web parts.

![Log messages showing data being loaded once and the other web part waiting for the data to be loaded on the first request in Microsoft Edge](../../../images/guidance-sharingdata-cookie-edge-first-request.png)

<br/>

On subsequent requests, a web part can directly reuse the previously loaded data without calling the remote API.

![Log message showing data being loaded directly without calling the remote API on subsequent requests in Microsoft Edge](../../../images/guidance-sharingdata-cookie-edge-subsequent-request.png)

<br/>

When loading the page in Google Chrome, you see that the data is loaded twice from the remote API and is not being cached at all.

![Log message showing data being loaded twice from the remote API despite using cookies](../../../images/guidance-sharingdata-cookie-chrome.png)

<br/>

Different web browsers have different limits regarding how much data can be stored in a cookie. In this example, the retrieved data exceeds the maximum length of what can be stored in a cookie in Google Chrome. As a result, no cookie is being set and the data is loaded twice.

While you could use cookies to share data between web parts, assuming the data that you want to share is not too large, there are some downsides to using cookies. Similar to globally-scoped variables, cookies are available to all elements on the page, or even across the whole portal, and could be overwritten by them. Additionally, web browsers send cookies with outgoing requests and retrieve them with incoming responses, which adds overhead to loading information in the portal. Another important thing that you should consider is that cookies are persisted in the web browser, and you should never store any confidential information in them.

## Store the retrieved data in session or local storage

An alternative to using cookies is storing data in session or local storage. Similar to cookies, browser storage allows you to persist data not only for subsequent requests but also across pages. The benefits of using browser storage over using cookies are that data stored in browser storage is not sent with outgoing requests and you can store more data than in a cookie. Comparable to cookies, browser storage is capable of storing only string values. So if you need to store more complex objects, you need to serialize them first by using, for example, the native `JSON.stringify()` method.

If you want data to be stored only during the current session, you should use session storage. If the data should be persisted for a longer period of time, you should use local storage. Data stored in local storage doesn't expire and it's up to you to clear it.

The previously used implementation of the data access service based on cookies can easily be adapted to use local storage instead.

```typescript
import { IDocument } from './IDocument';

export class DocumentsService {
    private static storageKey: string = 'recentDocuments';

    public static getRecentDocument(): Promise<IDocument> {
        return new Promise<IDocument>((resolve: (document: IDocument) => void, reject: (error: any) => void): void => {
            this.ensureRecentDocuments()
                .then((recentDocuments: IDocument[]): void => {
                    resolve(recentDocuments[0]);
                });
        });
    }

    public static getRecentDocuments(startFrom: number = 0): Promise<IDocument[]> {
        return new Promise<IDocument[]>((resolve: (documents: IDocument[]) => void, reject: (error: any) => void): void => {
            this.ensureRecentDocuments()
                .then((recentDocuments: IDocument[]): void => {
                    resolve(recentDocuments.slice(startFrom, startFrom + 3));
                });
        });
    }

    private static ensureRecentDocuments(): Promise<IDocument[]> {
        return new Promise<IDocument[]>((resolve: (recentDocuments: IDocument[]) => void, reject: (error: any) => void): void => {
            let loadedData: IDocument[] = localStorage ? JSON.parse(localStorage.getItem(DocumentsService.storageKey)) : undefined;
            if (loadedData) {
                // data already loaded so reuse
                resolve(loadedData);
                return;
            }

            if ((window as any).loadingData) {
                // data is being loaded, wait a moment and try again
                window.setTimeout((): void => {
                    DocumentsService.ensureRecentDocuments()
                        .then((recentDocuments: IDocument[]): void => {
                            resolve(recentDocuments);
                        });
                }, 100);
            }
            else {
                (window as any).loadingData = true;
                // data not loaded yet, call the remote API,
                // store the data for subsequent requests, and resolve the Promise
                if (localStorage) {
                    localStorage.setItem(DocumentsService.storageKey, JSON.stringify(loadedData));
                }
                (window as any).loadingData = false;
                resolve(loadedData);
            }
        });
    }
}
```

<br/>

The implementation of this service is very similar to when using cookies. One thing that you should keep in mind, however, is that browser storage can be disabled by the user, and you should always check for its availability before performing operations on it. Just as with cookies, local storage is persisted in the web browser and you should never use it to store any confidential information.

## See also

- [Tutorial: Share data between web parts by using a global variable](./tutorial-share-data-between-web-parts-global-variable.md)
