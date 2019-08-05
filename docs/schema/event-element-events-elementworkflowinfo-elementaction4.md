---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: af057e04-856c-3f9d-e62b-e08242956d7a
---

# Event element 

(Events element) (WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Specifies a workflow event from among available workflow events. 

## Usage

```XML
    <events>
        <event />
    </events
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
    <xs:element name="Event" minOccurs="0" maxOccurs="unbounded">
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="DisplayName" type="s:string" use="required" />
         <xs:attribute name="EventGroup" type="s:string" use="required" />
         <xs:attribute name="Category" type="s:string" use="required" />
         <xs:attribute name="RankDefault" type="s:string" use="required" />
    </xs:element>  
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

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
<td align="left"><p><a href="events-element-workflowinfo-elementaction4.md">Events</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

None.

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
<td align="left"><p>**Category**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The category associated with the event; for example, **ListItemEvent** or **ProjectEvent**.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The name of the event as rendered in the user interface.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EventGroup**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The display name of the event group as rendered in the user interface; for example, **Project Web App Event**.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The programmatic name of the event; for example, **ItemAdded**, **ItemUpdated**. This value originates in the list of events supported by SharePoint Foundation and Project Server 2013.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RankDefault**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the sort order of the event when rendered in the user interface.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








