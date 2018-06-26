---
title: Use view formatting to customize SharePoint
description: Customize how views in SharePoint lists and libraries are displayed by constructing a JSON object that describes the elements that are displayed in a list view, and the styles to be applied to those elements.
ms.date: 06/08/2018
---

> [!NOTE]
> The View Formatting feature is not currently in production.  This is draft documentation and is subject to change before the feature is released.

# Use view formatting to customize SharePoint

You can use view formatting to customize how views in SharePoint lists and libraries are displayed.  To do this, you construct a JSON object that describes the elements that are displayed with a row is loaded in a list view, and styles to be applied to those elements.  View formatting does not change the data in list items of riles; it only changes how it's displayed to users who browse the list.  Anyone who can create and manage views in a list can use view formatting to configure how views are displayed.

> [!TIP]
> Samples demonstrated in this article and numerous other community samples are available from a GitHub repository dedicated for open-sourced column formatting definitions. You can find these samples from the [sp-dev-list-formatting](https://github.com/SharePoint/sp-dev-list-formatting) repository at [SharePoint](https://github.com/SharePoint) GitHub organization.

## Get started with view formatting

To open the view formatting pane, open the view dropdown, and choose **Format this view**.

The easiest way to use view formatting is to start from an example and edit it to apply to your specific view. The following sections contain examples that you can copy, paste, and edit for your scenarios. There are also several samples available in the [SharePoint/sp-dev-list-formatting repository](https://github.com/SharePoint/sp-dev-list-formatting).

## Apply conditional formatting

You can use view formatting to apply a class to a list view row, depending on the value of one or more fields in the row.  These examples leave the content and structure of list view rows intact.

For a list of recommended classes to use inside view formats, please see the [Style Guidelines section](https://github.com/SharePoint/sp-dev-docs/blob/master/docs/declarative-customization/column-formatting.md#style-guidelines) in the [Column Formatting reference document.](https://github.com/SharePoint/sp-dev-docs/blob/master/docs/declarative-customization/column-formatting.md)

### Conditional formatting based on a date range

The following image shows a list view with conditional formatting applied based on a date range:
![SharePoint list with view formatted with conditional formatting](../images/listformatting-additionalrowclass.png)

This example applies the class `sp-field-severity--severeWarning` to a list view row when the item's DueDate is before the current date/time.

```JSON
{
   "additionalRowClass": {
         "operator": "?",
         "operands": [
            {
               "operator": "<=",
               "operands": [
                  "[$DueDate]",
                  "@now"
               ]
            },
            "sp-field-severity--severeWarning",
            ""
         ]
      }
}
```

### Conditional formatting based on the value in a text or choice field 

This example was adopted from a column formatting example, [Conditional formatting based on the value in a text of choice field](https://github.com/ldemaris/sp-dev-docs/blob/patch-7/docs/declarative-customization/column-formatting.md#conditional-formatting-based-on-the-value-in-a-text-or-choice-field-advanced), with some important differences to apply the concept to list view rows.  The column formatting example applies both an icon and a class to a column based on the value of `@currentField`.  The `additionalRowClass` attribute in view formatting, however, only allows you to specify a class and not an icon.  Additionally, since `@currentField` always resolves to the value of the Title field when referenced inside a view format, this sample refers to the `$Status` field directly to determine which class to apply to the row.

```JSON
{
  "additionalRowClass": {
    "operator": "?",
    "operands": [
      {
        "operator": "==",
        "operands": [
          {
            "operator": "toString()",
            "operands": [
              "[$Status]"
            ]
          },
          "Done"
        ]
      },
      "sp-field-severity--good",
      {
        "operator": "?",
        "operands": [
          {
            "operator": "==",
            "operands": [
              {
                "operator": "toString()",
                "operands": [
                  "[$Status]"
                ]
              },
              "In progress"
            ]
          },
          "sp-field-severity--low",
          {
            "operator": "?",
            "operands": [
              {
                "operator": "==",
                "operands": [
                  {
                    "operator": "toString()",
                    "operands": [
                      "[$Status]"
                    ]
                  },
                  "In review"
                ]
              },
              "sp-field-severity--warning",
              {
                "operator": "?",
                "operands": [
                  {
                    "operator": "==",
                    "operands": [
                      {
                        "operator": "toString()",
                        "operands": [
                          "[$Status]"
                        ]
                      },
                      "Blocked"
                    ]
                  },
                  "sp-field-severity--severeWarning",
                  "sp-field-severity--blocked"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## Build custom row layouts

You can use view formatting to define a totally custom layout of field values inside a row.

### Multi-line view style

The following image shows a list with a custom multi-line view style applied:
![SharePoint list with multi-line view customization](../images/listformatting-rowformatter.png)

This example uses the `rowFormatter` element, which totally overrides the rendering of a list view row.  The `rowFormatter` in this example creates a bounding `<div />` box for every list view row.  Inside this bounding box, the `$Title` and `$Feedback` fields are displayed on separate lines.  Under those fields, a `button` element is displayed that, when clicked, does the same thing as clicking the list row in an uncustomized view, which is opening the property form for the item.  This `button` is displayed conditionally, when the value of the `$Assigned_x0020_To` field (assumed to be a person/group field) matches the current signed-in user.

```JSON
{
  "hideSelection": "true",
  "hideListHeader": "true",
  "rowFormatter": {
    "elmType": "div",
    "style": {
      "padding": "12px",
      "overflow": "hidden",
      "border-radius": "2px",
      "box-shadow": "0 1.6px 3.6px 0 #dddddd, 0 0.3px 0.9px 0 #e3e3e3",
      "margin-bottom": "12px"
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
            "style": {
              "font-size": "16px",
              "font-weight": "600",
              "padding-bottom": "8px"
            },
            "txtContent": "[$Title]"
          },
          {
            "elmType": "div",
            "txtContent": "[$Feedback]",
            "style": {
              "padding-bottom": "4px"
            }
          },
          {
            "elmType": "button",
            "customRowAction": {
              "action": "defaultClick"
            },
            "txtContent": "Give feedback",
            "style": {
              "cursor": "pointer",
              "font-weight": "600",
              "background-color": "#f4f4f4",
              "border": "1px solid transparent",
              "margin-top": "4px",
              "padding": "0 16 0 16px",
              "height": "32px",
              "border-radius": "2px",
              "box-shadow": "0 0 0 0 #ffffff",
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

### rowFormatter

Optional element.  Specifies a JSON object that describes a list view row format.  The schema of this JSON object is identical to the schema of a column format.  For details on this schema and its capabilities, see the [Column Format detailex syntax reference.](https://github.com/SharePoint/sp-dev-docs/blob/master/docs/declarative-customization/column-formatting.md#detailed-syntax-reference)

#### Differences in behavior between the rowFormatter element and column formatting

Despite sharing the same schema, there are some differences in behavior between elements inside a `rowFormatter` element and those same elements in a column formatting object.

 * `@currentField` always resolves to the value of the Title field inside a `rowFormatter`.

### additionalRowClass

Optional element.  Specifies a CSS class that is applied to the row.

`additionalRowClass` only takes effect when there is no `rowFormatter` element specified.  If a `rowFormatter` is specified, then `additionalRowClass` is ignored.

### hideSelection

Optional element.  Specifies whether the ability to select rows in the view is diabled or not.  *false* is the default behavior inside a list view.  *true* means that users will not be able to select list items.  

`hideSelection` only takes effect when there's a `rowFormatter` element specified.  If no `rowFormatter` is specified, then `hideSelection` is ignored.

### hideListHeader

Optional element.  Specifies whether the column headers in the view are hidden or not.  *false* is the default behavior inside a list view.  *true* means that the view will not display column headers.
