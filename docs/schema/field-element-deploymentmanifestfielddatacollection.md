---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0b17884d-95b4-4b23-b74c-07a6957ae14a
---

# Field Element 

(DeploymentManifest - FieldDataCollection)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents field values for the specified type instance.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
<xs:element name="Field" 
        type="DictionaryEntry" 
        minOccurs="0" maxOccurs="unbounded" 
/>

USAGE
<Fields>
        <Field
      Name="xs:string"
      Value="xs:string"
      Value2="xs:string"
      Id="Guid"
      Type="SPDictionaryEntryValueType"
      Access="SPDictionaryEntryAccess"
        />
</Fields></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- [DictionaryEntry](https://msdn.microsoft.com/EN-US/library/9kth4sbk)


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Literal name of the specified field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Representation of the field value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Value2**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p><span sdata="link"><a href="spdictionaryentryvaluetype-simple-type-deploymentmanifest.md">SPDictionaryEntryValueType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Data type of the field value. Must be a value type defined in the **SPDictionaryEntryValueType** simple type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Access**</p></td>
<td align="left"><p><span sdata="link"><a href="spdictionaryentryaccess-simple-type-deploymentmanifest.md">SPDictionaryEntryAccess Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies the allowable access modes for the field value. Must be a value defined in the **SPDictionaryEntryAccess</span> simple type: **ReadOnly</span> or **ReadWrite**.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.md">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)








