---
title: "Web Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 85e854c0-c567-48a9-9031-f709a4e7a785
description: "Last modified: March 09, 2015"
---

# Web Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a SharePoint Foundation website ([SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx)) object. A website is one of the top-level SharePoint Foundation objects. 

## Definition

```XML
DECLARATION
<xs:element name="Web" type="SPWeb" />

USAGE
<SPObject>
    <Web>
                <Properties />
                <EventReceivers />
        <xs:attribute name="Id" />
        <xs:attribute name="ParentId" />
        <xs:attribute name="Name" />
        <xs:attribute name="Title" />
        <xs:attribute name="Locale" />
        <xs:attribute name="Language" />
        <xs:attribute name="IsRootWeb" />
        <xs:attribute name="ServerRelativeUrl" />
        <xs:attribute name="CurrencyLocaleId" />
        <xs:attribute name="RegionalSettingsLocaleId" />
        <xs:attribute name="RequestAccessEmail" />
        <xs:attribute name="TimeZoneId" />
        <xs:attribute name="Time24" />
        <xs:attribute name="CalendarType" />
        <xs:attribute name="AdjustHijriDays" />
        <xs:attribute name="Collation" />
        <xs:attribute name="AlternateCalendarType" />
        <xs:attribute name="ShowWeeks" />
        <xs:attribute name="FirstWeekOfYear" />
        <xs:attribute name="WorkDays" />
        <xs:attribute name="WorkDayStartHour" />
        <xs:attribute name="WorkDayEndHour" />
        <xs:attribute name="FirstDayOfWeek" />
        <xs:attribute name="Description" />
        <xs:attribute name="AlternateHeader" />
        <xs:attribute name="Author" />
        <xs:attribute name="Configuration" />
        <xs:attribute name="HasUniqueRoleAssignments" />
        <xs:attribute name="HasUniqueRoleDefinitions" />
        <xs:attribute name="Created" />
        <xs:attribute name="ThemeComposite" />
        <xs:attribute name="WebTemplate" />
        <xs:attribute name="AnonymousState" />
        <xs:attribute name="RootFolderId" />
        <xs:attribute name="SystemCatalogsIncluded" />
        <xs:attribute name="WelcomePageUrl" />
        <xs:attribute name="AlternateCssUrl" />
        <xs:attribute name="CustomizedCssFiles" />
        <xs:attribute name="CustomJSUrl" />
        <xs:attribute name="IncludeSupportingFolders" />
        <xs:attribute name="SecurityProvider" />
        <xs:attribute name="MasterUrl" />
        <xs:attribute name="CustomMasterUrl" />
        <xs:attribute name="SiteLogoUrl" />
        <xs:attribute name="SiteLogoDescription" />
        <xs:attribute name="UseSharedNavigation" />
<!-- Flags -->
        <xs:attribute name="PresenceEnabled" />
        <xs:attribute name="SyndicationEnabled" />
        <xs:attribute name="QuickLaunchEnabled" />
        <xs:attribute name="TreeViewEnabled" />
        <xs:attribute name="ParserEnabled" />
        <xs:attribute name="Provisioned" />
    </Web>
</SPObject>

```

## Type

[SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**AdjustHijriDays** <br/> |xs:int  <br/> |Optional. Specifies the number of days to extend or reduce the current month in Hijri calendars.  <br/> |
|**AlternateCalendarType** <br/> |xs:short  <br/> |Optional. Specifies an integer representing an alternative calendar type. For a table of calendar type values, see [CalendarType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRegionalSettings.CalendarType.aspx).  <br/> |
|**AlternateCssUrl** <br/> |xs:string  <br/> |Optional. Specifies the URL for an alternative cascading style sheet (CSS) to use for the website.  <br/> |
|**AlternateHeader** <br/> |xs:string  <br/> |Optional. Specifies the URL for an alternative .aspx page to use for rendering the top navigation area on SharePoint pages.  <br/> |
|**AnonymousState** <br/> |[AnonymousState Simple Type (DeploymentManifest)](anonymousstate-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies the level of access available to anonymous users on the website.  <br/> |
|**Author** <br/> |xs:string  <br/> |Optional. Represents the user who created the website.  <br/> |
|**CalendarType** <br/> |xs:int  <br/> |Optional. Specifies an integer representing the default calendar type.  <br/> |
|**Collation** <br/> |xs:int  <br/> |Optional. Integer value specifying the collation used on the site. For more information, see [Collation](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRegionalSettings.Collation.aspx).  <br/> |
|**Configuration** <br/> |xs:int  <br/> |Optional. Specifies the ID of the configuration in the site definition that was used to create the site; or, specifies the ID of the configuration in the site definition from which the site template used to create the site was derived.  <br/> |
|**Created** <br/> |xs:dateTime  <br/> |Optional. Specifies the date and time that the site was created.  <br/> |
|**CurrencyLocaleId** <br/> |xs:int  <br/> |Optional. Specifies the locale ID (LCID) used to represent currency values in the website.  <br/> |
|**CustomizedCssFiles** <br/> |xs:string  <br/> |Optional.Specifies custom cascading style sheet (.css) files.  <br/> |
|**CustomJSUrl** <br/> |xs:string  <br/> |Optional. Specifies the URL to custom JScript files.  <br/> |
|**CustomMasterUrl** <br/> |xs:string  <br/> |Optional. Specifies the URL for the custom master page file to apply to the website.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Provides the description for the site.  <br/> |
|**FirstDayOfWeek** <br/> |xs:long  <br/> |Optional. Integer that specifies the first day of the week used in the calendars on the server.  <br/> |
|**FirstWeekOfYear** <br/> |xs:short  <br/> |Optional. Integer that specifies the first week of the year used in the calendars on the server.  <br/> |
|**HasUniqueRoleAssignments** <br/> |xs:boolean  <br/> |Optional. Specifies whether the role assignments are uniquely defined for the website, or inherited from a parent website. The value is **true** if the website has unique role assignments.  <br/> |
|**HasUniqueRoleDefinitions** <br/> |xs:boolean  <br/> |Optional. Specifies whether the role definitions are uniquely defined for this website, or inherited from a parent website. The value is **true** if the website has unique role definitions.  <br/> |
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Unique identifier for the site.  <br/> |
|**IncludeSupportingFolders** <br/> |xs:boolean  <br/> |Optional. Specifies whether supporting folders are included in enumerations of files or folders. The value is **true** if supporting files are included.  <br/> |
|**IsRootWeb** <br/> |xs:boolean  <br/> |Required. Specifies whether the site is the top-level website of the site collection. The value is **true** if the site is the top-level site.  <br/> |
|**Language** <br/> |xs:long  <br/> |Required. Specifies the LCID for the language used on the site. For a table of LCID values, see [Language](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.Language.aspx).  <br/> |
|**Locale** <br/> |xs:string  <br/> |Required. Specifies the locale for the website.  <br/> |
|**MasterUrl** <br/> |xs:string  <br/> |Optional. Specifies the URL of the master page used for the website.  <br/> |
|**Name** <br/> |xs:string  <br/> |Required. Specifies the name of the website.  <br/> |
|**ParentId** <br/> |xs:string  <br/> |Required. Specifies the ID of the parent website for the site.  <br/> |
|**ParserEnabled** <br/> |xs:boolean  <br/> |Optional. Flag specifying whether parsing is enabled for the website. The value is **true** if parsing is enabled.  <br/> |
|**PresenceEnabled** <br/> |xs:boolean  <br/> |Optional. Flag specifying whether inline presence information is enabled on the website. The value is **true** if inline presence is enabled.  <br/> |
|**Provisioned** <br/> |xs:boolean  <br/> |Optional. Flag specifying whether the website has been provisioned. The value is **true** if the website has been provisioned.  <br/> |
|**QuickLaunchEnabled** <br/> |xs:boolean  <br/> |Optional. Flag specifying whether the Quick Launch area is enabled on the website. The value is **true** if Quick Launch is enabled.  <br/> |
|**RegionalSettingsLocaleId** <br/> |xs:long  <br/> |Optional. Provides an integer value specifying regional locale.  <br/> |
|**RequestAccessEmail** <br/> |xs:string  <br/> |Optional. Specifies the email address to which requests for access to the website are sent.  <br/> |
|**RootFolderId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the root folder for the website.  <br/> |
|**SecurityProvider** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional.  <br/> |
|**ServerRelativeUrl** <br/> |xs:string  <br/> |Required. Specifies the server-relative URL for the website.  <br/> |
|**ShowWeeks** <br/> |xs:boolean  <br/> |Optional. Specifies whether to show weeks on the calendar on the website. The value is **true** if the weeks are shown.  <br/> |
|**SiteLogoDescription** <br/> |xs:string  <br/> |Optional. Provides a description of the website logo.  <br/> |
|**SiteLogoUrl** <br/> |xs:string  <br/> |Optional. Specifies the server-relative URL of the website logo.  <br/> |
|**SyndicationEnabled** <br/> |xs:boolean  <br/> |Optional. Flag specifying whether syndication is enabled in the website. The value is **true** if syndication is enabled.  <br/> |
|**SystemCatalogsIncluded** <br/> |xs:boolean  <br/> |Optional. Specifies whether system catalog files are included in the export package. The value is **true** if the system catalogs are included.  <br/> |
|**ThemeComposite** <br/> |xs:string  <br/> |Optional. Provides the name of the theme and the URL to the CSS that is applied to the website.  <br/> |
|**Time24** <br/> |xs:boolean  <br/> |Optional. Specifies whether to use a 24-hour time format to represent the hours of the day.  <br/> |
|**TimeZoneId** <br/> |xs:int  <br/> |Optional. Specifies the identifier of the time zone that is used on the server. For more information, see [SPTimeZone](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPTimeZone.aspx).  <br/> |
|**Title** <br/> |xs:string  <br/> |Required. Specifies the title for the website.  <br/> |
|**TreeViewEnabled** <br/> |xs:boolean  <br/> |Optional. Flag specifying whether the SharePoint TreeView feature is enabled in the left navigational area of the website pages. The value is **true** if TreeView is enabled.  <br/> |
|**UseSharedNavigation** <br/> |xs:boolean  <br/> |Optional.  <br/> |
|**WebTemplate** <br/> |xs:string  <br/> |Optional. Specifies the name of the site definition that was used to create the site, or the name of the site definition from which the site template that was used to create the site was derived.  <br/> |
|**WelcomePageUrl** <br/> |xs:string  <br/> |Optional. URL of the website welcome page.  <br/> |
|**WorkDayEndHour** <br/> |xs:short  <br/> |Optional. Specifies the default hour at which the work day ends on the calendar in use on the server.  <br/> |
|**WorkDays** <br/> |xs:short  <br/> |Optional. Specifies the default work days on the calendar in use on the server.  <br/> |
|**WorkDayStartHour** <br/> |xs:short  <br/> |Optional. Specifies the default hour at which the work day starts on the calendar in use on the server.  <br/> |
   
### Child elements

- [Properties Element (DeploymentManifest - SPWeb)](properties-element-deploymentmanifestspweb.md)
- [EventReceivers Element (DeploymentManifest - SPWeb)](eventreceivers-element-deploymentmanifestspweb.md) 
   
### Parent elements

- [SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx)
- [SPRegionalSettings](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPRegionalSettings.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

