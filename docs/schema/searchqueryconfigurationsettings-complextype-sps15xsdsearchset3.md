---


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 66da239e-98dd-a812-4041-ffc248561236
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
<td align="left"># SearchQueryConfigurationSettings complexType (SPS15XSDSearchSet3)</td>
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

**Last modified:** March 09, 2015


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Portability</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>schema_Microsoft.Office.Server.Search.Portability.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
## Elements and attributes class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="bestbets-element-searchqueryconfigurationsettings-complextypesps15xsdsearchset3.md">BestBets</a></p></td>
<td align="left"><p>q1:ArrayOfBestBet</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="defaultsourceid-element-searchqueryconfigurationsettings-complextypesps15xsdsear.md">DefaultSourceId</a></p></td>
<td align="left"><p>ser:guid</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="defaultsourceidset-element-searchqueryconfigurationsettings-complextypesps15xsds.md">DefaultSourceIdSet</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="deploytoparent-element-searchqueryconfigurationsettings-complextypesps15xsdsearc.md">DeployToParent</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="disableinheritanceonimport-element-searchqueryconfigurationsettings-complextypes.md">DisableInheritanceOnImport</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="queryrulegroups-element-searchqueryconfigurationsettings-complextypesps15xsdsear.md">QueryRuleGroups</a></p></td>
<td align="left"><p>q2:ArrayOfQueryRuleGroup</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="queryrules-element-searchqueryconfigurationsettings-complextypesps15xsdsearchset.md">QueryRules</a></p></td>
<td align="left"><p>q3:ArrayOfQueryRule</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="resulttypes-element-searchqueryconfigurationsettings-complextypesps15xsdsearchse.md">ResultTypes</a></p></td>
<td align="left"><p>q4:ArrayOfResultItemType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="sources-element-searchqueryconfigurationsettings-complextypesps15xsdsearchset3.md">Sources</a></p></td>
<td align="left"><p>q5:ArrayOfSource</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="usersegments-element-searchqueryconfigurationsettings-complextypesps15xsdsearchs.md">UserSegments</a></p></td>
<td align="left"><p>q6:ArrayOfUserSegment</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








