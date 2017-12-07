---
title: Custom security trimming for Search in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: fbbf0cc4-e135-426a-9996-34eb954dbd5a
---



# Custom security trimming for Search in SharePoint
Learn about the two kinds of custom security trimmer interfaces, **ISecurityTrimmerPre** and **ISecurityTrimmerPost**, and the steps you must take to create a custom security trimmer.
At query time, Search in SharePoint performs security trimming of search results that are based on the identity of the user submitting the query, by using the security information obtained from the crawl component.
  
    
    

You might have certain scenarios, however, in which the built-in security trimming results aren't sufficient for your requirements. In such scenarios, you need to implement custom security trimming. Search in SharePoint provides support for custom security trimming through the  [ISecurityTrimmerPre](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.aspx) interface, [ISecurityTrimmerPost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.aspx) interface, and [ISecurityTrimmer2](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmer2.aspx) interface (deprecated) in the [Microsoft.Office.Server.Search.Query](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.aspx) namespace.

> [!NOTE]
> Custom pre-trimmers don't support Windows SIDs in ACLs, only claims. If any of the SID claim types are returned from a custom pre-trimmer, the resulting ACEs in the index will be encoded as a claim, not as SID. Hence they do not match Windows user identities that are based on SIDs.
  
    
    


## Implementing the interfaces for custom security trimming
<a name="Implementing_the_interfaces"> </a>

The **ISecurityTrimmerPre** interface carries out pre-trimming, or pre-query evaluation, where the search query is rewritten to add security information before the search query is matched to the search index. The **ISecurityTrimmerPost** interface carries out post-trimming, or post-query evaluation, where the search results are pruned before they are returned to the user.
  
    
    
We recommend the use of pre-trimming for performance and general correctness; pre-trimming prevents information leakage for refiner data and hit count instances. Post-trimmers can be used in cases where the security trimming cannot be represented accurately with query filters; for example, if there is a need to filter away documents depending on the local time of the user issuing the query, such as during official business hours only.
  
    
    

### Implementing the ISecurityTrimmerPre interface

To create a custom security pre-trimmer for search results, you must create a component that implements the **ISecurityTrimmerPre** interface.
  
    
    
The **ISecurityTrimmerPre** interface contains two methods that you must implement: [Initialize(NameValueCollection, SearchServiceApplication)](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.Initialize.aspx) and [AddAccess(Boolean, Claims)](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.AddAccess.aspx) .
  
    
    

#### Initialize Method

The **Initialize** method is executed when the security pre-trimmer is loaded into the worker process, and does not execute again until the worker process is recycled. Two parameters are passed into the method:
  
    
    

