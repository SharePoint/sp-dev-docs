---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c6dc3108-1835-12a3-0403-9679247b4ac6
---

# ruleDesignerType complexType (Action4)

**Applies to**: SharePoint Server 2013

Base type for creating a [RuleDesigner element (defaultElementType complexType) (Action4)](ruledesigner-element-defaultelementtype-complextypeaction4.md).

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:complexType name="ruleDesignerType">
      <xs:sequence>
          <xs:element name="FieldBind" minOccurs="0" maxOccurs="unbounded">
              <xs:complexType>
                  <xs:choice>
                     <xs:element name="Option" minOccurs="0"  maxOccurs="unbounded">
                       <xs:attribute name="Name" type="s:string" use="required" />
                       <xs:attribute name="Value" type="s:string" use="required" />
                       <xs:attribute name="TypeFilter" type="s:string" />
                       <xs:attribute name="UnaryHides" type="s:string" />
                       </xs:element>  
                     <xs:element name="DataSourceRef" minOccurs="1" maxOccurs="unbounded">
                       <xs:attribute name="Ref" type="s:string" />
                     </xs:element>  
                  </xs:choice>
                  <xs:attribute name="Field" type="s:string" />
                  <xs:attribute name="Text" type="s:string" />
                  <xs:attribute name="Id" type="s:positiveInteger" use="required" />
                  <xs:attribute name="DesignerType" type="s:string" use="required" />
                  <xs:attribute name="OperatorTypeFrom" type="s:string" />
                  <xs:attribute name="TypeFrom" type="s:string" />
                  <xs:attribute name="Function" type="s:boolean" />
                  <xs:attribute name="Value" type="s:string" />
                  <xs:attribute name="EventCategory" type="s:string" />
                  <xs:attribute name="DisplayName" type="s:string" />
              </xs:complexType>
          </xs:element>  
      </xs:sequence>
         <xs:attribute name="Sentence" type="s:string" />
    </xs:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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
<td align="left"><p><a href="fieldbind-element-ruledesignertype-complextypeaction4.md">FieldBind</a></p></td>
<td align="left"><p>ruleDesignerType</p></td>
<td align="left"><p>Used to create a readable sentence in the workflow designer that describes a condition that needs to be evaluated or an activity that must be executed.</p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="30%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Sentence**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The sentence as it appears in the workflow designer user interface.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








