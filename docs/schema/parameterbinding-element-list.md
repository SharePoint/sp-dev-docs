---
title: "ParameterBinding Element (List)"


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
ms.assetid: 71f578c2-6343-4d8d-a251-739f8f53bf07

description: "Last modified: March 09, 2015"
---

# ParameterBinding Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a stylesheet parameter binding to make a resource available to the XSL that renders the view. 
  
```VB.net
<ParameterBinding  Name = "Text"  Location = "Text" />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Optional **Text**. Specifies a name for the parameter. The XSL stylesheet defines a parameter of the same name --  `<xsl:param name="ParameterName"/>` -- and the resource becomes available anywhere in the stylesheet through an XPath expression --  `<xsl:value-of select="$ParameterName" />`.  <br/> |
|**Location** <br/> |Optional **Text**. Specifies the location of the resource. SharePoint Foundation uses a **Resource** function to define the value of **Location** in the format  `Location = "Resource(ResourceFile, ResourceName)"`, where  _ResourceFile_ specifies the base name of a resource file minus the file extension, and  _ResourceName_ specifies the name of the resource string.  <br/> In addition to specifying a localized resource in a .resx file, the **Location** attribute can be used to specify values indicated in the following table.  <br/> |**Context**|**Format**|
|:-----|:-----|
|Query strings  <br/> | `<ParameterBinding Name="SelectedID" Location="QueryString(SelectedID)"/>`Corresponding code in XSL:  `<xsl:param name="SelectedID"/>` <br/> |
|Connection/Postback  <br/> | `<ParameterBinding Name="dvt_firstrow" Location="Postback;Connection"/>` <br/> |
|Server variables  <br/> | `(Location="Form(variableName)")` <br/> |
|Web Part Properties  <br/> | `(Location="WPProperty(PropertyValue")` <br/> |
|Control IDs  <br/> | `(Location="Control(ControlID)")` <br/> |
   
|
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[ParameterBindings](parameterbindings-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## See also



[XSLT Parameter Bindings](http://msdn.microsoft.com/library/0e63af9c-c94b-4425-8b93-989dad1dd49d%28Office.15%29.aspx)
  
[XSLT Global Parameters](http://msdn.microsoft.com/library/13abde86-c820-42bd-863a-c9c8829255a6%28Office.15%29.aspx)
  
[How to: Implement Resources in Custom List Views](http://msdn.microsoft.com/library/f8a01a0b-0538-4c4a-b2af-30c3f7f1ff4b%28Office.15%29.aspx)
  
[List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)

