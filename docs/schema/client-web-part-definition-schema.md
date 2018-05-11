---
manager: soliver
ms.date: 12/7/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8924f546-44db-4308-90f9-8b5d9b2ffa4f
---

# Client Web Part Definition schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The Client web part is the backing structure of app parts. App parts are defined in XML documents and deployed as part of a Feature.

## XML schema definition

An XML document that defines Client web parts must validate with the schema defined in the file wss.xsd. This file is located on the following path: 

`%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\XML`

## Elements

[Elements](elements-element-custom-action.md)

[ClientWebPart](customactiongroup-element-custom-action.md)

### Remarks

The [ClientWebPart](customactiongroup-element-custom-action.md) element contains the core definition for a Client web part. A Client web part is a UI extensibility mechanism that lets apps show information in the host web. You can render the HTML contents of a page in an **IFrame** embedded in a SharePoint page.

You define the page to be rendered inside the **IFrame** using the Src attribute of the **Content** element. The target page must be allowed to be displayed in a frame, otherwise the SharePoint page displays the following error: **This content cannot be displayed in a frame**. 

Some pages contain an **X-FRAME-OPTIONS** http header as a mechanism to prevent
[ClickJacking](https://blogs.msdn.microsoft.com/ieinternals/2010/03/30/combating-clickjacking-with-x-frame-options/) attacks. You must carefully evaluate if the page supports a scenario that could be targeted by a ClickJacking attack, such as a bank transaction page or a purchase page in an online store. After assessing the risk of allowing your target page to be framed by external pages, you can remove the **X-FRAME-OPTIONS** http header to display your page in a Client web part.

By default, SharePoint pages include an **X-FRAME-OPTIONS** http header. If you are using a SharePoint page as the target for your Client web part, you can remove the **X-FRAME-OPTIONS** header by adding the AllowFraming web part. 

The following code snippet shows you how to add an AllowFraming web part to your SharePoint page:

```xml
    <asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
        <WebPartPages:AllowFraming ID="AllowFraming1" runat="server" />
        <div>
            Your content
        </div>
    </asp:Content>
```

You can add custom properties to your Client web part. You define the custom properties in the Elements.xml file of the feature. There are four types of custom properties:

-   string
-   integer
-   boolean
-   enumeration

You can detect when the user is editing your Client web part by using the **\_editMode\_** token. The **\_editMode\_** token returns 1 if the Client web part is in edit mode and 0 otherwise.

The target page can dynamically resize the Client web part's **IFrame**. You can use JavaScript to issue a **postmessage** with the desired height and width. For a code sample that shows you how to resize an app part, see [Resize app parts dynamically in apps for SharePoint](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Resize-app-594acc88).

Client web parts don't support web part connections.

## Example

The following example shows an XML file that declares a Client web part. For an article that shows the steps for creating and deploying an app part, see [Create add-in parts to install with your SharePoint Add-in](../sp-add-ins/create-add-in-parts-to-install-with-your-sharepoint-add-in.md).

```XML
    <?xml version="1.0" encoding="UTF-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
        <ClientWebPart
            Title="Basic app part"
            Name="Basic app part"
            Description="This is a basic app part with custom properties." >
            
            <!--  The properties are passed through the query string 
                    using the following notation: _propertyName_
                    in the Src property of the Content element  
              -->
            <Content
                Src="~remoteAppUrl/AppPartContent.aspx?strProp=_strProp_&amp;intProp=_intProp_&amp;boolProp=_boolProp_&amp;enumProp=_enumProp_&amp;editmode=_editMode_"
                Type="html"/>
            <Properties>
                <Property
                    Name="strProp"
                    Type="string"
                    RequiresDesignerPermission="true"
                    DefaultValue="String default value"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type string.">
                </Property>
                <Property
                    Name="intProp"
                    Type="int"
                    RequiresDesignerPermission="true"
                    DefaultValue="0"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type integer.">
                </Property>
                <Property
                    Name="boolProp"
                    Type="boolean"
                    RequiresDesignerPermission="true"
                    DefaultValue="false"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type boolean.">
                </Property>
                <Property
                    Name="enumProp"
                    Type="enum"
                    RequiresDesignerPermission="true"
                    DefaultValue="1st"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type enum.">
                    <EnumItems>
                        <EnumItem WebDisplayName="First option" Value="1st"/>
                        <EnumItem WebDisplayName="Second option" Value="2nd"/>
                        <EnumItem WebDisplayName="Third option" Value="3rd"/>
                    </EnumItems>
                </Property>
            </Properties>
        </ClientWebPart>
    </Elements>
```

## See also

- [CustomAction](https://msdn.microsoft.com/en-us/library/office/ms458635.aspx)
- [UX design for SharePoint Add-ins](../sp-add-ins/ux-design-for-sharepoint-add-ins.md)









