---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0b044271-8af7-d772-c606-7d67109558ba
---

# AssemblyRedirects element 

(WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies transformations from one binary file to another binary file in a versioned binary file system so that the client has sufficient information to load the desired binary file.

## Usage

```XML
    <AssemblyRedirects>
        <AssemblyRedirect />
    </AssemblyRedirects>
```

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
    <xs:element name="AssemblyRedirects"   minOccurs="0"  maxOccurs="1" >
        <xs:complexType>
            <xs:sequence minOccurs="0" maxOccurs="unbounded">
                <xs:element name="AssemblyRedirect"  >
                    <xs:attribute name="From"   type="s:string"      use="required"  />
                    <xs:attribute name="To"   type="s:string"      use="required"  />
                </xs:element>  
           </xs:sequence>
        </xs:complexType>
    </xs:element>  
```

## Elements and attributes

### Parent elements

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
<td align="left"><p><a href="workflowinfo-element-action4.md">WorkflowInfo</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="assemblyredirect-element-assemblyredirects-elementworkflowinfo-elementaction4.md">AssemblyRedirect</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

None.








