---
title: Exporting and importing search configuration settings in SharePoint
description: Get code examples that show you how to export and import customized search configuration settings. These settings include all customized query rules, result sources, result types, ranking models, and site search settings.
ms.date: 09/25/2017
ms.assetid: d00679a3-ffa2-4281-ad8b-70fc2c4a14e2
ms.localizationpriority: medium
---


# Exporting and importing search configuration settings in SharePoint
Get code examples that show you how to export and import customized search configuration settings. These settings include all customized query rules, result sources, result types, ranking models, and site search settings. SharePoint exposes this functionality through the  [Microsoft.Office.Server.Search.Portability](/previous-versions/office/sharepoint-server/jj268113(v=office.15)) namespace.You can also export customized search configuration settings from a Search service application (SSA) and import the settings to site collections and sites.

> [!NOTE]
> You can't import customized search configuration settings to an SSA, or export the default search configuration settings.


## Export search configuration settings

The following code shows how to use  [SearchConfigurationPortability](/previous-versions/office/sharepoint-server/jj267460(v=office.15)) to export your site's search configuration settings. The code uses an example site `http://yoursite/sites/publishing1`, which you'd replace with your own site.  _fileName_ refers to the file where the search configuration settings are stored; _owner_ specifies the [SPWeb](/previous-versions/office/sharepoint-server/ms473942(v=office.15)) level at which the search configuration settings are obtained.


```csharp

private static void Export(string fileName)
{
    SPSite site = new SPSite("http://yoursite/sites/publishing1");
    SearchConfigurationPortability conf = new SearchConfigurationPortability(site);
    SearchObjectOwner owner = new SearchObjectOwner(SearchObjectLevel.SPWeb, site.OpenWeb());
    var buff = conf.ExportSearchConfiguration(owner);
    File.WriteAllText(fileName, buff);
    site.Close();
}
```

## Import search configuration settings

The following code shows how to import search configuration settings from a file by using  [SearchConfigurationPortability](/previous-versions/office/sharepoint-server/jj267460(v=office.15)) and replace the existing search settings on a specified site, `http://yoursite/sites/publishing1`.  _fileName_ refers to the file where the search configuration settings are stored; _owner_ specifies the [SPWeb](/previous-versions/office/sharepoint-server/ms473942(v=office.15)) level at which the search configuration settings are obtained.


```csharp

private static void Import(string fileName)
{
    SPSite site = new SPSite("http://yoursite/sites/publishing1");
    SearchConfigurationPortability conf = new SearchConfigurationPortability(site);
    SearchObjectOwner owner = new SearchObjectOwner(SearchObjectLevel.SPWeb, site.OpenWeb());
    conf.ImportSearchConfiguration(owner, File.ReadAllText(fileName));
    site.Close();
}

```

## See also

-  [Search in SharePoint](search-in-sharepoint.md)
-  [Export and import customized search configuration settings in SharePoint](/SharePoint/search/export-and-import-customized-search-configuration-settings)
