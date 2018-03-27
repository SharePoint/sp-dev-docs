---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b52d306c-539b-4e00-b691-66c24cc16d17
---

# List Template Files

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

A [ListTemplate](listtemplate-element-list-template.md) element points to a list definition contained in the [Schema.xml](https://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx) file of a particular list type. You can use a list template to create a list.

> [!NOTE] 
> If you install a list template Feature, install a list instance Feature that is based on the list template Feature, and then activate only the list instance Feature. Microsoft SharePoint Foundation creates a new list in the specified website even though the list template Feature has not been activated.

For a specified feature, SharePoint Foundation checks the Features directory for a `List\_Template\\Schema.xml` file, but you can specify a Path parameter for another directory.

- [Elements](elements-element-list-template.md)

- [ListTemplate](listtemplate-element-list-template.md)

<br/>

The following example shows the contents of an XML file in a list definition that defines a list template, which means that the list type is displayed on the Create Page.

```XML 
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
       <ListTemplate Name="announce" Type="104" BaseType="0" 
          OnQuickLaunch="TRUE" SecurityBits="11" DisplayName="Announcements" 
          Description="Create an announcements list when you want a place to share news, status, and other short bits of information." 
          Image="/_layouts/images/itann.gif">
       </ListTemplate>
    </Elements>
```

## See also

- [List Definition (Schema.xml) Files](list-definition-schema-xml-files.md)





