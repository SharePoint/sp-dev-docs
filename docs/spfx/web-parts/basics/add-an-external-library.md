# Add an external library to your SharePoint client-side web part

You might want to include one or more JavaScript libraries in your web part. This article shows you how to bundle an external library and share libraries.


## Bundling a script

By default, the web part bundler will automatically include any library that is a dependency of the web part module. This means that the library will be deployed in the same JavaScript bundle file as your web part. This is more useful for smaller libraries that are not used in multiple web parts.

### Example

Include the string validating library [validator](https://www.npmjs.com/package/validator) package into a web part.

Download the validator package from npm:
	
```
npm install validator --save
```
	
>**Note:** Because you're using TypeScript, you need typings for the package you add. This is essential when you are writing code because TypeScript is just a superset of JavaScript. All the TypeScript code is still converted to JavaScript code when you compile. You can search  for and find typings by using **tsd** package, for example: `tsd install {package} --save`
	
Create a file in the your web part's folder called `validator.d.ts` and add the following:
	
>**Note:** Some libraries do not have typings. Validator is one of them. In this case you would want to define your own typings definition `.d.ts` file for the library. The following code shows an example.
	
```typescript
declare module "validator" {
	export function isEmail(email: string): boolean;
	export function isAscii(text: string): boolean;
}
```
	
In your web part file, import the typings:
	
```typescript
import * as validator from 'validator';
```
	
Use the validator library in your web part code:
	
```typescript
validator.isEmail('someone@example.com');
```

## Sharing a library among multiple WebParts

Your client-side solution might include multiple web parts. These web parts might need to
import or share the same library. In such cases, instead of bundling the library, you should include it in a separate JavaScript file to improve performance and caching. This is especially true of larger libraries.

### Example

In this example, you will share the [marked](https://www.npmjs.com/package/marked) package - a Markdown compiler - in a separate bundle.

Download the **marked** package from npm:
	
```
npm install marked --save
```
	
Download the typings:
	
```
tsd install marked --save
```
	
Edit the **config/config.json** and add an entry to the **externals** map. This is what tells the bundler to put this in a separate file. This prevents the bundler from bundling this library:
	
```json
"marked": "node_modules/marked/marked.min.js"
```
	
Add the statement to import the `marked` library in your web part now that we have added the package and typings for the library:
	
```typescript
import * as marked from 'marked';
```
  	 
Use the library in your web part:
	
```typescript
console.log(marked('I am using __markdown__.'));
```

## Loading a script from a CDN

Instead of loading the library from a npm package, you might want to load a script from a CDN. To do so, edit the **config.json** file to load the library from its CDN URL.

### Example

In this example, you will load jQuery from CDN. You don't need to install the npm package. However, you still need to install the typings. 

Install the typings for jQuery:
	
```
npm install --save @types/jquery
```
	
Update the `config.json` in the `config` folder to load jQuery from CDN. Add an entry to the `externals` field:
	
```json
"jquery": "https://code.jquery.com/jquery-3.1.0.min.js"
```
	
Import jQuery in your web part:
	
```typescript
import * as $ from 'jquery';
```
	
Use jQuery in your web part:
	
```javascript
alert( $('#foo').val() );
```

## Loading a non-AMD module

Some scripts follow the legacy JavaScript pattern of storing the library on the global namespace. This pattern
is now deprecated in favor of [Universal Module Definitions (UMD)](https://github.com/umdjs/umd)/[Asynchronous Module Definitions (AMD)](https://en.wikipedia.org/wiki/Asynchronous_module_definition) or [ES6 modules](https://github.com/lukehoban/es6features/blob/master/README.md#modules). However, you might need to load such libraries in your web part. 

To load a non-AMD module, you add an additional property to the entry in your **config.json** file.

### Example

In this example, you will load a fictional non-AMD module from Contoso's CDN. These steps  apply for any non-AMD script in your src/ or node_modules/ directory.

The script is called **Contoso.js** and is stored at **https://contoso.com/contoso.js**. Its contents are:

```javascript
var ContosoJS = {
  say: function(text) { alert(text); },
  sayHello: function(name) { alert('Hello, ' + name + '!'); }
};
```


Create typings for the script in a file called **contoso.d.ts** in the web part folder.
	
```typescript
declare module "contoso" {
	interface IContoso {
		say(text: string): void;
		sayHello(name: string): void;
	}
	var contoso: IContoso;
	export = contoso;
}
```
	
Update the **config.json** file to include this script. Add an entry to the **externals** map:
	
```json
{
	"contoso": {
		"path": "https://contoso.com/contoso.js",
		"globalName": "ContosoJS"
	}
}
```
	
Add an import to your web part code:
	
```typescript
import contoso from 'contoso';
```
	
Use the contoso library in your code:
	
```typescript
contoso.sayHello(username);
```

## Loading a library that has a dependency on another library

Many libraries have dependencies on another library. You can specify such dependencies in the **config.json** file using the **globalDependencies** property.

Note that you don't have to specify this field for non-AMD modules; they will properly import each other. However, it is important to note that a non-AMD module have a AMD module as a dependency.

There are two examples of this.

#### Non-AMD module has a non-AMD module dependency

This example involves two fictional scripts. These are in the **src/** folder, although they can also be loaded from a CDN.

**ContosoUI.js**

```javascript
Contoso.EventList = {
    alert: function() {
        var events = Contoso.getEvents();
        events.forEach( function(event) {
            alert(event);
        });
    }
}
```

**ContosoCore.js**

```javascript
var Contoso = {
    getEvents: function() {
        return ['A', 'B', 'C'];   
    }
};
```

Add or create tpyings for this class. In this case, you will create `Contoso.d.ts`, which contains typings for both JavaScript files. 
	
**contoso.d.ts**

```typescript
declare module "contoso" {
interface IEventList {
 alert(): void;
}
interface IContoso {
 getEvents(): string[];
 EventList: IEventList;
}
var contoso: IContoso;
export = contoso;
}
```

Update the **config.json** file. Add two entries to **externals**:
	
```json
{
     "contoso": {
         "path": "/src/ContosoCore.js",
         "globalName": "Contoso"
     },
     "contoso-ui": {
         "path": "/src/ContosoUI.js",
         "globalName": "Contoso",
         "globalDependencies": ["contoso"]
     }
}
```
    
Add imports for Contoso and ContosoUI:
	   
```typescript
import contoso = require('contoso');
require('contoso-ui');
```

Use the libraries in your code:
	
```typescript
contoso.EventList.alert();
```

## Loading SharePoint JSOM

Loading SharePoint JSOM is essentially the same scenario as loading non-AMD scripts that have dependencies. This means using both the **globalName** and **globalDependency** options.

Install typings for Microsoft Ajax which is a dependency for JSOM typings:

```
tsd install microsoft.ajax --save
```

Install typings for the JSOM:

```
tsd install sharepoint --save
``` 

Add entries to the `config.json`:

```json
{
"sp-init": {
 "path": "https://CONTOSO.sharepoint.com/_layouts/15/init.js",
 "globalName": "$_global_init"
},
"microsoft-ajax": {
 "path": "https://CONTOSO.sharepoint.com/_layouts/15/MicrosoftAjax.js",
 "globalName": "Sys",
 "globalDependencies": [ "sp-init" ]
},
"sp-runtime": {
 "path": "https://CONTOSO.sharepoint.com/_layouts/15/SP.Runtime.js",
 "globalName": "SP",
 "globalDependencies": [ "microsoft-ajax" ]
},
"sharepoint": {
 "path": "https://CONTOSO.sharepoint.com/_layouts/15/SP.js",
 "globalName": "SP",
 "globalDependencies": [ "sp-runtime" ]
}
}
```

In your web part, add the require statements:
	
```typescript
require('sp-init');
require('microsoft-ajax');
require('sp-runtime');
require('sharepoint');
```

## Load localized resources

Loading localized resources is simple. There is a map in **config.json** called **localizedResources** with which you can describe how to load localized resources. Paths in this map are relative to the **lib** folder and must not contain a leading slash (**/**).

In this example, you have a folder **src/strings/**. In this folder are several JavaScript files with names such as **en-us.js**, **fr-fr.js**, **de-de.js**. Because each of these files must be loadable by the module loader, they must contain a CommonJS wrapper. For example, in **en-us.js**:

```typescript
  define([], function() {
    return {
      "PropertyPaneDescription": "Description",
      "BasicGroupName": "Group Name",
      "DescriptionFieldLabel": "Description Field"
    }
  });
```

Edit the **config.json** file. Add an entry to **localizedResources**. The **{locale}** is a placeholder token for the locale name:

```json
{
"strings": "strings/{locale}.js"
}
```
    
Add typings for your strings. In this case, you have a file **MyStrings.d.ts**:

```typescript
declare interface IStrings {
webpartTitle: string;
initialPrompt: string;
exitPrompt: string;
}

declare module 'mystrings' {
const strings: IStrings;
export = strings;
}
```
    
Add imports for the strings in your project:
	
```typescript
import * as strings from 'strings';
```
    
Use the strings in your project:

```typescript
alert(strings.initialPrompt);
```
