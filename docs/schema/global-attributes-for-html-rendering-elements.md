---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 7df37d74-2663-4100-905a-5bd1509c0e2b
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
<td align="left"># Global Attributes for HTML-Rendering Elements</td>
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

**Last modified:** July 15, 2011

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

The View schema of [Introduction to Collaborative
Application Markup Language
(CAML)](introduction-to-collaborative-application-markup-language-caml.md)</span> provides
several universal attributes that can be used to describe any CAML
rendering element. These attributes can be implemented in standard and
specialized elements in the [View
Schema](view-schema.md)</span>.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The presence of any one of these attributes implies that it is **TRUE </span>(for example, **HTMLEncode</span> cannot be set to **FALSE**).</p></td>
</tr>
</tbody>
</table>

Universal attributes include the following:

-   **AutoHyperLink** — When <span
    class="keyword">TRUE</span>, scans the rendering for strings that
    appear to be hyperlinks (for example, www.microsoft.com). When it
    finds these strings, it automatically adds an appropriate \<A\> tag
    around the text so that the user can follow the hyperlink. <span
    class="keyword">HTMLEncode</span> is assumed <span
    class="keyword">TRUE</span> when <span
    class="keyword">AutoHyperLink</span> is set to <span
    class="keyword">TRUE</span>.

-   **AutoNewLine** — When <span
    class="keyword">TRUE</span>, inserts \<BR\> tags into the text
    stream and replaces multiple spaces with a nonbreaking space
    (&nbsp;). **AutoHyperLink** must be <span
    class="keyword">TRUE</span> for this attribute to take effect. <span
    class="keyword">HTMLEncode</span> is assumed <span
    class="keyword">TRUE</span> when <span
    class="keyword">AutoNewLine</span> is set to <span
    class="keyword">TRUE</span>.

-   **Default** — If the spanned text is
    nothing, render this text instead. For example,
    DOCS-LESSTHANows:XMLDOCS-GREATERTHANDOCS-LESSTHANListProperty
    Select="Description" Default="This list has no
    description"/DOCS-GREATERTHANDOCS-LESSTHAN/ows:XMLDOCS-GREATERTHAN
    The previous example renders the default text if there is no
    description for the list in question.

-   **ExpandXML** — When <span
    class="keyword">TRUE</span>, reviews the rendered content and sends
    it on another pass through the CAML interpreter. This allows CAML to
    render CAML.

-   **HTMLEncode** — When <span
    class="keyword">TRUE</span>, converts any embedded characters so
    that they are all displayed as text in the browser. This means that
    any characters that could be confused with HTML tags are converted
    to entities such as "**&gt;**" instead of
    "**DOCS-GREATERTHAN**".

-   **StripWS** — When <span
    class="keyword">TRUE</span>, strips whitespace from the beginning
    and end of an element. For example, \<ows:XML StripWS="TRUE"\>
    Microsoft \</ows:XML\> renders "Microsoft" without surrounding
    spaces.

-   **URLEncode** — When <span
    class="keyword">TRUE</span>, converts special characters, such as
    spaces, to quoted UTF-8 format (for example, %c3%ab for character
    ë).

-   **URLEncodeAsURL** — Similar to <span
    class="keyword">URLEncode</span>, but assumes that what is being
    encoded is a path component of a URL. For example, \<ows:XML
    URLEncodeAsURL="TRUE"\>SharePoint Web Site\</ows:XML\> renders
    SharePoint%20Web%20Site. This attribute, unlike <span
    class="keyword">URLEncode</span>, does not encode the forward slash
    ("/").








