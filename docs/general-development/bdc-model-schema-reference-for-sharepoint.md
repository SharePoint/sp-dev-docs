---
title: BDC model schema reference for SharePoint
description: Contains reference documentation for the BDC model schema (BDCMetadata.xsd), which you can use to create external content types in SharePoint.
ms.date: 09/15/2021
ms.assetid: 979a5ffc-f033-4e72-b2d1-11d8cb1b294a
ms.localizationpriority: medium
---

# BDC model schema reference for SharePoint

Contains reference documentation for the BDC model schema (BDCMetadata.xsd), which you can use to create external content types in SharePoint.

## AccessControlEntry element

Contains an access control entry (ACE) that specifies access rights for the parent element.

See  [Business Connectivity Services security overview](/previous-versions/office/sharepoint-foundation-2010/ee661734(v=office.14)) to learn more about the Business Connectivity Services and security.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<AccessControlEntry Principal = "String"> </AccessControlEntry>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|Principal  |Required.  <br/> The name of the security principal that has this ACE.  <br/> Attribute type: **String** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Right Element in AccessControlEntry (BDCMetadata Schema)](../schema/right-element-in-accesscontrolentry-bdcmetadata-schema.md) |A **Right** element that specifies the permissions available to the security principal. |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [AccessControlList Element (BDCMetadata Schema)](../schema/accesscontrollist-element-bdcmetadata-schema.md) |The access control list (ACL) that contains this ACE.  |

## AccessControlList element

Specifies an access control list (ACL) for the parent element.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<AccessControlList></AccessControlList>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [AccessControlEntry Element in AccessControlList (BDCMetadata Schema)](../schema/accesscontrolentry-element-in-accesscontrollist-bdcmetadata-schema.md) |An access control entry (ACE).  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Model Element (BDCMetadata Schema)](../schema/model-element-bdcmetadata-schema.md) |A model that contains external content types in a business application.  |
| [LobSystem Element in LobSystems (BDCMetadata Schema)](../schema/lobsystem-element-in-lobsystems-bdcmetadata-schema.md) |The LobSystems contained inside the model.  |
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) |An external content type.  |
| [Method Element in Methods (BDCMetadata Schema)](../schema/method-element-in-methods-bdcmetadata-schema.md) |A method of an external content type.  |
| [Association Element in MethodInstances (BDCMetadata Schema)](../schema/association-element-in-methodinstances-bdcmetadata-schema.md) |An association.  |
| [MethodInstance Element in MethodInstances (BDCMetadata Schema)](../schema/methodinstance-element-in-methodinstances-bdcmetadata-schema.md) |A method instance of an external content type.  |

## Action element

Specifies an action supported by an external content type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

Actions bridge the gap between SharePoint and Office 2013 and an external system's user interface by providing a link back to the external system.

By default, the Business Data Connectivity (BDC) service provides actions such as **View Item**, **Edit Item**, and **Delete Item** after you model these operations in the BDC model. In addition to these default actions, you can create actions for other functionality you want to attach to your external content type. For example, you can use actions to perform simple actions, such as sending email messages to a customer from the Customer external content type or opening a customer's home page in a browser.

Actions travel with an external content type. That is, after you define an action for an external content type, the action appears everywhere you display that external content type—whether in an external list or Business Data web part or in an External Data column.

```XML
<Action Position = "Integer" IsOpenedInNewWindow = "Boolean" Url = "String" ImageUrl = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Action>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Position** |Required.  <br/> The suggested position of this action among the other actions of this external content type.  <br/> Attribute type: **Integer** |
|**IsOpenedInNewWindow** |Optional.  <br/> Specifies whether the results of executing an action are presented in a new user interface window.  <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|**Url** |Required.  <br/> The URL to go to when the action is invoked. The URL string is a .NET Framework format string. Each format specifier (for example, {0}) corresponds to an **Action** parameter. <br/> Attribute type: **String** |
|**ImageUrl** |Optional.  <br/> The absolute or relative path to the icon image for the action. The icon image should be 16 x 16 pixels.  <br/> Attribute type: **String** |
|**Name** |Required.  <br/> The name of this action.  <br/> Attribute type: **String** |
|**DefaultDisplayName** |Optional.  <br/> The default display name for this action.  <br/> Attribute type: **String** |
|**IsCached** |Optional.  <br/> Specifies whether this action is used frequently. This is used by the BDC client runtime to cache this action.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized names of the action.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the action.  |
| [ActionParameters Element in Action (BDCMetadata Schema)](../schema/actionparameters-element-in-action-bdcmetadata-schema.md) |The parameters of the action.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Actions Element in Entity (BDCMetadata Schema)](../schema/actions-element-in-entity-bdcmetadata-schema.md) |The list of actions of an external content type.  |

## ActionParameter element

Specifies the parameters of a URL-based action. It defines how to parameterize the URL of an action with **EntityInstance**-specific data.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

The URL attribute of a URL-based action can receive parameters by using the **ActionParameter** element.

> **Important:**
> **ActionParameters** can either represent identifier values, or values that correspond to **TypeDescriptors** in a **SpecificFinder** of the **Entity**. The **ActionParameter** represents an identifier value when the **IdOrdinal** property is present. The value of the property specifies the index of the identifier whose value this **ActionParameter** represents. If the **IdOrdinal** property is not specified, the **ActionParameter** represents a **TypeDescriptor**, and the **Name** attribute specifies which type descriptor is being represented. The **Name** attribute is specified as a **Dotted Path**.

The **ActionParameter** element accepts the following property.

> [!IMPORTANT]
> Properties are case-sensitive.

**Properties**

|**Property**|**Type**|**Description**|**Required.**|**Default Value**|**Limits/Accepted Values**|
|:-----|:-----|:-----|:-----|:-----|:-----|
|**IdOrdinal** |**System.Int32** |Specifies if the **ActionParameter** represents an identifier instead of a field. |Optional  |||

```XML
<ActionParameter Index = "Integer" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </ActionParameter>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Index** |Required.  <br/> An ordinal attribute that specifies the position of this **ActionParameter** among other **ActionParameters** in the URL. <br/> Attribute type: **Integer** |
|**Name** |Required.  <br/> The name of the **ActionParameter**.  <br/> Attribute type: **String** |
|**DefaultDisplayName** |Optional.  <br/> The default display name for the **ActionParameter**.  <br/> Attribute type: **String** |
|**IsCached** |Optional.  <br/> Specifies whether this **ActionParameter** is used frequently. This attribute is used by the BDC client runtime to cache this **Action**.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized display names for the **ActionParameter**.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the **ActionParameter**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [ActionParameters Element in Action (BDCMetadata Schema)](../schema/actionparameters-element-in-action-bdcmetadata-schema.md) |The **ActionParameters** element that contains this **ActionParameter**.  |

## ActionParameters element

Specifies a list of **ActionParameters** for an action.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<ActionParameters></ActionParameters>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None.

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [ActionParameter Element in ActionParameters (BDCMetadata Schema)](../schema/actionparameter-element-in-actionparameters-bdcmetadata-schema.md) |An **ActionParameter**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Action Element in Actions (BDCMetadata Schema)](../schema/action-element-in-actions-bdcmetadata-schema.md) |The **Action** that these **ActionParameters** belong to. |

## Actions element

Specifies a list of actions of an external content type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Actions></Actions>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Action Element in Actions (BDCMetadata Schema)](../schema/action-element-in-actions-bdcmetadata-schema.md) |An action of an external content type.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) |The external content type that these actions belong to.  |

## Association element

The Association element links related external content types within a system. For example, a customer is associated with a sales order in the AdventureWorks system: a customer makes sales orders. An Association holds pointers to the source and destination external content types and a pointer to the business logic (a **MethodInstance** object) that allows a client to get the destination external content type from the source external content type. The traversal of an **Association** is a method call on the external system.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

> [!IMPORTANT]
> Properties are case-sensitive.

**Properties**

|**Property**|**Type**|**Description**|**Required**|**Default Value**|**Limits/Accepted Values**|
|:-----|:-----|:-----|:-----|:-----|:-----|
|**HideOnProfilePage** |**System.Boolean** |Specifies whether the related external content type should be added to the profile page of the master external content type.  |Optional  |||

