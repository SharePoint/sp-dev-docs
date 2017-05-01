---
title: Step 2 Creating a Managed-Code UDF
keywords: soap
f1_keywords:
- soap
ms.prod: SHAREPOINT
ms.assetid: 3c9edf82-ee2d-41f0-9d66-e88e8dc0cc69
---


# Step 2: Creating a Managed-Code UDF

After you have added a reference to Microsoft.Office.Excel.Server.Udf.dll to your project, the next step is to create some custom functions and mark them with the Excel Services user-defined function (UDF) attributes. 
  
    
    

You must mark your UDF class with the **Microsoft.Office.Excel.Server.Udf.UdfClass** attribute, and mark the UDF methods with the **Microsoft.Office.Excel.Server.Udf.UdfMethod** attribute.
Any methods that are not marked with the **Microsoft.Office.Excel.Server.Udf.UdfMethod** attribute in the UDF assembly will be ignored, because they will not be considered UDF methods.
  
    
    

The **Microsoft.Office.Excel.Server.Udf.UdfMethod** attribute has an **IsVolatile** property. You use the **IsVolatile** property to specify a UDF method as volatile or nonvolatile. The **IsVolatile** property takes a Boolean value. The default value is **false**, which means that particular UDF method is nonvolatile. 
## Creating UDFs


### To add directives


- The types to use are defined in the ** Microsoft.Office.Excel.Server.Udf** namespace. Adding a **using** (or **Imports**) directive at the top of the Class1.cs file will allow you to use the types in **Microsoft.Office.Excel.Server.Udf** without having to fully qualify the types in the namespace.
    
    To add this directive, add the following code to the beginning of your code in the Class1.cs file, after  `using System.Text:`
    


cs
  
using Microsoft.Office.Excel.Server.Udf; 





VB.net
  Imports Microsoft.Office.Excel.Server.Udf



### To mark a UDF class and methods


1. Mark  `Class1` as a UDF class by adding the following attribute just above `public class Class1`: 
    
cs
  [UdfClass]



VB.net
  <UdfClass>_


2. Create a function that takes a number (of type **double**), and in the function, multiply the number by 9. The function is a UDF method that is nonvolatile. Add the following code to  `Class1`:
    
cs
  [UdfMethod]
public double MyDouble(double d)
{
    return d * 9;
}



VB.net
  
<UdfMethod> _
Public Function MyDouble(ByVal d As Double) As Double
    Return d * 9
End Function



    > [!NOTE]
      > The default value for the **IsVolatile** property is **false**, which means that particular UDF method is nonvolatile. Therefore, it is sufficient to mark a nonvolatile UDF method as  `[UdfMethod]`. It is not necessary to mark it as  `[UdfMethod(IsVolatile = false)]`. 
3. Create another function that returns the current date using the **System.DateTime.Today** property. The function is a UDF method that is volatile. Add the following code to `Class1`:
    
cs
  
[UdfMethod(IsVolatile = true)]
public DateTime ReturnDateTimeToday()
{
    return (DateTime.Today);
}      



VB.net
  
<UdfMethod(IsVolatile := True)> _
Public Function ReturnDateTimeToday() As Date
    Return (Date.Today)
End Function



### To build the project


1. On the **Build** menu, click **Build Solution**.
    
  
2. You should find SampleUdf.dll assembly in the directory where you have saved your project. 
    
  

### Complete Code

The following code sample is the complete code in the Class1.cs example file described in the previous procedures.
  
    
    

```cs

using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Office.Excel.Server.Udf;

namespace SampleUdf
{
    [UdfClass]
    public class Class1
    {
        [UdfMethod]
        public double MyDouble(double d)
        {
            return d * 9;
        }  

        [UdfMethod(IsVolatile = true)]
        public DateTime ReturnDateTimeToday()
        {
            return (DateTime.Today);
        }
    }
}
```


```VB.net

Imports System
Imports System.Collections.Generic
Imports System.Text
Imports Microsoft.Office.Excel.Server.Udf

Namespace SampleUdf
    <UdfClass> _
    Public Class Class1
        <UdfMethod> _
        Public Function MyDouble(ByVal d As Double) As Double
            Return d * 9
        End Function

        <UdfMethod(IsVolatile := True)> _
        Public Function ReturnDateTimeToday() As Date
            Return (Date.Today)
        End Function
    End Class
End Namespace
```


## See also


#### Tasks


  
    
    
 [Step 1: Creating a Project and Adding a UDF Reference](step-1-creating-a-project-and-adding-a-udf-reference.md)
  
    
    
 [Step 3: Deploying and Enabling UDFs](step-3-deploying-and-enabling-udfs.md)
  
    
    
 [Step 4: Testing and Calling UDFs from Cells](step-4-testing-and-calling-udfs-from-cells.md)
  
    
    
 [How to: Create a UDF That Calls a Web Service](how-to-create-a-udf-that-calls-a-web-service.md)
#### Concepts


  
    
    
 [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf.md)
  
    
    
 [Understanding Excel Services UDFs](understanding-excel-services-udfs.md)
