---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: dd003614-115e-4eb4-aa20-ffcfb0d0b805
---

# Property Bag schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

An elements manifest can define a property bag for a file, folder, list item, or website.

The following is a list of the elements in the Property Bag schema.

- [Elements](elements-element-property-bag.md)

- [PropertyBag](propertybag-element-property-bag.md)

- [Property](property-element-property-bag.md)

## Examples

The following example shows how to add a Location property and its value to the property bag of a website that represents a field office.

```XML 
    <PropertyBag HyperlinkBaseUrl="http://contoso.com/sites/EastEnglandSalesOffice"" Url="" ParentType="Web" RootWebOnly=TRUE" />
        <Property Name="Location" Value="London" Type="string" />
    </PropertyBag>
```

<br/>

The following example shows how to add a DaysToLive property and its value to the property bag of a list item that represents a temporary price discount. The property specifies how many days the twenty-third list item should be retained before it is deleted from the list. Note that the value of the **Type** attribute must be a member of the
**PropertyBagType** enumeration. Hence, in this case it must be `"int"` not `"integer"`.

```XML 
    <PropertyBag HyperlinkBaseUrl="http://contoso.com/sites/EastEnglandSalesOffice"" Url="Lists/CurrentDiscounts" ParentType="ListItem" ItemIndex="23"/>
        <Property Name="DaysToLive" Value="90" Type="int" />
    </PropertyBag>
```







