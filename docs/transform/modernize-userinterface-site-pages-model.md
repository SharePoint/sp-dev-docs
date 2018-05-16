---
title: Understanding and configuring the page transformation model
description: Provides detailed guidance on how to configure and use the page transformation model
ms.date: 05/16/2018
ms.prod: sharepoint
---

# Understanding and configuring the page transformation model

The heart of the page transformation solution is the model that feeds the transformation: the model tells the engine which web part properties are important, allows you to manipulate these properties and dynamically choose a mapping for your web part.The page transformation model is expressed in XMl and comes with a schema that's used to validate the correctness of the model.

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is currently in preview. If you encounter issues please file a issue in the [PnP Tools GitHub issue list](https://github.com/SharePoint/PnP-Tools/issues).

## Page transformation model structure

When you open the page transformation model the following top level elements are present:

- **BaseWebPart**: this element contains the configuration that applies to all web parts e.g. it describes that the property "Title" will be fetched for all web parts. It's also the place that defines the default web part mapping: if a web part has no mapping defined the engine will fall back to this mapping to represent the web part on the target client side page.

- **AddOns**: as user of page transformation you might have the needed to apply custom logic to realize your needs e.g. you need to transform a given property in a way that it can work with your custom client side web part. The framework supports this by allowing you to add your assemblies with functions and selectors...simply defining them in the AddOn section and then referencing your custom functions and selectors later on by prefixing them with the given name will make the page transformation use your custom code.

- **WebParts**: this element contains information for each web part that you want to transform. For each web part you'll find a definition of the properties to use, the functions to execute on those properties, the possible mappings that define the target of the transformation combined with a selector that you dynamically select the needed mapping.

Upcoming chapters will provide more details.

## WebPart definition in the page transformation model

Let's analyze how a web part is configured in the page transformation model, which is best done based upon a simplified sample of the XsltListViewWebPart definition:

```Xml
      <!-- XsltListView web part -->
      <WebPart Type="Microsoft.SharePoint.WebPartPages.XsltListViewWebPart, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c">
        <Properties>
          <Property Name="XmlDefinitionLink" Type="string" />
          <Property Name="ListUrl" Type="string" />
          <Property Name="ListId" Type="guid" Functions="{ListWebRelativeUrl} = ListAddWebRelativeUrl({ListId}); {ListServerRelativeUrl} = ListAddServerRelativeUrl({ListId})"/>
          <Property Name="Direction" Type="string"/>
          <Property Name="GhostedXslLink" Type="string" />
          <Property Name="DisableViewSelectorMenu" Type="bool"/>
          <Property Name="XmlDefinition" Type="string" Functions="{ListViewId} = ListDetectUsedView({ListId},{XmlDefinition})"/>
          <Property Name="SelectParameters" Type="string"/>
        </Properties>
        <!-- This selector outputs: Library, List  -->
        <Mappings Selector="ListSelectorListLibrary({ListId})">
          <Mapping Name="List" Default="true">
            <ClientSideText Text="You can map a source web part ({Title}) to a combination of client side controls :-)" Order="10" />
            <ClientSideWebPart Type="List" Order="20" JsonControlData="&#123;&quot;serverProcessedContent&quot;&#58;&#123;&quot;htmlStrings&quot;&#58;&#123;&#125;,&quot;searchablePlainTexts&quot;&#58;&#123;&#125;,&quot;imageSources&quot;&#58;&#123;&#125;,&quot;links&quot;&#58;&#123;&#125;&#125;,&quot;dataVersion&quot;&#58;&quot;1.0&quot;,&quot;properties&quot;&#58;&#123;&quot;isDocumentLibrary&quot;&#58;false,&quot;selectedListId&quot;&#58;&quot;{ListId}&quot;,&quot;listTitle&quot;&#58;&quot;{Title}&quot;,&quot;selectedListUrl&quot;&#58;&quot;{ListServerRelativeUrl}&quot;,&quot;webRelativeListUrl&quot;&#58;&quot;{ListWebRelativeUrl}&quot;,&quot;webpartHeightKey&quot;&#58;4,&quot;selectedViewId&quot;&#58;&quot;{ListViewId}&quot;&#125;&#125;" />
          </Mapping>
          <Mapping Name="Library" Default="false">
            <ClientSideWebPart Type="List" Order="10" JsonControlData="&#123;&quot;serverProcessedContent&quot;&#58;&#123;&quot;htmlStrings&quot;&#58;&#123;&#125;,&quot;searchablePlainTexts&quot;&#58;&#123;&#125;,&quot;imageSources&quot;&#58;&#123;&#125;,&quot;links&quot;&#58;&#123;&#125;&#125;,&quot;dataVersion&quot;&#58;&quot;1.0&quot;,&quot;properties&quot;&#58;&#123;&quot;isDocumentLibrary&quot;&#58;true,&quot;selectedListId&quot;&#58;&quot;{ListId}&quot;,&quot;listTitle&quot;&#58;&quot;{Title}&quot;,&quot;selectedListUrl&quot;&#58;&quot;{ListServerRelativeUrl}&quot;,&quot;webRelativeListUrl&quot;&#58;&quot;{ListWebRelativeUrl}&quot;,&quot;webpartHeightKey&quot;&#58;4,&quot;selectedViewId&quot;&#58;&quot;{ListViewId}&quot;&#125;&#125;" />
          </Mapping>
        </Mappings>
      </WebPart>
```

### Properties element

For each web part the model defines the properties that might be useful to configure the target client side web part(s). If you miss certain properties you can simply extend them in the model. On some of the properties you'll see a Functions attribute: this attribute contains one or more functions (separate functions via a ;) that are executed when the source web part is mapped to a target client side web part. The anatomy of a function is the following:

```csharp
{Output} = FunctionName({Input1}, {Input2})
```

A function can have one or more input values which can be:

- Properties defined on this web part (e.g. {ListId})
- Properties defined on the base web part (e.g. {Title})
- Properties that were the output of previous function executions (e.g. {ListWebRelativeUrl})
- Default site scoped properties: {Host}, {Web}, {Site}, {WebId}, {SiteId}

When a function runs it's output will either be:

- A single string value: this value ({Output} in the presented model) will be added to the list of web part properties with name "Output" and value the value that was returned from running `FunctionName`.
- A list of key/value pairs (Dictionary<string,string>): in this case each returned key/value pair is added to the list of web part properties

If the function does not define the output parameter then value of the web part property that defines the function will be overwritten with the function result.

Let's clarify with a sample:

```Xml
<Property Name="ListId" Type="guid" Functions="FormatGuid({ListId})"/>
```

Let's assume that the web part property originally contains a guid formatted like {AAFAD7D0-D57A-4BB1-8706-969A608C686B}. After `FormatGuid` has been executed the value will be set to the output of `FormatGuid` (e.g. a guid without brackets AAFAD7D0-D57A-4BB1-8706-969A608C686B).

If a function returns multiple values then each returned key/value pair that already exists as web part property overwrites that properties value.

### Mappings element

This element defines one or more possible target configurations for the given source web part. Since you can define multiple targets there needs to be a mechanism to determine which mapping to use:

- If the mapping element contains a filled Selector attribute then the output of the selector execution is used to find the correct mapping by name (e.g. selector function `ListSelectorListLibrary` return string "Library" which results in the mapping with name "Library" being used). Selectors are identical to functions that return a single value, so you can specify any web part attribute as input to your selector function
- If there's only one mapping then that's taken if there was no selector result
- If there's no selector result and there are multiple mappings defined then the mapping marked as Default is taken

Next up is explain the Mapping element itself.

### Mapping element

Inside a Mapping element you can have one or more ClientSideText or ClientSideWebPart elements as shown in below snippet:

```Xml
<Mapping Name="List" Default="true">
  <ClientSideText Text="You can map a source web part ({Title}) to a combination of client side controls :-)" Order="10" />
  <ClientSideWebPart Type="List" Order="20" JsonControlData="&#123;&quot;serverProcessedContent&quot;&#58;&#123;&quot;htmlStrings&quot;&#58;&#123;&#125;,&quot;searchablePlainTexts&quot;&#58;&#123;&#125;,&quot;imageSources&quot;&#58;&#123;&#125;,&quot;links&quot;&#58;&#123;&#125;&#125;,&quot;dataVersion&quot;&#58;&quot;1.0&quot;,&quot;properties&quot;&#58;&#123;&quot;isDocumentLibrary&quot;&#58;false,&quot;selectedListId&quot;&#58;&quot;{ListId}&quot;,&quot;listTitle&quot;&#58;&quot;{Title}&quot;,&quot;selectedListUrl&quot;&#58;&quot;{ListServerRelativeUrl}&quot;,&quot;webRelativeListUrl&quot;&#58;&quot;{ListWebRelativeUrl}&quot;,&quot;webpartHeightKey&quot;&#58;4,&quot;selectedViewId&quot;&#58;&quot;{ListViewId}&quot;&#125;&#125;" />
</Mapping>
```

In above sample the source XSLTListView web part is mapped to a client side text part (`ClientSideText`) and a client side web part (`ClientSideWebPart`):

- Use the `Order` attribute to determine which one comes first
- For a `ClientSideWebPart` you need to specify the `Type` of the web part, if you choose `Custom` as type you'll also need to specify the `ControlId` property to identify the needed custom web part
- The `Text`, `JsonControlData` and `ControlId` properties can contain tokens in the form of {Token} which are replaced by actual values at runtime. Each token defined needs be able as web part property or function result as explained earlier on

## AddOns definition in the page transformation model

Add-ons allow you to insert your custom logic into the mapping model by following these 2 steps:

- Create a custom assembly hosting your custom functions/selectors
- Declare this custom assembly in the AddOns elements

### Create your custom functions/selectors assembly

To create your own functions you'll need to reference the SharePoint.Modernization.Framework assembly in your project and then create a class inheriting the `SharePointPnP.Modernization.Framework.Functions.FunctionsBase` class:

```csharp
using Microsoft.SharePoint.Client;
using SharePointPnP.Modernization.Framework.Functions;
using System;

namespace Contoso.Modernization
{
    public class MyCustomFunctions: FunctionsBase
    {
        public MyCustomFunctions(ClientContext clientContext) : base(clientContext)
        {
        }

        public string MyListAddServerRelativeUrl(Guid listId)
        {
            if (listId == Guid.Empty)
            {
                return "";
            }
            else
            {
                var list = this.clientContext.Web.GetListById(listId);
                list.EnsureProperties(p => p.RootFolder.ServerRelativeUrl);
                return list.RootFolder.ServerRelativeUrl;
            }
        }

    }
}
```

### Declare your custom assembly

Before custom functions can be used they need to be declared in the model by adding one reference per library/class into the AddOns element:

```Xml
<AddOn Name="Custom" Type="Contoso.Modernization.MyCustomFunctions" Assembly="Contoso.Modernization.dll" />
```

or (note the fully qualified path)

```Xml
<AddOn Name="Custom" Type="Contoso.Modernization.MyCustomFunctions" Assembly="c:\transform\Contoso.Modernization.dll" />
```

Note that each declaration has a name, "Custom" in above sample.

### Use your custom functions/selectors

Now that the assembly has been defined you can use your functions and selectors be referencing them by the name like you see the "Custom" prefix in below sample:

```Xml
<Property Name="ListId" Type="guid" Functions="{ListServerRelativeUrl} = Custom.MyListAddServerRelativeUrl({ListId})"/>
```
