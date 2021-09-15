---
title: Set up your SharePoint site with lists and libraries
description: Set up your SharePoint site with lists and libraries
ms.date: 6/23/2020
ms.prod: sharepoint
ms.localizationpriority: high
---

# Set up your SharePoint site with lists and libraries

To successfully complete the *Getting Started* tutorials, set up your SharePoint site with the following items.

## Microsoft 365 tenant

To use Power Automate and build flows, you need a Microsoft 365 tenant.

If you already have an Office 365 tenant, see section **Create Projects list** below.

For step-by-step instructions about how to join the Microsoft 365 Developer Program and sign up and configure your subscription, see the [Office 365 Developer Program documentation](/office/developer-program/office-365-developer-program).

## Create Projects list

Create a new SharePoint list called **Projects**. To create a new SharePoint list, follow these steps.

### Create a new list

1. In your Microsoft 365 tenant, browse to a modern SharePoint site.

    > [!NOTE]
    > You can use either a modern Teams site or a Communications site.

1. In the command bar, select **New** > **List**.
1. In the **Create list** panel, enter the following:

    * **Name**: Projects

1. To create the list, select **Create**.

    You are automatically redirected to the **Projects** list.

1. Select **+ Add column**, and to add an **Owner** column to the list, and then select the **Person** column type.
1. In the **Create a column** panel, enter the following:

    * **Name**: Owner
    * **Description**: Project owner

1. To add the column to the Projects list, select **Save**. The new **Owner** column becomes available in the **Projects** list.

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
