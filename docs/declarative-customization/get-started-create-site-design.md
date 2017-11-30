# Get started creating site designs

Build site designs to provide reusable lists, themes, layouts, pages, or custom actions so that your users can quickly build new SharePoint sites with the features they need. In this article you'll build a simple site design that adds a SharePoint list for tracking customer orders. Then you'll use the site design to create a new SharePoint site with the custom list.

## Create the JSON script

A site design is a collection of actions that SharePoint will run when creating a new site. Actions describe changes to apply to the new site, such as creating a new list, or applying a theme. The actions are specified in a JSON script. The JSON script is a list of all actions to apply. When a script runs, SharePoint completes each action in the order listed.

EAch action is specified by the "verb" value in the JSON scipt. Also, actions can have subactions which are also "verb" values. In the JSON below, the script specifies to create a new list named Customer Tracking, and then subactions set the description and add several fields to define the list.

1. Go to the home page of the SharePoint site you are using for development. You have to be at the home page, not inside a site or you'll receive an authentication error.
1. Use the developer tools of your browser to open the console window.
1. Enter the JSON script below

```javascript
var site_script = {
    "$schema": "schema.json",
        "actions": [
            {
                "verb": "createSPList",
                "listName": "Customer Tracking",
                "templateType": 100,
                "subactions": [
                    {
                        "verb": "SetDescription",
                        "description": "List of Customers and Orders"
                    },
                    {
                        "verb": "addSPField",
                        "fieldType": "Text",
                        "displayName": "Customer Name",
                        "isRequired": false,
                        "addToDefaultView": true
                    },
                    {
                        "verb": "addSPField",
                        "fieldType": "Number",
                        "displayName": "Requisition Total",
                        "addToDefaultView": true,
                        "isRequired": true
                    },
                    {
                        "verb": "addSPField",
                        "fieldType": "User",
                        "displayName": "Contact",
                        "addToDefaultView": true,
                        "isRequired": true
                    },
                    {
                        "verb": "addSPField",
                        "fieldType": "Note",
                        "displayName": "Meeting Notes",
                        "isRequired": false
                    }
                ]
            }
        ],
            "bindata": { },
    "version": 1
}
```

## Create a function to submit REST API requests

You'll need to interact with the site design REST API. You can use the following function to submit REST request.

- In the console window enter the following **restRequest** function.

```javascript
function restRequest(url,params) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
        {
            if (req.readyState != 4) // Loaded
                return;
            console.log(req.responseText);
        };
  req.open("POST",url,true);
  req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
  req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
  req.setRequestHeader("ODATA-VERSION","4.0");
  req.send(params ? JSON.stringify(params) : void 0);
}
```

## Register the site design

Each site design needs to be registered in SharePoint so that it is available to users. You register a new site design by calling the **CreateSiteDesign** REST API. The following example shows how to register the JSON script that creates a new list.

1. Enter the following JavaScript code into your browser's console window.
    
    ```javascript
    restRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteScript(Title=@title)?@title='customer orders'", site_script);
    ```
    
1. The call returns a JSON response containing a site script **ID**. Copy this somewhere so you can use it later.

## Attach the site design to a template

Site designs are only used with the two templates provided with SharePoint. Team site, or communication site. Call the CreateSiteDesign REST API to create the site. It takes the following parameters
webTemplate: 64 for Team site and 68 for Communication site.

```javascript
restRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteDesign", {info:{Title:"customer orders", Description:"Tracks customer orders", SiteScriptIds:["SiteScriptID from previous response"],  WebTemplate:"64", IsDefault: false}});
```

The JSON response will contain an **ID** that you can use later to remove the registration if you want.

is default is whether it gets used by default

## Use the new site design

Now that the registrations are completed you can use it to create new sites.

1. Go to the home page of the SharePoint site you are using for development.
1. Choose **Create site**.
1. Choose **Team site**.
1. In the **Choose a design** drop down, select your site design **customer orders**.
1. In Site name enter a name for the new site **Customer order tracking**.
1. Choose **Next**.
1. Choose **Finish**.
1. A pane will indicate that your script is being applied. When it is done, choose **View updated site**.
1. You will see the custom list on the page.
