---
title:  Layout patterns
description: Common web part layout types and responsive patterns
ms.date: 08/24/2018
---

# Web part layouts

SharePoint uses a number of different layout types for web parts. The most commonly used are grid, list, filmstrip, carousel and compact. Each one of these five layouts serves a different purpose depending on a page layout, breakpoints and content density. 

When selecting a layout that works best for your web part consider the type of content you are displaying. Is it highly visual or rich in text and data. Determine how much space is needed on the page for enough content to be displayed. Consider trucating descriptions that may be lengthy to optimize for displaying more itmes to the end user. Remember that the [property pane](reactive-and-nonreactive-web-parts.md) can be leveraged to let authors have control of how much content is displayed.

![Carousel with icons representing the common layouts](../images/01_Layouts_webparts.png)

## Grid and Filmstrip

Grid and filmstrip layouts are very much alike, they both use cards to showcase content. However, other rectangular content also works well in these layouts such as images. The major difference between the two layouts are how they reflow based on varioius screen sizes or breakpoints.

### Grid layout

The Grid reflows in rows and columns from top to bottom and can contain a few to many items at a time.

![Animated gif showing the Grid layout reflowing across breakpoints](../images/layouts_animation_grid.gif)

### Filmstrip layout

The Filmstrip display multiple items in a single row and caroesels to a new set of items.

![Animated gif showing the Filmstrip layout reflowing across breakpoints](../images/layouts_animation_filmstrip.gif)


## List

Using the List layout can be useful to display large amount of info in a compact manner. When resizing the lesser important columns will hide as the page width get smaller.

![Animated gif showing the List layout reflowing across breakpoints](../images/layouts_animation_list.gif)

## Carousel

Want to Showcase content featuring really nice visuals? Go with the Carousel layout. This layout is designed to display visual content such as images, PowerPoint files or simillar in a one by one item carousel.

![Animated gif showing the Carousel layout reflowing across breakpoints](../images/layouts_animation_carousel.gif)

## Compact

The Compact layout is designed to show content in a smaller format and works the best in a 1/3rd column. This layout can support a small image or icon and a few rows of text for a title, description and/or metadata.

![Animated gif showing the Compact layout reflowing across breakpoints](../images/layouts_animation_compact.gif)


## See also

- [SharePoint grid and responsive design](grid-and-responsive-design.md)
- [Designing great SharePoint experiences](design-guidance-overview.md)
