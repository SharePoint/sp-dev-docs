---


manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: aea65d49-3b3f-2bf4-50e2-5967ffd753d2
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># Schema map (AppPartConfigDefinition)</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** September 16, 2015

**Applies to**: apps for SharePoint | SharePoint Foundation 2013 |
SharePoint Server 2013*

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The string &quot;app&quot; appears as part, or all, of some element, attribute, and file names because SharePoint Add-ins were originally called &quot;apps for SharePoint&quot;. To ensure backward compatibility, the schemas have not been changed.</p></td>
</tr>
</tbody>
</table>

This topic shows the schema definition for **AppPartConfigDefinition**.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
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








