
# Update remote components in SharePoint Add-ins
Update the remote web applications and databases in a SharePoint Add-in.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint#bk_newname).
 


## Prerequisites for updating the remote components of a SharePoint Add-in
<a name="Prerequistes"> </a>

Be familiar with  [Update SharePoint Add-ins](update-sharepoint-add-ins) and the prerequisites and core concepts listed in it.
 

 

## Update remote components
<a name="UpdateRemote"> </a>

For the most part, only very general advice can be provided for updating the remote components because of the wide differences in platforms and tenancy systems. The following two sections provide some guidance.
 

 

### Update remote components in a provider-hosted add-in
<a name="UpdateProviderHosted"> </a>

For a provider-hosted SharePoint Add-in, you update the remote components using the best update practices of the platform on which the components are hosted. Just as the remote components of a provider-hosted add-in are installed separately from the installation of the SharePoint Add-in itself, they are also updated separately. Some points to consider:
 

 

- The updated remote components should continue to work with all earlier versions of the SharePoint Add-in.
    
 
- If you implemented a tenancy isolation system for your remote components, keep in mind that different tenants might be using multiple versions of your add-in, and a specific tenant might even have different versions installed on various SharePoint websites.
    
 
For a provider-hosted SharePoint Add-in that uses Microsoft Azure SQL Database or SQL Server, there are multiple methods for updating the database. To get started, see  [Upgrade a Data-tier Application](http://msdn.microsoft.com/library/c117df94-f02b-403f-9383-ec5b3ac3763c.aspx).
 

 

## Next steps
<a name="Next"> </a>

Return to  [Major steps in updating an add-in](update-sharepoint-add-ins#MajorAppUpgradeSteps), or go directly to one of the following articles to learn how to update the next major component of your SharePoint Add-in.
 

 

-  [Update add-in web components in SharePoint](update-add-in-web-components-in-sharepoint-2013)
    
 
-  [Update host web components in SharePoint](update-host-web-components-in-sharepoint-2013)
    
 
-  [Create a handler for the update event in SharePoint Add-ins](create-a-handler-for-the-update-event-in-sharepoint-add-ins)
    
 

## Additional resources
<a name="bk_addresources"> </a>


-  [Update SharePoint Add-ins](update-sharepoint-add-ins)
    
 
-  [SharePoint Add-ins update process](sharepoint-add-ins-update-process)
    
 

