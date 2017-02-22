# Provision SharePoint items with your solution package

At times, you may need to provision a SharePoint list or a document library along with your client-side solution package so that that list or library is available for your client-side components, such as web parts. SharePoint Framework toolchain allows you to package and deploy SharePoint assets with your client-side solution package. These assets are then provisioned when the client-side solution is installed on a site. 

## SharePoint items

The following SharePoint assets can be provisioned along with your client-side solution package:

* Fields
* Content Types
* List Instances
* List Instances with custom schema

## Create SharePoint items in your solution

The solution package uses [SharePoint Features](https://msdn.microsoft.com/en-us/library/ee537350(office.14).aspx) to package and provision the SharePoint items. A Feature is a container that includes one or more SharePoint items to provision. A Feature contains a Feature.xml file and one or more element manifest files. These XML files are also known as Feature definitions. 

Typically, a client-side solution package contains one feature. This feature is activated when the solution is installed in a site. It is important to note that the site administrators install your solution package and not the feature. 

A feature is primarily constructed by using the following XML files:

**Element Manifest File**

The element manifest file contains the SharePoint item definitions and will be executed when the feature is activated. For example: The XML definitions to create a new field or content type or list instance(s) will be in the element manifest. 

Below is an example of an element manifest file that defines a new DateTime field.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
    <Field ID="{1511BF28-A787-4061-B2E1-71F64CC93FD5}"
            Name="DateOpened"
            DisplayName="Date Opened"
            Type="DateTime"
            Format="DateOnly"
            Required="FALSE"
            Group="Financial Columns">
        <Default>[today]</Default>
    </Field>
  </Elements>
```

**Element File**

Any supported files that accompany the element manifest will be an element file. For example, the list instance schema is an element manifest that is associated with a list instance that is defined in an element manifest. 

Below is an example of a custom list instance schema:

```xml
<List xmlns:ows="Microsoft SharePoint" Title="Basic List" EnableContentTypes="TRUE" FolderCreation="FALSE"
      Direction="$Resources:Direction;" Url="Lists/Basic List" BaseType="0" xmlns="http://schemas.microsoft.com/sharepoint/">
  <MetaData>
    <ContentTypes>
      <ContentTypeRef ID="0x010042D0C1C200A14B6887742B6344675C8B" />
    </ContentTypes>    
  </MetaData>
</List>
```

**Upgrade Actions File**

As it name suggests, this is the file that will include any upgrade actions when the solution is updated in the site. As part of the upgrade actions, the action could specify to include one or more element manifests as well. For example: If the upgrade requires a new field to be added, then the field definition will be available as an element manifest and associated in the upgrade actions file. 

Below is an example of an upgrade action file that applies an element manifest file during the upgrade:

```xml
<ApplyElementManifests>
      <ElementManifest Location="9c0be970-a4d7-41bb-be21-4a683586db18\elements-v2.xml" />
</ApplyElementManifests>
```

### Configure the SharePoint feature 

In order to include the XML files, you will need to first define the feature configuration in the *package-solution.json* configuration file underneath the *config* folder in your project. The *package-solution.json* contains the key metadata information about your client-side solution package and is referenced when you run the `package-solution` gulp task which packages your solution into a `.sppkg` file. 

```json
{
  "solution": {
    "name": "hello-world-client-side-solution",
    "id": "26364618-3056-4b45-98c1-39450adc5723",
    "version": "1.1.0.0",
    "features": [{
      "title": "hello-world-client-side-solution",
      "description": "hello-world-client-side-solution",
      "id": "d46cd9d6-87fc-473b-a4c0-db9ad9162b64",
      "assets": {        
        "elementManifests": [
          "elements.xml"
        ],
        "elementFiles":[
          "schema.xml"
        ],
        "upgradeActions":[
        	"upgrade-actions-v1.xml"
        ]
      }
    }]
  },  
  "paths": {
    "zippedPackage": "solution/hello-world.sppkg"
  }
}
``` 
The `features` JSON object contains the metadata about the feature:

Property | Description 
-----|------
id|Unique identifier (GUID) of the feature
title|Title of the feature
description| Description of the feature
assets|An array of XML files used in the feature
elementManifests|Defined within the `assets` property, an array of element manifest files
elementFiles|Defined within the `assets` property, an array of element files
upgradeActions|Defined within the `assets` property, an array of upgrade action files

### Create the feature XML files

The toolchain looks for the XML files as defined in the configuration underneath a special folder - *sharepoint\assets* - in your client-side solution project. 

![Feature XML files in client-side solution project](../../images/feature-provision-project-items.png)

The configurations defined in the `package-solution.json` is what maps the XML files here to its appropriate feature XML file when the `package-solution` gulp task is executed.

### Package SharePoint items 

Once you have defined your feature in the `package-solution.json` and created the respective feature XML files, you can use the following gulp task to package the SharePoint items along with your `.sppkg` package.

```js
gulp package-solution
```

The command above will package one or more client-side component manifests, such as web parts, along with the feature XML files referenced in the `package-solution.json` configuration file.

>**NOTE:** You can use the `--ship` flag to package minified versions of your components. 

## Upgrade SharePoint items

You may include new SharePoint items or update existing SharePoint items when you upgrade your client-side solution. Since provisioning SharePoint items uses features, you will be using the [feature upgrade actions](https://msdn.microsoft.com/en-us/library/office/ee537575(v=office.14).aspx) XML file to define a list of upgrade actions.

The `upgradeActions` JSON object array in the `package-solution.json` references the feature XML file(s) associated with the upgrade actions for your feature. At the least, an upgrade action file will define the element manifest XML file that will be executed when upgrading the feature. 

Below is an example of an upgrade action file that applies an element manifest file during the upgrade:

```xml
<ApplyElementManifests>
      <ElementManifest Location="9c0be970-a4d7-41bb-be21-4a683586db18\elements-v2.xml" />
</ApplyElementManifests>
```

And the corresponding `element-v2.xml` which defines a new Currency Field to be provisioned during the upgrade:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
    <Field ID="{060E50AC-E9C1-4D3C-B1F9-DE0BCAC300F6}"
            Name="Amount"
            DisplayName="Amount"
            Type="Currency"
            Decimals="2"
            Min="0"
            Required="FALSE"
            Group="Financial Columns" />
</Elements>
```