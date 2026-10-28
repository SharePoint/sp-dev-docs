---
title: Support and feedback for SharePoint development
description: Find the right channel for SharePoint Framework product bugs, documentation feedback, programming questions, community library defects, and feature requests.
author: andrewconnell
ms.author: v-johnco
ms.date: 10/25/2026
ms.audience: Developer
ms.localizationpriority: high
ms.service: sharepoint
---

# Support and feedback

Choose a channel based on the kind of help you need. GitHub issue trackers, community forums, and Microsoft product support serve different purposes.

| What you need | Where to go |
| --- | --- |
| Report a reproducible SPFx product bug | [SharePoint/sp-dev-docs issues](https://github.com/SharePoint/sp-dev-docs/issues). For the separate open-source SPFx CLI or its templates, use [SharePoint/spfx issues](https://github.com/SharePoint/spfx/issues). |
| Report incorrect or missing SharePoint developer documentation | [SharePoint/sp-dev-docs issues](https://github.com/SharePoint/sp-dev-docs/issues), or submit a documentation pull request. |
| Ask a programming or how-to question | [Stack Overflow questions tagged `spfx`](https://stackoverflow.com/questions/tagged/spfx) or [SharePoint Developer discussions on Microsoft Tech Community](https://techcommunity.microsoft.com/category/content_management/discussions/sharepointdev). |
| Report a sample, PnP library, or community tool defect | The owning project's issue tracker. Find the repository in the [community catalog](community/repositories.md). |
| Request Microsoft 365 product or service support | Follow [Get support for Microsoft 365](/microsoft-365/admin/get-help-support), including its admin and subscription requirements. |
| Suggest a SharePoint developer platform feature | The [SharePoint developer platform feedback portal](https://feedbackportal.microsoft.com/feedback/forum/06735c62-321c-ec11-b6e7-0022481f8472). |

## Product bugs and service support

Before opening an SPFx issue, search the [existing issues](https://github.com/SharePoint/sp-dev-docs/issues) and follow the repository's issue template and [issue guidance](https://github.com/SharePoint/sp-dev-docs/wiki/How-to-Create-Good-Issues).

Include the SPFx version, Node.js version, package versions, host environment, expected and actual behavior, and minimal reproduction steps. If possible, reproduce the problem without unrelated libraries or customizations to help distinguish a framework defect from a solution-specific issue.

A public issue report isn't a Microsoft support case. For a supported SharePoint or Microsoft 365 service issue requiring product support, use your organization's applicable support route. Microsoft 365 administrators can follow [Get support for Microsoft 365](/microsoft-365/admin/get-help-support); follow that guidance for subscriptions purchased through a partner.

Don't post credentials, access tokens, personal data, or confidential tenant information in public issues or forums.

## Programming questions

Ask focused programming questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/spfx). Use tags such as `spfx` and `sharepoint` that match the question, and follow the [guidance on asking a good question](https://stackoverflow.com/help/how-to-ask).

For broader development discussions, use the [SharePoint Developer community on Microsoft Tech Community](https://techcommunity.microsoft.com/category/content_management/discussions/sharepointdev). For questions about a particular library or tool, follow that project's support guidance and use its discussion forum when available.

Community participation doesn't guarantee a response or resolution time.

## Documentation bugs

Open an [issue](https://github.com/SharePoint/sp-dev-docs/issues) with the article URL, the incorrect or unclear text, and the suggested correction or missing information. For problems with a code example, include the versions and reproduction steps.

You can also submit a pull request. See the [documentation contribution guide](https://github.com/SharePoint/sp-dev-docs/blob/main/.github/CONTRIBUTING.md).

## Sample application bugs

Report a defect in a sample to the repository that owns it. Include the sample name or path, its version or commit, setup details, and steps to reproduce the problem. For an example embedded in a documentation article, use the documentation issue route above.

Use the [repository catalog](community/repositories.md) or the sample gallery's source link to find the owner. Samples can target different SPFx versions; check their prerequisites before treating a compatibility problem as a product defect.

## Community library and tool defects

Report PnP library, control, or tool defects to the relevant project rather than the SPFx product issue tracker. Examples include [PnPjs](https://github.com/pnp/pnpjs/issues), [PnP PowerShell](https://github.com/pnp/powershell/issues), [PnP Core SDK](https://github.com/pnp/pnpcore/issues), [PnP Framework](https://github.com/pnp/pnpframework/issues), and the [SPFx React controls](https://github.com/pnp/sp-dev-fx-controls-react/issues).

Follow the project's support instructions and check whether you're using a current package rather than an archived predecessor. PnP projects provide community support; they aren't Microsoft product offerings. If investigation identifies a defect in an underlying supported Microsoft API or service, use the applicable product support route described above.

## Feature requests

Submit SharePoint developer platform ideas to the [feedback portal](https://feedbackportal.microsoft.com/feedback/forum/06735c62-321c-ec11-b6e7-0022481f8472). Describe the scenario, the limitation, and the outcome you need. For a feature in a community library or tool, follow that project's contribution guidance instead.
