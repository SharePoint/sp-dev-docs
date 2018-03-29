---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8ba77ea5-4625-42d9-a535-1703bb5801f9
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
<td align="left"># Control Element (Delegate Control)</td>
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

Identifies the control to implement in a delegate control.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Control
  ControlAssembly = &quot;Text&quot;
  ControlClass = &quot;Text&quot;
  ControlSrc = &quot;Text&quot;
  Id = &quot;Text&quot;
  Sequence = &quot;Integer&quot;&gt;
&lt;/Control&gt;</code></pre></td>
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
<td align="left"><p>**ControlAssembly**</p></td>
<td align="left"><p>Optional **Text**. Specifies the strong name of the assembly for the control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ControlClass**</p></td>
<td align="left"><p>Optional **Text**. Specifies the fully qualified name of the class for the control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ControlSrc**</p></td>
<td align="left"><p>Optional **Text**. Specifies the relative URL of the .ascx file that serves as the source for the control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies the ID of the control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the sequence number for the control, which determines whether the control is added to the control tree for a page. The control with the lowest sequence number is added to the tree.</p></td>
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
<td align="left"><p><a href="property-element-delegate-control.md">Property</a></p></td>
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
<td align="left"><p><a href="elements-element-delegate-control.md">Elements</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

When implementing a user control, use the <span
class="keyword">ControlSrc</span> attribute. When implementing a server
control, use both the **ControlAssembly** and
**ControlClass** attributes. For an example of
how this element is used, see [Delegate
Controls](delegate-controls.md)</span>.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[How to: Customize a Delegate
Control](http://msdn.microsoft.com/library/9db44a39-33df-43d9-b873-3b41310090af(Office.15).aspx)








