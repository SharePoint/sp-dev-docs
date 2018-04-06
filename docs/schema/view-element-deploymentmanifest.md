---
title: "View Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c7ab084e-e946-45a0-9dc8-ac68eba4e557
description: "Last modified: March 09, 2015"
---

# View Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx) ) object. 
  
```
DECLARATION
<xs:element name="View" type="SPView" minOccurs="0" maxOccurs="unbounded" />
USAGE
<Views>
        <View>
        <xs:choice minOccurs="0" maxOccurs="25">
                <xs:element name="Script" />
                <xs:element name="PagedRowset" />
                <xs:element name="PagedClientCallbackRowset" />
                <xs:element name="PagedRecurrenceRowset" />
                <xs:element name="ViewFields" />
                <xs:element name="ViewData" />
                <xs:element name="Query" />
                <xs:element name="RowLimit" />
                <xs:element name="RowLimitExceeded" />
                <xs:element name="Toolbar" />
                <xs:element name="Formats" />
                <xs:element name="Aggregations" />
                <xs:element name="ViewStyle" />
                <xs:element name="ViewBody" />
                <xs:element name="ViewEmpty" />
                <xs:element name="ViewFooter" />
                <xs:element name="ViewHeader" />
                <xs:element name="ViewBidiHeader" />
                <xs:element name="GroupByFooter" />
                <xs:element name="GroupByHeader" />
                <xs:element name="CalendarViewStyles" />
                <xs:element name="ListFormBody" />
        </xs:choice>
        <xs:attribute name="Name" />
        <xs:attribute name="DefaultView" />
        <xs:attribute name="Type" />
        <xs:attribute name="Hidden" />
        <xs:attribute name="Threaded" />
        <xs:attribute name="FPModified" />
        <xs:attribute name="ReadOnly" />
        <xs:attribute name="Scope" />
        <xs:attribute name="RecurrenceRowset" />
        <xs:attribute name="ModerationType" />
        <xs:attribute name="Personal" />
        <xs:attribute name="OrderedView" />
        <xs:attribute name="DisplayName" />
        <xs:attribute name="ContentTypeId" />
        <xs:attribute name="Url" />
        <xs:attribute name="BaseViewID" />
        <xs:attribute name="WebPartZoneID" />
        </View>
</Views>

```

## Type

[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx) object. 
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**BaseViewID** <br/> |xs:string  <br/> |Optional. Represents the ID of the base view for the view.  <br/> |
|**ContentTypeId** <br/> |xs:string  <br/> |Optional. Represents the ID of a content type that is associated with the view.  <br/> |
|**DefaultView** <br/> |xs:boolean  <br/> |Optional. Specifies whether the view is the default view.  <br/> |
|**DisplayName** <br/> |xs:string  <br/> |Optional. Represents the display name of the view.  <br/> |
|**FPModified** <br/> |xs:boolean  <br/> |Optional. Specifies whether the view was modified in an HTML editor.  <br/> |
|**Hidden** <br/> |xs:boolean  <br/> |Optional. Specifies whether the view is hidden.  <br/> |
|**ModerationType** <br/> |xs:string  <br/> |Optional.Represents the Content Approval type for the view.  <br/> |
|**Name** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the view.  <br/> |
|**OrderedView** <br/> |xs:boolean  <br/> |Optional. Specifies whether the user can reorder items through the user interface.  <br/> |
|**Personal** <br/> |xs:boolean  <br/> |Optional. Specifies whether the view is personalized.  <br/> |
|**ReadOnly** <br/> |xs:boolean  <br/> |Optional. Specifies whether the view is read-only.  <br/> |
|**RecurrenceRowset** <br/> |xs:boolean  <br/> |Optional. Specifies whether the view supports recurrence rowsets.  <br/> |
|**Scope** <br/> |[SPViewScope Simple Type (DeploymentManifest)](spviewscope-simple-type-deploymentmanifest.md) <br/> |Optional. Sets the recursive scope for the view of a document library.  <br/> |
|**Threaded** <br/> |xs:boolean  <br/> |Optional. Specifies whether the view is threaded.  <br/> |
|**Type** <br/> |xs:string  <br/> |Optional. Represetns the type of the view.  <br/> |
|**Url** <br/> |xs:string  <br/> |Optional. Represents the site-relative URL of the page that contains the view.  <br/> |
|**WebPartZoneID** <br/> |xs:string  <br/> |Optional. Identifier of the Web Part zone in which the view is sited.  <br/> |
   
## Child Elements

||
|:-----|
|[Script Element (DeploymentManifest - SPView)](script-element-deploymentmanifestspview.md) <br/> |
|[PagedRowset Element (DeploymentManifest - SPView)](pagedrowset-element-deploymentmanifestspview.md) <br/> |
|[PagedClientCallbackRowset Element (DeploymentManifest - SPView)](pagedclientcallbackrowset-element-deploymentmanifestspview.md) <br/> |
|[PagedRecurrenceRowset Element (DeploymentManifest - SPView)](pagedrecurrencerowset-element-deploymentmanifestspview.md) <br/> |
|[ViewFields Element (DeploymentManifest - SPView)](viewfields-element-deploymentmanifestspview.md) <br/> |
|[ViewData Element (DeploymentManifest - SPView)](viewdata-element-deploymentmanifestspview.md) <br/> |
|[Query Element (DeploymentManifest - SPView)](query-element-deploymentmanifestspview.md) <br/> |
|[RowLimit Element (DeploymentManifest - SPView)](rowlimit-element-deploymentmanifestspview.md) <br/> |
|[RowLimitExceeded Element (DeploymentManifest - SPView)](rowlimitexceeded-element-deploymentmanifestspview.md) <br/> |
|[Toolbar Element (DeploymentManifest - SPView)](toolbar-element-deploymentmanifestspview.md) <br/> |
|[Formats Element (DeploymentManifest - SPView)](formats-element-deploymentmanifestspview.md) <br/> |
|[Aggregations Element (Deployment Manifest - SPView)](aggregations-element-deployment-manifestspview.md) <br/> |
|[ViewStyle Element (DeploymentManifest - SPView)](viewstyle-element-deploymentmanifestspview.md) <br/> |
|[View Body Element (DeploymentManifest - SPView)](view-body-element-deploymentmanifestspview.md) <br/> |
|[ViewEmpty Element (DeploymentManifest - SPView)](viewempty-element-deploymentmanifestspview.md) <br/> |
|[ViewFooter Element (DeploymentManifest - SPView)](viewfooter-element-deploymentmanifestspview.md) <br/> |
|[ViewHeader Element (DeploymentManifest - SPView)](viewheader-element-deploymentmanifestspview.md) <br/> |
|[ViewBidiHeader Element (DeploymentManifest - SPView)](viewbidiheader-element-deploymentmanifestspview.md) <br/> |
|[GroupByFooter Element (DeploymentManifest - SPView)](groupbyfooter-element-deploymentmanifestspview.md) <br/> |
|[GroupByHeader (DeploymentManifest - SPView)](groupbyheader-deploymentmanifestspview.md) <br/> |
|[CalendarViewStyles Element (DeploymentManifest - SPView)](calendarviewstyles-element-deploymentmanifestspview.md) <br/> |
|[ListFormBody Element (DeploymentManifest - SPView)](listformbody-element-deploymentmanifestspview.md) <br/> |
   
## Parent Elements

||
|:-----|
|[Views Element (DeploymentManifest)](views-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

