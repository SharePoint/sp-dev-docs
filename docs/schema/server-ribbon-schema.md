---


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
<td align="left"># Server Ribbon schema</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

The Server ribbon schema defines the structure of XML documents that
customize the Server ribbon.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

An XML document that customizes the Server ribbon must validate with the
schema that is defined in the cui.xsd file. This file is located in the
following directory: %ProgramFiles%\\Common Files\\Microsoft Shared\\web
server extensions\\15\\TEMPLATE\\XML.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following list maps relationships between elements in the Server
ribbon schema definition.

\<[CommandUI](commandui-element.htm)\>

    \<[Ribbon](ribbon-element.htm)\>

        \<[Tabs](tabs-element.htm)\>

            \<[Tab](tab-element.htm)\>

                \<[Groups](groups-element.htm)\>

                    \<[Group](group-element-ribbon.htm)\>

                        \<[Controls](controls-element-group.htm)\>

                            \<[Button](button-element.htm)/\>

                            \<[CheckBox](checkbox-element.htm)/\>

                            \<[ComboBox](combobox-element.htm)\>

                                \<[Menu](menu-element.htm)\>

                                    \<[MenuSection](menusection-element.htm)\>

                                        \<[Controls](controls-element-menusection.htm)\>

                                            \<[Button](button-element.htm)/\>

                                            \<[ColorPicker](colorpicker-element.htm)\>

                                                \<[Colors](colors-element.htm)\>

                                                    \<[Color](color-element.htm)/\>

                                                DOCS-LESSTHANColors/DOCS-GREATERTHAN

                                            DOCS-LESSTHAN/ColorPickerDOCS-GREATERTHAN

                                            \<[FlyoutAnchor](flyoutanchor-element.htm)\>

                                                \<[Menu](menu-element.htm)\>

                                                DOCS-LESSTHAN/MenuDOCS-GREATERTHAN

                                            DOCS-LESSTHAN/FlyoutAnchorDOCS-GREATERTHAN

                                            \<[InsertTable](inserttable-element.htm)/\>

                                            \<[ToggleButton](togglebutton-element.htm)/\>

                                        DOCS-LESSTHAN/ControlsDOCS-GREATERTHAN

                                        \<[Gallery](gallery-element.htm)\>

                                            \<[GalleryButton](gallerybutton-element-group.htm)/\>

                                        DOCS-LESSTHAN/GalleryDOCS-GREATERTHAN

                                    DOCS-LESSTHAN/MenuSectionDOCS-GREATERTHAN

                                DOCS-LESSTHAN/MenuDOCS-GREATERTHAN

                            DOCS-LESSTHAN/ComboBoxDOCS-GREATERTHAN

                            \<[DropDown](dropdown-element.htm)\>

                                \<[Menu](menu-element.htm)\>

                                DOCS-LESSTHAN/MenuDOCS-GREATERTHAN

                            DOCS-LESSTHAN/DropDownDOCS-GREATERTHAN

                            \<[FlyoutAnchor](flyoutanchor-element.htm)\>

                                \<[Menu](menu-element.htm)\>

                                DOCS-LESSTHAN/MenuDOCS-GREATERTHAN

                            DOCS-LESSTHAN/FlyoutAnchorDOCS-GREATERTHAN

                            \<[GalleryButton](gallerybutton-element-group.htm)/\>

                            \<[Label](label-element.htm)/\>

                            \<[MRUSplitButton](mrusplitbutton-element.htm)\>

                                \<[Menu](menu-element.htm)\>

                                DOCS-LESSTHAN/MenuDOCS-GREATERTHAN

                            \<[Spinner](spinner-element.htm)\>

                                \<[Unit](unit-element-spinner.htm)\>

                                    \<[UnitAbbreviation](unitabbreviation-element.htm)/\>

                                DOCS-LESSTHAN/UnitDOCS-GREATERTHAN

                            DOCS-LESSTHAN/SpinnerDOCS-GREATERTHAN

                            \<[SplitButton](splitbutton-element.htm)\>

                                \<[Menu](menu-element.htm)\>

                                DOCS-LESSTHAN/MenuDOCS-GREATERTHAN

                            DOCS-LESSTHAN/SplitButtonDOCS-GREATERTHAN

                            \<[TextBox](textbox-element.htm)/\>

                            \<[ToggleButton](togglebutton-element.htm)/\>

                        DOCS-LESSTHAN/ControlsDOCS-GREATERTHAN

                    DOCS-LESSTHAN/GroupDOCS-GREATERTHAN

                DOCS-LESSTHAN/GroupsDOCS-GREATERTHAN

                \<[Scaling](scaling-element.htm)\>

                    \<[MaxSize](maxsize-element.htm)/\>

                    \<[Scale](scale-element.htm)/\>

                DOCS-LESSTHAN/ScalingDOCS-GREATERTHAN

            DOCS-LESSTHAN/TabDOCS-GREATERTHAN

        DOCS-LESSTHAN/TabsDOCS-GREATERTHAN

        \<[ContextualTabs](contextualtabs-element.htm)\>

            \<[ContextualGroup](contextualgroup-element.htm)\>

                \<[Tab](tab-element.htm)\>

                DOCS-LESSTHAN/TabDOCS-GREATERTHAN

            DOCS-LESSTHAN/ContextualGroupDOCS-GREATERTHAN

        DOCS-LESSTHAN/ContextualTabsDOCS-GREATERTHAN

    DOCS-LESSTHAN/RibbonDOCS-GREATERTHAN

    \<[Templates](templates-element.htm)\>

        \<[RibbonTemplates](ribbontemplates.htm)\>

            \<[GroupTemplate](grouptemplate-element.htm)\>

                \<[Layout](layout-element.htm)\>

                    \<[Section](section-element.htm)\>

                        \<[Row](row-element.htm)\>

                            \<[ControlRef](controlref-element.htm)/\>

                            \<[Strip](strip-element.htm)\>

                                \<[ControlRef](controlref-element.htm)/\>

                            DOCS-LESSTHAN/StripDOCS-GREATERTHAN

                            \<[OverflowArea](overflowarea-element.htm)/\>

                        DOCS-LESSTHAN/RowDOCS-GREATERTHAN

                    DOCS-LESSTHAN/SectionDOCS-GREATERTHAN

                    \<[OverflowSection](overflowsection-element.htm)/\>

                DOCS-LESSTHAN/LayoutDOCS-GREATERTHAN

            DOCS-LESSTHAN/GroupTemplateDOCS-GREATERTHAN

        DOCS-LESSTHAN/RibbonTemplatesDOCS-GREATERTHAN

    DOCS-LESSTHAN/TemplatesDOCS-GREATERTHAN

    \<[QAT](qat-element.htm)\>

        \<[Controls](controls-element-group.htm)\>

        DOCS-LESSTHAN/ControlsDOCS-GREATERTHAN

    DOCS-LESSTHAN/QATDOCS-GREATERTHAN

    \<[Jewel](jewel-element.htm)\>

        \<[Menu](menu-element.htm)\>

        DOCS-LESSTHAN/MenuDOCS-GREATERTHAN

    DOCS-LESSTHAN/JewelDOCS-GREATERTHAN

DOCS-LESSTHAN/CommandUIDOCS-GREATERTHAN


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="link">[CommandUIDefinition
Element](commanduidefinition-element.htm)</span>

#### Other resources

[Building Block: Server
Ribbon](http://msdn.microsoft.com/library/035cdaf8-29f3-45ca-b5de-461bb65797e8(Office.15).aspx)








