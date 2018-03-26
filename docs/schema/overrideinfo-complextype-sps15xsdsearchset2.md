---


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 60c793ca-dd25-005a-f935-8725ad403ed7
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
<td align="left"># OverrideInfo complexType (SPS15XSDSearchSet2)</td>
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
    <xs:complexType name="OverrideInfo">
        <xs:complexContent>
            <xs:extension base="tns:BaseInfo">
                <xs:sequence>
                    <xs:element name="AliasesOverridden" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="ExtraProperties" type="xs:string" minOccurs="0"></xs:element>
                    <xs:element name="ManagedPid" type="xs:int" minOccurs="0"></xs:element>
                    <xs:element name="MappingsOverridden" type="xs:boolean" minOccurs="0"></xs:element>
                    <xs:element name="SchemaId" type="xs:int" minOccurs="0"></xs:element>
                    <xs:element name="TokenNormalization" type="xs:boolean" minOccurs="0"></xs:element>
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
<td align="left"><p><a href="aliasesoverridden-element-overrideinfo-complextypesps15xsdsearchset2.htm">AliasesOverridden</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="extraproperties-element-overrideinfo-complextypesps15xsdsearchset2.htm">ExtraProperties</a></p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="managedpid-element-overrideinfo-complextypesps15xsdsearchset2.htm">ManagedPid</a></p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="mappingsoverridden-element-overrideinfo-complextypesps15xsdsearchset2.htm">MappingsOverridden</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="schemaid-element-overrideinfo-complextypesps15xsdsearchset2.htm">SchemaId</a></p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="tokennormalization-element-overrideinfo-complextypesps15xsdsearchset2.htm">TokenNormalization</a></p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








