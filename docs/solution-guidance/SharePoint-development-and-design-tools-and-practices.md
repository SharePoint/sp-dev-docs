---
title: SharePoint development and design tools and practices
description: Use SharePoint design and development tools to apply branding to your SharePoint sites.
ms.date: 4/24/2018
---

# SharePoint development and design tools and practices

This article provides information about the development and design options that are available in SharePoint. You can also find information about how to use the remote provisioning pattern to apply branding assets to a SharePoint site.

## Terms and concepts

**Table 1. Key SharePoint development and design terms and concepts**

|Term or concept|Definition|More information|
|:-----|:-----|:-----|
|Design Manager|A feature activated in SharePoint publishing sites or Team sites with publishing enabled that is used to import and manage site branding assets and export them to a design package.|Use Design Manager to import branding assets created in other tools, such as Adobe PhotoShop or Adobe DreamWeaver, into SharePoint.<br/>SharePoint Designer is not available for use with OneDrive for Business or SharePoint Team sites where publishing is not enabled.|
|Design package|Designed for use with SharePoint 2013 Publishing sites, contains branding assets that are stored in Design Manager.| [SharePoint Composites Handbook](../general-development/sharepoint-composites-handbook.md)|
|Remote provisioning|A model that involves provisioning sites by using templates and code that runs outside SharePoint in a provider-hosted add-in.|- [Site provisioning techniques and remote provisioning in SharePoint 2013](https://blogs.msdn.microsoft.com/vesku/2013/08/23/site-provisioning-techniques-and-remote-provisioning-in-sharepoint-2013/)<br/>- [Self-Service Site Provisioning using Apps for SharePoint 2013](https://blogs.msdn.microsoft.com/richard_dizeregas_blog/2013/04/04/self-service-site-provisioning-using-apps-for-sharepoint-2013/)|
|Root web|The first web inside a site collection. The root web is also sometimes referred to as the Web Application Root.||
|Sandboxed solutions|.wsp files that contain assemblies, other non-compiled components, and an XML manifest file. A sandbox solution uses partial-trust code.| [Sandboxed solutions](https://msdn.microsoft.com/en-us/library/ff798382.aspx)|
|SharePoint Designer 2013|An HTML designer and design asset management tool for managing branding elements in SharePoint. In SharePoint 2013, SharePoint Designer mainly supports custom workflows.|- [What's new for developers in SharePoint](../general-development/what-s-new-for-developers-in-sharepoint.md)<br/>- [What's new with SharePoint site development](../general-development/what-s-new-with-sharepoint-site-development.md)|
|.wsp file|A SharePoint solution file. A .wsp is a .cab file that categorizes site assets and organizes them with a manifest.xml file.| [Solutions overview](https://msdn.microsoft.com/en-us/library/office/aa543214%28v=office.14%29.aspx)|

## Development options

When you use SharePoint as a development platform, you'll need to create an environment to develop, test, build, and deploy your content. For information about the options for development, see [SharePoint workflow object model](../general-development/sharepoint-workflow-object-model.md) and [Application Lifecycle Management (ALM) APIs](../apis/alm-api-for-spfx-add-ins.md).  

**Table 2. Options for SharePoint development, testing, and acceptance**

|Option|Considerations|
|:-----|:-----|
|Team foundation server|- Located on Visual Studio Online for easy access.<br/>- Includes a centralized source code and life cycle management system.|
|Cloud test and acceptance environments|- Use a separate tenant for acceptance testing.<br/>- Separate test environment for on-premises testing.|
|On-premises test and acceptance environments|- Use for on-premises SharePoint deployments.<br/>- Hosted by customer on-premises or in Microsoft Azure.|
 
In most cases, you'll need at least the following tenants, although this can vary depending on your requirements:

-  **Developer tenant**. As a best practice, provision and use your own developer site. This way, you avoid mixing your data with the production environment. To sign up for and provision a developer site, see [Set up a development environment for SharePoint Add-ins on Office 365](../set-up-a-development-environment-for-sharepoint-add-ins-on-office-365.md).
    
-  **Integration/testing tenant**. Use this site to make sure that new apps and functionality work across more than one site collection and against the services and data in the production environment. Configure the environment to include capabilities that are in preview. (To do this, in your tenant admin console, choose  **Service Settings**, and then under the  **Updates** setting, choose **First Release**.) You can use Visual Studio online to run automated testing and any other continuous integration testing.
    
-  **Production tenant**. Release tested, accepted, and approved apps to this tenant. You can create a developer site on this tenant to develop and test apps that are small in scope or have isolated impact. In general, avoid mixing your development and production environments.
    
## Design tools

Use standard web design and development tools, such as HTML, images, CSS files, and JavaScript files to create SharePoint site branding assets. For example, you can use Adobe DreamWeaver and Adobe PhotoShop to design the HTML, CSS, JavaScript, and image files you'll use to brand your SharePoint sites. Alternatively, you can use SharePoint Designer 2013 to create, manage, and customize branding assets, or create custom solutions in Visual Studio 2013.

### SharePoint design packages and .wsp files

Design packages are .wsp files created by Design Manager that follow predictable rules for packaging design assets. They are, essentially, sandboxed solutions. If you're using another tool to package branding assets in a .wsp file, your branding assets will be in a less fixed and predictable state.

The design package includes all files that have been customized. For example, if you create a page layout that uses a custom content type, the design package includes the page layout, the custom content type it uses, and all custom site columns. The design package also includes several files related to any composed looks that have been applied to your SharePoint site, including files uploaded to the following locations:

- Site assets library
    
- Style library
    
- Master Page gallery
    
If you applied composed looks to a site before you applied custom branding, the design package will include files with .themedcss and .themedpng file extensions. To apply the branding assets in a design package to a SharePoint site, export the design package and use the remote provisioning pattern to apply the contents of the design package.

SharePoint 2013 includes the APIs that you can use to work with design packages. If you're using either SSOM, CSOM, or JSOM, you can use the  [DesignPackage](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.designpackage.aspx) or [DesignPackageInfo](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.designpackageinfo.aspx) classes.

#### Using the design package CSOM to apply the contents of design packages to a SharePoint site

The following example shows how to use the Design Package APIs in the remote provisioning pattern to apply the contents of design packages to a SharePoint site.

This code was designed for use with Publishing sites. Although it is possible to use the Design Packages API to apply branding to Team sites that have the Publishing feature enabled, this can introduce long-term support issues.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```cs
using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.SharePoint.Client.Publishing;
namespace ProviderSharePointAppWeb
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_PreInit(object sender, EventArgs e)
        {
            Uri redirectUrl;
            switch (SharePointContextProvider.CheckRedirectionStatus(Context, out redirectUrl))
            {
                case RedirectionStatus.Ok:
                    return;
                case RedirectionStatus.ShouldRedirect:
                    Response.Redirect(redirectUrl.AbsoluteUri, endResponse: true);
                    break;
                case RedirectionStatus.CanNotRedirect:
                    Response.Write("An error occurred while processing your request.");
                    Response.End();
                    break;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            // Use TokenHelper to get the client context and Title property.
            // To access other properties, the add-in might need to request permissions
            // on the host web.
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);
            
            // Publishing feature GUID to use the infrastructure for publishing. 
            Guid PublishingFeature = Guid.Parse("f6924d36-2fa8-4f0b-b16d-06b7250180fa");

            // The site-relative URL of the design package to install.
            // This sandbox design package should be uploaded to a document library.
            // For practical purposes, this can be a configuration setting in web.config.
            string fileRelativePath = @"/sites/devsite/brand/Dev.wsp";

            //string fileUrl = @"https://SPXXXXX.com/sites/devsite/brand/Dev.wsp";
            
        
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                // Load the site context explicitly or while installing the API, the path for
// the package will not be resolved.
                // If the package cannot be found, an exception is thrown. 
                var site = clientContext.Site;
                clientContext.Load(site);
                clientContext.ExecuteQuery();
              
                // Validate whether the Publishing feature is active. 
                if (IsSiteFeatureActivated(clientContext,PublishingFeature))
                {
                    DesignPackageInfo info = new DesignPackageInfo()
                    {
                        PackageGuid = Guid.Empty,
                        MajorVersion = 1,
                        MinorVersion = 1,
                        PackageName = "Dev"
                    };
                    Console.WriteLine("Installing design package ");
                    
                    DesignPackage.Install(clientContext, clientContext.Site, info, fileRelativePath);
                    clientContext.ExecuteQuery();

                    Console.WriteLine("Applying design package");
                    DesignPackage.Apply(clientContext, clientContext.Site, info);
                    clientContext.ExecuteQuery();
                }
            }
        }
        public  bool IsSiteFeatureActivated( ClientContext context, Guid guid)
        {
            var features = context.Site.Features;
            context.Load(features);
            context.ExecuteQuery();

            foreach (var f in features)
            {
                if (f.DefinitionId.Equals(guid))
                    return true;
            }
            return false;
        }
 
    }
}
```

<br/>

#### Using FileCreationInformation to upload branding assets and a master page to a Team site

You can use SharePoint 2013 CSOM functionality to install and uninstall design packages and export design packages to SharePoint Online sites. For example, use the [SP.Publishing.DesignPackage.install Method (sp.publishing)](https://msdn.microsoft.com/library/26500127-210f-6c52-c0de-cf2894939a91.aspx) or [DesignPackage.Install method](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.designpackage.install.aspx) to install the design package on the site, as shown in the following example. 


```cs
public static void Install(
    	ClientRuntimeContext context,
	    Site site,
	    DesignPackageInfo info,
    	string path
)
```

<br/>

The  [DesignPackageInfo](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.designpackageinfo.aspx) class specifies metadata that describe the contents of the design package to be installed. Use the [Uninstall](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.designpackage.uninstall.aspx) method to uninstall the design package from the site, as shown in the following example.

```cs
public static void UnInstall(
	    ClientRuntimeContext context,
	    Site site,
    	DesignPackageInfo info
)
```

<br/>

If you need to brand a Team site with the Publishing feature enabled, or a Publishing site on SharePoint Online, you can use the  [ExportEnterprise](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.designpackage.exportenterprise.aspx) or the [ExportSmallBusiness](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.publishing.designpackage.exportsmallbusiness.aspx) method to export design packages for site templates to the Solution Gallery. Use the **ExportSmallBusiness** method with the small business site template, and use the **ExportEnterprise** method for all other site templates, as shown in the following example. In the example, note thatpackageName is a string that represents the name of the design package.

```cs
public static ClientResult<DesignPackageInfo> ExportEnterprise(
	    ClientRuntimeContext context,
	    Site site,
	    bool includeSearchConfiguration
)
```

<br/>

When you use this method, you can include the search configuration in the design package, as shown in the next example. Note that all design package methods operate at the level of the site collection.

```cs
public static ClientResult<DesignPackageInfo> ExportSmallBusiness(
	    ClientRuntimeContext context,
	    Site site,
	    string packageName,
	    bool includeSearchConfiguration
)
```

## Design tool options for SharePoint Online

The tools you can use to brand a SharePoint Online site depend on your SharePoint Online edition and the type of site you want to build. The Small Business edition, for example, includes one Team site and one public site. It does not include a Publishing site. You can use the Site Builder add-in in SharePoint Online to customize public site branding.

The Enterprise edition includes a Team site collection at the root web application for the domain that does not include Publishing. It does not include a public site. Use Design Manager to manage SharePoint site branding elements for the Publishing site in the SharePoint Online Enterprise edition.

## See also

- [Branding and site provisioning solutions for SharePoint](branding-and-site-provisioning-solutions-for-sharepoint.md)
