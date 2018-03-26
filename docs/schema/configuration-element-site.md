---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- customizing site definitions
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: db6728d9-4615-44b0-b651-cdab95706494
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
<td align="left"># Configuration Element (Site)</td>
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

Specifies the lists and modules used in creating a SharePoint Foundation
Web site that is based on the [site definition
configuration](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3(Office.15).aspx)
represented by the **Configuration** element.
These elements also represent configurations in [Web
Templates](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30(Office.15).aspx).
For simplicity, the phrase 'site definition configuration' is used
throughout this topic although the topic applies to Web template
configurations as well. Except where specified otherwise, the attribute
descriptions below apply to **Configuration**
elements in both site definitions and Web templates.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Configuration
    AllowGlobalFeatureAssociations = &quot;TRUE&quot; | &quot;FALSE&quot;
    CustomMasterUrl = &quot;Text&quot;
    Description = &quot;Text&quot;
    DisplayCategory = &quot;Text&quot;
    FilterCategories = &quot;Text&quot;
    Hidden = &quot;TRUE&quot; | &quot;FALSE&quot;
    ID = &quot;Integer&quot;
    ImageUrl = &quot;Text&quot;
    MasterUrl = &quot;Text&quot;
    Name = &quot;Text&quot;
    ProvisionAssembly = &quot;Text&quot;
    ProvisionClass = &quot;Text&quot;
    ProvisionData = &quot;Text&quot;
    RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
    SubWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
    SupportsMultilingualUI = &quot;TRUE&quot; | &quot;FALSE&quot;
    Title = &quot;Text&quot;
    Type = &quot;Text&quot;
    VisibilityFeatureDependency = &quot;Text&quot;&gt;
&lt;/Configuration&gt;</code></pre></td>
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
<td align="left"><p>**AllowGlobalFeatureAssociations**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies whether global Feature associations are allowed for sites that are created with the site definition configuration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CustomMasterUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL for an alternate .master page that can be used on pages, in Web sites that are created through the site definition configuration, without customizing those pages.</p>
<div class="alert">
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
<td align="left"><p>Simply changing the value of the MasterPageFile attribute on pages that need an alternate master page, would customize those pages and cause them to be stored in the content database rather than the file system of the front-end Web servers.</p></td>
</tr>
</tbody>
</table>
</div>
<p>For more information on how the value of the **CustomMasterUrl** is used, see <a href="http://msdn.microsoft.com/library/9b04723e-e0f4-4701-a9c2-44e6e6d7c21b(Office.15).aspx">Master Pages on Application Pages</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Contains the locale-specific description of the site definition configuration that appears in the UI of SharePoint Foundation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayCategory**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the category in which the site definition configuration will appear in the UI of SharePoint Foundation, for example, <span class="keyword">Collaboration</span>, <span class="keyword">Meetings**, or some custom name.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FilterCategories**</p></td>
<td align="left"><p>Optional **Text</span>. This attribute is not used by SharePoint Foundation. It is available for enhanced portal or content management solutions built on SharePoint Foundation, such as Microsoft SharePoint Server, to use as means of categorizing site configurations in ways that do not map precisely onto the categorizations that appear in the UI. (See also the <span class="keyword">DisplayCategory** attribute.)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies whether the site definition configuration appears as an option in the UI of SharePoint Foundation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Integer</span>. Specifies an ID for the site definition configuration that is unique within the site definition. A definition, such as STS or MPS, is defined by a <a href="template-element-site.htm">Template</a> element in a <span class="code">WebTemp*.xml</span> file and by a corresponding <span class="code">Onet.xml** file for the definition. See <strong>Parent Elements</strong> and <strong>Remarks</strong> below.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>Required **Text**. Contains the URL for the preview image displayed in the UI of SharePoint Foundation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MasterUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the default master page to use for Web sites created through the site definition configuration.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. Contains the name of the site definition configuration.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ProvisionAssembly**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of the assembly that contains the provision class, if there is one. (See <strong>ProvisionClass</strong> below.) For example:</p>
<p><span class="code">ProvisionAssembly=&quot;MyCompany.SharePoint.ProvisionHelper, Version=1.0.0.0, Culture=neutral, PublicKeyToken=82f0cdf222f0530d&quot;</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>**ProvisionClass**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the fully qualified name of a class that provides provisioning functionality that will execute when the runtime finishes creating a site from the configuration. It is not required that there be such a class, but if you need one for a custom configuration, it must derive from <span sdata="cer" target="T:Microsoft.SharePoint.SPWebProvisioningProvider"><span class="nolink">SPWebProvisioningProvider</span>**. For example:</p>
<p><span class="code">ProvisionClass=&quot;MyCompany.SharePoint. ProvisionHelper.MySiteProvisioningProvider&quot;</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ProvisionData**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies data that will be used by the <span sdata="cer" target="M:Microsoft.SharePoint.SPWebProvisioningProvider.Provision(Microsoft.SharePoint.SPWebProvisioningProperties)"><span class="nolink">Provision(SPWebProvisioningProperties)</span>** method of the <strong>ProvisionClass</strong> (see above). This can be a path to file that contains structured data. For example:</p>
<p><span class="code">ProvisionData=&quot;SiteTemplates\\MySiteManifest.xml&quot;</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the site created from the configuration exists only as the root Web site in a site collection. This attribute is not enforced in <a href="http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30(Office.15).aspx">Web templates</a>, which are stored in Solution (<span class="code">.wsp** files).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SubWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the site created from the configuration exists only as a subsite within a site collection. This attribute is not enforced in <a href="http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30(Office.15).aspx">Web templates</a>, which are stored in Solution (<span class="code">.wsp** files).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SupportsMultilingualUI**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> (the default) to specify that administrators can enable alternate languages for sites created from the configuration. <span class="keyword">FALSE** prevents administrators from enabling this functionality.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional **Text**. Contains the title of the site definition configuration that is displayed in the UI of SharePoint Foundation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Text**. Identifies the site definition, such as STS or MPS.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**VisibilityFeatureDependency**</p></td>
<td align="left"><p>Optional **Text</span>. Used in a <span class="code">WebTemp*.xml** file to hide the site definition configuration based on the activation state of the specified Feature. When a configuration contains Features that depend upon another Feature, setting this attribute prevents the configuration from appearing as an option in the UI of SharePoint Foundation if the specified Feature is not installed or activated. This attribute is not supported for Features with Web application scope.</p></td>
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
<td align="left"><p><a href="executeurl-element-site.htm">ExecuteUrl</a>, <a href="lists-element-site.htm">Lists</a>, <a href="modules-element-site.htm">Modules</a>, <a href="sitefeatures-element-site.htm">SiteFeatures</a>, <a href="webfeatures-element-site.htm">WebFeatures</a></p></td>
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
<td align="left"><p><a href="configurations-element-site.htm">Configurations</a>, <a href="template-element-site.htm">Template</a></p></td>
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
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A **Configuration** element is used in <span
class="code">WebTemp\*.xml</span> files (see
[WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx))
to identify an available site definition configuration within a site
definition. It is used in
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
files to define a configuration of lists, modules, and features that are
used to create a site from the site definition configuration. In a <span
class="code">WebTemp\*.xml</span> file, this element is contained within
a [Template](template-element-site.htm) element that
specifies the site definition. In <span class="code">Onet.xml</span>,
this element is contained within a
[Configurations](configurations-element-site.htm) element that
specifies the configurations whose lists are defined within the <span
class="code">Onet.xml</span>.

