---
title: Use view formatting to customize SharePoint
description: Customize how views in SharePoint lists and libraries are displayed by constructing a JSON object that describes the elements that are displayed in a list view, and the styles to be applied to those elements.
ms.date: 06/08/2018
localization_priority: Priority
---

# Use view formatting to customize SharePoint

You can use view formatting to customize how views in SharePoint lists and libraries are displayed. To do this, you construct a JSON object that describes the elements that are displayed when a row is loaded in a list view and any styles to be applied to those elements. View formatting does not change the data in list items; it only changes how they're displayed to users who browse the list. Anyone who can create and manage views in a list can use view formatting to configure how views are displayed.

> [!TIP]
> Samples demonstrated in this article and numerous other community samples are available from a GitHub repository dedicated for open-sourced list formatting definitions. You can find these samples in the [sp-dev-list-formatting](https://github.com/SharePoint/sp-dev-list-formatting) repository within the [SharePoint](https://github.com/SharePoint) GitHub organization.

## Get started with view formatting

To open the view formatting pane, open the view dropdown and choose **Format this view**.

The easiest way to use view formatting is to start from an example and edit it to apply to your specific view. The following sections contain examples that you can copy, paste, and customize for your specific needs. There are also several samples available in the [SharePoint/sp-dev-list-formatting repository](https://github.com/SharePoint/sp-dev-list-formatting).

## Apply conditional classes

You can use view formatting to apply one or more classes to the entire list view row depending on the value of one or more fields in the row. These examples leave the content and structure of list view rows intact.

For a list of recommended classes to use inside view formats, please see the [Style Guidelines section](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting#style-guidelines) in the [Column Formatting reference document](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting).

> [!TIP]
> Using the `additionalRowClass` property to apply classes to list view rows will leave the formatting of individual columns in place. This allows you to combine view formats with column formatting for some really powerful visualizations.

### Conditional classes based on a date field

The following image shows a list view with a class applied based on the value of a date column:
![SharePoint list with view formatted with conditional formatting](../images/listformatting-additionalrowclass.png)

This example applies the class `sp-field-severity--severeWarning` to a list view row when the item's DueDate is before the current date/time:

```JSON
{
  "schema": "https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json",
   "additionalRowClass": "=if([$DueDate] <= @now, 'sp-field-severity--severeWarning', '')"
}
```

### Conditional classes based on the value in a text or choice field 

This example was adopted from a column formatting example, [Conditional formatting based on the value in a text or choice field](https://github.com/SharePoint/sp-dev-list-formatting/tree/master/column-samples/text-conditional-format), with some important differences to apply the concept to list view rows. The column formatting example applies both an icon and a class to a column based on the value of `@currentField`. The `additionalRowClass` attribute in view formatting, however, only allows you to specify a class and not an icon. Additionally, since `@currentField` always resolves to the value of the `Title` field when referenced inside a view format, this sample refers to the `Status` field directly (by using the  to determine which class to apply to the row.

```JSON
{
  "schema": "https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json",
  "additionalRowClass": "=if([$Status] == 'Done', 'sp-field-severity--good', if([$Status] == 'In progress', 'sp-field-severity--low' ,if([$Status] == 'In review','sp-field-severity--warning', if([$Status] == 'Has issues','sp-field-severity--blocked', ''))))"
}
```

You can find this sample with additional details here: [Conditional formatting based on choice field](https://github.com/SharePoint/sp-dev-list-formatting/tree/master/view-samples/text-conditional-format)

## Build custom row layouts

You can use view formatting to define a totally custom layout of field values inside a row using the same syntax used in Column Formatting.

### Multi-line view style

The following image shows a list with a custom multi-line view style applied:
![SharePoint list with multi-line view customization](../images/listformatting-rowformatter.png)

This example uses the `rowFormatter` element, which totally overrides the rendering of a list view row. The `rowFormatter` in this example creates a bounding `<div />` box for every list view row. Inside this bounding box, the `$Title` and `$Feedback` fields are displayed on separate lines. Under those fields, a `button` element is displayed that, when clicked, does the same thing as clicking the list row in an uncustomized view, which is opening the property form for the item. This `button` is displayed conditionally, when the value of the `$Assigned_x0020_To` field (assumed to be a person/group field) matches the current signed-in user:

```JSON
{
  "schema": "https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json",
  "hideSelection": true,
  "hideColumnHeader": true,
  "rowFormatter": {
    "elmType": "div",
    "attributes": {
      "class": "sp-row-card"
    },
    "children": [
      {
        "elmType": "div",
        "style": {
          "text-align": "left"
        },
        "children": [
          {
            "elmType": "div",
            "attributes": {
              "class": "sp-row-title"
            },
            "txtContent": "[$Title]"
          },
          {
            "elmType": "div",
            "attributes": {
              "class": "sp-row-listPadding"
            },
            "txtContent": "[$Feedback]"
          },
          {
            "elmType": "button",
            "customRowAction": {
              "action": "defaultClick"
            },
            "txtContent": "Give feedback",
            "attributes": {
              "class": "sp-row-button"
            },
            "style": {
              "display": {
                "operator": "?",
                "operands": [
                  {
                    "operator": "==",
                    "operands": [
                      "@me",
                      "[$Assigned_x0020_To.email]"
                    ]
                  },
                  "",
                  "none"
                ]
              }
            }
          }
        ]
      }
    ]
  }
}
```

You can find this sample with additional details here: [Multi-line view rendering](https://github.com/SharePoint/sp-dev-list-formatting/tree/master/view-samples/multi-line-view)

## Creating custom JSON

Creating custom view formatting JSON from scratch is simple if you understand the schema. To create your own custom column formatting:

1. [Download Visual Studio Code](https://code.visualstudio.com/Download). It's free and fast to download. 

2. In Visual Studio Code, create a new file, and save the empty file with a .json file extension.

3. Paste the following lines of code into your empty file.

   ```JSON
    {
    "$schema": "https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json"
    }
   ```

You now have validation and autocomplete to create your JSON. You can start adding your JSON after the first line that defines the schema location. 

> [!TIP]
> At any point, select **Ctrl**+**Space** to have Visual Studio Code offer suggestions for properties and values. For more information, see [Editing JSON with Visual Studio Code](https://code.visualstudio.com/Docs/languages/json).

## Detailed syntax reference

### rowFormatter

Optional element. Specifies a JSON object that describes a list view row format. The schema of this JSON object is identical to the schema of a column format. For details on this schema and its capabilities, see the [Column Format detailed syntax reference](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting#detailed-syntax-reference).

>[!NOTE]
> Using the `rowFormatter` property will override anything specified in the `additionalRowClass` property. They are mutually exclusive.

#### Differences in behavior between the rowFormatter element and column formatting

Despite sharing the same schema, there are some differences in behavior between elements inside a `rowFormatter` element and those same elements in a column formatting object.

 * `@currentField` always resolves to the value of the `Title` field inside a `rowFormatter`.

### additionalRowClass

Optional element. Specifies a CSS class(es) that is applied to the entire row. Supports expressions.

`additionalRowClass` only takes effect when there is no `rowFormatter` element specified.  If a `rowFormatter` is specified, then `additionalRowClass` is ignored.

### hideSelection

Optional element. Specifies whether the ability to select rows in the view is diabled or not. *false* is the default behavior inside a list view (meaning selection is visiable and enabled). *true* means that users will not be able to select list items.  

`hideSelection` only takes effect when there's a `rowFormatter` element specified.  If no `rowFormatter` is specified, then `hideSelection` is ignored.

### hideColumnHeader

Optional element. Specifies whether the column headers in the view are hidden or not. *false* is the default behavior inside a list view (meaning column headers will be visible). *true* means that the view will not display column headers.