```XML
<Association Type = "String" Default = "Boolean" ReturnParameterName = "String" ReturnTypeDescriptorName = "String" ReturnTypeDescriptorLevel = "Integer" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Association>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** |Required.  <br/> The **MethodInstanceType** that specifies the type of the Association. <br/> The following table lists the possible values for this attribute.  <br/>         <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>AssociationNavigator</p></td><td><p>The **MethodInstance** is an **AssociationNavigator**.</p></td></tr><tr><td><p>Associator</p></td><td><p>The **MethodInstance** is an **Associator**.</p></td></tr><tr><td><p>Disassociator</p></td><td><p>The **MethodInstance** is a **Disassociator**.</p></td></tr><tr><td><p>**BulkAssociatedIdEnumerator**</p></td><td><p>The **MethodInstance** is a **BulkAssociatedIdEnumerator**.</p></td></tr><tr><td><p>**BulkAssociationNavigator**</p></td><td><p>The **MethodInstance** is a **BulkAssociationNavigator**.</p></td></tr></tbody></table>|
|Default  |Optional.  <br/> Specifies whether the Association is the default among all Associations sharing its type within the containing external content type. If set to **true**, the Association is the default among all Associations sharing its type within the containing external content type. If set to **false**, the Association isn't the default among all Associations sharing its type within the containing external content type.  <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|ReturnParameterName  |Optional.  <br/> The name of the parameter that contains the **ReturnTypeDescriptor** of the Association. The **Direction** attribute of the parameter must contain a value of either "Out", "InOut", or "Return". <br/> Attribute type: **String** |
|ReturnTypeDescriptorName  |Optional.  <br/> This has been deprecated. Use the **ReturnTypeDescriptorPath** instead. <br/> Attribute type: **String** |
|ReturnTypeDescriptorLevel  |Optional.  <br/> This has been deprecated. Use the **ReturnTypeDescriptorPath** instead. <br/> Attribute type: **Integer** |
|ReturnTypeDescriptorPath  |Optional.  <br/> The dotted path of the **TypeDescriptor** of the Association. <br/> Attribute type: **String** |
|Name  |Required.  <br/> The name of the Association.  <br/> Attribute type: **String** |
|DefaultDisplayName  |Optional.  <br/> The default display name for the Association.  <br/> Attribute type: **String** |
|IsCached  |Optional.  <br/> Specifies whether this Association is frequently used.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The **LocalizedDisplayNames** element specifies a list of localized names for the Association. |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The Properties element specifies the properties of the Association.  |
| [AccessControlList Element (BDCMetadata Schema)](../schema/accesscontrollist-element-bdcmetadata-schema.md) |The **AccessControlList** element specifies a set of access rights for the Association. |
| [SourceEntity Element in Association (BDCMetadata Schema)](../schema/sourceentity-element-in-association-bdcmetadata-schema.md) |The **SourceEntity** element specifies the source external content type in the association. |
| [DestinationEntity Element in Association (BDCMetadata Schema)](../schema/destinationentity-element-in-association-bdcmetadata-schema.md) |The **DestinationEntity** element specifies the destination external content type in the Association. |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [MethodInstances Element in Method (BDCMetadata Schema)](../schema/methodinstances-element-in-method-bdcmetadata-schema.md) |The **MethodInstances** element that contains the Association. |

## AssociationGroup element

Specifies an **AssociationGroup**. **AssociationGroup** is a construct that ties the related **AssociationMethods** together. For example, **GetOrdersForCustomer**, **GetCustomerForOrder**, and **AssociateCustomerToOrder** are all association methods that work on the same relationship between Customer and Order.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

 **AssociationGroup** must be defined on the Entity element that is the Destination of the **AssociationReferences** that aren't marked as **Reverse**, or the Source of the **AssociationReferences** that are marked as Reverse.

```XML
<AssociationGroup Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </AssociationGroup>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** |Required.  <br/> The name of the **AssociationGroup**.  <br/> Attribute type: **String** |
|**DefaultDisplayName** |Optional.  <br/> The default display name of the **AssociationGroup**.  <br/> Attribute type: **String** |
|**IsCached** |Optional.  <br/> Specifies whether the **AssociationGroup** is used frequently. <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized names of the **AssociationGroup**.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the **AssociationGroup**.  |
| [AssociationReference Element in AssociationGroup (BDCMetadata Schema)](../schema/associationreference-element-in-associationgroup-bdcmetadata-schema.md) |An **AssociationReference** of an **AssociationGroup**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [AssociationGroups Element in Entity (BDCMetadata Schema)](../schema/associationgroups-element-in-entity-bdcmetadata-schema.md) |The **AssociationGroups** element that contains this **AssociationGroup**.  |

## AssociationGroups element

Specifies a list of **AssociationGroup** elements.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<AssociationGroups></AssociationGroups>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [AssociationGroup Element in AssociationGroups (BDCMetadata Schema)](../schema/associationgroup-element-in-associationgroups-bdcmetadata-schema.md) |An **AssociationGroup**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) |The external content type that this **AssociationGroups** element is associated with. |

## AssociationReference element

Specifies an **AssociationReference** in an **AssociationGroup**.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<AssociationReference EntityNamespace = "String" EntityName = "String" AssociationName = "String" Reverse = "Boolean"> </AssociationReference>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|EntityNamespace  |Optional.  <br/> The namespace of the external content type where the **Association** is defined. If **EntityName** is specified, **EntityNamespace** is required. <br/> Attribute type: **String** |
|EntityName  |Optional.  <br/> The name of the external content type where the **Association** is defined. If **EntityNamespace** is specified, **EntityName** is required. <br/> Attribute type: **String** |
|AssociationName  |Required.  <br/> The name of the **Association**.  <br/> Attribute type: **String** |
|Reverse  |Optional.  <br/> Specifies that the referenced **Association** has its source and destination reversed. This would indicate the **Association** is working in the opposite direction compared to other associations in the same **AssociationGroup**. For example, if the **AssociationGroup** references an **Association** "GetOrdersForCustomer", returning Order items for the given Customer item, then the **AssociationGroup** is in the direction of Customer to Order. The other **AssociationReference**, referencing another association "GetCustomerForOrder", must be marked as reverse, because this association is in the direction of Order to Customer.  <br/> Default value: **false** <br/> Attribute type: **Boolean** |

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [AssociationGroup Element in AssociationGroups (BDCMetadata Schema)](../schema/associationgroup-element-in-associationgroups-bdcmetadata-schema.md) |The **AssociationGroup** that this **AssociationReference** belongs to. |

## ConvertType element

Specifies the rule to convert the data type of a data value into another data type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

The Convert element specifies the rule to convert the data type of a data value into another data type. When the rules are applied in order, this rule specifies the data type of the data value to be converted to the data type specified by the BDCType attribute. When the rules are applied in reverse order, this rule specifies the data type of the data value to be converted to the data type specified by the **LOBType** attribute. For example, this rule can specify converting a date value obtained from an external system, into a culture and locale sensitive string that will eventually be displayed to the user, and converting the updated value for that string back into the date that's compatible with the external system.

> **Caution:**
> **ConvertType** does not support non-Gregorian calendars for conversions between **System.String** and **System.DateTime**.

