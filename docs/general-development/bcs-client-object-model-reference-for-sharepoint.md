---
title: BCS client object model reference for SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: fe7d12a3-6ea9-47f9-b69e-f66da9e661dc
---



# BCS client object model reference for SharePoint 2013

  
    
    
![Class libraries and references](../../images/mod_icon_badge_reference.png)
  
    
    

  
    
    

  
    
    
Learn about the objects that are available for creating client-side scripts using the SharePoint 2013 client object model to access external data exposed by Business Connectivity Services (BCS).
The following objects are available for creating client-side scripts using the SharePoint 2013 client object model to access external data that is exposed by Business Connectivity Services (BCS). The BCS object model components that are exposed to the client object model are located in Microsoft.SharePoint.Client.dll.
  
    
    


## Entity object
<a name="bkmk_Entity"> </a>

The **Entity** object essentially represents a table in a database. The methods and properties presented here show the objects that can be manipulated through the use of the client code library. Each of these calls maps directly to a server object model call. However, they are callable by a detached client, such as in a web browser using JavaScript.
  
    
    

**Methods**


|**Methods**|**Method signature**|**Description**|
|:-----|:-----|:-----|
|**Create** <br/> | `Identity Create(FieldValueDictionary fieldValues, LobSystemInstance lobSystemInstanceName)` <br/> ||
|**FindSpecificDefault** <br/> | `EntityInstance FindSpecificDefault(Identity identity, LobSystemInstance lobSystemInstanceName)` <br/> ||
|**FindspecificByBdcIDDefault** <br/> | `EntityInstance FindSpecific(Identity identity, string specificFinderName, LobSystemInstance lobSystemInstanceName)` <br/> ||
|**FindSpecificByBdcID** <br/> | `EntityInstance FindSpecificByBdcIDDefault(string BdcIdentity, LobSystemInstance lobSystemInstanceName)` <br/> ||
|**GetCreatorView** <br/> | `EntityInstance FindSpecificByBdcID(string BdcIdentity, string specificFinderName,LobSystemInstance LobSystemInstanceName)` <br/> ||
|**GetDefaultSpecificFinderView** <br/> | `View GetCreatorView(string methodInstanceName)` <br/> ||
|**GetSpecificFinderView_Client** <br/> | `View GetDefaultSpecificFinderView()` <br/> ||
|**GetUpdaterView_Client** <br/> | `View GetSpecificFinderView_Client( string specificFinderName)` <br/> ||
|**GetIdentifiers** <br/> | `View GetUpdaterView_Client(string updaterName)` <br/> ||
|**GetIdentifiers()** <br/> |||
   

**Properties**


|**Property**|**Description**|
|:-----|:-----|
| `long EstimatedInstanceCount { get; }` <br/> |Gets the number of expected external items of this external content type.  <br/> |
| `string Name { get; }` <br/> |Gets the name of the metadata object.  <br/> |
| `string Namespace { get; }` <br/> |Gets the namespace of the given data class.  <br/> |
| `int GetIdentifierCount()` <br/> ||
   

## EntityInstance method
<a name="bkmk_EntityInstance"> </a>


**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.Runtime** <br/> |**SP.BusinessData.Runtime** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|**Delete** <br/> |void  <br/> |Deletes the External Item.  <br/> |
|**FromXml** <br/> |void  <br/> |Sets the values in this dictionary from specified XML.  <br/> **Method signature**          `FromXml(string xml)` <br/> |
|**GetIdentity** <br/> |Identity  <br/> |Gets the identity of this External Item.  <br/> |
|**Delete** <br/> |void  <br/> |Deletes the External Item.  <br/> |
|**ToXml** <br/> |string  <br/> |Retrieves the values in XML format.  <br/> |
|**Update** <br/> |void  <br/> |Submits the changes made to the External Item.  <br/> |
   

  
    
    

**Properties**


|**Property**|**Return type**|**Description**|
|:-----|:-----|:-----|
| `this[string fieldDotNotation] { get; set; }` <br/> |Object  <br/> |Gets or sets the value of the field referred to by the dot notation.  <br/> |
| `RelatedSpecificFinderName { get; }` <br/> |string  <br/> ||
   

## EntityView method
<a name="bkmk_entityview"> </a>

Specifies a customized view of the **Entity** data
  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.MetadataModel** <br/> |**SP.BusinessData** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|**GetDefaultValues_Client()** <br/> |**FieldValueDictionary** <br/> |Gets a field value dictionary that contains the default values for this view.  <br/> |
|**GetXmlSchema()** <br/> |**string** <br/> |Gets the XML Schema of the view.  <br/> |
|**GetType(string fieldDotNotation)** <br/> |**string** <br/> |Gets the type of the specified field.  <br/> |
|**GetType(string fieldDotNotation)** <br/> |**TypeDescriptor** <br/> |Gets the **TypeDescriptor** object that corresponds to the given dot notation. <br/> |
   

