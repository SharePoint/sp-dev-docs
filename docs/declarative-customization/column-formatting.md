---
title: Use column formatting to customize SharePoint
description: Customize how fields in SharePoint lists and libraries are displayed by constructing a JSON object that describes the elements that are displayed when a field is included in a list view, and the styles to be applied to those elements.
ms.date: 08/21/2019
localization_priority: Priority
---

# Use column formatting to customize SharePoint

You can use column formatting to customize how fields in SharePoint lists and libraries are displayed. To do this, you construct a JSON object that describes the elements that are displayed when a field is included in a list view, and the styles to be applied to those elements. The column formatting does not change the data in the list item or file; it only changes how it’s displayed to users who browse the list. Anyone who can create and manage views in a list can use column formatting to configure how view fields are displayed. 

For example, a list with the fields Title, Effort, Assigned To, and Status with no customizations applied might look like this: 

![SharePoint list with four unformatted columns](../images/sp-columnformatting-none.png)

A list with the appearance of the **Effort**, **Assigned To**, and **Status** fields customized via column formatting might look like this:

![SharePoint list with three columns formatted](../images/sp-columnformatting-all.png)

> [!TIP]
> Samples demonstrated in this article and numerous other community samples are available from a GitHub repository dedicated for open-sourced column formatting definitions. You can find these samples from the [sp-dev-column-formatting](https://github.com/SharePoint/sp-dev-column-formatting) repository at [SharePoint](https://github.com/SharePoint) GitHub organization.

## How is column formatting different than the Field Customizer?

Both column formatting and [SharePoint Framework Field Customizer](https://docs.microsoft.com/sharepoint/dev/spfx/extensions/get-started/building-simple-field-customizer) extensions enable you to customize how fields in SharePoint lists are displayed. The Field Customizer is more powerful because you can use it to write any code that you want to control how a field is displayed. 

Column formatting is more easily and broadly applied. However, it is less flexible, because it does not allow for custom code; it only allows for certain predefined elements and attributes. 

The following table compares column formatting and the Field Customizer.

| Field type        | Column formatting          | Field Customizer  |
| ------------- |:-------------| :-----|
| Conditional formatting based on item values and value ranges      | Supported | Supported |
| Action links       | Support for static hyperlinks that do not launch script      |  Support for any hyperlink, including those that invoke custom script   |
| Data visualizations | Support for simple visualizations that can be expressed using HTML and CSS      |   Support for arbitrary data visualizations  |

If you can accomplish your scenario by using column formatting, it’s typically quicker and easier to do that than to use a Field Customizer. Anyone who can create and manage views in a list can use column formatting to create and publish customizations. Use a Field Customizer for more advanced scenarios that column formatting does not support.

## Get started with column formatting

To open the column formatting pane, open the drop-down menu under a column. Under **Column Settings**, choose **Format this column**.

If no one has used column formatting on the column you selected, the pane will look like the following.

![Format column pane with space to paste or type column formatting JSON and options to preview, save, and cancel](../images/sp-columnformatting-panel.png)

A field with no formatting specified uses the default rendering. To format a column, enter the column formatting JSON in the box.

To preview the formatting, select **Preview**. To commit your changes, select **Save**. When you save, anyone who views the list will see the customization that you applied.

The easiest way to use column formatting is to start from an example and edit it to apply to your specific field. The following sections contain examples that you can copy, paste, and edit for your scenarios. There are also several samples available in the [SharePoint/sp-dev-column-formatting repository](https://github.com/SharePoint/sp-dev-column-formatting).

> [!NOTE]
> All examples in this document refer to the json schema used in SharePoint Online. To format columns on SharePoint 2019, please use `https://developer.microsoft.com/json-schemas/sp/v1/column-formatting.schema.json` as the schema.


## Display field values (basic)

The simplest column formatting is one that places the value of the field inside a `<div />` element. This example works for number, text, choice, and date fields:

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField"
}
```

<br/>

Some field types require a bit of extra work to retrieve their values. Person fields are represented in the system as objects, and a person’s display name is contained within that object’s **title** property. This is the same example, modified to work with the person field:

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField.title"
}
```

<br/>

Lookup fields are also represented as objects; the display text is stored in the **lookupValue** property. This example works with a lookup field:

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField.lookupValue"
}
```

## Apply conditional formatting
You can use column formatting to apply styles, classes, and icons to fields, depending on the value inside those fields.

### Conditional formatting based on a number range (basic)

The following image shows an example of conditional formatting applied to a number range.

![Severity warning of 70 with orange background](../images/sp-columnformatting-conditionalbasic.png)

This example uses an Excel-style conditional expression (`=if`) to apply a class (`sp-field-severity--warning`) to the parent `<div />` element when the value in the current field is less than or equal to 70. This causes the field to be highlighted when the value is less than or equal to 70, and appear normally if it's greater than 70.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "attributes": {
    "class": "=if(@currentField <= 70,'sp-field-severity--warning', '')"
  },
  "children": [
    {
      "elmType": "span",
      "style": {
        "display": "inline-block",
        "padding": "0 4px"
      },
      "attributes": {
        "iconName": "=if(@currentField <= 70,'Error', '')"
      }
    },
    {
      "elmType": "span",
      "txtContent": "@currentField"
    }
  ]
}
```

### Conditional formatting based on the value in a text or choice field (advanced)

The following image shows an example of conditional formatting applied to a text or choice field:

![Status field with done colored green, blocked colored red, and in review colored orange](../images/sp-columnformatting-conditionaladvanced.png)

You can apply conditional formatting to text or choice fields that might contain a fixed set of values. The following example applies different classes depending on whether the value of the field is Done, In Review, Has Issues, or another value. This example applies a CSS class (`sp-field-severity--low, sp-field-severity--good, sp-field-severity--warning, sp-field-severity--severeWarning, sp-field-severity--blocked`) to the  `<div />` based on the field's value. It then outputs a `<span />` element with an `IconName` attribute. This attribute automatically applies another CSS class to that `<span />` that shows an [Office UI Fabric](https://dev.office.com/fabric#/) icon inside that element. Finally, another `<span />` element is output that contains the value inside the field.

This pattern is useful when you want different values to map to different levels of urgency or severity. You can start from this example and edit it to specify your own field values and the styles and icons that should map to those values.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "attributes": {
    "class": "=if(@currentField == 'Done', 'sp-field-severity--good', if(@currentField == 'In progress', 'sp-field-severity--low', if(@currentField == 'In review', 'sp-field-severity--warning', if(@currentField == 'Has issues', 'sp-field-severity--severeWarning', 'sp-field-severity--blocked')))) + ' ms-fontColor-neutralSecondary'"
  },
  "children": [
    {
      "elmType": "span",
      "style": {
        "display": "inline-block",
        "padding": "0 4px"
      },
      "attributes": {
        "iconName": "=if(@currentField == 'Done', 'CheckMark', if(@currentField == 'In progress', 'Forward', if(@currentField == 'In review', 'Error', if(@currentField == 'Has issues', 'Warning', 'ErrorBadge'))))"
      }
    },
    {
      "elmType": "span",
      "txtContent": "@currentField"
    }
  ]
}
```

## Apply formatting based on date ranges

Because dates are often used to track deadlines and key project timelines, a common scenario is to apply formatting based on the value in a date/time field. To apply formatting based on the value in a date/time field, apply the following patterns.

### Formatting an item when a date column is before or after today's date (advanced)

The following image shows a field with conditional date formatting applied:

![Status field with the Overdue text colored red](../images/sp-columnformatting-overdue.png)

This example colors the current field red when the value inside an item's DueDate is before the current date/time. Unlike some of the previous examples, this example applies formatting to one field by looking at the value inside another field. Note that DueDate is referenced using the `[$FieldName]` syntax. FieldName is assumed to be the internal name of the field. This example also takes advantage of a special value that can be used in date/time fields - `@now`, which resolves to the current date/time, evaluated when the user loads the list view.

> [!NOTE]
> If you have spaces in the field name, those are defined as `_x0020_`. For example, a field named "Due Date" should be referenced as `$Due_x0020_Date`.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "debugMode": true,
  "txtContent": "@currentField",
  "style": {
    "color": "=if([$DueDate] <= @now, '#ff0000', '')"
  }
}
```

