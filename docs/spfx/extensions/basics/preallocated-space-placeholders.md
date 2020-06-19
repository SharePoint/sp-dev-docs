---
title: Pre-allocate space for SharePoint Framework extension placeholders
description: Pre-allocate rendering space for the extension placeholders
ms.date: 06/19/2020
ms.prod: sharepoint
localization_priority: Normal
---

# Pre-allocate space for SharePoint Framework extension placeholders

Application customizers can be used to add structures and content on the modern pages. This can be achieved by using specific placeholders in the page, to which then the custom extensibility will be loaded. As the extensions will be loaded quite late on the page loading life cycle, there might be additional page movement when the extensions are added.

> [!NOTE]
> This feature is only supported in SharePoint Online.

To reduce the page movement, you can **pre-allocate** the extension area already in the server side when page structure is created. This configuration can be applied by using new `HostProperties` property at the `UserCustomAction` collection to indicate in the server side which application customizers are loaded to the page.

There are two different specific properties, which can be used with the `HostProperties` configuration:

- `preAllocatedApplicationCustomizerTopHeight`: Pre-allocated height for the top placeholder
- `preAllocatedApplicationCustomizerBottomHeight`: Pre-allocated height for the bottom placeholder

Height is being defined in pixels.

## Defining HostProperties allocation in SharePoint Framework solution

You can define the server-side pre-allocation directly in the SharePoint Framework solution code, which then ensures that the pre-allocation is applied when solution is being used. Pre-allocation can be defined either in the **elements.xml** or in the **ClientSideInstance.xml** files, depending on your solution design.

Host properties value has to be properly encoded in the xml files to ensure that the packaging of the solution will be successful.

### Defining pre-allocation on site scoped deployment

If your extension is designed to be installed on a site scope, you can configure the pre-allocation by using the **./sharepoint/assets/elements.xml** file. Configuration included in this file is by default applied to the site, when SharePoint Framework solution is installed on a site scope.

Following xml fragment has been updated with the additional `HostProperties` entry and defined the default height to be 50 pixels.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <CustomAction
      Title="HeaderDemo"
      Location="ClientSideExtension.ApplicationCustomizer"
      ClientSideComponentId="03dd08c7-2575-4336-899e-68cfce663c4d"
      ClientSideComponentProperties="{&quot;testMessage&quot;:&quot;Test message&quot;}"
      HostProperties="{&quot;preAllocatedApplicationCustomizerTopHeight&quot;:&quot;50&quot;,&quot;preAllocatedApplicationCustomizerBottomHeight&quot;:&quot;50&quot;}">
  </CustomAction>
</Elements>
```

### Define pre-allocation by using the tenant-wide deployment option

Extensions that are targeted to be activated using the tenant-wide deployment options, can be configured to use the pre-allocated space by adding `HostProperties` property for the `ClientSideComponentInstance` element in the **./sharepoint/assets/ClientSideInstance.xml** file.

```xml
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <ClientSideComponentInstance
      Title="HeaderDemo"
      Location="ClientSideExtension.ApplicationCustomizer"
      ComponentId="03dd08c7-2575-4336-899e-68cfce663c4d"
      Properties="{&quot;testMessage&quot;:&quot;Test message&quot;}"
      HostProperties="{&quot;preAllocatedApplicationCustomizerTopHeight&quot;:&quot;50&quot;,&quot;preAllocatedApplicationCustomizerBottomHeight&quot;:&quot;50&quot;}">
  </ClientSideComponentInstance>
</Elements>
```

`HostProperties` entry from this configuration will be added to the **Tenant Wide Extensions** list entry at the App Catalog site collection, which has a **Host Properties** column for each item.

## Considerations

There are few considerations to be aware, depending on your implementation:

- When the given height is too much, the div will have extra space on the designated position. If the height is less than the application customizers then the application customizers will get compressed into the placeholder.
- If you have defined a pre-allocation, but application customizer does not create placeholder in the code or is not associated on the page, server side allocated space will remain on the page.

> [!NOTE]
> `HostProperties` can be defined also for existing application customizers either modifying site level CustomAction object or by using the **Host Properties** column in the **Tenant Wide Extensions** list at the app catalog site. As this is a server side setting, it can be also applied to extensions which have been built using older SharePoint Framework versions.
