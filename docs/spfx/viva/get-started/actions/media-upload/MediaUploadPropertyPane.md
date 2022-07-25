---
title: Explore Media Upload capability via property pane of card-designer card in Adaptive Card Extension
description: Media Upload is a new action that the SharePoint Adaptive Card Extension framework supports. In this tutorial we will see how we can explore this capability via the property pane of the card-designer card.
ms.date: 07/21/2022
ms.localizationpriority: high
---

# Explore Media Upload capability via property pane of card-designer card in Adaptive Card Extension.

In this tutorial we will see how we can explore this capability via the property pane of the card-designer card.

We will:

- Update the card strings
- Introduce media upload actions on the card view, primary button, and secondary button.

First, figure out the domain to the URL of your SharePoint tenant and site you want to use for testing and access the `workbench.aspx` page. For example: `https://contoso.sharepoint.com/sites/devsite/_layouts/workbench.aspx`.

Here, click on the '+' icon in the middle of the page, and add the `card-designer` card on the canvas.

Next, click the pencil icon adjacent to this card to open the property pane.

### Update the card strings

Here, first set the `Card size` to `Large`.

To provide descriptive labels, change `Title` to `Media Upload`, `Heading` to `Media Upload Demo` and `description` to `Demo Media Upload Actions`.

### Adding action on Card View

Under `Actions`, click the drop-down menu of `Card action` and select `Select media` option.
