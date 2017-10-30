---
title: "SharePoint web part design showcase: Create a To-Do list property pane"
ms.date: 09/25/2017 
---

# SharePoint web part design showcase: Create a To-Do list property pane

This article describes how to create a To-Do list web part. This example uses the single pane [property pane type](design-a-web-part.md) and is [reactive](reactive-and-nonreactive-web-parts.md) and based on the [Office UI Fabric](https://dev.office.com/fabric#/) responsive grid.


1. Add a description to help users understand more about the web part and its properties.

	In this example, the description is "Select a source for your to-dos and customize the display for the list of tasks."
	
	![Adding a description](../images/design-showcase-01.png)

2. Add a Fabric [drop-down component](http://dev.office.com/fabric#/components/dropdown) connected to a list.

	![Adding a Fabric dropdown](../images/design-showcase-02.png)

3. Add a Fabric [checkbox component](http://dev.office.com/fabric#/components/checkbox) to display completed tasks.

	![Adding a Fabric check box](../images/design-showcase-03.png)

4. Add two more checkboxes to control display options.

	![Adding two more Fabric check boxes](../images/design-showcase-04.png)

5. Add a Fabric [slider](http://dev.office.com/fabric#/components/slider) for the maximum number of items to display.

	![Adding a Fabric slider](../images/design-showcase-05.png)

6. Next, the author of the page selects a list or manually adds tasks to prepopulate the To-Do list web part.

	![Select a list in pane](../images/design-showcase-06.png)
	![Select a list in pane expanded](../images/design-showcase-07.png)
	![Manual addition of tasks to list](../images/design-showcase-08.png)

7. The web part shows an indicator of items loading onto the page.

	![Indicator of items](../images/design-showcase-09.png)

8. Items from the list load.

	![List items loading](../images/design-showcase-10.png)

	When the new tasks are loaded, they fade into view using animation components from Office UI Fabric.

	![New tasks loaded](../images/design-showcase-11.png)

9. The property pane controls the UI. Tasks with pivots enabled are displayed via the Display checkboxes in the property pane. 

	![Property pane controlling web part items](../images/design-showcase-12.png)

## Responsive views

The following example shows the 2/3 column view of the web part.

![Two thirds column view](../images/design-showcase-13.png)

The following example shows the 1/3 column view of the web part.


![One third column view](../images/design-showcase-14.png)

The following example shows the mobile (read-only) view of the web part.

![Mobile view of the to-do list web part](../images/design-showcase-15.png)