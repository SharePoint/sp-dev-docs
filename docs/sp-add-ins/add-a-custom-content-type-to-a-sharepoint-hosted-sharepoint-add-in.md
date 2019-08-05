---
title: Add a custom content type to a SharePoint-hosted SharePoint Add-in
description: Create a custom content type, run the add-in, and test it.
ms.date: 12/04/2017
ms.prod: sharepoint
localization_priority: Priority
---

# Add a custom content type to a SharePoint-hosted SharePoint Add-in

This is the fourth in a series of articles about the basics of developing SharePoint-hosted SharePoint Add-ins. You should first be familiar with [SharePoint Add-ins](sharepoint-add-ins.md) and the previous articles in this series, which you can find at [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md#Nextsteps). 
    
> [!NOTE]
> If you have been working through this series about SharePoint-hosted add-ins, you have a Visual Studio solution that you can use to continue with this topic. You can also download the repository at [SharePoint_SP-hosted_Add-Ins_Tutorials](https://github.com/OfficeDev/SharePoint_SP-hosted_Add-Ins_Tutorials) and open the BeforeContentType.sln file.

In this article, you add a custom content type to the Employee Orientation SharePoint Add-in.
 

## Create the custom content type

1. In **Solution Explorer**, right-click the project and select **Add** > **New Folder**. Name the folder **Content Types**.
     
2. Right-click the new folder and select **Add** > **New Item**. The **Add New Item** dialog box opens to the **Office/SharePoint** node.
     
3. Select **Content Type** and give it the name **NewEmployee**, and then select **Add**. When prompted by the wizard to select the base content type, select **Item**, and then select **Finish**.   
 
4. If the content type designer does not automatically open, select the **NewEmployee** content type in **Solution Explorer** to open it.
    
5. Open the **Content Type** tab in the designer, and fill in the text boxes as follows:
    
   -  **Content Type Name**: NewEmployee
   -  **Description**: Represents a new employee
   -  **Group Name**: Employee Orientation
 
6. Verify that *none* of the check boxes on the tab are selected. The check box for **Inherits the columns from the parent Content Type** may be selected by default. *Be sure to clear it.*  The tab should now look like the following:
    
    *Figure 1. Content Type Tab*

    ![The Content Type Designer showing 'NewEmployee' as the type name, 'Represents a new employee' as the description, and 'Employee Orientation' as the group.](../images/8a9768f4-315d-45c0-88d7-687dbf84495c.PNG)
 
7. Open the **Columns** tab in the designer.
     
8. In the grid, select **Click here to add a column** to open a drop-down list of columns, and add the **Division** column. It is listed in the drop-down list by its display name **Division**. Do the same for the **Orientation Stage** column. (If they are not listed, you may not have started with the correct Visual Studio solution. Start with BeforeContentType.sln.) When you are finished, the grid should look like the following:
    
    *Figure 2. Columns Tab*

    ![The Columns tab of the Content Type Designer with "Employee", "Division", and "Orientation Stage" listed in the grid.](../images/835e78b3-a073-45b2-b4ee-3f9be9d88495.PNG)

9. Save the file and close the designer.

### Modify the elements.xml file

1. The next step requires that you work directly in the raw XML for the content type, so in **Solution Explorer**, select the elements.xml file child of the **NewEmployee** content type.
    
2. There are already **FieldRef** elements in the file for the two columns that you added. Add **FieldRef** elements for two built-in SharePoint columns as peers of the two that are already there. The following is the markup for the elements. *You must use these same GUIDs for the ID attribute because these are built-in field types with fixed IDs.* Add these *above* the two **FieldRef** elements for the custom site columns. Note that we have given these fields the custom display name **Employee**.
    
    ```
      <FieldRef Name="LinkTitle" ID="{82642ec8-ef9b-478f-acf9-31f7d45fbc31}" DisplayName="Employee" />
      <FieldRef Name="Title" ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" DisplayName="Employee" />
    ```
 
3. Save and close the file.
 
###  Modify Content Type settings

1. Expand the **Lists** node in **Solution Explorer**, and select **NewEmployeeOrientation** to open the list type designer.
    
2. Open the **Columns** tab in the designer, and then select the **Content Types** button.
    
3. In the **Content Type Settings** dialog box, add the **NewEmployee** content type.
    
4. Select the **NewEmployee** content type in the list of types, and then select the **Set as Default** button.
 
5. Select the **Item** content type, right-click the small arrowhead that appears to the left of the content type name, and then select **Delete**.
    
6. Repeat the preceding step for the **Folder** content type, so that **NewEmployee** is the only content type listed. The dialog box should now look like the following:
    
    *Figure 3. Content Type Settings dialog box*

    ![The Content Type Settings dialog with just a single content type, named NewEmployee, listed.](../images/b90699f4-40de-4f50-ad47-3e8773d0eb92.PNG)
 
7.  Select **OK** to close the dialog box, and then save and close the file.

### Modify the schema.xml file and element.xml file

1. Open the schema.xml file.
    
2. Find the **Fields** element. It should have three **Field** elements: **Title**, **Division**, and **OrientationStage**. (These elements may be on a single line in this generated file. If so, separate them with line breaks.)
 
3. Leave the file open, and in **Solution Explorer**, expand the **Site Columns** folder and the **Division** node, and then open the elements.xml file for **Division**. The **Field** element for **Division** in schema.xml should exactly duplicate the **Field** element in the **Division** elements.xml. If there is not an exact match, copy the **Field** element from the site column elements.xml file and paste it in place of the mismatched **Field** element in the schema.xml file. Close the element.xml file.
    
4. Open the elements.xml file for **OrientationStage**. Here, too, there must be an exact match of the  **Field** elements in the two files for **OrientationStage**, including all child elements, such as the **CHOICES** and **MAPPINGS** elements. If there isn't, copy the **Field** in the elements.xml file and paste it in place of the mismatched **Field** element in the schema.xml file. Close the element.xml file.
 
5. Still in the schema.xml file, in the **View** element whose **BaseViewID** value is "1", find the child **ViewFields** element, and then add the following two **FieldRef** elements as children of it. They may already be there but missing an **ID** attribute. If so, add the ID attribute.
    
    ```
      <FieldRef Name="Division" ID="{GUID from the Field element}" />
      <FieldRef Name="OrientationStage" ID="{GUID from the Field element}" />

    ```

6. Replace the two placeholder **ID** attribute values with the GUIDs from the corresponding **Field** elements in the **ContentType** element for **NewEmployee** that is earlier in the schema.xml file. Don't forget the framing braces "{}". The **ViewFields** for the "1" **View** should look like the following (your GUIDs may be different):

    ```
      <ViewFields>
        <FieldRef Name="LinkTitle" ID="{82642ec8-ef9b-478f-acf9-31f7d45fbc31}" DisplayName="Employee" />
        <FieldRef Name="Division" ID="{509d2d67-9a96-4596-9b3b-58449cdcc6ff}" />
        <FieldRef Name="OrientationStage" ID="{38a3b54c-acf3-4ddf-b748-55c7c28d4cc2}" />        
      </ViewFields>
    ```

7. Still in the schema.xml file, find the **View** element whose **BaseViewID** value is "0". Find the **ViewFields** element within it.

8. Copy the entire **ViewFields** section from View "1" over the **ViewFields** section of View "0". The two views should now have identical **ViewFields** sections.
    
9. Save and close the schema.xml file.

10. In the **Lists** folder, expand both the **NewEmployeeOrientation** node and its child list instance **NewEmployeesInSeattle**. You should be able to clearly see and distinguish the elements.xml for the template from the elements.xml for the instance. Open the one for the instance. 
    
11. Add two **Field** elements to the first **Row** element, so that the **Row** element looks like the following:
    
    ``` 
    <Row>
      <Field Name="Title">Tom Higginbotham</Field>
      <Field Name="Division">Manufacturing</Field>
      <Field Name="OrientationStage">Tour of building</Field>
    </Row>
    ```

12. Save and close the file.
    

## Run and test the add-in

1. Use the F5 key to deploy and run your add-in. Visual Studio makes a temporary installation of the add-in on your test SharePoint site and immediately runs the add-in. 
     
2. When the add-in's default page opens, select the **New Employees in Seattle** link to open the custom list instance.
 
3. The list page opens and the **Division** and **OrientationStage** columns are on it. It is not necessary for a user to add them manually because they are part of the list's content type. The top item has the data you added.
    
    *Figure 4. New Employees in Seattle list*

    ![The "New Employees in Seattle" list with the Division and Orientation Stage columns already present.](../images/b654af45-663e-425c-b7c7-b8b5524cb316.PNG) 
 
4. Try adding new items to the list and editing existing items.
    
5. To end the debugging session, close the browser window or stop debugging in Visual Studio. Each time that you select F5, Visual Studio will retract the previous version of the add-in and install the latest one.
    
6. You will work with this add-in and Visual Studio solution in other articles, and it's a good practice to retract the add-in one last time when you are done working with it for a while. Right-click the project in **Solution Explorer** and select **Retract**.

## Next steps
<a name="Nextsteps"> </a>

In the next article in this series, you'll [add a web part to a page in a SharePoint-hosted SharePoint Add-in](add-a-web-part-to-a-page-in-a-sharepoint-hosted-sharepoint-add-in.md).
