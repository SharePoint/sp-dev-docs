---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d8a429ff-0b95-405f-89f7-cf62fb886115
---

# DataSource Element (List Instance)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the data source that is used to provision the list instance.

## Definition

```XML
<DataSource>
  <Property />
</DataSource>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="property-element-list-instance.md">Property Element (List Instance)</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="listinstance-element-list-instance.md">ListInstance Element (List Instance)</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>

### Remarks

The **DataSource** element must have at least one child **Property** element whose **Name** parameter is set to "Service". If some middle tier service, other than Microsoft's Business Data Connectivity (BDC) service, is being used to bring external data to a SharePoint external list, the documentation of that other service must provide you with the name of the service (the value of the **Value** parameter of the **Property** element) and information on what other **Property** elements may be allowed or required as children of the **DataSource** element. If BDC is being used, use "Business Data Catalog" as the value of the **Value** parameter.

Also, if BDC is being used, you must have four other **Property** element children of the **DataSource** element whose **Name** attributes have the values shown in the following example.

```XML
    <DataSource>
          <Property Name="Service" Value="Business Data Catalog" />
          <Property Name="Entity" Value="Friendly name of external content type (entity)" />
          <Property Name="EntityNamespace" Value="Fully qualified namespace of the class that defines the external content type (entity)" />
          <Property Name="LobSystemInstance" Value="NameOfExternalDataSource" />
          <Property Name="SpecificFinder" Value="Name of method that reads a single item; for example ReadItem" />
    </DataSource>    
```

<br/>







