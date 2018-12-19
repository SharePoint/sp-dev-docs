---
manager: soliver
ms.date: 12/7/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4f43e194-322e-4eca-9c96-8ad9f13818bd
---

# Modules 

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Modules are defined in an element manifest similarly to how they are defined in an [Onet.xml](https://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx) file to specify files with which to provision SharePoint sites.

Zero or more [File](file-element-module.md) elements are allowed as a child of the [Module](module-element-module.md) element. Use the [AllUsersWebPart](alluserswebpart-element-module.md) element to specify a web part instance inside a given page except for a list view web part. The [View](view-element-module.md) element specifies list view web parts to use on site pages. The [NavBarPage](navbarpage-element-module.md) element declares that the page containing this element should participate in the navigation bar structure. The [Property](property-element-module.md) element allows you to specify custom properties for a Feature.

An element manifest uses the following schema:

- [Elements](elements-element-module.md)

- [Module](module-element-module.md)

- [File](file-element-module.md)

- [View](view-element-module.md)

- [AllUsersWebPart](alluserswebpart-element-module.md)

- [NavBarPage](navbarpage-element-module.md)

- [Property](property-element-module.md)

<br/>

The following schema is used within an Onet.xml file:

- [Configuration](configuration-element-site.md)

- [Modules](modules-element-site.md)

- [Module](module-element-site.md)

- [File](file-element.md)

- [View](view-element-module.md)

- [AllUsersWebPart](alluserswebpart-element-site.md)

- [NavBarPage](navbarpage-element-sitemodule.md)

- [Property](property-element-sitemodule.md)

## Examples

The following example registers a web part Feature that specifies custom properties.

```XML 
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <Module Name="WebPartPopulation" Url="_catalogs/wp" RootWebOnly="TRUE">
        <File Url="MyWebPart.webpart" Type="GhostableInLibrary">
          <Property Name="MyGroup" Value="Business Information" />
          <Property Name="MyLocation" Value="Middle Right" />
        </File>
      </Module>
    </Elements>
```

<br/>

The next example registers a Feature that includes two files and that specifies a list view to display on one of the pages.

```XML 
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <Module Name="KnowledgeBasePages" Url="" Path="KnowledgeBaseFolder">
        <File Url="KnowledgeBases.aspx">
          <View List="KnowledgeBaseList" BaseViewID="0" WebPartZoneID="Left" WebPartOrder="0" />
        </File>
        <File Url="KnowledgeBaseLink.aspx"/>
      </Module>
    </Elements>
```

<br/>

## See also

- [Module](https://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)
- [How to: Provision a File](https://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)








