# IWebPartHost interface

_Extends: [`IServiceScopeProvider`](../sp-client-base/iservicescopeprovider.md)_



A web part host is a component,control or a page that hosts client side web parts. 
The web part infrastructure provides many features inbuilt e.g. an HttpClient to make 
server requests and the SPPageContext. The porpose of this interface is not to replicate 
those feature. This interface outlines the services and features where there needs to be 
a direct interaction between the host and the web part infrastructure. This interface also 
outlines some services where the web part host may want to override the default 
implementations provided by the infrastructure. Let us discuss some examples: 
 
- APIs like setDirty, webPartConfigurationEventCallback help the web part infrastucture 
communicate the fact that some web part is in a dirty state or web part communication 
events to the host. 
 
- In future we expect that this interface will be used to provide services where the host 
might want to override the default implemenations. e.g. 
- the web part status rendering service. The default implementation of this service 
provides an office fabric spinny. But a certain host could easily want to show a 
different spinny. 
 
- The event aggregation service. Currently the web part manager hosts a single event 
event aggregator. But there are possibilities when a page can have multiple hosts 
and each host may want to scope its event aggregation service.


## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`serviceScope`      | [`ServiceScope`](../sp-client-base/servicescope.md) | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|`setDirty`      | `function` | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|`webPartConfigurationEventCallback`      | [`IWebPartConfigurationEventCallback`](../sp-client-preview/iwebpartconfigurationeventcallback.md) | Web part configuration event callback |





