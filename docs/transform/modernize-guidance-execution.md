---
title: SharePoint modernization guidance - Execution step
description: Modernization offerings that IT Teams and partners can use with their customers - Execution step
ms.date: 12/06/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Execution

Next is using the scan results from step 1 to build your modernization plan: you'll learn how to use the scan output to identify the sites to modernize and how to structure them in waves. Next you'll review and tailor the modernization scrips, prepare and validate the input for these scripts and finally run the modernization scripts.

## Identify sites for Modernization

The scan results will help you identify site collections which are good candidates for Modernization. The **Microsoft 365 group connect** reports will contain information about all the scanned site collections, so a filtering is needed to identify the sites that are Modernization candidates. Once there’s a list of sites for Modernization the next step is splitting them up in waves. The recommended approach is to start with a pilot wave that runs Modernization on a relatively small amount of sites. Goal is to gather customer feedback and finetune the modernization script if needed. Depending on the amount of sites and the input from the customer the remaining sites are handled in a series of additional waves. See https://docs.microsoft.com/sharepoint/dev/transform/modernize-scanner-reports-groupconnect to learn more about the Microsoft 365 group connect reports.

Filtering the Microsoft 365 group connect (= “groupify”) report to identify sites for Modernization:

- **Task:** copy the Microsoft 365 group connect report files to the computer used for analysis:
  - Microsoft 365 group Connection Readiness.xlsx
  - ModernizationSiteScanResults.csv
  - ModernizationWebScanResults.csv
  - ModernizationUserCustomActionScanResults.csv
- **Task:** Right click the Dashboard sheet and unhide the ReadyForGroupify sheet.
- **Task:** Applying “ReadyForGroupify = TRUE” and “WebTemplate = STS#0” does give you a good starting point as these are team sites without a Microsoft 365 group connect blocker.
- **Task:** Applying “WebTemplate = GROUP#0” and “HasTeamsTeam = FALSE” does give you the modern team sites that do not yet have a Teams team.

### What about warnings in the Microsoft 365 group Connect report?

#### The SiteHasSubSites warnings?

If a site collection has sub sites, then this warning will be shown.

- **Task:** If the sub sites map to individual teams in the organization it makes sense to move those sub sites into their own (modern, group connected) site collections, in all other cases the recommendation is to group connect the site collections and run modernization for the sub sites.

#### The ModernUI warnings?

These warnings are triggered if there are settings on the site that prevent optimal use of the modern SharePoint UI. Of the 6 possible warnings 4 can be fixed by the modernization script: AlternateCSS and MasterPage impact the branding of classic pages and can be reset to their default values, ModernListsBlocked due blocking at site, web or list level will be undone and ModernPagesBlocked due to blocking at web level will be undone.

- **Task:** Review the sites with publishingFeature enabled: if there are also custom publishing pages used then the site should not be group connected, if not assess if the publishing features can be disabled.
- **Task:** If there are user custom actions then review these, quite often these are not relevant anymore. If still relevant consider building an SPFX based equivalent and deploy that as part of the modernization script.

#### The Permission warnings?

Sites with a security setting that might be impacted by the security changes created by the Microsoft 365 group connect are listed here. The modernization script will not address any of these warnings.

- **Task:** Sites with the ADGroupWillNotBeExpanded warning do have AD groups in their default SharePoint groups and since the Microsoft 365 group owners and members can’t contain other groups these are not copied over. Quite often the groups are used to give a large people read-only access to the SharePoint site and that’s fine. If it’s important that the people in the AD group also have access to the other Microsoft 365 group connected services, then these people have to be added individually to the Microsoft 365 group owners and members.
- **Task:** SharingDisabled implies that the SharePoint site is not shared with external users while the Microsoft 365 group can be. The SharePoint settings are not overridden by the Microsoft 365 group settings, so this should be fine. See https://docs.microsoft.com/sharepoint/dev/transform/modernize-connect-to-office365-group-externalsharing to learn more.
- **Task:** Review the sites that have SubSitesWithBrokenPermissions: since group owners are also site collection administrators, they also will be able to see all SharePoint objects (sites, libraries, items) with specific permissions. If this is not desired, then it’s recommended to move the impacted subsites to their own modern group connected site collection.

#### Frequently Asked Questions

##### Can I have a Microsoft 365 group for a sub site?

No, this is not possible. There can only be one Microsoft 365 group per site collection.

##### Can sub sites still use Microsoft 365 group connected services?

Yes, depending on the Microsoft 365 group connected service, there options to use the service at sub site level. See https://docs.microsoft.com/sharepoint/dev/transform/modernize-connect-to-office365-group-subsites to learn more.

