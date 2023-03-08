---
title: Common error messages in SharePoint workflow development
description: A listing of common error messages that you might encounter while developing SharePoint workflows and guidance for solving the underlying problem.
ms.date: 09/25/2017
ms.assetid: e9bf6878-c722-4b1f-b5b5-b302ae0ea4da
ms.localizationpriority: high
---


# Common error messages in SharePoint workflow development
A listing of common error messages that you might encounter while developing SharePoint workflows and guidance for solving the underlying problem.

> [!NOTE]
> SharePoint 2010 workflows have been retired since August 1, 2020 for new tenants and removed from existing tenants on November 1, 2020. If you’re using SharePoint 2010 workflows, we recommend migrating to Power Automate or other supported solutions. For more info, see [SharePoint 2010 workflow retirement](https://support.microsoft.com/office/sharepoint-2010-workflow-retirement-1ca3fff8-9985-410a-85aa-8120f626965f).

## Common SharePoint workflow errors

Although this list doesn't cover every possible error you may encounter when developing SharePoint workflows, it does cover those that you are most likely to face.
  

    

-  [Timeout while waiting for sandboxed code execution request to complete within the worker process](#bkmk_error01)
    
  
-  [Timeout while waiting for request to complete within the sandboxed appdomain](#bkmk_error02)
    
  
-  [The worker process handling this request was ended because it exceeded the resource {0}](#bkmk_error03)
    
  
-  [This workflow could not run because a sandboxed solution encountered an error](#bkmk_error04)
    
  
-  [This workflow could not run because the sandbox failed: Could not get a process from the process pool](#bkmk_error05)
    
  
-  [This workflow could not run because the sandbox failed: The sandboxed code worker process exited unexpectedly](#bkmk_error06)
    
  
-  [The e-mail message cannot be sent. Make sure the outgoing e-mail settings for the server are configured correctly](#bkmk_error07)


- [The e-mail message cannot be sent. Email non-delivery reports in Exchange Online](/exchange/mail-flow-best-practices/non-delivery-reports-in-exchange-online/non-delivery-reports-in-exchange-online)
    
  
-  [The workflow could not update the item, possibly because one or more columns for the item require a different type of information](#bkmk_error08)
    
  
-  [The workflow operation failed because the workflow lookup found no matching item](#bkmk_error09)
    
  
-  [The workflow could not create the list item because the file name is either missing or invalid](#bkmk_error10)
    
  
-  [Coercion Failed: Unable to transform the input lookup data into the requested type](#bkmk_error11)
    
  
-  [The workflow operation failed because the action requires the document to be checked out](#bkmk_error12)
    
  
-  [Errors were found when compiling the workflow. The workflow files were saved but cannot be run. Unexpected error on server associating the workflow](#bkmk_error13)
    
  

### Timeout while waiting for sandboxed code execution request to complete within the worker process
<a name="bkmk_error01"> </a>

Same issue and same solution as the item below, "Timeout while waiting for request to complete within the sandboxed appdomain".
  
    
    

### Timeout while waiting for request to complete within the sandboxed appdomain
<a name="bkmk_error02"> </a>

Both of these errors result from the same issue—exceeding the default timeout period for the workflow action to execute. The default timeout period is 30 seconds.
  
    
    
You can change the timeout value in on-premises installations, but you can't change it in SharePoint Online installations. To avoid getting this error in SharePoint Online installations, you must modify your code to limit actions in the worker process or appdomain to fewer than 30 seconds.
  
    
    
To modify the timeout period in your on-premises installation, execute the following Windows PowerShell command. Note that the example code resets the timeout to 60 seconds, but you can use another value.
  
    
    



```

Add-pssnapin microsoft.sharepoint.powershell
   $userCodeSvc = [Microsoft.SharePoint.Administration.SPUserCodeService]::Local
   #change to 60 second timeout
   $userCodeSvc.WorkerProcessExecutionTimeout = 60 
   $userCodeSvc.Update()
```


### The worker process handling this request was ended because it exceeded the resource {0}
<a name="bkmk_error03"> </a>

In the error string, the value of  `{0}` is a placeholder for the specific resource whose threshold has been exceeded. To alleviate this problem, you should modify your code so that it does not exceed the resource threshold. These resource values are documented in [Resource Usage Limits on Sandboxed Solutions in SharePoint 2010](https://msdn.microsoft.com/library/gg615462%28v=office.14%29.aspx).
  
    
    

### This workflow could not run because a sandboxed solution encountered an error
<a name="bkmk_error04"> </a>

The workflow code threw an unhandled exception. Resolving this error requires debugging and revising your sandboxed code.
  
    
    

### This workflow could not run because the sandbox failed: Could not get a process from the process pool
<a name="bkmk_error05"> </a>

There is an error in your sandbox configuration. For information about configuring a sandboxed solution, see  [Sandboxed Solutions in SharePoint](https://msdn.microsoft.com/library/ee536577%28v=office.14%29.aspx).
  
    
    

### This workflow could not run because the sandbox failed: The sandboxed code worker process exited unexpectedly
<a name="bkmk_error06"> </a>

There is an error in your sandbox configuration. For information about configuring a sandboxed solution, see  [Sandboxed Solutions in SharePoint](https://msdn.microsoft.com/library/ee536577%28v=office.14%29.aspx).
  
    
    

### The e-mail message cannot be sent. Make sure the outgoing e-mail settings for the server are configured correctly
<a name="bkmk_error07"> </a>

There are two issues of note to consider when troubleshooting email issues. In both on-premises and SharePoint Online installations, ensure that all addresses on the **To:** and **Cc:** lines are valid email addresses. In on-premises installations, ensure that email settings on the server are configured correctly.
  
    
    
Review the following to ensure that you have correctly configured incoming and outgoing emails.
  
    
    

-  [Deployment guide for Microsoft SharePoint](https://download.microsoft.com/download/1/F/6/1F6D3BE4-1174-4320-A1D1-C0E2681CCCF3/Deployment-guide-for-SharePoint-2013.pdf)



Errors sending e-mail can also happen because of Exchange non-delivery.  Review the following to ensure that you are not having this issue:



- [Email non-delivery reports in Exchange Online](/exchange/mail-flow-best-practices/non-delivery-reports-in-exchange-online/non-delivery-reports-in-exchange-online)    

  
### The workflow could not update the item, possibly because one or more columns for the item require a different type of information
<a name="bkmk_error08"> </a>

This error commonly results from one of two situations:
  
    
    

- One of the list fields was removed or changed, but the workflow was not updated to account for the change and is therefore trying to set a value for the old field. You should check all **Update List Item** actions in your workflow and make sure they are setting appropriate values for fields and that those fields exist on the list.
    
  
- There is a data type error wherein the workflow is trying to set a value in a field in the list item using the wrong data type. You should confirm that the **Return Field As** operation in their lookup is of the correct data type.
    
  

### The workflow operation failed because the workflow lookup found no matching item
<a name="bkmk_error09"> </a>

This indicates there is an error in the workflow logic. Check to ensure that you are selecting the correct list and field in your lookup.
  
    
    

### The workflow could not create the list item because the file name is either missing or invalid
<a name="bkmk_error10"> </a>

This indicates there is an error in the workflow logic. Ensure that the file name entered in the **Path and Name** field is a valid file name. Common reasons for a file name to be invalid include a missing or incorrect file extension or a file/path string that is too long and exceeds the allowable number of characters.
  
    
    

### Coercion Failed: Unable to transform the input lookup data into the requested type
<a name="bkmk_error11"> </a>

The operation failed to cast values between incompatible data types (for example, converting a random string to a Date/Time value). You should check the **Return Field As** settings in your lookup to ensure that it is a valid data type for the expected data.
  
    
    

### The workflow operation failed because the action requires the document to be checked out
<a name="bkmk_error12"> </a>

You must check out the item using the **Check Out Item** action before using the **Update Item** action.
  
    
    

### Errors were found when compiling the workflow. The workflow files were saved but cannot be run. Unexpected error on server associating the workflow
<a name="bkmk_error13"> </a>

See  [Microsoft Support Knowledge Base article ID 2557533](https://support.microsoft.com/kb/2557533) ( `https://support.microsoft.com/kb/2557533`) for more information.
  
    
    

## See also
<a name="bk_addresources"> </a>


-  [SharePoint workflow development best practices](sharepoint-workflow-development-best-practices.md)
    
  
-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
    
  

  
    
    

