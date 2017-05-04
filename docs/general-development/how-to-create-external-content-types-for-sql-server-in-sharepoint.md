---
title: How to Create external content types for SQL Server in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 7fe2fbf0-546b-4a16-b02e-a0960bfb3842
---


# How to: Create external content types for SQL Server in SharePoint
Learn how to create an external content type for SQL Server in SharePoint.
Creating an external content type is a pivotal task when you are working with external data. An external content type contains important information about connections, access, methods of operation, columns, filters, and other metadata that is used to retrieve the data from the external data source.
  
    
    


## Before you begin
<a name="section1"> </a>

Working with external data requires several prerequisite tasks to enable secure access to the data. The following information can help you plan your next steps. Also, if you have problems trying to work with external data, this information can help you identify the issue. To access external data, you or an administrator must do the following:
  
    
    
 **Prepare SQL Server** A database administrator needs to provide permissions to make sure that that the right people have access to the data and that the data does not end up in the wrong hands. The database administrator must also create a SQL Server account that has db_owner permission. The database administrator might also want to create specific tables, views, queries, column aliases, and so on to limit the results to just what is needed and to help improve performance.
  
    
    
 **Configure SharePoint services** An administrator must activate Business Connectivity Services (BCS) and the Secure Store Service.
  
    
    
 **Configure the Secure Store service** An administrator must determine the best access mode for the external data source, create a target application, and set the credentials for the target application.
  
    
    
 **Configure Business Data Connectivity Services** An administrator must make sure that the user who creates the external content type has permission to the Business Data Connectivity (BDC) metadata store and that appropriate users have access to the external content type on which the external list is based.
  
    
    
 **Be sure Office 2013 is ready to use** To synchronize external data with Office 2013 products, you must use Windows 7 or a later version, and make sure that the Office installation option for Business Connectivity Services (BCS) is enabled (this is the default). This option installs the Business Connectivity Services Client Runtime which does the following: caches and synchronizes with external data, maps business data to external content types, displays the external item picker in Office products, and runs custom solutions inside Office products. You must also have SQL Server Compact 4.0, .NET Framework 4, and WCF Data Services 5.0 for OData V3 on each client computer (If necessary, you are automatically prompted to download the software).
  
    
    

## Define general information
<a name="section2"> </a>


1. Start Microsoft SharePoint Designer 2013.
    
  
2. Click **Open Site**, and then enter the appropriate site name.
    
  
3. In the **Navigation** pane, under **Site Objects**, select **External Content Types**.
    
    > **Note:**
      > SharePoint Designer 2013 groups external content types by the namespace in the initial window of the External Content Type Designer. 
4. To open the External Content Type Designer, on the ribbon, click **External Content Type**.
    
  
5. On the **New External Content Type** page, do the following:
    
  - Next to **Name**, click **New external content type**, and then enter a unique name for the external content type.
    
  
  - Next to **Display Name**, enter a different name if you want a more descriptive display name.
    
  

## Define general and Office behaviors
<a name="section3"> </a>


1. In the **Office Item Type** drop-down list, select one of the following:
    
  - **Generic List** Select this option for any type of list.
    
  
  - **Appointment, Contact, Task, or Post** Select this option if you are creating a list that behaves like an Outlook Contact, Task, Appointment, or Post item. The Office item type that you select here determines the Outlook behavior that you want to attach to the external content type. For example, a Customer external content type behaves as a native Contact Item in Outlook.
    
  
2. In the **Offline Sync for External List** check box, make sure **Enabled** is selected, which is the default.
    
    > **Note:**
      > If you disable this option, then the **SharePoint Connect to Outlook** command is not available for an external list.

> **Note:**
> The Farm and Site feature, **Offline Synchronization for External Lists**, must also be active. This feature is active by default at the Farm level, but not active by default at the site level. 
  
    
    


## Create a connection to the external data
<a name="section4"> </a>


1. To specify the SQL Server database for the external content type, click **Click here to discover external data sources and define operations**.
    
  
2. Click **Add Connection**, select **SQL Server** in **the External Data Source Type Selection** dialog box, and then click **OK**.
    
  
3. In the **SQL Server Connection** dialog box, enter the name of the server, the database name, an optional description, and then click **OK**.
    
  
4. To choose an authentication mode, select one of the following:
    
  - **Connect with User's Identity** Uses the Pass-through authentication mode.
    
  
  - **Connect with Impersonated Windows Identity** Uses the WindowsCredentials authentication mode.
    
  
  - **Connect with Impersonated Custom Identity** Uses the RDBCredentials authentication mode.
    
  
