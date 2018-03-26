---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bfe1e739-6936-41dc-849a-ac4a7b9e664d
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
<td align="left"># DocumentConverter Element (Document Converter)</td>
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

Specifies the definition of a document converter.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;DocumentConverter
  Id=&quot;Text&quot;
  Name=&quot;Text&quot;
  App=&quot;Text&quot;
  From=&quot;Text&quot;
  To=&quot;Text&quot;
  ConverterUIPage=&quot;Text&quot;
  ConverterSpecificSettingsUI=&quot;Text&quot;
  ConverterSettingsForContentType=&quot;Text&quot;
/&gt;</code></pre></td>
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
<td align="left"><p>Optional **Text**. Specifies the globally unique identifier (GUID) for this document converter.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. Specifies the document converter name.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**App**</p></td>
<td align="left"><p>Optional **Text**. Specifies the short name of the document converter executable file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**From**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name extension of the original file to be passed to the document converter. Do not start the file extension with a period.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**To**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name extension of the converted copy that the document converter produces. Do not start the file name extension with a period.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ConverterUIPage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name of the .aspx page to display to users to specify conversion options for the selected document.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ConverterSpecificSettingsUI**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name of an .ascx control to host on an existing converter configuration page. Use the control to add configuration options to the existing page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ConverterSettingsForContentType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name of the .aspx page to display to enable administrators to set configuration settings for this converter, per site content type.</p></td>
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
<td align="left"><p>None.</p></td>
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
<td align="left"><p><span sdata="link"><a href="elements-element-document-converter.htm">Elements Element (Document Converter)</a></span></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example is the document converter definition file for a
custom document converter that converts files of File Type A format to
File Type B format.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <DocumentConverter ID="{3f8ae156-93dc-46de-bcb3-0a89416a20b3}"
        Name="FileTypeA to FileTypeB"
        App="FTA2FTB.exe"
        From="fta"
        To="ftb"
        ConverterUIPage="FTA2FTB.aspx"
        ConverterSpecificSettingsUI="FTA2FTBConfig.aspx"
        ConverterSettingsForContentType="FTA2FTBConfig.ascx"
      />
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Working with
Features](http://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1(Office.15).aspx)








