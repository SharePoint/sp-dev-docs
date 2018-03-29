---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 49935cf5-d97c-4909-af7b-ead7e76b4c4b
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
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
<td align="left"># CommandUIHandler Element</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Defines the handler for a command.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;CommandUIHandler
  Command = &quot;Text&quot;
  CommandAction = &quot;Text&quot;
  EnabledScript = &quot;Text&quot;
 /&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Command**</p></td>
<td align="left"><p>Required. The name of a command. The value of this attribute matches the value of a **Command** attribute on an element that defines a control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CommandAction**</p></td>
<td align="left"><p>Required. A script statement to execute when this handler is invoked. Microsoft SharePoint Foundation calls the **eval** method, passing in the value of this attribute.</p>
<p>The value of the attribute can contain substitution tokens that are transformed at rendering. The following tokens are recognized:</p>
<ul>
<li><p><span class="code">{ItemId}</span> - ID (GUID) taken from the list view.</p></li>
<li><p><span class="code">{ItemUrl}</span> - Web-relative URL of the list item (<span sdata="cer" target="P:Microsoft.SharePoint.SPListItem.Url"><span class="nolink">Url</span></span>).</p></li>
<li><p><span class="code">{RecurrenceId}</span> - ID of a recurrent item (<span sdata="cer" target="P:Microsoft.SharePoint.SPListItem.RecurrenceID"><span class="nolink">RecurrenceID</span></span>).</p></li>
<li><p><span class="code">{SiteUrl}</span> - The fully qualified URL to the site (<span sdata="cer" target="P:Microsoft.SharePoint.SPWeb.Url"><span class="nolink">Url</span></span>).</p></li>
<li><p><span class="code">{ListId}</span> - ID (GUID) of the list (<span sdata="cer" target="P:Microsoft.SharePoint.SPList.ID"><span class="nolink">ID</span></span>).</p></li>
<li><p><span class="code">{ListUrlDir}</span> - Server-relative URL of the site plus the list's folder.</p></li>
<li><p><span class="code">{Source}</span> - Fully qualified request URL.</p></li>
<li><p><span class="code">{SelectedListId}</span> - ID (GUID) of the list that is currently selected from a list view.</p></li>
<li><p><span class="code">{SelectedItemId}</span> - ID of the item that is currently selected from the list view.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnabledScript**</p></td>
<td align="left"><p>Optional.</p>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The **EnabledScript** attribute doesn't work on custom actions deployed to the host web by an SharePoint Add-in.</p></td>
</tr>
</tbody>
</table>
</div>
<p>A script statement that is executed to determine whether the command is enabled or disabled. The script expression should return a **Boolean</span> value, **true</span> if the command is enabled and **false** if not. If the ribbon is disabled, commands are grayed out and are not clickable.</p>
<p>As with the **CommandAction</span> attribute, the **eval</span> method is called with the value of this attribute as an argument. The **EnabledScript</span> attribute does not support the substitution tokens that are described for the **CommandAction** attribute.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

None


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="commanduihandlers-element.md">CommandUIHandlers</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 1</p>
<p>Maximum: unbounded</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example defines a button command and a corresponding
handler.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <CustomAction
       Id="EmailContacts"
       RegistrationType="List"
       RegistrationId="105"
       Location="CommandUI.Ribbon">
        <CommandUIExtension>
          <CommandUIDefinitions>
            <CommandUIDefinition
             Location="Ribbon.ListItem.Actions.Controls._children">
              <Button
                Id="Ribbon.ListItem.Actions.Email"
                Alt="$Resources:core,E-Mail;"
                Sequence="55"
                Command="emailContacts"
                LabelText="$Resources:core,E-Mail;"
                Description="$Resources:core,E-Mail;"
                TemplateAlias="o1"/>
            </CommandUIDefinition>
          </CommandUIDefinitions>
          <CommandUIHandlers>
            <CommandUIHandler
             Command="emailContacts"
             CommandAction="javascript:
               function getItemIds()
               {
                 var itemIds = '';
                 var items = SP.ListOperation.Selection.getSelectedItems();
                 var item;
                 for(var i in items)
                 {
                   item = items[i];
                   if(itemIds != '')
                   {
                     itemIds = itemIds + ',';
                   }
                   itemIds = itemIds + item.id;
                 }
                 return itemIds;
               }
               function handleReadyStateChange()
               {
                 if (client.readyState == 4)
                 {
                   if (client.status == 200) 
                   {
                     // client.responseText is mailto string
                     window.location = ('mailto:' + client.responseText);
                   }
                 }
               }
               function invokeEmailContacts()
               {
                 var params = 'itemids=' + getItemIds(); 
                 // Posting to EmailContacts.ashx to get the mailto string
                 var site='{SiteUrl}'; 
                 var url = site + '/_layouts/emailcontacts.ashx?listId={ListId}';
                 client = null;
                 client = new XMLHttpRequest();
                 client.onreadystatechange =  handleReadyStateChange;
                 client.open('POST', url, true);         
                 client.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                 client.setRequestHeader('Content-length', params.length);
                 client.send(params);
               }      
               invokeEmailContacts();"
             
          EnabledScript="javascript:
               function enableEmailContacts()
               {
                 var items = SP.ListOperation.Selection.getSelectedItems();
                 return (items.length > 0);
               }
               enableEmailContacts();"/>
          </CommandUIHandlers>
        </CommandUIExtension>
      </CustomAction>
    </Elements>








