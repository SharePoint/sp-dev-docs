---
title: Create scorecard transforms for PerformancePoint Services in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Create scorecard transforms for PerformancePoint Services in SharePoint

Learn how to create custom scorecard transforms for PerformancePoint Services in SharePoint.

## What are scorecard transforms in PerformancePoint Services?
<a name="bk_intro"> </a>

In PerformancePoint Services, scorecard transforms change the appearance, content, or functionality of scorecard views before they render in a dashboard. For more information, see  [Types of Transforms](http://msdn.microsoft.com/library/d69d171b-827a-48a8-a3e1-7aaf0bfbc7f8%28Office.15%29.aspx).
  
    
    

## Create transforms for PerformancePoint Services scorecards
<a name="BKMK_CreateClass"> </a>


1. Install PerformancePoint Services, or copy the DLLs that are installed with PerformancePoint Services to your computer. For more information, see  [DLLs with Class Libraries](http://msdn.microsoft.com/library/41e92619-8253-481d-82f9-35b6a6abc477%28Office.15%29.aspx).
    
  
2. In Visual Studio, create a C# class library. If you have already created a class library for your extension, add a new C# class.
    
    You must sign your DLL with a strong name, and ensure that all assemblies referenced by your DLL have strong names. To learn how to sign an assembly with a strong name and how to create a public/private key pair, see  [How to: Create a Public/Private Key Pair](http://msdn.microsoft.com/library/05026813-f3bd-4d7c-9e0b-fc588eb3d114.aspx).
    
  
3. Add Microsoft.PerformancePoint.Scorecards.Client.dll as an assembly reference to the project.
    
  
4. Add **using** directives for the following namespaces:
    
  - **Microsoft.PerformancePoint.Scorecards**
    
  
  - **Microsoft.PerformancePoint.Scorecards.Extensions**
    
  
  - **System.Collections.Generic**
    
  
5. Implement the  [IGridViewTransform](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Extensions.IGridViewTransform.aspx) interface.
    
  
6. Override the  [GetId](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Extensions.IGridViewTransform.GetId.aspx) method to return the string identifier for your transform. [GetId](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Extensions.IGridViewTransform.GetId.aspx) must return the same string as the **key** attribute that is registered for the transform in the PerformancePoint Services web.config file. For more information about registering scorecard transforms, see [How to: Manually Register PerformancePoint Services Extensions](http://msdn.microsoft.com/library/3aa6d340-4b05-46b3-9648-2b6e18e04e09%28Office.15%29.aspx).
    
  
7. Override the  [GetTransformType](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Extensions.IGridViewTransform.GetTransformType.aspx) method to specify when to run the transform. The point at which a transform runs depends on its type, as defined by the [GridViewTransformType](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Extensions.GridViewTransformType.aspx) enumeration: **PreQuery**, **PostQuery**, or **PreRender**. For more information, see  [Types of Transforms](http://msdn.microsoft.com/library/d69d171b-827a-48a8-a3e1-7aaf0bfbc7f8%28Office.15%29.aspx).
    
  
8. Override the  [Execute](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Extensions.IGridViewTransform.Execute.aspx) method to define how to transform the scorecard. The following code examples show how to add a column to a scorecard view and how to change the formatting of empty scorecard cells.
    
  
After you sign and build your DLL, install the extension as described in  [How to: Manually Register PerformancePoint Services Extensions](http://msdn.microsoft.com/library/3aa6d340-4b05-46b3-9648-2b6e18e04e09%28Office.15%29.aspx).
## Code example 1: Add a column to PerformancePoint Services scorecards
<a name="bk_example1"> </a>

The following code example creates a **PreQuery** transform that adds a column to rendered scorecard views that contain a KPI at the column leaf level. (If the scorecard view includes members below the KPIs, the column is not added.)
  
    
    
Before you can compile this code example, you must configure your development environment as described in  [Create transforms for PerformancePoint Services scorecards](#BKMK_CreateClass).
  
    
    



```cs

using System;
using System.Collections.Generic;
using Microsoft.PerformancePoint.Scorecards;
using Microsoft.PerformancePoint.Scorecards.Extensions;

namespace Microsoft.PerformancePoint.SDK.Samples.ScorecardTransforms.PreQuery
{

    // Represents the class that adds columns of data to a scorecard view. 
    public class AddColumnTransform : IGridViewTransform
    {

        // Set transform type to PreQuery.
        public GridViewTransformType GetTransformType()
        {
            return GridViewTransformType.PreQuery;
        }

        // Return the string identifier of your transform. This value must
        // match the key attribute registered in the web.config file.
        public string GetId()
        {
            return "AddColumn";
        }

        // Run the transform to add a column. 
        public void Execute(GridViewData viewData, PropertyBag parameters, IGlobalCache cache)
        {
            // Verify the scorecard definition.
            if (viewData == null)
            {
                throw new ArgumentException("Parameter cannot be null", "viewData");
            }
                     
            List<GridHeaderItem> leafRowHeaders = viewData.RootRowHeader.GetAllLeafHeadersInTree();

            foreach (GridHeaderItem rowHeader in leafRowHeaders)
            {
                if (rowHeader.HeaderType == ScorecardNodeTypes.Kpi)
                {
                    Kpi kpi = cache.GetKpi(rowHeader.LinkedKpiLocation);
                    if (kpi != null &amp;&amp; viewData.RootColumnHeader != null)
                    {

                        // Create the column header and add it to the root.
                        GridHeaderItem theNewColumn = GridHeaderItem.CreateDetailsHeader(kpi.Owner.DisplayName);

                        // Set the GUIDs for the data headers.
                        // Setting the DefinitionGuid property to the
                        // same value as the root column header enables
                        // Dashboard Designer to display the scorecard. 
                        // Note: Do not try to modify or delete the new
                        // column from within Dashboard Designer.
                        theNewColumn.DefinitionGuid = viewData.RootColumnHeader.DefinitionGuid;
                        theNewColumn.Parent = viewData.RootColumnHeader;
                        theNewColumn.Guid = new Guid();

                        // Insert the column at the end of the collection
                        // of child elements.
                        if (viewData.RootColumnHeader.Children.Count != 0)
                        {
                            viewData.RootColumnHeader.Children.Insert(viewData.RootColumnHeader.Children.Count, theNewColumn);
                        }
                                                                         
                        break;
                    }
                }
            }
            viewData.RootColumnHeader.LinkAndIndexTreeFromRoot();
        }
    }
}
```


## Code example 2: Change the format of empty cells in PerformancePoint Services scorecards
<a name="bk_example2"> </a>

The following code example creates a **PreQuery** transform that applies a grey background color to empty scorecard cells.
  
> [!NOTE]
> Before you can compile this code example, you must configure your development environment as described in  [Create transforms for PerformancePoint Services scorecards](#BKMK_CreateClass). In addition, you must add a reference to the **System.Drawing** assembly to your project.
  
    
    


```cs

using System;
using System.Collections.Generic;
using Microsoft.PerformancePoint.Scorecards;
using Microsoft.PerformancePoint.Scorecards.Extensions;

namespace Microsoft.PerformancePoint.SDK.Samples
{

    // Represents a transform that applies a grey background color to empty scorecard cells.
    public class GreyEmptiesTransform : IGridViewTransform
    {

        // Set the transform type to "PreRender".
        public GridViewTransformType GetTransformType()
        {
            return GridViewTransformType.PreRender;
        }

        // Return the string identifier of the transform.
        public string GetId()
        {
            return "GreyEmptyCells";
        }

        // Run the transform.
        public void Execute(GridViewData viewData, PropertyBag parameters, IGlobalCache cache)
        {
            // Validate parameters. 
            if (viewData == null)
            {
                throw new ArgumentException("Parameter cannot be null", "viewData");
            }

            // Get the headers under the root row header.
            List<GridHeaderItem> nonLeafRowHeaders = viewData.RootRowHeader.GetAllHeadersInTree();

            // Get the leaf headers under the root column header.
            List<GridHeaderItem> leafColumnHeaders = viewData.RootColumnHeader.GetAllLeafHeadersInTree();

            foreach (GridHeaderItem rowHeader in nonLeafRowHeaders)
            {
                foreach (GridHeaderItem columnHeader in leafColumnHeaders)
                {
                    // Get scorecard cells.
                    GridCell cell = viewData.Cells[rowHeader, columnHeader];

                    if (cell.IsCellEmpty || string.IsNullOrEmpty(cell.ActualValue.ToString()))
                    {
                        GridFormatInfo emptyFormat = new GridFormatInfo(viewData.DefaultCellFormatInfo);
                        emptyFormat.BackColor = new GridColor(System.Drawing.Color.Gray);
                        cell.FormatInfo = emptyFormat;
                    }
                    viewData.Cells[rowHeader, columnHeader] = cell;
                }
            }
        }
    }
}


```


## Additional resources
<a name="bk_addResources"> </a>


-  [PerformancePoint Services in SharePoint](https://dev.office.com/sharepoint/docs/general-development/performancepoint-services-in-sharepoint)
    
  
-  [PerformancePoint Services Scorecards](http://msdn.microsoft.com/library/e77eccdb-82b3-483a-bb91-dfdc716400dd%28Office.15%29.aspx)
    
  

