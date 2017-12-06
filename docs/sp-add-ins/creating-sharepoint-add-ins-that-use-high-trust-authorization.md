---
title: Creating SharePoint Add-ins that use high-trust authorization
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Creating SharePoint Add-ins that use high-trust authorization
Learn about high-trust SharePoint Add-ins, which use digital certificates to establish trust between SharePoint and the remote components that access SharePoint.
 

 

 **Provided by:**
 
Steve Peschka, Microsoft Corporation

Siew Moi Khor, Microsoft Corporation
 

## Overview of high-trust SharePoint Add-ins
<a name="Overview"> </a>

A high-trust add-in is a provider-hosted SharePoint Add-in that is installed to an on-premises SharePoint farm. It cannot be installed to Microsoft SharePoint Online or marketed through the Office Store. A high-trust add-in uses a certificate instead of a context token to establish trust.
 
> [!NOTE] 
> This topic helps you understand the high-trust authorization system for SharePoint Add-ins. For practical information about creating and deploying high-trust add-ins, see the following topics: [Create high-trust SharePoint Add-ins](create-high-trust-sharepoint-add-ins.md) [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md)
 

In SharePoint, the security token service (STS) provides access tokens for server-to-server authentication. The STS enables temporary access tokens to access other application services such as Exchange 2013, Lync 2013, and SharePoint Add-ins. A farm administrator establishes trust between SharePoint and the other application or add-in by using Windows PowerShell cmdlets and a certificate. Each certificate that is used must be trusted by SharePoint using the  `New-SPTrustedRootAuthority` cmdlet. Also each certificate must be registered with SharePoint as a token issuer using the `New-SPTrustedSecurityTokenIssuer` cmdlet.
 
> [!NOTE] 
> The STS isn't intended for user authentication. So, you won't see the STS listed on the user sign-in page, in the  **Authentication Provider** section in Central Administration, or in the People Picker in SharePoint.
 


## Two kinds of token issuers
<a name="TwoKindsOfIssuers"> </a>

The remote web application of a high-trust SharePoint Add-in is bound to a digital certificate. (For information about how this is done, see the two topics linked-to above.) The certificate is used by the remote web application to sign the access tokens that it includes in all its requests to SharePoint. The web application signs the token with the private key of the certificate and SharePoint validates it with the public key of the certificate. The certificate has to be registered as a trusted token issuer before SharePoint will trust the tokens that it issues. There are two kinds of token issuers: some can only issue tokens for a particular SharePoint Add-in; others, called trust brokers, can issue tokens for multiple SharePoint Add-ins.
 

 
As a practical matter, SharePoint farm administrators determine which type of token issuer is created by the switches and parameter values they use with the  `New-SPTrustedSecurityTokenIssuer` cmdlet. To create a token issuer that is a trust broker, add the `-IsTrustBroker` switch to the command line and use a unique value, other than an add-in's client ID, for the `-Name` parameter. The following is an edited example.
 

 



```
New-SPTrustedSecurityTokenIssuer -IsTrustBroker -RegisteredIssuerName "<full_token_issuer_name> " --other parameters omitted--
```

To create a non-broker token issuer, the  `-IsTrustBroker` switch is not used. There is one other difference. The value of the `-RegisteredIssuerName` parameter is always in the form of two GUIDs separated by the "@" character; _GUID_@ _GUID_. The GUID on the right side is always the ID of the authentication realm of the SharePoint farm (or site subscription). The GUID on the left side is always a specific ID for a token issuer. It is a random GUID when a  *trust broker*  token issuer is being created. But when a non-broker token issuer is being created, the specific issuer GUID must be the same GUID that is used as the client ID of the SharePoint Add-in. This parameter provides a name for the issuer. It also tells SharePoint which SharePoint Add-in is the only one for which the certificate can issue tokens. The following is a partial example:
 

 



```
$fullIssuerIdentifier = "<client_ID_of_SP_app> " + "@" + "<realm_GUID> "
New-SPTrustedSecurityTokenIssuer -RegisteredIssuerName $fullIssuerIdentifier --other parameters omitted--
```

