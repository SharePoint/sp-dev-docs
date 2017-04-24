---
title: Claims provider in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 5918d5b6-5fd6-4f41-9473-a15b1491d056
---


# Claims provider in SharePoint

## Claims providers

A claims provider in SharePoint Server issues claims and packages claims into security tokens, that is, into the user's token. When a user signs in to SharePoint Server, the user's token is validated and then used to sign in to SharePoint.
  
    
    
A claims provider in SharePoint has two roles: augmentation and picking.
  
    
    

> [!NOTE]
> For information about how to create a claims provider, see  [How to: Create a claims provider in SharePoint](how-to-create-a-claims-provider-in-sharepoint.md). 
  
    
    


### Claims augmentation

In the augmentation role, a claims provider augments a user token with claims during sign-in. Claims augmentation enables an application to augment additional claims into the user's token. For example, with Windows-based log-in, the Active Directory directory service can augment all of a user's security groups into the user's Windows token. With claims-based log-in, a customer relationship management (CRM) application can augment roles from a CRM database. By including these claims in the user's token, resources can be authorized against these claims. That is, these claims are used to determine whether a particular user has access to specific resources.
  
    
    

### Claims picking

In the picking role, a claims provider provides listing, resolve, search, and friendly display of claims functionality in the people picker. Claims picking enables an application to surface claims in the people picker, for example when configuring the security of a SharePoint site or SharePoint service. 
  
    
    

## Claims provider use scenarios

Claims providers are used to solve different scenarios. The following are some examples of the scenarios that you can use claims providers to solve.
  
    
    

### List, resolve, and search

In SharePoint Server, there are built-in claims providers to enable list, resolve, and search for built-in authentication providers. Examples of built-in authentication providers are Windows Active Directory, forms-based authentication, and trusted Security Assertion Markup Language (SAML) token issuers—that is, a security token service (STS). 
  
    
    
For a trusted SAML token issuer, SharePoint Server does not offer list or search. When a user enters some value, SharePoint Server always resolves it. This means that if you enter adam@contoso.com, the people picker accepts the value. This is because there is no industry standard that specifies how an STS resolves, implements search, or lists claim values.
  
    
    
Users can override the built-in claims provider to implement custom search, name resolution, and list features. This is very useful in scenarios like using a trusted SAML token issuer.
  
    
    

### Authenticated users or All Users claims

In SharePoint Server, there are some specific built-in claims providers that enable implementation support for concepts like authenticated users. This is also known as an All Users claim. This scenario enables you to grant rights to all users from a given authentication provider.
  
    
    

> [!NOTE]
> An authentication provider can be a Windows Active Directory, forms-based authentication, or a trusted SAML token issuer (that is, an STS). 
  
    
    

In SharePoint Server, there is also a systems claims provider that adds some internal claims used by a taxonomy service. For example, it adds farm identity and application pool account.
  
    
    

### Adding claims to an original token

Some of the built-in claims providers are also used to add the claims from the original "token". The word "token" is marked in quotes because some authentication providers, for example, forms-based authentication (that is, ASP.NET membership and role providers), do not provide a real token. In this case, think of this token from a conceptual perspective.
  
    
    
It might be necessary to add additional claims to a user's original claims token. For this scenario, a claims provider might be needed. For example, a claims provider might be needed to add SAP roles to a user's original claims token.
  
    
    

### Identity not from original token

Assume a scenario where your system has some specific requirements for people picking and token claims. In this scenario, you know the identity of the user based on the Microsoft .NET Passport Unique ID (PUID) and the original user. However, the information about the user does not come from the original user token; it comes from your custom Active Directory. You also have some additional Active Directory groups that the user may belong to, which are not contained in the original user token (issued by Windows Live ID). In this scenario, you can build a claims provider to meet your system-specific needs.
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Claims-based identity in SharePoint](claims-based-identity-in-sharepoint.md)
    
  
-  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint.md)
    
  
-  [How to: Create a claims provider in SharePoint](how-to-create-a-claims-provider-in-sharepoint.md)
    
  
-  [How to: Deploy a claims provider in SharePoint](how-to-deploy-a-claims-provider-in-sharepoint.md)
    
  

