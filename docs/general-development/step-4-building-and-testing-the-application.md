---
title: Step 4 Building and Testing the Application
ms.prod: OFFICE365
ms.assetid: f2feeecb-1b4c-4049-be4e-11d414f13d9f
---


# Step 4: Building and Testing the Application

In this step, you will build and test your application. Visual Studio offers several methods to build and run a console application from the IDE, such as:
  
    
    


- Start Without Debugging ( **CTRL + F5**)
    
  
- Start ( **F5**)
    
  

## Build, Run, and Debug the Application


### To build and run the application


1. On the **Debug** menu, click **Start Without Debugging** or press **CTRL + F5**. This ensures that the console window remains open after the program has finished executing. 
    
  
2. The application prints the following output to the console.
    
    > **Note:**
      > These values vary depending on the values you have in your workbook, session ID, and so on. 

```
  
The Credential is: System.Net.SystemNetworkCredential
Total rows in range: 18
Value in range is: 4245.955129
```

3. Press any key to close SampleApplication.exe.
    
  

### File Not Found Exception


1. If the path to the workbook you provided is wrong, you will get a "file not found" exception, which is caught by the following code:
    
```cs
  
catch (SoapException e)
{
    Console.WriteLine("SOAP Exception Message: {0}", e.Message);
}
```


```VB.net
  
Catch e As SoapException
Console.WriteLine("SOAP Exception Message: {0}", e.Message)
End Try
```

2. The application prints the following SOAP exception output to the console:
    
```
  
SOAP Exception Message: The file you selected could not be found. Check the spelling of the file name and verify that the location is correct.

```


### Index Out Of Range Exception


1. If you try to get a value from outside the range, you will get a **System.IndexOutOfRangeException** exception. The application prints the following output to the console:
    
```
  
The Credential is: System.Net.SystemNetworkCredential
The sessionID is : 64.28e58e90-b757-4658-b1c4-890ad68ef6cbRmqR4IINXfkMeOJRG8Iq0Y
27tVk=110.33d3R6fqv7tr2jPyYiPwRu|!@en-US|en-US|+0480#0000-10-00-05T02:00:00:0000
#+0000#0000-04-00-01T02:00:00:0000#-0060
Total rows in range: 18
```

2. Then you will get an unhandled exception that says:
    
```
  
An unhandled exception of type 'System.IndexOutOfRangeException' occurred in SampleApplication.exe
Additional information: Index was outside the bounds of the array.
```

3. You can handle the above unhandled exception by adding another **catch** block to catch the exception after the SOAP exception **catch** block as shown here:
    
```cs
  
catch (Exception e)
{
    Console.WriteLine("Exception Message: {0}", e.Message);
}
```


```VB.net
  
Catch e As Exception
Console.WriteLine("Exception Message: {0}", e.Message)
End Try
```


### To run the application using F5


1. You can run your application by clicking **Start** on the **Debug** menu, or by pressing **F5**. To ensure that the console window remains open after the program has finished executing, you could add the following line of code at the end of your code (after the **catch** block):
    
```cs
  
Console.ReadLine();
```


```VB.net
  Console.ReadLine()
```

2. Press any key to close SampleApplication.exe.
    
  

## See also


#### Concepts


  
    
    
 [Accessing the SOAP API](accessing-the-soap-api.md)
#### Other resources


  
    
    
 [Step 1: Creating the Web Service Client Project](step-1-creating-the-web-service-client-project.md)
  
    
    
 [Step 2: Adding a Web Reference](step-2-adding-a-web-reference.md)
  
    
    
 [Step 3: Accessing the Web Service](step-3-accessing-the-web-service.md)
  
    
    
 [Walkthrough: Developing a Custom Application Using Excel Web Services](walkthrough-developing-a-custom-application-using-excel-web-services.md)
  
    
    
 [How to: Trust Workbook Locations Using Script](http://msdn.microsoft.com/library/79ab6ced-7a0c-4275-b852-bb246fc6be57%28Office.15%29.aspx)
