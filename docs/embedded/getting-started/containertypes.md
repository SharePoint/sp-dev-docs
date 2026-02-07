---
title: Create new SharePoint Embedded container types
description: This article explains how container types work and the steps to create new container types.
ms.date: 01/20/2026
ms.localizationpriority: high
---

# SharePoint Embedded container types

A container type is a SharePoint Embedded resource that defines the relationship, access privileges, and billing accountability between a SharePoint Embedded application and a set of containers. Also, the container type defines behaviors on the set of containers.

Each container type is strongly coupled with one SharePoint Embedded application, which is referred to as the owning application. The owning application developer is responsible for creating and managing their container types. SharePoint Embedded mandates a 1:1 relationship between the owning application and a container type.

A container type is represented on each container instance as an immutable property (ContainerTypeID) and is used across the entire SharePoint Embedded ecosystem, including:

- **Access authorization**: A SharePoint Embedded application must be associated with a container type to get access to container instances of that type. Once associated, the application has access to all container instances of that type. The actual access privilege is determined by the application-ContainerTypeID permission setting. The owning application by default has full access privilege to all container instances of the container type it's strongly coupled with. Learn more about [SharePoint Embedded Authorization](../development/auth.md).
- **Easy exploration**: Container types can be created for trial purposes, allowing developers to explore SharePoint Embedded application development and assess its features for free.
- **Billing**: Container types for nontrial purposes are billable and must be created with an Azure Subscription. The usage of containers is metered and charged. Learn more about [metering](../administration/billing/meters.md) and the [SharePoint Embedded billing experience](../administration/billing/billingmanagement.md).
- **Configurable behaviors**: Container type defines selected behaviors for all container instances of that type. Learn more about setting [Container type configuration](../getting-started/containertypes.md#configuring-container-types).

> [!NOTE]
>
> 1. You must specify the purpose of the container type you're creating at creation time. A container type set for trial purposes can't be converted for production; or vice versa.
> 1. Standard and passthrough container types can't be converted once created. If you want to convert a standard container type to passthrough billing or vice versa, you must delete and re-create the container type.

## Tenant requirements

- An active instance of SharePoint is required in your Microsoft 365 tenant.
- Users who authenticate into SharePoint Embedded container types and containers must be in Microsoft Entra ID (Members and Guests)
- A Microsoft Entra ID app registration needs to be configured for container type management. For more information, see [SharePoint Embedded authentication and authorization](../development/auth.md).

> [!NOTE]
> An Office license isn't required to collaborate on Microsoft Office documents stored in a container.

## Creating container types

SharePoint Embedded has two different container types you can create.

1. [Trial container type](#trial-container-type). Uses the `trial` billing classification.
1. [Standard container type](#standard-container-types-nontrial). Uses the `standard` or `directToCustomer` billing classification.

To create a container type, your Microsoft Entra ID application needs to have the `FileStorageContainerType.Manage.All` application permission on the owning tenant. Your Microsoft Entra ID application needs to call the [Create fileStorageContainerType](/graph/api/filestorage-post-containertypes) endpoint on behalf of a [SharePoint Embedded Administrator](/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator):

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containerTypes
Content-Type: application/json

{
  "name": "{ContainerTypeName}",
  "owningAppId": "{ApplicationId}",
  "billingClassification": "{BillingClassification}",
  "settings": {
    ...
  }
}
```

> [!NOTE]
> You need to replace:
>
> - `{ContainerTypeName}` with a user-friendly name for your SharePoint Embedded application.
> - `{ApplicationId}` with the ID of your properly configured application ID.
> - `{BillingClassification}` with either `trial`, `standard`, or `directToCustomer`. Keep reading to understand what each means.
>
> Additionally, you may [configure your container type](#configuring-container-types) during creation by using the `settings` field.

## Trial container type

A container type can be created for trial/development purposes and isn't linked to any Azure billing profile. Trial container types enable developers to explore SharePoint Embedded application development and assess its features for free. For trial container types, the developer tenant is the same as the consuming tenant.
Each developer can have only one container type with `trial` billing classification in their tenant at a time. The trial container type is valid for up to 30 days but can be removed at any time within this period.

You can easily set up a trial container type using the [SharePoint Embedded Visual Studio Code extension](../getting-started/spembedded-for-vscode.md).

The following restrictions are applied to trial container types:

- The tenant can have up to five containers of the container type. This includes active containers and those in the recycle bin.
- Each container has up to 1 GB of storage space.
- The container type expires after 30 days and access to any existing containers of that container type is then removed.
- The developer must permanently delete all containers of an existing container type in trial status to create a new container type for trial. This includes containers in the deleted container collection.
- The container type is restricted to work in the developer tenant. It can't be deployed in other consuming tenants.

## Standard container types (nontrial)

A standard container type can be used in production environments. Each tenant can have 25 container types at a time. Standard container types don't have the same restrictions as trial container types, but they still have limits. For more information, see [SharePoint Embedded Limits](../development/limits-calling.md).

To learn more about the supported pay-as-you-go meters, refer to the [SharePoint Embedded meters](../administration/billing/meters.md) article.

### Billing profile

SharePoint Embedded is a consumption-based, pay-as-you-go (PAYG) offering meaning you pay only for what you use. SharePoint Embedded provides two billing models that the tenant developing the SharePoint Embedded application can select for respective container types, tailoring it to their unique business requirements. The two billing models are Standard and Passthrough billing.

### Standard container type - with billing profile

With the standard billing profile, all consumption-based charges are directly billed to the tenant who owns or develops the application. The admin in the developer tenant  must establish a valid billing profile when creating a standard container type.

![Standard](../images/1bill521.png)

There are limits around the number of container types that each tenant can have. For more information, see [SharePoint Embedded Limits](../development/limits-calling.md).

### Roles and Permissions

- The admin who sets up the billing relationship for SharePoint Embedded needs to have owner or contributor permissions on the Azure subscription.
- The admin needs to have a SharePoint Embedded Administrator or Global Administrator role to operate billing cmdlets.

### Azure Subscription

For the standard billing container type, the Global Administrator needs to:

- [Create an Azure subscription in your tenancy](/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions)
- [Create a resource group](/azure/azure-resource-manager/management/manage-resource-groups-portal) attached to the Azure subscription

After [creating the container type](#creating-container-types) with `standard` billing classification, you need to attach a billing profile to the container type.

### Set the billing profile

The billing profile for your container type is created using **SharePoint Online Management Shell**:

1. Download and install the [latest version of SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588)
1. Open SharePoint Online Management Shell from **Start** screen, type **sharepoint**, and then select **SharePoint Online Management Shell**.
1. Connect to SPO service using `Connect-SPOService` cmdlet by providing admin credentials associated with tenancy. For information, see [how to use Connect-SPOService](/powershell/module/sharepoint-online/connect-sposervice).
.
To create the standard billing profile for your container type, use the following cmdlet:

```powershell
Add-SPOContainerTypeBilling –ContainerTypeId <ContainerTypeId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>
```

> [!NOTE]
> The admin who sets up a billing relationship for SharePoint Embedded must have owner or contributor permissions on the Azure subscription, and be assigned the SharePoint Embedded Administrator or Global Administrator role.
>
> Every container type must have an owning application.
>
> A single-owning app can only own one container type at a time.
>
> An Azure subscription can be attached to any number of container types.
>
> If the cmdlet above fails with a SubscriptionNotRegistered error, it is because **Microsoft.Syntex** isn't registered as a resource provider in the subscription. The cmdlet sends a resource provider registration request on your behalf but it takes a few minutes to be completed. Wait 5-10 minutes and try again until the cmdlet succeeds.

1. In [Microsoft 365 admin center](https://admin.microsoft.com/), select **Setup**, and the view the **Billing and licenses** section. Select **Activate pay-as-you-go services.**

    ![Microsoft 365 admin center Files and Content](../images/SyntexActivatePAYGSetup.png)

1. Select **Go to Pay as you go services**.
1. Select **Apps** under **Syntex services for**, select **Apps** and **SharePoint Embedded**
 
    ![Microsoft 365 admin center SharePoint Embedded Billing setting](../images/SyntexPAYGActivateSPE.png)

    > [NOTE]
    The subscription configured in the Syntex services will reflect the consumption charges in the Azure billing portal.

1.  [Register the container type](#registering-container-types) using the App only authentication token.

## Configuring Container Types

Developer admins can configure selected settings for SharePoint Embedded container types that have been created. The following table lists the available settings.

| Settings | Description | 
|----------|----------|
| **ApplicationRedirectUrl** | Specifies the URL to which the application’s files are redirected.  | 
| **CopilotEmbeddedChatHosts** | Adds host URLs that are permitted to use the SharePoint Embedded application’s declarative agent experience. | 
| **DiscoverabilityDisabled**  | Determines whether content from a SharePoint Embedded application is visible across Microsoft 365 experiences. | 
| **SharingRestricted** | Configures sharing permissions for SharePoint Embedded containers by using role-based access. Supports both open and restrictive sharing models. When restrictive sharing is set to true, only managers and owners can share files in the container.| 
| **IsArchiveEnabled** | When set to True, the owning application of the container type can support archival of containers. Archive helps in saving cost of storage by moving inactively used content to cold tier. |

The [Set-SPOContainerType](/powershell/module/sharepoint-online/Set-SPOContainerType) cmdlet allows admins to update the Application Redirect URL. The [Set-SPOContainerTypeConfiguration](/powershell/module/sharepoint-online/Set-SPOContainerTypeConfiguration) cmdlet allows admins to add host URLs, set [Microsoft 365 content discoverability](../development/content-experiences/user-experiences-overview.md) and [sharing](../development/sharing-and-perm.md) settings on container types. The setting applies to all container instances of the container type.

### Example 1

```powershell
Set-SPOContainerTypeConfiguration -ContainerTypeId 4f0af585-8dcc-0000-223d-661eb2c604e4 -DiscoverabilityDisabled $false
```

Example 1 turns on discoverability for this container type. All content created within this container type will be discoverable in the Microsoft 365 experience, including on office.com, onedrive.com, recommended files, and other intelligent discovery experiences.

### Example 2
To update the billing profile for a standard container type, use the following cmdlet:

```powershell
Set-SPOContainerType -ContainerTypeId <ContainerTypeId> [-AzureSubscriptionId <AzureSubscriptionId>] [-ResourceGroup <ResourceGroup>]
```

> [!NOTE]
> Billing setup for standard container types is done via the SharePoint Online Management Shell. In the future, this operation will be available as a Microsoft Graph operation.

### Standard container type - passthrough billing

With passthrough billing, consumption-based charges are billed directly to the tenant registered to use the SharePoint Embedded application (consuming tenant). Admins in the developer tenant don't need to set up an Azure billing profile when creating a passthrough SharePoint Embedded container type.

![Pass Through](../images/2bill521.png)

For container types intended to be directly billed to a customer use the `directToCustomer` billing classification during [container type creation](#creating-container-types). For the passthrough billing container types, there's no need to attach a billing profile.

Once the container type is [registered](../getting-started/register-api-documentation.md) in the consuming tenant, the consuming tenant admin (SharePoint Administrator or Global Administrator) needs to set up the billing profile in the consuming tenant to use the SharePoint Embedded application.

#### Set up billing profile in consuming tenant

1. In [Microsoft 365 admin center](https://admin.microsoft.com/), select **Setup**, and the view the **Billing and licenses** section. Select **Activate pay-as-you-go services.**

    ![Microsoft 365 admin center Files and Content](../images/SyntexActivatePAYGSetup.png)

1. Select **Go to Pay as you go services**.
1. Select **Apps** under **Syntex services for**, then select **SharePoint Embedded** in the Apps panel

    ![Microsoft 365 admin center SharePoint Embedded Billing setting](../images/SyntexPAYGActivateSPE.png)

    > [!NOTE]
    > The subscription configured in the Syntex services will reflect the consuming charges in the Azure billing portal.

## Configuring container types

The Developer Admin may apply configuration when calling the [Create fileStorageContainerType](/graph/api/filestorage-post-containertypes) endpoint. Alternatively, they may call the [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) endpoint to reconfigure an existing container type.

> [!IMPORTANT]
> Updating settings on a container type may take up to **24 hours** for the new values to be replicated on all consuming tenants. If a consuming tenant applied overrides on container type settings, the new values aren't applied and the overrides remain in place. Some settings only apply to new content and not to existing content for the container type (for example, storage size, discoverability enabled, and others).

For information on all the settings supported by container types, see [fileStorageContainerTypeSettings resource type](/graph/api/resources/filestoragecontainertypesettings).

## Viewing container types

The Developer Admin can view all the SharePoint Embedded container types they created on their tenant using the [List fileStorageContainerType](/graph/api/filestorage-list-containertypes) endpoint.

## Registering container types

To create and interact with containers, you must [register](../getting-started/register-api-documentation.md) the container type within the Consuming Tenant. The owning application defines the permissions for the container type by invoking the [Create fileStorageContainerTypeRegistration](/graph/api/filestorage-post-containertyperegistrations) endpoint.

## Deleting container types

The Developer Admin can only delete trial container types in their tenant. Deletion of standard container types is not yet supported. To delete a container type, you must first remove all containers of that container type, including from the deleted container collection. To remove containers, refer to [Consuming Tenant Admin](../administration/consuming-tenant-admin/cta.md).
Once all the containers are deleted, Developer admins can delete the container type using the [Delete fileStorageContainerType](/graph/api/filestorage-delete-containertypes) endpoint.
