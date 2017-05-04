---
title: Step 2 Adding the Content Editor and Excel Services Web Parts
ms.prod: OFFICE365
ms.assetid: c9c66843-fd77-4a0d-a512-d936d15d4429
---


# Step 2: Adding the Content Editor and Excel Services Web Parts

After you create an ECMAScript (JavaScript, JScript) text file and save the text file in a trusted location, the next step is to create a Web Parts Page and add the Content Editor Web Part and the Excel Services Web Part to the page. 
  
    
    

Next, display a workbook by using the Excel Services Web Part that you added to the page. 
### To add the Content Editor Web Part and the Excel Services Web Part


1. Create a new Web Parts Page. 
    
  
2. Add a Content Editor Web Part to the Web Parts Page that you just created.
    
  
3. Feed the URL for the text file that you created in  [Step 1: Creating a ECMAScript Text File](step-1-creating-a-ecmascript-text-file) to the Content Editor Web Part. You do this by adding the URL for the text file that you uploaded to a trusted document library in [Step 1: Creating a ECMAScript Text File](step-1-creating-a-ecmascript-text-file). 
    
    For example: 
    
     `http://` _myserver_ `/Docs/Documents/JSOM_FeedToContentEditor.txt`
    
  
4. Add an Excel Services Web Part to the page.
    
  

### To run the ECMAScript sample


1. Upload a workbook to a trusted document library. Use the **Modify Shared Web Part** menu to display the Excel Services Web Part task pane. In the **Workbook Display** section, in the **Workbook** field, type the URL to the workbook that you want the Excel Services Web Part to load and display. For example:
    
     `http://` _myserver_ `/Docs/Documents/WorkbookToDisplay.xlsx`
    
  
2. Try clicking different cells and observe the cell value populated in the Content Editor **div**. 
    
  

