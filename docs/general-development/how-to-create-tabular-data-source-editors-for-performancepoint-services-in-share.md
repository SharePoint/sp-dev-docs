---
title: How to Create tabular data source editors for PerformancePoint Services in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 3136420a-f8a2-4677-8b69-1d5d9705d96f
---


# How to: Create tabular data source editors for PerformancePoint Services in SharePoint 2013
Learn how to create the editor component of a custom tabular data source extension for PerformancePoint Services.
## What are custom data source editors for PerformancePoint Services?
<a name="bk_intro"> </a>

In PerformancePoint Services, custom data source editors enable users to set properties on custom tabular data sources. For more information about editor requirements and functionality, see  [Editors for Custom PerformancePoint Services Objects](http://msdn.microsoft.com/library/7c5924f1-91f3-436a-9d94-2e0dc454c8cc%28Office.15%29.aspx).
  
    
    
The following procedures and code examples are based on the **SampleDataSourceEditor** class from the [custom objects sample](http://msdn.microsoft.com/library/af021d52-7562-4e7a-9de4-e1fc5784a59d%28Office.15%29.aspx). The editor is a thin web application that enables users to modify the name and description of the data source, enter stock symbols, and to specify a proxy server address and cache file location. For the complete code for the class, see  [Code example: Retrieve and update custom tabular data sources](#BKMK_ExampleCode).
  
    
    
We recommend that you use the sample editor as a template. The sample shows how to call objects in the PerformancePoint Services API, provides helper objects that simplify calls for repository operations (such as creating and updating objects), and demonstrates best practices for PerformancePoint Services development.
  
    
    

## Create editors for custom PerformancePoint Services tabular data sources
<a name="BKMK_ConfigDSEditor"> </a>


  
    
    

1. Install PerformancePoint Services, or copy the DLLs that your extension uses (listed in step 3) to your computer. For more information, see  [DLLs with Class Libraries](http://msdn.microsoft.com/library/41e92619-8253-481d-82f9-35b6a6abc477%28Office.15%29.aspx).
    
  
2. In Visual Studio, create a C# class library. If you have already created a class library for your extension, add a new C# class.
    
    You must sign your DLL with a strong name. In addition, ensure that all assemblies referenced by your DLL have strong names. For information about how to sign an assembly with a strong name and how to create a public/private key pair, see  [How to: Create a public/private key pair](http://msdn.microsoft.com/library/05026813-f3bd-4d7c-9e0b-fc588eb3d114.aspx).
    
  
3. Add the following DLLs as assembly references to the project:
    
  - Microsoft.PerformancePoint.Scorecards.Client.dll
    
  
  - Microsoft.SharePoint.dll (used by helper classes)
    
  

    The sample editor also contains assembly references to System.Core.dll, System.Web.dll, System.Web.Services.dll, and System.Xml.Linq.dll. Depending on your extension's functionality, other project references may be required.
    
  
4. Add the following classes from the sample to the project. Your editor uses these helper classes to interact with the PerformancePoint Services repository and the cache file:
    
  - ExtensionRepositoryHelper.cs
    
  
  - DataSourceRepositoryHelper.cs
    
  
  - SampleDSCacheHandler.cs
    
  
5. In your editor class, add a **using** directive for the **Microsoft.PerformancePoint.Scorecards** namespace. Depending on your extension's functionality, other **using** directives may be required.
    
  
6. Inherit from the base class that supports your editor implementation. Because the sample data source editor is a web application, it inherits from the  [Page](https://msdn.microsoft.com/library/System.Web.UI.Page.aspx) class. Other implementations can derive from base classes such as the [UserControl](https://msdn.microsoft.com/library/System.Windows.Forms.UserControl.aspx) or [WebPart](https://msdn.microsoft.com/library/System.Web.UI.WebControls.WebParts.WebPart.aspx) class.
    
  
7. Declare variables for the controls that expose the properties that you want users to view or modify. The sample data source editor first declares variables for the web server controls that are defined in the user interface component, which is an ASPX page. The sample editor also defines a button control that enables users to submit changes. Then, the editor calls the  [CreateChildControls()](https://msdn.microsoft.com/library/System.Web.UI.Control.CreateChildControls.aspx) method to make the controls available on the page.
    
    > **Note:**
      > The editor defines programming logic separately from the user interface. Instructions for creating the user interface component of the editor are beyond the scope of this documentation. 

    The sample data source editor performs steps 8 through 11 in the **Page_Load** method. **Page_Load** is also used to initialize and validate variables and controls, populate controls, and save state information for the custom data source and helper objects.
    
  
8. Retrieve the parameters from the query string and set them as values for local variables, as shown in the following code example.
    
cs
  
// The URL of the site collection that contains the PerformancePoint Services repository.
string server = Request.QueryString[ClickOnceLaunchKeys.SiteCollectionUrl];

// The location of the data source in the repository.
string itemLocation = Request.QueryString[ClickOnceLaunchKeys.ItemLocation];

// The operation to perform: OpenItem or CreateItem.
string action = Request.QueryString[ClickOnceLaunchKeys.LaunchOperation];



    For information about the query string parameters, see  [Editors for Custom PerformancePoint Services Objects](http://msdn.microsoft.com/library/7c5924f1-91f3-436a-9d94-2e0dc454c8cc%28Office.15%29.aspx).
    
  
9. Retrieve the **DataSourceRepositoryHelper** object that is used to make calls to the repository, as shown in the following code example.
    
cs
  
DataSourceRepositoryHelper = new DataSourceRepositoryHelper();


10. Set the data source location based on the query string parameter, as shown in the following code example.
    
cs
  RepositoryLocation repositoryDataSourceLocation = RepositoryLocation.CreateFromUriString(itemLocation);


11. Retrieve the operation to perform ( _OpenItem_ or _CreateItem_) from the query string, and then retrieve or create the custom data source.
    
  - To retrieve the custom data source, use the **DataSourceRepositoryHelper.Get** method.
    
  
  - To create the custom data source, use the **DataSource()** constructor and then define the data source's [Name](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Name.aspx) and [SubTypeId](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSource.SubTypeId.aspx) properties. [SubTypeId](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSource.SubTypeId.aspx) is the unique identifier for the data source, and it must match the **subType** attribute that you specify for your custom data source in the PerformancePoint Services web.config file.
    
    > **Note:**
      > The sample data source editor does not include logic to create a data source object. For examples of creating a custom object, see  [How to: Create report editors for PerformancePoint Services in SharePoint 2013](how-to-create-report-editors-for-performancepoint-services-in-sharepoint.md) or [How to: Create filter editors for PerformancePoint Services in SharePoint 2013](how-to-create-filter-editors-for-performancepoint-services-in-sharepoint.md). 

cs
  if (ClickOnceLaunchValues.OpenItem.Equals(action, StringComparison.OrdinalIgnoreCase))
{
    // Use the repository-helper object to retrieve the data source.
    datasource = dataSourceRepositoryHelper.Get(repositoryDataSourceLocation);
    if (datasource == null)
    {
        displayError("Could not retrieve the data source for editing.");
        return;
    }
}
else
{
    displayError("Invalid Action.");
    return;
}



    > **Note:**
      > By default, users can create custom objects from PerformancePoint Dashboard Designer only. To enable users to create a custom object outside of Dashboard Designer, you must add a menu item that sends a  _CreateItem_ request to your editor from the content type in the repository. For more information, see [Editors for Custom PerformancePoint Services Objects](http://msdn.microsoft.com/library/7c5924f1-91f3-436a-9d94-2e0dc454c8cc%28Office.15%29.aspx). 

    The sample data source editor performs steps 12 and 13 in the **buttonOK_Click** and **CreateCacheFile** methods. **buttonOK_Click** is also used to call the **AreAllInputsValid** method to validate the contents of the controls and to retrieve state information for the custom data source and the helper object.
    
  
12. Update the data source with user-defined changes. The sample data source editor calls the **DataSourceRepositoryHelper.Update** method to update the [Name](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Name.aspx) , [Description](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Description.aspx) , and [CustomData](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSource.CustomData.aspx) properties of the data source object in the repository. You can use [CustomData](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSource.CustomData.aspx) to store a serialized object or string. The sample editor uses it to store user-defined stock symbols, the location of the cache file that stores stock quote values, and the address of the proxy server.
    
    > **Note:**
      > Users can edit a custom object's  [Name](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Name.aspx) , [Description](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Description.aspx) , and [Owner](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Element.Owner.aspx) ( **Person Responsible**) properties and delete custom objects directly from Dashboard Designer and the PerformancePoint Services repository. 
13. Call the data source provider to define column mappings if they are not already defined.
    
  

## Code example: Retrieve and update custom PerformancePoint Services tabular data sources in SharePoint Server 2013
<a name="bk_example"> </a>

The following code example retrieves and updates custom tabular data sources. This code is from the editor's code-behind class, which provides the programming logic for controls that are defined in an ASPX page.
  
    
    
Before you can compile this code example, you must configure your development environment as described in  [Create and configure the editor class for a tabular data source editor in PerformancePoint Services](#BKMK_DefineDSEd).
  
    
    



```cs

using System;
using System.IO;
using System.Web.UI;
using System.Web.UI.WebControls;
using Microsoft.PerformancePoint.Scorecards;
using System.Xml.Linq;

namespace Microsoft.PerformancePoint.SDK.Samples.SampleDataSource
{
    // Represents the class that defines the sample data source editor.
    public class SampleDataSourceEditor : Page
    {

        #region Members
        // Declare private variables for the ASP.NET controls defined in the user interface.
        // The user interface is an ASPX page that defines the controls in HTML.
        private TextBox textboxName;
        private TextBox textboxDescription;
        private TextBox textboxStockSymbols;
        private TextBox textboxXMLLocation;
        private TextBox textboxProxy;
        private Label labelErrorMessage;
        private Button buttonOK;
        #endregion

        #region Page methods and events
        // Make the controls available to this class.
        protected override void CreateChildControls()
        {
            base.CreateChildControls();

            if (null == textboxProxy)
                textboxProxy = FindControl("textboxProxy") as TextBox;
            if (null == textboxName)
                textboxName = FindControl("textboxName") as TextBox;
            if (null == textboxDescription)
                textboxDescription = FindControl("textboxDescription") as TextBox;
            if (null == textboxStockSymbols)
                textboxStockSymbols = FindControl("textboxStockSymbols") as TextBox;
            if (null == textboxXMLLocation)
                textboxXMLLocation = FindControl("textboxXMLLocation") as TextBox;
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
            // Initialize controls the first time the page loads only.
            if (!IsPostBack)
            {
                EnsureChildControls();

                DataSourceRepositoryHelper dataSourceRepositoryHelper = null;
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
                    dataSourceRepositoryHelper =
                        new DataSourceRepositoryHelper();

                    // Set the data source location.
                    RepositoryLocation repositoryDataSourceLocation = RepositoryLocation.CreateFromUriString(itemLocation);

                    DataSource datasource;

                    // Retrieve the data source object by
                    // using the repository-helper object.
                    if (ClickOnceLaunchValues.OpenItem.Equals(action, StringComparison.OrdinalIgnoreCase))
                    {
                        datasource = dataSourceRepositoryHelper.Get(repositoryDataSourceLocation);
                        if (datasource == null)
                        {
                            displayError("Could not retrieve the data source for editing.");
                            return;
                        }
                    }
                    else
                    {
                        displayError("Invalid Action.");
                        return;

                    }

                    // Save the original data source and helper objects across page postbacks.
                    ViewState["action"] = action;
                    ViewState["datasource"] = datasource;
                    ViewState["datasourcerepositoryhelper"] = dataSourceRepositoryHelper;

                    // Populate the child controls.
                    if (null != datasource.Name)
                        textboxName.Text = datasource.Name.ToString();

                    if (null != datasource.Description)
                        textboxDescription.Text = datasource.Description.ToString();

                    if (null != datasource.CustomData)
                    {
                        string[] splitCustomData = datasource.CustomData.Split('&amp;');
                        if (splitCustomData.Length > 2)
                        {
                            textboxStockSymbols.Text = splitCustomData[0];
                            textboxXMLLocation.Text = splitCustomData[1].Replace(@"\\SampleStockQuotes.xml", string.Empty);
                            textboxProxy.Text = splitCustomData[2];
                        }
                    }
                }
                catch (Exception ex)
                {
                    displayError("An error has occurred. Please contact your administrator for more information.");
                    if (dataSourceRepositoryHelper != null)
                    {
                        // Add the exception detail to the server
                        // event log.
                        dataSourceRepositoryHelper.HandleException(ex);
                    }
                }
            }
        }

        // Handles the Click event of the buttonOK control.
        protected void buttonOK_Click(object sender, EventArgs e)
        {
            EnsureChildControls();

            // Verify that the required fields contain values.
            if (!AreAllInputsValid())
                return;

            // Clear any pre-existing error message.
            labelErrorMessage.Text = string.Empty;

            // Retrieve the data source and helper objects from view state.
            string action = (string)ViewState["action"];
            DataSource datasource = (DataSource)ViewState["datasource"];
            DataSourceRepositoryHelper datasourcerepositoryhelper = (DataSourceRepositoryHelper)ViewState["datasourcerepositoryhelper"];

            // Update the data source object with form changes.
            datasource.Name.Text = textboxName.Text;
            datasource.Description.Text = textboxDescription.Text;

            // Define column mappings if they aren't already defined.
            if (datasource.DataTableMapping.ColumnMappings.Count <= 0)
            {
                datasource.DataTableMapping = WSTabularDataSourceProvider.CreateDataColumnMappings();
            }

            // Save the data source to the repository
            // by using the repository-helper object.
            try
            {
                CreateCacheFile(datasource);

                datasource.Validate();

                if (ClickOnceLaunchValues.OpenItem.Equals(action, StringComparison.OrdinalIgnoreCase))
                {
                    datasourcerepositoryhelper.Update(datasource);
                }
                else
                {
                    displayError("Invalid Action.");
                }
            }
            catch (Exception ex)
            {
                displayError("An error has occurred. Please contact your administrator for more information.");
                if (datasourcerepositoryhelper != null)
                {
                    // Add the exception detail to the server event log.
                    datasourcerepositoryhelper.HandleException(ex);
                }
            }
        }
        #endregion

        #region Helper methods
        // Display the error string in the labelErrorMessage label.
        void displayError(string msg)
        {
            EnsureChildControls();

            labelErrorMessage.Text = msg;

            // Disable the OK button because the page is in an error state.
            buttonOK.Enabled = false;
            return;
        }

        // Validate the text box inputs.
        bool AreAllInputsValid()
        {
            if (string.IsNullOrEmpty(textboxProxy.Text))
            {
                labelErrorMessage.Text = "The proxy server address is required.";
                return false;
            }

            if (string.IsNullOrEmpty(textboxXMLLocation.Text))
            {
                labelErrorMessage.Text = "The location to save the cache file to is required.";
                return false;
            }

            if (string.IsNullOrEmpty(textboxName.Text))
            {
                labelErrorMessage.Text = "A data source name is required.";
                return false;
            }

            if (string.IsNullOrEmpty(textboxStockSymbols.Text))
            {
                labelErrorMessage.Text = "A stock symbol is required.";
                return false;
            }

            return true;
        }

        // Create the XML cache file at the specified location and
        // store it and the stock symbols in the CustomData
        // property of the data source.
        void CreateCacheFile(DataSource datasource)
        {
            string cacheFileLocation = string.Format("{0}\\\\{1}", textboxXMLLocation.Text.TrimEnd('\\\\'),
                                                     "SampleStockQuotes.xml");

            datasource.CustomData = string.Format("{0}&amp;{1}&amp;{2}", textboxStockSymbols.Text, cacheFileLocation, textboxProxy.Text);

            // Check if the cache file already exists.
            if (!File.Exists(cacheFileLocation))
            {
                // Create the cache file if it does not exist.
                XDocument doc = SampleDSCacheHandler.DefaultCacheFileContent;
                doc.Save(cacheFileLocation);
            }
        }
        #endregion
    }
}
```


## Next steps
<a name="bk_next"> </a>

After you create a data source editor (including its user interface, if required) and data source provider, you deploy the extension as described in  [How to: Manually Register PerformancePoint Services Extensions](http://msdn.microsoft.com/library/3aa6d340-4b05-46b3-9648-2b6e18e04e09%28Office.15%29.aspx).
  
    
    

## Additional resources
<a name="bk_next"> </a>


-  [How to: Create tabular data source providers for PerformancePoint Services in SharePoint 2013](how-to-create-tabular-data-source-providers-for-performancepoint-services-in-sha.md)
    
  
-  [PerformancePoint Services in SharePoint 2013](performancepoint-services-in-sharepoint.md)
    
  