There is one **Template** element in a <span
class="code">WebTemp\*.xml</span> file, and one <span
class="code">Onet.xml</span> file, for each site definition.

The **ID** attribute associates the <span
class="keyword">Configuration</span> element for a given site definition
in a <span class="code">WebTemp\*.xml</span> file with the corresponding
**Configuration** element for that same site
definition in the <span class="code">Onet.xml</span>.

A [Web
template](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30(Office.15).aspx),
as distinct from a [site definition
configuration](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3(Office.15).aspx),
is defined with a
[WebTemplate](webtemplate-element-web-template.htm) element in a
<span class="code">elements.xml</span> file inside a .wsp file that is
stored in the SharePoint database. Also in the .wsp file is an <span
class="code">Onet.xml</span> file with a single <span
class="keyword">Configuration</span> element which specifies the details
of the Web template.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example from
[WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx)
specifies the three configurations for the <span
class="keyword">STS</span> Web site definition.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Template Name="STS" ID="1">
        <Configuration ID="0" Title="Team Site" Hidden="FALSE" ImageUrl="/_layouts/images/stts.png" Description="A site for teams to quickly organize, author, and share information. It provides a document library, and lists for managing announcements, calendar items, tasks, and discussions." DisplayCategory="Collaboration" >    </Configuration>
        <Configuration ID="1" Title="Blank Site" Hidden="FALSE" ImageUrl="/_layouts/images/stbs.png" Description="A blank site for you to customize based on your requirements." DisplayCategory="Collaboration" AllowGlobalFeatureAssociations="False" >    </Configuration>
        <Configuration ID="2" Title="Document Workspace" Hidden="FALSE" ImageUrl="/_layouts/images/stdw.png" Description="A site for colleagues to work together on a document. It provides a document library for storing the primary document and supporting files, a tasks list for assigning to-do items, and a links list for resources related to the document." DisplayCategory="Collaboration" >    </Configuration>
     </Template>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Custom Site
Templates](http://msdn.microsoft.com/library/de422674-5cc4-4880-b08e-b1e955419d30(Office.15).aspx)

[Site Definitions and
Configurations](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3(Office.15).aspx)








