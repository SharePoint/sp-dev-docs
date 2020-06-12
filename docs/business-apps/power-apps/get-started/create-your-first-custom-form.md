---
title: Customize a form for a SharePoint list
description: Customize a form for a SharePoint list
ms.date: 06/03/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Customize a form for a SharePoint list

Using Power Apps, you can easily customize a form for a SharePoint list that works best for your team or organization.

In this tutorial, you will create a custom form with a user profile photo, a read-only field, and a conditionally-visible field.

## Required setup

Before starting, make sure your SharePoint site is set up with the [required lists and libraries](../../../business-apps/get-started/set-up-sharepoint-site-lists-libraries).

## Create a custom form

1. In your SharePoint site, browse to the **Projects** list.

2. To create and manage flows for a list or a library, from the command bar, on the list or library page, select **Power Apps**. More options appear:

   - Create an app
   - See all apps
   - Customize forms

    ![Create a custom form from Projects list](../../../images/gs01-create-a-custom-form-command-bar.png)

3. Select **Customize forms**. The Power Apps studio appears and loads your form onto the canvas. If the **Welcome to Power Apps Studio** dialog box opens, select **Skip**.

    ![Power Apps studio with custom form](../../../images/gs01-power-apps-studio-custom-form.png)

### Add a user profile photo

1. On the **Insert** tab, select **Media** > **Image**. An [Image](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-image) control named **Image1** is added to the canvas and to the [Tree view](https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/using-tree-view-on-form) on the left-hand panel.

    ![Add an image in Power Apps studio](../../../images/gs01-power-apps-studio-add-image.png)

2. To customize the appearance of the image, you can set its properties.
    
    a. When you select a control on the canvas, on the right-hand panel, the **Properties** pane associated with the control appears.

    ![Image control with Properties panel](../../../images/gs01-image-control-selected.png)

    b. Because the image is the profile photo of the owner of the selected item, we recommend you make it the same height as the **Owner_DataCard1** [data card](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-cards).

    c. With **Image1** selected, in the [formula bar](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-formulas), change the property to **Height**, and enter **"Owner_DataCard1.Height"** as the formula. **Image1** now has the same height as **Owner_DataCard1**.

    ![Set image height](../../../images/gs01-set-image-height.png)
         
3. Set the width of **Image1** to be the same as its height. In the formula bar, change the property to **Width**, and enter **"Self.Height"** as the formula.

    ![Set image width](../../../images/gs01-set-image-width.png)

4. Make **Image1** into a circle. In the **Properties** pane, enter a value that is half the height value in the **Border radius** property.

5. Place **Image1** on the canvas in your desired location. Adjust the widths and heights of other controls or data cards so they do not overlap with **Image1**.

    ![Set image border radius](../../../images/gs01-set-image-border-radius.png)

6. To change the image of **Image1** from the sample image to the owner's profile photo, make sure you select **Image1**. In the formula bar, change the property to **Image**, and enter **"SharePointIntegration.Selected.Owner.Picture"** as the formula. The user photo from the owner's Microsoft 365 user profile appears in **Image1**.

    ![Set image picture](../../../images/gs01-set-image-picture.png)

### Set a field to be view-only

To make the **Title** field view-only, follow these steps.

 > [!NOTE]
 > **Title** is a [predefined card](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-card), so it is locked by default, and needs to be unlocked.

1. Select **Title_DataCard1**, toggle the **Properties** pane to the **Advanced** pane, and select **Unlock to manage properties**.

    ![Unlock title data card](../../../images/gs01-unlock-title-data-card.png)

    Alternatively, in the Tree view, right-click **Title_DataCard1**, and select **Unlock**.

2. Toggle back to the **Properties** pane, and select the **Display mode** field. The formula bar updates to display this property.

    ![Select display mode field](../../../images/gs01-title-property-display-mode.png)

3. In the formula bar, enter **"DisplayMode.View"** as the formula.
    
    ![View-only title](../../../images/gs01-title-data-card-view-only.png)
    
    Alternatively, in the **Properties** pane, set the value of **Display** mode to **View**.

    **DataCardValue1** is now a view-only field.

### Set the visibility of a field based on a condition

To hide the **Attachments** field if the project owner is Nestor Wilke, follow these steps.

> [!NOTE]
> **Attachments** is a [predefined card](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-card), so it is locked by default, and needs to be unlocked.

1. Select **Attachments**, toggle the **Properties** pane to the **Advanced** pane, and select **Unlock to manage properties**.

    ![Unlock attachments data card](../../../images/gs01-unlock-attachments-data-card.png)

    Alternatively, in the Tree view, right-click **Attachments_DataCard1**, and select **Unlock**.

2. Toggle back to the **Properties** pane, and select the **Visible** field. The formula bar updates to display this property.

    ![Select visible field](../../../images/gs01-attachments-property-visible.png)

3. In the formula bar, enter the following formula:

   If(SharePointIntegration.Selected.Owner.DisplayName = "Nestor Wilke", false)

    ![View-only title](../../../images/gs01-attachments-conditional-visibility.png)
    
    The **Attachments** data card is now hidden if the project owner is Nestor Wilke.

    You can write the same conditional logic in multiple ways. For more info, see [Operators and Identifiers in Power Apps](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/functions/operators).

## Publish your custom form

1. On the **File** tab, select the **Save** tab, and then select **Save**.

    ![Save Power Apps](../../../images/gs01-save-power-apps.png)

    Alternatively, to save your app, press **Ctrl+S** while the canvas is visible.

2. After you save the app, select **Publish to SharePoint**.

    ![Publish Power Apps](../../../images/gs01-publish-power-apps.png)

    In the dialog box that appears, to confirm, select **Publish to SharePoint**.

    The version of the custom form that appears in SharePoint is the most recently published version.

3. In SharePoint, verify the intended functionality of your app.

## Next steps

Congratulations on creating your custom form.

In the next topic, we will build on top of this custom form so that the user profile photo and the visibility of the **Attachments** data card automatically update when the owner is changed.
