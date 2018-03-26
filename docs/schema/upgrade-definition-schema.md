---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- upgrading [sharepoint 2010], definition schema
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Upgrade schema
api_type:
- schema
ms.assetid: 96d5e067-bea5-4a8e-8b21-db14eab60281
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
<td align="left"># Upgrade Definition schema</td>
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

The following elements and attributes are implemented within a site
upgrade definition file.

[Config](config-element-upgrade.htm)

    [WebTemplate](webtemplate-element-upgrade.htm)

        [Lists](lists-element-upgrade.htm)

            [List](list-element-upgrade.htm)

        [Files](http://msdn.microsoft.com/library/e0c9a22c-5e87-41ff-9e2d-6a0261d5ccd2(Office.15).aspx)

            [File](file-element-upgrade.htm)

        [AppliedSiteFeatures](appliedsitefeatures-element-upgrade.htm)

            [Feature](feature-element-upgrade.htm)

        [AppliedWebFeatures](feature-element-upgrade.htm)

            [Feature](feature-element-upgrade.htm)


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example outlines the format of an upgrade definition.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Config xmlns = "urn:Microsoft.SharePoint.Upgrade">
      <WebTemplate
        ID = "1"
        LocaleId = "*"
        FromProductVersion = "2"
        BeginFromSchemaVersion = "100"
        EndFromSchemaVersion = "149"
        ToSchemaVersion = "150">
        <Lists>
          <List
            FromTemplateId = "104"
            ToFeatureId = "00BFEA71-D1CE-42de-9C63-A44004CE0104"
            v3Type = "0x0104">
          </List>
          <List
            FromTemplateId = "105"
            ToFeatureId = "00BFEA71-7E6D-4186-9BA8-C047AC750105"
            v3Type = "0x0105">
          </List>
           ...
        </Lists>
        <Files>
          <File
            FromPath = "{LocaleId}\STS\default.aspx"
            ToPath = "SiteTemplates\STS\default.aspx" />
          <File
            FromPath = "{LocaleId}\STS\Lists\announce\AllItems.aspx"
            ToPath = "Features\AnnouncementsList\announce\AllItems.aspx" />
          <File
            FromPath = "{LocaleId}\STS\Lists\announce\DispForm.aspx"
            ToPath = "Features\AnnouncementsList\announce\DispForm.aspx" />
          <File
            FromPath = "{LocaleId}\STS\Lists\announce\EditForm.aspx" 
            ToPath = "Features\AnnouncementsList\announce\EditForm.aspx"
            />
          <File
            FromPath = "{LocaleId}\STS\Lists\announce\NewForm.aspx"
            ToPath = "Features\AnnouncementsList\announce\NewForm.aspx" />
            ...
        </Files>
        <AppliedSiteFeatures>
          <Feature ID = "00BFEA71-1C5E-4A24-B310-BA51C3EB7A57" />
        </AppliedSiteFeatures>
        <AppliedWebFeatures>
          <Feature ID = "00BFEA71-D1CE-42de-9C63-A44004CE0104" />
          <Feature ID = "00BFEA71-7E6D-4186-9BA8-C047AC750105" />
          <Feature ID = "00BFEA71-DE22-43B2-A848-C05709900100" />
          ...
        </AppliedWebFeatures>
      </WebTemplate>
    </Config>








