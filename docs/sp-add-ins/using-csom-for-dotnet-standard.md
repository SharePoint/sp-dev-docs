---
title: Using CSOM for .NET Standard instead of CSOM for .NET Framework
description: Explains the differences between using CSOM for .NET Standard versus CSOM for .NET Framework
ms.date: 12/21/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Using CSOM for .NET Standard instead of CSOM for .NET Framework

You can use the SharePoint client object model (CSOM) to retrieve, update, and manage data in SharePoint. SharePoint makes the CSOM available in several forms:

- .NET Framework redistributable assemblies
- .NET Standard redistributable assemblies
- JavaScript library (JSOM)
- REST/OData endpoints

In this article, we'll focus on explaining what the differences are between the .NET Framework version and the .NET Standard version redistributable. In many ways both versions are identical and if you've been writing code using the .NET Framework version then that code and everything you've learned is, for the most part, still relevant when working with the .NET Standard version.

## Key differences between the .NET Framework version and the .NET Standard version

Below table outlines the differences between both versions and provides guidelines on how to handle the differences.

CSOM feature | .NET Framework version | .NET Standard version | Guidelines
-------------|------------------------|-----------------------|------------
.NET supportability | .NET Framework 4.5+ | .NET Framework 4.6.1+, .NET Core 2.0+, Mono 5.4+ ([.NET docs](https://docs.microsoft.com/dotnet/standard/net-standard)) | It's recommended to use the CSOM for .NET Standard version for all your SharePoint Online CSOM developments
Cross platform | No | Yes (can be used on any platform that support .NET Standard) | For cross platform, you have to use CSOM for .NET Standard
On-Premises SharePoint support | Yes | No | The CSOM .NET Framework versions are still fully supported and being updated, so use those for on-premises SharePoint development
Support for legacy authentication flows (so called cookie based auth using the `SharePointOnlineCredentials` class) | Yes | No | See the **Using modern authentication with CSOM for .NET Standard** chapter. Using Azure AD applications to configure authentication for SharePoint Online is the recommended approach
`SaveBinaryDirect` / `OpenBinaryDirect` APIs (webdav based) | Yes | No | Use the regular file APIs in CSOM as it's not recommended to use the BinaryDirect APIs, even not when using the .NET Framework version
`Microsoft.SharePoint.Client.Utilities.HttpUtility` class | Yes | No | Switch to similar classes in .NET such as `System.Web.HttpUtility`
`Microsoft.SharePoint.Client.EventReceivers` namespace | Yes | No | Switch to modern eventing concepts such as [Web Hooks](../apis/webhooks/get-started-webhooks.md).

## Using modern authentication with CSOM for .NET Standard

Using user/password based authentication, implemented via the `SharePointOnlineCredentials` class, is a common approach for developers using CSOM for .NET Framework. In CSOM for .NET Standard this isn't possible anymore, it's up to the developer using CSOM for .NET Standard to obtain an OAuth access token and use that when making calls to SharePoint Online. The recommended approach for getting access tokens for SharePoint Online is by setting up an Azure AD application. For CSOM for .NET Standard the only thing that matters are that you obtain a valid access token, this can be using resource owner password credential flow, using device login, using certificate based auth,...  

In this chapter, we'll use an OAuth resource owner password credential flow resulting in an OAuth access token that then is used by CSOM for authenticating requests against SharePoint Online as that mimics the behavior of the `SharePointOnlineCredentials` class.

### Configuring an application in Azure AD

Below steps will help you create and configure an application in Azure Active Directory:

- Go to Azure AD Portal via https://aad.portal.azure.com
- Select **Azure Active Directory** and on  **App registrations** in the left navigation
- Select **New registration**
- Enter a name for your application and select **Register**
- Go to **API permissions** to grant permissions to your application, select **Add a permission**, choose **SharePoint**, **Delegated permissions** and select for example **AllSites.Manage**
- Select **Grant admin consent** to consent the application's requested permissions
- Select **Authentication** in the left navigation
- Change **Default client type - Treat application as public client** from No to **Yes**
- Select **Overview** and copy the application ID to the clipboard (you'll need it later on)

### Getting an access token from Azure AD and using that in your CSOM for .NET Standard-based application

When using CSOM for .NET Standard it's the responsibility of the developer to obtain an access token for SharePoint Online and ensure, it's inserted into each call made to SharePoint Online. A common code pattern to realize this is shown below:

```csharp
public ClientContext GetContext(Uri web, string userPrincipalName, SecureString userPassword)
{
    context.ExecutingWebRequest += (sender, e) =>
    {
        // Get an access token using your preferred approach
        string accessToken = MyCodeToGetAnAccessToken(new Uri($"{web.Scheme}://{web.DnsSafeHost}"), userPrincipalName, new System.Net.NetworkCredential(string.Empty, userPassword).Password);
        // Insert the access token in the request
        e.WebRequestExecutor.RequestHeaders["Authorization"] = "Bearer " + accessToken;
    };
}
```

The `ClientContext` obtained via the `GetContext` method can be used like any other `ClientContext` and will work with all your existing code. Below code snippets show a helper class and console app using the helper class, reusing these classes will make it easy to implement an equivalent for the `SharePointOnlineCredentials` class.

> [!Note]
> The [PnP Sites Core library](https://github.com/pnp/PnP-Sites-Core) has a [similar AuthenticationManager class](https://github.com/pnp/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/AuthenticationManager.cs) that supports many more Azure AD based authentication flows.

#### Console app sample

```csharp
public static async Task Main(string[] args)
{
    Uri site = new Uri("https://contoso.sharepoint.com/sites/siteA");
    string user = "joe.doe@contoso.onmicrosoft.com";
    SecureString password = GetSecureString($"Password for {user}");

    // Note: The PnP Sites Core AuthenticationManager class also supports this
    using (var authenticationManager = new AuthenticationManager())
    using (var context = authenticationManager.GetContext(site, user, password))
    {
        context.Load(context.Web, p => p.Title);
        await context.ExecuteQueryAsync();
        Console.WriteLine($"Title: {context.Web.Title}");
    }
}
```

#### AuthenticationManager sample class

> [!Note]
> Update the `defaultAADAppId` with the application id of the app you've registered in Azure AD

> [!Note]
> If you are using CSOM for .NET Standard with Azure Functions v3 you may encounter a runtime error related to **System.IdentityModel.Tokens.Jwt**. This can be resolved by following [this workaround](https://github.com/Azure/azure-functions-host/issues/5756).

```csharp
using Microsoft.SharePoint.Client;
using System;
using System.Collections.Concurrent;
using System.Net.Http;
using System.Security;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace CSOMDemo
{
    public class AuthenticationManager: IDisposable
    {
        private static readonly HttpClient httpClient = new HttpClient();
        private const string tokenEndpoint = "https://login.microsoftonline.com/common/oauth2/token";

        private const string defaultAADAppId = "986002f6-c3f6-43ab-913e-78cca185c392";

        // Token cache handling
        private static readonly SemaphoreSlim semaphoreSlimTokens = new SemaphoreSlim(1);
        private AutoResetEvent tokenResetEvent = null;
        private readonly ConcurrentDictionary<string, string> tokenCache = new ConcurrentDictionary<string, string>();
        private bool disposedValue;

        internal class TokenWaitInfo
        {
            public RegisteredWaitHandle Handle = null;
        }

        public ClientContext GetContext(Uri web, string userPrincipalName, SecureString userPassword)
        {
            var context = new ClientContext(web);

            context.ExecutingWebRequest += (sender, e) =>
            {
                string accessToken = EnsureAccessTokenAsync(new Uri($"{web.Scheme}://{web.DnsSafeHost}"), userPrincipalName, new System.Net.NetworkCredential(string.Empty, userPassword).Password).GetAwaiter().GetResult();
                e.WebRequestExecutor.RequestHeaders["Authorization"] = "Bearer " + accessToken;
            };

            return context;
        }


        public async Task<string> EnsureAccessTokenAsync(Uri resourceUri, string userPrincipalName, string userPassword)
        {
            string accessTokenFromCache = TokenFromCache(resourceUri, tokenCache);
            if (accessTokenFromCache == null)
            {
                await semaphoreSlimTokens.WaitAsync().ConfigureAwait(false);
                try
                {
                    // No async methods are allowed in a lock section
                    string accessToken = await AcquireTokenAsync(resourceUri, userPrincipalName, userPassword).ConfigureAwait(false);
                    Console.WriteLine($"Successfully requested new access token resource {resourceUri.DnsSafeHost} for user {userPrincipalName}");
                    AddTokenToCache(resourceUri, tokenCache, accessToken);

                    // Register a thread to invalidate the access token once's it's expired
                    tokenResetEvent = new AutoResetEvent(false);
                    TokenWaitInfo wi = new TokenWaitInfo();
                    wi.Handle = ThreadPool.RegisterWaitForSingleObject(
                        tokenResetEvent,
                        async (state, timedOut) =>
                        {
                            if (!timedOut)
                            {
                                TokenWaitInfo internalWaitToken = (TokenWaitInfo)state;
                                if (internalWaitToken.Handle != null)
                                {
                                    internalWaitToken.Handle.Unregister(null);
                                }
                            }
                            else
                            {
                                try
                                {
                                    // Take a lock to ensure no other threads are updating the SharePoint Access token at this time
                                    await semaphoreSlimTokens.WaitAsync().ConfigureAwait(false);
                                    RemoveTokenFromCache(resourceUri, tokenCache);
                                    Console.WriteLine($"Cached token for resource {resourceUri.DnsSafeHost} and user {userPrincipalName} expired");
                                }
                                catch (Exception ex)
                                {
                                    Console.WriteLine($"Something went wrong during cache token invalidation: {ex.Message}");
                                    RemoveTokenFromCache(resourceUri, tokenCache);
                                }
                                finally
                                {
                                    semaphoreSlimTokens.Release();
                                }
                            }
                        },
                        wi,
                        (uint)CalculateThreadSleep(accessToken).TotalMilliseconds,
                        true
                    );

                    return accessToken;

                }
                finally
                {
                    semaphoreSlimTokens.Release();
                }
            }
            else
            {
                Console.WriteLine($"Returning token from cache for resource {resourceUri.DnsSafeHost} and user {userPrincipalName}");
                return accessTokenFromCache;
            }
        }

        private async Task<string> AcquireTokenAsync(Uri resourceUri, string username, string password)
        {
            string resource = $"{resourceUri.Scheme}://{resourceUri.DnsSafeHost}";

            var clientId = defaultAADAppId;
            var body = $"resource={resource}&client_id={clientId}&grant_type=password&username={HttpUtility.UrlEncode(username)}&password={HttpUtility.UrlEncode(password)}";
            using (var stringContent = new StringContent(body, Encoding.UTF8, "application/x-www-form-urlencoded"))
            {

                var result = await httpClient.PostAsync(tokenEndpoint, stringContent).ContinueWith((response) =>
                {
                    return response.Result.Content.ReadAsStringAsync().Result;
                }).ConfigureAwait(false);

                var tokenResult = JsonSerializer.Deserialize<JsonElement>(result);
                var token = tokenResult.GetProperty("access_token").GetString();
                return token;
            }
        }

        private static string TokenFromCache(Uri web, ConcurrentDictionary<string, string> tokenCache)
        {
            if (tokenCache.TryGetValue(web.DnsSafeHost, out string accessToken))
            {
                return accessToken;
            }

            return null;
        }

        private static void AddTokenToCache(Uri web, ConcurrentDictionary<string, string> tokenCache, string newAccessToken)
        {
            if (tokenCache.TryGetValue(web.DnsSafeHost, out string currentAccessToken))
            {
                tokenCache.TryUpdate(web.DnsSafeHost, newAccessToken, currentAccessToken);
            }
            else
            {
                tokenCache.TryAdd(web.DnsSafeHost, newAccessToken);
            }
        }

        private static void RemoveTokenFromCache(Uri web, ConcurrentDictionary<string, string> tokenCache)
        {
            tokenCache.TryRemove(web.DnsSafeHost, out string currentAccessToken);
        }

        private static TimeSpan CalculateThreadSleep(string accessToken)
        {
            var token = new System.IdentityModel.Tokens.Jwt.JwtSecurityToken(accessToken);
            var lease = GetAccessTokenLease(token.ValidTo);
            lease = TimeSpan.FromSeconds(lease.TotalSeconds - TimeSpan.FromMinutes(5).TotalSeconds > 0 ? lease.TotalSeconds - TimeSpan.FromMinutes(5).TotalSeconds : lease.TotalSeconds);
            return lease;
        }

        private static TimeSpan GetAccessTokenLease(DateTime expiresOn)
        {
            DateTime now = DateTime.UtcNow;
            DateTime expires = expiresOn.Kind == DateTimeKind.Utc ? expiresOn : TimeZoneInfo.ConvertTimeToUtc(expiresOn);
            TimeSpan lease = expires - now;
            return lease;
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    if (tokenResetEvent != null)
                    {
                        tokenResetEvent.Set();
                        tokenResetEvent.Dispose();
                    }
                }

                disposedValue = true;
            }
        }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
```
