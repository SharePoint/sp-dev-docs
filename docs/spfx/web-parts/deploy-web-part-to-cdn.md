# Deploy your SharePoint client-side web part to a CDN

>**Note:** The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback.  While we’re in preview, SharePoint Framework web parts are not supported for use in production environments.

## Overview

In this tutorial, we will deploy the **HelloWorld** assets to a remote CDN instead of using the local environment. We will use an Azure Storage account integrated with CDN to deploy our assets. SharePoint Framework build tools provide out of the box support for deploying to Azure Storage account. However, you can manually upload the files to your favourite CDN provider or SharePoint as well.

## pre-requisites

As a pre-requisite, you should have completed the following tutorials before you start this tutorial:

* [HelloWorld Web Part](./build-a-hello-world-web-part)
* [HelloWorld, Talking to SharePoint](./connect-to-sharepoint)
* [HelloWorld, Serving in Classic SharePoint Page](./serve-your-web-part-in-a-sharepoint-page)

Each step below will build on the previous so you will need to go through each step one by one to successfully complete this lab.

## Step 1: Configure Azure storage account

1. Configure an Azure storage account and integrate with CDN.

You can follow the instructions in this [article](https://azure.microsoft.com/en-us/documentation/articles/cdn-create-a-storage-account-with-cdn/) along with the detailed steps below on how to create an Azure storage account and integrate with CDN. You will need the following information to complete this tutorials:

### Storage account name

This is the name you used to create your storage account as described in this [article](https://azure.microsoft.com/en-us/documentation/articles/cdn-create-a-storage-account-with-cdn/#step-1-create-a-storage-account).

For example, in the following screenshot, we have used **spfxsamples** as the storage account name.

![Create new storage account](../../../images/deploy-create-storage-account.png)

This will create a new storage account endpoint **spfxsamples.blob.core.windows.net**. 

>**Note:** We have created a storage account with the name "spfxsamples" and are using it in the examples throughout this article series. You will need to create a unique storage name for your SharePoint Framework project.


### BLOB container name

1. Create a new Blob service container. This will be available in your storage account dashboard.

2. Select the **+ Container** and create a new container with the following:

   * Name: **helloworld-webpart**
   * Access type: Container

   ![Option to create blob container](../../../images/deploy-option-blob-container.png)

### Storage account access key

3. In the storage account dashboard, choose **Access Key** in the dashboard and copy one of the access keys.

  ![Storage account access key](../../../images/deploy-storage-account-accesskey.png)

### CDN profile and endpoint

  Now that we have the storage account and the BLOB container created, we will create a new CDN profile and associate the CDN endpoint wit this BLOB container:

4. Create a new CDN profile as described in this [article](https://azure.microsoft.com/en-us/documentation/articles/cdn-create-a-storage-account-with-cdn/#step-2-create-a-new-cdn-profile).

   For example, in the following screenshot, we have used **spfxwebparts** as the CDN profile name:


   ![Create a new CDN profile](../../../images/deploy-create-cdn-profile.png)

5. Create a CDN endpoint as described in this [article](https://azure.microsoft.com/en-us/documentation/articles/cdn-create-a-storage-account-with-cdn/#step-3-create-a-new-cdn-endpoint)

   For example, in the following screenshot, we have used **spfxsamples** as the endpoint name, origin type as **Storage** and selected the previously created **spfxsamples.blob.core.windows.net** storage account:

   ![Create CDN endpoint](../../../images/deploy-create-cdn-endpoint.png)

   The CDN endpoint will be created with the following URL: `http://spfxsamples.azureedge.net`

   Since we associated the CDN endpoint with our storage account, you can also access the BLOB container by the following URL:`http://spfxsamples.azureedge.net/helloworld-webpart/`

   However, we have not yet deployed the files.

## Step 2: Project directory

1. Switch to console and make sure you are still in the project directory used in the first three articles.

2. Terminate the **gulp serve** task by pressing **Ctrl+C** and navigate to your project directory:

```
cd helloworld-webpart
```

## Step 3: Configure Azure Storage account details

1. Switch to Visual Studio Code and navigate to **HelloWorld** web part project.

2. Open **deploy-azure-storage.json** in the **config** folder.

   This is the file that contains your Azure Storage account details.

   ```json
   {
     "workingDir": "./temp/deploy/",
     "account": "<!-- STORAGE ACCOUNT NAME -->",
     "container": "helloworld-webpart",
     "accessKey": "<!-- ACCESS KEY -->"
   }
   ```
3. Replace the **account**, **container**, **accessKey** with your storage account name, BLOB container and storage account access key respectively.

  **workingDir** is the directory where the web part assets will be located.

  In our example, with the storage account created earlier, this file will look like:

  ```json
  {
    "workingDir": "./temp/deploy/",
    "account": "spfxsamples",
    "container": "helloworld-webpart",
    "accessKey": "q1UsGWocj+CnlLuv9ZpriOCj46ikgBvDBCaQ0FfE8+qKVbDTVSbRGj41avlG73rynbvKizZpIKK9XpnpA=="
  }
  ```

4. Save the file.

## Step 4: Prepare web part assets to deploy

Before uploading the assets to CDN, we first need to build them.

1. Switch to the console and execute the following `gulp` task:

  ```
  gulp --ship
  ```

  This will build the minified assets required to upload to the CDN provider. The `--ship` indicates the build tool to build for distribution. You should also notice the output of the build tools indicate the Build Target is SHIP.

  ```
  Build target: SHIP
  [21:23:01] Using gulpfile ~/apps/helloworld-webpart/gulpfile.js
  [21:23:01] Starting gulp
  [21:23:01] Starting 'default'...
  ```

The minified assets can be found under the `temp\deploy` directory.

## Step 5: Deploy assets to Azure Storage

1. Switch to the console of the `HelloWorld` project directory.

2. Enter the gulp task to deploy the assets to your storage account:

  ```
  gulp deploy-azure-storage
  ```

  This will deploy the web part bundle along with other assets like JavaScript, CSS files etc., to CDN.

### Configuring web part to load from CDN

In order for the web part to load from your CDN, you will need to tell it your CDN path.

1. Switch to Visual Studio Code and open the **write-manifests.json** from the **config** folder.

2. Enter your CDN base path for the **cdnBasePath** property.

  ```json
  {
    "cdnBasePath": "<!-- PATH TO CDN -->"
  }
  ```

  In our example, with the CDN profile created earlier, this file will look like:

  ```json
  {
    "cdnBasePath": "http://spfxsamples.azureedge.net/helloworld-webpart/"
  }
  ```

  >**Note:** The CDN base path is the CDN endpoint with the BLOB container.

3. Save the file.

## Step 6: Deploy the updated package

### Package solution

Since we have changed the web part bundle, we will need to re-deploy the package to the App Catalog. We used **--ship** to generate minified assets for distribution.

1. Switch to the console of the `HelloWorld` project directory.

2. Enter the gulp task to package the client-side solution. This time with the `--ship` flag set. This forces the task to pick up the CDN base path configured in the previous step:

  ```
  gulp bundle --ship
  gulp package-solution --ship
  ```

> **Note:** "gulp bundle --ship" is a temporary fix needed with Developer Preview to ensure that files are rebuilt properly for packaging.

This will create the updated client-side solution package in the `sharepoint\solution` folder.

### Upload to App Catalog

1. Upload or drag & drop the client-side solution package to the App Catalog.

  Since we already had deployed the package, you will be prompted asking whether to replace the existing package.

  ![Replace client-side solution package](../../../images/sp-app-replace-pkg.png)

2. Choose **Replace It**.

App Catalog will now have the latest client-side solution package where the web part bundle is loaded from the CDN.

This will update all the instances of our `HelloWorld` web part in SharePoint to now fetch the resources from CDN.

## Step 7: Test the HelloWorld web part

### Classic SharePoint Page

1. Navigate to the **HelloWorld** web part page we created in the previous article:

Your **HelloWorld** web part will now load the web part bundle and other assets from CDN.

Notice you are no longer running **gulp serve** and hence nothing is served from **localhost**.

## Deploying to other CDNs

In order to deploy the assets to your favorite CDN provider, you can copy the files from **tmp\deploy** folder. To generate assets for distribution you will run the following gulp command as we did before with the **--ship** parameter:

```
gulp --ship
```

## Next steps

In the next article: [Add jQueryUI Accordion to your client-side web part](./add-jqueryui-accordion-to-web-part), we will see how to load jQuery, jQuery UI and build a jQuery Accordion web part.