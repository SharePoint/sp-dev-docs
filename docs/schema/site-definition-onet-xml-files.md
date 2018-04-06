---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 170d526a-49c7-41c6-9295-47bd21b1ba7d
---

# Site Definition (Onet.xml) Files

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

In an
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx) file, the [Feature](feature-element-site.md) element is used within a site definition configuration to contain a reference to a Feature instance and default property values. The [Configuration](configuration-element-site.md) element specifies lists and modules to use when creating SharePoint sites. For information about the format and elements used in site definitions, see [Site Schema](site-schema.md).

SharePoint Foundation activates Features specified within the [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx) file in the order that they are listed. Consequently, you must specify Features that are depended upon before Features that depend upon them.

## Example

The following example shows the [Feature](feature-element-site.md) element used to specify Features and Feature properties in a site definition configuration.

```XML
    <Configuration ID="0" Name="Publishing"> 
       <Lists>
          <List Title="Web Part Gallery" Type="113" Url="_catalogs/wp" 
             RootWebOnly="True" />
       </Lists>
       <SiteFeatures>
          <Feature ID="AEBC918D-B20F-4a11-A1DB-9ED84D79C87E"/>
       </SiteFeatures>
       <WebFeatures>
          <Feature ID="22A9EF51-737B-4ff2-9346-694633FE4416">
             <Properties xmlns="http://schemas.microsoft.com/sharepoint/">
                <Property Key="ChromeMasterUrl" Value=""/>
                <Property Key="WelcomePagePageLayoutUrl" Value=""/>
                <Property Key="WelcomePageUrl" Value=""/>
             </Properties>
          </Feature>
          <Feature ID="23BCB938-F4B5-42a4-8050-F8CB92EF4078">
             <Properties xmlns="http://schemas.microsoft.com/sharepoint/">
                <Property Key="CopyLayouts" Value="true"/>
             </Properties>
          </Feature>
       </WebFeatures>    
       <Modules></Modules>
    </Configuration>
```

## See also

- [Site Schema](site-schema.md)
- [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
- [WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx)








