---
title: Term mapping during cross site page transformation
description: Explains how to the default term mapping works when transforming pages + also explains how to use a custom term mapping file
ms.date: 03/06/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Term mapping during page transformation

Term mapping is the mechanism that translates managed metadata terms in the source environment to an applicable term in the target environment. The cases in where term mapping applies are:

- You're transforming from on-premises SharePoint to SharePoint Online
- You're doing a cross site transformation (e.g. from classic publishing portal to a modern intranet) in SharePoint Online

Term mapping will not be used when:

- The source and target are pointing to the same termset id
- When you're doing an in-place transformation (source and target page live in the same site)

## How does term mapping work

Term mapping will automatically try to find the equivalent term in SharePoint Online for the term used in the source page and it can do this in two manners:

- Automatic mapping: term mapping will try to find an equivalent term by checking if the same term group, termset and term path can be found in the target term store
- Custom mapping based upon a file: using a mapping file you can specify a target term for a given source term

## Turning off the automatic mapping

If you don't want term mapping to happen you can disable it via the `-SkipTermStoreMapping` flag in PnP PowerShell or via the `SkipTermStoreMapping` attribute of the .Net page transformation configuration objects (`PageTransformationInformation` and `PublishingPageTransformationInformation`).

## Custom term mapping

If you don't like or cannot use the automatic term mapping then there's the option to specify a term mapping file. A term mapping file is a simple CSV file listing source term and target term as shown in below snippet

```Text
SourceTermGroup|SourceTermSet|SourceTerm,TargetTermGroup|TargetTermSet|TargetTerm
SourceTermGroup|SourceTermSet|SourceTerm|SourceChildTerm1|SourceChildTerm2,TargetTermGroup|TargetTermSet|TargetTerm|TargetChildTerm1|TargetChildTerm2
f0b1b6aa-b00b-4198-b8dd-ef4393e3ad05,fec05391-6a39-4ad5-a2a1-a01020d94efd
```

Some things to note:

- You can either choose a mapping based upon a path (a | delimited string of term labels) or choose to define the mapping based upon source and target term id's
- If you're transforming from SharePoint 2010 then you'll need to specify **DEFAULT** as source term group name

Creating the mapping file is the first step, to actually use it you need to specify the file via the `TermMappingFile` parameter to the `ConvertTo-PnPClientSidePage` cmdlet if you're using PnP PowerShell. If you're using .Net then you can specify the file via the  `TermMappingFile` attribute of the .Net page transformation configuration objects (`PageTransformationInformation` and `PublishingPageTransformationInformation`).