---
title: Step 1 Creating a ECMAScript Text File
ms.prod: OFFICE365
ms.assetid: f1c2b359-5b0d-467d-a863-6732e23863b9
---


# Step 1: Creating a ECMAScript Text File

For this walkthrough, you will create an ECMAScript (JavaScript, JScript) text file. This walkthrough assumes that you are familiar with coding in JavaScript. 
  
    
    


### To create an ECMAScript text file


1. Create a text file and name it JSOM_FeedToContentEditor.txt.
    
  
2. Add the following script to the JSOM_FeedToContentEditor.txt file.
    
    **Sample code provided by:** Vidya Joshi, Microsoft Corporation.
    


  ```
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
 <head>Logging results:
 </head>
<body>
<div id='resultdiv'></div>
<script type="text/javascript">         

// Set the page event handlers for onload and unload.
if (window.attachEvent) 
{
    window.attachEvent("onload", Page_Load);
} 
else 
{
// For some browsers window.attachEvent does not exist.
    window.addEventListener("DOMContentLoaded", Page_Load, false);
}

// Load the page. 
function Page_Load() 
{
    Ewa.EwaControl.add_applicationReady(GetEwa);
}

function GetEwa()
{
    om =Ewa.EwaControl.getInstances().getItem(0);
    writelog('DomId:' + om.getDomElement().id,0);

    om.add_activeCellChanged(cellchanged);
    om.add_activeSelectionChanged(selChanged);
    om.add_gridSynchronized(gridSynchronized);
    om.add_workbookChanged(wbchanged);
    om.add_enteredCellEditing(editing);
}

function cellchanged(rangeArgs)
{
    writelog('Address:'+ rangeArgs.getRange().getAddressA1(),1);
    writelog('Value:' + rangeArgs.getFormattedValues(),1);
    writelog('Cell changed event triggered',0);
}

function selChanged(rangeArgs)
{
    writelog('Address:'+ rangeArgs.getRange().getAddressA1(),1);
    writelog('Value:' + rangeArgs.getFormattedValues(),1);
    writelog('Selection changed event triggered',0);
}

function gridSynchronized(res)
{
    writelog('WorkbookPath:' +om.getActiveWorkbook().getWorkbookPath(),1);
    writelog('grid synchronized',0);
}

function wbchanged(r)
{
    writelog('Workbook changed event triggered',0);
}

function editing(rangeArgs)
{
    writelog('Address:'+ rangeArgs.getRange().getAddressA1(),1);
    writelog('Value:' + rangeArgs.getFormattedValues(),1);
    writelog('Entered cell editing event triggered',0);
}

function writelog(output, indentLevel)
{
    output = output + "<br/>";
    document.getElementById('resultdiv').innerHTML = output + document.getElementById('resultdiv').innerHTML ;
}
</script>  
</body>
</html><html> 

  ```

3. Save the text file.
    
  

### To save the text file to a trusted document library


1. Upload the text file that you created in the previous procedure to a trusted SharePoint document library. 
    
  
2. Note the URL to the text file. For example:
    
     `http://` _myserver_ `/Docs/Documents/JSOM_FeedToContentEditor.txt`
    
    In the next procedure, you will need this URL to feed to the Content Editor Web Part.
    
  

