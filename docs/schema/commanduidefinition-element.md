---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4088b220-62d1-453f-ad95-859affffd4e4
---

# CommandUIDefinition element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains elements that define a user interface.

## Definition

```XML
<CommandUIDefinition
  Location = "Text"
 />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Location**</p></td>
<td align="left"><p>Optional **Text**. Specifies the location of this command. See <a href="http://msdn.microsoft.com/library/9ca6e4cc-9c51-4579-8f57-cf5aa59de5fd(Office.15).aspx">Default Server Ribbon Customization Locations</a> for a list of the default locations that are used in Microsoft SharePoint Foundation.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="button-element.md">Button</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="checkbox-element.md">CheckBox</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="combobox-element.md">ComboBox</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="colorpicker-element.md">ColorPicker</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="contextualgroup-element.md">ContextualGroup</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="contextualtabs-element.md">ContextualTabs</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="controls-element-commanduidefinition.md">Controls</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="dropdown-element.md">DropDown</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="flyoutanchor-element.md">FlyoutAnchor</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="gallery-element.md">Gallery</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="gallerybutton-element-group.md">GalleryButton</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="grouptemplate-element.md">GroupTemplate</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="group-element-ribbon.md">Group</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="groups-element.md">Groups</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="inserttable-element.md">InsertTable</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="label-element.md">Label</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="mrusplitbutton-element.md">MRUSplitButton</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="maxsize-element.md">MaxSize</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="menu-element.md">Menu</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="menusection-element.md">MenuSection</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="qat-element.md">QAT</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ribbon-element.md">Ribbon</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="scale-element.md">Scale</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="scaling-element.md">Scaling</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spinner-element.md">Spinner</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="splitbutton-element.md">SplitButton</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="tab-element.md">Tab</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="tabs-element.md">Tabs</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="textbox-element.md">TextBox</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="togglebutton-element.md">ToggleButton</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="commanduiextension-element.md">CommandUIExtension</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 1</p>
<p>Maximum: unbounded</p></td>
</tr>
</tbody>
</table>

## Example

The following example adds a new **My Custom Tab** tab with a group and three buttons on a document library.

```XML
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <CustomAction
        Id="MyCustomRibbonTab"
        Location="CommandUI.Ribbon.ListView"
        RegistrationId="101" 
        RegistrationType="List">
          <CommandUIExtension>
            <CommandUIDefinitions>
              <CommandUIDefinition
                Location="Ribbon.Tabs._children">
                <Tab 
                  Id="Ribbon.CustomTabExample" 
                  Title="My Custom Tab" 
                  Description="This holds my custom commands!" 
                  Sequence="501">
                <Scaling
                  Id="Ribbon.CustomTabExample.Scaling">
                  <MaxSize
                    Id="Ribbon.CustomTabExample.MaxSize" 
                    GroupId="Ribbon.CustomTabExample.CustomGroupExample" 
                    Size="OneLargeTwoMedium"/>
                  <Scale 
                    Id="Ribbon.CustomTabExample.Scaling.CustomTabScaling"
                    GroupId="Ribbon.CustomTabExample.CustomGroupExample" 
                    Size="OneLargeTwoMedium" />
                </Scaling>
                <Groups Id="Ribbon.CustomTabExample.Groups">
                  <Group 
                    Id="Ribbon.CustomTabExample.CustomGroupExample" 
                    Description="This is a custom group!" 
                    Title="Custom Group" 
                    Sequence="52" 
                    Template="Ribbon.Templates.CustomTemplateExample">
                    <Controls Id="Ribbon.CustomTabExample.CustomGroupExample.Controls">
                      <Button 
                        Id="Ribbon.CustomTabExample.CustomGroupExample.HelloWorld" 
                        Command="CustomTabExample.HelloWorldCommand" 
                        Sequence="15" 
                        Description="Says hello to the World!" 
                        LabelText="Hello, World!" 
                        TemplateAlias="cust1"/>
                      <Button 
                        Id="Ribbon.CustomTabExample.CustomGroupExample.GoodbyeWorld" 
                        Command="CustomTabExample.GoodbyeWorldCommand" 
                        Sequence="17" 
                        Description="Says good-bye to the World!" 
                        LabelText="Good-bye, World!" 
                        TemplateAlias="cust2"/>
                      <Button 
                        Id="Ribbon.CustomTabExample.CustomGroupExample.LoveWorld" 
                        Command="CustomTabExample.LoveWorldCommand" 
                        Sequence="19" 
                        Description="Says I love the World!" 
                        LabelText="I love you, World!" 
                        TemplateAlias="cust3"/>
                    </Controls>
                  </Group>
                </Groups>
              </Tab>
            </CommandUIDefinition>
            <CommandUIDefinition Location="Ribbon.Templates._children">
              <GroupTemplate Id="Ribbon.Templates.CustomTemplateExample">
                <Layout 
                  Title="OneLargeTwoMedium" 
                  LayoutTitle="OneLargeTwoMedium">
                  <Section Alignment="Top" Type="OneRow">
                    <Row>
                      <ControlRef DisplayMode="Large" TemplateAlias="cust1" />
                    </Row>
                  </Section>
                  <Section Alignment="Top" Type="TwoRow">
                    <Row>
                      <ControlRef DisplayMode="Medium" TemplateAlias="cust2" />
                    </Row>
                    <Row>
                      <ControlRef DisplayMode="Medium" TemplateAlias="cust3" />
                    </Row>
                  </Section>
                </Layout>
              </GroupTemplate>
            </CommandUIDefinition>
          </CommandUIDefinitions>
          <CommandUIHandlers>
            <CommandUIHandler
              Command="CustomTabExample.HelloWorldCommand" 
              CommandAction="javascript:alert('Hello, world!');" />
            <CommandUIHandler 
              Command="CustomTabExample.GoodbyeWorldCommand" 
              CommandAction="javascript:alert('Good-bye, world!');" />
            <CommandUIHandler 
              Command="CustomTabExample.LoveWorldCommand" 
              CommandAction="javascript:alert('I love you, world!');" />
          </CommandUIHandlers>
        </CommandUIExtension>
      </CustomAction>
    </Elements>
```

<br/>







