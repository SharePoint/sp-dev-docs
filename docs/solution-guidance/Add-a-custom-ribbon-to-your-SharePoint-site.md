---
title: Add a custom ribbon to your SharePoint site
ms.date: 11/03/2017
---
# Add a custom ribbon to your SharePoint site

Add or remove a custom ribbon on your SharePoint site. Add JavaScript event handlers using the embed JavaScript technique to handle your custom ribbon's events.

_**Applies to:** add-ins for SharePoint | SharePoint 2013 | SharePoint Online_

The  [Core.RibbonCommands](https://github.com/SharePoint/PnP/tree/master/Samples/Core.RibbonCommands) code sample shows you how to add a custom ribbon to a SharePoint site. Use this solution if you want to:

- Add a custom ribbon, group, or button to your SharePoint site or list.
    
- Display a custom ribbon for specific content types, sites, or lists.

**Note**  This code sample shows how to call the JavaScript functions that handle events raised by the ribbon's buttons. This code sample does not provide the implementation of the JavaScript event handler functions for the ribbon's buttons. To implement the JavaScript event handler functions, use the embed JavaScript technique to embed the JavaScript event handler functions on all pages where your custom ribbon appears. For more information about embedding JavaScript, see  [Customize your SharePoint site UI by using JavaScript](Customize-your-SharePoint-site-UI-by-using-JavaScript.md).

## Before you begin
<a name="sectionSection0"> </a>

To get started, download the  [Core.RibbonCommands](https://github.com/SharePoint/PnP/tree/master/Samples/Core.RibbonCommands) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Using the Core.RibbonCommands app
<a name="sectionSection1"> </a>

When you run this code sample, on the start page in  **Register the ribbon**, choose  **Add Ribbon**. When the page refreshes, view the custom ribbon by choosing  **Documents** > **Custom Tab**.

This code sample defines a custom ribbon by using Models\RibbonCommands.xml. RibbonCommands.xml defines custom ribbon groups, buttons, and UI event handlers for the ribbon. For more information, see [Customizing and Extending the SharePoint 2010 Server Ribbon](https://msdn.microsoft.com/library/office/gg552606%28v=office.14%29.aspx) and [Server Ribbon XML](https://msdn.microsoft.com/library/office/ff407290%28v=office.14%29.aspx).

The custom ribbon displays on all sites and lists on the host web because  **RegistrationId="0x01"** and **RegistrationType="ContentType"**.  **RegistrationId="0x01"** and **RegistrationType="ContentType"** specify that the ribbon will appear for all content types that inherit from type **"0x01"**, which are content types that inherit from the  **Item** class. To apply your ribbon to a custom content type, replace "0x01" with your custom content type's ID. To apply your ribbon to a list, change the value of RegistrationType to **List**. 

**Note**  The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```XML
<?xml version="1.0" encoding="utf-8" ?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <CustomAction
    Id="CustomCustomRibbonTab"
    Location="CommandUI.Ribbon.ListView"
    RegistrationId="0x01"
    RegistrationType="ContentType"
    Sequence="100"
    >
    <CommandUIExtension>
      <CommandUIDefinitions>
        <CommandUIDefinition
          Location="Ribbon.Tabs._children">
          <Tab
            Id="Ribbon.CustomRibbonTab"
            Title="Custom Tab"
            Description="Custom Tab Description"
            Sequence="501">
            <Scaling
              Id="Ribbon.CustomRibbonTab.Scaling">
              <MaxSize
                Id="Ribbon.CustomRibbonTab.MaxSize"
                GroupId="Ribbon.CustomRibbonTab.ManageCustomGroup"
                Size="OneLargeTwoMedium"/>
              <MaxSize
                Id="Ribbon.CustomRibbonTab.TabTwoMaxSize"
                GroupId="Ribbon.CustomRibbonTab.NewOpenCustomGroup"
                Size="TwoLarge" />
              <Scale
                Id="Ribbon.CustomRibbonTab.Scaling.CustomTabScaling"
                GroupId="Ribbon.CustomRibbonTab.ManageCustomGroup"
                Size="OneLargeTwoMedium" />
              <Scale
                Id="Ribbon.CustomRibbonTab.Scaling.CustomSecondTabScaling"
                GroupId="Ribbon.CustomRibbonTab.NewOpenCustomGroup"
                Size="TwoLarge" />
            </Scaling>
            <Groups Id="Ribbon.CustomRibbonTab.Groups">
              <Group
                Id="Ribbon.CustomRibbonTab.ManageCustomGroup"
                Description="Group to Custom Functions"
                Title="Manage Item"
                Sequence="52"
                Template="Ribbon.Templates.CustomTemplate">
                <Controls Id="Ribbon.CustomRibbonTab.ManageCustomGroup.Controls">
                  <Button
                    Id="Ribbon.CustomRibbonTab.ManageCustomGroup.Accept"
                    Command="CustomRibbonTab.AcceptCustomCommand"
                    Sequence="15"
                    Image32by32="{SiteUrl}/_layouts/15/1033/Images/formatmap32x32.png?rev=23"
                    Image32by32Top="-68"
                    Image32by32Left="-272"
                    Description="Accept Item"
                    LabelText="Accept"
                    TemplateAlias="AWR" />
                  <Button
                    Id="Ribbon.CustomRibbonTab.ManageCustomGroup.Reject"
                    Command="CustomRibbonTab.RejectCustomCommand"
                    Sequence="17"
                    Image16by16="{SiteUrl}/_layouts/15/1033/Images/formatmap16x16.png?rev=23"
                    Image16by16Top="-216"
                    Image16by16Left="-290"
                    Description="Reject Item"
                    LabelText="Reject"
                    TemplateAlias="RWR"/>
                  <Button
                    Id="Ribbon.CustomRibbonTab.ManageCustomGroup.Verify"
                    Command="CustomRibbonTab.VerifyCustomCommand"
                    Sequence="19"
                    Image16by16="{SiteUrl}/_layouts/15/1033/Images/formatmap16x16.png?rev=23"
                    Image16by16Top="-126"
                    Image16by16Left="-144"
                    Description="Verify Item"
                    LabelText="Verify"
                    TemplateAlias="ACWR"/>
                  <Button
                   Id="Ribbon.CustomRibbonTab.ManageCustomGroup.Close"
                   Command="CustomRibbonTab.CloseCustomCommand"
                   Sequence="19"
                   Image32by32="{SiteUrl}/_layouts/15/1033/Images/formatmap32x32.png?rev=23"
                   Image32by32Top="-0"
                   Image32by32Left="-34"
                   Description="Close Item"
                   LabelText="Close"
                   TemplateAlias="CWR"/>
                  <Button
                   Id="Ribbon.CustomRibbonTab.ManageCustomGroup.Copy"
                   Command="CustomRibbonTab.CopyCustomCommand"
                   Sequence="19"
                   Image32by32="{SiteUrl}/_layouts/15/1033/Images/formatmap32x32.png?rev=23"
                   Image32by32Top="-442"
                   Image32by32Left="-67"
                   Description="Copy Item"
                   LabelText="Copy"
                   TemplateAlias="CPWR"/>
                </Controls>
              </Group>
              <Group
                Id="Ribbon.CustomRibbonTab.NewOpenCustomGroup"
                Description="Group to manage item"
                Title="New &amp;amp; Open"
                Sequence="53"
                Template="Ribbon.Templates.CustomTemplate">
                <Controls Id="Ribbon.CustomRibbonTab.NewOpenCustomGroup.Controls">
                  <Button
                    Id="Ribbon.CustomRibbonTab.NewOpenCustomGroup.New"
                    Command="CustomRibbonTab.NewCustomCommand"
                    Sequence="15"
                    Image32by32="{SiteUrl}/_layouts/15/1033/Images/formatmap32x32.png?rev=23"
                    Image32by32Top="-33"
                    Image32by32Left="-66"
                    Description="New Item"
                    LabelText="New"
                    TemplateAlias="LOR"/>
                  <Button
                   Id="Ribbon.CustomRibbonTab.NewOpenCustomGroup.Open"
                   Command="CustomRibbonTab.OpenCustomCommand"
                   Sequence="15"
                   Image32by32="{SiteUrl}/_layouts/15/1033/Images/formatmap32x32.png?rev=23"
                   Image32by32Top="-170"
                   Image32by32Left="-138"
                   Description="Open Item"
                   LabelText="Open"
                   TemplateAlias="LORS"/>
                </Controls>
              </Group>
            </Groups>
          </Tab>
        </CommandUIDefinition>
        <CommandUIDefinition Location="Ribbon.Templates._children">
          <GroupTemplate Id="Ribbon.Templates.CustomTemplate">
            <Layout
              Title="OneLargeTwoMedium"
              LayoutTitle="OneLargeTwoMedium">
              <Section Alignment="Top" Type="OneRow">
                <Row>
                  <ControlRef DisplayMode="Large" TemplateAlias="AWR" />
                </Row>
              </Section>
              <Section Alignment="Top" Type="TwoRow">
                <Row>
                  <ControlRef DisplayMode="Medium" TemplateAlias="RWR" />
                </Row>
                <Row>
                  <ControlRef DisplayMode="Medium" TemplateAlias="ACWR" />
                </Row>
              </Section>
              <Section Alignment="Top" Type="OneRow">
                <Row>
                  <ControlRef DisplayMode="Large" TemplateAlias="CWR" />
                </Row>
              </Section>
              <Section Alignment="Top" Type="OneRow">
                <Row>
                  <ControlRef DisplayMode="Large" TemplateAlias="CPWR" />
                </Row>
              </Section>
            </Layout>
            <Layout
             Title="TwoLarge"
             LayoutTitle="TwoLarge">
              <Section Alignment="Top" Type="OneRow">
                <Row>
                  <ControlRef DisplayMode="Large" TemplateAlias="LOR" />
                </Row>
              </Section>
              <Section Alignment="Top" Type="OneRow">
                <Row>
                  <ControlRef DisplayMode="Large" TemplateAlias="LORS" />
                </Row>
              </Section>
            </Layout>
          </GroupTemplate>
        </CommandUIDefinition>
      </CommandUIDefinitions>
      <CommandUIHandlers>
        <CommandUIHandler
          Command="CustomRibbonTab.AcceptCustomCommand"
          CommandAction="javascript:GetCurrentItem('AP');"/>
        <CommandUIHandler
          Command="CustomRibbonTab.RejectCustomCommand"
          CommandAction="javascript:GetCurrentItem('RJ');"/>
        <CommandUIHandler
          Command="CustomRibbonTab.VerifyCustomCommand"
          CommandAction="javascript:GetCurrentItem('AK');"/>
        <CommandUIHandler
          Command="CustomRibbonTab.NewCustomCommand"
          CommandAction="javascript:AddNewCustom();"/>
        <CommandUIHandler
          Command="CustomRibbonTab.OpenCustomCommand"
          CommandAction="javascript:OpenExistingCustom();"/>
        <CommandUIHandler
          Command="CustomRibbonTab.CloseCustomCommand"
          CommandAction="javascript:CloseExistingCustom();"/>
        <CommandUIHandler
          Command ="CustomRibbonTab.CopyCustomCommand"
          CommandAction="Javascript:CopyCustom();"/>
      </CommandUIHandlers>
    </CommandUIExtension>
  </CustomAction>
</Elements>
```

**Note**  If you use the embed JavaScript technique to implement event handling for your ribbons' buttons, your JavaScript file must implement the methods defined in the  **CommandUIHandler** elements. For example, your embedded JavaScript file should implement functions like **GetCurrentItem** and **AddNewCustom**.

**InitializeButton_Click** in Default.aspx performs the following tasks:

1. Calls  **GetCustomActionXmlNode** to read the XML file and return the **CustomAction** object defined in RibbonCommands.xml. The **CustomAction** object contains the ribbon customization markup.
    
2. Reads several elements and attribute values from the  **CustomAction** object.
    
3. Converts the  **CommandUIExtension** element (which defines the ribbon groups, buttons, and UI event handlers) to a string called **xmlContent**.
    
4.  Creates a new custom action by using **clientContext.Web.UserCustomActions.Add**.
    
5. Adds the ribbon customization markup (in  **xmlContent**) to the SharePoint site using the  **CustomAction.CommandUIExtension**.
    
6. Registers the custom ribbon by setting the  **CustomAction.RegistrationId** and **CustomAction.RegistrationType** to the attribute values of the **CustomAction** object read in step 2.

```C#
 protected void InitializeButton_Click(object sender, EventArgs e) {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);

            using (var clientContext = spContext.CreateUserClientContextForSPHost()) {
                clientContext.Load(clientContext.Web, web => web.UserCustomActions);
                clientContext.ExecuteQuery();

                // Get the XML elements file and get the CommandUIExtension node.
                var customActionNode = GetCustomActionXmlNode();
                var customActionName = customActionNode.Attribute("Id").Value;
                var commandUIExtensionNode = customActionNode.Element(ns + "CommandUIExtension");
                var xmlContent = commandUIExtensionNode.ToString();
                var location = customActionNode.Attribute("Location").Value;
                var registrationId = customActionNode.Attribute("RegistrationId").Value;
                var registrationTypeString = customActionNode.Attribute("RegistrationType").Value;
                var registrationType = (UserCustomActionRegistrationType)Enum.Parse(typeof(UserCustomActionRegistrationType), registrationTypeString);

                var sequence = 1000;
                if (customActionNode.Attribute(ns + "Sequence") != null) {
                    sequence = Convert.ToInt32(customActionNode.Attribute(ns + "Sequence").Value);
                }

                // Determine if the custom action exists already.
                var customAction = clientContext.Web.UserCustomActions.FirstOrDefault(uca => uca.Name == customActionName);

                // If the custom action does not exist, create it.
                if (customAction == null) {
                    // create the ribbon.
                    customAction = clientContext.Web.UserCustomActions.Add();
                    customAction.Name = customActionName;
                }

                // Set custom action properties.
                customAction.Location = location;
                customAction.CommandUIExtension = xmlContent; // CommandUIExtension xml
                customAction.RegistrationId = registrationId;
                customAction.RegistrationType = registrationType;
                customAction.Sequence = sequence;

                customAction.Update();
                clientContext.Load(customAction);
                clientContext.ExecuteQuery();
            }
        }
```

## Additional resources
<a name="bk_addresources"> </a>

-  [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
-  [Customize your SharePoint site UI by using JavaScript](Customize-your-SharePoint-site-UI-by-using-JavaScript.md)
    
-  [Customizing and Extending the SharePoint 2010 Server Ribbon](https://msdn.microsoft.com/library/office/gg552606%28v=office.14%29.aspx)
    
-  [Server Ribbon XML](https://msdn.microsoft.com/library/office/ff407290%28v=office.14%29.aspx)
    
