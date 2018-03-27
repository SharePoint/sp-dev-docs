---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6e8dc354-7a26-412c-816f-b6dc4d2fe55c
---

# Custom Action Definition Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Custom actions are defined in XML documents and deployed as part of a Feature.

An XML document that defines custom actions must validate with the schema defined in the file wss.xsd. This file is located on the following path: `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\XML`.

- [Elements](elements-element-custom-action.md)

- [CustomActionGroup](customactiongroup-element-custom-action.md)

- [CustomAction](customaction-element.md)

- [HideCustomAction](hidecustomaction-element.md)

The [CustomActionGroup](customactiongroup-element-custom-action.md) element contains the core definition for a grouping of custom actions.

The [UrlAction](urlaction-element.md) element must be used to specify the URL for a custom action. If no action is specified (an error condition), the link is displayed but it is not linked to anything.

Use the [HideCustomAction](hidecustomaction-element.md) element to hide an existing action that is implemented by default within the infrastructure of Microsoft SharePoint Foundation Features, or within another custom action. For a list of the default custom action IDs, see [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md).

The following example shows an XML file whose contents replace default actions in a SharePoint Foundation page with new actions. For a programming task that shows the steps for defining and registering custom actions, see [How to: Modify the User Interface Using Custom Actions](https://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054(Office.15).aspx).

```XML 
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
       <CustomActionGroup 
          Id="PortalAnalytics"
          Location="Microsoft.SharePoint.Administration.ApplicationManagement"
          Title="Usage Reporting"
          Sequence="50" />
       <CustomAction 
          Id="ManageAnalytics"
          GroupId="PortalAnalytics"
       Location="Microsoft.SharePoint.Administration.ApplicationManagement"
          Sequence="10" 
          Title="Configure usage reporting" >
          <UrlAction Url="_layouts/SpUsageConfig.aspx"/>
       </CustomAction>
       <HideCustomAction
          Id="HideWssSiteCollectionUsage"
          HideActionId="SiteCollectionUsage"
          GroupId="SiteCollectionAdmin"
          Location="Microsoft.SharePoint.SiteSettings" />
       <HideCustomAction
          Id="HideWssWebUsage"
          HideActionId="WebUsage"
          GroupId="SiteAdministration"
          Location="Microsoft.SharePoint.SiteSettings" />
       <CustomAction
          Id="PortalSiteUsage"
          GroupId="SiteCollectionAdmin"
          Location="Microsoft.SharePoint.SiteSettings"
          Rights="ViewUsageData"
          Sequence="30"
          Title="Site usage data">
          <UrlAction Url="_layouts/SpUsageSite.aspx" />
       </CustomAction>
       <CustomAction
          Id="PortalWebUsage"
          GroupId="SiteAdministration"
          Location="Microsoft.SharePoint.SiteSettings"
          Rights="ViewUsageData"
          Sequence="30"
          Title="Web usage data">
          <UrlAction Url="_layouts/SpUsageWeb.aspx" />
       </CustomAction>
    </Elements>
```

## See also

- [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md)
- [Custom Action](https://msdn.microsoft.com/library/961f74b3-77c7-4e3d-ba4c-e7a13ed95b5f(Office.15).aspx)
- [Declarative Customization of the Server Ribbon](https://msdn.microsoft.com/library/520af36e-2675-4a35-a837-a95f7265bac8(Office.15).aspx)
- [Default Server Ribbon Customization Locations](https://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx)
- [Walkthrough: Replacing a Button on the Server Ribbon](https://msdn.microsoft.com/library/93841d22-954c-4352-b81a-0d7bbdafc247(Office.15).aspx)








