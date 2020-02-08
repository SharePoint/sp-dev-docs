---
title: SharePoint modernization guidance - Strategy
description: Modernization offerings that IT Teams and partners can use with their customers - strategy step
ms.date: 12/06/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Strategy

This step provides a detailed explanation of how a classic SharePoint site will be transformed to a modern SharePoint site. Next to that it will touch upon key topics like Office 365 Group naming strategy, setting up tenant themes and configuring [Office 365 Learning Pathways](https://aka.ms/learningpathways).

## What's the impact of Modernization on my sites

### Starting point

![starting point](media/modernize/teamwork_impact_1.png)

The classic SharePoint sites you’re transforming today contain:

- **Lists and Libraries:** Each site has multiple lists and libraries. Typically these are presented using a modern UI, although there can be certain lists and libraries that are still showing using the classic UI.
- **Classic pages:** Classic sites mainly have wiki pages but also web part pages are commonly used.
- **Custom branding:** Sites can have a custom theme, even custom master pages and alternate CSS settings.
- **Custom code:** Custom code can be present. Redesigning custom code is out of scope for this program, but https://docs.microsoft.com/sharepoint/dev/transform/modernize-customizations can get you started.
- **Access:** Typically users get access to the site by being member of out of the box groups like Owners, Members,…

### Lists and libraries impact

![Lists and libraries](media/modernize/teamwork_impact_2.png)

Lists and libraries are for the most part already showing using the modern UI and when a list can’t be shown using modern SharePoint will automatically switch back the classic list UI. During modernization you’ll remove possible modernization blockers:

- **Script:** A site can be ‘forced’ to be a classic site at either site collection or web scope, the modernization script will fix this by turning off the site/web scoped blocks.
- **Script:** A list/library can be ‘forced’ to be shown in classic UI, the modernization script will fix this by setting the library back to the default ‘automatic’ state.
- **Optional:** there can be more fine-grained reasons: see https://docs.microsoft.com/sharepoint/dev/transform/modernize-userinterface-lists-and-libraries for more details if required.

### Pages impact

![Pages](media/modernize/teamwork_impact_3.png)

The wiki and web part pages in a SharePoint site will not automatically display as modern pages. In contrast with lists and libraries SharePoint can’t simply show a classic page as modern because the page models are too different. This will result in a continues switching between classic and modern UI when users navigate in the site.

- **Script:** The modernization script will use the open source page transformation framework to create modern versions of the existing classic pages. During this process, the newly created modern pages will take the name of the classic pages while the classic pages are renamed to previous_. No classic pages will be deleted, and you can make the classic page the default again via renaming it. Learn more about page transformation via https://aka.ms/sppnp-pagetransformation.

### Branding impact

![Branding](media/modernize/teamwork_impact_4.png)

The classic SharePoint site can use a custom theme to show the company brand and it might also be using a custom master page or alternate CSS to further customize the branding of the site. Classic themes are hard to manage and using a modern tenant-controlled theme is much better. Modern UI does not use custom master page definitions or alternate CSS anymore, modern pages are responsive by design and work great on any device.

- **Script:** The modernization script will allow you to set a pre-defined modern tenant theme + it will switch back to the default master page and alternate CSS settings. You can learn more via https://docs.microsoft.com/sharepoint/dev/transform/modernize-branding.

### Office 365 Group connect impact

![Office 365 group connect](media/modernize/teamwork_impact_5.png)

A site collection needs to be connected with an Office 365 Group before this site collection can use or be used by other group connected services like Microsoft Teams, Yammer, Planner, … A common question is about sub sites: there’s only one Office 365 Group per site collection, see https://docs.microsoft.com/sharepoint/dev/transform/modernize-connect-to-office365-group-subsites for the sub site impact.

- **Script:** The script will perform the Office 365 Group connection. This will trigger the creation of a new Office 365 group which will be connected to SharePoint site. Existing Office 365 Groups cannot be connected to a SharePoint site because each Office 365 Group already has a SharePoint site connected.
- **Script:** The group connection process will create a new standard modern home page. Optionally the script can be configured to keep using the modernized classic home page.

### Office 365 Group connect security impact

![Office 365 group connect security impact](media/modernize/teamwork_impact_6.png)

After Office 365 Group connection the default setup will be that Office 365 Group owners will be part of the site’s Owners SharePoint group and the site collection administrators group. Group owners as such will be able to see all site collection content. The Office 365 Group members will be part of the site’s Members SharePoint group. By default the Office 365 Group owners will contain the account running the Office 365 group connect. See https://docs.microsoft.com/sharepoint/dev/transform/modernize-connect-to-office365-group-permissions to learn more.

- **Script:** The script will, besides running the Office 365 Group connect, also copy over the user accounts from the current SharePoint site administrators and owners to the Office 365 Group owners and the current SharePoint site members to the Office 365 Group members.

### Teams team provisioning impact

![starting point](media/modernize/teamwork_impact_7.png)

A key reason to group connected a site is using that existing site linked to Microsoft Teams. A Microsoft Teams team is a collaboration hub that unites team related work. After you’ve connected a Microsoft Teams team (“teamify”) you have a Teams team that has a “General” channel which uses the SharePoint site’s default document library to store documents.

- **Script:** You can manually do the “teamify” step from the SharePoint UI, but this can also be handled by the modernization script.
- **Optional:** Optionally you can apply a PnP Tenant template that allows you to further pre-populate the Teams team by adding additional channels, by adding messages in the chat, by adding SharePoint modern pages as tabs or by adding additional SharePoint lists and libraries as tab.

## Office 365 Group naming strategy

The Office 365 Group names you’ll be using during the Office 365 Group Connect step will have to be unique across your Azure AD environment. Therefore it’s important that you think about a group naming convention.

- **Task:** Define a group naming convention that you can apply to the sites that will be modernized.
- **Task:** Consider configuring Office 365 Group naming policies in Azure AD to help enforce group naming. See https://docs.microsoft.com/azure/active-directory/users-groups-roles/groups-naming-policy and https://docs.microsoft.com/office365/admin/create-groups/groups-naming-policy?redirectSourcePath=%252fen-us%252farticle%252foffice-365-groups-naming-policy-6ceca4d3-cad1-4532-9f0f-d469dfbbb552&view=o365-worldwide to learn more.

### Frequently Asked Questions

#### How can verify that the groups I propose are valid?

Check the execution step of this guide, group name (=alias) verification is part of the modernization scripts.

## Office 365 Tenant themes

During the Modernization you’ll be (optionally) setting the site’s theme to a tenant theme. For this to work you’ll need to first ensure the needed tenant themes are available.

- **Task:** Create the needed tenant themes. Use the online theme generator (https://aka.ms/themedesigner) to create the themes, use the **Export theme** option and copy the PowerShell formatting.
- **Task:** Add the new theme to the tenant via:
  - Assigning the copied PowerShell to a variable: $ContosoTheme = @{“themePrimary”=…
  - Adding the theme: Add-PnPTenantTheme -Palette $ContosoTheme -Identity “Contoso Corporate theme" -IsInverted:$false 
  - See https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnptenanttheme?view=sharepoint-ps for more details

### Frequently Asked Questions

#### How can I get a list of available tenant themes using PnP PowerShell?

You can use the Get-PnPTenantTheme cmdlet to get a list of available tenant themes.

## Training your end users for Microsoft Teams

Microsoft 365 learning pathways (https://aka.ms/learningpathways) is a customizable, on-demand training solution designed to increase usage and adoption for all of Microsoft 365 in your organization.

- **Task:** Deploy this solution inside your organization and configure it to your needs. See https://techcommunity.microsoft.com/t5/Driving-Adoption-Blog/Microsoft-announces-general-availability-for-Microsoft-365/ba-p/978440 for more details.
