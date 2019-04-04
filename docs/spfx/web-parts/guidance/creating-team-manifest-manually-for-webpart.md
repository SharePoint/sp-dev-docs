---
title: Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams 
description: Create Microsoft Teams manifest manually for your solution to provide more flexibility and configuration options for example to enable targeting of the solution to specific team.
ms.date: 04/04/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams

You can create the Microsoft Teams app manifest file using the [Teams App Studio](https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/get-started-app-studio) in the Microsoft Teams or you can also download a sample file from the [sp-dev-docs GitHub repository](https://github.com/SharePoint/sp-dev-docs/blob/master/assets/teams-tab-manual.zip) and modify that based on your requirements.

> [!NOTE]
> You may notice a menu item **Sync to Teams** in the App Catalog ribbon:
>
> ![Sync To Teams](../../../images/using-web-part-as-ms-teams-tab-sync-to-team.png)
>
> At this time this functionality is not fully implemented and is not the recommended way to deploy your SharePoint Framework web part to Microsoft Teams as a custom tab. This document will be updated when this functionality has been deployed across SharePoint Online. Until that time, the recommended approach is to install SharePoint Framework web parts as custom Microsoft Teams tabs using the side loading approach.

## Create a Microsoft Teams app manifest

To side load a SharePoint Framework web part as a Microsoft Teams application, you must create a Microsoft Teams application manifest file with specific values. Use the following manifest file as a template:

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.2/MicrosoftTeams.schema.json",
  "manifestVersion": "1.2",
  "packageName": "{{SPFX_COMPONENT_ALIAS}}",
  "id": "aa3fecf0-1fd0-4751-aba1-12314dc3a22f",
  "version": "0.1",
  "developer": {
    "name": "Parker Porcupine",
    "websiteUrl": "https://products.office.com/en-us/sharepoint/collaboration",
    "privacyUrl": "https://privacy.microsoft.com/en-us/privacystatement",
    "termsOfUseUrl": "https://www.microsoft.com/en-us/servicesagreement"
  },
  "name": {
    "short": "{{SPFX_COMPONENT_NAME}}"
  },
  "description": {
    "short": "{{SPFX_COMPONENT_SHORT_DESCRIPTION}}",
    "full": "{{SPFX_COMPONENT_LONG_DESCRIPTION}}"
  },
  "icons": {
    "outline": "{{SPFX_COMPONENT_ID}}_outline.png",
    "color": "{{SPFX_COMPONENT_ID}}_color.png"
  },
  "accentColor": "#004578",
  "configurableTabs": [
    {
      "configurationUrl": "https://{teamSiteDomain}{teamSitePath}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest={teamSitePath}/_layouts/15/teamshostedapp.aspx%3FopenPropertyPane=true%26teams%26componentId={{SPFX_COMPONENT_ID}}%26forceLocale={locale}",
      "canUpdateConfiguration": true,
      "scopes": [
        "team"
      ]
    }
  ],
  "validDomains": [
    "*.login.microsoftonline.com",
    "*.sharepoint.com",
    "*.sharepoint-df.com",
    "spoppe-a.akamaihd.net",
    "spoprod-a.akamaihd.net",
    "resourceseng.blob.core.windows.net",
    "msft.spoppe.com"
  ],
  "webApplicationInfo": {
    "resource": "https://{teamSiteDomain}",
    "id": "00000003-0000-0ff1-ce00-000000000000"
  }
}
```

Important attributes to update in the manifest file are following:

- **packageName** - Technical name of the package
- **id** - Unique package id. Generate new GUID for this attribute
- **name:Short** - Name of your app (<=30 chars)
- **description:Short** - Short description of your app
- **description:full** - Full description of your app
- **icons:outline** - The `outline` icon is used in these places: the app bar and messaging extensions the user has marked as a "favorite." This icon must be 32&times;32 pixels.
- **icons:color** - The `color` icon is used throughout Microsoft Teams (in app and tab galleries, bots, flyouts, and so on). This icon should be 192&times;192 pixels.
- **configurationUrl** - You should adjust the sample `configurulationUrl` to include manifest id of your web part component by updating the GUID after `componentId` query parameter.
- **canUpdateConfiguration** - Setting this property to true will mean that you allow modification of the properties of the web part. Set this value to false to prevent this.

Notice in the template manifest file above, there are multiple placeholders that should be updated. Use the following values from the SharePoint Framework's web part manifest file (**./src/webparts/[webpartname]/[webpartname].manifest.json**) to update these values:

|          manifest.json string          |  Property in SPFx component manifest  |
| -------------------------------------- | ------------------------------------- |
| `{{SPFX_COMPONENT_ALIAS}}`             | `alias`                               |
| `{{SPFX_COMPONENT_NAME}}`              | `preconfiguredEntries[0].title`       |
| `{{SPFX_COMPONENT_SHORT_DESCRIPTION}}` | `preconfiguredEntries[0].description` |
| `{{SPFX_COMPONENT_LONG_DESCRIPTION}}`  | `preconfiguredEntries[0].description` |
| `{{SPFX_COMPONENT_ID}}`                | `id`                                  |

Notice the `componentId` query parameter in the `configurulationUrl`. You should not update any other sections of the URL as it's dynamically replaced when the tab is rendered from the context of SharePoint.

See more details around the Microsoft Teams manifest options from the [Microsoft Teams developer guidance](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/apps/apps-package).

Below json structure demonstrates sample manifest file content.

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.2/MicrosoftTeams.schema.json",
  "manifestVersion": "1.2",
  "packageName": "SpFxTeamsTogetherWebPart",
  "id": "aa3fecf0-1fd0-4751-aba1-12314dc3a22f",
  "version": "0.1",
  "developer": {
    "name": "Parker Porcupine",
    "websiteUrl": "https://products.office.com/en-us/sharepoint/collaboration",
    "privacyUrl": "https://privacy.microsoft.com/en-us/privacystatement",
    "termsOfUseUrl": "https://www.microsoft.com/en-us/servicesagreement"
  },
  "name": {
    "short": "SPFx Teams Together"
  },
  "description": {
    "short": "SPFx Teams Together short description",
    "full": "SPFx Teams Together long description"
  },
  "icons": {
    "outline": "b7771434-9587-4a79-9990-48c310f78a3d_outline.png",
    "color": "b7771434-9587-4a79-9990-48c310f78a3d_color.png"
  },
  "accentColor": "#004578",
  "configurableTabs": [
    {
      "configurationUrl": "https://{teamSiteDomain}{teamSitePath}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest={teamSitePath}/_layouts/15/teamshostedapp.aspx%3FopenPropertyPane=true%26teams%26componentId=b7771434-9587-4a79-9990-48c310f78a3d%26forceLocale={locale}",
      "canUpdateConfiguration": true,
      "scopes": [
        "team"
      ]
    }
  ],
  "validDomains": [
    "*.login.microsoftonline.com",
    "*.sharepoint.com",
    "*.sharepoint-df.com",
    "spoppe-a.akamaihd.net",
    "spoprod-a.akamaihd.net",
    "resourceseng.blob.core.windows.net",
    "msft.spoppe.com"
  ],
  "webApplicationInfo": {
    "resource": "https://{teamSiteDomain}",
    "id": "00000003-0000-0ff1-ce00-000000000000"
  }
}
```
