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
ms.assetid: ff4ba91a-cc5f-47ff-9101-a7651f452185
---

# WebTemplate Element (Web Template)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Configures several aspects of a custom web template and the websites that are created from it. This element is in an elements.xml file that is inside the .wsp file that packages a web template.

- [Elements (Web Template)](elements-web-template.md)
  
- [WebTemplate Element (Web Template)](webtemplate-element-web-template.md) 

## Definition

```XML
<WebTemplate ... />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="10%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**AdjustHijriDays**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Optional. Specifies the number of days to extend or reduce the current month in Hijri calendars that are used on websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AlternateCssUrl**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. Specifies the URL for an alternative cascading style sheet (CSS) to use for the websites that are created from the web template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AlternateHeader**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. Specifies the name of an ASPX page that is located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS directory that defines an alternative header for the top area in site pages of websites that are created from the web template. This attribute provides a way to replace the header region with the output of an ASPX page that defines a different header.</p>
<p>For example, to specify `myHeader.aspx` as the name of the file that provides an alternative header, add `AlternateHeader="myHeader.aspx"` to the **Project** element at the beginning of the `Onet.xml` file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseTemplateID**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Required. The ID of the site definition on which the web template ultimately derives. This is the value of the **ID** attribute of the **Template** element in a `WebTemp*.xml` file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**BaseTemplateName**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Required. The internal name of the site definition on which the web template ultimately derives. This is the value of the **Name** attribute of the **Template** element in a `WebTemp*.xml` file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseConfigurationID**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Required. The ID of the site definition configuration on which the web template ultimately derives. This is the value of the **ID** attribute of a **Configuration** element in a `WebTemp*.xml` file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CalendarType**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Optional. The ID of the default calendar type for calendars on websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Collation**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Optional. The ID of the collation system for websites that are created from the web template. For more information, see <span sdata="cer" target="P:Microsoft.SharePoint.SPRegionalSettings.Collation"><span class="nolink">Collation</span></span>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ContainsDefaultLists**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether the site definition from which the web template is ultimately derived contained lists that are defined in the global `Onet.xml` file. This is significant because if the original site definition did contain such lists, those lists are *not* included in websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CustomizedCssFiles**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. Specifies custom cascading style sheet (.css) files.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CustomJSUrl**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. Specifies a custom JavaScript file located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\LAYOUTS directory that contains script to execute within a website created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. A description of the site type that is defined by the web template as it appears in the user interface (UI) when users are selecting a type of website to create.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayCategory**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. Specifies the category in which the web template appears in the Microsoft SharePoint Foundation UI when users are selecting a type of website to create; for example, **Collaboration**, **Meetings**, or some other custom name. If it is not specified, the default is "Custom".</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ExcludeFromOfflineClient**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether websites that are created from the web template are downloaded during offline synchronization.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>**RelativeUrl**</p></td>
<td align="left"><p>Optional. Contains the URL for the preview image that is displayed in the SharePoint Foundation UI when users are selecting a type of website to create.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Locale**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Optional. The numeric ID of a language/culture, such as 1033 for U.S. English.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Required. The internal name of the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ParserEnabled**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether column values in document libraries are automatically added to documents that are added to a library in websites that are created from the web template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PortalName**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. The name of the portal site that is associated with websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PortalUrl**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. The URL of the portal site that is associated with websites that are created from the web template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PresenceEnabled**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether inline presence information for users is enabled on websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ProductVersion**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Optional. The version of SharePoint Foundation in which the web template is created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**QuickLaunchEnabled**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether there is a Quick Launch area on websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Subweb**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether the web template was created from a subweb or the root website of a site collection. If it is **True**, the template was created from a subweb.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SyndicationEnabled**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether Really Simple Syndication (RSS) is enabled for websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Time24**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether to use a 24-hour time format to represent the hours of the day on websites that are created from the web template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TimeZone**</p></td>
<td align="left"><p>**int**</p></td>
<td align="left"><p>Optional. The default time zone of websites that are created from the web template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. The public name of the web template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TreeViewEnabled**</p></td>
<td align="left"><p>**string**</p></td>
<td align="left"><p>Optional. Specifies whether the tree view feature is enabled in the left navigational area of pages in websites that are created from the web template. Although this attribute is type **string**, the only meaningful values are "TRUE" and "FALSE".</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UIVersionConfigurationEnabled**</p></td>
<td align="left"><p>**boolean**</p></td>
<td align="left"><p>Optional. Specifies whether users can change the UI version of websites that are created from the web template.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

[Elements (Web Template)](elements-web-template.md)

## Example

The following includes an example of a **WebTemplate** element.

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
        Title="Our Blog" 
        TreeViewEnabled="FALSE" 
        UIVersionConfigurationEnabled="FALSE" />
    </Elements>
```

## See also

- [Working with Site Templates and Definitions](http://msdn.microsoft.com/library/1edf6d4d-eddb-4cb5-9034-ed394e8a3e01(Office.15).aspx)








