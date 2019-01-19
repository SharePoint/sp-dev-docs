---
title: Reactive and nonreactive SharePoint web parts
description: Reactive web parts are client-side only; nonreactive web parts have elements that require a server to operate.
ms.date: 01/23/2018 
localization_priority: Priority
---

# Reactive and nonreactive SharePoint web parts

Reactive web parts are client-side only; nonreactive web parts have elements that require a server to operate. We recommend that you build your SharePoint web parts to be reactive, because that best fits the UX model and WYSIWYG principles for authoring. However, it might not be possible or cost-effective in all cases to build reactive web parts.


## Reactive web parts

Reactive web parts are fully client-side web parts. This means that each component configured in the property pane reflects the change made within the web part on the page. For example, for the To-Do List web part, unchecking “Completed Tasks” hides this view in the web part.

<img alt="A reactive web part" src="../images/design-reactive-01.png" width="850">

## Nonreactive web parts
Nonreactive web parts are not fully client-side; generally, one or more properties need to make a call to set/pull or store data on a server. For nonreactive web parts, you should enable the **Apply** button at the bottom of the property pane.

You can also customize the **Apply** button to be a more specific action. <!-- Is this a reference to an image? (design-wp-pp-non-reactive.png) -->

<img alt="A nonreactive web part with Apply and Cancel buttons" src="../images/design-reactive-02.png" width="850">

<br/>

The following examples show nonreactive web parts in the context of the [three property pane structures](design-a-web-part.md).

**Single pane example**

<img alt="A nonreactive web part with a single pane property structure" src="../images/design-reactive-03.png" width="850">

<br/>

**Accordion groups example**

<img alt="A nonreactive web part with an according groups pane property structure" src="../images/design-reactive-04.png" width="850">

<br/>

**Steps pane example**

<img alt="A nonreactive web part with a steps pane property structure" src="../images/design-reactive-05.png" width="850">

## See also

- [Designing great SharePoint experiences](design-guidance-overview.md)
