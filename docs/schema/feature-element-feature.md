---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 265cd648-1a7e-410f-a1d7-0da8c64b4006
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
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
<td align="left"># Feature Element (Feature)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Defines a Feature to activate or deactivate at a specified scope.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Feature
  ActivateOnDefault = &quot;TRUE&quot; | &quot;FALSE&quot;
  AlwaysForceInstall = &quot;TRUE&quot; | &quot;FALSE&quot;
  AutoActivateInCentralAdmin = &quot;TRUE&quot; | &quot;FALSE&quot;
  Creator = &quot;Text&quot; 
  DefaultResourceFile =  &quot;Text&quot;
  Description = &quot;Text&quot; 
  Hidden = &quot;TRUE&quot; | &quot;FALSE&quot;
  Id = &quot;Text&quot;
  ImageUrl = &quot;Text&quot;
  ImageUrlAltText = &quot;Text&quot;
  ReceiverAssembly = &quot;Text&quot;
  ReceiverClass = &quot;Text&quot;
  RequireResources = &quot;TRUE&quot; | &quot;FALSE&quot;
  Scope = &quot;Text&quot;
  SolutionId = &quot;Text&quot;
  Title = &quot;Text&quot;
  UIVersion = &quot;Text&quot;
  Version = &quot;Text&quot; &gt;
