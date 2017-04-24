---
title: Using the pairing cmdlet Register-SPWorkflowService
ms.prod: SHAREPOINT
ms.assetid: 91fca6c2-60ca-4177-8560-2b310dac0e2c
---



# Using the pairing cmdlet Register-SPWorkflowService
Learn how to use the cmdlet **Register-SPWorkflowService** to successfully pair SharePoint Server 2013 with Workflow Manager.
Installing and configuring Microsoft SharePoint Server 2013 to support workflow development requires "pairing" your installations of SharePoint Server 2013 and Workflow Manager. In most scenarios, this pairing is easily done by using the cmdlet **Register-SPWorkflowService**, which is included with your SharePoint installation.
  
    
    

Importantly, this cmdlet is not useful for every pairing scenario. **Register-SPWorkflowService** is useful only in the following pairing scenarios:
- One-computer server farm where SharePoint Server 2013 and Workflow Manager are co-located on the server box.
    
  
- Three-computer server farm where SharePoint Server 2013 and Workflow Manager are co-located on all three computers. (Add a fourth computer is search needs to be on a separate computer and Workflow Manager HA is required. If the latter is required, it must be installed on all three machines.
    
  
- Three-computer SharePoint Server 2013 farm paired with a non-co-located Workflow Manager server farm.
    
  
Also note that **Register-SPWorkflowService** uses the credentials of the current user.
## Cmdlet design


****


|**Detail**|**Description**|
|:-----|:-----|
|Verb  <br/> |Register  <br/> |
|Noun  <br/> |SPWorkflowService  <br/> |
|Description  <br/> |Pairs a sps15short farm with a Workflow Manager farm. You must run this cmdlet once per farm. Before running the cmdlet, you must install root CA certificate in machine certificate store and SharePoint certificate store. To do this, use the cmdlet **New-SPTrustedRootAuthority**. (See instructions below.)  <br/> |
|Output type  <br/> |None.  <br/> |
|Syntax  <br/> | `Register-SPWorkflowService -SPSite <URI or GUID representing an SPSite object> -WorkflowHostUri <workflow service endpoint URL> -ScopeName <string> [-PartitionMode] [-AllowOAuthHttp] [-Force]` <br/> |
   

## Cmdlet parameters



|**Parameter**|**Type**|**Description**|
|:-----|:-----|:-----|
|SPSite          (Required)  <br/> |**SPSitePipeBind** <br/> |The URL of a long-lasting site collection on the SharePoint Server farm that serves as the pairing endpoint. Information for pairing is deduced from this URL.  <br/> |
|WorkflowHostUri          (Required)  <br/> |String  <br/> |The URL of the Workflow Manager endpoint for the pairing. Provides the workflow host URI along with port number.  <br/> |
|ScopeName  <br/> |String  <br/> |The name to be used by the workflow service to identify the paired SharePoint Server farm. The default value is "SharePoint". You only need to specify this parameter if trying to pair multiple SharePoint farms to a Workflow Manager farm.  <br/> |
|PartitionMode  <br/> |SwitchParameter  <br/> |Use this parameter only for multi-tenant SharePoint farm. The partition mode is specified per SharePoint service. Note that you can create multi-tenancy in a SharePoint farm after this cmdlet runs; therefore, the cmdlet cannot deduce this parameter value implicitly from the existing state of the SharePoint farm.  <br/> |
|AllowOAuthHttp  <br/> |SwitchParameter  <br/> |Enables OAuth and metadata exchange over HTTP. This is useful in testing, but not in production mode. Use this only when SharePoint is configured to support HTTP. It is not necessary that the Workflow Manager be configured to use HTTP.  <br/> |
|Force  <br/> |SwitchParameter  <br/> |Enforces the creating of scope using  _ScopeName_ parameter, or updates an existing scope corresponding to the same _ScopeName_. If not specified and scope with the same name exists, the cmdlet will throw an error.  <br/> |
   

## Example


```

PS> Register-SPWorkflowService -SPSite "https://myserver/mysitecollection" -WorkflowHostUri "http://workflow.example.com:12291" -ScopeName "SharePoint2" -PartitionMode -AllowOAuthHttp  -Force
```


## Additional resources
<a name="bk_addresources"> </a>


-  [Install and configure workflow for SharePoint Server 2013](http://technet.microsoft.com/en-us/library/jj658588.aspx)
    
  
-  [Video series: Install and configure Workflow in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn201724.aspx)
    
  
-  [Workflow Manager 1.0](http://msdn.microsoft.com/en-us/library/jj193528%28Azure.10%29)
    
  
