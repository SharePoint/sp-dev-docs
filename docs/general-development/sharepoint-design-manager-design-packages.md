---
title: SharePoint 2013 Design Manager design packages
ms.prod: SHAREPOINT
ms.assetid: 85ad1993-4d75-4806-9097-b934865a899a
---



# SharePoint 2013 Design Manager design packages
Learn how to build and export the visual design of a SharePoint site collection as a package.
## Overview of Design Packages
<a name="int"> </a>

In SharePoint 2013, Design Manager can help web developers and designers build and export the visual design of a SharePoint site collection as a package. This package can easily be distributed to customers, or other designated groups, for installation on their site collections. This new feature reduces the complexity of transporting designs, and makes it easier for customers to outsource the visual design of their sites. For example, some usage scenarios can include the following:
  
    
    

- **New Design** —A company with limited web design capabilities might contract a vendor agency to refresh their current SharePoint site with a more modern interpretation. The agency can create the site and easily package the contents for importing back into the company SharePoint farm.
    
  
- **Cross-Site Publishing** —An enterprise IT department using cross-site publishing in SharePoint 2013 might have to share a visual design across multiple site collections. They create the site in-house and want a simple way to transport the design across several SharePoint websites. The design package functionality through Device Manager enables them to export and import with reduced administrative support and complexity.
    
  
This article can help you understand design packaging in SharePoint 2013 by providing an overview of package creation, and offers workflow guidance for package exporting and importing. It also discusses required permissions for specific operations, and design package architecture.
  
    
    

## Creating a design package
<a name="package"> </a>

A user creates a design package, called a SharePoint solution package (.wsp file) on their SharePoint site, through Design Manager in **Site Settings**. The step for creating the package follows other Design Manager steps for branding and publishing a SharePoint site, including uploading design files, creating a master page, and editing page layouts. After the site is published, it is a relatively simple process to create the .wsp file for export.
  
    
    
Figure 1 shows the option in Design Manager for naming and creating the design package.
  
    
    

**Figure 1. Exporting a design package**

  
    
    

  
    
    
![Exporting a design package](images/sp15Con_DesignPackageExp_Figure1.png)
  
    
    
Alternatively, you can import a design package from another SharePoint 2013 site collection through Design Manager on the Welcome page, or by choosing **Import design package** in **Site Settings**.
  
    
    

    
> [!NOTE]
> For more information about Design Manager and the publishing process, see  [Overview of Design Manager in SharePoint 2013](overview-of-design-manager-in-sharepoint.md). 
  
    
    

There is a check box for including the search configuration in the design package. You would choose this option if you are designing a site and creating conditional search results, or controlling the search experience. This configuration contains assets like query rules, result sources, result types, and any schema and ranking models. To ensure that the import of the search configuration does not fail, there must not be duplicate names for any elements of the search configuration. For example, if you have a query rule in a site collection named **SampleQueryRule**, and you import it into another site collection with an existing rule named **SampleQueryRule**, importing the search configuration fails. To prevent this, you can rename or delete the query rule on the source or on the target. Result sources, and the schema, also have to be uniquely named. If you want to include a search configuration in your design package, you must activate the following features at the site level under **Manage Site Features** before you export the design package:
  
    
    

- Search Config Data Content Types
    
  
- Search Config Data Site Columns
    
  
- Search Config List Instance Feature
    
  
- Search Config Template Feature
    
  
If you want your design to be published on the target of import, you should publish all design assets or disable major versioning in design-related libraries on the source of export. Design Manager exports only the most recent version of each asset from the source. For example, if you have version 1.1 of a master page on the source it will be copied to the target as a draft. But, version 1.0 is not copied. Also, files that are checked out are not exported.
  
    
    

## Exporting and importing a design package
<a name="work"> </a>

You can approach an end-to-end packaging workflow several ways, with much of the approach depending on your objectives and available design resources. You may decide to outsource to a vendor agency, or do the work in-house if you have internal resourcing. Table 1 provides a sample workflow and exchange between a client and a vendor agency over the design, exporting, and importing of the design package. It also provides the required permissions for design-related operations, and packaging operations.
  
    
    

**Table 1. Sample design package workflow**


|**Step**|**Action**|**Description**|
|:-----|:-----|:-----|
|1  <br/> |Customer contracts vendor agency to create visual design.  <br/> | The vendor designer creates site, based on company requirements. <br/> > [!NOTE]>  The vendor designer must have the **Designers** permission level to use Design Manager and create and export packages. More specifically, the **Design** permission that allows viewing, adding, updating, deleting, approving, and customizing visual designs.          |
|2  <br/> |Vendor designer exports visual design into a design package.  <br/> | The vendor designer exports the SharePoint solution package (.wsp file) after completing the other required branding and publishing steps. <br/>  The design package is delivered to the customer via a secure channel. <br/> |
|3  <br/> |Customer imports visual design into their specified SharePoint 2013 site collection.  <br/> | The customer receives the design package via a secure channel. <br/>  Through the Welcome page in Design Manager or by choosing **Import design package** in **Site Settings**, the customer imports the .wsp file and applies the design package to the specified site collection.  <br/> > [!NOTE]>  The customer must have the **Designers** permission level to use Design Manager and import design packages.          |
   

## Understanding design package contents
<a name="packcont"> </a>

Several files are included in the design package .wsp file when it is created through Design Manager. The process exports files from various lists and libraries to form the overall package. While importing to a site collection, these files are distributed to different locations based on file type. Table 2 details the location and type of files exported during the assembly process.
  
    
    

**Table 2. Summary of design package contents and file exportation locations**


|**Export Location**|**Exported Assets**|
|:-----|:-----|
|Document libraries  <br/> | Master Pages Gallery <br/>  Themes Gallery <br/>  Style Library <br/>  Site Assets Library <br/> |
|Content types, fields  <br/> | Content types that inherit from the Page content type <br/> |
|Lists  <br/> | Design Gallery <br/>  Composed looks <br/>  Device channels <br/> |
   

> [!NOTE]
> In SharePoint 2013, only customized files are included in design packages. The packaging process will not export most of the default non-customized system files. 
  
    
    

In SharePoint 2013 you cannot uninstall an imported design package, and you should never attempt to deactivate a design package through the solution gallery. If you do, page layout content types are removed and users may not be able to create subsites. To recover from this state, you should perform the following steps where site A= the original site collection, site B = the site collection with the deactivated design package (bad state), and site C = a new, blank site collection that you have created:
  
    
    

1. Export a design package from site A
    
  
2. Import the design package to site C
    
  
3. Export a design package from site B
    
  
4. Import the design package to site C
    
  
5. Export the design package from site C
    
  
6. Import the design package to site B
    
  
Any created device channels, and their configurations, are also imported when the design package is unloaded. But, you have to re-associate master pages to specified device channels because these mappings will not be configured.
  
    
    
When importing a design package, an alternate CSS URL is not set, even if one was configured on the source of export. CSS classes should be stored in an external file in the Master Page Gallery and not in the master page file itself.
  
    
    

## Additional resources
<a name="addresources"> </a>


-  [Develop the site design in SharePoint 2013](develop-the-site-design-in-sharepoint.md)
    
  
-  [Overview of Design Manager in SharePoint 2013](overview-of-design-manager-in-sharepoint.md)
    
  
-  [What's new with SharePoint 2013 site development](what-s-new-with-sharepoint-site-development.md)
    
  
