---
title: Customizing search results in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 1b30f6df-643a-4570-ae5c-d3d8df5609b8
---


# Customizing search results in SharePoint 2013
Learn how to group similar items or remove duplicate items in a search result set in SharePoint Server 2013 so you can display these results in a concise, readable way.
In search results, grouping collapses two or more similar items in a search result set to make their display more readable for a user. Duplicate removal of search results is a part of grouping, where items that are identical or nearly identical are removed from the result set. Depending on the settings set by the SharePoint administrator, the user might be able to expand the search result set later and see the individual results that were collapsed.
  
    
    

The following are examples of ways to group search results:
- Duplicate detection, where nearly identical documents are removed from the result set.
    
  
- Site collapsing, where only the most relevant item found in each site is shown in the result set.
    
  
- Document set collapsing, where only one hit is displayed for each document library in SharePoint.
    
  
You can specify the criteria for collapsing or duplicate trimming programmatically by using the following  [KeywordQuery](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.aspx) properties within the Query object model:
-  [CollapseSpecification](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.CollapseSpecification.aspx)
    
  
-  [TrimDuplicates](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.Query.TrimDuplicates.aspx)
    
  
-  [TrimDuplicatesOnProperty](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.TrimDuplicatesOnProperty.aspx)
    
  
-  [TrimDuplicatesKeepCount](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.TrimDuplicatesKeepCount.aspx)
    
  
-  [TrimDuplicatesIncludeId](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.TrimDuplicatesIncludeId.aspx)
    
  

## Collapse similar search results using the CollapseSpecification property
<a name="bk_collapse_specification"> </a>

The **CollapseSpecification** property takes a _Spec_ parameter that can contain multiple fields separated either by a comma or a space, which evaluated together specify a set of criteria used for collapsing.
  
    
    
 **Syntax**
  
    
    
 `CollapseSpecification = Spec`
  
    
    
The following table lists the fields of the  _Spec_ parameter.
  
    
    

**Table 1. Spec parameter fields**


|**Element in parameter**|**Description**|
|:-----|:-----|
| _Spec_ <br/> | `Subspec(<space>Subspec)*` <br/> |
| _Subspec_ <br/> | `Prop(','Prop)*[':'Dups]` <br/> |
| _Prop_ <br/> |A valid managed property or an alias of a managed property.  _Prop_ is case-insensitive. The managed property must be queryable and either sortable or refineable. <br/> |
| _Dups_ <br/> |An integer specifying the number of items to retain. The default value is 1.  <br/> |
| _<space>_ <br/> |Properties are combined by using the **OR** operator. <br/> |
| _,_ <br/> |Properties are combined by using the **AND** operator. <br/> |
| _*_ <br/> |Indicates more items.  <br/> |
| _() or []_ <br/> |Indicates optional items.  <br/> |
   
If the fields in  _Spec_ are separated by commas, the fields are combined by using the **AND** operator. If all of the specified fields are matched, the items are collapsed.
  
    
    
In contrast, if the fields in  _Spec_ are separated by spaces, the fields (or _Subspecs_) are combined by using an expansion that includes both the **AND** operator and **OR** operator. For example, an expression such as `Category:3 Product:2` is internally transformed to the following expression `(Category AND Product) OR (Category)` with a counter for each; hence a maximum of two of the former and three of the latter. Items are collapsed if some of the specified fields are matched.
  
    
    

### Examples of using CollapseSpecification

The following table shows a product catalog from the Contoso company. The next set of examples use this catalog to show how the **CollapseSpecification** property works.
  
    
    


|**Category**|**Product**|**Variant**|**Title**|
|:-----|:-----|:-----|:-----|
|Laptops  <br/> |WWI  <br/> |19W X0196 Black  <br/> |Computer 1  <br/> |
|Laptops  <br/> |Adventure Works  <br/> |12 M1201 Red  <br/> |Computer 2  <br/> |
|Laptops  <br/> |Adventure Works  <br/> |15.4W M1548 White  <br/> |Computer 3  <br/> |
|Laptops  <br/> |Proseware  <br/> |19 X910 Black  <br/> |Computer 4  <br/> |
|Laptops  <br/> |Proseware  <br/> |Laptop19 X910 Black  <br/> |Computer 5  <br/> |
|Desktops  <br/> |Adventure Works  <br/> |2.33 XD233 Silver  <br/> |Computer 6  <br/> |
|Desktops  <br/> |WWI  <br/> |2.33 X2330 Black  <br/> |Computer 7  <br/> |
|Desktops  <br/> |Adventure Works  <br/> |1.60 ED160 White  <br/> |Computer 8  <br/> |
|Desktops  <br/> |WWI  <br/> |3.0 M0300 Silver  <br/> |Computer 9  <br/> |
   

  
    
    

#### Example: group by Category

