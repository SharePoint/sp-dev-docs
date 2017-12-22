---
title: Use a SharePoint website's style sheet in SharePoint Add-ins
description: Reference a style sheet of a SharePoint website in your SharePoint Add-in and use it to style your webpages.
ms.date: 12/14/2017
ms.prod: sharepoint
---


# Use a SharePoint website's style sheet in SharePoint Add-ins

You can reference the style sheet of a SharePoint website in your SharePoint Add-in and use it to style your webpages by using the style sheet in SharePoint. In addition, if someone changes the SharePoint website's style sheet or theme, you can adopt the new set of styles in your add-in without modifying the style sheet reference in your add-in.
 
> [!IMPORTANT] 
> If your webpages use the chrome control or the add-in master page, the styles are already available for you to use, and you don't have to reference the style sheet manually by using the procedure in this article. 
 
<a name="SP15Usestylesheetcontrol_Prereq"> </a>

## Prerequisites for using the examples in this article

You need a development environment as explained in [Two types of SharePoint Add-ins: SharePoint-hosted and provider-hosted](sharepoint-add-ins.md#two-types-of-sharepoint-add-ins-sharepoint-hosted-and-provider-hosted).

### Core concepts to know before using the SharePoint style sheet in a SharePoint Add-in

The following table lists useful articles that can help you understand the concepts involved in a scenario that uses the SharePoint style sheet.

|**Article title**|**Description**|
|:-----|:-----|
| [SharePoint Add-ins](sharepoint-add-ins.md)|Learn about the new add-in model in SharePoint that enables you to create add-ins, which are small, easy-to-use solutions for end users.|
| [UX design for SharePoint Add-ins](ux-design-for-sharepoint-add-ins.md)|Learn about the user experience (UX) options and alternatives that you have when building SharePoint Add-ins.|
| [Host webs, add-in webs, and SharePoint components in SharePoint](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint.md)|Learn about the difference between host webs and add-in webs. Find out which SharePoint components can be included in a SharePoint Add-in, which components are deployed to the host web, which components are deployed to the add-in web, and how the add-in web is deployed in an isolated domain.|

<a name="SP15Usestylesheetcontrol_Example"> </a>

## Code example: Use a SharePoint website's style sheet in a SharePoint Add-in

This code example shows you how to use the SharePoint website's style sheet. This enables your remote web application pages to match the look-and-feel of the pages in the SharePoint host web.

### To use the style sheet in a SharePoint Add-in

1. Create the provider-hosted SharePoint Add-in.

2. Force the add-in web provisioning by creating a blank page.

3. Add a webpage to the web project, and reference the style sheet.

4. Edit the element in the add-in manifest.

The following figure shows a SharePoint webpage that is using the style sheet.

**Webpage using the style sheet**

![A web page using the style sheet control](../images/StylesheetControl_result.png)
 
<br/>

### To create the SharePoint Add-in and remote web projects

1. Open Visual Studio as administrator. (To do this, right-click the Visual Studio icon on the **Start** menu, and select **Run as administrator**.)

2. Create the provider-hosted SharePoint Add-in as explained in [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md) and name it **StylesheetAdd-in**. 

### To force the add-in web provisioning by creating a blank page

1. Right-click the SharePoint Add-in project, and add a new module.
    
2. Right-click the new module, and add a new item.

3. Under **Visual C# items**, **Web**, select **HTML Page**. Rename the page to **blank.html**.

4. Delete the contents of blank.html.

### To add a webpage that references the style sheet in the web project

1. Right-click the web project, and add a new Web Form. Rename the Web Form to **StyleConsumer.aspx**.

2. Replace the contents of the Web Form .aspx file with the following code. The code performs the following tasks:
    
    - Loads the blank.html page from the add-in web in an invisible IFrame.

    - Loads the defaultcss.ashx file from the add-in web.

    - Uses the available styles.

    ```
        <%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StyleConsumer.aspx.cs" Inherits="StylesheetAppWeb.StyleConsumer" %>

        <!DOCTYPE html>
        <html>
        <head>
            <title>Add-in using stylesheet</title>
        </head>
        <body>

            <!-- The main page title -->
            <h1 class="ms-core-pageTitle">Stylesheet add-in</h1>

            <!-- Some subtitle -->
            <h1 class="ms-accentText">For people</h1>

            <!-- Subtitle comments -->
            <h2 class="ms-accentText">who care about the style in their add-ins</h2>
            <p></p>
            <div>
                <h2 class="ms-webpart-titleText">Get started with style in your add-in... </h2>
                <a class="ms-commandLink" href="#">some command</a>
                <br />
                This sample shows you how to use some of the classes defined in the SharePoint website's style sheet.
            </div>

            <!-- Script to load SharePoint resources
                and load the blank.html page in
                the invisible iframe
                -->
            <script type="text/javascript">
                "use strict";
                var appweburl;

                (function () {
                    var ctag;

                    // Get the URI decoded add-in web URL.
                    appweburl =
                        decodeURIComponent(
                            getQueryStringParameter("SPAppWebUrl")
                    );
                    // Get the ctag from the SPClientTag token.
                    ctag =
                        decodeURIComponent(
                            getQueryStringParameter("SPClientTag")
                    );

                    // The resource files are in a URL in the form:
                    // web_url/_layouts/15/Resource.ashx
                    var scriptbase = appweburl + "/_layouts/15/";

                    // Dynamically create the invisible iframe.
                    var blankiframe;
                    var blankurl;
                    var body;
                    blankurl = appweburl + "/Pages/blank.html";
                    blankiframe = document.createElement("iframe");
                    blankiframe.setAttribute("src", blankurl);
                    blankiframe.setAttribute("style", "display: none");
                    body = document.getElementsByTagName("body");
                    body[0].appendChild(blankiframe);

                    // Dynamically create the link element.
                    var dclink;
                    var head;
                    dclink = document.createElement("link");
                    dclink.setAttribute("rel", "stylesheet");
                    dclink.setAttribute("href", scriptbase + "defaultcss.ashx?ctag=" + ctag);
                    head = document.getElementsByTagName("head");
                    head[0].appendChild(dclink);
                })();

                // Function to retrieve a query string value.
                // For production purposes you may want to use
                //  a library to handle the query string.
                function getQueryStringParameter(paramToRetrieve) {
                    var params;
                    var strParams;

                    params = document.URL.split("?")[1].split("&amp;");
                    strParams = "";
                    for (var i = 0; i < params.length; i = i + 1) {
                        var singleParam = params[i].split("=");
                        if (singleParam[0] == paramToRetrieve)
                            return singleParam[1];
                    }
                }
            </script>
        </body>
        </html>

    ```

    <br/>

In some cases, the user has to be authenticated to SharePoint before your page is able to download the CSS and images for styling. Link tags do not automatically authenticate a user who is not already signed in. Consider loading a page resource from the add-in web in your webpage to force the user's authentication before linking to the CSS file. In this example, the blank.html page is loaded in an invisible IFrame.
    
### To edit the StartPage element in the add-in manifest

1. Double-click the **AppManifest.xml** file in **Solution Explorer**.
  
2. On the **Start page** drop-down menu, select the webpage that uses the style sheet.
    
### To build and run the solution

1. Make sure that the SharePoint Add-in project is set as the startup project.

2. Select the F5 key.
    
    > [!NOTE] 
    > When you press F5, Visual Studio builds the solution, deploys the add-in, and opens the permissions page for the add-in.

3. Select the **Trust It** button.
    
4. Select the **StylesheetBasic** add-in icon.
 
5. The following figure shows the resulting webpage using the SharePoint styles.
    
    **Style sheet used in the page**
  
    ![Style sheet control used in a web page](../images/StylesheetControl_result2.png)

6. You can also go to the host web and change the theme. Reload the add-in webpage to use the new styles.
    
#### Troubleshooting the solution

|**Problem**|**Solution**|
|:-----|:-----|
|Visual Studio does not open the browser after you select the F5 key.|Set the SharePoint Add-in project as the startup project.|
|Certificate error.|Set the **SSL Enabled** property of your web project to **false**. In the SharePoint Add-in project, set the **Web Project** property to **None**, and then set the property back to your web project's name.|

## See also
<a name="SP15Usestylesheetcontrol_Addresources"> </a>

- [Code sample: Use the SharePoint style sheet in an add-in](https://code.msdn.microsoft.com/office/SharePoint-2013-Use-the-7a8684e2/view/Discussions)
- [Create UX components in SharePoint](create-ux-components-in-sharepoint.md)

 

