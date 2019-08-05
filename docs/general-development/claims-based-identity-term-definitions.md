---
title: Claims-based identity term definitions
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 0f3decb5-dcd8-432f-9bb8-533f2d01bef7
localization_priority: Normal
---


# Claims-based identity term definitions

Table 1 contains definitions of key terms related to claims-based identity.
  
    
    


**Table 1. Definitions of terms related to claims-based identity**


|**Term**|**Definition**|
|:-----|:-----|
|Claim  <br/> |A statement that one subject makes about itself or another subject. For example, the statement can be about a name, identity, key, group, privilege, or capability. Claims are issued by a provider, and they are given one or more values and then packaged in security tokens that are issued by a security token service (STS). They are also defined by a claim value type and, possibly, associated metadata.  <br/> |
|Claim name  <br/> |A user-friendly name for the claim type.  <br/> |
|Claim type  <br/> |The type of statement in the claim. Examples of claim types include first name, role, and email address. The claim type provides context for the claim value, and it is usually expressed as a Uniform Resource Identifier (URI). For example, the email address claim type is represented as  `http://schemas.microsoft.com/ws/2008/06/identity/claims/email`.  <br/> |
|Claim value  <br/> |The value of the statement in the claim. For example, if the claim type is **role**, a value might be **contributor**. If the claim type is **first name**, a value might be **Matt**.  <br/> |
|Claim value type  <br/> |The type of value in the claim. For example, if the claim value is **Contributor**, the claim type value is **String**.  <br/> |
|Claims-aware application  <br/> |A relying-party software application that uses claims to manage identity and access for users.  <br/> |
|Claims-based identity  <br/> |A unique identifier that represents a specific user, application, computer, or other entity. It enables that entity to gain access to multiple resources, such as applications and network resources, without entering credentials multiple times. It also enables resources to validate requests from an entity.  <br/> |
|Claims provider  <br/> |A software component or service that can be used to issue one or more claims during sign-in operations. It is also used to display, resolve, and provide search capabilities for claims in a card selector (for example, in the people picker control in SharePoint). For more information, see  [Claims provider in SharePoint](claims-provider-in-sharepoint.md).  <br/> |
|Claims provider schema  <br/> |A schema that specifies the fields that must be returned as metadata for a claim that is issued by a specific claims provider.  <br/> |
|Claims provider - security token service  <br/> |A software component or service that is used by a claims provider that issues claims and packages them in security tokens.  <br/> |
|Delegate  <br/> |A rich client that is authorized to impersonate another client. For example, consider a situation in which a user-facing website, **Web1**, calls an infrastructure data service, **Data2**. It might be advantageous for **Web1** to impersonate its users when it accesses **Data2**. **Web1** contacts a federation server to obtain claims that represent one of its users. When it is contacted, the federation server can determine whether **Web1** is an authorized delegate and, if so, it can allow the impersonation. If it is authorized, **Web1** accesses **Data2** while acting as the user. <br/> |
|Identity provider  <br/> |An identity provider is a type of claims provider that provides single sign-on functionality between an organization and other claims providers and relying parties.  <br/> |
|Identity provider security token service or relying-party security token service  <br/> |A software component or service that is used by an identity provider to accept tokens from a federation partner, and then generate claims and security tokens on the contents of the incoming security token into a format consumable by the relying party. A security token service (STS) receives security tokens from a trusted federation partner or claims provider STS. Then, the relying party STS issues new security tokens to be consumed by a local relying-party application.  <br/> |
|Relying party  <br/> |An application that relies on and uses claims in security tokens that a claims provider issues. For example, an online auction website organization might receive a security token with claims that determine whether a subject can access all or part of a relying party's application.  <br/> |
|Relying-party application  <br/> |Software that can consume claims to make authentication and authorization decisions. The relying party application receives the claims from a claims provider.  <br/> |
|Rich client  <br/> |A client that can use the WS-Trust protocol.  <br/> |
|SAML passive sign-in  <br/> |SAML passive sign-in describes the process of signing in. When a sign-in for a web application is configured to accept tokens from a trusted login provider, this type of sign-in is called SAML passive sign-in. For more information, see  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint.md).  <br/> |
|Security Assertion Markup Language (SAML) Security Token  <br/> |The data format for communicating claims between a claims provider and a relying party.  <br/> |
|Security Assertion Markup Language (SAML)  <br/> |The WebSSO protocol that is defined in the SAML 2.0 Core specification. The SAML protocol specifies how to use HTTP web browser redirects to exchange assertions data. SAML is used to authenticate and authorize users across secure boundaries.  <br/> |
|Security token  <br/> |An on-the-wire representation of claims that is cryptographically signed by the issuer of the claims, providing strong proof to any relying party as to the integrity of the claims and the identity of the issuer.  <br/> |
|Security token service (STS)  <br/> |A web service that issues claims and packages them in encrypted security tokens. For more information, see  [WS-Security](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=wss) and [WS-Trust](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=ws-sx).  <br/> |
|Trust establishment  <br/> |A process by which trust relationships are established between claims providers and relying-party applications. This process involves the exchange of identifying certificates that enable the relying party to trust the contents of claims that the claims provider issues.  <br/> |
|Trusted login provider  <br/> |An external (that is, external to SharePoint) STS that SharePoint trusts.  <br/> |
|Web single sign-on (SSO)  <br/> |A process that enables partnering organizations to exchange user authentication and authorization data. By using Web SSO, users in partner organizations can transition between secure web domains without having to present credentials at each domain boundary.  <br/> |
|WS-Federation  <br/> |The Organization for the Advancement of Structured Information Standards (OASIS) standard specification that defines the WS-Federation Passive protocol and other protocol extensions that are used for federation. The WS-Federation standard defines mechanisms that are used to enable identity, attribute, authentication, and authorization federation across different trust realms. For more information about WS-Federation, see  [Understanding WS-Federation](http://msdn.microsoft.com/en-us/library/bb498017.aspx).  <br/> |
|WS-Federation Passive  <br/> |The protocol for requesting claims from a claims provider by using HTTP web browser redirects. This protocol is described in section 13 of the WS-Federation 1.2 specification.  <br/> |
|WS-Federation passive requester profile  <br/> |The WS-Federation Passive Requester Profile describes how the cross-trust realm identity, authentication, and authorization federation mechanisms that are defined in WS-Federation can be used by passive requesters, such as web browsers, to provide identity services. Passive requesters of this profile are limited to the HTTP protocol..  <br/> |
|WS-Security  <br/> |The WS-Security standard is a set of protocols designed to help secure web service communication by using SOAP. For more information about WS-Security, see  [OASIS Web Services Security (WSS) TC](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=wss) on the OASIS website. <br/> |
|WS-Trust  <br/> |A standard that uses WS-Security to provide web services with methods to build and verify trust relationships. For more information about WS-Trust, see  [OASIS Web Services Secure Exchange (WS-SX) TC](http://www.oasis-open.org/committees/tc_home.php?wg_abbrev=ws-sx) on the OASIS website. <br/> |
   

## See also
<a name="bk_addresources"> </a>


-  [Web Services Federation Language (WS-Federation) Version 1.2](http://docs.oasis-open.org/wsfed/federation/v1.2/os/ws-federation-1.2-spec-os.html#_Toc223175002)
    
  
-  [Claims-based identity and concepts in SharePoint](claims-based-identity-and-concepts-in-sharepoint.md)
    
  
-  [Sample delegation, federation, and authentication scenario in SharePoint](sample-delegation-federation-and-authentication-scenario-in-sharepoint.md)
    
  

