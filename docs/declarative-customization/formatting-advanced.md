---
title: Advanced formatting concepts
description: Advanced formatting concepts
ms.date: 10/18/2021
ms.localizationpriority: high
---
# Advanced formatting concepts

You can use some of the following features to make your view and column formatting more information rich and interactable.

## Create a button to launch a Flow

The following screenshot shows a list with a Flow button added to the Action column:

![screenshot of the sample](../images/sp-columnformatting-flow.png)

You can use formatting to create buttons that, when selected, run Flows on the corresponding list item.  The Flow Launch Panel will be displayed after choosing the button and the Flow will just run.

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
      "txtContent": "Send to Manager"
    }
  ]
}
```

Additionally, you can use `headerText` and `runFlowButtonText` options within the `actionParams` property to customize portions of the Flow panel itself! See the [button elements](./formatting-syntax-reference.md#customrowaction) portion of the Detailed syntax reference for more details.
## Custom cards on hover 

The following image shows a list with a custom hover added to a List:

On hover - Metadata on the column "Status" is made available in view formatting

![Preview Image 1](../images/HoverImage-1.png)

On hover - Metadata on the column "Status" is made available in column formatting

![Preview Image 2](../images/HoverImage-2.png)



You can use formatting to define custom call out that can be commissioned basis user defined actions like click or hover

This example uses customCardProps, openOnEvent, directionalHint and isBeakVisible

```JSON
{
    "elmType": "div",
    "style": {
        "font-size": "12px"
    },
    "txtContent": "[$Status]",
    "customCardProps": {
        "formatter": {
            "elmType": "div",
            "txtContent": "Define your formatter options inside the customCarProps/formatter property"
        },
        "openOnEvent": "hover",
        "directionalHint": "bottomCenter",
        "isBeakVisible": true,
        "beakStyle" : {
            "backgroundColor": "white"
        }
    }
}
```

## Default cards on hover

Users can now have profile card or file hover card on formatters too, some of the things users can now do -
	1) Profile card or File Hover card on any column 
	2) Profile card or Hover card with view formatting

Hover on a filename with formatting with default file card 

![Preview Image 3](../images/HoverImage-3.png)


Hover on a person column with formatting with default Profile card 

![Preview Image 4](../images/HoverImage-4.png)

Both the example uses defaultHoverField 

```JSON
{
    "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
    "elmType": "div",
    "children": [
        {
            "elmType": "img",
            "style": {
                "width": "32px",
                "height": "32px",
                "overflow": "hidden",
                "border-radius": "50%",
                "margin": "2px"
            },
            "attributes": {
                "src": "='getUserImage([$Editor.email], 's')",
                "title": "[$Editor.title]"
            }
        },
        {
            "elmType": "span",
            "style": {
                "vertical-align": "middle",
                "margin-left": "2px"
            },
            "txtContent": "[$Editor.title]"
        }
    ],
    "defaultHoverField": "[$Editor]"
}
```

## Column formatter reference

Users can refer to a column's formatter JSON inside another column/view formatter and use it along with other elements to build a custom column visualization. This can be done by using `columnFormatterReference` property.

The following image shows a list with a Gallery layout referencing the Category column formatter:

![Gallery layout referring Category column](../images/sp-columnformatting-formatter-reference-1.png)

![List layout with Category column formatted](../images/sp-columnformatting-formatter-reference-2.png)

``` JSON
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/tile-formatting.schema.json",
  "height": 127,
  "width": 254,
  "hideSelection": false,
  "formatter": {
    "elmType": "div",
    "attributes": {
      "class": "sp-card-container"
    },
    "children": [
      {
        "elmType": "button",
        "attributes": {
          "class": "sp-card-defaultClickButton"
        },
        "customRowAction": {
          "action": "defaultClick"
        }
      },
      {
        "elmType": "div",
        "attributes": {
          "class": "ms-bgColor-white sp-css-borderColor-neutralLight sp-card-borderHighlight sp-card-subContainer"
        },
        "children": [
          {
            "elmType": "div",
            "attributes": {
              "class": "sp-card-displayColumnContainer"
            },
            "children": [
              {
                "elmType": "p",
                "attributes": {
                  "class": "ms-fontColor-neutralSecondaryAlt sp-card-label"
                },
                "txtContent": "[!Title.DisplayName]"
              },
              {
                "elmType": "p",
                "attributes": {
                  "title": "[$Title]",
                  "class": "ms-fontColor-neutralPrimary sp-card-content sp-card-highlightedContent"
                },
                "txtContent": "=if ([$Title] == '', '–', [$Title])"
              }
            ]
          },
          {
            "elmType": "div",
            "attributes": {
              "class": "sp-card-lastTextColumnContainer"
            },
            "children": [
              {
                "elmType": "p",
                "attributes": {
                  "class": "ms-fontColor-neutralSecondaryAlt sp-card-label"
                },
                "txtContent": "[!Category.DisplayName]"
              },
              {
                "elmType": "div",
                "attributes": {
                  "class": "sp-card-content"
                },
                "style": {
                  "height": "32px",
                  "font-size":"12px"
                },
                "children": [
                  {
                    "columnFormatterReference": "[$Category]"
                  }
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
