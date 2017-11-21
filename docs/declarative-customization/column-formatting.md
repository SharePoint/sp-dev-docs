# Use column formatting to customize SharePoint

You can use column formatting to customize how fields in SharePoint lists and libraries are displayed. To do this, you construct a JSON object that describes the elements that are displayed when a field is included in a list view, and the styles to be applied to those elements. The column formatting does not change the data in the list item or file; it only changes how it’s displayed to users who browse the list. Anyone who can create and manage views in a list can use column formatting to configure how view fields are displayed. 

For example, a list with the fields Title, Effort, Assigned To, and Status with no customizations applied might look like this: 

![SharePoint list with four unformatted columns](../images/sp-columnformatting-none.png)

A list with the appearance of the Effort, Assigned To, and Status fields customized via column formatting might look like this:

![SharePoint list with three columns formatted](../images/sp-columnformatting-all.png)

## How is column formatting different than the Field Customizer?
Both column formatting and the [SharePoint Framework Field Customizer](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/building-simple-field-customizer) extension enable you to customize how fields in SharePoint lists are displayed. The Field Customizer is more powerful, because you can use it to write any code you want to control how a field is displayed. Column formatting is more easily and broadly applied. However, it is less flexible, because it does not allow for custom code; it only allows for certain predefined elements and attributes. 

The following table compares column formatting and the Field Customizer.

| Field type        | Column formatting          | Field Customizer  |
| ------------- |:-------------| :-----|
| Conditional formatting based on item values and value ranges      | Supported | Supported |
| Action links       | Support for static hyperlinks that do not launch script      |  Support for any hyperlink, including those that invoke custom script   |
| Data visualizations | Support for simple visualizations that can be expressed using HTML and CSS      |   Support for arbitrary data visualizations  |

If you can accomplish your scenario by using column formatting, it’s typically quicker and easier to do that than to use Field Customizer. Anyone who can create and manage views in a list can use column formatting to create and publish customizations. Use Field Customizer for more advanced scenarios that column formatting does not support.

## Get started with column formatting
To open the column formatting pane, open the dropdown menu under a column. Under **Column Settings**, choose **Format this column**.

If no one has used column formatting on the column you selected, the pane will look like the following.

![Format column pane with space to paste or type column formatting JSON and options to preview, save, and cancel](../images/sp-columnformatting-panel.png)

A field with no formatting specified will use the default rendering. To format a column, enter the column formatting JSON in the box.

To preview the formatting, select **Preview**. To commit your changes, select **Save**. When you save, anyone who views the list will see the customization that you applied.

The easiest way to use column formatting is to start from an example and edit it to apply to your specific field. The following sections contain examples that you can copy, paste, and edit for your scenarios.

## Display field values (basic)

The simplest column formatting is one that places the value of the field inside a `<div />` element. This example works for number, text, choice, and date fields.

```JSON
{
   "elmType": "div",
   "txtContent": "@currentField"
}
```
Some field types require a bit of extra work to retrieve their values. Person fields are represented in the system as objects, and a person’s display name is contained within that object’s **Title** property. This is the same example, modified to work with the person field.

```JSON
{
   "elmType": "div",
   "txtContent": "@currentField.Title"
}
```
Lookup fields are also represented as objects; the display text is stored in the **lookupValue** property. This example works with a lookup field.

```JSON
{
   "elmType": "div",
   "txtContent": "@currentField.lookupValue"
}
```

## Apply conditional formatting
You can use column formatting to apply styles, classes, and icons to fields, depending on the value inside those fields.

### Conditional formatting based on a number range (basic)
The following image shows an example of conditional formatting applied to a number range.

![Severity warning of 70 with orange background](../images/sp-columnformatting-conditionalbasic.png)

This example uses the conditional operator `?` to apply a class (`sp-field-severity--warning`) to the parent `<div />` element when the  value in the current field is less than or equal to 70.  This causes the field to be highlighted when the value is less than or equal to 70, and appear normally if it's greater than 70.

