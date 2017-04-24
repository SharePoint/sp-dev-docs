---
title: Develop SharePoint 2013 workflows using Visual Studio
ms.prod: SHAREPOINT
ms.assetid: 28f5d3b1-6fe8-4b1f-8c4e-b11105fe6f46
---



# Develop SharePoint 2013 workflows using Visual Studio
SharePoint 2013 supports two primary workflow development environments for authoring workflows: SharePoint Designer and Visual Studio. This article summarizes both and discusses the advantages and disadvantages of each.
## Authoring basics for SharePoint workflows
<a name="bkm_AuthoringBasics"> </a>


> [!NOTE]
> For guidance on setting up and configuring Microsoft SharePoint Server 2013 and the Workflow Manager Client 1.0 server, see  [Set up and configure SharePoint 2013 Workflow Manager](set-up-and-configure-sharepoint-workflow-manager.md). 
  
    
    

As with previous versions, Microsoft SharePoint 2013 provides two primary workflow development environments for authoring workflows: Microsoft SharePoint Designer and Microsoft Visual Studio. However, what differs from previous versions is that using Visual Studio no longer provides a code-based authoring strategy. Instead, both SharePoint Designer and Visual Studio provide a fully declarative, no-code authoring environment regardless of the development tool you select.
  
    
    

> [!NOTE]
> As a complement to authoring workflows in SharePoint Designer, you can also use Microsoft Visio 2013 to structure your workflow logic by using Visio 2013 shapes, and then import your logic into SharePoint Designer 2013. For information about using Visio 2013 to author your workflow logic, see  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md). 
  
    
    


### Declarative workflows

Let's first be clear what is meant by "declarative" workflows. This term means that instead of being authored in code and then compiled into managed assemblies, the workflow is described (literally) in XAML and then executed interpretively at run time.
  
    
    
The XAML is derived (or inferred) from the workflow building blocks that you manipulate in the Workflow Designer (if using Visual Studio) or SharePoint Designer workflow design surface (or Visio, but more about that later). The building blocks themselves are the visual workflow design objects in the designer toolbox—stages, conditions, actions, events, and so on. The set of tools in the respective toolboxes (Visual Studio or SharePoint Designer) differs somewhat, but the concept of the declarative workflow remains the same.
  
    
    

## Decision tree: SharePoint Designer vs. Visual Studio
<a name="bkm_DecisionTree"> </a>

Among the greatest advantages of the workflow framework in SharePoint 2013 is the ease with which information workers can use the no-code environment of SharePoint Designer to create rich and powerful workflows. Additionally, a high degree of flexibility and customization is available in a declarative authoring environment such as Visual Studio.
  
    
    
Both of these workflow authoring environments—SharePoint Designer and Visual Studio—offer specific advantages and disadvantages. In this section, we explore how to determine which authoring environment best suits your workflow development needs.
  
    
    

### Using SharePoint Designer


- **Target users:** Information workers, business analysts, SharePoint developers.
    
  
- **Difficulty level:** Familiarity with SharePoint Designer, including the core workflow components, such as stages, gates, actions, conditions, and loops.
    
  
With SharePoint Designer, users can create a workflow that is attached to a list, library, or site using a no-code, text-based designer. Or, they can use the new visual design environment in which graphical elements are arranged on a design surface to represent the logical flow of a business process. SharePoint Designer excels at enabling rapid workflow development by non-technical workers.
  
    
    

### Using Visual Studio


- **Target users:** Intermediate or advanced software developers.
    
  
- **Difficulty level:** Familiarity with Visual Studio, including software development concepts such as event receivers, packaging and deployment, and security.
    
  
Authoring workflows in Visual Studio provides flexibility to create workflows to support virtually any business process, regardless of its complexity, and allows debugging and reuse of workflow definitions. Perhaps most important, Visual Studio lets developers include SharePoint workflows as part of a broader SharePoint solution or SharePoint Add-in.
  
    
    
