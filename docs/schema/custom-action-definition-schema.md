---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6e8dc354-7a26-412c-816f-b6dc4d2fe55c
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># Custom Action Definition Schema</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** July 15, 2011

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Custom actions are defined in XML documents and deployed as part of a
Feature.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

An XML document that defines custom actions must validate with the
schema defined in the file wss.xsd. This file is located on the
following path: %ProgramFiles%\\Common Files\\Microsoft Shared\\web
server extensions\\15\\TEMPLATE\\XML.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Elements](elements-element-custom-action.md)

  [CustomActionGroup](customactiongroup-element-custom-action.md)

  [CustomAction](customaction-element.md)

  [HideCustomAction](hidecustomaction-element.md)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The [CustomActionGroup](customactiongroup-element-custom-action.md)
element contains the core definition for a grouping of custom actions.

The [UrlAction](urlaction-element.md) element must
be used to specify the URL for a custom action. If no action is
specified (an error condition), the link is displayed but it is not
linked to anything.

Use the [HideCustomAction](hidecustomaction-element.md)
element to hide an existing action that is implemented by default within
the infrastructure of Microsoft SharePoint Foundation Features, or
within another custom action. For a list of the default custom action
IDs, see [Default Custom Action Locations and
IDs](default-custom-action-locations-and-ids.md)</span>.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows an XML file whose contents replace default
actions in a SharePoint Foundation page with new actions. For a
programming task that shows the steps for defining and registering
custom actions, see [How to: Add Actions to the User
Interface](http://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054(Office.15).aspx).

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Default Custom Action Locations and
IDs](default-custom-action-locations-and-ids.md)</span>

#### Other resources

[Custom
Action](http://msdn.microsoft.com/library/961f74b3-77c7-4e3d-ba4c-e7a13ed95b5f(Office.15).aspx)

[Declarative Customization of the Server
Ribbon](http://msdn.microsoft.com/library/520af36e-2675-4a35-a837-a95f7265bac8(Office.15).aspx)

[Default Server Ribbon Customization
Locations](http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx)

[How to: Add Actions to the User
Interface](http://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054(Office.15).aspx)

[Walkthrough: Replacing a Button on the Server
Ribbon](http://msdn.microsoft.com/library/93841d22-954c-4352-b81a-0d7bbdafc247(Office.15).aspx)








