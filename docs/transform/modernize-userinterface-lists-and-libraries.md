---
title: Maximize use of the modern list and library user interface
description: Get the maximum number of lists and libraries when using the SharePoint modern user interface.
ms.date: 04/17/2018
ms.prod: sharepoint
---

# Maximize use of the modern list and library user interface

This article discusses how to get the maximum number of lists and libraries when using the modern user interface in SharePoint.

You can't yet transform all lists and libraries to the modern experience because:

- Certain types of lists and libraries are not yet built by the SharePoint team to show up in a modern user interface; for example, a Task list or an Events list. For these you could either wait for the SharePoint team to implement a modern version, or switch over to an equivalent option. Options include using Microsoft Planner instead of a classic Task list, or using the calendar of your Office 365 Group instead of a classic SharePoint Events list calendar. 

- Certain types of lists and libraries can be shown in modern, but are blocked due to an incompatible configuration or customization; you can take action here.

## List templates available in the modern user interface 

Following are the most commonly used list template types that SharePoint can currently render in a modern user interface (as of March 2018):

- List (100)
- Document Library (101)
- Links list (103)
- Announcements list (104)
- Picture library (109)
- Form library (115)
- Site pages library (119)
- Promoted links list (170)
- Assets library (851)

> [!NOTE]
> Microsoft is adding modern user interface support for more and more list template types. If your adoption of the modern list and library user interface is blocked due to a key missing list template type, let us know via [UserVoice](https://sharepoint.uservoice.com/forums/329214-sites-and-collaboration).

## Detect lists and libraries not available in the modern user interface

The recommended approach to detect which lists and libraries are not available in the modern user interface is to run the [SharePoint "Modern" user interface experience scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UIExperience.Scanner). This tool performs a deep analysis of all the lists and libraries in your tenant, and creates reports that give you details about which lists and libraries do not show in modern, and more importantly, why that happens. Based on the scanner output, you can unblock lists and libraries by remediating them, which is covered in the next section.

## Unblock lists and libraries

A list can be blocked due to one or more reasons, which are all spelled out in the scanner output. Following are the typical reasons and their remediation approaches.

### Incompatible customizations

An incompatible customization is the most common reason for lists not rendering in modern, and is typically due to one of the following:

- The use of JSLink
- The use of a user custom action that embeds JavaScript

To fix these blockers, you can either remove the customization (in case it's not business-relevant anymore) or create an alternative solution. For more information, see [Modernize customizations](modernize-customizations.md).

### Existence of certain field types

Certain field types (BCS external data, Geolocation, OutcomeChoice in edit mode, Image, Html, and SummaryLinks) are not yet built to work in a modern user interface. To remediate these, you can apply the following approaches:

- Remove the field from the views. The field is still there, so you get a classic edit experience but at least the views are modern.
- Migrate the field's data into a new field that is compatible with modern.
- Completely drop the field if it's not being used.

### Customized list view pages that contain more than the list XSLTListViewWebPart

Classic list view and edit pages are editable by users, so you could, for example, add additional web parts on a list view page. If you've done that, the list no longer shows in modern. To remediate this, the only approach you can take is to drop the added web parts from the list pages.

## See also

- [Modernize the user interface](modernize-userinterface.md)
- [Modernize your classic SharePoint sites](modernize-classic-site.md)