---
title: How to Use SAP workflow with Duet Enterprise 2.0
ms.prod: SHAREPOINT
ms.assetid: 816e28ed-8cea-4e33-98e5-d3d27136e2e6
---


# How to: Use SAP workflow with Duet Enterprise 2.0

## Introduction
<a name="bkmk_Introduction"> </a>

SAP Business Workflow provides a way to automate business processes, and with Duet Enterprise 2.0, those workflows can be integrated within an SharePoint Add-in.
  
    
    
The following steps show how to create an app, configure it, and then how to display the information retrieved from the SAP workflows.
  
    
    

## Create an app for SharePoint and Duet Enterprise 2.0
<a name="bkmk_CreateApp"> </a>

The first step is to create an SharePoint Add-in that will contain the connection information using an external content type for Business Connectivity Services (BCS), external lists and any customizations you might want to use to present the data.
  
    
    

### To create an app for SharePoint:


1. Start Visual Studio 2012 as an administrator.
    
  
2. Choose **File**, **New**, **New Project**.
    
  
3. In the **New Project** dialog box, expand the **Visual C#** node, expand the **Office/SharePoint** node, and then choose the **Apps** node.
    
  
4. Choose **App for SharePoint**.
    
  
5. Name the project and click **OK**.
    
  
6. In the first **Specify the App for SharePoint Settings** dialog box, name your app and choose **SharePoint-hosted** under **How do you want to host your app for SharePoint**. Also specify the URL of the **Duet Workflow site** you want to debug against under **What SharePoint site do you want to use for debugging your app** and choose **Finish**.
    
  
7. On the Build menu, choose **Deploy** *\<your app name\>*  .
    
  
After the app is deployed, Visual Studio will launch the default page for the app.
  
    
    

## Add the external content type and external lists to the app
<a name="bkmk_AddECT"> </a>

BCS must be made aware of the external data source. This is done using an external content type.
  
    
    

### To add an external content type:


1. In the **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content types for External Data source**.
    
  
2. On the **Specify OData Source** page, enter the URL of the Duet Enterprise Workflow Service. The following is an example of a Duet service URL:
    
     *https://\<\<DUETGATEWAY\>\>:\<\<PORT\>\>/sap/opu/odata/IWWRK/DUET_WORKFLOW_CORE;mo;c=SHAREPOINT_DE* 
    
  
3. Choose a name for your ODATA source, for example, SAPWorkflows, and then choose **Next**.
    
  
4. Specify the SAP username and password to connect to the service metadata.
    
  
5. A list of data entities that are being exposed by the OData Service appears. Select the entities you wish to include in the external content type. In this example, using the SAP workflow services, select from the following:
    
  - **AttachmentCollection**
    
  
  - **CommentCollection**
    
  
  - **DecisionOptionCollection**
    
  
  - **ExtensibleElementCollection**
    
  
  - **ParticipantCollection**
    
  
  - **ServiceOperations**
    
  
  - **TaskDescriptionCollection**
    
  
  - **WorkflowTaskCollection**
    
  
6. Select the **Create list instances for the selected data entities (except Service Operations)** check box.
    
  
7. Choose **Finish**.
    
  

> **Note:**
> Make sure SAP workflow service allows basic authentication as the BDC auto-generation tools in Visual Studio. 
  
    
    


## Add a custom action feature to a Duet Enterprise 2.0 workflow list
<a name="bkmk_AddCustomAction"> </a>

In order to provide a way for the user to work with the new functionality added to a SharePoint list, the following steps will add an item to the Site Actions menu.
  
    
    

### To add a custom action:


