---
title: Modernization Partner Guidance - Assesment
description: Modernization offerings that partners can use with their customers - assessment step
ms.date: 12/06/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Assessment

Understanding which sites are candidates to be modernized is essential to understand the scope of the work. You can either follow the steps described in the [delivery guide](https://github.com/SharePoint/sp-dev-modernization/blob/dev/Modernization%20partner%20guidance/Microsoft%20Teamwork%20Transformation%20Delivery%20Guide.pptx?raw=true) or follow below steps.

## 1. Download the scanner

The scanner is an executable file which you can download from https://aka.ms/sppnp-modernizationscanner.

## 2. Preparing for scanning

### Ensuring scanner access

The scanner will read every site collection and as such needs to have read permissions to each site collection that needs to be scanned. **Important:** the scanner can also show if a site has a Teams team, this however only works using version 2.7+ and does require the Groups.Read.All application permission to be granted to the Azure AD app used for scanning.

**Task:** Configure Azure AD App-Only access as outlined in https://aka.ms/sppnp-modernizationscanner-azureadsetup. You’ll end with an Application ID, a certificate as PFX file and the password for that PFX file.
**Task:** Validate obtained Azure AD App-Only access by running a scan for a single site collection (see next slides)

### Frequently Asked Questions

#### I already have Azure AD App-Only setup, can I reuse that application and its certificate?

If the Azure AD application was granted the SharePoint.Read.All application permission, then it can be re-used. Ideally it also has the Groups.Read.All application permission.

#### Where do I execute the scan?

A scan can take a long time to run (up to days), so ideally, it’s ran from a machine that can stay up and that’s in the same region as the SharePoint tenant. An Azure VM might be good candidate for this.

## 3. Run a scan

### Launch the scanner

**Task:** Start a scan by launching the SharePoint.Modernization.Scanner.exe

### Configure Authentication

**Task:** Choose the Azure AD App Only authentication option
**Task:** Fill-in the Application ID, domain name, path to the PFX file and PFX file password and press Next

### Configure the sites to scan

**Task:** When validating the scanner use Selected site collections and then enter the url of one or more site collections to scan and press Next
**Task:** For the final run use Complete tenant, enter the tenant name and press Next

### Configure the scan mode

**Task:** Select the Office 365 Group connection readiness mode and press Next

### Configure the scanner options

**Task:** Increase the Number of parallel threads to 20 and press Start scan. The scan now starts to run

### Frequently Asked Questions

#### I want to use credentials, can I?

Yes, assuming that the provided credentials have read access to the site collections that need to be scanned. Detecting of Teams teams will not work with credentials.

#### Can I used the scanned via command-line?

Yes that’s possible. Check the scanner documentation at https://aka.ms/sppnp-modernizationscanner 

#### Can I scan a specific set of site collections?

Yes, in the Selected site collections option you can use wildcards to scope the sites. Alternatively you can use the CSV file listing sites to scan option and provide a CSV file with the needed site collections. Check the scanner documentation at https://aka.ms/sppnp-modernizationscanner 

#### Can I run a scan for everything?

Yes, you can via selecting the All of the above (full scan) option. However, be aware that the scan run time will be substantially longer. It’s recommended to first run the scanner with the requested Office 365 Group connection readiness option and then run a second full scan

#### I’m in Europe, can I format my data accordingly?

Yes, you can opt to use semi-colon as separator for the generated CSV files + you opt to change the way how date values are written in the generated CSV files

## 4. Validate the scan run and collect the scan results

### Yeah, the scan ended…but was it a good one?

**Task:** Validate scanner output via:

- Check in the scannersummary.csv file if the amount of scanned site collections is inline with your expectations
- Check if the created CSV files contain relevant data
- Check the created error.csv and review the errors

### The scan results need to be analyzed. If needed copy them to the computer used for analysis work 

**Task:** Navigate to the folder holding the scanner executable. Each scan run creates a folder (=timestamp). Locate the folder from the scanner run you need, zip the complete folder and copy

### Frequently Asked Questions

#### I see entries in error.csv…is this bad?

It depends, large scans will always have some errors. If you see large quantities of errors than something is wrong, typically these are access denied errors because the used credentials/app-only principal are not having the required permissions
