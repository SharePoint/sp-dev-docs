---
title: "Running Migrations into OneDrive and SharePoint Online: Handling Throttling "
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.date: 6/10/2018
ms.topic: article
description: "Migration is critical for SPO and is prioritized alongside service availability."
localization_priority: Normal
---

# Running Migrations into OneDrive and SharePoint Online: Throttling

This document is intended for ISVs migrating content into OneDrive and SharePoint only.

## Context and Expectations Setting

Migration is critical for SPO and is prioritized alongside service availability. When we detect that service availability may be threatened, 429 response codes are sent back to protect the experience of end users.  

429 is a normal part of any well-functioning cloud system; the expectation is that background tasks will get 429s and all background task callers (both ISVs and Microsoft apps) should ride through them without direct customer impact to their own end users.
 
The number of 429s sent back is a function of the current load on the farm, as well as other tenant/farm level variables. Therefore, it is important to focus on migration throughput rather than the number of 429s themselves.  

Set expectations with customers:

- Expect to create and manage migration efforts at any time
- Expect content migration throughput to be higher during off-peak times and lower during peak times.  

Overall throughput over the duration of a day still aligns with our public documentation here.

## Best Practices

Below are the key best practices we recommend migration vendors follow.  

**Interactive flag:**<br>Include an *interactive flag* in your user agent string for interactive calls such as user login, launch jobs, etc. For example:   `ISV|VendorName|AppName/Version|Interactive` <br>

We allow 300 calls every 5 minutes for handling small migrations and site management that customers expect to complete interactively.

> [!NOTE]
>  Once you have implemented Interactive flag for the system to pick that cue, it may not be instantaneous; allow a few days for it to take effect. 
 
**Retry value**:<br>Use the retry value in the http header of the 429 message and do not exponential back-off. 
 
**429:**<br>Do not handle 429 as an error condition displayed to the user.  When 429 does occur, handle it as a background task retry and do not prompt users to contact support.

- If users cannot login or if jobs are not progressing, please escalate.
- If you are seeing over 30% of requests getting 429 over 30 minutes, please escalate.
 
**Throughput:**<br>Expect throughput to be lower during peak hours as opposed to off-peak hours. Generally, nights and weekends in the customer’s time zone (the time zone of the region where their SPO tenant is setup) are off-peak.  Customers should be encouraged to move migration to off-peak hours if possible.

-  If throughput during peak hours is an order of magnitude worse than off-peak hours, that should be escalated.

