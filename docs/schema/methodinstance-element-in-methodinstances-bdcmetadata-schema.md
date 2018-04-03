---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.MethodInstance
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 577ff9d0-706b-be7d-af5b-883e137cada8
---

# MethodInstance Element in MethodInstances 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a **MethodInstance**.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

> [!NOTE] 
> The following two cases in a BDC model result in an
[InvalidOperationException](http://msdn.microsoft.com/library/frlrfSystemInvalidOperationExceptionClassTopic.aspx)
at run time:
> 
> - Two **SpecificFinder** method instances that return the same set of fields.
> - Two **SpecificFinder** method instances that have the same number of fields and that share the same number of fields with another method instance, such as a **Finder**.

```XML
<MethodInstance Type = "String" Default = "Boolean" ReturnParameterName = "String" ReturnTypeDescriptorName = "String" ReturnTypeDescriptorLevel = "Integer" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </MethodInstance>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required.</p>
<p>Specifies the type of the **MethodInstance**.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Finder</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to return a collection of zero or more **EntityInstances** of a particular **Entity**. **Finder** input is defined by the **FilterDescriptors** that are contained in the **Method** that contains the **Finder**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>SpecificFinder</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to return a specific **EntityInstance** of a specific **Entity** given its **EntityInstanceId**. **SpecificFinder** input is defined and ordered by the **Identifiers** that are associated with the **Entity**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>GenericInvoker</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to perform a specific task in an external system. **GenericInvoker** input and output is specific to the **Method**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>IdEnumerator</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to return the **Field** values that represent the identity of **EntityInstances** of a specific **Entity**. The **IdEnumerator** input is defined by the **FilterDescriptors** that are contained in the method that contains the **IdEnumerator** to get the list of IDs, which are the unique keys for each entity that should be searchable. This method instance enables external data search in Microsoft SharePoint Server 2010.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ChangedIdEnumerator</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to retrieve **EntityInstanceIds** of **EntityInstances** that were modified in an external system after a specified time.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DeletedIdEnumerator</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to retrieve **EntityInstanceIds** of **EntityInstances** that were deleted from an external system after the specified time.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Scalar</p></td>
<td align="left"><p>A **MethodInstance** that returns a single value that you can invoke in the external system. For example, you can use a scalar method instance to get the total sales made to date from the external system. **Entities** have zero or more scalar method instances.</p></td>
</tr>
<tr class="even">
<td align="left"><p>AccessChecker</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to retrieve the permissions that the calling security principal has for each of a collection of **EntityInstances** that are identified by the specified **EntityInstanceIds**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Creator</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to create an **EntityInstance**. The set of fields that are required to create the **EntityInstance** is referred to as the Creator View.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Deleter</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to delete an **EntityInstance** with a specified **EntityInstanceId**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Updater</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to update an **EntityInstance** identified by a specified **EntityInstanceId**. The set of fields that is required to update the **EntityInstance** is known as the Updater View. The set of fields whose values should be passed before they are changed is known as the PreUpdater View.</p></td>
</tr>
<tr class="even">
<td align="left"><p>StreamAccessor</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to retrieve a field of an **EntityInstance** in the form of a data stream of bytes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>BinarySecurityDescriptorAccessor</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to retrieve a sequence of bytes from an external system. The system-specific byte sequence describes a set of security principals and the associated permissions that each security principal has for the **EntityInstance** identified by a specified **EntityInstanceId**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>BulkSpecificFinder</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to return a set of specific **EntityInstances** of an **Entity**, given a set of corresponding **EntityInstanceIds**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>BulkIdEnumerator</p></td>
<td align="left"><p>A type of **MethodInstance** that can be called to retrieve minimal information about the external items corresponding to the given identities. This method instance can be used to optimize synchronization of cached data. This method should return only the identities and version information of the external items that correspond to given **Identities**, which the calling application can compare with the local version to identify if anything has changed, and if so, request the changed external items to update the cached data.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **MethodInstance** is the default among all **MethodInstances** that share its type within the containing external content type (**Entity**).</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReturnParameterName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the **Parameter** that contains the **ReturnTypeDescriptor** of the **MethodInstance**. The **Direction** attribute of the **Parameter** must be a **ParameterDirection** attribute with a value of **Out**, **InOut**, or **Return**.</p>
<p>This attribute must be specified for all types of **MethodInstances** except **GenericInvoker**, **Creator**, **Deleter**, and **Updater**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReturnTypeDescriptorLevel**</p></td>
<td align="left"><p>Optional.</p>
<p>This has been deprecated. Use the **ReturnTypeDescriptorPath** instead.</p>
<p>Attribute type: **Integer**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReturnTypeDescriptorPath**</p></td>
<td align="left"><p>Optional.</p>
<p>The dotted path of the **TypeDescriptor** of the Association.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>Specifies the name of the **MethodInstance**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies the default display name for the **MethodInstance**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **MethodInstance** is used frequently.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized display names of the **MethodInstance**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.md">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The properties of the **MethodInstance**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.md">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The access control lists (ACLs) of the **MethodInstance**.</p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="methodinstances-element-in-method-bdcmetadata-schema.md">MethodInstances Element in Method (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The **MethodInstances** element that contains this **MethodInstance**.</p></td>
</tr>
</tbody>
</table>








