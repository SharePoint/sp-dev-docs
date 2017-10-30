---
title: Working with the Excel Services JavaScript object model
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 06219071-a7c1-4f54-b07f-7b7001592330
---


# Working with the Excel Services JavaScript object model

When you write code that uses the JavaScript object model (JSOM), there are two scenarios where the code can run: on a SharePoint page; or on a host webpage that contains an embedded workbook that is stored on Microsoft OneDrive. This article discusses the main difference between the two scenarios that significantly affect how you write your code.
  
    
    


## Using the Excel Services JSOM

Table 1 lists the difference between the two scenarios available when you write code that uses the JSOM.
  
    
    

**Table 1. Scenarios for Excel Services JSOM**


|**Location**|**Description**|
|:-----|:-----|
|**OneDrive** <br/> |In this scenario, you embed a workbook that is stored on OneDrive into the host webpage using an HTML <div> element. Then you include code in the page that interacts with the embedded workbook.  <br/> |
|**SharePoint** <br/> |In this scenario, you have a SharePoint page served by SharePoint. You insert an Web Part into the SharePoint page that contains a workbook that is stored in an trusted location. Then you include code in the SharePoint page that interacts with the Web Part.  <br/> |
   
The main difference between writing code for the two scenarios is how you get a reference to the  [Ewa.EwaControl](http://msdn.microsoft.com/library/6e441406-d67a-0da9-f996-71f4e4b4c144%28Office.15%29.aspx) object. Because the **[Ewa.EwaControl]** is the entry point to the JavaScript object model, you must get a reference to it to work with the JSOM.
  
    
    

### Getting a reference to the EwaControl object (SharePoint)

When writing code that interacts with an Web Part on a SharePoint page, you get a reference to the **[Ewa.EwaControl]** object by using the method, [Ewa.EwaControlCollection.getItem(index)](http://msdn.microsoft.com/library/11dd3a65-f914-4b34-bbaf-0206c8153d2b%28Office.15%29.aspx), as shown in the following code example.
  
    
    

```

<script type="text/javascript">
var ewa = null;

// Add event handler for onload event.
if (window.attachEvent) 
{ 
    window.attachEvent("onload", ewaOmPageLoad);    
} 
else 
{ 
    window.addEventListener("DOMContentLoaded", ewaOmPageLoad, false); 
}
// Add event handler for applicationReady event.
function ewaOnPageLoad()
{
    if (typeof (Ewa) != "undefined")
    {
Ewa.EwaControl.add_applicationReady(ewaApplicationReady);
    }
    else
    {
alert("Error - the EWA is not loaded.");
    }
    // Add additional page load code here.
}

function ewaApplicationReady()
{
    // Get a reference to the Excel Services Web Part.
    ewa = Ewa.EwaControl.getInstances().getItem(0);

    // Add other initialization logic here.
}

// Add your code here.
    </script>
```


### Getting a reference to the EwaControl object (OneDrive)

When writing code that interacts with an embedded workbook that is stored on OneDrive, you get a reference to the **[Ewa.EwaControl]** object through the [AsyncResult](http://msdn.microsoft.com/library/1da51396-834c-d85b-a9b0-ce21e4329946%28Office.15%29.aspx) object. The **[AsyncResult]** object is passed in as the single parameter to the callback method that you specify in the [Ewa.EwaControl.loadEwaAsync](http://msdn.microsoft.com/library/a7ee4d6d-5472-b942-c78e-b368d30bcb0e%28Office.15%29.aspx) static method. When the callback is invoked, a reference to the **[Ewa.EwaControl]** object is included in the **[AsyncResult]** object. The following code example shows how you get a reference to the **[Ewa.EwaControl]** object through the **[AsyncResult]** object.
  
    
    

```

<div id="myExcelDiv" style="width: 402px; height: 346px"></div>
<script type="text/javascript" src="http://r.office.microsoft.com/r/rlidExcelWLJS?v=1&amp;kip=1"></script>
<script type="text/javascript">
    /*
    * This code uses the Microsoft Office Excel JavaScript object model to programmatically insert the
    * Excel Web App into a div with id=myExcelDiv. The full API is documented at
    * http://msdn.microsoft.com/en-us/library/hh315812.aspx. There you can find out how to programmatically get
    * values from your Excel file and how to use the rest of the object model. 
    */

    // Use this file token to reference Book1.xlsx in the Excel APIs
    // Replace the the placeholder for the  filetoken with your value
    var fileToken = " XXXXXXXXXXXXXXXXXXXXXX/XXXXXXXXXXXXXXXXXXX/";
    var ewa = null;

    // Run the Excel load handler on page load.
    if (window.attachEvent)
    {
        window.attachEvent("onload", loadEwaOnPageLoad);
    } else
    {
        window.addEventListener("DOMContentLoaded", loadEwaOnPageLoad, false);
    }

    function loadEwaOnPageLoad()
    {
        var props = {
            uiOptions: {
                showGridlines: false,
                showRowColumnHeaders: false,
                showParametersTaskPane: false
            },
            interactivityOptions: {
                allowTypingAndFormulaEntry: false,
                allowParameterModification: false,
                allowSorting: false,
                allowFiltering: false,
                allowPivotTableInteractivity: false
            }
        };
        // Embed workbook using loadEwaAsync
        Ewa.EwaControl.loadEwaAsync(fileToken, "myExcelDiv", props, onEwaLoaded);
    }

    function onEwaLoaded(asyncResult)
    { 
        if (asyncResult.getSucceeded())
        {
            // Use the AsyncResult.getEwaControl() method to get a reference to the EwaControl object
            ewa = asyncResult.getEwaControl();
            …
        }
        else
        {
            alert("Async operation failed!");
        }
        // ...
    }    
</script>
```


### Conclusion

Writing a solution that uses the JavaScript object model is basically the same whether the solution runs on SharePoint or on a host webpage. The main difference is how you get a reference to the **[Ewa.EwaControl]** object. Once you have a reference to the **[Ewa.EwaControl]** object, the rest of the code that you write will be almost the same for both scenarios.
  
    
    

## Additional resources
<a name="SP15DevKitchenCon_AnatomyofanappSignupsheets_Additionalresources"> </a>


-  [Using the Excel Services JavaScript API to Work with Embedded Excel Workbooks](http://msdn.microsoft.com/en-us/library/hh315812.aspx)
    
  
-  [Ewa.EwaControl.loadEwaAsync](http://msdn.microsoft.com/library/a7ee4d6d-5472-b942-c78e-b368d30bcb0e%28Office.15%29.aspx)
    
  
-  [Ewa.EwaControlCollection.getItem(index)](http://msdn.microsoft.com/library/11dd3a65-f914-4b34-bbaf-0206c8153d2b%28Office.15%29.aspx)
    
  

