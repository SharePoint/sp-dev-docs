---
title: Query Refinement in SharePoint
ms.prod: SHAREPOINT
ms.assetid: ec31782e-1bc5-4dc3-8df7-c29cd5f7f05c
---



# Query Refinement in SharePoint
Learn how to use SharePoint query refinement features programmatically when you are working with search queries and results.
You can use query refinement features to provide end users with refinement options that are relevant for their queries. These features let the end user drill down into search results by using refinement data computed for the results. Refinement data is calculated by the index component, based on the aggregation of managed property statistics for all of the results of a search query.
  
    
    

Typically, query refinement is used for metadata associated with the indexed items, such as creation date, author, or file types that appear in the item. By using the refinement options, you can refine your query to display only items created during a certain time period, or display only items of a specific file type.
## Using refiners in the Query Object Model
<a name="SP15_Using_refiners"> </a>

There are two queries involved in query refinement:
  
    
    

1. You can request for a set of refiners to be returned in the search results by  [adding a refiner spec](#SP15_Adding_refiners) to the end user's query. A refiner spec is the input for the [Refiners](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.Refiners.aspx) property. This query is run against the search index. The search results will consist of relevant results and refinement data.
    
  
2. You can use the refinement data to drill down into the search results by,  [creating a refined query](#SP15_Creating_refined_query). Add the  [RefinementFilters](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.RefinementFilters.aspx) property to the query so that the final search results will meet the requirements of both the original query text from the end user and the selected refinement option from the refinement data.
    
  
The following sections describe these steps in detail, and provide code examples.
  
    
    

## Adding refiners to the end-user's query by using refiner specs
<a name="SP15_Adding_refiners"> </a>

You can specify the requested query refiners by using the  [Refiners](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.Refiners.aspx) property of the [KeywordQuery](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.KeywordQuery.aspx) class. Use the following syntax to specify the requested query refiners:
  
    
    
 `<refiner>[,<refiner>]*`
  
    
    

  
    
    
Each  `refiner` has the following format:
  
    
    
 `<refiner-name>[(parameter=value[,parameter=value]*)]?`
  
    
    

  
    
    
Where:
  
    
    

-  `<refiner-name>` is the name of the managed property associated with the refiner. This managed property must be set to [Refinable](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Administration.ManagedPropertyInfo.Refinable.aspx) or [Sortable](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Administration.ManagedPropertyInfo.Sortable.aspx) in the search schema.
    
  
- The optional list of  `parameter=value` pairs specifies non-default configuration values for the named refiner. If a parameter for a refiner is not listed inside the parentheses, the search schema configuration gives you the default setting. Table 1 lists possible values for the `parameter=value` pairs.
    
  

> **Note:**
> When you specify refiners, the minimum requirement is to specify a  `refiner-name`, which is a managed property. > **Example**
  
    
    
 `Refiners = "FileType"`> > Or, you can also use the advanced syntax to adjust the refiner settings. > **Example**
  
    
    
 `Refiners = "FileType,Write(discretize=manual/2013-01-01/2013-08-22/2013-09-15/2013-09-21/2013-09-22),companies"`
  
    
    


**Table 1: List of parameters for refiners**


|**Parameter**|**Description**|
|:-----|:-----|
| _deephits_ <br/> |Overrides the default number of hits that is used as the basis for refinement computation. When refiners are produced, all results for the query will be evaluated. Normally, using this parameter will improve search performance.  <br/> **Syntax**          `deephits=<integer value>` <br/> **Example**          `price(deephits=1000)` <br/> **Note:** This limit applies within each index partition. The actual number of hits that are evaluated will be larger than this value due to the aggregation across search partitions.           |
| _discretize_ <br/> | Specifies custom intervals (refinement bins) for numeric refiners. <br/> **Syntax**          `discretize=manual/<threshold>/<threshold>[/<threshold>]*` <br/> **Example**          `write(discretize=manual/2013-01-01/2013-08-22/2013-09-15/2013-09-21/2013-09-22)` <br/>  The `<threshold>` attribute specifies the threshold for each refinement bin. <br/>  There is one interval for everything below the first threshold specified, one interval between each consecutive threshold, and one interval for everything above the last threshold. <br/>  For a refiner of type **DateTime**, specify the threshold according to one of the following ISO 8601-compatible formats:  <br/>  _YYYY-MM-DD_ <br/>  _YYYY-MM-DDThh:mm:ss_ <br/>  _YYYY-MM-DDThh:mm:ss:Z_ <br/>  The format values specify the following: <br/>  _YYYY_ - Four-digit year. Only four-digit years are supported. <br/>  _MM_ - Two-digit month. 01 = January. <br/>  _DD_ - Two-digit day of month (01 through 31). <br/>  _T_ - The letter "T". <br/>  _hh_ - Two-digit hour (00 through 23). A.M. or P.M. indication is not allowed. <br/>  _mm_ - Two-digit minute (00 through 59). <br/>  _ss_ - Two-digit second (00 through 59). <br/> **Important:**  All date/time values must be specified according to the Coordinated Universal Time (UTC), also known as Greenwich Mean Time (GMT) zone. The UTC zone identifier (a trailing "Z" character) is optional.          |
| _sort_ <br/> | Defines how to sort the bins within a string refiner. <br/> **Syntax**          `sort=<property>/<direction>` <br/>  The attributes perform the following: <br/>  _<property>_ - Specifies the sorting algorithm. These lowercase values are valid: <br/> **frequency** - Orders by occurrence within the bins. <br/> **name** - Orders by label name. <br/> **number** - Treats the strings as numeric and uses numeric sorting. This value can be useful to specify discrete values, for example, to perform numeric sorting of a value that is contained in a managed property of type **String**.  <br/>  _<direction>_ - Specifies the sorting direction. These lowercase values are valid : <br/> **descending** <br/> **ascending** <br/> **Example**          `sort=name/ascending` <br/> **Default**: frequency/descending  <br/> |
| _filter_ <br/> | Defines how bins within a refiner of type **String** are filtered before they are returned to the client. <br/> **Syntax**          `filter=<bins>/<freq>/<prefix>[<levels>]` <br/>  The attributes perform the following: <br/>  _<bins>_ - Specifies the maximum number of returned bins. <br/>  After sorting the bins within the refiner, use this attribute to truncate any trailing bins. For example, if bins=10, only the first 10 bins are returned, according to the specified sorting algorithm. <br/>  _<freq>_ - Limits the number of returned bins. <br/>  Use this attribute to remove bins that have low frequency counts. For example, _freq_=2 indicates that only the bins with 2 or more members are returned.  <br/>  _<prefix>_ - Specifies that only bins with a name that begins with this prefix are returned. <br/>  The wildcard character "*" will match all names. <br/> **Example** <br/>  `filter=30/2/*` <br/>  _<levels>_ - Specifies the levels of taxonomy. <br/>  Use this attribute to filter hierarchical refiner output based on taxonomy levels. The attribute should be a positive integer _n_. The **default** value is _n_=0. If  _n_>0, only refiner entries that contain less than  _n_ taxonomy path separator symbols ("/") will be returned. If _n_=0, no level filtering is performed. The level separator is the forward slash character ("/").  <br/>  Be aware of the performance cost of using a large taxonomy navigator. The filtering is performed as part of the result processing. <br/> **Note:**  This parameter applies application-specific result-side filtering. This differs from the cutoff parameter, which applies limitations in every index partition for performance reasons.          |
| _cutoff_ <br/> | Limits the data that must be transferred and processed for deep string refiners. You can configure the refiners to return only the most relevant values (bins). <br/> **Note:**  This cutoff filtering is performed within each index partition. This differs from the _filter_ parameter, which performs result-side filtering only. You can combine the two parameters.          **Syntax**          `cutoff=<frequency>/<minbins>/<maxbins>` <br/>  The attributes perform the following: <br/>  _<maxbins>_ - Limits the number of bins. <br/>  This parameter limits the number of unique values (bins) that will be returned for a refiner. It is the preferred way to increase search performance when string refiners with large number of bins are returned. "0" implies that the default value specified in the search schema is used. <br/>  _<frequency>_ - Limits the number of bins by frequency. <br/>  If the number of occurrences of a refiner value in a result set is less than or equal to the frequency value, the refiner value is not returned. "0" implies that the default value according to the search schema is used. <br/>  _<minbins>_ - Specifies the minimum value for frequency cutoff. <br/>  If the number of unique refiner values for the query is less than this value, no frequency cutoff is performed, and all refiner values are returned from that search partition. When cutoff by frequency is used, this parameter can be used to specify a minimum number of unique refiner values that will be returned regardless of the number of occurrences. The default value of this attribute is "0", indicating that frequency cutoff is performed regardless of the number of unique navigator values. "0" implies that the default value specified in the index schema is used. <br/> **Note:**  Use _<frequency>_ and _<minbins>_ with care. We recommend that you use only _<maxbins>_.           |
   

### Example: Adding refiners
<a name="SP15_Example_adding_refiners"> </a>

The following CSOM example shows how to programmatically request three refiners: **FileType**, **Write**, and **Companies**. **Write** represents the last modified date for the item, and uses the advanced syntax to return fixed-size date/time bins.
  
    
    

```cs

using (var context = new ClientContext("http://<serverName>/<siteCollectionPath>"))
{
    var query = new KeywordQuery(context)
    {
        QueryText = "home",
        Refiners = "FileType,Write(discretize=manual/2013-01-01/2013-08-22/2013-09-
            15/2013-09-21/2013-09-22),companies"
    };
    
    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    ResultTable relevantResultsTable = results.Value[0];
    ResultTable refinerResultsTable = results.Value[1];          
    Console.WriteLine(refinerResultsTable.RowCount + " refinement options:");
    foreach (var refinementOption in refinerResultsTable.ResultRows)
    {
        Console.WriteLine("RefinerName: '{0}' RefinementName: '{1}'
            RefinementValue: '{2}' RefinementToken: '{3}' RefinementCount: '{4}'", 
            refinementOption["RefinerName"],
            refinementOption["RefinementName"],
            refinementOption["RefinementValue"],
            refinementOption["RefinementToken"],
            refinementOption["RefinementCount"]
        );
    }
}
```


## Understanding the refinement data in the search result
<a name="SP15_Understanding_refinement_data"> </a>

If you have enabled query refinement for a managed property in your query, the query result contains refinement data split into refinement bins. This data is located in the **RefinementResults** table ( [RefinementResults](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KnownTableTypes.RefinementResults.aspx) ) within the [ResultTableCollection](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ResultTableCollection.aspx) . One refinement bin represents a specific value or value range for the managed property.The **RefinementResults** table contains one row per refinement bin, and contains the columns, as specified in Table 2.
  
    
    

**Table 2: Data returned for refinement bins**


|**Parameter**|**Description**|
|:-----|:-----|
|**RefinerName** <br/> |The name of the query refiner.  <br/> |
|**RefinementName** <br/> |The string that represents the refinement bin. This string is typically used when presenting the refinement options to the users on a search result page.  <br/> |
|**RefinementValue** <br/> |An implementation-specific formatted string that represents refinement. This data is returned for debugging and is typically not required for the client.  <br/> |
|**RefinementToken** <br/> |A string that represents the refinement bin to use with **RefinerName** when you perform a refined query. <br/> |
|**RefinementCount** <br/> |The result count for this refinement bin. This data represents the number of items (including duplicates) in the search result with a value for the given managed property that falls into this refinement bin.  <br/> |
   

### Example: Refinement data
<a name="SP15_Example_refinement_data"> </a>

Table 3 below contains two rows of refinement data. The first row holds refinement data for indexed items, where the file type is HTML. The second row holds refinement data for indexed items, where the last modified time is from 2013/09/21 until 2013/09/22.
  
    
    

**Table 3: Format and contents of refinement data**


|**RefinerName**|**RefinementName**|**RefinementValue**|**RefinementToken**|**RefinementCount**|
|:-----|:-----|:-----|:-----|:-----|
|FileType  <br/> |Html  <br/> |Html  <br/> |"????68746d6c"  <br/> |50553  <br/> |
|Write  <br/> |From 2013-09-21T00:00:00Z up to 2013-09-22T00:00:00Z  <br/> |From 2013-09-21T00:00:00Z up to 2013-09-22T00:00:00Z  <br/> |range(2013-09-21T00:00:00Z, 2013-09-22T00:00:00Z)  <br/> |37  <br/> |
   

## Creating a refined query
<a name="SP15_Creating_refined_query"> </a>

A search result presents refinement options in the form of string values or value ranges. Each string value or numeric value range is called a refinement bin, and each refinement bin has an associated **RefinementToken** value. A refinement option is associated with a managed property, which is provided by the **RefinerName** value.
  
    
    
Both the **RefinementToken** and **RefinerName** values are concatenated to create a _refinement filter_ string. This string represents a filter that can be used to limit search result items to include only items where a managed property has a value within a refinement bin. In short:
  
    
    
 `refinement filter = <RefinerName>:<RefinementToken>`
  
    
    
You can provide one or more refinement filters for a refined query by adding refinement filters to the  [RefinementFilters](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.RefinementFilters.aspx) property of the [KeywordQuery](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.KeywordQuery.aspx) class. Multiple refinement filters enable you to provide multilevel drill-down into the search results, and to apply refinement on multivalued properties. For example, you can refine the query to items that have two authors - each represented by a refinement bin - but exclude items that have only one of the authors.
  
    
    

### Example 1: Creating a refined query for HTML file types

The following CSOM example shows how to programmatically perform a refinement, to limit the search results to those of HTML file type only. As mentioned in  [Example: Refinement data](#SP15_Example_refinement_data), refinement data related to this refinement option has **RefinerName** set to _Filetype_ and **RefinementToken** set to _"????68746d6c"_.
  
    
    

```cs

using (var context = new ClientContext("http://<serverName>/<siteCollectionPath>"))
{
    var query = new KeywordQuery(context)
    {        
        QueryText = "home"
    };
    
    query.RefinementFilters.Add("FileType:\\"????68746d6c\\"");
    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);

    context.ExecuteQuery();

    ResultTable relevantResultsTable = results.Value[0];
    var resultCount = 1;
    foreach (var relevantResult in relevantResultsTable.ResultRows)
    {
        Console.WriteLine("Relevant result number {0} has file type {1}.", 
            resultCount, relevantResult["FileType"]);
            resultCount++;
    }
}
```


### Example 2: Creating a refined query by using previously obtained refinement data

The following CSOM example shows how to run a query with a refiner spec to create refinement data which is subsequently used to perform refinement. This example simulates the process of an end user selecting the first refinement option.
  
    
    

```cs

using (var context = new ClientContext("http://<serverName>/<siteCollectionPath>"))
{
    // Step 1: Run the query with refiner spec to provide refinement data in search result
    var query = new KeywordQuery(context)
    {
        QueryText = "home",
        Refiners = "FileType,Write(discretize=manual/2013-01-01/2013-08-22/
2013-09-15/2013-09-21/2013-09-22),companies"
    };
    
    Console.WriteLine("Run query '{0}' with refiner spec '{1}'.", query.QueryText,
query.Refiners);
    var executor = new SearchExecutor(context);
    var results = executor.ExecuteQuery(query);
    context.ExecuteQuery();

    // The query has been run and we can now look at the refinement data, to view the
    // refinement options
    ResultTable relevantResultsTable = results.Value[0];
    ResultTable refinerResultsTable = results.Value[1];
    Console.WriteLine("Got back {0} refinement options in the result:",
        refinerResultsTable.RowCount);
    
    foreach (var refinementOption in refinerResultsTable.ResultRows)
    {
        Console.WriteLine("RefinerName: '{0}' RefinementName: '{1}'
            RefinementValue: '{2}' RefinementToken: '{3}' RefinementCount: '{4}'",
            refinementOption["RefinerName"],
            refinementOption["RefinementName"],
            refinementOption["RefinementValue"],
            refinementOption["RefinementToken"],
            refinementOption["RefinementCount"]
        );
    }

    // Step 2: Run the refined query with refinement filter to drill down into 
    // the search results. This example uses the first refinement option in the refinement
    // data, if available. This simulates an end user selecting this refinement option.
    var refinementOptionArray = refinerResultsTable.ResultRows.ToArray();

    if (refinementOptionArray.Length > 0)
    {                         
        var firstRefinementOption = refinementOptionArray[6];x
        // Construct the refinement filter by concatenation
        var refinementFilter = firstRefinementOption["RefinerName"] + ":" +
            firstRefinementOption["RefinementToken"];
        var refinedQuery = new KeywordQuery(context)
        {
            QueryText = query.QueryText
        };
        refinedQuery.RefinementFilters.Add(refinementFilter);
        refinedQuery.SelectProperties.Add("FileType");
        refinedQuery.SelectProperties.Add("Write");
        refinedQuery.SelectProperties.Add("Companies");
        Console.WriteLine("Run query '{0}' with refinement filter '{1}'",            
            refinedQuery.QueryText, refinementFilter);
        var refinedResults = executor.ExecuteQuery(refinedQuery);
        context.ExecuteQuery();
        ResultTable refinedRelevantResultsTable = refinedResults.Value[0];
        var resultCount = 1;
        foreach (var relevantResult in refinedRelevantResultsTable.ResultRows)
        {
            Console.WriteLine("Relevant result number {0} has FileType='{1}',
                Write='{2}', Companies='{3}'", 
                resultCount, 
                relevantResult["FileType"],
                relevantResult["Write"],
                relevantResult["Companies"]
            );
            resultCount++;
        }
    }
}
```


## Additional resources
<a name="SP15_Query_refinement_addresources"> </a>


-  [Configure properties of the Refinement Web Part in SharePoint](http://technet.microsoft.com/en-us/library/gg549985.aspx)
    
  
-  [Overview of the search schema in SharePoint](http://technet.microsoft.com/en-us/library/jj219669%28office.15%29.aspx)
    
  

## See also
<a name="SP15_Query_refinement_addresources"> </a>


#### Other resources


  
    
    
 [Index Schema (FAST Search Server 2010 for SharePoint)](http://msdn.microsoft.com/library/3e1eed3f-8a6f-4911-9607-f1616e6a44f3%28Office.15%29.aspx)
  
    
    
 [Refiner Element in Microsoft.Search.Query Schema](http://msdn.microsoft.com/library/0512c17a-18e9-45e3-9061-9dba9cd45ef4%28Office.15%29.aspx)
