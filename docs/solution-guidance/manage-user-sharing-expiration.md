---
title: Manage per user expiration for existing users on a site
description: Explains how using client side object model to change a users expiration date for sharing links
ms.date: 05/15/2020
ms.prod: sharepoint
ms.localizationpriority: medium
---

# Manage per user expiration for existing users on a site

If you are a site administrator, you may need to [manage expiring access](https://support.office.com/article/manage-guest-expiration-for-a-site-25bee24f-42ad-4ee8-8402-4186eed74dea) for users that have access to content on your site. If your administrator has set an expiration time for access, each guest that you invite to the site or with whom you share individual files and folders will be given access for a certain number of days. If you want them to continue to have access, you must extend their access on a regular basis. There also may be times you want to change an exisiting users expiration time and that can be done via the below method.

## Change expiration time for existing user

You can change expiration time for existing user using client side object model:

```powershell
## DISCLAIMER:
## Copyright (c) Microsoft Corporation. All rights reserved. This
## script is made available to you without any express, implied or
## statutory warranty, not even the implied warranty of
## merchantability or fitness for a particular purpose, or the
## warranty of title or non-infringement. The entire risk of the
## use or the results from the use of this script remains with you.

param(
  [Parameter(Mandatory = $true)]
  [string] $SiteUrl,

  [Parameter(Mandatory = $true)]
  [string] $UserEmail,

  [Parameter(Mandatory = $true)]
  [int] $DaysToExpiration
)


#Connect to PNP
Connect-PnPOnline -Url $SiteUrl

#ctx to the site
$ctx = Get-PnPContext

#Get the User and check current expiration
$user = Get-PnPUser | ? Email -eq $UserEmail
$ctx.Load($user)
$ctx.ExecuteQuery()

Write-Host "Current Expiration: $($user.Expiration)"

 #Update Expiration for the user
$user.Expiration = [DateTime]::UtcNow.AddDays($DaysToExpiration).ToString("yyyy-MM-ddTHH:mm:ssZ")
$user.Update()
$ctx.ExecuteQuery()

#Check new user Expiration for the user
$ctx.Load($user)
$ctx.ExecuteQuery()

Write-Host "New Expiration: $($user.Expiration)"
```
