---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 265cd648-1a7e-410f-a1d7-0da8c64b4006
---

# Feature Element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a Feature to activate or deactivate at a specified scope.

## Definition

```XML
<Feature
  ActivateOnDefault = "TRUE" | "FALSE"
  AlwaysForceInstall = "TRUE" | "FALSE"
  AutoActivateInCentralAdmin = "TRUE" | "FALSE"
  Creator = "Text" 
  DefaultResourceFile =  "Text"
  Description = "Text" 
  Hidden = "TRUE" | "FALSE"
  Id = "Text"
  ImageUrl = "Text"
  ImageUrlAltText = "Text"
  ReceiverAssembly = "Text"
  ReceiverClass = "Text"
  RequireResources = "TRUE" | "FALSE"
  Scope = "Text"
  SolutionId = "Text"
  Title = "Text"
  UIVersion = "Text"
  Version = "Text" >
</Feature>
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
<td align="left"><p>**ActivateOnDefault**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the Feature is activated by default during installation or when a Web application is created; **FALSE** if the Feature is not activated. This attribute equals **TRUE** by default. The **ActivateOnDefault** attribute does not apply to site collection (**Site**) or website (**Web**) scoped Features.</p>
<p>In general, **Farm**-scoped Features become activated during installation, and when a new Web application is created, all installed **Web application**-scoped Features in it become activated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AlwaysForceInstall**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the Feature is installed by force during installation even if the Feature is already installed. For example, if set to **TRUE**, <a href="http://msdn.microsoft.com/library/8d61e0ce-9f47-4320-aa19-7043e5dccedb(Office.15).aspx">Feature deployment event handlers</a> will always fire anytime a user tries to install the Feature (even if it is already installed) by using either the **scanforfeatures** or **installfeature** command-line operation. This attribute equals **FALSE** by default. The **AlwaysForceInstall** attribute affects Features of all scopes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoActivateInCentralAdmin**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the Feature is activated by default in the Administrative website, site collection, or Web application. This attribute equals **FALSE** by default. The **AutoActivateInCentralAdmin** attribute does not apply to **Farm**-scoped Features.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Creator**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultResourceFile**</p></td>
<td align="left"><p>Optional **Text**. Indicates a common resource file for retrieving Feature XML resources. If you do not specify a resource in the file, SharePoint Foundation looks by default in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATES\FEATURES\*FeatureName*\Resources\Resources._Culture_.resx.</p>
<p>However, if you want to provide a shared core resource file for all the Features in your application, you can specify an alternate file through which to access resources by using **DefaultResourceFile**. For example, if you set **DefaultResourceFile**="_MyFile_", SharePoint Foundation looks in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\Resources\*MyFile*._Culture_.resx to retrieve localized resources for your Feature.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **String**. Returns a longer representation of what the Feature does.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean**. This attribute equals **FALSE** by default.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required **Text**. Contains the globally unique identifier (GUID) for the Feature.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>Optional **Text**. Contains a URL relative to the \_layouts/IMAGES directory for an image to use to represent the Feature in the user interface (UI).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUrlAltText**</p></td>
<td align="left"><p>Optional **Text**. Contains the alternate text for the image that represents the Feature.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReceiverAssembly**</p></td>
<td align="left"><p>Optional **Text**. If set along with **ReceiverClass**, specifies the strong name of the signed assembly located in the global assembly cache from which to load a receiver to handle Feature events.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReceiverClass**</p></td>
<td align="left"><p>Optional **Text**. If set along with **ReceiverAssembly**, specifies the class that implements the Feature event processor.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequireResources**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to specify that SharePoint Foundation check whether resources exist for the Feature by verifying that the standard "sentinel" resource for the Feature is present for a particular culture.</p>
<p>The resource file is named according to the format `<Feature Directory>\Resources\Resources.<Culture Name>.resx`, where `<Culture Name>` is the name that identifies the culture. SharePoint Foundation supports the following formats for culture names:</p>
<p>`ll-CC`</p>
<p>`ll-Ssss-CC`</p><br/>
<p>**Culture name examples:**</p>
<p>**en-US** English (United States)</p>
<p>**de-DE** German (Germany)f</p>
<p>**fr-FR** French (France)</p>
<p>**ja-JP** Japanese (Japan)</p>
<p>**sr-Latn-CS** Serbian (Latin, Serbia)</p>
<p>The Internet Engineering Task Force (IETF) language tag format is `ll(l)-Ssss-CC`, where:</p>
<ul>
<li><p>`ll(l)` denotes the required two-letter language identifier (or three-letter if there is no ISO two-letter code for the language).</p></li>
<li><p>`Ssss` denotes an optional script identifier.</p></li>
<li><p>`CC` denotes an optional region identifier.</p></li>
</ul>
<p></p>
<p>The **RequireResources** attribute allows you to constrict the visibility of certain Features depending on whether resources exist in a particular language for the Feature.</p>
<p>**Note**: SharePoint Foundation does not use the file specified by the **DefaultResourceFile** attribute, if there is one, as a backup file for verifying support of a particular language for a feature.</p>
<p>If the file is not present for the language of a particular website or site collection, then two behaviors can occur:</p>
<ul>
<li><p>The Feature will be hidden from the user interface for activation of Features in the website or site collection if the corresponding resources for the language are not available.</p>
<p>Keep in mind that the **RequireResources** attribute is enforced in the user interface only. A Feature without resources for a particular language can still be activated for a website through command line operations with stsadm.exe or through the object model.</p>
<p>SharePoint Foundation does not enforce **RequireResources** for Features that are part of a larger site definition. If you supply, for example, a Thai version of a site definition by putting a webtempThai.xml in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1054\XML, you must verify that each Feature contained in the folder has the appropriate resources.</p></li><br/>
<li><p>In general, SharePoint Foundation ensures that user interface extension components of the Feature do not show up in websites that do not have resources, but there are exceptions. Even if you do a careful job of setting **RequireResources** and not deploying site definitions unless all Features have resources in them, Features can still show up in sites where resources are not available.</p>
<p>As an example scenario, assume that you have a custom Feature with resources for two languages that provides custom toolbar buttons and site settings links, and that you have provisioned a new site collection with a root website in one of the languages. Then, after downloading and installing the language pack for a third language, you provision a new subsite in this third language under the original root website. If **RequireResources** is not set to **TRUE**, the custom Feature will attempt to fall back and use fallback resources (in other words, those defined as `Resources\Resources.resx`, with no culture.)  If there are no fallback resources, SharePoint Foundation will render empty strings. However, if **RequireResources** is set to **TRUE**, user interface extension components of the Feature (for example, those defined through a <a href="customaction-element.md">CustomAction</a>, <a href="listtemplate-element-list-template.md">ListTemplate</a>, or <a href="featuresitetemplateassociation-element-featuresitetemplateassociation.md">FeatureSiteTemplateAssociation</a> element) will not show up in subsites if no resources are available, so that the custom links and site settings will be automatically hidden.</p></li>
</ul>
<p>Setting this attribute only applies to activating Features through the user interface, and not through STSADM.EXE command-line operations or the object model.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>Required **Text**. Specifies the scope in which the Feature can be activated and contains one of the following values: **Farm** (farm), **WebApplication** (Web application), **Site** (site collection), **Web** (website). For information about scope, see <a href="http://msdn.microsoft.com/library/d7f65b00-9a6f-4614-bca7-b1dbb43e3d16(Office.15).aspx">Element Scope</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the solution to which the Feature belongs.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional **Text**. Returns the title of the Feature. Limited to 255 characters.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UIVersion**</p></td>
<td align="left"><p>Optional **Text**. Specifies the user interface (UI) version for this Feature. UIVersion is specified in multiple ways.</p>
<ul>
<li><p>`=#` - the site's UIVersion must be equal to `#`.</p></li>
<li><p>`<#` - the site's UIVersion must be less than `#`.</p></li>
<li><p>`>#` - the site's UIVersion must be greater than `#`.</p></li>
<li><p>`<=#` - the site's UIVersion must be less than or equal to `#`.</p></li>
<li><p>`>=#` - the site's UIVersion must be greater than or equal to `#`.</p></li>
<li><p>`#;#` - the site's UIVersion must be in the semicolon-delimited list of numbers.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>Optional **Text**. Specifies a **System.Version**-compliant representation of the version of a Feature. This can be up to four numbers delimited by decimals that represent a version.</p></td>
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
<td align="left"><p><a href="activationdependencies-element-feature.md">ActivationDependencies</a>, <a href="elementmanifests-element-feature.md">ElementManifests</a>, <a href="properties-element-feature.md">Properties</a>, <a href="upgradeactions-element-feature.md">UpgradeActions Element (Feature)</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

None


### Remarks

SharePoint Foundation supports only low-order ASCII characters, and no spaces, for Feature folder and file names.


## Example

For an example of how this element is used, see [Feature.xml Files](feature-xml-files.md).