5. In the **Secure Store Application ID** box, enter the target application ID name created in the Secure Store Service.
    
  
6. Click **OK**.
    
  
SharePoint Designer 2013 validates and tests the connection information. If you see messages, you must resolve them before you continue.
  
    
    

## Select a table, view, or routine
<a name="section5"> </a>


1. In the Data Source Explorer, expand the database to view the tables, views, and routines that it contains.
    
  
2. Select a table, view, or routine.
    
  

## Define operations
<a name="section6"> </a>


1. In the Data Source Explorer, right-click the table, view, or routine, and then select one of the following:
    
  - **Create All Operations** Defines a create item, delete item, read item, read list, and update item operation.
    
    > **Note:**
      > **Create All Operations** is available only for tables and views. Routines require specific operations.
  - **New Read Item Operation** Defines a read item operation.
    
  
  - **New Read List Operation** Defines a read list operation.
    
  
  - **New Update Operation** Defines an update item operation.
    
  
  - **New Delete Read** Defines a delete item operation.
    
  
  - **Refresh** Refreshes the list of tables, views, and routines in the Data Source Explorer.
    
  
2. Click **Next**.
    
  
 **Notes**
  
    
    

- On views that span multiple tables, make sure that that write operations are supported. Otherwise, **Create All Operations** or **New Update Operation** might fail.
    
  
- Always define at least a **New Read Item Operation** and **New Read List Operation** because SharePoint features, such as external lists, rely on these operations.
    
  
- Choose specific operations, instead of **Create All Operations**, when the table or view does not support certain operations.
    
  

## Add columns
<a name="section7"> </a>


1. To specify the columns that you want to display from the table or view, click **Next**.
    
  
2. In the **Parameters Configuration** dialog box, by default all columns (known as **Data Source Elements**) are selected. To remove unnecessary columns, clear the corresponding check boxes.
    
    > **Note:**
      > Unlike a native SharePoint list, you cannot change the column name of an external list. Consider using an SQL column alias to provide a more meaningful name or a shorter name. 
3. To select an identifier field, click and highlight a field (typically a unique-valued field), and then under **Properties**, click **Map to Identifier**.
    
  

> **Important:**
> To prevent specific fields from being updated, such as an ID or primary key field, clear the **Required** check box, but select the **Read-Only** check box, which is needed to retrieve items so you can update other fields.
  
    
    

  
    
    


> **Tip:**
> Always carefully read the messages in the **Errors and Warnings** pane. They provide useful information to confirm your actions or troubleshoot any issues. Periodically click the **Errors and Warnings** pane and make sure that there are no more errors or warnings.
  
    
    


## Map Outlook fields
<a name="section8"> </a>

If your external content type maps to an Outlook item type, you must map one or more fields from your external content type to the Outlook item fields. When you map an external content type, such as a Customer, to an Outlook item type, such as a Contact, you must explicitly map the individual fields in the external content type, such as Customer First Name, Customer Last Name, Customer Address, and Customer Phone, to their respective Outlook item type fields, such as a contact's FirstName, LastName, BusinessAddress, and BusinessPhone.
  
    
    

- For the each field, do the following:
    
1. Click and highlight the field.
    
  
2. Under **Properties**, next to **Office property**, click the down arrow. and then select the appropriate matching field. 
    
  

> **Note:**
> You do not need to map all the corresponding fields. However, the fields shown in the following table must be mapped. 
  
    
    


**Table: Outlook item type mapped to Outlook item field**


|**Outlook item type**|**Outlook item field**|
|:-----|:-----|
|Contact  <br/> |LastName  <br/> |
|Task  <br/> |Subject  <br/> |
|Appointment  <br/> |Start, End, and Subject  <br/> |
|Post  <br/> |Subject  <br/> |
   
Unmapped fields, depending on the number, are displayed as extended properties as follows:
  
    
    

- **Adjoining** Appended to the form region at the bottom of an Outlook form's default page (two to five fields).
    
  
- **Separate** Added as a new page to an Outlook form (six or more fields).
    
  

