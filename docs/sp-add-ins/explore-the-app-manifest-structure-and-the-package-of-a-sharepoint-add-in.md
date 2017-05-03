# Explore the app manifest structure and the package of a SharePoint Add-in
Learn about the add-in package structure and the manifest file for a SharePoint Add-in.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Add-in for SharePoint package structure
<a name="Package"> </a>

A SharePoint Add-in package is a file that has an ".app" extension and that complies with the  [Open Packaging Conventions (OPC)](http://msdn.microsoft.com/en-us/magazine/cc163372.aspx). The package contains the following items:
 

 

-  **Add-in manifest:** This is a required file that is named appmanifest.xml. It tells SharePoint about some important properties of the add-in, such as its title and the permissions it needs to run. For more information about the contents of this file, see [Add-in for SharePoint manifest file](#AppManifest).
    
 
-  **SharePoint Solution Packages:** Optionally, the add-in may include a SharePoint solution package (.wsp file) that contains the components of the add-in web. These components may include pages, list instances, views, documents, **Web**-scoped Features, and other SharePoint components. (For more information about what SharePoint components can be included in a SharePoint Add-in, see  [Types of SharePoint components that can be in a SharePoint Add-in](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint-2013.md#TypesOfSPComponentsInApps).) The .wsp file may also contain Office Add-ins. The components in the .wsp file are deployed to the add-in web. For an example of an add-in package that includes a SharePoint solution package, see  [Create a provider-hosted add-in that includes a custom SharePoint list and content type](create-a-provider-hosted-add-in-that-includes-a-custom-sharepoint-list-and-content-type.md).
    
 
-  **Host web Features with Custom Actions or add-in parts:** In addition to the SharePoint components that are deployed to the add-in web, a SharePoint Add-in can also deploy one or more custom actions (shortcut menu items or ribbon extensions) to the host web. This is accomplished by including in the add-in package a Feature that is not inside the package's .wsp file and that deploys the components that will go to the host web. This "loose" Feature is called a host web Feature. Add-in parts are deployed to the host web in the same way. The host web Feature consists of a standard SharePoint feature.xml file and one or more associated elements.xml files. An elements.xml file for a custom action, for example, contains the **CustomAction** markup for the custom action. It can also include markup for add-in parts. Only these two kinds of components can be in the host web Feature. These host web Features are not itemized in the add-in manifest. However, they are "parts" in the OPC sense, and there is an explicit OPC relationship between the add-in manifest and each of these files. For an example of an add-in package that includes a host web Feature, see [Create custom actions to deploy with SharePoint Add-ins](create-custom-actions-to-deploy-with-sharepoint-add-ins.md).
    
     **Note**  Tenant administrators have the option to batch-install a SharePoint Add-in to multiple websites. An add-in that has been installed in this way is said to have  **Tenant** scope. If the add-in has not been batch-installed, and is instead installed to each website separately, it has **Web** scope. If the host web Feature includes ribbon extensions or add-in parts, they are not deployed to the host webs if the add-in is batch-installed, so only shortcut menu items are deployed with Tenant-scoped add-ins. Add-in scope should not be confused with Feature scope. Feature scope determines where the elements in a Feature are deployed. The possibilities are **Farm**,  **WebApplication**,  **Site** (that is, site collection), and **Web**. Only the  **Web** option is permitted for Features in SharePoint Add-ins (both host web Features and Features inside a .wsp in an add-in package). Add-in scope refers to the scope at which an add-in is installed. The possibilities are **Web**, in which case the add-in has been installed to one or more websites site-by-site, and  **Tenant**, in which case the add-in has been batch installed to all or some subset of the websites in a customer's tenancy. For more information about  **Tenant** and **Web** scope, see [Tenancies and deployment scopes for SharePoint Add-ins](tenancies-and-deployment-scopes-for-sharepoint-add-ins.md).
-  **Localization resource files (.resx):** These are for localizing aspects of the add-in manifest that include the add-in title and aspects of host web Features in the add-in package. (Individual parts of the add-in package that are inside their own package, such as .wsp files, Azure Web Sites packages, and add-in manifests, each have their own localization processes that are applied exactly as they would be if the items in question were not part of a SharePoint Add-in.) For an example of an add-in package that includes .resx files for a host web Feature, see [Localize SharePoint Add-ins](localize-sharepoint-add-ins.md).
    
 
-  **Office Add-ins Manifests:** Optionally, there may be one or more Office Add-ins manifests that each package an Office Add-in. This part can be included in the add-in package only if the add-in is going to be uploaded to a SharePoint corporate add-in catalog, not the public marketplace. See [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md) for more information.
    
 

## Add-in for SharePoint manifest file
<a name="AppManifest"> </a>

Every SharePoint Add-in includes an appmanifest.xml file. The appmanifest.xml tells SharePoint what it must know about the add-in and defines the add-in's most important properties. The following are some of the items that are specified in the manifest:
 

 

- The internal name, product ID, and version of the add-in.
    
 
- The URL of the start page, which is the page that opens when the add-in is started. This can be a page in the add-in web, a cloud-based page, or a page on a web server of the ISV.
    
     **Note**  In certain circumstances, there may be restrictions on what type of file can be specified in the  **StartPage** element. For details, see [StartPage element (PropertiesDefinition complexType) (SharePoint Add-in Manifest)](http://msdn.microsoft.com/library/3092674c-a6c3-9021-3d7e-e716562a4a4f%28Office.15%29.aspx). When you are combining more than one query parameter in the  **StartPage** value, you must use the encoded ampersand " `&amp;amp;`" rather than " `&amp;`" or a semi-colon to append them together.
- Other properties of the add-in. These include title and the locales supported by the add-in (both are required), the URLs of services that handle the post-install, post-upgrade, and pre-uninstall events, and the web template to use when the add-in web is created.
    
 
- Requests for permissions the add-in needs to SharePoint resources outside the add-in web.
    
 
- An identification, for authentication and authorization purposes, of the add-in principal. It is this principal that is granted permissions. This is not required for a SharePoint-hosted add-in.
    
 
- A list of the prerequisites, if any, that must be available to the add-in in order for the add-in to be installed. For example, certain Features may need to be installed and activated, and certain services may need to be licensed and installed.
    
 

 **Note**  The add-in manifest file is the only required item in the add-in package, but not all of the items in the previous list are required parts of the file. 
 

For detailed information about the add-in manifest markup, see the node  [Schema reference for manifests of SharePoint Add-ins](http://msdn.microsoft.com/library/1f8c5d44-3b60-0bfe-9069-1df821220691%28Office.15%29.aspx). This topic is not a substitute for the information in that node, including information about required elements and attributes. Also, note that SharePoint add-in manifests have a different schema from Office Add-in manifests. You can find information about the latter at  [Schema reference for Office Add-ins manifests (v1.1)](http://msdn.microsoft.com/library/7e0cadc3-f613-8eb9-57ef-9032cbb97f92%28Office.15%29.aspx).
 

 
The following is an example of an appmanifest.xml file. Note that in this example, the start page for the add-in is an ASP.NET page that is on a remote server, not a page on the SharePoint site. The URL for the page includes a query string that passes to the remote web application the URL of the host web. The "{HostUrl}" part of the string is a token that is resolved when the add-in is launched. The add-in is requesting Write permission to all the lists in the host web. The add-in principal that must be granted this permission is the remote web application.
 

 
You must use either the  **SupportedLocales** or the **SupportedLanguages** element in your add-in manifest. **SupportedLanguages** is being deprecated in favor of **SupportedLocales**. The  **SupportedLanguages** element will continue to work even after release, but you should refrain from using it. For more information about these elements see [SupportedLocales element (PropertiesDefinition complexType) (SharePoint Add-in Manifest)](http://msdn.microsoft.com/library/49bde91a-8d7a-be17-4c91-82c9c19f0f61%28Office.15%29.aspx) and [SupportedLanguages element (PropertiesDefinition complexType) (SharePoint Add-in Manifest)](http://msdn.microsoft.com/library/7a8da886-5731-9abd-2911-5cd268bba4cf%28Office.15%29.aspx).
 

 

 **Note**  The values of the  **Scope** attribute of the **AppPermissionRequest** element are structured like URIs, but they are actually literal strings. No part of the example **Scope** value in the following example is a placeholder. For more information about permissions, see [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint-2013.md).
 




```XML
<?xml version="1.0" encoding="utf-8" ?>
<App xmlns="http://schemas.microsoft.com/sharepoint/2012/app/manifest"
     ProductID="{4a07f3bd-803d-45f2-a710-b9e944c3396e}"
     Version="1.0.0.0"
     SharePointMinVersion="15.0.0.0"
     Name="MySampleApp"
>
  <Properties>
    <Title>My Sample App</Title>
    <StartPage>http://MyRemoteWebApplicationServer/default.aspx/?SPHostUrl={HostUrl}</StartPage>
    <SupportedLocales>
      <SupportedLocale CultureName="en-US" />
    </SupportedLocales>        
  </Properties>

  <AppPermissionRequests>
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web/list" Right="Write"/>
  </AppPermissionRequests>

  <AppPrincipal>
    <RemoteWebApplication ClientId="1ee82b34-7c1b-471b-b27e-ff272accd564" />
  </AppPrincipal>
</App>

```


### URL tokens in the add-in manifest

SharePoint provides several tokens that can be used in the  **StartPage** element and other places in add-ins and components of add-ins to represent information that is not known until the add-in is run. The SharePoint infrastructure resolves these tokens. Some are used at the beginning of the URL and others can be used within a URL such as the value of a query parameter. These tokens and several others can also be used in a variety of SharePoint development contexts. For detailed information about all the tokens and where they can be used, see [URL strings and tokens in SharePoint Add-ins](url-strings-and-tokens-in-sharepoint-add-ins.md). For general information about other tokens and URLs in SharePoint, see  [URLs and tokens in SharePoint](http://msdn.microsoft.com/library/161418d7-8123-4c4e-91a1-97e43c17f0e6%28Office.15%29.aspx).
 

 

 **Note**  These tokens are not used in the  **Scope** attribute of an **AppPermissionRequest** element.
 


## Additional resources
<a name="SP15Exploreappmanifest_bk_addlresources"> </a>


-  [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
    
 
-  [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscape.md)
    
 
-  [Schema reference for manifests of SharePoint Add-ins](http://msdn.microsoft.com/library/1f8c5d44-3b60-0bfe-9069-1df821220691%28Office.15%29.aspx)
    
 
-  [Open Packaging Conventions (OPC)](http://msdn.microsoft.com/en-us/magazine/cc163372.aspx)
    
 
-  [Data-Tier Application Connection (DAC)](http://msdn.microsoft.com/en-us/library/ee210546)
    
 
-  [Web Deploy 2.0](http://www.iis.net/download/WebDeploy)
    
 