```XML
<ConvertType LOBType = "String" BDCType = "String"> </ConvertType>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|LOBType  |Required.  <br/> The data type to convert the data value into when the rules are applied in reverse order.  <br/> Attribute type: **String** |
|BDCType  |Required.  <br/> The data type to convert the data value into when the rules are applied in order.  <br/> Attribute type: **String** |
|LOBLocale  |Optional.  <br/> The locale of the data that is received from the external system.  |

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Interpretation Element in TypeDescriptor (BDCMetadata Schema)](../schema/interpretation-element-in-typedescriptor-bdcmetadata-schema.md) |The rules to apply to the data stored in the data structures that are represented by a **TypeDescriptor**.  |

## DefaultValue element

Represents a default value.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<DefaultValue MethodInstanceName = "String" Type = "String"> </DefaultValue>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**MethodInstanceName** |Required.  <br/> The name of the **MethodInstance** to which this DefaultValue applies. <br/> Attribute type: **String** |
|**Type** | Required. <br/>  The data type of the default value. <br/>  The following are the acceptable values for this attribute. <br/> **System.Int16** <br/> **System.Int32** <br/> **System.Int64** <br/> **System.Single** <br/> **System.Double** <br/> **System.Decimal** <br/> **System.Boolean** <br/> **System.Byte** <br/> **System.UInt16** <br/> **System.UInt32** <br/> **System.UInt64** <br/> **System.Guid** <br/> **System.String** <br/> **System.DateTime** <br/>  Any other serializable type (such as where `Type.IsSerializable == true`)  <br/>  Attribute type: **String** |

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [DefaultValues Element in TypeDescriptor (BDCMetadata Schema)](../schema/defaultvalues-element-in-typedescriptor-bdcmetadata-schema.md)||

## DefaultValues element

Specifies a list of **DefaultValues** of a **TypeDescriptor**.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<DefaultValues></DefaultValues>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [DefaultValue Element in DefaultValues (BDCMetadata Schema)](../schema/defaultvalue-element-in-defaultvalues-bdcmetadata-schema.md) |The default value of a **TypeDescriptor** for a **MethodInstance**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [TypeDescriptor Element (BDCMetadata Schema)](../schema/typedescriptor-element-bdcmetadata-schema.md) |The **TypeDescriptor** that these **DefaultValues** belong to. |

## DestinationEntity element

Specifies the destination external content type in the **Association**.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<DestinationEntity Namespace = "String" Name = "String"> </DestinationEntity>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Namespace** |Required.  <br/> The name of the entity namespace.  <br/> Attribute type: **String** |
|**Name** |Required.  <br/> The name of the destination entity.  <br/> Attribute type: **String** |

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Association Element in MethodInstances (BDCMetadata Schema)](../schema/association-element-in-methodinstances-bdcmetadata-schema.md)||

## Entities element

Specifies a list of external content types in an external system.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Entities></Entities>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) |An external content type in an external system.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [LobSystem Element in LobSystems (BDCMetadata Schema)](../schema/lobsystem-element-in-lobsystems-bdcmetadata-schema.md) |An external system.  |

## Entity element

Specifies an external content type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Entity Namespace = "String" Version = "String" EstimatedInstanceCount = "Integer" DefaultOperationMode = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Entity>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Namespace** |Required.  <br/> The namespace that this external content type belongs to.  <br/> Attribute type: **String** <br/> **Note**: The namespace shouldn't contain the asterisk special character " **\***".           |
|**Version** |Required.  <br/> The version number of this external content type.  <br/> Attribute type: **String** <br/> **Caution:** When the BDC model changes, you must increase the version number of the external content type. If the structure of an external content type changes, you should increase the major number. Examples of structural changes include adding a field to a **SpecificFinder** or changing an identifier field. If the change doesn't affect the structure of the external content type, for example, when adding a creator method, changing connection information, or when changing names of **LobSystems** and type descriptors, you should change the build number and revision number.          |
|**EstimatedInstanceCount** |Optional.  <br/> The estimated number of external items contained by the external system.  <br/> Default value: 10000  <br/> Attribute type: **Integer** |
|**DefaultOperationMode** |Optional.  <br/> Specifies the default behavior when interacting with the external system while creating, deleting, updating, or reading external items.  <br/> Default value: Default  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Online</p></td><td><p>Bypass the cached external items for all operations and interact with the external system directly.</p></td></tr><tr><td><p>Cached</p></td><td><p>Perform <b>Create</b>, <b>Read</b>, <b>Update</b>, and <b>Delete</b> operations directly against the cached external items. For <b>Read</b> operations, if the requested external items are available in the cache, use the external items in the cache. Otherwise, bypass the cache to obtain the external items from the external system, and put it in the cache for later use.</p></td></tr><tr><td><p>Offline</p></td><td><p>Perform <b>Create</b>, <b>Read</b>, <b>Update</b>, and <b>Delete</b> operations against only the cached external items.</p></td></tr><tr><td><p>Default</p></td><td><p>Use the System default behavior. This uses Cached mode if the environment supports caching external items.</p></td></tr></tbody></table>|
|Name  |Required.  <br/> The name of the external content type.  <br/> Attribute type: **String** <br/> **Note**: The name of an external content type shouldn't contain the asterisk special character " **\***".           |
|DefaultDisplayName  |Optional.  <br/> The default display name of the external content type.  <br/> Attribute type: **String** |
|IsCached  |Optional.  <br/> Specifies whether this external content type will be frequently used. If set to true, Business Data Connectivity (BDC) service will cache this external content type in memory.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized display names of this external content type.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of this external content type.  |
| [AccessControlList Element (BDCMetadata Schema)](../schema/accesscontrollist-element-bdcmetadata-schema.md) |The access control list (ACL) of this external content type.  |
| [Identifiers Element in Entity (BDCMetadata Schema)](../schema/identifiers-element-in-entity-bdcmetadata-schema.md) |The identifiers of the external content type.  |
| [Methods Element in Entity (BDCMetadata Schema)](../schema/methods-element-in-entity-bdcmetadata-schema.md) |The methods of the external content type.  |
| [AssociationGroups Element in Entity (BDCMetadata Schema)](../schema/associationgroups-element-in-entity-bdcmetadata-schema.md) |The association groups of the external content type.  |
| [Actions Element in Entity (BDCMetadata Schema)](../schema/actions-element-in-entity-bdcmetadata-schema.md) |The actions of the external content type.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Entities Element in LobSystem (BDCMetadata Schema)](../schema/entities-element-in-lobsystem-bdcmetadata-schema.md) |The list of external content types in this external system.  |

## FilterDescriptor element

Specifies a filter descriptor of a method.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<FilterDescriptor Type = "String" FilterField = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </FilterDescriptor>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|Type  |Required.  <br/> The type of the filter descriptor.  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Limit</p></td><td><p>Used while querying an external system and the value of which can be interpreted as a limit on the number of external items **EntityInstances** that are returned when the method that it belongs to is called.</p></td></tr><tr><td><p>PageNumber</p></td><td><p /></td></tr><tr><td><p>Wildcard</p></td><td><p>Used while querying an external system. Its value represents a pattern of regular and wildcard characters that is matched against the value of a particular field of the set of **EntityInstances**. The external system returns only those **EntityInstances** whose field values match the specified pattern.</p></td></tr><tr><td><p>UserContext</p></td><td><p>Used while querying an external system. Its value can be set automatically by any client application to the identity of the user who is calling the external system. This value can then be used by the external system to authorize and then filter the results returned.</p></td></tr><tr><td><p>UserCulture</p></td><td><p /></td></tr><tr><td><p>Username</p></td><td><p /></td></tr><tr><td><p>Password</p></td><td /></tr><tr><td><p>LastId</p></td><td /></tr><tr><td><p>SsoTicket</p></td><td /></tr><tr><td><p>UserProfile</p></td><td><p>Used while querying an external system. Its value can be obtained by examining the current user's profile. The external system can use its value to filter the results returned.</p></td></tr><tr><td><p>Comparison</p></td><td><p>Used while querying an external system. An external system can compare a **ComparisonFilter** value with the value of a particular field of a set of **EntityInstances** and only those **EntityInstances** where the field values pass the comparison test can be returned.</p></td></tr><tr><td><p>Timestamp</p></td><td /></tr><tr><td><p>Input</p></td><td><p>Used while calling an operation in an external system. An external system can use the value of an **InputFilter** as additional arguments for the operation.</p></td></tr><tr><td><p>Output</p></td><td><p>Used while calling an operation in an external system. Additional results of an operation that can't be captured by **ReturnTypeDescriptor** can be retrieved as a value of the **InputOutputFilter**.</p></td></tr><tr><td><p>InputOutput</p></td><td><p>Used while calling an operation in an external system. An external system can use the value of an **InputOutputFilter** as additional arguments for the operation, and additional results of an operation that can't be captured by **ReturnTypeDescriptor** can be retrieved as a value of the **InputOutputFilter**.</p></td></tr><tr><td><p>Batching</p></td><td /></tr><tr><td><p>BatchingTermination</p></td><td /></tr><tr><td><p>ActivityId</p></td><td><p>**ActivityId** is used when calling an operation on the external system. Its value is set to a GUID that represents the current operation context. If no such value is available, this filter generates a random GUID. On SharePoint Foundation 2010, this filter uses the **CorrelationID**.</p></td></tr></tbody></table>
|FilterField  |Optional.  <br/> Attribute type: **String** |
|Name  |Required.  <br/> The name of the filter descriptor.  <br/> Attribute type: **String** |
|DefaultDisplayName  |Optional.  <br/> The default display name of the filter descriptor.  <br/> Attribute type: **String** |
|IsCached  |Optional.  <br/> Specifies whether this filter descriptor is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches this filter descriptor in memory.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized display names of this filter descriptor.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of this filter descriptor.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [FilterDescriptors Element in Method (BDCMetadata Schema)](../schema/filterdescriptors-element-in-method-bdcmetadata-schema.md) |A list of filter descriptors of a method.  |

## FilterDescriptors element

Specifies a list of filter descriptors of a method.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<FilterDescriptors></FilterDescriptors>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [FilterDescriptor Element in FilterDescriptors (BDCMetadata Schema)](../schema/filterdescriptor-element-in-filterdescriptors-bdcmetadata-schema.md) |A filter descriptor.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Method Element in Methods (BDCMetadata Schema)](../schema/method-element-in-methods-bdcmetadata-schema.md) |The method this list of filter descriptors belongs to.  |

## Identifier element

Specifies an identifier of an external content type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

> [!NOTE]
>
> Business Data Connectivity (BDC) service enables the mapping of identifiers to fields with nullable data types. However, for primary identifiers, BDC will cause an error when the values of these identifiers are **null**.

```XML
<Identifier TypeName = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Identifier>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|TypeName  |Required.  <br/> The data type of the value that corresponds to the identifier.  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>System.Boolean</p></td><td><p>A bit.</p></td></tr><tr><td><p>System.Byte</p></td><td><p>A number ranging from 0 to 255 inclusive.</p></td></tr><tr><td><p>System.Char</p></td><td><p>A Unicode character.</p></td></tr><tr><td><p>System.DateTime</p></td><td><p>A date and time ranging from 12:00:00 midnight, January 1, 1 Anno Domini (Common Era) to 11:59:59 P.M. December 31, 9999 Anno Domini (Common Era) inclusive, in resolution of 100 nanoseconds.</p></td></tr><tr><td><p>System.Decimal</p></td><td><p>A number ranging from negative 79,228,162,514,264,337,593,543,950,335 to positive 79,228,162,514,264,337,593,543,950,335 inclusive.</p></td></tr><tr><td><p>System.Double</p></td><td><p>A double precision number ranging from negative 1.79769313486232e308 to positive 1.79769313486232e308 inclusive, and positive zero, negative zero, positive infinity, negative infinity, and not-a-number (NaN). </p></td></tr><tr><td><p>System.Guid</p></td><td><p>A GUID.</p></td></tr><tr><td><p>System.Int16</p></td><td><p>A number ranging from negative 32768 to positive 32767 inclusive.</p></td></tr><tr><td><p>System.Int32</p></td><td><p>A number ranging from 0 to 4,294,967,295 inclusive.</p></td></tr><tr><td><p>System.Int64</p></td><td><p>A number ranging from 0 to 18,446,744,073,709,551,615 inclusive.</p></td></tr><tr><td><p>System.SByte</p></td><td><p>A number ranging from negative 128 to positive 127 inclusive.</p></td></tr><tr><td><p>System.Single</p></td><td><p>A single-precision number ranging from negative 3.402823e38 to positive 3.402823e38 inclusive.</p></td></tr><tr><td><p>System.String</p></td><td><p>A string of Unicode text.</p></td></tr><tr><td><p>System.TimeSpan</p></td><td><p>A duration ranging from negative 10,675,199 days 2 hours 48 minutes 5 seconds 477 milliseconds 580 microseconds 800 nanoseconds to positive 10,675,199 days 2 hours 48 minutes 5 seconds 477 milliseconds 580 microseconds 800 nanoseconds inclusive, in resolution of 100 nanoseconds.</p></td></tr><tr><td><p>System.UInt16</p></td><td><p>A number ranging from 0 to 65535 inclusive.</p></td></tr><tr><td><p>System.UInt32</p></td><td><p>A number ranging from 0 to 4,294,967,295 inclusive.</p></td></tr><tr><td><p>System.UInt64</p></td><td><p>A number ranging from 0 to 18,446,744,709,551,615 inclusive.</p></td></tr></tbody></table>
|Name  |Required.  <br/> The name of the identifier.  <br/> Attribute type: **String** |
|DefaultDisplayName  |Optional.  <br/> The default display name of the identifier.  <br/> Attribute type: **String** |
|IsCached  |Optional.  <br/> Specifies whether this identifier is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches the identifier in memory.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized display names of the identifier.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the identifier.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Identifiers Element in Entity (BDCMetadata Schema)](../schema/identifiers-element-in-entity-bdcmetadata-schema.md) |A list of identifiers of an external content type.  |

