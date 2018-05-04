---
title: Transform farm solutions to the SharePoint Add-in model
description: Learn how to convert web parts, page layouts, master pages, timer jobs, and more to the SharePoint Add-in model.
ms.date: 5/4/2018
---

# Transform farm solutions to the SharePoint Add-in model

If you have extended your SharePoint environment by using farm solutions, and you want to migrate your extensions to the SharePoint Add-in model to make your transition to SharePoint Online easier, you need to transform your farm solutions to the SharePoint Add-in model. 

Transforming your farm solutions to the SharePoint Add-in model involves analyzing your existing extensions, designing and developing your new SharePoint Add-in, and then testing and deploying your add-in in your production environment. 

This article describes the process and best practices to use when you transform your farm solutions to the SharePoint Add-in model.

## Planning the transformation process

When you transform your farm solutions to the SharePoint Add-in model, you want to ensure that the impact on your users is minimal. Carefully analyze your current farm solutions, and then design your new SharePoint Add-in to meet the needs of your organization. We recommend the following process to ensure a successful transformation.

### Readiness

Learn about:
    
- The SharePoint Add-in model, different kinds of add-ins, and hosting options. For more information, see  [SharePoint Add-ins](../sp-add-ins/sharepoint-add-ins.md).
    
- Remote access technologies for accessing your on-premises data.
    
### Solution assessment

Analyze the functional and business requirements by: 
    
- Identifying deployed farm solutions in your current environment. Consider using third-party tools to help identify deployed extensions. Perform a detailed analysis of each farm solution identified.
    
- Reviewing requirements with your users. Consider asking your users to demonstrate how they use the existing farm solutions to perform their daily work.
    
- Identifying, documenting, and designing new functionality to include in the new SharePoint Add-in. Consider reviewing your list of new feature requests from your users for additional ideas.
    
- Identifying unused features, and agreeing with your users to omit this functionality from the new SharePoint Add-in. 
    
- For each farm solution, determining whether to replace it with a SharePoint Add-in. Some solutions, such as SharePoint administration extensions, cannot be duplicated in the SharePoint Add-in model. For more information, see [SharePoint Application Lifecycle Management](../general-development/sharepoint-server-application-lifecycle-management.md) and [SharePoint Add-ins compared with SharePoint solutions](../general-development/sharepoint-add-ins-compared-with-sharepoint-solutions.md).
    
### Solution planning

Design the new application by using the SharePoint Add-in model based on:
    
- The requirements gathered in the **Solution assessment** step.
    
- Your analysis of the existing code. During your code analysis, consider identifying portions of the code that can be dropped (for example, the code is no longer being used, or the requirements have changed).
    
### Develop and test the SharePoint Add-in model version of your application

This is usually the most time-consuming step in the transformation process. 
    
### Deploy your new add-in

Depending on your requirements, you might decide to keep the farm solutions running in parallel to the new SharePoint Add-in, or you may retract the farm solution and only allow users to use the new SharePoint Add-in. In either scenario, ensure that your deployment is stable, and send appropriate communication to your users. 

If your content in existing site collections depended on your farm solutions (for example, if content was created by using a content type), before you fully retract the farm solution, you need to transform your existing content to use your new SharePoint Add-in model solution. Ensure that you allow enough time to complete this task because it can be time-consuming and difficult.

## Transformation approaches to deploy your new SharePoint Add-in

After you finish development and unit testing of your new SharePoint Add-in, start transforming your farm solution to the new SharePoint Add-in by using one of the transformation approaches listed in the following table.

|*Transformation approach|Description|Advantages|Disadvantages|
|:-----|:-----|:-----|:-----|
|In-place|Deploy your new SharePoint Add-in into your existing SharePoint environment.<br/><br/>You must ensure that your site is using the new SharePoint Add-in before retracting the farm solution.|<ul><li>Less overall user impact.</li><li>Fewer resources needed because you are using your existing SharePoint environment.</li><li>No need for third-party tools.</li><li>Minimal site downtime.</li><li>Upgrade one site collection at a time, rather than upgrading the entire farm all at once.</li><li>URLs do not change.</li></ul>|<ul><li>Difficult to track completion progress of all affected assets on a site.</li><li>Increased chance of creating orphans (when an asset points to a file on the file system that does not exist, this is referred to as an orphan).</li></ul>|
|Swing or content migration|Extract your content from your existing site collections where your farm solutions are currently deployed, and deploy the content in a new site collection that uses the new SharePoint Add-in.<br/><br/>When you migrate content to SharePoint Online, this process is normally used.|<ul><li>Clean SharePoint environment with no previous farm solution dependencies.</li><li>The new site collection is isolated from your production environment. Release the updated site collection when ready.</li>.</ul>|<ul><li>Requires third-party tools to help with the content migration.</li><li>Requires an additional SharePoint environment.</li><li>Site downtime required.</li><li>URLs might change if you keep both sites running in parallel for a period of time.</li>|

