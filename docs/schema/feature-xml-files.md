---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: caa75c38-9788-4727-a2a8-ab92df90a256
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
<td align="left"># Feature.xml Files</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

In a <span class="code">Feature.xml</span> file, the
[Feature](feature-element-feature.htm) element defines a
Feature and specifies the location of assemblies, files, dependencies,
or properties that support the Feature.

[Feature](feature-element-feature.htm)

  [ActivationDependencies](activationdependencies-element-feature.htm)

    [ActivationDependency](activationdependency-element-feature.htm)

  [ElementManifests](elementmanifests-element-feature.htm)

    [ElementFile](elementfile-element-feature.htm)

    [ElementManifest](elementmanifest-element-feature.htm)

  [Properties](properties-element-feature.htm)

    [Property](property-element-feature.htm)

  <span sdata="link">[UpgradeActions Element
(Feature)](upgradeactions-element-feature.htm)</span>

    <span sdata="link">[AddContentTypeField Element
(Feature)](addcontenttypefield-element-feature.htm)</span>

    <span sdata="link">[ApplyElementManifests Element
(Feature)](applyelementmanifests-element-feature.htm)</span>

      <span sdata="link">[ElementFile Element
(Feature)](elementfile-element-feature.htm)</span>

      <span sdata="link">[ElementManifest Element
(Feature)](elementmanifest-element-feature.htm)</span>

    <span sdata="link">[CustomUpgradeAction Element
(Feature)](customupgradeaction-element-feature.htm)</span>

      <span sdata="link">[Parameters Element
(Feature)](parameters-element-feature.htm)</span>

        <span sdata="link">[Parameter Element
(Feature)](parameter-element-feature.htm)</span>

    <span sdata="link">[MapFile Element
(Feature)](mapfile-element-feature.htm)</span>

    <span sdata="link">[VersionRange Element
(Feature)](versionrange-element-feature.htm)</span>

      <span sdata="link">[AddContentTypeField Element
(Feature)](addcontenttypefield-element-feature.htm)</span>

      <span sdata="link">[ApplyElementManifests Element
(Feature)](applyelementmanifests-element-feature.htm)</span>

      <span sdata="link">[CustomUpgradeAction Element
(Feature)](customupgradeaction-element-feature.htm)</span>

      <span sdata="link">[MapFile Element
(Feature)](mapfile-element-feature.htm)</span>

For information about where to create and how to implement <span
class="code">Feature.xml</span> files, see [Working with
Features](http://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1(Office.15).aspx).
For information about how to upgrade a Feature, see [Upgrading
Features](http://msdn.microsoft.com/library/e917f709-6491-4d50-adbe-2ab8f35da990(Office.15).aspx).


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows how to use a <span
class="code">Feature.xml</span> file to specify activation dependencies,
special fields, and relative paths to element definition files.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Feature 
      Id="11111111-1111-1111-1111-11111111111" 
      Title="Location Services"
      Description="This Feature contains lists and parts that let you link location data to your customer lists."
      Scope="Web">
      <ActivationDependencies>
        <ActivationDependency
          FeatureId="11111111-1111-1111-1111-111111111111" />
      </ActivationDependencies>
      <ElementManifests>
        <ElementManifest 
          Location="Location\LocationPart.xml"/>
        <ElementManifest 
          Location="CustomerLocation\CustomerLocationList.xml"/>
        <ElementFile 
          Location="test.aspx"/>
      </ElementManifests>
      <Properties>
        <Property
          Key="Color"
          Value="Blue"/>
        <Property
          Key="Shape"
          Value="Triangle"/>
      </Properties> 
    </Feature>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Working with
Features](http://msdn.microsoft.com/library/ce5f5ce5-1429-439e-9261-2c4ba9788cc1(Office.15).aspx)








