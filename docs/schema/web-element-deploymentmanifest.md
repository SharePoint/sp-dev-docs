---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 85e854c0-c567-48a9-9031-f709a4e7a785
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># Web Element (DeploymentManifest)</td>
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

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Represents an instance of a SharePoint Foundation Web site (<span
sdata="cer" target="T:Microsoft.SharePoint.SPWeb"><span
class="nolink">SPWeb</span></span>) object. A Web site is one of the
top-level SharePoint Foundation objects.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;Web&quot; type=&quot;SPWeb&quot; /&gt;

USAGE
&lt;SPObject&gt;
    &lt;Web&gt;
                &lt;Properties /&gt;
                &lt;EventReceivers /&gt;
        &lt;xs:attribute name=&quot;Id&quot; /&gt;
        &lt;xs:attribute name=&quot;ParentId&quot; /&gt;
        &lt;xs:attribute name=&quot;Name&quot; /&gt;
        &lt;xs:attribute name=&quot;Title&quot; /&gt;
        &lt;xs:attribute name=&quot;Locale&quot; /&gt;
        &lt;xs:attribute name=&quot;Language&quot; /&gt;
        &lt;xs:attribute name=&quot;IsRootWeb&quot; /&gt;
        &lt;xs:attribute name=&quot;ServerRelativeUrl&quot; /&gt;
        &lt;xs:attribute name=&quot;CurrencyLocaleId&quot; /&gt;
        &lt;xs:attribute name=&quot;RegionalSettingsLocaleId&quot; /&gt;
        &lt;xs:attribute name=&quot;RequestAccessEmail&quot; /&gt;
        &lt;xs:attribute name=&quot;TimeZoneId&quot; /&gt;
        &lt;xs:attribute name=&quot;Time24&quot; /&gt;
        &lt;xs:attribute name=&quot;CalendarType&quot; /&gt;
        &lt;xs:attribute name=&quot;AdjustHijriDays&quot; /&gt;
        &lt;xs:attribute name=&quot;Collation&quot; /&gt;
        &lt;xs:attribute name=&quot;AlternateCalendarType&quot; /&gt;
        &lt;xs:attribute name=&quot;ShowWeeks&quot; /&gt;
        &lt;xs:attribute name=&quot;FirstWeekOfYear&quot; /&gt;
        &lt;xs:attribute name=&quot;WorkDays&quot; /&gt;
        &lt;xs:attribute name=&quot;WorkDayStartHour&quot; /&gt;
        &lt;xs:attribute name=&quot;WorkDayEndHour&quot; /&gt;
        &lt;xs:attribute name=&quot;FirstDayOfWeek&quot; /&gt;
        &lt;xs:attribute name=&quot;Description&quot; /&gt;
        &lt;xs:attribute name=&quot;AlternateHeader&quot; /&gt;
        &lt;xs:attribute name=&quot;Author&quot; /&gt;
        &lt;xs:attribute name=&quot;Configuration&quot; /&gt;
        &lt;xs:attribute name=&quot;HasUniqueRoleAssignments&quot; /&gt;
        &lt;xs:attribute name=&quot;HasUniqueRoleDefinitions&quot; /&gt;
        &lt;xs:attribute name=&quot;Created&quot; /&gt;
        &lt;xs:attribute name=&quot;ThemeComposite&quot; /&gt;
        &lt;xs:attribute name=&quot;WebTemplate&quot; /&gt;
        &lt;xs:attribute name=&quot;AnonymousState&quot; /&gt;
        &lt;xs:attribute name=&quot;RootFolderId&quot; /&gt;
        &lt;xs:attribute name=&quot;SystemCatalogsIncluded&quot; /&gt;
        &lt;xs:attribute name=&quot;WelcomePageUrl&quot; /&gt;
        &lt;xs:attribute name=&quot;AlternateCssUrl&quot; /&gt;
        &lt;xs:attribute name=&quot;CustomizedCssFiles&quot; /&gt;
        &lt;xs:attribute name=&quot;CustomJSUrl&quot; /&gt;
        &lt;xs:attribute name=&quot;IncludeSupportingFolders&quot; /&gt;
        &lt;xs:attribute name=&quot;SecurityProvider&quot; /&gt;
        &lt;xs:attribute name=&quot;MasterUrl&quot; /&gt;
        &lt;xs:attribute name=&quot;CustomMasterUrl&quot; /&gt;
        &lt;xs:attribute name=&quot;SiteLogoUrl&quot; /&gt;
        &lt;xs:attribute name=&quot;SiteLogoDescription&quot; /&gt;
        &lt;xs:attribute name=&quot;UseSharedNavigation&quot; /&gt;
&lt;!-- Flags --&gt;
        &lt;xs:attribute name=&quot;PresenceEnabled&quot; /&gt;
        &lt;xs:attribute name=&quot;SyndicationEnabled&quot; /&gt;
        &lt;xs:attribute name=&quot;QuickLaunchEnabled&quot; /&gt;
        &lt;xs:attribute name=&quot;TreeViewEnabled&quot; /&gt;
        &lt;xs:attribute name=&quot;ParserEnabled&quot; /&gt;
        &lt;xs:attribute name=&quot;Provisioned&quot; /&gt;
    &lt;/Web&gt;
