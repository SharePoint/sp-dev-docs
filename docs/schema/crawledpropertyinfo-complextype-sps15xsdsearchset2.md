---


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6a4d1072-03d8-3141-d6d9-6a384c2795b8
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
<td align="left"># CrawledPropertyInfo complexType (SPS15XSDSearchSet2)</td>
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
<td align="left"><p>http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search.Administration</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>schema_Microsoft.Office.Server.Search.Administration.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>tns:BaseInfo</p></td>
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
    <xs:complexType name="CrawledPropertyInfo">
        <xs:complexContent>
            <xs:extension base="tns:BaseInfo">
                <xs:sequence>
                    <xs:element name="CategoryName" type="xs:string" minOccurs="0"></xs:element>
                    <xs:element name="IsMappedToContents" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="IsNameEnum" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="MappedManagedProperties" type="tns:ArrayOfManagedPropertyInfo" minOccurs="0"></xs:element>
                    <xs:element name="Propset" type="ser:guid" minOccurs="0"></xs:element>
                    <xs:element name="Samples" type="q12:ArrayOfstring" minOccurs="0"></xs:element>
                    <xs:element name="SchemaId" type="xs:int" minOccurs="0"></xs:element>
                </xs:sequence>
            </xs:extension>
        </xs:complexContent>
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
<td align="left"><p><a href="categoryname-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md">CategoryName</a></p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ismappedtocontents-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md">IsMappedToContents</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="isnameenum-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md">IsNameEnum</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="mappedmanagedproperties-element-crawledpropertyinfo-complextypesps15xsdsearchset.md">MappedManagedProperties</a></p></td>
<td align="left"><p>tns:ArrayOfManagedPropertyInfo</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="propset-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md">Propset</a></p></td>
<td align="left"><p>ser:guid</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="samples-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md">Samples</a></p></td>
<td align="left"><p>q12:ArrayOfstring</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="schemaid-element-crawledpropertyinfo-complextypesps15xsdsearchset2.md">SchemaId</a></p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








