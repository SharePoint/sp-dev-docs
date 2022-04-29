---
title: Complete basic operations using SharePoint client library code
description: Write code to perform basic operations with the SharePoint .NET Framework client object model (CSOM).
ms.date: 9/1/2021
ms.service: sharepoint
ms.localizationpriority: high
---

# Complete basic operations using SharePoint client library code

You can use the SharePoint client object model (CSOM) to retrieve, update, and manage data in SharePoint. SharePoint makes the CSOM available in several forms:

- .NET Framework redistributable assemblies
- JavaScript library (JSOM)
- REST/OData endpoints
- Windows Phone assemblies (*deprecated*)
- Silverlight redistributable assemblies (*deprecated*)

For more information about the sets of APIs available on the SharePoint platform, see [Choose the right API set in SharePoint](../general-development/choose-the-right-api-set-in-sharepoint.md).

This article shows how to perform basic operations by using the .NET Framework object model, which is available as a redistributable package on at [NuGet gallery](https://www.nuget.org/packages/Microsoft.SharePointOnline.CSOM/).

For information about how to use the other client APIs, see:

- [Complete basic operations using JavaScript library code in SharePoint](complete-basic-operations-using-javascript-library-code-in-sharepoint.md)
- [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md)
- [Build Windows Phone apps that access SharePoint](../general-development/build-windows-phone-apps-that-access-sharepoint.md)
- [Using the Silverlight Object Model](/previous-versions/office/developer/sharepoint-2010/ee538971(v=office.14))

## Basic operations with the SharePoint .NET client object model

The following sections describe tasks that you can complete programmatically, and they include C# code examples that demonstrate CSOM operations.

When you create an **Add-in for SharePoint** project in Visual Studio 2012, references to the .NET Framework assemblies, **Microsoft.SharePoint.Client.Runtime.dll**, and **Microsoft.SharePoint.Client.dll**, are automatically added to the project. For other kinds of projects, such as .NET Framework applications or console applications, you should add these references. The files are located on any SharePoint server at **%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\ISAPI**.

All of these examples assume that the code is in a code-behind file for a Microsoft ASP.NET webpage. The following `using` statement must be added to the code file.

```csharp
using Microsoft.SharePoint.Client;
```

Except where specified otherwise, you can assume that each of these examples is in a parameterless method that is defined in the page's class. Also, `label1`, `label2`, and so on, are the names of [Label](/dotnet/api/system.web.ui.webcontrols.label) objects on the page.

> [!NOTE]
> When you are making a provider-hosted SharePoint Add-in with an ASP.NET web application, and you add a reference to an assembly to the web application project in Visual Studio, set the **Copy Local** property of the assembly to **True**, unless you know that the assembly is already installed on the web server, or you can ensure that its installed before you deploy your add-in.
>
> The .NET Framework is installed on Microsoft Azure Web Roles and Azure websites. But the SharePoint client assemblies and the various Microsoft managed code extensions and foundations aren't installed. Office Developer Tools for Visual Studio 2012 automatically adds references to some assemblies commonly used in SharePoint Add-ins and sets the **Copy Local** property.

## SharePoint website tasks

These examples show how to use the .NET Framework CSOM to complete website-related tasks.

### Retrieve the properties of a website

Retrieve the title of a SharePoint website.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// The SharePoint web at the URL.
Web web = context.Web;

// We want to retrieve the web's properties.
context.Load(web);

// Execute the query to the server.
context.ExecuteQuery();

// Now, the web's properties are available and we could display
// web properties, such as title.
label1.Text = web.Title;
```

### Retrieve only selected properties of a website

Sometimes, the client is interested only in a few properties of an object. The SharePoint .NET Framework CSOM doesn't require you to get all properties from the object on a server—you can use anonymous methods, which can be lambda expressions, to specifically request property names. The client library queries only for those properties on the server, and the server sends only those properties to the client. This technique reduces unnecessary data transfer between the client and the server. its also useful when the user doesn't have permission to one or more of the other, unused properties on an object.

You need to add a `using` statement for [System.Linq](/dotnet/api/system.linq).

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// The SharePoint web at the URL.
Web web = context.Web;

// We want to retrieve the web's title and description.
context.Load(web, w => w.Title, w => w.Description);

// Execute the query to server.
context.ExecuteQuery();

// Now, only the web's title and description are available. If you
// try to print out other properties, the code will throw
// an exception because other properties aren't available.
label1.Text = web.Title;
label1.Text = web. Description;
```

> [!NOTE]
> If you try to access other properties, the code throws an exception because other properties aren't available.

### Write to website's properties

This example shows how to write to the website's properties.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// The SharePoint web at the URL.
Web web = context.Web;

web.Title = "New Title";
web.Description = "New Description";

// Note that the web.Update() doesn't trigger a request to the server.
// Requests are only sent to the server from the client library when
// the ExecuteQuery() method is called.
web.Update();

// Execute the query to server.
context.ExecuteQuery();
```

### Create a new SharePoint website

This example shows how to create a new SharePoint site as a subsite of the current website. Use the `WebCreationInformation` class to create a new website. You also need to add `using` statements for [System.Collections.Generic](/dotnet/api/system.collections.generic) and [System.Text](/dotnet/api/system.text).

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

WebCreationInformation creation = new WebCreationInformation();
creation.Url = "web1";
creation.Title = "Hello web1";
Web newWeb = context.Web.Webs.Add(creation);

// Retrieve the new web information.
context.Load(newWeb, w => w.Title);
context.ExecuteQuery();

label1.Text = newWeb.Title;
```

## SharePoint list tasks

These examples show how to use the .NET Framework CSOM to complete list-related tasks.

### Retrieve all SharePoint lists in a website

This example retrieves all SharePoint lists in a SharePoint website. To compile this code, you need to add a `using` statement for [System.Linq](/dotnet/api/system.linq).

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// The SharePoint web at the URL.
Web web = context.Web;

// Retrieve all lists from the server.
// For each list, retrieve Title and Id.
context.Load(web.Lists,
             lists => lists.Include(list => list.Title,
                                    list => list.Id));

// Execute query.
context.ExecuteQuery();

// Enumerate the web.Lists.
foreach (List list in web.Lists)
{
  label1.Text = label1.Text + ", " + list.Title;
}
```

> [!NOTE]
> Alternatively, you can use the `LoadQuery` method to store the return value in another collection, rather than use the `web.Lists` property. You will also need to add `using` statements for [System.Collections.Generic](/dotnet/api/system.collections.generic) and [System.Linq](/dotnet/api/system.linq). Also, add an alias to the using statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// The SharePoint web at the URL.
Web web = context.Web;

// Retrieve all lists from the server, and put the return value in another
// collection instead of the web.Lists.
IEnumerable<SP.List> result = context.LoadQuery(
  web.Lists.Include( 
      // For each list, retrieve Title and Id.
      list => list.Title,
      list => list.Id
  )
);

// Execute query.
context.ExecuteQuery();

// Enumerate the result.
foreach (List list in result)
{
  label1.Text = label1.Text + ", " + list.Title;
}
```

### Create and update a SharePoint list

This example creates a SharePoint list and updates it by using the `ListCreationInformation` class.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// The SharePoint web at the URL.
Web web = context.Web;

ListCreationInformation creationInfo = new ListCreationInformation();
creationInfo.Title = "My List";
creationInfo.TemplateType = (int)ListTemplateType.Announcements;
List list = web.Lists.Add(creationInfo);
list.Description = "New Description";

list.Update();
context.ExecuteQuery();
```

### Delete a SharePoint list

This example deletes a SharePoint list.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// The SharePoint web at the URL.
Web web = context.Web;

List list = web.Lists.GetByTitle("My List");
list.DeleteObject();

context.ExecuteQuery();
```

### Add a field to a SharePoint list

This example adds a field to a SharePoint list. Add an alias to the using statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

> [!NOTE]
> The example uses `context.CastTo` to do a cast. Before executing the query, the client library doesn't know the real type of the returned object "field", and `SharePoint.Field` is the only possible type. If you know the real type, you can use the `ClientContext.CastTo<RealType>` method to cast the object.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

SP.List list = context.Web.Lists.GetByTitle("Announcements");

SP.Field field = list.Fields.AddFieldAsXml("<Field DisplayName='MyField2' Type='Number' />",
                                           true,
                                           AddFieldOptions.DefaultValue);
SP.FieldNumber fldNumber = context.CastTo<FieldNumber>(field);
fldNumber.MaximumValue = 100;
fldNumber.MinimumValue = 35;
fldNumber.Update();

context.ExecuteQuery();
```

## SharePoint list item tasks

These examples demonstrate how to use the .NET Framework CSOM to complete tasks that are related to list items.

### Retrieve items from a SharePoint list

This example retrieves the items in a SharePoint list. You also need to add a `using` statement for `Microsoft.SharePoint.Client.QueryExpression`.

> [!NOTE]
> You can use the `FolderServerRelativeUrl` property to further restrict the items that are returned to those in a specified folder.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// Assume the web has a list named "Announcements".
List announcementsList = context.Web.Lists.GetByTitle("Announcements");

// This creates a CamlQuery that has a RowLimit of 100, and also specifies Scope="RecursiveAll"
// so that it grabs all list items, regardless of the folder they are in.
CamlQuery query = CamlQuery.CreateAllItemsQuery(100);
ListItemCollection items = announcementsList.GetItems(query);

// Retrieve all items in the ListItemCollection from List.GetItems(Query).
context.Load(items);
context.ExecuteQuery();
foreach (ListItem listItem in items)
{
  // We have all the list item data. For example, Title.
  label1.Text = label1.Text + ", " + listItem["Title"];
}
```

### Create a new list item

This example creates a new SharePoint list item by using the `ListItemCreationInformation` class.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// Assume that the web has a list named "Announcements".
List announcementsList = context.Web.Lists.GetByTitle("Announcements");

// We are just creating a regular list item, so we don't need to
// set any properties. If we wanted to create a new folder, for
// example, we would have to set properties such as
// UnderlyingObjectType to FileSystemObjectType.Folder.
ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
ListItem newItem = announcementsList.AddItem(itemCreateInfo);
newItem["Title"] = "My New Item!";
newItem["Body"] = "Hello World!";
newItem.Update();

context.ExecuteQuery();
```

### Update a list item

This example updates a SharePoint list item.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// Assume that the web has a list named "Announcements".
List announcementsList = context.Web.Lists.GetByTitle("Announcements");

// Assume there is a list item with ID=1.
ListItem listItem = announcementsList.GetItemById(1);

// Write a new value to the Body field of the Announcement item.
listItem["Body"] = "This is my new value!!";
listItem.Update();

context.ExecuteQuery();
```

### Delete a list item

This example deletes a SharePoint list item.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// Assume that the web has a list named "Announcements".
List announcementsList = context.Web.Lists.GetByTitle("Announcements");

// Assume that there is a list item with ID=2.
ListItem listItem = announcementsList.GetItemById(2);
listItem.DeleteObject();

context.ExecuteQuery(); }
```

## SharePoint field tasks

These examples show how to use the SharePoint .NET Framework CSOM to complete field-related tasks.

### Retrieve all of the fields in a list

This example retrieves all of the fields in a SharePoint list. You also need to add an alias to the `using` statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously; for example, `using SP = Microsoft.SharePoint.Client;`.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

SP.List list = context.Web.Lists.GetByTitle("Shared Documents");
context.Load(list.Fields);

// We must call ExecuteQuery before enumerate list.Fields.
context.ExecuteQuery();

foreach (SP.Field field in list.Fields)
{
  label1.Text = label1.Text + ", " + field.InternalName;
}
```

