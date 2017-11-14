---
title: Add a Security Trim snippet in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 4beaab08-760b-408a-b768-906312779379
---


# Add a Security Trim snippet in SharePoint

You can use a Security Trim snippet to display content only to specific users, based on a specific permission that those users must have and whether the users are authenticated or anonymous.

## Introduction to the Security Trim snippet
<a name="Introduction"> </a>

You can use a Security Trim snippet to display content only to specific users, based on a specific permission that those users must have, and whether those users are authenticated or anonymous. You can add a Security Trim panel to a master page or page layout. A Security Trim panel is a container that can include other components or snippets, such as Web Parts, in addition to static content.
  
    
    
For example, you can use a Security Trim panel to display the following content to specific users:
  
    
    

- A Content by Search Web Part that displays which documents an authenticated user is currently working on.
    
  
- A list view of recently modified documents so that authenticated users can see what's new on the site.
    
  
- A Content by Search Web Part that displays to non-authenticated visitors a list of recommended links based on the current article. Such a list of recommendations might be noise to authenticated content authors working in the site, but it's important for non-authenticated visitors.
    
  
- A sign-in link separate from the ribbon, for non-authenticated users or users who have yet to be authenticated.
    
    > **Note:**
      > This sign-in link is inserted automatically into a master page that is created by using Design Manager, but you can delete it if it's not needed. 
A Security Trim panel has two important property settings, one for authentication and one for permissions (or authorization). For example, you can use a Security Trim panel to display the following content to specific users:
  
    
    

- **AuthenticationRestrictions** With this property, you can restrict the panel to either authenticated or anonymous users, or choose all users (all users is the default setting).
    
  
- **Permissions** With this property, you can select a specific permission that users must have to view the content in the panel.
    
    > **Note:**
      > You are selecting an individual permission, not a permission level. (A permission level is a set of granted permissions.) 
Of course, if you restrict the authentication to only anonymous users, it's typically not necessary to specify a specific permission because anonymous users have usually not been given any SharePoint permissions. It makes sense to use permissions only with all users or with all authenticated users.
  
    
    
The Security Trim panel has three options on the ribbon, listed in the left column of Table 1. Table 1 shows how these settings determine the specific permission that users are required to have, the lowest default permission level that includes that specific permission, and the group that is linked to that permission level by default.)
  
    
    

> **Note:**
> These are the default settings, which can be changed for any given scope, such as a site collection, site, list, or item. 
  
    
    

For example, if you set a Security Trim panel to **Show to authors**, by default content inside that panel is visible to users in the Members group and the Owners group.
  
    
    

**Table 1. Mapping of panel options to default permission levels and groups**


|**Security Trim panel option**|**Permissions property**|**Permission**|**Permission level**|**Group**|
|:-----|:-----|:-----|:-----|:-----|
|Show to authors  <br/> |**AddAndCustomizePages** <br/> |Add and Customize Pages  <br/> |Contribute (or higher)  <br/> |Members  <br/> |
|Show to Authenticated Users  <br/> |**ViewPages** <br/> |View Pages  <br/> |Read (or higher)  <br/> |Visitors  <br/> |
|Show to Administrators  <br/> |**FullMask** <br/> |Select All  <br/> |Full Control  <br/> |Owners  <br/> |
   

### Inserting a Security Trim panel
<a name="InsertSnippet"> </a>

Like all snippets, you add the Security Trim snippet from the Snippet Gallery. To navigate to the Snippet Gallery, you must first select a master page or page layout to edit.
  
    
    

### To insert a Security Trim panel


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose the Settings gear, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Master Pages** or **Edit Page Layouts**, depending on what type of file you're editing.
    
  
4. Select the name of the master page or page layout that you want to add the snippet to.
    
  
5. To open the Snippet Gallery, choose **Snippets** in the upper-right corner of the server-side preview.
    
  
6. On the ribbon, on the **Design** tab, choose **Security Trim**.
    
    Optionally, in the drop-down list on the **Security Trim** button, you can select the users to whom the panel content will be visible, or you can see more options by configuring the important property values for the panel.
    
  
7. On the right side of the Snippet Gallery, under **About this Component**, click or select section headers to expand or collapse groups of properties, and then configure any custom settings that you want.
    
  
8. After you configure any properties, choose **Update**. This updates the HTML snippet on the left side of the page, so that the markup reflects your custom settings. You can always choose **Reset** to return all properties to their default settings.
    
  
9. On the left side of the Snippet Gallery, under **HTML Snippet**, choose **Copy to Clipboard**.
    
  
10. In your HTML editor, open the mapped network drive on your computer, and then open the HTML file for the master page or page layout that you're adding the snippet to.
    
  
11. In the HTML file, paste the snippet where you want the markup to appear.
    
    If you are adding the snippet to a page layout, make sure to paste the snippet inside **PlaceHolderMain**.
    
  
12. Replace the **<div>** where `class="DefaultContentBlock"` with your own specific content.
    
  
13. Save the page, and then refresh the server-side preview in Design Manager to make sure the Security Trim panel appears as expected.
    
  

## Understanding the snippet markup
<a name="UnderstandMarkup"> </a>

The most important parts of a Security Trim snippet are the **AuthenticationRestrictions** property and the **Permissions** property, and the **<div>** in bold below. **AuthenticationRestrictions** appears in the markup only when changed from **AllUsers**, which is the default. If you choose **Reset** for the snippet in the Snippet Gallery, **AuthenticationRestrictions** is removed from the markup, which means the snippet uses the default value, **AllUsers**.
  
    
    
The **<div>** where `class="DefaultContentBlock"` is what you replace with your own content, which can include other snippets and controls.
  
    
    



```HTML

<div data-name="SecurityTrimmedAuthors">
    <!--CS: Start Security Trim Snippet-->
    <!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<SharePoint:SPSecurityTrimmedControl runat="server" AuthenticationRestrictions="AuthenticatedUsersOnly" Permissions="AddAndCustomizePages" PermissionContext="RootSite">-->
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)--><span><!--PE: End of READ-ONLY PREVIEW-->
        <div class="DefaultContentBlock" style="border:medium black solid; background:yellow; color:black; margin:20px; padding:10px;">
        You should replace this div with content that renders based on your Security Trim Properties.
        </div>
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)--></span><!--PE: End of READ-ONLY PREVIEW-->
    <!--ME:</SharePoint:SPSecurityTrimmedControl>-->
    <!--CE: End Security Trim Snippet-->
</div>
```


## Additional resources
<a name="AdditionalResources"> </a>


-  [Introduction: Control user access with permissions](http://office.microsoft.com/en-us/sharepoint-foundation-help/introduction-control-user-access-with-permissions-HA102771919.aspx?CTT=1)
    
  
-  [Understanding permission levels](http://office.microsoft.com/en-us/products/default-permission-levels-HA102772313.aspx?CTT=5&amp;origin=HA102771919)
    
  
-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  
-  [Build sites for SharePoint](build-sites-for-sharepoint.md)
    
  
-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  

