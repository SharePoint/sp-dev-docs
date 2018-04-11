---
title: "Configuration element (Site)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- customizing site definitions
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: db6728d9-4615-44b0-b651-cdab95706494
description: Specifies the lists and modules used in creating a SharePoint Foundation website that is based on the site definition configuration represented by the Configuration element.
---

# Configuration element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the lists and modules used in creating a SharePoint Foundation website that is based on the [site definition configuration](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3%28Office.15%29.aspx) represented by the **Configuration** element. These elements also represent configurations in [Web Templates](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30%28Office.15%29.aspx). 

For simplicity, the phrase 'site definition configuration' is used throughout this topic although the topic applies to Web template configurations as well. Except where specified otherwise, the following attribute descriptions apply to **Configuration** elements in both site definitions and Web templates. 
  
```XML
<Configuration
    AllowGlobalFeatureAssociations = "TRUE" | "FALSE"
    CustomMasterUrl = "Text"
    Description = "Text"
    DisplayCategory = "Text"
    FilterCategories = "Text"
    Hidden = "TRUE" | "FALSE"
    ID = "Integer"
    ImageUrl = "Text"
    MasterUrl = "Text"
    Name = "Text"
    ProvisionAssembly = "Text"
    ProvisionClass = "Text"
    ProvisionData = "Text"
    RootWebOnly = "TRUE" | "FALSE"
    SubWebOnly = "TRUE" | "FALSE"
    SupportsMultilingualUI = "TRUE" | "FALSE"
    Title = "Text"
    Type = "Text"
    VisibilityFeatureDependency = "Text">
</Configuration>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AllowGlobalFeatureAssociations** <br/> |Optional **Boolean**. Specifies whether global Feature associations are allowed for sites that are created with the site definition configuration.  <br/> |
|**CustomMasterUrl** <br/> |Optional **Text**. Specifies the URL for an alternate .master page that can be used on pages in websites that are created through the site definition configuration without customizing those pages.<br/><br/>**NOTE**: Simply changing the value of the MasterPageFile attribute on pages that need an alternate master page would customize those pages and cause them to be stored in the content database rather than the file system of the front-end Web servers.<br/><br/>For more information about how the value of the **CustomMasterUrl** is used, see [Master Pages on Application Pages](http://msdn.microsoft.com/library/9b04723e-e0f4-4701-a9c2-44e6e6d7c21b%28Office.15%29.aspx).  <br/> |
|**Description** <br/> |Optional **Text**. Contains the locale-specific description of the site definition configuration that appears in the UI of SharePoint Foundation.  <br/> |
|**DisplayCategory** <br/> |Optional **Text**. Specifies the category in which the site definition configuration will appear in the UI of SharePoint Foundation, for example, **Collaboration**, **Meetings**, or some custom name.  <br/> |
|**FilterCategories** <br/> |Optional **Text**. This attribute is not used by SharePoint Foundation. It is available for enhanced portal or content management solutions built on SharePoint Foundation, such as Microsoft SharePoint Server, to use as a means of categorizing site configurations in ways that do not map precisely onto the categorizations that appear in the UI. (See also the **DisplayCategory** attribute.)  <br/> |
|**Hidden** <br/> |Optional **Boolean**. Specifies whether the site definition configuration appears as an option in the UI of SharePoint Foundation.  <br/> |
|**ID** <br/> |Required **Integer**. Specifies an ID for the site definition configuration that is unique within the site definition. A definition, such as STS or MPS, is defined by a [Template](template-element-site.md) element in a `WebTemp*.xml` file and by a corresponding  `Onet.xml` file for the definition. See **Parent Elements** and **Remarks** below.  <br/> |
|**ImageUrl** <br/> |Required **Text**. Contains the URL for the preview image displayed in the UI of SharePoint Foundation.  <br/> |
|**MasterUrl** <br/> |Optional **Text**. Specifies the default master page to use for websites created through the site definition configuration.  <br/> |
|**Name** <br/> |Optional **Text**. Contains the name of the site definition configuration.  <br/> |
|**ProvisionAssembly** <br/> |Optional **Text**. Specifies the name of the assembly that contains the provision class, if there is one. (See **ProvisionClass** below.) For example:  <br/> `ProvisionAssembly="MyCompany.SharePoint.ProvisionHelper, Version=1.0.0.0, Culture=neutral, PublicKeyToken=82f0cdf222f0530d"` <br/> |
|**ProvisionClass** <br/> |Optional **Text**. Specifies the fully qualified name of a class that provides provisioning functionality that will execute when the runtime finishes creating a site from the configuration. It is not required that there be such a class, but if you need one for a custom configuration, it must derive from [SPWebProvisioningProvider](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWebProvisioningProvider.aspx) . For example:  <br/>  `ProvisionClass="MyCompany.SharePoint. ProvisionHelper.MySiteProvisioningProvider"` <br/> |
|**ProvisionData** <br/> |Optional **Text**. Specifies data that will be used by the [Provision(SPWebProvisioningProperties)](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWebProvisioningProvider.Provision.aspx) method of the **ProvisionClass** (see above). This can be a path to file that contains structured data. For example:  <br/>  `ProvisionData="SiteTemplates\\MySiteManifest.xml"` <br/> |
|**RootWebOnly** <br/> |Optional **Boolean**. **TRUE** to specify that the site created from the configuration exists only as the root website in a site collection. This attribute is not enforced in [Web templates](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30%28Office.15%29.aspx), which are stored in Solution (`.wsp` files).  <br/> |
|**SubWebOnly** <br/> |Optional **Boolean**. **TRUE** to specify that the site created from the configuration exists only as a subsite within a site collection. This attribute is not enforced in [Web templates](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30%28Office.15%29.aspx), which are stored in Solution (`.wsp` files).  <br/> |
|**SupportsMultilingualUI** <br/> |Optional **Boolean**. **TRUE** (the default) to specify that administrators can enable alternate languages for sites created from the configuration. **FALSE** prevents administrators from enabling this functionality.  <br/> |
|**Title** <br/> |Optional **Text**. Contains the title of the site definition configuration that is displayed in the UI of SharePoint Foundation.  <br/> |
|**Type** <br/> |Optional **Text**. Identifies the site definition, such as STS or MPS.  <br/> |
|**VisibilityFeatureDependency** <br/> |Optional **Text**. Used in a `WebTemp*.xml` file to hide the site definition configuration based on the activation state of the specified Feature. When a configuration contains Features that depend upon another Feature, setting this attribute prevents the configuration from appearing as an option in the UI of SharePoint Foundation if the specified Feature is not installed or activated. This attribute is not supported for Features with Web application scope.  <br/> |
   
### Child elements

- [ExecuteUrl](executeurl-element-site.md)
- [Lists](lists-element-site.md)
- [Modules](modules-element-site.md)
- [SiteFeatures](sitefeatures-element-site.md)
- [WebFeatures](webfeatures-element-site.md)
   
### Parent elements

- [Configurations](configurations-element-site.md)
- [Template](template-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   
### Remarks

A **Configuration** element is used in `WebTemp*.xml` files (see [WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8%28Office.15%29.aspx)) to identify an available site definition configuration within a site definition. 

It is used in [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) files to define a configuration of lists, modules, and features that are used to create a site from the site definition configuration. 

In a  `WebTemp*.xml` file, this element is contained within a [Template](template-element-site.md) element that specifies the site definition. In  `Onet.xml`, this element is contained within a [Configurations](configurations-element-site.md) element that specifies the configurations whose lists are defined within the  `Onet.xml`. 
  
There is one **Template** element in a  `WebTemp*.xml` file, and one  `Onet.xml` file, for each site definition. 
  
The **ID** attribute associates the **Configuration** element for a given site definition in a  `WebTemp*.xml` file with the corresponding **Configuration** element for that same site definition in the  `Onet.xml`. 
  
A [Web template](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30%28Office.15%29.aspx), as distinct from a [site definition configuration](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3%28Office.15%29.aspx), is defined with a [WebTemplate](webtemplate-element-web-template.md) element in an `elements.xml` file inside a .wsp file that is stored in the SharePoint database. Also in the .wsp file is an `Onet.xml` file with a single **Configuration** element that specifies the details of the Web template. 
  
## Example

The following example from [WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8%28Office.15%29.aspx) specifies the three configurations for the **STS** website definition. 
  
```XML
<Template Name="STS" ID="1">
    <Configuration ID="0" Title="Team Site" Hidden="FALSE" ImageUrl="/_layouts/images/stts.png" Description="A site for teams to quickly organize, author, and share information. It provides a document library, and lists for managing announcements, calendar items, tasks, and discussions." DisplayCategory="Collaboration" >    </Configuration>
    <Configuration ID="1" Title="Blank Site" Hidden="FALSE" ImageUrl="/_layouts/images/stbs.png" Description="A blank site for you to customize based on your requirements." DisplayCategory="Collaboration" AllowGlobalFeatureAssociations="False" >    </Configuration>
    <Configuration ID="2" Title="Document Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stdw.png" Description="A site for colleagues to work together on a document. It provides a document library for storing the primary document and supporting files, a tasks list for assigning to-do items, and a links list for resources related to the document." DisplayCategory="Collaboration" >    </Configuration>
 </Template>
```

## See also

- [Custom Site Templates](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30%28Office.15%29.aspx)
- [Site Definitions and Configurations](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3%28Office.15%29.aspx)

