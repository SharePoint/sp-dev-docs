---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: caa75c38-9788-4727-a2a8-ab92df90a256
---

# Feature.xml Files

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

In a Feature.xml file, the [Feature](feature-element-feature.md) element defines a Feature and specifies the location of assemblies, files, dependencies, or properties that support the Feature.

- [Feature](feature-element-feature.md)

- [ActivationDependencies](activationdependencies-element-feature.md)

- [ActivationDependency](activationdependency-element-feature.md)

- [ElementManifests](elementmanifests-element-feature.md)

- [ElementFile](elementfile-element-feature.md)

- [ElementManifest](elementmanifest-element-feature.md)

- [Properties](properties-element-feature.md)

- [Property](property-element-feature.md)

- [UpgradeActions Element (Feature)](upgradeactions-element-feature.md)

- [AddContentTypeField Element (Feature)](addcontenttypefield-element-feature.md)

- [ApplyElementManifests Element (Feature)](applyelementmanifests-element-feature.md)

- [ElementFile Element (Feature)](elementfile-element-feature.md)

- [ElementManifest Element (Feature)](elementmanifest-element-feature.md)

- [CustomUpgradeAction Element (Feature)](customupgradeaction-element-feature.md)

- [Parameters Element (Feature)](parameters-element-feature.md)

- [Parameter Element (Feature)](parameter-element-feature.md)

- [MapFile Element (Feature)](mapfile-element-feature.md)

- [VersionRange Element (Feature)](versionrange-element-feature.md)

- [AddContentTypeField Element (Feature)](addcontenttypefield-element-feature.md)

- [ApplyElementManifests Element (Feature)](applyelementmanifests-element-feature.md)

- [CustomUpgradeAction Element (Feature)](customupgradeaction-element-feature.md)

- [MapFile Element (Feature)](mapfile-element-feature.md)

For information about where to create and how to implement Feature.xml files, see [Using Features in SharePoint Foundation](https://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1(Office.15).aspx). 

For information about how to upgrade a Feature, see [Upgrading Features](https://msdn.microsoft.com/library/e917f709-6491-4d50-adbe-2ab8f35da990(Office.15).aspx).

<br/>

The following example shows how to use a Feature.xml file to specify activation dependencies, special fields, and relative paths to element definition files.

```XML 
    <Feature 
      Id="11111111-1111-1111-1111-11111111111" 
      Title="Location Services"
      Description="This Feature contains lists and parts that let you link location data to your customer lists."
      Scope="Web">
      <ActivationDependencies>
        <ActivationDependency
          FeatureId="11111111-1111-1111-1111-111111111111" />
      </ActivationDependencies>
      <ElementManifests>
        <ElementManifest 
          Location="Location\LocationPart.xml"/>
        <ElementManifest 
          Location="CustomerLocation\CustomerLocationList.xml"/>
        <ElementFile 
          Location="test.aspx"/>
      </ElementManifests>
      <Properties>
        <Property
          Key="Color"
          Value="Blue"/>
        <Property
          Key="Shape"
          Value="Triangle"/>
      </Properties> 
    </Feature>
```







