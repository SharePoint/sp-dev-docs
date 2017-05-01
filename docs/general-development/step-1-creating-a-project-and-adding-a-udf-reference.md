---
title: Step 1 Creating a Project and Adding a UDF Reference
ms.prod: SHAREPOINT
ms.assetid: 4c6f1279-28df-45af-8488-42a6573d526d
---


# Step 1: Creating a Project and Adding a UDF Reference

In this step, you will create a project and add a reference to Microsoft.Office.Excel.Server.Udf.dll. 
  
    
    


## Creating the Project

The following project uses Microsoft Visual Studio 2005.
  
    
    

> [!NOTE]
> Depending on which settings you use in the Visual Studio integrated development environment (IDE), the process to create a project could be slightly different. 
  
    
    


### To create a project


1. Start Visual Studio.
    
  
2. On the **File** menu, point to **New**, and then click **Project**. The **New Project** dialog box appears.
    
  
3. In the **Project Type** pane, select **Visual C# Projects**.
    
  
4. In the **Templates** pane, click **Class Library**.
    
  
5. In the **Name** box, type **SampleUdf**.
    
  
6. In the **Location** box, type the path where you want to save your project, or click **Browse** to navigate to the folder.
    
  
7. Click **OK**. Your new project appears in **Solution Explorer**. You also will see that a file with the default name of Class1.cs has been added to your project.
    
  
8. You should see the following code in the Class1.cs file:
    
cs
  
using System;
using System.Collections.Generic;
using System.Text;

namespace SampleUdf
{
    public class Class1
    {
    }
}



VB.net
  
Imports System
Imports System.Collections.Generic
Imports System.Text

Namespace SampleUdf
Public Class Class1
End Class
End Namespace



## Adding a Reference

The following steps show how to locate Microsoft.Office.Excel.Server.Udf.dll and how to add a reference to it. 
  
    
    

### To add a reference


1. On the **Project** menu, click **Add Reference**.
    
  
2. In the **Add Reference** dialog box, on the **.NET** tab, select **Excel Services UDF Framework**.
    
    > [!NOTE]
      > You can also open the **Add Reference** dialog box in **Solution Explorer** by right-clicking **References** and selecting **Add Reference**. 
3. Click **OK**.
    
    > [!NOTE]
      > The previous steps assume that you are building the project on a computer that has Microsoft SharePoint Server 2010 installed. On the computer where you have installed SharePoint Server 2010, you can find a copy of Microsoft.Office.Excel.Server.Udf.dll at: > [drive:]\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\14\\ISAPI 

## See also


#### Tasks


  
    
    
 [Step 2: Creating a Managed-Code UDF](step-2-creating-a-managed-code-udf.md)
  
    
    
 [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md)
  
    
    
 [Step 4: Testing and Calling UDFs from Cells](step-4-testing-and-calling-udfs-from-cells.md)
  
    
    
 [How to: Create a UDF That Calls a Web Service](how-to-create-a-udf-that-calls-a-web-service.md)
#### Concepts


  
    
    
 [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf.md)
  
    
    
 [Understanding Excel Services UDFs](understanding-excel-services-udfs.md)