## Identifiers element

Specifies a list of identifiers of an external content type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Identifiers></Identifiers>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Identifier Element in Identifiers (BDCMetadata Schema)](../schema/identifier-element-in-identifiers-bdcmetadata-schema.md) |Specifies an identifier.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) |The external content type that contains this list of identifiers.  |

## Interpretation element

Specifies the rules to apply to the data stored in the data structures represented by a **TypeDescriptor**. These rules are typically specified to change the data values returned by an external system to make it easier to represent them in the user interface. When the data value is obtained from the external system, the specified rules must be applied in the order they're specified in the **Interpretation** element. The first rule must be applied to the data value received from the external system; the consecutive rules apply to the data value that result from the application of the previous rule. When the data value is sent to external system, the specified rules must be applied in the reverse order they're specified in the **Interpretation** element. The first rule must be applied to the data value received from the user; the consecutive rules apply to the data value that result from the application of the previous rule.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Interpretation></Interpretation>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [ConvertType Element in Interpretation (BDCMetadata Schema)](../schema/converttype-element-in-interpretation-bdcmetadata-schema.md) |A **ConvertType** element that specifies the conversion of a data type to another data type. |
| [NormalizeDateTime Element in Interpretation (BDCMetadata Schema)](../schema/normalizedatetime-element-in-interpretation-bdcmetadata-schema.md) |A **NormalizeDateTime** element that specifies the conversion of the date and time representation of a value obtained from an external system into another representation. |
|NormalizeString  |A **NormalizeString** element that specifies the conversion of the string representation of a value obtained from an external system into another representation. |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [TypeDescriptor Element (BDCMetadata Schema)](../schema/typedescriptor-element-bdcmetadata-schema.md) |The **TypeDescriptor** element. |

## LobSystem element

