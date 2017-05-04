---
title: PowerPoint Automation Services in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 168c7dc0-fbdc-41a2-84db-65d211d3d673
---


# PowerPoint Automation Services in SharePoint
Learn to use Microsoft PowerPoint Automation Services to do server-side presentation conversions to and from a variety of file formats. 

## Introduction
<a name="PAS_Intro"> </a>

Many businesses, large and small, use their Microsoft SharePoint Server libraries as a repository for Microsoft PowerPoint presentations. These businesses all have their own particular needs for storing, distributing, and updating their presentations. Microsoft PowerPoint Automation Services is a new feature of Microsoft SharePoint that can help enterprises to manage their presentations. It is a shared service that provides unattended, server-side conversion of presentations into other formats. It was designed from the outset to work on servers and can process many presentation files in a reliable and predictable manner.
  
    
    
Using PowerPoint Automation Services, you can convert from the PowerPoint binary file format (.ppt) and the PowerPoint Open XML file format (.pptx) to other formats. For example, you may want to upgrade a batch of PowerPoint 97-2003 files to Open XML presentation files. You could also create a custom action in the **Edit** menu to allow users to create a PDF version of presentations on demand.
  
    
    

> **Note:**
> PowerPoint Automation Services takes advantage of facilities of SharePoint and is a feature of it. You must have SharePoint installed to use PowerPoint Automation Services. If you are using SharePoint in a server farm, you must explicitly enable PowerPoint Automation Services. 
  
    
    


## PowerPoint Automation Services scenarios
<a name="PAS_Scenarios"> </a>

The following scenarios describe a couple of ways that you can use PowerPoint Automation Services to automate processing presentations on a server:
  
    
    

- A large enterprise stores all of their yearly earnings presentations in a single document library on a corporate intranet site. The library contains a large number of presentations that have accumulated over the years. The IT department wants to upgrade all of the presentation files in the PowerPoint 97-2003 binary file format (.ppt) to the Open XML presentation file format (.pptx). The developer who is performing the conversion decides to deploy a solution to the server that will iterate through each of the files in the library, check to see whether the file is in the .ppt format, and convert each .ppt file to the .pptx file format.
    
  
- A regional sales department provides custom service estimates to each of their clients. Each salesperson reviews their quotes with clients in a meeting, either in-person or online. After the meeting, the salesperson provides a copy of the quote to the customer in the form of a PDF. The department hires a vendor to create a custom verb in the **Edit** menu for PowerPoint files stored in a document library in their extranet. When the verb is clicked, the server runs a program that converts the PowerPoint file to a PDF located in the same library.
    
  

### Supported source presentation formats

The supported source presentation formats for conversion are as follows:
  
    
    

- Open XML File Format presentation format (.pptx)
    
  
- PowerPoint 97-2003 presentation (.ppt)
    
  

### Supported destination document formats

The supported destination document formats include all of the supported source document formats and the following:
  
    
    

- .pptx (Open XML File Format presentation format)
    
  
- .pdf
    
  
- .xps (Open XML Paper Specification)
    
  
- .jpg
    
  
- .png (Portable Network Graphics Format)
    
  

### Limitations of PowerPoint Automation Services

PowerPoint Automation Services does not include capabilities for printing documents. However, it is straightforward to convert PowerPoint presentation files (.ppt and .pptx) to PDF or XPS and spool them to a printer.
  
    
    

## PowerPoint Automation Services API
<a name="PAS_APIs"> </a>

To use PowerPoint Automation Services, you use its programming interface to send a conversion request to the SharePoint server. For each conversion request, you specify which files you want to convert and the output format of the conversion job. For some conversion requests, you can also specify what types of content is converted, including comments, hidden slides, or document properties.
  
    
    
PowerPoint Automation Services uses the asynchronous pattern method for sending and receiving conversion requests. Thus, you can write code that continues to execute after a conversion request has been sent. If you need to provide notification to users after a conversion request has been completed, you can specify a delegate that references a callback method to execute when the operation completes. 
  
    
    

