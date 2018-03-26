---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Web Template schema
api_type:
- schema
ms.assetid: e39163b0-cb8f-4808-88fb-bc4dfb323a51
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
<td align="left"># Elements (Web Template)</td>
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

Provides a parent for the **WebTemplate**
element in an <span class="code">elements.xml</span> file in a web
template WSP file.

<span sdata="link">[Elements (Web
Template)](elements-web-template.htm)</span>  
  <span sdata="link">[WebTemplate Element (Web
Template)](webtemplate-element-web-template.htm)</span>  
<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Elements xmlns=&quot;http://schemas.microsoft.com/sharepoint/&quot;&gt;</code></pre></td>
</tr>
</tbody>
</table>

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>  &lt;WebTemplate ...&gt;</code></pre></td>
</tr>
</tbody>
</table>

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;/Elements&gt;</code></pre></td>
</tr>
</tbody>
</table>

**Complex**


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following sections describe attributes, child elements, and parent
elements.

#### Attributes

None

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
<td align="left"><p><span sdata="link"><a href="webtemplate-element-web-template.htm">WebTemplate Element (Web Template)</a></span></p></td>
<td align="left"><p>Provides configuration data for a web template.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

None


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The <span class="code">elements.xml</span> file is itself referenced in
the **ElementManifests** section of a <span
class="code">feature.xml</span> file that is also part of the WSP file.
When the feature is activated for a site collection, the web template
becomes available for creating new websites within the collection. The
**ElementManifests** section also identifies an
<span class="code">Onet.xml</span> file that contains additional details
of the web template that are not specified in the <span
class="keyword">WebTemplate</span> child element.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following is an example of an **Elements**
element.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <WebTemplate 
        AdjustHijriDays="0" 
        AlternateCssUrl="" 
        AlternateHeader="" 
        BaseTemplateID="9" 
        BaseTemplateName="BLOG" 
        BaseConfigurationID="0" 
        CalendarType="1" 
        Collation="25" 
        ContainsDefaultLists="TRUE" 
        CustomizedCssFiles="" 
        CustomJSUrl="" 
        Description="A 4th Generation Blog Site." 
        ExcludeFromOfflineClient="FALSE" 
        Locale="1033" 
        Name="BlogIV" 
        ParserEnabled="TRUE" 
        PortalName="" 
        PortalUrl="" 
        PresenceEnabled="TRUE" 
        ProductVersion="4" 
        QuickLaunchEnabled="TRUE" 
        Subweb="TRUE" 
        SyndicationEnabled="TRUE" 
        Time24="FALSE" 
        TimeZone="13" 
        Title="BlogIV" 
        TreeViewEnabled="FALSE" 
        UIVersionConfigurationEnabled="FALSE" />
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Working with Site Templates and
Definitions](http://msdn.microsoft.com/library/1edf6d4d-eddb-4cb5-9034-ed394e8a3e01(Office.15).aspx)








