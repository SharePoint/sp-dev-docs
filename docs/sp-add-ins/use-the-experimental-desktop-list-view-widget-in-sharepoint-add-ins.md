---
title: Use the experimental Desktop List View widget in SharePoint Add-ins
description: Use the Desktop List View widget in your add-ins to display data in lists that are hosted on a SharePoint site.
ms.date: 12/20/2017
ms.prod: sharepoint
---

# Use the experimental Desktop List View widget in SharePoint Add-ins

You can use the Desktop List View widget on any webpage, even if the page is not hosted in SharePoint. Use the List View widget in your add-ins to display data in lists that are hosted on a SharePoint site.
 
> [!WARNING] 
> The Office Web Widgets - Experimental are only provided for research and feedback purposes. Do not use in production scenarios. The Office Web Widgets behavior may change significantly in future releases. Read and review the [Office Web Widgets - Experimental License Terms](office-web-widgetsexperimental-license-terms.md).

You can use the List View widget to display the data in a SharePoint list similar to the regular List View widget, but you can use it in your add-ins and websites that are not necessarily hosted in SharePoint.

<br/>

**Desktop List View widget displaying data in a list**

![Desktop List View experimental control on a page](../images/DesktopListView_basic.png)

<br/>

You can specify the view in the SharePoint list that you want to use to display the data. The List View widget displays the columns and items in the order specified by the view.

The List View widget uses the cross-domain library to get the list data. For this reason, communication happens at the client level.
 
> [!NOTE] 
> The Desktop List View widget doesn't enable all the scenarios of the native List View.

The following scenarios have not been enabled in the current version of the widget:

- Use the widget on authentication schemes that aren't natively supported by the cross-domain library.
- Use the widget with data sources other than SharePoint lists or libraries.
- Data bind the widget.
- User touch-friendly views.
- User inline-editing.
- Show presence information.
- Provide custom rendering templates.
- On-premises scenarios. At this moment, the widget only works on SharePoint Online.


## Prerequisites for using the examples in this article

To follow the examples in this article, you need the following:

- Visual Studio 2013 or later

