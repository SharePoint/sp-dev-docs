---


manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3092674c-a6c3-9021-3d7e-e716562a4a4f
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
<td align="left"># StartPage element (PropertiesDefinition complexType) (SharePoint Add-in Manifest)</td>
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

Typically, the URL of the page visited when the SharePoint Add-in is
launched. But it can also be the URL of a controller method or a web
service method that is invoked when the add-in is launched.

**Last modified:** September 17, 2015

**Applies to**: apps for SharePoint | SharePoint Foundation 2013 |
SharePoint Server 2013

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The string &quot;app&quot; appears as part, or all, of some element, attribute, and file names because SharePoint Add-ins were originally called &quot;apps for SharePoint&quot;. To ensure backward compatibility, the schemas have not been changed.</p></td>
</tr>
</tbody>
</table>

When the child element of the
[AppPrincipal](appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.htm) element is not
[Internal](internal-element-appprincipaldefinition-complextypesharepoint-add-in-manifest.htm), the page specified
in the **StartPage** element must be of a file
type that supports the POST verb (in addition to GET) so that the OAuth
context token can be sent on the body of the request. Common file types
that are typically configured in web servers to support POST are aspx,
php, and other types that support server-side code. Add-ins that have an
Internal add-in principal do not use OAuth and consequently the start
page of such add-ins can be a type that is not configured in the target
web server to support POST. HTML files, for example, frequently do not
support POST.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <StartPage>http://domain_of_remote_component/Home.aspx?{StandardTokens}</StartPage>

If the remote web server binds the remote component to a port other than
80 when the protocol is HTTP or 443 when the protocol is HTTPS, then the
port must be included explicitly as in the following example.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <StartPage>http://domain_of_remote_component:3333/Home.aspx?{StandardTokens}</StartPage>

The value of this element can contain certain tokens to represent
information that is not known at development time. The
"{StandardTokens}" above is an example. For more information, see [URL
strings and tokens in SharePoint
Add-ins](http://msdn.microsoft.com/library/800ec8cd-a448-46bc-b41e-d4030eeb4048(Office.15).aspx).
When you are debugging in Visual Studio, the Microsoft Office Developer
Tools for Visual Studio use the token <span
class="code">~remoteWebUrl</span> in place of the protocol and domain,
as in the following example.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <StartPage>~remoteWebUrl/Home.aspx?{StandardTokens}</StartPage>

The token is automatically replaced by the actual protocol and domain
(and port, if needed) by the Office Developer Tools for Visual Studio
when the add-in is packaged using the <span class="ui">Publish</span>
option on the context menu for the SharePoint Add-in project in Visual
Studio. If you don't use the Publish wizard (or you do, but the remote
component is being deployed to Azure), you have to manually replace the
token before you package the SharePoint Add-in.

If the add-in uses OAuth, the domain part of the <span
class="keyword">StartPage</span> value must exactly match the <span
class="ui">Add-in Domain</span> specified when the SharePoint Add-in was
registered with Microsoft Azure Access Control Service (ACS). For more
information see [Register SharePoint Add-ins
2013](http://msdn.microsoft.com/library/be41a5dc-2af9-4fd9-bf4e-ad6dfa849524(Office.15).aspx).


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.htm">UrlElementDefinition</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:element name="StartPage" type="UrlElementDefinition" minOccurs="1" maxOccurs="1" >
         </xs:element>     


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="properties-element-appdefinition-complextypesharepoint-add-in-manifest.htm">Properties</a></p></td>
<td align="left"><p><a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.htm">PropertiesDefinition</a></p></td>
<td align="left"><p>Contains information that is global to the add-in.</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Attributes

None.








