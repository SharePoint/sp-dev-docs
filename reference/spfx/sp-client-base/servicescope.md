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


## Constructor
PRIVATE CONSTRUCTOR - DO NOT CALL THIS FROM YOUR OWN CODE.

**Signature:** constructor(parent: [ServiceScope](../sp-client-base/servicescope.md))

**Returns**: [`ServiceScope`](../sp-client-base/servicescope.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `parent`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`consume<T>(serviceKey)`](#consume<t>servicekey)     | `public` | `T` | Components should call this function to "consume" a dependency,i.e. look up the serviceKey  and return the registered service instance. If the instance cannot be found, then a default  instance will be autocreated and registered with the root ServiceScope. |
|[`createAndProvide<T>(serviceKey,simpleServiceClass)`](#createandprovide<t>servicekeysimpleserviceclass)     | `public` | `T` | This is a shorthand function that its equivalent to constructing a new instance of the  simpleServiceClass, then registering it by calling ServiceScope.provide(). |
|[`createDefaultAndProvide<T>(serviceKey)`](#createdefaultandprovide<t>servicekey)     | `public` | `T` | This is a shorthand function that constructs the default implementation of the specified  serviceKey, and then registers it by calling ServiceScope.provide(). |
|[`finish()`](#finish)     | `public` | `void` | When a ServiceScope is first started,it is in an "unfinished" state where provide() is  allowed but consume() is not allowed. After calling finish(), then consume() is allowed  but provide() is not allowed. This formalism completely eliminates a number of tricky bugs  such as: Scope2 is a child of Scope1, and Scope1 provides instance A1 of interface A;  if someone consumes A1 from Scope2 (via inheritance) before Scope2.provide() is called  with A2, then a subsequent call to Scope2.consume() might return a different result than  the previous call, which would be very confusing for developers. |
|[`getParent()`](#getparent)     | `public` | [`ServiceScope`](../sp-client-base/servicescope.md) | Returns the parent of the current ServiceScope,or undefined if this is a root scope. |
|[`provide<T>(serviceKey,service)`](#provide<t>servicekeyservice)     | `public` | `T` | ServiceScope.provide() is used to register an implemententation of the given serviceKey  for the current scope. It may only be used when the ServiceScope is in an "unfinished"  state, i.e. before finish() has been called. |
|[`startNewChild()`](#startnewchild)     | `public` | [`ServiceScope`](../sp-client-base/servicescope.md) | Constructs a new ServiceScope that is a child of the current scope. For any keys  that are not explicitly provided by the child scope, the parent hierarchy will be  consulted. |
|[`startNewRoot()`](#startnewroot)     | `public, static` | [`ServiceScope`](../sp-client-base/servicescope.md) | Create a new root-level ServiceScope. Only root-level scopes have the ability to autocreate  default implementations of ServiceKeys. |
|[`whenFinished(callback)`](#whenfinishedcallback)     | `public` | `void` | It is an error to call ServiceScope.consume() before finish() has been called.  The most reliable way to protect your component against this error is to perform the  consume() calls inside a whenFinished() callback. If the service scope is already  finished, then the callback will be executed immediately; otherwise, it will be executed  later when the scope is finished. |





### consume<T>(serviceKey)

Components should call this function to "consume" a dependency,i.e. look up the serviceKey 
and return the registered service instance. If the instance cannot be found, then a default 
instance will be autocreated and registered with the root ServiceScope.

**Signature:** _consume<T>(serviceKey: [ServiceKey](../sp-client-base/servicekey.md)<T>): T_

**Returns**: `T`

- the service instance

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](../sp-client-base/servicekey.md) | - the key that was used when provide() was called to register the service |


### createAndProvide<T>(serviceKey,simpleServiceClass)

This is a shorthand function that its equivalent to constructing a new instance of the 
simpleServiceClass, then registering it by calling ServiceScope.provide().

**Signature:** _createAndProvide<T>(serviceKey: [ServiceKey](../sp-client-base/servicekey.md)<T>,simpleServiceClass: { new (serviceScope: [ServiceScope](../sp-client-base/servicescope.md)) }): T_

**Returns**: `T`

- a newly constructed instance of simpleServiceClass

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](../sp-client-base/servicekey.md) | - the key that can be used later to consume the service |
| `simpleServiceClass`    | `{ new (serviceScope: ServiceScope) }` | - the TypeScript class to be constructed |


### createDefaultAndProvide<T>(serviceKey)

This is a shorthand function that constructs the default implementation of the specified 
serviceKey, and then registers it by calling ServiceScope.provide().

**Signature:** _createDefaultAndProvide<T>(serviceKey: [ServiceKey](../sp-client-base/servicekey.md)<T>): T_

**Returns**: `T`

- a service instance that was constructed using ServiceKey.defaultCreator

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](../sp-client-base/servicekey.md) | - the key that can be used later to consume the service |


### finish()

When a ServiceScope is first started,it is in an "unfinished" state where provide() is 
allowed but consume() is not allowed. After calling finish(), then consume() is allowed 
but provide() is not allowed. This formalism completely eliminates a number of tricky bugs 
such as: Scope2 is a child of Scope1, and Scope1 provides instance A1 of interface A; 
if someone consumes A1 from Scope2 (via inheritance) before Scope2.provide() is called 
with A2, then a subsequent call to Scope2.consume() might return a different result than 
the previous call, which would be very confusing for developers.

**Signature:** _finish(): void_

**Returns**: `void`



#### Parameters
None


### getParent()

Returns the parent of the current ServiceScope,or undefined if this is a root scope.

**Signature:** _getParent(): [ServiceScope](../sp-client-base/servicescope.md)_

**Returns**: [`ServiceScope`](../sp-client-base/servicescope.md)

- the parent service scope

#### Parameters
None


### provide<T>(serviceKey,service)

ServiceScope.provide() is used to register an implemententation of the given serviceKey 
for the current scope. It may only be used when the ServiceScope is in an "unfinished" 
state, i.e. before finish() has been called.

**Signature:** _provide<T>(serviceKey: [ServiceKey](../sp-client-base/servicekey.md)<T>,service: T): T_

**Returns**: `T`

- the same object that was passed as the "service" parameter

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceKey`    | [`ServiceKey<T>`](../sp-client-base/servicekey.md) | - the key that will later be used to consume the service |
| `service`    | `T` | - the service instance that is being registered |


### startNewChild()

Constructs a new ServiceScope that is a child of the current scope. For any keys 
that are not explicitly provided by the child scope, the parent hierarchy will be 
consulted.

**Signature:** _startNewChild(): [ServiceScope](../sp-client-base/servicescope.md)_

**Returns**: [`ServiceScope`](../sp-client-base/servicescope.md)

- the newly created root ServiceScope

#### Parameters
None


### startNewRoot()

Create a new root-level ServiceScope. Only root-level scopes have the ability to autocreate 
default implementations of ServiceKeys.

**Signature:** _startNewRoot(): [ServiceScope](../sp-client-base/servicescope.md)_

**Returns**: [`ServiceScope`](../sp-client-base/servicescope.md)

- the newly created root ServiceScope

#### Parameters
None


### whenFinished(callback)

It is an error to call ServiceScope.consume() before finish() has been called. 
The most reliable way to protect your component against this error is to perform the 
consume() calls inside a whenFinished() callback. If the service scope is already 
finished, then the callback will be executed immediately; otherwise, it will be executed 
later when the scope is finished.

**Signature:** _whenFinished(callback: () => void): void_

**Returns**: `void`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callback`    | `() => void` | - A block of code that needs to call ServiceScope.consume() |

