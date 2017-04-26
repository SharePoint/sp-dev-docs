# Hosting client-side web part from Office 365 CDN

This article describes how to host your client-side web part from Office 365 CDN. Office 365 CDN provide you easy solution to host your assets directly from your own Office 365 tenant. It can be used for hosting any static assets, which are used in SharePoint Online. You can find more details around the Office 365 CDN capability from following blog post

* [General avaialbility of Office 365 CDN](https://dev.office.com/blogs/general-availability-of-office-365-cdn)

## Creating a new Web Part project

Make sure you're using the latest version of . Run `yo` and follow the prompts to create a skeleton project,.

Create a new project directory in your favorite location:

```
md sphosted-webpart
```
    
Go to the project directory:

```
cd sphosted-webpart
```

Create a new SharePoint Framework solution by running Yeoman SharePoint Generator:

```
yo @microsoft/sharepoint
```
    
When prompted:

* Accept the default **sphosted-webpart** as your solution name and choose **Enter**.
* Select **Use the current folder** as the location for the files.
* Select **No JavaScript web Framework** as the framework and choose **Enter**.
* Use **HelloWord** for your web part name and choose **Enter**.
* Accept the default **HelloWorld description** and choose **Enter**.

At this point, Yeoman will install the required dependencies and scaffold the solution files. This might take a few minutes. Yeoman will scaffold the project to include your DocumentCardExample web part as well.
	
When the scaffold is complete, in the console, type the following to open the web part project in Visual Studio Code:

```
code .
```



## Additional resources

- links to Wictor's and Elio's projects