### Formatting items based on arbitrary dates (advanced)

To compare the value of a date/time field against a date that's not `@now`, follow the pattern in the following example. The following example colors the current field red if the due date was <= tomorrow. This is accomplished using date math. You can add milliseconds to any date and the result will be a new date. For example, to add a day to a date, you'd add (24\*60\*60\*1000 = 86,400,000). 

This example demonstrates an alternate syntax to express a conditional expression, using the ternary (`?`) operator inside an abstract syntax tree.

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField",
   "style": {
      "color": {
         "operator": "?",
         "operands": [
            {
               "operator": "<=",
               "operands": [
                  "[$DueDate]",
                  {
                     "operator": "+",
                     "operands": [
                        "@now",
                        86400000
                     ]
                  }
               ]
            },
            "#ff0000",
            ""
         ]
      }
   }
}
```

Here's the same sample from above, using the Excel-style expression syntax:
```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField",
   "style": {
      "color": "=if([$DueDate] <= @now + 86400000, '#ff0000', '')"
   }
}
```

<br/>


To compare a date/time field value against another date constant, use the `Date()` method to convert a string to a date. The following example colors the current field red if the value in the DueDate field is before 3/22/2017.

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField",
   "style": {
      "color": {
         "operator": "?",
         "operands": [
            {
               "operator": "<=",
               "operands": [
                  "[$DueDate]",
                  {
                     "operator": "Date()",
                     "operands": [
                        "3/22/2017"
                     ]
                  }
               ]
            },
            "#ff0000",
            ""
         ]
      }
   }
}
```

Here's the same sample from above, using the Excel-style expression syntax:
```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField",
   "style": {
      "color": "=if([$DueDate] <= Date('3/22/2017'), '#ff0000', '')"
   }
}
```

## Create clickable actions

You can use column formatting to provide hyperlinks that go to other webpages, or start custom functionality. This functionality is limited to static links that can be paramaterized with values from fields in the list. You can't use column formatting to output links to protocols other than `http://`, `https://`, or `mailto:`.

### Turn field values into hyperlinks (basic)

This example shows how to turn a text field that contains stock ticker symbols into a hyperlink that targets the Yahoo Finance real-time quotes page for that stock ticker. The example uses a `+` operator that appends the current field value to the static hyperlink <a>http://finance.yahoo.com/quote/</a>. You can extend this pattern to any scenario in which you want users to view contextual information related to an item, or you want to start a business process on the current item, as long as the information or process can be accessed via a hyperlink parameterized with values from the list item.

![Stocks list with ticker symbols turned into hyperlinks](../images/sp-columnformatting-hyperlinks.png)

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "a",
   "txtContent": "@currentField",
   "attributes": {
      "target": "_blank",
      "href": "='http://finance.yahoo.com/quote/' + @currentField"
   }
}
```

### Add an action button to a field (advanced)

The following image shows action buttons added to a field.

![Assigned To field with mail buttons added to names](../images/sp-columnformatting-actionbutton.png)

You can use column formatting to render quick action links next to fields. The following example, intended for a person field, renders two elements inside the parent `<div />` element:

- A `<span />` element that contains the person’s display name.
- An `<a />` element that opens a mailto: link that creates an email with a subject and body populated dynamically via item metadata. The `<a />` element is styled using the `ms-Icon`, `ms-Icon—Mail`, and `ms-QuickAction` [Fabric](https://developer.microsoft.com/fabric) classes to make it look like a clickable email icon. 

```JSON
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "elmType": "div",
    "children": [
        {
            "elmType": "span",
            "style": {
                "padding-right": "8px"
            },
            "txtContent": "@currentField.title"
        },
        {
            "elmType": "a",
            "attributes": {
                "iconName": "Mail",
                "class": "sp-field-quickActions",
                "href": {
                    "operator": "+",
                    "operands": [
                        "mailto:",
                        "@currentField.email",
                        "?subject=Task status&body=Hey, how is your task coming along?.\r\n---\r\n",
                        "@currentField.title",
                        "\r\nClick this link for more info. http://contoso.sharepoint.com/sites/ConferencePrep/Tasks/Prep/DispForm.aspx?ID=",
                        "[$ID]"
                    ]
                }
            }
        }
    ]
}
```

## Create simple data visualizations

Use column formatting to combine conditional and arithmetical operations to achieve basic data visualizations.

### Format a number column as a data bar (advanced)

The following image shows a number column formatted as a data bar.

![Effort list with number list items shown as bars](../images/sp-columnformatting-databars.png)

This example applies `background-color` and `border-top` styles to create a data bar visualization of `@currentField`, which is a number field. The bars are sized differently for different values based on the way the `width` attribute is set - it's set to `100%` when the value is greater than 20, and `(@currentField * 5)%` otherwise. To fit this example to your number column, you can adjust the boundary condition (`20`) to match the maximum anticipated value inside the field, and change the equation to specify how much the bar should grow depending on the value inside the field.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "children": [
    {
      "elmType": "span",
      "txtContent": "@currentField",
      "style": {
        "padding-left": "8px",
        "white-space": "nowrap"
      }
    }
  ],
  "attributes": {
    "class": "sp-field-dataBars"
  },
  "style": {
    "padding": "0",
    "width": "=if(@currentField >= 20, '100%', (@currentField * 5) + '%')"
  }
}
```

