---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ed2a52f8-358f-47f5-afcb-5819b288e913
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
<td align="left"># Feature/Site Template Associations</td>
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

Feature/site template associations allow you to include a specific
Feature as part of a [site definition
configuration](http://msdn.microsoft.com/library/0d76bceb-7ffa-444a-98cf-0fa1d60a1aa3(Office.15).aspx)
when you provision sites through the definition.

[Elements](elements-element-featuresitetemplateassociation.htm)

  [FeatureSiteTemplateAssociation](featuresitetemplateassociation-element-featuresitetemplateassociation.htm)

    [Property](property-element-featuresitetemplateassociation.htm)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example associates one Feature with two different site
definition configurations and another Feature and properties with a
third configuration.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <FeatureSiteTemplateAssociation Id="99FE402E-89A0-45aa-9163-85342E865DC8" TemplateName="PROFILES#0" /> 
      <FeatureSiteTemplateAssociation Id="99FE402E-89A0-45aa-9163-85342E865DC8" TemplateName="CMSPUBLISHING#0" /> 
    - <FeatureSiteTemplateAssociation Id="541F5F57-C847-4e16-B59A-B31E90E6F9EA" TemplateName="SRCHCENTERLITE#1">
        <Property Key="IncludeInGlobalNavigation" Value="false" /> 
        <Property Key="IncludeInCurrentNavigation" Value="false" /> 
        <Property Key="InheritCurrentNavigation" Value="true" /> 
        <Property Key="IncludePages" Value="false" /> 
      </FeatureSiteTemplateAssociation>
    </Elements>








