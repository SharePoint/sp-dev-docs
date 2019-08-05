---
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: aea65d49-3b3f-2bf4-50e2-5967ffd753d2
---

# Schema map (AppPartConfigDefinition)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

This topic shows the schema definition for **AppPartConfigDefinition**.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

```XML 
    <?xml version="1.0" encoding="utf-8"?>
    <xs:schema targetNamespace="http://schemas.microsoft.com/sharepoint/2012/app/partconfiguration"
        elementFormDefault="qualified"
        xmlns="http://schemas.microsoft.com/sharepoint/2012/app/partconfiguration"
        xmlns:xs="http://www.w3.org/2001/XMLSchema">

      <!-- AppPartConfig Element-->
      <xs:element name="AppPartConfig" type="AppPartConfigDefinition">
        <xs:annotation>
          <xs:documentation>The top level node of an app part configuration file.</xs:documentation>
        </xs:annotation>
      </xs:element>

      <xs:complexType name="AppPartConfigDefinition">
        <xs:all>
          <xs:element name="Id" type="GUID" minOccurs="1" maxOccurs="1">
            <xs:annotation>
              <xs:documentation>The unique identifier of the app part.</xs:documentation>
            </xs:annotation>
          </xs:element>
          <xs:element name="Settings"  type="SettingsDefinition" minOccurs="0" maxOccurs="1">
            <xs:annotation>
              <xs:documentation>Contains app part specific settings.</xs:documentation>
            </xs:annotation>
            <xs:unique name="unique-name">
              <xs:selector xpath="*"/>
              <xs:field xpath="@Name"/>
            </xs:unique>
          </xs:element>
        </xs:all>
      </xs:complexType>

      <xs:complexType name="SettingsDefinition">
        <xs:sequence>
          <xs:element name="Setting" type="SettingDefinition" minOccurs="1" maxOccurs="25">
            <xs:annotation>
              <xs:documentation>An app part setting.</xs:documentation>
            </xs:annotation>
          </xs:element>
        </xs:sequence>
      </xs:complexType>

      <xs:complexType name="SettingDefinition">
        <xs:attribute name="Name" type="NameDefinition" use="required">
          <xs:annotation>
            <xs:documentation>The name of the app part setting.</xs:documentation>
          </xs:annotation>
        </xs:attribute>
        <xs:attribute name="Value" type="ValueDefinition" use="required">
          <xs:annotation>
            <xs:documentation>The value of the app part setting.</xs:documentation>
          </xs:annotation>
        </xs:attribute>
      </xs:complexType>

      <xs:simpleType name="NameDefinition">
        <xs:restriction base="xs:string">
          <xs:minLength value="1"/>
          <xs:maxLength value="64"/>
        </xs:restriction>
      </xs:simpleType>

      <xs:simpleType name="ValueDefinition">
        <xs:restriction base="xs:string">
          <xs:minLength value="1"/>
          <xs:maxLength value="256"/>
        </xs:restriction>
      </xs:simpleType>

      <xs:simpleType name="GUID">
        <xs:restriction base="xs:string">
          <xs:pattern value="(\{[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\})|([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})"/>
        </xs:restriction>
      </xs:simpleType>

    </xs:schema>
```







