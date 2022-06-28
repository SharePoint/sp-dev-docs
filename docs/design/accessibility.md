---
title: Accessibility in SharePoint web part design
description: Guidelines for adding accessibility to your web part.
ms.date: 06/28/2022
ms.localizationpriority: medium
---
# Accessibility in SharePoint web part design

Developing an experience that meets all users' unique visual, hearing, dexterity, cognitive, and speech needs is an important component of SharePoint web part design. Accessible design applies not only to people with disabilities, but also to potential situational impairments. Accessible design is good design.

## Accessibility guidelines

All Microsoft products must meet the requirements listed in the [Microsoft Accessibility Standards](https://www.microsoft.com/accessibility).

## Making web parts accessible

The SharePoint Framework provides a structure to help make all web parts accessible. The web part container provides keyboard navigation defaults for the web part toolbar to edit, move, and delete the web part, a method to select the web part, and a keyboard short cut (Ctrl+P) to open the property pane. However, you still need to specify additional keyboard and screen reader navigation for the other aspects of the UI in the web part and in the property pane.

In addition, many [Office UI Fabric components](https://developer.microsoft.com/fabric#/components) have built-in support for accessibility options, to make it quick to configure keyboard and screen reader navigation when you use the components in a web part.

The following image shows keyboard  navigation on a web part.

![Image that shows keyboard navigation on a web part](../images/accessibility-illustration-01.png)

## Accessibility testing

Test your web part first with [Narrator](https://support.microsoft.com/help/22798/windows-10-narrator-get-started) and Microsoft Edge, and then verify the accessibility experience with [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS).

Narrator and Microsoft Edge are standards compliant. When you test with that combination, you are more likely to find issues, and you can validate that your site meets accessibility standards.

JAWS is the market leader in screen readers. JAWS includes features that can improve the accessibility of some websites that aren't as accessible in other screen readers. Therefore, testing in JAWS might not ensure that your site meets all accessibility requirements.
 
You might also want to test for whatever combination of browser and screen reader has the greatest market share for your website.

## Keyboard navigation

For some users, navigating a site via keyboard is more accessible. Power users also often rely on keyboard navigation. Make sure to design keyboard shortcuts such as tabs to go to controls on the page, and use arrow keys to navigate inside controls.

### Navigation between controls

Each control is a tab stop. Within a control, the following rules apply:

- In general, the first tab stop is the top left area of the control. The last tab stop is the bottom right control.
- For modal surfaces, the last tab stop should be the commit actions.
- For lists, the first tab stop should be the first item in the list, the next should be the commands, and then the navigation, settings, and so on.

![Image that shows the tab stops on a SharePoint page](../images/accessibility-illustration-04.png)

### Navigation within a control

You can use arrow keys to move to items in a control, such as choices in a menu, commands in a command bar, or items in a list.

![Using arrow keys to navigate within a control](../images/accessibility-illustration-05.png)

### Selecting the current item

Use the space bar to select or deselect the item currently in focus in a control.

![Using the space bar to select an item in a list](../images/accessibility-illustration-06.png)

### Run a control

Press **Enter** or the return key to run a control.

![Press enter to run a control](../images/accessibility-illustration-07.png)

### Leave a control

Press **Escape** to exit a control and return to the container.

![Pressing Escape to leave a control and return to the container](../images/accessibility-illustration-08.png)

### Go to the first or last item

Press **Home** or **End** to go directly to the first or last item in a list, menu, and so on.

![Pressing Home or End to go to the first or last item in a list](../images/accessibility-illustration-09.png)

## Screen reader navigation

Users who have vision impairments rely on screen readers to navigate the site UI. When designing a web part, follow this example when thinking about keyboard navigation and how the screen reader conveys important actions or information to the user.

![Screen reader navigation of a SharePoint page](../images/accessibility-illustration-10.png)

## Alt text and transcripts

Use alt text to provide descriptions of images that can be consumed by screen readers. This is useful for vision-impaired users who cannot consume information visually. Make sure that your alt text is descriptive, keeping in mind that some readers are relying on a screen reader to access the information conveyed in the image.

Don't rely only on color to convey meaning; rely on both color and shape.

To be fully compliant with accessibility standards, include alt text and a complete transcript of audio and video content on your site.

## Minimum readable contrast

A minimum level of contrast is essential to help users with vision impairments consume the content on the page. It is also important to aid readability in low light and glare situations.

The following image shows theme colors on the left and neutral colors on the right.

![Neutral and Theme colors for minimum readable contrast](../images/themes-colors-blue-neutral-theme-2.png)

|       Theme colors       |       Neutral colors        |
| ------------------------ | --------------------------- |
| themeDarker: #004578     | black: #000000              |
| themeDark: #005a9e       | neutralDark: #212121        |
| themeDarkAlt: #106ebe    | neutralPrimary: #333        |
| themePrimary: #0078d7    | neutralPrimaryAlt: #3c3c3c  |
|                          | neutralSecondary: #666666   |
|                          | neutralTertiary: #a6a6a6    |
| themeSecondary: #2b88d8  | neutralTertiaryAlt: #c8c8c8 |
| themeTertiary: #71afe5   | neutralLight: #eaeaea       |
| themeLight: #c7e0f4      | neutralLighter: #f4f4f4     |
| themeLighter: #deecf9    | neutralLighterAlt: #f8f8f8  |
| themeLighterAlt: #eff6fc | white: #fff                 |

## High contrast

Use high contrast colors as a guide for color choices for components and states on the web. Windows computers only have the ability to detect whether a PC is running high contrast or high contrast white. For this reason, use the default high contrast black setting for any high contrast, non-white theme.

![High contrast black and high contrast white settings](../images/accessibility-illustration-14.png)

## See also

- [SharePoint themes and colors](themes-colors.md)
- [Design a web part](design-a-web-part.md)
- [Designing great SharePoint experiences](design-guidance-overview.md)
