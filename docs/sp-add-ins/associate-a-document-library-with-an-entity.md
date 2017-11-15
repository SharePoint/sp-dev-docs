---
title: Associate a document library with an entity
description: Add a SharePoint document library to a new or existing screen, and create a relationship between the document library and an entity. 
ms.date: 11/07/2017
ms.prod: sharepoint
---

# Associate a document library with an entity

By using the document library feature in SharePoint, you can create or upload documents associated with individual items in a list or entity. For example, you might use a document library to store sales literature and product manuals for each product in a list. In a cloud business add-in, you can associate a document library with an entity by creating a relationship.

The process of associating a document library with an entity involves three steps:

1. Add a SharePoint document library to your project as a data source.
    
   > [!IMPORTANT]
   > You must first create a document library on your SharePoint site that contains a custom column that maps to a unique field in your entity.

2. Create a relationship between the document library and an entity.

3. Add the document library to a screen. The process differs depending on whether you're creating a new screen or adding it to an existing screen.

## To add a document library

1. In **Solution Explorer**, open the shortcut menu for the **Data Sources** node, and select **Add Data Source**.

2. In the Attach Data Source Wizard, select the **SharePoint** icon, and then select **Next**.

3. On the **Enter Connection Information** page, in the **Specify the SharePoint site address** box, enter the URL for your SharePoint Developer site, and then select **Next**.

4. On the **Choose your SharePoint Items** page, in the left pane, select the **Document Libraries** list item, and in the right pane, select the check box for your document library, as shown in Figure 1.
    
   *Figure 1. Select the document library*

   ![Select the Documents Library](../images/CBADocLibrary.PNG)

   Figure 2 shows the document library on the SharePoint site.

   *Figure 2. Document library with custom ProductName column*

   ![Document library with custom ProductName column](../images/CBADocLibrary2.PNG)
 
   > [!IMPORTANT]
   > The document library must already exist and must contain a custom column that maps to a unique field in your entity.

5. In the **Specify the name of the data source**, enter a name, and then select **Finish**.
    
## To create a relationship

1. In **Solution Explorer**, open the document library entity, and then on the **Perspective** bar, select the **Server** tab.

2. On the toolbar, select **Relationship**.

3. In the **Add New Relationship** dialog box, in the **To** list, select the entity that you want to associate, as shown in Figure 3.
    
   *Figure 3. Create a relationship*

   ![Create a relationship](../images/CBARelationship.PNG)

4. In the **Foreign** key list, select the custom column from your document library.

5. In the **Primary** key list, select the field from your entity that maps to the custom column in the document library, and then select **OK**. For example, for a ProductName custom column, select the ProductName field, as shown in Figure 4.
    
   *Figure 4. Related foreign and primary keys*

   ![Set the related properties](../images/CBARelationship2.PNG)

   > [!NOTE]
   > The field must be of the same data type as the **Foreign** key field.

## To add a document library to a new screen set

1. In **Solution Explorer**, open the entity that is associated with a document library, and then on the **Perspective** bar, select the **HTMLClient** tab.

2. On the toolbar, select **Screen**.

3. In the **Add New Screen** dialog box, in the **Screen Set Name** box, enter a name for the screen set.

4. In the **Screen Data** list, select your entity.

5. In the **Additional Data to Include** list, select the check box for your document library, and then select **OK**. Figure 5 shows a screen set for a Product entity.
    
   *Figure 5. Products screen set*

   ![The Add New Screen dialog box](../images/CBAScreenSet.PNG)
 
   The **View** screen that is created for the entity contains a **Documents** tab with an **Add Document** button. The button displays a pop-up window for adding or uploading documents.

## To add a document library to an existing screen

1. In **Solution Explorer**, open the shortcut menu for the screen that you want to associate with a document library, and select **Open**.

2. In the screen designer, select the **Tabs** node, as shown in Figure 6, and then select the **Add Tab** node.
    
   *Figure 6. The Tabs node*

   ![Add a new tab](../images/CBAAddTab.PNG)

3. In the Properties window, select the **Display Name** property, and enter a meaningful name for the newly added tab; for example, **Documents**.

4. In the left pane of the screen designer, select the **Add** _DocumentLibraryName_ link, as shown in Figure 7, where _DocumentLibraryName_ is the name of your document library.
    
   *Figure 7. The Add ProductDocuments link*

   ![Add the Documents entity](../images/CBAAddDoc.PNG)

5. In the center pane, select the node for the new tab, expand the **Add** list, and then select _DocumentLibraryName_.

6. Expand the **Command Bar** node for the new tab, as shown in Figure 8, and select **Add**.
    
   *Figure 8. The Command Bar node*

   ![The Command Bar node](../images/CBAAddButton.PNG)

7. In the **Add Button** dialog box, accept the default choices, and then select **OK**. Figure 9 shows the **Add Button** dialog box with the default method **createOrUploadDocument**.
    
   *Figure 9. The Add Button dialog box*

   ![The Add Button dialog box](../images/CBAAddDialog.PNG)

8. In the Properties window, select the **Display Name** property, and enter a meaningful name for the button. For example, **Add Document**.
    
   The screen now contains a **Documents** tab with a button on the command bar. The button displays a pop-up window for adding or uploading documents.

## Additional resources
<a name="bk_addresources"> </a>

- [Develop cloud business add-ins](develop-cloud-business-add-ins.md)
- [Incident Manager: A cloud business add-in tutorial](incident-manager-a-cloud-business-add-in-tutorial.md)
- [Create cloud business add-ins](create-cloud-business-add-ins.md)
    
