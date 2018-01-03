---
title: Build a complete SharePoint site design using the PnP provisioning engine
description: Build a complete SharePoint site design using the PnP provisioning engine
ms.date: 12/14/2017
---

# Calling the PnP provisioning engine from a site script

> [!NOTE]
> Site designs and site scripts are currently in preview and are subject to change. They are not currently supported for use in production environments.

You can create a site design that applies a PnP provisioning template to a site. Site designs offer a great way to standardize the look and feel of your site collections, but you can't use them to do some things, like add a footer to every page. You can use the PnP provisioning engine to create a template that you can use to provision an application customizer to a site. This application customizer can then register a footer on every page. 

This article describes how to create a site design that applies a PnP provisioning template to a site. The template will add an application customizer to render a footer.

The steps in this article use the following components:

1. A site design and a site script
1. Microsoft Flow
1. Azure Queue storage
1. An Azure Function
1. A SharePoint Framework (SPFx) solution
1. A PnP provisioning template
1. A PnP PowerShell script
1. An app ID and app secret with administrative rights on your tenant

You'll use these components to trigger the PnP provisioning code after the site is created and the site design is applied.

## Set up app-only access to your tenant

To set up app-only access, you need to have two different pages on your tenant - one on the regular site, and the other on your SharePoint administration site.

1. Go to following URL in your tenant: https://[yourtenant].sharepoint.com/_layouts/appregnew.aspx (you can go to any site, but for now pick the root site).
1. Choose the **Generate** button next to the **Client Id** and **Client Secret** fields.
1. Enter a title for your app, such as "Site Provisioning".
1. In the **App Domain** box, enter **localhost**.
1. In the **Redirect URI** box, enter **https://localhost**.

    ![Create app page, showing the Client Id, Client Secret, Title, App Domain, and Redirect URI fields](images/pnpprovisioning-createapponly.png)

1. Choose **Create**. 
1. Copy the values for **Client Id** and **Client Secret** - you will need them later.

Next, trust the app, so that it has the appropriate access to your tenant:

1. Go to https://[yourtenant]-admin.sharepoint.com/_layouts/appinv.aspx (notice the -admin in the URL).
1. In the **App Id** field, paste the **Client ID** that you copied, and choose **Lookup**.
1. In the **Permission Request XML** field, paste the following XML:

    ```xml
    <AppPermissionRequests AllowAppOnlyPolicy="true" >
        <AppPermissionRequest Scope="http://sharepoint/content/tenant" Right="FullControl" />
    </AppPermissionRequests>
    ```

1. Choose **Create**.
1. To confirm that you want to trust this app, choose **Trust It**.


## Create the Azure Queue storage

In this section, you will use Azure Queue storage to receive messages from Microsoft Flow. Every time a message shows up in the Queue storage, an Azure function is triggered to run a PowerShell script. 

To set up the Azure Queue storage:

1. Go to the Azure portal at https://portal.azure.com and sign in.
1. Choose **+ New**.
1. From the Azure Marketplace listings, select **Storage**, and in the Featured column, choose **Storage account - blob, file, table, queue**.
1. Provide values for the required fields. Select **Pin to dashboard**, and choose **Create**. It can take a few minutes for the storage account to be created.
1. Open the storage account and go to **Queues**.
1. Choose **+ Queue** at the top of the screen.
1. Enter **pnpprovisioningqueue** for the name, or enter your own value; be sure to follow the naming standard. Make note of the queue name; you will need this value when you create the Azure Function.
1. Go to **Access Keys** and note the **Storage Account Name** and the **key1 Key value**. You will need these values when you create the flow.


## Create the flow

To put a message in the queue, you need to create a flow. 

1. Go to **https://flow.microsoft.com**, sign in, and choose **Create from Blank** at the top of the page.
1. Choose **Search hundreds of connectors and triggers** to select your trigger.
1. Search for **Request**, and select **Request - When a HTTP Request is received**.
1. Enter the following JSON as your request body:

    ```json
    {
        "type": "object",
        "properties": {
            "webUrl": {
                "type": "string"
            },
            "parameters": {
                "type": "object",
                "properties": {
                    "event": {
                        "type": "string"
                    },
                    "product": {
                        "type": "string"
                    }
                }
            }
        }
    }
    ``` 