&lt;/Feature&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> if the Feature is activated by default during installation or when a Web application is created; <span class="keyword">FALSE</span> if the Feature is not activated. This attribute equals <span class="keyword">TRUE</span> by default. The <span class="keyword">ActivateOnDefault</span> attribute does not apply to site collection (<span class="keyword">Site</span>) or Web site (<span class="keyword">Web**) scoped Features.</p>
<p>In general, **Farm</span>-scoped Features become activated during installation, and when a new Web application is created, all installed <span class="keyword">Web application**-scoped Features in it become activated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AlwaysForceInstall**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> if the Feature is installed by force during installation even if the Feature is already installed. For example, if set to <span class="keyword">TRUE</span>, <a href="http://msdn.microsoft.com/library/8d61e0ce-9f47-4320-aa19-7043e5dccedb(Office.15).aspx">Feature deployment event handlers</a> will always fire anytime a user tries to install the Feature (even if it is already installed) by using either the <span class="keyword">scanforfeatures</span> or <span class="keyword">installfeature</span> command-line operation. This attribute equals <span class="keyword">FALSE</span> by default. The <span class="keyword">AlwaysForceInstall** attribute affects Features of all scopes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoActivateInCentralAdmin**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> if the Feature is activated by default in the Administrative Web site, site collection, or Web application. This attribute equals <span class="keyword">FALSE</span> by default. The <span class="keyword">AutoActivateInCentralAdmin</span> attribute does not apply to <span class="keyword">Farm**-scoped Features.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Creator**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultResourceFile**</p></td>
<td align="left"><p>Optional** Text</span>. Indicates a common resource file for retrieving Feature XML resources. If you do not specify a resource in the file, SharePoint Foundation looks by default in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATES\FEATURES\<span class="placeholder">FeatureName</span>\Resources\Resources. <span class="placeholder">Culture</span>.resx. However, if you want to provide a shared core resource file for all the Features in your application, you can specify an alternate file through which to access resources by using <span class="keyword">DefaultResourceFile</span>. For example, if you set <span class="keyword">DefaultResourceFile=&quot;</span><span class="placeholder">MyFile</span><span class="keyword">&quot;</span>, SharePoint Foundation looks in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\Resources\<span class="placeholder">MyFile</span>. <span class="placeholder">Culture**.resx to retrieve localized resources for your Feature.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **String**. Returns a longer representation of what the Feature does.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. This attribute equals <span class="keyword">FALSE** by default.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required** Text**. Contains the globally unique identifier (GUID) for the Feature.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>Optional **Text**. Contains an URL relative to the /_layouts/IMAGES directory for an image to use to represent the Feature in the user interface (UI).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUrlAltText**</p></td>
<td align="left"><p>Optional **Text**. Contains the alternate text for the image that represents the Feature.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReceiverAssembly**</p></td>
<td align="left"><p>Optional** Text</span>. If set along with <span class="keyword">ReceiverClass**, specifies the strong name of the signed assembly located in the global assembly cache from which to load a receiver to handle Feature events.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReceiverClass**</p></td>
<td align="left"><p>Optional** Text</span>. If set along with <span class="keyword">ReceiverAssembly**, specifies the class that implements the Feature event processor.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequireResources**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that SharePoint Foundation check whether resources exist for the Feature by verifying that the standard &quot;sentinel&quot; resource for the Feature is present for a particular culture.</p>
<p>The resource file is named according to the format <span class="placeholder">DOCS-LESSTHANFeature DirectoryDOCS-GREATERTHAN</span>\Resources\Resources. <span class="placeholder">DOCS-LESSTHANCulture NameDOCS-GREATERTHAN</span>.resx, where <span class="placeholder">DOCS-LESSTHANCulture NameDOCS-GREATERTHAN</span> is the name that identifies the culture. SharePoint Foundation supports the following formats for culture names:</p>
<p><span class="placeholder">ll-CC</span></p>
<p><span class="placeholder">ll-Ssss-CC</span></p>
<p>Culture name examples:</p>
<p>**en-US** English (United States)</p>
<p>**de-DE** German (Germany)f</p>
<p>**fr-FR** French (France)</p>
<p>**ja-JP** Japanese (Japan)</p>
<p>**sr-Latn-CS** Serbian (Latin, Serbia)</p>
<p>The Internet Engineering Task Force (IETF) language tag format is <span class="code">ll(l)-Ssss-CC</span>, where:</p>
<ul>
<li><p><span class="code">ll(l)</span> denotes the required two-letter language identifier (or three-letter if there is no ISO two-letter code for the language).</p></li>
<li><p><span class="code">Ssss</span> denotes an optional script identifier.</p></li>
<li><p><span class="code">CC</span> denotes an optional region identifier.</p></li>
</ul>
<p></p>
<p>The **RequireResources** attribute allows you to constrict the visibility of certain Features depending on whether resources exist in a particular language for the Feature.</p>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SharePoint Foundation does not use the file specified by the **DefaultResourceFile** attribute, if there is one, as a backup file for verifying support of a particular language for a feature.</p></td>
</tr>
</tbody>
</table>
</div>
<p>If the file is not present for the language of a particular Web site or site collection, then two behaviors can occur:</p>
<ul>
<li><p>The Feature will be hidden from the user interface for activation of Features in the Web site or site collection if the corresponding resources for the language are not available.</p>
<p>Keep in mind that the **RequireResources** attribute is enforced in the user interface only. A Feature without resources for a particular language can still be activated for a Web site through command line operations with stsadm.exe or through the object model.</p>
<p>SharePoint Foundation does not enforce **RequireResources** for Features that are part of a larger site definition. If you supply, for example, a Thai version of a site definition by putting a webtempThai.xml in %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\1054\XML, you must verify that each Feature contained in the folder has the appropriate resources.</p></li>
<li><p>In general, SharePoint Foundation ensures that user interface extension components of the Feature do not show up in Web sites that do not have resources, but there are exceptions. Even if you do a careful job of setting **RequireResources** and not deploying site definitions unless all Features have resources in them, Features can still show up in sites where resources are not available.</p>
<p>As an example scenario, assume that you have a custom Feature with resources for two languages that provides custom toolbar buttons and site settings links, and that you have provisioned a new site collection with a root Web site in one of the languages. Then, after downloading and installing the language pack for a third language, you provision a new subsite in this third language under the original root Web site. If **RequireResources</span> is not set to <span class="keyword">TRUE</span>, the custom Feature will attempt to fall back and use fallback resources (in other words, those defined as <span class="code">Resources\Resources.resx</span>, with no culture.)  If there are no fallback resources, SharePoint Foundation will render empty strings. However, if <span class="keyword">RequireResources</span> is set to <span class="keyword">TRUE**, user interface extension components of the Feature (for example, those defined through a <a href="customaction-element.md">CustomAction</a>, <a href="listtemplate-element-list-template.md">ListTemplate</a>, or <a href="featuresitetemplateassociation-element-featuresitetemplateassociation.md">FeatureSiteTemplateAssociation</a> element) will not show up in subsites if no resources are available, so that the custom links and site settings will be automatically hidden.</p></li>
</ul>
<p>Setting this attribute only applies to activating Features through the user interface, and not through STSADM.EXE command-line operations or the object model.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>Required** Text</span>. Specifies the scope in which the Feature can be activated and contains one of the following values: <span class="keyword">Farm</span> (farm), <span class="keyword">WebApplication</span> (Web application), <span class="keyword">Site </span>(site collection), <span class="keyword">Web** (Web site). For information about scope, see <a href="http://msdn.microsoft.com/library/d7f65b00-9a6f-4614-bca7-b1dbb43e3d16(Office.15).aspx">Element Scope</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Optional** Text**. Specifies the solution to which the Feature belongs.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional **Text**. Returns the title of the Feature. Limited to 255 characters.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UIVersion**</p></td>
<td align="left"><p>Optional **Text**. Specifies the user interface (UI) version for this Feature. UIVersion is specified in multiple ways.</p>
<ul>
<li><p>=<span class="placeholder">#</span> - the site's UIVersion must be equal to <span class="placeholder">#</span>.</p></li>
<li><p>&lt;<span class="placeholder">#</span> - the site's UIVersion must be less than <span class="placeholder">#</span>.</p></li>
<li><p>&gt;<span class="placeholder">#</span> - the site's UIVersion must be greater than <span class="placeholder">#</span>.</p></li>
<li><p>&lt;=<span class="placeholder">#</span> - the site's UIVersion must be less than or equal to <span class="placeholder">#</span>.</p></li>
<li><p>&gt;=<span class="placeholder">#</span> - the site's UIVersion must be greater than or equal to <span class="placeholder">#</span>.</p></li>
<li><p><span class="placeholder">#;#</span> - the site's UIVersion must be in the semicolon-delimited list of numbers.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>Optional** Text</span>. Specifies a <span class="keyword">System.Version**-compliant representation of the version of a Feature. This can be up to four numbers delimited by decimals that represent a version.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="activationdependencies-element-feature.md">ActivationDependencies</a>, <a href="elementmanifests-element-feature.md">ElementManifests</a>, <a href="properties-element-feature.md">Properties</a>, <span sdata="link"><a href="upgradeactions-element-feature.md">UpgradeActions Element (Feature)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SharePoint Foundation supports only low-order ASCII characters, and no
spaces, for Feature folder and file names.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span
sdata="link">[Feature.xml
Files](feature-xml-files.md)</span>.








