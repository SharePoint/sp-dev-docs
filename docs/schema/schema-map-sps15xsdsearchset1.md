---


manager: arnek
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 59b3b404-6c3f-a87c-8b07-9660ec4967f5
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
<td align="left"># Schema map (SPS15XSDSearchSet1)</td>
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
class="keyword">schema\_Microsoft.Office.Server.Search.Administration.Query</span>.

**Last modified:** January 13, 2014

**Applies to**: SharePoint Server 2013

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:schema ser="http://schemas.microsoft.com/2003/10/Serialization/" tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration.Query" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration.Query" xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:complexType name="ArrayOfSource">
            <xs:sequence>
                <xs:element name="Source" type="tns:Source" minOccurs="0" maxOccurs="unbounded"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="ArrayOfSource" type="tns:ArrayOfSource"></xs:element>
        <xs:complexType name="Source">
            <xs:sequence>
                <xs:element name="Active" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="AuthInfo" type="q1:AuthenticationInformation" minOccurs="0"></xs:element>
                <xs:element name="BuiltIn" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="ConnectionTimeout" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="ConnectionUrlTemplate" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="CreatedDate" type="xs:dateTime" minOccurs="0"></xs:element>
                <xs:element name="Description" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="HasPermissionToReadAuthInfo" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="Id" type="ser:guid" minOccurs="0"></xs:element>
                <xs:element name="IndexOffset" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="LastModifiedDate" type="xs:dateTime" minOccurs="0"></xs:element>
                <xs:element name="MaximumResponseLength" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="Name" type="xs:string" minOccurs="0"></xs:element>
                <xs:element name="Owner" type="q2:SearchObjectOwner" minOccurs="0"></xs:element>
                <xs:element name="ProviderId" type="ser:guid" minOccurs="0"></xs:element>
                <xs:element name="QueryTransform" type="q3:QueryTransform" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="Source" type="tns:Source"></xs:element>
    </xs:schema>








