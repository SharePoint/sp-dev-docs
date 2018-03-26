---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- schemas [sharepoint 2010], site,site schema [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: e711f6b0-2787-4a13-b0e9-140c3435c1e2
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
<td align="left"># Site Schema</td>
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
SharePoint Online | SharePoint Server 2013

The Site schema of [Collaborative Application Markup Language
(CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used to define
metadata for creating Web sites, including the root site of site
collections. A site definition specifies the navigation bars, list
templates, document templates, list base types, configurations, modules,
components, and server email footer for creating sites. The site
definition is specified through an
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
file located in %ProgramFiles%\\Common Files\\Microsoft Shared\\web
server extensions\\15\\TEMPLATE\\SiteTemplates, and through a
[WebTempDOCS-ASTERISK.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx)
file located in %ProgramFiles%\\Common Files\\Microsoft Shared\\web
server extensions\\15\\TEMPLATE\\1033\\XML.

Sites can be created or modified programmatically through the object
model (for example, members of the <span sdata="cer"
target="T:Microsoft.SharePoint.SPWeb"><span
class="nolink">SPWeb</span></span> and <span sdata="cer"
target="T:Microsoft.SharePoint.SPWebCollection"><span
class="nolink">SPWebCollection</span></span> classes, or members of the
<span sdata="cer" target="T:Microsoft.SharePoint.SPSite"><span
class="nolink">SPSite</span></span> and <span sdata="cer"
target="T:Microsoft.SharePoint.Administration.SPSiteCollection"><span
class="nolink">SPSiteCollection</span></span> classes). They can also be
remotely created or modified through the Administration Web service
(methods of the <span sdata="cer" target="T:WebSvcAdmin.Admin"><span
class="nolink">Admin</span></span> class), the Document Workspace Web
service (methods of <span sdata="cer" target="T:WebSvcDWS.Dws"><span
class="nolink">Dws</span></span>), or the Meetings Web service (members
of <span sdata="cer" target="T:WebSvcMeetings.Meetings"><span
class="nolink">Meetings</span></span>).


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Onet.xml**

[DOCS-LESSTHANProjectDOCS-GREATERTHAN](project-element-site.md)

  [DOCS-LESSTHANNavBarsDOCS-GREATERTHAN](navbars-element-site.md)

    [DOCS-LESSTHANNavBarDOCS-GREATERTHAN](navbar-element-site.md)

      [DOCS-LESSTHANNavBarLinkDOCS-GREATERTHAN](navbarlink-element-site.md)

      [DOCS-LESSTHANNavBarPageDOCS-GREATERTHAN](navbarpage-element-sitemodule.md)

  [DOCS-LESSTHANListTemplatesDOCS-GREATERTHAN](listtemplates-element-site.md)

    [DOCS-LESSTHANListTemplateDOCS-GREATERTHAN](listtemplate-element-site.md)

  [DOCS-LESSTHANDocumentTemplatesDOCS-GREATERTHAN](documenttemplates-element-site.md)

    [DOCS-LESSTHANDocumentTemplateDOCS-GREATERTHAN](documenttemplate-element-site.md)

      [DOCS-LESSTHANDocumentTemplateFilesDOCS-GREATERTHAN](documenttemplatefiles-element-site.md)

        [DOCS-LESSTHANDocumentTemplateFileDOCS-GREATERTHAN](documenttemplatefile-element-site.md)

  [DOCS-LESSTHANBaseTypesDOCS-GREATERTHAN](basetypes-element-site.md)

    [DOCS-LESSTHANBaseTypeDOCS-GREATERTHAN](basetype-element-site.md)

      [DOCS-LESSTHANMetaDataDOCS-GREATERTHAN](metadata-element-site.md)

  [DOCS-LESSTHANConfigurationsDOCS-GREATERTHAN](configurations-element-site.md)

    [DOCS-LESSTHANConfigurationDOCS-GREATERTHAN](configuration-element-site.md)

      [DOCS-LESSTHANExecuteUrlDOCS-GREATERTHAN](executeurl-element-site.md)

      [DOCS-LESSTHANListsDOCS-GREATERTHAN](lists-element-site.md)

        [DOCS-LESSTHANListDOCS-GREATERTHAN](list-element-site.md)

          [DOCS-LESSTHANDataDOCS-GREATERTHAN](data-element-site.md)

            [DOCS-LESSTHANRowsDOCS-GREATERTHAN](rows-element-site.md)

              [DOCS-LESSTHANRowDOCS-GREATERTHAN](row-element-site.md)

                [DOCS-LESSTHANFieldDOCS-GREATERTHAN](field-element-site.md)

      [DOCS-LESSTHANModulesDOCS-GREATERTHAN](modules-element-site.md)

       [See Module Schema] 

      [DOCS-LESSTHANWebFeaturesDOCS-GREATERTHAN](webfeatures-element-site.md)

        [DOCS-LESSTHANFeatureDOCS-GREATERTHAN](feature-element-site.md)

          [DOCS-LESSTHANPropertiesDOCS-GREATERTHAN](properties-element-site.md)

            [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitefeature.md)

      [DOCS-LESSTHANSiteFeaturesDOCS-GREATERTHAN](sitefeatures-element-site.md)

        [DOCS-LESSTHANFeatureDOCS-GREATERTHAN](feature-element-site.md)

          [DOCS-LESSTHANPropertiesDOCS-GREATERTHAN](properties-element-site.md)

            [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitefeature.md)

  [DOCS-LESSTHANModulesDOCS-GREATERTHAN](modules-element-site.md)

   [See Module Schema]

  [DOCS-LESSTHANComponentsDOCS-GREATERTHAN](components-element-site.md)

    [DOCS-LESSTHANExternalSecurityProviderDOCS-GREATERTHAN](externalsecurityprovider-element-site.md)

    [DOCS-LESSTHANFileDialogPostProcessorDOCS-GREATERTHAN](filedialogpostprocessor-element-site.md)

  [DOCS-LESSTHANServerEmailFooterDOCS-GREATERTHAN](serveremailfooter-element-site.md)

**Module Schema**

    [DOCS-LESSTHANModuleDOCS-GREATERTHAN](module-element-site.md)

      [DOCS-LESSTHANFileDOCS-GREATERTHAN](file-element.md)

        [DOCS-LESSTHANAllUsersWebPartDOCS-GREATERTHAN](alluserswebpart-element-site.md)

        [DOCS-LESSTHANBinarySerializedWebPartDOCS-GREATERTHAN](binaryserializedwebpart-element-site.md)

          
[DOCS-LESSTHANGUIDMapDOCS-GREATERTHAN](guidmap-element-site.md)

        
    [DOCS-LESSTHANGUIDDOCS-GREATERTHAN](guid-element-site.md)

       
   [DOCS-LESSTHANWebPartDOCS-GREATERTHAN](webpart-element-site.md)

        [DOCS-LESSTHANNavBarPageDOCS-GREATERTHAN](navbarpage-element-sitemodule.md)

        [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitemodule.md)

        [DOCS-LESSTHANViewDOCS-GREATERTHAN](view-element-site.md)

       
  [DOCS-LESSTHANBinarySerializedWebPartDOCS-GREATERTHAN](binaryserializedwebpart-element-site.md)

        
    [DOCS-LESSTHANGUIDMapDOCS-GREATERTHAN](guidmap-element-site.md)

             
  [DOCS-LESSTHANGUIDDOCS-GREATERTHAN](guid-element-site.md)

        
    [DOCS-LESSTHANWebPartDOCS-GREATERTHAN](webpart-element-site.md)

        
[DOCS-LESSTHANWebPartConnectionDOCS-GREATERTHAN](webpartconnection-element-site.md)

       
   [DOCS-LESSTHANWebPartTransformerDOCS-GREATERTHAN](webparttransformer-element-site.md)

**WebTempDOCS-ASTERISK.xml**

[DOCS-LESSTHANTemplatesDOCS-GREATERTHAN](templates-element-site.md)

  [DOCS-LESSTHANTemplateDOCS-GREATERTHAN](template-element-site.md)

    [DOCS-LESSTHANConfigurationDOCS-GREATERTHAN](configuration-element-site.md)