## Set up the external item picker control
<a name="section9"> </a>

The external item picker control allows users to select a field, such as an ID field or a field that has unique values, to conveniently choose an item. This control is available in SharePoint and Office 2013 products. For example, users can use this control to choose an item from an external list of customers and Word 2013 enables this control for use with content controls that are linked to external data columns.It's a good idea to select the specific columns you want to display in the external item picker control because the default operation is to show all the columns, which in most cases, is not necessary.
  
    
    

1. For each field that you want displayed in the external content item picker, click and highlight the field, and then under **Properties**, click the **Show in Picker** check box.
    
  
2. Click **Next**.
    
  

> **Note:**
> All filters that you define are displayed in the external item picker control. Although you cannot remove specific filters from the external item picker control, you can define a default filter by clicking **Is Default** in the **Filter configuration** dialog box when you are creating or modifying the filter.
  
    
    


## Define filters
<a name="section10"> </a>

If you do not define a filter, an external list returns all of the data up to the Business Connectivity Services (BCS) throttle limit (by default, 2,000 items) or all the data that is defined in the external content type, if less than the current throttle limit. In addition, the entire processing of the results occurs within the SharePoint product. It's a good idea to define at least one filter. In general, there are two types of filters that you need to be aware:
  
    
    

- **Data Source Filter** When you create an external content type filter, which is known as a Data Source Filter, the filter operation occurs within the SQL Server database. This is important when you are working with lots of data because you can offload processing from SharePoint products to the external database and gain performance improvements. After you create the external list, you can use the Data Source Filter by creating a view that specifies different filter values in the **Data Source Filter** section of the **List View** settings page.
    
  
- **SharePoint filter** Users can still filter the data by using a SharePoint filter, either the column header filter or by using the **Filters** section in the **List View** settings page. In this case, the filter operation occurs within the SharePoint product, not within the SQL Server database.
    
  
A good strategy to consider is to create a set of external list views based on specific Data Source Filters that make sure that larger amounts of data are filtered first in the external data source, and then users can further filter and refine the results by using SharePoint filters.
  
    
    
You can create several different types of filters. For each filter that you create, do the following:
  
    
    

1. Under **Properties**, next to **Data Source Element**, select a field.
    
  
2. Under **Properties**, next to **Filter**, click **Click to Add** to display the **Filter Configuration** dialog box.
    
  
3. Click **Add Filter Parameter**.
    
  
4. In the **New Filter** box, enter a filter name.
    
  
5. In the **Filter Type** box, select a filter type:
    
    
  
    
    
 **Comparisons**
  
    
    

    
    A Comparison filter limits what items are returned based on a condition (such as State = "New Jersey") and is converted to an SQL WHERE clause.
    
1. In the **Filter Type** box, select **Comparison**.
    
  
2. In the **Operator** box, select an operation.
    
  
3. In the **Filter Field** box, make sure that the field that you want to compare is selected.
    
  
4. If you want values entered by the user to match by case, click **Case Sensitive**.
    
  
5. If you want to display a list of possible matches ??n the external item picker control when there is more than one matching item, select **Use to create match list in external item picker**.
    
  
6. Click **OK**.
    
  
7.  Under **Properties**, next to **Default Value**, enter the initial value that you want to filter by, if the user does not enter a value. If you do not enter a value, the external list does not display any items.
    
  

    
  
    
    
 **Wildcards**
  
    
    

    
    A Wildcard filter limits what items are returned based on a user-entered string value (such as State Contains "New") and is converted to an SQL LIKE clause. Valid SQL Server wildcard characters are * (asterisk) which means match any number of characters and _ (underscore) which means match one and only one character. 
  
    
    

    
1. In the **Filter Type** box, select **Wildcard**.
    
  
2. In the **Filter Field** box, select a field.
    
  
3. If you want values entered by the user to match by case, click **Case Sensitive**.
    
  
4. If you want to display a list of possible matches ??n the external item picker control when there is more than one matching item, select **Use to create match list in external item picker**.
    
  
5. Click **OK**.
    
  
6.  Under **Properties**, next to **Default Value**, enter the initial value that you want to filter by, if the user does not enter a value. If you do not enter a value, the external list does not display any items. It's a good idea to enter an * (asterisk) as the default.
    
  

    
  
    
    
 **Limit**
  
    
    

    
    In most cases, you must define a Limit Filter for Read and Read List operations. If you do not define a **Default Limit** value, no data is retrieved from the external data source. Ensure that the default value that you enter for the limit filter is less than 2,000, because the default Business Connectivity Services (BCS) throttle is 2,000 items. You can increase this limit if it is necessary.
    