**Properties**


|**Property**|**Return type**|**Description**|
|:-----|:-----|:-----|
| `Fields { get; }` <br/> |**FieldCollection** <br/> |Gets the collection of fields in the view.  <br/> |
| `Name { get; }` <br/> |**string** <br/> |Gets the name of this **View** object <br/> |
| `RelatedSpecificFinderName { get; }` <br/> |**string** <br/> |Retrieves the name of the specific finder **MethodInstance** that this view is tied to. <br/> |
   

## LobSystem method
<a name="bkmk_LobSystem"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.MetadataModel** <br/> |**SP.BusinessData** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|**GetLobSystemInstances()** <br/> |**void** <br/> |Gives the list of LOB system instances.  <br/> |
|**Name** <br/> |**void** <br/> |Gets the name of the **LobSystem**.  <br/> |
   

**Properties**


|**Property**|**Description**|
|:-----|:-----|
|None.  <br/> ||
   

## LobSystemInstance method
<a name="bkmk_LobSystemInstance"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.MetadataModel** <br/> |**SP.BusinessData** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|None.  <br/> |**void** <br/> ||
   

**Properties**


|**Property**|**Description**|
|:-----|:-----|
|None.  <br/> ||
   

## Identifier method
<a name="bkmk_Identifier"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.MetadataModel** <br/> |**SP.BusinessData** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|**ContainsLocalizedDisplayName** <br/> |**bool** <br/> |Determines whether the metadata object contains localized display name.  <br/> |
|**GetDefaultDisplayName** <br/> |**string** <br/> |Returns the default display name.  <br/> |
|**GetLocalizedDisplayName** <br/> |**string** <br/> |Returns the localized display name.  <br/> |
   

**Properties**


|**Property**|**Return type**|**Description**|
|:-----|:-----|:-----|
| `IdentifierType {get;}` <br/> |**string** <br/> |Returns the type of identifier.  <br/> |
| `Name {get;}` <br/> |**string** <br/> |Gets the name of the identifier.  <br/> |
   

## IdentifierCollection method
<a name="bkmk_IdentifierCollection"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.MetadataModel.Collections** <br/> |**SP.BusinessData.Collections** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|None.  <br/> |**void** <br/> ||
   

**Properties**


|**Property**|**Description**|
|:-----|:-----|
|None.  <br/> ||
   

## Identity method
<a name="bkmk_Identity"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.Runtime** <br/> |**SP.BusinessData.Runtime** <br/> |
   

**Constructor**


|**Constructor**|**Description**|
|:-----|:-----|
| `public Identity (Object[] identifierValues)` <br/> |Constructs a new instance of the class by using an array of identifier values.  <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|**Serialize** <br/> |**string** <br/> |Gets a string representation of the identity.  <br/> |
   

**Properties**


|**Property**|**Return type**|**Description**|
|:-----|:-----|:-----|
| `IdentifierCount { get; }` <br/> |**int** <br/> |Returns the number of identifiers.  <br/> |
| `IsTemporary { get; }` <br/> |**bool** <br/> |Checks whether the identity is temporary.  <br/> |
| `this[int identifierIndex] { get; }` <br/> |**Object** <br/> |Retrieves the element at the given index. CSOM does not support int-based indexing. String-based accessor implemented for the same.  <br/> |
| `TemporaryId { get; }` <br/> |**Guid** <br/> |Returns the temporary part of the identity.  <br/> |
   

## FieldValueDictionary method
<a name="bkmk_FieldValueDictionary"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.Runtime** <br/> |**SP.BusinessData.Runtime** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|**FromXml** <br/> |**void** <br/> |Sets the values in this dictionary from specified XML.  <br/> |
|**GetCollectionSize** <br/> |int  <br/> |Returns the size of the collection that the dot notation refers to.  <br/> |
|**ToXml** <br/> |string  <br/> |Retrieves the values in XML format.  <br/> |
   

**Properties**


|**Property**|**Description**|
|:-----|:-----|
| `Object this[string fieldDotNotation] { get; set; }` <br/> |Gets or sets the value of the field referred to by the dot notation.  <br/> |
   

## EntityFieldCollection method
<a name="bkmk_EntityFieldCollection"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.Runtime** <br/> |**SP.BusinessData.Runtime** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|None.  <br/> |**void** <br/> ||
   

**Properties**


|**Property**|**Description**|
|:-----|:-----|
|None.  <br/> ||
   

## EntityField method
<a name="bkmk_Entityfield"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.Runtime** <br/> |**SP.BusinessData.Runtime** <br/> |
   

**Methods**


|**Method**|**Return type**|**Description**|
|:-----|:-----|:-----|
|None.  <br/> |void  <br/> ||
   

**Properties**


