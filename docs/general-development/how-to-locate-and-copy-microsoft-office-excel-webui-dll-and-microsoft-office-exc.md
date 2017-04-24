---
title: How to Locate and Copy Microsoft.Office.Excel.WebUI.dll and Microsoft.Office.Excel.WebUI.Internal.dll
keywords: how to,howdoi,howto,WebUI DLL
f1_keywords:
- how to,howdoi,howto,WebUI DLL
ms.prod: OFFICE365
ms.assetid: 09ad5d5e-1678-45e4-8159-23ef56f84215
---


# How to: Locate and Copy Microsoft.Office.Excel.WebUI.dll and Microsoft.Office.Excel.WebUI.Internal.dll

If you want to programmatically add an Excel Web Access Web Part to a SharePoint page and programmatically change the Excel Web Access Web Part, you must add a reference to the required SharePoint DLLs. For example: 
  
    
    


- Microsoft.Office.Excel.WebUI.dll
    
  
- Microsoft.Office.Excel.WebUI.Internal.dll
    
  
- Microsoft.SharePoint.dll
    
  

On the computer running Microsoft SharePoint Server 2010, you can find a copy of Microsoft.Office.Excel.WebUI.dll and Microsoft.Office.Excel.WebUI.Internal.dll in the global assembly cache. Before you can add a reference to Microsoft.Office.Excel.WebUI.dll by using the **Add Reference** dialog box in Microsoft Visual Studio, you must first copy Microsoft.Office.Excel.WebUI.dll and Microsoft.Office.Excel.WebUI.Internal.dll from the global assembly cache to a folder. Then, you can use the **Browse** tab in the **Add Reference** dialog box to browse to the folder that contains the copy of Microsoft.Office.Excel.WebUI.dll and Microsoft.Office.Excel.WebUI.Internal.dll.
  
    
    

The following steps show how to: 
- Locate Microsoft.Office.Excel.WebUI.dll. 
    
  
- Copy Microsoft.Office.Excel.WebUI.dll from the global assembly cache to a folder of your choice.
    
  

> [!NOTE]
> Repeat the steps to copy Microsoft.Office.Excel.WebUI.Internal.dll from the global assembly cache to a folder. 
  
    
    


### To locate Microsoft.Office.Excel.WebUI.dll


1. To start the command-prompt console, click **Start**, and then click **Run**. 
    
  
2. In the **Open** field text box, typecmd. 
    
    The command-prompt console appears.
    
  
3. Use the **cd** command to navigate to the "C:\\Windows\\assembly" directory:
    
    > [!NOTE]
      > The directory structure on your computer might be slightly different. This example uses a computer that has Windows Server 2008 installed. 

  ```
  
cd C:\\Windows\\assembly
  ```

4. Use the **dir** command to display the contents of the "C:\\Windows\\assembly" directory:
    
  ```
  C:\\Windows\\assembly>dir
  ```


    You will see contents similar to the following:
    


  ```
  Volume in drive C has no label.
 
 Directory of C:\\Windows\\assembly

02/20/2010  09:22 AM    <DIR>          GAC
02/20/2010  09:39 AM    <DIR>          GAC_32
02/20/2010  09:32 AM    <DIR>          GAC_64
02/22/2010  05:05 PM    <DIR>          GAC_MSIL
02/22/2010  05:35 PM    <DIR>          NativeImages_v2.0.50727_32
02/22/2010  04:33 PM    <DIR>          NativeImages_v2.0.50727_64
02/20/2010  10:34 AM    <DIR>          NativeImages_v4.0.30219_32
02/20/2010  10:35 AM    <DIR>          NativeImages_v4.0.30219_64
02/22/2010  05:04 PM    <DIR>          temp
02/22/2010  05:05 PM    <DIR>          tmp
               0 File(s)              0 bytes
              10 Dir(s)  104,032,665,600 bytes free
  ```

5. Use the **cd** command again to change the directory and navigate to the gac_msil directory:
    
  ```
  
C:\\Windows\\assembly>cd gac_msil
  ```

6. Use the **dir** command to display the content of the "C:\\Windows\\assembly\\GAC_MSIL" directory:
    
  ```
  C:\\Windows\\assembly\\GAC_MSIL>dir
  ```


    You will see contents similar to the following:
    


  ```
  Volume in drive C has no label.
Directory of C:\\Windows\\assembly\\GAC_MSIL
...
02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.Server.Udf
02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.Server.WebServices

02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.WebUI
02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.WebUI.Internal
...
02/20/2010  07:57 AM    <DIR>          Microsoft.SharePoint
...
0 File(s)              0 bytes
             739 Dir(s)  100,594,409,472 bytes free
  ```

7. Now that you have located Microsoft.Office.Excel.WebUI.dll and Microsoft.Office.Excel.WebUI.Internal.dll, you can copy them to a folder of your choice.
    
  

### To copy Microsoft.Office.Excel.WebUI.dll


