---
title: Create a provider-hosted add-in that includes a custom SharePoint list and content type
description: Create a SharePoint Add-in that combines a cloud-hosted web application with custom SharePoint-hosted list templates, list instances, and custom content types by using the Office Developer Tools for Visual Studio. 
ms.date: 12/26/2017
ms.prod: sharepoint
---


# Create a provider-hosted add-in that includes a custom SharePoint list and content type

Create a SharePoint Add-in that combines a cloud-hosted web application with custom SharePoint-hosted list templates, list instances, and custom content types by using the Office Developer Tools for Visual Studio. Learn how to interact with SharePoint add-in webs by using the REST/OData web service, and how to implement OAuth in a SharePoint Add-in.

Most classic SharePoint components, such as custom content types, custom list definitions, and workflows, can be included in a cloud-hosted SharePoint Add-in. The simple example in this article contains the following:

- An add-in web with:
    
  - Some custom site columns
  
  - A custom content type that uses the custom columns
  
  - A custom list template that uses the custom content type
  
  - A list instance based on the custom list definition
  
- An ASP.NET web application that reads data from the list instance

<a name="Prerequisites"> </a>

## Prerequisites for creating this SharePoint Add-in

- [Visual Studio](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio)

- Visual Studio includes the **Microsoft Office Developer Tools for Visual Studio**, but sometimes a version of the tools is released between updates of Visual Studio. To be sure that you have the latest version of the tools, run the [installer for Office Developer Tools for Visual Studio 2013](http://aka.ms/OfficeDevToolsForVS2013) or the [installer for Office Developer Tools for Visual Studio 2015](http://aka.ms/OfficeDevToolsForVS2015). 

- A SharePoint installation for testing and debugging
    
  - This can be on the same computer as your development computer, or you can develop with a remote SharePoint installation. If you work with a remote installation, you need to install the client object model redistributable on the target installation. It is available as a redistributable package on the Microsoft Download Center. Search for "SharePoint Server 2013 Client Components SDK" or "SharePoint Online Client Components SDK". 
  
  - The test SharePoint website must be created from the **Developer Site** site definition (which you can create in Central Administration).
  
  - Your remote web application communicates with the add-in web by using either JavaScript and the [cross-domain library](access-sharepoint-data-from-add-ins-using-the-cross-domain-library.md) or [OAuth](authorization-and-authentication-of-sharepoint-add-ins.md). If OAuth is used, as it is in the continuing example of this article, the SharePoint installation must be configured to use OAuth.
    
  > [!NOTE] 
  > For guidance about how to set up a development environment that fits your needs, see [Two types of SharePoint Add-ins: SharePoint-hosted and provider-hosted](sharepoint-add-ins.md#two-types-of-sharepoint-add-ins-sharepoint-hosted-and-provider-hosted).

### Core concepts to know for creating an add-in

Before you create your first add-in, you should have a basic understanding of what SharePoint Add-ins are and the differences between SharePoint-hosted and provider-hosted SharePoint Add-ins. The articles in the following table should give you that understanding.

|**Article title**|**Description**|
|:-----|:-----|
| [SharePoint Add-ins](sharepoint-add-ins.md)|Learn about the new add-in model in SharePoint that enables you to create add-ins, which are small, easy-to-use solutions for end users.|
| [Important aspects of the SharePoint Add-in architecture and development landscape](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscap.md)|Learn about aspects of the architecture of SharePoint Add-ins and the model for SharePoint Add-ins, including the add-in hosting options, user interface (UI) options, deployment system, security system, and life cycle.|
| [Choose patterns for developing and hosting your SharePoint Add-in](choose-patterns-for-developing-and-hosting-your-sharepoint-add-in.md)|Learn about the various ways that you can host SharePoint Add-ins.|

<a name="Develop"> </a>

## Develop the SharePoint Add-in

In the procedures of this section, you create a SharePoint Add-in that includes an add-in web with SharePoint components and a remote web application on your development machine.

### To set up the Visual Studio solution and its elements

1. In Visual Studio, create an **Add-in for SharePoint** project from the **Office SharePoint | Add-ins** node (under either **C#** or **Visual Basic**) in the templates tree of the New Project Wizard. Select the **Provider-hosted** hosting option. In the continuing example of this article, C# is used as the language, and **LocalTheater** is the project name.

2. In the wizard, select **Finish**.

3. Open the AppManifest.xml file in the manifest designer. The **Title** element has the project name as its default value. Replace it with something more friendly because this is the name of the add-in that users see in the UI.

4. Specify a **Name** for the add-in. This is an internal name that must contain only ASCII characters and must contain no spaces; for example, LocalTheater.

5. Open the Web.config file in the web application project, and add the element `<customErrors mode="Off"/>` to the **system.web** element.

6. Check to see that references to the following assemblies are in the web application project. If your edition of Visual Studio did not add the references automatically, add them now.
    
    - **Microsoft.IdentityModel.dll**. This assembly is installed into the global assembly cache with Windows Identity Foundation (WIF). Because this is a .NET Framework 3.5 assembly, it is filtered out of the **Framework** node of the **Add Reference** dialog box by default. You can add a reference to it by browsing directly to the `C:\Program Files\Reference Assemblies\Microsoft\Windows Identity Foundation\v3.5` directory of your development computer.
    
    - **Microsoft.IdentityModel.Extensions.dll**. You can add a reference to it by browsing directly to the `C:\Program Files\Reference Assemblies\Microsoft\Microsoft Identity Extensions\1.0` folder of your development computer.
  
    - **System.IdentityModel.dll**. This assembly is part of the .NET Framework 4, and it appears on the **Assemblies | Framework** node of the **Add Reference** dialog box.

7. If your remote web application accesses information in the host web as well as in the add-in web, you must add an **AppPermissionRequests** element, with one or more child **AppPermissionRequest** elements, to the AppManifest.xml file. (The web application in the continuing example of this article accesses only the add-in web. Add-in principals automatically have all permissions needed to the add-in web, so the AppManifest.xml in the example does not have an **AppPermissionRequests** element.) For more information about add-in permission requests and how to add them, see [Add-in permissions in SharePoint](add-in-permissions-in-sharepoint.md).

### To add the SharePoint components

You add SharePoint components to an add-in exactly as you would add them to a classic farm solution. However, not every kind of SharePoint component can be included in a SharePoint Add-in. The purposes these components serve are accomplished in other ways in SharePoint Add-ins. 

For detailed information about what kinds of SharePoint components can be included in a SharePoint Add-in and how to include them in a project, see [Types of SharePoint components that can be in a SharePoint Add-in](host-webs-add-in-webs-and-sharepoint-components-in-sharepoint.md#TypesOfSPComponentsInApps).
    
For purposes of the continuing example, use the following procedures, which provide examples of using Visual Studio to add custom columns, content types, list templates, and list instances to a SharePoint Add-in.
    
### To create the custom column types

1. In **Solution Explorer**, add a SharePoint **Site Column** item to the SharePoint Add-in project with the name **Actor**.

2. In the elements.xml file for the new site column, edit the **Field** element so that it has the attributes and values shown in the following example, except that you should not change the GUID for the **ID** attribute from the value that Visual Studio generated for it. Don't forget the framing braces "{}".
    
  ```XML
      <Field ID="{generated GUID}" 
          Name="Actor" 
          Title="Actor" 
          DisplayName="Actor/Actress" 
          Group="Theater and Movies" 
          Description="The person cast, perhaps tentatively, in the role" 
          Type="Text" 
      />
  ```

3. Add another **Site Column** to the project named **CastingStatus**.

4. In the elements.xml file for the new site column, edit the **Field** element so that it has the attributes and values shown in the following example, except that you should not change the GUID for the **ID** attribute from the value Visual Studio generated for it.
    
  ```XML
    <Field ID="{generated GUID}" 
        Name="CastingStatus" 
        Title="CastingStatus"
        DisplayName="Casting Status" 
        Group="Theater and Movies" 
        Description="The current casting status of the role" 
        Type="Choice">
    </Field>
  ```

5. Because this is a Choice field, you must specify the possible choices, the order in which they should appear in the drop-down list when a user is making a choice, and the default choice. Add the following child markup to the **Field** element.
    
  ```XML
    <CHOICES>
        <CHOICE>Not Started</CHOICE>
        <CHOICE>Audition Scheduled</CHOICE>
        <CHOICE>Auditioned</CHOICE>
        <CHOICE>Role Offered</CHOICE>
        <CHOICE>Committed to Role</CHOICE>
    </CHOICES>
    <MAPPINGS>
        <MAPPING Value="1">Not Started</MAPPING>
        <MAPPING Value="2">Audition Scheduled</MAPPING>
        <MAPPING Value="3">Auditioned</MAPPING>
        <MAPPING Value="4">Role Offered</MAPPING>
        <MAPPING Value="5">Committed to Role</MAPPING>
    </MAPPINGS>
  <Default>Not Started</Default>
  ```

<br/>

### To create the custom content type

1. In **Solution Explorer**, add a SharePoint **Content Type** item to the SharePoint Add-in project with the name **ActingRole**. When prompted by the wizard to select the base content type, select **Item**, and then select **Finish**.

2. If the content type designer does not automatically open, select the **ActingRole** content type in **Solution Explorer** to open it.

3. Open the **Content Type** tab in the designer, and fill the text boxes as follows:
    
    - **Content Type Name**: ActingRole

    - **Description**: Represents a role in a play or movie.

    - **Group Name**: Theater and Movies

4. Verify that *none* of the check boxes on the tab are selected. The check box for **Inherits the columns from the parent Content Type** may be selected by default. *Be sure to clear it.* 

5. Open the **Columns** tab in the designer.

6. Use the grid to add the two site columns to the content type. They are listed in the drop-down list by their display names: **Actor/Actress** and **Casting Status**. (If they are not listed, you may not have saved the project since adding the custom site columns. Select **Save all**).

7. Save the file and close the designer.

8. The next step requires that you work directly in the raw XML for the content type, so in **Solution Explorer**, select the elements.xml file child of the **ActingRole** content type.

9. There are already **FieldRef** elements in the file for the two columns that you added. Add **FieldRef** elements for two built-in SharePoint columns as peers of the two that are already there. The following is the markup for the elements. *You must use these same GUIDs for the ID attribute because these are built-in field types with fixed IDs.*  Add these *above* the two **FieldRef** elements for the custom site columns.
      
  ```XML
    <FieldRef Name="LinkTitle" ID="{82642ec8-ef9b-478f-acf9-31f7d45fbc31}" DisplayName="Character" />
    <FieldRef Name="Title" ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" DisplayName="Character" />
  ```

  Note that we have given these fields the custom display name **Character** in the sense of a character in a play or movie.
    
### To create the custom list template and a list instance

1. Add a SharePoint **List** item to the SharePoint Add-in project with the name **CharactersInShow**. On the **Choose List Settings** page of the SharePoint Customization Wizard, leave the list display name at the default **CharactersInShow**, select the **Create a customizable list based on** option, and select **Default (Blank)** on the drop-down list. Select **Finish**.

2. When you complete the wizard, a **CharactersInShow** list template is created with a child list instance named **CharactersInShowInstance**. A list designer may have opened by default. It is used in a later step.

3. Open the elements.xml child of the **CharactersInShow** list template (*not* the elements.xml child of the **CharactersInShowInstance**).

4. Add spaces to the **DisplayName** attribute to make it friendlier: **Characters in Show**.

5. Set the **Description** attribute to **The characters in a play or movie.**

6. Leave all other attributes at their default, save the file, and close it.

7. If the list designer is not open, select the **CharactersInShow** node in **Solution Explorer**.

8. Open the **Columns** tab in the designer, and then select the **Content Types** button.

9. In the **Content Type Settings** dialog, add the **ActingRole** content type.

10. Select the **ActingRole** content type in the list of types, and then select the **Set as Default** button. 

11. Select the **Item** content type, right-click the small arrowhead that appears to the left of the content type name, and then select **Delete**.

12. Repeat the preceding step for the **Folder** content type, so that **ActingRole** is the only content type listed. Select **OK** to close the dialog.

13. Three columns are now in the list of columns. Select **Title**, right-click the small arrowhead that appears to the left of the content type name, and then select **Delete**. Only two columns should now be listed, **Actor/Actress** and **Casting Status**.

14. Open the **List** tab of the designer. This tab is used to set certain values for the list *instance*, not the list *template*.

15. Change the values on this tab to the following:
    
  - **Title**: Characters in Hamlet
  
  - **List URL**: Lists/CharactersInHamlet
  
  - **Description**: The characters in Hamlet and casting information.
  
  Leave the check boxes at their default status, save the file, and close the designer.

16. The list instance may have its old name in **Solution Explorer**. If so, open the shortcut menu for **CharactersInShowInstance**, select **Rename**, and change the name to **CharactersInHamlet**.

17. Open the schema.xml file.

18. There may be two **ContentType** elements in the file, one with the **Name** attribute value of **ActingRole** and another called **ListFieldsContentType**. Only the one called **ActingRole** belongs, so delete any other **ContentType** elements.
    
    > [!NOTE] 
    > There may not be line breaks between the **ContentType** elements, in which case it may appear at first that there is only one. Scroll to the right and check carefully for others.

19. The **Fields** element should have two **Field** elements (which are on a single line if there is no line break between them). One should exactly duplicate the **Field** element in the **Actor** site column elements.xml, and the other should exactly duplicate the **Field** element from the **CastingStatus** site column elements.xml. If there is not an exact match, including all child elements (such as the **CHOICES** and **MAPPINGS** elements), copy the **Field** element from the site column elements.xml file and paste it in place of the mismatched **Field** element in the schema.xml file.

20. Still in the schema.xml file, in the **View** element whose BaseViewID value is "0", replace the existing **ViewFields** element with the following markup. (Use exactly this GUID for the **FieldRef** named `LinkTitle`.)
    
  ```XML
    <ViewFields>
      <FieldRef Name="Title" ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" DisplayName="Character" />
      <FieldRef Name="Actor" ID="{GUID from the site column elements.xml}" />
      <FieldRef Name="CastingStatus" ID="{GUID from the site column elements.xml}" />
    </ViewFields>
  ```

21. Replace the two missing ID attribute values with the GUIDs in the respective site column elements.xml files. Don't forget the framing braces "{}". 

22. Still in the schema.xml file, in the **View** element whose BaseViewID value is "1", replace the existing **ViewFields** element with the following markup. (Use exactly this GUID for the **FieldRef** named `LinkTitle`.)
    
  ```XML
    <ViewFields>
      <FieldRef Name="LinkTitle" ID="{82642ec8-ef9b-478f-acf9-31f7d45fbc31}" DisplayName="Character" />
    </ViewFields>
  ```

23. Copy the two **FieldRef** elements for `Actor` and `CastingStatus` that you added to the previous view to this **ViewFields** element as siblings of the `LinkTitle` **FieldRef**.

24. Save and close the schema.xml file.

25. Open the elements.xml file that is a child of the list instance **CharactersInHamlet**.

26. Populate the list with some initial data by adding the following markup as a child of the **ListInstance** element.
        
  ```XML
      <Data>
        <Rows>
          <Row>
            <Field Name="Title">Hamlet</Field>
            <Field Name="Actor">Tom Higginbotham</Field>
            <Field Name="CastingStatus">Committed to Role</Field>
          </Row>
          <Row>
            <Field Name="Title">Claudius</Field>
            <Field Name="Actor"></Field>
            <Field Name="CastingStatus">Not Started</Field>
          </Row>
          <Row>
            <Field Name="Title">Gertrude</Field>
            <Field Name="Actor">Satomi Hayakawa</Field>
            <Field Name="CastingStatus">Auditioned</Field>
          </Row>
          <Row>
            <Field Name="Title">Ophelia</Field>
            <Field Name="Actor">Cassi Hicks</Field>
            <Field Name="CastingStatus">Committed to Role</Field>
          </Row>
          <Row>
            <Field Name="Title">The ghost</Field>
            <Field Name="Actor">Lertchai Treetawatchaiwong</Field>
            <Field Name="CastingStatus">Role Offered</Field>
          </Row>
        </Rows>
      </Data>
  ```

27. In **Solution Explorer**, select **Feature1** to open the Feature designer. In the designer, set the **Title** to **Theater and Movie Data Components**, and set the **Description** to **Site columns, content types, and list instances for data about theater and movies.**. Save the file, and close the designer.

28. If the **Feature1** in **Solution Explorer** has not been renamed, open its shortcut menu, select **Rename**, and rename it **TheaterAndMovieDataComponents**.

### To code the remote web application project

Develop the web application as you would any other web application for your preferred platform stack. For a Microsoft stack, you can use either the REST/OData web service or one of the client object models in SharePoint. For a non-Microsoft stack, you can use the REST/OData endpoints in SharePoint to perform create/read/update/delete (CRUD) operations on data in the add-in web.
    
> [!NOTE] 
> When you add a reference to an assembly to your web application project in Visual Studio, set the **Copy Local** property of the assembly to **True**, unless you know that the assembly is already installed on the web server, or you can ensure that it is installed before you deploy your add-in. The .NET Framework is installed on Microsoft Azure Web Roles and Azure Web Sites. But the SharePoint client assemblies and the various Microsoft managed code extensions and foundations are not installed. Office Developer Tools for Visual Studio automatically adds references to some assemblies commonly used in SharePoint Add-ins and sets the **Copy Local** property.

For the continuing example, you develop an ASP.NET web application. Take the following steps.
    
1. Open the Default.aspx file and replace the body element of the file with the following markup. The markup adds a **Get the Cast** button that, when chosen, reads the **Characters in Hamlet** list that is in the add-in web and presents its data in a [GridView](https://msdn.microsoft.com/EN-US/library/4w7ya1ts) control that appears only after the button is pressed.
    
  ```HTML
    <body >
      <form id="form1" runat="server">
        <div>
          <h2>Local Theater</h2>
        </div>
        <asp:Literal ID="Literal1" runat="server"><br /><br /></asp:Literal>
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Get the Cast"/>
        <asp:Literal ID="Literal2" runat="server"><br /><br /></asp:Literal>
        <asp:GridView ID="GridView1" runat="server" Caption="The Cast" ></asp:GridView>
      </form>
    </body>
  ```

  <br/>

2. Open the Default.aspx.cs file and add the following **using** statements to it.
      
  ```C#
    using Microsoft.SharePoint.Client;
    using Microsoft.IdentityModel.S2S.Tokens;
    using System.Net;
    using System.IO;
    using System.Xml;
    using System.Data;
    using System.Xml.Linq;
    using System.Xml.XPath;
    using Microsoft.SharePoint.Samples;
  ```

  The last of these statements refers to the namespace that is declared in the TokenHelper.cs file.

  <br/>
  
3. Add the following fields to the **Default** class.
    
  ```csharp
    SharePointContextToken contextToken;
    string accessToken;
    Uri sharepointUrl;
  ```

  <br/>

4. Replace the **Page_Load** method with the following code that uses the **TokenHelper** class to obtain tokens from the OAuth-compliant secure token server. The access token is then stored in the [CommandArgument](https://msdn.microsoft.com/EN-US/library/hykdabtx) property of the button for later retrieval by the button's click event handler.
      
  ```csharp
      protected void Page_Load(object sender, EventArgs e)
    {
        TokenHelper.TrustAllCertificates();
        string contextTokenString = TokenHelper.GetContextTokenFromRequest(Request);

        if (contextTokenString != null)
        {
            // Get context token
            contextToken = TokenHelper.ReadAndValidateContextToken(contextTokenString, Request.Url.Authority);

            // Get access token
            sharepointUrl = new Uri(Request.QueryString["SPAppWebUrl"]);
            accessToken = TokenHelper.GetAccessToken(contextToken, sharepointUrl.Authority).AccessToken;
            
            // Pass the access token to the button event handler.
            Button1.CommandArgument = accessToken;
        }
    }
  ```

  <br/>

5. Add the following event handler to the **Default** class. The handler begins by retrieving the access token that was stored in the button's [CommandArgument](https://msdn.microsoft.com/EN-US/library/hykdabtx) property.
    
  ```csharp
      protected void Button1_Click(object sender, EventArgs e)
    {
        // Retrieve the access token that the Page_Load method stored
        // in the button's command argument.
        string accessToken = ((Button)sender).CommandArgument;
    }
  ```

  <br/>

6. The handler needs to reacquire the modified add-in web URL on postbacks, so add the following code.
    
  ```csharp
        if (IsPostBack)
      {
          sharepointUrl = new Uri(Request.QueryString["SPAppWebUrl"]);
      }
  ```

  <br/>

7. Add the following line that uses one of the SharePoint REST/OData endpoints to obtain list data. In this example, the code reads the **Characters in Hamlet** list that is deployed to the add-in web. The APIs for this service make it easy, in a single line of code, to select a list and specify three fields from the list to return. 
  
  Note that in the OData URL, you must use the internal names of the fields (columns) rather than the display names, so the code uses `Title`, `Actor`, and `CastingStatus` rather than `Character`, `Actor/Actress`, and `Casting Status`. For more information about the REST/OData web service, see [Use OData query operations in SharePoint REST requests](use-odata-query-operations-in-sharepoint-rest-requests.md).
    
  ```csharp
      // REST/OData URL section
      string oDataUrl = "/_api/Web/lists/getbytitle('Characters In Hamlet')/items?$select=Title,Actor,CastingStatus";
  ```

  <br/>

8. Add the following code that uses the [HttpWebRequest](https://msdn.microsoft.com/EN-US/library/8y7x3zz2) and [HttpWebResponse](https://msdn.microsoft.com/EN-US/library/ww5755y6) classes of the [System.Net](https://msdn.microsoft.com/EN-US/library/btdf6a7e) namespace to construct the HTTP request and response objects.
    
  ```csharp
    // HTTP Request and Response construction section
    HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(sharepointUrl.ToString() + oDataUrl);
    request.Method = "GET";
    request.Accept = "application/atom+xml";
    request.ContentType = "application/atom+xml;type=entry";
    request.Headers.Add("Authorization", "Bearer " + accessToken);
    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
  ```

  <br/>

9. Add the following code to parse the ATOM-formatted response XML. It uses the classes of the [System.Xml.Linq](https://msdn.microsoft.com/EN-US/library/bb299195) namespace to parse the data that is returned and construct a [List<T>](https://msdn.microsoft.com/EN-US/library/6sh2ey19) of the items from the SharePoint list. (You could also use the classes of the [System.Xml](https://msdn.microsoft.com/EN-US/library/y3y47afh) namespace.) 

  Note that, in the XML that SharePoint returns, the child elements of the **entry** element hold metadata about the list item. The actual row data of a SharePoint list item is nested two layers down in the **properties** element. For that reason the [Elements<T>](https://msdn.microsoft.com/EN-US/library/bb348465) extension method is used twice to filter out the higher levels.
      
  ```csharp
    // Response markup parsing section
    XDocument oDataXML = XDocument.Load(response.GetResponseStream(), LoadOptions.None);
    XNamespace atom = "http://www.w3.org/2005/Atom";
    XNamespace d = "http://schemas.microsoft.com/ado/2007/08/dataservices";
    XNamespace m = "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"; 

    List<XElement> entries = oDataXML.Descendants(atom + "entry")
                            .Elements(atom + "content")
                            .Elements(m + "properties")
                            .ToList();
  ```

  <br/>

10. Add the following LINQ query to construct an [IEnumerable<T>](https://msdn.microsoft.com/EN-US/library/9eekhta0) collection of an anonymous type that has just the properties you need and no others. Note that although the code must refer to the item title field by its internal name `Title`, the property name in the anonymous type, to which the value is assigned, can be named `Character`. One effect of this is that when the collection is bound to a grid control, the more appropriate name **Character** appears on the page.
      
  ```csharp
    var entryFieldValues = from entry in entries
    select new { Character=entry.Element(d + "Title").Value, 
                 Actor=entry.Element(d + "Actor").Value, 
                 CastingStatus=entry.Element(d + "CastingStatus").Value };
  ```

  <br/>

11. Finish the handler with the following code to bind the data to a [GridView](https://msdn.microsoft.com/EN-US/library/4w7ya1ts) control on the page. The column headers in the grid default to the property names of the anonymous type: `Character`, `Actor`, and `CastingStatus`. The GridView control has properties that enable you to control the name and formatting column headers, so you could have **Actor/Actress** and **Casting Status** to match the column headers in SharePoint. For simplicity, these techniques are not described here. (You could also use a [DataGrid](https://msdn.microsoft.com/EN-US/library/e1zk1ey1) control.)
    
  ```csharp
      GridView1.DataSource = entryFieldValues;
      GridView1.DataBind();
  ```

  <br/>

12. Save all files.

### To test and debug the SharePoint Add-in

1. To test the SharePoint Add-in and its remote web application, select the F5 key in Visual Studio. The web application is deployed to IIS Express at localhost. The SharePoint Add-in is installed to the target SharePoint website. (In the continuing example, the remote add-in does *not* try to interact with the *host* web, and the add-in principal automatically has permissions to the *add-in* web, so you are *not* prompted to grant permissions.) The **Site Contents** page of your target SharePoint website opens, and you see the new add-in listed there.

2. Select the SharePoint Add-in, and the remote web application opens to the page you specified in the **StartPage** element in the AppManifest.xml file. Use the web application as needed to verify that it is working. In the continuing example of this topic, just select the button. Doing so creates a grid and populates it with the **Characters in Hamlet** list of the add-in web.
    
<a name="Publish"> </a> 

## Publish the SharePoint Add-in

To publish your SharePoint Add-in, upload the add-in package to a corporate add-in catalog or to the Office add-in store. For more information, see [Publishing to the Office Store or an organization's add-in catalog](deploying-and-installing-sharepoint-add-ins-methods-and-options.md) and [Publish SharePoint Add-ins](publish-sharepoint-add-ins.md).
 
<a name="Troubleshooting"> </a>
 
## Troubleshooting

If the add-in is not working, you should consider whether a mistake in the CAML markup is blocking deployment of the SharePoint components. Use a procedure similar to the following, which is based on the continuing example, to verify the deployment.

### To test the provisioning of the add-in web

1. Open the **Site Settings** page of the host web. In the **Site Collection Administration** section, select the **Site hierarchy** link.

2. On the **Site Hierarchy** page, you see your add-in listed by its URL. Do not launch it. Instead, copy the URL and use the URL in the remaining steps.

3. Navigate to _URL_of_app_web_/_layouts/15/ManageFeatures.aspx, and on the **Site Features** page that opens, verify that **Theater and Movie Data Components** is on the alphabetical list of features in your SharePoint Add-in, and that its status is **Active**.

4. Navigate to _URL_of_app_web_/_layouts/15/mngfield.aspx, and on the **Site Columns** page that opens, verify that a **Theater and Movies** group is in the list of site columns, and that it contains your new custom site columns, **Actor/Actress** and **Casting Status**.

5. Navigate to _URL_of_app_web_/_layouts/15/mngctype.aspx, and on the **Site Content Types** page that opens, verify that a **Theater and Movies** group is in the list of content types, and that it contains your new **ActingRole** content type.

6. Select the link to the **ActingRole** content type. On the **Site Content Type** page that opens, verify that the content type has the two new site column types, **Actor/Actress** and **Casting Status**, and that the item title field has been given your custom display name: **Character**.

7. Navigate to _URL_of_app_web_/_layouts/15/mcontent.aspx, and on the **Site Libraries and Lists** page that opens, verify that there is a **Customize "Characters in Hamlet"** link.

8. Select the **Customize "Characters in Hamlet"** link, and verify on the list settings page that the only content type for the list is your custom **ActingRole** content type, and that your two new site columns, **Actor/Actress** and **Casting Status** are listed in the **Columns** section. (The Title column may appear with its internal name **Title** instead of the display name **Character** that you gave it.)
    
  > [!NOTE] 
  > If there is no **Content Types** section on the page, you must enable management of content types. Click the **Advanced Settings** link, and on the **Advanced Settings** page, enable management of content types, and then select **OK**. You are returned to the previous page, where there is now a list of **Content Types** section.

9. Near the top of the page is the **Web Address** of the list. Copy this and paste it into the address bar of your browser, and then navigate to the list. Verify that the list has the sample items that you created. (The Title column may appear with its internal name **Title** instead of the display name **Character** that you gave it.)
    
## See also
<a name="SP15createcloud_bk_addlresources"> </a>

- [Complete basic operations using SharePoint client library code](complete-basic-operations-using-sharepoint-client-library-code.md)
- [Build Windows Phone apps that access SharePoint](../general-development/build-windows-phone-apps-that-access-sharepoint.md)
- [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
- [Get started creating SharePoint-hosted SharePoint Add-ins](get-started-creating-sharepoint-hosted-sharepoint-add-ins.md)
- [Localize SharePoint Add-ins](localize-sharepoint-add-ins.md)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
    
 

