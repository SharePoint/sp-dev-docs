---
title: User mapping during page transformation
description: Explains how to the user mapping works when transforming pages
ms.date: 02/11/2021
ms.prod: sharepoint
ms.localizationpriority: high
---

# User mapping during page transformation

When you're transforming pages from your on-premises SharePoint you typically are using Active Directory accounts (e.g. CONTOSO\JOE) to grant access to SharePoint while in SharePoint Online you use Azure Active Directory accounts to grant access. User mapping is a component of page transformation that enables you to map your on-premises Active Directory accounts to Azure Active Directory accounts in SharePoint Online and use those mapped accounts to specify user and group related information of the target page.

## Default user mapping for pages transformed from on-premises SharePoint

When you are transforming pages from on-premises SharePoint then user mapping is on by default: many customers that have on-premises and online SharePoint also use Active Directory sync which means that the on-premises users and groups also exist in SharePoint Online as users and groups. The default user mapping system will lookup the on-premises user by querying the local Active Directory environment, if a user is found than we take the user's UPN (user principal name) value and use that to find the same user in Azure Active Directory.

Default user mapping does require a connection the your on-premises Active Directory which is done via LDAP queries. A default LDAP connection string is built based upon you fully qualified Active Directory domain name: if your Active Directory domain was contoso.com then the used LDAP connection string is LDAP://DC=contoso,DC=com. If this however is wrong then you specify a custom LDAP connection string via the `-LDAPConnectionString` parameter to the `ConvertTo-PnPClientSidePage` cmdlet if you're using PnP PowerShell. If you're using .Net then you can define the custom LDAP connection string via the `LDAPConnectionString` attribute of the .Net page transformation configuration objects (`PageTransformationInformation` and `PublishingPageTransformationInformation`).

> [!IMPORTANT]
> Given the mapping depends on domain lookups it will only work if the machine/account running the page transformation are joined to the same Active Directory domain as the one holding the accounts/groups that are used to authorize access to the on-premises SharePoint environment.

If you want to completely disable user mapping for your SharePoint on-premises to SharePoint transformations then you can use the `-SkipUserMapping` parameter to the `ConvertTo-PnPClientSidePage` cmdlet if you're using PnP PowerShell. If you're using .Net then you can skip user mapping via the `SkipUserMapping` attribute of the .Net page transformation configuration objects (`PageTransformationInformation` and `PublishingPageTransformationInformation`).

[!INCLUDE [pnp-powershell](../../includes/snippets/open-source/pnp-powershell.md)]

## Mapping based upon a mapping file

If you don't like or cannot use the automatic user mapping based upon Active Directory lookups then there's also the option to specify a user mapping file. A user mapping file is a simple CSV file listing source account and target account as shown in below snippet

```Text
sharepoint\system,admin@contoso.onmicrosoft.com
contoso\paul,paul@contoso.onmicrosoft.com
contoso\bert,bert@contoso.com
s-1-5-21-3138640143-967965215-2549001177-3604,SalesGroup
s-1-5-21-2364077317-3999105188-691961326-1128,c:0t.c|tenant|b0f984d9-e9d5-432a-bec9-896f910254ba
```

Some things to note:

- You can map the **system account** via sharepoint\system
- Groups have to be specified via the group sid as source. Group targets can be specified by Azure AD group name but it's better to unique identify them via using the Azure AD group id like shown in c:0t.c|tenant|b0f984d9-e9d5-432a-bec9-896f910254ba

Creating the mapping file is the first step, to actually use it you need to specify the file via the `UserMappingFile` parameter to the `ConvertTo-PnPClientSidePage` cmdlet if you're using PnP PowerShell. If you're using .Net then you can specify the file via the  `UserMappingFile` attribute of the .Net page transformation configuration objects (`PageTransformationInformation` and `PublishingPageTransformationInformation`).

> [!IMPORTANT]
> User mapping can also be used when doing cross site page transformation in SharePoint Online. It allows you to "replace" certain old accounts with newer ones.

## Where does user mapping apply

User mapping is integrated in page transformation in the following places:

- If you have metadata user fields that you are copying over
- If you have item level permissions on a source page and you're taking over these permissions (note that you can use the `SkipItemLevelPermissionCopyToClientSidePage` option to prevent this)
- If you're populating the page header (via the `SetAuthorInPageHeader` option for wiki/webpart and blog pages or via appropriate configuration in your page layout mapping file for publishing pages)
- If you're keeping the page author/editor/created/modified information via the `KeepPageCreationModificationInformation` option
- If you're transforming a ContactFieldControl web part
