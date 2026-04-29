---
title: Common error messages in SharePoint workflow development
description: A listing of common error messages that you might encounter while developing SharePoint workflows and guidance for solving the underlying problem.
ms.date: 04/24/2017
ms.assetid: e9bf6878-c722-4b1f-b5b5-b302ae0ea4da
ms.localizationpriority: high
---

# Common error messages in SharePoint workflow development
A listing of common error messages that you might encounter while developing SharePoint workflows and guidance for solving the underlying problem.

> [!NOTE]
> SharePoint 2010 workflows have been retired since August 1, 2020 for new tenants and removed from existing tenants on November 1, 2020. If you’re using SharePoint 2010 workflows, we recommend migrating to Power Automate or other supported solutions. For more info, see [SharePoint 2010 workflow retirement](https://support.microsoft.com/office/sharepoint-2010-workflow-retirement-1ca3fff8-9985-410a-85aa-8120f626965f).

> [!IMPORTANT]
> Sandboxed solutions and the sandboxed code service are deprecated in SharePoint Online. The errors related to sandboxed code in this article apply to on-premises SharePoint environments only.

## Common SharePoint workflow errors

Although this list doesn't cover every possible error you may encounter when developing SharePoint workflows, it does cover those that you're most likely to face.

- [Timeout while waiting for sandboxed code execution request to complete within the worker process](#timeout-while-waiting-for-sandboxed-code-execution-request-to-complete-within-the-worker-process)
- [Timeout while waiting for request to complete within the sandboxed appdomain](#timeout-while-waiting-for-request-to-complete-within-the-sandboxed-appdomain)
- [The worker process handling this request was ended because it exceeded the resource {0}](#the-worker-process-handling-this-request-was-ended-because-it-exceeded-the-resource-0)
- [This workflow couldn't run because a sandboxed solution encountered an error](#this-workflow-could-not-run-because-a-sandboxed-solution-encountered-an-error)
- [This workflow couldn't run because the sandbox failed: Couldn't get a process from the process pool](#this-workflow-could-not-run-because-the-sandbox-failed-could-not-get-a-process-from-the-process-pool)
- [This workflow couldn't run because the sandbox failed: The sandboxed code worker process exited unexpectedly](#this-workflow-could-not-run-because-the-sandbox-failed-the-sandboxed-code-worker-process-exited-unexpectedly)
- [The e-mail message can't be sent. Make sure the outgoing e-mail settings for the server are configured correctly](#the-e-mail-message-cannot-be-sent-make-sure-the-outgoing-e-mail-settings-for-the-server-are-configured-correctly)
- [The e-mail message can't be sent. Email non-delivery reports in Exchange Online](/exchange/mail-flow-best-practices/non-delivery-reports-in-exchange-online/non-delivery-reports-in-exchange-online)
- [The workflow couldn't update the item, possibly because one or more columns for the item require a different type of information](#the-workflow-could-not-update-the-item-possibly-because-one-or-more-columns-for-the-item-require-a-different-type-of-information)
- [The workflow operation failed because the workflow lookup found no matching item](#the-workflow-operation-failed-because-the-workflow-lookup-found-no-matching-item)
- [The workflow couldn't create the list item because the file name is either missing or invalid](#the-workflow-could-not-create-the-list-item-because-the-file-name-is-either-missing-or-invalid)
- [Coercion Failed: Unable to transform the input lookup data into the requested type](#coercion-failed-unable-to-transform-the-input-lookup-data-into-the-requested-type)
- [The workflow operation failed because the action requires the document to be checked out](#the-workflow-operation-failed-because-the-action-requires-the-document-to-be-checked-out)
- [Errors were found when compiling the workflow. The workflow files were saved but can't be run. Unexpected error on server associating the workflow](#errors-were-found-when-compiling-the-workflow-the-workflow-files-were-saved-but-cannot-be-run-unexpected-error-on-server-associating-the-workflow)

### Timeout while waiting for sandboxed code execution request to complete within the worker process

Same issue and same solution as the following item, "Timeout while waiting for request to complete within the sandboxed appdomain".

### Timeout while waiting for request to complete within the sandboxed appdomain

Both of these errors result from the same issue—exceeding the default timeout period for the workflow action to execute. The default timeout period is 30 seconds.

You can change the timeout value in on-premises installations, but you can't change it in SharePoint Online installations. To avoid getting this error in SharePoint Online installations, you must modify your code to limit actions in the worker process or appdomain to fewer than 30 seconds.

To modify the timeout period in your on-premises installation, execute the following Windows PowerShell command. The example code resets the timeout to 60 seconds, but you can use another value.

```powershell
Add-pssnapin microsoft.sharepoint.powershell
   $userCodeSvc = [Microsoft.SharePoint.Administration.SPUserCodeService]::Local
   #change to 60 second timeout
   $userCodeSvc.WorkerProcessExecutionTimeout = 60
   $userCodeSvc.Update()
```

### The worker process handling this request was ended because it exceeded the resource {0}

In the error string, the value of  `{0}` is a placeholder for the specific resource whose threshold has been exceeded. To help this problem, you should modify your code so that it doesn't exceed the resource threshold. These resource values are documented in [Resource Usage Limits on Sandboxed Solutions in SharePoint 2010](/previous-versions/office/developer/sharepoint-2010/gg615462(v=office.14)).

### This workflow couldn't run because a sandboxed solution encountered an error

The workflow code threw an unhandled exception. Resolving this error requires debugging and revising your sandboxed code.

### This workflow couldn't run because the sandbox failed: Couldn't get a process from the process pool

There's an error in your sandbox configuration. For information about configuring a sandboxed solution, see  [Sandboxed Solutions in SharePoint](/previous-versions/office/developer/sharepoint-2010/ee536577(v=office.14)).

### This workflow couldn't run because the sandbox failed: The sandboxed code worker process exited unexpectedly

There's an error in your sandbox configuration. For information about configuring a sandboxed solution, see  [Sandboxed Solutions in SharePoint](/previous-versions/office/developer/sharepoint-2010/ee536577(v=office.14)).

### The e-mail message can't be sent. Make sure the outgoing e-mail settings for the server are configured correctly

There are two issues of note to consider when troubleshooting email issues. In both on-premises and SharePoint Online installations, ensure that all addresses on the **To:** and **Cc:** lines are valid email addresses. In on-premises installations, ensure that email settings on the server are configured correctly.

Review the following to ensure that you have correctly configured incoming and outgoing emails.

- [Deployment guide for Microsoft SharePoint](https://download.microsoft.com/download/1/F/6/1F6D3BE4-1174-4320-A1D1-C0E2681CCCF3/Deployment-guide-for-SharePoint-2013.pdf)

Errors sending e-mail can also happen because of Exchange non-delivery.  Review the following to ensure that you aren't having this issue:

- [Email non-delivery reports in Exchange Online](/exchange/mail-flow-best-practices/non-delivery-reports-in-exchange-online/non-delivery-reports-in-exchange-online)

### The workflow couldn't update the item, possibly because one or more columns for the item require a different type of information

This error commonly results from one of two situations:

- One of the list fields was removed or changed, but the workflow wasn't updated to account for the change and is therefore trying to set a value for the old field. You should check all **Update List Item** actions in your workflow and make sure they're setting appropriate values for fields and that those fields exist on the list.
- There's a data type error wherein the workflow is trying to set a value in a field in the list item using the wrong data type. You should confirm that the **Return Field As** operation in their lookup is of the correct data type.

### The workflow operation failed because the workflow lookup found no matching item

This indicates there's an error in the workflow logic. Check to ensure that you're selecting the correct list and field in your lookup.

### The workflow couldn't create the list item because the file name is either missing or invalid

This indicates there's an error in the workflow logic. Ensure that the file name entered in the **Path and Name** field is a valid file name. Common reasons for a file name to be invalid include a missing or incorrect file extension or a file/path string that is too long and exceeds the allowable number of characters.

### Coercion Failed: Unable to transform the input lookup data into the requested type

The operation failed to cast values between incompatible data types (for example, converting a random string to a Date/Time value). You should check the **Return Field As** settings in your lookup to ensure that it's a valid data type for the expected data.

### The workflow operation failed because the action requires the document to be checked out

You must check out the item using the **Check Out Item** action before using the **Update Item** action.

### Errors were found when compiling the workflow. The workflow files were saved but can't be run. Unexpected error on server associating the workflow

See [Microsoft Support Knowledge Base article ID 2557533](https://support.microsoft.com/kb/2557533) for more information.

## See also

- [SharePoint workflow development best practices](sharepoint-workflow-development-best-practices.md)
- [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
