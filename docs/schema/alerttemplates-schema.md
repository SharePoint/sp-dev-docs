---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: e326075f-59b5-4616-a355-fe892a150d92
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
<td align="left"># AlertTemplates schema</td>
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

Microsoft SharePoint Foundation includes a set of predefined alert
templates. These alert templates are stored in the <span
class="code">Alerttemplates.xml</span> file, which is located in the
%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\TEMPLATE\\XML folder. <span
class="code">Alerttemplates.xml</span> defines the format, contents,
filters, event types and properties used to create alert messages from
each list type. A developer can customize alerts by modifying a copy of
the <span class="code">Alerttemplates.xml</span> file and then loading
the customized alert templates by using the command <span
class="code">stsadm -o updatealerttemplates</span>.

Alert templates also define what filters and event types appear on the
new alert and edit alert pages (the <span
class="code">subnew.aspx</span> and <span
class="code">subedit.aspx</span> pages)

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Do not modify the <span class="code">Alerttemplates.xml</span> file. Doing so may result in loss of functionality when upgrading or installing service packs.</p></td>
</tr>
</tbody>
</table>

For a listing of the predefined alert templates, see [Predefined Alert
Templates](http://msdn.microsoft.com/library/6a5296b2-c158-40e4-897f-bbf008b6bbaf(Office.15).aspx).

[AlertTemplates](alerttemplates-element-alerttemplates.htm)

  [AlertTemplate](alerttemplate-element-alerttemplates.htm)

    [EventTypes](eventtypes-element-alerttemplates.htm)

    [Format](format-element-alerttemplates.htm)

      [Digest](digest-element-alerttemplates.htm)

      [Header](header-element-alerttemplates.htm)

      [HeaderFields](headerfields-element-alerttemplates.htm)

      [Subject](subject-element-alerttemplates.htm)

      [HeaderFieldsHeader](headerfieldsheader-element-alerttempaltes.htm)

      [HeaderFieldsFooter](headerfieldsfooter-element-alerttempaltes.htm)

      [RowHeader](rowheader-element-alerttemplates.htm)

      [RowFields](rowfields-element-alerttemplates.htm)

      [RowFooter](rowfooter-element-alerttemplates.htm)

      [Footer](footer-element-alerttemplates.htm)

      [Immedate](immediate-element-alerttemplates.htm)

      [Fields](fields-element-alerttemplates.htm)

    [Properties](properties-element-alerttemplates.htm)

      [DigestNotificationExcludedFields](digestnotificationexcludedfields-element-alerttemplates.htm)

      [ImmediateNotificationExcludedFields](immediatenotificationexcludedfields-element-alerttemplates.htm)

      [NotificationHandlerAssembly](notificationhandlerassembly-element-alert-templates.htm)

      [NotificationHandlerClassName](notificationhandlerclassname-element-alerttemplates.htm)

      [UpdateHandlerAssembly](updatehandlerassembly-element-alerttemplates.htm)

      [UpdateHandlerClassName](updatehandlerclassname-element-alerttemplates.htm)

    [Filters](filters-element-alerttemplates.htm)

      [FilterDefinition](filterdefinition-element-alerttemplates.htm)

        [FriendlyName](friendlyname-element-alerttemplates.htm)

        [ShortName](shortname-element-alerttemplates.htm)

        [Query](query-element-alerttemplates.htm)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows the basic elements in an alert templates
schema.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <AlertTemplates>
      <AlertTemplate Type="List" Default="True" Name ="Default Template">
      </AlertTemplate>
      <AlertTemplate Type="List" Name="SPAlertTemplateType.GenericList">
        <EventTypes IsVisible="True"/>
        <Format>
        </Format>
        <Properties>
        </Properties>
        <Filters>
          <FilterDefinition>
          </FilterDefinition>
        </Filters>
      </AlertTemplate>
    </AlertTemplates>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer"
target="T:Microsoft.SharePoint.IAlertNotifyHandler"><span
class="nolink">IAlertNotifyHandler</span></span>

#### Concepts

<span sdata="link">[Query
Schema](query-schema.htm)</span>

#### Other resources

[Alerts in Windows SharePoint
Services](http://msdn.microsoft.com/library/cb9586d9-84e1-43c9-93c9-8a7496f2f41d(Office.15).aspx)