##### Can I automatically convert the sub sites in individual site collections?

No, there is not native SharePoint feature to do this. You can however use migration tools to copy over the sub site contents into a newly created modern site collection. You can use page transformation to modernize the wiki and web part pages in that sub site.

## Group the selected site collections in transformation waves

The actual transformation work should be done in waves. A waved approach allows you to start small followed by gathering feedback and if needed adjusting the approach for the next wave. After each transformation wave this feedback and adjustment step should be taken.

- **Task:** Split the list of site collections you’ve gathered in waves:
  - One or more pilot waves: these are small waves, typically with sites from IT savvy users or from the folks in the organization that live to embrace change.
  - The following “production” waves can be organized in various ways: by department, by country, by complexity, …
  - The time it will take of modernize a site collection in seconds is approximately 120 + (15 seconds * number of classic pages).

### Frequently Asked Questions

#### How big should I make the waves?

There is not formal number and wave sizes can be different based upon the chosen wave organization. The recommendation is to start with relatively small waves.

## Get the latest scripts and tailor them to your needs

Navigate to https://aka.ms/sppnp-modernization-sitecollectionscripts to get the latest scripts.

> [!IMPORTANT] 
> These scripts require the December 2019 (3.16.1912.*) release of PnP PowerShell

- **Task:** Copy the ModernizeSiteCollections.ps1, ValidateSiteCollectionsInput.ps1 and sitecollections.csv file to your machine.
- **Task:** Review the ModernizeSite function in the ModernizeSiteCollections.ps1 script: Most steps of the script are controlled via the input you provide but you can optionally remove some steps (e.g. resetting master pages and alternate css) if that’s better for your customer. You can also add additional steps (e.g. deploying and configuring SPFX based customizations).
- **Task:** Test the ModernizeSiteCollections.ps1 script by running it and providing a single site collection to modernize.

### Frequently Asked Questions

#### I’ve found a bug in the scripts or I have a cool addition I want to share. Where do I go?

Create an issue in https://github.com/SharePoint/sp-dev-modernization/issues for bugs/questions. For changes you can also submit a PR to this GitHub repository.

## Create the CSV file to drive the modernization

The modernization scripts take a CSV file as input. This CSV drives the script’s actions and this for a set of site collections.

- **Task:** Prepare CSV files for your transformation needs. You can have multiple CSV files per transformation wave. The CSV needs to contain these columns:
  - SiteUrl: the url of the site collection
  - O365GroupAlias: the alias for the Microsoft 365 group
  - AddTeamsTeam: true to create a Teams team (if not yet available) for the Microsoft 365 group linked to this site collection
  - ModernizePages: modernizes the classic pages in the site to become modern pages. The classic pages are not deleted but renamed and are still available in the SitePages library
  - ModernizeBranding: cleans the old branding settings (master pages, alternate css)
  - TenantTheme: if set this tenant theme will be configured for the site collection
  - Classification: if set this value will be set as site classification (see https://docs.microsoft.com/office365/enterprise/powershell/manage-office-365-groups-with-powershell)

## Run a validation on the CSV files

Before running the Modernization it’s important to validate the input (alias must be valid and unique, theme needs to exist, classification must be available).

- **Task:** Run the ValidateSiteCollectionsInput.ps1 and provide your CSV file as input. Check the console and log outputs to understand what errors were found.

### Frequently Asked Questions

#### Where can I learn more about the validation details?

- Microsoft 365 group naming policy: https://docs.microsoft.com/office365/admin/create-groups/groups-naming-policy?redirectSourcePath=%252fen-us%252farticle%252foffice-365-groups-naming-policy-6ceca4d3-cad1-4532-9f0f-d469dfbbb552&view=o365-worldwide
- Who can create Groups: https://docs.microsoft.com/office365/admin/create-groups/manage-creation-of-groups?redirectSourcePath=%252fen-us%252farticle%252fmanage-who-can-create-office-365-groups-4c46c8cb-17d0-44b5-9776-005fced8e618&view=o365-worldwide
- Group classifications: https://docs.microsoft.com/office365/enterprise/powershell/manage-office-365-groups-with-powershell
- Tenant themes: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnptenanttheme

## Modernize a wave of site collections

Yes, you’re ready to run Teamwork Transformation for your site collections!

- **Task:** Run the ModernizeSiteCollections.ps1 script and provide it your prepared site collection CSV file and the other information in needs.
- **Task:** Review the created logs (there are the modernization log files and the page transformation log file) for issues.

### Frequently Asked Questions

#### Can I run the script without being prompted for credentials?

Yes, you can define the credentials (via credential manager) in your script.
