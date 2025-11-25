---
title: Granting access via Entra ID App-Only
description: Granting access via Entra ID App-Only
ms.date: 11/25/2025
author: jansenbe
ms.author: bjansen
ms.topic: article
ms.localizationpriority: medium
---
# Granting access via Entra ID Application Permissions

When using SharePoint Online you can define applications in Entra ID and these applications can be granted permissions to SharePoint, but also to all the other services in Microsoft 365. This model is the preferred model in case you're using SharePoint Online, if you're using SharePoint on-premises you have to use the SharePoint Only model via based Azure ACS as described in [here](security-apponly-azureacs.md).

## Setting up an Entra ID app for app-only access

In Entra ID when doing app-only you must use a certificate to request access to SharePoint CSOM/REST API's: anyone having the certificate and its private key can use the app and the permissions granted to the app. Below steps walk you through the setup of this model.

### Creating an Entra application using the Entra Portal

If you want to manually create the Entra application follow below steps to create and configure your Entra application:

1. Navigate to [Entra Portal](https://entra.microsoft.com) and click on **Applications**, followed by **App registrations** from the left navigation
2. Click on **New registration** page
3. Provide a **Name** for your Entra application (e.g. Microsoft365AssessmentToolForWorkflow)
4. Select **Public client/native (mobile & desktop)** and enter **http://localhost** as redirect URI
5. Click on **Register** and the Entra application gets created and opened
6. Ensure you've defined the needed application permissions via the **API permissions** link the left navigation
7. Go to **Certificates & secrets**, click on **Certificates** and **Upload certificate**, pick the .cer file of your certificate and add it.
7. Click on **Grant admin consent for...** to consent the added permissions

> [!Note]
> - If you don't have a certificate available then you can use Windows PowerShell to create one: https://docs.microsoft.com/azure/active-directory/develop/howto-create-self-signed-certificate.
> - You can [learn more about creating an Entra application from the Entra docs](https://learn.microsoft.com/entra/identity-platform/quickstart-register-app).

### Creating an Entra application using PnP PowerShell

 Using [PnP PowerShell](https://pnp.github.io/powershell/) creating an Entra application becomes really simple. The [Register-PnPAzureADApp](https://pnp.github.io/powershell/cmdlets/Register-PnPAzureADApp.html) cmdlet will create a new Entra application, will create a new self-signed certificate inside the **Personal** node (= **My**) of the **CurrentUser** certificate store, and will hookup that cert with the created Entra application. Finally the right permissions are configured and you're prompted to consent these permissions.

> [!Important]
> If you encounter errors during below steps it's likely that you do not have the needed permissions. Please contact your tenant / Entra admins for help.

```PowerShell
# Before you use this!! 
#  - Remove/update the application/delegated permissions depending on your needs
#  - Also update the Tenant and Username properties to match your environment.
#
# If you prefer to have a password set to secure the created PFX file then add below parameter
# -CertificatePassword (ConvertTo-SecureString -String "password" -AsPlainText -Force)
#
# See https://pnp.github.io/powershell/cmdlets/Register-PnPAzureADApp.html for more options
#
Register-PnPAzureADApp -ApplicationName Microsoft365AssessmentToolForAlerts `
                       -Tenant contoso.onmicrosoft.com `
                       -Store CurrentUser `
                       -GraphApplicationPermissions "Sites.Read.All" `
                       -SharePointApplicationPermissions "Sites.FullControl.All" `
                       -GraphDelegatePermissions "Sites.Read.All", "User.Read" `
                       -SharePointDelegatePermissions "AllSites.FullControl" `
                       -Username "joe@contoso.onmicrosoft.com" `
                       -Interactive
```

> [!Note]
> Replace `contoso.onmicrosoft.com` with your Entra tenant name and ensure you replace `joe@contoso.onmicrosoft.com` with the user id that's an Entra admin (or global admin). If you're unsure what your Entra tenant name is then go to https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView and check for the value of **Primary domain**.

Once you've pressed enter on above command, you'll be prompted to sign-in and you should sign-in using the user you've specified for the `Username` parameter. After that's done the Entra application will be created and configured, followed by a wait of 60 seconds to ensure the creation has been propagated across all systems. The final step is the admin consent flow: you'll again be prompted to sign-in with the specified admin user, followed by a consent dialog showing the permissions that are being granted to the application. Press **Accept** to finalize the consent flow. In the resulting output you'll get some key information:

```text
Pfx file               : D:\assessment\Microsoft365AssessmentTool.pfx
Cer file               : D:\assessment\Microsoft365AssessmentTool.cer
AzureAppId/ClientId    : 95610f5d-729a-4cd1-9ad7-1fa9052e50dd
Certificate Thumbprint : 165CCE93E08FD3CD85B7B25D5E91C05B1D1E49FE
```

Running the `Register-PnPAzureADApp` did not only create and configure the Entra application, it also did create a certificate for the application permission flow. This certificate has been added to the current user's certificate store, under the personal node. You can use `certmgr` on the command line to open up the local user's certificate store.

> [!Note]
> The certificate is also exported as PFX file and cer file on the file system, feel free to delete these exported files as it's easier to use the certificate from the certificate store.

## Using this principal with PnP PowerShell

If you want to use this Entra ID App Only principal with [PnP PowerShell](https://github.com/pnp/PowerShell), after you have installed the PnP PowerShell module, you can connect to your SharePoint Online environment using the [non interactive authentication](https://pnp.github.io/powershell/articles/authentication.html#non-interactive-authentication) supported by PnP PowerShell.

```powershell
Connect-PnPOnline [yourtenant].sharepoint.com -ClientId <client id of your Entra ID Application Registration> -Tenant <tenant>.onmicrosoft.com -CertificatePath <path to your .pfx certificate> 

# or

Connect-PnPOnline [yourtenant].sharepoint.com -ClientId <client id of your Entra ID Application Registration> -Tenant <tenant>.onmicrosoft.com -Thumbprint <thumbprint that can be found in the certificate> 
```

You can now perform operations through PnP PowerShell against your SharePoint Online environment using this certificate App Only trust.

[!INCLUDE [pnp-powershell](../../includes/snippets/open-source/pnp-powershell.md)]

## Using this principal in your CSOM application

Follow these steps to build a C# Console application that uses CSOM and authenticates using Entra ID with application permissons:
- Create a new console-based solution for c# .net
- Install the MSAL.NET NuGet package by running the following command in the Package Manager Console: `Install-Package Microsoft.Identity.Client`
- Add the following code to your application to configure MSAL and acquire an access token using a certificate

```csharp
using System;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Identity.Client;

namespace YourNamespace
{
    class Program
    {
        static async Task Main(string[] args)
        {
            //Generate Access Token using MSAL
            #region Access Token
            string tenantId = "{Tenant_Id}";
            string clientId = "{Client_Id}";
            string certificatePath = @"{Full Path to the certificate .Pfx file}";
            string certificatePassword = "{Password of the .Pfx file}";
            var siteUrl = new Uri("{SPO Site URL}");

            X509Certificate2 certificate = new X509Certificate2(certificatePath, certificatePassword);

            IConfidentialClientApplication app = ConfidentialClientApplicationBuilder.Create(clientId)
                .WithCertificate(certificate)
                .WithAuthority(new Uri($"https://login.microsoftonline.com/{tenantId}"))
                .Build();

            string[] scopes = new string[] { "https://domain.sharepoint.com/.default" };

            AuthenticationResult result = await app.AcquireTokenForClient(scopes).ExecuteAsync();

            var accessToken = result.AccessToken;

            Console.WriteLine($"Access Token: {accessToken}");
            Console.WriteLine();
            Console.WriteLine();
            #endregion

            //Generate SPO Context using the Access token
            #region SPO Context
            using (var context = new ClientContext(siteUrl))
            {
                context.ExecutingWebRequest += async (sender, e) =>
                {
                    // Insert the access token in the request
                    e.WebRequestExecutor.RequestHeaders["Authorization"] = "Bearer " + accessToken;
                };

                // Read web properties
                var web = context.Web;
                context.Load(web, w => w.Id, w => w.Title);
                await context.ExecuteQueryAsync();

                Console.WriteLine($"{web.Id} - {web.Title}");
                Console.ReadKey();
            }
            #endregion
        }
    }
}
```

## Using this principal in your application using the SharePoint PnP Framework library

In a first step, you add the PnP Framework library NuGet package: https://www.nuget.org/packages/PnP.Framework.

Once that's done you can use below code construct:

```csharp
using PnP.Framework;
using System;

namespace AzureADCertAuth
{
    class Program
    {
        static void Main(string[] args)
        {
            var authManager = new AuthenticationManager("<application id>", "c:\\temp\\mycert.pfx", "<password>", "contoso.onmicrosoft.com");
            using (var cc = authManager.GetContext("https://contoso.sharepoint.com/sites/demo"))
            {
                cc.Load(cc.Web, p => p.Title);
                cc.ExecuteQuery();
                Console.WriteLine(cc.Web.Title);
            };
        }
    }
}
```

[!INCLUDE [pnp-framework](../../includes/snippets/open-source/pnp-framework.md)]

## FAQ

### Can I use other means besides certificates for realizing app-only access for my Azure AD app?

No, all other options are blocked by SharePoint Online and will result in an Access Denied message.

