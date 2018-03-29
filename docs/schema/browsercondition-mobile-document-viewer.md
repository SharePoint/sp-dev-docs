---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Mobile Document Viewer XML
ms.assetid: dae1e50e-da90-4131-b8e0-155aa488d6fc
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
<td align="left"># BrowserCondition (Mobile Document Viewer)</td>
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

Identifies a browser condition under which redirection to a page that
hosts a viewer for a specified type of document is overridden because
the device can use an alternative viewer for the specified type of file,
possibly a viewer that is installed on the device.

[MobileDocViewers (Mobile Document
Viewer)](mobiledocviewers-mobile-document-viewer.md)</span>  
  [MobileDocViewer (Mobile Document
Viewer)](mobiledocviewer-mobile-document-viewer.md)</span>  
    [BrowserCondition (Mobile Document
Viewer)](browsercondition-mobile-document-viewer.md)</span>  
<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>  &lt;BrowserCondition ... &gt;
 &lt;/ BrowserCondition&gt;</code></pre></td>
</tr>
</tbody>
</table>

**Complex**


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
<td align="left"><p>**Id**</p></td>
<td align="left"><p>The name of a browser capability in the <span class="code">compat.browser</span> file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>True, if the presence of the capability means that redirection is overridden; otherwise, false.</p></td>
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
<td align="left"><p><span sdata="link"><a href="override-mobile-document-viewer.md">Override (Mobile Document Viewer)</a></span></p></td>
<td align="left"><p>Specifies an alternative redirection URL.</p></td>
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
<td align="left"><p><span sdata="link"><a href="mobiledocviewer-mobile-document-viewer.md">MobileDocViewer (Mobile Document Viewer)</a></span></p></td>
<td align="left"><p>Specifies redirection of a request for a document from a mobile device.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows this element in use.

<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <MobileDocViewers>
      <MobileDocViewer Name="docx" FilePath="/_layouts/mobile/mWord.aspx" FeatureId="8DFAF93D-E23C-4471-9347-07368668DDAF" QueryId="doc" AppendSourceUrl="true" >
        <BrowserCondition Id="overrideMobileDocViewerRedirection" Value="true">
          <Override FilePath="/_layouts/MobileDocHandler.ashx" AppendSourceUrl="false" />
        </BrowserCondition>
      </MobileDocViewer>
    </MobileDocViewers>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Developing Mobile Document
Viewers](http://msdn.microsoft.com/library/acd5386d-7808-4fd8-843f-0a4ac9ddd6b0(Office.15).aspx)








