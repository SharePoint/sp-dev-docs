---


manager: arnek
ms.date: 3/9/2015
ms.audience: ITPro
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fc48b8f7-68e5-ff8c-dc0b-9a584248a54b
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
<td align="left"># SearchSchemaConfigurationSettings complexType (SPS15XSDSearchSet3)</td>
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

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
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
<td align="left"><p><a href="aliases-element-searchschemaconfigurationsettings-complextypesps15xsdsearchset3.htm">Aliases</a></p></td>
<td align="left"><p>q8:AliasInfoCollection</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="categoriesandcrawledproperties-element-searchschemaconfigurationsettings-complex.htm">CategoriesAndCrawledProperties</a></p></td>
<td align="left"><p>q9:ArrayOfKeyValueOfguidCrawledPropertyInfoCollectionaSYUqUE_P</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="crawledproperties-element-searchschemaconfigurationsettings-complextypesps15xsds.htm">CrawledProperties</a></p></td>
<td align="left"><p>q10:CrawledPropertyInfoCollection</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="managedproperties-element-searchschemaconfigurationsettings-complextypesps15xsds.htm">ManagedProperties</a></p></td>
<td align="left"><p>q11:ManagedPropertyInfoCollection</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="mappings-element-searchschemaconfigurationsettings-complextypesps15xsdsearchset3.htm">Mappings</a></p></td>
<td align="left"><p>q12:MappingInfoCollection</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="overrides-element-searchschemaconfigurationsettings-complextypesps15xsdsearchset.htm">Overrides</a></p></td>
<td align="left"><p>q13:OverrideInfoCollection</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