### Retrieve a specific field from the list

If you want to retrieve information about a specific field, use the `Fields.GetByInternalNameOrTitle` method. The return type of this method is `Field`. Before the query is executed, the client doesn't know the type of object, and C# syntax isn't available for casting it to the derived type. Therefore, use the `ClientContext.CastTo` method to cast it, which instructs the client library to recreate an object. You also need to add a `using` statement for [System.Collections.Generic](/dotnet/api/system.collections.generic). You also need to add an alias to the `using` statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

> [!NOTE]
> The `GetByInternalNameOrTitle` method used in this example is a remote method. It doesn't use the data from the client collection even if the client collection is already populated.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

SP.List list = context.Web.Lists.GetByTitle("Shared Documents");
SP.Field field = list.Fields.GetByInternalNameOrTitle("Title");
FieldText textField = context.CastTo<FieldText>(field);
context.Load(textField);
context.ExecuteQuery();

// Now, we can access the specific text field properties.
label1.Text = textField.MaxLength;
```

## SharePoint user tasks

You can use the SharePoint .NET Framework CSOM to manage SharePoint users, groups, and user security.

### Add a user to a SharePoint group

This example adds a user and some user information to a SharePoint group named Members.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

GroupCollection siteGroups = context.Web.SiteGroups;

// Assume that there is a "Members" group, and the ID=5.
Group membersGroup = siteGroups.GetById(5);

// Let's set up the new user info.
UserCreationInformation userCreationInfo = new UserCreationInformation();
userCreationInfo.Email = "user@domain.com";
userCreationInfo.LoginName = "domain\\user";
userCreationInfo.Title = "Mr User";

// Let's add the user to the group.
User newUser = membersGroup.Users.Add(userCreationInfo);

context.ExecuteQuery();
```

