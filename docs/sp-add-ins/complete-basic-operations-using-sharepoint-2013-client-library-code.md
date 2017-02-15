---
title: Complete basic operations using SharePoint 2013 client library code
ms.prod: SHAREPOINT
ms.assetid: 5a69c9e3-73bf-4ed5-bc19-182056bdb394
---


# Complete basic operations using SharePoint 2013 client library code
Learn how to write code to perform basic operations with the SharePoint 2013 .NET Framework client object model (CSOM).
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## SharePoint client APIs
<a name="ClientAPIs"> </a>

You can use the SharePoint client object model (CSOM) to retrieve, update, and manage data in SharePoint 2013. SharePoint 2013 makes the CSOM available in several forms. 
 

 

- .NET Framework redistributable assemblies
    
 
- JavaScript library
    
 
- REST/OData endpoints
    
 
- Windows Phone assemblies
    
 
- Silverlight redistributable assemblies
    
 
For more details about the sets of APIs available on the SharePoint 2013 platform, see  [Choose the right API set in SharePoint 2013](http://msdn.microsoft.com/library/f36645da-77c5-47f1-a2ca-13d4b62b320d%28Office.15%29.aspx). 
 

 
This article is shows how to perform basic operations using the .NET Framework object model, which is available as a redistributable package on the Microsoft Download Center. Search for "SharePoint Server 2013 Client Components SDK" or "SharePoint Online Client Components SDK". For information about how to use the other client APIs see,  [Complete basic operations using JavaScript library code in SharePoint 2013](complete-basic-operations-using-javascript-library-code-in-sharepoint-2013.md),  [Complete basic operations using SharePoint 2013 REST endpoints](complete-basic-operations-using-sharepoint-2013-rest-endpoints.md),  [Build Windows Phone apps that access SharePoint 2013](http://msdn.microsoft.com/library/36681335-f772-4499-8445-f94481bc18e7%28Office.15%29.aspx), and  [Using the Silverlight Object Model](http://msdn.microsoft.com/library/cea7829d-f360-4052-8b76-91d90bcefd2a%28Office.15%29.aspx) in the SharePoint 2010 SDK.
 

 

## Basic operations with the SharePoint .NET client object model
<a name="BasicOps_SPCSOMOps"> </a>

The following sections describe tasks that you can complete programmatically, and they include C# code examples that demonstrate CSOM operations.
 

 
When you create an  **Add-in for SharePoint 2013** project in Visual Studio 2012, references to the .NET Framework assemblies, **Microsoft.SharePoint.Client.Runtime.dll** and **Microsoft.SharePoint.Client.dll**, are automatically added to the project. For other kinds of projects, such as .NET Framework applications or console applications, you should add these references. The files are located on any SharePoint 2013 server at %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\ISAPI.
 

 
All of these examples assume that the code is in a code-behind file for an Microsoft ASP.NET webpage. You must add the following  **using** statement to the code file.
 

 



```
using Microsoft.SharePoint.Client;
```

Except where specified otherwise, you can assume that each of these examples is in a parameterless method that is defined in the page's class. Also,  `label1`,  `label2`, and so on, are the names of  [Label](http://msdn2.microsoft.com/EN-US/library/620f4ses) objects on the page.
 

 

 **Note**  When you are making a provider-hosted SharePoint Add-in with an ASP.NET web application and you add a reference to an assembly to the web application project in Visual Studio, set the  **Copy Local** property of the assembly to **True**, unless you know that the assembly is already installed on the web server, or you can ensure that it is installed before you deploy your add-in. The .NET Framework is installed on Microsoft Azure Web Roles and Azure Web Sites. But the SharePoint 2013 client assemblies and the various Microsoft managed code extensions and foundations are not installed. Office Developer Tools for Visual Studio 2012 automatically adds references to some assemblies commonly used in SharePoint Add-ins and sets the  **Copy Local** property.
 


## SharePoint website tasks
<a name="BasicOps_SPWebTasks"> </a>

These examples show how to use the .NET Framework CSOM to complete website-related tasks.
 

 

### Retrieve the properties of a website

Retrieve the title of a SharePoint website.
 

 

```C#

// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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

Sometimes, the client is interested only in a few properties of an object. The SharePoint .NET Framework CSOM does not require you to get all properties from the object on a server—you can use anonymous methods, which can be lambda expressions, to specifically request property names. The client library will query only for those properties on the server, and the server will send only those properties to the client. This technique reduces unnecessary data transfer between the client and the server. It is also useful when the user does not have permission to one or more of the other, unused properties on an object. Note that you will need to add a  **using** statement for [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768).
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

// The SharePoint web at the URL.
Web web = context.Web; 

// We want to retrieve the web's title and description. 
context.Load(web, w => w.Title, w => w.Description); 

// Execute the query to server.
context.ExecuteQuery(); 

// Now, only the web's title and description are available. If you 
// try to print out other properties, the code will throw 
// an exception because other properties are not available. 
label1.Text = web.Title;
label1.Text = web. Description;

```


 **Note**  If you try to access other properties, the code throws an exception because other properties are not available.
 


### Write to website's properties

This example shows how to write to the website's properties.
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

// The SharePoint web at the URL.
Web web = context.Web; 

web.Title = "New Title"; 
web.Description = "New Description"; 

// Note that the web.Update() does not trigger a request to the server
// because the client library until ExecuteQuery() is called. 
web.Update(); 

// Execute the query to server.
context.ExecuteQuery(); 

```


### Create a new SharePoint website

This example shows how to create a new SharePoint site as a subsite of the current website. Use the  **WebCreationInformation** class to create a new website. You will also need to add **using** statements for [System.Collections.Generic](http://msdn2.microsoft.com/EN-US/library/0sbxh9x2) and [System.Text](http://msdn2.microsoft.com/EN-US/library/x76y3wky).
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
<a name="BasicOps_SPListTasks"> </a>

These examples show how to use the .NET Framework CSOM to complete list-related tasks.
 

 

### Retrieve all SharePoint lists in a web

This example retrieves all SharePoint lists in a SharePoint website. To compile this code you will need to add a  **using** statement for [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768).
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

// The SharePoint web at the URL.
Web web = context.Web; 

// Retrieve all lists from the server. 
context.Load(web.Lists, 
             lists => lists.Include(list => list.Title, // For each list, retrieve Title and Id. 
                                    list => list.Id)); 

// Execute query. 
context.ExecuteQuery(); 

// Enumerate the web.Lists. 
foreach (List list in web.Lists) 
{ 
    label1.Text = label1.Text + ", " + list.Title; 
} 

```


 **Note**  Alternatively, you can use the  **LoadQuery** method to store the return value in another collection, rather than use the **web.Lists** property. You will also need to add **using** statements for [System.Collections.Generic](http://msdn2.microsoft.com/EN-US/library/0sbxh9x2) and [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768). Also, add an alias to the using statement for  **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.
 


```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

// The SharePoint web at the URL.
Web web = context.Web; 

// Retrieve all lists from the server, and put the return value in another 
// collection instead of the web.Lists. 
IEnumerable<SP.List> result = context.LoadQuery(web.Lists.Include( // For each list, retrieve Title and Id.
                                                                   list => list.Title, 
                                                                   list => list.Id)); 

// Execute query. 
context.ExecuteQuery(); 

// Enumerate the result. 
foreach (List list in web.Lists) 
{ 
    label1.Text = label1.Text + ", " + list.Title; 
} 

```


### Create and update a SharePoint list

This example creates a SharePoint list and updates it using the  **ListCreationInformation** class.
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

// The SharePoint web at the URL.
Web web = context.Web; 

List list = web.Lists.GetByTitle("My List"); 
list.DeleteObject(); 

context.ExecuteQuery();  

```


### Add a field to a SharePoint list

This example adds a field to a SharePoint list. add an alias to the using statement for  **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.
 

 

 **Note**  The example uses  **context.CastTo** to do a cast. Before executing the query, the client library does not know the real type of the returned object "field" and **SharePoint.Field** is the only possible type. If you know the real type, you can use the **ClientContext.CastTo<RealType>** method to cast the object.
 


```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
<a name="BasicOps_SPListItemTasks"> </a>

These examples demonstrate how to use the .NET Framework CSOM to complete tasks that are related to list items.
 

 

### Retrieve items from a SharePoint list

This example retrieves the items in a SharePoint list. You will also need to add a  **using** statement for **Microsoft.SharePoint.Client.QueryExpression**.
 

 

 **Note**  You can use the  **FolderServerRelativeUrl** property to further restrict the items that are returned to those in a specified folder.
 


```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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

This example creates a new SharePoint list item using the  **ListItemCreationInformation** class.
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

// Assume that the web has a list named "Announcements". 
List announcementsList = context.Web.Lists.GetByTitle("Announcements"); 

// Assume that there is a list item with ID=2. 
ListItem listItem = announcementsList.GetItemById(2); 
listItem.DeleteObject(); 

context.ExecuteQuery(); } 

```


## SharePoint field tasks
<a name="BasicOps_SPFieldTasks"> </a>

These examples show how to use the SharePoint .NET Framework CSOM to complete field-related tasks. 
 

 

### Retrieve all of the fields in a list

This example retrieves all of the fields in a SharePoint list. You will also need to add an alias to the  **using** statement for the **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously; for example, `using SP = Microsoft.SharePoint.Client;`.
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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

If you want to retrieve information about a specific field, use the  **Fields.GetByInternalNameOrTitle** method. The return type of this method is **Field**. Before the query is executed, the client does not know the type of object, and C# syntax is not available for casting it to the derived type. Therefore, use the  **ClientContext.CastTo** method to cast it, which instructs the client library to recreate an object. You will also need to add a **using** statement for [System.Collections.Generic](http://msdn2.microsoft.com/EN-US/library/0sbxh9x2). You will also need to add an alias to the  **using** statement for the **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.
 

 

 **Note**  The  **GetByInternalNameOrTitle** method used in this example is a remote method. It does not use the data from the client collection even if the client collection is already populated.
 


```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

SP.List list = context.Web.Lists.GetByTitle("Shared Documents"); 
SP.Field field = list.Fields.GetByInternalNameOrTitle("Title"); 
FieldText textField = context.CastTo<FieldText>(field); 
context.Load(textField); 
context.ExecuteQuery(); 

// Now, we can access the specific text field properties. 
label1.Text = textField.MaxLength; 

```


## SharePoint user tasks
<a name="BasicOps_SPSecurityTasks"> </a>

You can use the SharePoint .NET Framework CSOM to manage SharePoint users, groups, and user security. 
 

 

### Add a user to a SharePoint group

This example adds a user and some user information to a SharePoint group named Members.
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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
<a name="Best"> </a>

These examples illustrate some important best practices and requirements you should conform to when using the SharePoint .NET Framework CSOM.
 

 

### Call ClientContext.ExecuteQuery before accessing any value properties

The SharePoint .NET Framework CSOM requires that you use a SQL-like programming pattern: declare what you want and execute the query before you access the data. For example, the following code, attempts to display the SharePoint website's title, will throw an exception.
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

Web web = context.Web; 
label1.Text = web.Title;  

```

This code fails because SharePoint .NET Framework CSOM code must:
 

 

1. Build either an ad hoc SQL query or a stored procedure.
    
 
2. Execute the SQL query.
    
 
3. Read results from SQL.
    
 
In SharePoint .NET Framework CSOM , when you call a method you build a query. Queries accumulate and are not sent to the server until  **ExecuteQuery** is called. The following example shows the code that is required to display the website's title. You will also need to add a **using** statement for [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768). Also, add an alias to the  **using** statement for the **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.
 

 



```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

Web web = context.Web; 

context.Load(web, w => w.Title); 

context.ExecuteQuery(); 

label1.Text = web.Title;   

```

The differences are the addition of these lines:
 

 



```
context.Load(web, w => w.Title); 
context.ExecuteQuery(); 

```

The first line creates a query for the web's  **Title** property. The second line executes the query.
 

 

### Do not use value objects returned from methods or properties in the same query

When a value object is returned from a method or property, you cannot use that object until after you have executed the query. For example, the following code tries to create a SharePoint list that has the same title as the parent website, but it will throw an exception. 
 

 

```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

Web web = context.Web; 
ListCreationInformation creationInfo = new ListCreationInformation(); 
creationInfo.Description = web.Title; 
creationInfo.Title = web.Title; 
List newList = web.Lists.Add(creationInfo);  

```

An exception is thrown because the property is not available before you execute the query. In SQL, you would declare a local variable to hold the value for  `web.Title` and use the local variable for web creation. In the client library, you can't create a local variable. You have to split functionality into two separate queries as is shown in the following example. You will also need to add a **using** statement for [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768). Also, add an alias to the using statement for  **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.
 

 



```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

Web web = context.Web; 

context.Load(web, w => w.Title); 

context.ExecuteQuery(); 

ListCreationInformation creationInfo = new ListCreationInformation(); 
creationInfo.Description = web.Description; 
creationInfo.Title = web.Title; 
SP.List newList = web.Lists.Add(creationInfo); 

context.ExecuteQuery();  

```

The difference is the following three lines:
 

 



```C#
context.Load(web, w => w.Title); 
context.ExecuteQuery(); 
...
context.ExecuteQuery(); 

```


### Using methods or properties that return client objects in another method call in the same query

Unlike a value object, a client object can be used in another method call in the same query. 
 

 
In .NET remoting, the value object is a class or struct that is marshaled by value, while the client object is a class or struct that is marshaled by reference. For example, the  **ListItem** is a client object, while the **UrlFieldValue** and other field values are value objects.
 

 
In the client library, the corresponding server object has the  `[ClientCallable(ValueObject = true)]` attribute. Those values could have only properties and no methods. Primitive types, such as strings and ints, are treated as value objects. All the values are marshaled between the client and the server. The default value of the **ValueObject** is **false**. 
 

 
The counterpart to the value object is the client object. If the corresponding server object has the  **[ClientCallable(ValueObject = false)]** attribute, the object is a client object. For client objects, we keep track of how the object is created; this is called **ObjectPath** in the client library implementation. For example, if we have code like the following:
 

 



```C#
ClientContext context = new ClientContext("http://SiteUrl"); 
Web web = context.Web; 
SP.List list = web.Lists.GetByTitle("Announcements"); 

```

We know that the list is created by:
 

 

- Getting the  **Web** property from the context.
    
 
- Getting the  **Lists** property from the above result.
    
 
- Invoking the  **GetByTitle** method with the _Announcements_ parameter from the above result.
    
 
When the SharePoint .NET Framework CSOM passes this information to the server, you can recreate the object on the server. In the client library, you can keep track of the  **ObjectPath** that the client object is created. Because you know how the object is created, you could use the object as a parameter to invoke other methods within the same query.
 

 

### Group data retrieval on the same object together to improve performance

When reading multiple pieces of data from the same object, you should try to get all of it in a single query; that is, a single call to the  **Load<T>(T, [])** method. The following code shows two ways to retrieve a website's title and description and the **Announcements** list's description. To compile this code, you need to add a **using** statement for [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768). Also, add an alias to the using  **statement** for the **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`. 
 

 

```C#

static void Method1() 
{ 
    ClientContext context = new ClientContext("http://SiteUrl"); 
    Web web = context.Web; 
    SP.List list = web.Lists.GetByTitle("Announcements"); 
    context.Load(web, w => w.Title, w => w.Description); 
    context.Load(list, l => l.Description); 
    context.ExecuteQuery(); 
} 

static void Method2() 
{ 
    ClientContext context = new ClientContext("http://SiteUrl"); 
    Web web = context.Web; 
    SP.List list = web.Lists.GetByTitle("Announcements"); 
    context.Load(web, w => w.Title); 
    context.Load(list, l => l.Description); 
    context.Load(web, w => w.Description); 
    context.ExecuteQuery();  
} 

```

These are not equally efficient. In  **Method1**, the code to retrieve the web's title and description is grouped together. In  **Method2**, the code to retrieve the web's title and description is separated by other actions. This means that  **Method2** will trigger two separated queries on the same web object, and there will be two result sets for the same web. Because the client library tries to return consistent data, the second result set will include both the title and description. You could think of the previous code as the following.
 

 



```
Method1: 
SELECT Title, Description FROM Webs WHERE ... 
SELECT Description FROM Lists WHERE … 

Method2: 
SELECT Title FROM Webs WHERE … 
SELECT Description FROM Lists WHERE … 
SELECT Title, Description FROM Webs WHERE … 

```


### Specify which properties of objects you want to return

In the SharePoint server object model, if you get an  **SPWeb** object, you can inspect all of its properties. In SQL, to get all of the columns of a table you can run:
 

 

```
SELECT * FROM Webs 
```

In the client library, neither  **Load<T>** nor any other method returns all properties, so you have to explicitly specify what you want. For example, the following code retrieves the website object without specifying which properties to return. It then tries to read two properties and one of them is not among the properties that is automatically returned by **Load**. This code throws an exception. 
 

 



```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

Web web = context.Web; 
context.Load(web); 
context.ExecuteQuery(); 

Console.WriteLine(web.Title); 
Console.WriteLine(web.HasUniqueRoleAssignments);  

```

 To get the code to compile successfully, update it to the following. To compile this code, you need to add a **using** statement for [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768). Also, add an alias to the  **using** statement for the **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.
 

 



```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

Web web = context.Web; 
context.Load(web); 
context.Load(web, web => web.HasUniqueRoleAssignments); 
context.ExecuteQuery(); 

Console.WriteLine(web.Title); 
Console.WriteLine(web.HasUniqueRoleAssignments);  

```


### Use conditional scope to test for preconditions before loading data

To conditionally execute code, set a conditional scope by using a  **ConditionalScope** object. For example, retrieve the list property when the list is not null. You will also need to add **using** statements for [System.Collections.Generic](http://msdn2.microsoft.com/EN-US/library/0sbxh9x2) and [System.Linq](http://msdn2.microsoft.com/EN-US/library/bb336768). Also, add an alias to the  **using** statement for the **Microsoft.SharePoint.Client** namespace so you can refer to its classes unambiguously. For example, `using SP = Microsoft.SharePoint.Client;`.
 

 

 **Note**  Calling method and setting properties within a conditional scope are not permitted, because the client library does not track the side effects of method calls and property settings. You should use only  **Load** inside the conditional scope.
 


```C#
// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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

This example shows how to create and use an exception handling scope with an  **ExceptionHandlingScope** object. The scenario is to update the description of a list and also enable folder creation. There is a possibility that the list might not exist.
 

 

```C#


// Starting with ClientContext, the constructor requires a URL to the 
// server running SharePoint. 
ClientContext context = new ClientContext("http://SiteUrl"); 

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


## Additional resources
<a name="bk_addresources"> </a>


-  [Complete basic operations using JavaScript library code in SharePoint 2013](complete-basic-operations-using-javascript-library-code-in-sharepoint-2013.md)
    
 
-  [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
    
 
-  [Build sites for SharePoint](http://msdn.microsoft.com/library/3b372a63-7cdf-462a-abb4-750e611e967d%28Office.15%29.aspx)
    
 

