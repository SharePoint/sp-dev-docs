---
title: Authorization considerations for tenants hosted in the Germany, China or US Government environments
ms.date: 11/03/2017
---
# Authorization considerations for tenants hosted in the Germany, China or US Government environments

When your Office 365 tenant is hosted in an specific environment like the Germany, China or US Government environments then you'll need to take this in account when you're developing against your tenant. 

_**Applies to:** Office 365 hosted in the Germany, China or US Government environments_

> [!IMPORTANT]
> Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), will be retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the `https://accounts.accesscontrol.windows.net` hostname (which is not impacted by this retirement). For more information, see [Impact of Azure Access Control retirement for SharePoint Add-ins](https://dev.office.com/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins).

## Introduction
<a name="introduction"> </a>

Microsoft has specific Office 365 deployments in Germany, China and for US Government to fulfill the specific regulations for those areas. Below links provide more context:
- [Office 365 Germany](https://technet.microsoft.com/en-us/library/mt793278.aspx)
- [Office 365 operated by 21Vianet (China)](https://technet.microsoft.com/en-us/library/mt651782.aspx)
- [Office 365 US Government](https://technet.microsoft.com/library/mt774581.aspx)

If you are a developer targeting applications for SharePoint Online hosted in these environments then you'll need to take in account that these environments have their own dedicated Azure AD authentication endpoints that you as developer need to use. Below chapters explain how do use these dedicated endpoints for the typical SharePoint Online customization options.

## Using Azure AD to authorize
<a name="usingazureadtoauthorize"> </a>

### Azure AD endpoints
<a name="adendpoints"> </a>

When your Azure AD application needs to authorize it needs to use the correct endpoint. Below table describes the endpoints to use depending on where your Azure AD application has been defined:

|**Environment**|**Endpoint**|
|:-----|:-----|
| Production | https://login.windows.net |
| Germany | https://login.microsoftonline.de |
| China | https://login.chinacloudapi.cn |
| US Government | https://login-us.microsoftonline.com |

### Using PnP to authorize using Azure AD
<a name="adpnp"> </a>

The PnP [AuthenticationManager](https://github.com/SharePoint/PnP-Sites-Core/blob/dev/Core/OfficeDevPnP.Core/AuthenticationManager.cs) offers an easy way to obtain an SharePoint ClientContext object when you're using an Azure AD application. The impacted methods have been extended with an optional `AzureEnvironment` enum

```c#
/// <summary>
/// Enum to identify the supported Office 365 hosting environments
/// </summary>
public enum AzureEnvironment
{
    Production=0,
    PPE=1,
    China=2,
    Germany=3,
    USGovernment=4
}
```

Below snippet shows an app-only authorization, notice the last parameter in the `GetAzureADAppOnlyAuthenticatedContext` method:
```c#
string siteUrl = "https://contoso.sharepoint.de/sites/test";
string aadAppId = "079d8797-cebc-4cda-a3e0-xxxx"; 
string pfxPassword = "my password";
ClientContext cc = new AuthenticationManager().GetAzureADAppOnlyAuthenticatedContext(siteUrl, 
			aadAppId, "contoso.onmicrosoft.de", @"C:\contoso.pfx", pfxPassword, AzureEnvironment.Germany);
```

Another snippet is showing an interactive user login using the `GetAzureADNativeApplicationAuthenticatedContext` method:

```c#
string siteUrl = "https://contoso.sharepoint.de/sites/test";
string aadAppId = "ff76a9f4-430b-4ee4-8602-xxxx"; 
ClientContext cc = new AuthenticationManager().GetAzureADNativeApplicationAuthenticatedContext(siteUrl, 
			aadAppId, "https://contoso.com/test", environment: AzureEnvironment.Germany);
```

## Using Azure ACS to authorize your SharePoint add-in
<a name="usingazureacs"> </a>

When you create SharePoint add-ins they'll typically low-trust authorization which depends on Azure ACS as descrived in [Creating SharePoint Add-ins that use low-trust authorization](https://msdn.microsoft.com/en-us/library/office/dn790707.aspx).


### Azure ACS endpoints
<a name="endpointsacs"> </a>


|**Environment**|**Endpoint prefix**|**Endpoint**|
|:-----|:-----|:-----|
| Production | accounts | accesscontrol.windows.net |
| Germany | login | microsoftonline.de |
| China | accounts | accesscontrol.chinacloudapi.cn |
| US Government | accounts | accesscontrol.windows.net |

Using this model the ACS endpoint url to use is formatted like https:// + endpoint prefix + / + endpoint. So the URL for production will be https://accounts.accesscontrol.windows.net, the one for Germany will be https://login.microsoftonline.de.

### Updating tokenhelper.cs in your applications
<a name="tokenhelperacs"> </a>

When you want to do SharePoint add-in authorization using Azure ACS then you're using `tokenhelper.cs` (or `tokenhelper.vb`). The default tokenhelper class will have hardcoded references to the Azure ACS endpoints and methods to acquire the ACS endpoint as shown below:

```csharp
...

private static string GlobalEndPointPrefix = "accounts";
private static string AcsHostUrl = "accesscontrol.windows.net";

...
```

#### Tokenhelper.cs updates for Germany
Update the static variables `GlobalEndPointPrefix` and `AcsHostUrl` to the Germany Azure ACS values.

```csharp
...

private static string GlobalEndPointPrefix = "login";
private static string AcsHostUrl = "microsoftonline.de";

...
```

#### Tokenhelper.cs updates for China
Update the static variables `GlobalEndPointPrefix` and `AcsHostUrl` to the China Azure ACS values:

```csharp
...

private static string GlobalEndPointPrefix = "accounts";
private static string AcsHostUrl = "accesscontrol.chinacloudapi.cn";

...
```

### Using PnP to authorize your add-in using Azure ACS
<a name="pnpacs"> </a>

The PnP [AuthenticationManager](https://github.com/SharePoint/PnP-Sites-Core/blob/dev/Core/OfficeDevPnP.Core/AuthenticationManager.cs) offers an easy way to obtain an SharePoint ClientContext object when you're using Azure ACS to authorize. The impacted methods have been extended with an optional `AzureEnvironment` enum

```c#
/// <summary>
/// Enum to identify the supported Office 365 hosting environments
/// </summary>
public enum AzureEnvironment
{
    Production=0,
    PPE=1,
    China=2,
    Germany=3,
    USGovernment=4
}
```

Below snippet shows an app-only authorization, notice the last parameter in the `GetAppOnlyAuthenticatedContext` method:
```c#
string siteUrl = "https://contoso.sharepoint.de/sites/test";
string acsAppId = "955c10f2-7072-47f8-8bc1-xxxxx"; 
string acsAppSecret = "jgTolmGXU9DW8hUKgletoxxxxx"; 
ClientContext cc = new AuthenticationManager().GetAppOnlyAuthenticatedContext(siteUrl, acsAppId, 
				acsAppSecret, AzureEnvironment.Germany);
```


### See also
<a name="bk_addresources"> </a>

- [Learn about Office 365 Germany](https://support.office.com/en-US/article/Learn-about-Office-365-Germany-8a5a4bbc-667a-4cac-8769-d8ac9015db4c) 
- [Learn about Office 365 operated by 21Vianet (China)](https://support.office.com/en-us/article/Learn-about-Office-365-operated-by-21Vianet-A8AB5061-3346-4DA0-BB7C-5260822B53AE)