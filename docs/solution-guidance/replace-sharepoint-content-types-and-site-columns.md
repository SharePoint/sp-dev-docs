---
title: Replace SharePoint content types and site columns in farm solutions
description: Use CSOM to replace content types and site columns, add site columns to new content types, and replace the content types with new content types.
ms.date: 5/4/2018
---

# Replace SharePoint content types and site columns in farm solutions

This article describes the transformation process to use when replacing content types and site columns, adding site columns to new content types, and then replacing previous content types with new content types by using the SharePoint client-side object model (CSOM).

> [!IMPORTANT] 
> Farm solutions cannot be migrated to SharePoint Online. By applying the techniques and code described in this article, you can build a new solution that uses updated content types and site columns and provides similar functionality to your farm solutions or declarative sandbox solutions. The new solution can then be deployed to SharePoint Online. 
> 
> The code in this article requires additional code to provide a fully working solution. For example, this article does not discuss how to authenticate to Office 365, how to implement required exception handling, and so on. For additional code samples, see the [Office 365 Developer Patterns and Practices project](https://github.com/SharePoint/PnP).

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

To replace content types and site columns by using CSOM:

1. Create a new content type. 
    
2. Create a new site column (also referred to as a field).
    
3. Add the new site column to the new content type.
    
4. Replace old content type references with the new content type.
    
In the following code, **Main** shows the order of operations to perform to replace content types and site columns by using CSOM.

```csharp
static void Main(string[] args)
{
    using (var clientContext = new ClientContext("http://contoso.sharepoint.com"))
    {

        Web web = clientContext.Web;
        
        CreateContentType(clientContext, web);
        CreateSiteColumn(clientContext, web);
        AddSiteColumnToContentType(clientContext, web);

        // Replace the old content type with the new content type.
        ReplaceContentType(clientContext, web);
    }

}
```

<br/>

In the following code, **GetContentTypeByName** gets a content type from the current site by:

1. Using the [Web.ContentTypes](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.web.contenttypes.aspx) property to get a [ContentTypeCollection](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttypecollection.aspx), which is a collection of content types on the current site.
    
2. Finding and then returning a content type from the site, by matching the site content type name to the name of the existing content type, which is submitted by the **name** parameter.

```csharp
    private static ContentType GetContentTypeByName(ClientContext cc, Web web, string name)
    {
        ContentTypeCollection contentTypes = web.ContentTypes;
        cc.Load(contentTypes);
        cc.ExecuteQuery();
        return contentTypes.FirstOrDefault(o => o.Name == name);
    }
```

## Create a new content type

In the following code, **CreateContentType** creates a new content type by:

1. Creating a constant called **contentTypeName** to store the name of the content type. The name of the new content type is set to the name of the previous content type.
    
2. Calling **GetContentTypeByName** to find a matching content type on the site.
    
3. If the content type already exists, no further action is necessary and control passes back to **Main** when **return** is called. 

    If the content type does not exist, content type properties are set by using a [ContentTypeCreationInformation](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttypecreationinformation.aspx) object called **newCt**. 
    
    The new content type ID is assigned to **newCt.Id** by using the base document content type ID **0x0101**. For more information, see [Base Content Type Hierarchy](https://msdn.microsoft.com/library/office/ms452896%28v=office.14%29.aspx).
    
4. Adding the new content type by using [ContentTypeCollection.Add](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttypecollection.add.aspx).

```csharp
private static void CreateContentType(ClientContext cc, Web web)
{
    // The new content type will be created using this name.
    const string contentTypeName = "ContosoDocumentByCSOM";

    // Determine whether the content type already exists.
    var contentType = GetContentTypeByName(cc, web, contentTypeName);

    // The content type exists already. No further action required.
    if (contentType != null) return;

    // Create the content type using the ContentTypeInformation object.
    ContentTypeCreationInformation newCt = new ContentTypeCreationInformation();
    newCt.Name = "ContosoDocumentByCSOM";

    // Create the new content type based on the out-of-the-box document (0x0101) and assign the ID to the new content type.
    newCt.Id = "0x0101009189AB5D3D2647B580F011DA2F356FB2";

    // Assign the content type to a specific content type group.
    newCt.Group = "Contoso Content Types";

    ContentType myContentType = web.ContentTypes.Add(newCt);
    cc.ExecuteQuery();
}
```

## Create a new site column

In the following code, **CreateSiteColumn** creates a new site column by:

1. Creating a constant called **fieldName** to store the name of the field. The name of the new field is set to the name of the previous field.
    
2. Getting the site columns defined on the site by using the [Web.Fields](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.web.fields.aspx) property.
    
3. Finding a matching field on the site by matching the field names on the site to **fieldName**. If the field already exists, no further action is necessary and control passes back to **Main** when **return** is called. If the field does not exist, a CAML string specifying the field schema is assigned to **FieldAsXML**, and then the field is created using [FieldCollection.AddFieldAsXml](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.fieldcollection.addfieldasxml.aspx).

```csharp
private static void CreateSiteColumn(ClientContext cc, Web web)
{
    // The new field will be created using this name.
    const string fieldName = "ContosoStringCSOM";

    // Load the list of fields on the site.
    FieldCollection fields = web.Fields;
    cc.Load(fields);
    cc.ExecuteQuery();

    // Check fields on the site for a match.
    var fieldExists = fields.Any(f => f.InternalName == fieldName);

     // The field exists already. No further action required.    
    if (fieldExists) return;

    // Field does not exist, so create the new field.
    string FieldAsXML = @"<Field ID='{CB8E24F6-E1EE-4482-877B-19A51B4BE319}' 
                                Name='" + fieldName + @"' 
                                DisplayName='Contoso String by CSOM' 
                                Type='Text' 
                                Hidden='False' 
                                Group='Contoso Site Columns' 
                                Description='Contoso Text Field' />";
    Field fld = fields.AddFieldAsXml(FieldAsXML, true, AddFieldOptions.DefaultValue);
    cc.ExecuteQuery();
}
```

## Add the new site column to the new content type

In the following code, **AddSiteColumnToContentType** creates a connection between the content type and field by:

1. Loading the content type, and then the field references that content type by using the [ContentType.FieldLinks](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttype.fieldlinks.aspx) property.
    
2. Loading the field.
    
3. Determining whether the content type refers to the field by using **contentType.FieldLinks.Any(f => f.Name == fieldName)** to match on the field name.
    
4. If the content type refers to the field already, no further action is necessary and control passes back to **Main** when **return** is called. If the content type does not refer to the field, field reference properties are set on a [FieldLinkCreationInformation](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.fieldlinkcreationinformation.aspx) object.
    
5. Adding the **FieldLinkCreationInformation** object to the **ContentType.FieldLinks** property.

```csharp
private static void AddSiteColumnToContentType(ClientContext cc, Web web)
{
    // The name of the content type. 
    const string contentTypeName = "ContosoDocumentByCSOM";
    // The field name.
    const string fieldName = "ContosoStringCSOM";

    // Load the content type.
    var contentType = GetContentTypeByName(cc, web, contentTypeName);
    if (contentType == null) return; // content type was not found

    // Load field references in the content type.
    cc.Load(contentType.FieldLinks);
    cc.ExecuteQuery();

    // Load the new field.
    Field fld = web.Fields.GetByInternalNameOrTitle(fieldName);
    cc.Load(fld);
    cc.ExecuteQuery();

    // Determine whether the content type refers to the field.
    var hasFieldConnected = contentType.FieldLinks.Any(f => f.Name == fieldName);

    // A reference exists already, no further action is required.
    if (hasFieldConnected) return;

    // The reference does not exist, so we have to create the reference.
    FieldLinkCreationInformation link = new FieldLinkCreationInformation();
    link.Field = fld;
    contentType.FieldLinks.Add(link);
    contentType.Update(true);
    cc.ExecuteQuery();
}
```

## Replace old content type references with the new content type

In the following code, **ReplaceContentType** checks all items in all libraries for content that references the old content type, and then replaces those references with the new content type (**ContosoDocumentByCSOM**) by:

1. Assigning the old content type ID to a constant.
    
2. Getting the new content type by using **GetContentTypeByName**.
    
3. Getting all the lists on the site by using [Web.Lists](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.web.lists.aspx).
    
4. Loading all the lists on the site, and all content types on each list by using **cc.Load(lists, l => l.Include(list => list.ContentTypes)**.
    
5. For each returned list, searching the list's content types to match a content type with the old content type ID by using **list.ContentTypes.Any(c => c.StringId.StartsWith(oldContentTypeId))**. If a match is found, the list with the old content type is added to **listsWithContentType**.
    
6. For each list in **listsWithContentType**:
    
  1. Determining whether the new content type is attached to the list. If the new content type is not attached to the list, use [ContentTypeCollection.AddExistingContentType ](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttypecollection.addexistingcontenttype.aspx) to attach the new content type to the list.
    
  2. Getting all list items in the list.
    
  3. For each list item, getting the content type ID of the list item. Determine whether the content type ID of the list item is equal to the old content type ID. If the content type IDs are not equal, skip to the next list item. If the content type IDs are equal, use [ContentType.StringId](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.contenttype.stringid.aspx) to assign the new content type ID to the list item.
    

> [!NOTE] 
> The old content type is still in the list, but it is not used anymore. You can now delete the old content type from the lists, and then retract it. This article describes how to replace document content types only. If you are replacing content types on page layouts, ensure that you update the [AssociatedContentType](https://msdn.microsoft.com/library/office/microsoft.sharepoint.publishing.pagelayout.associatedcontenttype.aspx) property on each page layout in the site collection.

```csharp
private static void ReplaceContentType(ClientContext cc, Web web)
{
    // The old content type. 
    const string oldContentTypeId = "0x010100C32DDAB6381C44868DCD5ADC4A5307D6";
    // The new content type name.
    const string newContentTypeName = "ContosoDocumentByCSOM";

    // Get the new content type and lists on the site.
    ContentType newContentType = GetContentTypeByName(cc, web, newContentTypeName);
    ListCollection lists = web.Lists;
    
    // Load the new content type and the content types on all lists on the site. 
    cc.Load(newContentType);
    cc.Load(lists,
            l => l.Include(list => list.ContentTypes));
    cc.ExecuteQuery();
    var listsWithContentType = new List<List>();
    foreach (List list in lists)
    {
        bool hasOldContentType = list.ContentTypes.Any(c => c.StringId.StartsWith(oldContentTypeId));
        if (hasOldContentType)
        {
            listsWithContentType.Add(list);
        }
    }
    foreach (List list in listsWithContentType)
    {
        // Determine whether the new content type is already attached to the list.
        var listHasContentTypeAttached = list.ContentTypes.Any(c => c.Name == newContentTypeName);
        if (!listHasContentTypeAttached)
        {
            // Attach content type to list.
            list.ContentTypes.AddExistingContentType(newContentType);
            cc.ExecuteQuery();
        }
        // Get all list items.
        CamlQuery query = CamlQuery.CreateAllItemsQuery();
        ListItemCollection items = list.GetItems(query);
        cc.Load(items);
        cc.ExecuteQuery();

        // For each list item, determine whether the old content type is used, and then update to the new content type. 
        foreach (ListItem listItem in items)
        {
            // Get the current content type for this list item.
            var currentContentTypeId = listItem["ContentTypeId"] + "";
            var isOldContentTypeAssigned = currentContentTypeId.StartsWith(oldContentTypeId);

            // This item does not use the old content type - skip to next list item.
            if (!isOldContentTypeAssigned) continue;

            // Update the list item content type to the new content type.
            listItem["ContentTypeId"] = newContentType.StringId; // new content type Id;
            listItem.Update();
        }
        // Save all changes.
        cc.ExecuteQuery();
    }
}
```

## See also

- [Transform farm solutions to the SharePoint Add-in model](transform-farm-solutions-to-the-sharepoint-app-model.md)
