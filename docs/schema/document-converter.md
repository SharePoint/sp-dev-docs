---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: cd110fe6-2968-4dd7-80fa-0269fa01251b
---

# Document Converter

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Each element manifest file that defines document converters must adhere to the Document Converter Definition schema.

Following is a list of the elements in the Document Converter Definition schema. Select the element name for detailed information about that element.

- [DocumentConverter element (Document Converter)](documentconverter-element-document-converter.md)

- [Elements element (Document Converter)](elements-element-document-converter.md)

## Document converter definition schema example

The following example is the document converter definition file for a custom document converter that converts files of "File Type A" format to "File Type B" format.

```XML 
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <DocumentConverter ID="{3f8ae156-93dc-46de-bcb3-0a89416a20b3}"
        Name="FileTypeA to FileTypeB"
        App="FTA2FTB.exe"
        From="fta"
        To="ftb"
        ConverterUIPage="FTA2FTB.aspx"
        ConverterSpecificSettingsUI="FTA2FTBConfig.aspx"
        ConverterSettingsForContentType="FTA2FTBConfig.ascx"
      />
    </Elements>
```

<br/>

## See also

- [Using Features in SharePoint Foundation](https://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1(Office.15).aspx)