```JSON
{
    "$schema": "http://columnformatting.sharepointpnp.com/columnFormattingSchema.json",
    "debugMode": true,
    "elmType": "div",
    "attributes": {
       "class": {
          "operator": "?",
          "operands": [
             {
                "operator": "<=",
                "operands": [
                   "@currentField",
                   70
                ]
             },
             "sp-field-severity--warning",
             ""
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
                "iconName": {
                    "operator": "?",
                    "operands": [
                        {
                            "operator": "<=",
                            "operands": [
                                "@currentField",                  
                                70
                            ]
                        },
                        "Error",
                        ""
                    ]
                }
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

The following image shows an example of conditional formatting applied to a text or choice field.

![Status field with done colored green, blocked colored red, and in review colored orange](../images/sp-columnformatting-conditionaladvanced.png)

You can apply conditional formatting to text or choice fields that might contain a fixed set of values. The following example applies different classes depending on whether the value of the field is Done, In Review, Blocked, or another value. This example applies a CSS class (`sp-field-severity--low, sp-field-severity--good, sp-field-severity--warning, sp-field-severity--blocked`) to the  `<div />` based on the field's value. Then, it outputs a `<span />` element with an `IconName` attribute. This attribute applies another CSS class to that `<span />` that shows an [Office UI Fabric](https://dev.office.com/fabric#/) icon inside that element. Finally, another `<span />` element is outputted that contains the value inside the field.

This pattern is useful when you want different values to map to different levels of urgency or severity. You can start from this example and edit it to specify your own field values and the styles and icons that should map to those values.
<!-- The schema URL will need to be updated when it is changed from customformatter to columnformatting -->
```JSON
{
    "$schema": "http://columnformatting.sharepointpnp.com/columnFormattingSchema.json",
    "debugMode": true,
    "elmType": "div",
    "attributes": {
        "class": {
            "operator": "?",
            "operands": [
                {
                    "operator": "==",
                    "operands": [
                        {
                            "operator": "toString()",
                            "operands": [
                                "@currentField"
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
                                        "@currentField"
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
                                                "@currentField"
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
                                                        "@currentField"
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
    },
    "children": [
        {
            "elmType": "span",
            "style": {
                "display": "inline-block",
                "padding": "0 4px"
            },
            "attributes": {
                "iconName": {
                    "operator": "?",
                    "operands": [
                        {
                            "operator": "==",
                            "operands": [
                                {
                                    "operator": "toString()",
                                    "operands": [
                                        "@currentField"
                                    ]
                                },
                                "Done"
                            ]
                        },
                        "CheckMark",
                        {
                            "operator": "?",
                            "operands": [
                                {
                                    "operator": "==",
                                    "operands": [
                                        {
                                            "operator": "toString()",
                                            "operands": [
                                                "@currentField"
                                            ]
                                        },
                                        "In progress"
                                    ]
                                },
                                "Forward",
                                {
                                    "operator": "?",
                                    "operands": [
                                        {
                                            "operator": "==",
                                            "operands": [
                                                {
                                                    "operator": "toString()",
                                                    "operands": [
                                                        "@currentField"
                                                    ]
                                                },
                                                "In review"
                                            ]
                                        },
                                        "Error",
                                        {
                                            "operator": "?",
                                            "operands": [
                                                {
                                                    "operator": "==",
                                                    "operands": [
                                                        {
                                                            "operator": "toString()",
                                                            "operands": [
                                                                "@currentField"
                                                            ]
                                                        },
                                                        "Has issues"
                                                    ]
                                                },
                                                "Warning",
                                                "ErrorBadge"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
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

The following image shows a field with conditional date formatting applied.

![Status field with the Overdue text colored red](../images/sp-columnformatting-overdue.png)

This example colors the current field red when the value inside an item's DueDate is before the current date/time. Unlike some of the previous examples, this example applies formatting to one field by looking at the value inside another field. Note that DueDate is referenced using the [$FieldName] syntax. FieldName is assumed to be the internal name of the field. This example also takes advantage of a special value that can be used in date/time fields - `@now`, which resolves to the current date/time, evaluated when the user loads the list view.

> [!NOTE]
> If you have spaces in the field name, those are defined as `_x0020_`. This means that if you would have for example a field named as "Due Date", definition to be used for that field would be `$Due_x0020_Date`.

```JSON
{

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
                  "@now"
               ]
            },
            "#ff0000",
            ""
         ]
      }
   }
}
```

### Formatting items based on arbitrary dates (advanced)
To compare the value of a date/time field against a date that's not `@now`, follow the pattern in the following example. The following example colors the current field red if the due date was <= tomorrow. This is accomplished using date math. You can add milliseconds to any date, and the result will be a new date. For example, to add a day to a date, you'd add (246060*1000 = 86,400,000). 
```JSON
{
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
To compare a date/time field value against another date constant, use the **Date()** method to convert a string to a date. The following example colors the current field red if the value in the DueDate field is before 3/22/2017.
```JSON
{
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

## Create clickable actions
You can use column formatting to provide hyperlinks that go to other web pages, or start custom functionality. This functionality is limited to static `http://` links that can be paramaterized with values from fields in the list. You can't use column formatting to output links to protocols other than `http://`.

### Turn field values into hyperlinks (basic)
This example shows how to turn a text field that contains stock ticker symbols into a hyperlink that targets the Yahoo Finance real-time quotes page for that stock ticker. The example uses a `+` operator that appends the current field value to the static hyperlink <a>http://finance.yahoo.com/quote/</a>. You can extend this pattern to any scenario in which you want users to view contextual information related to an item, or you want to start a business process on the current item, as long as the information or process can be accessed via a hyperlink parameterized with values from the list item.

![Stocks list with ticker symbols turned into hyperlinks](../images/sp-columnformatting-hyperlinks.png)

```JSON
{
   "elmType": "a",
   "txtContent": "@currentField",
   "attributes": {
      "target": "_blank",
      "href": {
         "operator": "+",
         "operands": [
            "http://finance.yahoo.com/quote/",
            "@currentField"
         ]
      }
   }
}
```
### Add an action button to a field (advanced)
The following image shows action buttons added to a field.

![Assigned To field with mail buttons added to names](../images/sp-columnformatting-actionbutton.png)

You can use column formatting to render quick action links next to fields. The following example, intended for a person field, renders two elements inside the parent `<div />` element:

- A `<span />` element that contains the person’s display name.
- An `<a />` element that opens a mailto: link that creates an email with a subject and body populated dynamically via item metadata. The `<a />` element is styled using the `ms-Icon`, `ms-Icon—Mail`, and `ms-QuickAction` [Fabric](https://developer.microsoft.com/en-us/fabric) classes to make it look like a clickable email icon. 

```JSON
{
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

This example applies `background-color` and `border-top` styles to create a data bar visualization of `@currentField`, which is a number field. The bars are sized differently for different values based on the way the `width` attribute is set - it's set to `100%` when the value is greater than 20, and `(@currentField * 5)%` when there value is less than 10. This achieves a width of 5% for the data bar for values of 1, 10% for values of 2, and so on. To fit this example to your number column, you can adjust the boundary condition (`20`) to match the maximum anticipated value inside the field, and the multiplier (`5`) to specify how much the bar should grow depending on the value inside the field.
```JSON
{
  "debugMode": true,
  "elmType": "div",
  "txtContent": "@currentField",
  "attributes": {
   "class": "sp-field-dataBars"
  },
  "style": {
    "width": {
      "operator": "?",
      "operands": [
        {
          "operator": ">",
          "operands": [
            "@currentField",
            "20"
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
                    5
                  ]
                }
              ]
            },
            "%"
          ]
        }
      ]
    }
  }
}
```

### Show trending up/trending down icons (advanced)
The following image shows a list with trending up/trending down icons added.

![List with trending up and trending down icons next to list items](../images/sp-columnformatting-trending.png)

This example relies on two number fields, `Before` and `After`, for which the values can be compared. It shows the appropriate trending icon next to the `After` field, depending on that field's value compared to the value in `Before`.  `sp-field-trending--up` is used when `After`'s value is higher; `sp-field-trending--down` is used when `After`'s value is lower.

```JSON
{
    "debugMode": true,
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

## Supported Column Types
The following column types support column formatting:
* Single line of text 
* Number
* Choice
* Person or Group
* Yes/No
* Hyperlink 
* Picture
* Date/Time
* Lookup
* Title (in Lists)

The following are not currently supported:
* Managed Metadata
* Filename (in Document Libraries)
* Calculated
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
| sp-field-quickAction |![Name with mail icon](../images/sp-columnformatting-quickaction.png) |

## Predefined icons

You can use predefined icons from Office UI Fabric. For details, see the [Fabric website](https://dev.office.com/fabric#/styles/icons). 

## Creating custom JSON
Creating custom column formatting JSON from scratch is simple if you understand the schema. To create your own custom column formatting:

1. [Download Visual Studio Code](https://code.visualstudio.com/Download). It's free and fast to download. 

2. In Visual Studio Code, create a new file, and save the empty with a .json file extension.

3. Paste the following lines of code into your empty file.

    ```JSON
    {
    "$schema": "http://columnformatting.sharepointpnp.com/columnFormattingSchema.json"
    }
    ```
    You now have validation and autocomplete to create your JSON. You can start adding your JSON after the first line that defines the schema location. 

>[!Tip]
>At any point, select **Ctrl** + **Space** to have Visual Studio Code offer suggestions for properties and values. For more information about editing JSON in Visual Studio Code, see <a>https://code.visualstudio.com/Docs/languages/json</a>


## Detailed syntax reference

### elmType

Specifies the type of element to create. Valid elements include:

- div
- span
- a
- img
- svg
- path

Any other value will result in an error.

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

    'height'
    'max-height'
    'max-width'
    'min-height'
    'min-width'
    'width'

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

The following example shows the value of a style object. In this example, two style properties (`padding` and `background-color`) will be applied. The `padding` value is a hard-coded string value. The `background-color` value is an Expression that is evaluated to either red (#ff0000) or green (#00ff00) depending on whether the value of the current field (specified by @currentField) is less than 40. For more information, see the Expression object section. 


```JSON
{
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

Any other attribute name will result in an error. Attribute values can either be Expression objects or strings. The following example adds two attributes (`target` and `href`) to the element specified by `elmType`. The `target` attribute is hard-coded to a string. The `href` attribute is an expression that will be evaluated at runtime to (http://finance.yahoo.com/quote/ + the value of the current field(@currentField)). 
```JSON
{
   "target": "_blank",
   "href": {
      "operator": "+",
      "operands": [
         "http://finance.yahoo.com/quote/",
         "@currentField"
      ]
   }
}
```

### children

An optional property that specifies child elements of the element specified by `elmType`. The value is specified as an array of `CustomFormatter` objects. There can be an arbitrary level of nesting. If an element has the `txtContent` property, the child properties are ignored. 

<!-- Verify that CustomFormatter is the correct object name? -->

### debugMode

An optional property that is meant for debugging. It outputs error messages and logs warnings to the console. 

### Expression object

Values for `txtContent`, style properties, and attribute properties can be expressed as expressions, so that they are evaluated at runtime based on the context of the current object (or row). Expression objects can be nested to contain other Expression objects. 

The following example shows an Expression object that performs the following expression:

`(@currentField > 40) ? '100%' : (((@currentField * 2.5).toString() + '%')`

```JSON
{
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

**Binary operators** - The following are the standard arithmetic binary operators that expect two operands: 

- \+
- \-
- /
- \*
- <
- \>
- <=
- \>= 

**Unary operators** - The following are standard unary operators that expect only one operand: 

- toString()
- Number()
- Date()
- cos
- sin  

**Conditional operator** - The conditional operator is:

- ?

This is to achieve an expression equivalent to a ? b : c, where if the expression a evaluates to true, then the result is b, else the result is c.

### operands
Specifies the parameters, or operands for an expression. This is an array of Expression objects or base values.

### Special string values
The values for `txtContent`, styles, and attributes can be either strings or Expression objects. A few special string patterns for retrieving values from the fields in the list and the user's context are supported.

#### "@currentField"
Will evaluate to the value of the current field. 

Some field types are represented as objects. To output a value from an object, refer to a particular property inside that object. For example, if the current field is a person/group field, specify @currentField.title to retrieve the person's name, which is normally displayed in list views. The following are the field types that are represented as objects with a list their properties.

**People fields**

The people field object has the following properties.

```JSON
{
   "id": "122",
   "title": "Kalya Tucker",
   "email": "kaylat@contoso.com",
   "sip": "kaylat@contoso.com",
   "picture": "https://contoso.sharepoint.com/kaylat_contoso_com_MThumb.jpg?t=63576928822",
   "jobTitle": "",
   "department": ""
}
```

**Date/Time fields**

The value of Date/Time fields can be retrieved a few different ways, depending on the date format you'd like to display. The following methods for converting date values to specific formats are supported: 

* ```toLocaleString()``` - Displays a date type fully expanded with date and time.
* ```toLocaleDateString()``` - Displays a date type with just the date.
* ```toLocaleTimeString()``` - Displays a date type with just the time.

For example, the following JSON will display the current field (assuming it's a date field) as a date and time string.

```JSON
{
   "elmType": "div",
   "txtContent": {
        "operator": "toLocaleString()",
        "operands" : ["@currentField"]
    }
}
```

**Lookup fields**

The lookup field object has the following properties.

```JSON
{
   "lookupId": "100",
   "lookupValue": "North America",
}
```
The following example shows how a lookup field might be used on a current field.
```JSON
{
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

#### "[$FieldName]" 
The context that's passed in is the entire row. Use this context to reference the values of other fields. For example, to get the value of a field named "MarchSales", use "[$MarchSales]".

If the value of a field is an object, the object's properties can be accessed. For example, to access the "Title" property of a filed named "MarchSales", use "[$MarchSales.title]".

#### "@me"
This will evaluate to the email address of the current logged in user. 

#### "@now"
This will evaluate to the current date and time. 

## See also

- [Column formatting](https://support.office.com/en-us/article/Column-formatting-1f927342-2bed-4745-b727-ff8b7ff96b22?ui=en-US&rs=en-US&ad=US)