Visual Studio enables developers to create custom actions for consumption by SharePoint Designer, and provides the means to execute custom logic. With Visual Studio, developers can also create workflow templates, which can be deployed to multiple sites.
  
    
    

## Comparing SharePoint Designer with Visual Studio
<a name="bkm_Comparing"> </a>

The following table provides a side-by-side comparison of the features and requirements for using SharePoint Designer and Visual Studio to create SharePoint workflows.
  
    
    

**Table 1. Workflow authoring tool comparison**


|**Feature / Requirement**|**SharePoint Designer**|**Visual Studio**|
|:-----|:-----|:-----|
|Allows rapid workflow development  <br/> |Yes  <br/> |Yes  <br/> |
|Enables reuse of workflows  <br/> |A workflow can be used only by the list or library on which it was developed. However, SharePoint Designer provides reusable workflows that can be used multiple times within the same site.  <br/> |A workflow can be written as a template so that after it is deployed, it can be reused and associated with any list or library.  <br/> |
|Allows you to include a workflow as part of a SharePoint solution or SharePoint Add-in  <br/> |No  <br/> |Yes  <br/> |
|Allows you to create custom actions  <br/> |No. However, SharePoint Designer can consume and implement custom actions that are created and deployed by using Visual Studio.  <br/> |Yes. However, be aware that in Visual Studio, the underlying activities, not their corresponding actions, are used.  <br/> |
|Allows you to write custom code  <br/> |No  <br/> |No  <br/> > [!NOTE]> This is changed from previous versions. In SharePoint 2013, workflows are declarative only and Visual Studio relies on the visual design surface for workflow development.           |
|Can use Visio Professional to create workflow logic  <br/> |Yes  <br/> |No  <br/> |
|Deployment  <br/> |Deployed automatically to list, library, or site on which they were created.  <br/> |Create a SharePoint solution package (.wsp) file and deploy the solution package to the site (SPWeb).  <br/> |
|One-click publishing available for workflows  <br/> |Yes  <br/> |Yes  <br/> |
|Workflows can be packaged and deployed to a remote server  <br/> |Yes  <br/> |Yes  <br/> |
|Debugging  <br/> |Cannot be debugged.  <br/> |Workflow can be debugged by using Visual Studio.  <br/> |
|Can use only actions that are approved by site administrator  <br/> |Yes  <br/> |Yes  <br/> > [!NOTE]> This is changed from previous versions. Previously, workflows and actions that were authored by using Visual Studio were code-based and deployed at the farm scope, so administrator approval was not required.           |
   

## Developing workflows using Visual Studio
<a name="bkm_Developing"> </a>

