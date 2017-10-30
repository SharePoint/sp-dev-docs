---
title: Share Data Between Client-Side Web Parts
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Share Data Between Client-Side Web Parts

> **Note.** This article has not yet been verified with the SPFx GA version, so you might have challenges making this work as described using the latest release.

When building client-side web parts, loading data once and reusing it across different web parts will help you improve the performance of your pages and decrease the load on your network. This article describes a number of approaches that you can use to share data across multiple web parts.

## Why Share Data Between Web Parts

Often, when building web parts, a number of them will be used together on one page. If you consider each web part as a standalone part of the page, then you may end up in a situation where you are loading a similar or even the same set of data multiple times on the same page. This will unnecessarily slow down the loading of the page and increase traffic on your network.

![Two web parts on one page loading similar sets of data separately](../../../images/guidance-sharingdata-loading-data-separately.png)

A sample service responsible for loading the data could look like the following:

```ts
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

SharePoint Framework client-side web parts would consume this service using the following code:

```ts
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

To improve the loading time of the page and decrease the traffic on your network, you can build your web parts in such a way that they will load the data only once. Whenever one of the web parts on the page requests a specific set of data, it will reuse data loaded previously if possible.

## Store the Retrieved Data in a Globally-Scoped Variable

> Note, globally-scoped variables are generally a bad idea. However, for illustration and simplicity purposes we are using them here as "demo code". There are many patterns around this issue, including importing/exporting modules using TypeScript concepts.

Web parts built using the SharePoint Framework are isolated into separate modules. This way, one web part cannot directly access data and properties stored by another web part. One way to overcome this design characteristic and make data loaded by one web part available to other web parts on the page is to assign the retrieved data to a globally-scoped variable.

Using the data access service shown above, it could be changed as follows:

```ts
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

Notice how loading the data has been moved from the specific methods to the `ensureRecentDocuments` method. If the data has been loaded previously, the method resolves the promise immediately returning the previously loaded documents. If the data is currently being loaded, the method waits for 100ms and tries resolving the promise again.

If you look at the log in the developer tools, you will notice that the remote API is now called only once.

![One log statement referring to loading data for both web parts](../../../images/guidance-sharingdata-reusing-data-global-variable-loading-message.png)

Looking at the informational messages, you can confirm that when the second web part tries to load the data it detects that the data is already being loaded. Once the data is loaded, it reuses the existing data rather than loading it itself.

![Information message from the log showing how the second web part waits on data to be loaded](../../../images/guidance-sharingdata-reusing-data-global-variable-waiting-message.png)

Using a globally-scoped variable is the easiest way to exchange data between different web parts on the page. One downside of using this approach, however, is that the data is exposed not only to web parts but also to all other elements on the page. This introduces the risk of other elements on the page using the same variable as you to store their data potentially overwriting your data.

## Store the Retrieved Data in a Cookie

Another approach to exchange data across different web parts is by storing the data in a cookie. The added benefit of using cookies is that you can persist the data for longer periods of time. So in cases where the data doesn't change often, you can load the data once and reuse it not only across different web parts but also across different pages.

The implementation using cookies is very similar to how you store data in a globally-scoped variable. The only difference is that the actual data would be stored in a cookie:

```ts
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

