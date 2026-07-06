---
title: Applying PnP Templates to SharePoint Sites
description: This article explains how to manually provision a look book PnP template using PnP PowerShell.
ms.date: 06/17/2024
ms.localizationpriority: high
---

# Applying PnP Templates to SharePoint Sites

In this page, you can find detailed information about how to manually provision a look book template on your tenant.

You can also follow these steps by watching this video on the Microsoft 365 Platform Community (PnP) YouTube Channel:

> [!Video https://www.youtube.com/embed/lK17E412uNg]

## Software prerequisites

In order to provision the look book templates, you need to have the following software tools installed on your machine:

- [PowerShell](/powershell/scripting/install/installing-powershell)
- [PnP PowerShell](https://pnp.github.io/powershell/)

Once the above tools are installed, you can proceed with the following sections.

[!INCLUDE [pnp-provisioning-engine](../../includes/snippets/open-source/pnp-provisioning-engine.md)]

## Available templates

The look book templates are based on the PnP Provisioning engine. As such, every single template is a `.pnp` (pnp stands for Patterns & Practices) file, which is nothing more than an OpenXML file that includes all the needed content to deploy the template.
Here follows a table where you can find the list of all the look book templates, a link do download the corresponding `.pnp` template file, the configuration parameters, and the prerequisites.

Category|Template|Site Type|Parameters|Prerequisites
--------|--------|---------|----------|-------------
|Organization|[Leadership Connection](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/leadershipconnection/leadershipconnection.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[The Perspective](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/theperspective/theperspective.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Crisis Communications](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/crisis-mgmt/crisis-mgmt.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[News site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/contosonews/contosonews.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[The Landing](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/thelanding/thelanding.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Benefits](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/benefits/benefits.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[LGBTQ+ Employee Resource Group](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/pride/pride.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Hispanic Heritage Month Employee Resource Group](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/hispanicheritage/template.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
|Department|[Retail Operations](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/retailoperations/retailoperations.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Fly Safe Conference](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/flysafeconference/flysafeconference.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Global sales hub](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/globalsales/globalsales.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li><li>RetailOperationsSiteTitle</li><li>RetailOperationsSiteUrl</li><li>ConsumerRetailSiteTitle</li><li>ConsumerRetailSiteUrl</li></ul>|SharePoint Online Admin
||[Workshop training site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/droneproducttraining/droneproducttraining.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Global marketing hub](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/globalmarketing/globalmarketing.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li><li>CommunicationSiteTitle</li><li>CommunicationSiteUrl</li></ul>|SharePoint Online Admin
||[Human resources hub](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/contosoworks/contosoworks.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li><li>BenefitsSiteTitle</li><li>BenefitsSiteUrl</li></ul>|SharePoint Online Admin
|Team|[Collaboration team site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/ContosoTeamSite/ContosoTeamSite.pnp)|Modern Team Site|<ul><li>SiteTitle</li><li>SiteAlias</li></ul>|SharePoint Online Admin
||[Team communication site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/communications/communications.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Mark8 Project Team](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/mark8projectteam/mark8projectteam.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Product Support](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/productsupport/productsupport.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
|Community|[Branding Site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/contosobrand/contosobrand.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Charitable site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/give/give.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
|Solutions|[Microsoft 365 learning pathways](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/M365LearningPathways/M365LP.pnp)|Communication Site|<ul><li>SiteUrl</li></ul>|SharePoint Online Admin, App Catalog
||[New employee departmental onboarding site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/NEO-departmental/template.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Workplace Transformation site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/HybridWork/HybridWork.pnp)|Communication Site|<ul><li>SiteUrl</li></ul>|SharePoint Online Admin
||[New employee pre-onboarding site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/NEO-preonboarding/template.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[New employee corporate onboarding site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/NEO-main/template.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|SharePoint Online Admin
||[Microsoft 365 freelance communications site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/FreelanceToolkit/M365FreelanceCommsSite.pnp)|Communication Site|<ul><li>SiteUrl</li></ul>|SharePoint Online Admin
||[SharePoint Success Site](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/tenant/SharePointSuccessSite/SharePointSuccessSite.pnp)|Communication Site|<ul><li>SiteUrl</li></ul>|SharePoint Online Admin, App Catalog
|Schools|[School home page](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/site/eduportal/eduportal.pnp)|Communication Site|<ul><li>SiteTitle</li><li>SiteUrl</li></ul>|Regular user
||[Staff home page](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/site/edustaff/edustaff.pnp)|Team Site|<ul><li>SiteUrl</li></ul>|Regular user
||[Class home page](https://github.com/SharePoint/sp-dev-provisioning-templates/blob/master/site/educlass/educlass.pnp)|Team Site|<ul><li>SiteUrl</li></ul>|Regular user

Here follows a brief guidance about the parameters:

- **SiteTitle**: is the title that is provisioned on the target site. 
- **SiteUrl**: is the server-relative URL of the site provisioned by the template. It can be something like: _/sites/name-of-the-site_.
- **RetailOperationsSiteTitle**: is the title of the Communication Site provisioned on the target tenant for the Global Sales Hub template.
- **RetailOperationsSiteUrl**: is the server-relative URL of the Retail Operations Communication Site provisioned by the template Global Sales Hub. It can be something like: _/sites/name-of-the-site_.
- **ConsumerRetailSiteTitle**: is the title of the Retail Operations Communication Site provisioned on the target tenant for the Global Sales Hub template.
- **ConsumerRetailSiteUrl**: is the server-relative URL of the Consumer Retail Communication Site provisioned by the template Global Sales Hub. It can be something like: _/sites/name-of-the-site_.
- **CommunicationSiteTitle**: is the title of the Consumer Retail Communication Site provisioned on the target tenant for the Global Marketing Hub template.
- **CommunicationSiteUrl**: is the server-relative URL of the Communication Site provisioned by the template Global Marketing Hub. It can be something like: _/sites/name-of-the-site_.
- **BenefitsSiteTitle**: is the title of the Communication Site provisioned by the Human Resources Hub template.
- **BenefitsSiteUrl**: is the server-relative URL of the Communication Site provisioned by the Human Resources Hub template. It can be something like: _/sites/name-of-the-site_.

Here follows a brief guidance about the meaning of the prerequisites:

- SharePoint Online Admin: you need to execute the provisioning using a user who is member of the SharePoint Online Administrators group.
- App Catalog: you need to have a fully functional tenant-wide App Catalog in your target tenant, and you need to execute the provisioning using a user who has admin access to the App Catalog site.
- Regular user: you can execute the provisioning with a regular user of SharePoint Online. 

> Note: If you don't have the App Catalog configured in your tenant, and the template that you are willing to provision requires the App Catalog, you can follow the instructions provided in this [online document](/sharepoint/dev/spfx/set-up-your-developer-tenant#create-app-catalog-site).

## Provisioning a template

In order to execute the actual provisioning, you need to execute a PowerShell cmdlet provided by the PnP PowerShell extensions.

### Provisioning templates that require a SharePoint Online Admin

Download the `.PNP` template file that you want to provision, save it in a local folder, and run the following PowerShell command:

```powershell
Connect-PnPOnline https://<tenant>.sharepoint.com/sites/<URL-of-your-target-site> -Interactive

Invoke-PnPTenantTemplate -Path .\your-template-file.pnp -Parameters @{"SiteTitle"="<Title-of-your-target-site>";"SiteUrl"="/sites/<URL-of-your-target-site>"}
```

Replace \<tenant\> with the actual name of your SharePoint Online tenant in Microsoft 365.
Remember to provide a value for all the  parameters declared in the above table.

> Important: The very first time that you will connect to your target environment using the `Connect-PnPOnline` command let, you will have to grant a set of permissions to the _PnP Management Shell_ application.

### Provisioning templates that require a Regular User

Download the `.PNP` template file that you want to provision, save it in a local folder, and run the following PowerShell command:

```powershell
Connect-PnPOnline https://<tenant>.sharepoint.com/sites/<URL-of-your-target-site> -Interactive

Invoke-PnPSiteTemplate -Path .\your-template-file.pnp -Parameters @{"SiteTitle"="<Title-of-your-target-site>";"SiteUrl"="/sites/<URL-of-your-target-site>"}
```

Replace \<tenant\> with the actual name of your SharePoint Online tenant in Microsoft 365.
Remember to provide a value for all the  parameters declared in the above table.

#### Example script for applying Learning Pathways solution

This is how the PowerShell script would look for applying the [Learning Pathways solution](/office365/customlearning/), which only has the `SiteUrl` parameter and the pnp file for the Learning Pathways is located in the *c:\temp* folder and you want to target to a previously created site with URL of */sites/M365LP*.

```powershell
Connect-PnPOnline https://<tenant>.sharepoint.com/sites/<URL-of-your-target-site>

Invoke-PnPSiteTemplate -Path c:\temp\M365LP.pnp -Parameters @{"SiteUrl"="/sites/M365LP"}
```

## Next Steps

Now that the look book template is provisioned on your tenant, feel free to browse to the site URL that you selected and play with the new site.

If there's any issue, don't hesitate to file an issue in the [PnP Provisioning Service repository on GitHub](https://github.com/SharePoint/sp-provisioning-service/issues).
