---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Web Template schema
api_type:
- schema
ms.assetid: e39163b0-cb8f-4808-88fb-bc4dfb323a51
---

# Elements (Web Template)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Provides a parent for the **WebTemplate** element in an elements.xml file in a web template WSP file.

- [Elements (Web Template)](elements-web-template.md)

- [WebTemplate Element (Web Template)](webtemplate-element-web-template.md)

## Definition

```XML
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
```

<br/>

```XML
<WebTemplate ...>
```

<br/>

```XML
</Elements>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

<table>
<colgroup>
<col width="40%" />
<col width="60%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="webtemplate-element-web-template.md">WebTemplate Element (Web Template)</a></p></td>
<td align="left"><p>Provides configuration data for a web template.</p></td>
</tr>
</tbody>
</table>

### Parent elements

None

### Remarks

The elements.xml file is itself referenced in the **ElementManifests** section of a feature.xml file that is also part of the WSP file. When the feature is activated for a site collection, the web template becomes available for creating new websites within the collection. The **ElementManifests** section also identifies an Onet.xml file that contains additional details of the web template that are not specified in the **WebTemplate** child element.

## Example

The following is an example of an **Elements** element.

```XML
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <WebTemplate 
        AdjustHijriDays="0" 
        AlternateCssUrl="" 
        AlternateHeader="" 
        BaseTemplateID="9" 
        BaseTemplateName="BLOG" 
        BaseConfigurationID="0" 
        CalendarType="1" 
        Collation="25" 
        ContainsDefaultLists="TRUE" 
        CustomizedCssFiles="" 
        CustomJSUrl="" 
        Description="A 4th Generation Blog Site." 
        ExcludeFromOfflineClient="FALSE" 
        Locale="1033" 
        Name="BlogIV" 
        ParserEnabled="TRUE" 
        PortalName="" 
        PortalUrl="" 
        PresenceEnabled="TRUE" 
        ProductVersion="4" 
        QuickLaunchEnabled="TRUE" 
        Subweb="TRUE" 
        SyndicationEnabled="TRUE" 
        Time24="FALSE" 
        TimeZone="13" 
        Title="BlogIV" 
        TreeViewEnabled="FALSE" 
        UIVersionConfigurationEnabled="FALSE" />
    </Elements>
```

## See also

- [Working with Site Templates and Definitions](http://msdn.microsoft.com/library/1edf6d4d-eddb-4cb5-9034-ed394e8a3e01(Office.15).aspx)








