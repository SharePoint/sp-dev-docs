---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 75aabf27-88ad-4c87-be5f-0592fce90d56
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
<td align="left"># Toolbar Element (List)</td>
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

Defines the toolbar of a list view, which is the section of a view that
is rendered above the view header.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Toolbar
  Position = &quot;After&quot;
  Type = &quot;Standard&quot; | &quot;FreeForm&quot;&gt;
&lt;/Toolbar&gt;</code></pre></td>
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
<td align="left"><p>**Position**</p></td>
<td align="left"><p>Optional **Text</span>. If <span class="keyword">Position = &quot;After&quot;** is specified, the toolbar will appear below the view body. If not specified, the toolbar will appear above the view body.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the kind of toolbar; this can be set to either <span class="keyword">Standard</span> or <span class="keyword">FreeForm**.</p></td>
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
<td align="left"><p>Numerous</p></td>
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
<td align="left"><p><a href="metadata-element-list.md">MetaData (List)</a>, <a href="metadata-element-site.md">MetaData (Site)</a>, <a href="view-element-list.md">View</a></p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following excerpt from the
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file for custom lists defines the <span class="ui">New</span> command of
the toolbar, displaying the option to create items only to users with
permission to add list items.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Toolbar Position="After" Type="Freeform">
      <IfHasRights>
        <RightsChoices>
          <RightsGroup PermAddListItems="required" />
        </RightsChoices>
        <Then>
          <HTML><![CDATA[ <table width=100% cellpadding=0 cellspacing=0 border=0 > <tr> <td colspan="2" class="ms-partline"><IMG SRC="/_layouts/images/blank.gif" width=1 height=1 alt=""></td> </tr> <tr> <td class="ms-addnew" style="padding-bottom: 3px"> <img src="/_layouts/images/rect.gif" alt="">&nbsp;<a class="ms-addnew" ID="idAddNewItem" href="]]></HTML>
          <URL Cmd="New" /><HTML><![CDATA[" ONCLICK="javascript:NewItem(']]></HTML>
          <URL Cmd="New" /><HTML><![CDATA[', true);javascript:return false;" target="_self">]]></HTML><HTML><!-- _locID_text="onetid6" _locComment="{StringCategory=HTX}" -->$Resources:core,addnewitem;</HTML><HTML><![CDATA[</a> </td> </tr> <tr><td><IMG SRC="/_layouts/images/blank.gif" width=1 height=5 alt=""></td></tr> </table>]]></HTML>
        </Then>
      </IfHasRights>
    </Toolbar>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)