|**Property**|**Return type**|**Read Only**|**Description**|
|:-----|:-----|:-----|:-----|
|**ContainsLocalizedDisplayName** <br/> |**Boolean** <br/> |Yes  <br/> |Determines whether the field contains a localized display name.  <br/> |
|**DefaultDisplayName** <br/> |**string** <br/> |Yes  <br/> |Retrieves the default display name of the Field.  <br/> |
|**GetLocalizedDisplayName** <br/> |**string** <br/> ||Retrieves the localized display name of the Field.  <br/> |
|**Name** <br/> |**string** <br/> |Yes  <br/> |Retrieves the name of the Field.  <br/> |
   

## TypeDescriptor class
<a name="bkmk_TypeDescriptor"> </a>


  
    
    

**Namespaces**


|**Managed**|**JavaScript**|
|:-----|:-----|
|**Microsoft.BusinessData.MetadataModel** <br/> |**SP.BusinessData** <br/> |
   

**Methods**


|**Method**|**Return type**|**Read Only**|**Description**|
|:-----|:-----|:-----|:-----|
|**ContainsLocalizedDisplayName()** <br/> |**Boolean** <br/> |Yes  <br/> |Determines whether the type descriptor contains a localized display name.  <br/> |
|**GetLocalizedDisplayName()** <br/> |**string** <br/> |Yes  <br/> |Returns the localized display name.  <br/> |
|**GetDefaultDisplayName()** <br/> |**string** <br/> ||Returns the default display name.  <br/> |
   

**Properties**


|**Property**|**Return type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |string  <br/> |Retrieves the name of the Field.  <br/> |
|**TypeName** <br/> |string  <br/> |Retrieves the name of the data type represented by this type descriptor.  <br/> |
|**IsReadOnly** <br/> |Boolean  <br/> |Determines whether this type descriptor represents a read-only data structure.  <br/> |
|**ContainsReadOnly** <br/> |Boolean  <br/> |Determines whether this type descriptor or one of its children represent a read-only data structure.  <br/> |
|**IsCollection** <br/> |Boolean  <br/> |Determines whether the described type represents a collection data structure.  <br/> |
   

## Interfaces
<a name="bkmk_Interfaces"> </a>

The namespace is **Microsoft.BusinessData.MetadataModel**.
  
    
    


|**Interface**|**Description**|
|:-----|:-----|
|**IMetadataCatalog** <br/> |The entry point into the BDC object model. Use the **DatabaseBasedMetadataCatalog** on the server. <br/> |
|**ILobSystem** <br/> |Contains the details about an external system.  <br/> |
|**IEntity** <br/> |An external content type in the BDC Metadata Store.  <br/> |
|**IMethod** <br/> |An operation that can be performed on the external content type.  <br/> |
|**IEntityInstance** <br/> |An entity instance (also known as external item) is a single item returned from an external system in BDC.  <br/> The **IEntityInstance** interface abstracts the underlying data sources and insulates the clients from having to learn application-specific coding paradigms; it enables them to access all business data in a single, simplified way. By using the **IEntityInstance** interface, you can work with a row of data from a database in just the same way as working with a complex .NET Framework structure returned by a web service. <br/> An entity instance in BDC has special semantics attached to it. For example, it has the ability to know which field or fields in the row represent the identifier for the entity instance, and it enables you to call methods, such as **GetAssociated**, **GetIdentifierValues**, and **Execute**, on that entity instance.  <br/> |
|**IEntityInstanceEnumerator** <br/> |Enumerators can be used to read the data in the external items collection, but they cannot be used to modify the underlying collection. **IEntityInstanceEnumerator** supports streaming and is therefore very useful when the back-end application returns large amounts of data. <br/> |
   

## Client Object model FAQ
<a name="bkmk_ClientObjectModelFAQ"> </a>


- **Does the <Method> tag need to be included in a CAML query when querying an external list**
    
    No. 
    
  
- **Do all fields in the external list need to be specified in the CAML query?**
    
    Using the ViewXML tag in the BDC model, the developer can specify only those fields that are required and the CSOM APIs for Lists will return only those fields.
    
  

## Additional resources
<a name="bkmk_Addres"> </a>


-  [Business Connectivity Services programmers reference for SharePoint 2013](business-connectivity-services-programmers-reference-for-sharepoint.md)
    
  
-  [.NET client API reference for SharePoint Online](http://msdn.microsoft.com/library/88e5e1b9-eab2-4f3b-a3f2-75c96b86f1f4%28Office.15%29.aspx)
    
  
-  [Get started using the client object model with external data in SharePoint 2013](get-started-using-the-client-object-model-with-external-data-in-sharepoint.md)
    
  
-  [How to: Use the client code library to access external data in SharePoint 2013](how-to-use-the-client-code-library-to-access-external-data-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint 2013](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  
-  [Get started with Business Connectivity Services in SharePoint 2013](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  
