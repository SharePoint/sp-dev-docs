# IServiceCollection interface







A shorthand pattern for extracting well-known services from a ServiceScope.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`serviceScope`      | [`ServiceScope`](../sp-core-library/servicescope.md) | Returns the underlying ServiceScope that the members belong to. |






### Remarks

Reusable library components typically declare their service dependencies by calling ServiceScope.consume() using the corresponding ServiceKey for each service. For application business logic or small-sized projects, this formalism may be unnecessary and would increase the learning curve for developers. As a lightweight alternative, the IServiceCollection pattern allows the common services for a particular scenario to be passed around as a simple, convenient collection. For example, a widget feature might introduce an interface like this: interface IWidgetServiceCollection extends IServiceCollection { spHttpClient: SPHttpClient; widgetManager: IWidgetManager; } Then the Widget class might initialize a "services" property, like this: class Widget { private _services: IWidgetServiceCollection; constructor(serviceScope: ServiceScope) { serviceScope.whenFinished(() => { this._services = { serviceScope, spHttpClient: serviceScope.consume(SPHttpClient.serviceKey), widgetManager: serviceScope.consume(WidgetManager.ServiceKey), }; }); } public get services(): IWidgetServiceCollection { return this._services; } } For a group of components that all have these dependencies, this "services" object can be passed around instead of the abstract ServiceScope. This enables direct references such as services.widgetManager, services.spHttpClient, etc. For atypical dependencies, the services.serviceScope is still available for use. IMPORTANT: To keep the pattern clean and understandable, IServiceCollection should NOT be extended with any additional members that are not ServiceScope services.

