---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
keywords:
- schemas [sharepoint 2010], regional settings,regional settings schema [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Regional Settings schema
api_type:
- schema
ms.assetid: 7c9dda02-a11e-4716-b6de-eda33c8d14c8
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># Regional Settings Schema</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** July 15, 2011

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

The Regional Settings schema is used to define the time zones, locales,
languages, and currencies implemented within a SharePoint Foundation
deployment. This schema is expressed primarily through two files located
in the setup directory, RGNLSTNG.XML (%ProgramFiles%\\Common
Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\1033\\XML)
and TIMEZONE.XML (%ProgramFiles%\\Common Files\\Microsoft Shared\\web
server extensions\\15\\CONFIG).

You can access or modify regional settings through various members of
the following classes in the <span sdata="cer"
target="N:Microsoft.SharePoint"><span
class="nolink">Microsoft.SharePoint</span></span> namespace:

<span sdata="cer"
target="T:Microsoft.SharePoint.SPRegionalSettings"><span
class="nolink">SPRegionalSettings</span></span>

<span sdata="cer" target="T:Microsoft.SharePoint.SPTimeZone"><span
class="nolink">SPTimeZone</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.SPTimeZoneCollection"><span
class="nolink">SPTimeZoneCollection</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.SPTimeZoneInformation"><span
class="nolink">SPTimeZoneInformation</span></span>

<span sdata="cer" target="T:Microsoft.SharePoint.SPLocale"><span
class="nolink">SPLocale</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.SPLocaleCollection"><span
class="nolink">SPLocaleCollection</span></span>

<span sdata="cer" target="T:Microsoft.SharePoint.SPLanguage"><span
class="nolink">SPLanguage</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.SPLanguageCollection"><span
class="nolink">SPLanguageCollection</span></span>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RGNLSTNG.XML

[RegionalSettings](regionalsettings-element-regional-settings.htm)

  [TimeZones](timezones-element-regional-settings.htm)

    [TimeZone](timezone-element-regional-settings.htm)

  [Locales](locales-element-regional-settings.htm)

    [Locale](locale-element-regional-settings.htm)

  [Languages](languages-element-regional-settings.htm)

    [Language](language-element-regional-settings.htm)

  [Currencies](currencies-element-regional-settings.htm)

    [Currency](currency-element-regional-settings.htm)

### TIMEZONE.XML

[RegionalSettings](regionalsettings-element-regional-settings.htm)

  [TimeZones](timezones-element-regional-settings.htm)

    [TimeZone](timezone-element-regional-settings.htm)

      [Bias](bias-element-regional-settings.htm)

      [StandardTime](standardtime-element-regional-settings.htm)

        [Bias](bias-element-regional-settings.htm)

        [Date](date-element-regional-settings.htm)

            [Month](month-element-regional-settings.htm)

            [Day](day-element-regional-settings.htm)

            [Hour](hour-element-regional-settings.htm)

            [DayOfWeek](dayofweek-element-regional-settings.htm)

      [DaylightTime](daylighttime-element-regional-settings.htm)

        [Bias](bias-element-regional-settings.htm)

        [Date](date-element-regional-settings.htm)

          [Month](month-element-regional-settings.htm)

          [Day](day-element-regional-settings.htm)

          [Hour](hour-element-regional-settings.htm)

          [DayOfWeek](dayofweek-element-regional-settings.htm)

      [History](history-element-regional-settings.htm)

        [Bias](bias-element-regional-settings.htm)

        [StandardTime](standardtime-element-regional-settings.htm)

          [Bias](bias-element-regional-settings.htm)

          [Date](date-element-regional-settings.htm)

            [Month](month-element-regional-settings.htm)

            [Day](day-element-regional-settings.htm)

            [Hour](hour-element-regional-settings.htm)

            [DayOfWeek](dayofweek-element-regional-settings.htm)

        [DaylightTime](daylighttime-element-regional-settings.htm)

        [Bias](bias-element-regional-settings.htm)

        [Date](date-element-regional-settings.htm)

          [Month](month-element-regional-settings.htm)

          [Day](day-element-regional-settings.htm)

          [Hour](hour-element-regional-settings.htm)

          [DayOfWeek](dayofweek-element-regional-settings.htm)








