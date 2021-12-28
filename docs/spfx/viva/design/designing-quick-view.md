---
title: Quick view design guidance
description: Design guidance for the Viva Connections quick views
ms.date: 12/28/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# Designing Viva Connections Quick Views

## Principles

Create quick views to provide a bit more detailed information (for example: a detailed list with data) or to accomplish quick tasks (for example a simple form) without opening an app.

Here are a few examples of quick views:

:::image type="content" source="../../../images/viva-design/img_quickviews.jpg" alt-text="Card container and elements":::

The Quick View experience works across different platforms and form-factors based on a single JSON. This introduces certain limitations in terms of available styling and placement on controls. You should not expect identical or pixel perfect comparison of a quick view rendered on web / iOS or Android.

> [!TIP]
> JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays (or other serializable values). It is a common data format with a diverse range of functionality in data interchange including communication of web applications with servers. JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. JSON filenames use the extension .json.

## Layout

:::image type="content" source="../../../images/viva-design/img_quickview_layout.jpg" alt-text="Card container and elements":::

1. Header
   1. Dismiss quick view
   1. Card name​​​​​​​, defined by the Dashboard card title
   1. Open linked app (optional)​​​​​​​
1. Content area - Scrollable, can contain the following elements defined by Adaptive cards schema:
    1. Containers
       1. Container
       1. ImageSet
       1. FactSet
       1. ColumnSet
       1. Table
    1. Elements
       1. TextBlock
       1. RichTextBlock
       1. Image
       1. Media
       1. ActionSet
    1. Inputs
       1. Input.Text
       1. Input.Date
       1. Input.Time
       1. Input.Number
       1. Input.ChoiceSet
       1. Input.Toggle

## Interaction

Quick views are vertically scrollable independent of the rest of the underlying interface and should not be horizontally scrolled.

### Back stack

Avoid adding too many navigation levels within the Quick view. It's best to keep it simple so that it's easy for users to accomplish their task quickly.

While you can open several children quick views from the parent quick view, we recommend not to navigate more than one level down.

:::image type="content" source="../../../images/viva-design/img_quickview_backstack.gif" alt-text="Card container and elements":::

### Quick views vs Web views

Despite being visually similar, they are two very different surfaces for different use cases.

:::image type="content" source="../../../images/viva-design/img_quickview_webview.jpg" alt-text="Card container and elements":::

#### Quick view

This UI surface is built using JSON code. Serves as a mean to perform fast actions or fill pout simple forms or render more information with faster load times compared to a web page called via Web view.

#### Web view

Can be used to load web pages with everything they can offer including more complex layouts and better styles, can be way slower to load than a than Quick view.

Any web page opened on mobile is going to be rendered within a web view, while it's going to be a new browser tab if opened on SharePoint.

## Theming

### We​​​​​​​b

Quick views will follow SharePoint default and custom company-created themes.

:::image type="content" source="../../../images/viva-design/img_quickview_web_theme.jpg" alt-text="Card container and elements":::

### Mobile

Currently dark themes are not supported for quick views on iOS and Android mobile.

:::image type="content" source="../../../images/viva-design/img_quickview_ios_theme.jpg" alt-text="Card container and elements":::