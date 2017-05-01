# Customize a list view in SharePoint Add-ins using client-side rendering
Learn how to customize a list view in a SharePoint-hosted add-in by using the client-side rendering technology in SharePoint 2013.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

In SharePoint 2013, client-side rendering provides a way for you to produce your own output for a set of controls that are hosted in a SharePoint page. It enables you to use well-known technologies, such as HTML and JavaScript, to define the rendering logic of SharePoint list views. With client-side rendering, you can specify your own JavaScript resources and host them in the data storage options that are available to your add-ins, such as in a document library. A SharePoint-hosted add-in includes only SharePoint components. A SharePoint-hosted add-in has its resources in an isolated subsite of the host web, called the add-in web.
 

## Prerequisites for using the examples in this article
<a name="SP15CSRlistview_Prereq"> </a>

To follow the steps in this example, you will need the following:
 

 

-  [Visual Studio 2015 and the latest Microsoft Office Developer Tools ](https://www.visualstudio.com/features/office-tools-vs)
    
 
- A SharePoint 2013 development environment (add-in isolation required for on-premises scenarios)
    
 
For guidance on how to set up a development environment that fits your needs, see  [Start building Office and SharePoint Add-ins](http://msdn.microsoft.com/library/187f8c8c-1b15-471c-80b5-69a40e67deea.aspx).
 

 

### Core concepts to help you understand list view customization with client-side rendering

The following table lists useful articles that can help you understand the concepts that are involved in a list view customization scenario.
 

 

**Table 1. Core concepts for list view customization in an add-in**


|**Article title**|**Description**|
|:-----|:-----|
| [SharePoint Add-ins](sharepoint-add-ins.md)|Learn about the new add-in model in Microsoft SharePoint 2013 that enables you to create add-ins, which are small, easy-to-use solutions for end users.|
| [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md)|Learn about the UX options that you have when you are building SharePoint Add-ins.|
| [Host webs, add-in webs, and SharePoint components in SharePoint 2013](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint-2013.md)|Learn about the difference between host webs and add-in webs. Find out which SharePoint 2013 components can be included in a SharePoint Add-in, which components are deployed to the host web, which components are deployed to the add-in web, and how the add-in web is deployed in an isolated domain.|

## Code example: Customize a list view by using client-side rendering
<a name="SP15CSRlistview_Codeexample"> </a>

To customize a list view that is deployed to the add-in web by using client-side rendering, follow these steps:
 

 

1. Create the SharePoint Add-in project.
    
 
2. Create a new list definition with a custom view.
    
 
3. Provide the custom rendering logic in a JavaScript file.
    
 
Figure 1 shows a client-side rendered view of an announcements list.
 

 

**Figure 1. Custom view of an announcements list**

 

 
![Custom view of an announcements list](../../images/CSRListView_result.png)
 

### To create the SharePoint Add-in project


1. Open Visual Studio 2015 as administrator. (To do this, right-click the  **Visual Studio** icon on the **Start** menu, and choose **Run as administrator**.)
    
 
2. Create a new project using the  **SharePoint Add-in** template.
    
    Figure 2 shows the location of the  **SharePoint Add-in** template in Visual Studio 2015, under **Templates**,  **Visual C#**,  **Office/SharePoint**,  **Office Add-ins**.
    

    **Figure 2. Add-in for SharePoint 2013 Visual Studio template**

 

     ![App for SharePoint 2013 Visual Studio template](../../images/AppForSharePointVSTemplate.PNG)
 

 

 
3. Provide the URL of the SharePoint website that you want to use for debugging.
    
 
4. Select  **SharePoint-hosted** as the hosting option for your add-in.
    
 

### To create a new list definition


1. Right-click the SharePoint Add-in project, and add a new  **List** item. Create a customizable list based on Announcements.
    
 
2. Copy the following markup and paste it in the  **Views** element in the Schema.xml file of your list feature. The markup performs the following tasks:
    
      - Declares a new view named Overridable with a BaseViewID=2.
    
 
  - Provides a value for the  **JSLink** element that points to a JavaScript file that is provisioned with the add-in.
    
     **Note**  The JSLink property is not supported on Survey or Events lists. A SharePoint calendar is an Events list.

```XML
  <View BaseViewID="2" 
      Name="8d2719f3-c3c3-415b-989d-33840d8e2ddb" 
      DisplayName="Overridable" 
      Type="HTML" 
      WebPartZoneID="Main" 
      SetupPath="pages\viewpage.aspx" 
      Url="Overridable.aspx"
      DefaultView="TRUE">
  <ViewFields>
    <FieldRef Name="Title" />
  </ViewFields>
  <Query />
  <Toolbar Type="Standard" />
  <XslLink>main.xsl</XslLink>
  <JSLink Default="TRUE">~site/Scripts/CSRListView.js</JSLink>
</View>
```


### To provide the custom rendering logic in a JavaScript file


1. Right-click the  **Scripts** folder, and add a new JavaScript file. Name the fileCSRListView.js.
    
 
2. Copy the following code and paste it in the CSRListView.js file. The code performs the following tasks:
    
      - Provides event handlers for the  **PreRender** and **PostRender** events.
    
 
  - Provides templates for the Header, Footer, and Item template sets.
    
 
  - Registers the templates.
    
 

```
  (function () {
    // Initialize the variable that stores the objects.
    var overrideCtx = {};
    overrideCtx.Templates = {};

    // Assign functions or plain html strings to the templateset objects:
    // header, footer and item.
    overrideCtx.Templates.Header = "<B><#=ctx.ListTitle#></B>" +
        "<hr><ul id='unorderedlist'>";

    // This template is assigned to the CustomItem function.
    overrideCtx.Templates.Item = customItem;
    overrideCtx.Templates.Footer = "</ul>";

    // Set the template to the:
    //  Custom list definition ID
    //  Base view ID
    overrideCtx.BaseViewID = 2;
    overrideCtx.ListTemplateType = 10057;

    // Assign a function to handle the
    // PreRender and PostRender events
    overrideCtx.OnPreRender = preRenderHandler;
    overrideCtx.OnPostRender = postRenderHandler;

    // Register the template overrides.
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();

// This function builds the output for the item template.
// It uses the context object to access announcement data.
function customItem(ctx) {

    // Build a listitem entry for every announcement in the list.
    var ret = "<li>" + ctx.CurrentItem.Title + "</li>";
    return ret;
}

// The preRenderHandler attends the OnPreRender event
function preRenderHandler(ctx) {

    // Override the default title with user input.
    ctx.ListTitle = prompt("Type a title", ctx.ListTitle);
}

// The postRenderHandler attends the OnPostRender event
function postRenderHandler(ctx) {

    // You can manipulate the DOM in the postRender event
    var ulObj;
    var i, j;

    ulObj = document.getElementById("unorderedlist");
    
    // Reverse order the list.
    for (i = 1; i < ulObj.children.length; i++) {
        var x = ulObj.children[i];
        for (j = 1; j < ulObj.children.length; j++) {
            var y = ulObj.children[j];
            if(x.innerText<y.innerText){                  
                ulObj.insertBefore(y, x);
            }
        }
    }
}
```


### To build and run the solution


1. Press the F5 key.
    
     **Note**  When you press F5, Visual Studio builds the solution, deploys the add-in, and opens the permissions page for the add-in.
2. Choose the  **Trust It** button.
    
 
3. Go to your custom List by entering the  _/Lists/<your_list_instance>_ address relative to your add-in directory in the add-in web domain (not the host web domain). Add one or two announcements. On the ribbon, choose the **Overridable** view.
    
 

## Next steps
<a name="SP15CSRlistview_Nextsteps"> </a>

This article demonstrated how to customize a list view in a SharePoint Add-in by using client-side rendering. As a next step, you can learn about the other UX components that are available for SharePoint Add-ins. To learn more, see the following:
 

 

-  [Code sample: Customize a list view in an add-in using client-side rendering](http://code.msdn.microsoft.com/SharePoint-2013-Customize-61761017)
    
 
-  [Use a SharePoint website's style sheet in SharePoint Add-ins](use-a-sharepoint-website-s-style-sheet-in-sharepoint-add-ins.md)
    
 
-  [Use the client chrome control in SharePoint Add-ins](use-the-client-chrome-control-in-sharepoint-add-ins.md)
    
 
-  [Create custom actions to deploy with SharePoint Add-ins](create-custom-actions-to-deploy-with-sharepoint-add-ins.md)
    
 
-  [Create add-in parts to install with your SharePoint Add-in](create-add-in-parts-to-install-with-your-sharepoint-add-in.md)
    
 

## Additional resources
<a name="SP15CSRlistview_AddResources"> </a>


-  [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md)
    
 
-  [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md)
    
 
-  [Create UX components in SharePoint 2013](create-ux-components-in-sharepoint-2013.md)
    
 
-  [Three ways to think about design options for SharePoint Add-ins](three-ways-to-think-about-design-options-for-sharepoint-add-ins.md)
    
 
-  [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscape.md)
    
 

