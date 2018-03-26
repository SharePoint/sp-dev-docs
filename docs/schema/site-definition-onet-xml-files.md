---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 170d526a-49c7-41c6-9295-47bd21b1ba7d
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
<td align="left"># Site Definition (Onet.xml) Files</td>
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
SharePoint Online | SharePoint Server 2013

In an
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
file, the [Feature](feature-element-site.htm) element is
used within a site definition configuration to contain a reference to a
Feature instance and default property values. The
[Configuration](configuration-element-site.htm) element
specifies lists and modules to use when creating SharePoint sites. For
information about the format and elements used in site definitions, see
<span sdata="link">[Site
Schema](site-schema.htm)</span>.

SharePoint Foundation activates Features specified within the
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)
file in the order that they are listed. Consequently, you must specify
Features that are depended upon before Features that depend upon them.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows the
[Feature](feature-element-site.htm) element used to
specify Features and Feature properties in a site definition
configuration.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Configuration ID="0" Name="Publishing"> 
       <Lists>
          <List Title="Web Part Gallery" Type="113" Url="_catalogs/wp" 
             RootWebOnly="True" />
       </Lists>
       <SiteFeatures>
          <Feature ID="AEBC918D-B20F-4a11-A1DB-9ED84D79C87E"/>
       </SiteFeatures>
       <WebFeatures>
          <Feature ID="22A9EF51-737B-4ff2-9346-694633FE4416">
             <Properties xmlns="http://schemas.microsoft.com/sharepoint/">
                <Property Key="ChromeMasterUrl" Value=""/>
                <Property Key="WelcomePagePageLayoutUrl" Value=""/>
                <Property Key="WelcomePageUrl" Value=""/>
             </Properties>
          </Feature>
          <Feature ID="23BCB938-F4B5-42a4-8050-F8CB92EF4078">
             <Properties xmlns="http://schemas.microsoft.com/sharepoint/">
                <Property Key="CopyLayouts" Value="true"/>
             </Properties>
          </Feature>
       </WebFeatures>    
       <Modules></Modules>
    </Configuration>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

<span sdata="link">[Site
Schema](site-schema.htm)</span>

#### Other resources

[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)

[WebTemp.xml](http://msdn.microsoft.com/library/199bbb65-d12f-475d-b157-31a1bffe84c8(Office.15).aspx)








