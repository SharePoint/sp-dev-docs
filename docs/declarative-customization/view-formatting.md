---
title: Use view formatting to customize SharePoint
description: Customize how views in SharePoint lists and libraries are displayed by constructing a JSON object that describes the elements that are displayed in a list view, and the styles to be applied to those elements.
ms.date: 06/08/2018
---

> [!NOTE]
> The View Formatting feature is not currently in production.  This is draft documentation and is subject to change before the feature is released.

# Use view formatting to customize SharePoint

You can use view formatting to customize how views in SharePoint lists and libraries are displayed.  To do this, you construct a JSON object that describes the elements that are displayed with a row is loaded in a list view, and styles to be applied to those elements.  View formatting does not change the data in list items of riles; it only changes how it's displayed to users who browse the list.  Anyone who can create and manage views in a list can use view formatting to configure how views are displayed.

For example, a list with no view formats applied might look like this:

A list with a view format that applies simple conditional formatting to the row based on the value of the Effort field might look like this:

A list with a more complex view format that totally reorganizes the structure and layout of the rows in the view might look like this:

> [!TIP]
> Samples demonstrated in this article and numerous other community samples are available from a GitHub repository dedicated for open-sourced column formatting definitions. You can find these samples from the [sp-dev-list-formatting](https://github.com/SharePoint/sp-dev-list-formatting) repository at [SharePoint](https://github.com/SharePoint) GitHub organization.

## Get started with view formatting

To open the view formatting pane, open the view dropdown, and choose **Format this view**.

The easiest way to use view formatting is to start from an example and edit it to apply to your specific view. The following sections contain examples that you can copy, paste, and edit for your scenarios. There are also several samples available in the [SharePoint/sp-dev-list-formatting repository](https://github.com/SharePoint/sp-dev-list-formatting).

## Apply conditional formatting

You can use view formatting to apply a class to a list view row, depending on the value of one or more fields in the row.  These examples leave the content and structure of list view rows intact.

For a list of recommended classes to use inside view formats, please see the [Style Guidelines section](https://github.com/SharePoint/sp-dev-docs/blob/master/docs/declarative-customization/column-formatting.md#style-guidelines) in the [Column Formatting reference document.](https://github.com/SharePoint/sp-dev-docs/blob/master/docs/declarative-customization/column-formatting.md)

### Conditional formatting based on a number range

### Conditional formatting based on the value in a text or choice field 

## Build custom row layouts

You can use view formatting to define a totally custom layout of field values inside a row.

### Multi-line view

### Multi-line view with an image

## Creating custom JSON

Creating custom view formatting JSON from scratch is simple if you understand the schema. To create your own custom column formatting:

1. [Download Visual Studio Code](https://code.visualstudio.com/Download). It's free and fast to download. 

2. In Visual Studio Code, create a new file, and save the empty file with a .json file extension.

3. Paste the following lines of code into your empty file.

   ```JSON
    {
    "$schema": "http://listformatting.sharepointpnp.com/viewFormattingSchema.json"
    }
   ```

   You now have validation and autocomplete to create your JSON. You can start adding your JSON after the first line that defines the schema location. 

> [!TIP]
> At any point, select **Ctrl**+**Space** to have Visual Studio Code offer suggestions for properties and values. For more information, see [Editing JSON with Visual Studio Code](https://code.visualstudio.com/Docs/languages/json).

## Detailed syntax reference

### hideColumnHeader

Optional element.  Specifies whether the column headers in the view are hidden or not.  *false* is the default behavior inside a list view.  *true* means that the view will not display column headers.

### hideSelection

Optional element.  Specifies whether the ability to select rows in the view is diabled or not.  *false* is the default behavior inside a list view.  *true* means that users will not be able to select list items.

### additionalRowClass

Optional element.  Specifies a CSS class that is applied to the row.

### rowFormatter

Optional element.  Specifies a JSON object that describes a view format.  The schema of this JSON object is identical to the schema of a column format.  For details on this schema and its capabilities, see the [Column Format detailex syntax reference.](https://github.com/SharePoint/sp-dev-docs/blob/master/docs/declarative-customization/column-formatting.md#detailed-syntax-reference)
