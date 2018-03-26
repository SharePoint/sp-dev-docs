---


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8c4106a9-2ca6-a114-94a2-2d3ac56f654c
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
<td align="left"># ManagedPropertyInfo complexType (SPS15XSDSearchSet2)</td>
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

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:complexType name="ManagedPropertyInfo">
        <xs:complexContent>
            <xs:extension base="tns:BaseInfo">
                <xs:sequence>
                    <xs:element name="Aliases" type="q13:ArrayOfstring" minOccurs="0"></xs:element>
                    <xs:element name="CompleteMatching" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="Context" type="xs:short" minOccurs="0"></xs:element>
                    <xs:element name="DeleteDisallowed" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="Description" type="xs:string" minOccurs="0"></xs:element>
                    <xs:element name="EnabledForScoping" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="EntityExtractorBitMap" type="xs:int" minOccurs="0"></xs:element>
                    <xs:element name="FullTextIndex" type="xs:string" minOccurs="0"></xs:element>
                    <xs:element name="HasMultipleValues" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="IndexOptions" type="xs:int" minOccurs="0"></xs:element>
                    <xs:element name="IsReadOnly" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="ManagedType" type="tns:ManagedDataType" minOccurs="0"></xs:element>
                    <xs:element name="MappedCrawledProperties" type="tns:ArrayOfCrawledPropertyInfo" minOccurs="0"></xs:element>
                    <xs:element name="MappingDisallowed" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="Pid" type="xs:int" minOccurs="0"></xs:element>
                    <xs:element name="Queryable" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="Refinable" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="RefinerConfiguration" type="tns:RefinerConfiguration" minOccurs="0"></xs:element>
                    <xs:element name="RemoveDuplicates" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="RespectPriority" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="Retrievable" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="SafeForAnonymous" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="Searchable" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="Sortable" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="SortableType" type="tns:SortableType" minOccurs="0"></xs:element>
                    <xs:element name="TokenNormalization" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="UpdateGroup" type="xs:string" minOccurs="0"></xs:element>
                </xs:sequence>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
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
<td align="left"><p><a href="aliases-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Aliases</a></p></td>
<td align="left"><p>q13:ArrayOfstring</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="completematching-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">CompleteMatching</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="context-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Context</a></p></td>
<td align="left"><p>xs:short</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="deletedisallowed-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">DeleteDisallowed</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="description-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Description</a></p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="enabledforscoping-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">EnabledForScoping</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="entityextractorbitmap-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">EntityExtractorBitMap</a></p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fulltextindex-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">FullTextIndex</a></p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="hasmultiplevalues-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">HasMultipleValues</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="indexoptions-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">IndexOptions</a></p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="isreadonly-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">IsReadOnly</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="managedtype-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">ManagedType</a></p></td>
<td align="left"><p>tns:ManagedDataType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="mappedcrawledproperties-element-managedpropertyinfo-complextypesps15xsdsearchset.htm">MappedCrawledProperties</a></p></td>
<td align="left"><p>tns:ArrayOfCrawledPropertyInfo</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="mappingdisallowed-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">MappingDisallowed</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="pid-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Pid</a></p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="queryable-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Queryable</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="refinable-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Refinable</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="refinerconfiguration-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">RefinerConfiguration</a></p></td>
<td align="left"><p>tns:RefinerConfiguration</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="removeduplicates-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">RemoveDuplicates</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="respectpriority-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">RespectPriority</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="retrievable-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Retrievable</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="safeforanonymous-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">SafeForAnonymous</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="searchable-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Searchable</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="sortable-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">Sortable</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="sortabletype-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">SortableType</a></p></td>
<td align="left"><p>tns:SortableType</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="tokennormalization-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">TokenNormalization</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="updategroup-element-managedpropertyinfo-complextypesps15xsdsearchset2.htm">UpdateGroup</a></p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








