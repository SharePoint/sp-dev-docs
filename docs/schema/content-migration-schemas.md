---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content migration [sharepoint 2010],content migration schema
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6741b149-815d-48eb-91d9-691a47195faf
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
<td align="left"># Content migration schemas</td>
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

**Last modified:** March 09, 2015

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

SharePoint Foundation content migration is supported by APIs that are
provided in the <span sdata="cer"
target="N:Microsoft.SharePoint.Deployment"><span
class="nolink">Microsoft.SharePoint.Deployment</span></span> namespace.
Additionally, migration implementations are supported by XML schemas
provided with the SharePoint SDK.

The SharePoint Foundation content migration architecture provides a
public schema to support the migration of export packages. You can
create a package to import content into SharePoint.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The SharePoint Foundation provides eight schema (.xsd) files to support
content migration, as described in the following table.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Schema File</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentmanifest-schema.htm">DeploymentManifest Schema</a></span></p></td>
<td align="left"><ul>
<li><p>Provides validation for the Manifest.xml file that is exported into the content migration package.</p></li>
<li><p>Provides a comprehensive manifest containing listings of both the contents and the structure of the source site. The migration operation uses the manifest file to reconstitute the source site and its components when it is imported to the destination site.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentexportsettings-schema.htm">DeploymentExportSettings Schema</a></span></p></td>
<td align="left"><p>Provides validation for the ExportSettings.xml file exported into the content migration package.</p>
<p>ExportSettings.xml does the following:</p>
<ul>
<li><p>Contains the export settings specified by using the <span sdata="cer" target="T:Microsoft.SharePoint.Deployment.SPExportSettings"><span class="nolink">SPExportSettings</span></span> class and other classes that are part of the content migration object model.</p></li>
<li><p>Ensures that the subsequent import process (at the migration target site) enforces the directives specified in the export settings.</p></li>
<li><p>Maintains a catalog of all objects exported to the migration package.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentlookuplistmap-schema.htm">DeploymentLookupListMap Schema</a></span></p></td>
<td align="left"><p>Provides validation for the LookupListMap.xml file exported into the content migration package.</p>
<p>LookupListMap.xml maintains a simple lookup list that records SharePoint list item (list item to list item) references.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentrequirements-schema.htm">DeploymentRequirements Schema</a></span></p></td>
<td align="left"><p>Provides validation for the Requirements.xml file exported into the content migration package.</p>
<p>Requirements.xml maintains list of deployment requirements in the form of installation requirements on the migration target, such as feature definitions, template versions, Web Part assemblies, language packs, and so forth.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentrootobjectmap-schema.htm">DeploymentRootObjectMap Schema</a></span></p></td>
<td align="left"><p>Provides validation for the RootObjectMap.xml file exported into the content migration package.</p>
<p>RootObjectMap.xml maintains a list of mappings of secondary (dependent) objects, which allows the import phase of the migration operation to correctly place the dependent objects relative to the locations of the root object mappings.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentsystemdata-schema.htm">DeploymentSystemData Schema</a></span></p></td>
<td align="left"><p>Provides validation for the SystemData.xml file exported into the content migration package.</p>
<p>SystemData.xml does the following:</p>
<ul>
<li><p>Collects a variety of low-level system data.</p></li>
<li><p>Records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests).</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentusergroupmap-schema.htm">DeploymentUserGroupMap Schema</a></span></p></td>
<td align="left"><p>Provides validation for the UserGroup.xml file exported into the content migration package.</p>
<p>UserGroup.xml maintains a list of users and user security groups with respect to access security and permissions.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentviewformslist-schema.htm">DeploymentViewFormsList Schema</a></span></p></td>
<td align="left"><p>Provides validation for the ViewFormsList.xml file exported into the content migration package.</p>
<p>ViewFormsList.xml maintains a list of Web Parts and tracks whether each is a view or form.</p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Content
Migration](http://msdn.microsoft.com/library/626286f9-71b3-4b3c-9bac-a7bca059463f(Office.15).aspx)








