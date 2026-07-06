---
title: Step 4 Building and Testing the Application
description: In this step, you'll build and test your application. Visual Studio offers several methods to build and run a console application from the IDE.
ms.date: 04/24/2017
ms.assetid: f2feeecb-1b4c-4049-be4e-11d414f13d9f
ms.localizationpriority: medium
---

# Step 4: Building and Testing the Application

> [!IMPORTANT]
> This example uses SOAP-based XML Web Services (System.Web.Services) and the SoapException class. These technologies are part of the .NET Framework and are considered legacy. For new development, Microsoft recommends using REST APIs or Microsoft Graph.

In this step, you'll build and test your application. Visual Studio offers several methods to build and run a console application from the IDE, such as:

- Start Without Debugging (**CTRL + F5**)
- Start (**F5**)

## Build, Run, and Debug the Application

### To build and run the application

1. On the **Debug** menu, select **Start Without Debugging** or press **CTRL + F5**. This ensures that the console window remains open after the program has finished executing.
1. The application prints the following output to the console.

    > [!NOTE]
    > These values vary depending on the values you have in your workbook, session ID, and so on.

    ```
    Total rows in range: 18
    Value in range is: 4245.955129
    ```

1. Press any key to close SampleApplication.exe.

### File Not Found Exception

1. If the path to the workbook you provided is wrong, you'll get a "file not found" exception, which is caught by the following code:

    ```csharp
    catch (SoapException e)
    {
      Console.WriteLine("SOAP Exception Message: {0}", e.Message);
    }
    ```

    ```vb.net
    Catch e As SoapException
    Console.WriteLine("SOAP Exception Message: {0}", e.Message)
    End Try
    ```

1. The application prints the following SOAP exception output to the console:

    ```text
    SOAP Exception Message: The file you selected could not be found. Check the spelling of the file name and verify that the location is correct.
    ```

### Index Out Of Range Exception

1. If you try to get a value from outside the range, you'll get a **System.IndexOutOfRangeException** exception. The application prints the following output to the console:

    ```text
    Total rows in range: 18
    ```

1. Then you'll get an unhandled exception that says:

    ```text
    An unhandled exception of type 'System.IndexOutOfRangeException' occurred in SampleApplication.exe
    Additional information: Index was outside the bounds of the array.
    ```

1. You can handle the preceding unhandled exception by adding another **catch** block to catch the exception after the SOAP exception **catch** block as shown here:

    ```csharp
    catch (Exception e)
    {
      Console.WriteLine("Exception Message: {0}", e.Message);
    }
    ```

    ```vb.net
    Catch e As Exception
    Console.WriteLine("Exception Message: {0}", e.Message)
    End Try
    ```

### To run the application using F5

1. You can run your application by clicking **Start** on the **Debug** menu, or by pressing **F5**. To ensure that the console window remains open after the program has finished executing, you could add the following line of code at the end of your code (after the **catch** block):

    ```csharp
    Console.ReadLine();
    ```

    ```vb.net
    Console.ReadLine()
    ```

1. Press any key to close SampleApplication.exe.

## See also

#### Concepts

- [Accessing the SOAP API](accessing-the-soap-api.md)

#### Other resources

- [Step 1: Creating the Web Service Client Project](step-1-creating-the-web-service-client-project.md)
- [Step 2: Adding a Web Reference](step-2-adding-a-web-reference.md)
- [Step 3: Accessing the Web Service](step-3-accessing-the-web-service.md)
- [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
- [How to: Trust Workbook Locations Using Script](https://msdn.microsoft.com/library/79ab6ced-7a0c-4275-b852-bb246fc6be57%28Office.15%29.aspx)
