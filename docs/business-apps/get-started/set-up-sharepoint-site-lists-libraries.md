---
title: Set up your SharePoint site with lists and libraries
description: Set up your SharePoint site with lists and libraries
ms.date: 3/11/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Set up your SharePoint site with lists and libraries
To successfully complete the *Getting Started* tutorials, set up your SharePoint site with the following items.

## Microsoft 365 tenant
To use Power Automate and build flows, you need an Office 365 tenant.

If you already have an Office 365 tenant, see section **Create Projects list** below.

If you don't have one, you can get an Office 365 developer subscription when you join the [Office 365 Developer Program](https://developer.microsoft.com/office/dev-program). See the [Office 365 Developer Program documentation](https://docs.microsoft.com/office/developer-program/office-365-developer-program) for step-by-step instructions about how to join the Office 365 Developer Program and sign up and configure your subscription.

## Create Projects list
Create a new SharePoint list called **Projects**. To create a new SharePoint list, follow these steps.

### Create a new list
1. In your Microsoft 365 tenant, browse to a modern SharePoint site.

> **Note:** You can use either a modern Teams site or a Communications site.
  
2. In the command bar, select **New** > **List**.

3. In the **Create list** panel, enter the following:

    * **Name**: Projects
    
4. To create the list, select **Create**
    
    You are automatically redirected to the **Projects** list.

5. Select **+ Add column**, and to add an **Owner** column to the list, and then select the **Person** column type.

6. In the **Create a column** panel, enter the following:

    * **Name**: Owner
    * **Description**: Project owner
    
7. To add the column to the Projects list, select **Save**. The new **Owner** column becomes available in the **Projects** list.

### Add new project items
In the List command bar, select **New**, and add the following list items:

* Item 1
  * **Title**: Project 1
  * **Owner**: Select a user from people picker

* Item 2
  * **Title**: Project 2
  * **Owner**: Select a user from people picker

* Item 3
  * **Title**: Project 3
  * **Owner**: pick a user from people picker

## Next steps

Now that you have set up your SharePoint site with the lists and libraries, you are ready to build your first flow.

![Project lists for Getting Started Power Automate tutorials](../../images/flow-tutorials-setup-projects-list.png)