Unlike earlier versions, workflows in SharePoint 2013 are entirely declarative. Built now on Windows Workflow Foundation 4, Visual Studio provides a visual workflow designer surface that lets you create custom workflows, workflow templates, forms, and custom workflow activities entirely in the designer environment. Your workflow is then packaged and deployed as a SharePoint Feature. For information about Feature packaging, see  [Using Features in SharePoint Foundation](http://msdn.microsoft.com/en-us/library/ms461324.aspx).
  
    
    
Perhaps the most significant change for Visual Studio developers is that custom workflows are no longer compiled and deployed as .NET Framework assemblies. Furthermore, SharePoint 2013 no longer uses Microsoft InfoPath forms; instead, forms generation relies on Microsoft ASP.NET forms. 
  
    
    
Finally, the Visual Studio workflow project templates have changed. Whereas formerly templates for state machine and sequential workflows were provided, these distinctions are no longer meaningful. Rather, Visual Studio project templates are available in the Visual Studio build provided on your virtual machine (VM).
  
    
    

## Enabling on-premises workflow debugging
<a name="bkm_Enabling"> </a>

To debug on-premises workflows in Visual Studio, you need to temporarily allow the Workflow Manager Tools to access your system through the firewall.
  
    
    

1. In **Control Panel**, choose **System and Security**, **Windows Firewall**.
    
  
2. In the **Control Panel Home** list, choose the **Advanced Settings** link.
    
  
3. In the left pane of Windows Firewall, choose **Inbound Rules**.
    
  
4. In the **Inbound Rules** list, choose **Workflow Manager Tools 1.0 for Visual Studio 2012 - Test Service Host**.
    
  
5. In the **Actions** list, choose **Enable Rule**.
    
  
6. On the properties page of your SharePoint project, choose the **SharePoint** tab, and then select the **Enable Workflow debugging** check box.
    
  

## Debugging SharePoint Online workflows using Visual Studio
<a name="bkm_Debug"> </a>

To debug SharePoint Online workflows in Visual Studio, perform the following steps:
  
    
    

1. If you're behind a firewall, you may need to install a proxy client (such as the  [Forefront Threat Management Gateway (TMG) Client](http://www.microsoft.com/en-us/download/details.aspx?displaylang=en&amp;id=10504)), depending on your company's network topology.
    
  
2. Register for a Microsoft Azure account if you haven't already, and then sign into that account.
    
    For information about how to register for a Microsoft Azure account, see  [Microsoft Azure](http://www.windowsazure.com).
    
  
3. Create a Microsoft Azure Service Bus namespace, which you can use to debug remote workflows. You can do this on the  [Microsoft Azure management portal](http://manage.windowsazure.com).
    
    For more information about the Microsoft Azure Service Bus, see  [Managing Service Bus Service Namespaces](http://msdn.microsoft.com/en-us/library/windowsazure/hh690928.aspx).
    
    > [!NOTE]
      > SharePoint Online workflow debugging uses the Relay Service component of the Microsoft Azure Service Bus, so you'll be charged for using the Service Bus. See  [Service Bus Pricing FAQ](http://msdn.microsoft.com/library/hh667438.aspx). You get free access to Microsoft Azure each month that you subscribe to Visual Studio Professional with MSDN, Visual Studio Premium with MSDN, or Visual Studio Ultimate with MSDN. With this access, you can use the Service Bus relay for 1,500, 3,000, or 3,000 hours, depending on your MSDN subscription. See  [Get some amount of Microsoft Azure Services each month at no additional charge](http://www.windowsazure.com/en-us/pricing/member-offers/msdn-benefits/). 
4. In Microsoft Azure, choose your service namespace, choose the **Access Key** link, and then copy the text in the **Connection String** box.
    
  
5. On the properties page of your SharePoint Add-in project, choose the **SharePoint** tab, and then select the **Enable Workflow debugging** check box.
    
    You must enable this feature to debug workflows in SharePoint Online. This property applies to all of your SharePoint projects in Visual Studio. Visual Studio automatically turns off workflow debugging if you package your app for distribution on the Office store.
    
  
6. Select the **Enable debugging via Microsoft Azure Service Bus** check box. Then, in the **Microsoft Azure Service Bus connection string** box, paste the connection string that you copied.
    
  
After you enable workflow debugging and provide a valid connection string for the Microsoft Azure Service Bus, you can debug SharePoint Online workflows.
  
    
    

> [!NOTE]
> If you haven't disabled workflow debugging and don't want to receive a notification whenever your project contains a workflow, clear the **Notify me if Microsoft Azure Service Bus debugging is not configured** check box.
  
    
    


## Additional resources
<a name="workflowbk_addres"> </a>

A great deal of developing SharePoint workflows remains unchanged for the Visual Studio developer. The key sections of the documentation for SharePoint 2010 remain relevant:
  
    
    

- For information about using the Visual StudioWorkflow Designer, see  [Visual Studio Designer for Windows Workflow Foundation Overview](http://msdn.microsoft.com/en-us/library/ms441543.aspx).
    
  
- For information about creating forms by using Microsoft ASP.NET, see  [Workflow Forms Overview](http://msdn.microsoft.com/en-us/library/ms457061.aspx).
    
  
- For information about Feature packaging, see  [Using Features in SharePoint Foundation](http://msdn.microsoft.com/en-us/library/ms461324.aspx).
    
  
