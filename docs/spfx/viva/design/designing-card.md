---
title: Dashboard cards design guidance
description: Design guidance for the Viva Connections custom cards
ms.date: 12/28/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# Designing Viva Connections custom cards for your dashboard

## Principles

Cards are used to link resources, surface information, and power direct interaction with applications.

**Integrate rather than duplicate:** Take advantage of the experiences already available on your intranet, such as task assignments and completion, shift schedules, company policies, and more.

**Stay in context:** Design cards to avoid making users jump around to different experiences. For example, it's ideal if you can keep interactions within the Viva Connections app using Quick view (link to quick view page here). Next best is to keep user interactions within the dashboard.

**Bring cards to life with relevant and dynamically refreshable data:** Company stock price, due dates for training or projects, task assignment updates, and remaining vacation days are some examples.

:::image type="content" source="../../../images/viva-design/img-card-design2.gif" alt-text="Card container and elements":::

## Anatomy of cards

Each dashboard card has the following elements:

:::image type="content" source="../../../images/viva-design/img_card_base.jpg" alt-text="Card container and elements":::

1. **Container**: All card content sits within the container.

1. **Icon**: Unique visual representation of this card. You can choose the icon from the pre-defined set or upload a customized icon.

    Icons from the pre-defined set are theme-friendly and will automatically adjust to light and dark themes using theme primary color.

    For customized icons, maximum size is 24 px by 24 px. Recommended formats are PNG or SVG. SVG icons scale better across different screen resolutions. Make sure the icon has a transparent background, and it looks good both on light and dark theme. Learn about SharePoint themes.

1. **Title**: Typically the app name. All titles should be in sentence case.

1. **Heading**: Most visually prominent text on the card. Used to communicate key information. Heading text can be static or dynamically updated. All headings should be in sentence case.

When adding the title and heading, ensure the text does not truncate and can fit in the card width on both desktop and mobile in both card sizes (more information about sizes is given below) and all languages used. Truncated text can hide key information that might be necessary for the end user to complete the task. For the title, in most cases, a length of 10-12 characters should fit the card width well.

:::image type="content" source="../../../images/viva-design/img_card_truncation.jpg" alt-text="Card container and elements":::

### Layouts and sizes

There are three types of cards layouts available to choose from.

- Heading
- Heading + Image
- Heading + Description

All layouts come in two sizes: medium or large. Card size will determine how the space in the dashboard is utilized. It's useful to start with medium size cards. Use large size card if they are needed to showcase additional info that does not fit in the medium size.

#### Heading​​​​​​​

Use when the heading is sufficient to communicate the key information in the card.

:::image type="content" source="../../../images/viva-design/img_card_heading.jpg" alt-text="Card container and elements":::

#### Heading + Description​​​​​​​

Use when the description can add informational value to the heading and can make it easier to understand the purpose of the card. Avoid repeating information already communicated in the heading.

:::image type="content" source="../../../images/viva-design/img_card_description.jpg" alt-text="Card container and elements":::

### Heading + Image​​​​​​​

Images draw viewer's eye, so use images carefully either to create recognition of a familiar app or website, or increase overall visual prominence of the card on the dashboard. The image should meaningfully connect to the heading and/or title.

:::image type="content" source="../../../images/viva-design/img_card_image.jpg" alt-text="Card container and elements":::

## Interaction

There are three possible ways to interact with a card:

- Card (the entire card can be clickable)
- Primary button
- Secondary button

:::image type="content" source="../../../images/viva-design/img_card_interactions.jpg" alt-text="Card container and elements":::

Each of these interactions can be customized. Use these to perform an instant action, send a request to server, open a quick view (add link), link to a Teams app, open an external website and so on.

Here are the best practices for designing card interactions:

