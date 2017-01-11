# sp-core-library module



## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`Environment`](./sp-core-library/environment.md)     | This class contains contextual information about the enviroment that is hosting the framework and its components. |
| [`Guid`](./sp-core-library/guid.md)     | This class represents a globally unique identifier, as described by IETF RFC 4122. The input string is normalized and validated, which provides important guarantees that simplify other code that works with the GUID. This class also provides basic support for generating a pseudo-random GUID; however, be aware that the uniqueness depends on the browser's Math.random() function and may be not be suitable for some applications. |
| [`Log`](./sp-core-library/log.md)     | The Log class provides static methods for logging messages at different levels (verbose, info, warning, error) and with context information. Context information helps identify which component generated the messages and makes the messages useful and filterable. |
| [`RandomNumberGenerator`](./sp-core-library/randomnumbergenerator.md)     | This is the default implementation of IRandomNumberGenerator that simply calls Math.random(). |
| [`ServiceKey`](./sp-core-library/servicekey.md)     | The ServiceKey is a lookup key that is used when calling ServiceScope.consume() to fetch a dependency. The key also defines a default implementation of the dependency, which will be autocreated by the root scope if the dependency is not found. Providing a default implementation ensures that new dependencies can be safely introduced without inadvertently breaking components that are loaded by an older host (that does not provide the new dependency). |
| [`ServiceScope`](./sp-core-library/servicescope.md)     | ServiceScope provides a formalized way for components to register and consume dependencies ("services"), and to enable different implementations to be registered in different scopes. This improves modularity by decoupling components from their dependencies in an extensible way. For example, suppose that various components need access to an IPageManager instance. We could simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if we need to create a pop-up dialog that requires a second PageManager instance. A better solution would be to add the PageManager as a constructor parameter for each component that requires it, however then we immediately face the problem that any code that calls these constructors also needs a PageManager parameter. In an application with many such dependencies, business logic that ties together many subsystems would eventually pick up a constructor parameter for every possible dependency, which is unwieldy. A natural solution would be to move all the dependencies into a class with name like "ApplicationContext", and then pass this around as our constructor parameter. This enables the PageManager to be passed to classes that need it without cluttering the intermediary classes that don't. However, it still has a design problem that "ApplicationContext" has hard-coded dependencies on many unrelated things. A more flexible approach is to make it a dictionary that can look up items for consumers/providers who know the right lookup key (i.e. ServiceKey). This is the popular "service locator" design pattern, familiar from the SPContext API in classic SharePoint. ServiceScope takes this idea a step further in two important ways: First, it provides a scoping mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager instance while still sharing other common dependencies. Secondly, it allows for a ServiceKey to provide a default implementation of the dependency. This is important for API stability in our modular client-side environment: For example, suppose that version 2.0 of our application introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume. If the version 2.0 component gets loaded by an older 1.0 application, it would fail. We could fix this by requiring each consumer to check for any missing dependencies and handle that case, but it would require a lot of checks. A better solution is to ensure that a default implementation always exists, perhaps just a trivial behavior, so that components don't have to worry about it. Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or ServiceScope.startNewChild(). They are initially in an "unfinished" state, during which provide() can be called to register service keys, but consume() is forbidden. After ServiceScope.finish() is called, consume() is allowed and provide() is now forbidden. These semantics ensure that ServiceScope.consume() always returns the same result for the same key, and does not depend on order of initialization. It also allows us to support circular dependencies without worrying about infinite loops, even when working with external components that were implemented by third parties. To avoid mistakes, it's best to always call consume() inside a callback from serviceScope.whenFinished(). |
| [`TimeProvider`](./sp-core-library/timeprovider.md)     | This is the default implementation of ITimeProvider that simply calls the real browser APIs. |
| [`UrlQueryParameterCollection`](./sp-core-library/urlqueryparametercollection.md)     | Class for storing and retrieving query parameters. The URL can be server-relative and it will parse empty/null strings. The query parameters must start with ? to indicate the first query parameter and use & for all subsequent parameters. The class also supports fragments. Edge cases behavior: Empty value (www.example.com/?test=) stores key and empty value No equals in queryParam (www.example.com/?test) stores key and undefined value Empty queryParam (www.example.com/?&debug=on) stores undefined key and value Query param with only equals (www.example.com/?=&debug=on stores empty string key and value |
| [`UrlUtilities`](./sp-core-library/urlutilities.md)     | Common helper functions for working with URLs. These utilities are intended to be simple, small, and very broadly applicable. |
| [`Validate`](./sp-core-library/validate.md)     | This class implements provides a standard way to validate properties and function parameters. Unlike debug assertions, Validate checks are always performed and will always throw an error, even in a production release. As such, be careful not to overuse these checks in a way that might impact performance. |
| [`Version`](./sp-core-library/version.md)     | This class represents versions that follow the string format of MAJOR.MINOR[.PATCH[.REVISION]] where MAJOR, MINOR, PATCH and REVISION are integers. PATCH and REVISION are optional. Leading zeros are allowed, but have no meaning in comparisons. Examples: 1.0, 1.0.0, 1.0.0.0, 1.01, 01.02.03, 001.002.003.004 |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IRandomNumberGenerator`](./sp-core-library/irandomnumbergenerator.md)   | This is a ServiceScope interface that enables unit tests to provide a deterministic source of pseudorandom numbers.  |
| [`IServiceCollection`](./sp-core-library/iservicecollection.md)   | A shorthand pattern for extracting well-known services from a ServiceScope.  |
| [`ITimeProvider`](./sp-core-library/itimeprovider.md)   | This is a ServiceScope interface that enables unit tests to simulate the system clock.  |



## Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[`DisplayMode`](./sp-core-library/displaymode.md)    | DisplayMode indicates the mode in which a page and/or its contents (e.g. text and web parts) are dislayed. |
|[`EnvironmentType`](./sp-core-library/environmenttype.md)    | An enum that describes which type of enviroment the framework is running in. |