### Retrieve all users in a SharePoint group

This example retrieves information about all users from a SharePoint group named Members.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

GroupCollection siteGroups = context.Web.SiteGroups;

// Assume that there is a "Members" group, and the ID=5.
Group membersGroup = siteGroups.GetById(5);
context.Load(membersGroup.Users);
context.ExecuteQuery();

foreach (User member in membersGroup.Users)
{
  // We have all the user info. For example, Title.
  label1.Text = label1.Text + ", " + member.Title;
}
```

### Create a role

This example creates a role that has create and manage alerts permissions.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

BasePermissions perm = new BasePermissions();
perm.Set(PermissionKind.CreateAlerts);
perm.Set(PermissionKind.ManageAlerts);

RoleDefinitionCreationInformation creationInfo = new RoleDefinitionCreationInformation();
creationInfo.BasePermissions = perm;
creationInfo.Description = "A role with create and manage alerts permission";
creationInfo.Name = "Alert Manager Role";
creationInfo.Order = 0;
RoleDefinition rd = context.Web.RoleDefinitions.Add(creationInfo);

context.ExecuteQuery();
```

### Add a user to a role

This example adds a user to a role.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

// Assume that we have a SiteUser with Login user.
Principal user = context.Web.SiteUsers.GetByLoginName(@"domain\user");