- NuGet Package Manager. For more information, see  [Installing NuGet client tools](https://docs.microsoft.com/en-us/nuget/guides/install-nuget).
    
- A SharePoint development environment (app isolation required for on-premises scenarios). 
    
- Office Web Widgets - Experimental NuGet package. For more information about how to install a NuGet package, see [NuGet Package Manager UI](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui). You can also browse the [NuGet gallery page](https://www.nuget.org/packages/Microsoft.Office.WebWidgets.Experimental/).
    
## Use the Desktop List View widget in a provider-hosted SharePoint Add-in

In this example, there is a simple page hosted outside of SharePoint that declares a Desktop List View widget.

To use the List View widget, you must do the following:

- Create SharePoint Add-in and web projects.
    
- Create a list on the add-in web. This step also ensures that an add-in web is created when users deploy the add-in.
    
    > [!NOTE] 
    > The cross-domain library requires the existence of an add-in web. The List View widget communicates with SharePoint by using the cross-domain library.

- Create an add-in page that declares a List View widget instance using HTML markup.

### To create a SharePoint Add-in and web projects

1. Open Visual Studio as administrator. (To do this, select the Visual Studio icon on the **Start** menu, and select **Run as administrator**.)

2. Create a new project by using the **SharePoint Add-in** template. The SharePoint Add-in template is located under **Templates** > **Visual C#** > **Office/SharePoint** > **Add-ins**.

3. Provide the SharePoint website URL that you want to use for debugging.

4. Select **Provider-hosted** as the hosting option for your add-in.
    
    > [!NOTE] 
    > You can also use the Desktop List View widget with other hosting options or even with Office Add-ins or your own website.

5. Select **ASP.NET Web Forms Application** as the type of web application project.
 
6. Select **Windows Azure Access Control Service** as the authentication option.
    
 

### To create a list on the add-in web

1. Select the SharePoint Add-in project in **Solution Explorer**, and then select **Add** > **New Item**.
    
2. Select **Visual C# Items** > **Office/SharePoint** > **List**. Enter **Announcements** in the **Name** text box, and then select **Add**.
 
3. Select **Create a list instance based on an existing list template**. Select the **Announcements** template, and then select **Finish**.
    
 

### To add a new page that uses the Desktop List View widget


1. Select the **Pages** folder in the web project in **Solution Explorer**.
    
 
2. Copy the following code and paste it in an **ASPX** file in the project. The code performs the following tasks:
    
    - Adds references to the required Office libraries and resources.

    - Provides a placeholder for the List View widget.

    - Initializes the controls runtime.

    - Runs the **renderAll** method of the Office Controls runtime.
        
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
        <!-- IE9 or superior -->
        <meta http-equiv="x-ua-compatible" content="IE=10">
        <title>Desktop List View HTML Markup</title>

        <!-- Controls Specific CSS File -->
        <link rel="stylesheet" type="text/css" href="/Scripts/Office.Controls.css" />

        <!-- Ajax, jQuery, and utils -->
        <script 
            src=" https://ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js.js">
        </script>
        <script 
            src=" https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.9.1.min.js">
        </script>
        <script type="text/javascript">

            // Function to retrieve a query string value.
            // For production purposes you may want to use
            //  a library to handle the query string.
            function getQueryStringParameter(paramToRetrieve) {
                var params =
                    document.URL.split("?")[1].split("&amp;");
                var strParams = "";
                for (var i = 0; i < params.length; i = i + 1) {
                    var singleParam = params[i].split("=");
                    if (singleParam[0] == paramToRetrieve)
                        return singleParam[1];
                }
            }
        </script>

        <!-- Cross-Domain Library and Office controls runtime -->
        <script type="text/javascript">
            //Register namespace and variables used through the sample
            Type.registerNamespace("Office.Samples.ListViewBasic");
            //Retrieve context tokens from the querystring
            Office.Samples.ListViewBasic.appWebUrl =
                decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
            Office.Samples.ListViewBasic.hostWebUrl =
                decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            Office.Samples.ListViewBasic.ctag =
                decodeURIComponent(getQueryStringParameter("SPClientTag"));

            //Pattern to dynamically load JSOM and the cross-domain library
            var scriptbase =
                Office.Samples.ListViewBasic.hostWebUrl + "/_layouts/15/";

            //Get the cross-domain library
            $.getScript(scriptbase + "SP.RequestExecutor.js", 
                //Get the Office controls runtime and 
                //  continue to the createControl function
                function () {
                    $.getScript("../Scripts/Office.Controls.js", createControl);
                }
            );
        </script>

        <!-- List View -->
        <script 
            src="../Scripts/Office.Controls.ListView.debug.js" 
            type="text/javascript">
        </script>

        <!-- SharePoint CSS -->
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                // The resource files are in a URL in the form:
                // web_url/_layouts/15/Resource.ashx
                var scriptbase =
                    Office.Samples.ListViewBasic.appWebUrl + "/_layouts/15/";

                // Dynamically create the invisible iframe.
                var blankiframe;
                var blankurl;
                var body;
                blankurl =
                    Office.Samples.ListViewBasic.appWebUrl + "/Pages/blank.html";
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
                dclink.setAttribute("href",
                                    scriptbase +
                                    "defaultcss.ashx?ctag=" +
                                    Office.Samples.ListViewBasic.ctag
                                    );
                head = document.getElementsByTagName("head");
                head[0].appendChild(dclink);
            }, false);
        </script>
    </head>
    <body>
        Basic List View sample (HTML markup declaration):
        <div id="ListViewDiv"
            data-office-control="Office.Controls.ListView"
            data-office-options='{"listUrl" : getListUrl()}'>
        </div>

        <script type="text/javascript">
            function createControl() {
                //Initialize Controls Runtime
                Office.Controls.Runtime.initialize({
                    sharePointHostUrl: Office.Samples.ListViewBasic.hostWebUrl,
                    appWebUrl: Office.Samples.ListViewBasic.appWebUrl
                });

                //Render the widget, this must be executed after the
                //placeholder DOM is loaded
                Office.Controls.Runtime.renderAll();
            }

            function getListUrl() {
                return Office.Samples.ListViewBasic.appWebUrl +
                        "/_api/web/lists/getbytitle('Announcements')";
            }
        </script>
    </body>
    </html>
    ```

<br/>

> [!NOTE] 
> The code example above explicitly specifies the host web and add-in web URLs to initialize the Office controls runtime. However, if the add-in web and host web URLs are specified in the **SPAppWebUrl** and **SPHostUrl** query string parameters respectively, you can pass an empty object and the code attempts to get the parameters automatically. The **SPAppWebUrl** and **SPHostUrl** parameters are included in the query string when you use the **{StandardTokens}** token.
 
<br/>

The following example shows you how to pass an empty object to the initialize method:

```
// Initialize with an empty object and the code 
// will attempt to get the tokens from the
// query string directly.
Office.Controls.Runtime.initialize({});
```

<br/>

### To build and run the solution


1. Select the F5 key.
    
    > [!NOTE] 
    > When you select F5, Visual Studio builds the solution, deploys the add-in, and opens the permissions page for the add-in.

2. Select the **Trust It** button.
    
3. Select the add-in icon on the **Site Contents** page.
    
To download this sample from the code gallery, see the [Use the Desktop List View experimental widget in an add-in](https://code.msdn.microsoft.com/office/sharepoint-2013-use-the-c3edb076) code sample.
 
## Next steps

This article shows how to use the Desktop List View widget in your add-in by using HTML. You can also explore the following scenarios and details about the widget.

### Use JavaScript to declare the Desktop List View widget

Depending on your preference, you might want to use JavaScript instead of HTML to declare the widget. If this is the case, you can use the following markup as the placeholder for the widget.

```HTML
<div id="ListViewDiv"></div>
```

<br/>

Use the following JavaScript code to instantiate the List View.

```js
new Office.Controls.ListView(
    document.getElementById("ListViewDiv"), {
        listUrl: Office.Samples.ListViewBasic.appWebUrl + "/_api/web/lists/getbytitle('Announcements')"
    });
