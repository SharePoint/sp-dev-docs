# Create a basic SharePoint-hosted add-in by using Napa Office 365 Development Tools
Learn how to create a basic SharePoint-hosted SharePoint Add-in by using Napa Office 365 Development Tools.
 

 
![Run button](../../images/Apps_NAPA_Run_Button.png)
 
 [Run this sample now!](http://go.microsoft.com/fwlink/?LinkId=313212)
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 

Napa is a tool that you can use to create SharePoint-hosted SharePoint Add-ins. Napa is itself implemented as a (provider-hosted) SharePoint Add-in that can be installed on SharePoint Online websites that are created with the  **Developer Site** template. SharePoint developer sites have a library called **Add-ins in Testing** on the home page. Instructions for creating a developer site and installing Napa are later in this article.
 

 **Note**  We do not support installing Napa to on-premises SharePoint.
 

By using Napa, you can create your SharePoint Add-ins inside your browser instead of in Visual Studio. At any time, you can download your project and open it in Visual Studio for more advanced scenarios.
 
By following this article, you can learn how to create a simple SharePoint-hosted SharePoint Add-in by using Napa. The add-in that you'll create includes controls and code for managing lists and list items. 
 

 **Note**  You can create only SharePoint-hosted SharePoint Add-ins with Napa, not provider-hosted. For information on the differences, see  [SharePoint Add-ins](sharepoint-add-ins.md).You cannot use SharePoint's add-in updating semantics, which is described in  [Update add-in web components in SharePoint 2013](update-add-in-web-components-in-sharepoint-2013.md), in Napa. So if you need to update an add-in created in Napa, you first have to export it to Visual Studio. Instructions for doing so are later in this article.You can also create a SharePoint Add-in by using Visual Studio. For more information, see  [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md).
 


## Optionally, get an Office 365 Developer Site
<a name="Prerequisites"> </a>

If you don't already have a SharePoint Online subscription that you can use for development, use this section to get one. Otherwise, skip to  [Install Napa](#Overview).
 

 

 **Note**   You might already have access to an Office 365 Developer Site: **Are you an MSDN subscriber?** Visual Studio Ultimate and Visual Studio Premium with MSDN subscribers receive an Office 365 Developer Subscription as a benefit. [Redeem your benefit today.](https://msdn.microsoft.com/subscriptions/manage/default.aspx) **Do you have one of the following Office 365 subscription plans?** **If so, an administrator of the Office 365 subscription can create a Developer Site** by using the [Office 365 admin center](https://portal.microsoftonline.com/admin/default.aspx). For more information, see  [Create a developer site on an existing Office 365 subscription](create-a-developer-site-on-an-existing-office-365-subscription.md). 
 

Two ways to get an Office 365 plan. 
 

 

- Start with a  [free 30-day trial](https://portal.microsoftonline.com/Signup/MainSignUp.aspx?OfferId=6881A1CB-F4EB-4db3-9F18-388898DAF510&amp;DL=DEVELOPERPACK) with one user license.
    
 
- Buy an  [Office 365 developer subscription](https://portal.microsoftonline.com/Signup/MainSignUp.aspx?OfferId=C69E7747-2566-4897-8CBA-B998ED3BAB88&amp;DL=DEVELOPERPACK). 
    
 

 **Tip**  Each of these links will open in another window or tab in order to keep the following instructions handy.
 


**Figure 1. Office 365 Developer Site domain name**

 

 
![Page 2 of Sign up form for Office 365 account](../../images/ff384c69-56bf-4ceb-81c3-8b874e2407f0.png)
 

 

 

 

1. The first page (not shown) of the signup form is self-explanatory. Just supply the information about yourself that is requested and choose  **Next**.
    
 
2. On the second page, shown in Figure 1, specify a user ID for the administrator of the subscription.
    
 
3. Create a subdomain of  **.onmicrosoft.com**. 
    
    After signup, you have to use the resulting credentials (in the format  _UserID_@ _yourdomain_.onmicrosoft.com) to sign in to your Office 365 portal site where you administer your account. Your SharePoint Online Developer Site is provisioned at your new domain:  **http:// _yourdomain_.sharepoint.com**.
    
 
4. Choose  **Next** and fill out the final page of the form. If you choose to provide a telephone number to obtain a confirmation code, you can provide a mobile or land line telephone number, but *not*  a VoIP (Voice over Internet Protocol) number.
    
 

    
 **Note**  If you're logged on to another Microsoft account when you try to sign up for a developer account, you might get this message: "Sorry, that user ID you entered didn't work. It looks like it's not valid. Be sure you enter the user ID that your organization assigned to you. Your user ID usually looks like  *someone@example.com*  or *someone@example.onmicrosoft.com*  ."If you see this message, log out of the Microsoft account you were using and try again. If you still get the message, clear your browser cache or switch to  **InPrivate Browsing** and then fill out the form.
 

After you finish the signup process, your browser will opens the Office 365 installation page. Choose the Admin icon to open the admin center page.
 

 

**Figure 2. Office 365 admin center page**

 

 
![Screenshot that shows the Office 365 admin center.](../../images/SP15_Office365AdminInset_border.png)
 

 

1. You'll have to wait for your Developer Site to finish provisioning. After provisioning is complete, refresh the admin center page in your browser.
    
 
2. Then, choose the  **Build Add-ins** link in the upper left corner of the page to open your Developer Site. You should see a site that looks like the one in Figure 3. There is an **Add-ins in Testing** list on the page. This confirms that the website was made with SharePoint's Developer Site template. If you see a regular team site instead, wait a few minutes and launch your site again.
    
 
3. Make a note of the URL of the site. It is used when you create SharePoint Add-ins projects in Visual Studio.
    
 

**Figure 3. Your Developer Site home page with the Add-ins in Testing list**

 

 
![Screenshot that shows the Developer site homepage.](../../images/SP15_DeveloperSiteHome_border.png)
 

 

 

## Install Napa
<a name="Overview"> </a>

If your subscription was not originally created as a Office 365 Developer Site, then you have to create a Developer Site in the Administration UI of the subscription and then install Napa in it. Instructions for creating the site are in  [Create a developer site on an existing Office 365 subscription](create-a-developer-site-on-an-existing-office-365-subscription.md).
 

 
To install Napa, open your Developer Site and choose  **Site Contents** > **add an add-in** > **SharePoint Store**. In the store, search for Napa and install it. (If you have a Office 365 Developer Site, Napa may have already been installed when the site was created and you will see it on the **Site Contents** page.)
 

 

## Create a SharePoint Add-in project
<a name="Create"> </a>


1. Open the Napa add-in on the Office 365 page.
    
 
2. Choose the  **Add New Project** tile, and then choose the **Add-in for SharePoint** tile.
    
 
3. Name the project Test SharePoint Add-in, and then choose the  **Create** button.
    
    The code editor opens and shows the default webpage, which already contains some sample code that you can run without doing anything else.
    
 

## Add controls to the home page
<a name="AddControls1"> </a>

In the SharePoint Add-in, add controls to the default home page for creating and deleting a generic SharePoint list and getting the current number of lists in the web of the SharePoint Add-in. You'll add code for the controls later.
 

 

### To add controls to the home page


1. On the left side of the page under the  **Pages** folder, choose the **Default.aspx** page if it isn't already selected.
    
    The Default.aspx webpage appears in the code editor. 
    
 
2. In the  `PlaceHolderMain` section, add this code under the existing HTML
    
```HTML
  <br />
<div>
    <button id="getListCount">Get count of lists in web</button>
</div>
<br />
<div id="starter">
    <input type="text" value="List name here" id="createlistbox"/><button id="createlistbutton">Create List</button>
    <p>
    Lists
    <br />
    <select id="selectlistbox" ></select><button id="deletelistbutton">Delete Selected List</button>
    </p>
</div>
```


    The HTML creates these controls.
    
      - A button that gets the number of lists in the web of the SharePoint Add-in.
    
 
  - A button for creating a generic SharePoint list and another button for deleting the list.
    
 
  - A list of lists that are available within the add-in.
    
 

## Add code for creating and deleting lists
<a name="AddCode1"> </a>

In this procedure, you'll add some JavaScript code so that users can create and delete lists in the SharePoint Add-in.
 

 

### To add code for creating and deleting lists


1. Choose the  **Scripts** folder, and then choose the **App.js** link.
    
    The default JavaScript code file from the project template opens for editing. This file contains the code that's used in your SharePoint Add-in. You could add another .js file and add code to it instead of to the existing file. But, for this example, add it to the  **App.js** file that's provided.
    
    In the next step, you'll define the functions for the controls that you created in the previous procedure.
    

|**Function Name**|**Description**|
|:-----|:-----|
| `getWebProperties()`|Connected to the  **getListCount** control—retrieves the number of lists in the web.|
| `createlist()`|Connected to the  **createListButton** control—creates a generic SharePoint list.|
| `deletelist()`|Connected to the  **deletelistbutton** control—deletes the list that the user chose from the list of available lists.|

    You'll also call the  `welcome()` and `displayLists()` functions, which this walkthrough will describe later.
    
 
2. In the  **App.js** file, add the `web`,  `lists`, and  `listItemcollection` variables to the two default variables, and change the code in the `$(document).ready()` function to the following example.
    
     **Note**  Error squiggles will appear in this code. They'll disappear in later steps.

```
  'use strict';

var context = SP.ClientContext.get_current();
var user = context.get_web().get_currentUser();
var web = context.get_web();
var lists = web.get_lists();
var listItemCollection;  // This variable is used later when you add list items.

(function () {

// This code runs when the DOM is ready and creates a context object which is 
// needed to use the SharePoint object model.
$(document).ready(function () {
    getUserName();
    $("#getListCount").click(function (event) {
        getWebProperties();
        event.preventDefault();
    });

    $("#createlistbutton").click(function (event) {
        createlist();
        event.preventDefault();
    });

    $("#deletelistbutton").click(function (event) {
        deletelist();
        event.preventDefault();
    });
        displayLists();
    });

```


    In the next step, you'll add JavaScript functions for the definitions. Each function in the code is executed by calling  `executeQueryAsync()`, which executes the current pending request asynchronously on the server by using the client-side object model (CSOM) for SharePoint. When a function executes asynchronously, your script continues to run without waiting for the server to respond. Each  `executeQueryAsync()` call includes two event handlers. One handler responds if the function runs successfully, and the other handler responds if the function fails. This table describes the main functions.
    

|**Function name**|**Description**|
|:-----|:-----|
| `welcome()`|Gets the current web context reference, and then uses it to set the current user information into the context.|
| `getWebProperties()`|Gets the collection of lists in the current web and then returns the number of lists.|
| `displaylists()`|Gets the current collection of lists in this web. If successful, this function adds the name of each list in the collection to the list of available lists.|
| `createlist()`|Creates a generic SharePoint list (list template type  **genericList**) and gives it the name that the user specifies in the  **createlistbox** control. You can create other types of lists. For more information about list types, see [SPListTemplateType Enumeration](http://go.microsoft.com/fwlink/?LinkId=256687).|
| `deletelist()`|Deletes the list that the user chose from the list of available lists.|
3. Add the following code after the  `onGetUserNameFail()` function in **App.js**.
    
```
  function getWebProperties() {
        // Get the number of lists in the current web.
        context.load(lists);
        context.executeQueryAsync(onWebPropsSuccess, onWebPropsFail);
    }

    function onWebPropsSuccess(sender, args) {
        alert('Number of lists in web: ' + lists.get_count());
    }

    function onWebPropsFail(sender, args) {
        alert('Failed to get list. Error: ' + args.get_message());
    }

    function displayLists() {
        // Get the available SharePoint lists, and then set them into 
        // the context.
        lists = web.get_lists();
        context.load(lists);
        context.executeQueryAsync(onGetListsSuccess, onGetListsFail);
    }

    function onGetListsSuccess(sender, args) {
        // Success getting the lists. Set references to the list 
        // elements and the list of available lists.
        var listEnumerator = lists.getEnumerator();
        var selectListBox = document.getElementById("selectlistbox");
        if (selectListBox.hasChildNodes()) {
            while (selectListBox.childNodes.length >= 1) {
                selectListBox.removeChild(selectListBox.firstChild);
            }
        }
        // Traverse the elements of the collection, and load the name of    
        // each list into the dropdown list box.
        while (listEnumerator.moveNext()) {
            var selectOption = document.createElement("option");
            selectOption.value = listEnumerator.get_current().get_title();
            selectOption.innerHTML = listEnumerator.get_current().get_title();
            selectListBox.appendChild(selectOption);
        }
    }

    function onGetListsFail(sender, args) {
        // Lists couldn't be loaded - display error.
        alert('Failed to get list. Error: ' + args.get_message());
    }

function createlist() {
        // Create a generic SharePoint list with the name that the user specifies.
        var listCreationInfo = new SP.ListCreationInformation();
        var listTitle = document.getElementById("createlistbox").value;
        listCreationInfo.set_title(listTitle);
        listCreationInfo.set_templateType(SP.ListTemplateType.genericList);
        lists = web.get_lists();
        var newList = lists.add(listCreationInfo);
        context.load(newList);
        context.executeQueryAsync(onListCreationSuccess, onListCreationFail);
    }

    function onListCreationSuccess() {
        displayLists();
    }

    function onListCreationFail(sender, args) {
        alert('Failed to create the list. ' + args.get_message());
    }

    function deletelist() {
        // Delete the list that the user specifies.
        var selectListBox = document.getElementById("selectlistbox");
        var selectedListTitle = selectListBox.value;
        var selectedList = web.get_lists().getByTitle(selectedListTitle);
        selectedList.deleteObject();
        context.executeQueryAsync(onDeleteListSuccess, onDeleteListFail);
    }

    function onDeleteListSuccess() {
        displayLists();
    }

    function onDeleteListFail(sender, args) {
        alert('Failed to delete the list. ' + args.get_message());
    }
```


## Run it!
<a name="Run1"> </a>

The first part of the UI and code is in place, so go ahead and run the add-in to verify whether it works.
 

 

### To run the add-in


1. At the bottom of the page, choose the run (
 
![Run button](../../images/Apps_NAPA_Run_Button.png)
 
) button.
    
    The add-in is packaged, deployed, and installed on your Office 365 Developer Site.
    
    After installation, the SharePoint Add-in starts. If the add-in doesn't start automatically because, for example, a popup blocker is enabled, choose the add-in link to start the add-in.
    
 
2. Choose the  **Click here to launch your add-in in a new window** link.
    
    The screen for the SharePoint Add-in appears.
    
 
3. Choose the  **Get count of lists in web** button.
    
    A dialog box specifies that the web for the current SharePoint Add-in contains two lists. (The web contains the Design Gallery and Master Page Gallery lists by default.)
    
 
4. In the  **List name here** box, enterTest List, and then choose the  **Create List** button.
    
 
5. Open the  **Lists** list to verify that the new list appears in it.
    
 
6. Choose the  **Get count of lists in web** button again.
    
    The web now contains three lists, including the list that you just created.
    
 
7. In the  **Lists** list, choose **Test List**, and then choose the  **Delete Selected List** button.
    
     **Test List** disappears from the list of available lists.
    
 
8. When you finish, close the browser window, and then choose the  **Close** button in **Launch Add-in** window to return to the project that you were editing.
    
 

## Add code and controls for adding and deleting list items
<a name="AddControls2"> </a>

Now that users can create and delete lists, you can perform the following steps to enable them to add and delete list items.
 

 

### To add code and controls for adding and deleting list items


1. Choose the Default.aspx file to edit it.
    
 
2. Under the  `selectlistbox` element, add this code.
    
```XML
      <p>
    Items
    <br />
    <input type="text" value="item name here" id="createitembox"/><button id="createitembutton">Create Item</button>
    </p>
    <p>
    <select id="selectitembox"></select> <button id="deleteitembutton">Delete Selected Item</button>
    </p>
```


    This code adds an input box where users can specify the name of an item, a button to add the item to the list, and a button to delete the item from the list.
    
 
3. Choose the  **App.js** file to edit it.
    
 
4. In the  `$(document).ready()` function, add definitions for functions that are called when the user chooses the **Create Item** and **Delete Selected Item** buttons. Also, add a jQuery event handler for the **Lists** list box to ensure the list items get updated when you select a new list.
    
```
  $("#createitembutton").click(function (event) {
            createitem();
            event.preventDefault();
        });

        $("#deleteitembutton").click(function (event) {
            deleteitem();
            event.preventDefault();
        });
    
        // Update the list items dropdown when a new list
        // is selected in the Lists dropdown.
        $("#selectlistbox").change(function (event) {
            getitems();
            event.preventDefault();
        });
```


     **Note**  If the list items aren't displaying when you run the add-in, be sure that the  `displayLists();` statement comes after the previous code.

    In the next step, you'll add JavaScript functions for the new definitions and a support function ( `getItems()`). This table describes what the main functions do.
    

|**Function name**|**Description**|
|:-----|:-----|
| `createItem()`|Adds an item to the list that the user chooses, and gives that item the name that the user specifies in the  **Items** box.|
| `deleteItem()`|Deletes the item that the user chooses from the list.|
| `getItems()`|Retrieves the collection of items (and its children) in the list that the user chooses.|
5. Add this code to bottom of  **App.js**, after the  `onDeleteListFail()` function.
    
```
  function createitem() {
    // Retrieve the list that the user chose, and add an item to it.
    var selectListBox = document.getElementById("selectlistbox");
    var selectedListTitle = selectListBox.value;
    var selectedList = web.get_lists().getByTitle(selectedListTitle);

    var listItemCreationInfo = new SP.ListItemCreationInformation();
    var newItem = selectedList.addItem(listItemCreationInfo);
    var listItemTitle = document.getElementById("createitembox").value;
    newItem.set_item('Title', listItemTitle);
    newItem.update();
    context.load(newItem);
    context.executeQueryAsync(onItemCreationSuccess, onItemCreationFail);
}

function onItemCreationSuccess() {
    // Refresh the list of items.
    getitems();
}

function onItemCreationFail(sender, args) {
    // The item couldn't be created - display an error message.
    alert('Failed to create the item. ' + args.get_message());
}

function deleteitem() {
    // Delete the item that the user chose.
    var selectListBox = document.getElementById("selectlistbox");
    var selectedListTitle = selectListBox.value;
    var selectedList = web.get_lists().getByTitle(selectedListTitle);
    var selectItemBox = document.getElementById("selectitembox");
    var selectedItemID = selectItemBox.value;
    var selectedItem = selectedList.getItemById(selectedItemID);
    selectedItem.deleteObject();
    selectedList.update();
    context.load(selectedList);
    context.executeQueryAsync(onDeleteItemSuccess, onDeleteItemFail);
}

function onDeleteItemSuccess() {
    // Refresh the list of items.
    getitems();
}

function onDeleteItemFail(sender, args) {
    // The item couldn't be deleted - display an error message.
    alert('Failed to delete the item. ' + args.get_message());
}

function getitems() {
    // Using a CAML query, get the items in the list that the user chose, and 
    // set the context to the collection of list items.
    var selectListBox = document.getElementById("selectlistbox");
    var selectedList = selectListBox.value;
    var selectedListTitle = web.get_lists().getByTitle(selectedList);  
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml("<View><ViewFields>" +
        "<FieldRef Name='ID' />" +
        "<FieldRef Name='Title' />" +
        "</ViewFields></View>')");
    listItemCollection = selectedListTitle.getItems(camlQuery);
    context.load(listItemCollection, "Include(Title, ID)");
    context.executeQueryAsync(onGetItemsSuccess, onGetItemsFail);
}

function onGetItemsSuccess(sender, args) {
    // The list items were retrieved.
    // Show all child nodes.
    var listItemEnumerator = listItemCollection.getEnumerator();
    var selectItemBox = document.getElementById("selectitembox");
    if (selectItemBox.hasChildNodes()) {
        while (selectItemBox.childNodes.length >= 1) {
     selectItemBox.removeChild(selectItemBox.firstChild);
        }
    }
        while (listItemEnumerator.moveNext()) {
            var selectOption = document.createElement("option");
            selectOption.value = listItemEnumerator.get_current().get_item('ID');
            selectOption.innerHTML = listItemEnumerator.get_current().get_item('Title');
            selectItemBox.appendChild(selectOption);
        }
}

function onGetItemsFail(sender, args) {
    // The list items couldn't be retrieved - display an error message.
    alert('Failed to get items. Error: ' + args.get_message());
}
```


## Run the revised SharePoint Add-in!
<a name="Run2"> </a>

All of the UI and code is in place, so go ahead and run the add-in to be sure it works.
 

 

### To run the revised SharePoint Add-in


1. At the bottom of the page, choose the  **Run** button again.
    
 
2. In the  **List name here** box, enterNew Test List, and then choose the  **Create List** button.
    
    The new list is added to the  **Lists** list.
    
 
3. In the  **Lists** list, choose **New Test List**.
    
 
4. In the  **Item name here** box, enterItem 1, and then choose the  **Create Item** button.
    
    The new list item appears in the  **Items** list.
    
 
5. Repeat the previous step to add Item 2 andItem 3.
    
 
6. In the list of items, choose  **Item 2**, and then choose the  **Delete Selected Item** button.
    
     **Item 2** disappears from the list of items.
    
 
7. When you finish, close the browser window.
    
 

## Export the project to Visual Studio
<a name="NextSteps"> </a>

Open your project in Visual Studio by choosing the  **Open in Visual Studio** button, as shown in Figure 3. Napa automatically installs the necessary tools and opens your project in Visual Studio.
 

 

**Figure 3. The Open in Visual Studio button**

 

 
![Open in Visual Studio button](../../images/Apps_Napa_OpenInVS.png)
 

 

 

## Additional resources
<a name="Additional"> </a>


-  [SharePoint 2013 development overview](http://msdn.microsoft.com/library/f86e2695-4d7a-4fc5-bc23-689de96c4b06%28Office.15%29.aspx)
    
 
-  [SharePoint Add-ins](sharepoint-add-ins.md)
    
 

