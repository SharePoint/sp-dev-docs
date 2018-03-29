---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cc5ed5c2-c362-4a61-af77-ff9e8f7e1cae
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
<td align="left"># CustomAction Element</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Defines an extension to the user interface, such as a button on a
toolbar or a link on a site settings page.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;CustomAction
  RequiredAdmin = &quot;Delegated | Farm | Machine&quot;
  ControlAssembly = &quot;Text&quot;
  ControlClass = &quot;Text&quot;
  ControlSrc = &quot;Text&quot;
  Description = &quot;Text&quot;
  FeatureId = &quot;Text&quot;
  GroupId = &quot;Text&quot;
  Id = &quot;Text&quot;
  ImageUrl = &quot;Text&quot;
  Location = &quot;Text&quot;
  RegistrationId = &quot;Text&quot;
  RegistrationType = &quot;Text&quot;
  RequireSiteAdministrator = &quot;TRUE&quot; | &quot;FALSE&quot;
  Rights = &quot;Text&quot;
  RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  ScriptSrc = &quot;Text&quot;
  ScriptBlock = &quot;Text&quot;
  Sequence = &quot;Integer&quot;
  ShowInLists = &quot;TRUE&quot; | &quot;FALSE&quot;
  ShowInReadOnlyContentTypes = &quot;TRUE&quot; | &quot;FALSE&quot;
  ShowInSealedContentTypes = &quot;TRUE&quot; | &quot;FALSE&quot;
  Title = &quot;Text&quot;
  UIVersion = &quot;Integer&quot;&gt;
