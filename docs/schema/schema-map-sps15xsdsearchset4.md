---


manager: arnek
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a992fb73-66c2-44d4-9df8-45fcb0cc5970
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
<td align="left"># Schema map (SPS15XSDSearchSet4)</td>
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

This topic shows the schema definition for <span
class="keyword">schema\_Microsoft.Office.Server.Search.Query.Rules</span>.

**Last modified:** January 13, 2014

**Applies to**: SharePoint Server 2013*

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:schema tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query.Rules" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query.Rules" xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:simpleType name="LicenseType"></xs:simpleType>
        <xs:element name="LicenseType" type="tns:LicenseType"></xs:element>
        <xs:simpleType name="QueryActionEnableOnClickThroughOptions"></xs:simpleType>
        <xs:element name="QueryActionEnableOnClickThroughOptions" type="tns:QueryActionEnableOnClickThroughOptions"></xs:element>
        <xs:simpleType name="QueryTransformParentType">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Action" />
                <xs:enumeration value="UserDefined" />
                <xs:enumeration value="Source" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="QueryTransformParentType" type="tns:QueryTransformParentType"></xs:element>
        <xs:simpleType name="MatchingOptions"></xs:simpleType>
        <xs:element name="MatchingOptions" type="tns:MatchingOptions"></xs:element>
        <xs:simpleType name="BoundVariableOrigin">
            <xs:restriction base="xs:string">
                <xs:enumeration value="FullQuery" />
                <xs:enumeration value="MatchedTerms" />
                <xs:enumeration value="Remainder" />
                <xs:enumeration value="CaptureGroup" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="BoundVariableOrigin" type="tns:BoundVariableOrigin"></xs:element>
        <xs:simpleType name="GroupProcessingDirective">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Stop" />
                <xs:enumeration value="Continue" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="GroupProcessingDirective" type="tns:GroupProcessingDirective"></xs:element>
    </xs:schema>








