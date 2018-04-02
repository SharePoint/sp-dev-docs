---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ef7dc9b4-3009-40d8-b15b-24cd60d99d7c
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
<td align="left"># FeatureSiteTemplateAssociation Element (FeatureSiteTemplateAssociation)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Associates the specified Features with the specified [site definition
configuration](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3(Office.15).aspx)
so that when Web sites are provisioned, the Features are automatically
included.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><FeatureSiteTemplateAssociation 
    Id = "Text" 
    TemplateName = "Text"> 
    <Property 
      Key= "Text" 
      Value = "Text">
    </Property>
</FeatureSiteTemplateAssociation></code></pre></td>
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
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID for the Feature.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TemplateName**</p></td>
<td align="left"><p>Required **Text**. Specifies the name of the site definition configuration. SharePoint Foundation includes the following site definition configurations by default.</p>
<ul>
<li><p>**STS#0**   Team Site</p></li>
<li><p>**STS#1**   Blank Site</p></li>
<li><p>**STS#2**   Document Workspace</p></li>
<li><p>**MPS#0**   Basic Meeting Workspace</p></li>
<li><p>**MPS#1**   Blank Meeting Workspace</p></li>
<li><p>**MPS#2**   Decision Meeting Workspace</p></li>
<li><p>**MPS#3**   Social Meeting Workspace</p></li>
<li><p>**MPS#4**   Multipage Meeting Workspace</p></li>
<li><p>**BLOG#0**   Blog</p></li>
<li><p>**SGS#0**   Basic Group Work Site</p></li>
<li><p>**SGS#1**   Blank Group Work Site</p></li>
<li><p>**WIKI#0**   Wiki</p></li>
</ul>
<p>Note that WIKI provides a site definition configuration for legacy wiki sites that were originally created in an earlier version of SharePoint Foundation. Because standard site pages on SGS sites are wiki-enabled pages, you do not need to create sites that are specifically for wikis.</p></td>
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
<td align="left"><p><a href="property-element-featuresitetemplateassociation.md">Property</a></p></td>
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
<td align="left"><p><a href="elements-element-featuresitetemplateassociation.md">Elements</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Feature/Site Template
Associations](feature-site-template-associations.md)</span>.








