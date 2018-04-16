---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d4840ea9-0270-415d-9389-e566a7e2d018
---

# Event Registrations

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Register event handlers at the site or site collection level that you will use to implement filtering to respond to events.

The [Receivers](receivers-element-event.md) element specifies an event handler for list item events.

- [Elements](elements-element-event.md)

- [Receivers](receivers-element-event.md)

- [Receiver](receiver-element-event.md)

- [Assembly](assembly-element-event.md)

- [Class](class-element-event.md)

- [Data](data-element-event.md)

- [Filter element (Event)](filter-element-event.md)

- [Name](name-element-event.md)

- [SequenceNumber](sequencenumber-element-event.md)

- [SolutionId element (Event)](solutionid-element-event.md)

- [Synchronization element (Event)](synchronization-element-event.md)

- [Type](type-element-event.md)

## Example

To register an event handler for list events, create a folder in `\\Template\\Features` to contain a [Feature.xml](feature-xml-files.md) file that specifies the scope and ID of the Feature, and an elements manifest file that the former file references.

The Feature.xml file that registers an event handler might look like the following.

```XML 
    <Feature 
      Scope="Web" 
      Title="Simple Updating Item Event Handler Registration" 
      Id="A6B8687A-3200-4b01-AD76-09E8D163FB9A" 
      xmlns="http://schemas.microsoft.com/sharepoint/">
      <ElementManifests>
        <ElementManifest Location="elements.xml"/>
      </ElementManifests>
    </Feature>
```

<br/>

The elements manifest file registers the event handler assembly and associates it with a list type, which the following example specifies to be announcement lists (104).

```XML 
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
```

<br/>

The .cs file for the event handler can use the SharePoint Foundation object model to respond to events. For information about using the object model to create custom event handlers, see [Events in SharePoint Foundation 2010](https://msdn.microsoft.com/library/4a20751f-877a-48ca-9d37-c3d4e6df9f30(Office.15).aspx).

The following example defines the content of an error message to display when users attempt to modify items in a list.

```csharp
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
```

<br/>

```vb
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
```

## See also

- [How to: Create an Event Handler Feature](https://msdn.microsoft.com/library/4f70b1ea-dafe-4068-a6b0-55402b7618dc(Office.15).aspx)









