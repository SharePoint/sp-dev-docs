---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f1952ebe-19b3-1bcf-9880-0ef3013e101b
---

# Parameter element 

(coercionParametersType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Used to describe hidden input parameters for an activity that is used as the coercion. Also defines additional input values to be always added internally when an activity used as a coercion is inserted into the workflow. The Parameter element is of type [coercionParametersType](coercionparameterstype-complextype-action4.md).

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:element name="Parameter" minOccurs="0" maxOccurs="unbounded">
       <xs:complexType>
          <xs:all>
          <xs:element name="ActivityBody" minOccurs="1" maxOccurs="1">
             <xs:complexType>
               <xs:sequence>
                 <xs:element name="ActivityBody">
                 </xs:element>  
               </xs:sequence>
             </xs:complexType>
          </xs:element>  
          </xs:all>
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="Type" type="s:string" use="required" />
         <xs:attribute name="Value" type="s:string" />
       </xs:complexType>
    </xs:element>  
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

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
<td align="left"><p><a href="parameters-element-coercion-elementcoercions-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="coercionparameterstype-complextype-action4.md">coercionParametersType</a></p></td>
<td align="left"><p>Container for **Parameter** elements that includes descriptions of the parameters in **coercion** method signatures.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="activitybody-element-parameter-elementcoercionparameterstype-complextypeaction4.md">ActivityBody</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>Specifies the body of a custom action.</p></td>
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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Name of the activity parameter that is used as a coercion.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Data type of the parameter.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The value to be set for the activity parameter.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








