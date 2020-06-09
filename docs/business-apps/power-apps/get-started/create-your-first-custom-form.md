---
title: Customize a form for a SharePoint list
description: Customize a form for a SharePoint list
ms.date: 06/03/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Customize a form for a SharePoint list
Using Power Apps, you can easily customize the form for a SharePoint list to create the form filling experience that works best for your team or organization.

In this tutorial, you will you create a custom form with a user profile photo, a read-only field, and a conditionally visible field.

## Required setup
Before proceeding with these instructions, make sure your SharePoint site is set up with the [required lists and libraries](../../../business-apps/get-started/set-up-sharepoint-site-lists-libraries).

## Create a custom form
1. In your SharePoint site, browse to the **Projects** list.

2. To create and manage flows for a list or a library, from the command bar, on the list or library page, select **Power Apps**. Selecting **Power Apps** expands to show you more options:

    * Create an app
    * See all apps
    * Customize forms

    ![Create a custom form from Projects list](../../../images/gs01-create-a-custom-form-command-bar.png)

3. Select **Customize forms**. The Power Apps studio will open and load your form onto the canvas.

    ![Power Apps studio with custom form](../../../images/gs01-power-apps-studio-custom-form.png)

    If the **Welcome to Power Apps Studio** dialog box opens, select **Skip**.

### Add a user profile photo

1. On the **Insert** tab, select **Media** > **Image**.

    ![Add an image in Power Apps studio](../../../images/gs01-power-apps-studio-add-image.png)

    An [Image](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-image) control named **Image1** will be added to the canvas and to the [Tree View](https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/using-tree-view-on-form) on the left-hand panel.

2. To customize the look and feel of the image, you can set its properties.
    > When a control on the canvas is selected, the Properties pane that is associated with the control opens on the right-hand panel.

    ![Image control with Properties panel](../../../images/gs01-image-control-selected.png)

    Since the image will be the profile photo of the owner, let us make it the same height as the **Owner_DataCard1** [data card](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-cards).

    With **Image1** selected, in the [formula bar](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-formulas), change the property to **Height** and enter **"Owner_DataCard1.Height"** as the formula.

    ![Set image height](../../../images/gs01-set-image-height.png)

    **Image1** will now have the same height as **Owner_DataCard1**.
         
3. Set the width of **Image1** to be the same as its height. In the formula bar, change the property to **Width** and enter **"Self.Height"** as the formula.

    ![Set image width](../../../images/gs01-set-image-width.png)

4. Make **Image1** in to a circle. In the Properties pane, enter a value that is half of the height value in the **Border radius** property.

5. Place **Image1** on the canvas in your desired location. Adjust the widths and heights of other controls or data cards so that they do not overlap with **Image1**.

    ![Set image border radius](../../../images/gs01-set-image-border-radius.png)

6. To change the image of **Image1** from the sample image to the owner's profile photo, make sure that **Image1** is selected. In the formula bar, change the property to **Image** and enter **"SharePointIntegration.Selected.Owner.Picture"** as the formula.

    ![Set image picture](../../../images/gs01-set-image-picture.png)

    The user photo from the owner's Office 365 user profile will appear in **Image1**.

### Set a field to be read-only

1. Let us make the **Title** field read-only.

    > **Title** is a [predefined card](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-card), so it is locked by default and needs to be unlocked.

    Select **Title_DataCard1**, toggle the Properties pane to the Advanced pane, and click **Unlock to manage properties**.

    ![Unlock title data card](../../../images/gs01-unlock-title-data-card.png)

    Alternatively, right-click on **Title_DataCard1** in the Tree View and select **Unlock**.

2. Toggle back to the Properties pane and select the **Display mode** field. The formula bar will update to display this property.

    ![Click on display mode field](../../../images/gs01-title-property-display-mode.png)

3. In the formula bar, enter **"DisplayMode.View"** as the formula.
    
    ![View-only title](../../../images/gs01-title-data-card-view-only.png)
    
    Alternatively, in the Properties pane, set the value of Display mode to **View**.

    **DataCardValue1** is now a view-only field.

### Set the visibility of a field based on a condition

1. Let us hide the **Attachments** field if the project owner is Nestor Wilke.

    > **Attachments** is a [predefined card](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-card), so it is locked by default and needs to be unlocked.

    Select **Attachments**, toggle the Properties pane to the Advanced pane, and click **Unlock to manage properties**.

    ![Unlock attachments data card](../../../images/gs01-unlock-attachments-data-card.png)

    Alternatively, right-click on **Attachments_DataCard1** in the Tree View and select **Unlock**.

2. Toggle back to the Properties pane and select the **Visible** field. The formula bar will update to display this property.

    ![Click on visible field](../../../images/gs01-attachments-property-visible.png)

3. In the formula bar, enter the following formula:
    >If(SharePointIntegration.Selected.Owner.DisplayName = "Nestor Wilke", false)

    ![View-only title](../../../images/gs01-attachments-conditional-visibility.png)
    
    The **Attachments** data card is now hidden if the project owner is Nestor Wilke.

    The same conditional logic can be written in multiple ways. Learn more about [Operators and Identifiers in Power Apps](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/functions/operators).

## Publish your custom form

1. On the **File** tab, select the **Save** tab and then click the **Save** button.

    ![Save Power Apps](../../../images/gs01-save-power-apps.png)

    Alternatively, you can press **Ctrl+S** while the canvas is visible in order to save your app.

2. Once the app is saved, click **Publish to SharePoint**.

    ![Publish Power Apps](../../../images/gs01-publish-power-apps.png)

    In the dialog box that appears, click **Publish to SharePoint** to confirm.

    > The version of the custom form that appears in SharePoint is the most recently published version.

3. Verify the intended functionality of your app in SharePoint.

## Next steps
Congratulations on creating your custom form!

In the next topic, we will build on top of this custom form so that the user profile photo and the visibility of the **Attachments** data card automatically updates when the owner is changed.