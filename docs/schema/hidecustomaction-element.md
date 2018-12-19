---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: afa42678-945d-4d8c-a5b3-8a1ca37831d1
---

# HideCustomAction Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Hides an existing action that is implemented by default within the framework of Windows SharePoint Services Features, or within another custom action.

## Definition

```XML
<HideCustomAction
  GroupId = "Text"
  HideActionId = "Text"
  Id = "Text"
  Location = "Text">
</HideCustomAction>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**GroupId**</p></td>
<td align="left"><p>Optional **Text**. Identifies an action group that contains the action, for example, `"SiteAdministration"`.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HideActionId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the ID of the custom action to hide, for example, `"DeleteWeb"`. See <a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a> for a list of the default custom action IDs that are used in SharePoint Foundation. For more information about hiding custom action IDs, see the **Remarks** section.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**.Specifies the ID of this hide custom action element, for example, `"HideDeleteWeb"`.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Optional **Text**. Specifies the location of the custom action to hide, for example, `"Microsoft.SharePoint.SiteSettings"`. See <a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a> for a list of the default custom action locations that are used in SharePoint Foundation.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="elements-element-custom-action.md">Elements</a></p></td>
</tr>
</tbody>
</table>

### Remarks

Note that HideCustomAction IDs are not limited to specific default SharePoint Foundation custom actions. You can also hide custom actions that you create yourself when you write your own features. This means that for any CustomAction ID available in SharePoint Foundation, you can have a corresponding HideCustomAction ID.

To locate custom action IDs, search in Windows File Explorer for the term "CustomAction." By default, these are located in the folder `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\FEATURES`. Here you will find all of the features that contain specific CustomActions that are related to your specified feature. Depending upon your requirement, you may inspect the desired feature folder and check the underlying XML file to note the CustomAction IDs, GroupIDs and Locations for that feature. Furthermore, you can use the same information to write your HideCustomAction elements as required. Additionally, you can refer to the information listed in the WSS 3.0 SDK on the page titled [How to: Add Actions to the User Interface](http://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054(Office.15).aspx).

Different actions may require using different CustomAction attributes to identify the menu where the custom menu item is placed. You may also need to specify other parameters for the action, for example, a version, user permissions required to perform the action, or placement in relation to existing actions in the menu. Similarly different HideCustomAction attributes may require different HideActionIds based upon which CustomAction you are trying to hide.


## See also

- [Default Custom Action Locations and IDs](default-custom-action-locations-and-ids.md)








