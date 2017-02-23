# SharePoint Framework roadmap

First release of the SharePoint Framework will contain support for client-side web parts. This is however just a start on the journey for providing additional modern customization capabilities to SharePoint. This article lists the different areas which are in our backlog for the future releases of SharePoint Framework.

> Notice. This is a list of areas which SharePoint engineering is having in the backlog and are looking into. This does **NOT** mean that all of them will be necessarily delivered, but we are looking for getting items and topics from this list gradually released with the future releases of SharePoint Framework.  

## On-premises support

- Shipping as part of Feature Pack 
- Similar feature capabilities as in SharePoint Online
- Target is to provide common development platform across on-premises and the cloud
- Leveraging modern toolchain and open source on “legacy” environments
- Targeting SharePoint 2016 version during calendar year 2017

## Client-side web parts++ and add-ins

- Supporting more complex scenarios and interactions with web parts
    - Part-to-part communication
	- JS Framework isolation
    - "citizen developer" model for lightweight development

- Bring add-ins to the modern world: Let’s make them play nicer with the new UX. 
    - Azure AD Registration
    - Native responsive support 
    - Build Add-Ins with SharePoint Framework

## JavaScript embedding support (JSLink, User Custom Actions)

- The same tool chain and deployment model as client side web parts.
- Derive from a strongly typed base class wherever possible rather than manipulating the page DOM directly.
- Replacing custom actions and JSLinks with "Code Parts"
- Work with NoScript via tenant app catalog
- Work in site collection app catalog
- PnP community driven migration best practices and tools


## Application Lifecyle Management

- Streamlined approval experience: no need to know who your tenant admin is anymore
    - Owner initiate the approval process
    - Tenant admin gets automatically notified 
    - Settings to control the default experience around approval process

- ALM REST APIs - Deploy, activate, delete and upgrade apps and add-ins
- ALM REST APIs targeted to support *everything* in the App Catalog, including add-ins
- Automatic CDN hosting for code
    - Package JavaScript bundle into app package, which is automatically then deployed to a library that gets hosted on your tenant Office 365 CDN


## Developer Experience
- SharePoint Framework Workbench 2.0: Development story beyond web parts with support for new componen types on top of client-side web parts
- Tool Chain Components
- Additional Yeoman Templates

## Full Page Apps
- Build SharePoint Framework apps, which render in full page mode, rather than as a client-side web part
- List level: custom view item, edit item, delete item, add item
- Page level: assign an app to a page to a full custom page experience
- Mobile

## Additional resources
Please use following resources to stay up to date on the new releases and capabilities being released for SharePoint Framework.

* [dev.office.com blog](https://dev.office.com/blogs)
* [OfficeDev Twitter account](https://twitter.com/officedev)
