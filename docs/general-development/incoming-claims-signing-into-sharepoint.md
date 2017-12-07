---
title: Incoming claims Signing into SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 08c687aa-e485-4269-aea8-4333da3588a5
---


# Incoming claims: Signing into SharePoint

## Signing in to SharePoint

When a user signs in to SharePoint Server, the user's token is validated and then used to sign in to SharePoint. The user's token is a security token issued by a claims provider.
  
> [!NOTE]
> For information about claims authentication for a single SharePoint farm and inter-farm SharePoint claims authentication, see  [Plan for claims authentication](http://technet.microsoft.com/en-us/library/cc262350.aspx) on TechNet.
  
    
    


### Windows claims mode sign-in

In Windows claims mode sign-in, the sign-in happens with Integrated Windows authentication challenge by using Negotiate (NTLM/Kerberos). But, after the  [WindowsIdentity](https://msdn.microsoft.com/library/System.Security.Principal.WindowsIdentity.aspx) object (which represents a Windows user) is created, SharePoint Server converts the [WindowsIdentity](https://msdn.microsoft.com/library/System.Security.Principal.WindowsIdentity.aspx) object into a [ClaimsIdentity](https://msdn.microsoft.com/library/Microsoft.IdentityModel.Claims.ClaimsIdentity.aspx) object (which represents a claims-based representation of a user).
  
    
    
SharePoint Server then does claims augmentation and handles the resulting token that is issued by SharePoint Server. This means that some features (for example, multitenant support for service applications and custom claims providers) in SharePoint Server work, even though the clients believe that SharePoint Server is in native Windows login mode. The Windows claims-mode sign-in experience is the built-in default for SharePoint Server. 
  
    
    
All claims sign-in types rely on passive sign-in. The passive sign-in happens by using Windows challenge, but from a separate login page that arrives through a 302 redirect. This mode is useful when more than one sign-in method is turned on and the user must choose between the supported claims providers. Win32 clients must support the forms-based authentication that is implemented in Office clients. Some Office clients follow a different protocol.
  
    
    

### SAML passive sign-in mode

In Security Assertion Markup Language (SAML) passive sign-in, when a user signs in, the client (which might be a webpage) is redirected to the designated claims provider (for example, the Windows Live ID claims provider). After the claims provider authenticates the user, SharePoint Server takes the SAML token presented by the claims provider, processes the SAML token, and then augments the claims.
  
    
    
For SAML-based claims providers, like the Active Directory Federation Services (ADFS) claims provider and the Windows Live ID claims provider, signing in by using the SAML passive sign-in mode is the only supported way. The SAML passive sign-in is the SharePoint online identity model.
  
> [!NOTE]
> SAML passive sign-in describes the process of signing in. When a sign-in for a web application is configured to accept tokens from a trusted login provider, this type of sign-in is called SAML passive sign-in. A trusted login provider is an external (that is, external to SharePoint) security token service (STS) that SharePoint trusts. 
  
    
    

Win32 clients must support the forms-based authentication that is implemented in Office clients.
  
    
    

### ASP.NET membership and role passive sign-in

In ASP.NET membership and role passive sign-in, the sign-in happens by redirecting the client to a webpage where the ASP.NET log-in controls are hosted. After the identity object that represents a user identity is created, SharePoint Server converts it to a  [ClaimsIdentity](https://msdn.microsoft.com/library/Microsoft.IdentityModel.Claims.ClaimsIdentity.aspx) object (which represents a claims-based representation of a user).
  
    
    
SharePoint Server then does claims augmentation. Win32 clients must support the forms-based authentication that is implemented in Office clients.
  
    
    

### Windows classic mode sign-in

The Windows classic mode sign-in is deprecated in this release. In Windows classic mode sign-in, the sign-in happens with the Integrated Windows authentication challenge by using Negotiate (NTLM/Kerberos). No claims augmentation is done, so some features (for example, multitenant support for service applications and custom claims providers) do not work when a user signs in by using this mode.
  
    
    
Some service applications may also require claims mode for some features. 
  
    
    

### Anonymous access

You can enable anonymous access for a web application. Administrators of sites within the web application can choose to allow anonymous access. If anonymous users want to gain access to secured resources, they can click a logon button to submit their credentials. 
  
    
    
SharePoint Server then does claims augmentation. Win32 clients must support the forms-based authentication that is implemented in Office clients.
  
    
    

## See also
<a name="bk_addresources"> </a>


-  [Claims-based identity in SharePoint](claims-based-identity-in-sharepoint.md)
    
  
-  [Claims provider in SharePoint](claims-provider-in-sharepoint.md)
    
  
-  [How to: Create a claims provider in SharePoint](how-to-create-a-claims-provider-in-sharepoint.md)
    
  
-  [How to: Deploy a claims provider in SharePoint](how-to-deploy-a-claims-provider-in-sharepoint.md)
    
  

