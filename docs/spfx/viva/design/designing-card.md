---
title:  Designing custom cards for your dashboard
description: Design guidance for the Viva Connections custom cards
ms.date: 10/18/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# Designing Viva Connections custom cards for your dashboard

Developers can extend [Microsoft Viva Connections](https://www.microsoft.com/microsoft-viva) for building engaging experiences with the widely adopted SharePoint Framework (SPFx). Viva Connections is your gateway to a modern employee experience where you can build and integrate apps that shape culture and foster connections to help employees thrive. With SPFx, you have multiple ways to extend – using the same out-of-the-box or custom SPFx web parts, SPFx extensions (e.g. header, footer), and specific components for optimized mobile experiences.

[!INCLUDE [spfx-release-beta](../../../../includes/snippets/spfx-release-beta.md)]

## Overview

### Intro

Use this toolkit to help you design custom cards for your dashboard. You'll learn the structure of cards, how users can interact with them, and the design principles to help you make them attractive and engaging for mobile and desktop use. 

To learn more about how to create custom cards, see Getting Started - Adaptive Cards 

### What is a Dashboard?

The Viva Connections Dashboard is the digital toolbelt for your employees. You can create a curated experience using dashboard cards to give your employees access to their most critical content and tools. 

The cards are designed to enable quick task completion by interacting with a card directly or by opening a quick view. 

[image dashboard_overview.jpg]


## Interactions Flow

### Structure 

Cards, Quick View

[image Card + Quick view]

### User Interaction principles

Provide a simple flow that allows users to accomplish tasks quickly.
Reflect dynamic content that refreshes based on a user action.
Display a quick view with more information or an input form.
Maintain consistency between the card and its quick view.

[image ia_schema.jpg]

## Components

### Cards

#### Principles

Create cards that connect and engage employees with organization content and tasks.

Integrate rather than duplicate. Take advantage of the experiences already available on your intranet, such as task assignments and completion, shift schedules, company policies, and more.

Stay in context. Design cards to avoid making users jump around to different experiences. For example, it's ideal if you can keep interactions within the Viva Connections app using Quick view. Next best is to keep user interactions within Teams.

Bring cards to life with relevant and dynamically refreshable data. Company stock price, due dates for training or projects, task assignment updates, and remaining vacation days are some examples.

#### Sizes (specs)

You can choose from medium or large card sizes. Card size will determine how the space in the dashboard is utilized. It's useful to start with medium size cards and then try out large as your dashboard comes together.

[image two_cards.jpg]

#### Layouts (anatomy)

Setting buttons aside, there are three possible card layouts to choose from: Heading, dynamic value + heading and Image + heading

> [!NOTE]
> Image and heading layout does not have buttons with M size cards due to lack of space.

[image card_layouts.jpg]

#### Interaction

Each card must be linked to a destination like a SharePoint page, a web site, or an app.

Buttons are either filled or outlined. Filled represents a user action, while outlined opens a Quick view.

[image card_patterns.jpg]

#### States

[image card_states.jpg]

#### Examples (collections)

[image card_collections.jpg]

### Quick view

#### Principles

Use Quick view to do things like present details or more information, or to provide users a way to accomplish tasks without opening a separate app. 

Avoid adding too many navigation levels within the Quick view. It's best to keep it simple so that it's easy for users to accomplish their task quickly. 

#### Back stack

While theoretically you can open several children quick views from the parent quick view, we recommend not to navigate more than one level down.

[image qv_backstack.jpg]

#### Implementing Quick View experiences

The Quick View experience works across platforms and form-factors based on a single JSON. This introduces significant limitations in terms of styling and placement on controls and how they show up on mobile devices. There are also styling issues which may be on mobile form factor and may not be there in web or vice versa. 

#### Out of the box controls

## Platforms & Theming

Design for different screens, platforms, and colors.

[image web_ios_android.jpg]

### Platforms

The dashboard can be viewed on a mobile device: iOS / Android or in a browser: SharePoint page.

The stylistic differences are fairly minimal and adhere to Microsoft Fluent language (see Resources page for more details). To quickly call out just a few main ones: different font families Segoe UI, SF Display Pro, and Roboto and font sizes.

[image cards_platforms.jpg]

Devices Examples: iOS/Android, Web

### Theming

When designing for light and dark themes, keep in mind the following: 

- Colors from your SharePoint intranet theme are automatically applied. 
- Use monochrome SVG icons so that they are automatically colored based on your SharePoint intranet theme. 
- Check that your images are visible and work well on light and dark backgrounds. 

> [!NOTE]
> Note: Quick view currently supports only a light theme.

[image light_dark.jpg]


## Resources

- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/)
- [Fluent Theme designer](https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html)
- [AC Designer](https://adaptivecards.io/designer/)