&lt;/CustomAction&gt;</code></pre></td>
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
<td align="left"><p>**RequiredAdmin**</p></td>
<td align="left"><p>Optional **Text**. Specifies the administrative rights that are required for the custom action to apply. This value is used to trim links in Central Administration. Possible values are:</p>
<ul>
<li><p>**Delegated**</p></li>
<li><p>**Farm**</p></li>
<li><p>**Machine**</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**ControlAssembly**</p></td>
<td align="left"><p>Optional **Text**. Specifies the assembly of a control that supports the custom action.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ControlClass**</p></td>
<td align="left"><p>Optional **Text**. Specifies a control class that supports the custom action.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ControlSrc**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the relative URL of the .ascx file that serves as the source for the custom action, for example, <span class="code">&quot;~/_controltemplates/myCustomAction.ascx&quot;**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Specifies a longer description for the action that is exposed as a tooltip or sub-description for the action.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Optional **Text**. Identifies the Feature that is associated with the custom action.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**GroupId**</p></td>
<td align="left"><p>Optional **Text</span>. Identifies an action group that contains the action, for example, <span class="code">&quot;SiteManagement&quot;</span>. If it is contained within a custom action group, the value of the <span class="keyword">GroupId** attribute must equal the group ID of the <a href="customactiongroup-element-custom-action.md">CustomActionGroup</a> element.</p>
<p>For a list of the default custom action group IDs that are used in Microsoft SharePoint Foundation, see <span sdata="link"><a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a></span>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies a unique identifier for the custom action. The ID may be a GUID, or it may be a unique term, for example, <span class="code">&quot;HtmlViewer&quot;**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies a virtual server relative link to an image that presents an icon for the item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the location of this custom action, for example, <span class="code">&quot;Microsoft.SharePoint.SiteSettings&quot;**.</p>
<p>If the **CustomAction</span> element contains a <span class="keyword">CommandUIExtension</span> child element, the <span class="keyword">Location** must start with &quot;CommandUI.Ribbon&quot;. For a list of default locations that are used with the Server ribbon, see <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a>.</p>
<p>If the custom action is a menu item or toolbar button, the possible options include **EditControlBlock</span>, <span class="keyword">NewFormToolbar</span>, <span class="keyword">DisplayFormToolbar</span>, and <span class="keyword">EditFormToolbar**.</p>
<p>If it is contained within a custom action group, the value of the **Location** attribute must equal the location of the <a href="customactiongroup-element-custom-action.md">CustomActionGroup</a> element.</p>
<p>For a list of the default custom action locations that are used in SharePoint Foundation, see <span sdata="link"><a href="default-custom-action-locations-and-ids.md">Default Custom Action Locations and IDs</a></span>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RegistrationId**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the identifier of the list or item content type that this action is associated with, or the file type or programmatic identifier (<span class="keyword">ProgID**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RegistrationType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the registration attachment for a per-item action. Possible values include:</p>
<ul>
<li><p>**None**</p></li>
<li><p>**List**</p></li>
<li><p>**ContentType**</p></li>
<li><p>**ProgId**</p></li>
<li><p>**FileType**</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequireSiteAdministrator**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the item be displayed only if the user is a site administrator; otherwise, <span class="keyword">FALSE</span>. Using the <span class="keyword">RequireSiteAdministrator** attribute for the drop-down menu of SharePoint Foundation commands that are associated with list items is not supported.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Rights**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies a set of rights that the user must have for the link to be visible, for example, <span class="code">&quot;ViewListItems,ManageAlerts&quot;</span>. If it is not specified, the action always appears in the list of actions. To specify multiple rights, separate the values by using commas. The set of rights are grouped logically according to <span class="keyword">AND</span> logic, which means that a user must have all the specified rights to see an action. For a list of possible values, see <span sdata="cer" target="T:Microsoft.SharePoint.SPBasePermissions"><span class="nolink">Microsoft.SharePoint.SPBasePermissions</span>**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to deploy the custom action only on root websites. This attribute applies to custom actions in a sandboxed solution.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ScriptSrc**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies a file that contains script to be executed. This attribute is only applicable when the <span class="keyword">Location</span> attribute is set to <span class="keyword">ScriptLink**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ScriptBlock**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies a block of script to be executed. This attribute is only applicable when the <span class="keyword">Location</span> attribute is set to <span class="keyword">ScriptLink**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the ordering priority for actions.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInLists**</p></td>
<td align="left"><p>This attribute is deprecated and should not be used.</p>
<p>Optional **Boolean</span>. <span class="keyword">TRUE</span> if the custom action is only displayed for lists on the page for managing content types. The default value is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowInReadOnlyContentTypes**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> if the custom action is only displayed for read-only content types on the page for managing content types. The default value is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowInSealedContentTypes**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> if the custom action is only displayed for sealed content types on the page for managing content types. The default value is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. Specifies the end-user description for this action.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UIVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the version of the user interface in which this custom action should be listed.</p></td>
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
<td align="left"><p><a href="commanduiextension-element.md">CommandUIExtension</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="urlaction-element.md">UrlAction</a></p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 1</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can use the **CustomAction** element to add
standard ASP.NET controls and user controls (for example, text boxes or
option buttons) as custom actions in toolbars. However, you can only add
controls instantiating menu items to the drop-down menus of toolbars;
you cannot add Web Parts or arbitrary controls.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example is part of a Feature that replaces a button on the
Server ribbon.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <CustomAction Id="Ribbon.Library.Actions.ReplacementButton"
        Location="CommandUI.Ribbon"
        RegistrationId="101"
        RegistrationType="List"
        Title="Replace a Ribbon Button">
        <CommandUIExtension>
          <CommandUIDefinitions>
            <CommandUIDefinition
              Location="Ribbon.Library.Actions.ConnectToClient">
                 <Button Id="Ribbon.Library.Actions.ConnectToClient.ReplacementButton"
                   Command="ReplacementButtonCommand"
                   Image16by16="Insert an image URL here."
                   Image32by32="Insert an image URL here."
                   LabelText="Replaced Button"
                   TemplateAlias="o2" />
            </CommandUIDefinition>
          </CommandUIDefinitions>
          <CommandUIHandlers>
            <CommandUIHandler
              Command="ReplacementButtonCommand"
              CommandAction="javascript:alert('This button has been replaced.');" />
          </CommandUIHandlers>
        </CommandUIExtension>
      </CustomAction>
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Default Custom Action Locations and
IDs](default-custom-action-locations-and-ids.md)</span>








