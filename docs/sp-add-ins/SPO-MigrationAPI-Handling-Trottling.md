---
title: "Running Migrations into OneDrive and SharePoint in Office 365: Handling Throttling "
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.date: 6/10/2018
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint-server-itpro
localization_priority: Priority
ms.collection: 
- IT_Sharepoint_Server_Top
ms.custom: 
ms.assetid: 
description: "The per user sharing model in SharePoint relies on both permissions and Shared With data references for an object to be considered shared with an individual."
--- 
# Running Migrations into OneDrive and SharePoint in Office 365: Handling Throttling 

This document is intended for ISVs migrating content into OneDrive and SharePoint only. 

## Context and Expectations Setting 
Migration is critical for SPO and is prioritized alongside service availability. When we detect that service availability may be threatened, we send back 429 response codes to protect the experience of end users.  429 is a normal part of any well-functioning cloud system; the expectation is that background tasks will get 429s and all background task callers (both ISVs and Microsoft apps) should ride through them without direct customer impact to their own end users. 

The number of 429s sent back is a function of the current load on the farm, as well as other tenant/farm level variables, so it is important for us to talk to customers about migration throughput rather than the number of 429s themselves.

Set expectations with customers in the following manner: expect to create and manage migration efforts at any time, and expect content migration throughput to be higher during off-peak times and lower during peak times.  Overall, throughput over the duration of a day still aligns with our public documentation here. 

## Key Best Practices
 
Below are the key best practices we recommend migration vendors follow.  Keep in mind, this is a live document, and though we will try to keep changes to a minimum, changes will occur time to time.  
1.	Please include an ‘interactive flag’ in your user agent string for interactive calls (such as user login, launch jobs, etc.)
 
    a.  ISV|VendorName|AppName/Version|Interactive<br> 
**Note:**  Please allow a few days once you have implemented *Interactive flag* for the system to pick that cue, it may not be instantaneous. 
 
2.	We also allow 300 calls every 5 minutes to have the Interactive flag, for handling small migrations and site management that customers expect to complete interactively 
 
3.	Please use the retry value in the http header of the 429 message and do not exponential back-off 
 
4.	Please do not handle 429 as an error condition displayed to the user.  When 429 does occur, handle it as a background task retry and do not prompt users to contact support. 

    a. If users cannot login or if jobs are not progressing, that should be escalated<br>
    b. If you are seeing over 30% of requests getting 429 over 30 minutes, that should be escalated 
 
5.	Do expect throughput to be lower during peak hours as opposed to off-peak hours. Generally, nights and weekends in the customer’s time zone (the time zone of the region where their SPO tenant is setup) are off-peak.  Customers should be encouraged to move migration to off-peak hours if possible. 

    - If throughput during peak hours is an order of magnitude worse than off-peak hours, that should be escalated 

