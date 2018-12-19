---
title: "Form element (List)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: e91480cc-5dfd-4626-a73f-e4c6d5e2d6a1
description: Describes the forms in a base list type.
---

# Form element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Describes the forms in a base list type.
  
```XML
<Form  Default = "TRUE" | "FALSE"  MobileUrl = "Text"
  Path = "Text"
  SetupPath = "Text"
  Template = "Text"
  Type = "DisplayForm" | "EditForm" | "NewForm"
  Url = "URL"  UseDefaultListFormWebPart = "TRUE" | "FALSE"
  UseLegacyForm = "TRUE" | "FALSE"
  WebPartZoneID = "Text">  <WebParts>    <AllUsersWebPart      WebPartOrder = Integer      WebPartZoneID = "Text">        <![CDATA[...]]>    </AllUsersWebPart>  </WebParts>
</Form>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Default** <br/> |Optional **Text**. Specifies whether the form is the default form to use for the specified **Type**.<br/><br/>For example, one can define multiple forms for which **Type** equals **DisplayForm**. If this is the case, a default display form must be established so that a list can determine which display form to use.<br/><br/>If multiple forms are defined that have the same **Type**, and a default form is not established by specifying **Default="TRUE"**, a default form will be chosen programmatically.<br/><br/>If there is only one form that is defined for a specified **Type**, **Default="TRUE"** is enforced programmatically.  <br/> |
|**MobileUrl** <br/> |Optional **Text**.  <br/> |
|**Path** <br/> |Optional **Text**. Specifies the file system path, including the leaf name, of the file containing the template used for the list of document libraries that is rendered in a file dialog box. The value of this attribute is relative to the `_layouts` directory and does not start with a forward slash (`/`).  <br/> |
|**SetupPath** <br/> |Optional **Text**. Specifies the relative path to the folder in the setup directory that contains the .aspx page of the form, for example, `pages/form.aspx`.  <br/> |
|**Template** <br/> |Optional **Text**. Specifies the list template to which the form belongs.  <br/> |
|**Type** <br/> |Required **Text**. Indicates the type of form being described and can be one of the following values: **DisplayForm**, **EditForm**, or **NewForm**.  <br/> |
|**Url** <br/> |Required **URL**. Specifies the path to the ASP.NET file used for the form.  <br/> |
|**UseDefaultListFormWebPart** <br/> |Optional **Text**. Specifies whether a ListFormWebPart should be created when the form is provisioned. By default, a **ListFormWebPart** object is created unless this attribute is set to **FALSE**. If this attribute equals **FALSE**, use the [WebParts](webparts-element-list.md) child element to define your customized list form web part.  <br/> |
|**UseLegacyForm** <br/> |Optional **Boolean**. Used during upgrade to specify that Microsoft SharePoint Foundation use Collaborative Application Markup Language (CAML), as in previous versions of the technology, instead of Web controls, to define the view of an item within a form.  <br/> |
|**WebPartZoneID** <br/> |Optional **Text**. Specifies the zone for the web part.  <br/> |
   
### Child elements

- [ListFormBody](listformbody-element-list.md)
- [ListFormButtons](listformbuttons-element-list.md)
- [ListFormClosing](listformclosing-element-list.md)
- [ListFormOpening](listformopening-element-list.md)
- [WebParts](webparts-element-list.md)
   
### Parent elements

- [Forms](forms-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
## Example

The following example shows the form definitions that are specified in the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for Announcements lists. 
  
```XML
<Forms>
      <Form Type="DisplayForm" Url="DispForm.aspx" SetupPath="pages\form.aspx" WebPartZoneID="Main" />
      <Form Type="EditForm" Url="EditForm.aspx" SetupPath="pages\form.aspx" WebPartZoneID="Main" />
      <Form Type="NewForm" Url="NewForm.aspx" SetupPath="pages\form.aspx" WebPartZoneID="Main" />
    </Forms>
```

<br/>
