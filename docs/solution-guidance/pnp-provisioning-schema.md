---
title: PnP provisioning schema
description: PnP resources and sample XML schema.
ms.date: 5/9/2018
localization_priority: Priority
---

# PnP provisioning schema

As you learned in [PnP provisioning framework](pnp-provisioning-framework.md) and elsewhere, the format for provisioning templates has been decoupled from the persistence format so that you can use any format you prefer. Nevertheless, because using the XML provisioning schema for persisting templates is such a common scenario, we're providing some additional information about how to use the XML schema to serialize and save your provisioning templates.

> [!IMPORTANT] 
> While the provisioning schema obviously supports XML serialization of provisioning templates, it also provides the structure for serialization in JSON format. More generally, the schema provides the model for defining provisioning structures.

## Provisioning schema resources

You can get the provisioning schema, along with its supporting files, on GitHub at [PnP-Provisioning-Schema](https://github.com/SharePoint/PnP-Provisioning-Schema).

View the 20-minute Channel 9 video that discusses the provisioning schema: [Deep dive to PnP provisioning engine schema](https://channel9.msdn.com/blogs/OfficeDevPnP/Deep-dive-to-PnP-provisioning-engine-schema).

Sample schemas are available at [GitHub at PnP-Provisioning-Schema/Samples](https://github.com/SharePoint/PnP-Provisioning-Schema/tree/master/Samples).

The following code block displays the schema's root element and direct child elements of the root. 

```xml
<pnp:ProvisioningTemplate
           xmlns:pnp="http://schemas.dev.office.com/PnP/2015/08/ProvisioningSchema"
           ID="xsd:ID"
           Version="xsd:decimal"
           ImagePreviewUrl="xsd:string"
           DisplayName="xsd:string"
           Description="xsd:string">
   <pnp:Properties />
   <pnp:SitePolicy />
   <pnp:RegionalSettings />
   <pnp:SupportedUILanguages />
   <pnp:AuditSettings />
   <pnp:PropertyBagEntries />
   <pnp:Security />
   <pnp:SiteFields />
   <pnp:ContentTypes />
   <pnp:Lists />
   <pnp:Features />
   <pnp:CustomActions />
   <pnp:Files />
   <pnp:Pages />
   <pnp:TermGroups />
   <pnp:ComposedLook />
   <pnp:Workflows />
   <pnp:SearchSettings />
   <pnp:Publishing />
   <pnp:AddIns />
   <pnp:Providers />
</pnp:ProvisioningTemplate>
```

## See also

- [PnP remote provisioning](pnp-remote-provisioning.md)
