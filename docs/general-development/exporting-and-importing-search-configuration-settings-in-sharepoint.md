---
title: Exporting and importing search configuration settings in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: d00679a3-ffa2-4281-ad8b-70fc2c4a14e2
---


# Exporting and importing search configuration settings in SharePoint 2013
Get code examples that show you how to export and import customized search configuration settings. These settings include all customized query rules, result sources, result types, ranking models, and site search settings. SharePoint exposes this functionality through the  [Microsoft.Office.Server.Search.Portability](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Portability.aspx) namespace.You can also export customized search configuration settings from a Search service application (SSA) and import the settings to site collections and sites. 
> **Note:**
> You can't import customized search configuration settings to an SSA, or export the default search configuration settings. 
  
    
    


## Export search configuration settings
<a name="SP15_exporting_search_configuration"> </a>

The following code shows how to use  [SearchConfigurationPortability](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Portability.SearchConfigurationPortability.aspx) to export your site's search configuration settings. The code uses an example site `http://yoursite/sites/publishing1`, which you'd replace with your own site.  _fileName_ refers to the file where the search configuration settings are stored; _owner_ specifies the [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) level at which the search configuration settings are obtained.
  
    
    

```

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
<a name="SP15_importing_search_configuration"> </a>

The following code shows how to import search configuration settings from a file by using  [SearchConfigurationPortability](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Portability.SearchConfigurationPortability.aspx) and replace the existing search settings on a specified site, `http://yoursite/sites/publishing1`.  _fileName_ refers to the file where the search configuration settings are stored; _owner_ specifies the [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) level at which the search configuration settings are obtained.
  
    
    

```cs

private static void Import(string fileName)
{
    SPSite site = new SPSite("http://yoursite/sites/publishing1");
    SearchConfigurationPortability conf = new SearchConfigurationPortability(site);
    SearchObjectOwner owner = new SearchObjectOwner(SearchObjectLevel.SPWeb, site.OpenWeb());
    conf.ImportSearchConfiguration(owner, File.ReadAllText(fileName));
    site.Close();
}

```


## Additional resources
<a name="bk_addresources"> </a>


-  [Search in SharePoint 2013](search-in-sharepoint.md)
    
  
-  [Export and import customized search configuration settings in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/jj871675.aspx)
    
  

  
    
    

