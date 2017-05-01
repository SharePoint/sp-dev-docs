---
title: How to Create report editors for PerformancePoint Services in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: b42b4452-90f8-464c-828f-d3abac40670c
---


# How to: Create report editors for PerformancePoint Services in SharePoint 2013
Learn how to create the editor component of a custom report extension for PerformancePoint Services.
## What are custom report editors for PerformancePoint Services?
<a name="bi_intro"> </a>

In PerformancePoint Services, custom report editors enable users to set properties on custom reports. Report editors also initialize the report endpoint, which receives parameter values from scorecard and filter providers. For more information about editor requirements and functionality, see  [Editors for Custom PerformancePoint Services Objects](http://msdn.microsoft.com/library/7c5924f1-91f3-436a-9d94-2e0dc454c8cc%28Office.15%29.aspx).
  
    
    
The following procedures and examples are based on the **SampleReportViewEditor** class from the [custom objects sample](http://msdn.microsoft.com/library/af021d52-7562-4e7a-9de4-e1fc5784a59d%28Office.15%29.aspx). The editor is a thin web application that enables users to modify the report's name and description. For the complete code for the class, see  [Code example: Create, retrieve, and update custom PerformancePoint Services reports in SharePoint Server 2013](#bk_example).
  
    
    
We recommend that you use the sample editor as a template. The sample shows how to call objects in the PerformancePoint Services API, provides helper objects that simplify calls for repository operations (such as creating and updating objects), and demonstrates best practices for PerformancePoint Services development.
  
    
    

## Create editors for custom PerformancePoint Services reports
<a name="BKMK_ConfigREditor"> </a>


  
    
    

1. Install PerformancePoint Services, or copy the DLLs that your extension uses (listed in step 3) to your computer. For more information, see  [DLLs with Class Libraries](http://msdn.microsoft.com/library/41e92619-8253-481d-82f9-35b6a6abc477%28Office.15%29.aspx).
    
  
2. In Visual Studio, create a C# class library. If you have already created a class library for your extension, add a new C# class.
    
    You must sign your DLL with a strong name. In addition, ensure that all assemblies referenced by your DLL have strong names. For information about how to sign an assembly with a strong name and how to create a public/private key pair, see  [How to: Create a public/private key pair](http://msdn.microsoft.com/library/05026813-f3bd-4d7c-9e0b-fc588eb3d114.aspx).
    
  
3. Add the following DLLs as assembly references to the project:
    
  - Microsoft.PerformancePoint.Scorecards.Client.dll
    
  
  - Microsoft.PerformancePoint.Scorecards.ServerCommon.dll
    
  
  - Microsoft.PerformancePoint.Scorecards.Store.dll (used by helper classes)
    
  
  - Microsoft.SharePoint.dll (used by helper classes)
    
  

    The sample editor also contains assembly references to System.Web.dll and System.Web.Services.dll. Depending on your extension's functionality, other project references may be required.
    
  
4. Add the following classes from the sample to the project. The editor uses these helper classes to interact with the PerformancePoint Services repository:
    
  - DataSourceConsumerHelper.cs
    
  
  - ExtensionRepositoryHelper.cs
    
  
  - ReportViewRepositoryHelper.cs
    
  
  - IDataSourceConsumer.cs
    
  

    > **Note:**
      > The sample report obtains data from a filter, so it does not use **DataSourceConsumerHelper** or **IDataSourceConsumer** objects. However, if your report obtains data from a PerformancePoint Services data source, you can use the methods that are exposed by the **DataSourceConsumerHelper** class to retrieve data sources as described in [How to: Create filter editors for PerformancePoint Services in SharePoint 2013](how-to-create-filter-editors-for-performancepoint-services-in-sharepoint.md). 
5. In your editor class, add **using** directives for the following PerformancePoint Services namespaces:
    
  - **Microsoft.PerformancePoint.Scorecards**
    
  
  - **Microsoft.PerformancePoint.Scorecards.ServerCommon**
    
  

    Depending on your extension's functionality, other **using** directives may be required.
    
  
6. Inherit from the base class that supports your editor implementation. Because the sample report editor is a web application, it inherits from the  [Page](https://msdn.microsoft.com/library/System.Web.UI.Page.aspx) class. Other implementations can derive from base classes such as the [UserControl](https://msdn.microsoft.com/library/System.Windows.Forms.UserControl.aspx) or [WebPart](https://msdn.microsoft.com/library/System.Web.UI.WebControls.WebParts.WebPart.aspx) class.
    
  
7. Declare variables for the controls that expose the properties that you want users to view or modify. The sample report editor first declares variables for the web server controls that are defined in the user interface component, which is an ASPX page. The sample editor also defines a button control that enables users to submit changes. Then, the editor calls the  [CreateChildControls()](https://msdn.microsoft.com/library/System.Web.UI.Control.CreateChildControls.aspx) method to make the controls available on the page.
    
    > **Note:**
      > The editor defines programming logic separately from the user interface. Instructions for creating the user interface component of the editor are beyond the scope of this documentation. 

    The sample report editor performs steps 8 through 12 in the **Page_Load** method. **Page_Load** is also used to initialize and validate variables and controls, populate controls, and save state information for the custom report and helper objects.
    
  
8. Set the  [AllowUnsafeUpdates](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.ServerCommon.ServerUtils.AllowUnsafeUpdates.aspx) property to **true**. This enables the report editor to write data to the repository without using form **POST** operations.
    
  
9. Retrieve the parameters from the query string and set them as values for local variables, as shown in the following code example.
    
cs
  
// The URL of the site collection that contains the PerformancePoint Services repository.
string server = Request.QueryString[ClickOnceLaunchKeys.SiteCollectionUrl];

// The location of the report in the repository.
string itemLocation = Request.QueryString[ClickOnceLaunchKeys.ItemLocation];

// The operation to perform: OpenItem or CreateItem.
string action = Request.QueryString[ClickOnceLaunchKeys.LaunchOperation];



    For information about the query string parameters, see  [Editors for Custom PerformancePoint Services Objects](http://msdn.microsoft.com/library/7c5924f1-91f3-436a-9d94-2e0dc454c8cc%28Office.15%29.aspx).
    
  
10. Retrieve the **ReportViewRepositoryHelper** object, which is used to make calls to the repository, as shown in the following code example.
    
cs
  
reportviewRepositoryHelper = new ReportViewRepositoryHelper();


11. Set the report location based on the query string parameter, as shown in the following code example.
    
cs
  RepositoryLocation repositoryReportViewLocation = RepositoryLocation.CreateFromUriString(itemLocation);


12. Retrieve the operation to perform ( _OpenItem_ or _CreateItem_) from the query string, and then retrieve or create the custom report.
    
  - To retrieve the custom report, use the **ReportViewRepositoryHelper.Get** method.
    
  
  - To create the custom report, use the **ReportView()** constructor and then define the report's [Name](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Name.aspx) , [RendererClassName](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.ReportView.RendererClassName.aspx) , and [SubTypeId](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.ReportView.SubTypeId.aspx) properties.
    
     [SubTypeId](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.ReportView.SubTypeId.aspx) is the unique identifier for the report, and it must match the **subType** attribute that you specify for your custom report in the PerformancePoint Services web.config file. [RendererClassName](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.ReportView.RendererClassName.aspx) is the fully qualified name of the class that defines the renderer web server control. If not defined in the editor, this value defaults to the renderer class specified in the web.config file.
    
  

cs
  if (ClickOnceLaunchValues.OpenItem.Equals(action, StringComparison.OrdinalIgnoreCase))
    {

        // Use the repository-helper object to retrieve the report.
        reportview = reportviewRepositoryHelper.Get(repositoryReportViewLocation);
        if (reportview == null)
        {
            displayError("Could not retrieve the report view for editing.");
            return;
        }
    }
    else if (ClickOnceLaunchValues.CreateItem.Equals(action, StringComparison.OrdinalIgnoreCase))
    {
        reportview = new ReportView
        {
            RendererClassName = typeof(SampleReportRenderer).AssemblyQualifiedName, 
            SubTypeId = "SampleReportView"
        };
    }
    else
    {
        displayError("Invalid Action.");
        return;
    }



    > **Note:**
      > By default, users can create custom objects from PerformancePoint Dashboard Designer only. To enable users to create a custom object outside of Dashboard Designer, you must add a menu item that sends a  _CreateItem_ request to your editor from the content type in the repository. For more information, see [Editors for Custom PerformancePoint Services Objects](http://msdn.microsoft.com/library/7c5924f1-91f3-436a-9d94-2e0dc454c8cc%28Office.15%29.aspx). 
13. Define the report's endpoint, which enables the report to receive data from filters and scorecards. The sample report editor defines the required properties for the endpoint, as shown in the following code example.
    
cs
  
if (0 == reportview.EndPoints.Count)
{
    EndPoint endpoint = new EndPoint
    {
        Category = EndPointCategory.None,
        UniqueName = "SampleReportView_EndPoint",

        // The display name is shown to users in Dashboard Designer.
        // It represents the endpoint that can be connected 
        // to a filter or scorecard.
        DisplayName = "Sample Report View EndPoint"
    };

    reportview.EndPoints.Add(endpoint);
}



    The sample editor defines the endpoint in the **VerifyReportView** method. It also uses **VerifyReportView** to verify that required properties are set and to define the optional [CustomData](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.ReportView.CustomData.aspx) property, which you can use to store information for your report.
    
  
14. Update the report with user-defined changes. The **buttonOK_Click** method in the sample report editor calls the **ReportViewRepositoryHelper.Update** method to update the report's [Name](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Name.aspx) and [Description](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Description.aspx) properties in the repository. **buttonOK_Click** is also used to validate the contents of the controls and retrieve state information for the custom report and the helper object.
    
    > **Note:**
      > Users can edit a custom object's  [Name](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Name.aspx) , [Description](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Description.aspx) , and [Owner](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Owner.aspx) ( **Person Responsible**) properties and delete custom objects directly from Dashboard Designer and the PerformancePoint Services repository. 

## Code example: Create, retrieve, and update custom PerformancePoint Services reports in SharePoint Server 2013
<a name="bk_example"> </a>

The following code example creates, retrieves, and updates custom reports. This code is from the editor's code-behind class, which provides the programming logic for controls that are defined in an ASPX page.
  
    
    
Before you can compile this code example, you must configure your development environment as described in  [Create editors for custom PerformancePoint Services reports](#BKMK_ConfigREditor).
  
    
    



```cs

using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.PerformancePoint.Scorecards;
using Microsoft.PerformancePoint.Scorecards.ServerCommon;

namespace Microsoft.PerformancePoint.SDK.Samples.SampleReport
{

    // Represents the class that defines the sample report editor. 
    public class SampleReportViewEditor : Page
    {

        // Declare private variables for the ASP.NET controls defined in the user interface.
        // The sample's user interface is an ASPX page that defines the controls in HTML.
        private TextBox textboxName;
        private TextBox textboxDescription;
        private Label labelErrorMessage;
        private Button buttonOK;

        // Make the controls available to this class.
        protected override void CreateChildControls()
        {
            base.CreateChildControls();

            if (null == textboxName)
                textboxName = FindControl("textboxName") as TextBox;
            if (null == textboxDescription)
                textboxDescription = FindControl("textboxDescription") as TextBox;
            if (null == labelErrorMessage)
                labelErrorMessage = FindControl("labelErrorMessage") as Label;
            if (null == buttonOK)
                buttonOK = FindControl("buttonOK") as Button;
        }

        // Handles the Load event of the Page control.
        // Methods that use a control variable should call the Control.EnsureChildControls
        // method before accessing the variable for the first time.
        protected void Page_Load(object sender, EventArgs e)
        {

            // Required to enable custom report and filter editors to
            // write data to the repository.
            ServerUtils.AllowUnsafeUpdates = true;

            // Initialize controls the first time the page loads only.
            if (!IsPostBack)
            {
                EnsureChildControls();
                ReportViewRepositoryHelper reportviewRepositoryHelper = null;
                try
                {

                    // Get information from the query string parameters.
                    string server = Request.QueryString[ClickOnceLaunchKeys.SiteCollectionUrl];
                    string itemLocation = Request.QueryString[ClickOnceLaunchKeys.ItemLocation];
                    string action = Request.QueryString[ClickOnceLaunchKeys.LaunchOperation];

                    // Validate the query string parameters.
                    if (string.IsNullOrEmpty(server) ||
                        string.IsNullOrEmpty(itemLocation) ||
                        string.IsNullOrEmpty(action))
                    {
                        displayError("Invalid URL.");
                        return;
                    }

                    // Retrieve the repository-helper object.
                    reportviewRepositoryHelper =
                        new ReportViewRepositoryHelper();

                    // Set the report location by using the location from the query string.
                    RepositoryLocation repositoryReportViewLocation = RepositoryLocation.CreateFromUriString(itemLocation);

                    ReportView reportview;

                    // Retrieve or create the report object, depending on the operation
                    // passed in the query string (OpenItem or CreateItem).
                    if (ClickOnceLaunchValues.OpenItem.Equals(action, StringComparison.OrdinalIgnoreCase))
                    {

                        // Retrieve the report object by using the repository-helper object.
                        reportview = reportviewRepositoryHelper.Get(repositoryReportViewLocation);
                        if (reportview == null)
                        {
                            displayError("Could not retrieve the report view for editing.");
                            return;
                        }
                    }
                    else if (ClickOnceLaunchValues.CreateItem.Equals(action, StringComparison.OrdinalIgnoreCase))
                    {

                        // Create a report view.
                        // CreateItem requests can be sent from a SharePoint list, but
                        // you must create a custom menu item to send the request.
                        // Dashboard Designer can send edit requests only.
                        reportview = new ReportView
                        {
                            RendererClassName = typeof(SampleReportRenderer).AssemblyQualifiedName, 
                            SubTypeId = "SampleReportView"
                        };
                    }
                    else
                    {
                        displayError("Invalid Action.");
                        return;
                    }

                    VerifyReportView(reportview);

                    // Save the original report and helper objects across page postbacks.
                    ViewState["action"] = action;
                    ViewState["reportview"] = reportview;
                    ViewState["reportviewrepositoryhelper"] = reportviewRepositoryHelper;
                    ViewState["itemlocation"] = itemLocation;

                    // Populate the child controls.
                    textboxName.Text = reportview.Name.ToString();
                    textboxDescription.Text = reportview.Description.ToString();
                }
                catch (Exception ex)
                {
                    displayError("An error has occurred. Please contact your administrator for more information.");
                    if (reportviewRepositoryHelper != null)
                    {

                        // Add the exception detail to the server event log.
                        reportviewRepositoryHelper.HandleException(ex);
                    }
                }
            }
        }

        // Handles the Click event of the buttonOK control.
        protected void buttonOK_Click(object sender, EventArgs e)
        {
            EnsureChildControls();

            // Verify that the textboxName control contains a value.
            if (string.IsNullOrEmpty(textboxName.Text))
            {
                labelErrorMessage.Text = "A report view name is required.";
                return;
            }

            // Clear any pre-existing error message.
            labelErrorMessage.Text = string.Empty;

            // Retrieve the report and helper objects from view state.
            string action = (string)ViewState["action"];
            string itemLocation = (string) ViewState["itemlocation"];
            ReportView reportview = (ReportView)ViewState["reportview"];
            ReportViewRepositoryHelper reportviewRepositoryHelper = (ReportViewRepositoryHelper)ViewState["reportviewrepositoryhelper"];

            // Update the report object with form changes.
            reportview.Name.Text = textboxName.Text;
            reportview.Description.Text = textboxDescription.Text;

            // Save the report object to the PerformancePoint Services repository.
            try
            {
                reportview.Validate();
                if (ClickOnceLaunchValues.CreateItem.Equals(action, StringComparison.OrdinalIgnoreCase))
                {
                    reportview.CreatedDate = DateTime.Now;
                    ReportView newReportView = reportviewRepositoryHelper.Create(
                        string.IsNullOrEmpty(reportview.Location.ItemUrl) ? itemLocation : reportview.Location.ItemUrl, 
                        reportview);
                    ViewState["reportview"] = newReportView;
                    ViewState["action"] = ClickOnceLaunchValues.OpenItem;
                }
                else
                {
                    reportviewRepositoryHelper.Update(reportview);
                }
            }
            catch (Exception ex)
            {
                displayError("An error has occurred. Please contact your administrator for more information.");
                if (reportviewRepositoryHelper != null)
                {
                    // Add the exception detail to the server event log.
                    reportviewRepositoryHelper.HandleException(ex);
                }
            }
        }

        // Displays the error string in the labelErrorMessage label. 
        void displayError(string msg)
        {
            EnsureChildControls();

            labelErrorMessage.Text = msg;

            // Disable the OK button because the page is in an error state.
            buttonOK.Enabled = false;
            return;
        }

        // Verifies that the properties for the report object are set.
        static void VerifyReportView(ReportView reportview)
        {

            // Verify that all required properties are set. 
            if (string.IsNullOrEmpty(reportview.SubTypeId))
            {

                // This value must match the subType attribute specified
                // in the web.config file.
                reportview.SubTypeId = "SampleReportView";
            }

            if (string.IsNullOrEmpty(reportview.RendererClassName))
            {
                reportview.RendererClassName = typeof (SampleReportRenderer).AssemblyQualifiedName;
            }

            // Reports are consumers and do not use provider endpoints.
           reportview.BeginPoints.Clear();

            // If there are no consumer endpoints, create one so we can connect a filter or a scorecard to the report.
            if (0 == reportview.EndPoints.Count)
            {
                EndPoint endpoint = new EndPoint
                {
                    Category = EndPointCategory.None,
                    UniqueName = "SampleReportView_EndPoint",

                    // The display name is shown to users in Dashboard
                    // Designer to represent the endpoint that can be 
                    // connected to a filter or scorecard.
                    DisplayName = "Sample Report View EndPoint"
                };

                reportview.EndPoints.Add(endpoint);
            }
            
            // Set optional properties for reports.
            reportview.CustomData = "You can use this property to store custom information for this filter as a string or a serialized object.";
        }
    }
}
```


## Next steps
<a name="bk_next"> </a>

After you create a report editor (including its user interface, if required) and a report renderer, deploy the extension as described in  [How to: Manually Register PerformancePoint Services Extensions](http://msdn.microsoft.com/library/3aa6d340-4b05-46b3-9648-2b6e18e04e09%28Office.15%29.aspx).
  
    
    

## Additional resources
<a name="bk_addResources"> </a>


-  [How to: Create report renderers for PerformancePoint Services in SharePoint 2013](how-to-create-report-renderers-for-performancepoint-services-in-sharepoint.md)
    
  
-  [PerformancePoint Services in SharePoint 2013](performancepoint-services-in-sharepoint.md)
    
  

