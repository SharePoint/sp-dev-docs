---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Mobile Document Viewer XML
ms.assetid: 171e58ff-ca97-4ac8-9ebc-fdcaeabc885c
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
<td align="left"># MobileDocViewers (Mobile Document Viewer)</td>
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

Specifies the document-viewing page for one or more types of documents.

[MobileDocViewers (Mobile Document
Viewer)](mobiledocviewers-mobile-document-viewer.md)</span>  
<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><MobileDocViewers>
  <MobileDocViewer>
  </ MobileDocViewer>
</MobileDocViewers ></code></pre></td>
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
<td align="left"><p><a href="mobiledocviewer-mobile-document-viewer.md">MobileDocViewer</a></p></td>
<td align="left"><p>Configures redirection for a specific type of document.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

None


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **MobileDocViewers** element persists in a
file named mdocview\_\*.xml, where the asterisk (\*) is some string of
valid file name characters. We recommend using your company name or some
other string that is not likely to duplicate the name that is used by
other document viewer providers. The page is deployed to
%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\Config on all front-end web servers.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows this element in use.

## Definition
XML 
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








