---
title: Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams 
description: Create Microsoft Teams manifest manually for your solution to provide more flexibility and configuration options for example to enable targeting of the solution to specific team.
ms.date: 03/14/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams

You can deploy your SharePoint Framework based Teams tabs directly to Microsoft Team tenant catalog by using the **Sync to Teams** button in the app catalog. This operation will automatically create the needed manifest definition for the web parts in the SharePoin Framework so

![Sync To Teams](../../../images/using-web-part-as-ms-teams-tab-sync-to-team.png)

Using **Sync to Teams** from the SharePoint app catalog means that the tab will be available to be used by all end users in the tenant. If you do however want to adjust some of the detault setttings or target solution only to specific team, you can manually create the manifest file for your solution.

> [!IMPORTANT]
> **Sync to Teams** functionality does not currently work and will be fixed within upcoming days.

You can create the team manifest file using the [Teams App Studio](https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/get-started-app-studio) in the Microsoft Teams or you can also download a sample file from the [sp-dev-docs GitHub repository](https://github.com/SharePoint/sp-dev-docs/blob/master/assets/teams-tab-manual.zip) and modify that based on your requirements.

Important attributes to update in the manifest file are following: 

- **packageName** - Tehnical name of the package
- **id** - Unique package id. Generate new GUID for this attribute
- **name:Short** - Name of your app (<=30 chars)
- **description:Short** - Short description of your app
- **description:full** - Full description of your app
- **icons:outline** - The `outline` icon is used in these places: the app bar and messaging extensions the user has marked as a "favorite." This icon must be 32&times;32 pixels.
- **icons:color** - The `color` icon is used throughout Microsoft Teams (in app and tab galleries, bots, flyouts, and so on). This icon should be 192&times;192 pixels.
- **configurationUrl** - You should adjust the sample configurulationUrl to include manifest id of your web part component by updating the GUID after `componentId` query parameter.
- **canUpdateConfiguration** - Setting this property to true will mean that you allow modification of the properties of the web part. Set this value to false to prevent this.

Example `configurationUrl` attribute. Notice the `componentId` query parameter in the URL. You should not update any other sections of the URL as it's dynamically replaced when the tab is rendered from the context of SharePoint.

```
"https://{teamSiteDomain}{teamSitePath}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest={teamSitePath}/_layouts/15/teamshostedapp.aspx%3FopenPropertyPane=true%26teams%26componentId=aa3fecf0-1fd0-4751-aba0-12314dc3a22f%26forceLocale={locale}"
```

> [!NOTE]
> You should be replace the outline and color images included in the zip file to match your own solution.

See more details around the Microsoft Teams manifest options from the [Microsoft Teams developer guidance](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/apps/apps-package).

Below json structure demonstrates sample manifest file content.

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.2/MicrosoftTeams.schema.json",
  "manifestVersion": "1.2",
  "packageName": "MyHelloWorldTab",
  "id": "aa3fecf0-1fd0-4751-aba1-12314dc3a22f",
  "version": "0.1",
  "developer": {
    "name": "Parker Porcupine",
    "websiteUrl": "https://products.office.com/en-us/sharepoint/collaboration",
    "privacyUrl": "https://privacy.microsoft.com/en-us/privacystatement",
    "termsOfUseUrl": "https://www.microsoft.com/en-us/servicesagreement"
  },
  "name": {
    "short": "HelloWorld"
  },
  "description": {
    "short": "My awesome HelloWorld tab",
    "full": "My awesome HelloWorld tab which is brilliantly created using SPFx"
  },
  "icons": {
    "outline": "parker_outline.png",
    "color": "parker_color.png"
  },
  "accentColor": "#004578",
  "configurableTabs": [
    {
      "configurationUrl": "https://{teamSiteDomain}{teamSitePath}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest={teamSitePath}/_layouts/15/teamshostedapp.aspx%3FopenPropertyPane=true%26teams%26componentId=aa3fecf0-1fd0-4751-aba0-12314dc3a22f%26forceLocale={locale}",
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
