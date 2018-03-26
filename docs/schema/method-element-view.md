---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: bfcb7a97-c9e7-4b16-9a20-9c023c9ffc2b
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
<td align="left"># Method Element (View)</td>
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

Used in batch processing to specify commands within the
[Batch](batch-element-view.md) element.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Method ID=&quot;Text&quot;
  Cmd = &quot;Text&quot;
  ID = &quot;Text&quot;&gt;
&lt;/Method&gt;</code></pre></td>
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
<td align="left"><p>**Cmd**</p></td>
<td align="left"><p>Optional **Text**. Used in Web services to specify the command to post to the server for updating list items. Possible values include the following:</p>
<ul>
<li><p>**Delete** — Delete the specified item.</p></li>
<li><p>**New** — Create the specified item.</p></li>
<li><p>**Update** — Modify the specified item.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Text**. A freeform identification string that is not actually used by the server but that is returned to the client.</p></td>
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
<td align="left"><p><a href="field-element-list.htm">Field</a>, <a href="setlist-element-view.htm">SetList</a>, <a href="setvar-element-view.htm">SetVar</a></p></td>
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
<td align="left"><p><a href="batch-element-view.htm">Batch</a></p></td>
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

The **Method** element is required for the
**Batch** element, which is embedded within
HTTP protocol and allows the client application to post more than one
command at a time to the server.

In operations where the
[SetVar](setvar-element-view.md) element is used
within the **Method** element to post commands,
the **Cmd** attribute can contain methods in
the [Windows SharePoint Services RPC
Protocol](http://msdn.microsoft.com/library/1af2791b-f17f-42f3-95ea-1a4df9b8e3d0(Office.15).aspx)
protocol.

When used with the <span sdata="cer"
target="M:WebSvcLists.Lists.UpdateListItems(System.String,System.Xml.XmlNode)"><span
class="nolink">UpdateListItems</span></span> method of the <span
sdata="cer" target="T:WebSvcLists.Lists"><span
class="nolink">Lists</span></span> Web service, each <span
class="keyword">Method</span> element contains
[Field](field-element-list.md) elements that specify
the column values for each item being updated.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example uses the **Method**
element to post the remote procedure call (RPC)
[ExportList](http://msdn.microsoft.com/library/0e3b38ed-34de-4a16-a178-66a750de92c8(Office.15).aspx)
command and return the schema of a specified list.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Batch OnError="Return">
      <Method ID="0,ExportList">
        <SetList Scope="Request">EF2F5A21-0FD0-4654-84ED-
            112B4F5A48F8</SetList>
        <SetVar Name="Cmd">ExportList</SetVar>
      </Method>
    </Batch>








