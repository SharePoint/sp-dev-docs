---
title: The SharePoint modernization scanner reports
description: Explains the output created by the modernization scanner
ms.date: 02/04/2021
ms.prod: sharepoint
localization_priority: Priority
---

# SharePoint Modernization scanner reports

The output of a SharePoint Modernization Scanner run is a series of reports (CSV files and Excel dashboards). Using these outputs you can better understand what classic usage there is in your tenant, assess whether it's still relevant for you and get informed on potential remediation's needed before you can modernize. You would typically use the Microsoft Excel based dashboards to inspect the data and build up an understanding of the scan results. If you later on want to modernize sites, lists, etc you can use the CSV files as input for (PowerShell based) automation.

## Overview of the scanner output

The output you'll depends on the chosen scan mode. Below table lists the available scan modes:

Mode | Description
-----|------------
`Full` | All components will be included, omitting -m has the same result
`GroupifyOnly` | Only use the Microsoft 365 group connection readiness component, this component is part of each scan
`ListOnly` | Includes a deep list scan + includes the Microsoft 365 group connection readiness component
`PageOnly` | Includes a scan from wiki and web part pages + includes the Microsoft 365 group connection readiness component
`PublishingOnly` | Includes a classic publishing portal scan at site and web level + includes the Microsoft 365 group connection readiness component
`PublishingWithPagesOnly` | Includes a classic publishing portal scan at site,web and page level + includes the Microsoft 365 group connection readiness component
`WorkflowOnly` | Includes the classic workflow scan + includes the Microsoft 365 group connection readiness component
`InfoPathOnly` | Includes the InfoPath scan + includes the Microsoft 365 group connection readiness component
`BlogOnly` | Includes the Blog scan + includes the Microsoft 365 group connection readiness component
`CustomizedFormsOnly` | Includes the Customized Forms scan + includes the Microsoft 365 group connection readiness component

After the run you'll find a new sub folder (e.g. 636530041937506713) which contains the following files. Depending on the optional mode you specified you'll get more or less reports.

Report | Include in following modes | Content
---------|----------|----------
**Microsoft 365 group Connection Readiness.xlsx** | All modes | The report that summarizes the data you need to know to help with assessing the readiness for "Microsoft 365 group connection" also called "Groupify". Checkout [Analyze and use the scanner data](https://docs.microsoft.com/sharepoint/dev/transform/modernize-connect-to-office365-group-scanner) to learn more on how to use the scanner results.
**office 365 List Readiness.xlsx** | Full, ListOnly | An Excel report using PowerQuery and PowerPivot to make it easier for to analyze the lists that will not render in modern.
**Office 365 Page Transformation Readiness.xlsx** | Full, PageOnly| The report that summarizes the data you need to know to help with assessing the readiness for "Page Transformation" (so transforming from classic pages into modern pages)
**Office 365 Publishing Portal Transformation Readiness.xlsx** | Full, PublishingOnly, PublishingWithPagesOnly | The report that summarizes the data you need to understand for transforming your classic publishing portals into modern publishing portals
**Office 365 Classic workflow inventory.xlsx** | Full, WorkflowOnly | Details on available workflows, their Microsoft Flow upgradability score and information on when the workflow was last changed
**Office 365 InfoPath inventory.xlsx** | Full, InfoPathOnly | Shows the detected InfoPath forms and their type of usage complemented with information on when the form was last used
**Office 365 Blog inventory.xlsx** | Full, BlogOnly | This report summarizes the blog sites and blog posts in your tenant complemented with usage information
**ModernizationSiteScanResults.csv** | All modes | The main "Microsoft 365 group connection" report contains one row per site collection explaining which sites are ready to "Microsoft 365 group connection" with which warnings. It will also tell which "Microsoft 365 group connection" blockers it found and provide extensive information on the applied permission model.
**ModernizationWebScanResults.csv** | All modes | Having sub sites is a potential "Microsoft 365 group connection" warning and this report contains "Microsoft 365 group connection" relevant information about each web. This information is also rolled up to the ModernizationSiteScanResults.csv report, so you only need this report if you want to get more details on the found warnings/blockers.
**ModernizationListScanResults.csv** | Full, ListOnly | Contains all lists which are not using the "modern" experience.
**ModernizationUserCustomActionScanResults.csv** | All modes | When a site is "Microsoft 365 group connected" it will get a "modern" home page...and  user custom actions that embed script do not work on modern pages. This report contains all the site/web scoped user custom actions that do not work on modern pages. This information is also rolled up to the ModernizationSiteScanResults.csv report, so you only need this report if you want to get more details on the actual found user custom actions.
**PageScanResults.csv** | Full, PageOnly | Contains a row per page in the site pages library of the scanned sites. This contains a ton of details on the scanned page like type, used layout and detailed web part information.
**UniqueWebParts.csv** | Full, PageOnly | Contains a list of uniquely found web parts during the scan.
**ModernizationPublishingSiteScanResults.csv** | Full, PublishingOnly, PublishingWithPagesOnly | One row per publishing portal (= site collection) containing a summary of the found information.
**ModernizationPublishingWebScanResults.csv** | Full, PublishingOnly, PublishingWithPagesOnly | One row per publishing portal web containing all information scoped at the web level.
**ModernizationPublishingPageScanResults.csv** | Full, PublishingOnly, PublishingWithPagesOnly | One row per scanned publishing page, containing information (like page layout, web parts) per page.
**ModernizationWorkflowScanResults.csv** | Full, WorkflowOnly | One row per found workflow containing detailed information about how that workflow was used.
**ModernizationInfoPathScanResults.csv** | Full, InfoPathOnly | One row per found InfoPath usage, explains the type of InfoPath usage.
**ModernizationBlogWebScanResults.csv** | Full, BlogOnly | One row per found blog site containing last change information and blog site language.
**ModernizationBlogPageScanResults.csv** | Full, BlogOnly | One row per found blog page having title and last change information.
**ModernizationCustomizedFormsScanResults.csv** | Full, CustomizedFormsOnly | One row per found page hosting a customized DataForm web part (= includes customized forms).
**Error.csv** | All modes | If the scan tool encountered errors then these are logged in this file.
**ScannerSummary.csv** | All modes | Logs the number of scanned site collections, webs and list. It will also contain information on scan duration and used scanner version.

## Report details

If you want to drill down in output for a particular scan mode then checkout the report details page of that scan mode.