Represents an external data source.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<LobSystem Type = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </LobSystem>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|Type  |The type of the **LobSystem**.  <br/> Required.  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Database</p></td><td><p>The represented external data source is a database.</p></td></tr><tr><td><p>DotNetAssembly</p></td><td><p>The represented external data source is a set of .NET Framework classes.</p></td></tr><tr><td><p>Wcf</p></td><td><p>The represented external data source is a WCF Service endpoint.</p></td></tr><tr><td><p>WebService</p></td><td><p>The represented external data source is a Web service. This has been deprecated, use WCF instead.</p></td></tr><tr><td><p>Custom</p></td><td><p>The represented external data source has a custom connector implemented to manage the connection and data transfer.</p></td></tr></tbody></table>|
|Name  |The name of the **LobSystem**.  <br/> Required.  <br/> Attribute type: **String** |
|DefaultDisplayName  |The default display name of the **LobSystem**.  <br/> Optional.  <br/> Attribute type: **String** |
|IsCached  |Specifies whether the **LobSystem** is frequently used. If frequently used, Business Data Connectivity (BDC) service caches the **LobSystem**.  <br/> Optional.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized names of the **LobSystem**.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |Specifies the properties of an **LobSystem**.  |
| [AccessControlList Element (BDCMetadata Schema)](../schema/accesscontrollist-element-bdcmetadata-schema.md) |Specifies the access control list (ACL) of an **LobSystem**.  |
| [Proxy Element in LobSystem (BDCMetadata Schema)](../schema/proxy-element-in-lobsystem-bdcmetadata-schema.md) |Specifies a user-provided proxy that's identical to the one that would be generated if this element wasn't present.  |
| [LobSystemInstances Element in LobSystem (BDCMetadata Schema)](../schema/lobsysteminstances-element-in-lobsystem-bdcmetadata-schema.md) |Specifies the external system instances for this external system.  |
| [Entities Element in LobSystem (BDCMetadata Schema)](../schema/entities-element-in-lobsystem-bdcmetadata-schema.md) |Specifies the external content types in this external system.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [LobSystems Element in Model (BDCMetadata Schema)](../schema/lobsystems-element-in-model-bdcmetadata-schema.md) |Specifies a list of external systems in this model.  |

## LobSystemInstance element

Specifies an external system instance.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<LobSystemInstance Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </LobSystemInstance>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|Name  |Required.  <br/> The name of the external system instance.  <br/> Attribute type: **String** |
|DefaultDisplayName  |Optional.  <br/> The default display name of the external system instance.  <br/> Attribute type: **String** |
|IsCached  |Optional.  <br/> Specifies whether this external system instance is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches the external system instance.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized names of this external system instance.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of this external system instance.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [LobSystemInstances Element in LobSystem (BDCMetadata Schema)](../schema/lobsysteminstances-element-in-lobsystem-bdcmetadata-schema.md) |A list of external system instances.  |

## LobSystemInstances element

Specifies a list of external system instances.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<LobSystemInstances></LobSystemInstances>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LobSystemInstance Element in LobSystemInstances (BDCMetadata Schema)](../schema/lobsysteminstance-element-in-lobsysteminstances-bdcmetadata-schema.md) |An external system instance.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [LobSystem Element in LobSystems (BDCMetadata Schema)](../schema/lobsystem-element-in-lobsystems-bdcmetadata-schema.md) |An external system.  |

## LobSystems element

Specifies a list of **LobSystem** elements of a model.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<LobSystems></LobSystems>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LobSystem Element in LobSystems (BDCMetadata Schema)](../schema/lobsystem-element-in-lobsystems-bdcmetadata-schema.md) |A **LobSystem** element that specifies an external system. |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Model Element (BDCMetadata Schema)](../schema/model-element-bdcmetadata-schema.md) |An application definition (BDC model).  |

## LocalizedDisplayName element

Specifies a localized name.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<LocalizedDisplayName LCID = "Integer"> </LocalizedDisplayName>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|LCID  |Required.  <br/> The language code identifier (LCID).  <br/> Attribute type: **Integer** |

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The **LocalizedDisplayNames** element that contains this **LocalizedDisplayName**.  |

## LocalizedDisplayNames element

Specifies a list of localized names of a **MetadataObject**.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<LocalizedDisplayNames></LocalizedDisplayNames>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayName Element in LocalizedDisplayNames (BDCMetadata Schema)](../schema/localizeddisplayname-element-in-localizeddisplaynames-bdcmetadata-schema.md) |A localized name.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Model Element (BDCMetadata Schema)](../schema/model-element-bdcmetadata-schema.md) ||
| [LobSystem Element in LobSystems (BDCMetadata Schema)](../schema/lobsystem-element-in-lobsystems-bdcmetadata-schema.md) ||
| [LobSystemInstance Element in LobSystemInstances (BDCMetadata Schema)](../schema/lobsysteminstance-element-in-lobsysteminstances-bdcmetadata-schema.md) ||
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) ||
| [Identifier Element in Identifiers (BDCMetadata Schema)](../schema/identifier-element-in-identifiers-bdcmetadata-schema.md) ||
| [Method Element in Methods (BDCMetadata Schema)](../schema/method-element-in-methods-bdcmetadata-schema.md) ||
| [FilterDescriptor Element in FilterDescriptors (BDCMetadata Schema)](../schema/filterdescriptor-element-in-filterdescriptors-bdcmetadata-schema.md) ||
| [Parameter Element in Parameters (BDCMetadata Schema)](../schema/parameter-element-in-parameters-bdcmetadata-schema.md) ||
| [TypeDescriptor Element (BDCMetadata Schema)](../schema/typedescriptor-element-bdcmetadata-schema.md) ||
| [Association Element in MethodInstances (BDCMetadata Schema)](../schema/association-element-in-methodinstances-bdcmetadata-schema.md) ||
| [MethodInstance Element in MethodInstances (BDCMetadata Schema)](../schema/methodinstance-element-in-methodinstances-bdcmetadata-schema.md) ||
| [AssociationGroup Element in AssociationGroups (BDCMetadata Schema)](../schema/associationgroup-element-in-associationgroups-bdcmetadata-schema.md) ||
| [Action Element in Actions (BDCMetadata Schema)](../schema/action-element-in-actions-bdcmetadata-schema.md) ||
| [ActionParameter Element in ActionParameters (BDCMetadata Schema)](../schema/actionparameter-element-in-actionparameters-bdcmetadata-schema.md) ||

## MetadataObject element

**Namespace:**

**Schema:**

```XML

```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

**Child elements**

**Parent element**

## Method element

Specifies a method of an external content type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Method IsStatic = "Boolean" LobName = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Method>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|IsStatic  |Optional.  <br/> Specifies whether the execution of this method requires an external item ( **EntityInstance**) to serve as a context for execution. If set to **true**, the method represents a static method and doesn't require a specific **EntityInstance** to provide context for execution. If set to **false**, the method represents an instance method and requires an **EntityInstance** to provide the context for execution. <br/> Default value: **true** <br/> Attribute type: **Boolean** |
|LobName  |Optional.  <br/> The name of the operation defined in the external system that is represented by this method.  <br/> Attribute type: **String** |
|Name  |Required.  <br/> The name of this method.  <br/> Attribute type: **String** |
|DefaultDisplayName  |Optional.  <br/> The default display name of the method.  <br/> Attribute type: **String** |
|IsCached  |Optional.  <br/> Specifies whether this method is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches this method in memory.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized display names of the method.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the method.  |
| [AccessControlList Element (BDCMetadata Schema)](../schema/accesscontrollist-element-bdcmetadata-schema.md) |The access control list (ACL) of this method.  |
| [FilterDescriptors Element in Method (BDCMetadata Schema)](../schema/filterdescriptors-element-in-method-bdcmetadata-schema.md) |The filter descriptors of the method.  |
| [Parameters Element in Method (BDCMetadata Schema)](../schema/parameters-element-in-method-bdcmetadata-schema.md) |The parameters of the method. A method can't have more than one return parameter.  |
| [MethodInstances Element in Method (BDCMetadata Schema)](../schema/methodinstances-element-in-method-bdcmetadata-schema.md) |The method instances of the method.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Methods Element in Entity (BDCMetadata Schema)](../schema/methods-element-in-entity-bdcmetadata-schema.md) |A list of methods of an external content type.  |

## MethodInstance element

Specifies a **MethodInstance**.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

The following two cases in a BDC model result in an  [InvalidOperationException](/dotnet/api/system.invalidoperationexception) at run time:

- Two **SpecificFinder** method instances that return the same set of fields.
- Two **SpecificFinder** method instances that have the same number of fields and that share the same number of fields with another method instance, such as a **Finder**.

