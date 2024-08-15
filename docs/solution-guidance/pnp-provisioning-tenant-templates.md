---
title: PnP Provisioning Tenant Templates
description: Think of Tenant Templates as an extension on top of PnP Provisioning or Site Templates. Instead of just provisioning artifacts to a site, you can now create sites, create teams, provision Azure AD entries, provision taxonomy etc.
ms.date: 09/21/2023
ms.localizationpriority: high
---

# PnP Provisioning Tenant Templates

Think of Tenant Templates as an extension on top of PnP Provisioning or Site Templates. Instead of just provisioning artifacts to a site, you can now create sites, create teams, provision Azure AD entries, provision taxonomy etc.

[!INCLUDE [pnp-provisioning-engine](../../includes/snippets/open-source/pnp-provisioning-engine.md)]

> [!NOTE]
> A good resource for tenant templates is the [PnP Provisioning Templates Repository](https://github.com/sharepoint/sp-dev-provisioning-templates) which contains all the templates previously used in the lookbook service (no longer available). You'll find a tenant folder, and in there several folders, each containing a template. In the subfolders you will find a source folder. In the source folder you'll find a template.xml file which is a tenant template.

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

## Provisioning Tenant Template containing a Team with PnP PowerShell

As the only way to create a team programmatically is by using the Microsoft Graph, we require an access token for the Graph when you use PnP PowerShell to provision a template with a Teams element in it. PnP PowerShell can automatically acquire such an access token for you, however, you need to provide to consent for that first for your tenant.

You can do this as follows:

```
Register-PnPManagementShellAccess
```

This is a one time action only. After you performed this consent step you can use the normal ways of connecting with PnP PowerShell as you are used to. 

The flow the provisioning engine uses is as follows:

1. You login using your credentials with `Connect-PnPOnline <tenant>.sharepoint.com -Interactive`
2. You apply the template with `Invoke-PnPTenantTemplate -Path yourtemplate.pnp`
3. The Provisioning Engine will start to provision any SharePoint artifact it finds in that template
4. The moment the engine encounters an artifact which requires an access token for the Microsoft Graph it will call back to PnP PowerShell to acquire such a token
5. PnP PowerShell will try, using the credentials you used in step 1 and the consent you provided earlier as written above, to acquire a token using the PnP Management Shell multi-tenant Azure application registration. The moment it successfully acquired the token it will return this token to the provisioning engine which will use that token to make the appropriate calls to the Microsoft Graph API.

If at a later state you want to remove this consent, login to your Azure Portal, and navigate to the Azure Active Directory. In the Enterprise Applications section you will find an entry called "PnP Management Shell" with client id 31359c7f-bd7e-475c-86db-fdb8c937548e. Remove this entry to clear the consent.

## See also

- [Microsoft 365 Patterns and Practices](https://pnp.github.io/)
- [SharePoint Developer Group at Microsoft Tech Community](https://techcommunity.microsoft.com/t5/SharePoint-Developer/bd-p/SharePointDev) 
- [PnP remote provisioning](pnp-remote-provisioning.md)