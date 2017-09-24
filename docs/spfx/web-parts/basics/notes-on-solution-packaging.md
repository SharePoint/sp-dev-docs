---
title: Notes on solution packaging
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Notes on solution packaging

The **package-solution** gulp task looks at **/config/package-solution.json** for various configuration details, including some generic filepaths, as well as defining the relationship between components (_WebParts_ and _Applications_) in a package.

## Configuration File

The schema for the configuration file is as follows:

```ts
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

Each package configuration file has some optional settings to override the places where the task will look for various source files and manifests, as well as defining the location to write the package. Additionally, it has a required solution definition, which instructs the packager on the relationships of various components.

### Solution definition (_ISolution_)

```ts
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

Each solution file must have a **name**, which identifies the package in the SharePoint UI. Additionally, each package must contain a globally unique identifier (**id**), which is used internally by SharePoint. Optionally, you may also specify a **version** number in the format "X.X.X.X", which is used to identify various versions of the package when upgrading.

The solution definition also optionally contains a list of SharePoint Feature definitions.

> **Note:** If this is omitted or empty, the task will create a single Feature for every component (a 1:1 mapping).

### Feature definition (_IFeature_)

```ts
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

It's important to note that this is a definition for creating a SharePoint Feature, and that some of these options will be exposed in the UI. Similarly to the solution, each Feature has a mandatory **title**, **description**, **id**, and **version** number (in the X.X.X.X format). Please note that the Feature **id** should also be a globally unique identifier.

Each feature can also contain any number of components, which will be activated when the feature is activated. This is defined via a list of **componentIds**, which are globally unique identifiers that **MUST** match the **ID** in the component's Manifest file. If this list is undefined or empty the packager will include **every** component in the feature.

### File paths

```ts
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

* **packageDir**: packaging root folder. Defaults to './sharepoint'. All other paths are relative to this folder
* **debugDir**: folder to write the raw package to disk for debugging. Defaults to 'solution/debug'
* **zippedPackage**: name of the sppkg file to create (including extension) Defaults to 'ClientSolution.sppkg'
* **featureXmlDir**: folder containing the custom feature xml to import into the package. Defaults to 'feature_xml'.
  > **Important:** Note that all files in this folder will be included in the SPPKG, however, you must create a .rels file for your custom feature for it to be included in the package manifest.
* **manifestsMatch**: glob to match against to find manifest files. Looks in **dist/** when running in normal, but **deploy/** for production.
* **manifestDir**: path to the folder where manifests are stored. Defaults to 'buildConfig.distFolder'
* **sharepointAssetDir**: directory containing SharePoint assets (such as feature elements, element manifests, and upgrade actions), which will be automatically included in the SharePoint package. Defaults to 'assets'.

### Examples

#### Default Configuration

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

### Custom Feature.xml

In order support provisioning of various SharePoint resources (such as List Templates, Pages, or Content Types), custom Feature XML may also be injected into the package. This is used in order to provision resources necessary for applications, but may also be used for WebParts. The documentation for Feature XML is located [here](https://msdn.microsoft.com/en-us/library/office/ms475601.aspx?f=255&MSPPError=-2147217396).

By default, the packaging task looks for the custom Feature XML in **./sharepoint/feature_xml**. Every file in this folder will be included in the final application package. However, the task relies on the contents of the  **_rels/** folder to determine which custom features are defined. Essentially, it assumes that each **.xml.rels** file is related to a feature.xml of the same name at the top level of the **feature_xml/**, and will add a relationship to the **AppManifest.xml.rels** file including that Feature in the package.