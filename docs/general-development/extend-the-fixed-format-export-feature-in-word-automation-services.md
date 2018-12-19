---
title: Extend the fixed-format export feature in Word Automation Services
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: d8375505-432e-438e-971b-221a1d9bb601
---


# Extend the fixed-format export feature in Word Automation Services
Extend Word Automation Services in Microsoft Office 2013 to replace the library used by the fixed-format export feature.
## Introduction to the Word file conversion service fixed-format export feature

This article describes how to extend the fixed-format export feature of Word Automation Services to use different fixed-format export DLLs, so third-party developers can replace those provided by Microsoft. This mechanism requires and extends the Office client fixed-format extensibility COM interface. For more information, see  [Extending the Office 2007 Fixed-Format Export Feature](http://msdn.microsoft.com/en-us/library/aa338206.aspx).
  
    
    

## Discovery

Word Automation Services allows third-party developers to replace either or both of the fixed format outputs supported:
  
    
    

- PDF
    
  
- XPS
    
  
To replace each format, the DLL must be located in the same directory as the core library (Sword.dll) for Word Automation Services (install path: \<\<install root\>\>\\WebServices\\ConversionService\\Bin\\Converter\\), and must have the specific file name specified in table 1.
  
    
    

**Table 1. File names for fixed-format export DLLs**


|**Format**|**File Name**|
|:-----|:-----|
|PDF  <br/> |Renderpdf.dll  <br/> |
|XPS  <br/> |Renderxps.dll  <br/> |
   

## Initialization

The DLL must export a method with the following signature.
  
    
    

```

HRESULT HrGetDocExporter (
IMsoDocExporter **ppimde,
IMsoServerFileManagerSite *psfms,
PFNKeepAlive pfnKeepAlive
)
```

The function requires the DLL to supply two interfaces and a method pointer, described in the following section.
  
    
    
If the function returns failure the service will not fall back to the Microsoft-provided exporter. Instead, the service will report the conversion as having failed.
  
    
    

## IMsoDocExporter

The **IMsoDocExporter** interface is identical to the existing interface documented on MSDN. For more information, see [Extending the Office 2007 Fixed-Format Export Feature](http://msdn.microsoft.com/en-us/library/aa338206.aspx). When the previous method returns success, this interface performs the conversion.
  
    
    
Beyond the requirements described in the aforementioned article, developers of fixed-format export DLLs must be aware that the service can call the provided **IMsoDocExporter** on a different thread from the one on which the service called **HrGetDocExporter**. The DLL must be able to handle this without marshalling the call back to the thread that called **HrGetDocExporter**, because the service does not run a message pump and the marshaled call will never get through (resulting in a hang and subsequent failure).
  
    
    

## IMsoServerFileManagerSite

The IMsoServerFileManagerSite interface is defined as follows.
  
    
    

```

#undef  INTERFACE
#define INTERFACE  IMsoServerFileManagerSite
DECLARE_INTERFACE(IMsoServerFileManagerSite)
{
STDMETHOD_(BOOL, FGetHandle) (const WCHAR *pwzFileName, HANDLE *phFile, BOOL fRead, BOOL fWrite) PURE;
STDMETHOD_(BOOL, FCloseHandle) (HANDLE hFile) PURE;
};
```

This interface exposes the following methods.
  
    
    

**Table 2. Methods exposed by the IMsoServerFileManagerSite interface**

|||
|:-----|:-----|
|Method  <br/> |Description  <br/> |
|**FGetHandle** <br/> |Gets a file handle.  <br/> |
|**FCloseHandle** <br/> |Releases a file handle.  <br/> |
   
This interface does not inherit from **IUnknown**. Accordingly, the fixed-format export DLL is allowed to keep a reference to it for its lifetime.
  
    
    

### FGetHandle

The fixed-format export DLL calls this function to get file handles to write to. It must not try to open files through any other mechanism because the service runs in a highly restricted environment without access to most places in the file system.
  
    
    

```

BOOL FGetHandle (
const WCHAR *pwzFile,
HANDLE *phFile,
BOOL fRead,
BOOL fWrite
)
```


**Table 3. FGetHandle parameters**

|||
|:-----|:-----|
|Parameter  <br/> |Description  <br/> |
|**pwzFile** <br/> |Specifies the name of the file the fixed-format export DLL wants to open. This must not be a full file path—it must specify only a file name (for example, Output.pdf).  <br/> |
|**phFile** <br/> |Specifies the handle to the specified file, if the file is opened successfully. The fixed-format export DLL can then use this HANDLE in normal file operations until it closes it by calling the **FCloseHandle** method. <br/> |
|**fRead** <br/> |Specifies whether the file is to be opened with read access.  <br/> |
|**fWrite** <br/> |Specifies whether the file is to be opened with write access. This function returns TRUE to indicate success and FALSE to indicate failure.  <br/> |
   

### FCloseHandle

The fixed-format export DLL calls this function to close file handles obtained through calls to the **FGetHandle** method.
  
    
    

```

BOOL FCloseHandle (
HANDLE phFile,
)
```

The  *phFile*  parameter specifies the handle to the file to be closed. If the value returned by this method is 0, the operation failed. All other values indicate success.
  
    
    

## PFNKeepAlive

When the fixed-format export DLL is active, it must call the **KeepAlive** function at regular intervals (configurable by the administrator) to prevent the service from assuming that the fixed-format export DLL is not responding, and thus terminating the process.
  
    
    
 `typedef void (*PFNKeepAlive)(void)`
  
    
    

## See also
<a name="bk_addresources"> </a>

For more information, see the following resources:
  
    
    

-  [Extending the Office 2007 Fixed-Format Export Feature](http://msdn.microsoft.com/en-us/library/office/aa338206%28v=office.12%29.aspx)
    
  

