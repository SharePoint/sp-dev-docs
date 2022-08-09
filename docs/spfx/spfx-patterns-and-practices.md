---
title: Patterns and Practices for SPFx Development
description: Learn Patterns and Practices for SPFx Development.
ms.date: 08/09/2022
ms.localizationpriority: high
---
# Patterns and Practices for SPFx Development

When building any solution, whether it is SPFx-based or with any other programming language, it is best to make it loosely coupled to achieve easy maintenance and scalability. To achieve that, you can use concepts like Separation of Concern, IoC (Inversion of Control), dependency injection or any of SOLID principles.

The following best practices can help you to write better code for SPFx development:

## Default Scaffolding

When you create your first webpart by running the Yeoman SharePoint Generator, it creates the basic project scaffolding (folders & files). It creates a React component with sample 'Hello World' UI. The initial folder structure will be as follows:

```markdown
+-- src
|   +-- webparts
|       +-- helloWorld (webpart name)
|           +-- components
|               +-- HelloWorld.module.scss
|               +-- HelloWorld.tsx
|           +-- loc
|               +-- en-us.js
|               +-- mystrings.d.ts
|           +-- HelloWorldWebPart.manifest.json
|           +-- HelloWorldWebPart.ts
```

## High Level Solution Structure

The first and foremost best practice for SPFx solutions is building solution structure. When your solution has multiple webparts, it is very likely you will share common code and components. This is where 'Separation of Concern' concept can be utilized. The following structure can help you to implement 'Separation of Concern' and achieve reusability, scalability, and easy maintenance.

```markdown
+-- src
|   +-- common
|   +-- controls
|   +-- helpers
|   +-- hooks
|   +-- models
|   +-- services
|       +-- business
|       +-- dataAccess
|   +-- webparts
+-- teams
```

* **webparts:** 

    * `webparts` folder is created as a part of default scaffolding as mentioned above. This contains main webpart classes and other UI components.

* **services:** 

    * `services` folder contains classes and interfaces to implement core business logic. This is very useful while implementing enterprise grade solutions.

* **models:** 

    * `models` folder contains model/entity classes which can be used to pass the data between components. You can choose the name as 'entities' if you would like.

* **helpers:** 

    * `helpers` folder contains static/non-static classes that helps you to execute small reusable functions. i.e. UIHelper.ts, DateHelper.ts

* **hooks:** 

    * `hooks` folder contains hook components. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. You can keep all hooks implementations in this folder which will be used across the solution. 

* **common:** 

    * `common` folder contains classes like Constants.ts, Enums.ts or anything you want to make a common among all.

* **controls:** 

    * `controls` folder contains common UI classes or function components which will be used across all webparts in solution. For example, SpinnerOverlay.tsx which can be used to display spinner with overlay for long operations.

## Business Logic Implementation

For business logic implementation, you may consider creating services for each business requirement. The core implementation can be further moved to a separate folder 'core' where you can define services which contain internal logic to access data or perform other operations. The following example can help you to understand how you can implement business logic for a store application:

```markdown
+-- models
|   +-- IProduct.ts
+-- services
|   +-- business
|       +-- productService
|           +-- IProductService.ts
|           +-- ProductService.ts
|           +-- MockProductService.ts
|       +-- customerService
|           +-- ICustomerService.ts
|           +-- CustomerService.ts
|   +-- core
|       +-- spService
|           +-- ISPService.ts
|           +-- SPService.ts
|       +-- graphService
|           +-- IGraphService.ts
|           +-- GraphService.ts
```

**IProduct.ts**

```typescript
export interface IProduct {
    productId: number;
    productCode: string;
    productName: string;
    price: number;
}
```

**IProductService.ts**

```typescript
export interface IProductService {
    getProducts(): Promise<IProduct[]>;
}
```

**ProductService.ts**

```typescript
export class ProductService implements IProductService {

    public static readonly servicekey: ServiceKey<IProductService> = ServiceKey.create<IProductService>('Contoso.ProductService', ProductService);

    private _SPService: ISPService;

    constructor(serviceScope: ServiceScope) {
        serviceScope.whenFinished(() => {
            this._SPService = serviceScope.consume(SPService.serviceKey);
        });
    }

    public async getProducts(): Promise<IProduct[]> {
        const results = await this._SPService.getListItems("Products");
        const products: IProduct[] = convertToProduct(results);
        return Promise.resolve(products);
    }

    private convertToProduct(results: any[]): IProduct[] {
        return results.map(r => {
            return {
                productId: r["Id"],
                productCode: r["ProductCode"],
                productName: r["ProductName"],
                price: r["Price"]
            };
        });
    }
}
```

**ISPService.ts**

```typescript
export interface ISPService {
    getListItems(listTitle: string): Promise<any[]>;
}
```

**SPService.ts**

```typescript
export class SPService implements ISPService {

    public static readonly servicekey: ServiceKey<ISPService> = ServiceKey.create<ISPService>('Contoso.SPService', SPService);

    private _sp: SPFI;

    constructor(serviceScope: ServiceScope ) {
        serviceScope.whenFinished(() => {
            const pageContext: PageContext = serviceScope.consume(PageContext.serviceKey);
            this._sp = spfi().using(SPFx({ pageContext }));
        });
    }

    public async getListItems(listTitle: string): Promise<any[]> {
        const response = await this._sp.web.lists.getByTitle(listTitle).items();
        return response;
    }
}
```

For testing purpose, you can create a mock service as follows:

