---
title: SharePoint Add-ins compared with SharePoint solutions
ms.prod: SHAREPOINT
ms.assetid: 0e9efadb-aaf2-4c0d-afd5-d6cf25c4e7a8
---


# SharePoint Add-ins compared with SharePoint solutions
Learn about when to develop your SharePoint 2013 extension as a SharePoint Add-in and when to develop it as a SharePoint farm solution or a no-code sandboxed solution.
 * **Applies to: *** 
  
    
    

This article compares the use cases of SharePoint Add-ins, farm solutions, and no-code sandboxed solutions (NCSSs).
- New SharePoint Add-ins are self-contained extensions that may include cloud-based logic and data, SharePoint components, and client-side scripts, but not custom managed code that runs on SharePoint servers. They are installed from either the Office Store or an organization add-in catalog, and can be installed on either on-premises farms or Microsoft SharePoint Online. For an overview of SharePoint Add-ins, see  [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx).
    
  
- SharePoint farm solutions are packages of SharePoint components that are uploaded to a farm-wide gallery from where they can be installed. They cannot be distributed through the Office Store, and they cannot be installed on SharePoint Online. They can include custom managed code that runs on the SharePoint farm servers. For more information about the basics of farm solutions, see  [Solutions Overview](http://msdn.microsoft.com/library/1983cab9-4b29-494a-a62a-0f8e83908744%28Office.15%29.aspx) and [Farm Solutions in SharePoint 2010](http://msdn.microsoft.com/library/845f7524-b9ff-412b-aa29-3afacda91100%28Office.15%29.aspx).
    
  
- NCSSs are also packages of SharePoint components; but they are uploaded to a site collection gallery from where they can be installed. They can be installed to either on-premise farms or to SharePoint Online, but they cannot be distributed through the Office Store. They can include the almost the same kinds of descriptive components as SharePoint Add-ins and, like add-ins, they can have JavaScript, but they do not contain custom managed code that runs on the SharePoint servers. Differences in the deployment systems of add-ins and NCSSs make NCSSs a better development option for a short list of scenarios. For information about sandboxed solutions, see  [Sandboxed Solutions in SharePoint 2010](https://technet.microsoft.com/en-us/library/ee721992%28v=office.14%29.aspx).
    
  

> [!IMPORTANT]
> While developing sandboxed solutions that contain only declarative markup and JavaScript -- which we call no-code sandboxed solutions (NCSS)-- is still viable, we have deprecated the use of custom managed code within the sandboxed solution. We have introduced the new SharePoint add-in model as a replacement to those scenarios that required the use of managed code. The add-in model decouples the SharePoint core product from the add-in runtime, and this enables much more flexibility and gives you the ability to run the code in the environment of your choice. We realize that our customers have made investments in coded sandboxed solutions and we will phase them out responsibly. Existing coded sandboxed solutions will continue to work in on-premise SharePoint farms for the foreseeable future. Given the dynamic nature of online services, we will determine support needs for coded sandboxed solutions in SharePoint Online based on customer demand. NCSSs continue to be supported. All future investments will go to making the new SharePoint add-in model richer and more powerful. Accordingly, we recommend that all new development should use the new add-in model whenever possible. In scenarios where you have to develop a farm solution or coded sandboxed solution, we recommend that you design it so that it can easily evolve toward a more loosely coupled development model. 
  
    
    


## Develop an add-in whenever you can
<a name="AppWhenYouCan"> </a>

The most important guidance we can give you is to develop a SharePoint Add-in instead of a farm solution or NCSS whenever you can. SharePoint Add-ins have the following advantages over classic solutions:
  
    
    

- Provide users with the easiest discovery, purchase, and installation process.
    
  
- Give administrators the safest SharePoint extensions.
    
  
- Provide you with the simplest marketing and sales system based on a Microsoft online add-in store.
    
  
- Maximize your flexibility in developing future upgrades.
    
  
- Maximize your ability to take advantage of your existing non-SharePoint programming skills.
    
  
- Integrate cloud-based resources in smoother and more flexible ways.
    
  
- Enable your extension to have permissions that are distinct from the permissions of the user who is running the add-in.
    
  
- Enable you to use cross-platform standards, including HTML, REST, OData, JavaScript, and OAuth.
    
  
- Enable you to take advantage of the SharePoint cross-domain JavaScript library to access SharePoint data. Alternatively, you can use a Microsoft-provided secure token service that is OAuth-compatible or use digital certificates to get authorization to SharePoint data.
    
  

## Design add-ins or NCSSs for end users and design farm solutions for administrators
<a name="SPAppVsClassic_Overview"> </a>

SharePoint Add-ins and NCSSs use one of the SharePoint client object models or REST endpoints to access SharePoint content and components. These client APIs enable SharePoint extensions that are designed for end users. ("End users" in this context are site-collection administrators, website owners, and website members.) The server object model has additional APIs that enable programmatic extensions of SharePoint management, configuration, and security. These include extensions of Central Administration, custom Windows PowerShell commands, timer jobs, and custom backups. For more information about the kinds of administrative extensions that you can develop, see  [Windows SharePoint Services Administration](http://msdn.microsoft.com/library/cdcc1b8a-4144-446f-b471-03d4a754a8ab%28Office.15%29.aspx). These administrative extensions are deployed in SharePoint Features that have farm, web application, or site-collection scope. SharePointfarm solutions are also installed by farm administrators, although add-ins and NCSSs can be installed by tenant and site collection administrators.
  
    
    
The server object model also has APIs for create, read, update, and delete (CRUD) operations on lists, libraries, and websites, and for operations on other SharePoint components. This means that the server object model can be used for extensions that are intended for end users, but for reasons given in the previous section, farm solutions are not usually the best choice for such extensions. Thus, it is no surprise that farm solutions cannot be installed on Microsoft SharePoint Online. Because Microsoft handles all the management of SharePoint Online, there is no need for administrative extensions. For more information about the different sets of APIs in SharePoint and where they overlap, see  [Choose the right API set in SharePoint 2013](choose-the-right-api-set-in-sharepoint.md).
  
    
    
The client object models and REST endpoints do not duplicate the administrative-oriented APIs of the server object model. Moreover, because neither a SharePoint Add-in nor an NCSS can contain custom code that runs on the SharePoint servers, they cannot call these administrative APIs. In addition, all Features in SharePoint Add-ins must have website scope; and Features in NCSSs have either site collection or website scope. Thus, an administrative-oriented SharePoint extension is not really possible with a SharePoint Add-in or NCSS. So, the second principle, but not an absolute rule, is that add-ins and NCSSs are for end users, and farm solutions are for administrators.
  
    
    

## Design NCSSs for branding and template-like extensions
<a name="SPAppVsClassic_Overview"> </a>

You may encounter one of the small number of SharePoint development scenarios for which the add-in model is not well-suited, but which you cannot implement with a farm solution either, perhaps because the solution needs to be installable on SharePoint Online or needs to be installable by a site collection administrator. There are two broad, and overlapping, categories of such scenarios.
  
    
    

- **Branding:** SharePoint users often want to give their SharePoint sites, including their SharePoint Online sites, a custom appearance with their own colors, styles, layouts, and logos. This is generally easier to do with NCSSs than with SharePoint Add-ins. A SharePoint Add-in has declarative control over the appearance of only its own add-in web. For the host web, it can declaratively add only ribbon buttons and menu items (and add-in parts). Any other changes to a host web or its parent site collection, tenancy, or on-premisesSharePoint web application has to be done with code or script that uses one of the SharePoint's client object models. For example, new icons or CSS files would have to be programmatically deployed. This code could be run from the add-in itself after it is installed, or it could run in the add-in installation event handler. But it would take a considerable amount of work to create this code. In addition, the add-in would need site collection-scoped permissions to change any websites outside its own add-in web and host web, and it would need tenant-scoped permissions to change more than just its parent site collection. A branding NCSS, however, can be deployed and activated to any site collection; and it could consist of only a few purely declarative components. 
    
    > [!NOTE]
      > Note that SharePointfarm solutions are potentially more powerful than either NCSSs or SharePoint Add-ins for branding, but they are not an option on SharePoint Online. 
- **"Template-like" extensions:** Suppose that you need to create a crisis management extension for SharePoint for the collaborative analysis and solution of business crises. Your extension includes several custom list types, no-code workflows, and other SharePoint components, all combined into a custom WebTemplate. Suppose you package and deploy the extension as an NCSS. After the Feature in the solution has been activated, users can create a crisis management subweb of their SharePoint website whenever a crisis occurs. They can populate the website with data that is specific to the crisis. On the other hand, you could implement the same extension as a SharePoint Add-in using exactly the same set of SharePoint components. When the add-in is installed on the team site, the subweb (known as the "add-in web") is immediately created. Again, users populate the website with relevant data.
    
    Now, what happens when a second crisis occurs? If you implemented the extension as an NCSS, your users can merely create another subweb from your custom WebTemplate. However, if you implemented the extension as a SharePoint Add-in, your users have a problem. They cannot install a second instance of the same add-in on the parent website. Only one instance of any add-in can be installed on a host web. The best that you can do is create a subsite of the parent website to serve as a location for another instance of the add-in to be installed. When the add-in is installed, a new add-in web, which is a sub-subweb of the parent website, is created for the add-in components. This comparison shows a general, but not absolute, principle: SharePoint extensions that have a "template-like" character - that is, a reusable collection of components that must be configured for each specific use case, but which naturally have multiple instances associated with the same SharePoint website - fit better with the NCSS development model than with the add-in model. In this example, the variable element is the crisis, but it is easy to imagine template-like SharePoint extensions in which the instances vary by region, date, or any number of other characteristics.
    
  
For information about how to expand the possibilities of SharePoint Add-ins, see  [Use add-in event handlers conservatively](#AppEventHandlers) and [Add-ins that create extensions](#ExtensionFactories).
  
    
    

## Doing things the add-in way
<a name="Questions"> </a>

As noted earlier, custom code that runs on the SharePoint servers is not allowed in SharePoint Add-ins. This is  *not*  a significant limitation. It simply means that your custom business logic moves either "down" to the client device or "up" to the cloud. In either case, you can use the [SharePoint REST/OData service](http://msdn.microsoft.com/library/f60ed19e-9840-4f39-911e-4676751a2f6b%28Office.15%29.aspx) to accessSharePoint sites, lists, and other data. You can also remotely access SharePoint data through the [SharePoint JavaScript, Silverlight, or .NET Framework client object models](http://msdn.microsoft.com/library/8c086b11-2b8b-41ec-82ae-cd4fef0aeac6%28Office.15%29.aspx). Finally, on Windows Phones, you can access SharePoint through the SharePointWindows Phone object model. For more information about the various sets of APIs in SharePoint 2013, see  [Choose the right API set in SharePoint 2013](choose-the-right-api-set-in-sharepoint.md).
  
    
    
A similar point is that Features in SharePoint Add-ins cannot have site collection, web application, or farm scope. However, you don't have to give up any user interface (UI) elements or functionality. It means that the implementation of the component moves out ofSharePoint and onto a client or remote web application or remote database.
  
    
    
The following table lists the SharePoint components that cannot be deployed in a SharePoint Add-in, and describes the "add-in way" of getting the same functionality.
  
    
    


|**If you want the functionality of ...**|**... try these approaches.**|
|:-----|:-----|
|Custom Web Parts  <br/> |A SharePoint Add-in can have remote pages that contain custom Web Parts. Another option is to expose a page from a remote web application in an add-in part on a SharePoint site page. The remote page can have basically the same UI controls and functionality as a Web Part. For more information, see  [Create add-in parts to install with your SharePoint Add-in](http://msdn.microsoft.com/library/a2664289-6c56-4cb1-987a-22367fad55eb%28Office.15%29.aspx).  <br/> |
|Event receivers and Feature receivers  <br/> |A SharePoint Add-in can contain functionally equivalent remote event receivers. For more information, see  [Handle events in SharePoint Add-ins](http://msdn.microsoft.com/library/c050d056-8548-4496-a053-016779d723d9%28Office.15%29.aspx).  <br/> |
|Custom field (column) types  <br/> |An add-in can deploy a new field (column) that is based on one of the  [existing field types](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfieldtype.aspx%28Office.15%29.aspx). The  [Calculated](http://msdn.microsoft.com/library/8703373d-bb55-4132-8c5f-37a41c383f81%28Office.15%29.aspx) and [Computed](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfieldcomputed.aspx%28Office.15%29.aspx) field types are especially flexible. Another option is to present your data in a remote web page by using customized controls or grids. <br/> |
|Custom web services built on the SharePoint  [Service Application Framework](http://msdn.microsoft.com/library/6d0300d2-5b5c-4477-a9e2-17594aea5a7d%28Office.15%29.aspx) <br/> |You can develop your custom web services as remote services.  <br/> |
|Application pages  <br/> |A SharePoint Add-in can include remote web pages that are available from every website on which the add-in is installed. An add-in can also use any of the built-in SharePoint Web Parts on site pages.  <br/> |
   
Some SharePoint components, listed below, are used in end-user scenarios, but have no equivalents in the SharePoint add-in model, and cannot be deployed in NCSSs. For these, you must use farm solutions.
  
    
    

- **Custom site definitions** But custom WebTemplates, which are functionally similar to site definitions, are available in both NCSSs and SharePoint Add-ins. For more information, see [Working with Site Templates and Definitions](http://msdn.microsoft.com/library/1edf6d4d-eddb-4cb5-9034-ed394e8a3e01%28Office.15%29.aspx).
    
  
- **Delegate controls** For more information, see [Delegate Control (Control Templatization)](http://msdn.microsoft.com/library/e979328d-4985-4ed6-9085-7ff32a998dfc%28Office.15%29.aspx).
    
  
- **Custom themes**
    
  
- **Custom action groups and custom action hiding**
    
  
- **User controls (.ascx files)** No scenario actually requires these.
    
  

### Use add-in event handlers conservatively
<a name="AppEventHandlers"> </a>

You can overcome some of the limitations of SharePoint Add-ins by creating handlers for the add-in installed, add-in updated, and add-in uninstalling events. These handlers are web services that are hosted on web servers outside the SharePoint farm, possibly in the cloud. They can use the SharePoint client object model, or the REST APIs, to perform CRUD operations on SharePoint components, including components in the host web. In theory, you could use such handlers to overcome some deployment restrictions in the **Branding** and **Template-like extensions** items, discussed earlier. However, we recommend that you use such handlers only as a last resort, when there is no other way to give customers the functionality your use case requires. When deciding whether to create a handler, consider the following:
  
    
    

- Programmatic deployment to the host web requires that the add-in request Full Control permission to the host web. Add-ins that require this level of permission cannot be sold through the Office Store.
    
  
- Deployment of components to the host web tends to undermine the security advantages of putting SharePoint components in an add-in web with its own domain.
    
  
- Extensive deployment code is a lot of work to create and debug compared with the descriptive deployment markup that can be used for add-in web components and in NCSSs.
    
  
- There are some critical best practices that must be followed in creating add-in event handlers. Your code must include rollback logic to undo everything it has done if it encounters an error. It must also alert the SharePoint infrastructure of the error, so that the infrastructure can roll back everything that it has done.
    
  
- Add-in event handlers are not possible with the type of SharePoint Add-in known as SharePoint-hosted.
    
  
For more information about add-in event handlers, see the SDK node  [Handle events in SharePoint Add-ins](http://msdn.microsoft.com/library/c050d056-8548-4496-a053-016779d723d9%28Office.15%29.aspx). For information about rollback logic, see the **Add rollback logic to the handler** section of the topic [Create a handler for the update event in SharePoint Add-ins](http://msdn.microsoft.com/library/0fa088c5-54c6-482c-84ed-51c4f77c4127%28Office.15%29.aspx) The latter topic is written in the context of the add-in updated event, but the basic principles apply to all add-in event handlers.
  
    
    

### Add-ins that create extensions
<a name="ExtensionFactories"> </a>

Another way to use the SharePoint client object model -- or its REST APIs -- to resolve component deployment issues with SharePoint Add-ins, is to have CRUD code inside the add-in itself, instead of in an add-in event handler. The add-in then becomes a kind of factory for a type of custom extension. For example, a SharePoint-hosted add-in could use the SharePointJavaScript object model to perform deployment and other CRUD operations on the host web or elsewhere in the tenancy or web application. For another example, see the **Quick introduction to remote provisioning** section of [Site provisioning techniques and remote provisioning in SharePoint 2013](http://blogs.msdn.com/b/vesku/archive/2013/08/23/site-provisioning-techniques-and-remote-provisioning-in-sharepoint.aspx), which describes how a provider-hosted SharePoint Add-in is used to provide subweb provisioning a lot like SharePoint's in-the-box subweb provisioning. There is, however, a lot of wheel-reinvention, and hence a lot of work in creating a factory SharePoint Add-in. In addition, this kind of add-in cannot be sold through the Office Store because the add-in requires Full Control of the host web.
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Programming models in SharePoint 2013](programming-models-in-sharepoint.md)
    
  
-  [Using Solutions in SharePoint Foundation](http://msdn.microsoft.com/library/0da0518c-24eb-48e0-89bd-21282fdeef94%28Office.15%29.aspx)
    
  

