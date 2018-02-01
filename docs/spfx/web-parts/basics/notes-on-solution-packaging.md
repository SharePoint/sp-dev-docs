---
title: Solution packaging
description: The package-solution gulp task looks at /config/package-solution.json for various configuration details in SharePoint Framework.
ms.date: 02/01/2018
ms.prod: sharepoint
---


# Solution packaging

The **package-solution** gulp task looks at **/config/package-solution.json** for various configuration details, including some generic filepaths, as well as defining the relationship between components (_WebParts_ and _Applications_) in a package.

The schema for the configuration file is as follows:

```typescript
interface IPackageSolutionTaskConfig {
    paths?: {
        packageDir?: string;
        debugDir?: string;
        zippedPackage?: string;
        featureXmlDir?: string;
        manifestsMatch?: string;
        manifestDir?: string;
        sharepointAssetDir?: string;
    };
    solution?: ISolution;
}
```

Each package configuration file has some optional settings to override the places where the task looks for various source files and manifests, as well as defining the location to write the package. Additionally, it has a required solution definition, which instructs the packager on the relationships of various components.

## Solution definition (_ISolution_)

```typescript
interface ISolution {
    name: string;
    id: string;
    title?: string;
    supportedLocales?: string[];
    version?: string;
    features?: IFeature[];
    iconPath?: string;
    skipFeatureDeployment?: boolean;
}
```

Each solution file must have a **name** that identifies the package in the SharePoint UI. Additionally, each package must contain a globally unique identifier (**id**), which is used internally by SharePoint. Optionally, you may also specify a **version** number in the format "X.X.X.X", which is used to identify various versions of the package when upgrading.

The solution definition also optionally contains a list of SharePoint Feature definitions.

> [!NOTE] 
> If this is omitted or empty, the task creates a single Feature for every component (a 1:1 mapping).

## Feature definition (_IFeature_)

```typescript
interface IFeature {
    title: string;
    description: string;
    id: string;
    version?: string;
    componentIds?: string[];
    components: IComponent[];
    assets: ISharepointAssets<string>;
}
```

It's important to note that this is a definition for creating a SharePoint feature, and that some of these options are exposed in the UI. Similarly to the solution, each feature has a mandatory **title**, **description**, **id**, and **version** number (in the X.X.X.X format). Note that the feature **id** should also be a globally unique identifier.

Each feature can also contain any number of components that are activated when the feature is activated. This is defined via a list of **componentIds**, which are globally unique identifiers that *must* match the **ID** in the component's manifest file. If this list is undefined or empty, the packager includes *every* component in the feature.

## File paths

```typescript
interface IPackageSolutionTaskConfig {
    paths?: {
        packageDir?: string;
        debugDir?: string;
        zippedPackage?: string;
        featureXmlDir?: string;
        manifestsMatch?: string;
        manifestDir?: string;
        sharepointAssetDir?: string;
    };
    solution?: ISolution;
}
```

* **packageDir**: Packaging root folder. Defaults to `./sharepoint`. All other paths are relative to this folder.
* **debugDir**: Folder to write the raw package to disk for debugging. Defaults to `solution/debug`
* **zippedPackage**: Name of the sppkg file to create (including extension). Defaults to `ClientSolution.sppkg`
* **featureXmlDir**: Folder containing the custom feature XML to import into the package. Defaults to `feature_xml`
  
  > [!IMPORTANT] 
  > Note that all files in this folder are included in the SPPKG; however, you must create a .rels file for your custom feature for it to be included in the package manifest.

* **manifestsMatch**: Glob to match against to find manifest files. Looks in **dist/** when running in normal, but in **deploy/** for production.
* **manifestDir**: Path to the folder where manifests are stored. Defaults to `buildConfig.distFolder`
* **sharepointAssetDir**: Directory containing SharePoint assets (such as feature elements, element manifests, and upgrade actions), which are automatically included in the SharePoint package. Defaults to `assets`

## Examples

### Default configuration

```json
{
  "solution": {
    "name": "spfx-hello-world-client-side-solution",
    "id": "77fd2eed-55b0-42bf-8b4d-f66730cb0c34",
    "version": "1.0.0.0"
  },
  "paths": {
    "zippedPackage": "solution/spfx-hello-world.sppkg"
  }
}
```

## Custom feature XML

To support provisioning of various SharePoint resources (such as List Templates, Pages, or Content Types), custom feature XML may also be injected into the package. This is used to provision resources necessary for applications, but may also be used for web parts. The documentation for Feature XML is located at [Feature.xml Files](https://msdn.microsoft.com/en-us/library/office/ms475601.aspx?f=255&MSPPError=-2147217396).

By default, the packaging task looks for the custom feature XML in **./sharepoint/feature\_xml**. Every file in this folder is included in the final application package. However, the task relies on the contents of the **\_rels/** folder to determine which custom features are defined. 

Essentially, it assumes that each **.xml.rels** file is related to a feature.xml of the same name at the top level of the **feature_xml/**, and adds a relationship to the **AppManifest.xml.rels** file that includes that feature in the package.

## See also

- [SharePoint Framework Overview](../../sharepoint-framework-overview.md)