&lt;/SPObject&gt;
</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPWeb"><span
class="nolink">SPWeb</span></span>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**AdjustHijriDays**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the number of days to extend or reduce the current month in Hijri calendars.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AlternateCalendarType**</p></td>
<td align="left"><p>xs:short</p></td>
<td align="left"><p>Optional. Specifies an integer representing an alternative calendar type. For a table of calendar type values, see <span sdata="cer" target="P:Microsoft.SharePoint.SPRegionalSettings.CalendarType"><span class="nolink">CalendarType</span></span>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AlternateCssUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the URL for an alternative cascading style sheet (CSS) to use for the Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AlternateHeader**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the URL for an alternative .aspx page to use for rendering the top navigation area on SharePoint pages.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AnonymousState**</p></td>
<td align="left"><p><span sdata="link"><a href="anonymousstate-simple-type-deploymentmanifest.md">AnonymousState Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies the level of access available to anonymous users on the Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Author**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the user who created the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CalendarType**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies an integer representing the default calendar type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Collation**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Integer value specifying the collation used on the site. For more information, see <span sdata="cer" target="P:Microsoft.SharePoint.SPRegionalSettings.Collation"><span class="nolink">Collation</span></span>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Configuration**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the ID of the configuration in the site definition that was used to create the site; or, specifies the ID of the configuration in the site definition from which the site template used to create the site was derived.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Created**</p></td>
<td align="left"><p>xs:dateTime</p></td>
<td align="left"><p>Optional. Specifies the date and time that the site was created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CurrencyLocaleId**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the locale ID (LCID) used to represent currency values in the Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CustomizedCssFiles**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional.Specifies custom cascading style sheet (.css) files.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CustomJSUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the URL to custom JScript files.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CustomMasterUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the URL for the custom master page file to apply to the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides the description for the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FirstDayOfWeek**</p></td>
<td align="left"><p>xs:long</p></td>
<td align="left"><p>Optional. Integer that specifies the first day of the week used in the calendars on the server.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FirstWeekOfYear**</p></td>
<td align="left"><p>xs:short</p></td>
<td align="left"><p>Optional. Integer that specifies the first week of the year used in the calendars on the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HasUniqueRoleAssignments**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the role assignments are uniquely defined for the Web site, or inherited from a parent Web site. The value is **true** if the Web site has unique role assignments.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**HasUniqueRoleDefinitions**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the role definitions are uniquely defined for this Web site, or inherited from a parent Web site. The value is **true** if the Web site has unique role definitions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier for the site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IncludeSupportingFolders**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether supporting folders are included in enumerations of files or folders. The value is **true** if supporting files are included.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsRootWeb**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Required. Specifies whether the site is the top-level Web site of the site collection. The value is **true** if the site is the top-level site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Language**</p></td>
<td align="left"><p>xs:long</p></td>
<td align="left"><p>Required. Specifies the LCID for the language used on the site. For a table of LCID values, see <span sdata="cer" target="P:Microsoft.SharePoint.SPWeb.Language"><span class="nolink">Language</span></span>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Locale**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies the locale for the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MasterUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the URL of the master page used for the Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies the name of the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies the ID of the parent Web site for the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ParserEnabled**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Flag specifying whether parsing is enabled for the Web site. The value is **true** if parsing is enabled.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PresenceEnabled**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Flag specifying whether inline presence information is enabled on the Web site. The value is **true** if inline presence is enabled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Provisioned**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Flag specifying whether the Web site has been provisioned. The value is **true** if the Web site has been provisioned.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**QuickLaunchEnabled**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Flag specifying whether the Quick Launch area is enabled on the Web site. The value is **true** if Quick Launch is enabled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RegionalSettingsLocaleId**</p></td>
<td align="left"><p>xs:long</p></td>
<td align="left"><p>Optional. Provides an integer value specifying regional locale.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequestAccessEmail**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the e-mail address to which requests for access to the Web site are sent.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootFolderId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the root folder for the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SecurityProvider**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ServerRelativeUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies the server-relative URL for the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowWeeks**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether to show weeks on the calendar on the Web site. The value is **true** if the weeks are shown.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SiteLogoDescription**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides a description of the Web site logo.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SiteLogoUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the server-relative URL of the Web site logo.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SyndicationEnabled**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Flag specifying whether syndication is enabled in the Web site. The value is **true** if syndication is enabled.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SystemCatalogsIncluded**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether system catalog files are included in the export package. The value is **true** if the system catalogs are included.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ThemeComposite**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides the name of the theme and the URL to the CSS that is applied to the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Time24**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether to use a 24-hour time format to represent the hours of the day.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TimeZoneId**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the identifier of the time zone that is used on the server. For more information, see <span sdata="cer" target="T:Microsoft.SharePoint.SPTimeZone"><span class="nolink">SPTimeZone</span></span>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Specifies the title for the Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TreeViewEnabled**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Flag specifying whether the SharePoint TreeView feature is enabled in the left navigational area of the Web site pages. The value is **true** if TreeView is enabled.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UseSharedNavigation**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebTemplate**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the name of the site definition that was used to create the site, or the name of the site definition from which the site template that was used to create the site was derived.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WelcomePageUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL of the Web site welcome page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WorkDayEndHour**</p></td>
<td align="left"><p>xs:short</p></td>
<td align="left"><p>Optional. Specifies the default hour at which the work day ends on the calendar in use on the server.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WorkDays**</p></td>
<td align="left"><p>xs:short</p></td>
<td align="left"><p>Optional. Specifies the default work days on the calendar in use on the server.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WorkDayStartHour**</p></td>
<td align="left"><p>xs:short</p></td>
<td align="left"><p>Optional. Specifies the default hour at which the work day starts on the calendar in use on the server.</p></td>
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
<td align="left"><p><span sdata="link"><a href="properties-element-deploymentmanifestspweb.md">Properties Element (DeploymentManifest - SPWeb)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestspweb.md">EventReceivers Element (DeploymentManifest - SPWeb)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="spobject-element-deploymentmanifest.md">SPObject Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPWeb"><span
class="nolink">SPWeb</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.SPRegionalSettings"><span
class="nolink">SPRegionalSettings</span></span>

#### Concepts

[DeploymentManifest
Schema](deploymentmanifest-schema.md)</span>








