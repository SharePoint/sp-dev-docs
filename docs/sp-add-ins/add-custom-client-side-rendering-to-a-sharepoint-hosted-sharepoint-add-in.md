---
title: Add custom client-side rendering to a SharePoint-hosted SharePoint Add-in
ms.prod: SHAREPOINT
ms.assetid: 6e0e530a-7d8b-48ab-8d0c-a878ddbf5be1
---


# Add custom client-side rendering to a SharePoint-hosted SharePoint Add-in
Customize the rendering and validation of controls in SharePoint Add-ins pages.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

This is the eighth in a series of articles about the basics of developing SharePoint-hosted SharePoint Add-ins. You should first be familiar with  [SharePoint Add-ins](sharepoint-add-ins.md) and the previous articles in this series:
 

-  [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md)
    
 
-  [Deploy and install a SharePoint-hosted SharePoint Add-in](deploy-and-install-a-sharepoint-hosted-sharepoint-add-in.md)
    
 
-  [Add custom columns to a SharePoint-hostedSharePoint Add-in](add-custom-columns-to-a-sharepoint-hostedsharepoint-add-in.md)
    
 
-  [Add a custom content type to a SharePoint-hostedSharePoint Add-in](add-a-custom-content-type-to-a-sharepoint-hostedsharepoint-add-in.md)
    
 
-  [Add a Web Part to a page in a SharePoint-hosted SharePoint Add-in](add-a-web-part-to-a-page-in-a-sharepoint-hosted-sharepoint-add-in.md)
    
 
-  [Add a workflow to a SharePoint-hosted SharePoint Add-in](add-a-workflow-to-a-sharepoint-hosted-sharepoint-add-in.md)
    
 
-  [Add a custom page and style to a SharePoint-hosted SharePoint Add-in](add-a-custom-page-and-style-to-a-sharepoint-hosted-sharepoint-add-in.md)
    
 

 **Note**  If you have been working through this series about SharePoint-hosted add-ins, then you have a Visual Studio solution that you can use to continue with this topic. You can also download the repository at  [SharePoint_SP-hosted_Add-Ins_Tutorials](https://github.com/OfficeDev/SharePoint_SP-hosted_Add-Ins_Tutorials) and open the BeforeClientRenderedControl.sln file.
 

You can use a little client-side JavaScript to customize the rendering of Web Parts, most types of fields (columns), and some other controls, by assigning a JavaScript file to the  **JSLink** property of the control, such as **SPField.JSLink**. You can also add client-side validation logic in this way. In this article you customize the rendering of a field in a list of the Employee Orientation SharePoint Add-in by using client-side rendering.
 

 **Note**  If the end-user has JavaScript disabled in their browser, SharePoint will fall back to server-side rendering and validation.
 


 **Note**  The JSLink property is not supported on Survey or Events lists. A SharePoint calendar is an Events list.
 


## Create and register the JavaScript


 

 

1. In  **Solution Explorer**, right-click the  **Scripts** node and choose **Add** > **New Item** > **Web**.
    
 
2. Choose  **JavaScript File** and name itOrientationStageRendering.js.
    
 
3. Your custom rendering of the field should happen automatically, so add an anonymous method to the JavaScript that runs automatically when the file loads with the following code.
    
  ```
  (function () {

})();
  ```

4. In the body fo this method (between the { } characters), add the following code to create JSON (Javascript Object Notation) objects for the rendering override context, the templates in the context, and the templates for the fields.
    
  ```
  var customRenderingOverride = {};
customRenderingOverride.Templates = {};
customRenderingOverride.Templates.Fields = {

}
  ```

5. In the body of the  `Fields` template object, add the following JSON. The property name `OrientationStage` identifies the field that has customized rendering. The value of the property is another JSON object. The `View` property identifies the page context in which the custom rendering is applied. In this case, the object is telling SharePoint to use the customized rendering on list views. (Other options would be for the Edit, New, and Display forms.) The value of the property, `renderOrientationStage`, is the name of the custom rendering method which you create in a later step.
    
  ```
  "OrientationStage": { "View": renderOrientationStage }
  ```

6. The last thing that the anonymous method must do is tell SharePoint's template manager about the rendering override. Add the following line to the end of the body of the method.
    
  ```
  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride);
  ```


    The method should now look like the following.
    


  ```
  (function () {
    var customRenderingOverride = {};
    customRenderingOverride.Templates = {};
    customRenderingOverride.Templates.Fields = {
        "OrientationStage": { "View": renderOrientationStage }
    }

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride);
})();
  ```

7. Add the following method to the file. It sets the color of the  **Orientation Stage** column value to red when the value is "Not Started" and to green when the value is "Completed". (The `ctx` object is a client context object that is declared by in-the-box SharePoint script.)
    
  ```
  function renderOrientationStage(ctx) {
    var orientationStageValue = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];
    if (orientationStageValue == "Not Started")  {
        return "<span style='color:red'>" + orientationStageValue + "</span>"
    }
    else if (orientationStageValue == "Completed") {
        return "<span style='color:green'>" + orientationStageValue + "</span>"
    }
    else {
        return orientationStageValue;
    }
}
  ```

8. In  **Solution Explorer**, expand  **Site Columns** and then **OrientationStage**; and then open the elements.xml file.
    
 
9. To tell SharePoint to use your custom JavaScript, add a new attribute,  **JSLink**, to the  **Field** element, and then assign the following URL as its value: `~site/Scripts/OrientationStageRendering.js`.
    
     **Note**  The  **JSLink** property is always a file, not a method. There's no way to tell SharePoint which method to run. That is why the file contains a method that runs automatically.

    The start tag for the  **Field** element will now look like the following.
    


  ```
  <Field
       ID="{some_guid_here}"
       Name="OrientationStage"
       Title="OrientationStage"
       DisplayName="Orientation Stage"
       Description="The current orientation stage of the employee."
       Type="Choice"
       Required="TRUE"
       Group="Employee Orientation" 
       JSLink="~site/Scripts/OrientationStageRendering.js">
<!-- child elements and end tag omitted -->
  ```

10. Open the Default.aspx page and add the following code as the last child of the  **asp:Content** element that has **ContentPlaceHolderID** set to **PlaceHolderMain**. 
    
  ```XML
  <p><asp:HyperLink runat="server" NavigateUrl="JavaScript:window.location = _spPageContextInfo.webAbsoluteUrl + '/Lists/NewEmployeesInSeattle/AllItems.aspx';" 
    Text="List View Page for New Employees in Seattle" /></p>

  ```


## Run and test the add-in


 

 

1. Use the F5 key to deploy and run your add-in. Visual Studio makes a temporary installation of the add-in on your test SharePoint site and immediately runs the add-in. 
    
 
2. The client-side rendering that you have configured affects the rendering of the field only on the list view page, not in the list view Web Part that we put on the home page. This is because the Web Part defaults to server-side rendering. There are ways to reverse this, but they are too advanced for this simple example. So, to see the client-side rendering in action, click the link at the bottom of the page  **List View Page for New Employees in Seattle**.
    
 
3. When the list view page opens, set the  **Orientation Stage** value for some items to **Not Started** and set others to **Completed** to see the custom color rendering.
    
    **List with custom client-side rendering**

 

     ![New employees in Seattle list with Orientation Stage values of "Not started" in red and values of "Completed" in green. Other values in black.](images/dc8e2b7d-1747-4b65-aab4-6fc93c6867d4.PNG)
 

 

 
4. To end the debugging session, close the browser window or stop debugging in Visual Studio. Each time that you press F5, Visual Studio will retract the previous version of the add-in and install the latest one.
    
 
5. You will work with this add-in and Visual Studio solution in other articles, and it's a good practice to retract the add-in one last time when you are done working with it for a while. Right-click the project in  **Solution Explorer** and choose **Retract**.
    
 

## 
<a name="Nextsteps"> </a>

In the next article in this series, you'll add a custom menu item and custom button to the ribbon in the SharePoint Add-in:  [Create a custom ribbon button in the host web of a SharePoint Add-in](create-a-custom-ribbon-button-in-the-host-web-of-a-sharepoint-add-in.md).
 

 

