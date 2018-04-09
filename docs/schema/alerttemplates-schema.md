---
title: "AlertTemplates schema"
ms.author: ricardol
author: ricardol
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: e326075f-59b5-4616-a355-fe892a150d92
description: "Last modified: July 15, 2011"
---

# AlertTemplates schema

 **Last modified:** July 15, 2011 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Microsoft SharePoint Foundation includes a set of predefined alert templates. These alert templates are stored in the  `Alerttemplates.xml` file, which is located in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\XML folder.  `Alerttemplates.xml` defines the format, contents, filters, event types and properties used to create alert messages from each list type. A developer can customize alerts by modifying a copy of the  `Alerttemplates.xml` file and then loading the customized alert templates by using the command  `stsadm -o updatealerttemplates`.
  
Alert templates also define what filters and event types appear on the new alert and edit alert pages (the  `subnew.aspx` and  `subedit.aspx` pages) 
  
> [!NOTE]
> Do not modify the  `Alerttemplates.xml` file. Doing so may result in loss of functionality when upgrading or installing service packs. 
  
For a listing of the predefined alert templates, see [Predefined Alert Templates](http://msdn.microsoft.com/library/6a5296b2-c158-40e4-897f-bbf008b6bbaf%28Office.15%29.aspx).
  
[AlertTemplates](alerttemplates-element-alerttemplates.md)
  
[AlertTemplate](alerttemplate-element-alerttemplates.md)
  
[EventTypes](eventtypes-element-alerttemplates.md)
  
[Format](format-element-alerttemplates.md)
  
[Digest](digest-element-alerttemplates.md)
  
[Header](header-element-alerttemplates.md)
  
[HeaderFields](headerfields-element-alerttemplates.md)
  
[Subject](subject-element-alerttemplates.md)
  
[HeaderFieldsHeader](headerfieldsheader-element-alerttempaltes.md)
  
[HeaderFieldsFooter](headerfieldsfooter-element-alerttempaltes.md)
  
[RowHeader](rowheader-element-alerttemplates.md)
  
[RowFields](rowfields-element-alerttemplates.md)
  
[RowFooter](rowfooter-element-alerttemplates.md)
  
[Footer](footer-element-alerttemplates.md)
  
[Immedate](immediate-element-alerttemplates.md)
  
[Fields](fields-element-alerttemplates.md)
  
[Properties](properties-element-alerttemplates.md)
  
[DigestNotificationExcludedFields](digestnotificationexcludedfields-element-alerttemplates.md)
  
[ImmediateNotificationExcludedFields](immediatenotificationexcludedfields-element-alerttemplates.md)
  
[NotificationHandlerAssembly](notificationhandlerassembly-element-alert-templates.md)
  
[NotificationHandlerClassName](notificationhandlerclassname-element-alerttemplates.md)
  
[UpdateHandlerAssembly](updatehandlerassembly-element-alerttemplates.md)
  
[UpdateHandlerClassName](updatehandlerclassname-element-alerttemplates.md)
  
[Filters](filters-element-alerttemplates.md)
  
[FilterDefinition](filterdefinition-element-alerttemplates.md)
  
[FriendlyName](friendlyname-element-alerttemplates.md)
  
[ShortName](shortname-element-alerttemplates.md)
  
[Query](query-element-alerttemplates.md)
  
## Example

The following example shows the basic elements in an alert templates schema.
  
```XML
<AlertTemplates>
  <AlertTemplate Type="List" Default="True" Name ="Default Template">
  </AlertTemplate>
  <AlertTemplate Type="List" Name="SPAlertTemplateType.GenericList">
    <EventTypes IsVisible="True"/>
    <Format>
    </Format>
    <Properties>
    </Properties>
    <Filters>
      <FilterDefinition>
      </FilterDefinition>
    </Filters>
  </AlertTemplate>
</AlertTemplates>

```

## See also

#### Reference

 **IAlertNotifyHandler**
#### Concepts

[Query Schema](../../collaborative-application-markup-language-caml-schemas/query-schema/query-schema.md)
#### Other resources

[Alerts in Windows SharePoint Services](http://msdn.microsoft.com/library/cb9586d9-84e1-43c9-93c9-8a7496f2f41d%28Office.15%29.aspx)