In the example above the [js-cookie](https://www.npmjs.com/package/js-cookie) package is used to simplify working with cookies. Using the parameters passed into the `Cookies.set()` method you can specify to which pages and for how long the retrieved data should be available.

When you load the page in Microsoft Edge the first time, you will see that the data is retrieved once and reused by both web parts.

![Log messages showing data being loaded once and the other web part waiting for the data to be loaded on the first request in Microsoft Edge](../../../images/guidance-sharingdata-cookie-edge-first-request.png)

On subsequent requests, a web part can directly reuse the previously loaded data without calling the remote API.

![Log message showing data being loaded directly without calling the remote API on subsequent requests in Microsoft Edge](../../../images/guidance-sharingdata-cookie-edge-subsequent-request.png)

When loading the page in Google Chrome, you would see that the data is loaded twice from the remote API and is not being cached at all.

![Log message showing data being loaded twice from the remote API despite using cookies](../../../images/guidance-sharingdata-cookie-chrome.png)

Different web browsers have different limits regarding how much data can be stored in a cookie. In this example, the retrieved data exceeds the maximum length of what can be stored in a cookie in Google Chrome. As a result, no cookie is being set and the data is loaded twice.

While you could use cookies to share data between web parts, assuming the data that you want to share is not too large, there are some downsides to using cookies. Similar to globally-scoped variables, cookies are available to all elements on the page, or even across the whole portal and could be overwritten by them. Additionally, web browsers send cookies with outgoing requests and retrieve them with incoming responses which adds overhead to loading information in the portal. Another important thing that you should consider is that cookies are persisted in the web browser and you should never store any confidential information in them.

## Store the Retrieved Data in Session or Local Storage

An alternative to using cookies is storing data in session or local storage. Similar to cookies, browser storage allows you to persist data not just for subsequent requests but also across pages. The benefits of using browser storage over using cookies are that data stored in browser storage is not sent with outgoing requests and you can store more data than in a cookie. Comparable to cookies, browser storage is capable of storing only string values. So if you need to store more complex objects, you will need to serialize them first using, for example, the native `JSON.stringify()` method.

If you want data to be stored only during the current session, you should use session storage. If the data should be persisted for a longer period of time you should use local storage instead. Data stored in local storage doesn't expire and it's up to you to clear it.

The previously used implementation of the data access service based on cookies can easily be adapted to use local storage instead:

```ts
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

The implementation of this service is very similar to when using cookies. One thing that you should keep in mind, however, is that browser storage can be disabled by the user and you should always check for its availability before performing operations on it. Just as with cookies, local storage is persisted in the web browser and you should never use it to store any confidential information.

## Share Data Through a SharePoint Framework Service

Another approach to sharing data between web parts, is by building a SharePoint Framework service and using it to centrally load and manage data. SharePoint Framework services are standalone components built separately from web parts and distributed as separate Node packages. SharePoint Framework web parts can reference services and use them to perform specific operations supported by these services, such as loading data.

> For more information about SharePoint Framework services see [https://github.com/SharePoint/sp-dev-docs/wiki/Tech-Note:-ServiceScope-API](https://github.com/SharePoint/sp-dev-docs/wiki/Tech-Note:-ServiceScope-API).

The existing service, demonstrated in previous examples, with just a few modifications can be transformed into a SharePoint Framework service.

First, it needs to implement an interface that represents the operations and properties it supports:

```ts
export interface IDocumentsService {
    getRecentDocument(): Promise<IDocument>;
    getRecentDocuments(startFrom: number): Promise<IDocument[]>;
}

export class DocumentsService implements IDocumentsService {
    // ...
}
```

Next, it needs to specify a [service key](https://dev.office.com/sharepoint/reference/spfx/sp-core-library/servicekey) used to register the service with the SharePoint Framework and consume it from within web parts:

```ts
import { ServiceScope, ServiceKey } from '@microsoft/sp-core-library';

export class DocumentsService implements IDocumentsService {
    public static readonly serviceKey: ServiceKey<IDocumentsService> = ServiceKey.create<IDocumentsService>('contoso:DocumentsService', DocumentsService);
    // ...

    constructor(serviceScope: ServiceScope) {
    }

    // ...
}
```

Each SharePoint Framework service must also have a constructor that accepts an instance of the [ServiceScope](https://dev.office.com/sharepoint/reference/spfx/sp-core-library/servicescope) class as a parameter.

SharePoint Framework services can be built using the same project build system as SharePoint Framework client-side web parts. Similar to a client-side web part, a SharePoint Framework service has a manifest. The main difference with the web part manifest is that the `componentType` property is set to `Library`:

```json
{
  "$schema": "../../../node_modules/@microsoft/sp-module-interfaces/lib/manifestSchemas/jsonSchemas/clientSideComponentManifestSchema.json",

  "id": "69b1aacd-68f2-4147-8433-8efb08eae331",
  "alias": "DocumentsService",
  "componentType": "Library",
  "version": "0.0.1",
  "manifestVersion": 2
}
```

Once ready, you can consume the SharePoint Framework service from a web part by referencing its package and retrieving the service using its key.

```ts
// ...
import { DocumentsService, IDocumentsService, IDocument } from 'react-recentdocuments-service';
import { ServiceScope } from '@microsoft/sp-core-library';

export default class RecentDocumentsWebPart extends BaseClientSideWebPart<IRecentDocumentsWebPartProps> {
  private documentsService: IDocumentsService;

  protected onInit(): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (error: any) => void): void => {
      const serviceScope: ServiceScope = this.context.serviceScope.getParent();
      serviceScope.whenFinished((): void => {
        this.documentsService = serviceScope.consume(DocumentsService.serviceKey as any) as IDocumentsService;
        resolve();
      });
    });
  }

  public render(): void {
    this.context.statusRenderer.displayLoadingIndicator(this.domElement, 'documents');

    this.documentsService.getRecentDocuments(this.properties.startFrom)
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

Even if there are multiple web parts on the page referencing the same service, its bundle will be downloaded only once and the SharePoint Framework will create only one instance of the service on the page. This offers you a convenient mechanism for centralizing processing and storing data on a page. While working with SharePoint Framework services is more complex than the previously described approaches, it offers you the great benefit of isolating the data from other components on the page and better handling of its integrity.
