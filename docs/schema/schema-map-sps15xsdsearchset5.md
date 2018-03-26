---


manager: arnek
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0e7abdce-c9fd-ab9a-e629-7e024994db1b
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
<td align="left"># Schema map (SPS15XSDSearchSet5)</td>
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
class="keyword">schema\_Microsoft.Office.Server.Search.Query</span>.

**Last modified:** January 13, 2014

**Applies to**: SharePoint Server 2013

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:schema tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Query" xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:simpleType name="QueryAuthenticationType">
            <xs:restriction base="xs:string">
                <xs:enumeration value="NtAuthenticatedQuery" />
                <xs:enumeration value="PluggableAuthenticatedQuery" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="QueryAuthenticationType" type="tns:QueryAuthenticationType"></xs:element>
        <xs:simpleType name="KeywordInclusion">
            <xs:restriction base="xs:string">
                <xs:enumeration value="AllKeywords" />
                <xs:enumeration value="AnyKeyword" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="KeywordInclusion" type="tns:KeywordInclusion"></xs:element>
        <xs:simpleType name="AlertChangeType">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Discovered" />
                <xs:enumeration value="Modified" />
                <xs:enumeration value="DiscoveredOrModified" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="AlertChangeType" type="tns:AlertChangeType"></xs:element>
        <xs:simpleType name="ResubmitFlag"></xs:simpleType>
        <xs:element name="ResubmitFlag" type="tns:ResubmitFlag"></xs:element>
        <xs:simpleType name="SimilarType">
            <xs:restriction base="xs:string">
                <xs:enumeration value="None" />
                <xs:enumeration value="Find" />
                <xs:enumeration value="Refine" />
                <xs:enumeration value="Exclude" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="SimilarType" type="tns:SimilarType"></xs:element>
        <xs:simpleType name="SpellcheckMode">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Off" />
                <xs:enumeration value="Suggest" />
                <xs:enumeration value="On" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="SpellcheckMode" type="tns:SpellcheckMode"></xs:element>
        <xs:simpleType name="ResultType"></xs:simpleType>
        <xs:element name="ResultType" type="tns:ResultType"></xs:element>
        <xs:simpleType name="QueryHint"></xs:simpleType>
        <xs:element name="QueryHint" type="tns:QueryHint"></xs:element>
        <xs:simpleType name="SearchProvider">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Default" />
                <xs:enumeration value="SharepointSearch" />
                <xs:enumeration value="FASTSearch" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="SearchProvider" type="tns:SearchProvider"></xs:element>
        <xs:simpleType name="SortDirection">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Ascending" />
                <xs:enumeration value="Descending" />
                <xs:enumeration value="FQLFormula" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="SortDirection" type="tns:SortDirection"></xs:element>
        <xs:complexType name="ArrayOfReorderingRule">
            <xs:sequence>
                <xs:element name="ReorderingRule" type="tns:ReorderingRule" minOccurs="0" maxOccurs="unbounded"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="ArrayOfReorderingRule" type="tns:ArrayOfReorderingRule"></xs:element>
        <xs:complexType name="ReorderingRule">
            <xs:sequence>
                <xs:element name="Boost" type="xs:int" minOccurs="0"></xs:element>
                <xs:element name="MatchType" type="tns:ReorderingRuleMatchType" minOccurs="0"></xs:element>
                <xs:element name="MatchValue" type="xs:string" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="ReorderingRule" type="tns:ReorderingRule"></xs:element>
        <xs:simpleType name="ReorderingRuleMatchType">
            <xs:restriction base="xs:string">
                <xs:enumeration value="ResultContainsKeyword" />
                <xs:enumeration value="TitleContainsKeyword" />
                <xs:enumeration value="TitleMatchesKeyword" />
                <xs:enumeration value="UrlStartsWith" />
                <xs:enumeration value="UrlExactlyMatches" />
                <xs:enumeration value="ContentTypeIs" />
                <xs:enumeration value="FileExtensionMatches" />
                <xs:enumeration value="ResultHasTag" />
                <xs:enumeration value="ManualCondition" />
            </xs:restriction>
        </xs:simpleType>
        <xs:element name="ReorderingRuleMatchType" type="tns:ReorderingRuleMatchType"></xs:element>
    </xs:schema>








