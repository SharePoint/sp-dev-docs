---
title: Create a mashup that uses an embedded workbook and Bing Maps
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 3cfeb8d7-84b8-4673-bc92-b176cba4ac3e
localization_priority: Normal
---


# Create a mashup that uses an embedded workbook and Bing Maps

This article walks you through a powerful Web-based mashup that combines an embedded Excel workbook and Bing Maps.
  
    
    


## About the "Destination Explorer"

The Destination Explorer is a mashup that lets the user choose a region, a destination type (city or park), a specific destination within the region, and then see weather information or number of visitors to the destination by month.
  
    
    
When the user selects different options from the UI, JavaScript is used to process the events and pass the changes to the workbook on OneDrive. The workbook recalculates itself based on the changes and notifies the Destination Explorer when it is finished using callback functions. Depending on what the user changed, the Destination Explorer may either get more data from the Travel workbook, update the view of the Bing Map, hide the charts, or swap the chart that is currently showing.
  
    
    
 **The "Travel workbook"**
  
    
    
The Destination Explorer depends heavily on an embedded workbook that contains all the destination names, statistics for weather and visitor numbers, and two charts for displaying monthly weather data and monthly visitor data.
  
    
    
 **Excel Services JavaScript API**
  
    
    
The mashup uses the Excel Services JavaScript API to embed the workbook and to interact with it. To use the Excel Services JavaScript API, you only have to reference the API source location in your code. Once you have access to the Excel Services JavaScript API, you can programmatically embed and work with an Excel workbook.
  
    
    
 **Bing Maps JavaScript API**
  
    
    
The mashup also uses the Bing Maps API to display the locations selected on the workbook inside a Bing Map. Just like any other JavaScript library, all you have to do is reference the API library in your code in order to include a Bing Map in your mashup.
  
    
    

## Creating the "Destination Explorer" Mashup

To create this mashup, we followed 3 basic steps:
  
    
    

