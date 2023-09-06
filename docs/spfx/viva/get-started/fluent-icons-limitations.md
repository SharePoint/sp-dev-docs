---
title: Adaptive Card Extesions Iconography Limitations
description: The article describes existing limitations for using Fluent Icons in Adaptive Card Extensions.
ms.date: 09/06/2023
ms.localizationpriority: high
---

# Adaptive Card Extesions Iconography Limitations
Some existing limitations exist for using Fluent UI Iconography in Adaptive Card Extensions. 
Currently, ACEs support the "Card Designer" set of icons listed below. This set of icons is a subset of [Fluent 2 (Fluent UI v9) iconography](https://github.com/microsoft/fluentui-system-icons/blobl/main/icons_filled.md). It means using []"Fluent 1" (Fluent UI v8 and below) icons](https://developer.microsoft.com/en-us/fluentui#/styles/web/icons) is limited.

## Manifests value officeFabricIconFontName is partially supported.
`officeFabricIconFontName` manifest's property allows developers to use the Fluent icon displayed for the ACE in the Toolbox during an operator's editing session. By default (if not overridden in the code), the same icon will be used in the card bar:

![Card bar](../../../../docs/images/viva-extensibility/icons-limitations-card-bar.png)

There are two limitations for this property:
1. Viva Connections for Mobile does not support arbitrary Fluent UI icons. Therefore, the icon could be missing in the card bar on mobile.
![Card bar on mobile](../../../../docs/images/viva-extensibility/icons-limitations-card-bar-mobile.png)

2. The toolbox doesn't support the "Card Designer" icons. Therefore, the icon could be missing in the toolbox.
![Missing icon in the Toolbox](../../../../docs/images/viva-extensibility/icons-limitations-toolbox.png)

The workaround is to override the [card bar's icon](https://learn.microsoft.com/en-us/javascript/api/sp-adaptive-card-extension-base/icardbarparameters?view=sp-typescript-latest#@microsoft-sp-adaptive-card-extension-base-icardbarparameters-icon-member) property in the code.


## "Fluent 1" icons are not supported for Text Input
In SPFx 1.18, we introduced the ability to add a "text input" component to the card view. This component allows developers to specify iconBefore, iconAfter, and button icon.
All these icons (names) should be either from the "Card Designer" set or a URL to a custom image (preferably - svg).

## "Card Designer" Icons' Set
Below is a set of icons that ACEs fully support. As mentioned, it is a subset of [Fluent 2 iconography](https://github.com/microsoft/fluentui-system-icons/blob/main/icons_filled.md).

| Icon Name | Icon |
| --- | --- |
| airplane_take_off | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Airplane%20Take%20Off/SVG/ic_fluent_airplane_take_off_24_filled.svg?raw=true" width="24" height="24"> |
| alert | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Airplane%20Take%20Off/SVG/ic_fluent_alert_48_filled.svg?raw=true" width="24" height="24"> |
| alert_urgent | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Airplane%20Take%20Off/SVG/ic_fluent_alert_urgent_24_filled.svg?raw=true" width="24" height="24"> |
| approvals_app | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Approvals%20App/SVG/ic_fluent_approvals_app_32_filled.svg?raw=true" width="24" height="24"> |
| apps | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Apps/SVG/ic_fluent_apps_48_filled.svg?raw=true" width="24" height="24"> |
| apps_add_in | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Apps%20Add%20In/SVG/ic_fluent_apps_add_in_28_filled.svg?raw=true" width="24" height="24"> |
| archive | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Archive/SVG/ic_fluent_archive_48_filled.svg?raw=true" width="24" height="24"> |
| attach | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Attach/SVG/ic_fluent_attach_24_filled.svg?raw=true" width="24" height="24"> |
| backpack | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Backpack/SVG/ic_fluent_backpack_48_filled.svg?raw=true" width="24" height="24"> |
| balloon | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Balloon/SVG/ic_fluent_balloon_24_filled.svg?raw=true" width="24" height="24"> |
| beach | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Beach/SVG/ic_fluent_beach_48_filled.svg?raw=true" width="24" height="24"> |
| bed | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Bed/SVG/ic_fluent_bed_24_filled.svg?raw=true" width="24" height="24"> |
| block | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Subtract%20Circle/SVG/ic_fluent_subtract_circle_32_filled.svg?raw=true" width="24" height="24"> |
| board | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Board/SVG/ic_fluent_board_28_filled.svg?raw=true" width="24" height="24"> |
| bookmark | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Bookmark/SVG/ic_fluent_bookmark_32_filled.svg?raw=true" width="24" height="24"> |
| bug | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Bug/SVG/ic_fluent_bug_24_filled.svg?raw=true" width="24" height="24"> |
| building | <img src="hhttps://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building/SVG/ic_fluent_building_48_filled.svg?raw=true" width="24" height="24"> |
| building_bank | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building%20Bank/SVG/ic_fluent_building_bank_48_filled.svg?raw=true" width="24" height="24"> |
| building_shop | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building%20Shop/SVG/ic_fluent_building_shop_24_filled.svg?raw=true" width="24" height="24"> |
| building_skyscraper | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building%20Skyscraper/SVG/ic_fluent_building_skyscraper_24_filled.svg?raw=true" width="24" height="24"> |
| calendar_checkmark | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Checkmark/SVG/ic_fluent_calendar_checkmark_28_filled.svg?raw=true" width="24" height="24"> |
| calendar_clock | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Clock/SVG/ic_fluent_calendar_clock_24_filled.svg?raw=true" width="24" height="24"> |
| calendar_edit | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Edit/SVG/ic_fluent_calendar_edit_24_filled.svg?raw=true" width="24" height="24"> |
| calendar_question_mark | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Question%20Mark/SVG/ic_fluent_calendar_question_mark_24_filled.svg?raw=true" width="24" height="24"> |
| calendar_reply | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Reply/SVG/ic_fluent_calendar_reply_28_filled.svg?raw=true" width="24" height="24"> |
| calendar_sync | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Sync/SVG/ic_fluent_calendar_sync_24_filled.svg?raw=true" width="24" height="24"> |
| calendar_work_week | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Work%20Week/SVG/ic_fluent_calendar_work_week_28_filled.svg?raw=true" width="24" height="24"> |
| call | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Call/SVG/ic_fluent_call_48_filled.svg?raw=true" width="24" height="24"> |
| camera | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Camera/SVG/ic_fluent_camera_28_filled.svg?raw=true" width="24" height="24"> |
| cart | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Cart/SVG/ic_fluent_cart_24_filled.svg?raw=true" width="24" height="24"> |
| channel | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel/SVG/ic_fluent_channel_48_filled.svg?raw=true" width="24" height="24"> |
| channel_add | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel%20Add/SVG/ic_fluent_channel_add_48_filled.svg?raw=true" width="24" height="24"> |
| channel_alert | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel%20Alert/SVG/ic_fluent_channel_alert_48_filled.svg?raw=true" width="24" height="24"> |
| channel_share | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel%20Share/SVG/ic_fluent_channel_share_48_filled.svg?raw=true" width="24" height="24"> |
| chat | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Chat/SVG/ic_fluent_chat_48_filled.svg?raw=true" width="24" height="24"> |
| city | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/City/SVG/ic_fluent_city_24_filled.svg?raw=true" width="24" height="24"> |
| clipboard | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Clipboard/SVG/ic_fluent_clipboard_32_filled.svg?raw=true" width="24" height="24"> |
| clipboard_paste | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Clipboard%20Paste/SVG/ic_fluent_clipboard_paste_32_filled.svg?raw=true" width="24" height="24"> |
| clock | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Clock/SVG/ic_fluent_clock_48_filled.svg?raw=true" width="24" height="24"> |
| cloud_download | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Cloud%20Arrow%20Down/SVG/ic_fluent_cloud_arrow_down_48_filled.svg?raw=true" width="24" height="24"> |
| comment_mention | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Comment%20Mention/SVG/ic_fluent_comment_mention_24_filled.svg?raw=true" width="24" height="24"> |
| comment_multiple | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Comment%20Multiple/SVG/ic_fluent_comment_multiple_32_filled.svg?raw=true" width="24" height="24"> |
| communication | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Communication/SVG/ic_fluent_communication_24_filled.svg?raw=true" width="24" height="24"> |
| compass_northwest | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Compass%20Northwest/SVG/ic_fluent_compass_northwest_28_filled.svg?raw=true" width="24" height="24"> |
| compose | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Compose/SVG/ic_fluent_compose_28_filled.svg?raw=true" width="24" height="24"> |
| conference_room | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Conference%20Room/SVG/ic_fluent_conference_room_48_filled.svg?raw=true" width="24" height="24"> |
| contact_card_group | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Contact%20Card%20Group/SVG/ic_fluent_contact_card_group_48_filled.svg?raw=true" width="24" height="24"> |
| copy | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Copy/SVG/ic_fluent_copy_32_filled.svg?raw=true" width="24" height="24"> |
| cube | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Cube/SVG/ic_fluent_cube_48_filled.svg?raw=true" width="24" height="24"> |
| currency_dollar_euro | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Currency%20Dollar%20Euro/SVG/ic_fluent_currency_dollar_euro_24_filled.svg?raw=true" width="24" height="24"> |
| dentist | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Dentist/SVG/ic_fluent_dentist_48_filled.svg?raw=true" width="24" height="24"> |
| desktop | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Desktop/SVG/ic_fluent_desktop_32_filled.svg?raw=true" width="24" height="24"> |
| desktop_mac | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Desktop%20Mac/SVG/ic_fluent_desktop_mac_32_filled.svg?raw=true" width="24" height="24"> |
| doctor | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Doctor/SVG/ic_fluent_doctor_48_filled.svg?raw=true" width="24" height="24"> |
| document | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document/SVG/ic_fluent_document_48_filled.svg?raw=true" width="24" height="24"> |
| document_add | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document%20Add/SVG/ic_fluent_document_add_48_filled.svg?raw=true" width="24" height="24"> |
| document_catch_up | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document%20Catch%20Up/SVG/ic_fluent_document_catch_up_24_filled.svg?raw=true" width="24" height="24"> |
| document_question_mark | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document%20Question%20Mark/SVG/ic_fluent_document_question_mark_24_filled.svg?raw=true" width="24" height="24"> |
| drafts | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Drafts/SVG/ic_fluent_drafts_24_filled.svg?raw=true" width="24" height="24"> |
| drink_beer | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Drink%20Beer/SVG/ic_fluent_drink_beer_24_filled.svg?raw=true" width="24" height="24"> |
| drink_coffee | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Drink%20Coffee/SVG/ic_fluent_drink_coffee_24_filled.svg?raw=true" width="24" height="24"> |
| dumbbell | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Dumbbell/SVG/ic_fluent_dumbbell_28_filled.svg?raw=true" width="24" height="24"> |
| emoji | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Emoji/SVG/ic_fluent_emoji_48_filled.svg?raw=true" width="24" height="24"> |
| emoji_add | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Emoji%20Add/SVG/ic_fluent_emoji_add_24_filled.svg?raw=true" width="24" height="24"> |
| error_circle | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Error%20Circle/SVG/ic_fluent_error_circle_24_filled.svg?raw=true" width="24" height="24"> |
| filter | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Filter/SVG/ic_fluent_filter_28_filled.svg?raw=true" width="24" height="24"> |
| flag | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flag/SVG/ic_fluent_flag_48_filled.svg?raw=true" width="24" height="24"> |
| flag_off | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flag%20Off/SVG/ic_fluent_flag_off_48_filled.svg?raw=true" width="24" height="24"> |
| flash | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flash/SVG/ic_fluent_flash_32_filled.svg?raw=true" width="24" height="24"> |
| flash_checkmark | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flash%20Checkmark/SVG/ic_fluent_flash_checkmark_28_filled.svg?raw=true" width="24" height="24"> |
| glasses | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Glasses/SVG/ic_fluent_glasses_48_filled.svg?raw=true" width="24" height="24"> |
| globe | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Globe/SVG/ic_fluent_globe_48_filled.svg?raw=true" width="24" height="24"> |
| grid | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Grid/SVG/ic_fluent_grid_28_filled.svg?raw=true" width="24" height="24"> |
| guest | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Guest/SVG/ic_fluent_guest_28_filled.svg?raw=true" width="24" height="24"> |
| hat_graduation | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Hat%20Graduation/SVG/ic_fluent_hat_graduation_28_filled.svg?raw=true" width="24" height="24"> |
| headset | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Headset/SVG/ic_fluent_headset_48_filled.svg?raw=true" width="24" height="24"> |
| heart | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Heart/SVG/ic_fluent_heart_48_filled.svg?raw=true" width="24" height="24"> |
| highlight | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Highlight/SVG/ic_fluent_highlight_24_filled.svg?raw=true" width="24" height="24"> |
| home | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Home/SVG/ic_fluent_home_48_filled.svg?raw=true" width="24" height="24"> |
| home_checkmark | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Home%20Checkmark/SVG/ic_fluent_home_checkmark_24_filled.svg?raw=true" width="24" height="24"> |
| image | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Image/SVG/ic_fluent_image_48_filled.svg?raw=true" width="24" height="24"> |
| image_edit | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Image%20Edit/SVG/ic_fluent_image_edit_24_filled.svg?raw=true" width="24" height="24"> |
| important | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Important/SVG/ic_fluent_important_24_filled.svg?raw=true" width="24" height="24"> |
| info | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Info/SVG/ic_fluent_info_48_filled.svg?raw=true" width="24" height="24"> |
| inking_tool | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Inking%20Tool/SVG/ic_fluent_inking_tool_32_filled.svg?raw=true" width="24" height="24"> |
| inprivate_account | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/InPrivate%20Account/SVG/ic_fluent_inprivate_account_28_filled.svg?raw=true" width="24" height="24"> |
| key | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Key/SVG/ic_fluent_key_32_filled.svg?raw=true" width="24" height="24"> |
| laptop | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Laptop/SVG/ic_fluent_laptop_28_filled.svg?raw=true" width="24" height="24"> |
| leaf_two | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Leaf%20Two/SVG/ic_fluent_leaf_two_48_filled.svg?raw=true" width="24" height="24"> |
| library | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Library/SVG/ic_fluent_library_28_filled.svg?raw=true" width="24" height="24"> |
| lightbulb | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Lightbulb/SVG/ic_fluent_lightbulb_48_filled.svg?raw=true" width="24" height="24"> |
| link | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Link/SVG/ic_fluent_link_48_filled.svg?raw=true" width="24" height="24"> |
| location | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Location/SVG/ic_fluent_location_48_filled.svg?raw=true" width="24" height="24"> |
| location_off | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Location%20Off/SVG/ic_fluent_location_off_48_filled.svg?raw=true" width="24" height="24"> |
| lock_closed | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Lock%20Closed/SVG/ic_fluent_lock_closed_48_filled.svg?raw=true" width="24" height="24"> |
| mail | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mail/SVG/ic_fluent_mail_48_filled.svg?raw=true" width="24" height="24"> |
| mail_inbox | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mail%20Inbox/SVG/ic_fluent_mail_inbox_28_filled.svg?raw=true" width="24" height="24"> |
| map_drive | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Map%20Drive/SVG/ic_fluent_map_drive_24_filled.svg?raw=true" width="24" height="24"> |
| math_formula | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Math%20Formula/SVG/ic_fluent_math_formula_32_filled.svg?raw=true" width="24" height="24"> |
| meet_now | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Meet%20Now/SVG/ic_fluent_meet_now_48_filled.svg?raw=true" width="24" height="24"> |
| megaphone | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Megaphone/SVG/ic_fluent_megaphone_28_filled.svg?raw=true" width="24" height="24"> |
| mic_off | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mic%20Off/SVG/ic_fluent_mic_off_48_filled.svg?raw=true" width="24" height="24"> |
| mic_on | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mic/SVG/ic_fluent_mic_48_filled.svg?raw=true" width="24" height="24"> |
| mic_prohibited | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mic%20Prohibited/SVG/ic_fluent_mic_prohibited_48_filled.svg?raw=true" width="24" height="24"> |
| money | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Money/SVG/ic_fluent_money_24_filled.svg?raw=true" width="24" height="24"> |
| movies_and_tv | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Movies%20and%20TV/SVG/ic_fluent_movies_and_tv_24_filled.svg?raw=true" width="24" height="24"> |
| music_note_2 | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Music%20Note%202/SVG/ic_fluent_music_note_2_24_filled.svg?raw=true" width="24" height="24"> |
| my_location | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/My%20Location/SVG/ic_fluent_my_location_24_filled.svg?raw=true" width="24" height="24"> |
| options | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Options/SVG/ic_fluent_options_48_filled.svg?raw=true" width="24" height="24"> |
| page_fit | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Page%20Fit/SVG/ic_fluent_page_fit_24_filled.svg?raw=true" width="24" height="24"> |
| paint_brush | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Paint%20Brush/SVG/ic_fluent_paint_brush_32_filled.svg?raw=true" width="24" height="24"> |
| paint_bucket | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Paint%20Bucket/SVG/ic_fluent_paint_bucket_24_filled.svg?raw=true" width="24" height="24"> |
| payment | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Payment/SVG/ic_fluent_payment_48_filled.svg?raw=true" width="24" height="24"> |
| people | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People/SVG/ic_fluent_people_48_filled.svg?raw=true" width="24" height="24"> |
| people_add | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Add/SVG/ic_fluent_people_add_28_filled.svg?raw=true" width="24" height="24"> |
| people_call | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Call/SVG/ic_fluent_people_call_24_filled.svg?raw=true" width="24" height="24"> |
| people_community | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Community/SVG/ic_fluent_people_community_48_filled.svg?raw=true" width="24" height="24"> |
| people_team | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Team/SVG/ic_fluent_people_team_48_filled.svg?raw=true" width="24" height="24"> |
| person | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person/SVG/ic_fluent_person_48_filled.svg?raw=true" width="24" height="24"> |
| person_add | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Add/SVG/ic_fluent_person_add_28_filled.svg?raw=true" width="24" height="24"> |
| person_available | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Available/SVG/ic_fluent_person_available_24_filled.svg?raw=true" width="24" height="24"> |
| person_call | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Call/SVG/ic_fluent_person_call_24_filled.svg?raw=true" width="24" height="24"> |
| person_clock | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Clock/SVG/ic_fluent_person_clock_24_filled.svg?raw=true" width="24" height="24"> |
| person_mail | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Mail/SVG/ic_fluent_person_mail_48_filled.svg?raw=true" width="24" height="24"> |
| person_prohibited | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Prohibited/SVG/ic_fluent_person_prohibited_28_filled.svg?raw=true" width="24" height="24"> |
| person_question_mark | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Question%20Mark/SVG/ic_fluent_person_question_mark_24_filled.svg?raw=true" width="24" height="24"> |
| person_support | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Support/SVG/ic_fluent_person_support_24_filled.svg?raw=true" width="24" height="24"> |
| premium | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Premium/SVG/ic_fluent_premium_32_filled.svg?raw=true" width="24" height="24"> |
| reading_list | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Reading%20List/SVG/ic_fluent_reading_list_28_filled.svg?raw=true" width="24" height="24"> |
| record | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Record/SVG/ic_fluent_record_48_filled.svg?raw=true" width="24" height="24"> |
| remote | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Remote/SVG/ic_fluent_remote_20_filled.svg?raw=true" width="24" height="24"> |
| reward | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Reward/SVG/ic_fluent_reward_24_filled.svg?raw=true" width="24" height="24"> |
| ribbon | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Ribbon/SVG/ic_fluent_ribbon_32_filled.svg?raw=true" width="24" height="24"> |
| rocket | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Rocket/SVG/ic_fluent_rocket_24_filled.svg?raw=true" width="24" height="24"> |
| ruler | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Ruler/SVG/ic_fluent_ruler_48_filled.svg?raw=true" width="24" height="24"> |
| run | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Run/SVG/ic_fluent_run_24_filled.svg?raw=true" width="24" height="24"> |
| savings | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Savings/SVG/ic_fluent_savings_24_filled.svg?raw=true" width="24" height="24"> |
| search | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Search/SVG/ic_fluent_search_48_filled.svg?raw=true" width="24" height="24"> |
| send | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Send/SVG/ic_fluent_send_48_filled.svg?raw=true" width="24" height="24"> |
| settings | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Settings/SVG/ic_fluent_settings_48_filled.svg?raw=true" width="24" height="24"> |
| shield | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Shield/SVG/ic_fluent_shield_48_filled.svg?raw=true" width="24" height="24"> |
| shifts | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Shifts/SVG/ic_fluent_shifts_32_filled.svg?raw=true" width="24" height="24"> |
| slide_text | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Slide%20Text/SVG/ic_fluent_slide_text_48_filled.svg?raw=true" width="24" height="24"> |
| snooze | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Snooze/SVG/ic_fluent_snooze_24_filled.svg?raw=true" width="24" height="24"> |
| speaker_0 | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Speaker%200/SVG/ic_fluent_speaker_0_48_filled.svg?raw=true" width="24" height="24"> |
| speaker_1 | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Speaker%201/SVG/ic_fluent_speaker_1_48_filled.svg?raw=true" width="24" height="24"> |
| sport | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Sport/SVG/ic_fluent_sport_24_filled.svg?raw=true" width="24" height="24"> |
| star | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Star/SVG/ic_fluent_star_48_filled.svg?raw=true" width="24" height="24"> |
| stop | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Stop/SVG/ic_fluent_stop_24_filled.svg?raw=true" width="24" height="24"> |
| store_microsoft | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Store%20Microsoft/SVG/ic_fluent_store_microsoft_24_filled.svg?raw=true" width="24" height="24"> |
| sync_off | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Sync%20Off/SVG/ic_fluent_sync_off_20_filled.svg?raw=true" width="24" height="24"> |
| tab | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tab/SVG/ic_fluent_tab_28_filled.svg?raw=true" width="24" height="24"> |
| table | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Table/SVG/ic_fluent_table_48_filled.svg?raw=true" width="24" height="24"> |
| table_simple | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Table%20Simple/SVG/ic_fluent_table_simple_48_filled.svg?raw=true" width="24" height="24"> |
| tag | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tag/SVG/ic_fluent_tag_32_filled.svg?raw=true" width="24" height="24"> |
| target | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Target/SVG/ic_fluent_target_32_filled.svg?raw=true" width="24" height="24"> |
| tasks | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tasks%20App/SVG/ic_fluent_tasks_app_28_filled.svg?raw=true" width="24" height="24"> |
| tent | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tent/SVG/ic_fluent_tent_48_filled.svg?raw=true" width="24" height="24"> |
| tetris_app | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tetris%20App/SVG/ic_fluent_tetris_app_48_filled.svg?raw=true" width="24" height="24"> |
| thumb_like | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Thumb%20Like/SVG/ic_fluent_thumb_like_48_filled.svg?raw=true" width="24" height="24"> |
| timer | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Timer/SVG/ic_fluent_timer_48_filled.svg?raw=true" width="24" height="24"> |
| trophy | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Trophy/SVG/ic_fluent_trophy_48_filled.svg?raw=true" width="24" height="24"> |
| tv | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/TV/SVG/ic_fluent_tv_48_filled.svg?raw=true" width="24" height="24"> |
| vault | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vault/SVG/ic_fluent_vault_24_filled.svg?raw=true" width="24" height="24"> |
| vehicle_bicycle | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Bicycle/SVG/ic_fluent_vehicle_bicycle_24_filled.svg?raw=true" width="24" height="24"> |
| vehicle_bus | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Bus/SVG/ic_fluent_vehicle_bus_24_filled.svg?raw=true" width="24" height="24"> |
| vehicle_cab | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Cab/SVG/ic_fluent_vehicle_cab_28_filled.svg?raw=true" width="24" height="24"> |
| vehicle_car | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Car/SVG/ic_fluent_vehicle_car_48_filled.svg?raw=true" width="24" height="24"> |
| vehicle_subway | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Subway/SVG/ic_fluent_vehicle_subway_24_filled.svg?raw=true" width="24" height="24"> |
| video | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Video/SVG/ic_fluent_video_48_filled.svg?raw=true" width="24" height="24"> |
| video_person | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Video%20Person/SVG/ic_fluent_video_person_48_filled.svg?raw=true" width="24" height="24"> |
| voicemail | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Voicemail/SVG/ic_fluent_voicemail_48_filled.svg?raw=true" width="24" height="24"> |
| warning | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Warning/SVG/ic_fluent_warning_32_filled.svg?raw=true" width="24" height="24"> |
| weather_moon | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Weather%20Moon/SVG/ic_fluent_weather_moon_48_filled.svg?raw=true" width="24" height="24"> |
| weather_moon_off | <img src="https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Weather%20Moon%20Off/SVG/ic_fluent_weather_moon_off_48_filled.svg?raw=true" width="24" height="24"> |
