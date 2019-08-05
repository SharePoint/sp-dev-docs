---
title: Claims-based identity in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 32b6af2a-72f3-4302-a6af-5f00143cbf67
localization_priority: Priority
---


# Claims-based identity in SharePoint
Learn about the fundamentals of claims-based identity architecture in SharePoint.
## Claims-based authentication

Claims-based authentication enables systems and applications to authenticate a user without requiring the user to disclose more personal information (such as social security number and date of birth) than necessary. An example of claims-based authentication is someone claiming to be over 18 years old or someone claiming to be in a company's marketing group. An external system (relying party) needs only to trust the authentication authority that can validate those claims to allow the user to be authenticated for specific functions.
  
    
    

### Claims: A set of information about a subject

The clearest way to think about claims is as a set of information about some subject. This subject is most often a person, but it might also be an application, a computer, or something else. When an identity is transmitted on the network, it is represented by some kind of token (also known as a security token). 
  
    
    
A claim is a piece of information about a subject that a claims provider asserts about that subject. It is a statement about a subject (for example, a name) that is made by a subject about itself or another subject. You can think of a claim as a bit of identity information, such as email address, name, age, or membership in the sales role. It is a unique identifier that represents a specific user, application, computer, or other entity. It enables that entity to gain access to multiple resources, such as applications and network resources, without entering credentials multiple times. It also enables resources to validate requests from an entity. The more claims that an application receives, the more you know about your user.
  
    
    
A claim is given one or more values and then packaged in security tokens that are issued by a security token service (STS).
  
    
    
The word claim is used, instead of the wordattributes that is more commonly used in the enterprise directory world, because of the delivery method. In this model, your application does not look up user attributes in a directory. Instead, the user delivers claims to your application. Each claim is made by an issuer, and you trust the claim only as much as you trust the issuer. For example, you trust a claim made by your company's domain controller more than a claim made by the user. The claims API has an issuer property that enables you to find out who issued the claim.
  
    
    

### Tokens: Information about an identity

A token is a set of bytes that expresses information about an identity. This information consists of one or more claims, each of which contains some information about the subject to which this token applies. The claims in a token commonly contain information such as the name of the user who presents it. They can also contain many sorts of other information—claims are not limited to, and do not even need to include, a subject's name. And, as the word claims suggest, an application that receives a token does not automatically accept the information that it contains. Instead, a received token is usually validated in some way before an application uses any claims that it contains.
  
    
    
The key concept is that a claim is not just a unique identifier that identifies the resource, application, or user. It is a set of claims (that is, values) that is used to describe the resource, application, or user. The claims are also used to authorize access.
  
    
    

## See also
<a name="SP15_RoleInheritance_AdditionalResources"> </a>


-  [Authentication, authorization, and security in SharePoint](authentication-authorization-and-security-in-sharepoint.md)
    
  
-  [Incoming claims: Signing into SharePoint](incoming-claims-signing-into-sharepoint.md)
    
  
-  [Claims provider in SharePoint](claims-provider-in-sharepoint.md)
    
  
-  [How to: Create a claims provider in SharePoint](how-to-create-a-claims-provider-in-sharepoint.md)
    
  
-  [How to: Deploy a claims provider in SharePoint](how-to-deploy-a-claims-provider-in-sharepoint.md)
    
  

