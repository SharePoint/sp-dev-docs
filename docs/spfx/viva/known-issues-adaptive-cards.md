---
title: Known issues for Adaptive Cards in Viva Connections Mobile
description: Known issues for Adaptive Cards in Viva Connections Mobile.
ms.date: 10/29/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# Known issues for Adaptive Cards in Viva Connections Mobile

There are some known issues around the Adaptive Cards rendering on the Viva Connections Mobile experiences. These known issues are being actively worked on.

1. When Image with Size value `small`, `medium` or `large` is used, it would render as square Image on mobile. A square image is recommended to be used so it maintains the aspect ratio on mobile, or other Size value “auto” might work.

1. When Image with Style value `person` is used, it's recommended that image is a square so it maintains the aspect ratio on mobile.
1. When `Input.ChoiceSet` is used, the first choice would appear to be selected on Mobile. It’s recommended to use a placeholder value as the first choice so that the user make right selection and do not end up submitting a blank value.
1. Format date-time functions, `formatDateTime`, `formatTicks`, `formatNumber` do not work on Android. The workaround is to use JavaScript methods in Adaptive Card itself or on server.
1. `RichTextBlock` is not yet supported.