```

<br/>

For an example that shows how to perform the tasks, see the **JSSimple.html** page in the [Use the Desktop List View experimental widget in an add-in](https://code.msdn.microsoft.com/office/sharepoint-2013-use-the-c3edb076) code sample.

### Specify a view to display the data

To specify a view in your SharePoint list, the List View widget displays the data using the view specification.

If you're using HTML markup to declare the widget, you can use the following syntax to specify a view.

```HTML
<div id="ListViewDiv"
        data-office-control="Office.Controls.ListView"
        data-office-options="{listUrl: 'list URL',
                            viewID: 'GUID'
                            }">
</div> 

```

<br/>

If you're declaring the widget using JavaScript, use the following syntax to specify a view.

```js
new Office.Controls.ListView(
    document.getElementById("ListViewDiv"), {
        listUrl: "list URL",
        viewID: "GUID"
    });
```

<br/>

You can use the experimental Desktop List View widget to display data in SharePoint lists. The widget displays data in read-only mode. Please provide ideas and comments at the [Office Developer Platform UserVoice site](http://officespdev.uservoice.com/).
 

## See also
<a name="bk_addresources"> </a>

-  [Use the experimental People Picker widget in SharePoint Add-ins](use-the-experimental-people-picker-widget-in-sharepoint-add-ins.md)
-  [Office Web Widgets - Experimental overview](office-web-widgetsexperimental-overview.md)
-  [Create UX components in SharePoint](create-ux-components-in-sharepoint.md)
 

