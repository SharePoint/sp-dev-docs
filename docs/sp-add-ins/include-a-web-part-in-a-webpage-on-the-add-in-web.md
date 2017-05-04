
# Include a Web Part in a webpage on the add-in web
Learn how to include a Web Part on a page in a SharePoint Add-in.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint#bk_newname).
 

You can include an out-of-the-box Web Part in a page in the add-in web of a SharePoint Add-in, but it is important that you do this in a way that won't cause problems if you ever need to update the add-in.
 

A code sample that illustrates the guidance of this topic is at:  [OfficeDev/Core.WebPartOnAppWebPage](https://github.com/OfficeDev/PnP/tree/master/Samples/Core.WebPartOnAppWebPage)
 


## Prerequisites

For the prerequisites, see  [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins).
 

 

## Add a Web Part to a page


 

 

1. Create a SharePoint-hosted SharePoint Add-in project in Visual Studio. For details, see  [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins).
    
 
2. Open the aspx file to which you want to add a Web Part. This topic uses Default.aspx as an example. 
    
 
3. Add a  **WebPartZone** to the **<asp:Content>** element where you want the Web Part with markup like the following. Typically, you want to add it to the **<asp:Content>** whose **ContentPlaceHolderId** is `PlaceHolderMain`. The following is an example.
    
```XML
  <asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
  <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" 
      ID="HomePage1" Title="loc:full" />
</asp:Content>

```


     **Caution**  It is possible to add a Web Part element, such as  **<WebPartPages:XsltListViewWebPart>** as a child of the **WebPartZone**. But this is generally a bad practice in a SharePoint Add-in. If the add-in ever needs to be updated, a Web Part element inserted in the aspx file can cause the update to fail in some scenarios with the message "A web part with this ID has already been added to this page." We recommend that you add web parts to the elements manifest for the page as described later of this procedure.
4. Open the element manifest file for the page. This is usually called elements.xml and is located in the same project folder as the aspx file.
    
 
5. In the  **File** element for the page, add a child **AllUsersWebPart** element and set its **WebPartZoneID** to the value of the Web Part zone that you created on the page as this example shows.
    
```
  <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <Module Name="Pages">
    <File Path="Pages\Default.aspx" Url="Pages/Default.aspx" ReplaceContent="TRUE" >
      <AllUsersWebPart WebPartZoneID="HomePage1" WebPartOrder="1">

      </AllUsersWebPart>
    </File>
  </Module>
</Elements>

```

6. Add a  **CDATA** element as a child of the **AllUsersWebPart**, then add a  **webParts** element as a child of the **CDATA**, as shown in this example. 
    
```
  <AllUsersWebPart WebPartZoneID="HomePage1" WebPartOrder="1">
  <![CDATA[
    <webParts>

    </webParts>
  ]]>
</AllUsersWebPart>
```

7. Add  **webPart** markup as a child of the **webParts** element. The following is an example that adds an **XsltListViewWebPart**. It assumes that a custom list called "Test List" is part of the same add-in project. For information about how to add a custom list to an add-in web, see  [Create a provider-hosted add-in that includes a custom SharePoint list and content type](create-a-provider-hosted-add-in-that-includes-a-custom-sharepoint-list-and-content-type). 
    
     **Note**   Note that the Web Part does not have an ID property. It is a best practice to include an explicit ID for the Web Part only in the two cases where it is really required: The Web Part is being added to a SharePoint wiki page. The Web Part is one of two or more Web Parts that will be connected.

```
  <webParts>
  <webPart xmlns="http://schemas.microsoft.com/WebPart/v3">
    <metaData>
      <type name="Microsoft.SharePoint.WebPartPages.XsltListViewWebPart, 
                   Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, 
                   PublicKeyToken=71e9bce111e9429c" />
    </metaData>
    <data>
      <properties>
        <property name="ListUrl">Lists/{TestList}</property>
        <property name="IsIncluded">True</property>
        <property name="NoDefaultStyle">True</property>
        <property name="Title">{Test List}</property>
        <property name="PageType">PAGE_NORMALVIEW</property>
        <property name="Default">False</property>
        <property name="ViewContentTypeId">0x</property>
      </properties>
    </data>
  </webPart>
</webParts>
```

8. Press F5 to debug the add-in. You should see the Web Part on the page.
    
 

