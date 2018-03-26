---

manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6793ccee-0f76-f798-eeb8-c1f9309d7685
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
<td align="left"># Schema map (SharePoint Add-in Manifest)</td>
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

This topic shows the schema definition for <span class="keyword">App
Manifest</span>.

**Last modified:** September 16, 2015

**Applies to**: apps for SharePoint | SharePoint Foundation 2013 |
SharePoint Server 2013

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

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:schema targetNamespace="http://schemas.microsoft.com/sharepoint/2012/app/manifest" elementFormDefault="qualified" xmlns="http://schemas.microsoft.com/sharepoint/2012/app/manifest" xmlns:xs="http://www.w3.org/2001/XMLSchema">
        <xs:element name="App" type="AppDefinition"></xs:element>
        <xs:complexType name="AppDefinition">
            <xs:all>
                <xs:element name="AppPrincipal" type="AppPrincipalDefinition" minOccurs="1" maxOccurs="1"></xs:element>
                <xs:element name="AppPermissionRequests" type="AppPermissionRequestsDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="Properties" type="PropertiesDefinition" minOccurs="1" maxOccurs="1"></xs:element>
                <xs:element name="RemoteEndpoints" type="RemoteEndpointsDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="AppPrerequisites" type="AppPrerequisiteCollection" minOccurs="0" maxOccurs="1"></xs:element>
            </xs:all>
            <xs:attribute name="ProductID" type="GUID" use="required" />
            <xs:attribute name="Type" type="TypeDefinition" use="optional" />
            <xs:attribute name="Version" type="VersionDefinition" use="required" />
            <xs:attribute name="SharePointMinVersion" type="VersionDefinition" use="required" />
            <xs:attribute name="SharePointMaxVersion" type="VersionDefinition" use="optional" />
            <xs:attribute name="Name" type="NameDefinition" use="required" />
        </xs:complexType>
        <xs:complexType name="AppPrincipalDefinition">
            <xs:choice>
                <xs:element name="RemoteWebApplication">
                    <xs:attribute name="ClientId" type="AppPermissionAppPrincipalDefinition" use="required" />
                </xs:element>
                <xs:element name="Internal">
                    <xs:attribute name="AllowedRemoteHostUrl" type="ManifestUri" use="optional" />
                    <xs:attribute name="RedirectUrl" type="ManifestUri" use="optional" />
                </xs:element>
                <xs:element name="AutoDeployedWebApplication">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="DebugInfo" type="AutoDeployedWebApplicationDebugInfoDefinition" minOccurs="0"></xs:element>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:choice>
        </xs:complexType>
        <xs:complexType name="AutoDeployedWebApplicationDebugInfoDefinition">
            <xs:attribute name="AppUrl" type="AutoDeployedWebApplicationDebugInfoAppUrlDefinition" use="required" />
            <xs:attribute name="ClientSecret" type="xs:base64Binary" use="required" />
            <xs:attribute name="RedirectUri" type="ManifestUri" use="optional" />
        </xs:complexType>
        <xs:complexType name="PropertiesDefinition">
            <xs:all>
                <xs:element name="InstalledEventEndpoint" type="UrlElementDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="StartPage" type="UrlElementDefinition" minOccurs="1" maxOccurs="1"></xs:element>
                <xs:element name="SupportedLanguages" type="SupportedLanguagesDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="SupportedLocales" type="SupportedLocalesDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="Title" type="TitleDefinition" minOccurs="1" maxOccurs="1"></xs:element>
                <xs:element name="UninstallingEventEndpoint" type="UrlElementDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="UpgradedEventEndpoint" type="UrlElementDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="WebTemplate" type="WebTemplateDefinition" minOccurs="0" maxOccurs="1"></xs:element>
                <xs:element name="SettingsPage" type="UrlElementDefinition" minOccurs="0" maxOccurs="1"></xs:element>
            </xs:all>
        </xs:complexType>
        <xs:complexType name="UrlElementDefinition"></xs:complexType>
        <xs:complexType name="AppPermissionRequestsDefinition">
            <xs:sequence>
                <xs:element name="AppPermissionRequest" type="AppPermissionRequestDefinition" minOccurs="0" maxOccurs="1000"></xs:element>
            </xs:sequence>
            <xs:attribute name="AllowAppOnlyPolicy" type="xs:boolean" use="optional" />
        </xs:complexType>
        <xs:complexType name="AppPermissionRequestDefinition">
            <xs:sequence>
                <xs:element name="Property" type="AppPermissionPropertyDefinition" minOccurs="0" maxOccurs="1000"></xs:element>
            </xs:sequence>
            <xs:attribute name="Scope" type="xs:anyURI" use="required" />
            <xs:attribute name="Right" type="AppPermissionRightDefinition" />
        </xs:complexType>
        <xs:complexType name="AppPermissionPropertyDefinition">
            <xs:attribute name="Name" type="xs:string" />
            <xs:attribute name="Value" type="xs:string" />
        </xs:complexType>
        <xs:complexType name="WebTemplateDefinition">
            <xs:attribute name="Id" type="WebTemplateIdDefinition" use="required" />
            <xs:attribute name="FeatureId" type="GUID" use="optional" />
        </xs:complexType>
        <xs:complexType name="RemoteEndpointsDefinition">
            <xs:sequence>
                <xs:element name="RemoteEndpoint" type="RemoteEndpointDefinition" minOccurs="0" maxOccurs="20"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:complexType name="RemoteEndpointDefinition">
            <xs:attribute name="Url" type="ManifestUri" />
        </xs:complexType>
        <xs:complexType name="SupportedLocalesDefinition">
            <xs:sequence>
                <xs:element name="SupportedLocale" type="SupportedLocaleDefinition" minOccurs="1" maxOccurs="256"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:complexType name="SupportedLocaleDefinition">
            <xs:attribute name="CultureName" type="CultureNameDefinition" use="required" />
        </xs:complexType>
        <xs:complexType name="AppPrerequisiteCollection">
            <xs:sequence>
                <xs:element name="AppPrerequisite" type="AppPrerequisite" maxOccurs="500"></xs:element>
            </xs:sequence>
        </xs:complexType>
        <xs:complexType name="AppPrerequisite">
            <xs:attribute name="Type" type="AppPrerequisiteTypeDefinition" use="required" />
            <xs:attribute name="ID" type="xs:string" use="required" />
            <xs:attribute name="MinimumVersion" type="VersionDefinition" use="optional" />
        </xs:complexType>
        <xs:simpleType name="RestrictedInt">
            <xs:restriction base="xs:int">
                <xs:minExclusive value="0" />
                <xs:maxInclusive value="2000" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="ManifestUri">
            <xs:restriction base="xs:anyURI">
                <xs:minLength value="1" />
                <xs:maxLength value="2083" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="DescriptionDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="1024" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="TypeDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="255" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="SupportedLanguagesDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="2048" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="CultureNameDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="256" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="TitleDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="256" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="WebTemplateIdDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="128" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="AppPermissionRightDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="256" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="AppPermissionAppPrincipalDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="256" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="NameDefinition">
            <xs:restriction base="xs:token">
                <xs:minLength value="1" />
                <xs:maxLength value="64" />
                <xs:pattern value="[A-Za-z0-9][A-Za-z0-9\s-_]*" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="VersionDefinition">
            <xs:restriction base="xs:string">
                <xs:pattern value="\d{1,4}\.\d{1,4}\.\d{1,4}\.\d{1,4}" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="GUID">
            <xs:restriction base="xs:string">
                <xs:pattern value="(\{[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}\})|([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="AppPrincipalTypeDefinition">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Internal" />
                <xs:enumeration value="External" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="AppPrerequisiteTypeDefinition">
            <xs:restriction base="xs:string">
                <xs:enumeration value="Feature" />
                <xs:enumeration value="AutoProvisioning" />
                <xs:enumeration value="Capability" />
            </xs:restriction>
        </xs:simpleType>
        <xs:simpleType name="AutoDeployedWebApplicationDebugInfoAppUrlDefinition">
            <xs:restriction base="xs:string">
                <xs:minLength value="1" />
                <xs:maxLength value="2048" />
            </xs:restriction>
        </xs:simpleType>
    </xs:schema>