First, group the items based on **Category** and show the top two (hence `"Category:2"`) for each group. Then, for each **Category**, show a corresponding number of unique (hence "Product:1") **Products**.
  
    
    
 **Syntax**
  
    
    
 `CollapseSpecification="Category:2 Product:1"`
  
    
    
This should return the following results.
  
    
    


|**Category**|**Product**|**Variant**|**Title**|
|:-----|:-----|:-----|:-----|
|Laptops  <br/> |WWI  <br/> |19W X0196 Black  <br/> |Computer 1  <br/> |
|Laptops  <br/> |Adventure  <br/> |12 M1201 Red  <br/> |Computer 2  <br/> |
|Desktops  <br/> |Adventure Works  <br/> |2.33 XD233 Silver  <br/> |Computer 6  <br/> |
|Desktops  <br/> |WWI  <br/> |2.33 X2330 Black  <br/> |Computer 7  <br/> |
   
Use the following code to collapse the search results by using the **CollapseSpecification** property.
  
    
    



```cs

using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
        {
            QueryText = "Title:Computer",
            CollapseSpecification = "Category:3 Product:1",
        };

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    {
        Console.WriteLine(result["Title"]);
    }
}

```


#### Example: group by Category and Product

First, group the items based on both **Category** and **Product**. Then, show each unique combination.
  
    
    
 **Syntax**
  
    
    
 `CollapseSpecification="Category,Product:1"`
  
    
    
This should return the following results.
  
    
    


|**Category**|**Product**|**Variant**|**Title**|
|:-----|:-----|:-----|:-----|
|Laptops  <br/> |WWI  <br/> |19W X0196 Black  <br/> |Computer 1  <br/> |
|Laptops  <br/> |Adventure Works  <br/> |12 M1201 Red  <br/> |Computer 2  <br/> |
|Laptops  <br/> |Proseware  <br/> |19 X910 Black  <br/> |Computer 4  <br/> |
|Desktops  <br/> |Adventure Works  <br/> |2.33 XD233 Silver  <br/> |Computer 6  <br/> |
|Desktops  <br/> |WWI  <br/> |2.33 X2330 Black  <br/> |Computer 7  <br/> |
   

## Trim duplicate search results using the TrimDuplicates property
<a name="bk_trim_duplicates"> </a>

Use **TrimDuplicates** to specify whether to trim away the duplicate search results from the result set. **TrimDuplicates** is **true** by default.
  
    
    
If you use **TrimDuplicates** with either **TrimDuplicatesOnProperty** or preferably **CollapseSpecification**, **TrimDuplicates** is set to **false**.
  
    
    
 **Syntax**
  
    
    
 `TrimDuplicates = <$true | $false>`
  
    
    

### Trim duplicate search results using the TrimDuplicatesOnProperty property
<a name="bk_trim_duplicates_on_property"> </a>

Use **TrimDuplicatesOnProperty** to specify whether to use a non-default managed property as the basis for duplicate trimming. The default value is the **DocumentSignature** managed property. The managed property must be of type **Integer** or **String**. By using a managed property that represents a grouping of items, you can use this feature for field collapsing.
  
    
    
 **Syntax**
  
    
    
 `TrimDuplicatesOnProperty = <managed property>`
  
    
    

> **Note:**
> In SharePoint Server 2013, use **CollapseSpecification** wherever possible. **TrimDuplicatesOnProperty** is available for backward compatibility only.
  
    
    


### Trim duplicate search results using the TrimDuplicatesKeepCount property
<a name="bk_trim_duplicates_keep_count"> </a>

Use **TrimDuplicatesKeepCount** to specify the number of documents to retain when **TrimDuplicates** is **true**. If **TrimDuplicates** is based on a managed property that can be used as a group identifier, for example a site ID, you can control how many results are returned for each group. The items returned are those with the highest dynamic rank within each group.
  
    
    
 **Syntax**
  
    
    
 `TrimDuplicatesKeepCount = <number>`
  
    
    

### Retrieve duplicate search results using the TrimDuplicatesIncludeId property
<a name="bk_trim_duplicates_include_id"> </a>

Use **TrimDuplicatesIncludeId** to retrieve the duplicates of a document when **TrimDuplicates** is **true** and **TrimDuplicatesOnProperty** or **CollapseSpecification** is set to **false**.
  
    
    
The document ID,  _docid_, is used to retrieve the duplicates of a particular document.
  
    
    
 **Syntax**
  
    
    
 `TrimDuplicatesIncludeId = <docid>`
  
    
    

> **Note:**
> The  _fcoid_ managed property in FAST Search Server 2010 for SharePoint has been replaced with the _docid_ managed property in SharePoint Server 2013.
  
    
    


## Additional resources
<a name="bk_addresources"> </a>


-  [KeywordQuery](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.aspx)
    
  
-  [Overview of the search schema in SharePoint 2013](http://technet.microsoft.com/en-us/library/jj219669%28office.15%29.aspx)
    
  

  
    
    

