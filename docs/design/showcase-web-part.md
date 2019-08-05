---
title: "SharePoint web part design showcase: Create a To-Do list property pane"
description: Create a To-Do list web part that uses a single pane and is reactive.
ms.date: 01/23/2018 
localization_priority: Priority
---

# SharePoint web part design showcase: Create a To-Do list property pane

This article describes how to create a To-Do list web part. This example uses the single pane [property pane type](design-a-web-part.md) and is [reactive](reactive-and-nonreactive-web-parts.md) and based on the [Office UI Fabric](https://developer.microsoft.com/en-us/fabric) responsive grid.


## Create a To-Do list web part

1. Add a description to help users understand more about the web part and its properties.

	In this example, the description is "Select a source for your to-dos and customize the display for the list of tasks."
	
	![Adding a description](../images/design-showcase-01.png)

	<br/>

2. Add a Fabric [drop-down component](https://developer.microsoft.com/en-us/fabric#/components/dropdown) connected to a list.

	![Adding a Fabric dropdown](../images/design-showcase-02.png)

	<br/>

3. Add a Fabric [checkbox component](https://developer.microsoft.com/en-us/fabric#/components/checkbox) to display completed tasks.

	![Adding a Fabric check box](../images/design-showcase-03.png)

	<br/>

4. Add two more check boxes to control display options.

	![Adding two more Fabric check boxes](../images/design-showcase-04.png)

	<br/>

5. Add a Fabric [slider](https://developer.microsoft.com/en-us/fabric#/components/slider) for the maximum number of items to display.

	![Adding a Fabric slider](../images/design-showcase-05.png)

	<br/>

6. Next, the author of the page selects a list or manually adds tasks to prepopulate the To-Do list web part.

	![Select a list in pane](../images/design-showcase-06.png)

	<br/>

	![Select a list in pane expanded](../images/design-showcase-07.png)

	<br/>

	![Manual addition of tasks to list](../images/design-showcase-08.png)

	<br/>

7. The web part shows an indicator of items loading onto the page.

	![Indicator of items](../images/design-showcase-09.png)

	<br/>

8. Items from the list load.

	![List items loading](../images/design-showcase-10.png)

	<br/>

	When the new tasks are loaded, they fade into view by using animation components from Office UI Fabric.

	![New tasks loaded](../images/design-showcase-11.png)

	<br/>

9. The property pane controls the UI. Tasks with pivots enabled are displayed via the Display check boxes in the property pane. 

	![Property pane controlling web part items](../images/design-showcase-12.png)

	<br/>

## Responsive views

The following example shows the 2/3 column view of the web part.

![Two thirds column view](../images/design-showcase-13.png)

<br/>

The following example shows the 1/3 column view of the web part.

![One third column view](../images/design-showcase-14.png)

<br/>

The following example shows the mobile (read-only) view of the web part.

![Mobile view of the to-do list web part](../images/design-showcase-15.png)

<br/>

## See also

- [Designing great SharePoint experiences](design-guidance-overview.md)
