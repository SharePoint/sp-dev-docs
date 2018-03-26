---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- solution schema [sharepoint 2010],XML schema [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
api_type:
- schema
ms.assetid: 48efc045-5b54-4332-abed-6813d011c803
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
<td align="left"># Solution schema</td>
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

**Last modified:** July 15, 2011

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

A solution manifest file defines the constituent parts of a solution,
including its files, assemblies, code access security, Web Parts,
Features, site definitions, and other resources.

[Solution](solution-element-solution.htm)

  <span sdata="link">[ActivationDependencies Element
(Solution)](activationdependencies-element-solution.htm)</span>

    <span sdata="link">[ActivationDependency Element
(Solution)](activationdependency-element-solution.htm)</span>

  [ApplicationResourceFiles](applicationresourcefiles-element-solution.htm)

    [ApplicationResourceFile](applicationresourcefile-element-solution.htm)

  [Assemblies](assemblies-element-solutionassemblies.htm)

    [Assembly](assembly-element-solutionassemblies.htm)

      [SafeControls](safecontrols-element-solution.htm)

        [SafeControl](safecontrol-element-solution.htm)

      [ClassResources](classresources-element-solution.htm)

        [ClassResource](classresource-element-solution.htm)

  [CodeAccessSecurity](codeaccesssecurity-element-solution.htm)

    [PolicyItem](policyitem-element-solution.htm)

      [PermissionSet](permissionset-element-solution.htm)

        [IPermission](ipermission-element-solution.htm)

      [Assemblies](assemblies-element-solutioncodeaccesssecurity.htm)

        [Assembly](assembly-element-solutioncodeaccesssecurity.htm)

  [DwpFiles](dwpfiles-element-solution.htm)

    [DwpFile](dwpfile-element-solution.htm)

  [FeatureManifests](featuremanifests-element-solution.htm)

    [FeatureManifest](featuremanifest-element-solution.htm)

  [Resources](resources-element-solution.htm)

    [Resource](resource-element-solution.htm)

  [RootFiles](rootfiles-element-solution.htm)

    [RootFile](rootfile-element-solution.htm)

  [SiteDefinitionManifests](sitedefinitionmanifests-element-solution.htm)

    [SiteDefinitionManifest](sitedefinitionmanifest-element-solution.htm)

      [WebTempFile](webtempfile-element-solution.htm)

  [TemplateFiles](templatefiles-element-solution.htm)

    [TemplateFile](templatefile-element-solution.htm)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows a solution manifest file that includes
declarations for Features, site definition files, and assemblies.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Solution SolutionId="4AFC1350-F354-4439-B941-51377E845F2B" 
      xmlns="http://schemas.microsoft.com/sharepoint/">
      <FeatureManifests>
        <FeatureManifest Location="Calls\feature.xml"/>
        <FeatureManifest Location="ServiceRequest\feature.xml"/>
        <FeatureManifest Location="Customers\feature.xml"/>
        <FeatureManifest Location="HelpDeskCore\feature.xml"/>
      </FeatureManifests>
      <TemplateFiles>
        <TemplateFile Location="Mobile\HelpDeskHomePage.ascx"/>
        <TemplateFile Location="1033\xml\webtemphd.xml"/>
        <TemplateFile Location="SiteTemplates\HelpDesk\onet.xml"/>
        <TemplateFile Location="SiteTemplates\HelpDesk\default.aspx"/>
      </TemplateFiles>
      <Assemblies>
        <Assembly DeploymentTarget="GlobalAssemblyCache"
          Location="HelpDeskCoreFeatureReceiver.dll"/>
        <Assembly DeploymentTarget="WebApplication"
          Location="ServiceRequestValidation.dll"/>
      </Assemblies>
    </Solution>

The following example shows a manifest for a solution that includes two
Features and three global language resource files.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Solution SolutionId="006be6c7-623d-44e2-95af-1f91d78d060a"
      xmlns="http://schemas.microsoft.com/sharepoint/">
      <Assemblies>
        <Assembly Location="WingtipReports.dll" DeploymentTarget="GlobalAssemblyCache" />
      </Assemblies>
      <RootFiles>
        <RootFile Location="Resources\wingtip.resx" />
        <RootFile Location="Resources\wingtip.en-US.resx" />
        <RootFile Location="Resources\wingtip.es-ES.resx" />
      </RootFiles>
      <FeatureManifests>
        <FeatureManifest Location="WeeklyStatusReport\Feature.xml" />
        <FeatureManifest Location="WeeklyStatusList\Feature.xml" />
      </FeatureManifests>
    </Solution>