1. Right-click the SharePoint Add-in project, and add a new **UI Custom Action** item.
    
  
2. Open the **Elements.xml** file of the custom action host web feature. By replacing the code in the file with the following XML, the custom action will:
    
  - Declare an ECB custom action and its attributes.
    
  
  - Declare a Ribbon custom action and its attributes.
    
  
  - Declare the app webpage target and the values that are passed to it through the query string. 
    
    The **UrlAction** element uses several tokens. For more information, see [URL strings and tokens in SharePoint Add-ins](http://msdn.microsoft.com/library/800ec8cd-a448-46bc-b41e-d4030eeb4048%28Office.15%29.aspx).
    
  

```XML
  
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <CustomAction Id="ViewDetailsECBCustomAction"
          RegistrationType="List"
          RegistrationId="107"
          Location="EditControlBlock"
          Sequence="1"
          ImageUrl="_layouts/15/images/placeholder16x16.png"
          Title="View Details">
     <UrlAction Url="~appWebUrl/Pages/ViewDetails.aspx?
            {StandardTokens}&amp;amp;ListId={ListId}&amp;amp;ItemId={ItemId}"/>
  </CustomAction>

  <CustomAction
          Id="ViewDetailsRibbonAction"
          RegistrationId="107"
          RegistrationType="List"
          Location="CommandUI.Ribbon"
          Title="View Details"
          HostWebDialog="false"
          HostWebDialogHeight="500"
          HostWebDialogWidth="500">
    <CommandUIExtension>
      <CommandUIDefinitions>
        <CommandUIDefinition 
              Location="Ribbon.ListItem.Workflow.Controls._children">
          <Button
              Id="Ribbon.ListItem.Workflow.ViewDetails"
              Alt="View Details"
              Sequence="25"
              Command="Invoke_ViewDetailsSAPWorkflow"
              LabelText="View Details"
              TemplateAlias="o1"
              Image32by32="_layouts/15/images/placeholder32x32.png"
              Image16by16="_layouts/15/images/placeholder16x16.png"/>
        </CommandUIDefinition>
      </CommandUIDefinitions>
      <CommandUIHandlers>
        <CommandUIHandler
          Command="Invoke_ViewDetailsSAPWorkflow"
          CommandAction="~appWebUrl/Pages/ViewDetails.aspx?
           {StandardTokens}&amp;amp;ListId={ListId}&amp;amp;ItemId={SelectedItemId}"/>
      </CommandUIHandlers>
    </CommandUIExtension>
  </CustomAction>
</Elements>
```

3. Add a new page, ViewDetails.aspx page to the project.
    
  
4. Press **F5** to build and deploy the SharePoint app.
    
  
5. Go to the **WorkItem** list in the host web and choose **View Details** in the context menu. You will be redirected to **ViewDetails.aspx**.
    
  

> **Note:**
> Make sure the SAP workflow service allows basic authentication. The BDC auto-generation tools in Visual Studio currently only support anonymous and basic authentication. 
  
    
    

If you deploy the app and then navigate to **Lists/WorkflowTaskCollection** inside your app, you will see the following message:
  
    
    
"Message from External System: 'LobSystem (External System) returned authentication error.'".
  
    
    
To fix this, you will need to add single sign-on to the app to provide authentication credentials to BCS and the SAP backend.
  
    
    

## Add single sign-on security to the app
<a name="bkmk_AddSSO"> </a>

Duet Enterprise Single Sign-On will allow users to be authenticated so that they can access resources on both the SharePoint and SAP sides with one sign in.
  
    
    

### To add single sign-on:


1. Create an OData connection by executing the following command on the SharePoint Management Shell.
    
```XML
  
New-SPODataConnectionSetting -Name SAPWorkflow
-ServiceContext "http://localhost" -ExtensionProvider 
"OBA.Server.Canary.ObaOdataServerExtensionProvider, OBA.Server.SSOProvider, 
Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" 
-AuthenticationMode passthrough -ServiceAddressURL 
"https://<<DUETGATEWAY>>:<<PORT>>/sap/opu/odata/IWWRK/
DUET_WORKFLOW_CORE;mo;c=SHAREPOINT_DE"

```

2. Double click on **WorkflowTaskCollection.ect**.
    
  
3. In the Properties window, update the value of  `ODataConnectionSettingId` to *SAPWorkflow*  .
    
  
4. Allow the App to use the Connection.
    
  
5. Open the **AppManifest.xml**.
    
  
6. In **Permission Requests**, select **Scope**, **BCS** then **Permission** = Read.
    
  
7. Press **F5** to deploy the app.
    
  
8. On the **Permissions** page for the app, select the OData connection this app will use.
    
  
9. Choose the **Trust It** button.
    
  
10. Navigate to **../Lists/WorkflowTaskCollection**. You should see the SAP tasks assigned to you coming directly from the SAP system.
    
  

## Access workflow tasks and associated items using JSOM
<a name="bkmk_UseJSOM"> </a>

Since SharePoint Add-ins must use client code to communicate with SharePoint, the following will demonstrate how to interact with the SAP workflow tasks using the JavaScript object model.
  
    
    

### To create the code:


1. Right-click the **Pages** folder in the **Solution Explorer**, add a .NET page and name it **ViewDetails.aspx**
    
  
2. Paste the following HTML in the  `PlaceHolderAdditionalPageHead` section. This will set the style sheet reference, load the script and then return the related workflow tasks from SAP.
    
```XML
  
<link
    rel="Stylesheet" 
    type="text/css"
    href="../Content/App.css"/>

<script 
    src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js" 
    type="text/javascript">
</script>
<script 
    src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js" 
    type="text/javascript">
</script>      
<script 
    src="../Scripts/ViewDetails.js" 
    type="text/javascript">
</script>

```

3. Right-click the **Scripts** folder and add a JavaScript file. Name it **ViewDetails.js**.
    
  
4. This markup will do the following:
    
  - Retrieves the  `ClientContext` for the parent web.
    
  
  - Retrieves the  `TaskInstanceParentId` for the selected workflow task using the Duet workflow list GUID and the selected item ID.
    
  
  - Parses the  `TaskInstanceParentId` to get SAP Origin and the ID for the workflow in SAP.
    
  
  - Loads the entities for the external content types.
    
  
  - Reads the specific workflow task from SAP using specific finder by passing SAP Origin and the workflow task ID for SAP as parameters.
    
  
  - Reads the associated elements for the workflow task from SAP.
    
  
5. The following is the complete HTML and JavaScript for the page.
    
```
  
// This code runs when the DOM is ready. It ensures the SharePoint
// script files are loaded and then executes execOperation().
$(document).ready(function () {
  SP.SOD.executeFunc("sp.js", "SP.ClientContext", execOperation);
});

function execOperation() {
  retrieveTaskFromList();
}

function retrieveTaskFromList() {
  // Retrieves the ClientContext of the parent web.
  var clientContext = 
  new SP.ClientContext.get_current();
  var appContextSite = 
  new SP.AppContextSite(clientContext, 
      decodeURIComponent(getQueryStringParameter("SPHostUrl")));
  var web = appContextSite.get_web();
  // Loads the selected workflow task from the duet workflow list.
  var listGuid = decodeURIComponent(getQueryStringParameter("ListId"));
  var itemId = decodeURIComponent(getQueryStringParameter("ItemId"))
  this.workflowItem = web.get_lists().getById(
      listGuid.substring(1, listGuid.length - 1)).getItemById(itemId);
  clientContext.load(workflowItem);

  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.onLoadingTaskSucceeded),
    Function.createDelegate(this, this.onError)
  );
}

function onLoadingTaskSucceeded() {
  var sapParameters = parseParentTaskId(workflowItem.
      get_item("TaskInstanceParentId"));
  getDataFromSAP(sapParameters);
}

// Parses the TaskInstanceParentId 
// to get SAP Origin and the id for the workflow in SAP.
function parseParentTaskId(parentTaskId) {
  var idlength = parseInt(parentTaskId.substring(0, 2));
  var sapParameters = new Object();
  if (parentTaskId.length > (17 + idlength)) {
    sapParameters.workitemId = parentTaskId.substring(5, 5 + idlength);
    sapParameters.sapOrigin = parentTaskId.substring(17 + idlength);
  }
  return sapParameters;
}
    
// Retrieves the workflow task and associated elements from SAP.
function getDataFromSAP(sapParameters) {
  context = new SP.ClientContext.get_current();
  //Loads the entities for the external content types.
  wfEntity = context.get_web().getAppBdcCatalog().
      getEntity("DUET_WORKFLOW_CORE", "WorkflowTaskCollection");
  context.load(wfEntity);
  wfExtensibleElementEntity = context.get_web().getAppBdcCatalog().
      getEntity("DUET_WORKFLOW_CORE", "ExtensibleElementCollection");
  context.load(wfExtensibleElementEntity);
  wfCommentsEntity = context.get_web().getAppBdcCatalog().
      getEntity("DUET_WORKFLOW_CORE", "CommentCollection");
  context.load(wfCommentsEntity);
  wfDecisionsEntity = context.get_web().getAppBdcCatalog().
      getEntity("DUET_WORKFLOW_CORE", "DecisionOptionCollection");
  context.load(wfDecisionsEntity);
  wfParticipantEntity = context.get_web().getAppBdcCatalog().
      getEntity("DUET_WORKFLOW_CORE", "ParticipantCollection");
  context.load(wfParticipantEntity);
  wfDescriptionEntity = context.get_web().getAppBdcCatalog().
      getEntity("DUET_WORKFLOW_CORE", "TaskDescriptionCollection");
  context.load(wfDescriptionEntity);
  wfAttachmentEntity = context.get_web().getAppBdcCatalog().
      getEntity("DUET_WORKFLOW_CORE", "AttachmentCollection");
  context.load(wfAttachmentEntity);

  // Loads a LOB system instances.
  lobSystem = wfEntity.getLobSystem();
  lobSystemInstanceCollection = lobSystem.getLobSystemInstances();
  context.load(lobSystemInstanceCollection);

  context.executeQueryAsync(onLoadingLOBInstanceSucceeded, onError);

  function onLoadingLOBInstanceSucceeded() {
    lobSystemInstance = lobSystemInstanceCollection.get_item(0);
    // Reads the workflow task from SAP using specific finder.
    var identifierValues = [sapParameters.sapOrigin, sapParameters.workitemId];
    var entityIdentity = SP.BusinessData.Runtime.EntityIdentity.
          newObject(context, identifierValues);
    wfEntityInstance = wfEntity.findSpecific(entityIdentity, 
          "ReadSpecificWorkflowTask", lobSystemInstance);
    context.load(wfEntityInstance);

    context.executeQueryAsync(onLoadingWorkflowSucceeded, onError);
  }

  function onLoadingWorkflowSucceeded() {
    // Reads the associated elements for the workflow task.
    var exFilterCollection = wfExtensibleElementEntity.getFilters(
        "GetExtensibleElementsFromWorkflowTaskCollection");
    context.load(exFilterCollection);
    exElementsCollection = wfExtensibleElementEntity.findAssociated(
        wfEntityInstance, "GetExtensibleElementsFromWorkflowTaskCollection", 
        exFilterCollection, lobSystemInstance);
    context.load(exElementsCollection);

    var comFilterCollection = wfCommentsEntity.getFilters(
        "GetCommentsFromWorkflowTaskCollection");
    context.load(comFilterCollection);
    commentsCollection = wfCommentsEntity.findAssociated(
        wfEntityInstance, "GetCommentsFromWorkflowTaskCollection", 
        comFilterCollection, lobSystemInstance);
    context.load(commentsCollection);

    var decFilterCollection = wfDecisionsEntity.getFilters(
        "GetDecisionOptionsFromWorkflowTaskCollection");
    context.load(decFilterCollection);
    decisionsCollection = wfDecisionsEntity.findAssociated(
        wfEntityInstance, "GetDecisionOptionsFromWorkflowTaskCollection", 
        decFilterCollection, lobSystemInstance);
    context.load(decisionsCollection);

    var partFilterCollection = wfParticipantEntity.getFilters(
        "GetParticipantsFromWorkflowTaskCollection");
    context.load(partFilterCollection);
    participantsCollection = wfParticipantEntity.findAssociated(
        wfEntityInstance, "GetParticipantsFromWorkflowTaskCollection", 
        partFilterCollection, lobSystemInstance);
    context.load(participantsCollection);

    var descFilterCollection = wfDescriptionEntity.getFilters(
        "GetDescriptionFromWorkflowTaskCollection");
    context.load(descFilterCollection);
    descriptionCollection = wfDescriptionEntity.findAssociated(
        wfEntityInstance, "GetDescriptionFromWorkflowTaskCollection", 
        descFilterCollection, lobSystemInstance);
    context.load(descriptionCollection);

    var attaFilterCollection = wfAttachmentEntity.getFilters(
        "GetAttachmentsFromWorkflowTaskCollection");
    context.load(attaFilterCollection);
    attachmentCollection = wfAttachmentEntity.findAssociated(
        wfEntityInstance, "GetAttachmentsFromWorkflowTaskCollection", 
        attaFilterCollection, lobSystemInstance);
    context.load(attachmentCollection);

    context.executeQueryAsync(getUpdatedDataSucceeded, onError);
  }

  function getUpdatedDataSucceeded() {
    alert("# of extensible elements: " + exElementsCollection.get_count() + 
      "\\n# of comments: " + commentsCollection.get_count() + 
      "\\n# of decision options: " + decisionsCollection.get_count() + 
      "\\n# of attachments: " + attachmentCollection.get_count() + 
      "\\n# of participants: " + participantsCollection.get_count());
  }

  function onError(sender, e) {
    alert("Request failed. " + e.get_message() +
          "\\n" + e.get_stackTrace());
  }
}

// Retrieves a query string value.
function getQueryStringParameter(paramToRetrieve) {
  var params = document.URL.split("")[1].split("&amp;");
  var strParams = "";
  for (var i = 0; i < params.length; i = i + 1) {
    var singleParam = params[i].split("=");
    if (singleParam[0] == paramToRetrieve)
      return singleParam[1];
  }
}

```

6. Open the **AppManifest.xml** file.
    
  
7. In **Permission Requests**, select **Scope**, **Web and Permission** and set the value to *Read*  .
    
  
8. Press **F5** to deploy the solution to the duet workflow site.
    
  
9. Go to **My Workflow Tasks**. Select **View Details** in the ECB menu or select a task and press **View Details** in the ribbon. You will be redirected to **ViewDetails.aspx** where you will see an alert containing the count for some of the elements associated to the workflow.
    
  

## Using HTML and JavaScript to render Custom UI
<a name="bkmk_UseJSOM"> </a>

In ViewDetails.aspx, replace the following code with your own HTML and JavaScript to render your own custom UI.
  
    
    

```

alert("# of extensible elements: " + exElementsCollection.get_count() +
"\\n# of comments: " + commentsCollection.get_count() + 
"\\n# of decision options: " + decisionsCollection.get_count() + 
"\\n# of attachments: " + attachmentCollection.get_count() + 
"\\n# of participants: " + participantsCollection.get_count());

```


## Adding Lync Control to your details page
<a name="bkmk_UseJSOM"> </a>

Here is one option for your custom user interface. Adding a Lync control will give you the ability to communicate with your Lync contacts from the custom page.
  
    
    

### To add a Lync control:


1. Right-click the **Scripts** folder in solution explorer, add a JavaScript file and name it **People.js**.
    
  
2. The following markup will:
    
  - Add presence control for the participants of the task.
    
  
  - Lync integration in callout for participants for one-click collaboration for the task.
    
  

    Paste the following code into the **People.js** page.
    


```
  
var presenceControlCount = 0;
var appWebURL = '';

function AddPeopleControl(userName) {
  var id = "pc_participants_" + presenceControlCount++;
  var prevId = null;

  return "<div id='" + id + "' ></div>" + 
    "<script>" + 
      "LoadPeopleControl('" +id+ "', '" +prevId+ "', '" +userName+ "');" + 
    "</script>";
}

function LoadPeopleControl(elemId, prevId, user) {
  var prevElement = null;
  var element = $("#" + elemId);
  user = "fareast\\\\" + user.toLowerCase();

  GetUsersInfo(user, element, prevElement);
}

function GetUsersInfo(accountName, htmlElement, waitforElement) {
  var clientContext = SP.ClientContext.get_current();
  var website = clientContext.get_web();

  clientContext.load(website);
  clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);

  function onRequestSucceeded() {
    appWebURL = website.get_url();
    var queryURL = appWebURL + 
    "/_api/SP.UserProfiles.PeopleManager/GetPropertiesFor(accountName=@v)?@v='"
     + accountName + "'";

    jQuery.ajax({
      url: queryURL,
      type: "GET",
      headers: {
        "ACCEPT": "application/json;odata=verbose"
      },
      success: function (data) {
        var html = [];
        var i = 0;

        var id = htmlElement[0].id + "_";

        var about_info;

        if (data.d.UserProfileProperties != null) {
          for (i = 0; i < data.d.UserProfileProperties.results.length; i++) {
            if (data.d.UserProfileProperties.results[i].Key == "AboutMe") {
              about_info = data.d.UserProfileProperties.results[i].Value;
            }
          }
        }

        var email = data.d.Email;
        var profileUrl = data.d.UserUrl;
        var pictureUrl = data.d.PictureUrl;
        var name = data.d.DisplayName;

        if (name == null) {
          name = accountName;
        }

        var isFollowed = data.d.IsFollowed;

        var html = [
          "<table>",
          "<tr>",
          "<td>",
            "<span class='ms-spimn-presenceWrapper ms-spimn-imgSize-5x48'> ",
              "<img id='imn_" + id + "_" + i++ + ",type=smtp'" ,
                "onload=\\"IMNRC('", email, "')\\" ",
                "class='ms-spimn-img ms-spimn-presence-offline-5x48x32 '", 
                "title='' name='imnmark' alt='Offline' ", 
                "src='/_layouts/15/images/spimn.png' ", 
                "sip='" + email + "' showofflinepawn='1'>",
            "</span>",
          "</td>",
          "<td>",
            "<span class='ms-imnSpan'>",
              "<a class='ms-imnlink' tabindex='-1'", 
                "onclick='IMNImageOnClick(event);return false;' href='#'>",
                "<img id='imn_" + id + "_" + i++ + ",type=smtp'",
                  "onload=\\"IMNRC('", email, "')\\"",
                  "class=' ms-hide' title='' name='imnmark' alt='Away' ",
                  "src='/_layouts/15/images/spimn.png' ",
                  "sip='" + email + "' showofflinepawn='1'>",
              "</a>",
              "<a class='ms-subtleLink ms-peopleux-imgUserLink' ",
                "onclick='GoToLinkOrDialogNewWindow(this);return false;' ",
                "href='" + profileUrl + "'>",
                "<span style='width: 48px; height: 48px;'" ,
                  "class='ms-peopleux-userImgWrapper'>",
                "<img style='cliptop: 0px; clipright: 48px;" ,
                  "clipbottom: 48px; clipleft: 0px; ",
                  "min-height: 48px; min-width: 48px; max-width: 48px;' ",
                  "class='ms-peopleux-userImg' alt='' src='" +pictureUrl+ "'>",
                "</span>",
              "</a>",
            "</span>",
          "</td>",
          "<td>",
            "<span class='ms-spimn-presenceWrapper ms-spimn-imgSize-5x48'>",
            "<img id='imn_" + id + "_" + i++ + ",type=smtp' ",
              "onload=\\"IMNRC('", email, "')\\" ",
              "class='ms-spimn-img ms-spimn-presence-offline-5x48x32' ",
              "title='' name='imnmark' alt='Offline' ",
              "src='/_layouts/15/images/spimn.png' ",
              "sip='" + email + "' showofflinepawn='1'>",
            "</span>",
          "</td>",
          "<td>",
            "<span class='ms-microfeed-userName ms-textLarge' ",
              "style='font-size: medium;'>" + name + "<br/>",
              "<div id='people_callout_" + id + "_" + i + "' ",
                "class='ms-microfeed-button ms-textSmall" + 
                "ms-secondaryCommandLink ms-microfeed-footerButton' ",
                "align='center' ",
                "style='cursor:pointer; font-size:small;' > more... </div>",
                  "<script>",
                    "RegisterCallOut(\\"people_callout_" + id + "_" + i + 
                      "\\",\\"" + name + "\\",\\"" + encodeURI(about_info) + 
                      "\\",\\"" + profileUrl + "\\",\\"" + isFollowed + "\\");",
                  "</script>",
            "</span>",
          "</td>",
          "</tr>",
          "</table>",
        ];

        htmlElement.html(html.join(''));
      }

    });
  }
  function onRequestFailed(sender, args) {
    alert('Error: ' + args.get_message());
  }

}

function RegisterCallOut(divId, displayName, aboutme, userUrl, isFollowed) {
  if (typeof CalloutManager !== "object" || typeof Callout !== "function" || typeof CalloutAction !== "function")
    return;

  var launchdiv = document.getElementById(divId);
  var calloutId = divId + "_callout";
  var html = [];

  html.push("<br/>");

  if (aboutme == "") {
    html.push("No Information Found about this person.");
  }
  else {
    html.push(decodeURI(aboutme));
  }

  html.push("<hr/>");

  if (isFollowed == true) {
    html.push("<div>You are <b>following</b> this person</div>");
  }
  else {
    html.push("<div >You are <b>not following</b> this person</div>");
  }

  var callout = CalloutManager.createNew({
    launchPoint: launchdiv,
    openOptions: {
      closeCalloutOnBlur: true,
      event: "click",
      showCloseButton: true
    },
    ID: calloutId,
    title: displayName,
    content: html.join("")
  });

  callout.addAction(new CalloutAction({
    text: "View Profile", onClickCallback: 
    function (calloutActionClickEvent, calloutAction) {
      window.open(userUrl);
    }
  }));
}

```


    > **Note:**
      > The user name of the participant in company's network is same as that in SAP. 
3. Open the **AppManifest.xml** page.
    
  
4. In **Permission Requests**, select **Scope**, **User Profiles and Permission** and set its value to *Read*  .
    
  
5. Copy the following markup and paste it in the  `PlaceHolderAdditionalPageHead` section in **ViewDetails.aspx**.
    
```HTML
  
<script src="../Scripts/People.js" type="text/javascript"></script>
```

6. To add the presence control for a participant, call the following: 
    
```
  AddPeopleControl(userName);
```


## Additional resources
<a name="bk_addresources"> </a>


-  [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx)
    
  
-  [Complete basic operations using SharePoint client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394%28Office.15%29.aspx)
    
  
-  [An introduction to SAP Business Workflow](http://scn.sap.com/docs/DOC-31056)
    
  