### Show trending up/trending down icons (advanced)

The following image shows a list with trending up/trending down icons added:

![List with trending up and trending down icons next to list items](../images/sp-columnformatting-trending.png)

This example relies on two number fields, `Before` and `After`, for which the values can be compared. It shows the appropriate trending icon next to the `After` field, depending on that field's value compared to the value in `Before`.  `sp-field-trending--up` is used when `After`'s value is higher; `sp-field-trending--down` is used when `After`'s value is lower.

```JSON
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "elmType": "div",
    "children": [
        {
            "elmType": "span",
            "attributes": {
                "class": {
                    "operator": "?",
                    "operands": [
                        {
                            "operator": ">",
                            "operands": [
                                "[$After]",
                                "[$Before]"
                            ]
                        },
                        "sp-field-trending--up",
                        "sp-field-trending--down"
                    ]
                },
                "iconName": {
                    "operator": "?",
                    "operands": [
                        {
                            "operator": ">",
                            "operands": [
                                "[$After]",
                                "[$Before]"
                            ]
                        },
                        "SortUp",
                        {
                            "operator": "?",
                            "operands": [
                                {
                                    "operator": "<",
                                    "operands": [
                                        "[$After]",
                                        "[$Before]"
                                    ]
                                },
                                "SortDown",
                                ""
                            ]
                        }
                    ]
                }
            }
        },
        {
            "elmType": "span",
            "txtContent": "[$After]"
        }
    ]
}
```

Here's the same sample from above, using the Excel-style expression syntax:
```JSON
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "elmType": "div",
    "children": [
        {
            "elmType": "span",
            "attributes": {
                "class": "=if([$After] > [$Before], 'sp-field-trending--up', 'sp-field-trending--down')",
                "iconName": "=if([$After] > [$Before], 'SortUp', "=if([$After] < [$Before], 'SortDown', ''))"
            }
        },
        {
            "elmType": "span",
            "txtContent": "[$After]"
        }
    ]
}
```

## Create a button to launch a Flow

The following screenshot shows a list with a Flow button added to the Action column:

![screenshot of the sample](../images/sp-columnformatting-flow.png)

You can use column formatting to create buttons that, when selected, run Flows on the corresponding list item.  The Flow Launch Panel will be displayed after choosing the button and the Flow will just run.

To use the sample below, you must substitute the ID of the Flow you want to run.  This ID is contained within the `customRowAction` attribute inside the `button` element.  To obtain a Flow's ID:

