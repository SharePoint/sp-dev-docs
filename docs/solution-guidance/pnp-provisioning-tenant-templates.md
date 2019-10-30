---
title: PnP Provisioning Tenant Templates
description: 
ms.date: 10/29/2019
localization_priority: Priority
---

# PnP Provisioning Tenant Templates

Think of Tenant Templates as an extension on top of PnP Provisioning or Site Templates. Instead of just provisioning artifacts to a site, you can now create sites, create teams, provision Azure AD entries, provision taxonomy etc.

> [!NOTE] 
> A good resource for tenant templates is the [PnP Provisioning Templates Repository](https://github.com/sharepoint/sp-dev-provisioning-templates) which contains all the templates used in the lookbook service at https://lookbook.microsoft.com. You'll find a tenant folder, and in there several folders, each containing a template. In the subfolders you will find a source folder. In the source folder you'll find a template.xml file which is a tenant template.


## The Sequence

A sequence is a driver to create site collections and optional subsites. Notice that a sequence is only able to create so-called 'modern site': a communication site, a modern team site with a connected O365 group or a modern team without a connected O365 group.

```xml
<pnp:Sequence ID="sequence">
    <pnp:SiteCollections>
        <pnp:SiteCollection xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="pnp:CommunicationSite" ProvisioningId="MAIN" SiteDesign="Topic" Title="My New Site" Description="" Url="/sites/mynewsite" IsHubSite="false" Owner="user@domain.com">
        <pnp:Templates>
            <pnp:ProvisioningTemplateReference ID="MAIN-TEMPLATE"/>
        </pnp:Templates>
        </pnp:SiteCollection>
    </pnp:SiteCollections>
</pnp:Sequence>
```

In the snippet above you see that we're creating a communication site when applying the template. 

It is important to have ```xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"``` attribute in the ```<pnp:SiteCollection>``` element, as it allows the schema to figure out which properties apply to what element. A Communication Site has different properties than for instance a Team Site.

A child of the ```<pnp:SiteCollection>``` element is ```<pnp:Templates>``` which allows you to refer to 1 or more templates. While possible that you keep those templates in separate files, it is recommended initially to keep the templates in the same file.

When the engine parses the template it will first create the site collections, in this case the site with URL ```/sites/mynewsite```. After it created the site it will find the template with an ID of ```MAIN-TEMPLATE``` and apply that template to the just created site.

## Teams

You can easily configure a team to be created:

```xml
 <pnp:Teams>
    <pnp:Team DisplayName="My Test Team" Description="" Visibility="Private" Photo="TeamData/TEAM_ef3020c6-1953-4367-b7c5-a6da8e24d049/photo_ef3020c6-1953-4367-b7c5-a6da8e24d049_432X432.jpg" Specialization="None">
      <pnp:FunSettings />
      <pnp:GuestSettings AllowCreateUpdateChannels="false" />
      <pnp:MembersSettings />
      <pnp:MessagingSettings />
      <pnp:Security>
        <pnp:Owners>
          <pnp:User UserPrincipalName="user@domain.com" />
        </pnp:Owners>
        <pnp:Members>
          <pnp:User UserPrincipalName="user@domain.com" />
        </pnp:Members>
      </pnp:Security>
      <pnp:DiscoverySettings ShowInTeamsSearchAndSuggestions="false" />
      <pnp:Channels>
        <pnp:Channel DisplayName="General" Description="test" ID="19:796d063baf3fad3ffa2231aeaf092c8fb9b44e@thread.skype">
          <pnp:Tabs>
            <pnp:Tab DisplayName="Lists and Pages" TeamsAppId="2a527703-1f6f-4559-a332-d8a7d288cd88"/>
            <pnp:Tab DisplayName="Docs" TeamsAppId="com.microsoft.teamspace.tab.files.sharepoint">
              <pnp:Configuration EntityId="" ContentUrl="https://tenant.sharepoint.com/sites/mynewsite/Shared%20Documents" RemoveUrl="" WebsiteUrl="" />
            </pnp:Tab>
          </pnp:Tabs>
        </pnp:Channel>
      </pnp:Channels>
    </pnp:Team>
  </pnp:Teams>
  ```

  The above sample creates a team, adds a channel, and adds 2 tabs to the channel.

  ## See also

- [SharePoint Patterns and Practices](https://github.com/SharePoint/PnP/)
- [SharePoint Developer Group at Microsoft Tech Community](https://techcommunity.microsoft.com/t5/SharePoint-Developer/bd-p/SharePointDev) 
- [PnP remote provisioning](pnp-remote-provisioning.md)
