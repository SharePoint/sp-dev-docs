---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f07f0d06-2d14-4c6d-bb87-b44ec98b50e6
---

# Delegate Controls

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Delegate controls provide a means to specify candidate controls for a particular functionality and to choose a functionality provider for those controls.

- [Control](control-element-delegate-control.md)

- [Elements](elements-element-delegate-control.md)

- [Property](property-element-delegate-control.md)

<br/>

The following example specifies a control and tool tips to implement for the input box of the search area in SharePoint pages.

```XML 
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <Control 
        Id="SmallSearchInputBox" 
        Sequence="100"
        ControlSrc="~/_controltemplates/searcharea.ascx">
        <Property Name="SearchTextToolTip">Search this site</Property>
        <Property Name="SearchImageToolTip">Go</Property>
      </Control>
    </Elements>
```

<br/>

## See also

- DelegateControl
- [Delegate Control (Control Templatization)](https://msdn.microsoft.com/library/e979328d-4985-4ed6-9085-7ff32a998dfc(Office.15).aspx)
- [How to: Customize a Delegate Control](https://msdn.microsoft.com/library/9db44a39-33df-43d9-b873-3b41310090af(Office.15).aspx)








