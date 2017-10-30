---
title: How to Create filter data providers for PerformancePoint Services in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 25508ec6-86bf-4eea-acf0-00f88e4faa55
---


# How to: Create filter data providers for PerformancePoint Services in SharePoint
Learn how to create the data provider component in a custom filter extension for PerformancePoint Services.
## What are custom data providers for PerformancePoint Services?
<a name="bk_introduction"> </a>

In PerformancePoint Services, custom data providers retrieve data from a filter's underlying data source and define how to use the data. Most importantly, data providers specify the data values to expose in the filter control and the data that can be used as the filter's beginpoint. A data provider also stores the value that a user selects from the filter control, which is then sent to filter consumers. Data providers use two  [DataTable](https://msdn.microsoft.com/library/System.Data.DataTable.aspx) objects to organize and store data. For more information, see [Filters Overview](http://msdn.microsoft.com/library/915382d0-3997-495c-a65a-7db3fe0b8f85%28Office.15%29.aspx).
  
    
    
The following procedures and examples that show you how to create, configure, and define a filter data provider are based on the **SampleFilterDataProvider** class from the [custom objects sample](http://msdn.microsoft.com/library/af021d52-7562-4e7a-9de4-e1fc5784a59d%28Office.15%29.aspx). The editor is a thin web application that enables users to modify the report's name and description. For the complete code for the class, see  [Code example: Create a data provider for custom PerformancePoint Services filters in SharePoint](#bk_example).
  
    
    
We recommend that you use the sample data provider as a template. The sample shows how to call objects in the PerformancePoint Services API and demonstrates best practices for PerformancePoint Servicesdevelopment. 
  
    
    

## Create data providers for custom PerformancePoint Services filters
<a name="bk_createconfig"> </a>


1. Install PerformancePoint Services, or copy the DLLs that your extension uses (listed in step 3) to your computer. For more information, see  [DLLs with Class Libraries](http://msdn.microsoft.com/library/41e92619-8253-481d-82f9-35b6a6abc477%28Office.15%29.aspx).
    
  
2. In Visual Studio, create a C# class library. If you have already created a class library for your extension, add a new C# class.
    
    You must sign your DLL with a strong name. In addition, ensure that all assemblies referenced by your DLL have strong names. For information about how to sign an assembly with a strong name and how to create a public/private key pair, see  [How to: Create a Public/Private Key Pair](http://msdn.microsoft.com/library/05026813-f3bd-4d7c-9e0b-fc588eb3d114.aspx).
    
  
3. Add the following PerformancePoint Services DLLs as assembly references to the project:
    
  - Microsoft.PerformancePoint.Scorecards.Client.dll
    
  
  - Microsoft.PerformancePoint.Scorecards.Server.dll
    
  

    Depending on your extension's functionality, other project references may be required.
    
  
4. In your provider class, add **using** directives for the following PerformancePoint Services namespaces:
    
  -  [Microsoft.PerformancePoint.Scorecards](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.aspx)
    
  
  -  [Microsoft.PerformancePoint.Scorecards.Server.Extensions](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Server.Extensions.aspx)
    
  

    Depending on your extension's functionality, other **using** directives may be required.
    
  
5. Inherit from the  [CustomParameterDataProvider](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Server.Extensions.CustomParameterDataProvider.aspx) base class.
    
  
6. Set the string identifier for the data provider name. This must match the key that you add to the **CustomParameterDataProviders** section of the web.config file when you register the extension. For more information, see [How to: Manually Register PerformancePoint Services Extensions](http://msdn.microsoft.com/library/3aa6d340-4b05-46b3-9648-2b6e18e04e09%28Office.15%29.aspx).
    
  
7. Override the  [GetId()](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Server.Extensions.CustomParameterDataProvider.GetId.aspx) method to return the identifier for your data provider.
    
  
8. Override the  [GetDisplayDataInternal](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Server.Extensions.CustomParameterDataProvider.GetDisplayDataInternal.aspx) method to define a [DataTable](https://msdn.microsoft.com/library/System.Data.DataTable.aspx) object to store the data values from the underlying data source. The filter uses this method to populate the filter selection control. The display data table must contain the following column names:
    
  - **Key** The unique identifier for the record. This value cannot be null. For performance and security purposes, controls emit only a key; they do not emit values from the other columns.
    
  
  - **Display** The value that appears in the filter control.
    
  
  - **ParentKey** This value is used to arrange hierarchical data in a tree control.
    
  
  - **IsDefault** This value is used for filter persistence.
    
    > **Tip:**
      > You can add more columns to extend the filter's functionality. 

     [GetDisplayDataInternal](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Server.Extensions.CustomParameterDataProvider.GetDisplayDataInternal.aspx) calls the [DataSourceRegistry.GetDataSource(DataSource)](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSourceRegistry.GetDataSource.aspx) method to verify the data source type by name, as follows:
    
  - It references a custom data source type by using the  [SubTypeId](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSource.SubTypeId.aspx) property of the data source, which is the same value as the **subType** attribute that is registered in the PerformancePoint Services web.config file for the data source extension.
    
  
  - It references a native data source by using the  [SourceName](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSource.SourceName.aspx) property, which returns a field from the [DataSourceNames](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSourceNames.aspx) class.
    
  
9. Override the  [GetMessageData](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Server.Extensions.CustomParameterDataProvider.GetMessageData.aspx) method to store the user's selection from the filter control. The filter uses this method when it sends the user's selections to consumers.
    
  

## Code example: Create a data provider for custom PerformancePoint Services filters in SharePoint
<a name="bk_example"> </a>

The following code example shows how a data provider retrieves values from a web service or an Excel worksheet and returns  [DataTable](https://msdn.microsoft.com/library/System.Data.DataTable.aspx) objects for the filter's display data and message data.
  
    
    
Before you can compile this code example, you must configure your development environment as described in  [To create and configure the provider class](#bk_createconfig).
  
    
    



```cs

using System.Data;
using Microsoft.PerformancePoint.Scorecards;
using Microsoft.PerformancePoint.Scorecards.Server.Extensions;

namespace Microsoft.PerformancePoint.SDK.Samples.SampleFilter
{

    // Represents the sample filter's data provider.
    public class SampleFilterDataProvider : CustomParameterDataProvider
    {

        // This value must match the key that you register for this extension
        // in the CustomParameterDataProviders section in the web.config file.
        private const string dataProviderName = "SampleFilterDataProvider";

        // Returns a table of all possible values (rows) for the
        // filter's beginpoints. The filter's BeginPoint property returns
        // one ParameterDefinition object.
        protected override DataTable GetDisplayDataInternal(ParameterDefinition parameterDefinition, RepositoryLocation parameterSourceLocation, object custom)
        {
            DataTable retrievedData = null;

            // Get the data source.
            DataSource parameterDataSource = SafeGetDataSource(parameterSourceLocation);
            if (null != parameterDataSource)
            {

                // Verify that the data source is the sample data source
                // or an Excel workbook, which are the types that the
                // sample supports.
                // If you modify these types of data source, you must make
                // the corresponding change in the filter's editor.
                if (parameterDataSource.SourceName == "WSTabularDataSource" || parameterDataSource.SourceName == DataSourceNames.ExcelWorkbook)
                {
                    IDataSourceProvider parameterDataSourceProvider =
                        DataSourceRegistry.GetDataSource(parameterDataSource);
                    if (null != parameterDataSourceProvider)
                    {
                        var dataSourceMetadata = parameterDataSourceProvider as IDataSourceMetadata;
                        if (null != dataSourceMetadata)
                        {

                            // Get the data and store it in the retrievedDataSet
                            // variable. The -1 parameter returns all records
                            // from the data source.
                            DataSet retrievedDataSet = dataSourceMetadata.GetPreviewDataSet(-1);

                            // Verify that the dataset contains data.  
                            if (retrievedDataSet != null &amp;&amp;
                                retrievedDataSet.Tables != null &amp;&amp;
                                retrievedDataSet.Tables.Count > 0 &amp;&amp;
                                retrievedDataSet.Tables[0] != null &amp;&amp;
                                retrievedDataSet.Tables[0].Columns != null &amp;&amp;
                                retrievedDataSet.Tables[0].Columns.Count > 0 &amp;&amp;
                                retrievedDataSet.Tables[0].Rows != null &amp;&amp;
                                retrievedDataSet.Tables[0].Rows.Count > 0 &amp;&amp;
                                retrievedDataSet.Tables[0].Columns.Contains(parameterDefinition.KeyColumn))
                            {
                                retrievedData = retrievedDataSet.Tables[0];
                            }
                        }
                    }
                }

                if (null != retrievedData)
                {
                    // Name the display data table.
                    retrievedData.TableName = "ParamData";

                    // Verify that the table has the correct structure. 
                    EnsureDataColumns(retrievedData, parameterDefinition);

                    bool firstRowSeen = false;
                    foreach (DataRow row in retrievedData.Rows)
                    {
                        // Set the ParentKeyColumn to null because the data
                        // does not have a hierarchical structure.
                        row[parameterDefinition.ParentKeyColumn] = null;

                        // Set the IsDefaultColumn column in the first row to true.
                        row[parameterDefinition.IsDefaultColumn] = !firstRowSeen;
                        if (!firstRowSeen)
                        {
                            firstRowSeen = true;
                        }
                    }

                    // Set the column visibility.
                    SetColumnVisibility(retrievedData);
                }
            }
            
            return retrievedData;
        }

        // Adds the ShowColumn extended property to a column in the display data table
        // and sets it to true. This exposes the column in Dashboard Designer as 
        // a source value for the beginpoint. 
        private static void SetColumnVisibility(DataTable displayData)
        {
            for (int i = 0; i < displayData.Columns.Count; i++)
            {
                if (!displayData.Columns[i].ExtendedProperties.Contains("ShowColumn"))
                {
                    displayData.Columns[i].ExtendedProperties.Add("ShowColumn", true);
                }
            }
        }

        // Verify that all required columns are in the data table.
        // The data table returned by this method is expected to contain a
        // Key, ParentKey, IsDefault, Display, and an arbitrary number of
        // Value columns.
        // The specific column names (except for Value columns) are defined
        // in the filter's ParameterDefinition object, which is referenced by
        // the filter's BeginPoint property.
        private static void EnsureDataColumns(DataTable dataTable, ParameterDefinition parameterDefinition)
        {
            if (!string.IsNullOrEmpty(parameterDefinition.KeyColumn) &amp;&amp; !dataTable.Columns.Contains(parameterDefinition.KeyColumn))
            {
                dataTable.Columns.Add(parameterDefinition.KeyColumn);
            }
            if (!string.IsNullOrEmpty(parameterDefinition.DisplayColumn) &amp;&amp; !dataTable.Columns.Contains(parameterDefinition.DisplayColumn))
            {
                dataTable.Columns.Add(parameterDefinition.DisplayColumn);
            }
            if (!string.IsNullOrEmpty(parameterDefinition.ParentKeyColumn) &amp;&amp; !dataTable.Columns.Contains(parameterDefinition.ParentKeyColumn))
            {
                dataTable.Columns.Add(parameterDefinition.ParentKeyColumn);
            }
            if (!string.IsNullOrEmpty(parameterDefinition.IsDefaultColumn) &amp;&amp; !dataTable.Columns.Contains(parameterDefinition.IsDefaultColumn))
            {
                dataTable.Columns.Add(parameterDefinition.IsDefaultColumn, typeof(bool));
            }
        }

        // Returns the unique string identifier of the data provider.
        // This value must match the key that you register for this extension
        // in the CustomParameterDataProviders section in the web.config file.
        public override string GetId()
        {
            return dataProviderName;
        }

        // Returns a table of rows that match the keys in the passed
        // ParameterMessage object.
        // This method is used by controls that accept parameters, such as
        // scorecard and reports. It can also apply a Post Formula.
        public override DataTable GetMessageData(RepositoryLocation providerLocation, ParameterMessage parameterMessage, RepositoryLocation parameterSourceLocation, ParameterMapping parameterMapping, object custom)
        {   
            DataTable msgTable = null;

            // The ParameterMapping object contains information about
            // linked dashboard items.
            // The CustomData object is optionally used to store information
            // that is not stored in other properties.
            DataTable displayTable = GetDisplayDataInternal(parameterMessage, parameterSourceLocation, custom);

            if (null != displayTable)
            {
                msgTable = displayTable.Clone();
                for (int i = 0;i < parameterMessage.Values.Rows.Count; i++)
                {
                    for (int j = 0;j < displayTable.Rows.Count; j++)
                    {
                        if (!parameterMessage.Values.Rows[i][parameterMessage.KeyColumn].Equals(displayTable.Rows[j][parameterMessage.KeyColumn].ToString())) 
                            continue;

                        msgTable.ImportRow(displayTable.Rows[j]);
                        break;
                    }
                }
            }

            return msgTable;
        }
    }
}
```


## Next steps
<a name="bk_next"> </a>

After you create a data provider and a filter editor (including its user interface, if required), deploy the extension as described in  [How to: Manually Register PerformancePoint Services Extensions](http://msdn.microsoft.com/library/3aa6d340-4b05-46b3-9648-2b6e18e04e09%28Office.15%29.aspx).
  
    
    

## Additional resources
<a name="bk_next"> </a>


-  [How to: Create filter editors for PerformancePoint Services in SharePoint](how-to-create-filter-editors-for-performancepoint-services-in-sharepoint.md)
    
  
-  [PerformancePoint Services in SharePoint](performancepoint-services-in-sharepoint.md)
    
  