// Assume that we have a RoleDefinition named "Read".
RoleDefinition readDef = context.Web.RoleDefinitions.GetByName("Read");
RoleDefinitionBindingCollection roleDefCollection = new RoleDefinitionBindingCollection(context);
roleDefCollection.Add(readDef);
RoleAssignment newRoleAssignment = context.Web.RoleAssignments.Add(user, roleDefCollection);

context.ExecuteQuery();
```

## Rules and best practices for using the SharePoint .NET client object model

These examples illustrate some important best practices and requirements you should conform to when using the SharePoint .NET Framework CSOM.

### Call ClientContext.ExecuteQuery before accessing any value properties

The SharePoint .NET Framework CSOM requires that you use a SQL-like programming pattern: declare what you want and execute the query before you access the data. For example, the following code, which attempts to display the SharePoint website's title, throws an exception.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

Web web = context.Web;
label1.Text = web.Title;
```

This code fails because SharePoint .NET Framework CSOM code must:

- build either an ad hoc SQL query or a stored procedure
- execute the SQL query
- read results from SQL

In SharePoint .NET Framework CSOM, when you call a method, you build a query. Queries accumulate and aren't sent to the server until  `ExecuteQuery` is called.

The following example shows the code that is required to display the website's title. You also need to add a `using` statement for [System.Linq](/dotnet/api/system.linq). Also, add an alias to the `using` statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

Web web = context.Web;

context.Load(web, w => w.Title);

context.ExecuteQuery();

