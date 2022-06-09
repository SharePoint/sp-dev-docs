---
title: CommandUIHandler element
description: Describes the CommandUIHandler element, which defines the handler for a command and includes elements, attributes, and occurences.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 49935cf5-d97c-4909-af7b-ead7e76b4c4b
---

# CommandUIHandler element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines the handler for a command.

## Definition

```XML
<CommandUIHandler
  Command = "Text"
  CommandAction = "Text"
  EnabledScript = "Text"
 />
 ```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
| --- | --- |
|**Command**|Required. The name of a command. The value of this attribute matches the value of a **Command** attribute on an element that defines a control.|
|**CommandAction**|<p>Required. A script statement to execute when this handler is invoked. Microsoft SharePoint Foundation calls the **eval** method, passing in the value of this attribute.</p><p>The value of the attribute can contain substitution tokens that are transformed at rendering. The following tokens are recognized:</p><ul><li>`{ItemId}` - ID (GUID) taken from the list view.</li><li>`{ItemUrl}` - Web-relative URL of the list item (Url).</li><li>`{RecurrenceId}` - ID of a recurrent item (RecurrenceID).</li><li>`{SiteUrl}` - The fully qualified URL to the site (Url).</li><li>`{ListId}` - ID (GUID) of the list (ID).</li><li>`{ListUrlDir}` - Server-relative URL of the site plus the list's folder.</li><li>`{Source}` - Fully qualified request URL.</li><li>`{SelectedListId}` - ID (GUID) of the list that is currently selected from a list view.</li><li>`{SelectedItemId}` - ID of the item that is currently selected from the list view.</li></ul>|
|**EnabledScript**|<p>**Note**: The **EnabledScript** attribute doesn't work on custom actions deployed to the host web by an SharePoint Add-in.</p><p>A script statement that is executed to determine whether the command is enabled or disabled. The script expression should return a **Boolean** value, **true** if the command is enabled and **false** if not. If the ribbon is disabled, commands are grayed out and are not clickable.</p><p>As with the **CommandAction** attribute, the **eval** method is called with the value of this attribute as an argument. The **EnabledScript** attribute does not support the substitution tokens that are described for the **CommandAction** attribute.</p>|


### Child elements

None

### Parent elements

[CommandUIHandlers](commanduihandlers-element.md)

### Occurrences

Minimum: 1

Maximum: unbounded

## Example

The following example defines a button command and a corresponding handler.

```XML
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
```

<br/>