1. Select **+ New Step** and choose **Add an action**.
1. Search for **Azure Queues** and select **Azure Queues - Put a message on a queue**.
1. Enter a descriptive name for the connection.
1. Enter the storage account name that you copied in the previous section.
1. Enter the storage shared key, which is the value of the **Key1 key value** field of your storage account.
1. Choose **Create**.
1. Select **pnpprovisioningqueue** as the queue name.
1. In the request body, you specified an incoming parameter called *webUrl*. We will put the value of that parameter on the queue. Click in the **message** field and select **webUrl** from the Dynamic Content picker.
1. Click **Save Flow**. This will generate the URL we will copy in the next step.
1. Click on the first step in your flow ('When an HTTP request is received') and copy the URL. We will need that to test and later on in our Site Design.
1. Save your flow.

Your flow should look like this:

![Flow](images/pnpprovisioning-flow-overview.png)

## Test the flow

In order to test your flow you have will have to make a post request. The easiest for that, if you are on a Windows PC, is to use PowerShell:

```powershell
$uri = "[the URI you copied in step 8 when creating the flow]"
$body = "{webUrl:'somesiteurl'}
Invoke-RestMethod -Uri $uri -Method Post -ContentType "application/json" -Body $body
```

If you now navigate to the main screen of your flow you will see a run history. If everything went okay it should say 'Succeeded'.
Now navigate to the queue you just created in Azure and click **Refresh**. There should be an entry showing that you correctly invoked the Flow.

## Provision the SPFX Solution

For this walkthrough we are going to use an existing SPFX solution which is available at https://github.com/SharePoint/sp-dev-fx-extensions/tree/master/samples/react-application-regions-footer

Follow the steps as provided in the README.MD available in that repository to build and provision your solution.

# Create a PnP Provisioning Template

Copy the following XML to a new file and save the file as FlowDemoTemplate.xml

```xml
<?xml version="1.0"?>
<pnp:Provisioning xmlns:pnp="http://schemas.dev.office.com/PnP/2017/05/ProvisioningSchema">
  <pnp:Preferences Generator="OfficeDevPnP.Core, Version=2.20.1711.0, Culture=neutral, PublicKeyToken=3751622786b357c2" />
  <pnp:Templates ID="CONTAINER-FLOWDEMO">
    <pnp:ProvisioningTemplate ID="TEMPLATE-FLOWDEMO" Version="1" BaseSiteTemplate="GROUP#0" Scope="RootSite">
      <pnp:CustomActions>
        <pnp:WebCustomActions>
          <pnp:CustomAction Name="spfx-react-app-customizer" Description="Custom action for Application Customizer" Location="ClientSideExtension.ApplicationCustomizer" Title="spfx-react-app-customizer" Sequence="0" Rights="" RegistrationType="None" ClientSideComponentId="67fd1d01-84e8-4fbf-85bd-4b80768c6080" ClientSideComponentProperties="{&quot;SourceTermSetName&quot;:&quot;Regions&quot;}" />
        </pnp:WebCustomActions>
      </pnp:CustomActions>
    </pnp:ProvisioningTemplate>
</pnp:Provisioning>
```

> [!NOTE]
> The template adds a custom action to the the web it is being applied to. It refers to ClientSideComponentId which is the one coming from the SPFX Solution you provisioned earlier. If you run this demo with your own SPFX Solution you will have to change the ClientSideComponentId and optionally the ClientSideComponentProperties attribute values in the XML.

## Create the Azure Function

1. Navigate to the Azure Portal at https://portal.azure.com.
1. Search for 'Function App' and create a new Function App. In the **Storage** field select **Use existing** and select your previously created storage account. Set the other values as required.
1. After the function app has been created open it and select **Functions**, then select **New function**.

  ![Create a new function](images/pnpprovisioning-create-function.png)

1. From the Language drop-down, select **PowerShell**.
1. Select **QueueTrigger - PowerShell**.
1. Name the function **ApplyPnPProvisioningTemplate** 
1. Enter the name of your queue you created in the previous steps.
1. Select **Create**
1. You will be presented with a Editor where you can enter PowerShell Cmdlets. We will now upload the PnP PowerShell module so we can use it in the Azure function.

## Uploading PnP PowerShell for your Azure Function

We first have to download the PnP PowerShell module so you can easy upload it later.

1. Create a temporary folder somewhere on your computer
1. Launch PowerShell and enter
    ```powershell
    Save-Module -Name SharePointPnPPowerShellOnline -Path [pathtoyourfolder]
    ```
1. The PowerShell module files will be downloaded to a folder inside the folder you just selected. 

Now it is time to upload those files so your Azure Function can make use of the module:

1. Navigate to the main page of your Function App and select **Platform Features**

    ![Navigate to Platform Features](images/pnpprovisioning-platform-features.png)

1. Select **Advanced tools (Kudu)**

    ![Select Advanced Tools (Kudu))](images/pnpprovisioning-select-kudu.png)

