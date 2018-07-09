---
title: Complete basic operations using JavaScript library code in SharePoint
description: Write code to perform basic operations using the JavaScript client object model in SharePoint.
ms.date: 4/19/2018
ms.prod: sharepoint
---

# Complete basic operations using JavaScript library code in SharePoint

You can use the SharePoint client object model to retrieve, update, and manage data in SharePoint. SharePoint makes the object model available in several forms:

- .NET Framework redistributable assemblies
- JavaScript library
- REST/OData endpoints
- Windows Phone assemblies
- Silverlight redistributable assemblies
    
For more information about the sets of APIs that are available for SharePoint, see [Choose the right API set in SharePoint](../general-development/choose-the-right-api-set-in-sharepoint.md).  
 
> [!NOTE] 
> For a "Hello World" level sample SharePoint Add-in that uses the JavaScript library, see [Use the SharePoint JavaScript APIs to work with SharePoint data](use-the-sharepoint-javascript-apis-to-work-with-sharepoint-data.md).
 
This article shows how to perform basic operations using the JavaScript object model. You can add a reference to the object model by using HTML &lt;script&gt; tags. For information about how to use the other client APIs, see the following:

- [Complete basic operations using SharePoint client library code](complete-basic-operations-using-sharepoint-client-library-code.md)
- [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md)
- [Build Windows Phone apps that access SharePoint](../general-development/build-windows-phone-apps-that-access-sharepoint.md)
- [Using the Silverlight Object Model](http://msdn.microsoft.com/library/cea7829d-f360-4052-8b76-91d90bcefd2a%28Office.15%29.aspx) in the SharePoint 2010 SDK

<a name="BasicOps_SPJSOMOps"> </a>

## Perform basic tasks in SharePoint using the JavaScript client object model

The following sections describe tasks that you can complete programmatically, and they include JavaScript code examples that demonstrate the operations.

When you create a cloud-hosted add-in, you can add a reference to the object model by using HTML &lt;script&gt; tags. We recommend that you reference the host web because the add-in web may not exist in every scenario in cloud-hosted add-ins. You can retrieve the host web URL from the _SPHostUrl_ query string parameter if you are using the **{StandardTokens}** token. You can also use your custom defined query string parameter if you are using the **{HostUrl}** token. After you have the host web URL, you must use JavaScript code to dynamically create the reference to the object model.
 
The following code example performs these tasks to add a reference to the JavaScript object model:

- References the AJAX library from the Microsoft Content Delivery Network (CDN).
- References the jQuery library from the Microsoft CDN.
- Extracts the host web URL from the query string.
- Loads the SP.Runtime.js and SP.js files by using the **getScript** function in jQuery. After loading the files, your program has access to the JavaScript object model for SharePoint.
- Continues the flow in the **execOperation** function.


```js
<script 
    src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js" 
    type="text/javascript">
</script>
<script
    type="text/javascript"
    src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js">
</script>
<script type="text/javascript">
    var hostweburl;

    // Load the required SharePoint libraries.
    $(document).ready(function () {

        // Get the URI decoded URLs.
        hostweburl =
            decodeURIComponent(
                getQueryStringParameter("SPHostUrl")
        );

        // The js files are in a URL in the form:
        // web_url/_layouts/15/resource_file
        var scriptbase = hostweburl + "/_layouts/15/";

        // Load the js files and continue to
        // the execOperation function.
        $.getScript(scriptbase + "SP.Runtime.js",
            function () {
                $.getScript(scriptbase + "SP.js", execOperation);
            }
        );
    });

    // Function to execute basic operations.
    function execOperation() {

        // Continue your program flow here.

    }

    // Function to retrieve a query string value.
    // For production purposes you may want to use
    // a library to handle the query string.
    function getQueryStringParameter(paramToRetrieve) {
        var params =
            document.URL.split("?")[1].split("&amp;");
        var strParams = "";
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve)
                return singleParam[1];
        }
    }
</script>

```

<br/>

When you create a SharePoint-hosted add-in, you can add a reference to the object model by using HTML &lt;script&gt; tags. The add-in web in a SharePoint-hosted add-in allows you to use relative paths to reference the required files to use the JavaScript object model.

The following markup performs these tasks to add a reference to the JavaScript object model:

- References the AJAX library from the Microsoft CDN.
- References the SP.Runtime.js file by using a URL relative to the add-in web.
- References the SP.js file by using a URL relative to the add-in web.

```js
<script 
    src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js" 
    type="text/javascript">
</script>
<script 
    type="text/javascript" 
    src="/_layouts/15/sp.runtime.js">
</script>
<script 
    type="text/javascript" 
    src="/_layouts/15/sp.js">
</script>
<script type="text/javascript">

    // Continue your program flow here.

</script>
```

<br/>

<a name="BasicOps_SPWebTasks"> </a>

## SharePoint website tasks

To work with websites using JavaScript, start by using the **ClientContext(serverRelativeUrl)** constructor and pass a URL or URI to return a specific request context.

### Retrieve the properties of a website

Use the web property of the **ClientContext** class to specify the properties of the website object that is located at the specified context URL. After you load the website object through the **load(clientObject)** method and then call **executeQueryAsync(succeededCallback, failedCallback)**, you acquire access to all the properties of that website. 

The following example displays the title and description of the specified website, although all other properties that are returned by default become available after you load the website object and execute the query.

```js

function retrieveWebSite(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    this.oWebsite = clientContext.get_web();

    clientContext.load(this.oWebsite);

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded(sender, args) {
    alert('Title: ' + this.oWebsite.get_title() + 
        ' Description: ' + this.oWebsite.get_description());
}
    
function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

### Retrieve only selected properties of a website

To reduce unnecessary data transference between client and server, you might want to return only specified properties of the website object, not all of its properties. In this case, use LINQ query or lambda expression syntax with the **load(clientObject)** method to specify which properties to return from the server. In the following example, only the title and creation date of the website object become available after **executeQueryAsync(succeededCallback, failedCallback)** is called.

```js
function retrieveWebSiteProperties(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    this.oWebsite = clientContext.get_web();

    clientContext.load(this.oWebsite, 'Title', 'Created');

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded(sender, args) {
    alert('Title: ' + this.oWebsite.get_title() + 
        ' Created: ' + this.oWebsite.get_created());
}
    
function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

> [!NOTE] 
> If you try to access other properties, the code throws an exception because other properties are not available.
 
<br/>

### Write to a website's properties

To modify a website, you set its properties and call the **update()** method, similarly to how the server object model functions. However, in the client object model, you must call **executeQueryAsync(succeededCallback, failedCallback)** to request batch processing of all commands that you specify. The following example changes the title and description of a specified website.

```js
function updateWebSite(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    this.oWebsite = clientContext.get_web();

    this.oWebsite.set_title('Updated Web Site');
    this.oWebsite.set_description('This is an updated website.');
    this.oWebsite.update();

    clientContext.load(this.oWebsite, 'Title', 'Description');

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded(sender, args) {
    alert('Title: ' + this.oWebsite.get_title() + 
        ' Description: ' + this.oWebsite.get_description());
}
    
function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

<a name="BasicOps_SPListTasks"> </a>

## SharePoint list tasks

Working with list objects using JavaScript is similar to working with website objects. Start by using the **ClientContext(serverRelativeUrl)** constructor and passing a URL or URI to return a specific request context. You can then use the **lists** property of the **Web** class to get the collection of lists in the website.

### Retrieve all properties of all lists in a website

To return all the lists of a website, load the list collection through the **load(clientObject)** method, and then call **executeQueryAsync(succeededCallback, failedCallback)**. The following example displays the URL of the website and the date and time that the list was created.

```js
function retrieveAllListProperties(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oWebsite = clientContext.get_web();
    this.collList = oWebsite.get_lists();
    clientContext.load(collList);

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    var listInfo = '';
    var listEnumerator = collList.getEnumerator();

    while (listEnumerator.moveNext()) {
        var oList = listEnumerator.get_current();
        listInfo += 'Title: ' + oList.get_title() + ' Created: ' + 
            oList.get_created().toString() + '\n';
    }
    alert(listInfo);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

### Retrieve only specified properties of lists

The previous example returns all properties of the lists in a website. To reduce unnecessary data transference between client and server, you can use LINQ query expressions to specify which properties to return. In JavaScript, you specify **Include** as part of the query string that is passed to the **load(clientObject)** method to specify which properties to return. The following example uses this approach to return only the title and ID of each list in the collection.

```js
function retrieveSpecificListProperties(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oWebsite = clientContext.get_web();
    this.collList = oWebsite.get_lists();

    clientContext.load(collList, 'Include(Title, Id)');
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    var listInfo = '';
    var listEnumerator = collList.getEnumerator();

    while (listEnumerator.moveNext()) {
        var oList = listEnumerator.get_current();
        listInfo += 'Title: ' + oList.get_title() + 
            ' ID: ' + oList.get_id().toString() + '\n';
    }
    alert(listInfo);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}

```

<br/>

### Store retrieved lists in a collection

As the following example shows, you can use the **loadQuery(clientObjectCollection, exp)** method instead of the **load(clientObject)** method to store the return value in another collection instead of storing it in the lists property.

```js
function retrieveSpecificListPropertiesToCollection(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oWebsite = clientContext.get_web();
    var collList = oWebsite.get_lists();

    this.listInfoCollection = clientContext.loadQuery(collList, 'Include(Title, Id)');
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    var listInfo = '';

    for (var i = 0; i < this.listInfoCollection.length; i++) {
        var oList = this.listInfoCollection[i];
        listInfo += 'Title: ' + oList.get_title() + 
            ' ID: ' + oList.get_id().toString();
    }
    alert(listInfo.toString());
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

### Apply filters to list retrieval

As the following example shows, you can nest **Include** statements in a JavaScript query to return metadata for both a list and its fields. The example returns all fields from all lists within a website and displays the title and internal name of all fields whose internal name contains the string "name".

```js
function retrieveAllListsAllFields(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oWebsite = clientContext.get_web();
    var collList = oWebsite.get_lists();

    this.listInfoArray = clientContext.loadQuery(collList, 
        'Include(Title,Fields.Include(Title,InternalName))');

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this._onQueryFailed)
    );
}

function onQuerySucceeded() {
    var listInfo = '';

    for (var i = 0; i < this.listInfoArray.length; i++) {
        var oList = this.listInfoArray[i];
        var collField = oList.get_fields();
        var fieldEnumerator = collField.getEnumerator();
            
        while (fieldEnumerator.moveNext()) {
            var oField = fieldEnumerator.get_current();
            var regEx = new RegExp('name', 'ig');
            
            if (regEx.test(oField.get_internalName())) {
                listInfo += '\nList: ' + oList.get_title() + 
                    '\n\tField Title: ' + oField.get_title() + 
                    '\n\tField Name: ' + oField.get_internalName();
            }
        }
    }
    alert(listInfo);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}

```

<br/>

<a name="BasicOps_SPListCRUD"> </a>

## Create, update, and delete lists

Creating, updating, and deleting lists through the client object model works similarly to how you perform these tasks using the .NET client object model, although client operations do not complete until you call the **executeQueryAsync(succeededCallback, failedCallback)** function.

### Create and update a list

To create a list object using JavaScript, use the **ListCreationInformation** object to define its properties, and then pass this object to the **add(parameters)** function of the **ListCollection** object. The following example creates a new announcements list.

```js
function createList(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oWebsite = clientContext.get_web();
    
    var listCreationInfo = new SP.ListCreationInformation();
    listCreationInfo.set_title('My Announcements List');
    listCreationInfo.set_templateType(SP.ListTemplateType.announcements);

    this.oList = oWebsite.get_lists().add(listCreationInfo);

    clientContext.load(oList);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    var result = oList.get_title() + ' created.';
    alert(result);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

If you need to update the list after it has been created, you can set list properties and call the **update()** function before calling **executeQueryAsync(succeededCallback, failedCallback)**, as shown in the following modifications of the previous example.

```js
.
.
.
.
this.oList = oWebsite.get_lists().add(listCreationInfo);

oList.set_description('New Announcements List');
oList.update();

clientContext.load(oList);
clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded), 
    Function.createDelegate(this, this.onQueryFailed)
);
```

<br/>

### Add a field to a list

Use the **add(field)** or **addFieldAsXml(schemaXml, addToDefaultView, options)** function of the **FieldCollection** object to add a field to the field collection of a list. The following example creates a field and then updates it before calling **executeQueryAsync(succeededCallback, failedCallback)**.

```js
function addFieldToList(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);

    var oList = clientContext.get_web().get_lists().getByTitle('Announcements');
    this.oField = oList.get_fields().addFieldAsXml(
        '<Field DisplayName=\'MyField\' Type=\'Number\' />', 
        true, 
        SP.AddFieldOptions.defaultValue
    );

    var fieldNumber = clientContext.castTo(oField,SP.FieldNumber);
    fieldNumber.set_maximumValue(100);
    fieldNumber.set_minimumValue(35);
    fieldNumber.update();

    clientContext.load(oField);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    var result = oField.get_title() + ' added.';
    alert(result);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

### Delete a list

To delete a list, call the **deleteObject()** function of the list object, as shown in the following example.

```js
function deleteList(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oWebsite = clientContext.get_web();
    this.listTitle = 'My Announcements List';

    this.oList = oWebsite.get_lists().getByTitle(listTitle);
    oList.deleteObject();

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    var result = listTitle + ' deleted.';
    alert(result);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

<a name="BasicOps_FolderTasks"> </a>

## Create, update, and delete folders

You can manipulate folders to organize your content by using the JavaScript object model. The following sections show you how to perform basic operations on folders.

### Create a folder in a document library

To create a folder, you use a **ListItemCreationInformation** object, set the underlying object type to **SP.FileSystemObjectType.folder**, and pass it as a parameter to the **addItem(parameters)** function of the **List** object. Set properties on the list item object that this method returns, and then call the **update()** function, as shown in the following example.


```js
function createFolder(resultpanel) {
    var clientContext;
    var oWebsite;
    var oList;
    var itemCreateInfo;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();
    oList = oWebsite.get_lists().getByTitle("Shared Documents");

    itemCreateInfo = new SP.ListItemCreationInformation();
    itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
    itemCreateInfo.set_leafName("My new folder!");
    this.oListItem = oList.addItem(itemCreateInfo);
    this.oListItem.set_item("Title", "My new folder!");
    this.oListItem.update();

    clientContext.load(this.oListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, successHandler),
        Function.createDelegate(this, errorHandler)
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to see your new folder.";
    }

    function errorHandler() {
        resultpanel.innerHTML =
            "Request failed: " + arguments[1].get_message();
    }
}
```

<br/>

### Update a folder in a document library

To update the folder name, you can write to the **FileLeafRef** property and call the **update()** function so that changes take effect when you call the **executeQueryAsync** method.

```js
function updateFolder(resultpanel) {
    var clientContext;
    var oWebsite;
    var oList;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();
    oList = oWebsite.get_lists().getByTitle("Shared Documents");

    this.oListItem = oList.getItemById(1);
    this.oListItem.set_item("FileLeafRef", "My updated folder");
    this.oListItem.update();

    clientContext.load(this.oListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, successHandler),
        Function.createDelegate(this, errorHandler)
    );

    function successHandler() {
        resultpanel.innerHTML = "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to see your updated folder.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}
```

<br/>

### Delete a folder in a document library

To delete a folder, call the **deleteObject()** function on the object. The following example uses the **getFolderByServerRelativeUrl** method to retrieve the folder from the document library and then deletes the item.

```js
function deleteFolder(resultpanel) {
    var clientContext;
    var oWebsite;
    var folderUrl;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();

    clientContext.load(oWebsite);
    clientContext.executeQueryAsync(function () {
        folderUrl = oWebsite.get_serverRelativeUrl() + "/Lists/Shared Documents/Folder1";
        this.folderToDelete = oWebsite.getFolderByServerRelativeUrl(folderUrl);
        this.folderToDelete.deleteObject();

        clientContext.executeQueryAsync(
            Function.createDelegate(this, successHandler),
            Function.createDelegate(this, errorHandler)
        );
    }, errorHandler);

    function successHandler() {
        resultpanel.innerHTML = "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to make sure the folder is no longer there.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}
```

<br/>

<a name="BasicOps_FileTasks"> </a>

## Create, read, update, and delete files

You can manipulate files by using the JavaScript object model. The following sections show you how to perform basic operations on files.
 
> [!NOTE] 
> You can only work with files up to 1.5 MB by using the JavaScript object model. To upload larger files, use REST (Representational State Transfer). For more information, see  [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md).

### Create a file in a document library

To create files, you use a **FileCreationInformation** object, set the URL attribute, and append content as a base64 encoded array of bytes, as shown in this example.

```js
function createFile(resultpanel) {
    var clientContext;
    var oWebsite;
    var oList;
    var fileCreateInfo;
    var fileContent;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();
    oList = oWebsite.get_lists().getByTitle("Shared Documents");

    fileCreateInfo = new SP.FileCreationInformation();
    fileCreateInfo.set_url("my new file.txt");
    fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
    fileContent = "The content of my new file";

    for (var i = 0; i < fileContent.length; i++) {
        
        fileCreateInfo.get_content().append(fileContent.charCodeAt(i));
    }

    this.newFile = oList.get_rootFolder().get_files().add(fileCreateInfo);

    clientContext.load(this.newFile);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, successHandler),
        Function.createDelegate(this, errorHandler)
    );

    function successHandler() {
        resultpanel.innerHTML =
            "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to see your new file.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}
```

<br/>

### Read a file in a document library

To read a file's content, you perform a **GET** operation on the file's URL, as shown in the following example.
 
```js
function readFile(resultpanel) {
    var clientContext;
    var oWebsite;
    var fileUrl;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();

    clientContext.load(oWebsite);
    clientContext.executeQueryAsync(function () {
        fileUrl = oWebsite.get_serverRelativeUrl() +
            "/Lists/Shared Documents/TextFile1.txt";
        $.ajax({
            url: fileUrl,
            type: "GET"
        })
            .done(Function.createDelegate(this, successHandler))
            .error(Function.createDelegate(this, errorHandler));
    }, errorHandler);

    function successHandler(data) {
        resultpanel.innerHTML =
            "The content of file \"TextFile1.txt\": " + data
    }

    function errorHandler() {
        resultpanel.innerHTML =
            "Request failed: " + arguments[2];
    }
}
```

<br/>

### Update a file in a document library

To update the file's content, you can use a **FileCreationInformation** object, and set the overwrite attribute to true by using the **set_overwrite()** method, as shown in this example.
 
```js
function updateFile(resultpanel) {
    var clientContext;
    var oWebsite;
    var oList;
    var fileCreateInfo;
    var fileContent;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();
    oList = oWebsite.get_lists().getByTitle("Shared Documents");

    fileCreateInfo = new SP.FileCreationInformation();
    fileCreateInfo.set_url("TextFile1.txt");
    fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
    fileCreateInfo.set_overwrite(true);
    fileContent = "The updated content of my file";

    for (var i = 0; i < fileContent.length; i++) {

        fileCreateInfo.get_content().append(fileContent.charCodeAt(i));
    }

    this.existingFile = oList.get_rootFolder().get_files().add(fileCreateInfo);

    clientContext.load(this.existingFile);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, successHandler),
        Function.createDelegate(this, errorHandler)
    );

    function successHandler() {
        resultpanel.innerHTML =
            "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to see the updated \"TextFile1.txt\" file.";
    }

    function errorHandler() {
        resultpanel.innerHTML =
            "Request failed: " + arguments[1].get_message();
    }
}
```

<br/>

### Delete a file in a document library

To delete a file, call the **deleteObject()** function on the object. The following example uses the **getFileByServerRelativeUrl** method to retrieve the file from the document library, and then deletes the item.
 
```js
function deleteFile(resultpanel) {
    var clientContext;
    var oWebsite;
    var fileUrl;

    clientContext = new SP.ClientContext.get_current();
    oWebsite = clientContext.get_web();

    clientContext.load(oWebsite);
    clientContext.executeQueryAsync(function () {
        fileUrl = oWebsite.get_serverRelativeUrl() +
            "/Lists/Shared Documents/TextFile1.txt";
        this.fileToDelete = oWebsite.getFileByServerRelativeUrl(fileUrl);
        this.fileToDelete.deleteObject();

        clientContext.executeQueryAsync(
            Function.createDelegate(this, successHandler),
            Function.createDelegate(this, errorHandler)
        );
    }, errorHandler);

    function successHandler() {
        resultpanel.innerHTML =
            "Go to the " +
            "<a href='../Lists/Shared Documents'>document library</a> " +
            "to confirm that the \"TextFile1.txt\" file has been deleted.";
    }

    function errorHandler() {
        resultpanel.innerHTML = "Request failed: " + arguments[1].get_message();
    }
}
```

<br/>

<a name="BasicOps_SPListItemTasks"> </a>

## SharePoint list item tasks

To return items from a list by using JavaScript, use the **getItemById(id)** function to return a single item, or use the **getItems(query)** function to return multiple items. You then use the **load(clientObject)** function to attain list item objects that represent the items.

### Retrieve items from a list

The **getItems(query)** function enables you to define a Collaborative Application Markup Language (CAML) query that specifies which items to return. You can pass an undefined **CamlQuery** object to return all items from the list, or use the **set_viewXml** function to define a CAML query and return items that meet specific criteria. The following example displays the ID, in addition to the Title and Body column values, of the first 100 items in the Announcements list, starting with list items whose collection ID is greater than 10.
 
```js
function retrieveListItems(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Announcements');
        
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(
        '<View><Query><Where><Geq><FieldRef Name=\'ID\'/>' + 
        '<Value Type=\'Number\'>1</Value></Geq></Where></Query>' + 
        '<RowLimit>10</RowLimit></View>'
    );
    this.collListItem = oList.getItems(camlQuery);
        
    clientContext.load(collListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    ); 
}

function onQuerySucceeded(sender, args) {
    var listItemInfo = '';
    var listItemEnumerator = collListItem.getEnumerator();
        
    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        listItemInfo += '\nID: ' + oListItem.get_id() + 
            '\nTitle: ' + oListItem.get_item('Title') + 
            '\nBody: ' + oListItem.get_item('Body');
    }

    alert(listItemInfo.toString());
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

### Use the Include method to access properties of ListItem objects

Four properties of **ListItem** objects are not available by default when you return the list items **displayName**, **effectiveBasePermissions**, **hasUniqueRoleAssignments**, and **roleAssignments**. The previous example returns a **PropertyOrFieldNotInitializedException** if you try to access one of these properties. To access these properties, use the **Include** method as part of the query string, as shown in the following example.
 
> [!NOTE] 
> When you use LINQ to create queries against the client object model, you are using  [LINQ to Objects](http://msdn.microsoft.com/library/bb397919), not the [LINQ to SharePoint provider](http://msdn.microsoft.com/library/ee535491), which can only be used when you write code against the server object model.

```js
function retrieveListItemsInclude(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Announcements');

    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><RowLimit>100</RowLimit></View>');
    this.collListItem = oList.getItems(camlQuery);

    clientContext.load(
        collListItem, 
        'Include(Id, DisplayName, HasUniqueRoleAssignments)'
    );
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded(sender, args) {
    var listItemInfo = '';
    var listItemEnumerator = collListItem.getEnumerator();
        
    while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();
        listItemInfo += '\nID: ' + oListItem.get_id() + 
            '\nDisplay name: ' + oListItem.get_displayName() + 
            '\nUnique role assignments: ' + 
            oListItem.get_hasUniqueRoleAssignments();
    }

    alert(listItemInfo.toString());
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}

```

<br/>

Because this example uses an **Include**, only the specified properties are available after query execution. Therefore, you receive a **PropertyOrFieldNotInitializedException** if you try to access other properties beyond those that have been specified. In addition, you receive this error if you try to use functions such as **get\_contentType** or **get\_parentList** to access the properties of containing objects.

### Restrictions on retrieving items

The **loadQuery(clientObjectCollection, exp)** method of the JavaScript object model in SharePoint Foundation 2010 does not support LINQ methods and operators that are used by the managed object model.
 
<br/>

<a name="BasicOps_SPListItemCRUD"> </a> 

## Create, update, and delete list items

Creating, updating, or deleting list items through the client object model works similarly to performing these tasks through the server object model. You create a list item object, set its properties, and then update the object. To modify or delete a list item object, use the **getById(id)** function of the **ListItemCollection** object to return the object, and then either set properties and call update on the object that this method returns, or call the object's own method for deletion. Unlike the server object model, each of these operations in the client object model must conclude with a call **to executeQueryAsync(succeededCallback, failedCallback)** for changes to take effect on the server.

### Create a list item

To create list items, you create a **ListItemCreationInformation** object, set its properties, and pass it as a parameter to the **addItem(parameters)** function of the **List** object. Set properties on the list item object that this method returns, and then call the **update()** function, as shown in the following example.


```js
function createListItem(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Announcements');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
    oListItem.set_item('Title', 'My New Item!');
    oListItem.set_item('Body', 'Hello World!');
    oListItem.update();

    clientContext.load(oListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    alert('Item created: ' + oListItem.get_id());
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

### Update a list item

To set most list item properties, you can use a column indexer to make an assignment, and call the **update()** function so that changes take effect when you call **executeQueryAsync(succeededCallback, failedCallback)**. The following example sets the title of the third item in the Announcements list.

```js
function updateListItem(siteUrl) {
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Announcements');

    this.oListItem = oList.getItemById(3);
    oListItem.set_item('Title', 'My Updated Title');
    oListItem.update();

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    alert('Item updated!');
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

### Delete a list item

To delete a list item, call the **deleteObject()** function on the object. The following example uses the **getItemById(id)** function to return the second item from the list, and then deletes the item. SharePoint maintains the integer IDs of items within collections, even if they have been deleted. So, for example, the second item in a list might not have 2 as its identifier. A **ServerException** is returned if the **deleteObject()** function is called for an item that does not exist.

```js
function deleteListItem(siteUrl) {
    this.itemId = 2;
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Announcements');
    this.oListItem = oList.getItemById(itemId);
    oListItem.deleteObject();

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.onQuerySucceeded), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function onQuerySucceeded() {
    alert('Item deleted: ' + itemId);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```
<br/>

If you want to retrieve, for example, the new item count that results from a delete operation, include a call to the update() method to refresh the list. In addition, you must load either the list object itself or the **itemCount** property on the list object before executing the query. If you want to retrieve both a start and end count of the list items, you must execute two queries and return the item count twice, as shown in the following modification of the previous example.

```js
function deleteListItemDisplayCount(siteUrl) {
    this.clientContext = new SP.ClientContext(siteUrl);
    this.oList = clientContext.get_web().get_lists().getByTitle('Announcements');
    clientContext.load(oList);

    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.deleteItem), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function deleteItem() {
    this.itemId = 58;
    this.startCount = oList.get_itemCount();
    this.oListItem = oList.getItemById(itemId);
    oListItem.deleteObject();

    oList.update();
    clientContext.load(oList);
        
    clientContext.executeQueryAsync(
        Function.createDelegate(this, this.displayCount), 
        Function.createDelegate(this, this.onQueryFailed)
    );
}

function displayCount() {
    var endCount = oList.get_itemCount();
    var listItemInfo = 'Item deleted: ' + itemId + 
        '\nStart Count: ' +  startCount + 
        ' End Count: ' + endCount;
        
    alert(listItemInfo)
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + 
        '\n' + args.get_stackTrace());
}
```

<br/>

<a name="BasicOps_AccessHostweb"> </a>

## Access objects in the host web

While developing your add-in, you might need to access the host web to interact with items in it. Use the **AppContextSite** object to reference the host web or other SharePoint sites, as shown in the following example. For a full code sample, see [Get the host web title using the cross-domain library (JSOM)](http://code.msdn.microsoft.com/office/SharePoint-2013-Get-the-563f2a3d).

```js
function execCrossDomainRequest(appweburl, hostweburl) {
    // context: The ClientContext object provides access to
    //      the web and lists objects.
    // factory: Initialize the factory object with the
    //      add-in web URL.
    var context;
    var factory;
    var appContextSite;

    context = new SP.ClientContext(appweburl);
    factory = new SP.ProxyWebRequestExecutorFactory(appweburl);
    context.set_webRequestExecutorFactory(factory);
    appContextSite = new SP.AppContextSite(context, hostweburl);

    this.web = appContextSite.get_web();
    context.load(this.web);

    // Execute the query with all the previous 
    //  options and parameters.
    context.executeQueryAsync(
        Function.createDelegate(this, successHandler), 
        Function.createDelegate(this, errorHandler)
    );

    // Function to handle the success event.
    // Prints the host web's title to the page.
    function successHandler() {
        alert(this.web.get_title());
    }

    // Function to handle the error event.
    // Prints the error message to the page.
    function errorHandler(data, errorCode, errorMessage) {
        alert("Could not complete cross-domain call: " + errorMessage);
    }
}
```

<br/>

The previous example uses the cross-domain library in SharePoint to access the host web. For more information, see [Access SharePoint data from add-ins using the cross-domain library](access-sharepoint-data-from-add-ins-using-the-cross-domain-library.md).

## See also

- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
- [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md)
- [Work with external data in SharePoint](work-with-external-data-in-sharepoint.md)
    
 

