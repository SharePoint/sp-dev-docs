# Upload Web Parts in SharePoint

Deploy pre-configured, standard SharePoint Web Parts for your users.

_**Applies to:** SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

You can upload pre-configured, standard SharePoint Web Parts for users to add to their SharePoint sites. For example, you can upload a pre-configured:

- Script Editor Web Part that uses JavaScript files on the remote web.
    
- Content Search Web Part.
    
This article discusses pre-configuring the Script Editor Web Part to use JavaScript files on the remote web to perform UI customization. Use this solution to:

- Use script files from the remote web in your Web Parts rather than referencing scripts from the **Site Assets** list on the host web.
    
- Deploy pre-configured Web Parts in your custom site provisioning process. For example, as part of your custom site provisioning process, you might want to display site usage policy information to the user when a new site is created. 
    
- Automatically load filtered content in your Web Parts for your users. For example, your script file can display local news information read from an external system.
    
- Allow users to add additional functionality to their site by using Web Parts from the **Web Part Gallery**.

## Before you begin

To get started, download the [Core.AppScriptPart ](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.AppScriptPart) sample add-in from the [Office365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Using the Core.AppScriptPart add-in

When you run the code sample and choose **Run Scenario**:

1. Choose **Back to Site**.
    
2. Choose **PAGE** > **Edit** > **INSERT** > **Web Part**.
    
3. In **Categories**, choose **Add-in Script Part**, and then choose **User profile information**.
    
4. Choose **Add**.
    
5. In the drop-down in the upper-right corner of the **User profile information** Web Part, choose **Edit Web Part**.
    
6. Choose **EDIT SNIPPET**.
    
7. Review the **&lt;SCRIPT&gt;** element.
    
    Notice that the  **src** attribute links to a JavaScript file on the remote web. The **&lt;SCRIPT&gt;** element is set by the **Content** property in the Core.AppScriptPartWeb\userprofileinformation.webpart, as shown in the following example. The JavaScript file linked to by the **src** attribute is Core.AppScriptPartWeb\Scripts\userprofileinformation.js. Userprofileinformation.js reads the current user's profile information from the user profile service, and then displays this information in the Web Part.
    
     **Note:** The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

  ```XML
  <property name="Content" type="string">&amp;lt;script type="text/javascript" src="https://localhost:44361/scripts/userprofileinformation.js"&amp;gt;&amp;lt;/script&amp;gt;
&amp;lt;div id="UserProfileAboutMe"&amp;gt;&amp;lt;div&amp;gt;
  </property>
  ```

8. Choose **Cancel**.
    
9. Choose **Save**.

**Note:** If your user profile image does not display, open your OneDrive for Business site, and then return to the host web.

In Core.AppScriptPartWeb\Pages\Default.aspx, **Run Scenario** runs **btnScenario_Click**, which does the following:

1. Gets a reference to the **Web Part Gallery** folder.
    
2. Uses [FileCreationInformation](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.filecreationinformation.aspx) to create the userprofileinformation.webpart file to upload from the provider-hosted add-in to the **Web Part Gallery**. The **folder.Files.Add** method adds the file to the **Web Part Gallery**.
    
3. Retrieves all list items in the **Web Part Gallery**, and then searches for userprofileinformation.webpart.
    
4. When userprofileinformation.webpart is found, assigns the Web Part to a custom group named **Add-in Script Part**.

```C#
protected void btnScenario_Click(object sender, EventArgs e)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                var folder = clientContext.Web.Lists.GetByTitle("Web Part Gallery").RootFolder;
                clientContext.Load(folder);
                clientContext.ExecuteQuery();

                // Upload the "userprofileinformation.webpart" file.
                using (var stream = System.IO.File.OpenRead(
                                Server.MapPath("~/userprofileinformation.webpart")))
                {
                    FileCreationInformation fileInfo = new FileCreationInformation();
                    fileInfo.ContentStream = stream;
                    fileInfo.Overwrite = true;
                    fileInfo.Url = "userprofileinformation.webpart";
                    File file = folder.Files.Add(fileInfo);
                    clientContext.ExecuteQuery();
                }

                // Update the group that the Web Part belongs to. Start by getting all list items in the Web Part Gallery, and then find the Web Part that was just uploaded.
                var list = clientContext.Web.Lists.GetByTitle("Web Part Gallery");
                CamlQuery camlQuery = CamlQuery.CreateAllItemsQuery(100);
                Microsoft.SharePoint.Client.ListItemCollection items = list.GetItems(camlQuery);
                clientContext.Load(items);
                clientContext.ExecuteQuery();
                foreach (var item in items)
                {
                    // Create new group.
                    if (item["FileLeafRef"].ToString().ToLowerInvariant() == "userprofileinformation.webpart")
                    {
                        item["Group"] = "add-in Script Part";
                        item.Update();
                        clientContext.ExecuteQuery();
                    }
                }

                lblStatus.Text = string.Format("add-in script part has been added to Web Part Gallery. You can find 'User Profile Information' script part under 'App Script Part' group in the <a href='{0}'>host web</a>.", spContext.SPHostUrl.ToString());
            }
        }
```

## Additional resources
<a name="bk_addresources"> </a>

- [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
- [Customize your SharePoint site UI by using JavaScript](Customize-your-SharePoint-site-UI-by-using-JavaScript.md)