## Best practices for specific farm solutions

Apply the following best practices when transforming specific solutions.

### Page layouts and master pages

Custom page layouts and master pages might exist on publishing sites or team sites with the publishing features turned on. 

To replace page layouts and master pages:
    
1. Upload the new page layout or master page to your site. Upload new master pages and page layouts to your site collection either manually or by using remote APIs. Remote APIs include the client-side object model (CSOM) or REST. This ensures that the master pages and page layouts do not have dependencies on a farm solution. 
    
2. Configure your site to use the new page layouts and master pages.
    
3. Retract the previous version of the page layouts and master pages.
    
### Web parts and controls

To replace web parts and controls:
    
1. Scan all your existing pages to determine which pages have web parts.
    
2. (Optional) Review out-of-the-box web parts to determine if any can replace your custom web part.
    
3. Replace existing web parts with app part instances or by using other techniques (such as embedded JavaScript in pages or page layouts) to achieve the same functionality.

4. Use embedded JavaScript to manipulate UI elements.
    
> [!NOTE] 
> To replace your existing web parts with app parts, you need to:
> - Enable side loading of add-ins in your Office 365 subscription. Consult with your Office 365 administrator.
> - Use CSOM to enable side loading of add-ins on your site. For more information, see the Core.SideLoading code sample.
> - Install your app part on your site.
> - Disable side loading of add-ins on your site.
> - Disable side loading of add-ins on your Office 365 subscription. Consult with your Office 365 administrator.

### Page manipulation

You might need to implement page manipulation during your custom site provisioning process. The  [Provisioning.Pages](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Pages) code sample shows page manipulation techniques, including creating a wiki page, adding HTML content to the page, creating a promoted links list, creating pages with different layouts, adding out-of-the-box web parts to the page, and removing the page.
    
### Site columns, list definitions, and content types

If your site columns, list definitions, and content types were created using the Feature Framework elements, which were deployed using farm solutions, you must use the swing or content migration transformation approach. This does not apply to Feature Framework elements deployed by using sandbox solutions. To use the content migration transformation approach, you must use third-party tools to remove the farm solution dependencies.
    
### Modules or Feature Framework

Modules use pointers to files, which means that the files are not customized and are deployed on the file system. If your farm solutions use modules, customize the files by deploying alternate versions of the same files to the content database, scan and update your solutions to point to the new files stored in the content database, and then retract the farm solution that pointed to files stored on the file system.
    
### Site templates and web templates

You should focus on transforming Feature Framework elements deployed by the site template or web template. For example, ensure that the default.aspx page of the site is not replaced when retracting the farm solution.
    
### Timer jobs

If you are using SharePoint Online, you cannot create and manage timer jobs. Instead, you can create a console application that uses Windows Task Scheduler or an [Azure WebJob](https://docs.microsoft.com/en-us/azure/app-service/web-sites-create-web-jobs) to schedule and run the console application remotely. 

When creating a custom timer job, determine whether you need to use a specific account or an OAuth-based app-only token. The [Core.TimerJobs.Samples](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples) code sample shows how to create your own custom timer job.
    
> [!NOTE] 
> If your timer job uses server-side code, you must redesign your timer job to use the CSOM or another method.

|Article|Shows you how to|
|:-----|:-----|
|[Replace content types and site columns](replace-sharepoint-content-types-and-site-columns.md)|Use CSOM to replace SharePoint content types and site columns, add site columns to new content types, and replace the content types with new content types.|
|[Replace files deployed using modules in farm solutions](replace-files-deployed-using-modules-in-sharepoint-farm-solutions.md)|Replace files, like master pages and page layouts in SharePoint, that were deployed using modules in farm solutions by uploading and updating references to use new files.|
|[Replace lists created from list definitions](replace-sharepoint-lists-created-from-list-definitions.md)|Replace lists and libraries that were created by using list definitions in SharePoint.|
|[Replace web parts with add-in parts](replace-sharepoint-web-parts-with-add-in-parts.md)|Use the transformation process to replace web parts with add-in parts by using the SharePoint client object model (CSOM).|

## See also

- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md)
