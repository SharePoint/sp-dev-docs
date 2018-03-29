---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: dcb85c58-1ed8-4bb9-430e-f2a5c395c785
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
<td align="left"># CodeMethodAction Element in Actions (SolutionManifestDeclarativeExtensions Schema)</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

The <span
class="keyword">DOCS-LESSTHANCodeMethodActionDOCS-GREATERTHAN</span>
element is used to execute a custom code action or to execute one of the
predefined actions provided by Microsoft Business Connectivity Services
(BCS).

Namespace:
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

Schema: SolutionManifestDeclarativeExtensions

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;CodeMethodAction  MethodType = &quot;String&quot; QualifiedTypeName = &quot;String&quot; MethodName = &quot;String&quot; Caption = &quot;String&quot; Tooltip = &quot;String&quot; Image = &quot;String&quot; DisplayLocations = &quot;String&quot; DisplayOrder = &quot;Int&quot; Scope = &quot;String&quot; Name = &quot;String&quot; Description = &quot;String&quot;&gt; &lt;/CodeMethodAction&gt;</code></pre></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following sections describe attributes, child elements, and parent
elements.

#### Attributes

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
<td align="left"><p>MethodType</p></td>
<td align="left"><p>The type of the action to execute.</p>
<p>Required.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Custom</p></td>
<td align="left"><p>Executes a custom code action.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ExecuteActionsSequence</p></td>
<td align="left"><p>Sequentially executes a specified set of actions. The names of the actions to be executed should be specified as parameters to the action. The order of execution is determined by the order of the action names in the parameters.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CopyEntity</p></td>
<td align="left"><p>Copies the values of the fields of the current item to the Clipboard. Each field value is separated by a tab character.</p></td>
</tr>
<tr class="even">
<td align="left"><p>CreateEntity</p></td>
<td align="left"><p>Opens the user interface for the Create Entity layout in Microsoft Outlook.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EditEntity</p></td>
<td align="left"><p>Opens the user interface for the Edit Entity layout in Outlook.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DeleteEntity</p></td>
<td align="left"><p>Deletes the current item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ViewDetails</p></td>
<td align="left"><p>Opens the user interface for the Edit Entity layout in read-only mode in Outlook.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ShowTaskpaneLayout</p></td>
<td align="left"><p>Shows the specified layout in the Outlook task pane. The name of the layout to be displayed should be specified as a parameter.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ShowRegionLayout</p></td>
<td align="left"><p>Shows the specified layout in the specified Outlook form region. The name of the layout to be displayed and the Outlook form region ID should be specified as a parameter. The form region ID should match the ID defined in the <span class="ui">FormRegions</span> section of the Solution Manifest.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ShowHostAgnosticWindowLayout</p></td>
<td align="left"><p>Shows the specified layout in a WinForm control. The name of the layout to be displayed should be specified as a parameter.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ShowHostSpecificWindowLayout</p></td>
<td align="left"><p>Shows the specified layout in an Outlook form. The name of the layout to be displayed should be specified as a parameter.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>QualifiedTypeName</p></td>
<td align="left"><p>The assembly-qualified name of the class that defines the code action, which includes the name of the assembly from which the class was loaded. For more information about how to specify this value, see <a href="http://msdn.microsoft.com/en-us/library/system.type.assemblyqualifiedname.aspx">Type.AssemblyQualifiedName Property</a>.</p>
<p><span class="code">Example: QualifiedTypeName=&quot;CustomCodeActionNameSpace.CustomCodeActionCalssName, CustomCodeActionAssemblyName, Version=1.0.0.0, Culture=neutral, PublicKeyToken=3c6b236b1e85d97a&quot;</span></p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MethodName</p></td>
<td align="left"><p>The name of the method to execute in the class.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Caption</p></td>
<td align="left"><p>The caption for the action. This is displayed as a caption for the action in the Outlook user interface.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Tooltip</p></td>
<td align="left"><p>The tooltip for the action. This is displayed as a tooltip for the action in the Outlook user interface.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Image</p></td>
<td align="left"><p>The path to an icon file. The icon is displayed for the action in the Outlook user interface. The path should be relative to the location of the solution manifest.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DisplayLocations</p></td>
<td align="left"><p>The locations in the Outlook user interface where this action should be displayed. This attribute can be a combination of the following bit flags: **0</span> (none, action is not displayed anywhere), <span class="keyword">1</span> (action is displayed on the external data parts menu), <span class="keyword">2** (action is displayed on the item context menu), 4 (action is displayed on the ribbon).</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>DisplayOrder</p></td>
<td align="left"><p>Used if the action is surfaced in a List External Data Part. Specifies the suggested position of this action among the other actions of this external content type in the menu.</p>
<p>Optional.</p>
<p>Attribute type: Int</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Scope</p></td>
<td align="left"><p>Used if the action is surfaced in a List External Data Part. Specifies whether this action needs an item to be selected in a List External Data Part.</p>
<p>Optional.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>ItemContext</p></td>
<td align="left"><p>Needs an item context. For example, an update action needs an item context to update an item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>StaticContext</p></td>
<td align="left"><p>Does not need an item context. For example, a create action does not need an item context.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>A name for this action.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>A description for this action.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
</tbody>
</table>

#### Child elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="parameters-element-in-actiondefinition-solutionmanifestdeclarativeextensions-sch.htm">Parameters Element in ActionDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>Actions can take parameters. The **Parameters** element lists the parameters of the action.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actions-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.htm">Actions Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **Actions** element that contains this action.</p></td>
</tr>
</tbody>
</table>