Typically, the  `New-SPTrustedSecurityTokenIssuer` cmdlet is used in a script that performs other tasks to configure SharePoint for high-trust add-ins. For more information about such scripts and complete examples of the `New-SPTrustedSecurityTokenIssuer` cmdlet, see [High-trust configuration scripts for SharePoint](high-trust-configuration-scripts-for-sharepoint.md).
 

 

## Deciding between using one certificate or many for high-trust SharePoint Add-ins
<a name="Deciding"> </a>

SharePoint and network administrator have two basic strategies to choose from when obtaining and managing certificates for use by high-trust SharePoint Add-ins:
 

 

- Use the same certificate for multiple SharePoint Add-ins.
    
 
- Use a separate certificate for each SharePoint Add-in.
    
 
This section discusses the pros and cons for each strategy.
 

 
The benefit of using the same certificate for multiple SharePoint Add-ins is that an administrator has fewer certificates to trust and manage. The disadvantage in this approach is that, when you encounter a situation where you want to break trust with a particular SharePoint Add-in, the only way the administrator can break trust is by removing the certificate as a token issuer or as a root authority. But removing the certificate also breaks trust with all other SharePoint Add-ins that use the same certificate, which causes them all to stop working.
 

 
To get the still trustworthy SharePoint Add-ins working again, the administrator would need to create a  `New-SPTrustedSecurityTokenIssuer` object *using a new certificate*  and include the `-IsTrustBroker` flag. Then the new certificate would have to be registered with each server that hosts any of the trustworthy add-ins and each of those add-ins would have to be bound to the new certificate.
 

 
The benefit of using one certificate per add-in is that it makes it easier to break trust with a particular add-in, because the certificates that are used by the still trustworthy add-ins are not affected when the administrator breaks trust with the certificate of the one add-in. The disadvantage in this strategy is that an administrator has more certificates to acquire and SharePoint must be configured to use each of them, which can be done with a reusable script as shown in  [High-trust configuration scripts for SharePoint](high-trust-configuration-scripts-for-sharepoint.md).
 

 

## Certificates are root authorities in SharePoint
<a name="RootAuthorities"> </a>

As mentioned briefly at the top of this article, SharePoint farm administrators have to make the certificate, of the remote web application in the high-trust add-in, a trusted root authority in SharePoint as well as a trusted token issuer. In fact, when there is a hierarchy of certificate issuing authorities behind the web application's certificate, all the certificates in the chain must be added to SharePoint's list of trusted root authorities.
 

 
Each certificate in the chain is added to SharePoint's list of trusted root authorities with a call of the  `New-SPTrustedRootAuthority` cmdlet. For example, suppose that the web application's certificate is a domain certificate that is issued by an enterprise domain certificate authority on the LAN, and suppose that its certificate, in turn, was issued by a standalone, top-level certificate authority on the LAN. In this scenario, the certificates of the top-level CA, the intermediate CA, and the web application all have to be added to SharePoint's list of trusted root authorities. The following Windows PowerShell code would accomplish this.
 

 



```
$rootCA = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("<path_to_top-level_CA's_cer_file>")
New-SPTrustedRootAuthority -Name "<name_of_certificate>" -Certificate $rootCA

$intermediateCA = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("path_to_intermediate_CA's_cer_file")
New-SPTrustedRootAuthority -Name "<name_of_certificate>" -Certificate $intermediateCA

$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("path_to_web_application's_cer_file") 
New-SPTrustedRootAuthority -Name "<name_of_certificate>" -Certificate $certificate 

```

