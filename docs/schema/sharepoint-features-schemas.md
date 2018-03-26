---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- features [sharepoint 2010], schemas,schemas [SharePoint 2010], Features,Features [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a9f6f15e-3489-4677-b579-db330638a853
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
<td align="left"># SharePoint Features schemas</td>
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

**Last modified:** October 31, 2012

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Different Features require different file formats, depending on the type
of customization you are making. In most cases, a Feature.xml file
contains a [Feature](feature-element-feature.htm) element
that uniquely identifies the Feature, specifies its scope, and points to
an XML file whose top-level **Elements**
element defines the elements comprising the Feature.

A Feature, however, might not include an Elements file, and may consist
of a Feature.xml file whose **Feature**
element, in addition to providing the previously described
specifications, points to an assembly that is used in the Feature, such
as in the case of declaring an event receiver.

In addition to describing the file format of <span
sdata="link">[Feature.xml
Files](feature-xml-files.htm)</span> and the Feature
sections in <span sdata="link">[Site Definition (Onet.xml)
Files](site-definition-onet-xml-files.htm)</span>, this section
describes the file formats used for the following Feature types:

-   <span sdata="link">[Content Type
    Bindings](content-type-bindings.htm)</span>

-   <span sdata="link">[Content Type
    Definitions](content-type-definitions.htm)</span>

-   <span sdata="link">[Delegate
    Controls](delegate-controls.htm)</span>

-   <span sdata="link">[Document
    Converter](document-converter.htm)</span>

-   <span sdata="link">[Event
    Registrations](event-registrations.htm)</span>

-   <span sdata="link">[Feature.xml
    Files](feature-xml-files.htm)</span>

-   <span sdata="link">[Feature/Site Template
    Associations](feature-site-template-associations.htm)</span>

-   <span sdata="link">[Field
    Definitions](field-definitions.htm)</span>

-   <span sdata="link">[List
    Instances](list-instances.htm)</span>

-   <span sdata="link">[List Template
    Files](list-template-files.htm)</span>

-   <span
    sdata="link">[Modules](modules.htm)</span>

-   <span sdata="link">[Site Definition (Onet.xml)
    Files](site-definition-onet-xml-files.htm)</span>

-   <span sdata="link">[Workflow
    Definitions](workflow-definitions.htm)</span>








