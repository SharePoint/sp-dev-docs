---
title: Adaptive Card Extensions Iconography Limitations
description: The article describes existing limitations for using Fluent Icons in Adaptive Card Extensions.
ms.date: 09/06/2023
ms.localizationpriority: high
---

# Adaptive Card Extesions Iconography Limitations

Some existing limitations exist for using Fluent UI Iconography in Adaptive Card Extensions. 

Currently, ACEs support the "Card Designer" set of icons listed below. This set of icons is a subset of [Fluent 2 (Fluent UI v9) iconography](https://github.com/microsoft/fluentui-system-icons/blobl/main/icons_filled.md). It means using []"Fluent 1" (Fluent UI v8 and below) icons](https://developer.microsoft.com/fluentui#/styles/web/icons) is limited.

## Manifests value officeFabricIconFontName is partially supported

The `officeFabricIconFontName` manifest's property allows developers to use the Fluent icon displayed for the ACE in the Toolbox during an operator's editing session. By default (if not overridden in the code), the same icon will be used in the card bar:

![Card bar](../../../images/viva-extensibility/icons-limitations-card-bar.png)

There are two limitations to this property:

1. Viva Connections for Mobile does not support arbitrary Fluent UI icons. Therefore, the icon could be missing in the card bar on mobile.
![Card bar on mobile](../../../images/viva-extensibility/icons-limitations-card-bar-mobile.png)
1. The toolbox doesn't support the "Card Designer" icons. Therefore, the icon could be missing in the toolbox.
![Missing icon in the Toolbox](../../../images/viva-extensibility/icons-limitations-toolbox.png)

The workaround is to override the [card bar's icon](/javascript/api/sp-adaptive-card-extension-base/icardbarparameters#@microsoft-sp-adaptive-card-extension-base-icardbarparameters-icon-member) property in the code.

## "Fluent 1" icons are not supported for Text Input

In the SharePoint Framework (SPFx) v1.18, we introduced the ability to add a "text input" component to the card view. This component allows developers to specify iconBefore, iconAfter, and button icons.

All these icons (names) should be either from the "Card Designer" set or a URL to a custom image (preferably an \*.svg).

## "Card Designer" Icons' Set

Below is a set of icons that ACEs fully support. As mentioned, it is a subset of [Fluent 2 iconography](https://github.com/microsoft/fluentui-system-icons/blob/main/icons_filled.md).

| Icon Name | Icon |
| --- | --- |
| airplane_take_off | ![icon airplane_take_off](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Airplane%20Take%20Off/SVG/ic_fluent_airplane_take_off_24_filled.svg) |
| alert | ![icon alert](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Alert%20On/SVG/ic_fluent_alert_on_24_filled.svg) |
| alert_urgent | ![icon alert_urgent](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Alert%20Urgent/SVG/ic_fluent_alert_urgent_24_filled.svg) |
| approvals_app | ![icon approvals_app](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Approvals%20App/SVG/ic_fluent_approvals_app_24_filled.svg) |
| apps | ![icon apps](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Apps/SVG/ic_fluent_apps_24_filled.svg) |
| apps_add_in | ![icon apps_add_in](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Apps%20Add%20In/SVG/ic_fluent_apps_add_in_24_filled.svg) |
| archive | ![icon archive](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Archive/SVG/ic_fluent_archive_24_filled.svg) |
| attach | ![icon attach](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Attach/SVG/ic_fluent_attach_24_filled.svg) |
| backpack | ![icon backpack](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Backpack/SVG/ic_fluent_backpack_24_filled.svg) |
| balloon | ![icon balloon](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Balloon/SVG/ic_fluent_balloon_24_filled.svg) |
| beach | ![icon beach](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Beach/SVG/ic_fluent_beach_24_filled.svg) |
| bed | ![icon bed](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Bed/SVG/ic_fluent_bed_24_filled.svg) |
| block | ![icon block](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Subtract%20Circle/SVG/ic_fluent_subtract_circle_24_filled.svg) |
| board | ![icon board](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Board/SVG/ic_fluent_board_24_filled.svg) |
| bookmark | ![icon bookmark](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Bookmark/SVG/ic_fluent_bookmark_24_filled.svg) |
| bug | ![icon bug](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Bug/SVG/ic_fluent_bug_24_filled.svg) |
| building | ![icon building](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building/SVG/ic_fluent_building_24_filled.svg) |
| building_bank | ![icon building_bank](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building%20Bank/SVG/ic_fluent_building_bank_24_filled.svg) |
| building_shop | ![icon building_shop](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building%20Shop/SVG/ic_fluent_building_shop_24_filled.svg) |
| building_skyscraper | ![icon building_skyscraper](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Building%20Skyscraper/SVG/ic_fluent_building_skyscraper_24_filled.svg) |
| calendar_checkmark | ![icon calendar_checkmark](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Checkmark/SVG/ic_fluent_calendar_checkmark_24_filled.svg) |
| calendar_clock | ![icon calendar_clock](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Clock/SVG/ic_fluent_calendar_clock_24_filled.svg) |
| calendar_edit | ![icon calendar_edit](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Edit/SVG/ic_fluent_calendar_edit_24_filled.svg) |
| calendar_question_mark | ![icon calendar_question_mark](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Question%20Mark/SVG/ic_fluent_calendar_question_mark_24_filled.svg) |
| calendar_reply | ![icon calendar_reply](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Reply/SVG/ic_fluent_calendar_reply_24_filled.svg) |
| calendar_sync | ![icon calendar_sync](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Sync/SVG/ic_fluent_calendar_sync_24_filled.svg) |
| calendar_work_week | ![icon calendar_work_week](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Calendar%20Work%20Week/SVG/ic_fluent_calendar_work_week_24_filled.svg) |
| call | ![icon call](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Call/SVG/ic_fluent_call_24_filled.svg) |
| camera | ![icon camera](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Camera/SVG/ic_fluent_camera_24_filled.svg) |
| cart | ![icon cart](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Cart/SVG/ic_fluent_cart_24_filled.svg) |
| channel | ![icon channel](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel/SVG/ic_fluent_channel_24_filled.svg) |
| channel_add | ![icon channel_add](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel%20Add/SVG/ic_fluent_channel_add_24_filled.svg) |
| channel_alert | ![icon channel_alert](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel%20Alert/SVG/ic_fluent_channel_alert_24_filled.svg) |
| channel_share | ![icon channel_share](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Channel%20Share/SVG/ic_fluent_channel_share_24_filled.svg) |
| chat | ![icon chat](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Chat/SVG/ic_fluent_chat_24_filled.svg) |
| city | ![icon city](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/City/SVG/ic_fluent_city_24_filled.svg) |
| clipboard | ![icon clipboard](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Clipboard/SVG/ic_fluent_clipboard_24_filled.svg) |
| clipboard_paste | ![icon clipboard_paste](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Clipboard%20Paste/SVG/ic_fluent_clipboard_paste_24_filled.svg) |
| clock | ![icon clock](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Clock/SVG/ic_fluent_clock_24_filled.svg) |
| cloud_download | ![icon cloud_download](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Cloud%20Arrow%20Down/SVG/ic_fluent_cloud_arrow_down_24_filled.svg) |
| comment_mention | ![icon comment_mention](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Comment%20Mention/SVG/ic_fluent_comment_mention_24_filled.svg) |
| comment_multiple | ![icon comment_multiple](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Comment%20Multiple/SVG/ic_fluent_comment_multiple_24_filled.svg) |
| communication | ![icon communication](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Communication/SVG/ic_fluent_communication_24_filled.svg) |
| compass_northwest | ![icon compass_northwest](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Compass%20Northwest/SVG/ic_fluent_compass_northwest_24_filled.svg) |
| compose | ![icon compose](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Compose/SVG/ic_fluent_compose_24_filled.svg) |
| conference_room | ![icon conference_room](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Conference%20Room/SVG/ic_fluent_conference_room_24_filled.svg) |
| contact_card_group | ![icon contact_card_group](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Contact%20Card%20Group/SVG/ic_fluent_contact_card_group_24_filled.svg) |
| copy | ![icon copy](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Copy/SVG/ic_fluent_copy_24_filled.svg) |
| cube | ![icon cube](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Cube/SVG/ic_fluent_cube_24_filled.svg) |
| currency_dollar_euro | ![icon currency_dollar_euro](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Currency%20Dollar%20Euro/SVG/ic_fluent_currency_dollar_euro_24_filled.svg) |
| dentist | ![icon dentist](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Dentist/SVG/ic_fluent_dentist_24_filled.svg) |
| desktop | ![icon desktop](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Desktop/SVG/ic_fluent_desktop_24_filled.svg) |
| desktop_mac | ![icon desktop_mac](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Desktop%20Mac/SVG/ic_fluent_desktop_mac_24_filled.svg) |
| doctor | ![icon doctor](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Doctor/SVG/ic_fluent_doctor_24_filled.svg) |
| document | ![icon document](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document/SVG/ic_fluent_document_24_filled.svg) |
| document_add | ![icon document_add](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document%20Add/SVG/ic_fluent_document_add_24_filled.svg) |
| document_catch_up | ![icon document_catch_up](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document%20Catch%20Up/SVG/ic_fluent_document_catch_up_24_filled.svg) |
| document_question_mark | ![icon document_question_mark](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Document%20Question%20Mark/SVG/ic_fluent_document_question_mark_24_filled.svg) |
| drafts | ![icon drafts](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Drafts/SVG/ic_fluent_drafts_24_filled.svg) |
| drink_beer | ![icon drink_beer](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Drink%20Beer/SVG/ic_fluent_drink_beer_24_filled.svg) |
| drink_coffee | ![icon drink_coffee](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Drink%20Coffee/SVG/ic_fluent_drink_coffee_24_filled.svg) |
| dumbbell | ![icon dumbbell](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Dumbbell/SVG/ic_fluent_dumbbell_24_filled.svg) |
| emoji | ![icon emoji](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Emoji/SVG/ic_fluent_emoji_24_filled.svg) |
| emoji_add | ![icon emoji_add](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Emoji%20Add/SVG/ic_fluent_emoji_add_24_filled.svg) |
| error_circle | ![icon error_circle](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Error%20Circle/SVG/ic_fluent_error_circle_24_filled.svg) |
| filter | ![icon filter](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Filter/SVG/ic_fluent_filter_24_filled.svg) |
| flag | ![icon flag](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flag/SVG/ic_fluent_flag_24_filled.svg) |
| flag_off | ![icon flag_off](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flag%20Off/SVG/ic_fluent_flag_off_24_filled.svg) |
| flash | ![icon flash](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flash/SVG/ic_fluent_flash_24_filled.svg) |
| flash_checkmark | ![icon flash_checkmark](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Flash%20Checkmark/SVG/ic_fluent_flash_checkmark_24_filled.svg) |
| glasses | ![icon glasses](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Glasses/SVG/ic_fluent_glasses_24_filled.svg) |
| globe | ![icon globe](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Globe/SVG/ic_fluent_globe_24_filled.svg) |
| grid | ![icon grid](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Grid/SVG/ic_fluent_grid_24_filled.svg) |
| guest | ![icon guest](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Guest/SVG/ic_fluent_guest_24_filled.svg) |
| hat_graduation | ![icon hat_graduation](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Hat%20Graduation/SVG/ic_fluent_hat_graduation_24_filled.svg) |
| headset | ![icon headset](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Headset/SVG/ic_fluent_headset_24_filled.svg) |
| heart | ![icon heart](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Heart/SVG/ic_fluent_heart_24_filled.svg) |
| highlight | ![icon highlight](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Highlight/SVG/ic_fluent_highlight_24_filled.svg) |
| home | ![icon home](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Home/SVG/ic_fluent_home_24_filled.svg) |
| home_checkmark | ![icon home_checkmark](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Home%20Checkmark/SVG/ic_fluent_home_checkmark_24_filled.svg) |
| image | ![icon image](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Image/SVG/ic_fluent_image_24_filled.svg) |
| image_edit | ![icon image_edit](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Image%20Edit/SVG/ic_fluent_image_edit_24_filled.svg) |
| important | ![icon important](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Important/SVG/ic_fluent_important_24_filled.svg) |
| info | ![icon info](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Info/SVG/ic_fluent_info_24_filled.svg) |
| inking_tool | ![icon inking_tool](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Inking%20Tool/SVG/ic_fluent_inking_tool_24_filled.svg) |
| inprivate_account | ![icon inprivate_account](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/InPrivate%20Account/SVG/ic_fluent_inprivate_account_24_filled.svg) |
| key | ![icon key](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Key/SVG/ic_fluent_key_24_filled.svg) |
| laptop | ![icon laptop](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Laptop/SVG/ic_fluent_laptop_24_filled.svg) |
| leaf_two | ![icon leaf_two](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Leaf%20Two/SVG/ic_fluent_leaf_two_24_filled.svg) |
| library | ![icon library](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Library/SVG/ic_fluent_library_24_filled.svg) |
| lightbulb | ![icon lightbulb](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Lightbulb/SVG/ic_fluent_lightbulb_24_filled.svg) |
| link | ![icon link](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Link/SVG/ic_fluent_link_24_filled.svg) |
| location | ![icon location](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Location/SVG/ic_fluent_location_24_filled.svg) |
| location_off | ![icon location_off](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Location%20Off/SVG/ic_fluent_location_off_24_filled.svg) |
| lock_closed | ![icon lock_closed](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Lock%20Closed/SVG/ic_fluent_lock_closed_24_filled.svg) |
| mail | ![icon mail](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mail/SVG/ic_fluent_mail_24_filled.svg) |
| mail_inbox | ![icon mail_inbox](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mail%20Inbox/SVG/ic_fluent_mail_inbox_24_filled.svg) |
| map_drive | ![icon map_drive](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Map%20Drive/SVG/ic_fluent_map_drive_24_filled.svg) |
| math_formula | ![icon math_formula](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Math%20Formula/SVG/ic_fluent_math_formula_24_filled.svg) |
| meet_now | ![icon meet_now](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Meet%20Now/SVG/ic_fluent_meet_now_24_filled.svg) |
| megaphone | ![icon megaphone](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Megaphone/SVG/ic_fluent_megaphone_24_filled.svg) |
| mic_off | ![icon mic_off](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mic%20Off/SVG/ic_fluent_mic_off_24_filled.svg) |
| mic_on | ![icon mic_on](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mic/SVG/ic_fluent_mic_24_filled.svg) |
| mic_prohibited | ![icon mic_prohibited](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Mic%20Prohibited/SVG/ic_fluent_mic_prohibited_24_filled.svg) |
| money | ![icon money](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Money/SVG/ic_fluent_money_24_filled.svg) |
| movies_and_tv | ![icon movies_and_tv](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Movies%20and%20TV/SVG/ic_fluent_movies_and_tv_24_filled.svg) |
| music_note_2 | ![icon music_note_2](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Music%20Note%202/SVG/ic_fluent_music_note_2_24_filled.svg) |
| my_location | ![icon my_location](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/My%20Location/SVG/ic_fluent_my_location_24_filled.svg) |
| options | ![icon options](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Options/SVG/ic_fluent_options_24_filled.svg) |
| page_fit | ![icon page_fit](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Page%20Fit/SVG/ic_fluent_page_fit_24_filled.svg) |
| paint_brush | ![icon paint_brush](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Paint%20Brush/SVG/ic_fluent_paint_brush_24_filled.svg) |
| paint_bucket | ![icon paint_bucket](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Paint%20Bucket/SVG/ic_fluent_paint_bucket_24_filled.svg) |
| payment | ![icon payment](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Payment/SVG/ic_fluent_payment_24_filled.svg) |
| people | ![icon people](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People/SVG/ic_fluent_people_24_filled.svg) |
| people_add | ![icon people_add](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Add/SVG/ic_fluent_people_add_24_filled.svg) |
| people_call | ![icon people_call](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Call/SVG/ic_fluent_people_call_24_filled.svg) |
| people_community | ![icon people_community](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Community/SVG/ic_fluent_people_community_24_filled.svg) |
| people_team | ![icon people_team](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/People%20Team/SVG/ic_fluent_people_team_24_filled.svg) |
| person | ![icon person](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person/SVG/ic_fluent_person_24_filled.svg) |
| person_add | ![icon person_add](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Add/SVG/ic_fluent_person_add_24_filled.svg) |
| person_available | ![icon person_available](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Available/SVG/ic_fluent_person_available_24_filled.svg) |
| person_call | ![icon person_call](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Call/SVG/ic_fluent_person_call_24_filled.svg) |
| person_clock | ![icon person_clock](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Clock/SVG/ic_fluent_person_clock_24_filled.svg) |
| person_mail | ![icon person_mail](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Mail/SVG/ic_fluent_person_mail_24_filled.svg) |
| person_prohibited | ![icon person_prohibited](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Prohibited/SVG/ic_fluent_person_prohibited_24_filled.svg) |
| person_question_mark | ![icon person_question_mark](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Question%20Mark/SVG/ic_fluent_person_question_mark_24_filled.svg) |
| person_support | ![icon person_support](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Person%20Support/SVG/ic_fluent_person_support_24_filled.svg) |
| premium | ![icon premium](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Premium/SVG/ic_fluent_premium_24_filled.svg) |
| reading_list | ![icon reading_list](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Reading%20List/SVG/ic_fluent_reading_list_24_filled.svg) |
| record | ![icon record](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Record/SVG/ic_fluent_record_24_filled.svg) |
| remote | ![icon remote](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Remote/SVG/ic_fluent_remote_20_filled.svg) |
| reward | ![icon reward](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Reward/SVG/ic_fluent_reward_24_filled.svg) |
| ribbon | ![icon ribbon](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Ribbon/SVG/ic_fluent_ribbon_24_filled.svg) |
| rocket | ![icon rocket](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Rocket/SVG/ic_fluent_rocket_24_filled.svg) |
| ruler | ![icon ruler](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Ruler/SVG/ic_fluent_ruler_24_filled.svg) |
| run | ![icon run](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Run/SVG/ic_fluent_run_24_filled.svg) |
| savings | ![icon savings](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Savings/SVG/ic_fluent_savings_24_filled.svg) |
| search | ![icon search](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Search/SVG/ic_fluent_search_24_filled.svg) |
| send | ![icon send](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Send/SVG/ic_fluent_send_24_filled.svg) |
| settings | ![icon settings](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Settings/SVG/ic_fluent_settings_24_filled.svg) |
| shield | ![icon shield](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Shield/SVG/ic_fluent_shield_24_filled.svg) |
| shifts | ![icon shifts](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Shifts/SVG/ic_fluent_shifts_24_filled.svg) |
| slide_text | ![icon slide_text](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Slide%20Text/SVG/ic_fluent_slide_text_24_filled.svg) |
| snooze | ![icon snooze](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Snooze/SVG/ic_fluent_snooze_24_filled.svg) |
| speaker_0 | ![icon speaker_0](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Speaker%200/SVG/ic_fluent_speaker_0_24_filled.svg) |
| speaker_1 | ![icon speaker_1](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Speaker%201/SVG/ic_fluent_speaker_1_24_filled.svg) |
| sport | ![icon sport](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Sport/SVG/ic_fluent_sport_24_filled.svg) |
| star | ![icon star](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Star/SVG/ic_fluent_star_24_filled.svg) |
| stop | ![icon stop](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Stop/SVG/ic_fluent_stop_24_filled.svg) |
| store_microsoft | ![icon store_microsoft](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Store%20Microsoft/SVG/ic_fluent_store_microsoft_24_filled.svg) |
| sync_off | ![icon sync_off](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Sync%20Off/SVG/ic_fluent_sync_off_20_filled.svg) |
| tab | ![icon tab](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tab/SVG/ic_fluent_tab_24_filled.svg) |
| table | ![icon table](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Table/SVG/ic_fluent_table_24_filled.svg) |
| table_simple | ![icon table_simple](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Table%20Simple/SVG/ic_fluent_table_simple_24_filled.svg) |
| tag | ![icon tag](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tag/SVG/ic_fluent_tag_24_filled.svg) |
| target | ![icon target](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Target/SVG/ic_fluent_target_24_filled.svg) |
| tasks | ![icon tasks](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tasks%20App/SVG/ic_fluent_tasks_app_24_filled.svg) |
| tent | ![icon tent](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tent/SVG/ic_fluent_tent_24_filled.svg) |
| tetris_app | ![icon tetris_app](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Tetris%20App/SVG/ic_fluent_tetris_app_24_filled.svg) |
| thumb_like | ![icon thumb_like](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Thumb%20Like/SVG/ic_fluent_thumb_like_24_filled.svg) |
| timer | ![icon timer](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Timer/SVG/ic_fluent_timer_24_filled.svg) |
| trophy | ![icon trophy](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Trophy/SVG/ic_fluent_trophy_24_filled.svg) |
| tv | ![icon tv](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/TV/SVG/ic_fluent_tv_24_filled.svg) |
| vault | ![icon vault](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vault/SVG/ic_fluent_vault_24_filled.svg) |
| vehicle_bicycle | ![icon vehicle_bicycle](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Bicycle/SVG/ic_fluent_vehicle_bicycle_24_filled.svg) |
| vehicle_bus | ![icon vehicle_bus](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Bus/SVG/ic_fluent_vehicle_bus_24_filled.svg) |
| vehicle_cab | ![icon vehicle_cab](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Cab/SVG/ic_fluent_vehicle_cab_24_filled.svg) |
| vehicle_car | ![icon vehicle_car](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Car/SVG/ic_fluent_vehicle_car_24_filled.svg) |
| vehicle_subway | ![icon vehicle_subway](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Vehicle%20Subway/SVG/ic_fluent_vehicle_subway_24_filled.svg) |
| video | ![icon video](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Video/SVG/ic_fluent_video_24_filled.svg) |
| video_person | ![icon video_person](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Video%20Person/SVG/ic_fluent_video_person_24_filled.svg) |
| voicemail | ![icon voicemail](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Voicemail/SVG/ic_fluent_voicemail_24_filled.svg) |
| warning | ![icon warning](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Warning/SVG/ic_fluent_warning_24_filled.svg) |
| weather_moon | ![icon weather_moon](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Weather%20Moon/SVG/ic_fluent_weather_moon_24_filled.svg) |
| weather_moon_off | ![icon weather_moon_off](https://github.com/microsoft/fluentui-system-icons/raw/main/assets/Weather%20Moon%20Off/SVG/ic_fluent_weather_moon_off_24_filled.svg) |
