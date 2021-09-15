---
title: Understanding in-place page transformation versus cross-site page transformation
description: Explains the differences between in-place and cross-site page transformation and when to use which one
ms.date: 02/11/2021
ms.prod: sharepoint
ms.localizationpriority: high
---

# Understanding in-place page transformation versus cross-site page transformation

When you use page transformation then you can either do an in-place transformation or a cross-site page transformation. Depending on the type of page you're transforming the only option is cross-site page transformation, but there are situations where you choose.

## In-place transformation

During an in-place transformation the created modern pages live in the same site as the original classic page. A typical example of this would be the transformation of the wiki and web part pages in a team site: when you run page transformation you'll end up with new pages (e.g. Migrated_mypage.aspx) next to the classic page (e.g. mypage.aspx) that you migrated. Depending on how you've configured page transformation it might also be the case that the modern page takes the name of the classic page (e.g. mypage.aspx) and the classic page will be renamed (e.g. Previous_mypage.aspx).

Overall in-place transformation will give you the best results as there's no risk of broken dependencies (e.g. File viewer web part showing a file from the site's Documents library) and therefor it's the recommended model for the page types (wiki and web part pages) that can be transformed in-place.

## Cross-site transformation

Cross site page transformation will read the classic page (e.g. mypage.aspx) and will then create the modern page (e.g. mypage.aspx) in **another** site collection. Typical use case of cross-site transformation is for transforming page types which cannot be used together with modern pages in the same site: this applies to classic publishing pages and blog pages. Another important use case is when you transform on-premises pages: given page transformation only supports SharePoint Online as the target platform for modern pages, this means these transformations are cross-site page transformations.

## In-place transformation versus cross-site transformation

Below table provides an overview on whether you need to use in-place transformation, cross-site transformation or whether you can choose.

Source\Type       | Wiki page | Web part page | Publishing page | Blog page 
------------------|-----------|---------------|-----------------|-----------
SharePoint Online | In-place (preferred) or cross-site | In-place (preferred) or cross-site | Cross-site | Cross-site
SharePoint 2019 | Cross-site | Cross-site | Cross-site | Cross-site
SharePoint 2016 | Cross-site | Cross-site | Cross-site | Cross-site
SharePoint 2013 | Cross-site | Cross-site | Cross-site | Cross-site
SharePoint 2010 | Cross-site | Cross-site | Cross-site | Cross-site

## Limitations on allowed target sites during a cross-site transformation

When you perform a cross-site page transformation then be aware that not all sites can serve as a target to receive modern pages in a cross-site page transformation flow. Allowed site templates are the following:

- Communication site (SITEPAGEPUBLISHING#0)
- Team site (STS#0 and STS#3)
- Group connected team site (GROUP#0)
- Document center site (BDR#0)
- Development site (DEV#0)
