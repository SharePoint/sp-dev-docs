---


manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5f68d1c4-1943-c600-9c89-371e4e692747
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
<td align="left"># AppDefinition complexType (SharePoint Add-in Manifest)</td>
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

**Last modified:** September 17, 2015

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


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
              <xs:complexType name="AppDefinition">
              
              <xs:all>
        <xs:element name="AppPrincipal"  type="AppPrincipalDefinition"
         minOccurs="1"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="AppPermissionRequests"  type="AppPermissionRequestsDefinition"
         minOccurs="0"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="Properties"  type="PropertiesDefinition"
         minOccurs="1"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="RemoteEndpoints"  type="RemoteEndpointsDefinition"
         minOccurs="0"
         maxOccurs="1"
        >
        </xs:element>
        
        <xs:element name="AppPrerequisites"  type="AppPrerequisiteCollection"
         minOccurs="0"
         maxOccurs="1"
        >
        </xs:element>
        
          </xs:all>
        <xs:attribute name="ProductID"
      type="GUID"
         use="required"
        />
        <xs:attribute name="Type"
      type="TypeDefinition"
         use="optional"
        />
        <xs:attribute name="Version"
      type="VersionDefinition"
         use="required"
        />
        <xs:attribute name="SharePointMinVersion"
      type="VersionDefinition"
         use="required"
        />
        <xs:attribute name="SharePointMaxVersion"
      type="VersionDefinition"
         use="optional"
        />
        <xs:attribute name="Name"
      type="NameDefinition"
         use="required"
        />
          </xs:complexType>
          


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="apppermissionrequests-element-appdefinition-complextypesharepoint-add-in-manifes.htm">AppPermissionRequests</a></p></td>
<td align="left"><p><a href="apppermissionrequestsdefinition-complextype-sharepoint-add-in-manifest.htm">AppPermissionRequestsDefinition</a></p></td>
<td align="left"><p>A list of resources that a SharePoint Add-in needs access to.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="appprerequisites-element-appdefinition-complextypesharepoint-add-in-manifest.htm">AppPrerequisites</a></p></td>
<td align="left"><p><a href="appprerequisitecollection-complextype-sharepoint-add-in-manifest.htm">AppPrerequisiteCollection</a></p></td>
<td align="left"><p>A list of prerequisites that a SharePoint Add-in depends on.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.htm">AppPrincipal</a></p></td>
<td align="left"><p><a href="appprincipaldefinition-complextype-sharepoint-add-in-manifest.htm">AppPrincipalDefinition</a></p></td>
<td align="left"><p>The add-in principal information.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-appdefinition-complextypesharepoint-add-in-manifest.htm">Properties</a></p></td>
<td align="left"><p><a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.htm">PropertiesDefinition</a></p></td>
<td align="left"><p>Contains information that is global to the add-in.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="remoteendpoints-element-appdefinition-complextypesharepoint-add-in-manifest.htm">RemoteEndpoints</a></p></td>
<td align="left"><p><a href="remoteendpointsdefinition-complextype-sharepoint-add-in-manifest.htm">RemoteEndpointsDefinition</a></p></td>
<td align="left"><p>(Optional) A list of remote endpoints the SharePoint Add-in may access through SP.WebProxy.invoke(). If this list is empty or not provided, the SharePoint Add-in will not be able to use any remote endpoint through SP.WebProxy.invoke().</p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p><a href="namedefinition-simpletype-sharepoint-add-in-manifest.htm">NameDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The name of the SharePoint Add-in. Name is not localized, and is used in Urls that address add-in artifacts.</p></td>
<td align="left"><p>Values of the NameDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ProductID</p></td>
<td align="left"><p><a href="guid-simpletype-sharepoint-add-in-manifest.htm">GUID</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The unique identifier of the SharePoint Add-in. ProductID does not change between versions.</p></td>
<td align="left"><p>Values of the GUID type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SharePointMaxVersion</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.htm">VersionDefinition</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Optional.The maximum version of SharePoint that the add-in is compatible with.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>SharePointMinVersion</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.htm">VersionDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The minimum version of SharePoint that the add-in is compatible with.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Type</p></td>
<td align="left"><p><a href="typedefinition-simpletype-sharepoint-add-in-manifest.htm">TypeDefinition</a></p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The type of the SharePoint Add-in.</p></td>
<td align="left"><p>Values of the TypeDefinition type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Version</p></td>
<td align="left"><p><a href="versiondefinition-simpletype-sharepoint-add-in-manifest.htm">VersionDefinition</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The version of the SharePoint Add-in.</p></td>
<td align="left"><p>Values of the VersionDefinition type.</p></td>
</tr>
</tbody>
</table>