label1.Text = web.Title;
```

The differences are the addition of these lines; the first line creates a query for the web's `Title` property. The second line executes the query.

```csharp
context.Load(web, w => w.Title);
context.ExecuteQuery();
```

### Don't use value objects returned from methods or properties in the same query

When a value object is returned from a method or property, you can't use that object until after you've executed the query. For example, the following code tries to create a SharePoint list that has the same title as the parent website, but it throws an exception.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

Web web = context.Web;
ListCreationInformation creationInfo = new ListCreationInformation();
creationInfo.TemplateType = (int)ListTemplateType.Announcements;
creationInfo.Description = web.Title;
creationInfo.Title = web.Title;
List newList = web.Lists.Add(creationInfo);
```

An exception is thrown because the property isn't available before you execute the query. In SQL, you would declare a local variable to hold the value for `web.Title` and use the local variable for web creation. In the client library, you can't create a local variable. you've to split functionality into two separate queries as is shown in the following example. You also need to add a `using` statement for [System.Linq](/dotnet/api/system.linq). Also, add an alias to the using statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

Web web = context.Web;

context.Load(web, w => w.Title, w => w.Description);

context.ExecuteQuery();

ListCreationInformation creationInfo = new ListCreationInformation();
creationInfo.TemplateType = (int)ListTemplateType.Announcements;
creationInfo.Description = web.Description;
creationInfo.Title = web.Title;
SP.List newList = web.Lists.Add(creationInfo);

context.ExecuteQuery();
```

The difference is the following three lines:

```csharp
context.Load(web, w => w.Title, w => w.Description);
context.ExecuteQuery();
// ...
context.ExecuteQuery();
```

### Using methods or properties that return client objects in another method call in the same query

Unlike a value object, a client object can be used in another method call in the same query.

In .NET remoting, the value object is a class or struct that is marshaled by value, while the client object is a class or struct that is marshaled by reference. For example, the `ListItem` is a client object, while the `UrlFieldValue` and other field values are value objects.

In the client library, the corresponding server object has the `[ClientCallable(ValueObject = true)]` attribute. Those values could have only properties and no methods. Primitive types, such as strings and ints, are treated as value objects. All the values are marshaled between the client and the server. The default value of the `ValueObject` is `false`.

The counterpart to the value object is the client object. If the corresponding server object has the `[ClientCallable(ValueObject = false)]` attribute, the object is a client object. For client objects, we keep track of how the object is created; this is called **ObjectPath** in the client library implementation. For example, if we have code like the following:

```csharp
ClientContext context = new ClientContext("https://{site_url}");
Web web = context.Web;
SP.List list = web.Lists.GetByTitle("Announcements");
```

We know that the list is created by:

- getting the `Web` property from the context
- getting the `Lists` property from the above result
- invoking the `GetByTitle` method with the _Announcements_ parameter from the above result

When the SharePoint .NET Framework CSOM passes this information to the server, you can recreate the object on the server. In the client library, you can keep track of the `ObjectPath` that the client object created. Because you know how the object is created, you could use the object as a parameter to invoke other methods within the same query.

### Group data retrieval on the same object together to improve performance

When reading multiple pieces of data from the same object, you should try to get all of it in a single query; that is, a single call to the  `Load<T>(T, [])` method. The following code shows two ways to retrieve a website's title and description and the **Announcements** list's description. To compile this code, you need to add a `using` statement for [System.Linq](/dotnet/api/system.linq). Also, add an alias to the `using` statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

```csharp
static void Method1()
{
  ClientContext context = new ClientContext("https://{site_url}");
  Web web = context.Web;
  SP.List list = web.Lists.GetByTitle("Announcements");
  context.Load(web, w => w.Title, w => w.Description);
  context.Load(list, l => l.Description);
  context.ExecuteQuery();
}

static void Method2()
{
  ClientContext context = new ClientContext("https://{site_url}");
  Web web = context.Web;
  SP.List list = web.Lists.GetByTitle("Announcements");
  context.Load(web, w => w.Title);
  context.Load(list, l => l.Description);
  context.Load(web, w => w.Description);
  context.ExecuteQuery();
}
```

These aren't equally efficient. In `Method1`, the code to retrieve the web's title and description is grouped together. In `Method2`, the code to retrieve the web's title and description is separated by other actions. This means that `Method2` triggers two separated queries on the same web object, and there are two result sets for the same web. Because the client library tries to return consistent data, the second result set includes both the title and description. You could think of the previous code as the following.

```sql
// Method1:
SELECT Title, Description FROM Webs WHERE ...
SELECT Description FROM Lists WHERE …

