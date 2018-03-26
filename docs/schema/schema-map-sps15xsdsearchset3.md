---


manager: arnek
ms.date: 11/16/2014
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0b1ecfc3-a648-be87-6198-148a3946ebdd
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
<td align="left"># Schema map (SPS15XSDSearchSet3)</td>
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
class="keyword">schema\_Microsoft.Office.Server.Search.Portability</span>.

**Last modified:** January 13, 2014

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:schema ser="http://schemas.microsoft.com/2003/10/Serialization/" tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability" elementFormDefault="qualified" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability" xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:complexType name="SearchConfigurationSettings">
            <xs:sequence>
                <xs:element name="SearchQueryConfigurationSettings" type="tns:ArrayOfSearchQueryConfigurationSettings" minOccurs="0"></xs:element>
                <xs:element name="SearchRankingModelConfigurationSettings" type="tns:SearchRankingModelConfigurationSettings" minOccurs="0"></xs:element>
                <xs:element name="SearchSchemaConfigurationSettings" type="tns:SearchSchemaConfigurationSettings" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="SearchConfigurationSettings" type="tns:SearchConfigurationSettings"></xs:element>
        <xs:complexType name="ArrayOfSearchQueryConfigurationSettings">
            <xs:sequence>
                <xs:element name="SearchQueryConfigurationSettings" type="tns:SearchQueryConfigurationSettings" minOccurs="0" maxOccurs="unbounded"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="ArrayOfSearchQueryConfigurationSettings" type="tns:ArrayOfSearchQueryConfigurationSettings"></xs:element>
        <xs:complexType name="SearchQueryConfigurationSettings">
            <xs:sequence>
                <xs:element name="BestBets" type="q1:ArrayOfBestBet" minOccurs="0"></xs:element>
                <xs:element name="DefaultSourceId" type="ser:guid" minOccurs="0"></xs:element>
                <xs:element name="DefaultSourceIdSet" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="DeployToParent" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="DisableInheritanceOnImport" type="xs:boolean" minOccurs="0"></xs:element>
                <xs:element name="QueryRuleGroups" type="q2:ArrayOfQueryRuleGroup" minOccurs="0"></xs:element>
                <xs:element name="QueryRules" type="q3:ArrayOfQueryRule" minOccurs="0"></xs:element>
                <xs:element name="ResultTypes" type="q4:ArrayOfResultItemType" minOccurs="0"></xs:element>
                <xs:element name="Sources" type="q5:ArrayOfSource" minOccurs="0"></xs:element>
                <xs:element name="UserSegments" type="q6:ArrayOfUserSegment" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="SearchQueryConfigurationSettings" type="tns:SearchQueryConfigurationSettings"></xs:element>
        <xs:complexType name="SearchRankingModelConfigurationSettings">
            <xs:sequence>
                <xs:element name="RankingModels" type="q7:ArrayOfstring" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="SearchRankingModelConfigurationSettings" type="tns:SearchRankingModelConfigurationSettings"></xs:element>
        <xs:complexType name="SearchSchemaConfigurationSettings">
            <xs:sequence>
                <xs:element name="Aliases" type="q8:AliasInfoCollection" minOccurs="0"></xs:element>
                <xs:element name="CategoriesAndCrawledProperties" type="q9:ArrayOfKeyValueOfguidCrawledPropertyInfoCollectionaSYUqUE_P" minOccurs="0"></xs:element>
                <xs:element name="CrawledProperties" type="q10:CrawledPropertyInfoCollection" minOccurs="0"></xs:element>
                <xs:element name="ManagedProperties" type="q11:ManagedPropertyInfoCollection" minOccurs="0"></xs:element>
                <xs:element name="Mappings" type="q12:MappingInfoCollection" minOccurs="0"></xs:element>
                <xs:element name="Overrides" type="q13:OverrideInfoCollection" minOccurs="0"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:element name="SearchSchemaConfigurationSettings" type="tns:SearchSchemaConfigurationSettings"></xs:element>
    </xs:schema>








