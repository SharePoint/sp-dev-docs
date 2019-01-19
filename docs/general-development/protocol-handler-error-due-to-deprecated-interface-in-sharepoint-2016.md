---
title: Protocol handler error due to deprecated interface in SharePoint 2016
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: c80cb77c-89db-4c78-b576-f63d39ca330a
localization_priority: Normal
---


# Protocol handler error due to deprecated interface in SharePoint 2016

Protocol handler implementations using the interfaces listed in this article in the **srchprth.h** header file are now deprecated in SharePoint 2016. Specifically, the protocol handler for deprecated interfaces generates the error "The protocol handler cannot be loaded".
  
    
    


## Symptom

You see the following error message when you load the protocol handler:
  
    
    

```

The protocol handler <name of custom protocol handler> cannot be loaded. Error description: No such interface supported.
```


### Cause

You are using the **srchprth.h** header file in your protocol handler implementation. This file contains interfaces deprecated in SharePoint 2016.
  
    
    

### Resolution

Replace the deprecated interfaces in your protocol handler implementation with those that are currently supported:
  
    
    

- **srchprth.h** (updated)
    
  
- **urlaccsdk.h** (new)
    
  

## Deprecated Interfaces
<a name="bk_addresources"> </a>

The deprecated interfaces include the following:
  
    
    
 **interface ISearchProtocol : IUnknown**
  
    
    



```
{

    HRESULT Init([in] TIMEOUT_INFO *pTimeoutInfo,
                 [in] IProtocolHandlerSite *pProtocolHandlerSite,
                 [in] PROXY_INFO *pProxyInfo);

    HRESULT CreateAccessor([in] LPCWSTR pcwszURL,
                           [in] AUTHENTICATION_INFO *pAuthenticationInfo,
                           [in] INCREMENTAL_ACCESS_INFO *pIncrementalAccessInfo,
                           [in] ITEM_INFO *pItemInfo,
                           [out] IUrlAccessor **ppAccessor);

    HRESULT CloseAccessor([in] IUrlAccessor *pAccessor);
    HRESULT ShutDown();
}

TIMEOUT_INFO
{
    DWORD       dwSize;
    DWORD       dwConnectTimeout;
    DWORD       dwDataTimeout;
}

PROXY_INFO
{
    DWORD           dwSize;
    LPCWSTR         pcwszUserAgent;
    PROXY_ACCESS    paUseProxy;
    BOOL            fLocalBypass;
    DWORD           dwPortNumber;
    LPCWSTR         pcwszProxyName;
    LPCWSTR         pcwszBypassList;
}

AUTHENTICATION_INFO
{
    DWORD       dwSize;
    AUTH_TYPE   atAuthenticationType;
    LPCWSTR     pcwszUser;
    LPCWSTR     pcwszPassword;
}

INCREMENTAL_ACCESS_INFO
{
                     DWORD       dwSize;
                     FILETIME    ftLastModifiedTime;
}
```

 **IProtocolHandler: public IUnknown**
  
    
    



```

{
                     public:
                           HRESULT Init(
                                  /* [in] */ LPCWSTR pwszUserAgent,
                                  /* [in] */ DWORD dwUseProxy,
                                  /* [in] */ DWORD dwConnectTimeout,
                                  /* [in] */ DWORD dwDataTimeout,
                                  /* [in] */ DWORD dwLocalByPassProxy,
                                  /* [in] */ DWORD dwPortNumber,
                                  /* [in] */ LPCWSTR pcwszProxyName,
                                  /* [in] */ LPCWSTR pcwszByPassList,
                                  /* [in] */ LPCWSTR pcwszProxyUserName,
                                  /* [in] */ LPCWSTR pcwszProxyPassword,
                                  /* [in] */ IProtocolHandlerSite *pProtocolHandlerSite) = 0;

                           HRESULT CreateAccessor(
                                  /* [in] */ AccessorInitParams *pParams,
                                  /* [out] */ IUrlAccessor **ppAccessor) = 0;

                           HRESULT CloseAccessor(
                                  /* [in] */ IUrlAccessor *pAccessor) = 0;

                           HRESULT SetProcessMemorySize(
                                  /* [in] */ DWORD dwFltrDmnMemoryQuota) = 0;
                     };

struct AccessorInitParameters
                     {
                           LPCWSTR pwszUrl;
                           LPCWSTR pwszCrawlTarget;
                           BOOL fUseSSLWithCT;
                           BOOL fUseCTForIntranet;
                           DWORD eAuthenticationType;
                           LPCWSTR pwszUser;
                           LPCWSTR pwszPassword;
                           LPCWSTR pwszHttpFrom;
                           FILETIME ftIfModifiedSince;
                           DWORD dwCrawlId;
                           DWORD dwMiniCrawlID;
                           DWORD dwDeletedCount;
                           DWORD dwDeletedCountSync;
                           BOOL fDeletedCountValid;
                           LPCWSTR pwszAppName;
                           LPCWSTR pwszCatName;
                           DWORD dwFilterPipeFlags;
                           LPCWSTR pwszContentClass;
                           LPCWSTR pwszSearchPropertyMappingUrl;
                           BYTE *pbChangeLogCookie;
                           DWORD cbChangeLogCookieLength;
                           BYTE *pbChangeLogCookieEnd;
                           DWORD cbChangeLogCookieEndLength;
                           LPCWSTR pwszFormsAuthURL;
                           LPCWSTR pwszFormsAuthPost;
                           BYTE *pbCachedBlob;
                           DWORD cbCachedBlobLength;
                           DWORD dwPHFlags;
                           LPCWSTR pwszSecurityId;
                           LPCWSTR pwszCorrelationId;
                           CLSID *pTenantID;
                           HANDLE hImpersonationToken;

                     }      AccessorInitParams;
```

* AccessorInitParams contains many parameters, some of which may be optional. These parameters are mostly an expansion of previous deprecated structs.
  
    
    

## See also
<a name="bk_addresources"> </a>

For more information, see  [Enterprise Search Protocol Handlers](https://msdn.microsoft.com/en-us/library/office/aa981260%28v=office.12%29.aspx).
  
    
    

