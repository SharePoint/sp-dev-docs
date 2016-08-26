# Known Issues with creating client-side web parts

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.

This article provides information about resolving known issues that can occur when you develop client-side web parts.

## Issues generating a new client-side web part project

### node-gyp rebuild error

You may get the following error when you run `yo @microsoft/sharepoint`

```
> bufferutil@1.2.1 install C:\Users\chakkaradeep\apps\helloworld-webpart\node_modules\bufferutil
> node-gyp rebuild

MSBUILD : error MSB4132: The tools version "2.0" is unrecognized. Available tools versions are "4.0".
```

While the console reports an error, it is safe to ignore this error. The dependency `bufferutil` tries to use MSBUILD to compile its tools and if they are not available, it uses its JavaScript tool instead; though it gives you an error.

### Phantomjs error

In Windows, you may get the following error:

```
Failed at the phantomjs-prebuilt@2.1.6 install script 'node install.js'.
```

This is because **phantomjs** is not able to find Python to run the script. To fix this issue, you need to add the Python directory and the Python scripts directory to the PATH system environment variable and then close and reopen the console session. For example, the Python folder will be where you installed Python **c:\python** and the scripts folder then will be **c:\python\scripts**.

## Issues running gulp serve

### Linux/case-sensitive file systems

If you are using a Linux OS, such as Ubuntu or Fedora, you might encounter the following error when you run `gulp serve`:

```
[20:59:42] Error - typescript - node_modules/@microsoft/sp-client-base/lib/index.d.ts(37,70): error TS2307: Cannot find module './odataTypes/IOdataNavigationNodeCollection'.
[20:59:42] Error - typescript - node_modules/@microsoft/sp-client-base/lib/index.d.ts(38,38): error TS2307: Cannot find module './odataTypes/IOdataWeb'.
[20:59:42] Error - typescript - node_modules/@microsoft/sp-client-preview/lib/local/bundles/platform-exports.d.ts(37,73): error TS2307: Cannot find module '../clientSideWebParts/propertyPane/propertyPaneFields/propertyPaneDropDown/IPropertyPaneDropdown'.
[20:59:42] Error - typescript - node_modules/@microsoft/sp-client-preview/lib/local/bundles/platform-exports.d.ts(38,38): error TS2307: Cannot find module '../clientSideWebParts/propertyPane/propertyPaneFields/propertyPaneDropDown/PropertyPaneDropDown'.
[20:59:42] Error - typescript - node_modules/@microsoft/sp-client-preview/lib/local/bundles/platform-exports.d.ts(47,39): error TS2307: Cannot find module '../clientSideWebParts/propertyPane/propertyPaneFields/PropertyPaneTextField/PropertyPaneTextField'.
[20:59:42] Error - 'typescript' sub task errored after 2.47 s 
 "TypeScript error(s) occurred."
```

This is due to a bug in the SharePoint Framework Developer Preview builds. You can use the following workaround to overcome this issue:

In `@microsoft/sp-client-base/lib/index.d.ts`, change:

`./odataTypes/IOdataNavigationNodeCollection` => `./odataTypes/IODataNavigationNodeCollection`

`./odataTypes/IOdataWeb` => `./odataTypes/IODataWeb`

In `@microsoft/sp-client-preview/lib/local/bundles/platform-exports.d.ts`, change:

`../clientSideWebParts/propertyPane/propertyPaneFields/propertyPaneDropDown/IPropertyPaneDropdown` => `../clientSideWebParts/propertyPane/propertyPaneFields/propertyPaneDropdown/IPropertyPaneDropdown`

`../clientSideWebParts/propertyPane/propertyPaneFields/propertyPaneDropDown/PropertyPaneDropDown` => `../clientSideWebParts/propertyPane/propertyPaneFields/propertyPaneDropdown/PropertyPaneDropdown`

`../clientSideWebParts/propertyPane/propertyPaneFields/PropertyPaneTextField/PropertyPaneTextField` => `../clientSideWebParts/propertyPane/propertyPaneFields/propertyPaneTextField/PropertyPaneTextField`
