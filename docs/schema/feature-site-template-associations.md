---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ed2a52f8-358f-47f5-afcb-5819b288e913
---

# Feature/Site Template Associations 

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Feature/site template associations allow you to include a specific Feature as part of a [site definition configuration](https://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3(Office.15).aspx) when you provision sites through the definition.

- [Elements](elements-element-featuresitetemplateassociation.md)

- [FeatureSiteTemplateAssociation](featuresitetemplateassociation-element-featuresitetemplateassociation.md)

- [Property](property-element-featuresitetemplateassociation.md)

## Example

The following example associates one Feature with two different site definition configurations, and another Feature and properties with a third configuration.

```XML 
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <FeatureSiteTemplateAssociation Id="99FE402E-89A0-45aa-9163-85342E865DC8" TemplateName="PROFILES#0" /> 
      <FeatureSiteTemplateAssociation Id="99FE402E-89A0-45aa-9163-85342E865DC8" TemplateName="CMSPUBLISHING#0" /> 
      <FeatureSiteTemplateAssociation Id="541F5F57-C847-4e16-B59A-B31E90E6F9EA" TemplateName="SRCHCENTERLITE#1">
        <Property Key="IncludeInGlobalNavigation" Value="false" /> 
        <Property Key="IncludeInCurrentNavigation" Value="false" /> 
        <Property Key="InheritCurrentNavigation" Value="true" /> 
        <Property Key="IncludePages" Value="false" /> 
      </FeatureSiteTemplateAssociation>
    </Elements>
```

<br/>






