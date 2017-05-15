
# Set custom permissions on a list by using the REST interface
Learn how to define custom, fine-grained permissions on a SharePoint list by using the REST interface and JavaScript.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint#bk_newname).
 

SharePoint sites, lists, and list items are types of  **SecurableObject**. By default, a securable object inherits the permissions of its parent. To set custom permissions for an object, you need to break its inheritance so that it stops inheriting permissions from its parent, and then define new permissions by adding or removing role assignments.
 

 **Note**  See  [Additional resources](set-custom-permissions-on-a-list-by-using-the-rest-interface#bk_addresources) for links to articles about setting fine-grained permissions.
 

The code example in this article sets custom permissions on a list, and then changes a group's permissions to it. The example uses the REST interface to:
 

- Get the ID of the target group. The example uses the group ID to get the current role bindings for the group on the list and to add the new role to the list.
    
 
- Get the ID of the role definition that defines the new permissions for the group. The ID is used to add the new role to the list. This example uses an existing role definition for the new role, but you can optionally create a new role definition.
    
 
- Break role inheritance on the list by using the  `BreakRoleInheritance` method. The example breaks role inheritance but keeps the current set of roles. (Alternatively, you can choose not to copy any role assignments and to add the current user to the Manage permission level.)
    
 
- Remove the group's current role assignment on the list by sending a DELETE request to the role assignment endpoint. (If you choose not to copy any role assignments, you would skip this step.)
    
 
- Add a role assignment for the group to the list by using the  `AddRoleAssignment` method, which binds the group to the role definition and adds the role to the list.
    
 

## Prerequisites for using the example in this article
<a name="SP15Accessdatafromremoteapp_Prereq"> </a>

To use the example in this article, you'll need:
 

 

- A SharePoint development environment (app isolation required for on-premises scenarios)
    
 
- Visual Studio 2012 or Visual Studio 2013 with Office Developer Tools for Visual Studio 2012, or newer
    
 
You'll also need to set  **Full Control** add-in permissions at the **Web** scope. Only users who have sufficient permissions to change list permissions (such as site owners) can run this add-in.
 

 

## Example: Set custom permissions on a list by using the REST interface
<a name="bk_example1"> </a>

The following examples represent the contents of the App.js file in a SharePoint-hosted add-in. The first example uses the JavaScript cross-domain library to build and send HTTP requests. The second example uses jQuery AJAX requests.
 

 
Before you run the code, replace the placeholder values with actual values. If you're using a different language or environment, you'll need to add or change some request components. See  [How REST requests differ by environment](complete-basic-operations-using-sharepoint-2013-rest-endpoints#bk_HowRequestsDiffer) for more information.
 

 
 **Example 1: Cross-domain library requests**
 

 



```
'use strict';

// Change placeholder values before you run this code.
var listTitle = 'List 1';
var groupName = 'Group A';
var targetRoleDefinitionName = 'Contribute';
var appweburl;
var hostweburl;
var executor;
var groupId;
var targetRoleDefinitionId;

$(document).ready( function() {

    //Get the URI decoded URLs.
    hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

    // Load the cross-domain library file and continue to the custom code.
    var scriptbase = hostweburl + "/_layouts/15/";
    $.getScript(scriptbase + "SP.RequestExecutor.js", getTargetGroupId);
});

// Get the ID of the target group.
function getTargetGroupId() {
    executor = new SP.RequestExecutor(appweburl);
    var endpointUri = appweburl + "/_api/SP.AppContextSite(@target)/web/sitegroups/getbyname('";
    endpointUri += groupName + "')/id" + "?@target='" + hostweburl + "'";

    executor.executeAsync({
        url: endpointUri,
        method: 'GET',
        headers: { 'accept':'application/json;odata=verbose' },
        success: function(responseData) {
            var jsonObject = JSON.parse(responseData.body);
            groupId = jsonObject.d.Id;
            getTargetRoleDefinitionId();
        },
        error: errorHandler
   });
}

// Get the ID of the role definition that defines the permissions
// you want to assign to the group.
function getTargetRoleDefinitionId() {
    var endpointUri = appweburl + "/_api/SP.AppContextSite(@target)/web/roledefinitions/getbyname('";
    endpointUri += targetRoleDefinitionName + "')/id" + "?@target='" + hostweburl + "'";

    executor.executeAsync({
        url: endpointUri,
        method: 'GET',
        headers: { 'accept':'application/json;odata=verbose' },
        success: function(responseData) {
            var jsonObject = JSON.parse(responseData.body)
            targetRoleDefinitionId = jsonObject.d.Id;
            breakRoleInheritanceOfList();
        },
        error: errorHandler
    });
}

// Break role inheritance on the list.
function breakRoleInheritanceOfList() {
    var endpointUri = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('";
    endpointUri += listTitle + "')/breakroleinheritance(true)?@target='" + hostweburl + "'";

    executor.executeAsync({
        url: endpointUri,
        method: 'POST',
        headers: { 'X-RequestDigest':$('#__REQUESTDIGEST').val() },
        success: deleteCurrentRoleForGroup,
        error: errorHandler
    });
}

// Remove the current role assignment for the group on the list.
function deleteCurrentRoleForGroup() {
    var endpointUri = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('";
    endpointUri += listTitle + "')/roleassignments/getbyprincipalid('" + groupId + "')?@target='" + hostweburl + "'";

    executor.executeAsync({
        url: endpointUri,
        method: 'POST',
        headers: { 
            'X-RequestDigest':$('#__REQUESTDIGEST').val(),
            'X-HTTP-Method':'DELETE'
        },
        success: setNewPermissionsForGroup,
        error: errorHandler
    });
}

// Add the new role assignment for the group on the list.
function setNewPermissionsForGroup() {
    var endpointUri = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('";
    endpointUri += listTitle + "')/roleassignments/addroleassignment(principalid=" + groupId;
    endpointUri += ",roledefid=" + targetRoleDefinitionId + ")?@target='" + hostweburl + "'";

    executor.executeAsync({
        url: endpointUri,
        method: 'POST',
        headers: { 'X-RequestDigest':$('#__REQUESTDIGEST').val() },
        success: successHandler,
        error: errorHandler
    });
}

// Get parameters from the query string.
// For production purposes you may want to use a library to handle the query string.
function getQueryStringParameter(paramToRetrieve) {
    var params = document.URL.split("?")[1].split("&amp;");
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve) return singleParam[1];
    }
}

function successHandler() {
    alert('Request succeeded.');
} 

function errorHandler(xhr, ajaxOptions, thrownError) {
    alert('Request failed: ' + xhr.status + '\n' + thrownError + '\n' + xhr.responseText);
}
```

 **Example 2: jQuery AJAX requests**
 

 



```
// Change placeholder values before you run this code.
var siteUrl = 'http://server/site';
var listTitle = 'List 1';
var groupName = 'Group A';
var targetRoleDefinitionName = 'Contribute';
var groupId;
var targetRoleDefinitionId;

$(document).ready( function() {
    getTargetGroupId();
});

// Get the ID of the target group.
function getTargetGroupId() {
    $.ajax({
        url: siteUrl + '/_api/web/sitegroups/getbyname(\'' + groupName + '\')/id',
        type: 'GET',
        headers: { 'accept':'application/json;odata=verbose' },
        success: function(responseData) {
            groupId = responseData.d.Id;
            getTargetRoleDefinitionId();
        },
        error: errorHandler
   });
}

// Get the ID of the role definition that defines the permissions
// you want to assign to the group.
function getTargetRoleDefinitionId() {
    $.ajax({
        url: siteUrl + '/_api/web/roledefinitions/getbyname(\''
            + targetRoleDefinitionName + '\')/id',
        type: 'GET',
        headers: { 'accept':'application/json;odata=verbose' },
        success: function(responseData) {
            targetRoleDefinitionId = responseData.d.Id;
            breakRoleInheritanceOfList();
        },
        error: errorHandler
    });
}

// Break role inheritance on the list.
function breakRoleInheritanceOfList() {
    $.ajax({
        url: siteUrl + '/_api/web/lists/getbytitle(\'' + listTitle
            + '\')/breakroleinheritance(true)',
        type: 'POST',
        headers: { 'X-RequestDigest':$('#__REQUESTDIGEST').val() },
        success: deleteCurrentRoleForGroup,
        error: errorHandler
    });
}

// Remove the current role assignment for the group on the list.
function deleteCurrentRoleForGroup() {
    $.ajax({
        url: siteUrl + '/_api/web/lists/getbytitle(\'' + listTitle
            + '\')/roleassignments/getbyprincipalid(' + groupId + ')',
        type: 'POST',
        headers: { 
            'X-RequestDigest':$('#__REQUESTDIGEST').val(),
            'X-HTTP-Method':'DELETE'
        },
        success: setNewPermissionsForGroup,
        error: errorHandler
    });
}

// Add the new role assignment for the group on the list.
function setNewPermissionsForGroup() {
    $.ajax({
        url: siteUrl + '/_api/web/lists/getbytitle(\'' + listTitle
            + '\')/roleassignments/addroleassignment(principalid='
            + groupId + ',roledefid=' + targetRoleDefinitionId + ')',
        type: 'POST',
        headers: { 'X-RequestDigest':$('#__REQUESTDIGEST').val() },
        success: successHandler,
        error: errorHandler
    });
}

function successHandler() {
    alert('Request succeeded.');
} 

function errorHandler(xhr, ajaxOptions, thrownError) {
    alert('Request failed: ' + xhr.status + '\n' + thrownError + '\n' + xhr.responseText);
}
```


## Additional resources
<a name="bk_addresources"> </a>


-  [Get to know the SharePoint REST service](get-to-know-the-sharepoint-2013-rest-service)
    
 
-  [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-2013-rest-endpoints)
    
 
-  [Working with lists and list items with REST](working-with-lists-and-list-items-with-rest)
    
 
- REST resources:
    
     [GroupCollection resource](http://msdn.microsoft.com/library/users-groups-and-roles-rest-api-reference%28Office.15%29.aspx#bk_GroupCollection)
    
     [Group resource](http://msdn.microsoft.com/library/users-groups-and-roles-rest-api-reference%28Office.15%29.aspx#bk_Group)
    
     [RoleAssignmentCollection resource](http://msdn.microsoft.com/library/users-groups-and-roles-rest-api-reference%28Office.15%29.aspx#bk_RoleAssignmentCollection)
    
     [RoleAssignment resource](http://msdn.microsoft.com/library/users-groups-and-roles-rest-api-reference%28Office.15%29.aspx#bk_RoleAssignment)
    
     [RoleDefinitionCollection resource](http://msdn.microsoft.com/library/users-groups-and-roles-rest-api-reference%28Office.15%29.aspx#bk_RoleDefinitionCollection)
    
     [RoleDefinition resource](http://msdn.microsoft.com/library/users-groups-and-roles-rest-api-reference%28Office.15%29.aspx#bk_RoleDefinition)
    
 
- TechNet articles:
    
     [Fine-grained permission reference for SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn169567.aspx)
    
     [Best practices for using fine-grained permissions in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/gg128955.aspx)
    
     [User permissions and permission levels in SharePoint](http://technet.microsoft.com/en-us/library/cc721640.aspx)
    
 