**MockProductService.ts**

```typescript
export class MockProductService implements IProductService {

    public static readonly servicekey: ServiceKey<IProductService> = ServiceKey.create<IProductService>('Contoso.MockProductService', ProductService);

    constructor(serviceScope: ServiceScope) {
        serviceScope.whenFinished(() => {
            // Initialize components
        });
    }

    public async getProducts(): Promise<IProduct[]> {
        const product: IProduct = {
            productId: 1,
            productCode: "LG-MNT-0101",
            productName: "LG Monitor",
            price: 199.99
        };
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(product);
            }, 500);
        });
    }
}
```

Each service contains basically two components:

1. interface (contract)
2. class

The interface or contract implementation here let you to implement dependency injection design pattern to achieve loosely coupled solution architecture. 

With help of 'ServiceScope', you can inject required dependencies. [ServiceScope](https://docs.microsoft.com/en-us/javascript/api/sp-core-library/servicescope?view=sp-typescript-latest) is kind of IoC container which stores the service keys (kind of index) for all the services defined including out-of-box SPFx components.

In some cases, if your business logic is not too complex, you can simply combine business and core service implementation as follows.

```markdown
+-- services
|   +-- productService
|       +-- IProductService.ts
|       +-- ProductService.ts
|       +-- MockProductService.ts
```

To consume these services, you need ServiceScope instance. ServiceScope for the current context can be accessed through WebPartContext or any of the ExtensionContext implementation.
There are multiple ways to consume these services. One simple example is as follows:

**HelloWorldWebPart.tsx**

```typescript

let productService: IProductService;
if (Environment.type === EnvironmentType.Test) {
    productService = this.context.serviceScope.consume(MockProductService.serviceKey);    
} else {
    productService = this.context.serviceScope.consume(ProductService.serviceKey);
}

const products: IProduct[] = await productService.getProducts();

```

As you see in the above example, productService object will be created based on the type of Environment. You can write your own logic to determine implementation and initialize object dynamically. If your logic is complex, you can further move the code in ProductServiceFactory class to encapsulates the creation logic using Factory Pattern implementation.

## UI Guidelines

* The main react component (i.e. HelloWord.tsx) should be used to define only master layout. If your component contains header and footer, it is always a good idea to keep them in separate components.
* Identify all the smallest possible components required for your UI design.

  For example, if you want to build simple Products List web part, you may consider following components
  1. ProductsList.tsx
  2. Product.tsx
  3. SearchBar.tsx
  4. Paging.tsx

* If you're building rich complex UI and if you have identified a large set of UI components, you can probably create separate folders to group them.
* These UI components should only contain rendering logic. Do not add any business logic or data access code in these components.
* You should not add multiple function components/classes to single file.
* Consider keeping the code minimal in render method.
* Consider handling exception properly. Log the exception details with logger components and present generic informative message for end-user on screen. 
* Do not hardcode strings including generic messages. Use string labels defined in language files (en-us.js) located at src > webparts > myWebPart > loc
* Do not store large objects in session/local storages
* Consider importing leaf level components while importing third party libraries. For example, if you want to import PrimayButton from Office Fabric library, use import { PrimaryButton } from "@fluentui/react/lib/Button"; rather than import { PrimaryButton } from "@fluentui/react";. This will help you to keep your package size compact. This can be very useful in scenarios where you would want to build home page components which are required to be performance effective at first load.

## General Coding Guidelines

* Use single responsibility principle while defining classes, function components or methods. Any class/component should be defined to do one single job.
* Similarly, A method/function also should perform only single job it supposed to do. Do not combine more than one job definitions in a single method, even if those jobs are very small. Avoid writing long methods.
* If you think your method can be reusable, define the same as static in a helper class.
* Avoid passing too many parameters to a method. Define model/entity instead and pass it as parameter.
* Do not hardcode predefined numbers/strings. Use constants instead.
* Use enum wherever required. Do not use numbers or strings to indicate discrete values.
* Add inline comments for complex code logic or wherever required. But do not over-do.
* It is always good to keep your code beautiful. 
    * Make brackets aligned properly.
    * Keep your code properly indented. Use 'Format Document' (Shift+Alt+F) feature of VS Code.
    * Do not put unnecessary blank lines.

## Naming Convention

* Do not use abbreviations whle naming variables. Use meaningful, descriptive words.
* Variable or method names should be camelCase. (i.e `productTitle`)
* Method name should be meaningful and should tell what it does. (i.e. `getProductById(id: number);` )
* For boolean variables, properties or methods, prefix name with 'is' or similar.

We recommend you follow these naming conventions to write consistent code:

### Folders

| Components | Capitalization | Examples |
|------------|----------------|----------|
| Root folders | camelCase | webparts, services |
| Component container folders | camelCase | productService, myControl |
---

### Components

| Components | Capitalization | Examples |
|------------|----------------|----------|
| Service Components | PascalCase | IProductService.ts, ProductService.ts |
| UI Components/Controls | PascalCase | MyCustomControl.tsx, SpinnerOverlay.tsx |
| Helper Classes | PascalCase | DateHelper.ts, UIHelper.ts |
---

### Methods and Variables

| Variable Type | Capitalization | Examples |
|---------------|----------------|----------|
| Method/Function name | camelCase | getProductById() |
| Member variable (local to function) | camelCase | productsCount, customerId |
| Function parameters | camelCase | productId, productName |
| Language Strings | PascalCase | DescriptionFieldLabel, SaveButtonLabel |
---
