---
title: Replace SharePoint lists created from list definitions in farm solutions
description: Use CSOM to find lists and libraries that were created by using list definitions, create and configure new lists, add and remove views from lists, and migrate content from the original list to the new list.
ms.date: 5/4/2018
---

# Replace SharePoint lists created from list definitions in farm solutions

If you used list definitions to create lists in your farm solution, learn how to transform them into new solutions that provide similar functionality by using the client object model (CSOM). 

> [!IMPORTANT] 
> Farm solutions cannot be migrated to SharePoint Online. By applying the techniques and code described in this article, you can build a new solution with similar functionality that your farm solutions provide, which can then be deployed to SharePoint Online. If you are using an in-place transformation approach, you may need to deploy the new solution to SharePoint Online. If you are using the Swing or content migration approach, the third-party tools may create the lists for you. For more information, see [Transformation approaches to deploy your new SharePoint Add-in](transform-farm-solutions-to-the-sharepoint-app-model.md#transformation-approaches-to-deploy-your-new-sharepoint-add-in). 
> 
> The code in this article requires additional code to provide a fully working solution. For example, this article does not discuss how to authenticate to Office 365, how to implement required exception handling, and so on. For additional code samples, see the [Office 365 Developer Patterns and Practices project](https://github.com/SharePoint/PnP).

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

> [!TIP] 
> Use the techniques described in this article to update a only few lists at a time. Also, when finding lists to update, you should not filter the lists by list type.

To replace lists created from list definitions by using CSOM:

1. Find lists that were created using a specific base template.
    
2. Create the new list using the out-of-the-box list definition. 
    
3. Configure list settings.
    
4. Set content types on the new list based on the content types that were set on the original list.
    
5. Add or remove views (optional). 
    
6. Migrate content from the original list to the new list.

## Before you begin

Ideally, you should review your existing farm solutions, learn about the techniques described in this article, and then plan how to apply these techniques to your existing farm solutions. If you are unfamiliar with farm solutions or do not have an existing farm solution to work with, it might be helpful for you to:

1. Review [Replacing Lists Created from Custom Templates](https://github.com/OfficeDev/TrainingContent/tree/master/SharePoint/AddIns/14%20Transformation%20guidance%20from%20farm%20solutions%20to%20add-in%20model/02%20Replacing%20Lists%20Created%20from%20Custom%20Templates) to get a quick understanding of how lists were created declaratively by using list definitions.
    
    > [!NOTE] 
    > In Contoso.Intranet, in the elements.xml file for SP\ListTemplate\LTContosoLibrary, the ID for the custom list template is 10003. You will use this to identify the template that was used to create the list. Also review the configuration settings and views that are defined on your list.

2. Learn about farm solutions. For more information, see [Build farm solutions in SharePoint](../general-development/build-farm-solutions-in-sharepoint.md).


## Find lists that were created using a specific base template
    
In the following code, the method shows how to find lists that were created by using a specific base template. This method:

1. Uses the [ClientContext](https://msdn.microsoft.com/library/microsoft.sharepoint.client.clientcontext.aspx) to get all lists in the current web by using [Web.Lists](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.web.lists.aspx). The Include statement is used in the lambda expression to return a collection of lists. The returned lists must all have property values specified for [BaseTemplate](https://msdn.microsoft.com/library/microsoft.sharepoint.client.list.basetemplate.aspx), [BaseType](https://msdn.microsoft.com/library/microsoft.sharepoint.client.list.basetype.aspx), and [Title](https://msdn.microsoft.com/library/microsoft.sharepoint.client.list.title.aspx).
    
2. For each list in the collection of returned lists, if the **List.BaseTemplate** is equal to 10003, adds the list to a collection of lists to be replaced, called **listsToReplace**. Remember that 10003 was the custom list template's identifier we reviewed in the Contoso.Intranet sample.

   ```csharp
    static void Main(string[] args)
    {
        using (var clientContext = new ClientContext("http://w15-sp/sites/ftclab"))
        {
            Web web = clientContext.Web;
            ListCollection listCollection = web.Lists;
            clientContext.Load(listCollection,
                                l => l.Include(list => list.BaseTemplate,
                                                list => list.BaseType,
                                                list => list.Title));
            clientContext.ExecuteQuery();
            var listsToReplace = new List<List>();
            foreach (List list in listCollection)
            {
                // 10003 is the custom list template ID of the list template you're replacing.
                if (list.BaseTemplate == 10003)
                {
                    listsToReplace.Add(list);
                }
            }
            foreach (List list in listsToReplace)
            {
                ReplaceList(clientContext, listCollection, list);
            }
        }
    }
   ```

   > [!IMPORTANT] 
   > In the previous code, you first iterate over the ListCollection to select which lists need to be modified, and then call ReplaceList, which starts modifying the lists. This pattern is required because modifying the content of a collection while iterating over the collection throws an exception.

3. After identifying a list that should be replaced, **ReplaceList** shows the order of operations to perform to replace the list.

   ```csharp
    private static void ReplaceList(ClientContext clientContext, ListCollection listCollection, List listToBeReplaced)
    {
        var newList = CreateReplacementList(clientContext, listCollection, listToBeReplaced);

        SetListSettings(clientContext, listToBeReplaced, newList);

        SetContentTypes(clientContext, listToBeReplaced, newList);

        AddViews(clientContext, listToBeReplaced, newList);

        RemoveViews(clientContext, listToBeReplaced, newList);

        MigrateContent(clientContext, listToBeReplaced, newList);
    }
   ```

## Create a new list 
 
To create a new list, **CreateReplacementList** uses [ListCreationInformation](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.listcreationinformation.aspx). 

The title of the new list is set to the title of the existing list, with Add-in appended to it. The [ListTemplateType](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.listtemplatetype.aspx) enumeration is used to set the list's template type to a document library. If you are creating a list based on a different template type, make sure to use the correct template type. For example, if you are creating a calendar list, use **ListTemplateType.Events** instead of **ListTemplateType.DocumentLibrary**.

```csharp
private static List CreateReplacementList(ClientContext clientContext, ListCollection lists,List listToBeReplaced)
{
    var creationInformation = new ListCreationInformation
    {
        Title = listToBeReplaced.Title + "add-in",
        TemplateType = (int) ListTemplateType.DocumentLibrary,
    };
    List newList = lists.Add(creationInformation);
    clientContext.ExecuteQuery();
    return newList;
}
```

## Configure list settings

**SetListSettings** applies the original list settings to the new list by:

1. Getting various list settings from the original list.
    
2. Applying the list setting from the original list to the new list.

```csharp
private static void SetListSettings(ClientContext clientContext, List listToBeReplaced, List newList)
{
    clientContext.Load(listToBeReplaced, 
                        l => l.EnableVersioning, 
                        l => l.EnableModeration, 
                        l => l.EnableMinorVersions,
                        l => l.DraftVersionVisibility );
    clientContext.ExecuteQuery();
    newList.EnableVersioning = listToBeReplaced.EnableVersioning;
    newList.EnableModeration = listToBeReplaced.EnableModeration;
    newList.EnableMinorVersions= listToBeReplaced.EnableMinorVersions;
    newList.DraftVersionVisibility = listToBeReplaced.DraftVersionVisibility;
    newList.Update();
    clientContext.ExecuteQuery();
}
```

> [!NOTE] 
> Based on your requirements, the list settings of your original lists might be different. Review your list settings and change **SetListSettings** to ensure that your original list settings are applied to your new lists.

## Set content types on the new list

**SetContentTypes** sets the content types on the new list by:

1. Getting content type information from the original list.
    
2. Getting content type information from the new list.
    
3. Determining whether the original list enables content types. If the original list does not enable content types, **SetContentTypes** exits. If the original list enabled content types, **SetContentTypes** enables content types on the new list by using **newList.ContentTypesEnabled = true**.
    
4. For each content type in the original list, searching the content types on the new list to find a matching content type based on the name of the content type by using **newList.ContentTypes.Any(ct => ct.Name == contentType.Name)**. If the content type is not in the new list, it is added to the list.
    
5. Loading **newList** a second time because [AddExistingContentType](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttypecollection.addexistingcontenttype.aspx) might have changed the content types.
    
6. For each content type in **newList**, determining whether the content type matches a content type in the original list based on [ContentType.Name](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttype.name.aspx) by using **listToBeReplaced.ContentTypes.Any(ct => ct.Name == contentType.Name)**. If a match is not found, the content type is added to **contentTypesToDelete** to be deleted from the new list.
    
7. Deleting the content type by calling [ContentType.DeleteObject](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttype.deleteobject.aspx).

> [!NOTE] 
> If you are using an in-place transformation approach, and your content types were deployed declaratively by using the Feature Framework, you need to: 
> 1. Create new content types.
> 2. Set the content type on the list items when migrating the content from the original list to the new list in MigrateContent.

```csharp
private static void SetContentTypes(ClientContext clientContext, List listToBeReplaced, List newList)
{
    clientContext.Load(listToBeReplaced,
                        l => l.ContentTypesEnabled,
                        l => l.ContentTypes);
    clientContext.Load(newList,
                        l => l.ContentTypesEnabled,
                        l => l.ContentTypes);
    clientContext.ExecuteQuery();

    // If the original list doesn't use content types, do not proceed any further.
    if (!listToBeReplaced.ContentTypesEnabled) return;

    newList.ContentTypesEnabled = true;
    newList.Update();
    clientContext.ExecuteQuery();
    foreach (var contentType in listToBeReplaced.ContentTypes)
    {
        if (!newList.ContentTypes.Any(ct => ct.Name == contentType.Name))
        {
            // Current content type needs to be added to the new list. Note that the content type is added to the list, not the site.           
            newList.ContentTypes.AddExistingContentType(contentType.Parent);
            newList.Update();
            clientContext.ExecuteQuery();
        }
    }
    // Reload the content types on newList because they might have changed when AddExistingContentType was called. 
    clientContext.Load(newList, l => l.ContentTypes);
    clientContext.ExecuteQuery();
    // Remove any content types that are not needed.
    var contentTypesToDelete = new List<ContentType>();
    foreach (var contentType in newList.ContentTypes)
    {
        if (!listToBeReplaced.ContentTypes.Any(ct => ct.Name == contentType.Name))
        {
            // Current content type needs to be removed from new list.
            contentTypesToDelete.Add(contentType);
        }
    }
    foreach (var contentType in contentTypesToDelete)
    {
        contentType.DeleteObject();
    }
    newList.Update();
    clientContext.ExecuteQuery();
}
```

> [!NOTE] 
> At this point, the new list can accept content from the original list. You can also optionally add and remove views. 

## Add or remove views (optional)

Users can add or remove views defined on a list to meet business needs. For this reason, you might need to add or remove views on the new list.  

### Add views to the new list

**AddViews** adds views from the original list to the new list by:

1. Using [List.Views](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.list.views.aspx) to get all views on the original list.
    
2. Using the lambda expression to load various view properties on the **views** collection.
    
3. For each view in the original list, creating a view by using [ViewCreationInformation](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.viewcreationinformation.aspx). 

    Various properties are set on the new view based on view properties from the original view. The **GetViewType** helper method is called to determine the [ViewType](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.viewtype.aspx) of the view. The new view is then added to the list of views called **viewsToCreate**.
    
4. Adding the views to the **List.Views** collection by using the **Add** method on the list's Views collection.

   ```csharp
    private static void AddViews(ClientContext clientContext, List listToBeReplaced, List newList)
    {
        ViewCollection views = listToBeReplaced.Views;
        clientContext.Load(views,
                            v => v.Include(view => view.Paged,
                                view => view.PersonalView,
                                view => view.ViewQuery,
                                view => view.Title,
                                view => view.RowLimit,
                                view => view.DefaultView,
                                view => view.ViewFields,
                                view => view.ViewType));
        clientContext.ExecuteQuery();

        // Build a list of views which exist on the original list only.
        var viewsToCreate = new List<ViewCreationInformation>();
        foreach (View view in listToBeReplaced.Views)
        {
        var createInfo = new ViewCreationInformation
        {
            Paged = view.Paged,
            PersonalView = view.PersonalView,
            Query = view.ViewQuery,
            Title = view.Title,
            RowLimit = view.RowLimit,
            SetAsDefaultView = view.DefaultView,
            ViewFields = view.ViewFields.ToArray(),
            ViewTypeKind = GetViewType(view.ViewType),
        };
        viewsToCreate.Add(createInfo);
        }
        
        foreach (ViewCreationInformation newView in viewsToCreate)
        {
            newList.Views.Add(newView);
        }
        newList.Update();
    }

    private static ViewType GetViewType(string viewType)
    {
        switch (viewType)
        {
            case "HTML":
                return ViewType.Html;
            case "GRID":
                return ViewType.Grid;
            case "CALENDAR":
                return ViewType.Calendar;
            case "RECURRENCE":
                return ViewType.Recurrence;
            case "CHART":
                return ViewType.Chart;
            case "GANTT":
                return ViewType.Gantt;
            default:
                return ViewType.None;
        }
    }
   ```

### Remove views from the new list

In the following code, **RemoveViews** removes views from the new list by:

1. Getting the list views on the new list by using the **List.Views** property.
    
2. For each view on the new list, determining whether that view does not exist in the original list by matching on the view's title by using **!listToBeReplaced.Views.Any(v => v.Title == view.Title**. If a view in the new list does not have a matching view in the original list, adding the view to **viewsToRemove**.
    
3. Deleting all views in **viewsToRemove** by using [View.DeleteObject](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.view.deleteobject.aspx).
    
   ```csharp
    private static void RemoveViews(ClientContext clientContext, List listToBeReplaced, List newList)
    {
        // Get the list of views on the new list.
        clientContext.Load(newList, l => l.Views);
        clientContext.ExecuteQuery();

        var viewsToRemove = new List<View>();
        foreach (View view in newList.Views)
        {
            if (!listToBeReplaced.Views.Any(v => v.Title == view.Title))
            {
                // If there is no matching view in the source list, add the view to the list of views to be deleted.
                viewsToRemove.Add(view);
            }
        }
        foreach (View view in viewsToRemove)
        {
            view.DeleteObject();
        }
        newList.Update();
        clientContext.ExecuteQuery();
    }
   ```

## Migrate content from the original list to the new list

**MigrateContent** migrates the content from the original list to the new list by:

1. Retrieving the destination to copy the files to, or the root folder of the new list, by using [List.RootFolder](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.list.rootfolder.aspx). The server-relative URL of the destination list folder is retrieved by using [Folder.ServerRelativeUrl](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.folder.serverrelativeurl.aspx).
    
2. Retrieving the source of the files, or the root folder of the original list, by using **List.RootFolder**. The server-relative URL of the list folder and all the files in the source's root folder are loaded by using the **clientContext** object.
    
3. For each file in the source, creating **newUrl**, which stores the new URL of the file. **newUrl** is created by replacing the source root folder with the destination's root folder.
    
4. Using [File.CopyTo](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.file.copyto.aspx) to copy the file to the URL of the destination root folder. Alternatively, you might choose to use the [File.MoveTo](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.file.moveto.aspx) method to move the file to the destination URL.
    
> [!NOTE] 
> The following code returns all list items. In your production environment, consider optimizing the following code by implementing a loop, and using multiple iterations to migrate small amounts of list items.

```csharp
private static void MigrateContent(ClientContext clientContext, List listToBeReplaced, List newList)
{
    ListItemCollection items = listToBeReplaced.GetItems(CamlQuery.CreateAllItemsQuery());
    Folder destination = newList.RootFolder;
    Folder source = listToBeReplaced.RootFolder;
    clientContext.Load(destination,
                        d => d.ServerRelativeUrl);
    clientContext.Load(source,
                        s => s.Files,
                        s => s.ServerRelativeUrl);
    clientContext.Load(items,
                        i => i.IncludeWithDefaultProperties(item => item.File));
    clientContext.ExecuteQuery();


    foreach (File file in source.Files)
    {
        string newUrl = file.ServerRelativeUrl.Replace(source.ServerRelativeUrl, destination.ServerRelativeUrl);
          file.CopyTo(newUrl, true);
          //file.MoveTo(newUrl, MoveOperations.Overwrite);
    }
    clientContext.ExecuteQuery();
}
```

> [!NOTE] 
> The previous code shows how to migrate files stored in the root folder of a list. If your list has subfolders, you must add additional code to migrate the subfolders and their contents. If your list uses workflows, additional code is required to associate the workflow to the new list.

## See also

- [Transform farm solutions to the SharePoint Add-in model](transform-farm-solutions-to-the-sharepoint-app-model.md)
