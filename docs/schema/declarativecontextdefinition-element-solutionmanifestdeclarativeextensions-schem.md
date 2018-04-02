---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3dbfc06e-ca4b-dd3e-b7ee-bc52803b3ee4
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
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
<td align="left"># DeclarativeContextDefinition Element (SolutionManifestDeclarativeExtensions Schema)</td>
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
class="keyword">DOCS-LESSTHANDeclarativeContextDefinitionDOCS-GREATERTHAN</span>
element derives from the <span
class="keyword">DOCS-LESSTHANContextDefinitionDOCS-GREATERTHAN</span>
element. In intermediate declarative Microsoft Outlook 2010 solutions,
this element is used to define a context for an external content type of
**Outlook Item Type**, which this context
definition group defines.

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
<td align="left"><pre><code><ContextDefinition xsl:type="DeclarativeContextDefinition" xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance"  ContentType = "String" Description = "String"> </ContextDefinition></code></pre></td>
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
<td align="left"><p>ContentType</p></td>
<td align="left"><p>The type name of this context in Outlook 2010. Can be different from the name of the external content type in the model. The value that you specify here affects the name of the Outlook item type as it appears in the Outlook object model. In Outlook, the name is appended to the Outlook item type; the full name of an external content type is <span class="ui">Outlook.DOCS-LESSTHANOutlookItemTypeDOCS-GREATERTHAN.DOCS-LESSTHANContentTypeDOCS-GREATERTHAN</span>. For example, a **Customer</span> external type could be **Outlook.Contact.Customer</span> if it is visualized as an Outlook Contact. If the external content type is visualized in a taskpane in Outlook, the full name is **EntityView.DOCS-LESSTHANContentTypeDOCS-GREATERTHAN</span>. For example, **EntityView.Customer** indicates how a customer would be visualized in the taskpane. If you use the object model to work on Outlook items, this is the naming scheme that you use to identify your Outlook items.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Description</p></td>
<td align="left"><p>A description for the context definition.</p>
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
<td align="left"><p><a href="http://msdn.microsoft.com/library/a36a61aa-3ea9-031a-88d3-706b494af5f0.aspx">Entities</a></p></td>
<td align="left"><p>The **DOCS-LESSTHANEntitiesDOCS-GREATERTHAN</span> element defines the external content type that this context definition is associated with. Note that in the current release of the product, a context definition can be associated with only one external type, even though the schema supports associating a context definition with more than one **DOCS-LESSTHANEntityDOCS-GREATERTHAN** element.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="http://msdn.microsoft.com/library/476e961f-9c21-b096-2dbb-cfb87a2740f6.aspx">OfficeItemCustomizations</a></p></td>
<td align="left"><p>The **DOCS-LESSTHANOfficeItemCustomizationsDOCS-GREATERTHAN** element lists the Outlook user interface customizations that are defined for this context definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="layouts-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.md">Layouts Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DOCS-LESSTHANLayoutsDOCS-GREATERTHAN** element lists the layouts that are defined for this context definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="actions-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.md">Actions Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DOCS-LESSTHANActionsDOCS-GREATERTHAN** element displays the actions that are defined for this context.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="contexteventhandlers-element-in-declarativecontextdefinition-solutionmanifestdec.md">ContextEventHandlers Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DOCS-LESSTHANContextEventHandlersDOCS-GREATERTHAN** element lists the actions to be executed when the context becomes active or when the context is deactivated.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

None.








