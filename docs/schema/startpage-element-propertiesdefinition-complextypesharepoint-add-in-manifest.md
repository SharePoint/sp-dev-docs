---
manager: soliver
ms.date: 9/17/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3092674c-a6c3-9021-3d7e-e716562a4a4f
---

# StartPage element (PropertiesDefinition complexType) 

(SharePoint Add-in Manifest)

**Applies to**: SharePoint Add-ins | SharePoint Foundation 2013 | SharePoint Server 2013

Typically, the URL of the page visited when the SharePoint Add-in is launched. However, it can also be the URL of a controller method or a web service method that is invoked when the add-in is launched.

> [!NOTE] 
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

When the child element of the [AppPrincipal](appprincipal-element-appdefinition-complextypesharepoint-add-in-manifest.md) element is not
[Internal](internal-element-appprincipaldefinition-complextypesharepoint-add-in-manifest.md), the page specified
in the **StartPage** element must be of a file type that supports the POST verb (in addition to GET) so that the OAuth context token can be sent on the body of the request. 

Common file types that are typically configured in web servers to support POST are aspx, php, and other types that support server-side code. Add-ins that have an Internal add-in principal do not use OAuth, and consequently, the start page of such add-ins can be a type that is not configured in the target web server to support POST. HTML files, for example, frequently do not support POST.

<br/>

```XML 
    <StartPage>http://domain_of_remote_component/Home.aspx?{StandardTokens}</StartPage>
```

<br/>

If the remote web server binds the remote component to a port other than 80 when the protocol is HTTP, or 443 when the protocol is HTTPS, the port must be included explicitly as in the following example.

```XML 
    <StartPage>http://domain_of_remote_component:3333/Home.aspx?{StandardTokens}</StartPage>
```

<br/>

The value of this element can contain certain tokens to represent information that is not known at development time. The "{StandardTokens}" above is an example. For more information, see [URL strings and tokens in SharePoint Add-ins](../sp-add-ins/url-strings-and-tokens-in-sharepoint-add-ins.md). 

When you are debugging in Visual Studio, the Microsoft Office Developer Tools for Visual Studio use the token `~remoteWebUrl`</span>` in place of the protocol and domain, as in the following example.

```XML 
    <StartPage>~remoteWebUrl/Home.aspx?{StandardTokens}</StartPage>
```

<br/>

The token is automatically replaced by the actual protocol and domain (and port, if needed) by the Office Developer Tools for Visual Studio when the add-in is packaged by using the **Publish** option on the context menu for the SharePoint Add-in project in Visual Studio. If you don't use the Publish Wizard (or you do, but the remote component is being deployed to Azure), you have to manually replace the token before you package the SharePoint Add-in.

If the add-in uses OAuth, the domain part of the StartPage value must exactly match the **Add-in Domain** specified when the SharePoint Add-in was registered with Microsoft Azure Access Control Service (ACS). For more information see [Register SharePoint Add-ins](../sp-add-ins/register-sharepoint-add-ins.md).

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p><a href="urlelementdefinition-complextype-sharepoint-add-in-manifest.md">UrlElementDefinition</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p>http://schemas.microsoft.com/sharepoint/2012/app/manifest</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>appmanifest.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML 
    <xs:element name="StartPage" type="UrlElementDefinition" minOccurs="1" maxOccurs="1" >
         </xs:element>     
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="30%" />
<col width="30%" />
<col width="40%" />
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
<td align="left"><p><a href="properties-element-appdefinition-complextypesharepoint-add-in-manifest.md">Properties</a></p></td>
<td align="left"><p><a href="propertiesdefinition-complextype-sharepoint-add-in-manifest.md">PropertiesDefinition</a></p></td>
<td align="left"><p>Contains information that is global to the add-in.</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

None.

### Attributes

None.

<br/>
<br/>






