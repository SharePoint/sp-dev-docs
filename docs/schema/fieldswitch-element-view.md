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
ms.assetid: 94f1c64a-50d6-4560-b941-98ce3df807b0
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
<td align="left"># FieldSwitch Element (View)</td>
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

Obsolete. Allows for conditional rendering based on the value of a field
property.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;FieldSwitch
   StripWS = &quot;TRUE&quot; | &quot;FALSE&quot;&gt;
       &lt;Expr&gt;&lt;/Expr&gt;
       &lt;Case Value=&quot;Value_1&quot;&gt;&lt;/Case&gt;
       &lt;Case Value=&quot;Value_2&quot;&gt;&lt;/Case&gt;
       ...
       &lt;Default&gt;&lt;/Default&gt;
&lt;/FieldSwitch&gt;</code></pre></td>
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
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to remove white space from the beginning and end of the value returned by the element.</p></td>
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
<td align="left"><p><a href="case-element-view.md">Case</a>, <a href="default-element-view.md">Default</a>, <a href="expr-element-view.md">Expr</a></p></td>
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
<td align="left"><p>Numerous</p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **FieldSwitch** element and the
[Switch](switch-element-view.md) element use identical
syntax, but a **FieldSwitch** element is
evaluated only once per request for each view in which it applies to a
view body or for each field in which it applies to a display pattern.
The **FieldSwitch** element substantially
optimizes performance in cases where different Collaborative Application
Markup Language (CAML) code paths are required, depending on a field
property (for example, whether rich text formatting is enabled) whose
value does not change during the rendering process.

A **FieldSwitch** element contains an
[Expr](expr-element-view.md) element, any number of
[Case](case-element-view.md) elements, and a
[Default](default-element-view.md) element. The value
of the **Expr** element is compared against the
**Value** attribute of each <span
class="keyword">Case</span> element. When a match is found, the <span
class="keyword">FieldSwitch</span> element returns the value of the
matching **Case** element. If no match is
found, and if a **Default** element is given,
then the **FieldSwitch** element returns the
value of the **Default** element. If no <span
class="keyword">Default</span> element is specified and none of the
**Case** values match the <span
class="keyword">Expr</span> value, then the <span
class="keyword">FieldSwitch</span> element returns an empty string.

This element does not require any particular parent element.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example from the
[FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6(Office.15).aspx)
file defines two different rendering patterns for a <span
class="keyword">Note</span> field, depending on whether the field has
rich text formatting.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <RenderPattern Name="DisplayPattern" DisplayName="DisplayPattern">
       <FieldSwitch>
          <Expr>
             <Property Select="RichText" />
          </Expr>
          <Case Value="TRUE">
             <Column AutoHyperLinkNoEncoding="TRUE" />
          </Case>
          <Default>
             <Column HTMLEncode="TRUE" AutoHyperLink="TRUE" 
                AutoNewLine="TRUE" />
          </Default>
       </FieldSwitch>
    </RenderPattern>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Switch Element
(View)](switch-element-view.md)</span>