- The overall card should always be interactive.
- If the primary button is used, because of its visual prominence, it should be the most important action on the card.
- The secondary button can used either on its own or in conjunction with the primary button if two actions are needed (only available in large size card layouts). If it's used with the primary button, make sure it is linked to the second most important action on the card. In that case, the card itself will become the least important action.
- For button labels, use concise and clear text that accurately reflects button behavior. For example 'View tasks' can better than only 'View'.
- Make sure each interaction on the card is unique.
- Design cards to avoid making users jump around to different experiences. For example, it's ideal if you can keep interactions within the Viva Connections app using Quick view. Next best is to keep user interactions within the dashboard.

> [!NOTE]
> Due to lack of space:
> - Heading + Image layout does not have buttons with M size cards.
> - Heading and Heading + Description layouts can only have one button with M size cards.

### Examples

​​​​​​​Here are some example cards for how these layouts can be used

:::image type="content" source="../../../images/viva-design/img_card_collections.jpg" alt-text="Card container and elements":::


## Platforms and modes

Dashboard cards are supported on iOS, Android, and Web. However there are slight differences the styling between different platforms – fonts (Segoe UI for desktop, Roboto for Android, SF Display Pro for iOS), colors, sizes, and spacing is slightly tweaked to better suit the respective platform and make the cards look consistent with the overall experience of that platform.

:::image type="content" source="../../../images/viva-design/img_card_platforms.jpg" alt-text="Card container and elements":::

Dashboard cards also support both light and dark mode theme. Ensure that colors you use work for both modes – text should be legible, and buttons and icons should be clearly recognizable against the background. To meet accessibility criteria, text should have a color ratio of 4.5:1 against the button background, and non-text components like icon should have a color ratio of 3:1 against the background. [Use this tool to check color contrast](https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html).

:::image type="content" source="../../../images/viva-design/img_card_modes.jpg" alt-text="Card container and elements":::

### Displaying your app in the toolbox

New cards are added to that dashboard using the following toolbox.

:::image type="content" source="../../../images/viva-design/img_card_toolbox.jpg" alt-text="Card container and elements":::

To display your custom app in the dashboard picker, you will need the following:

:::image type="content" source="../../../images/viva-design/img_card_toolbox2.jpg" alt-text="Card container and elements":::

**1. Icon:** Unique visual representation of this app. Your custom icon maximum size is 24 px by 24 px and should preferably in PNG or SVG format. SVG icons scale better across different screen resolutions. It is preferable to use a monochromatic icon, but you can use color icons if you want to represent your unique brand with the icons. Either way, make sure the icon has a transparent background, and it looks good both on light and dark theme. [​​​​​​​Learn about SharePoint themes](/sharepoint/dev/declarative-customization/site-theming/sharepoint-site-theming-overview). The same icon is to be used for the dashboard card (see above).

**2. Title:** Make sure the title of the app is concise and is not truncated. Recommended length is 10-12 characters. The same title should be used for the dashboard card (see above) and the quick view (link quick view page) (if used). If you have multiple apps, it is recommended that each app has a unique title. All titles should be sentence case.

**3. Descriptive text:** A clear, concise description explains the purpose of the card and provides information about how to use it. It should show up in the tooltip on hover (in web). Make sure the text wraps appropriately and is not too wide or too narrow in the tooltip. The optimal line length is considered to be 50-60 characters per line, including spaces.

### Defining settings for the card

When the app is clicked, the card is displayed on the dashboard. The card can be edited using the settings panel on the right.

:::image type="content" source="../../../images/viva-design/img_card_settings.jpg" alt-text="Card container and elements":::

Here are some best practices for offering customization settings:

- Include descriptive text that explains the purpose of the card and provides information about how to use it. Ensure that this is either the same text as the tooltip or adds to it.
- Unless the text on the card is dynamically updated, allow users to edit the text on the card to tailor it to their needs. Consider providing prewritten default text in the fields that the user can override and edit as necessary.
- If multiple cards are available from the same organization, ensure that labels and interactions in the settings panel are consistent across all the cards.
- If there are multiple settings and the card is complex in design, it is recommended to add a "Learn more" link where users can find best practices for adding your card to their dashboard, for example, recommended size, example cards, and so on.