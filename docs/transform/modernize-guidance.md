---
title: SharePoint modernization guidance
description: Modernization offerings that IT Teams can use with their customers
ms.date: 04/25/2022
ms.prod: sharepoint
ms.localizationpriority: high
---

# SharePoint modernization guidance

> [!IMPORTANT]
> Modernization tooling and all other PnP components are open-source tools backed by an active community providing support for them. There is no SLA for open-source tool support from official Microsoft support channels.

IT teams and partners on behalf can follow the below process and use the available materials, tools and scripts along your modernization journey. The SharePoint modernization guidance is an offering that takes you on a step by step journey with as end goal modernized site collections. The focus of this guidance is on collaboration site modernization, if you want to modernize classic publishing portals then please check out the [Modernize publishing portals](modernize-publishing-portal.md) page.

The used approach is structured around 4 steps which are described in great detail in the delivery guide (PowerPoint, see the Resources paragraph).

## Step 1: Assessment

Understanding which sites are candidates to be modernized is needed to understand the scope of the work. During the assessment phase you'll learn how to run the [SharePoint Modernization scanner](https://aka.ms/sppnp-modernizationscanner).

Check the [Assessment page](modernize-guidance-assessment.md) to learn more.

## Step 2: Strategy

This step provides a detailed explanation of how a classic SharePoint site will be transformed to a modern SharePoint site. Next to that it will touch upon key topics like Microsoft 365 group naming strategy, setting up tenant themes and configuring [Office 365 Learning Pathways](https://aka.ms/learningpathways).

Check the [Strategy page](modernize-guidance-strategy.md) to learn more.

## Step 3: Execution

Next is using the scan results from step 1 to build your modernization plan: you'll learn how to use the scan output to identify the sites to modernize and how to structure them in waves. Next you'll review and tailor the modernization scripts, prepare and validate the input for these scripts and finally run the modernization scripts.

Check the [Execution page](modernize-guidance-execution.md) to learn more.

## Step 4: Support

The final step talks about how to get help for the open source modernization guidance and provide some ideas about potential next steps.

Check the [Support page](modernize-guidance-support.md) to learn more.

## Resources

Resource | Description
---------|------------
[Delivery guide (PowerPoint)](https://github.com/SharePoint/sp-dev-modernization/blob/dev/Modernization%20partner%20guidance/Microsoft%20Teamwork%20Transformation%20Delivery%20Guide.pptx?raw=true) | Deck that describes the 4 step approach in great detail.
[Modernization scripts](https://aka.ms/sppnp-modernization-sitecollectionscripts) | Scripts for modernizing a site collection by combining Microsoft 365 group Connect, page transformation, cleaning up branding, creating a Teams team,... The scripts can work for a single site collection, but you can also provide a list of site collections to be modernized.
