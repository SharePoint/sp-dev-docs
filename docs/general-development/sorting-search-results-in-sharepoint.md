---
title: Sorting search results in SharePoint
ms.date: 09/24/2018
ms.prod: sharepoint
localization_priority: Priority
---



# Sorting search results in SharePoint

![Conceptual overview topic](../images/mod_icon_badge_conoverview.png)
    
Sort search results programmatically—by rank, by managed property value, by a formula expression, or in random order—by using the Query object model in SharePoint.

You can sort the search results for SharePoint in four ways:

- [Sort search results by rank](#SP15_Sort_search_resuilts_by_rank): Enables you to sort the search result by relevance rank.
    
  
- [Sort search results by managed property value](#SP15_Sort_search_results_by_managed_property_value): Enables you to sort the search result based on the value of one or more managed properties.
    
  
- [Sort search results by a formula expression](#SP15_Sort_search_results_by_formula): Enables you to sort the search result by a formula specified in the query request.
    
  
- [Sort search results in random order](#SP15_Sort_search_results_in_random_order): Enables you to sort the query result in random order, or add a random component to the sort order.
    
  

This article focuses on sorting search results programmatically. To learn how to sort search results using SharePoint query rules, see the following articles:

-  [Change ranked search results in Manage query rules](http://technet.microsoft.com/en-us/library/jj871676.aspx#BKMK_ChangeRankedSearchResults)
    
  
-  [Change ranked search results in Create query rules for web content management](http://technet.microsoft.com/en-us/library/jj871014.aspx#BKMK_ChangeRankedSearchResults)
    
  
<a name="SP15_Specify_sorting_in_query_request"> </a>

## How to specify sorting in a query request

When you use the Query object model, you can choose the sort criteria by providing a sort specification through the  [SortList](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.SortList.aspx) property of the [KeywordQuery](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.aspx) class. The [SortList](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.SortList.aspx) property is of type [SortCollection](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.SortCollection.aspx), which represents a collection of [Sort](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.Sort.aspx) objects.
  
    
    
A  [Sort](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.Sort.aspx) object defines a way to sort search results; it consists of a value you want to order search results on ([Property](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.Sort.Property.aspx)) and a direction in which you want to order the results ([Direction](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.Sort.Direction.aspx)). The direction is of type [SortDirection()](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.SortDirection.aspx) and can be ascending or descending.
  
    
    
If you have multiple values in  [SortList](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.SortList.aspx), the sorting is performed based on the sequence in which the values appear. This means that every **Sort** object represents a sort order level. Any succeeding level does not change the ordering of results that were differentiated by previous ones, but it may affect the internal ordering of results that have the same sort values for the previous levels.
  
    
    
Apart from the Query object model, SharePoint also provides a Search REST service that you can use to query the search index with your client or mobile applications. The Search REST service supports both HTTP POST and HTTP GET requests. For more information on how to construct URIs for these requests, see  [Querying with the Search REST service](sharepoint-search-rest-api-overview.md#bk_queryrest).
  
    
    
<a name="SP15_Sort_search_resuilts_by_rank"> </a>

## Sort search results by rank

By default, search results are sorted by relevance rank. This means that SharePoint places the most relevant results on top in the search result set. If you sort by rank, the results are always sorted in descending order. But you can change the sort order to ascending by using  [SortDirection()](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.SortDirection.aspx).
  
    
    
You can also influence the rank calculation in the query string, in one of two ways:

- By using the **XRANK** operator available in [Keyword Query Language (KQL) syntax reference](keyword-query-language-kql-syntax-reference.md) and [FAST Query Language (FQL) syntax reference](fast-query-language-fql-syntax-reference.md). You can use **XRANK** to apply a conditional rank boosting if a specific query condition is met.
    
  
- By choosing a relevance weight for dynamic ranking. When using FQL, you can specify an individual relevance weight for each **STRING** operator.
    
  
<a name="SP15_Sort_search_results_by_managed_property_value"> </a>

## Sort search results by managed property value

You can specify search result sorting based on the value of one or more managed properties. This means that SharePoint performs the sorting based on all results that match the query.

You can sort based on text and numeric properties. For text properties, the sorting is based on standard text string sorting. In contrast, for numeric properties (including managed properties of type [DateTime](https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ms500214(v%3Doffice.14))), the sorting is based on numeric value.
  
    
    

### Example

The following example shows how to sort search results by using the **Size** managed property.
  
    
    

```cs

using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home"
    };
    query.SortList.Add("Size", SortDirection.Descending);

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    { 
        Console.WriteLine(result["Title"] + " Size:" + result["Size"]);
    }
}
```

Alternatively, you could use the Search REST API to sort search results by using the **Size** property with the following call.
  
    
    



```HTML

http://localhost/_api/search/query?querytext='home'&amp;sortlist='size:descending'
```

<a name="SP15_Sort_search_results_by_formula"> </a>

## Sort search results by a formula expression


You can specify search result sorting based on a sort specification that uses a mathematical formula to create the sorting value.
  
    
    
The sort by formula feature is an extension of the single-level and multilevel sorting functionality for search results. The feature enables you to specify a formula instead of a managed property as sorting criteria. 
  
    
    
By using the sort by formula feature, you can apply mathematical operations on the value of one or more managed properties for each item in the query result.
  
    
    
The following are examples that can be implemented by using a formula to specify search result sorting:
  
    
    

- K-nearest neighbor algorithm to classify documents.
    
  
- Euclidean distance or Manhattan distance to calculate geographical distances.
    
  
- Preferred value, for example, to sort documents based on how far a given managed property value is from a preferred value.
    
  
The sort by formula feature does not include control of statistical dynamic rank parameters, such as term frequency and proximity.
  
    
    
The formula is evaluated left to right and uses standard mathematical-operator precedence. That is, functions and parenthetical groups are evaluated first, multiplication and division operations are performed next, and addition and subtraction operations are performed last.
  
> [!IMPORTANT] 
> The final result of a formula must be in the value range of a 32-bit signed integer. Otherwise, the sorting may be incorrect. 
  
    
    


### Specifying the sort formula in a query

You specify a sort formula instead of a managed property in the sort specification of the query request.
  
    
    
The sort specification has the following format:  `[formula:<sort-formula>]`
  
    
    
In the format,  _<sort-formula>_ is the sort formula expression.
  
> [!NOTE]
> The square brackets are part of the sort specification syntax. 
  
    
    

The default sort direction is descending. You may also use a formula that sorts by ascending value, for example, if the formula specifies a geographical distance.
  
    
    
The following code example shows how to specify sort by formula with ascending sort order by using the Query object model.
  
    
    



```cs
using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home"
    };
    query.SortList.Add("[formula:abs(2000-size)]", SortDirection.Ascending);

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    { 
        Console.WriteLine(result["Title"]);
    }
}
```

Alternatively, you could use the Search REST API to sort search results by using the **Size** property with the following call.
  
    
    



```HTML

http://localhost/_api/search/query?querytext='home'&amp;sortlist='[formula:abs(2000-size)]:ascending'

```


### Using managed properties in the sort formula

You can apply a sort formula on the value of managed properties of type [Integer](https://docs.microsoft.com/previous-versions/office/developer/sharepoint-2010/ms500214(v%3Doffice.14)), [Decimal](https://docs.microsoft.com/previous-versions/office/developer/sharepoint-2010/ms500214(v%3Doffice.14)), and [Datetime()](https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ms500214(v%3Doffice.14)). You must enable sorting for the specified managed property in the search schema.
  
    
    
For more managed properties of type  [Decimal](https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ms500214(v%3Doffice.14)), the value is multiplied by 10^(decimal digits) before being used in the formula evaluation.
  
    
    
For managed properties of type  Datetime()](https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ms500214(v%3Doffice.14)), the value is converted to the number of 100 nanoseconds since January 1 29000 BC before being used in the formula evaluation. There are 366 days in the year.
  
    
    

### Sort formula expressions

Table 1 lists the functions you can use in the sort formula expression. The expression must not contain spaces.
  
    
    

**Table 1. Functions for sort formula expressions**


|**Function**|**Description**|
|:-----|:-----|
|**+** <br/> |Specifies addition.  <br/> |
|**-** <br/> |Specifies subtraction.  <br/> |
|* <br/> |Specifies multiplication.  <br/> |
|**/** <br/> |Specifies division.  <br/> **Note**: By default, a division by zero results in an exception, and the query returns with an error. By using the **errtolast** operator, you can avoid the query error and instead place the failing items at the end of the result set.          |
|**rank** <br/> |A special keyword that represents the dynamic rank of an item.  <br/> Example:  `abs(rank-100)` will use the distance from rank value 100 as the sorting criteria. <br/> |
|**[0-9.]+** <br/> |Specifies that numbers can be given as integer or double values.  <br/> Examples: 503, 3.14, 5.4352262  <br/> |
|**[a-z0-9]+]** <br/> |Specifies that any character sequence not recognized as a function name is treated as a managed property name. You must enable sorting for the specified managed property in the search schema.  <br/> Example: You can define a managed property named **height** with sorting enabled. This enables you to use "height" as an expression in the formula. The formula will use the value of the **height** managed property. <br/> |
|**( and )** <br/> |Used to group calculations ensuring correct precedence.  <br/> Example: 4*(3+2)  <br/> |
|**sqrt(n)** <br/> |The square root of  _n_.  <br/> |
|**exp(n)** <br/> |The exponential function that is equivalent to  *pow(2.71828182846,n)*  <br/> |
|**log(n)** <br/> |The natural logarithm of  _n_.  <br/> |
|**abs(n)** <br/> |The absolute value of  _n_.  <br/> |
|**ceil(n)** <br/> |The ceiling of  _n_. That is, if  _n_ is not a whole number, round up to the next whole number. If _n_ is a whole number, use _n_.  <br/> |
|**floor(n)** <br/> |The floor of  _n_. That is, if  _n_ is not a whole number, round down to the next whole number. If _n_ is a whole number, use _n_.  <br/> |
|**round(n)** <br/> |The rounding of  _n_ to the nearest even whole number. Also known as "Bankers rounding" or "Round half to even". <br/> |
|**sin(n)** <br/> |The sine of  _n_ radians. <br/> |
|**cos(n)** <br/> |The cosine of  _n_ radians. <br/> |
|**tan(n)** <br/> |The tangent of  _n_ radians. <br/> |
|**asin(n)** <br/> |The arcsine, in radians, of  _n_.  <br/> |
|**acos(n)** <br/> |The arccosine, in radians, of  _n_.  <br/> |
|**atan(n)** <br/> |The arctangent, in radians, of  _n_.  <br/> |
|**pow(x,y)** <br/> |The value of  _x_ raised to the power of _y_.  <br/> **Note**: The value of  _y_ must be a real number.          |
|**atan2(y,x)** <br/> |A two-argument arctangent of the angle in radians between the positive x axis and the specified Cartesian coordinate (x,y).  <br/> |
|**bucket(b,n1,n2,…)** <br/> |An operator that can be used to provide discrete values for given value distribution ranges for an expression.  <br/> The expression  _b_ can be a managed property or any other formula expression. The arguments _n1, n2, …_ represent numeric thresholds. You can specify an arbitrary number of bucket thresholds. <br/> **Note**: You must arrange the arguments  _n1, n2, n3, …_ in the following order: `n1 < n2 < n3 < ...` with `n1 >= 0`.           A given value for the input expression  _b_ is rounded down to the closest numeric threshold given. If lower than the lowest threshold given, the resulting value is zero. <br/> |
|**errtolast(x)** <br/> |An operator that can be used to control how to handle formula exceptions;  _x_ can be any formula expression. If the calculation of this formula expression leads to a mathematical exception for an item in the result set, such as division by zero, these items appear at the end of the sort list, regardless of specified sort direction. <br/> |
   

### Performance characteristics for sort by formula

Using a sort formula implies that the formula calculations are applied to all matching items in the result set. This means that the query performance impact depends on the number of items that match the query.
  
    
    
Long formulas with many operators require more processing time than short formulas.
  
    
    

### Using sort by formula for geographical distance

You can use sort by formula to apply a ranking based on distance. This requires that you include managed properties that represent the latitude and longitude of each item.
  
    
    
For example, you can use one of the following standard formulas:
  
    
    

- Manhattan distance
    
  
- Euclidian distance (see example 2)
    
  
- Haversine formula
    
> [!IMPORTANT] 
> Use managed properties of type **Decimal** or **Float** to represent the latitude and longitude values.
  
    
    


### Examples

The following examples show how to specify the sort formula using the Query object model.
  
    
    
 **Example 1.** Place the items that have the **height** managed property closest to 20 on top of the result list.
  
    
    



```cs

using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home"
    };
    query.SortList.Add("[formula:abs(20-height)]", SortDirection.Ascending);

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    { 
        Console.WriteLine(result["Title"]);
    }
}
```

Alternatively, you could use the Search REST API to place the items that have the **height** managed property closest to 20 on top of the result list, with the following call.
  
    
    



```HTML

http://localhost/_api/search/query?querytext='home'&amp;sortlist='[formula:abs(20-height)]:ascending
```

**Example 2.** Sort by true 3-D Euclidean distance from a given position (for example, user's position) based on position information that is provided in the managed properties **latitude**, **longitude** and **height**. The following formula provides the 3-D Euclidean distance, given that the base position is 50/100/200 (latitude/longitude/height).
  
    
    
 `sqrt(pow(50-latitude,2)+pow(100-longitude,2)+pow(200-height,2))`
  
    
    
If you want to apply a distance-based sorting (not combining the distance with other parameters in a formula), you can remove the  `sqrt()` component, as it does not change the sorting sequence; but it improves the query performance.
  
    
    



```cs
using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home"
    };
    query.SortList.Add("[formula:pow(50-latitude,2)+pow(100-longitude,2)+pow(200-height,2)]", SortDirection.Ascending);

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    { 
        Console.WriteLine(result["Title"]);
    }
}
```

**Example 3.** Round the values of size into buckets, rounding values down to one of the following: 0, 5, 15, 50, 100; sort with largest values first.
  
    
    



```

using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home"
    };
    query.SortList.Add("[formula:bucket(size,5,15,50,100)]", SortDirection.Ascending);

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    { 
        Console.WriteLine(result["Title"]);
    }
}
```


## Sort search results in random order
<a name="SP15_Sort_search_results_in_random_order"> </a>

You may apply random sorting of the query result, or add a random component to the result sorting.
  
    
    
The random sort specification has the following format:  `[random:seed=<seed>:hashfield=<managed property>]`
  
> [!NOTE]
> The square brackets are part of the sort specification syntax. 
  
    
    

Table 2 explains the parameters to the random sort specification.
  
    
    

**Table 2. Parameters for the random sort specification**


|**Parameter**|**Description**|**Required**|
|:-----|:-----|:-----|
| _Seed_ <br/> |The seed for the random value generation.  <br/> The seed value is input to a function that generates a random number. This random number is used in the final sorting.Using only the  _seed_ option will give you a randomly sorted query result set. The sorting order for the same query (when using the same seed) may change after an index update. <br/> |Yes  <br/> |
| _Hashfield_ <br/> |A managed property that is used as the hash value for the random generation. You can use this parameter to ensure that the sorting order for the same query (when using the same seed) does not change after an index update.  <br/> The managed property must be of type  [Integer]https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ms500214(v%3Doffice.14)) and must be [Sortable()](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Administration.ManagedPropertyInfo.Sortable.aspx). You may fill this managed property with random or unique values (for example a sequence number populated by an item processing stage). <br/> |No  <br/> |
   
By providing the same seed for equal queries, items will be presented in the same order. This enables you to preserve the same random order when paging through search results. Use the  _hashfield_ parameter if you want to preserve the same random order when an index update accidentally occurs between the queries.
  
    
    

### Examples

The following examples show how to specify random sorting by using the Query object model.
  
    
    
 **Example 1.** Sort the entire result set in random order.
  
    
    



```

using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home"
    };
    query.SortList.Add("[random:seed=5432]", SortDirection.Ascending);

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    { 
        Console.WriteLine(result["Title"]);
    }
}
```

Alternatively, you could use the Search REST API to sort the entire result set in random order, with the following call.
  
    
    



```HTML

http://localhost/_api/search/query?querytext='home'&amp;sortlist='[random:seed=5432]:ascending
```

 **Example 2.** Sort the entire result set in random order. Preserve the same random sequence for the same query with the same seed, even if an index switch occurs. A custom managed property named **hashvalue** must be available in the search schema, and populated with random or sequential numeric values for all indexed items.
  
    
    



```cs
using (var context = new ClientContext("http://localhost"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home"
    };
    query.SortList.Add("[random:seed=6543:hashfield=hashvalue]", SortDirection.Ascending);

    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    foreach (var result in results.Value[0].ResultRows)
    { 
        Console.WriteLine(result["Title"]);
    }
}
```


## See also

- [Search in SharePoint](search-in-sharepoint.md) 
- [Keyword Query Language (KQL) syntax reference](keyword-query-language-kql-syntax-reference.md) 
- [FAST Query Language (FQL) syntax reference](fast-query-language-fql-syntax-reference.md)
- [SharePoint Search REST API overview](sharepoint-search-rest-api-overview.md) 
- [Overview of crawled and managed properties in SharePoint](http://technet.microsoft.com/en-us/library/jj219630%28office.15%29.aspx)
    
  

  
    
    
