---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d4840ea9-0270-415d-9389-e566a7e2d018
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
<td align="left"># Event Registrations</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Register event handlers at the site or site collection level that you
will use to implement filtering to respond to events.

The [Receivers](receivers-element-event.md) element
specifies an event handler for list item events.

[Elements](elements-element-event.md)

  [Receivers](receivers-element-event.md)

    [Receiver](receiver-element-event.md)

      [Assembly](assembly-element-event.md)

      [Class](class-element-event.md)

      [Data](data-element-event.md)

      [Filter Element
(Event)](filter-element-event.md)</span>

      [Name](name-element-event.md)

      [SequenceNumber](sequencenumber-element-event.md)

      [SolutionId Element
(Event)](solutionid-element-event.md)</span>

      [Synchronization Element
(Event)](synchronization-element-event.md)</span>

      [Type](type-element-event.md)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

To register an event handler for list events, create a folder in <span
class="code">\\Template\\Features</span> to contain a
[Feature.xml](feature-xml-files.md) file that
specifies the scope and ID of the Feature, and an elements manifest file
that the former file references.

The Feature.xml file that registers an event handler might look like the
following.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Feature 
      Scope="Web" 
      Title="Simple Updating Item Event Handler Registration" 
      Id="A6B8687A-3200-4b01-AD76-09E8D163FB9A" 
      xmlns="http://schemas.microsoft.com/sharepoint/">
      <ElementManifests>
        <ElementManifest Location="elements.xml"/>
      </ElementManifests>
    </Feature>

The elements manifest file registers the event handler assembly and
associates it with a list type, which the following example specifies to
be announcement lists (104).

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <Receivers 
        ListTemplateId="104">
        <Receiver>
          <Name>SimpleUpdateEvent</Name>
          <Type>ItemUpdating</Type>
          <SequenceNumber>10000</SequenceNumber>
          <Assembly>SimpleUpdateEventHandler, Version=1.0.0.0, Culture=neutral, PublicKeyToken=10b23036c9b36d6d</Assembly>
          <Class>MS.Samples.SimpleItemUpdateHandler</Class>
          <Data></Data>
        </Receiver>
      </Receivers>
    </Elements>

The .cs file for the event handler can use the SharePoint Foundation
object model to respond to events. For information about using the
object model to create custom event handlers, see [Event
Fundamentals](http://msdn.microsoft.com/library/4a20751f-877a-48ca-9d37-c3d4e6df9f30(Office.15).aspx).

The following example defines the content of an error message to display
when users attempt to modify items in a list.

<span codelanguage="CSharp"></span>
C\# 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Microsoft.SharePoint;

    namespace MS.Samples
    {
        public class SimpleItemUpdateHandler : SPItemEventReceiver
        {
            public override void ItemUpdating(SPItemEventProperties properties)
            {
                properties.Cancel = true;
                properties.ErrorMessage = "Updating data is not supported.";
            }
        }
    }

<span codelanguage="VisualBasic"></span>
Visual Basic 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    Imports System
    Imports System.Collections.Generic
    Imports System.Text
    Imports Microsoft.SharePoint

    Namespace MS.Samples
        Public Class SimpleItemUpdateHandler
            Inherits SPItemEventReceiver
            Public Overrides Sub ItemUpdating(ByVal properties As SPItemEventProperties)
                properties.Status = SPEventReceiverStatus.CancelWithError
                properties.ErrorMessage = "Updating data is not supported."
            End Sub
        End Class
    End Namespace


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[How to: Create an Event Handler
Feature](http://msdn.microsoft.com/library/4f70b1ea-dafe-4068-a6b0-55402b7618dc(Office.15).aspx)

[Event
Fundamentals](http://msdn.microsoft.com/library/4a20751f-877a-48ca-9d37-c3d4e6df9f30(Office.15).aspx)








