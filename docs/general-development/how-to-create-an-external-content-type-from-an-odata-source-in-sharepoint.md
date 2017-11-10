---
title: Create an external content type from an OData source in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: bc60ea49-c44e-4531-af62-06b8cf77d35d
---


# Create an external content type from an OData source in SharePoint

Learn how to use Visual Studio 2012 to discover a published OData source and create a reusable external content type for use in Business Connectivity Services (BCS) in SharePoint.

## Prerequisites for creating OData-based external content types
<a name="bkmk_Prerequisites"> </a>

To create an external content type from an Open Data protocol (OData) source, you will need the following:
  
    
    

- An instance of SharePoint
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
- A published OData service available through the Internet
    
  
For information about how to set up your SharePoint development environment, see  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

> **Note:**
> SharePoint Designer 2013 can't be used to autogenerate BDC models from an OData source. You can use Visual Studio 2012 instead. 
  
    
    


### Core concepts for working with OData external content types

The following articles provide background information about OData and the OData connector in SharePoint.
  
    
    

**Table 1. Core concepts for OData external content types**


|**Article title**|**Description**|
|:-----|:-----|
| [Using OData sources with Business Connectivity Services in SharePoint](using-odata-sources-with-business-connectivity-services-in-sharepoint.md) <br/> |Get started with creating external content types based on OData sources, and learn how to use that data in SharePoint or Office components.  <br/> |
| [External content types in SharePoint](external-content-types-in-sharepoint.md) <br/> |Learn about BCS external content types and what you need to start creating them in SharePoint.  <br/> |
   

## Create an OData-based external content type
<a name="bkmk_CreatingODataECT"> </a>

The following steps show how to use Visual Studio 2012 to create an external content type based on an OData source.
  
    
    

### To create a new SharePoint Add-in


1. In Visual Studio 2012, create a new **App for SharePoint** project, which is located under the **SharePoint template** node.
    
  
2. Name your project, and choose **OK**.
    
  
3. To specify the SharePoint settings, enter a name for your app, and the URL of the SharePoint server you will be debugging against.
    
  
4. Choose **Finish**.
    
  
After the project is created, you use the new autogeneration tooling for OData sources and add a BDC model for the OData source to your app.
  
    
    

### To add a new BDC model


1. In **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content types for External Data source**.
    
    This starts a wizard that will help you discover the selected data source and create the BDC model.
    
  
2. The first page of the wizard is used to collect the URL of the data service. On the **Specify OData Source** page, enter the URL of the OData service that you want to connect to. The URL should resemble the following: `http://services.odata.org/Northwind/Northwind.svc/`.
    
    > **Note:**
      > You will show the Northwind service that is available from the producers list found on the  [Open Data Protocol website](http://www.odata.org/ecosystem#liveservices). 
3. Choose a name for your OData source, and then choose **Next**.
    
  
4. A list of data entities that are being exposed by the OData Service appears. Select one or more of the entities, and choose **Finish**.
    
  

### To view the structure of the entities


- Notice that Visual Studio created a new folder named External Content Types. Inside that folder, you will find a subfolder with the name of your new data source. If you further expand this, you will see an item that represents the entity you selected. To view a graphical list of the entities and their types, open the **ect** file that you want to view.
    
    You can also view the XML of the entities by opening the ect files in an XML editor.
    
  

## Use a stream accessor for the OData source
<a name="bkmk_UseStreamAccessor"> </a>

Using the following code, you can access a data stream that the OData connector can use.
  
    
    

```cs

/*Invoke  Stream Accessor Method */
        internal void ExecuteStreamAccessorMethod(IEntityInstance entityInstance, string streamAccessorName)
        {
            this.Log.Comment("ExecuteStreamAccessorMethod enter");
            this.Log.Comment("streamAccesor method" + streamAccessorName);
            IStreamableField isf = entityInstance.GetStreamableField(streamAccessorName);
            Stream resStream = isf.GetData();
            using (BinaryReader reader = new BinaryReader(resStream))
            {
                using (FileStream fs = File.Create(@"C:\\" + entityInstance.GetIdentity().GetIdentifierValues()[0] + ".jpg"))
                {
                    int bytesRead = 0;
                    do
                    {
                        int nrBytes = 80 * 1000 * 1000;
                        byte[] streamData = new byte[nrBytes];
                        bytesRead = reader.Read(streamData, 0, nrBytes);
                        this.Log.Comment("Total Bytes Read - " + bytesRead);
                        if (bytesRead > 0)
                        {
                            fs.Write(streamData, 0, bytesRead);
                        }
                    } while (bytesRead > 0);
                }
            }
            isf.Dispose();
            this.Log.Comment("ExecuteStreamAccessorMethod Exit" );
        }
```


## Next steps
<a name="bkmk_Next"> </a>

After you have built an external content type, you can then use it to present data inside SharePoint by using the built-in objects (external lists, Business Data Web Parts, or custom code).
  
    
    
For more information, see  [How to: Create an external list using an OData data source in SharePoint](how-to-create-an-external-list-using-an-odata-data-source-in-sharepoint.md).
  
    
    

## Additional resources
<a name="bkmk_Addres"> </a>


-  [Using OData sources with Business Connectivity Services in SharePoint](using-odata-sources-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [External content types in SharePoint](external-content-types-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  
-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  

