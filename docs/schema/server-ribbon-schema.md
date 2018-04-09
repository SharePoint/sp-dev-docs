---
title: "Server Ribbon schema"
ms.author: ricardol
author: ricardol
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: 357e26f4-f6ab-4044-9869-054f65f276cc
description: "Last modified: July 15, 2011"
---

# Server Ribbon schema

 **Last modified:** July 15, 2011 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The Server ribbon schema defines the structure of XML documents that customize the Server ribbon.
  
## XML Schema Definition

An XML document that customizes the Server ribbon must validate with the schema that is defined in the cui.xsd file. This file is located in the following directory: %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\XML. 
  
## Elements

The following list maps relationships between elements in the Server ribbon schema definition. 
  
<[CommandUI](commandui-element.md)>
  
 < [Ribbon](ribbon-element.md)>
  
 < [Tabs](tabs-element.md)>
  
 < [Tab](tab-element.md)>
  
 < [Groups](groups-element.md)>
  
 < [Group](group-element-ribbon.md)>
  
 < [Controls](controls-element-group.md)>
  
 < [Button](button-element.md)/>
  
 < [CheckBox](checkbox-element.md)/>
  
 < [ComboBox](combobox-element.md)>
  
 < [Menu](menu-element.md)>
  
 < [MenuSection](menusection-element.md)>
  
 < [Controls](controls-element-menusection.md)>
  
 < [Button](button-element.md)/>
  
 < [ColorPicker](colorpicker-element.md)>
  
 < [Colors](colors-element.md)>
  
 < [Color](color-element.md)/>
  
 \<Colors/\> 
  
 \</ColorPicker\> 
  
 < [FlyoutAnchor](flyoutanchor-element.md)>
  
 < [Menu](menu-element.md)>
  
 \</Menu\> 
  
 \</FlyoutAnchor\> 
  
 < [InsertTable](inserttable-element.md)/>
  
 < [ToggleButton](togglebutton-element.md)/>
  
 \</Controls\> 
  
 < [Gallery](gallery-element.md)>
  
 < [GalleryButton](gallerybutton-element-group.md)/>
  
 \</Gallery\> 
  
 \</MenuSection\> 
  
 \</Menu\> 
  
 \</ComboBox\> 
  
 < [DropDown](dropdown-element.md)>
  
 < [Menu](menu-element.md)>
  
 \</Menu\> 
  
 \</DropDown\> 
  
 < [FlyoutAnchor](flyoutanchor-element.md)>
  
 < [Menu](menu-element.md)>
  
 \</Menu\> 
  
 \</FlyoutAnchor\> 
  
 < [GalleryButton](gallerybutton-element-group.md)/>
  
 < [Label](label-element.md)/>
  
 < [MRUSplitButton](mrusplitbutton-element.md)>
  
 < [Menu](menu-element.md)>
  
 \</Menu\> 
  
 < [Spinner](spinner-element.md)>
  
 < [Unit](unit-element-spinner.md)>
  
 < [UnitAbbreviation](unitabbreviation-element.md)/>
  
 \</Unit\> 
  
 \</Spinner\> 
  
 < [SplitButton](splitbutton-element.md)>
  
 < [Menu](menu-element.md)>
  
 \</Menu\> 
  
 \</SplitButton\> 
  
 < [TextBox](textbox-element.md)/>
  
 < [ToggleButton](togglebutton-element.md)/>
  
 \</Controls\> 
  
 \</Group\> 
  
 \</Groups\> 
  
 < [Scaling](scaling-element.md)>
  
 < [MaxSize](maxsize-element.md)/>
  
 < [Scale](scale-element.md)/>
  
 \</Scaling\> 
  
 \</Tab\> 
  
 \</Tabs\> 
  
 < [ContextualTabs](contextualtabs-element.md)>
  
 < [ContextualGroup](contextualgroup-element.md)>
  
 < [Tab](tab-element.md)>
  
 \</Tab\> 
  
 \</ContextualGroup\> 
  
 \</ContextualTabs\> 
  
 \</Ribbon\> 
  
 < [Templates](templates-element.md)>
  
 < [RibbonTemplates](ribbontemplates.md)>
  
 < [GroupTemplate](grouptemplate-element.md)>
  
 < [Layout](layout-element.md)>
  
 < [Section](section-element.md)>
  
 < [Row](row-element.md)>
  
 < [ControlRef](controlref-element.md)/>
  
 < [Strip](strip-element.md)>
  
 < [ControlRef](controlref-element.md)/>
  
 \</Strip\> 
  
 < [OverflowArea](overflowarea-element.md)/>
  
 \</Row\> 
  
 \</Section\> 
  
 < [OverflowSection](overflowsection-element.md)/>
  
 \</Layout\> 
  
 \</GroupTemplate\> 
  
 \</RibbonTemplates\> 
  
 \</Templates\> 
  
 < [QAT](qat-element.md)>
  
 < [Controls](controls-element-group.md)>
  
 \</Controls\> 
  
 \</QAT\> 
  
 < [Jewel](jewel-element.md)>
  
 < [Menu](menu-element.md)>
  
 \</Menu\> 
  
 \</Jewel\> 
  
\</CommandUI\>
  
## See also



[CommandUIDefinition Element](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md)


[Building Block: Server Ribbon](http://msdn.microsoft.com/library/035cdaf8-29f3-45ca-b5de-461bb65797e8%28Office.15%29.aspx)