1. In the **Filter Type** box, select **Limit**. 
    
  
2. In the **Number** box, enter a number.
    
  
3. If you want to display a list of possible matches ??n the external item picker control when there is more than one matching item, select **Use to create match list in external item picker**.
    
  
4. Under **Properties**, next to **Default Value**, enter the initial value that you want to filter by, if the user does not enter a value. If you do not enter a value, the external list does not display any items.
    
  
5. Click **OK**. 
  
    
    

    
  

    > **Note:**
      > The SQL Server database administrator might want to create specific tables, views, indexes, and optimized queries to limit the results to just what is needed and to help improve performance. 

    
  
    
    
 **Page Number**
  
    
    

    
    Use the external content type Page Number to supersede the SharePoint page limit defined in the **List View** page of the external list. Here's the difference:
    
  - The external content type Page Number first processes the results within the SQL Server database, and then returns and displays only the number of rows determined by the Page Size value.
    
  
  - The SharePoint page limit returns all the rows up to the Default Value size from the SQL Server database, and then displays the number of rows determined by the SharePoint page limit value in the **List View** settings page.
    
  

    Using the external content type Page Number is generally more efficient. In addition, the **Order** value helps make sure that an accurate display of the results returned.
    
1. In the **Filter Type** box, select **Page Number**. 
    
  
2. In the **Page Size** box, enter a number.
    
  
3. In the **Order** box, select a sort direction.
    
  
4. Click **OK**. 
    
  
5. Under **Properties**, next to **Default Value**, enter the initial value that you want to filter by, if the user does not enter a value. If you do not enter a value, the external list does not display any items. 
  
    
    

    
  
6. If you want to display but not modify a field, click and highlight the field, and then under **Properties**, select **Read-Only**.
    
  
7. If you want to make sure that a field always has a value when it's created or modified, click and highlight the field, and then under **Properties**, select **Required**.
    
  
8. To provide a descriptive name in the external item picker control of the **Data Source Element** name, which is derived from the SQL Server column name, click and highlight the field, and then under **Properties**, in the **Display Name** box, enter a name.
    
  
9. To define a default value for the filter (which also displays in the **Data Source Filter** section of the **List View** settings page), under **Filter Parameters**, click and highlight the filter, and then in the **Default Value** box, enter an appropriate value. If you do not enter a value, then when that filter is used for the first time, no items are displayed.
    
  

## Set the Title field for an external list
<a name="section11"> </a>


1. On the ribbon, click **Summary View**.
    
  
2. In the **Fields** section, under **Field Name**, select a field.
    
    > **Important:**
      > In general, it's a good idea to make the Title a field that has a unique value. The Title field is used to display list or InfoPath forms. Once you set the Title field, you cannot change it. 
3. On the ribbon, click **Set as Title**.
    
  

## Complete the external content type
<a name="section12"> </a>


- On the Quick Access Toolbar, click **Save**. This stores the external content type definition in the Business Data Connectivity metadata store.
    
  

> **Note:**
> To provide better performance, Business Data Connectivity caches all the objects in the metadata store and updates changes by using a timer job that runs every minute. It might take up to one minute for changes to propagate to all the servers in the farm, but changes are immediate on the server where you make the change. 
  
    
    

The external content type is now available for use in SharePoint and Office 2013 products.
  
    
    

## Additional resources
<a name="AR"> </a>


-  [External content types in SharePoint](external-content-types-in-sharepoint)
    
  
-  [Deploy a Business Connectivity Services on-premises solution in SharePoint](http://msdn.microsoft.com/library/4692ebba-90eb-4d72-ac12-e90c4d4ee7ae.aspx)
    
  
-  [Using OData sources with Business Connectivity Services in SharePoint](using-odata-sources-with-business-connectivity-services-in-sharepoint)
    
  
-  [Configure the Secure Store Service in SharePoint](http://msdn.microsoft.com/library/29C0BC76-D835-401B-A2FB-ABB069E84125.aspx)
    
  

