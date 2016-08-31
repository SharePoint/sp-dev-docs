# Notes on solution packaging

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not supported for use in production environments.
>

The **package-solution** gulp task looks at **/config/package-solution.json** for various configuration details, including some generic filepaths, as well as defining the relationship between components (_WebParts_ & _Applications_) in a package.

## Configuration File

The schema for the configuration file is as follows:

```javascript
interface IPackageSolutionOptions {
  paths?: IPackageSolutionPathOptions;
  solution: ISolution;
}
```

Each package configuration file has some optional settings to override the places where the task will look for various source files & manifests, as well as defining the location to write the package. Additionally, it has a required solution definition, which instructs the packager on the relationships of various components.

### Solution definition (_ISolution_)

```javascript
interface ISolution {
  name: string;
  id: string;
  version?: string;
  features?: IFeature[];
}
```

Each solution file must have a **name**, which identifies the package in the SharePoint UI. Additionally, each package must contain a globally unique identifier (**id**), which is used internally by SharePoint. Optionally, you may also specify a **version** number in the format "X.X.X.X", which is used to identify various versions of the package when upgrading.

The solution definition also optionally contains a list of SharePoint Feature definitions. **Note:** If this is omitted or empty, the task will create a single Feature for every component (a 1:1 mapping).

### Feature definition (_IFeature_)

```javascript
interface IFeature {
  title: string;
  description: string;
  id: string;
  version?: string;
  componentIds?: string[];
}
```

It's important to note that this is a definition for creating a SharePoint Feature, and that some of these options will be exposed in the UI. Similarly to the solution, each Feature has a mandatory **title**, **description**, **id**, and **version** number (in the X.X.X.X format). Please note that the Feature **id** should also be a globally unique identifier.

Each feature can also contain any number of components, which will be activated when the feature is activated. This is defined via a list of **componentIds**, which are globally unique identifiers that **MUST** match the **ID** in the component's Manifest file. If this list is undefined or empty the packager will include **every** component in the feature.

### File paths (_IPackageSolutionPathOptions_)

```javascript
interface IPackageSolutionPathOptions {
  rawPackageDir: string;
  zippedPackage: string;
  featureXmlDir: string;
}
```

* **rawPackageDir** is the directory in which the unzipped package files will be written.
* **zippedPackage** is the name of the zipped package, including extension (.spapp).
* **featureXmlDir** is the directory in which custom feature xml is located.

### Examples

#### Default Configuration

```json
{
  "paths": {
    "rawPackageDir": "./sharepoint/solution/debug",
    "zippedPackage": "ClientSolution.spapp",
    "featureXmlDir": "./sharepoint/feature_xml"
  },
  "solution": {
    "name": "A Sample Solution",
    "id": "00000000-0000-0000-0000-000000000000",
    "version": "1.0.0.0"
  }
}
```

### Custom Feature.xml

In order support provisioning of various SharePoint resources (such as List Templates, Pages, or Content Types), custom Feature XML may also be injected into the package. This is used in order to provision resources necessary for applications, but may also be used for WebParts. The documentation for Feature XML is located [here](https://msdn.microsoft.com/en-us/library/office/ms475601.aspx?f=255&MSPPError=-2147217396).

By default, the packaging task looks for the custom Feature XML in **./sharepoint/feature_xml**. Every file in this folder will be included in the final application package. However, the task relies on the contents of the  _rels/ folder to determine which custom features are defined. Essentially, it assumes that each **.xml.rels** file is related to a feature.xml of the same name at the top level of the **feature_xml/**, and will add a relationship to the **AppManifest.xml.rels** file including that Feature in the package.