// Method2:
SELECT Title FROM Webs WHERE …
SELECT Description FROM Lists WHERE …
SELECT Title, Description FROM Webs WHERE …
```

### Specify which properties of objects you want to return

In the SharePoint server object model, if you get an `SPWeb` object, you can inspect all of its properties. In SQL, to get all of the columns of a table you can run:

```sql
SELECT * FROM Webs
```

In the client library, neither `Load<T>` nor any other method returns all properties, so you've to explicitly specify what you want. For example, the following code retrieves the website object without specifying which properties to return. It then tries to read two properties and one of them isn't among the properties that are automatically returned by `Load`. This code throws an exception.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

Web web = context.Web;
context.Load(web);
context.ExecuteQuery();

Console.WriteLine(web.Title);
Console.WriteLine(web.HasUniqueRoleAssignments);
```

To get the code to compile successfully, update it to the following. To compile this code, you need to add a `using` statement for [System.Linq](/dotnet/api/system.linq). Also, add an alias to the `using` statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

Web web = context.Web;
context.Load(web);
context.Load(web, web => web.HasUniqueRoleAssignments);
context.ExecuteQuery();

Console.WriteLine(web.Title);
Console.WriteLine(web.HasUniqueRoleAssignments);
```

### Use conditional scope to test for preconditions before loading data

To conditionally execute code, set a conditional scope by using a `ConditionalScope` object. For example, retrieve the list property when the list isn't null. You also need to add `using` statements for [System.Collections.Generic](/dotnet/api/system.collections.generic) and [System.Linq](/dotnet/api/system.linq). Also, add an alias to the `using` statement for the `Microsoft.SharePoint.Client` namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.

> [!NOTE]
> Calling method and setting properties within a conditional scope aren't permitted, because the client library doesn't track the side effects of method calls and property settings. You should use only `Load` inside the conditional scope.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

SP.List list = context.Web.GetCatalog(ListTemplateType.WebPartCatalog);
BasePermissions perm = new BasePermissions();
perm.Set(PermissionKind.ManageLists);

ConditionalScope scope =
    new ConditionalScope(context,
                         () => list.ServerObjectIsNull &amp;&amp; context.Web.DoesUserHavePermissions(perm).Value);
using (scope.StartScope())
{
  context.Load(list, l => l.Title);
}
context.ExecuteQuery();

label1.Text = scope.TestResult.Value;

if (scope.TestResult.Value)
{
  label1.Text = list.Title;
}
```

### Use an exception handling scope to catch exceptions

This example shows how to create and use an exception handling scope with an `ExceptionHandlingScope` object. The scenario is to update the description of a list and also enable folder creation. There's a possibility that the list might not exist.

```csharp
// Starting with ClientContext, the constructor requires a URL to the
// server running SharePoint.
ClientContext context = new ClientContext("https://{site_url}");

ExceptionHandlingScope scope = new ExceptionHandlingScope(context);

using (scope.StartScope())
{
  using (scope.StartTry())
  {
    List fooList = context.Web.Lists.GetByTitle("Sample");
    fooList.Description = "In Try Block";
    fooList.Update();
  }
  using (scope.StartCatch())
  {
    // Assume that if there's an exception,
    // it can be only because there was no "Sample" list.
    ListCreationInformation listCreateInfo = new ListCreationInformation();
    listCreateInfo.Title = "Sample";
    listCreateInfo.Description = "In Catch Block";
    listCreateInfo.TemplateType = (int)ListTemplateType.Announcements;
    List fooList = context.Web.Lists.Add(listCreateInfo);
  }
  using (scope.StartFinally())
  {
    List fooList = context.Web.Lists.GetByTitle("Sample");
    fooList.EnableFolderCreation = true;
    fooList.Update();
  }
}

context.ExecuteQuery();
```

## See also

- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
- [Build sites for SharePoint](../general-development/build-sites-for-sharepoint.md)
