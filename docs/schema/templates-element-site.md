---
title: "Templates Element (Site)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 208c0e62-e9e2-49ec-ad7b-f7aa1770a604
description: "Last modified: March 09, 2015"
---

# Templates Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Top-level element in a [WebTemp\*.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8%28Office.15%29.aspx) file that specifies the collection of site definitions available for instantiating sites within the deployment. 
  
```
<Templates>
    <Template
      ID = "Text"
     Name = "Text">
    <Configuration/>
    ...
    </Template>
  ...
</Templates>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[Template](template-element-site.md)|
   
### Parent elements

||
|:-----|
|None |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example shows the templates defined in the default [WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8%28Office.15%29.aspx) file installed in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1033 folder of SharePoint Foundation. 
  
```XML
<?xml version="1.0" encoding="utf-8"?>
<!-- _lcid="1033" _version="14.0.4762" _dal="1" -->
<!-- _LocalBinding -->
<Templates xmlns:ows="Microsoft SharePoint">
 <Template Name="GLOBAL" SetupPath="global" ID="0">
    <Configuration ID="0" Title="Global template" Hidden="TRUE" ImageUrl="" Description="This template is used for initializing a new site." >   </Configuration>
 </Template>
 <Template Name="STS" ID="1">
    <Configuration ID="0" Title="Team Site" Hidden="FALSE" ImageUrl="/_layouts/images/stts.png" Description="A site for teams to quickly organize, author, and share information. It provides a document library, and lists for managing announcements, calendar items, tasks, and discussions." DisplayCategory="Collaboration" >    </Configuration>
    <Configuration ID="1" Title="Blank Site" Hidden="FALSE" ImageUrl="/_layouts/images/stbs.png" Description="A blank site for you to customize based on your requirements." DisplayCategory="Collaboration" AllowGlobalFeatureAssociations="False" >    </Configuration>
    <Configuration ID="2" Title="Document Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stdw.png" Description="A site for colleagues to work together on a document. It provides a document library for storing the primary document and supporting files, a tasks list for assigning to-do items, and a links list for resources related to the document." DisplayCategory="Collaboration" >    </Configuration>
 </Template>
 <Template Name="MPS" ID="2">
    <Configuration ID="0" Title="Basic Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stmw.png" Description="A site to plan, organize, and capture the results of a meeting. It provides lists for managing the agenda, meeting attendees, and documents." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
    <Configuration ID="1" Title="Blank Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stbm.png" Description="A blank meeting site for you to customize based on your requirements." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
    <Configuration ID="2" Title="Decision Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stdm.png" Description="A site for meetings that track status or make decisions. It provides lists for creating tasks, storing documents, and recording decisions." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
    <Configuration ID="3" Title="Social Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stsm.png" Description="A site to plan social occasions. It provides lists for tracking attendees, providing directions, and storing pictures of the event." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
    <Configuration ID="4" Title="Multipage Meeting Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stmm.png" Description="A site to plan, organize, and capture the results of a meeting. It provides lists for managing the agenda and meeting attendees in addition to two blank pages for you to customize based on your requirements." DisplayCategory="Meetings" SupportsMultilingualUI="FALSE" >    </Configuration>
 </Template>
 <Template Name="CENTRALADMIN" ID="3">
    <Configuration ID="0" Title="Central Admin Site" Hidden="TRUE" ImageUrl="" Description="A site for central administration. It provides Web pages and links for application and operations management." >   </Configuration>
 </Template>
 <Template Name="WIKI" ID="4">
    <Configuration ID="0" Title="Wiki Site" Hidden="TRUE" ImageUrl="/_layouts/images/wikiprev.png" Description="A site for a community to brainstorm and share ideas. It provides Web pages that can be quickly edited to record information and then linked together through keywords" DisplayCategory="Collaboration" >    </Configuration>
 </Template>
 <Template Name="BLOG" ID="9">
    <Configuration ID="0" Title="Blog" Hidden="FALSE" ImageUrl="/_layouts/images/stbg.png" Description="A site for a person or team to post ideas, observations, and expertise that site visitors can comment on." DisplayCategory="Collaboration" SupportsMultilingualUI="FALSE" >    </Configuration>
 </Template>
 <Template Name="SGS" SetupPath="SiteTemplates\sgs" ID="15">
    <Configuration ID="0" Title="Group Work Site" Hidden="FALSE" ImageUrl="/_layouts/images/stgb.png" Description="This template provides a groupware solution that enables teams to create, organize, and share information quickly and easily. It includes Group Calendar, Circulation, Phone-Call Memo, the Document Library and the other basic lists." DisplayCategory="Collaboration" >    </Configuration>
 </Template>
 <Template Name="TENANTADMIN" SetupPath="SiteTemplates\tenantadmin" ID="16">
    <Configuration ID="0" Title="Tenant Admin Site" Hidden="TRUE" ImageUrl="" Description="A site for tenant administration. It provides Web pages and links for self-serve administration." >   </Configuration>
 </Template>
</Templates>
```


