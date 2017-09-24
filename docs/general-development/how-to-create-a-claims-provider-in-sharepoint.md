---
title: How to Create a claims provider in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 8f3228ca-57fd-4253-a07d-abeb63298c58
---


# How to: Create a claims provider in SharePoint
Learn how to create and implement a SharePoint claims provider that fulfills the requirements for claims augmentation and claims picking.
A claims provider issues claims and packages claims into security tokens. A claims provider has two roles: augmentation and picking.
  
    
    

Claims augmentation enables an application to augment additional claims into the user's token. For example, with Windows-based log-in, the Active Directory directory service can augment all of a user's security groups into the user's Windows token. With claims-based log-in, a customer relationship management (CRM) application can augment roles from a CRM database. By having these claims in the user's token, resources can be authorized against these claims. That is, these claims are used to determine whether a particular user has access to specific resources.
Claims can be displayed in the people picker control through claims picking. Claims picking enables an application to surface claims in the people picker, for example, when configuring the security of a SharePoint site or SharePoint service. This functionality enables you to provide search, resolve, and friendly display of claims.
  
    
    


> **Note:**
> A people picker with claims picking functionality is sometimes referred to as a claims picker. For more information, see  [People picker and claims provider planning](http://technet.microsoft.com/en-us/library/gg602063.aspx). 
  
    
    

To write a claims provider, your first step is to create a class that derives from the **SPClaimProvider** class.
> **Tip:**
> For a code example and more information about the **SPClaimProvider** class and its members, see [SPClaimProvider](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaimProvider.aspx) . For walkthroughs, tips, and code samples, see [Claims and Security: Technical articles and code samples on MSDN](http://msdn.microsoft.com/library/f773fd4a-53ec-4656-bd08-e6c435e6f103%28Office.15%29.aspx). 
  
    
    


## Required implementations
<a name="SP15_HowToCreateClaimsProvider_ReqImplementations"> </a>

The following are required methods and properties when writing a claims provider.
  
    
    

### Required

The following  [Name](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaimProvider.Name.aspx) property is a required property. The name should be unique across the farm.
  
    
    

```cs

public abstract String Name
      
```


### Required for claims picker

Claims can be displayed in the people picker control through claims picking. The following methods in the  [SPClaimProvider](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaimProvider.aspx) class are required methods if you want to implement claim picking in the people picker control.
  
    
    

```cs

protected abstract void FillSchema(SPProviderSchema schema);
     protected abstract void FillClaimTypes(List<String> claimTypes);
     protected abstract void FillClaimValueTypes(List<String> claimValueTypes);
     protected abstract void FillEntityTypes(List<String> entityTypes);

```


### Required for claims augmentation

When you include additional claims in a user's security token, you are augmenting claims. If you want to augment claims, you must implement the following methods in the  [SPClaimProvider](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaimProvider.aspx) class.
  
    
    

```cs

public abstract bool SupportsEntityInformation
      protected abstract void FillClaimsForEntity(Uri context, SPClaim entity, List<SPClaim> claims);

```


### Required for displaying hierarchy on the left pane of the claims picker

If you want to display hierarchy on the left pane of the claims picker, you must implement the following methods in the  [SPClaimProvider](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaimProvider.aspx) class.
  
    
    

```cs

public abstract bool SupportsHierarchy
     protected abstract void FillHierarchy(Uri context, String[] entityTypes, String hierarchyNodeID, int numberOfLevels, bool includeEntityData, SPProviderHierarchyTree hierarchy);

```


### Required for resolving claims in the type-in control of the claims picker

If you want to be able to resolve claims by using the type-in control of the claims picker, you must implement the following methods in the  [SPClaimProvider](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaimProvider.aspx) class.
  
    
    

```cs

public abstract bool SupportsResolve
     protected abstract void FillResolve(Uri context, String[] entityTypes, String resolveInput, List<PickerEntity> resolved);
     protected abstract void FillResolve(Uri context, String[] entityTypes, SPClaim resolveInput, List<PickerEntity> resolved);

```


### Required for searching for claims in the claims picker

If you want to be able to search for claims in the claims picker, you must implement the following property and method in the  [SPClaimProvider](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaimProvider.aspx) class.
  
    
    

```cs

public abstract bool SupportsSearch
     protected abstract void FillSearch(Uri context, String[] entityTypes, String searchPattern, String hierarchyNodeID, int maxCount, SPProviderHierarchyTree searchTree);

```


## Useful helper method
<a name="SP15_HowToCreateClaimsProvider_UsefulHelperMethod"> </a>

You can also implement a helper method to help you create  [SPClaim](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaim.aspx) objects.
  
    
    

### Useful helper method for creating SPClaim objects

The following is a helper method that you can implement to help you create  [SPClaim](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.Claims.SPClaim.aspx) objects.
  
    
    

```cs

protected SPClaim CreateClaim(String claimType, String value, String valueType)
```


## Additional resources
<a name="SP15_HowToCreateClaimsProvider_AdditionalResources"> </a>


-  [Claims-based identity in SharePoint](claims-based-identity-in-sharepoint.md)
    
  
-  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint.md)
    
  
-  [Claims provider in SharePoint](claims-provider-in-sharepoint.md)
    
  
-  [How to: Deploy a claims provider in SharePoint](how-to-deploy-a-claims-provider-in-sharepoint.md)
    
  

