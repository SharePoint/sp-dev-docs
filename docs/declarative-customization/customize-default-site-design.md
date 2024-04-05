---
title: Customize default site templates in SharePoint
description: Customize the default site templates for the SharePoint Team site or Communication site template.
ms.date: 06/28/2022
ms.localizationpriority: high
---

# Customize a default site template

SharePoint offers several [site templates that are already available](https://support.microsoft.com/office/apply-and-customize-sharepoint-site-templates-39382463-0e45-4d1b-be27-0e96aeec8398). These are the default site templates and they can be modified by using PowerShell or the REST APIs to control the entire site provisioning experience. For example, you can ensure that your company theme is applied to every site that gets created, or you can make sure a logging mechanism always runs regardless of which site template is chosen.

## Apply a site script to a default site template

To customize a default site template, apply a new template script using PowerShell **Add-SPOSiteDesign** cmdlet or the **CreateSiteDesign** REST API. Specify the **IsDefault** switch to apply the site template as the default template.

| Parameter            | Value                | Site template type          |
| :------------------- | :------------------- |:----------------|
| WebTemplate  | 64 | Team site template |
| WebTemplate  | 1 | Team site (with group creation disabled) |
| WebTemplate    | 68 | Communication site template |
| WebTemplate    | 69 | Channel site template |

The following example shows how to use the **IsDefault** switch to apply the Contoso company theme to the default site templates. The site script referenced by ID contains the JSON script to apply the correct theme.

```powershell
C:\> Add-SPOSiteDesign `
  -Title "Contoso company theme" `
  -WebTemplate "68" `
  -SiteScripts "89516c6d-9f4d-4a57-ae79-36b0c95a817b" `
  -Description "Applies standard company theme to site" `
  -IsDefault
```

```javascript
RestRequest("/_api/Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteDesign", {info:{Title:"Contoso company theme", Description:"Applies standard company theme to site", SiteScriptIds:["89516c6d-9f4d-4a57-ae79-36b0c95a817b"],  WebTemplate:"68", IsDefault: true}});
```

### Which default site templates are updated?

The default site template for a communication site is the **Topic** template. The default for a team site is the **Team collaboration** template. When you apply a new default site template, it updates the Microsoft-provided default templates.

## Restore the default site templates

To restore a site template to the defaults, remove the site template script that you applied. In the previous example, if the site template created had the ID `db752673-18fd-44db-865a-aa3e0b28698e`, you would remove it as shown in the following example.

```powershell
C:\> Remove-SPOSiteDesign db752673-18fd-44db-865a-aa3e0b28698e
```

```javascript
RestRequest("/_api/Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteDesign", {id:"db752673-18fd-44db-865a-aa3e0b28698e"});
```

> [!NOTE]
> If you're not sure which site template is the default, run the **Get-SPOSiteDesign** cmdlet. It will list all site templates, and indicates which ones are defaults.

## See also

- [SharePoint site template and site script overview](site-design-overview.md)
- [Browse and customize Microsoft-provided site templates](https://support.microsoft.com/office/apply-and-customize-sharepoint-site-templates-39382463-0e45-4d1b-be27-0e96aeec8398)
