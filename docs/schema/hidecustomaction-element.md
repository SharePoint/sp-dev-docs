---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: afa42678-945d-4d8c-a5b3-8a1ca37831d1
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># HideCustomAction Element</td>
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

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Hides an existing action that is implemented by default within the
framework of Windows SharePoint Services Features, or within another
custom action.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;HideCustomAction
  GroupId = &quot;Text&quot;
  HideActionId = &quot;Text&quot;
  Id = &quot;Text&quot;
  Location = &quot;Text&quot;&gt;
&lt;/HideCustomAction&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
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
<td align="left"><p>Optional **Text</span>. Identifies an action group that contains the action, for example, <span class="code">&quot;SiteAdministration&quot;**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HideActionId**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the ID of the custom action to hide, for example, <span class="code">&quot;DeleteWeb&quot;</span>. See <span sdata="link"><a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a>** for a list of the default custom action IDs that are used in SharePoint Foundation. For more information about hiding custom action IDs, see the Remarks section, below.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text</span>.Specifies the ID of this hide custom action element, for example, <span class="code">&quot;HideDeleteWeb&quot;**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the location of the custom action to hide, for example, <span class="code">&quot;Microsoft.SharePoint.SiteSettings&quot;</span>. See <span sdata="link"><a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a>** for a list of the default custom action locations that are used in SharePoint Foundation.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Note that HideCustomAction IDs are not limited to specific default
SharePoint Foundation custom actions. You can also hide custom actions
that you create yourself when you write your own features. This means
that for any CustomAction ID available in SharePoint Foundation, you can
have a corresponding HideCustomAction ID.

To locate custom action IDs, search in Windows File Explorer for the
term "CustomAction." By default, these are located in the folder
%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\TEMPLATE\\FEATURES. Here you will find all of the
features that contain specific CustomActions that are related to your
specified feature. Depending upon your requirement, you may inspect the
desired feature folder and check the underlying XML file to note the
CustomAction IDs, GroupIDs and Locations for that feature. Furthermore,
you can use the same information to write your HideCustomAction elements
as required. Additionally, you can refer to the information listed in
the WSS 3.0 SDK on the page titled [How to: Add Actions to the User
Interface](http://msdn.microsoft.com/library/b2403912-161d-408f-90ae-6b95c014d054(Office.15).aspx).

Different actions may require using different CustomAction attributes to
identify the menu where the custom menu item is placed. You may also
need to specify other parameters for the action, for example, a version,
user permissions required to perform the action, or placement in
relation to existing actions in the menu. Similarly different
HideCustomAction attributes may require different HideActionIds based
upon which CustomAction you are trying to hide.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Default Custom Action Locations and
IDs](default-custom-action-locations-and-ids.md)</span>








