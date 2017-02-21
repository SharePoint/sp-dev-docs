
# Tenancies and deployment scopes for SharePoint Add-ins
 Learn about the concept of tenancies and the differences between deploying SharePoint Add-ins at tenant scope and web scope.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Tenancies and add-in scope
<a name="AppScope"> </a>

A SharePoint 2013 tenancy is a set of site collections in either a SharePoint farm or in SharePoint Online. In SharePoint Online, the site collections belong to a single customer account. In a SharePoint farm, the site collections can be all the site collections in a SharePoint web application or a subset of them, or it can be a set of site collections from across multiple web applications in the farm. A tenancy can have a SharePoint Add-in add-in catalog just as a SharePoint web application can.
 

 
A SharePoint Add-in has an add-in scope. The two possible add-in scopes are web scope ortenant scope. The difference is not an intrinsic property of the add-in, and you, the developer, do not decide what the scope of your add-in is. The decision is made by tenant administrators as a side effect of how the add-in is installed. After an add-in is uploaded to the add-in catalog of a tenancy, it is immediately available to be installed on websites within the tenancy on a website-by-website basis. Add-ins that are installed this way have web scope. Tenant administrators have another option, however. They can choose to batch install the add-in to a subset of websites within the tenancy. Add-ins that are installed in this way have tenant scope. The tenant admin can specify which websites the add-in is installed to by means of a list of managed paths, a list of site templates, or a list of site collections. An add-in that has been batch-installed can only be uninstalled by a tenant administrator. When the tenant admin uninstalls the add-in, it is uninstalled from every website in the tenancy. Users can't uninstall a batch-installed add-in on a website-by-website basis. The same principle applies to updating a batch-installed add-in: only a tenant administrator can do it, and it is batch-updated on every website in the tenancy where it is installed.
 

 
If an add-in that includes an add-in web is batch-installed, only one add-in web is created and it is shared by all the host websites on which the add-in is installed. The add-in web is located in the site collection of the organization's add-in catalog.
 

 
When new site collections are created in the tenancy, add-ins that were previously batch-installed are automatically installed on the new site collection.
 

 

 **Note**  Add-in scope should not be confused with Feature scope. Feature scope determines where the elements in a Feature are deployed. The possibilities include  **Farm**,  **WebApplication**,  **Site** (that is, site collection), and **Web**. Only  **Web** is permitted for Features in SharePoint Add-ins (both host web Features and Features inside a .wsp in an add-in package).Add-in scope should also not be confused with add-in permission levels. SharePoint Add-ins can request permissions to all or selected parts of SharePoint content at the levels of list, web, site collection, and tenancy. Installing an add-in with tenant scope does not give it permissions that it would not otherwise have, nor does it cancel key provisions of the SharePoint security model. For more information about add-in permissions, see  [Add-in permissions in SharePoint 2013](add-in-permissions-in-sharepoint-2013.md).
 


## Limitations of tenant-scoped add-ins
<a name="Tenant"> </a>

The following kinds of add-ins cannot be batch-installed:
 

 

- Add-ins that contain a custom action for the ribbon. (Custom actions that are deployed as menu items are allowed.)
    
 
- Add-ins that contain an add-in part. 
    
 
In addition, note again that installation with tenant scope is not possible in the Office 365 Small Business Premium version of SharePoint Online.
 

 

## How to install, uninstall, and update an add-in on multiple websites in a tenancy
<a name="Web"> </a>

Regardless of whether an add-in is installed from the Office Store or from an add-in catalog, tenant admins can install it to multiple websites in a tenancy, uninstall it, and update it by using the following procedures.
 

 

### To install a SharePoint Add-in to multiple websites


1. Navigate to the  **Site Contents** page of the corporate catalog website.
    
 
2. Select  **Add an add-in** and install the add-in just as you would on any other SharePoint website.
    
 
3. After the add-in is installed, hover over the link to the add-in in the  **Site Contents** page. A " **...**" link appears.
    
 
4. Select the link, and a callout appears.
    
 
5. Select  **Deployment** on the menu.
    
 
6. Use the deployment UI that opens to specify the site collections to which you want the add-in installed. You can filter by managed paths, site templates, or URLs. The filters have a logical "OR" relationship: the add-in is installed to the union of all the site collections that pass any one or more of the filters.
    
 
7. Select  **OK**.
    
 

### To uninstall a batch-installed SharePoint Add-in


1. Navigate to the  **Site Contents** page of the corporate catalog website.
    
 
2. Hover over the link to the add-in in the  **Site Contents** page. A " **...**" link appears.
    
 
3. Select the link, and a callout appears.
    
 
4. Select  **Remove** on the callout.
    
 

### To update a batch-installed SharePoint Add-in


1. Navigate to the  **Site Contents** page of the corporate catalog website. If there is an update available for an add-in, a message appears beside the add-in. There will be a link to update the add-in.
    
 
2. Click the link to update the add-in.
    
 
3. When you are prompted to approve the permission requests of the add-in, choose  **Trust It**.
    
 

## Additional resources
<a name="SP15tenancies_addlresources"> </a>


-  [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md)
    
 
-  [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscape.md)
    
 
-  [Deploying and installing SharePoint Add-ins: methods and options](deploying-and-installing-sharepoint-add-ins-methods-and-options.md)
    
 
-  [SharePoint Add-ins update process](sharepoint-add-ins-update-process.md)
    
 

