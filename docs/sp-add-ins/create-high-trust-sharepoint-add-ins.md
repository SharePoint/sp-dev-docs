# Create high-trust SharePoint Add-ins
Learn how to create a high-trust SharePoint Add-in. A high-trust add-in uses digital certificates to establish a trust between the remote web application and SharePoint 2013. High-trust add-ins can only be installed to on premises SharePoint, not to Microsoft SharePoint Online, and they are primarily intended for use with an on premises, rather than cloud-based, web application.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Prerequisites for creating high-trust add-ins
<a name="Prereqs"> </a>

To follow the procedures in this article, be sure you have the following:
 

 

- An on-premises SharePoint 2013 development environment. See  [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md) for the setup instructions. In particular, be sure you have completed the steps in the section [Configure services in SharePoint for server-to-server add-in use](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md#Servertoserver).
    
 
- Experience creating a provider-hosted SharePoint Add-in. See  [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md).
    
 
- Visual Studio installed either remotely or on the computer where you have installed SharePoint 2013.
    
 
- Microsoft Office Developer Tools for Visual Studio.
    
 
- Familiarity with digital certificates—what they are and how to use them.
    
 
Read the following articles to get a better understanding of SharePoint Add-ins and digital certificates.
 

 

**Table 1. Core concepts for setting up SharePoint 2013 to run high-trust add-ins**


|**Article title**|**Description**|
|:-----|:-----|
| [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)|Learn how to create a basic provider-hosted SharePoint Add-in with the Office Developer Tools for Visual Studio, how to interact with SharePoint 2013 sites by using the SharePoint CSOM.|
| [Digital Certificates](http://msdn.microsoft.com/library/e523b335-0156-4f47-b55c-b80495587c4f.aspx) and [Working with Certificates](http://msdn.microsoft.com/library/6ffb8682-8f07-4a45-afbb-8d2487e9dbc3.aspx)|Learn the basic ideas behind digital certificates.|

## Introduction to running high-trust add-ins
<a name="Intro"> </a>

A high-trust add-in is a provider-hosted SharePoint Add-in that uses the digital certificates to establish trust between the remote web application and SharePoint. "High-trust" is not the same as "full trust". A high-trust add-in must still request add-in permissions. The add-in is considered "high-trust" because it is trusted to use any user identity that the add-in needs, because the add-in is responsible for creating the user portion of the access token that it passes to SharePoint.
 

 
A high-trust SharePoint Add-in is primarily intended for use in an on-premises environment. The high-trust add-in cannot be installed to Microsoft SharePoint Online, and the remote components are typically installed on premises, too, within the corporate firewall. Thus, the instances of the SharePoint Add-in are specific to each individual company.
 

 
A high-trust add-in uses a certificate instead of a context token to establish trust. (A provider-hosted add-in that's built to use Microsoft Azure Access Control Service (ACS) as its trust broker needs to be modified to work as a high-trust app.) High-trust add-ins require some configuration on the SharePoint farm and on the server hosting the remote web application. This topic describes the configuration steps that are needed to get Visual Studio debugging ( **F5**) working. Configuring a test, staging, or production environment are somewhat different and are described in the topic  [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md). 
 

 
In SharePoint 2013, the server-to-server security token service (STS) provides access tokens for server-to-server authentication. The server-to-server STS enables temporary access tokens to access other application services such as Exchange 2013, Lync 2013, and add-ins for SharePoint 2013. You establish a trust relationship between the application services (for example, establishing trust between SharePoint and a remote add-in) by using Windows PowerShell cmdlets and a certificate.
 

 

 **Note**  The server-to-server STS isn't intended for user authentication. Therefore, you won't see the server-to-server STS listed on the user sign-in page, in the  **Authentication Provider** section in Central Administration, or in the People Picker in SharePoint 2013.
 

This article shows you how to create a high-trust add-in and provides setup instructions for running it within Visual Studio by pressing  **F5**. You'll learn to:
 

 

- Configure an add-in for use as a high-trust add-in.
    
 
- Configure SharePoint 2013 to use high-trust add-ins.
    
 
- Create a basic high-trust add-in.
    
 

## Obtain a certificate or create a public and private test certificate
<a name="Cert2"> </a>

You need an X.509 digital certificate for the remote web application of your high-trust add-in. To fully test your SharePoint Add-in, you need a domain-issued certificate or a commercial certificate issued by a Certificate Authority. However, for the initial phase of debugging, you can use a self-signed certificate. The following procedure describes how to create and export a test certificate by using IIS. You'll learn how to replace the self-signed certificate with a domain-issued or commercial certificate in the section  [Complete debugging with a domain issued or commercial certificate](#NewCertificate) below.
 

 
Alternatively, you can also use the MakeCert test program to generate a X.509 certificate. For more information about how to use MakeCert, see  [Signing and checking code with Authenticode](http://msdn.microsoft.com/en-us/library/ms537364%28VS.85%29.aspx).
 

 
You'll create a test .pfx certificate file first, and then a corresponding test .cer file. The .pfx certificate contains the private key that is used by the remote web application to sign its communications to SharePoint. The .cer contains the public key that SharePoint uses to decrypt the messages, verify that they come from the remote web application, and verify that the remote web application has an access token from a token issuer that SharePoint trusts. For more information about .pfx and .cer files, see  [Software Publisher Certificate](http://msdn.microsoft.com/en-us/library/windows/hardware/ff552299%28v=vs.85%29.aspx)
 

 

### To create a self-signed test .pfx certificate file


1. When you are debugging a high-trust SharePoint Add-in in Visual Studio, the remote web application is hosted in IIS Express on the machine where Visual Studio is installed. So the remote web application computer doesn't have an IIS Manager where you can create the certificate. For this reason, you use the IIS on the  *SharePoint*  test server to create the certificate. In IIS manager, select the _ServerName_ node in the tree view on the left.
    
 
2. Select the  **Server Certificates** icon, as shown in Figure 1.
    
    **Figure 1. Server Certificates option in IIS**

 

     ![Server Certificates option in IIS](../../images/e38f9b7f-59a3-468c-bcde-a48272f1f217.gif)
 

 

 
3. Select the  **Create Self-Signed Certificate** link from the set of links on the right side, as shown in Figure 2.
    
    **Figure 2. Create Self-Signed Certificate link**

 

     ![Create Self-Signed Cerificate link](../../images/3f0aae5a-e58b-4ec8-b67f-0024abfa2dab.gif)
 

 

 
4. Name the certificate HighTrustSampleCert, and then choose  **OK**.
    
 
5. Right-click the certificate, and then select  **Export**, as shown in Figure 3.
    
    **Figure 3. Exporting a test certificate**

 

     ![Exporting a test certificate](../../images/997021de-c60c-46b0-961f-7e1e63c0f619.gif)
 

 

 
6. In Windows, or at a command line, create a folder called C:\Certs.
    
 
7. Back in IIS Manager, export the file to C:\Certs and give it a password. In this example, the password is  **password**.
    
 
8. If your test SharePoint installation is not on the same computer where Visual Studio is running, create a folder C:\Certs on the Visual Studio computer and move the HighTrustSampleCert.pfx file to it. This is the computer where the remote web application runs when you are debugging in Visual Studio.
    
 

### To create a corresponding .cer file


1. On the SharePoint server, be sure that the add-in pool identity for the following IIS add-in pools have Read rights to the C:\Certs folder:
    
      -  **SecurityTokenServiceApplicationPool**
    
 
  - The add-in pool that serves the IIS web site that hosts the parent SharePoint web application for your test SharePoint website. For the  **SharePoint - 80** IIS website, the pool is called **OServerPortalAppPool**.
    
 
2. In IIS manager, select the  _ServerName_ node in the tree view on the left.
    
 
3. Double-click  **Server Certificates**.
    
 
4. In  **Server Certificates** view, double-click **HighTrustSampleCert** to display the certificate details.
    
 
5. On the  **Details** tab, choose **Copy to File** to launch the **Certificate Export Wizard**, and then choose  **Next**.
    
 
6. Use the default value  **No, do not export the private key**, and then choose  **Next**.
    
 
7. Use the default values. Choose  **Next**.
    
 
8. Choose  **Browse**, browse to C:\Certs, name the certificate  **HighTrustSampleCert**, and then choose **Save**. The certificate is saved as a .cer file.
    
 
9. Choose  **Next**.
    
 
10. Choose  **Finish**.
    
 

## Configure SharePoint 2013 to use certificates and configure trust for your add-in
<a name="Configure2"> </a>

The Windows PowerShell script that you create in this section is intended to support the use of  **F5** in Visual Studio. It will *not*  properly configure a staging or production SharePoint installation. For instructions on configuring a production SharePoint to use certificates, see [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md).
 

 

 **Note**  Double-check that you have completed the steps in  [Configure services in SharePoint for server-to-server add-in use](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md#Servertoserver) (which is listed as a prerequisite for this article). If not, you must configure it now, before you proceed.
 


### To configure SharePoint


1. In a text editor or Windows PowerShell editor, start a new file and add the following lines to it to create a certificate object:
    
```
  $publicCertPath = "C:\Certs\HighTrustSampleCert.cer"
$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($publicCertPath)

```

2. Add the following line to ensure that SharePoint treats the certificate as a root authority.
    
```
  New-SPTrustedRootAuthority -Name "HighTrustSampleCert" -Certificate $certificate 

```

3. Add the following line to get the ID of the authorization realm.
    
```
  $realm = Get-SPAuthenticationRealm

```

4. Your remote web application will use an access token to get access to SharePoint data. The access token must be issued by a token issuer that SharePoint trusts. In a high-trust SharePoint Add-in, the certificate is the token issuer. Add the following lines to construct an issuer ID in the format that SharePoint requires:  **\_specific\_issuer\_GUID\_@\_realm\_GUID\_**.
    
```
  $specificIssuerId = "11111111-1111-1111-1111-111111111111"
$fullIssuerIdentifier = $specificIssuerId + '@' + $realm 

```


     **Note**  The  `$specificIssuerId` value must be a GUID because in a production environment each certificate must have a unique issuer. However, in this context, where you use the same certificate to debug all your high-trust add-ins, you can hard code the value. If for any reason, you use a different GUID from the one used here, * **be sure that any letters in the GUID are lower case***  . The SharePoint infrastructure currently requires lower case for certificate issuer GUIDs.
5. Add the following lines to register the certificate as a trusted token issuer. The  `-Name` parameter must be unique so in a production configuration, it is common to use a GUID as part (or all) of the name, but in this context, you can use a friendly name. The `-IsTrustBroker` switch is needed to ensure that you can use the same certificate for all the high-trust add-ins you develop. The `iisreset` command is required to make your token issuer registered immediately. Without it, you might have to wait as long as 24 hours for the new issuer to be registered.
    
```
  New-SPTrustedSecurityTokenIssuer -Name "High Trust Sample Cert" -Certificate $certificate -RegisteredIssuerName $fullIssuerIdentifier -IsTrustBroker
iisreset 

```

6. SharePoint 2013 does not normally accept self-signed certificates. So when you are using a self-signed certificate for debugging, add the following lines to turn off SharePoint's normal requirement that HTTPS be used when remote web applications call into SharePoint. If you don't, then you'll get a  **403 (forbidden)** message when the remote web application calls SharePoint using a self-signed certificate. You will reverse this step in a later procedure. Turning off the HTTPS requirement means that requests from the remote web application to SharePoint are not encrypted, but the certificate is still used as a trusted issuer of access tokens which is its main purpose in high-trust SharePoint Add-ins.
    
```
  $serviceConfig = Get-SPSecurityTokenServiceConfig
$serviceConfig.AllowOAuthOverHttp = $true
$serviceConfig.Update()

```

7. Save the file with the name HighTrustConfig-ForDebugOnly.ps1.
    
 
8. Open the  **SharePoint Management Shell** as an administrator and run the file with the following line:
    
```
  ./HighTrustConfig-ForDebugOnly.ps1
```


## Create a high-trust SharePoint Add-in
<a name="Createapp2"> </a>

In this section, you learn how to create a high-trust SharePoint Add-in using Visual Studio.
 

 

 **Note**  As stated in the  [Prerequisites for creating high-trust add-ins](#Prereq) section, this article assumes you know how to create a provider-hosted SharePoint Add-in. For more information, see [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md).
 


### To create a high-trust SharePoint Add-in


1. In Visual Studio, choose  **File**,  **New**,  **Project**.
    
 
2. In the  **New Project** wizard, expand the **Visual C#** or **Visual Basic** node, and then expand the **Office/SharePoint** node.
    
 
3. Choose  **Add-ins**, and then choose to create an  **Add-in for SharePoint** project.
    
 
4. Name the project HighTrustSampleApp.
    
 
5. Save the project in a location you choose, and then choose  **OK**.
    
 
6. Specify the full URL of the SharePoint developer site. For example, http://TestServer/sites/devsite/
    
 
7. Select the  **Provider-hosted** option, and then choose the **Next** button.
    
 
8. If you are prompted to specify the type of web project, select  **ASP.NET Web Forms Application** for the continuing example in this topic, and then choose the **Next** button.
    
 
9. The  **Configure authentication settings** page of the wizard opens. The values that you add to this form will be added to the web.config file automatically. Under **How do you want your add-in to authenticate?**, choose  **Use a certificate**.
    
 
10. Click the  **Browse** button next to the **Certificate location** box and navigate to the location of the self-signed certificate (.pfx file) that you created (C:\Certs). The value of this field should be the full pathC:\Certs\HighTrustSampleCert.pfx. 
    
 
11. Type the password for this certificate in the  **Password** box. In this case, it is "password".
    
 
12. Type the issuer ID ( `11111111-1111-1111-1111-111111111111`) in the  **Issuer ID** box.
    
 
13. Choose  **Finish**. Much of the configuration is done when the solution opens. Two projects are created in the Visual Studio solution, one for the SharePoint Add-in and the other for the ASP.NET web application.
    
 

### To run and debug the add-in


1. Office Developer Tools for Visual Studio automatically generates a default.aspx and default.aspx.cs file when the ASP.NET project is created. The generated code fetches the title of the SharePoint host web and prints it on the default page of the remote web application. The exact markup and code in these files varies depending on the version of the tools. For this topic, you use the generated default.aspx and default.aspx.cs files without modification.
    
 
2. To test the SharePoint Add-in and its remote web application, press  **F5** in Visual Studio. The web application will be deployed to IIS Express at *localhost*  . The SharePoint Add-in will be installed to the target SharePoint website. You'll be prompted by SharePoint to grant the permissions that the SharePoint Add-in requests. Some versions of Office Developer Tools for Visual Studio will launch the add-in immediately, others will open the **Site Contents** page of your target SharePoint website and you'll see the new add-in listed there.
    
    Launch the add-in, if it is not launched automatically. The remote web application opens to the page that is specified as  **Start Page** in the AppManifest.xml file, which is Default.aspx. Your add-in should look similar to Figure 4.
    

    **Figure 4. Sample add-in calling SharePoint Server and retrieving the title of the SharePoint host web.**

 

     ![Sample app retrieving web title](../../images/SP15HighTrustLaunchNew.gif)
 

 

 

## Complete debugging with a domain issued or commercial certificate
<a name="NewCertificate"> </a>

The Windows PowerShell script you created earlier turned off SharePoint's usual requirement that remote web applications use the HTTPS protocol to access SharePoint. Working with HTTPS turned off might cause you as a developer to miss certain issues when building an add-in that would occur during a production deployment where HTTPS is required. Accordingly, you should not consider the developing and debugging phases completed until you have replaced the test certificate with a domain-issued or commercial certificate and then retested the add-in with the HTTPS requirement turned on.
 

 
When you have obtained the new certificate, you need to add a password to it, if it doesn't already have one. In a production environment, you would use a strong password, but for debugging a SharePoint Add-in, you can use anything. You will need the certificate in two formats, pfx and cer. If it is not in pfx format when you obtain it, you may need to convert it to pfx using a utility. When you have a pfx file, you can import it into IIS and export the cer file as described in the following procedure.
 

 

### To import the new certificate


1. Put the .pfx file in C:\Certs on the SharePoint server. for purposes of this article, we assume that the file is named  _MyCert_.pfx. You should replace "MyCert" in all of these instructions with the actual name of your certificate.
    
 
2. In IIS Manager, select the  _ServerName_ node in the tree view on the left.
    
 
3. Double-click the  **Server Certificates** icon.
    
 
4. Select  **Import** in the **Actions** pane on the right.
    
 
5. On the  **Import Certificate** dialog, use the browse button to browse to C:\Certs\ _MyCert_.pfx, and then enter the password of the certificate.
    
 
6. Be sure that  **Allow this certificate to be exported** is enabled and click **OK**.
    
 
7. In the  **Server Certificates** list, right-click the certificate, and then select **Export**, as shown in Figure 3 above.
    
 
8. Export the file to C:\Certs and specify its password.
    
 
9. If your test SharePoint installation is not on the same computer where Visual Studio is running, move the  _MyCert_.pfx file to the C:\Certs folder on the Visual Studio computer. 
    
 
10. In  **Server Certificates** view, double-click _MyCert_ to display the certificate details.
    
 
11. On the  **Details** tab, choose **Copy to File** to launch the **Certificate Export Wizard**, and then choose  **Next**.
    
 
12. Use the default value  **No, do not export the private key**, and then choose  **Next**.
    
 
13. Use the default values. Choose  **Next**.
    
 
14. Choose  **Browse**, browse to C:\Certs, name the certificate  _MyCert_, and then choose  **Save**. The certificate is saved as a .cer file.
    
 
15. Choose  **Next**.
    
 
16. Choose  **Finish**.
    
 

### To configure SharePoint 2013 to use the new certificate


1. Open the HighTrustConfig-ForDebugOnly.ps1file for editing and make the following changes:
    
      1. Replace  `HighTrustSampleCert` in both places where it appears with _MyCert_.
    
 
  2. Replace the specific issuer ID,  `11111111-1111-1111-1111-111111111111`, with  `22222222-2222-2222-2222-222222222222`.
    
 
  3. Replace "High Trust Sample Cert" with "My Cert" or some other appropriate friendly name.
    
 
  4. In the line  `$serviceConfig.AllowOAuthOverHttp = $true`, replace the  `true` with `false`. This will turn back on the requirement that HTTPS be used.
    
 
2. Save the file.
    
 
3. Open the  **SharePoint Management Shell** as an administrator and run the file with the following line:
    
```
  ./HighTrustConfig-ForDebugOnly.ps1
```


### To reconfigure the remote web application


1. In Visual Studio, open the web.config file of the web application project and make the following changes:
    
      1. In the  `ClientSigningCertificatePath` key, replace `C:\Certs\HighTrustSampleCert.pfx` with `C:\Certs\` _MyCert_ `.pfx`.
    
 
  2. Replace the  `ClientSigningCertificatePassword` key value with the actual password of the certificate.
    
 
  3. Replace the  `IssuerId` key value with `22222222-2222-2222-2222-222222222222`.
    
 
2. Press  **F5** to debug the add-in.
    
 
When you are done developing your high-trust add-in, check  [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md) for instructions on how to package and publish this kind of SharePoint Add-in.
 

 

## What do the TokenHelper and SharePointContext files do?
<a name="TokenHelper"> </a>

Office Developer Tools for Visual Studio includes a TokenHelper.cs (or .vb) file in the remote web application. Some versions of the tools also include a SharePointContext.cs (or .vb) file. The code in these files does the following:
 

 

- Configure .NET to trust certificates when making network calls. 
    
 
- Retrieve a server-to-server access token that is signed by the remote web application's private certificate on behalf of the specified  **WindowsIdentity** object and that the SharePoint 2013 uses to establish trust.
    
 
- Get the SharePoint security token service (STS) certificate.
    
 
- In add-ins that use the low-trust rather than the high-trust authorization system, these files have additional tasks, such as handling OAuth tokens for the scenario described in  [Context Token OAuth flow for SharePoint Add-ins](context-token-oauth-flow-for-sharepoint-add-ins.md). That scenario is outside the scope of this article. 
    
 
For more details about TokenHelper and SharePointContext, see the comments in the files.
 

 
In a high-trust add-in, there is no context token. The context token is specific to configurations that use low-trust authorizaton. However, an access token is still required. If you're using a high-trust configuration, your web application has to authenticate the user just as SharePoint does (that is, the add-in is responsible for creating the access token including the IDs of the user and the identity provider). 
 

 
When you are debugging in Visual Studio with  **F5**, Microsoft Office Developer Tools for Visual Studio uses Windows Authentication, and the two generated code files use the Windows identity of the person running the add-in to create the access token. When your add-in is published, you need to configure the remote web application in IIS Manager to use Windows Authentication if you want to use the two generated files without modification. If your add-in will not use Windows Authentication on the production environment, you will need to customize the generated code files, TokenHelper and/or SharePointContext, to use a different authentication system. You would also customize these files if your remote web application accesses SharePoint in an identity other than the user who is running the SharePoint Add-in. Finally, if the remote web application is PHP, node.js, Java, or some other non-ASP.NET platform, then your code needs to obtain the user's ID from whatever authentication system is being used, and then add that ID into the access token it constructs. For more information, see  [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md),  [Create and use access tokens in provider-hosted high-trust SharePoint Add-ins](create-and-use-access-tokens-in-provider-hosted-high-trust-sharepoint-add-ins.md) and [Using SharePoint Add-ins with SAML and FBA Sites in SharePoint 2013](http://blogs.technet.com/b/speschka/archive/2012/12/07/using-sharepoint-apps-with-saml-and-fba-sites-in-sharepoint-2013.aspx).
 

 

## Additional resources
<a name="bk_addresources"> </a>


-  [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md)
    
 
-  [Troubleshooting Tips for High Trust Add-ins on SharePoint 2013](http://blogs.technet.com/b/speschka/archive/2012/11/01/more-troubleshooting-tips-for-high-trust-apps-on-sharepoint-2013.aspx)
    
 
-  [Register SharePoint Add-ins 2013](register-sharepoint-add-ins-2013.md)
    
 
-  [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
    
 
-  [Announcing the new SharePointContext helper in SharePoint Add-ins 2013](http://blogs.msdn.com/b/officeapps/archive/2013/11/07/announcing-the-new-sharepointcontext-helper-in-apps-for-sharepoint-2013.aspx)
    
 
-  [Add-in permissions in SharePoint 2013](add-in-permissions-in-sharepoint-2013.md)
    
 
-  [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
    
 

