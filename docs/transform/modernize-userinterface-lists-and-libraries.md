# Maximize your use of the modern list and library user interface

Getting the maximum amount of lists and libraries present themselves using the modern user interface is the topic of this article. You might wonder "why not all lists and libraries?"...there's certain types of lists and libraries which are not (yet) built by the SharePoint team to show up in a modern user interface. Samples are a Task list, Events list,...For these you'll have to wait for the SharePoint team to implement a modern version or switch over to equivalent options like using Microsoft Planner instead of a classic task list or using the calendar of your Office 365 group instead of a classic SharePoint events list calendar. That being said there's also a category of lists and libraries that can be shown in modern but are blocked due to an incompatible configuration or customization...and you can take action here.

## Detecting lists and libraries that will not use the modern user interface

The recommended approach to find out which lists and libraries are not showing in modern is running the [SharePoint "Modern" user interface experience scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UIExperience.Scanner). This tool will perform a deep analysis of all the lists and libraries in your tenant and create reports giving you details on which lists and libraries do not show in modern and more important why that happens. Based on the scanner output you can unblock lists and libraries by remediating them, which is the topic of the next chapter.

## Unblocking lists and libraries

A list can be blocked due to one or more reasons, which are all spelled out in the scanner output. Below you'll find the typical reasons and their remediation approaches.

## Incompatible customizations

This is the most common reason for lists not to render in modern. Incompatible customizations are typically one of the following:

- The use of JSLink
- The use of user custom action that embeds JavaScript

To fix these blockers you can either remove the customization (in case it's not business relevant anymore) or create an alternative solution. Checkout the [Modernize your customizations](modernize-customizations.md) article to get a detailed view on this topic.

## Fields of type BCS external data, Geolocation, OutcomeChoice, Image, Html, or SummaryLinks

Certain field types (BCS external data, Geolocation, OutcomeChoice in edit mode, Image, Html and SummaryLinks) are not (yet) built to work in a modern user interface. To remediate these you can apply below approaches:

- Remove the field from the views: the field is still there, so you get a classic edit experience but at least the views are modern
- Migrate the fields data into a new field which is compatible with modern
- Completely drop the field if it's not being used

## Having customized list view pages containing more than just the list XSLTListViewWebPart

Classic list view and edit pages are editable by users, so you could for example add additional web parts on a list view page. If you've done that then the list will not show anymore in modern. To remediate this the only approach you can follow is to drop the added web parts from the list pages.