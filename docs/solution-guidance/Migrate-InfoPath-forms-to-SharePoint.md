---
title: Migrate InfoPath forms to SharePoint
description: Migrate InfoPath forms in your SharePoint Add-ins to other supported solutions, such as Access applications, sandbox solutions, or the add-in model.
ms.date: 5/1/2018
---

# Migrate InfoPath forms to SharePoint

If you're using InfoPath as the basis for creating forms in your add-ins, now is the time to start thinking about migrating your forms to other solutions. Although InfoPath is currently supported, InfoPath 2013 is the last release of the desktop InfoPath client, and InfoPath Forms Services in SharePoint 2013 is the last release of InfoPath Forms Services. 

The client and the on-premises version of InfoPath Forms Services in SharePoint 2013 will be fully supported until 2023. The forms service will be supported in Office 365 until at least the next major release of Office.

To replace your InfoPath forms, you can choose one of the following alternatives:

- Use Access applications.

- Use Microsoft Flow and Microsoft PowerApps.
    
- Move complex behaviors to the new add-in model and client-side developments.
    
We recommend the first two solutions because information workers that don't know how to write and deploy code-based alternatives can implement them. The following table describes the scenarios for which each alternative is best suited.

**Alternatives to InfoPath in SharePoint 2013**

|**Alternative**|**Scenario**|
|:-----|:-----|
|Access applications|This option supports multiple forms that handle relational data contained in multiple Access tables, Excel tables, and/or SharePoint lists.|
|Microsoft Flow and Microsoft PowerApps|This is the recommended approach for extending lists by SharePoint power users .|
|New add-in model and client-side developments |You can convert complex forms driven by extensive code into provider-hosted add-ins or client-side web parts. This option requires developer resources.|

## See also

- [Patterns and Practices InfoPath transformation guidance](https://github.com/SharePoint/PnP-Transformation/tree/master/InfoPath) 
- [Office 365 Developer Patterns and Practices on GitHub](https://github.com/SharePoint/PnP)
- [Composite business SharePoint Add-ins](composite-business-apps-for-sharepoint.md)
