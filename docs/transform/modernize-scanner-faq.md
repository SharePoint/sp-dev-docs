---
title: The SharePoint modernization scanner FAQ
description: he SharePoint modernization scanner FAQ
ms.date: 10/23/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Frequently Asked Questions

## What's the impact of running a scan and how do I get the best performance

The scanner is only doing read operations and will not cause a big impact on your tenant. The scanner is also "throttling-aware" and will back off when a tenant responds with a throttle response. 

If you do have a large tenant than a scan can take a long time. Some tips to speed up the scan are:

- Only scan for what you need. Doing a **full** scan is easy but will also take the most time
- Partition your scans:
  - Do a run per scan output you need
  - Scan for a subset of your site collections
- Run the scan from a machine that's relatively seen close to the region where your SharePoint tenant is hosted. E.g. running the scan from an Azure VM in the same region will typically give you the best results.

## I only want to scan a few sites, can I do that?

Using the urls command line switch you can control which sites are scanned. You can specify one or more url's which can have a wild card. Samples of valid url's are:

 - https://contoso.sharepoint.com/sites/portals*
 - https://contoso.sharepoint.com/sites/hrportal
 - https://contoso-my.sharepoint.com/personal/*

To specify the url's you can use the -r parameter as shown below:

```console
SharePoint.Modernization.Scanner -r https://contoso.sharepoint.com/sites/portals*,https://contoso.sharepoint.com/sites/hrportal,https://contoso-my.sharepoint.com/personal/*
                                 -i 7a5c1615-997a-4059-a784-db2245ec7cc1
                                 -s eOb6h+s805O/V3DOpd0dalec33Q6ShrHlSKkSra1FFw=
```

An alternative model is specifying the url's inside a CSV file and then using the -f parameter as shown below:

```console
SharePoint.Modernization.Scanner -v "c:\temp\files.csv"
                                 -i 7a5c1615-997a-4059-a784-db2245ec7cc1
                                 -s eOb6h+s805O/V3DOpd0dalec33Q6ShrHlSKkSra1FFw=
```

A sample file would look like this:

```console
https://contoso.sharepoint.com
https://contoso.sharepoint.com/sites/test1
https://contoso.sharepoint.com/sites/test2
```

## Can I generate the Excel reports for existing scan data?

You can do this by specifying the folder(s) with already existing scan data using the -g parameter. The scanner will concatenate the data from all passed folders and will generate the needed reports. Reports will only be generated if the relevant data is available.

```console
SharePoint.Modernization.Scanner -g <paths>

SharePoint.Modernization.Scanner -g "c:\temp\636529695601669598,c:\temp\636529695601698765"
```

## I'm running SharePoint with vanity URL's (SharePoint Online Dedicated), is this different?

In SharePoint Online Dedicated one can have vanity url's like teams.contoso.com which implies that the tool cannot automatically determine the used url's and tenant admin center url. Using below command line switches you can specify the site url's to scan and the tenant admin center url. Note that the urls need to be separated by a comma.

```console
SharePoint.Modernization.Scanner -a <tenantadminsite> -r <wildcard urls> -i <clientid> -s <clientsecret>
```

A real life sample:

```console
SharePoint.Modernization.Scanner -a https://contoso-admin.contoso.com
                                 -r "https://teams.contoso.com/sites/*,https://portal.contoso.com/*"
                                 -i 7a5c1615-997a-4059-a784-db2245ec7cc1 -s eOb6h+s805O/V3DOpd0dalec33Q6ShrHlSKkSra1FFw=
```

## I want to use an Azure AD app to authenticate, how do I that?

This scanner, like all scanners built using the SharePoint Scanner framework, do support Azure AD App-Only:

```console
SharePoint.Modernization.Scanner -t <tenant> -i <Azure App ID> -z <Azure AD Domain>
                                 -f "<Path to PFX file holding your certificate" -x <Password for the PFX file>
```

A real life sample:

```console
SharePoint.Modernization.Scanner -t contoso -i e4108e9b-9865-44a9-c6e1-9003db04a775 -z contoso.onmicrosoft.com  
                                 -f "C:\scanning\AzureADAppOnlyScanning.pfx" -x pwd
```

## I don't want to use app-only, can I use credentials?

The best option is to use app-only since that will ensure that the tool can read all site collections but you can also run the tool using credentials.

```console
SharePoint.Modernization.Scanner -m GroupifyOnly -t <tenant> -u <user> -p <password>

SharePoint.Modernization.Scanner -t <tenant> -u <user> -p <password>
```

A real life sample:

```console
SharePoint.Modernization.Scanner -m GroupifyOnly -t contoso -c admin@contoso.onmicrosoft.com -p mypassword

SharePoint.Modernization.Scanner -t contoso -c admin@contoso.onmicrosoft.com -p mypassword
```
