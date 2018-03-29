---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: e33fbd48-21f0-42bb-97de-3b2b632997de
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
<td align="left"># Unit Element (Spinner)</td>
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

Defines a unit for use within the spinner control.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Unit
  Name=&quot;Text&quot;
  MinimumValue=&quot;Decimal&quot;
  MaximumValue=&quot;Decimal&quot;
  DecimalDigits=&quot;Integer&quot;
  Interval=&quot;Double&quot;
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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional. The name of the unit, such as inches, pixels, or percent.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MinimumValue**</p></td>
<td align="left"><p>Optional. The minimum acceptable value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MaximumValue**</p></td>
<td align="left"><p>Optional. The maximum acceptable value.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DecimalDigits**</p></td>
<td align="left"><p>Optional. The number of decimal digits to display.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Interval**</p></td>
<td align="left"><p>Optional. The amount by which the value should be incremented or decremented.</p></td>
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
<td align="left"><p><a href="unitabbreviation-element.htm">UnitAbbreviation</a></p></td>
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
<td align="left"><p><a href="spinner-element.htm">Spinner</a></p></td>
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
<p>Maximum: unbounded</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following XML example defines a spinner control that contains
several units.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Spinner
       Id="Ribbon.Table.Layout.Properties.TableWidth"
       DefaultUnit="inch"
       DefaultValue="1.5"
       AltUpArrow="$Resources:core,cui_spnUpAlt;"
       AltDownArrow="$Resources:core,cui_spnDownAlt;"
       AccelerationInterval="125"
       MultiplierInterval="2000"
       Command="SetTableWidth"
       ImeEnabled="false"
       QueryCommand="QueryTableWidth"
       ToolTipTitle="$Resources:core,LabelTableWidth;"
       ToolTipDescription="$Resources:core,cui_stt_ButWidthHeightMenuTableWidthTooltip;"
       Sequence="30"
       TemplateAlias="o1"
    >
      <Unit
          Name="inch"
          MinimumValue="0.1"
          MaximumValue="200"
          DecimalDigits="1"
          Interval="0.1"
      >
        <UnitAbbreviation Value="in" />
        <UnitAbbreviation Value="&quot;"/>
      </Unit>
      <Unit
          Name="pixel"
          MinimumValue="1"
          MaximumValue="2000"
          DecimalDigits="0"
          Interval="5"
      >
        <UnitAbbreviation Value="px" />
      </Unit>
      <Unit
          Name="centimeter"
          MinimumValue="0.1"
          MaximumValue="500"
          DecimalDigits="1"
          Interval="0.5"
      >
        <UnitAbbreviation Value="cm" />
      </Unit>
      <Unit
          Name="percent"
          MinimumValue="1"
          MaximumValue="100"
          DecimalDigits="0"
          Interval="1"
      >
        <UnitAbbreviation Value="%" />
      </Unit>
    </Spinner>