1. Choose Flow > See your flows in the SharePoint list where the Flow is configured.
2. Choose the Flow you want to run.
3. Copy the ID from the end of the URL.  

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "button",
  "customRowAction": {
    "action": "executeFlow",
    "actionParams": "{\"id\": \"edf627d9-20f4-45ba-8bc9-4494bf2ff1be\"}"
  },
  "attributes": {
    "class": "ms-fontColor-themePrimary ms-fontColor-themeDarker--hover"
  },
  "style": {
    "border": "none",
    "background-color": "transparent",
    "cursor": "pointer"
  },
  "children": [
    {
      "elmType": "span",
      "attributes": {
        "iconName": "Flow"
      },
      "style": {
        "padding-right": "6px"
      }
    },
    {
      "elmType": "span",
      "txtContent": "It's Flow Time!"
    }
  ]
}
```

Additionally, you can use `headerText` and `runFlowButtonText` options within the `actionParams` property to customize portions of the Flow panel itself! See the [button elements](https://docs.microsoft.com/sharepoint/dev/declarative-customization/column-formatting#button-elements) portion of the Detailed syntax reference for more details.

## Formatting multi-value fields
You can use column formatting to apply styles to each member of a multi-value field of type Person, Lookup and Choice.

### Basic text formatting
The following image shows an example of multi-value field formatting applied to a Person field.

![List of buttons that notifies all assignees of each item, first row is empty, second row reads "Send email to Loyd Barham", third row reads "Send email to all 3 members"](../images/sp-columnformatting-multi-value-0.png)

This example uses the `length` operator to detect the number of members of the field, and used `join` operator to concatenate the email addresses of all members. This example hides the button when no member is found, and takes care of plurals in the text.

```json
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "elmType": "a",
    "style": {
        "display": "=if(length(@currentField) > 0, 'flex', 'none')"
    },
    "attributes": {
        "href": {
            "operator": "+",
            "operands": [
                "mailto:",
                "=join(@currentField.email, ';')"
            ]
        }
    },
    "children": [
        {
            "elmType": "span",
            "style": {
                "display": "inline-block",
                "padding": "0 4px"
            },
            "attributes": {
                "iconName": "Mail"
            }
        },
        {
            "elmType": "span",
            "txtContent": {
                "operator": "+",
                "operands": [
                    "Send email to ",
                    {
                        "operator": "?",
                        "operands": [
                            "=length(@currentField) == 1",
                            "@currentField.title",
                            "='all ' + length(@currentField) + ' members'"
                        ]
                    }
                ]
            }
        }
    ]
}
```

### Simple HTML elements formatting
The following image shows an example of constructing a simple sentence from the values of a multi-value Lookup field.

![Screenshot of a field reads "North America, APAC, and Europe"](../images/sp-columnformatting-multi-value-1.png)

This examples uses operator `loopIndex` and `length` to identify the last member of the field, and attribute `forEach` to duplicate HTML elements.

```json
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "elmType": "div",
    "style": {
        "display": "block"
    },
    "children": [
        {
            "elmType": "span",
            "forEach": "region in @currentField",
            "txtContent": {
               "operator": "?",
               "operands": [
                  "=loopIndex('region') == 0",
                  "[$region.lookupValue]",
                  {
                     "operator": "?",
                     "operands": [
                        "=loopIndex('region') + 1 == length(@currentField)",
                        "=', and ' + [$region.lookupValue]",
                        "=', ' + [$region.lookupValue]"
                     ]
                  }
               ]
            }
        }
    ]
}
```

### Complex HTML elements formatting
The following image shows an example of building a list of users with pictures, email addresses and a simple counter for the number of members at the top.

![List with name "Owners" and 3 rows where each user in the field has a profile picture, name and email displayed, and a small gray counter of owners at top left corner that has a different color when it says 0.](../images/sp-columnformatting-multi-value-2.png)

This examples uses operator `loopIndex` to control the margins all rows but the first one, and attribute `forEach` to build the list of members.

```json
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "elmType": "div",
    "style": {
        "min-height": "1.5em",
        "flex-direction": "column",
        "align-items": "start"
    },
    "children": [
        {
            "elmType": "div",
            "txtContent": "=length(@currentField)",
            "style": {
                "border-radius": "1.5em",
                "height": "1.5em",
                "min-width": "1.5em",
                "color": "white",
                "text-align": "center",
                "position": "absolute",
                "top": "0",
                "right": "1em",
                "background-color": "=if(length(@currentField) == 0, '#ddd', '#aaa'"
            }
        },
        {
            "elmType": "div",
            "forEach": "person in @currentField",
            "style": {
                "justify-content": "center",
                "margin-top": "=if(loopIndex('person') == 0, '0', '1em')"
            },
            "children": [
                {
                    "elmType": "div",
                    "style": {
                        "display": "flex",
                        "flex-direction": "row",
                        "justify-content": "center"
                    },
                    "children": [
                        {
                            "elmType": "img",
                            "attributes": {
                                "src": "=[$person.picture]"
                            },
                            "style": {
                                "width": "3em",
                                "height": "3em",
                                "border-radius": "3em"
                            }
                        },
                        {
                            "elmType": "a",
                            "attributes": {
                                "href": "='mailto:' + [$person.email]"
                            },
                            "style": {
                                "margin-left": "0.5em"
                            },
                            "children": [
                                {
                                    "elmType": "div",
                                    "txtContent": "[$person.title]",
                                    "style": {
                                        "font-size": "1.2em"
                                    }
                                },
                                {
                                    "elmType": "div",
                                    "txtContent": "[$person.email]",
                                    "style": {
                                        "color": "gray"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Supported column types

The following column types support column formatting:

* Calculated
* Choice
* ContentType
* Counter (ID)
* Currency*
* Date/Time
* Hyperlink
* Location*
* Lookup
* Multi-Choice
* Multi-Line Text
* Multi-Person
* Number
* Person or Group
* Picture
* Single line of text
* Title (in Lists)
* Yes/No

_* Formats for these column types can only be applied through Field Settings_

The following are currently **not** supported:

* Managed Metadata
* Filename (in Document Libraries)
* Retention Label

## Style guidelines

### Predefined classes

You can use the following predefined classes for several common scenarios.

| Class name | Screenshot |
| ------------- |:-------------|
| sp-field-customFormatBackground |Specifies the padding and margins for all classes that use backgrounds. |
| sp-field-severity--good |![Green box with text Done and check mark](../images/sp-columnformatting-severitygood.png) |
| sp-field-severity--low |![White box with text In Progress and arrow](../images/sp-columnformatting-severitylow.png) |
| sp-field-severity--warning | ![Yellow box with text In Review and hazard icon](../images/sp-columnformatting-severitywarning.png) |
| sp-field-severity--severeWarning | ![Orange box with text Has issues and hazard icon](../images/sp-columnformatting-severityseverewarning.png) |
| sp-field-severity--blocked | ![Red box with text Blocked and X icon](../images/sp-columnformatting-severityblocked.png) |
| sp-field-dataBars |![Blue bar with number 4](../images/sp-columnformatting-databar.png) |
| sp-field-trending--up |![Green arrow with number 500](../images/sp-columnformatting-trendingup.png) |
| sp-field-trending--down |![Red arrow with number 100](../images/sp-columnformatting-trendingdown.png) |
| sp-field-quickActions |![Name with mail icon](../images/sp-columnformatting-quickaction.png) |

> [!NOTE]
> The icons shown above for the `sp-field-severity` classes are **NOT** part of the class. Only the background color is included. Icons can be added by using the `iconName` attribute.

In addition to the classes listed above, the classes (such as the theme color, typography, grid system, etc.) defined by the Office UI Fabric can be used. For details, see the [Fabric website](https://dev.office.com/fabric#/styles/colors). 

### Predefined icons

You can use predefined icons from Office UI Fabric. For details, see the [Fabric website](https://dev.office.com/fabric#/styles/icons). 

## Creating custom JSON

Creating custom column formatting JSON from scratch is simple if you understand the schema. To create your own custom column formatting:

1. [Download Visual Studio Code](https://code.visualstudio.com/Download). It's free and fast to download. 

2. In Visual Studio Code, create a new file, and save the empty file with a .json file extension.

3. Paste the following lines of code into your empty file.

   ```JSON
    {
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json"
    }
   ```

   You now have validation and autocomplete to create your JSON. You can start adding your JSON after the first line that defines the schema location. 

> [!TIP]
> At any point, select **Ctrl**+**Space** to have Visual Studio Code offer suggestions for properties and values. For more information, see [Editing JSON with Visual Studio Code](https://code.visualstudio.com/Docs/languages/json).

> [!TIP]
> SharePoint Patterns and Practices provides a free web part, [Column Formatter](https://github.com/SharePoint/sp-dev-solutions/blob/master/solutions/ColumnFormatter/docs/documentation/docs/getting-started.md), that can be used to edit and apply formats directly in the browser.

## Detailed syntax reference

### elmType

Specifies the type of element to create. Valid elements include:

- div
- span
- a
- img
- svg
- path
- button

Any other value will result in an error.

#### button elements

`Button` elements can be used to launch a specific action on the parent item.  Every `button` element has a required property, `customRowAction`, that specifies an `action` that's taken when the button is clicked. This action must be one of the following values:

- **defaultClick**: buttons with this action will do the same thing as clicking the list item in an uncustomized view. Below is an example of a button that, when clicked, simulates a click on the item, which results in the details pane being opened.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "button",
  "txtContent": "Open this item",
  "customRowAction": {
    "action": "defaultClick"
  }
}

```
- **share**:  Clicking the button will open the sharing dialog. Below is an example of this type of button.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "button",
  "txtContent": "Share this item",
  "customRowAction": {
    "action": "share"
  }
}

```
- **delete**: Clicking the button will open the delete confirmation dialog.
- **editProps**:  Clicking the button will open the item properties page in edit mode.
- **executeFlow**:  Clicking the button will launch the specified Flow, specified by ID inside the `actionParams` attribute.  For an example of this, see the [Create a button to launch a Flow](https://docs.microsoft.com/sharepoint/dev/declarative-customization/column-formatting#create-a-button-to-launch-a-flow) section in this document. Below is an example of this type of button.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/column-formatting.schema.json",
  "elmType": "button",
  "txtContent": "It's Flow Time!",
  "customRowAction": {
    "action": "executeFlow",
    "actionParams": "{\"id\":\"f7ecec0b-15c5-419f-8211-302a5d4e94f1\", \"headerText\":\"It's Flow Time!\",\"runFlowButtonText\":\"Do it\"}"
  }
}
```
The `actionParams` attribute can have the following options when using the `executeFlow` action:
- **id**: ID of the Flow to launch _(required)_
- **headerText**: Sets the text at the top of the flow panel _(optional)_
- **runFlowButtonText**: Sets the text of the primary button in the flow panel _(optional)_


### txtContent

An optional property that specifies the text content of the element specified by `elmType`. The value of this property can either be a string (including special strings) or an Expression object. 

### style

An optional property that specifies style attributes to apply to the element specified by `elmType`. This is an object with name-value pairs that correspond to CSS names and values. The values of each property in the style object can either be a string (including special strings) or an Expression object. The following style attributes are allowed.

    'background-color'
    'fill'
    'background-image'
    'border'
    'border-bottom'
    'border-bottom-color'
    'border-bottom-style'
    'border-bottom-width'
    'border-color'
    'border-left'
    'border-left-color'
    'border-left-style'
    'border-left-width'
    'border-right'
    'border-right-color'
    'border-right-style'
    'border-right-width'
    'border-style'
    'border-top'
    'border-top-color'
    'border-top-style'
    'border-top-width'
    'border-width'
    'outline'
    'outline-color'
    'outline-style'
    'outline-width'
    'border-bottom-left-radius'
    'border-bottom-right-radius'
    'border-radius'
    'border-top-left-radius'
    'border-top-right-radius'
    'box-decoration-break'
    'box-shadow'
    'box-sizing'

    'overflow-x'
    'overflow-y'
    'overflow-style'
    'rotation'
    'rotation-point'

    'opacity'
    'cursor'

    'height'
    'max-height'
    'max-width'
    'min-height'
    'min-width'
    'width'

    'flex-grow'
    'flex-shrink'
    'flex-flow'
    'flex-direction'
    'flex-wrap'
    'flex'
    'justify-content'
    'align-items'
    
    'box-align'
    'box-direction'
    'box-flex'
    'box-flex-group'
    'box-lines'
    'box-ordinal-group'
    'box-orient'
    'box-pack'

    'font'
    'font-family'
    'font-size'
    'font-style'
    'font-variant'
    'font-weight'
    'font-size-adjust'
    'font-stretch'

    'grid-columns'
    'grid-rows'

    'margin'
    'margin-bottom'
    'margin-left'
    'margin-right'
    'margin-top'

    'column-count'
    'column-fill'
    'column-gap'
    'column-rule'
    'column-rule-color'
    'column-rule-style'
    'column-rule-width'
    'column-span'
    'column-width'
    'columns'

    'padding'
    'padding-bottom'
    'padding-left'
    'padding-right'
    'padding-top'

    'bottom'
    'clear'
    'clip'
    'display'
    'float'
    'left'
    'overflow'
    'position' 
    'right'
    'top'
    'visibility'
    'z-index'

    'border-collapse'
    'border-spacing'
    'caption-side'
    'empty-cells'
    'table-layout'

    'color'
    'direction'
    'letter-spacing'
    'line-height'
    'text-align'
    'text-decoration'
    'text-indent'
    'text-transform'
    'unicode-bidi'
    'vertical-align'
    'white-space'
    'word-spacing'
    'hanging-punctuation'
    'punctuation-trim'
    'text-align-last'
    'text-justify'
    'text-outline'
    'text-shadow'
    'text-wrap'
    'word-break'
    'word-wrap'

The following example shows the value of a style object. In this example, two style properties (`padding` and `background-color`) will be applied. The `padding` value is a hard-coded string value. The `background-color` value is an Expression that is evaluated to either red (`#ff0000`) or green (`#00ff00`) depending on whether the value of the current field (specified by `@currentField`) is less than 40. For more information, see the Expression object section. 

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "style": {
      "padding": "4px",
      "background-color": {
         "operator": "?",
         "operands": [
            {
               "operator": "<",
               "operands": [
                  "@currentField",
                  40
               ]
            },
            "#ff0000",
            "#00ff00"
         ]
      }
   }
}
```

Here's the same sample from above, using the Excel-style expression syntax:
```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "style": {
      "padding": "4px",
      "background-color": "=if(@currentField < 40, '#ff0000', '#00ff00')"
   }
}
```

### attributes

An optional property that specifies additional attributes to add to the element specified by `elmType`. This is an object with name-value pairs. Attribute names must be one of the following:

- href
- rel
- src
- class
- target
- title
- role
- iconName
- d
- aria

Any other attribute name will result in an error. Attribute values can either be Expression objects or strings. The following example adds two attributes (`target` and `href`) to the element specified by `elmType`. The `target` attribute is hard-coded to a string. The `href` attribute is an expression that will be evaluated at runtime to http://finance.yahoo.com/quote/ + the value of the current field (`@currentField`). 

```JSON
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "target": "_blank",
    "href": "='http://finance.yahoo.com/quote/' + @currentField"
}
```

### children

An optional property that specifies child elements of the element specified by `elmType`. The value is specified as an array of `elm` objects. There can be an arbitrary level of nesting. If an element has the `txtContent` property, the child properties are ignored. 

### debugMode

An optional property that is meant for debugging. It outputs error messages and logs warnings to the console. 

### forEach

An optional property that allows an element to duplicate itself for each member of a specific multi-value field. The value of `"forEach"` property should be in the format of either `"iteratorName in @currentField"` or `"iteratatorName in [$FieldName]"`.

`iteratorName` represents the name of iterator variable that is used to represent the current member of the multi-value field. The name of the iterator can be any combination of alphanumeric characters and underscore (`_`) that does not start with a digit.

The field used in the loop must be in a supported field type with multi-value option enabled: Person, Lookup, and Choice.

In the element with `forEach` or its children elements, the iterator variable can be referred as if it is a new field. The index of the iterator can be accessed with `loopIndex` operator.

`forEach` cannot be applied to the root element, and will render no element if there is no value in the field.

See [here](#formatting-multi-value-fields) for examples.

### Expressions

Values for `txtContent`, style properties, and attribute properties can be expressed as expressions, so that they are evaluated at runtime based on the context of the current field (or row). Expression objects can be nested to contain other Expression objects.

Expressions can be written using Excel-style expressions in SharePoint Online, or by using Abstract Syntax Tree expressions in SharePoint Online and SharePoint 2019.

#### Excel-style expressions

All Excel-style expressions begin with an equal (`=`) sign. This style of expression is only available in SharePoint Online (not SharePoint 2019).

This simple conditional expression evaluates to `none` if `@me` is not equal to `[$Author.email]`, and evaluates to \`\` otherwise:
```JSON
=if(@me != [$Author.email], 'none', '') 
```

More complex if/else statements can be written like this:
```JSON
=if([$Sentiment] <= 0.3, 'sp-field-severity--blocked', if([$Sentiment] < 0.9,'sp-field-severity--warning','sp-field-severity--good')) 
```

Non-conditional operators that take one or two operands can be written like this:
```JSON
=[$foo] * -7 
```
```JSON
=sin(@currentField) 
```
```JSON
=toString(60 + (sin(6.2831853 * @currentField) * 60)) 
```

#### Abstract Syntax Tree expressions

The following example contains an Expression object that performs the following expression:

`(@currentField > 40) ? '100%' : (((@currentField * 2.5).toString() + '%')`

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "operator": "?",
   "operands": [
      {
         "operator": ">",
         "operands": [
            "@currentField",
            "40"
         ]
      },
      "100%",
      {
         "operator": "+",
         "operands": [
            {
               "operator": "toString()",
               "operands": [
                  {
                     "operator": "*",
                     "operands": [
                        "@currentField",
                        2.5
                     ]
                  }
               ]
            },
            "%"
         ]
      }
   ]
}
```

### Operators

Operators specify the type of operation to perform. The following operators are valid values:

- \+
- \-
- /
- \*
- <
- \>
- ==
- !=
- <=
- \>=
- ||
- &&
- toString()
- Number()
- Date()
- cos
- sin
- ? 
- toLocaleString()
- toLocaleDateString()
- toLocaleTimeString()
- indexOf
- toLowerCase
- join
- length
- abs
- loopIndex
- floor
- ceiling
- pow
- substring
- getDate
- getMonth
- getYear

**Binary arthmetic operators** - The following are the standard arithmetic binary operators that expect two operands: 

- \+
- \-
- /
- \*
- <
- \>
- <=
- \>= 

**Unary operators** - The following are standard unary operators that expect only one operand: 

- **toString()**: returns a string representing the object
  - `"txtContent": "=toString(45)"` results in _"45"_
  
- **Number()**: returns the numeric value, if the operand is not a number, NaN is returned
  - `"txtContent": "=Number('365')"` results in _365_
  - `"txtContent": "=Number('Wowee')"` results in _NaN_
  - `"txtContent": "=Number(Date('12/26/1981'))"` results in _378190800000_
  
- **Date()**: returns a datetime object from the parameter (converts strings or numbers to dates, sensitive to locale)
  - `"txtContent": "=Date('12/26/1981')"` results in _12/26/1981, 12:00:00 AM_
  
- **cos**: returns the cosine of the specified angle which should be specified in radians
  - `"txtContent": "=cos(5)"` results in _0.28366218546322625_
  
- **sin**: returns the sine of a number
  - `"txtContent": "=sin(90)"` results in _0.8939966636005579_
  
- **toLocaleString()**: returns a language sensitive representation of a date
  - `"txtContent":"=toLocaleString(@now)"` results vary based on user's locale, but en-us looks like _"2/5/2019, 1:22:24 PM"_
  
- **toLocaleDateString()**: returns a language sensitive representation of just the date portion of a date
  - `"txtContent":"=toLocaleDateString(@now)"` results vary based on user's locale, but en-us looks like _"2/5/2019"_
  
- **toLocaleTimeString()**: returns a language sensitive representation of just the time portion of a date
  - `"txtContent":"=toLocaleTimeString(@now)"` results vary based on user's locale, but en-us looks like _"1:22:24 PM"_
  
- **toLowerCase**: returns the value converted to lower case (only works on strings) - _Only available in SharePoint Online_
  - `"txtContent":"=toLowerCase('DogFood')"` results in _"dogfood"_
  
- **abs**: returns the absolute value for a given number - _Only available in SharePoint Online_
  - `"txtContent":"=abs(-45)"` results in _45_
  
- **length**: returns the number of items in an array (multi-select person or choice field), for all other value types it returns 1 when true and 0 when false. It does NOT provide the length of a string value. - _Only available in SharePoint Online_
  - `"txtContent":"=length(@currentField)"` might result in _2_ if there are 2 selected values
  - `"txtContent":"=length('Some Text')"` results in _1_
  - `"txtContent":"=length('')"` results in _0_
  - `"txtContent":"=length(45)"` results in _1_
  - `"txtContent":"=length(0)"` results in _0_

- **floor**: returns the largest integer less than or equal to a given number. - _Only available in SharePoint Online_
  - `"txtContent":"=floor(45.5)"` results in _45_ 
  
- **ceiling**: rounds the given number up to the next largest whole number or integer. - _Only available in SharePoint Online_
  - `"txtContent":"=ceiling(45.5)"` results in _46_ 
  
- **getDate**: returns the day of the month of the given date. - _Only available in SharePoint Online_
  - `"txtContent":"=getDate(Date('12/26/1981'))"` results in _26_ 
  
- **getMonth**:  returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year). - _Only available in SharePoint Online_
  - `"txtContent":"=getMonth(Date('12/26/1981'))"` results in _11_ 

- **getYear**: returns the year of the given date. - _Only available in SharePoint Online_
  - `"txtContent":"=getYear(Date('12/26/1981'))"` results in _1981_ 
  
**Binary operators** - The following are operators that expect two operands:

- **indexOf**: takes 2 operands. The first is the text you would like to search within, the second is the text you would like to search for. Returns the index value of the first occurence of the search term within the string. Indexes start at 0. If the search term is not found within the text, -1 is returned. This operator is case-sensitive. - _Only available in SharePoint Online_
  - `"txtContent": "=indexOf('DogFood', 'Dog')"` results in _0_
  - `"txtContent": "=indexOf('DogFood', 'F')"` results in _3_
  - `"txtContent": "=indexOf('DogFood', 'Cat')"` results in _-1_
  - `"txtContent": "=indexOf('DogFood', 'f')"` results in _-1_
  
- **join**: takes 2 operands. The first is an array (multi-select person or choice field) and the second is the separating string. Returns a string concatenation of the array values separated by the separating string. - _Only available in SharePoint Online_
  - `"txtContent": "=join(@currentField, ', ')"` might result in _"Apple, Orange, Cherry"_ (depending on the selected values)
  - `"txtContent": "=join(@currentField.title, '|')"` might result in _"Chris Kent|Vesa Juvonen|Jeff Teper"_ (depending on the selected persons)
  
- **pow**: returns the base to the exponent power. - _Only available in SharePoint Online_
  - `"txtContent":"=pow(2,3)"` results in _8_

**Ternary operators** - The following are operators that expect three operands:

- **substring**: returns the part of the string between the start and end indicies. - _Only available in SharePoint Online_
  - `"txtContent":"=substring('DogFood', 3, 4)"` results in _Fo_
  - `"txtContent":"=substring('DogFood', 4, 3)"` results in _Fo_
  - `"txtContent":"=substring('DogFood', 3, 6)"` results in _Food_
  - `"txtContent":"=substring('DogFood', 6, 3)"` results in _Food_

  The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

  
  
**Conditional operator** - The conditional operator is:

- **?**: Conditional operations written in Abstract Tree Syntax use `?` as the operator. This is to achieve an expression equivalent to a ? b : c, where if the expression a evaluates to true, then the result is b, else the result is c. For Excel style expressions you write these with an `if` statement. Regardless, there are 3 operands. The first is the condition to evaluate. The second is the result when the condition is true. The third is the result when the condition is false.
  - `"txtContent":"=if(4 < 5, 'yes', 'no')"` results in _"yes"_
  - `"txtContent":"=if(4 > 5, 'yes', 'no')"` results in _"no"_

**Multi-value field-related operators** - The following operators are only used in a context with multi-value field of type Person, Lookup, or Choice.

- length
- join
- loopIndex

`length`, when provided with a field name, returns the number of members in a multi-valued field. When a single-value field is provided, `length` will return 1 when there is a value in that field.

`join` concatenates values in a multi-value field with a specified separator. The first operand shall point to a value in a multi-value field, e.g. `"@currentField.lookupValue"`, `"[$AssignedTo.title]"`.  The second operand shall be a string literal that is the separator that joins the values together.

`loopIndex`, when provided with a name of iterator variable, returns the current index (starting from 0) of the iterator. The name of iterator must be provided as a string literal. `loopIndex` would only work within the element with respective `forEach` enabled or its children elements.

See [here](#formatting-multi-value-fields) for examples.

### operands

Specifies the parameters, or operands for an expression. This is an array of Expression objects or base values.

### Special string values

The values for `txtContent`, styles, and attributes can be either strings or Expression objects. A few special string patterns for retrieving values from the fields in the list and the user's context are supported.

#### "@currentField"

Will evaluate to the value of the current field. 

Some field types are represented as objects. To output a value from an object, refer to a particular property inside that object. For example, if the current field is a person/group field, specify `@currentField.title` to retrieve the person's name, which is normally displayed in list views. The following are the field types that are represented as objects with a list of their properties.

> [!NOTE]
> The `@currentField.title` returns a person's name by default. However, if the person field's Show Field has been adjusted, it may change the value of the `title` property. For example, a person field with the Show Field configured as Department will have the person's department for the `title` property.

**People fields**

The people field object has the following properties (with example values):

```JSON
{
   "id": "122",
   "title": "Kalya Tucker",
   "email": "kaylat@contoso.com",
   "sip": "kaylat@contoso.com",
   "picture": "https://contoso.sharepoint.com/kaylat_contoso_com_MThumb.jpg?t=63576928822",
   "department":"Human Resources",
   "jobTitle":"HR Manager"
}
```

**Date/Time fields**

The value of Date/Time fields can be retrieved a few different ways, depending on the date format you'd like to display. The following methods for converting date values to specific formats are supported: 

* `toLocaleString()` - Displays a date type fully expanded with date and time.
* `toLocaleDateString()` - Displays a date type with just the date.
* `toLocaleTimeString()` - Displays a date type with just the time.

For example, the following JSON will display the current field (assuming it's a date field) as a date and time string.

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": {
        "operator": "toLocaleString()",
        "operands" : ["@currentField"]
    }
}
```

Here's the same sample from above, using the Excel-style expression syntax:
```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "=toLocaleString(@currentField)"
}
```

**Location fields**

The location field object has the following properties (with example values):

```JSON
{
   "Address": {
      "City": "Knoxville",
      "CountryOrRegion": "United States",
      "State": "TN",
      "Street": "963 Worlds Fair Park Dr"
   },
   "Coordinates": {
      "Latitude": "35.961673736572266",
      "Longitude": "-83.92420959472656"
   },
   "DisplayName": "World's Fair Park",
   "LocationUri: "https://www.bingapis.com/api/v6/localentities/8346bf26-6da4-104c-6ba5-2334b83f6ac8?setLang=en"
}
```

> [!NOTE] Location fields do not currently have a "Format this column" option in the list view and formats applied directly to these fields will need to be done through field settings.

<br/>

The following example shows how a location field might be used on a current field.

```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/column-formatting.schema.json",
  "elmType": "div",
  "style": {
    "display": "block"
  },
  "children": [
    {
      "elmType": "a",
      "txtContent": "@currentField.DisplayName",
      "attributes": {
        "href": "='https://www.bing.com/maps?cp=' + @currentField.Coordinates.Latitude + '~' + @currentField.Coordinates.Longitude + '&lvl=17&sV=2'",
        "target": "_blank",
        "title": "=@currentField.Coordinates.Latitude + ', ' + @currentField.Coordinates.Longitude"
      },
      "style": {
        "display": "block"
      }
    },
    {
      "elmType": "div",
      "txtContent": "@currentField.Address.Street"
    },
    {
      "elmType": "div",
      "txtContent": "=@currentField.Address.City + ', ' + @currentField.Address.State"
    },
    {
      "elmType": "div",
      "txtContent": "@currentField.Address.CountryOrRegion"
    }
  ]
}
``` 


**Lookup fields**

The lookup field object has the following properties (with example values):

```JSON
{
   "lookupId": "100",
   "lookupValue": "North America",
}
```

<br/>

The following example shows how a lookup field might be used on a current field.

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "a",
   "txtContent": "@currentField.lookupValue",
   "attributes": {
      "href": {
         "operator": "+",
         "operands": [
            "https://contoso.sharepoint.com/teams/Discovery/Lists/Regions/DispForm.aspx?ID=",
            "@currentField.lookupId"
         ]
      },
      "target": "_blank"
   }
}
``` 

**Hyperlink fields**

The hyperlink field object has the following property (with example value):

```JSON
{
   "desc": "SharePoint Patterns and Practices",
}
```

<br/>

To reference the URL value, use `@currentField`.

The following example shows how a hyperlink field might be used on a current field.

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "a",
   "txtContent": "@currentField.desc",
   "attributes": {
      "href": "@currentField",
      "target": "_blank"
   }
}
``` 

#### "[$FieldName]" 

The column is formatted within the context of the entire row. You can use this context to reference the values of other fields within the same row by specifying the **internal name** of the field surrounded by square brackets and preceeded by a dollar sign: `[$InternalName]`. For example, to get the value of a field with an internal name of "MarchSales", use `[$MarchSales]`.

If the value of a field is an object, the object's properties can be accessed. For example, to access the "Title" property of a person field named "SalesLead", use "[$SalesLead.title]".

#### "@currentWeb"

This will evaluate to the absolute url for the site. This is equivalent to the `webAbsoluteUrl` value within the page context. This value is only available in SharePoint Online.

#### "@me"

This will evaluate to the email address of the current logged in user.

This field can be used to display the current user's email address, but more likely it will be used within conditions. The following is an example of setting the color for a person field to red when it is equal to the current logged in user and blue otherwise: 

```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField.title",
   "style": {
      "color": {
         "operator": "?",
         "operands": [
            {
               "operator": "==",
               "operands": [
                  "@me",
                  "@currentField.email"
               ]
            },
            "red",
            "blue"
         ]
      }
   }
}
```

Here's the same sample from above, using the Excel-style expression syntax:
```JSON
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "div",
   "txtContent": "@currentField.title",
   "style": {
      "color": "=if(@me == @currentField.email, 'red', 'blue')"
   }
}
```

#### "@now"

This will evaluate to the current date and time.

#### "@rowIndex"

This will evaluate to the rendered index of a row within a view. This value is based on render position and will remain consistent based on position even as views are sorted and filtered. Indexes start at 0. This value is only available in SharePoint Online.

Here's an example of using the value within a view format to apply alternating styles to rows:
```JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json",
  "additionalRowClass": "=if(@rowIndex % 2 == 0,'ms-bgColor-themeLighter ms-bgColor-themeLight--hover','')"
}
```

#### "@window.innerHeight"

This will evaluate to a number equal to the height of the browser window (in pixels) when the list was rendered.

#### "@window.innerWidth"

This will evaluate to a number equal to the width of the browser window (in pixels) when the list was rendered.

#### Thumbnails

In a document library, there is a series of tokens that can be used to retrieve the URL to the thumbnail of a file, including:

- `@thumbnail.small`, `@thumbnail.medium`, and `@thumbnail.large` evaluate to the thumbnail URL in 3 different predefined sizes.
- `@thumbnail.<bounding size>` evaluates to the URL to the largest thumbnails that is not larger than the bounding size in both width and height. For example, `@thumbnail.150` evaluates to the URL to a thumbnail not larger than 150×150 pixels.
- `@thumbnail.<bounding width>x<bounding height>` evaluates to the URL to the largest thumbnail that is not larger than the bounding width and bounding height. For example, `@thumbnail.100x200` evaluates to the URL to a thumbnail not wider than 100 pixels and not higher than 200 pixels.

These tokens will yield no value on non-file items including folders.

> [!NOTE]
> The aspect ratio of thumbnail generated is the same as how the file looks like, changing the bounding sizes will not affect the aspect ratio of the thumbnail.

> [!TIP]
> Thumbnails are only available for a list of supported file formats. It means that sometimes the URL generated is not accessible due to lack of support on certain formats. However, if a valid thumbnail token is set as the _only_ `src` attribute of an `img` tag, we will take care of it and hide the image when it is not available.

```json
{
   "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
   "elmType": "img",
   "attributes": {
      "src": "@thumbnail.200x150",
      "alt": "='Thumbnail of file ' + [$FileLeafRef]"
   },
   "style": {
      "width": "100%",
      "max-width": "100%"
   }
}
```

## See also

- [Column formatting](https://support.office.com/article/Column-formatting-1f927342-2bed-4745-b727-ff8b7ff96b22?ui=en-US&rs=en-US&ad=US)
