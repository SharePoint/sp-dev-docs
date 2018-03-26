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
SharePoint Online | SharePoint Server 2013*

The Site schema of [Collaborative Application Markup Language
(CAML)](introduction-to-collaborative-application-markup-language-caml.htm) is used to define
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

[DOCS-LESSTHANProjectDOCS-GREATERTHAN](project-element-site.htm)

  [DOCS-LESSTHANNavBarsDOCS-GREATERTHAN](navbars-element-site.htm)

    [DOCS-LESSTHANNavBarDOCS-GREATERTHAN](navbar-element-site.htm)

      [DOCS-LESSTHANNavBarLinkDOCS-GREATERTHAN](navbarlink-element-site.htm)

      [DOCS-LESSTHANNavBarPageDOCS-GREATERTHAN](navbarpage-element-sitemodule.htm)

  [DOCS-LESSTHANListTemplatesDOCS-GREATERTHAN](listtemplates-element-site.htm)

    [DOCS-LESSTHANListTemplateDOCS-GREATERTHAN](listtemplate-element-site.htm)

  [DOCS-LESSTHANDocumentTemplatesDOCS-GREATERTHAN](documenttemplates-element-site.htm)

    [DOCS-LESSTHANDocumentTemplateDOCS-GREATERTHAN](documenttemplate-element-site.htm)

      [DOCS-LESSTHANDocumentTemplateFilesDOCS-GREATERTHAN](documenttemplatefiles-element-site.htm)

        [DOCS-LESSTHANDocumentTemplateFileDOCS-GREATERTHAN](documenttemplatefile-element-site.htm)

  [DOCS-LESSTHANBaseTypesDOCS-GREATERTHAN](basetypes-element-site.htm)

    [DOCS-LESSTHANBaseTypeDOCS-GREATERTHAN](basetype-element-site.htm)

      [DOCS-LESSTHANMetaDataDOCS-GREATERTHAN](metadata-element-site.htm)

  [DOCS-LESSTHANConfigurationsDOCS-GREATERTHAN](configurations-element-site.htm)

    [DOCS-LESSTHANConfigurationDOCS-GREATERTHAN](configuration-element-site.htm)

      [DOCS-LESSTHANExecuteUrlDOCS-GREATERTHAN](executeurl-element-site.htm)

      [DOCS-LESSTHANListsDOCS-GREATERTHAN](lists-element-site.htm)

        [DOCS-LESSTHANListDOCS-GREATERTHAN](list-element-site.htm)

          [DOCS-LESSTHANDataDOCS-GREATERTHAN](data-element-site.htm)

            [DOCS-LESSTHANRowsDOCS-GREATERTHAN](rows-element-site.htm)

              [DOCS-LESSTHANRowDOCS-GREATERTHAN](row-element-site.htm)

                [DOCS-LESSTHANFieldDOCS-GREATERTHAN](field-element-site.htm)

      [DOCS-LESSTHANModulesDOCS-GREATERTHAN](modules-element-site.htm)

       [See Module Schema] 

      [DOCS-LESSTHANWebFeaturesDOCS-GREATERTHAN](webfeatures-element-site.htm)

        [DOCS-LESSTHANFeatureDOCS-GREATERTHAN](feature-element-site.htm)

          [DOCS-LESSTHANPropertiesDOCS-GREATERTHAN](properties-element-site.htm)

            [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitefeature.htm)

      [DOCS-LESSTHANSiteFeaturesDOCS-GREATERTHAN](sitefeatures-element-site.htm)

        [DOCS-LESSTHANFeatureDOCS-GREATERTHAN](feature-element-site.htm)

          [DOCS-LESSTHANPropertiesDOCS-GREATERTHAN](properties-element-site.htm)

            [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitefeature.htm)

  [DOCS-LESSTHANModulesDOCS-GREATERTHAN](modules-element-site.htm)

   [See Module Schema]

  [DOCS-LESSTHANComponentsDOCS-GREATERTHAN](components-element-site.htm)

    [DOCS-LESSTHANExternalSecurityProviderDOCS-GREATERTHAN](externalsecurityprovider-element-site.htm)

    [DOCS-LESSTHANFileDialogPostProcessorDOCS-GREATERTHAN](filedialogpostprocessor-element-site.htm)

  [DOCS-LESSTHANServerEmailFooterDOCS-GREATERTHAN](serveremailfooter-element-site.htm)

**Module Schema**

    [DOCS-LESSTHANModuleDOCS-GREATERTHAN](module-element-site.htm)

      [DOCS-LESSTHANFileDOCS-GREATERTHAN](file-element.htm)

        [DOCS-LESSTHANAllUsersWebPartDOCS-GREATERTHAN](alluserswebpart-element-site.htm)

        [DOCS-LESSTHANBinarySerializedWebPartDOCS-GREATERTHAN](binaryserializedwebpart-element-site.htm)

          
[DOCS-LESSTHANGUIDMapDOCS-GREATERTHAN](guidmap-element-site.htm)

        
    [DOCS-LESSTHANGUIDDOCS-GREATERTHAN](guid-element-site.htm)

       
   [DOCS-LESSTHANWebPartDOCS-GREATERTHAN](webpart-element-site.htm)

        [DOCS-LESSTHANNavBarPageDOCS-GREATERTHAN](navbarpage-element-sitemodule.htm)

        [DOCS-LESSTHANPropertyDOCS-GREATERTHAN](property-element-sitemodule.htm)

        [DOCS-LESSTHANViewDOCS-GREATERTHAN](view-element-site.htm)

       
  [DOCS-LESSTHANBinarySerializedWebPartDOCS-GREATERTHAN](binaryserializedwebpart-element-site.htm)

        
    [DOCS-LESSTHANGUIDMapDOCS-GREATERTHAN](guidmap-element-site.htm)

             
  [DOCS-LESSTHANGUIDDOCS-GREATERTHAN](guid-element-site.htm)

        
    [DOCS-LESSTHANWebPartDOCS-GREATERTHAN](webpart-element-site.htm)

        
[DOCS-LESSTHANWebPartConnectionDOCS-GREATERTHAN](webpartconnection-element-site.htm)

       
   [DOCS-LESSTHANWebPartTransformerDOCS-GREATERTHAN](webparttransformer-element-site.htm)

**WebTempDOCS-ASTERISK.xml**

[DOCS-LESSTHANTemplatesDOCS-GREATERTHAN](templates-element-site.htm)

  [DOCS-LESSTHANTemplateDOCS-GREATERTHAN](template-element-site.htm)

    [DOCS-LESSTHANConfigurationDOCS-GREATERTHAN](configuration-element-site.htm)








