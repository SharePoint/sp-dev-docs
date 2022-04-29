---
title: The SharePoint modernization scanner reports for the customized forms scanner mode
description: Explains the customized forms output created by the modernization scanner
ms.date: 02/04/2021
ms.service: sharepoint
ms.localizationpriority: high
---

# SharePoint Modernization scanner reports: Customized Forms reports

## Understanding the ModernizationCustomizedFormsScanResults.csv file

This report contains the following columns:

Column | Description
---------|----------
**Site Collection Url** | Url of the scanned site collection.
**Form Type** | Type of form: value can be `DefaultView`, `NormalView`, `DialogView`, `View`, `DisplayForm`, `DisplayFormDialog`, `EditForm`, `EditFormDialog`, `NewForm`, `NewFormDialog` or `SolutionForm`.
**Form Url** | Server relative url to the customized form/page.
**Page Id** | Id of the customized form/page.
**WebPart Id** | Id of the DataForm web part on the customized page/form.

### Key takeaways from this report ###

Load the ModernizationCustomizedFormsScanResults.csv into Microsoft Excel and use below filters to analyze the received data

Filter | Takeaway
---------|----------
**No filter** | Lists all the customized forms found in your tenant.
**Form Type = EditForm** | A good filter to identify the actively used customized edit forms.