The root and intermediate certificates should be added only once on a SharePoint farm. Typically, the web application's certificate is added in a separate script that does other configuration too, such as the call to  `New-SPTrustedSecurityTokenIssuer`. For examples, see  [High-trust configuration scripts for SharePoint](high-trust-configuration-scripts-for-sharepoint.md).
 

 
If the web application's certificate is self-signed, as might be the case when the add-in is being developed and debugged, then there is no certificate chain and only the web application's certificate needs to be added to the list of root authorities.
 

 
For more information, see the blog post  [Root of certificate chain not trusted error with claims authentication](http://blogs.technet.com/b/speschka/archive/2010/02/13/root-of-certificate-chain-not-trusted-error-with-claims-authentication.aspx). (Scroll past the section about exporting the certificate from Active Directory Federation Services (AD FS), assuming you created your certificate for your high-trust add-ins via some other means; for example, by using a commercial certificate issued by a Certificate Authority, a self-signed certificate, or a domain-issued certificate.)
 

 

## Web application needs to know that it is a token issuer
<a name="AppIsTokenIssuer"> </a>

The remote web application component of the SharePoint Add-in is bound to its certificate in IIS. This is sufficient for the traditional purposes of certificates: securely identifying the web application and encoding the HTTP requests and responses. However, in a high-trust SharePoint Add-in, the certificate has the additional task of being the official "issuer" of the access tokens that the web application sends to SharePoint. For this purpose, web application has to know the issuer ID of the certificate that is used when registering the certificate as a token issuer with SharePoint. The web application gets this ID from the  **appSettings** section of the web.config file, where there is a key named **IssuerId**. Instructions for how the add-in developer sets this value, and how the certificate is bound to the web application in IIS, are in  [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md). Note that if the customer is using the strategy of having a separate certificate for each high-trust SharePoint Add-in, then the  **ClientId** value is also used as the **IssuerId** value. This is not the case when multiple add-ins share the same certificate, because each SharePoint Add-in must have its own unique client ID, but the issuer ID is the identifier for a **SPTrustedSecurityTokenIssuer** object.
 

 
Following is an example of an  **appSettings** section for a high-trust SharePoint Add-in. In this example, a certificate is being shared by multiple add-ins, so the **IssuerId** is not the same as the **ClientId**. Note that there is no  **ClientSecret** key in a high-trust SharePoint Add-in.
 

 



```XML
<appSettings>
  <add key="ClientId" value="6569a7e8-3670-4669-91ae-ec6819ab461" />
  <add key="ClientSigningCertificatePath" value="C:\MyCerts\HighTrustCert.pfx" />
  <add key="ClientSigningCertificatePassword" value="3VeryComplexPa$$word82" />
  <add key="IssuerId" value="e9134021-0180-4b05-9e7e-0a9e5a524965" />
</appSettings>

```


 **Security Note**  The preceding example assumes that the certificate is stored on the file system. This is acceptable for development and debugging. In a production high-trust SharePoint Add-in, the certificate is usually stored in the Windows Certificate Store, and the  **ClientSigningCertificatePath** and **ClientSigningCertificatePassword** keys are typically replaced by a **ClientSigningCertificateSerialNumber** key.
 


## IT staff responsibilities in the high-trust system
<a name="ITPro"> </a>

Developers will have to understand the requirements for application security as described above, but IT Pros will be implementing the infrastructure required to support it. IT Pros must plan for the following operational requirements:
 

 

- Create or purchase one or more certificates that will be used for trusted SharePoint Add-ins.
    
 
- Ensure that the certificates are securely stored on the web application servers. When Windows OS is being used, this means storing the certificates in the Windows Certificate Store.
    
 
- Manage the distribution of those certificates to developers who are building SharePoint Add-ins.
    
 
- Keep track where each certificate is distributed, for both the add-ins using it and the developers who have received a copy. If a certificate has to be revoked, the IT staff must work with each developer to arrange for a managed transition to a new certificate.
    
 

## Additional resources
<a name="AR"> </a>


-  [Create high-trust SharePoint Add-ins](create-high-trust-sharepoint-add-ins.md)
    
 
-  [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md)
    
 
-  [Troubleshooting tips for high trust add-ins on SharePoint](http://blogs.technet.com/b/speschka/archive/2012/11/01/more-troubleshooting-tips-for-high-trust-apps-on-sharepoint-2013.aspx)
    
 
-  [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
    
 

