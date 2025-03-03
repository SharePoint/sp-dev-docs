---
title: Common validation errors when publishing your SharePoint Framework application in the Marketplace
description: Common validation errors you can avoid when you want to get your SharePoint Framework application published in the Marketplace
ms.date: 03/03/2025
ms.localizationpriority: high
---

# Common validation errors to avoid when publishing your SharePoint Framework application in the Marketplace

## Inadequate Solution description

A great Solution description highlights your Solution's benefits and encourages customers to download it. The following list contains common mistakes in Solution descriptions that prevent Solutions from passing SharePoint Store submission process:

- Solution package (previously called manifest) and AppSource full description don't contain hyperlinks for call-to-action buttons, such as Sign Up, Get Started, Help, or Contact Us.
- Solution manifest and long description don't mention any limitations or dependencies on external accounts or services required to complete sign-in, sign-out, and sign-up experiences.
- Highlight of the Solution’s value proposition and key features in the short and full descriptions in Solution package is absent.
- Contains typographical errors, grammatical errors, unnecessary capitalization, code, or duplicate content.
- Reference to products that the Solution supports like web-part, full page, teams tab, personal tab, Adaptive card, etc is absent.
- Contains comparative marketing content or competing offers in the Solution description or other metadata.
- Contains exaggerated claims about the Solution such as #1, amazing, or the best.

For more information, see [Prepare your SharePoint Framework application for publishing to the Marketplace](./publish-to-marketplace-checklist#solutions-description-must-clearly-describe-the-different-components-included-in-the-package).

## Improper screenshots

Screenshots provide a visually engaging way to portray your Solution's purpose and capabilities to potential customers. The following list contains common mistakes in screenshots that prevent Solutions from passing SharePoint Store submission process:

- Contains fewer than three screenshots depicting the Solution's functionalities.
- Screenshots of the Solution's functionality in SharePoint web and teamstab web
- Captions to help users clearly understand the Solution's features are absent.

For more information, see [Teams Store validation guidelines for screenshots](https://learn.microsoft.com/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#screenshots).

## Mismatch between Partner Center and manifest package

If the following fields in the Partner Center and Solution manifest don't match, your Solution might not pass SharePoint Store submission:

- Solution description
- Developer name
- Terms of Use
- Privacy Policy URLs
- Solution name

For more information, see [Prepare your SharePoint Framework application for publishing to the Marketplace](./publish-to-marketplace-checklist#solution-package-must-contain-valid-developer-metadata).

## Missing or incomplete test instructions

Detailed test instructions and credentials help you with a successful review of your Solution. The following list contains common mistakes with test instructions and test accounts that prevent Solutions from passing SharePoint Store submission process:

- Description of the functionalities of the current version of the Solution and the necessary configuration steps for testers to follow and test the Solution is missing.
- Test accounts provided are inaccessible to testers. For example, test accounts that require multi-factor authentication to sign in.
- Test accounts provided don't support custom upload of .sppkg package.
- Multiple test accounts aren't included when the Solution supports collaborative functionality in web part, full page, Teams Tab, etc...

For more information, see [Publish SharePoint Framework applications to the marketplace](./publish-to-marketplace-overview).

## Broken solution functionality

Test your solution to verify its correctness, functionality, and usage. Ensure that you thoroughly test your solution and fix all the bugs. Check all the end-to-end workflows that your solution supports and test the solution compatibility on the operating systems and browsers as per the Commercial Marketplace Certification policies. The following table contains common mistakes with solution functionality that prevent solution from passing SharePoint Store submission process:

- Solution provides a broken experience to users in any of the workflows that it supports, such as broken links and solution crashes.
- Functional bugs that prevent further solution usage.
- Continuous loading of solution surfaces that prevent completion of stated workflows that the solution supports.
- Unexpected error messages during Solution usage where the solution feature doesn't work as expected.
- Have workflows where the user hits a dead end and can't navigate further in the solution.
- Solution redirects users away from SharePoint and doesn't provide necessary disclaimers about navigation outside solution through links and buttons.

For more information, see [Prepare your SharePoint Framework application for publishing to the Marketplace](./publish-to-marketplace-checklist).
