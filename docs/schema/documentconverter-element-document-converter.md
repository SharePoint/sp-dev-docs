---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bfe1e739-6936-41dc-849a-ac4a7b9e664d
---

# DocumentConverter Element (Document Converter)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the definition of a document converter.

## Definition

```XML
<DocumentConverter
  Id="Text"
  Name="Text"
  App="Text"
  From="Text"
  To="Text"
  ConverterUIPage="Text"
  ConverterSpecificSettingsUI="Text"
  ConverterSettingsForContentType="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies the globally unique identifier (GUID) for this document converter.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. Specifies the document converter name.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**App**</p></td>
<td align="left"><p>Optional **Text**. Specifies the short name of the document converter executable file.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**From**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name extension of the original file to be passed to the document converter. Do not start the file extension with a period.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**To**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name extension of the converted copy that the document converter produces. Do not start the file name extension with a period.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ConverterUIPage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name of the .aspx page to display to users to specify conversion options for the selected document.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ConverterSpecificSettingsUI**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name of an .ascx control to host on an existing converter configuration page. Use the control to add configuration options to the existing page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ConverterSettingsForContentType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name of the .aspx page to display to enable administrators to set configuration settings for this converter, per site content type.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None.</p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="elements-element-document-converter.md">Elements Element (Document Converter)</a></span></p></td>
</tr>
</tbody>
</table>

## Example

The following example is the document converter definition file for a custom document converter that converts files of File Type A format to File Type B format.

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

## See also

- [Working with Features](http://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1(Office.15).aspx)








