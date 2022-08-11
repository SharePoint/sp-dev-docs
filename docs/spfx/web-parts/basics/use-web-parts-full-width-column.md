---
title: Use web parts with the full-width column
description: Build web parts that can be used in the full-width column
ms.date: 06/16/2020
ms.localizationpriority: high
---

# Use web parts with the full-width column

Modern SharePoint pages support layouts that allow users to organize the information they present on their pages. Users can choose from a number of different section layouts such as two columns, three columns, or one-third column. Modern pages in communication sites offer an additional section layout named **Full-width column**. This layout spans the full width of the page without any horizontal margin or padding. SharePoint Framework web parts can be placed in any layout, but because of extra requirements, web parts must explicitly enable support for the full-width column.

## Layout requirements for the full-width column

One thing that regular layouts in modern SharePoint pages share, is the maximum width. To guarantee the ease of readability and usability, the body of a modern page doesn't expand beyond a certain width. When building web parts that will be used in regular layouts, you test your web part's width against the known maximum and minimum width constraints to ensure that they're displayed properly.

When working with the full-width column layout, however, things become a bit more complicated as that layout expands to the full width of the page. When displayed on an ultra-wide monitor, the full-width column can even become a few thousand pixels wide. This introduces additional testing requirements that you should take into account when building web parts that can be used in the full-width column.

## Enable support for the full-width column

By default, SharePoint Framework client-side web parts can't be placed in full-width column layouts. To allow users to add your web part to full-width columns, in the web part manifest (*the **\*.manifest.json** file next to the web part **\*.ts** file*) set the `supportsFullBleed` property to `true`.

```json
{
  //...

  "requiresCustomScript": false,
  "supportsFullBleed": true,

  "preconfiguredEntries": [{
    //...
  }]
}
```

With this setting enabled, when you edit a page with a full-width column layout, your web part will be displayed among the web parts that can be added to the column.

![Custom SharePoint Framework client-side web part displayed among web parts that can be added to a full-width column layout](../../../images/fullwidthcolumn-webpart-add.png)

> [!NOTE]
> The SharePoint workbench doesn't support testing web parts in the full-width column layout. Instead, you will have to deploy your web part to a developer tenant, create a communication site, and test your web part there.
