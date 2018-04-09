---
title: "Solution schema"
ms.author: rickki
author: rickki
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
description: "Last modified: July 15, 2011"
---

# Solution schema

 **Last modified:** July 15, 2011 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
A solution manifest file defines the constituent parts of a solution, including its files, assemblies, code access security, Web Parts, Features, site definitions, and other resources.
  
[Solution](solution-element-solution.md)
  
[ActivationDependencies Element (Solution)](activationdependencies-element-solution.md)
  
[ActivationDependency Element (Solution)](activationdependency-element-solution.md)
  
[ApplicationResourceFiles](applicationresourcefiles-element-solution.md)
  
[ApplicationResourceFile](applicationresourcefile-element-solution.md)
  
[Assemblies](assemblies-element-solutionassemblies.md)
  
[Assembly](assembly-element-solutionassemblies.md)
  
[SafeControls](safecontrols-element-solution.md)
  
[SafeControl](safecontrol-element-solution.md)
  
[ClassResources](classresources-element-solution.md)
  
[ClassResource](classresource-element-solution.md)
  
[CodeAccessSecurity](codeaccesssecurity-element-solution.md)
  
[PolicyItem](policyitem-element-solution.md)
  
[PermissionSet](permissionset-element-solution.md)
  
[IPermission](ipermission-element-solution.md)
  
[Assemblies](assemblies-element-solutioncodeaccesssecurity.md)
  
[Assembly](assembly-element-solutioncodeaccesssecurity.md)
  
[DwpFiles](dwpfiles-element-solution.md)
  
[DwpFile](dwpfile-element-solution.md)
  
[FeatureManifests](featuremanifests-element-solution.md)
  
[FeatureManifest](featuremanifest-element-solution.md)
  
[Resources](resources-element-solution.md)
  
[Resource](resource-element-solution.md)
  
[RootFiles](rootfiles-element-solution.md)
  
[RootFile](rootfile-element-solution.md)
  
[SiteDefinitionManifests](sitedefinitionmanifests-element-solution.md)
  
[SiteDefinitionManifest](sitedefinitionmanifest-element-solution.md)
  
[WebTempFile](webtempfile-element-solution.md)
  
[TemplateFiles](templatefiles-element-solution.md)
  
[TemplateFile](templatefile-element-solution.md)
  
## Example

The following example shows a solution manifest file that includes declarations for Features, site definition files, and assemblies.
  
```XML
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
```

The following example shows a manifest for a solution that includes two Features and three global language resource files.
  
```XML
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
```


