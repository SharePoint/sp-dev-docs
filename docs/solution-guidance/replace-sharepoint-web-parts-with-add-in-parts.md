---
title: Replace SharePoint web parts with add-in parts
ms.date: 11/03/2017
---
# Replace SharePoint web parts with add-in parts

Use the transformation process to replace web parts with add-in parts by using the SharePoint client object model (CSOM).

_**Applies to:** SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

You can use the transformation process to replace SharePoint web parts with add-in parts on pages by using CSOM to find and remove specific web parts, and then adding the new add-in parts.

**Important:**  Farm solutions cannot be migrated to SharePoint Online. By applying the techniques and code described in this article, you can build a new solution with similar functionality that your farm solutions provide, which can then be deployed to SharePoint Online. After you apply these techniques, your pages will be updated to use add-in parts, which can then be migrated to SharePoint Online. The code in this article requires additional code to provide a fully working solution. For example, this article does not discuss how to authenticate to Office 365, how to implement required exception handling, and so on. For additional code samples, see the [Office 365 Developer Patterns and Practices project](https://github.com/SharePoint/PnP).

## Before you begin

Before performing the steps in this article to replace your web parts with add-in parts, make sure that you:

- Are using a SharePoint environment that is configured to support add-ins. SharePoint Online is configured to support add-ins. If you are using SharePoint Server 2013 on-premises, see [Configure an environment for SharePoint Add-ins (SharePoint 2013)](https://technet.microsoft.com/library/fp161236%28v=office.15%29).
    
- Have deployed your new add-in part to SharePoint.
    
- Have assigned your add-ins  **FullControl** permissions on the **Web**. For more information, see [Add-in permissions in SharePoint 2013](https://msdn.microsoft.com/library/office/fp142383.aspx).

## Replace web parts with add-in parts

To replace web parts with new add-in parts:

1. Export the new add-in part. Use the exported add-in part to get the add-in part definition. 
    
2. Find all pages with web parts to be replaced, and then remove the web parts. 
    
3. Create the new add-in part on the page by using the add-in part definition. 
    
To use CSOM to replace a web part with an add-in part, you need to get the add-in part definition by exporting the add-in part. To export the add-in part to get the add-in part's definition:

1. Open your SharePoint site and choose  **Settings**, or the gear icon, and then choose  **Edit page**.
    
2. On the ribbon, choose  **INSERT** > **Add-in Part**.
    
3. Choose your add-in part, and then choose  **Add**.
    
4. When the add-in part is added to your page, choose the down arrow in the top-right corner of the add-in part, and then choose  **Edit web part**.
    
5. In  **Advanced**, in  **Export Mode** choose **Export all data**, and then choose  **OK**.
    
6. When you return to the edit page with your add-in part displayed, choose the down arrow in the top-right corner of the add-in part, and then choose  **Export**.
    
7. Choose  **Save**.
    
8. After the download completes, choose  **Open folder**.
    
9. Open  **Notepad**, then choose  **File** > **Open**.
    
10. Choose the add-in part file that you downloaded, and then choose  **Open** to view the add-in part definition.
    
> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```XML
<webParts>
  <webPart xmlns="http://schemas.microsoft.com/WebPart/v3">
    <metaData>
      <type name="Microsoft.SharePoint.WebPartPages.ClientWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" />
      <importErrorMessage>Cannot import this web part.</importErrorMessage>
    </metaData>
    <data>
      <properties>
        <property name="TitleIconImageUrl" type="string" />
        <property name="Direction" type="direction">NotSet</property>
        <property name="ExportMode" type="exportmode">All</property>
        <property name="HelpUrl" type="string" />
        <property name="Hidden" type="bool">False</property>
        <property name="Description" type="string">WelcomeAppPart Description</property>
        <property name="FeatureId" type="System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">0b846986-3474-4f1a-93cf-b7817ef057f9</property>
        <property name="CatalogIconImageUrl" type="string" />
        <property name="Title" type="string">WelcomeAppPart</property>
        <property name="AllowHide" type="bool">True</property>
        <property name="ProductWebId" type="System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">741c5404-f43e-4f01-acfb-fcd100fc7d24</property>
        <property name="AllowZoneChange" type="bool">True</property>
        <property name="TitleUrl" type="string" />
        <property name="ChromeType" type="chrometype">Default</property>
        <property name="AllowConnect" type="bool">True</property>
        <property name="Width" type="unit" />
        <property name="Height" type="unit" />
        <property name="WebPartName" type="string">WelcomeAppPart</property>
        <property name="HelpMode" type="helpmode">Navigate</property>
        <property name="AllowEdit" type="bool">True</property>
        <property name="AllowMinimize" type="bool">True</property>
        <property name="ProductId" type="System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">0b846986-3474-4f1a-93cf-b7817ef057f8</property>
        <property name="AllowClose" type="bool">True</property>
        <property name="ChromeState" type="chromestate">Normal</property>
      </properties>
    </data>
  </webPart>
</webParts>
```

To use the add-in part definition in your CSOM code:

- Replace all double quotes (") with a pair of double quotes ("") in the add-in part definition.
    
- Assign the add-in part definition to a string that will be used in your CSOM code.

```csharp
private const string appPartXml = @"<webParts>
  <webPart xmlns=""http://schemas.microsoft.com/WebPart/v3"">
    <metaData>
      <type name=""Microsoft.SharePoint.WebPartPages.ClientWebPart, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"" />
      <importErrorMessage>Cannot import this web part.</importErrorMessage>
    </metaData>
    <data>
      <properties>
        <property name=""TitleIconImageUrl"" type=""string"" />
        <property name=""Direction"" type=""direction"">NotSet</property>
        <property name=""ExportMode"" type=""exportmode"">All</property>
        <property name=""HelpUrl"" type=""string"" />
        <property name=""Hidden"" type=""bool"">False</property>
        <property name=""Description"" type=""string"">WelcomeAppPart Description</property>
        <property name=""FeatureId"" type=""System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"">0b846986-3474-4f1a-93cf-b7817ef057f9</property>
        <property name=""CatalogIconImageUrl"" type=""string"" />
        <property name=""Title"" type=""string"">WelcomeAppPart Title</property>
        <property name=""AllowHide"" type=""bool"">True</property>
        <property name=""ProductWebId"" type=""System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"">717c00a1-08ea-41a5-a2b7-4c8f9c1ce770</property>
        <property name=""AllowZoneChange"" type=""bool"">True</property>
        <property name=""TitleUrl"" type=""string"" />
        <property name=""ChromeType"" type=""chrometype"">Default</property>
        <property name=""AllowConnect"" type=""bool"">True</property>
        <property name=""Width"" type=""unit"" />
        <property name=""Height"" type=""unit"" />
        <property name=""WebPartName"" type=""string"">WelcomeAppPart</property>
        <property name=""HelpMode"" type=""helpmode"">Navigate</property>
        <property name=""AllowEdit"" type=""bool"">True</property>
        <property name=""AllowMinimize"" type=""bool"">True</property>
        <property name=""ProductId"" type=""System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089"">0b846986-3474-4f1a-93cf-b7817ef057f8</property>
        <property name=""AllowClose"" type=""bool"">True</property>
        <property name=""ChromeState"" type=""chromestate"">Normal</property>
      </properties>
    </data>
  </webPart>
</webParts>";
```

**ReplaceWebPartsWithAppParts** starts the process of finding the web parts to be replaced by:

1. Getting some properties from the [Web](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.web.aspx) to find the **Pages** library on the site.
    
2. In the  **Pages** library, getting the list items and the file associated with the list item.
    
3. For each list item returned from the  **Pages** library, calling **FindWebPartToReplace**.

```csharp
protected void ReplaceWebPartsWithAppParts(object sender, EventArgs e)
{
    var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);
    using (var clientContext = spContext.CreateUserClientContextForSPHost())
    {
        Web web = clientContext.Web;
        // Get properties from the Web.
        clientContext.Load(web,
                            w => w.ServerRelativeUrl,
                            w => w.AllProperties);
        clientContext.ExecuteQuery();
        // Read the Pages library name from the Web properties.
        var pagesListName = web.AllProperties["__pageslistname"] as string;

        var list = web.Lists.GetByTitle(pagesListName);
        var items = list.GetItems(CamlQuery.CreateAllItemsQuery());
        // Get the file associated with each list item.
        clientContext.Load(items,
                            i => i.Include(
                                    item => item.File));
        clientContext.ExecuteQuery();

        // Iterate through all pages in the Pages list.
        foreach (var item in items)
        {
            FindWebPartForReplacement(item, clientContext, web);
        }
    }
}
```

**FindWebPartToReplace** finds web parts that should be replaced with the new add-in part by:

1. Setting  **page** to the file associated with the list item returned from the **Pages** library.
    
2. Using [LimitedWebPartManager](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.webparts.limitedwebpartmanager.aspx) to find all web parts on a specific page. The title of each web part is also returned in the lambda expression.
    
3. For each web part in the web part manager's [WebParts](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.webparts.limitedwebpartmanager.webparts.aspx) property, determining whether the web part's title and the **oldWebPartTitle** variable, which is set to the title of the web part you are replacing, are equal. If the web part title and **oldWebPartTitle** are equal, call **ReplaceWebPart**; otherwise continue with the next iteration of the **foreach** loop.

```csharp
private static void FindWebPartToReplace(ListItem item, ClientContext clientContext, Web web)
{
    File page = item.File;
    // Requires Full Control permissions on the Web.
    LimitedWebPartManager webPartManager = page.GetLimitedWebPartManager(PersonalizationScope.Shared);
    clientContext.Load(webPartManager,
                        wpm => wpm.WebParts,
                        wpm => wpm.WebParts.Include(
                                            wp => wp.WebPart.Title));
    clientContext.ExecuteQuery();

    foreach (var oldWebPartDefinition in webPartManager.WebParts)
    {
        var oldWebPart = oldWebPartDefinition.WebPart;
        // Modify the web part if we find an old web part with the same title.
        if (oldWebPart.Title != oldWebPartTitle) continue;

        ReplaceWebPart(web, item, webPartManager, oldWebPartDefinition, clientContext, page);
    }
}
```

**ReplaceWebPart** replaces the new web part by:

1. Using [LimitedWebPartManager.ImportWebPart ](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.webparts.limitedwebpartmanager.importwebpart.aspx) to convert the XML string in **appPartXml** into a [WebPartDefinition](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.webparts.webpartdefinition.aspx).
    
2. Using [LimitedWebPartManager.AddWebPart](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.webparts.limitedwebpartmanager.addwebpart.aspx) to add a web part to a page in a specific web part zone. Ensure you pass the **zoneId** to **AddWebPart**, otherwise an exception will be thrown when  **ExecuteQuery** runs.
    
3. Using [WebPartDefinition.DeleteWebPart](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.webparts.webpartdefinition.deletewebpart.aspx) to delete the old web part from the page.

```csharp
private static void ReplaceWebPart(Web web, ListItem item, LimitedWebPartManager webPartManager,
      WebPartDefinition oldWebPartDefinition, ClientContext clientContext, File page)
  {
     
      // Create a web part definition using the XML string.
      var definition = webPartManager.ImportWebPart(appPartXml);
      webPartManager.AddWebPart(definition.WebPart, "RightColumn", 0);

      // Delete the old web part from the page.
      oldWebPartDefinition.DeleteWebPart();
      clientContext.Load(page,
                          p => p.CheckOutType,
                          p => p.Level);

      clientContext.ExecuteQuery();
     
  }
```

## See also
<a name="bk_addresources"> </a>

- [Transform farm solutions to the SharePoint Add-in model](Transform-farm-solutions-to-the-SharePoint-app-model.md)
    
- [Provisioning.Pages](https://github.com/SharePoint/PnP/tree/master/Scenarios/Provisioning.Pages)
