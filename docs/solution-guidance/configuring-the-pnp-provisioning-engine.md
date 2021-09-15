---
title: Configuring the PnP Provisioning Engine
description: Sometimes you do not want to extract all artifacts from a site, or only even a specific list. For that the PnP Provisioning Engine uses a JSON formatted configuration file which gives you detailed control over the process.
ms.date: 04/07/2021
ms.localizationpriority: high
---

# Configuring the PnP Provisioning Engine

Sometimes you do not want to extract all artifacts from a site, or only even a specific list. For that the PnP Provisioning Engine uses a JSON formatted configuration file which gives you detailed control over the process.

## Extraction Configuration

There is a JSON schema available at https://aka.ms/sppnp-extract-configuration-schema. We will automatically update the schema referred to by that URL to a later version if new functionality comes available.

If you create a JSON file use a modern editor, like Visual Studio Code, and you reference this schema, there will be intellisense and descriptions of all the properties you can set.

Let's have a look at the following sample configuration

```json
{
  "$schema":"https://aka.ms/sppnp-extract-configuration-schema",
  "handlers": [
    "Lists",
    "WebSettings",
    "Pages"
  ]
}
```

This will tell the engine to only extract lists, the web settings (which includes the title, logo etc.), and the home page.

For some of the handlers we can specify more detail configuration options:

```json
{
  "$schema":"https://aka.ms/sppnp-extract-configuration-schema",
  "persistAssetFiles": true,
  "handlers": [
    "Lists",
    "WebSettings",
    "Pages"
  ],
  "lists": {
    "lists": [
      {
        "title": "My Test List",
        "includeItems": true,
        "query": {
          "includeAttachments": true
        }
      }
    ]
  },
  "pages": {
    "includeAllClientSidePages": true
  }
}
```

Using the configuration above we limit the extraction of lists to only include the list called "My Test List". We're telling the engine that we do want to export list items to the template (they will show up as DataRow elements), and we tell the engine also to include any attachments if present. However, the engine will not download those attachments unless you set the `persistAssetFiles` property to `true`.

Once you have a configuration file in place, you can use it like so, as described in the documentation for [Get-PnPSiteTemplate](/powershell/module/sharepoint-pnp/get-pnpsitetemplate):

```powershell
Get-PnPSiteTemplate -Configuration "config.json" -Out "template.xml"
```

Notice that you can specify more configuration options for lists, and we advice you to explore the schema further.

By default the engine only exports the home page if you specify the `Pages` handler. If you want to include all pages, set the `includeAllClientSidePages` property in the `pages` section to true.

## See also

- [SharePoint Patterns and Practices](https://github.com/SharePoint/PnP/)
- [SharePoint Developer Group at Microsoft Tech Community](https://techcommunity.microsoft.com/t5/SharePoint-Developer/bd-p/SharePointDev)
- [PnP remote provisioning](pnp-remote-provisioning.md)