> **Note:**
> For more information about how to work with the asynchronous design pattern, see the  [Asynchronous Programming Overview](http://msdn.microsoft.com/en-us/library/ms228963.aspx). 
  
    
    

The sections below contain a limited list of the classes that are necessary for sending and receiving a conversion requests. All of these classes are contained in the **Microsoft.Office.Server.PowerPoint.Conversion** namespace.
  
    
    

### Request Base Class

The **Request** class is the most fundamental class within the **Microsoft.Office.Server.PowerPoint.Conversion** namespace. All of the otherrequest types— **PresentationRequest**, **PictureRequest**, **PdfRequest**, and **XpsRequest**—inherit from it. 
  
    
    

**Table 1. Request base class members**


|**Member name**|**Description**|
|:-----|:-----|
|**BeginConvert(Microsoft.SharePoint.SPServiceContext, System.AsyncCallback, System.Object)** method <br/> |Begins the conversion operation. The first parameter,  _serviceContext_, specifies the context of the SharePoint site where the file to be converted is located. Use the  _callback_ parameter to specify a delegate that references a method to execute once the operation has completed. Use the _state_ parameter if you need to pass any additional information from the calling code to the callback method. <br/> Returns an  [IAsyncResult](https://msdn.microsoft.com/library/System.IAsyncResult.aspx) object. <br/> |
|**EndConvert(IAsyncResult)** method <br/> |Ends the conversion operation. The  _result_ parameter expects the resulting [IAsyncResult](https://msdn.microsoft.com/library/System.IAsyncResult.aspx) object that the corresponding **BeginConvert** conversion request returns. If that request has not been completed when **EndConvert** is called, the calling thread is blocked until the conversion operation is complete. <br/> Does not return a value.  <br/> |
   

### PresentationRequest class

The **PresentationRequest** class, which inherits from the **Request** class, converts a PowerPoint 97-2003 file (.ppt) or Open XML File Format presentation (.pptx) to another presentation file format. In the first scenario mentioned above, you use this class to convert older presentation files in a document library to the Open XML File Format presentation format.
  
    
    
The constructor method for the **PresentationRequest** class has three required parameters:
  
    
    

-  _input_—Takes the file that you want to convert as a  [Stream](https://msdn.microsoft.com/library/System.IO.Stream.aspx) object.
    
  
-  _extension_—A string that specifies the file extension of the file being converted.
    
  
-  _output_—An  [SPFileStream](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfilestream.aspx) object that specifies where the output will be stored.
    
  
The **PresentationRequest** class has a single overload for its constructor method that adds a _settings_ parameter. The _settings_ parameter accepts a **PresentationSettings** object as an argument.
  
    
    

> **Tip:**
> When converting the output  [Stream](https://msdn.microsoft.com/library/System.IO.Stream.aspx) object back to an [SPFile](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfile.aspx) object, check that the extension given to the resulting file matches the extension of the file type that you want (.ppt or .pptx).
  
    
    


### PdfRequest class

The **PdfRequest** class, which also inherits from the **Request** class, converts a PowerPoint 97-2003 file (.ppt) or Open XML File Format presentation (.pptx) to a.pdf file. In the second scenario mentioned above, you use this class to convert presentations to PDF files.
  
    
    
The constructor method for the **PdfRequest** class also has three required parameters— _input_,  _extension_, and  _output_—similar to the **PresentationRequest** class.
  
    
    
The **PdfRequest** class also has a single overload for its constructor method that adds a _settings_ parameter. The _settings_ parameter accepts a **FixedFormatSettings** object as an argument.
  
    
    

> **Tip:**
> When converting the output  [Stream](https://msdn.microsoft.com/library/System.IO.Stream.aspx) object back to an [SPFile](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfile.aspx) object, check that the extension given to the resulting file matches the extension of the file type that you want (.pdf).
  
    
    


### PictureRequest class

The **PictureRequest** class, which also inherits from the **Request** class, converts a PowerPoint 97-2003 file (.ppt) or Open XML File Format presentation (.pptx) to a collection of image files in either the.jpg or .png format.
  
    
    
The constructor method for the **PictureRequest** class also has four required parameters. The _input_,  _extension_, and  _output_ parameters are similar to the parameters for the **PresentationRequest** class constructor. The constructor method for the **PictureRequest** class also has a required _format_ parameter, which must be a constant from the **PictureFormat** enumeration.
  
    
    
The **PictureRequest** class does not have any overloads for its constructor method.
  
    
    

> **Tip:**
> The **PictureRequest** class returns a stream that contains a package of image files. When converting the output [Stream](https://msdn.microsoft.com/library/System.IO.Stream.aspx) object back to an [SPFile](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spfile.aspx) object, check that the extension given to the resulting file is .zip.
  
    
    


## Building a PowerPoint Automation Services application
<a name="PAS_Build"> </a>

The easiest way to show how to write code that uses PowerPoint Automation Services is to build a console application. You must build and run the console application on the SharePoint Server, not on a client computer. The code to start conversion requests is similar whether the conversion request code is incorporated into a Web Part, a workflow, or an event handler. By using PowerPoint Automation Services from a console application, the following procedure shows how to use the API without adding the complexities of a Web Part, an event handler, or a workflow.
  
    
    

> **Note:**
> Because PowerPoint Automation Services is a service of SharePoint, you can use it only in an application that runs directly on a SharePoint Server. You must build the application as a farm solution. You cannot use PowerPoint Automation Services from a sandboxed solution. 
  
    
    


### To build the application


1. Start Microsoft Visual Studio 2012.
    
  
2. On the **File** menu, point to **New**, and then choose **Project**. 
    
  
3. In the **New Project** dialog box, under **Installed**, expand **Templates**, expand **Visual C#**, and then chose **Windows**.
    
  
4. In the list of project templates, choose **Console Application**.
    
  
5. Be sure that the project in Visual Studio targets .NET Framework 4.
    
    > **Note:**
      > Previous versions of SharePoint Server required that you target .NET Framework 3.5. The Microsoft.SharePoint libraries now reference assemblies in .NET Framework 4. Also make sure that your project targets the full .NET Framework 4 and not the .NET Framework 4 Client Profile. 
6. In the **Name** box, type the name that you want to use for your project, such as PAS_Sample.
    
  
7. In the **Location** box, type the location where you want to place the project.
    
  
8. Click **OK** to create the solution.
    
  
9. By default, Visual Studio 2012 creates projects that target x86 CPUs, but to build SharePoint Server applications, you must target any CPU.
    
    If you are building a Microsoft Visual C# application, in **Solution Explorer**, right-click the project, and then click **Properties**.
    
  - In the project **Properties** window, click **Build**.
    
  
  - Point to the **Configuration** list, and select **All Configurations**.
    
  
  - Point to the **Platform Target** list, and select **Any CPU**.
    
  

    
    
    If you are building a Microsoft Visual Basic .NET Framework application, in the **Properties** window, click **Compile**.
    
  - Click **Advanced Compile Options**.
    
  
  - Point to the **Configuration** list, and then select **All Configurations**.
    
  
  - Point to the **Platform Target** list, and then click **Any CPU**.
    
  

    
    
  
10. On the **Project** menu, click **Add Reference** to open the **Add Reference** dialog box.
    
  
11. Expand **Assemblies**, and then do the following:
    
  - Expand **Framework**, and then add a reference to System.Web.
    
  
  - Expand **Extensions**, and then add a reference to Microsoft.SharePoint.
    
  
12. Also in the **Add Reference** dialog box, choose **Browse**, navigate to the location for the Microsoft.Office.Server.PowerPoint.dll (default location is C:\\Windows\\Microsoft.NET\\assembly\\GAC_MSIL\\Microsoft.Office.Server.PowerPoint\\v4.0_15.0.0.0__71e9bce111e9429c), select the assembly, and then choose **Add**. 
    
  
The following C# and Visual Basic examples show a simple PowerPoint Automation Services application that converts a PowerPoint 97-2003 file (.ppt) in the Shared Documents folder of a SharePoint site to a PowerPoint Open XML file (.pptx) in the same folder.
  
    
    



```cs

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using Microsoft.SharePoint;
using Microsoft.Office.Server.PowerPoint.Conversion;

namespace PAS_Sample
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string siteURL = "http://localhost";
                using (SPSite site = new SPSite(siteURL))
                {
                    using (SPWeb web = site.OpenWeb())
                    {
                        Console.WriteLine("Begin conversion");

                        // Get a reference to the "Shared Documents" library 
                        // and the presentation file to be converted.
                        SPFolder docs = web.Folders[siteURL + 
                            "/Shared Documents"];
                        SPFile file = docs.Files[siteURL + 
                            "/Shared Documents/Pres1.ppt"];

                        // Convert the file to a stream and create an
                        // SPFileStream object for the conversion output.
                        Stream fStream = file.OpenBinaryStream();
                        SPFileStream stream = new SPFileStream(web, 0x1000);

                        // Create the presentation conversion request.
                        PresentationRequest request = new PresentationRequest(
                            fStream,
                            ".ppt",
                            stream);

                        // Send the request synchronously, passing
                        // in a 'null' value for the callback parameter, 
                        // and capturing the response in the result object.
                        IAsyncResult result = request.BeginConvert(
                            SPServiceContext.GetContext(site),
                            null,
                            null);

                        // Use the EndConvert method to get the result. 
                        request.EndConvert(result);

                        // Add the converted file to the document library.
                        SPFile newFile = docs.Files.Add(
                            "newPres1.pptx", 
                            stream, 
                            true);
                        Console.WriteLine("Output: {0}", newFile.Url);

                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
            finally
            {
                Console.WriteLine("Complete");
                Console.ReadKey();
            }
        }
    }
}
```




```VB.net

Imports System
Imports System.Collections.Generic
Imports System.IO
Imports System.Linq
Imports System.Text
Imports System.Web
Imports Microsoft.SharePoint
Imports Microsoft.Office.Server.PowerPoint.Conversion

Namespace PAS_Sample
    Class Program
        Private Shared Sub Main(args As String())
            Try
                Dim siteURL As String = "http://localhost"
                Using site As New SPSite(siteURL)
                    Using web As SPWeb = site.OpenWeb()
                        Console.WriteLine("Begin conversion")

                        ' Get a reference to the "Shared Documents" library 
                        ' and the presentation file to be converted.
                        Dim docs As SPFolder = web.Folders(siteURL + _
                            "/Shared Documents")
                        Dim file As SPFile = docs.Files(siteURL + _
                            "/Shared Documents/Pres1.ppt")

                        ' Convert the file to a stream and create an
                        ' SPFileStream object for the conversion output.
                        Dim fStream As Stream = file.OpenBinaryStream()
                        Dim stream As New SPFileStream(web, &amp;H1000)

                        ' Create the presentation conversion request.
                        Dim request As New PresentationRequest(fStream, _
                            ".ppt", 
                            stream)

                        ' Send the request synchronously, passing
                        ' in a Nothing value for the callback parameter, 
                        ' and capturing the response in the result object.
                        Dim result As IAsyncResult = request.BeginConvert(_
                            SPServiceContext.GetContext(site), _
                            Nothing, _
                            Nothing)

                        ' Use the EndConvert method to get the result. 
                        request.EndConvert(result)

                        ' Add the converted file to the document library.
                        Dim newFile As SPFile = docs.Files.Add(_
                            "newPres1.pptx", _
                            stream, _
                            True)

                        Console.WriteLine("Output: {0}", newFile.Url)
                    End Using
                End Using
            Catch ex As Exception
                Console.WriteLine("Error: " + ex.Message)
            Finally
                Console.WriteLine("Complete")
                Console.ReadKey()
            End Try
        End Sub
    End Class
End Namespace

```


### To build and run the example


1. Add a PowerPoint document named Pres1.ppt to the Shared Documents folder in the SharePoint site.
    
  
2. Build and run the example.
    
  
3. After waiting one minute for the conversion process to run, navigate to the Shared Documents folder in the SharePoint site, and refresh the page. The document library now contains a new PowerPoint document, Pres1.pptx.
    
  
PowerPoint Automation Services on SharePoint provides businesses with advanced capabilities for managing their presentation files. This high-performance solution allows scalable, server-side presentation manipulation and generation, as a batch or on-demand. 
  
    
    

> **Note:**
>  Before you run the example, make sure that PowerPoint Automation Services has been enabled in the SharePoint Central Administration console.<br/>  To verify that PowerPoint Automation Services is enabled, do the following: <ul><li>In the Central Administration console, under **System Settings**, choose **Manage services on server**, and then make sure that the **PowerPoint Conversion Service** is set to **Started**. </li><li>Also in the Central Administration console, under **Application Management**, choose **Manage service applications**, and then make sure that the **PowerPoint Conversion Service Application** and **PowerPoint Conversion Service Application Proxy** are set to Started.</li></ul>
  
    
    


## Conclusion
<a name="PAS_Conclusion"> </a>

PowerPoint Automation Services on SharePoint provides businesses with advanced capabilities for managing their presentation files. This high-performance solution allows scalable, server-side presentation manipulation and generation, as a batch or on-demand. 
  
    
    

## Additional Resources
<a name="PAS_Additional"> </a>


-  [Developing with SharePoint 2010 Word Automation Services](http://msdn.microsoft.com/en-us/library/ff742315.aspx)
    
  
-  [PowerPoint Developer Center](http://msdn.microsoft.com/en-us/office/aa905465)
    
  
-  [SharePoint Developer Center](http://msdn.microsoft.com/en-us/sharepoint/default.aspx)
    
  