-  _staticProperties_: A  [NameValueCollection](https://msdn.microsoft.com/library/System.Collections.Specialized.NameValueCollection.aspx) object containing the configuration properties that are specified for the security trimmer when it is registered with the Search service application.
    
  
-  _searchApplication_: A  [SearchServiceApplication](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Administration.SearchServiceApplication.aspx) object that represents the Search service application.
    
  

#### AddAccess Method

The **AddAccess** method is executed once per pre-trimmer, for each incoming query before the query is evaluated.
  
    
    
Two parameters are passed into this method: 
  
    
    

-  _sessionProperties_: A **[T:System.Collections.Generic.IDictionary<String,Object>]** object that contains the properties of the query.
    
  
-  _userIdentity_: A  [IIdentity](https://msdn.microsoft.com/library/System.Security.Principal.IIdentity.aspx) object that contains the user identity.
    
  

### Implementing the ISecurityTrimmerPost interface

To create a custom security post-trimmer for search results, you must create a component that implements the **ISecurityTrimmerPost** interface.
  
    
    
The **ISecurityTrimmerPost** interface contains two methods that you must implement: [Initialize(NameValueCollection, SearchServiceApplication)](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.Initialize.aspx) and **CheckAccess(IList<String>, IList<String>, IDictionary<String, Object>, IIdentity)**.
  
    
    

#### Initialize method

The **Initialize** method is executed when the security trimmer is loaded into the worker process, and does not execute again until the worker process is recycled. Two parameters are passed into the method:and
  
    
    

-  _staticProperties_: A  [NameValueCollection](https://msdn.microsoft.com/library/System.Collections.Specialized.NameValueCollection.aspx) object containing the configuration properties specified for the security trimmer when it is registered with the Search service application.
    
  
-  _searchApplication_: A  [SearchServiceApplication](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Administration.SearchServiceApplication.aspx) object that represents the Search service application.
    
  

#### CheckAccess method

The **CheckAccess** method is executed once per post-trimmer, for each result set query, after the query is evaluated.
  
    
    
Four parameters are passed into this method:
  
    
    

-  _documentUrls_: A  [IList\<T\>](http://msdn2.microsoft.com/EN-US/library/5y536ey6) object that contain the URLs for each content item from the search results that match the crawl rule.
    
  
-  _documentAcls_: A  [IList\<T\>](http://msdn2.microsoft.com/EN-US/library/5y536ey6) object containing item ACLs for each content item whose access is to be determined by the security trimmer implementation.
    
  
-  _sessionProperties_: A  [IDictionary\<TKey, TValue\>](http://msdn2.microsoft.com/EN-US/library/s4ys34ea) object containing the transient property bag.
    
  
-  _userIdentity_: An  [IIdentity](https://msdn.microsoft.com/library/System.Security.Principal.IIdentity.aspx) object from which implementers can retrieve the user's identity.
    
  
The **CheckAccess** method returns a [BitArray](https://msdn.microsoft.com/library/System.Collections.BitArray.aspx) object that represents an array of **true** or **false** values, one for each content item URL in the **IList** object that is passed as the first parameter of the method. The query processing component uses these values to perform the security post-trimming of the results. If the array value for a particular content item is **true**, the item is included in the returned results; if the array value is **false**, the item is removed.
  
    
    
When implementing the **CheckAccess** method, you can use two pieces of information for each item to determine whether to return **true** or **false** for the item: the identity of the user who submitted the query and the URL of the content item. Alternatively, you can also pass custom document ACL information from the connector to the **CheckAccess** method.
  
    
    

#### Retrieving the user identity for your security trimmer

You can retrieve the user's identity by accessing the thread's current principal, as shown in the following code example.
  
    
    

```cs

IIdentity userIdentity = System.Threading.Thread.CurrentPrincipal.Identity;
```

You must also include the following namespace directive.
  
    
    



```cs
using System.Security.Principal;
```

You can also retrieve the identity of the user from the **CheckAccess** method's **passedUserIdentity** parameter.
  
    
    

#### Passing document ACLs from the connector to your security trimmers

A connector, as the name implies, is a communication bridge between SharePoint and the external system that hosts the external data. If you are working with custom connectors, you can pass the document's ACL information directly to the post-trimmer by setting the **docaclmeta** document property. As long as the configured connectors and post-trimmers have the same format and interpretation of the field, you are free to use it to pass custom data.
  
    
    
The strings stored in **docaclmeta** by the connector will surface in the _documentAcls_ parameter when the **CheckAccess** method of the custom security trimmer is invoked. The regular document ACLs in the **docacl** property are processed by basic security trimming and are not visible to the custom security trimmer. Similarly, the **docaclmeta** property does not have any effect on basic security trimming.
  
    
    

#### Post-trimmers and their effect on refiner count for security trimmers

When working with post-trimmers, it is important to notice that there are two types of result tables: **RelevantResults** and the **RefinementResults**. Post-trimmers are applied only to the result hits in the **RelevantResults**. Consequently, there may be refiners related to the post-trimmed hits and the **RefinementResults** count may be larger than or equal to the **RelevantResults**. You can address this behavior in two ways:
  
    
    

- Exclude the sensitive refiners from the refinement panel in the default Web Part so that no information is leaked via the refiners.
    
  
- Use a custom Web Part to display results or refiners when using post-trimmers so that the **RefinementResults** may be elegantly hidden in cases where the **RefinementResults** count exceeds the **RelevantResults** count.
    
  

### Retrieving individual configuration properties for your security trimmer

You can access an individual configuration property by using the property name that was specified when the security post-trimmer was registered. For example, the following code retrieves the value for a configuration property named **CheckLimit**.
  
    
    

```cs
public void Initialize(NameValueCollection staticProperties, SearchServiceApplication searchApplication)
{
    if (staticProperties["CheckLimitProperty"] != null)
    {
         intCheckLimit = Convert.ToInt32(staticProperties["CheckLimitProperty"]);
    }
}
```


## Deploying the custom security trimmer component
<a name="Deploying_the_trimmer"> </a>

After you create the custom security trimmer, you must deploy it to the global assembly cache on any server in the Query role. Step 2 in  [How to: Use a custom security trimmer for SharePoint Server search results](how-to-use-a-custom-security-trimmer-for-sharepoint-server-search-results.md) describes the process for deploying the custom security trimmer to the global assembly cache.
  
    
    

## Registering the custom security trimmer
<a name="Registering_the_trimmer"> </a>

For post-trimmers, you must associate a custom security trimmer registration with a specific Search service application and crawl rule; for pre-trimmers, this is optional.
  
    
    
You use the **SPEnterpriseSearchSecurityTrimmer** cmdlet of the SharePoint Management Shell to register a custom security trimmer.
  
    
    
The following table describes the parameters that the cmdlet uses.
  
    
    

**Table 1. Parameters used by the SPEnterpriseSearchSecurityTrimmer cmdlet**


|**Parameter**|**Description**|
|:-----|:-----|
| _SearchApplication_ <br/> |Required. The name of the Search service application, for example "Search Service Application".  <br/> |
| _typeName_ <br/> |Required. The strong name of the custom security trimmer assembly.  <br/> |
| _RulePath_ <br/> |Required for post-trimmers; optional for pre-trimmers. The crawl rule for the security trimmer.  <br/> **Note**: We recommend using one crawl rule per content source.           |
| _id_ <br/> |Required. The security trimmer identifier (ID). This value is unique; if a security trimmer is registered with an ID that is already registered for another security trimmer, the registration for the first trimmer is overwritten with the registration for the second trimmer.  <br/> |
| _properties_ <br/> |Optional. The name-value pairs specifying the configuration properties. Must be in the following format:  `Name1~Value1~Name2~Value~???` <br/> |
   
For an example of a basic command for registering a custom security trimmer and a sample that specifies the configuration properties, see  [How to: Use a custom security trimmer for SharePoint Server search results](how-to-use-a-custom-security-trimmer-for-sharepoint-server-search-results.md).
  
    
    

## See also
<a name="bk_sectrimmer_addlresources"> </a>


-  [How to: Use a custom security trimmer for SharePoint Server search results](how-to-use-a-custom-security-trimmer-for-sharepoint-server-search-results.md)
    
  
-  [ISecurityTrimmerPre](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.aspx)
    
  
-  [ISecurityTrimmerPost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.aspx)
    
  
-  [Overview of Business Connectivity Services in SharePoint](http://technet.microsoft.com/en-us/library/ee661740.aspx)
    
  
