---
title: Claims-based identity and concepts in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: d96c7cf4-2e48-4223-a3c0-42368d079b74
---


# Claims-based identity and concepts in SharePoint

## Claims-based identity model

When you build claims-aware applications, the user presents an identity to your application as a set of claims. One claim could be the user's name, another might be an email address. The idea here is that an external identity system is configured to give your application all the information it needs about the user with each request, along with cryptographic assurance that the identity data received by your application comes from a trusted source.
  
    
    
Under this model, single sign-on is much easier to achieve, and your application is no longer responsible for the following:
  
    
    

- Authenticating users
    
  
- Storing user accounts and passwords
    
  
- Calling to enterprise directories to look up user identity details
    
  
- Integrating with identity systems from other platforms or companies
    
  
Under this model, your application makes identity-related decisions based on claims supplied by the user. This could be anything from simple application personalization with the user's first name, to authorizing the user to access higher value features and resources in your application.
  
    
    
The following sections introduce terminology and concepts to help you understand the claims-based identity architecture.
  
    
    

### Identity: A set of attributes that describe an entity

Identity is a set of attributes that describe a user, or some other entity, in a system that you want to secure.
  
    
    

### Claim: A piece of identity information

Think of a claim as a piece of identity information (for example, name, email address, age, or membership in the Sales role). The more claims your application receives, the more you know about your user. These are called "claims" rather than "attributes," as is commonly used in describing enterprise directories, because of the delivery method. In this model, your application does not look up user attributes in a directory. Instead, the user delivers claims to your application, and your application examines them. Each claim is made by an issuer, and you trust the claim only as much as you trust the issuer. For example, you trust a claim made by your company's domain controller more than you trust a claim made by the user.
  
    
    

### Security token: A serialized set of claims

The user delivers a set of claims to your application with a request. In a web service, these claims are carried in the security header of the SOAP envelope. In a browser-based web application, the claims arrive through an HTTP POST from the user's browser, and may later be cached in a cookie if a session is desired. Regardless of how these claims arrive, they must be serialized. A security token is a serialized set of claims that is digitally signed by the issuing authority. The signature is important: it gives you assurance that the user did not just make up claims and send them to you. In low-security situations where cryptography is not necessary or desired, you can use unsigned tokens, but that scenario is not described in this article.
  
    
    
One of the core features in Windows Identity Foundation (WIF) is the ability to create and read security tokens. WIF and the Microsoft .NET Framework handle all of the cryptographic work, and present your application with a set of claims that it can read.
  
    
    

### Security token service (STS)

A security token service (STS) is the plumbing that builds, signs, and issues security tokens according to the interoperable protocols discussed in the "Standards" section of this article. There is a lot of work that goes into implementing these protocols, but WIF does all of this work for you, making it possible for someone who is not a protocols expert to get an STS up and running with little effort. 
  
    
    
WIF makes it easier to build your own STS. It is up to you to figure out how to implement the logic, or rules, that enforce it (often referred to as security policy).
  
    
    

### Issuing authority

There are many different types of issuing authorities, from domain controllers that issue Kerberos tickets, to certificate authorities that issue X.509 certificates. The specific type of authority discussed in this article issues security tokens that contain claims. This issuing authority is a web application or web service that issues security tokens. It must be able to issue the proper claims given the target relying party and the user making the request, and might be responsible for interacting with user stores to look up claims and authenticate users.
  
    
    
Whatever issuing authority you choose, it plays a central role in your identity solution. When you factor authentication out of your application by relying on claims, you are passing responsibility to that authority and asking it to authenticate users on your behalf.
  
    
    

### Relying parties

When you build an application that relies on claims, you are building a relying party application. Synonyms for a relying party include "claims-aware application" and "claims-based application". Web applications and web services can both be relying parties.
  
    
    
A relying party application consumes tokens issued by an STS and extracts claims from tokens to use them for identity related tasks. The STS supports two types of relying party application: ASP.NET web applications, and Windows Communication Foundation (WCF) web services.
  
    
    

### Standards

To make all of this interoperable, several WS-* standards are used in the previous scenario. Policy is retrieved by using WS-MetadataExchange, and the policy itself is structured according to the WS-Policy specification. The STS exposes endpoints that implement the WS-Trust specification, which describes how to request and receive security tokens. Most security token services today issue tokens formatted with Security Assertion Markup Language (SAML). SAML is an industry-recognized XML vocabulary that can be used to represent claims in an interoperable way. Or, in a multiplatform situation, this enables you to communicate with an STS on an entirely different platform and achieve single sign-on across all of your applications, regardless of platform.
  
    
    

### Browser-based applications

Smart clients are not the only ones who can use the claims-based identity model. Browser-based applications (also referred to as passive clients) can also use it. The following scenario describes how this works.
  
    
    
First, the user points a browser at a claims-aware web application (the relying party application). The web application redirects the browser to the STS so that the user can be authenticated. The STS is hosted in a simple web application that reads the incoming request, authenticates the user by using standard HTTP mechanisms, and then creates a SAML token and replies with a piece of ECMAScript (JavaScript, JScript) code that causes the browser to initiate an HTTP POST that sends the SAML token back to the relying party. The body of this POST contains the claims that the relying party requested. At this point, it is common for the relying party to package the claims into a cookie so that the user does not have to be redirected for each request.
  
    
    

### Claims to Windows Token Service (c2WTS)

The Claims to Windows Token Service (c2WTS) is a feature of Windows Identity Foundation (WIF). The c2WTS extracts user principal name (UPN) claims from non-Windows security tokens, such as SAML and X.509 tokens, and generates impersonation-level Windows security tokens. This allows a relying party application to impersonate the user. This might be needed to access back-end resources, such as Microsoft SQL Servers, that are external to the computer running the relying party application.
  
    
    
The c2WTS is a Windows service that is installed as part of WIF. For security reasons, the c2WTS works only on an opt-in basis. It must be started manually and it runs as the local system account. An administrator must also manually configure the c2WTS with a list of allowed callers. By default, the list is empty. 
  
    
    
If your relying party application runs as the local system account, it does not need to use the c2WTS. But, if your relying party application runs as the network service account, or is an ASP.NET application, for example, it might need to use the c2WTS to access resources on another computer.
  
    
    
Suppose that you have a web farm that consists of a server that runs an ASP.NET application, which accesses a SQL database on a back-end server. You want to make this application claims-aware. But, the application can't access the SQL database by using the claim that it receives from an STS. Instead, it uses the c2WTS to convert the UPN claim to a Windows security token. This allows it to access the SQL database.
  
> [!NOTE]
> To allow an application to access resources on a different server, a domain administrator must configure the Active Directory directory service to enable constrained delegation. For information about how to enable constrained delegation, see  [How to: Use protocol transition and constrained eelegation in ASP.NET 2.0](http://msdn.microsoft.com/en-us/library/ms998355.aspx). 
  
    
    


## Additional resources
<a name="bk_addresources"> </a>


-  [Authentication, authorization, and security in SharePoint](authentication-authorization-and-security-in-sharepoint.md)
    
  
-  [Sample delegation, federation, and authentication scenario in SharePoint](sample-delegation-federation-and-authentication-scenario-in-sharepoint.md)
    
  
-  [Claims-based identity term definitions](claims-based-identity-term-definitions.md)
    
  

