---
title: "Migrating web parts using the Migration API"
ms.reviewer: 
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
audience: ITPro
ms.date: 06/03/2022
ms.topic: conceptual
ms.localizationpriority: medium
search.appverid: MET150
msCollection: 
- SPMigration
- M365-collaboration
description: "Migrating web parts using the Migration API"
---
# Migrating web parts using the Migration API

The Migration API supports the ability to migrate web parts to SharePoint Online using the PRIME package by calling CSOM/REST/SOAP WS to get web part data and properties to build the PRIME package.

An advantage in using the Migration API for your web part migration is the ability to migrate your web parts in one call and improve performance. Part of the manifest includes the web part as you import its associated page. By using the Migration API, you can put all the web parts you have on that page.

## Using the Serializer DLL

There are two attributes that are handled in a unique way that requires using the WebPart User Properties Serializer DLL.

There is a technical challenge to generate the property values for *AllUsersProperties* and *PerUserProperties* when building the PRIME package. This challenge is because the property values are BASE64 encoded blob, which is serialized web part properties and web part connection info.
 

To get the Serializer .dll, perform following steps:


1. Install the SPMT Client on your local computer:  [Install SPMT](https://aka.ms/spmt-GA-page).
2. Browse to the install location of SPMT
3. Locate and copy the *microsoft.sharepoint.migration.webpart.serializer.dll* and you can copy it into your project.

For a complete list of the supported web parts, see:

- [SPMT & Migration API supported SharePoint web parts](/sharepointmigration/spmt-supported-webparts)



## Schema:

For an explanation of the **SPWebPart** fields see:

- [SPWebPart](/openspecs/sharepoint_protocols/ms-primepf/25cfceeb-7769-4331-9936-ce3b9ced87ad)



### PRIME Web Part Schema example

```xml
    <!-- SPFile definition -->
    <xs:complexType name="SPFile">
        <xs:sequence>
            <xs:element name="Properties" type="Dictionary" minOccurs="0" />
            <xs:element name="Versions" type="SPFileVersionCollection" minOccurs="0" maxOccurs="1" />
            <xs:element name="WebParts" type="SPWebPartCollection" minOccurs="0" maxOccurs="1" />
            <xs:element name="Links" type="SPLinkCollection" minOccurs="0" maxOccurs="1" />
            <xs:element name="EventReceivers" type="SPEventReceiverDefinitionCollection" minOccurs="0" maxOccurs="1" />
            <xs:element name="VersionEvents" type="SPFileVersionEventCollection" minOccurs="0" maxOccurs="1" />
        </xs:sequence>
		……
    </xs:complexType>

    <!-- SPWebPartCollection definition -->
    <xs:complexType name="SPWebPartCollection">
        <xs:sequence>
            <xs:element name="WebPart" type="SPWebPart" minOccurs="1" maxOccurs="unbounded" />
        </xs:sequence>
    </xs:complexType>

    <!-- SPWebPart definition -->
    <xs:complexType name="SPWebPart">
        <xs:sequence>
            <xs:choice minOccurs="0" maxOccurs="35">
                <xs:element name="Script" minOccurs="0" maxOccurs="1" />
                <xs:element name="PagedRowset" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="PagedClientCallbackRowset" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="PagedRecurrenceRowset" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="ViewFields" type="SPFieldLinkCollection" minOccurs="0" maxOccurs="1" />
                <xs:element name="ViewData" minOccurs="0" maxOccurs="1" />
                <xs:element name="Query" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="RowLimit" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="RowLimitExceeded" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="Toolbar" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="Formats" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="Aggregations" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="List" minOccurs="0" maxOccurs="1" />
                <xs:element name="MetaData" minOccurs="0" maxOccurs="1" />
                <xs:element name="View" minOccurs="0" maxOccurs="1" />
                <xs:element name="ViewStyle" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="ViewBody" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="ViewEmpty" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="ViewFooter" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="ViewHeader" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="ViewBidiHeader" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="GroupByFooter" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="GroupByHeader" minOccurs="0" maxOccurs="unbounded" />
                <xs:element name="CalendarViewStyles" minOccurs="0" maxOccurs="1" />
                <xs:element name="CalendarSettings" minOccurs="0" maxOccurs="1" />
                <xs:element name="ListFormBody" minOccurs="0" maxOccurs="1" />
                <xs:element name="Xsl" minOccurs="0" maxOccurs="1" />
                <xs:element name="XslLink" minOccurs="0" maxOccurs="1" />
                <xs:element name="JS" minOccurs="0" maxOccurs="1" />
                <xs:element name="JSLink" minOccurs="0" maxOccurs="1" />
                <xs:element name="ParameterBindings" minOccurs="0" maxOccurs="1" />
                <xs:element name="OpenApplicationExtension" minOccurs="0" maxOccurs="1" />
                <xs:element name="Mobile" minOccurs="0" maxOccurs="1" />
                <xs:element name="MobileItemLimit" minOccurs="0" maxOccurs="1" />
                <xs:element name="Method" minOccurs="0" maxOccurs="1" />
                <xs:element name="WebParts" minOccurs="0" maxOccurs="1" />
                <xs:element name="InlineEdit" minOccurs="0" maxOccurs="1" />
                <xs:element name="Joins" minOccurs="0" maxOccurs="1" />
                <xs:element name="ProjectedFields" minOccurs="0" maxOccurs="1" />
                <xs:element name="SpotlightInfo" minOccurs="0" maxOccurs="1" />
                <xs:element name="Visualization" minOccurs="0" maxOccurs="unbounded" />
           </xs:choice>
        </xs:sequence>

        <xs:attribute name="Name" type="Guid" use="required" />
        <xs:attribute name="ListId" type="Guid" use="optional" />
        <xs:attribute name="ListRootFolderUrl" type="xs:string" use="optional" />
        <xs:attribute name="Type" type="xs:string" use="optional" />
        <xs:attribute name="UserId" type="xs:int" use="optional" />
        <xs:attribute name="DisplayName" type="xs:string" use="optional" />
        <xs:attribute name="WebPartTypeId" type="Guid" use="optional" />
        <xs:attribute name="Assembly" type="xs:string" use="optional" />
        <xs:attribute name="Class" type="xs:string" use="optional" />
        <xs:attribute name="SolutionId" type="Guid" use="optional" />
        <xs:attribute name="Version" type="xs:string" use="optional" />
        <xs:attribute name="BaseViewID" type="xs:string" use="optional" />
        <xs:attribute name="WebPartZoneID" type="xs:string" use="optional" />
        <xs:attribute name="IsIncluded" type="xs:string" use="optional" />
        <xs:attribute name="WebPartOrder" type="xs:string" use="optional" />
        <xs:attribute name="FrameState" type="xs:string" use="optional" />
        <xs:attribute name="Source" type="xs:string" use="optional" />
        <xs:attribute name="AllUsersProperties" type="xs:string" use="optional" />
        <xs:attribute name="PerUserProperties" type="xs:string" use="optional" />
        <xs:attribute name="WebPartIdProperty" type="xs:string" use="optional" />
        <xs:attribute name="ContentTypeId" type="xs:string" use="optional" />

        <!-- For files (major [default] or minor) -->
        <xs:attribute name="Level" type="xs:string" use="optional" />

        <!-- Flags -->
        <xs:attribute name="Flags" type="xs:string" use="optional" />
        <xs:attribute name="Scope" type="xs:string" use="optional" />
        <xs:attribute name="Hidden" type="xs:boolean" use="optional" />
        <xs:attribute name="Threaded" type="xs:boolean" use="optional" />
        <xs:attribute name="ReadOnly" type="xs:boolean" use="optional" />
        <xs:attribute name="RecurrenceRowset" type="xs:boolean" use="optional" />
        <xs:attribute name="FPModified" type="xs:boolean" use="optional" />
        <xs:attribute name="ModerationType" type="xs:string" use="optional" />
        <xs:attribute name="Personal" type="xs:boolean" use="optional" />
        <xs:attribute name="OrderedView" type="xs:boolean" use="optional" />
</xs:complexType>
```

## Security controls

Due to the security control design on the server side, the following behavior:
 
- If the NoScript is off, then go on migrating all web part as currently
- If NoScript is on, then first check web part level safety
    - If SafeAgainstScript is false, do not import it
    - If SafeAgainstScript is true, then check the web part property level safety
        - If the web part has any property with ‘RequiresDesignerPermission’, then ignore this web part (or ignore this property if feasible)
        - Otherwise, go on migrating this web part
 
 
Here is the list of web parts that will be ignored by server-side code (treated as untrusted webpart) when NoScript is turned ON:

- XsltListViewWebPart
- ContentEditorWebPart
- ContentByQueryWebPart
- SiteFeedWebPart
- ScriptEditorWebPart
- ContactFieldControl
- SearchBoxScriptWebPart
- PageViewerWebPart
- ProfileBrowser
- UserTasksWebPart
- SocialCommentWebPart
- SilverlightWebPart
- RSSAggregatorWebPart
- SummaryLinkWebPart
- TableOfContentsWebPart
- UserDocsWebPart
- SPTimelineWebPart
- XmlWebPart
- SiteDocuments
- CategoryResultsWebPart

## FAQ

*Question:*  How do I  fetch the web part properties as the input for serialization API?
*Answer:*    The web part properties can be found in \<webpart\> element in the response of operation ‘GetWebPartProperties2’ in ‘WebPartPagesWebService’. Find the payload details in WSDL ‘/_vti_bin/WebPartPage.asmx?WSDL’.

*Question:*  How to fetch the web part connection info as the input for serialization API?
*Answer:*    The web part connections could be found in \<SPWebPartConnection\> elements from the web part page in the response of operation ‘GetWebPartPage’ in ‘WebPartPagesWebService’.

View flags: refer to [this](/openspecs/sharepoint_protocols/ms-wssfob/252d2086-6571-430f-863d-bcaf9d267e62), for example, all the [view flags](/openspecs/sharepoint_protocols/ms-wssfob/16a9d8ca-185d-40ec-956e-bb6bf3488cf7). You will need to convert all flag values to PRIME element ‘flags’.

## Appendix

### Sample Web Part Properties v2 XmlNode Element 

```xml

  <WebPart xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.microsoft.com/WebPart/v2" ID="1c845edf-42c6-4094-a105-302015642f43">
	<Title>Content Editor</Title>
	<FrameType>Default</FrameType>
	<Description>Allows authors to enter rich text content.</Description>
	<IsIncluded>true</IsIncluded>
	<ZoneID>wpz</ZoneID>
	<PartOrder>0</PartOrder>
	<FrameState>Normal</FrameState>
	<Height />
	<Width />
	<AllowRemove>true</AllowRemove>
	<AllowZoneChange>true</AllowZoneChange>
	<AllowMinimize>true</AllowMinimize>
	<AllowConnect>true</AllowConnect>
	<AllowEdit>true</AllowEdit>
	<AllowHide>true</AllowHide>
	<IsVisible>true</IsVisible>
	<DetailLink />
	<HelpLink />
	<HelpMode>Modeless</HelpMode>
	<Dir>Default</Dir>
	<PartImageSmall />
	<MissingAssembly></MissingAssembly>
	<PartImageLarge>/_layouts/15/images/mscontl.gif</PartImageLarge>
	<IsIncludedFilter />
	<ExportControlledProperties>true</ExportControlledProperties>
	<ConnectionID>00000000-0000-0000-0000-000000000000</ConnectionID>
	<ID>g_d6def51c_7a91_40fe_9f59_de9ceed5c347</ID>
	<Assembly>Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly>
	<TypeName>Microsoft.SharePoint.WebPartPages.ContentEditorWebPart</TypeName>
	<ContentLink xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
	<Content xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
	<PartStorage xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
  </WebPart>
```


### Sample Web Part Properties v3 XmlNode Element

```xml

  <webPart xmlns="http://schemas.microsoft.com/WebPart/v3">
    <metaData>
      <type name="Microsoft.SharePoint.WebPartPages.XsltListViewWebPart, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" />
      <importErrorMessage></importErrorMessage>
    </metaData>
    <data>
      <properties>
        <property name="ShowWithSampleData" type="bool">False</property>
        <property name="Default" type="string" />
        <property name="NoDefaultStyle" type="string" />
        <property name="CacheXslStorage" type="bool">True</property>
        <property name="ViewContentTypeId" type="string" />
        <property name="XmlDefinitionLink" type="string" />
        <property name="ManualRefresh" type="bool">False</property>
        <property name="ListUrl" type="string" null="true" />
        <property name="ListId" type="System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">a316c9a6-e664-426b-9069-77cabd22429c</property>
        <property name="TitleUrl" type="string">/Lists/TestPromotedLinks</property>
        <property name="EnableOriginalValue" type="bool">False</property>
        <property name="Direction" type="direction">NotSet</property>
        <property name="ServerRender" type="bool">False</property>
        <property name=" ViewFlags " type="Microsoft.SharePoint.SPViewFlags, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c">Html, TabularView, Hidden, Ordered</property>
        <property name="AllowConnect" type="bool">True</property>
        <property name="ListName" type="string">{A316C9A6-E664-426B-9069-77CABD22429C}</property>
        <property name="ListDisplayName" type="string" null="true" />
        <property name="AllowZoneChange" type="bool">True</property>
        <property name="ChromeState" type="chromestate">Normal</property>
        <property name="DisableSaveAsNewViewButton" type="bool">True</property>
        <property name="ViewFlag" type="string" />
        <property name="DataSourceID" type="string" />
        <property name="ExportMode" type="exportmode">All</property>
        <property name="AutoRefresh" type="bool">False</property>
        <property name="FireInitialRow" type="bool">True</property>
        <property name="AllowEdit" type="bool">True</property>
        <property name="Description" type="string" />
        <property name="HelpMode" type="helpmode">Modeless</property>
        <property name="BaseXsltHashKey" type="string" null="true" />
        <property name="AllowMinimize" type="bool">True</property>
        <property name="CacheXslTimeOut" type="int">86400</property>
        <property name="ChromeType" type="chrometype">Default</property>
        <property name="Xsl" type="string" null="true" />
        <property name="JSLink" type="string" null="true" />
        <property name="CatalogIconImageUrl" type="string">/_layouts/15/images/itgen.png?rev=23</property>
        <property name="SampleData" type="string" null="true" />
        <property name="UseSQLDataSourcePaging" type="bool">True</property>
        <property name="TitleIconImageUrl" type="string" />
        <property name="PageSize" type="int">-1</property>
        <property name="ShowTimelineIfAvailable" type="bool">True</property>
        <property name="Width" type="string" />
        <property name="DataFields" type="string" />
        <property name="Hidden" type="bool">False</property>
        <property name="Title" type="string" />
        <property name="PageType" type="Microsoft.SharePoint.PAGETYPE, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c">PAGE_NORMALVIEW</property>
        <property name="DataSourcesString" type="string" />
        <property name="AllowClose" type="bool">True</property>
        <property name="InplaceSearchEnabled" type="bool">False</property>
        <property name="WebId" type="System.Guid, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">00000000-0000-0000-0000-000000000000</property>
        <property name="Height" type="string" />
        <property name="GhostedXslLink" type="string">main.xsl</property>
        <property name="DisableViewSelectorMenu" type="bool">True</property>
        <property name="DisplayName" type="string" />
        <property name="IsClientRender" type="bool">False</property>
        <property name="XmlDefinition" type="string">&lt;View Name="{2B37E456-6FD3-4708-AC83-5D7B0D13E9B4}" Type="HTML" Hidden="TRUE" OrderedView="TRUE" DisplayName="" Url="/SitePages/TestPage.aspx" Level="1" BaseViewID="3" ContentTypeID="0x" &gt;&lt;Query&gt;&lt;OrderBy&gt;&lt;FieldRef Name="TileOrder" Ascending="TRUE"/&gt;&lt;FieldRef Name="Modified" Ascending="FALSE"/&gt;&lt;/OrderBy&gt;&lt;/Query&gt;&lt;ViewFields&gt;&lt;FieldRef Name="Title"/&gt;&lt;FieldRef Name="BackgroundImageLocation"/&gt;&lt;FieldRef Name="Description"/&gt;&lt;FieldRef Name="LinkLocation"/&gt;&lt;FieldRef Name="LaunchBehavior"/&gt;&lt;FieldRef Name="TileOrder"/&gt;&lt;/ViewFields&gt;&lt;RowLimit Paged="TRUE"&gt;30&lt;/RowLimit&gt;&lt;JSLink&gt;clienttemplates.js&lt;/JSLink&gt;&lt;XslLink Default="TRUE"&gt;main.xsl&lt;/XslLink&gt;&lt;Toolbar Type="Standard"/&gt;&lt;/View&gt;</property>
        <property name="InitialAsyncDataFetch" type="bool">False</property>
        <property name="AllowHide" type="bool">True</property>
        <property name="ParameterBindings" type="string">&lt;ParameterBinding Name="dvt_sortdir" Location="Postback;Connection" /&gt;&lt;ParameterBinding Name="dvt_sortfield" Location="Postback;Connection" /&gt;&lt;ParameterBinding Name="dvt_startposition" Location="Postback" DefaultValue="" /&gt;&lt;ParameterBinding Name="dvt_firstrow" Location="Postback;Connection" /&gt;&lt;ParameterBinding Name="OpenMenuKeyAccessible" Location="Resource(wss,OpenMenuKeyAccessible)" /&gt;&lt;ParameterBinding Name="open_menu" Location="Resource(wss,open_menu)" /&gt;&lt;ParameterBinding Name="select_deselect_all" Location="Resource(wss,select_deselect_all)" /&gt;&lt;ParameterBinding Name="idPresEnabled" Location="Resource(wss,idPresEnabled)" /&gt;&lt;ParameterBinding Name="NoAnnouncements" Location="Resource(wss,noXinviewofY_LIST)" /&gt;&lt;ParameterBinding Name="NoAnnouncementsHowTo" Location="Resource(wss,noXinviewofY_DEFAULT)" /&gt;</property>
        <property name="DataSourceMode" type="Microsoft.SharePoint.WebControls.SPDataSourceMode, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c">List</property>
        <property name="AutoRefreshInterval" type="int">60</property>
        <property name="AsyncRefresh" type="bool">False</property>
        <property name="HelpUrl" type="string" />
        <property name="MissingAssembly" type="string">Cannot import this Web Part.</property>
        <property name="XslLink" type="string" null="true" />
        <property name="SelectParameters" type="string" />
      </properties>
    </data>
  </webPart>
```

4 - Sample Web Part Connection XmlNode Element 

```xml
<WebPartPages:SPWebPartConnection ConsumerConnectionPointID="DFWP Filter Consumer ID" ConsumerID="g_bcca2ac1_f0f1_4640_af30_8a0730ca840e" ID="c1638508205" ProviderConnectionPointID="ITransformableFilterValues" ProviderID="g_7fc41891_2e27_4835_99c8_5b6f80feb20f"><WebPartPages:TransformableFilterValuesToParametersTransformer ConsumerFieldNames="PageType" ProviderFieldNames="Page Field"></WebPartPages:TransformableFilterValuesToParametersTransformer>
</WebPartPages:SPWebPartConnection>

```
