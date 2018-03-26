---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- content types [sharepoint 2010], binding to a list
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5ea25a00-6a99-4073-976e-336706fb7bc9
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
<td align="left"># Content Type Bindings</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

**Last modified:** July 15, 2011

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Each element manifest file that specifies a content type binding must
adhere to the Content Type Binding Definition Schema.

Content type binding enables you to provision a content type on a list
defined in the onet.xml schema. Lists defined in the onet.xml schema
cannot be modified directly.

Following is a list of the elements in the Content Type Binding
Definition Schema.

\<[Elements Element
(ContentTypeBinding)](elements-element-contenttypebinding.md)</span>\>

   \<[ContentTypeBinding Element
(ContentTypeBinding)](contenttypebinding-element-contenttypebinding.md)</span>\>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example specifies a content type to bind to the specified
list type.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <ContentTypeBinding
        ContentTypeId="0x010100C5A8DB52D9D0A14D9B2FDCC96666E9F2" 
        ListUrl="_catalogs/masterpage"
      />
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Content Type
Definitions](content-type-definitions.md)</span>

#### Other resources

[Elements Element
(ContentTypeBinding)](elements-element-contenttypebinding.md)</span>

[ContentTypeBinding Element
(ContentTypeBinding)](contenttypebinding-element-contenttypebinding.md)</span>