1. Store the workbook on OneDrive. Find more information on the  [OneDrive](https://onedrive.live.com/about/en-us/) page.
    
  
2. Embed the workbook on the page. Find more information on embedding workbooks from OneDrive  [here](http://office.microsoft.com/en-us/excel-help/share-it-embed-an-excel-workbook-on-your-blog-HA102029502.aspx?CTT=5&amp;origin=HA102775335).
    
  
3. Mash it up with Bing Maps. This step is covered in more detail in the following sections.
    
  

  
    
    

## Mashup Excel Services and Bing Maps

After storing the workbook in a public folder on OneDrive, and after embedding the workbook on the host webpage, the Bing Maps functionality is combined with interactions on the embedded workbook to create the  *Destination Explorer*  Mashup.
  
    
    
The integration happens in the following 3 steps:
  
    
    

- Create the page structure for the mashup
    
  
- Initialize the embedded workbook charts and the Bing Map
    
  
- Create the appropriate callback functions
    
  

1. **Create the page structure for the mashup**
    
    An HTML select control on the webpage is populated with data from the Travel workbook when the page loads or whenever the user changes the current region or the destination type. The definition for this select control ( *destinations*  ) is shown in **Snippet 1**. **Snippet 1** also shows the definition for the other key elements on the page: **chartDiv**, **chartDiv2**, and **mapDiv**. The chart div elements are containers for the two charts defined in the Travel workbook. The map div is the container for the Bing Map control.
    
    **Snippet 1: Structuring the webpage**
    


```HTML
  
<!-- HTML omitted for brevity -->
    <select id="destinations" style="width: 150px" name="destinations"
      onchange="onDestinationChange()">
    </select>
    <!-- HTML omitted for brevity -->
    <div id="chartDiv" style="width: 483px; height: 318px"></div>
    <div id="chartDiv2" style="width: 483px; height: 318px; display: none"></div>
    <!-- HTML omitted for brevity -->
    <div id="mapDiv" style="position:relative; width:693px; height:400px;"></div>
    <!-- HTML omitted for brevity -->

```

2. **Initialize the embedded workbook charts and the Bing Map**
    
    The next step is to initialize the Excel components and the Bing Map when the page loads. In order to access an embedded Excel workbook programmatically, you need to refer to it by a file token. See  [http://msdn.microsoft.com/en-us/library/hh315812.aspx](http://msdn.microsoft.com/en-us/library/hh315812.aspx%28Office.15%29.aspx) for information on how to get the appropriate file token for your workbook.
    
    The code in **Snippet 2** completes three main tasks inside the **Page_Load** event handler. First, it establishes a reference to the Travel workbook to display the chart named *Chart 1*  inside the **chartDiv** element on the webpage. Second, it calls a simple function named **GetMap** to initialize the Bing Map. Third, it creates a second reference to the Travel workbook to display the chart named *Chart 2*  inside the **chartDiv2** element.
    
    **Snippet 2: Initializing the Page**
    


```
  
// Use this file token to reference your OneDrive hosted workbook in Excel's APIs
    var fileToken = "TOKEN TO YOUR WORKBOOK GOES HERE";
    var map;
    var ewaChart = null;
    var ewaChart2 = null;
  
    // Set the page event handlers for onload and unload.
    if (window.attachEvent) {
    window.attachEvent("onload", Page_Load);
    }
    else {
    // For some browsers window.attachEvent does not exist.
    window.addEventListener("DOMContentLoaded", Page_Load, false);
    }
  
    hideCharts();
     
    // Page load event handler
    function Page_Load() {
     
    // Load Excel Chart
    var props = {
    item: "Chart 1",
    uiOptions: {
    showParametersTaskPane: false
    },
    interactivityOptions: {
    allowTypingAndFormulaEntry: true,
    allowParameterModification: false,
    allowSorting: false,
    allowFiltering: false,
    allowPivotTableInteractivity: false
    }
    };
    Ewa.EwaControl.loadEwaAsync(fileToken, "chartDiv", props, onEwaChartLoaded);
     
    // Load the Bing map
    GetMap();

    // Load the 2nd Excel Chart
    var props = {
    item: "Chart 2",
    uiOptions: {
    showParametersTaskPane: false
    },
    interactivityOptions: {
    allowTypingAndFormulaEntry: true,
    allowParameterModification: false,
    allowSorting: false,
    allowFiltering: false,
    allowPivotTableInteractivity: false
    }
    };
    Ewa.EwaControl.loadEwaAsync(fileToken, "chartDiv2", props, onEwaChart2Loaded);
    }
     
    // Setup the Bing Map's initial view
    function GetMap() {
     
    map = new Microsoft.Maps.Map(document.getElementById("mapDiv"),
    { credentials: "YOUR CREDENTIALS",
    center: new Microsoft.Maps.Location(37.2802459560, -112.738963),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 3 });

```

3. **Create the appropriate callback functions**
    
    All calls to functions in the Excel Services JavaScript API usually take a callback as a parameter to the function. The callback parameter is the name of the function in your JavaScript that should be run when the call to the Excel Services JavaScript API completes. You can see a callback used in the **EwaControl.loadEwaAsync** function in **Snippet 2**:
    


```
  
Ewa.EwaControl.loadEwaAsync(fileToken, "chartDiv", props, onEwaChartLoaded);
```


    The callback used here is **onEwaChartLoaded**. This launches the following chain of calls to the Excel Services JavaScript API and callbacks within the Destination Explorer. The callbacks used in this chain are:
    
  - **onEwaChartLoaded()** - This function saves a reference to the Excel Web Access Control associated with the chart. After it has the control, it calls the method **getRangeA1Async()** to get the range represented by the name *OutputTopFiveDetails*  .
    
  
  - **onGotDetailRange()** - The call to **getRangeA1Async()** returns the range, not the values so this callback calls the method **getValuesAsync()** to get the values associated with the range.
    
  
  - **onGotDetailValues()** - The values associated with the range are stored in a variable for later use and then this method calls the following methods defined within the Destination Explorer:
    
  - **loadDestinations()** - Populates the select element with the destinations within the range *OutputTopFiveDetails* 
    
  
  - **updateMap()** - Updates the map if necessary
    
  
  - **updateChart()** - Updates the chart if necessary
    
  

    The purpose of the chain of callbacks shown in **Snippet 3** is to update the data shown on the HTML page. There is another chain of callback functions used to modify data within the Travel workbook. For example, if you change the region from North America to Europe, several things need to happen such as repopulating the list of destinations, updating the map, and hiding the charts. Repopulating the list of destination is the first thing that needs to happen and this involves modifying data in Excel. **Snippet 3** shows the code for these tasks. Note that the function named **updateExcel()** and an associated callback named **onGotRange()** handle the chore of changing values on the Input worksheet of the Travel workbook.
    
    **Snippet 3: The callback chain for modifying inputs in the Travel workbook**
    


```
  // Event handler called when user selects a different region.
    function onRegionChange() {
    currentDestination = '';
    var e = document.getElementById("regions");
    currentRegion = e.options[e.selectedIndex].text;
    updateExcel();
    }
     
    // Event handler called when user selects a different destination.
    function onDestinationChange() {
    var select = document.getElementById('destinations');
    var i = select.selectedIndex;
    currentDestination = select.options[i].text;
    updateChart();
    updateMap(false);
    }
    // Event handler called when user selects a different destination type.
    function onTypeChange(type) {
    currentDestination = '';
    currentDestinationType = type;
    updateExcel();
    }
     
    // Called from onTypeChange and onRegionChange when user selects a different destination type or region
    function updateExcel() {
    ewaChart.getActiveWorkbook().getRangeA1Async("Input!Inputs", onGotRange, 0);
    ewaChart2.getActiveWorkbook().getRangeA1Async("Input!Inputs", onGotRange, 1);
    }
     
    // Callback - called from updateExcel - sets input values according to user selections
    function onGotRange(result) {
    var range = result.getReturnValue();
    var values = new Array(2);
    values[0] = new Array(1);
    values[0][0] = currentRegion;
    values[1] = new Array(1);
    values[1][0] = currentDestinationType;
    range.setValuesAsync(values, null, null);
     
    // Initiate process of refreshing the script variable detailRangeValues
    if (result.getUserContext() == 0)
    ewaChart.getActiveWorkbook().getRangeA1Async("Output!OutputTopFiveDetails", onGotDetailRange, null);
    }

```


## Conclusion
<a name="bk_addresources"> </a>

This walkthrough gives an example of how web developers can create rich, interactive mashups using Excel Services and other technologies. 
  
    
    

