---
title: PnP provisioning framework
description: Get a high-level overview of remote provisioning features available for your Office 365 and SharePoint Online site collections as well as an understanding about why creating sandboxed and full-trust solutions is no longer recommended.
ms.date: 5/9/2018
---

# PnP provisioning framework

The PnP provisioning framework provides a code-centric and template-based platform for provisioning your site collections. The new provisioning engine allows you to persist and reuse provisioning models in Office 365 and SharePoint Online as well as on-premises site collections.

## Why the new approach?

With the introduction of SharePoint Add-ins and the add-in model (formerly known as the "app model"), Microsoft has moved away from sandboxed and full-trust solutions in favor of provider-hosted add-ins and on-premises solutions. These innovations have driven a retooling of the provisioning model and the introduction of a new provisioning engine.

### Advantages of the new provisioning model

There are many advantages of using this approach over using sandboxed and full-trust solutions. With the new provisioning model, you can:

- **Customize templates**. Because site collections always start with an out-of-the-box template, the customizations that you introduce by using the new remote provisioning model incorporate automatic updates without any further maintenance required by you. Furthermore, this approach avoids problems that result from having different templates used across different site collections.
    
- **Use a template-based model**. Provides a simple, template-based provisioning model that allows you to save an existing site design as a provisioning template. 
    
- **Define templates by using different approaches**. Alternatively, you can manually define your template in XML that validates against the [PnP provisioning schema](pnp-provisioning-schema.md), or you can define your template by using managed code to construct an object hierarchy. You can also mix the approaches.
    
- **Serialize and reuse templates**. You can serialize and then reuse your provisioning templates.
    
- **Persist templates in serialized format**. You are able to persist your provisioning templates in whichever serialization format works best for you; for example, XML or JSON.
    
- **Provision new site collections**. You can easily provision new site collections by applying your provisioning template to a target site in whichever serialized format you select.
    
- **Integrate with the client-side object model**. Integration of the client-side object model (CSOM) gives you tremendous flexibility by enabling automated, code-based provisioning. You can provision a new site collection with your provisioning template by using either CSOM/REST code or Windows PowerShell scripting.
    
- **Use delta provisioning**. You can apply provisioning templates on top of existing sites. The provisioning engine supports delta provisioning, and, as such, will add/update sites based on whichever scope is provided in the template definition.
    
- **Extend the provisioning engine**. You can easily extend the provisioning engine by using custom extensibility providers that allow you to execute custom logic that you have written by using CSOM/REST managed code.
    
- **Work across on-premises and Office 365 deployments**. The provisioning engine now allows you to work seamlessly across both on-premises and Office 365 deployments. This is an improvement over previous provisioning techniques, where custom site definitions were not supported in Office 365 because they required farm-scoped deployments.

## Remote provisioning in a nutshell

In this section we go into depth on each piece of remote provisioning. However, it may be useful to first look at the big picture and grasp remote provisioning in its simplest form. Looked at that way, remote provisioning involves only three elements:

1. Designing and creating your site customization.
    
2. Creating and optionally persisting your provisioning template in a serialized format that you choose.
    
3. Applying the provisioning template to a new or existing site collection that was created by using an out-of-the-box site template.

### 1. Design and create your site customization

Step one is to create the site customizations that you wish to save, and apply them to a site collection. There are several ways to do this. 

The easiest way is to make the desired modifications to an existing site page, and then to save that page as a provisioning template. For more information, see [PnP-Provisioning-Templates](https://github.com/SharePoint/PnP-Provisioning-Templates).

You also can manually create your provisioning template as an XML file or by using managed code (CSOM/REST) to create a hierarchy of objects to represent site artifacts and structure. If you're creating a schema file, you must validate the file against the provisioning XSD schema (see [PnP provisioning schema](pnp-provisioning-schema.md)).

You'll find more detail about modeling your site in the [PnP provisioning engine and the Core library](pnp-provisioning-engine-and-the-core-library.md) article.

### 2. Create and persist your provisioning template in a serialized format

Export your customized site model in your preferred serialized format; the provisioning engine is agnostic with respect to persistence format. This saved instance of your customization is your provisioning template, which, with minimal effort, you then can apply to new site collections. 

Note that serializing and persisting your template is an optional step that is required only if you wish to persist the template. It is not necessary to serialize the template to apply it to a new site collection.

### 3. Apply your provisioning template to a site collection

You can use either a Windows PowerShell script or CSOM/REST code to apply your provisioning template to new or existing site collections. You also can provision an entire site collection or only a portion of it. 

To see a sample of remote provisioning in action, including serialization of the provisioning template to XML, see [Provisioning console application sample](provisioning-console-application-sample.md).

## See also

- [PnP remote provisioning](pnp-remote-provisioning.md)