1. On the main Kudu page, select **Debug Console** and pick either **CMD** or **PowerShell**
1. In the upper part of the page you see a file explorer. Navigate to **site\wwwroot\\[nameofyourazurefunction]**
1. Create a new folder and call that folder **modules**
    
    ![Create new folder](images/pnpprovisioning-kudu-create-folder.png)

1. In that folder create another folder called **SharePointPnPPowerShellOnline** and navigate to the folder
1. In your File Explorer on your computer navigate to the folder where you downloaded all the PnP PowerShell Module files. Open the 
**SharePointPnPPowerShellOnline\2.20.1711.0** folder (notice that depending on when you follow this walkthrough the version number can be different).
1. Upload all files in that folder by dragging and dropping all the files from this folder into the folder in Kudu.

   ![Create new folder](images/pnpprovisioning-module-files-uploaded.png)

## Finishing the Azure Function

1. Navigate back to your Azure Function and expand the files tab to the right.

    ![View Files](images/pnpprovisioning-view-files.png)

1. Select **Upload** and upload your provisioning template file you created earlier.
1. Replace the PowerShell script with the following

```powershell
$in = Get-Content $triggerInput -Raw
Write-Output "Incoming request for '$in'"
Connect-PnPOnline -AppId $env:SPO_AppId -AppSecret $env:SPO_AppSecret -Url $in
Write-Output "Connected to site"
Apply-PnPProvisioningTemplate -Path D:\home\site\wwwroot\ApplyPnPProvisioningTemplate\FlowDemoTemplate.xml
```

Notice that we are using 2 environment variables, one called ```SPO_AppId```, the other ```SPO_AppSecret```. In order to set those variables navigate to your main Function App page in your Azure Portal, select **Application Settings** and add two new Application Settings:

1. ```SPO_AppId```: set the value to the Client Id you copied in the first step when creating your app on your tenant.
2. ```SPO_AppSecret```: set the value to the Client Secret you copied in the first step when creating your app on your tenant.

## Creating the Site Design

Open PowerShell and make sure you have the Microsoft Office 365 Management Shell installed.

First connect to your tenant using Connect-SPOService:

```powershell
Connect-SPOService -Url https://[yourtenant]-admin.sharepoint.com
```

Now you can retrieve the existing Site Designs using 

```powershell
Get-SPOSiteDesign
```

In order to create a Site Design you first need to create a Site Script. Think of a Site Design as a container which refers to 1 or more Site Scripts.
1. Copy the following JSON code to your clipboard and modify it. Set the url property to the value you copied when creating the flow. The URL looks alike    `https://prod-27.westus.logic.azure.com:443/workflows/ef7434cf0d704dd48ef5fb6...oke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun`

    ```json
    {
        "$schema": "schema.json",
        "actions": [
           {
                "verb": "triggerFlow",
                "url": "[paste the workflow trigger URL here]",
                "name": "Apply Template",
                "parameters": {
                    "event":"",
                    "product":""
                }
           }
        ],
        "bindata": {},
        "version": 1
    }
    ```

1. After modifying the JSON by inserting the correct URL to trigger your flow, select it all and copy it again to your clipboard
1. Open PowerShell and enter the following to copy the script into a variable and create the site script

    ```powershell
    $script = Get-Clipboard -Raw
    Add-SPOSiteScript -Title "Apply PnP Provisioning Template" -Content $script
    Get-SPOSiteScript
    ```

1. You should be presented with a list of one or more site scripts, including the site script you just created
1. Select the ID of the Site Script you just created and copy it to the clipboard
1. Create the Site Design:

    ```powershell
    Add-SPOSiteDesign -Title "Site with footer" -SiteScripts [Paste the ID of the Site Script here] -WebTemplate "64"
    ```

The Add-SPOSiteDesign will associate the site design with the Team Site. If you want to associate the design with a Communication Site use "68".

## Conclusion

After you created your Storage Queue, you created the app Id for the app only access, you correctly created the Azure Function, you created the Site Design and triggered the correct Microsoft Flow from the Site Design, you are all good to go. 

Try creating a new site by navigating to your SharePoint Tenant. Select **SharePoint**, select **Create Site**, Select **Team Site**. Your newly created Site Design should show up as a possible design option. Create your site and notice the Site Design being applied after the site has been created. If you configured it all correctly you should see your flow being triggered. You can check the Run History of the flow if it was executed correctly. As it can take a bit before the PnP Provisioning Template has been applied, it can be that the footer does not show up immediately. Give it a minute and reload your site to check again.