```XML
<MethodInstance Type = "String" Default = "Boolean" ReturnParameterName = "String" ReturnTypeDescriptorName = "String" ReturnTypeDescriptorLevel = "Integer" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </MethodInstance>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** |Required.  <br/> Specifies the type of the **MethodInstance**.  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>Finder</p></td><td><p>A type of **MethodInstance** that can be called to return a collection of zero or more **EntityInstances** of a particular **Entity**. **Finder** input is defined by the **FilterDescriptors** that are contained in the **Method** that contains the **Finder**.</p></td></tr><tr><td><p>SpecificFinder</p></td><td><p>A type of **MethodInstance** that can be called to return a specific **EntityInstance** of a specific **Entity** given its **EntityInstanceId**. **SpecificFinder** input is defined and ordered by the **Identifiers** that are associated with the **Entity**.</p></td></tr><tr><td><p>GenericInvoker</p></td><td><p>A type of **MethodInstance** that can be called to perform a specific task in an external system. **GenericInvoker** input and output is specific to the **Method**.</p></td></tr><tr><td><p>IdEnumerator</p></td><td><p>A type of **MethodInstance** that can be called to return the **Field** values that represent the identity of **EntityInstances** of a specific **Entity**. The **IdEnumerator** input is defined by the **FilterDescriptors** that are contained in the method that contains the **IdEnumerator** to get the list of IDs, which are the unique keys for each entity that should be searchable. This method instance enables external data search in SharePoint Server.</p></td></tr><tr><td><p>ChangedIdEnumerator</p></td><td><p>A type of **MethodInstance** that can be called to retrieve **EntityInstanceIds** of **EntityInstances** that were modified in an external system after a specified time.</p></td></tr><tr><td><p>DeletedIdEnumerator</p></td><td><p>A type of **MethodInstance** that can be called to retrieve **EntityInstanceIds** of **EntityInstances** that were deleted from an external system after the specified time.</p></td></tr><tr><td><p>Scalar</p></td><td><p>A **MethodInstance** that returns a single value that you can invoke in the external system. For example, you can use a scalar method instance to get the total sales made to date from the external system. **Entities** have zero or more scalar method instances.</p></td></tr><tr><td><p>AccessChecker</p></td><td><p>A type of **MethodInstance** that can be called to retrieve the permissions that the calling security principal has for each of a collection of **EntityInstances** that are identified by the specified **EntityInstanceIds**.</p></td></tr><tr><td><p>Creator</p></td><td><p>A type of **MethodInstance** that can be called to create an **EntityInstance**. The set of fields that are required to create the **EntityInstance** is referred to as the Creator View.</p></td></tr><tr><td><p>Deleter</p></td><td><p>A type of **MethodInstance** that can be called to delete an **EntityInstance** with a specified **EntityInstanceId**.</p></td></tr><tr><td><p>Updater</p></td><td><p>A type of **MethodInstance** that can be called to update an **EntityInstance** identified by a specified **EntityInstanceId**. The set of fields that is required to update the **EntityInstance** is known as the Updater View. The set of fields whose values should be passed before they're changed is known as the PreUpdater View.</p></td></tr><tr><td><p>StreamAccessor</p></td><td><p>A type of **MethodInstance** that can be called to retrieve a field of an **EntityInstance** in the form of a data stream of bytes.</p></td></tr><tr><td><p>BinarySecurityDescriptorAccessor</p></td><td><p>A type of **MethodInstance** that can be called to retrieve a sequence of bytes from an external system. The system-specific byte sequence describes a set of security principals and the associated permissions that each security principal has for the **EntityInstance** identified by a specified **EntityInstanceId**.</p></td></tr><tr><td><p>BulkSpecificFinder</p></td><td><p>A type of **MethodInstance** that can be called to return a set of specific **EntityInstances** of an **Entity**, given a set of corresponding **EntityInstanceIds**.</p></td></tr><tr><td><p>BulkIdEnumerator</p></td><td><p>A type of **MethodInstance** that can be called to retrieve minimal information about the external items corresponding to the given identities. This method instance can be used to optimize synchronization of cached data. This method should return only the identities and version information of the external items that correspond to given **Identities**, which the calling application can compare with the local version to identify if anything has changed, and if so, request the changed external items to update the cached data.</p></td></tr></tbody></table>
|**Default** |Optional.  <br/> Specifies whether the **MethodInstance** is the default among all **MethodInstances** that share its type within the containing external content type ( **Entity**).  <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|**ReturnParameterName** |Optional.  <br/> The name of the **Parameter** that contains the **ReturnTypeDescriptor** of the **MethodInstance**. The **Direction** attribute of the **Parameter** must be a **ParameterDirection** attribute with a value of **Out**, **InOut**, or **Return**.  <br/> This attribute must be specified for all types of **MethodInstances** except **GenericInvoker**, **Creator**, **Deleter**, and **Updater**.  <br/> Attribute type: **String** |
|**ReturnTypeDescriptorLevel** |Optional.  <br/> This has been deprecated. Use the **ReturnTypeDescriptorPath** instead. <br/> Attribute type: **Integer** |
|**ReturnTypeDescriptorPath** |Optional.  <br/> The dotted path of the **TypeDescriptor** of the Association. <br/> Attribute type: **String** |
|**Name** |Required.  <br/> Specifies the name of the **MethodInstance**.  <br/> Attribute type: **String** |
|**DefaultDisplayName** |Optional.  <br/> Specifies the default display name for the **MethodInstance**.  <br/> Attribute type: **String** |
|**IsCached** |Optional.  <br/> Specifies whether the **MethodInstance** is used frequently. <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized display names of the **MethodInstance**.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the **MethodInstance**.  |
| [AccessControlList Element (BDCMetadata Schema)](../schema/accesscontrollist-element-bdcmetadata-schema.md) |The access control lists (ACLs) of the **MethodInstance**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [MethodInstances Element in Method (BDCMetadata Schema)](../schema/methodinstances-element-in-method-bdcmetadata-schema.md) |The **MethodInstances** element that contains this **MethodInstance**.  |

## MethodInstances element

Specifies a list of associations and method instances of a method.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<MethodInstances></MethodInstances>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Association Element in MethodInstances (BDCMetadata Schema)](../schema/association-element-in-methodinstances-bdcmetadata-schema.md) |An association.  |
| [MethodInstance Element in MethodInstances (BDCMetadata Schema)](../schema/methodinstance-element-in-methodinstances-bdcmetadata-schema.md) |A method instance.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Method Element in Methods (BDCMetadata Schema)](../schema/method-element-in-methods-bdcmetadata-schema.md) |The method that this method instance belongs to.  |

## Methods element

Specifies a list of methods of an external content type.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Methods></Methods>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Method Element in Methods (BDCMetadata Schema)](../schema/method-element-in-methods-bdcmetadata-schema.md) |Specifies a method.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) |The external content type that this list of methods belongs to.  |

## Model element

Specifies the root element that represents an application definition. Models define external content types that are contained by external applications.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Model Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Model>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|Name  |The name of the **Model**.  <br/> Required.  <br/> Attribute type: **String** |
|DefaultDisplayName  |The default display name of the **Model**.  <br/> Optional.  <br/> Attribute type: **String** |
|IsCached  |Specifies whether the **Model** is used frequently. If this is set to **true**, then the **Model** is cached by the Business Data Connectivity (BDC) service. <br/> Optional.  <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized names of the **Model**.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the **Model**.  |
| [AccessControlList Element (BDCMetadata Schema)](../schema/accesscontrollist-element-bdcmetadata-schema.md) |The access control list (ACL) of the **Model**.  |
| [LobSystems Element in Model (BDCMetadata Schema)](../schema/lobsystems-element-in-model-bdcmetadata-schema.md) |The **LobSystems** contained inside this **Model**.  |

**Parent element**

None

## NormalizeDateTime element

Specifies the rule used to convert the representation of a date and time value to another representation. For example, this rule can specify converting a value represented in Coordinated Universal Time (UTC) into a local time zone.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<NormalizeDateTime LobDateTimeMode = "String"> </NormalizeDateTime>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**LobDateTimeMode** |Required.  <br/> Specifies the conversion to apply.  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>UTC</p></td><td><p>The value that is received from the external system is UTC (Coordinated Universal Time). If the value received is **Local**, it's converted to UTC. BDC sends UTC to the external system.</p></td></tr><tr><td><p>Local</p></td><td><p>The value received from the external system is **Local**. If the value received from the external system is **Local**, then it will be converted to UTC. BDC sends **Local** to the external system.</p></td></tr><tr><td><p>Unspecified</p></td><td><p>The value sent by the external system has Unspecified kind. BDC assumes the value is in UTC by overwriting the kind to be UTC. BDC sends UTC values as Unspecified kind to the external system.</p></td></tr></tbody></table>
|

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Interpretation Element in TypeDescriptor (BDCMetadata Schema)](../schema/interpretation-element-in-typedescriptor-bdcmetadata-schema.md) |An **Interpretation** element that specifies the rules to apply to the data that is stored in the data structures represented by a **TypeDescriptor**.  |

## NormalizeString element

Specifies a parameter of a method.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

The following sections describe attributes, child elements, and parent elements.

**Attributes**

**Child elements**

**Parent element**

## Parameter element

Specifies a parameter of a method.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Parameter Direction = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Parameter>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|Direction  |Required.  <br/> The direction of the parameter.  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>In</p></td><td><p>The represented **Parameter** is an input parameter.</p></td></tr><tr><td><p>Out</p></td><td><p>The represented parameter is an output parameter.</p></td></tr><tr><td><p>InOut</p></td><td><p>The represented parameter is an input and output parameter. In C#, these correspond to "**ref**".</p></td></tr><tr><td><p>Return</p></td><td><p>The represented parameter is a return parameter.</p></td></tr></tbody></table>
|**Name** |Required.  <br/> The name of the parameter.  <br/> Attribute type: **String** |
|**DefaultDisplayName** |Optional.  <br/> The default display name of the parameter.  <br/> Attribute type: **String** |
|**IsCached** |Optional.  <br/> Specifies whether the **Parameter** is used frequently. <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized names of the parameter.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the parameter.  |
| [TypeDescriptor](/dotnet/api/system.componentmodel.typedescriptor) |The root type descriptor of the parameter.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Parameters Element in Method (BDCMetadata Schema)](../schema/parameters-element-in-method-bdcmetadata-schema.md) |The **Parameters** element that contains this parameter. |

## Parameters element

Specifies a list of parameters of a method.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Parameters></Parameters>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Parameter Element in Parameters (BDCMetadata Schema)](../schema/parameter-element-in-parameters-bdcmetadata-schema.md) |A parameter.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Method Element in Methods (BDCMetadata Schema)](../schema/method-element-in-methods-bdcmetadata-schema.md) |The method these parameters belong to.  |

## Properties element

Specifies a list of properties of a metadata object.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Properties></Properties>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [Property Element in Properties (BDCMetadata Schema)](../schema/property-element-in-properties-bdcmetadata-schema.md) |Specifies a property.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Model Element (BDCMetadata Schema)](../schema/model-element-bdcmetadata-schema.md) ||
| [LobSystem Element in LobSystems (BDCMetadata Schema)](../schema/lobsystem-element-in-lobsystems-bdcmetadata-schema.md) ||
| [LobSystemInstance Element in LobSystemInstances (BDCMetadata Schema)](../schema/lobsysteminstance-element-in-lobsysteminstances-bdcmetadata-schema.md) ||
| [Entity Element in Entities (BDCMetadata Schema)](../schema/entity-element-in-entities-bdcmetadata-schema.md) ||
| [Identifier Element in Identifiers (BDCMetadata Schema)](../schema/identifier-element-in-identifiers-bdcmetadata-schema.md) ||
| [Method Element in Methods (BDCMetadata Schema)](../schema/method-element-in-methods-bdcmetadata-schema.md) ||
| [FilterDescriptor Element in FilterDescriptors (BDCMetadata Schema)](../schema/filterdescriptor-element-in-filterdescriptors-bdcmetadata-schema.md) ||
| [Parameter Element in Parameters (BDCMetadata Schema)](../schema/parameter-element-in-parameters-bdcmetadata-schema.md) ||
| [TypeDescriptor](/dotnet/api/system.componentmodel.typedescriptor) ||
| [TypeDescriptor Element (BDCMetadata Schema)](../schema/typedescriptor-element-bdcmetadata-schema.md) ||
| [Association Element in MethodInstances (BDCMetadata Schema)](../schema/association-element-in-methodinstances-bdcmetadata-schema.md) ||
| [MethodInstance Element in MethodInstances (BDCMetadata Schema)](../schema/methodinstance-element-in-methodinstances-bdcmetadata-schema.md) ||
| [AssociationGroup Element in AssociationGroups (BDCMetadata Schema)](../schema/associationgroup-element-in-associationgroups-bdcmetadata-schema.md) ||
| [Action Element in Actions (BDCMetadata Schema)](../schema/action-element-in-actions-bdcmetadata-schema.md) ||
| [ActionParameter Element in ActionParameters (BDCMetadata Schema)](../schema/actionparameter-element-in-actionparameters-bdcmetadata-schema.md) ||

## Property element

Specifies the name and type of a property of a metadata object.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Property Name = "String" Type = "String"> </Property>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** |Required.  <br/> Specifies the name of the property.  <br/> Attribute type: **String** |
|**Type** |Required.  <br/> Specifies data type of the property.  <br/> Attribute type: **String** |

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The **Properties** element that contains this property. |

## Proxy element

Specifies a user-provided proxy that's identical to the one that would be generated if this element wasn't present. This is used to improve performance by removing the proxy generation overhead. To specify custom business logic that connects to an external system, .NET Connectivity Assembly type external systems must be used.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Proxy></Proxy>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [LobSystem Element in LobSystems (BDCMetadata Schema)](../schema/lobsystem-element-in-lobsystems-bdcmetadata-schema.md) |The **LobSystem** element that this proxy applies to. |

## Right element

Specifies a single access permission for an access control entry (ACE).

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<Right BdcRight = "String"> </Right>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|BdcRight  |Required.  <br/> The permission available to the security principal holding the right.  <br/> The following table lists the possible values for this attribute.  <br/> <table width="50%" cellspacing="2" cellpadding="5" frame="lhs"><thead><tr><th><p>Value</p></th><th><p>Description</p></th></tr></thead><tbody><tr><td><p>None</p></td><td><p>No permissions.</p></td></tr><tr><td><p>Execute</p></td><td><p>The represented security principal has the permission to invoke a **MethodInstance**.</p></td></tr><tr><td><p>Edit</p></td><td><p>The represented security principal has permission to change the attributes of a metadata object or its relationship to other metadata objects.</p></td></tr><tr><td><p>SetPermissions</p></td><td><p>The represented security principal has permission to change the set of permissions for a metadata object.</p></td></tr><tr><td><p>SelectableInClients</p></td><td><p>The represented security principal has permission to select the metadata object this right refers to. If a user doesn't have this permission, the metadata object shouldn't be selectable.</p></td></tr></tbody></table>
|

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [AccessControlEntry Element in AccessControlList (BDCMetadata Schema)](../schema/accesscontrolentry-element-in-accesscontrollist-bdcmetadata-schema.md) |The **AccessControlEntry** element that contains this right. |

## SourceEntity element

Specifies a source external content type of an **Association**.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<SourceEntity Namespace = "String" Name = "String"> </SourceEntity>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|Namespace  |Required.  <br/> The namespace of the external content type that is the source of the **Association** that contains this element. <br/> Attribute type: String  |
|Name  |Required.  <br/> The name of the external content type that is the source of the **Association** that contains this element. <br/> Attribute type: **String** |

**Child elements**

None

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [Association Element in MethodInstances (BDCMetadata Schema)](../schema/association-element-in-methodinstances-bdcmetadata-schema.md) |The **Association** that contains this element. |

## TypeDescriptor element

Specifies a **TypeDescriptor**.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<TypeDescriptor TypeName = "String" LobName = "String" IdentifierEntityNamespace = "String" IdentifierEntityName = "String" IdentifierName = "String" ForeignIdentifierAssociationName = "String" ForeignIdentifierAssociationEntityName = "String" ForeignIdentifierAssociationEntityNamespace = "String" AssociatedFilter = "String" IsCollection = "Boolean" ReadOnly = "Boolean" CreatorField = "Boolean" UpdaterField = "Boolean" PreUpdaterField = "Boolean" Significant = "Boolean" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </TypeDescriptor>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

|**Attribute**|**Description**|
|:-----|:-----|
|**TypeName** |Required.  <br/> The identifier of the data type of the data structure that is represented by the **TypeDescriptor**.  <br/> Attribute type: **String** |
|**LobName** |Optional.  <br/> The data structure that is represented by the **TypeDescriptor**. The default value of this attribute is the name of the **TypeDescriptor**. For example, a line-of-business (LOB) system data structure named "CN1A" can be represented by a **TypeDescriptor** with **Name** attribute equal to "Customer Name", if the **LobName** attribute of this **TypeDescriptor** is equal to "CN1A". <br/> Attribute type: **String** |
|**IdentifierEntityNamespace** |Optional.  <br/> The namespace of the external content type that contains the identifier that the **TypeDescriptor** references. If the **TypeDescriptor** doesn't reference an **Identifier**, this attribute must not be present. When this attribute is present, the **IdentifierEntityName** and **IdentifierName** attributes must also be present. The default value of this attribute is the namespace of the external content type that contains the method containing the parameter that contains the **TypeDescriptor**.  <br/> Attribute type: **String** |
|**IdentifierEntityName** |Optional.  <br/> The name of the **Entity** that contains the **Identifier** that the c **TypeDescriptor** references. If the **TypeDescriptor** doesn't reference an **Identifier**, this attribute must not be present. When this attribute is present, the **IdentifierEntityNamespace** and **IdentifierName** attributes must also be present. The default value of this attribute is the name of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**.  <br/> Attribute type: **String** |
|**IdentifierName** |Optional.  <br/> The name of the **Identifier** referenced by the **TypeDescriptor**. If the **TypeDescriptor** doesn't reference an **Identifier**, this attribute must not be present.  <br/> Attribute type: **String** |
|**ForeignIdentifierAssociationName** |Optional.  <br/> The name of the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** doesn't reference an **Association**, this attribute must not be present. When this attribute is present, the **IdentifierName** attribute must also be present. The **ForeignIdentifierAssociationName** attribute must be specified when the **Identifier** referenced by this **TypeDescriptor** is related to an **Association**, and the **Identifier** is contained by a source **Entity** of the **Association**.  <br/> Attribute type: **String** |
|**ForeignIdentifierAssociationEntityName** |Optional.  <br/> The name of the **Entity** that contains the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** doesn't reference an **Association**, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityNamespace** and **ForeignIdentifierAssociationName** attributes must also be present. The default value of this attribute is the name of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**.  <br/> Attribute type: **String** |
|**ForeignIdentifierAssociationEntityNamespace** |Optional.  <br/> The namespace of the **Entity** that contains the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** doesn't reference an **Association**, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityName** and **ForeignIdentifierAssociationName** attributes must also be present. The default value of this attribute is the namespace of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**.  <br/> Attribute type: **String** |
|**AssociatedFilter** |Optional.  <br/> The name of a **FilterDescriptor** that is associated with the **TypeDescriptor**. If the **TypeDescriptor** isn't associated with a **FilterDescriptor** this attribute must not be present. <br/> Attribute type: **String** |
|**IsCollection** |Optional.  <br/> Specifies whether the **TypeDescriptor** represents a single data structure or a collection of data structures. <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|**ReadOnly** |Optional.  <br/> Specifies whether the data stored by the data structure represented by the **TypeDescriptor** can be modified. This attribute must not be specified if the value of the **Direction** attribute of the **Parameter** that contains the **TypeDescriptor** is "In". <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|**CreatorField** |Optional.  <br/> Specifies whether the **TypeDescriptor** represents a field for **MethodInstances** of type **Creator** that are contained by the **Method** that contains the **Parameter** containing the **TypeDescriptor**.  <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|**UpdaterField** |Optional.  <br/> Specifies whether the **TypeDescriptor** represents a field for **MethodInstances** of type **Updater** that are contained by the **Method** that contains the **Parameter** containing the **TypeDescriptor**. When this attribute is specified, a **PreUpdaterField** attribute must not be specified. <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|**PreUpdaterField** |Optional.  <br/> Specifies whether data structure represented by the **TypeDescriptor** stores the latest data value received from the external system of a field for **MethodInstances** of type **Updater**. When this attribute is specified, a **UpdaterField** attribute must not be specified. <br/> Default value: **false** <br/> Attribute type: **Boolean** |
|**Significant** |Optional.  <br/> Specifies whether values stored by the data structure represented by this **TypeDescriptor** are included in calculating a hash code or comparing values stored in the data structures. For example, a **TypeDescriptor** representing a customer's last name is taken into account when determining whether a record has been modified, and so it's significant, whereas the **TypeDescriptor** representing the date on which the customer record is last modified typically isn't taken into account to determine whether a record has been modified, and so it isn't significant. <br/> Default value: **true** <br/> Attribute type: **Boolean** |
|**Name** |Required.  <br/> The name of the **TypeDescriptor**.  <br/> Attribute type: **String** <br/> **Note**: The name of a **TypeDescriptor** shouldn't contain the special characters for forward slash ("/"), period ("."), or opening bracket ("[").          |
|**DefaultDisplayName** |Optional.  <br/> The display name of the **TypeDescriptor**.  <br/> Attribute type: **String** |
|**IsCached** |Optional.  <br/> Specifies whether the **TypeDescriptor** is used frequently. <br/> Default value: **true** <br/> Attribute type: **Boolean** |

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](../schema/localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) |The localized names of the **TypeDescriptor**.  |
| [Properties Element in MetadataObject (BDCMetadata Schema)](../schema/properties-element-in-metadataobject-bdcmetadata-schema.md) |The properties of the **TypeDescriptor**.  <br/> When the **TypeDescriptor** is of type **System.String**, the **Properties** element can contain a **Property** of type **System.Int32** with the **Name** attribute set to **Size**. The value of the **Property** specifies the expected maximum string length of the value of the data structure described by this **TypeDescriptor**.  |
| [Interpretation Element in TypeDescriptor (BDCMetadata Schema)](../schema/interpretation-element-in-typedescriptor-bdcmetadata-schema.md) |The rules for the data stored by the data structure represented by the **TypeDescriptor**.  |
| [DefaultValues Element in TypeDescriptor (BDCMetadata Schema)](../schema/defaultvalues-element-in-typedescriptor-bdcmetadata-schema.md) |The default values of the **TypeDescriptor**.  |
| [TypeDescriptors Element in TypeDescriptor (BDCMetadata Schema)](../schema/typedescriptors-element-in-typedescriptor-bdcmetadata-schema.md) |The child **TypeDescriptors** of the **TypeDescriptor**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [TypeDescriptors Element in TypeDescriptor (BDCMetadata Schema)](../schema/typedescriptors-element-in-typedescriptor-bdcmetadata-schema.md)||

## TypeDescriptors element

Specifies a list of **TypeDescriptors** of a parent TypeDescriptor.

**Namespace:** `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema:** BDCMetadata

```XML
<TypeDescriptors></TypeDescriptors>
```

The following sections describe attributes, child elements, and parent elements.

**Attributes**

None

**Child elements**

|**Element**|**Description**|
|:-----|:-----|
| [TypeDescriptor Element (BDCMetadata Schema)](../schema/typedescriptor-element-bdcmetadata-schema.md) |A **TypeDescriptor**.  |

**Parent element**

|**Element**|**Description**|
|:-----|:-----|
| [TypeDescriptor Element (BDCMetadata Schema)](../schema/typedescriptor-element-bdcmetadata-schema.md) ||
| [TypeDescriptor](/dotnet/api/system.componentmodel.typedescriptor) ||

## See also

-  [Changes in the BDC model schema for SharePoint](changes-in-the-bdc-model-schema-for-sharepoint.md)
-  [External content types in SharePoint](external-content-types-in-sharepoint.md)
-  [Get started using the client object model with external data in SharePoint](get-started-using-the-client-object-model-with-external-data-in-sharepoint.md)
-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
-  [Business Connectivity Services programmers reference for SharePoint](business-connectivity-services-programmers-reference-for-sharepoint.md)
