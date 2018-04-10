---
title: "Schema map (SPS15XSDSearchSet6)"
manager: arnek
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8969fd16-5505-5e36-07ab-c94d2b693093
description: "This topic shows the schema definition for schema_Microsoft.Office.Server.Search."
---

# Schema map (SPS15XSDSearchSet6)

**Applies to:** SharePoint Server 2013

This topic shows the schema definition for **schema_Microsoft.Office.Server.Search**.

```XML
<xs:schema elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema" tns="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search" targetNamespace="http://schemas.datacontract.org/2004/07/Microsoft.Office.Server.Search">
    <xs:element name="LocStringId" type="tns:LocStringId"></xs:element>
    <xs:simpleType name="LocStringId">
        <xs:restriction base="xs:string">
            <xs:enumeration value="Type_Discussion" />
            <xs:enumeration value="Type_Webpage" />
            <xs:enumeration value="Type_ListItem" />
            <xs:enumeration value="Type_Survey" />
            <xs:enumeration value="Type_Publisher" />
            <xs:enumeration value="Type_Excel" />
            <xs:enumeration value="Type_Blog" />
            <xs:enumeration value="Type_TeamSite" />
            <xs:enumeration value="Type_Project" />
            <xs:enumeration value="Type_Text" />
            <xs:enumeration value="Type_List" />
            <xs:enumeration value="Type_MicroBlog" />
            <xs:enumeration value="Type_Email" />
            <xs:enumeration value="Type_Wiki" />
            <xs:enumeration value="Type_PictureLibraryListItem" />
            <xs:enumeration value="Type_SharePointSite" />
            <xs:enumeration value="Type_Access" />
            <xs:enumeration value="Type_Folder" />
            <xs:enumeration value="Type_XML" />
            <xs:enumeration value="Type_DocumentLibrary" />
            <xs:enumeration value="Type_Visio" />
            <xs:enumeration value="Type_SharePointVideo" />
            <xs:enumeration value="Type_PDF" />
            <xs:enumeration value="Type_Person" />
            <xs:enumeration value="Type_ZIP" />
            <xs:enumeration value="Type_Word" />
            <xs:enumeration value="Type_PictureLibrary" />
            <xs:enumeration value="Type_Image" />
            <xs:enumeration value="Type_Community" />
            <xs:enumeration value="Type_DiscussionBoard" />
            <xs:enumeration value="Type_OneNote" />
            <xs:enumeration value="Type_Reply" />
            <xs:enumeration value="Type_PowerPoint" />
            <xs:enumeration value="Type_VideoFile" />
            <xs:enumeration value="Type_Task" />
        </xs:restriction>
    </xs:simpleType>
</xs:schema>

```


