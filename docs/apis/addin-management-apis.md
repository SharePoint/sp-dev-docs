---
title: SharePoint Add-in related APIs 
description: We provided some Add-in related APIs to get Add-in's installation info and uninstall the Add-in. 
audience: admin 
ms.date: 03/25/2023 
ms.localizationpriority: medium
---

# SharePoint Add-in Management APIs

This documentation will introduce some APIs which related to SharePoint Add-ins. They could help to have a clear view
and better management of the Add-ins in tenant level, including these:

- Get available Add-ins in sites
- Get Add-in permissions in site collections
- Get tenant ACS service principals
- Get Add-in principals in site collections
- Uninstall Add-ins
- Get uninstall Add-in job status

For more information about SharePoint Add-in, see [SharePoint Add-ins](../sp-add-ins/sharepoint-add-ins.md).

## Prerequisites

- App-only mode token. [Get token example](https://github.com/pnp/pnpcore/blob/dev/docs/polyglot/Getting%20started%20-%20application%20permissions.ipynb)
- Called on the admin site. Example: https://www.contoso-admin.sharepoint.com
- For uninstall Add-in API, the app needs to have Sites.FullControl.All permission. For others, the app needs at least Sites.Read.All permission.

## Get available Add-ins in sites

This API will return the Add-ins that could be used on the given sites. This contains two kinds of install, one is the Add-in installed on the site.
The other is the Add-in installed on the tenant level app catalog site, and it matches the conditions to use the Add-in.
For more information, see [Tenancies and deployment scopes for SharePoint Add-ins](../sp-add-ins/tenancies-and-deployment-scopes-for-sharepoint-add-ins.md).

This API needs the app to have at least Sites.Read.All permission.

### HTTP request

```HTTP
POST {adminSiteUrl}/_api/web/AvailableAddIns
```

### Request body

| Name               | Required | Type     | Description                                                                                                                                     |
|--------------------|----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| serverRelativeUrls | no       | string[] | List of the server relative url of sites that want to get the available Add-ins. Maximum size is 500.                                           |    
| urls               | no       | string[] | List of the url of sites that want to get the available Add-ins, both server relative url and absolute url are acceptable. Maximum size is 500. |    

When urls is not null, serverRelativeUrls will be disregarded.

### Responses

| Name                        | Type                           | Description                                                                          | 
|-----------------------------|--------------------------------|--------------------------------------------------------------------------------------|
| addins                      | SPAddinInstanceInfo[]          | Available Add-in instance object.                                                    |
| errorsWithServerRelativeUrl | SPErrorWithServerRelativeUrl[] | Server relative urls that failed to get available add-ins and corresponding reasons. |

#### SPAddinInstanceInfo

| Name                    | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title                   | string   | Title of the Add-in.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| appInstanceId           | Guid     | Id of the installation.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| launchUrl               | String   | The Add-in's launch page address.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| installedSiteId         | Guid     | Site collection id where the Add-in installed.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| installedWebId          | Guid     | Site id where the Add-in installed.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| installedWebName        | string   | Site name where the Add-in installed.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| installedWebUrl         | string   | Site url where the Add-in installed.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| currentSiteId           | Guid     | Site collection id of current site.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| currentWebId            | Guid     | Site id of current site.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| currentWebName          | string   | Site name of current site.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| currentWebUrl           | string   | Site url of current site.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| status                  | string   | The status of current Add-in.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| appWebFullUrl           | string   | The full url of the app web. The SharePoint components are generally in a special child web of the host web called the app web. The app web will be created during install the add-in.                                                                                                                                                                                                                                                                                            |
| appWebId                | Guid     | Id of the app web.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| appWebName              | string   | Name of the app web.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| installedBy             | string   | User name of who installed the add-in.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| appIdentifier           | string   | The identifier of the app principal. It could be used to get the Add-in's permission.                                                                                                                                                                                                                                                                                                                                                                                             |
| creationTimeUtc         | DateTime | Date time when installed the add-in.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| productId               | Guid     | The global unique id of the add-in. It is same for all tenants.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| assetId                 | string   | The id of the app in the office store, this will be empty for app catalog user uploaded apps.                                                                                                                                                                                                                                                                                                                                                                                     |
| purchaserIdentity       | string   | The identify of person who bought the license of the add-in.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| licensePurchaseTime     | DateTime | When purchased the app license.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| locale                  | string   | which locale installed on the site.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| appSource               | string   | Indicate where the app come from.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| tenantAppData           | string   | After the Add-in installed in the tenant app catalog site. It could enable tenant level usage. This data indicates the conditions how to filter the sites. If this field is not empty, it means this Add-in installed on tenant app catalog site, deployed to tenant level, and current site matches the conditions. For more information, see [Tenancies and deployment scopes for SharePoint Add-ins](../sp-add-ins/tenancies-and-deployment-scopes-for-sharepoint-add-ins.md). |
| tenantAppDataUpdateTime | DateTime | The tenant app data update time.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### SPErrorWithServerRelativeUrl

| Name              | Type   | Description                                            |
|-------------------|--------|--------------------------------------------------------|
| serverRelativeUrl | string | The serverRelativeUrl or url in the request body.      |
| errorMessage      | string | The error message why fetch the site's Add-ins failed. |

## Get Add-in permissions in site collections

This API will return the permissions that were granted to the add-in. For more information, see [Add-in permissions in SharePoint](../sp-add-ins/add-in-permissions-in-sharepoint.md).

This API needs the app to have at least Sites.Read.All permission.

### HTTP request

```HTTP
POST {adminSiteUrl}/_api/web/AddinPermissions
```

### Request body

| Name   | Required | Type                       | Description                                                                      |
|--------|----------|----------------------------|----------------------------------------------------------------------------------|
| addins | yes      | SPAddinPermissionRequest[] | List of the Add-in that want to get the permissions. Maximum Add-in size is 500. |

#### SPAddinPermissionRequest

| Name              | Type     | Description                                                                               |
|-------------------|----------|-------------------------------------------------------------------------------------------|
| serverRelativeUrl | string   | The server relative url of the site collection.                                           |
| url               | string   | The url of the site collection, both server relative url and absolute url are acceptable. |
| appIdentifiers    | string[] | The identifier list of the Add-ins.                                                       |

The serverRelativeUrl and url can't be both null. If both serverRelativeUrl and url are provided, the url will be used.

### Responses
| Name             | Type                          | Description                                                           |
|------------------|-------------------------------|-----------------------------------------------------------------------|
| addinPermissions | SPAddinPermissionInfo[]       | The returned permissions.                                             |
| failedAddins     | SPAddinPermissionFailedInfo[] | The Add-ins that failed to get permissions and corresponding reasons. |

#### SPAddinPermissionInfo

| Name                            | Type                                   | Description                                                                                                                                                                                        |
|---------------------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tenantScopedPermissions         | SPTenantScopedPermissionInfo[]         | This is the permissions grant in tenant scope level.                                                                                                                                               |
| siteCollectionScopedPermissions | SPSiteCollectionScopedPermissionInfo[] | This is the permissions grant in site collection scope level.                                                                                                                                      |
| appIdentifier                   | string                                 | The identifier of the Add-in.                                                                                                                                                                      |
| serverRelativeUrl               | string                                 | The server relative url of the site collection.                                                                                                                                                    |
| absoluteUrl                     | string                                 | The absolute url of the site collection.                                                                                                                                                           |
| allowAppOnly                    | bool                                   | This identifies if the Add-in allows app only mode. For more information, see [Add-in authorization policy types in SharePoint](../sp-add-ins/add-in-authorization-policy-types-in-sharepoint.md). |

#### SPTenantScopedPermissionInfo

| Name    | Type   | Description                                                                                                                                                                                         |
|---------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| feature | string | The feature name of the permissions, it should be one of these:<ul> <li> Taxonomy <li> Social <li> ProjectServer <li> Search <li> BcsConnection  <li> Content </ul>                                 |
| scope   | string | The scope of the permission.                                                                                                                                                                        |
| right   | string | The right of the permission.                                                                                                                                                                        |
| id      | Guid   | The id of the resource that the Add-in have permission to. For example, it may be the id of one specific project when the feature is ProjectServer and the scope is projectserver/projects/project. |


#### SPSiteCollectionScopedPermissionInfo

| Name   | Type   | Description                                                                                                                                    |
|--------|--------|------------------------------------------------------------------------------------------------------------------------------------------------|
| siteId | Guid   | The site collection id which the Add-in has access to.                                                                                         |
| webId  | Guid   | The site id which the Add-in has access to. If this field is empty, then the permission grant in site collection level.                        |
| listId | Guid   | The list id which the Add-in has access to. If this field is empty, then the permission grant in site collection level or grant is site level. |
| right  | string | Available rights: Guest, Read, Write, Manage, FullControl.                                                                                     |


#### SPAddinPermissionFailedInfo

| Name              | Type   | Description                                                     |
|-------------------|--------|-----------------------------------------------------------------|
| serverRelativeUrl | string | The server relative url or absolute url of the site collection. |
| appIdentifier     | string | The identifier list of the Add-in.                              |
| errorMessage      | string | The error message why fetch the Add-in permission failed.       |

## Get tenant ACS service principals

This API takes the app id list as input, it will filter the ones that present ACS service principals.
For more information, see [Register SharePoint Add-ins](../sp-add-ins/register-sharepoint-add-ins.md).

This API needs the app to have at least Sites.Read.All permission.

### HTTP request

```HTTP
POST {adminSiteUrl}/_api/web/GetACSServicePrincipals
```

### Request body

| Name   | Required | Type   | Description                        |
|--------|----------|--------|------------------------------------|
| appIds | yes      | Guid[] | List app ids. Maximum size is 500. |

### Responses

| Name | Type                        | Description                         |
|------|-----------------------------|-------------------------------------|
|      | SPACSServicePrincipalInfo[] | The SPACSServicePrincipalInfo list. |

#### SPACSServicePrincipalInfo

| Name          | Type     | Description                                                                                   |
|---------------|----------|-----------------------------------------------------------------------------------------------|
| appIdentifier | string   | The app identifier of the Add-in.                                                             |
| appId         | Guid     | The app id of the Add-in.                                                                     |
| title         | string   | A user friendly title.                                                                        |
| redirectUri   | string   | The endpoint in your remote application or service to which ACS sends an authentication code. |
| appDomains    | string[] | The host name of the remote component of the SharePoint Add-in.                               |

## Get Add-in principals in site collections

This API takes the site collections' server relative url as input, it will return the Add-in principals that have permissions in given sites.

This API needs the app to have at least Sites.Read.All permission.

### HTTP request

```HTTP
POST {adminSiteUrl}/_api/web/GetAddinPrincipalsHavingPermissionsInSites
```

### Request body

| Name               | Required | Type     | Description                                                                                                |
|--------------------|----------|----------|------------------------------------------------------------------------------------------------------------|
| serverRelativeUrls | no       | string[] | List site collections' server relative url. Maximum size is 500.                                           |
| urls               | no       | string[] | List site collections' url, both server relative url and absolute url are acceptable. Maximum size is 500. |  

When urls is not null, serverRelativeUrls will be disregarded.

### Responses

| Name                        | Type                           | Description |
|-----------------------------|--------------------------------|-------------|
| addinPrincipals             | SPAddinPrincipalInfo[]         |             |
| errorsWithServerRelativeUrl | SPErrorWithServerRelativeUrl[] |             |

#### SPAddinPrincipalInfo

| Name              | Type   | Description                                     |
|-------------------|--------|-------------------------------------------------|
| title             | string | The title of the Add-in.                        |
| appIdentifier     | string | The app identifier.                             |
| serverRelativeUrl | string | The server relative url of the site collection. |
| absoluteUrl       | string | The absolute url of the site collection.        |


#### SPErrorWithServerRelativeUrl

| Name              | Type   | Description                                                |
|-------------------|--------|------------------------------------------------------------|
| serverRelativeUrl | string | The site collection's server relative url or absolute url. |
| errorMessage      | string | The error message why fetch the Add-in principal failed.   |

## Uninstall Add-ins

This API will trigger an async job to uninstall the Add-in. If the job triggered successfully, the job id will be returned.

This API needs the app to have Sites.FullControl.All permission.

### HTTP request

```HTTP
POST {adminSiteUrl}/_api/web/UninstallAddins
```

### Request body

| Name            | Required | Type                      | Description                                                   |
|-----------------|----------|---------------------------|---------------------------------------------------------------|
| uninstallAddins | yes      | SPUninstallAddinRequest[] | List of Add-ins need to uninstall. Maximum Add-in size is 50. |

#### SPUninstallAddinRequest

| Name              | Type   | Description                                                               |
|-------------------|--------|---------------------------------------------------------------------------|
| serverRelativeUrl | string | The site's server relative url.                                           |
| url               | string | The site's url, both server relative url and absolute url are acceptable. |
| appInstanceIds    | Guid[] | The instance ids of the Add-ins.                                          |

The serverRelativeUrl and url can't be both null. If both serverRelativeUrl and url are provided, the url will be used.

### Responses

| Name      | Type                                       | Description                                                               |
|-----------|--------------------------------------------|---------------------------------------------------------------------------|
| executing | SPTriggeredUninstallAddinJobResponse[]     | This field contains the ones that successed to trigger the uninstall job. |
| failed    | SPFailToTriggerUninstallAddinJobResponse[] | This field contains the ones that failed to trigger the uninstall job.    |

#### SPTriggeredUninstallAddinJobResponse

| Name              | Type   | Description                     |
|-------------------|--------|---------------------------------|
| appInstanceId     | Guid   | The instance id of the Add-in.  |
| serverRelativeUrl | string | The site's server relative url. |
| absoluteUrl       | string | The site's absolute url.        |
| uninstallJobId    | Guid   | The triggered uninstall job id. |

#### SPFailToTriggerUninstallAddinJobResponse

| Name              | Type   | Description                                             |
|-------------------|--------|---------------------------------------------------------|
| appInstanceId     | Guid   | The instance id of the Add-in.                          |
| serverRelativeUrl | string | The site's server relative url.                         |
| errorMessage      | Guid   | The error message why the uninstall job trigger failed. |


## Get uninstall Add-in job status

Since the uninstall Add-in is an async process, this API will provide the ability to check if the uninstall ends successfully.
If the job ends successfully, then the job will be not found. If the job ends with failure, then it will return the error detail.

This API needs the app to have at least Sites.Read.All permission.

### HTTP request

```HTTP
POST {adminSiteUrl}/_api/web/GetAddinUninstallJobDetail
```

### Request body

| Name              | Required | Type   | Description                                                                |
|-------------------|----------|--------|----------------------------------------------------------------------------|
| jobId             | yes      | Guid   | This uninstall job id.                                                     |
| serverRelativeUrl | no       | string | The site's server relative url.                                            |
| url               | no       | string | The site's url, both server relative url and absolute url are acceptable.  |

The serverRelativeUrl and url can't be both null. If both serverRelativeUrl and url are provided, the url will be used.

### Responses

| Name              | Type                          | Description                                      |
|-------------------|-------------------------------|--------------------------------------------------|
| serverRelativeUrl | string                        | The site's server relative url.                  |
| absoluteUrl       | string                        | The site's absolute url.                         |
| taskStartTime     | DateTime                      | The time when the task starts executing.         |
| jobId             | Guid                          | The uninstall job id.                            |
| siteId            | Guid                          | The site collection id.                          |
| appInstanceId     | Guid                          | The id of the app instance.                      |
| errorDetails      | SPUninstallAddinErrorDetail[] | The error details for the job ends with failure. |

#### SPUninstallAddinErrorDetail

| Name             | Type   | Description                         |
|------------------|--------|-------------------------------------|
| detail           | string | The error detail.                   |
| exceptionMessage | string | The exception message of the error. |
| source           | string | The source of the error.            |
| type             | string | The type of the error.              |
| correlationId    | Guid   | The job's correlation id.           |
