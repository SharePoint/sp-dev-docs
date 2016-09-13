# ServiceScope class





ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ServiceScope`](servicescope.md) | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`consume<T>`](#consume<t>)     | `public` | `T` | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`createAndProvide<T>`](#createandprovide<t>)     | `public` | `T;` | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`createDefaultAndProvide<T>`](#createdefaultandprovide<t>)     | `public` | `T` | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`finish`](#finish)     | `public` | `void` | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`getParent`](#getparent)     | `public` | [`ServiceScope`](servicescope.md) | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`provide<T>`](#provide<t>)     | `public` | `T` | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`startNewChild`](#startnewchild)     | `public` | [`ServiceScope`](servicescope.md) | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`startNewRoot`](#startnewroot)     | `public, _static_` | [`ServiceScope`](servicescope.md) | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |
|[`whenFinished`](#whenfinished)     | `public` | `void` | ServiceScope provides a formalized way for components to register and consume dependencies  ("services"), and to enable different implementations to be registered in different scopes |





### constructor

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`constructor(parent: ServiceScope)`

#### Returns
[`ServiceScope`](servicescope.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `parent`    | [`ServiceScope`](servicescope.md) |  |


### consume<T>

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`consume<T>(serviceKey: ServiceKey<T>): T`

#### Returns
`T`
- the service instance 
Components should call this function to "consume" a dependency, i.e. look up the serviceKey 
and return the registered service instance. If the instance cannot be found, then a default 
instance will be autocreated and registered with the root ServiceScope.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](servicekey.md) | - the key that was used when provide() was called to register the service  Components should call this function to "consume" a dependency, i |


### createAndProvide<T>

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`createAndProvide<T>(serviceKey: ServiceKey<T>,simpleServiceClass: { new (serviceScope: ServiceScope) }): T;`

#### Returns
`T;`
- a newly constructed instance of simpleServiceClass 
This is a shorthand function that its equivalent to constructing a new instance of the 
simpleServiceClass, then registering it by calling ServiceScope.provide().

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](servicekey.md) | - the key that can be used later to consume the service  This is a shorthand function that its equivalent to constructing a new instance of the  simpleServiceClass, then registering it by calling ServiceScope |
| `simpleServiceClass`    | `{ new (serviceScope: ServiceScope) }` | - the TypeScript class to be constructed  This is a shorthand function that its equivalent to constructing a new instance of the  simpleServiceClass, then registering it by calling ServiceScope |


### createDefaultAndProvide<T>

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`createDefaultAndProvide<T>(serviceKey: ServiceKey<T>): T`

#### Returns
`T`
- a service instance that was constructed using ServiceKey.defaultCreator 
This is a shorthand function that constructs the default implementation of the specified 
serviceKey, and then registers it by calling ServiceScope.provide().

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](servicekey.md) | - the key that can be used later to consume the service  This is a shorthand function that constructs the default implementation of the specified  serviceKey, and then registers it by calling ServiceScope |


### finish

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`finish(): void`

#### Returns
`void`
- a service instance that was constructed using ServiceKey.defaultCreator 
This is a shorthand function that constructs the default implementation of the specified 
serviceKey, and then registers it by calling ServiceScope.provide().

#### Parameters
None


### getParent

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`getParent(): ServiceScope`

#### Returns
[`ServiceScope`](servicescope.md)
- the parent service scope 
Returns the parent of the current ServiceScope, or undefined if this is a root scope.

#### Parameters
None


### provide<T>

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`provide<T>(serviceKey: ServiceKey<T>,service: T): T`

#### Returns
`T`
- the same object that was passed as the "service" parameter 
ServiceScope.provide() is used to register an implemententation of the given serviceKey 
for the current scope. It may only be used when the ServiceScope is in an "unfinished" 
state, i.e. before finish() has been called.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](servicekey.md) | - the key that will later be used to consume the service  ServiceScope |
| `service`    | `T` | - the service instance that is being registered  ServiceScope |


### startNewChild

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`startNewChild(): ServiceScope`

#### Returns
[`ServiceScope`](servicescope.md)
- the newly created root ServiceScope 
Constructs a new ServiceScope that is a child of the current scope. For any keys 
that are not explicitly provided by the child scope, the parent hierarchy will be 
consulted.

#### Parameters
None


### startNewRoot

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`startNewRoot(): ServiceScope`

#### Returns
[`ServiceScope`](servicescope.md)
- the newly created root ServiceScope 
Create a new root-level ServiceScope. Only root-level scopes have the ability to autocreate 
default implementations of ServiceKeys.

#### Parameters
None


### whenFinished

ServiceScope provides a formalized way for components to register and consume dependencies 
("services"), and to enable different implementations to be registered in different scopes. 
This improves modularity by decoupling components from their dependencies in an extensible way. 
 
For example, suppose that various components need access to an IPageManager instance. We could 
simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if 
we need to create a pop-up dialog that requires a second PageManager instance. A better solution 
would be to add the PageManager as a constructor parameter for each component that requires it, 
however then we immediately face the problem that any code that calls these constructors 
also needs a PageManager parameter. In an application with many such dependencies, business 
logic that ties together many subsystems would eventually pick up a constructor parameter 
for every possible dependency, which is unwieldy. A natural solution would be to move all the 
dependencies into a class with name like "ApplicationContext", and then pass this around as our 
constructor parameter. This enables the PageManager to be passed to classes that need it 
without cluttering the intermediary classes that don't. However, it still has a design problem 
that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible 
approach is to make it a dictionary that can look up items for consumers/providers who know the 
right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, 
familiar from the SPContext API in classic SharePoint. 
 
ServiceScope takes this idea a step further in two important ways: First, it provides a scoping 
mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager 
instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey 
to provide a default implementation of the dependency. This is important for API stability in 
our modular client-side environment: For example, suppose that version 2.0 of our application 
introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. 
If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could 
fix this by requiring each consumer to check for any missing dependencies and handle that case, 
but it would require a lot of checks. A better solution is to ensure that a default implementation 
always exists, perhaps just a trivial behavior, so that components don't have to worry about it. 
 
Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or 
ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() 
can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() 
is called, consume() is allowed and provide() is now forbidden. These semantics ensure that 
ServiceScope.consume() always returns the same result for the same key, and does not depend on 
order of initialization. It also allows us to support circular dependencies without worrying 
about infinite loops, even when working with external components that were implemented by 
third parties. To avoid mistakes, it's best to always call consume() inside a callback from 
serviceScope.whenFinished().

#### Signature
`whenFinished(callback: () => void): void`

#### Returns
`void`
- the newly created root ServiceScope 
Create a new root-level ServiceScope. Only root-level scopes have the ability to autocreate 
default implementations of ServiceKeys.

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callback`    | `() => void` | - A block of code that needs to call ServiceScope |

