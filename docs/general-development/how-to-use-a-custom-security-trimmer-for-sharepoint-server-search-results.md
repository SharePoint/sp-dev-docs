---
title: How to Use a custom security trimmer for SharePoint Server search results
ms.prod: SHAREPOINT
ms.assetid: e1a8664e-fb43-45c2-83aa-9635fe1efc99
---


# How to: Use a custom security trimmer for SharePoint Server search results
This how-to guides you through the steps to implement—create, deploy, and register—a custom security trimmer for Search in SharePoint 2013 by using Microsoft Visual Studio 2010.
Search in SharePoint 2013 performs query-time security trimming of search results. However, there may be scenarios in which you want to perform custom security trimming. Search in SharePoint 2013 provides support for these scenarios through the  [Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.aspx) , [Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.aspx) , and [ISecurityTrimmer2](https://msdn.microsoft.com/library/Microsft.Office.Server.Search.Query.ISecurityTrimmer2.aspx) (deprecated) interfaces in the [Microsoft.Office.Server.Search.Query](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.aspx) namespace.
  
    
    

There are two kinds of custom security trimming: Pre-trimming and post-trimming. Pre-trimming refers to pre-query evaluation where the query is rewritten to add security information before the query is matched to the search index. Post-trimming refers to post-query evaluation where the search results are pruned before they are returned to the user.
We recommend the use of pre-trimming for performance and general correctness; post-trimming prevents information leakage for refiner data and hit count instances.
  
    
    

The security trimmer registration process enables you to specify configuration properties for the custom security trimmer.
## Overview

Custom Security Trimming in Search in SharePoint 2013 consists of two interfaces that can be used to carry out pre-trimming or post-trimming of your search results. This how-to focuses on both interfaces, describing the steps necessary to create and register your own security trimmers.
  
    
    

## Prerequisites
<a name="PreReq"> </a>

To complete this how-to, you must have the following installed in your development environment:
  
    
    

- Search in Microsoft SharePoint 2013
    
  
- Microsoft Visual Studio 2010 or similar Microsoft .NET Framework-compatible development tool
    
  

## Set up a custom security trimmer project
<a name="SetUp"> </a>

In this step, you will create the custom security trimmer project, and then add the required references to the project.
  
    
    

### To create the project for a custom security trimmer


1. Open Visual Studio and choose **File**, **New**, **Project**.
    
  
2. In **Project types**, under **C#**, choose **SharePoint**.
    
  
3. Under **Templates**, choose **Empty SharePoint Project**. In the **Name** field, type **CustomSecurityTrimmerSample**, and then choose the **OK** button.
    
  
4. In the **SharePoint Customization Wizard**, choose **Deploy as a farm solution**, and then choose **Finish**.
    
  

### To add references to the custom security trimmer project


1. On the **Project** menu, choose **Add Reference**.
    
  
2. On the **.NET** tab, choose the references with the following component names, and then choose the **OK** button:
    
  - **Microsoft Search component**
    
    You should see two entries on the **.NET** tab with the component name **Microsoft Search component**. Select the entry where the Path column is \\ISAPI\\Microsoft.Office.Server.Search.dll. If this entry is missing from the **.NET** tab in the **Add References** dialog box, you must add the reference from the **Browse** tab by using the path to the Microsoft.Office.Server.Search.dll.
    
  
  - **Microsoft.IdentityModel**
    
    If **Microsoft.IdentityModel** is not listed on the **.NET** tab, you must add the reference to the Microsoft.IdentityModel.dll from the **Browse** tab, by using the following path:
    
     `%ProgramFiles%\\Reference Assemblies\\Microsoft\\Windows Identity Foundation\\v4.0.`
    
  

## Create a custom security pre-trimmer
<a name="CreatePreTrimmer"> </a>


### To create the class file for the security pre-trimmer


1. On the **Project** menu, choose **Add New Item**.
    
  
2. Under **Visual C# Items** in **Installed Templates**, choose **Code**, and then choose **Class**.
    
  
3. Type **CustomSecurityPreTrimmer.cs**, and then choose **Add**.
    
  

### Writing the custom security pre-trimmer code

Your custom security trimmer must implement the **ISecurityTrimmerPre** interface. The following code example is a basic implementation of this interface.
  
    
    

### To modify the default code in CustomSecurityPreTrimmer


1. Add the following **using** directives at the beginning of the class.
    
  ```cs
  
using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Security.Principal;
using Microsoft.IdentityModel.Claims;
using Microsoft.Office.Server.Search.Query;
using Microsoft.Office.Server.Search.Administration;

  ```

2. Specify that the **CustomSecurityPreTrimmer** class implements the [ISecurityTrimmerPre](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.aspx) interface in the class declaration, as shown in the following code.
    
  ```cs
  
public class CustomSecurityPreTrimmer : ISecurityTrimmerPre
  ```


### To implement the ISecurityTrimmerPre interface methods


1. Add the following code for the  [Initialize()](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.Initialize.aspx) method declaration.
    
  ```cs
  public void Initialize(NameValueCollection staticProperties, SearchServiceApplication searchApplication)
{

}
  ```


    The basic version of this sample does not include any code in the **Initialize** method.
    
  
2. Add the following code for the  [AddAccess()](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.AddAccess.aspx) method declaration.
    
  ```cs
  
public IEnumerable<Tuple<Claim, bool>> AddAccess(
                IDictionary<string, object> sessionProperties, IIdentity passedUserIdentity)
{
//AddAccess method implementation, see steps 3-5.
}
  ```

3. For the first part of the **AddAccess** method implementation, we find out who the user is by looking at the _passedUserIdentity_.
    
  ```cs
  
if (passedUserIdentity == null)
{
   throw new ArgumentException("AddAccess method is called with invalid user identity
   parameter", "passedUserIdentity");
}
            
   String strUser = null;
   var claimsIdentity = (IClaimsIdentity)passedUserIdentity;
   if (claimsIdentity != null)
   {
      foreach (var claim in claimsIdentity.Claims)
      {
         if (claim == null) 
         {
            continue;
         }
         
         // strUser is "domain\\\\user" format when web app is in Claims Windows Mode
         if (SPClaimTypes.Equals(claim.ClaimType, SPClaimTypes.UserLogonName))
         {
            strUser = claim.Value;
            break;
         }

         // strUser2 is "S-1-5-21-2127521184-1604012920-1887927527-66602" when web app is   
            in Legacy Windows Mode
         // In this case we need to convert it into NT user format.
         if (SPClaimTypes.Equals(claim.ClaimType, ClaimTypes.PrimarySid))
         {
            strUser = claim.Value;
            SecurityIdentifier sid = new SecurityIdentifier(strUser);
            strUser = sid.Translate(typeof(NTAccount)).Value;
            break;
         }
      }
}            

  ```

4. Create a list, populate the list with claims and return the list, as shown in the following code.
    
  ```cs
  
var claims = new LinkedList<Tuple<Claim, bool>>();
if (!string.IsNullOrEmpty(strUser))
   {
      var groupMembership = GetMembership(strUser);
      if (!string.IsNullOrEmpty(groupMembership))
      {
         var groups = groupMembership.Split(new[] {';'},
         StringSplitOptions.RemoveEmptyEntries);
         foreach (var group in groups)
         {
            claims.AddLast(new Tuple<Claim, bool>(
            new Claim("http://schemas.happy.bdc.microsoft.com/claims/acl", group), false));
         }
      }
   }
   return claims;
}

  ```


    The **GetMembership** method contains the custom logic of your trimmer.
    
  

## Create a custom security post-trimmer
<a name="CreatePostTrimmer"> </a>


### To create the class file for the security post-trimmer


1. On the **Project** menu, choose **Add New Item**.
    
  
2. Under **Visual C# Items** in **Installed Templates**, choose **Code**, and then choose **Class**..
    
  
3. Type CustomSecurityPostTrimmer.cs, and then choose **Add**.
    
  

### Writing the custom security post-trimmer code

Your custom security trimmer must implement the **ISecurityTrimmerPost** interface. The code example in this section is a basic implementation of this interface.
  
    
    

### To modify the default code in CustomSecurityPostTrimmer


1. Add the following **using** directives at the beginning of the class:
    
  ```cs
  
using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Security.Principal;
using Microsoft.IdentityModel.Claims;
using Microsoft.Office.Server.Search.Query;
using Microsoft.Office.Server.Search.Administration;

  ```

2. Specify that the **CustomSecurityPostTrimmer** class implements the [ISecurityTrimmerPost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.aspx) interface in the class declaration, as follows:
    
  ```cs
  
public class CustomSecurityPostTrimmer : ISecurityTrimmerPost
  ```


### To implement the ISecurityTrimmerPost interface methods


1. Add the following code for the  [Initialize()](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.Initialize.aspx) method declaration.
    
  ```cs
  public void Initialize(NameValueCollection staticProperties, SearchServiceApplication searchApplication)
{

}
  ```


    The basic version of this sample does not include any code in the Initialize method.
    
  
2. Add the following code for the  [CheckAccess()](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.CheckAccess.aspx) method declaration.
    
  ```cs
  
public BitArray CheckAccess(IList<string> documentCrawlUrls, IList<string> documentAcls, IDictionary<string, object> sessionProperties, IIdentity passedUserIdentity)
{
//CheckAccess method implementation, see steps 3-5.
}
  ```

3. For the first part of the **CheckAccess** method implementation, declare and initialize a **BitArray** variable to store the results of the access check for each URL in the **documentCrawlUrls** collection, and retrieve the user who submitted the query, as shown in the following code.
    
  ```cs
  
if (documentCrawlUrls == null)
{
   throw new ArgumentException("CheckAccess method is called with invalid URL list",
   "documentCrawlUrls");
}
if (documentAcls == null)
{
   throw new ArgumentException("CheckAccess method is called with invalid documentAcls   
   list", "documentAcls");
}
if (passedUserIdentity == null)
{
   throw new ArgumentException("CheckAccess method is called with invalid user identity
   parameter", "passedUserIdentity");
}

  ```

4. Loop through each crawl URL in the collection, and perform the access check to determine if the user who submitted the query can access the crawl URL's associated content item, as shown in the following code. 
    
  ```cs
  
// Initialize the bit array with TRUE value which means all results are visible by default.
var urlStatusArray = new BitArray(documentCrawlUrls.Count, true);
var claimsIdentity = (IClaimsIdentity)passedUserIdentity;
if (claimsIdentity != null)
{
   var userGroups = GetGroupList(claimsIdentity.Claims);
   var numberDocs = documentCrawlUrls.Count;
   for (var i = 0; i < numberDocs; ++i)
   {
      if (!string.IsNullOrEmpty(documentAcls[i]))
      {
         urlStatusArray[i] = VerifyAccess(documentAcls[i], userGroups);
      }
   }
}

  ```


    If the user has access to the content item, set the value of the **BitArray** item at that index, **urlStatusArray[i]**, to **true**; otherwise, set it to **false**.
    
  
5. Set the return value of the **CheckAccess** method to **urlStatusArray**, as shown in the following code.
    
  ```cs
  
return urlStatusArray;
  ```


## Register the custom security trimmer
<a name="RegisterTrimmer"> </a>

This step describes how to configure the custom security trimmer, and includes the following tasks:
  
    
    

- Registering the custom security trimmer for the Search service application by using the Windows PowerShell cmdlets.
    
  
- Restarting the SharePoint search host controller (SPSearchHostController).
    
  

### Register the custom security trimmer

You use the SharePoint Management Shell to register a custom security trimmer with  _ClassName_. In our case,  _ClassName_ could be either **CustomSecurityPreTrimmer** or **CustomSecurityPostTrimmer**. The following procedure shows how to register a custom security trimmer, with the ID set to 1 for the Search service application.
  
    
    

### To register the custom security trimmer


1. In Windows Explorer, locate CustomSecurityTrimmerSample.dll in the path  _<Local_Drive>_:\\WINDOWS\\assembly.
    
  
2. Open the shortcut menu for the file, and then choose Properties.
    
  
3. On the **General** tab in the **Properties** dialog box, select the token and copy it.
    
  
4. Open the SharePoint Management Shell. For information about using this tool, see  [Administering Service Applications Using the SharePoint 2010 Management Shell](http://msdn.microsoft.com/library/aff64855-7377-4e4a-b3a9-b620c9047076%28Office.15%29.aspx)
    
  
5. At the command prompt, type the following command.
    
  ```
  New-SPEnterpriseSearchSecurityTrimmer -SearchApplication "Search Service Application"
-typeName "CustomSecurityTrimmerSample.ClassName, CustomSecurityTrimmerSample, 
Version=1.0.0.0, Culture=neutral, PublicKeyToken=token" -RulePath "xmldoc://*"
  ```


    In the command, replace  _ClassName_ either with **CustomSecurityPreTrimmer** or **CustomSecurityPostTrimmer** and _token_ with the Public Key Token for the CustomSecurityTrimmerSample.dll file. You must associate all post-trimmers with a crawl rule, _"xmldoc://*"_; but this is optional for pre-trimmers.
    
    > **Note:**
      > If you have multiple front-end web servers, you must deploy your security trimmer to the global assembly cache on all the front-end web servers in the farm. 
6. Verify that your security trimmer is registered with the following PowerShell cmdlets.
    
  ```
  
$searchApp = Get-SPEnterpriseSearchServiceApplication
$searchApp | Get-SPEnterpriseSearchSecurityTrimmer
  ```


    Your security trimmer must be visible in the results.
    
  

### To restart the SharePoint search host controller


- You can restart the Search Service by typing the following PowerShell cmdlet.
    
  ```
  
net restart sphostcontrollerservice

  ```


## Additional resources
<a name="bk_sectrimmer_addlresources"> </a>


-  [Custom security trimming for Search in SharePoint Server 2013](custom-security-trimming-for-search-in-sharepoint-server.md)
    
  
-  [Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPre.aspx)
    
  
-  [Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.ISecurityTrimmerPost.aspx)
    
  
-  [Microsoft.Office.Server.Search.Query.PluggableAccessCheckException](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.PluggableAccessCheckException.aspx)
    
  