1. Use the **cd** command again to change the directory to "Microsoft.Office.Excel.WebUI":
    
  ```
  
C:\\Windows\\assembly\\GAC_MSIL>cd Microsoft.Office.Excel.WebUI 
  ```

2. Use the **dir** command to display the contents:
    
  ```
  C:\\Windows\\assembly\\GAC_MSIL\\Microsoft.Office.Excel.WebUI>dir
  ```


    You will see contents similar to the following:
    


  ```
  Volume in drive C has no label.
Directory of C:\\Windows\\assembly\\GAC_MSIL\Microsoft.Office.Excel.WebUI

02/20/2010  07:57 AM    <DIR>          .
02/20/2010  07:57 AM    <DIR>          ..
02/20/2010  07:57 AM    <DIR>          14.0.0.0__71e9bce111e9429c
               0 File(s)              0 bytes
               3 Dir(s)  104,006,115,328 bytes free
  ```

3. Use the **cd** command again to change the directory:
    
  ```
  
C:\\Windows\\assembly\\GAC_MSIL\\Microsoft.Office.Excel.WebUI>cd 14.0.0.0__71e9bce111e9429c
  ```

4. Use the **copy** command to copy Microsoft.Office.Excel.WebUI.dll to a folder of your choice.
    
    In the following example, Microsoft.Office.Excel.WebUI.dll is copied to "C:\\WebUIAssembly", where "C:\\WebUIAssembly" is a folder that you created previously:
    


  ```
  C:\\Windows\\assembly\\GAC_MSIL\\Microsoft.Office.Excel.WebUI\\14.0.0.0__71e9bce111e9429c>copy Microsoft.Office.Excel.WebUI.dll c:\\WebUIAssembly
        1 file(s) copied.
  ```


## Example

The following is an example of the result of using the command prompt to locate and copy Microsoft.Office.Excel.WebUI.dll to a folder.
  
    
    

```

C:\\Windows\\assembly>dir
Volume in drive C has no label.
Directory of C:\\Windows\\assembly

02/20/2010  09:22 AM    <DIR>          GAC
02/20/2010  09:39 AM    <DIR>          GAC_32
02/20/2010  09:32 AM    <DIR>          GAC_64
02/22/2010  05:05 PM    <DIR>          GAC_MSIL
02/22/2010  05:35 PM    <DIR>          NativeImages_v2.0.50727_32
02/22/2010  04:33 PM    <DIR>          NativeImages_v2.0.50727_64
02/20/2010  10:34 AM    <DIR>          NativeImages_v4.0.30219_32
02/20/2010  10:35 AM    <DIR>          NativeImages_v4.0.30219_64
02/22/2010  05:04 PM    <DIR>          temp
02/22/2010  05:05 PM    <DIR>          tmp
               0 File(s)              0 bytes
              10 Dir(s)  104,032,665,600 bytes free
C:\\Windows\\assembly>cd gac_msil

C:\\Windows\\assembly\\GAC_MSIL>dir
 Volume in drive C has no label.
 Directory of C:\\Windows\\assembly\GAC_MSIL
...
02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.Server.Udf
02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.Server.WebServices

02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.WebUI
02/20/2010  07:57 AM    <DIR>          Microsoft.Office.Excel.WebUI.Internal
...

C:\\Windows\\assembly\\GAC_MSIL>cd Microsoft.Office.Excel.WebUI

C:\\Windows\\assembly\\GAC_MSIL\\Microsoft.Office.Excel.WebUI>dir
 Volume in drive C has no label.
Directory of C:\\Windows\\assembly\\GAC_MSIL\Microsoft.Office.Excel.WebUI

02/20/2010  07:57 AM    <DIR>          .
02/20/2010  07:57 AM    <DIR>          ..
02/20/2010  07:57 AM    <DIR>          14.0.0.0__71e9bce111e9429c
               0 File(s)              0 bytes
               3 Dir(s)  104,006,115,328 bytes free

C:\\Windows\\assembly\\GAC_MSIL\\Microsoft.Office.Excel.WebUI>cd 14.0.0.0__71e9bce111e9429c

C:\\Windows\\assembly\\GAC_MSIL\\Microsoft.Office.Excel.WebUI\\14.0.0.0__71e9bce111e9429c>copy Microsoft.Office.Excel.WebUI.dll c:\\WebUIAssembly
        1 file(s) copied.

C:\\Windows\\assembly\\GAC_MSIL\\Microsoft.Office.Excel.WebUI\\14.0.0.0__71e9bce111e9429c>
```


## See also


#### Tasks


  
    
    
 [How to: Programmatically Add an Excel Web Access Web Part to a Page](how-to-programmatically-add-an-excel-web-access-web-part-to-a-page.md)
  
    
    
 [How to: Trust a Location](how-to-trust-a-location.md)
#### Concepts


  
    
    
 [Excel Services Alerts](excel-services-alerts.md)
  
    
    
 [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips.md)
