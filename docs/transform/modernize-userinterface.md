# Introduction

One of the immediately visible elements of a modern site, like a modern team site or communication site, is it's modern user interface. These sites do have a home page which is using modern site pages and when you navigate to the lists and libraries you'll notice that they're shown using a modern user interface as well. But what if your site today still shows lists and libraries using the classic user interface or your site still has classic site pages in the form of wiki pages or web part pages? There are options to modernize your site's user interface, which is the main topic of this article series.

When it comes to switching to a modern user interface there are two areas you need to work on:

- Making your lists and libraries use the modern user interface (also referred to as the modern list and library experience)
- Transforming your site pages from classic wiki and web part pages into modern client side pages

Both areas will be discussed in more detail in this article series.

> [!IMPORTANT]
> We're not deprecating the "classic" experience; both "classic" and "modern" will coexist.

## User interface modernization process

Where do you start when you want to modernize the user interface of your sites? What sites can I modernize first? These are all very relevant questions which will be addressed in this chapter via a step by step approach.

### Step 1: Learn

Before embarking this modernization journey it's important that the involved stakeholders build up knowledge around the modern user interface in SharePoint:

- The key business stakeholders should have the option to experiment with the modern user interface: it's important that the modern user interface fulfils the business user needs and that the key business stakeholders are advocates of this change. By granting them access to a playground environment and by closely working with them one will understand what works well, but also what doesn't work well. The key business later on play a crucial role in helping your end users adopting the modern user interface
- Your customization team / developers are important as well as customizations built in the past do not always work anymore on the modern user interface. Often these customizations can be redesigned to work, so this should not be a blocking issue
- The SharePoint administrators will have to enable the modern user interface across your tenant and it's sites, hence they should also become familiar with the modern user interface
- Change management / governance teams should be looped in as well (if they exist in your organization) as switching from classic user interface to a modern user interface is an end user impacting change and might require that you need to update internal training material

With the right teams looped in and educated you can continue to the next step.

### Step 2: Analyze

Your tenant might contain thousands of site collections...so which of these site collections are good candidates to modernize and which aren't? To help you understand the readiness of your existing sites Microsoft has built scanners:

- The [SharePoint "Modern" user interface experience scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.UIExperience.Scanner) will help get a deep understanding on the modern user interface compatibility of your lists and libraries: certain lists and libraries cannot be shown using a modern user interface due numerous reasons like for example:

  - List has columns which are not compatible with modern
  - List uses customizations (e.g. JSLink) which are not compatible
  - List template (e.g. events list) was not (yet) build to work in modern
  - ...

- The [SharePoint Modernization scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.Modernization) provides a detailed analysis of your site's readiness for connecting to an Office 365 group combined with a detailed analysis of the wiki and web part pages in your environment. These outcomes can be used to initially drive remediation work, followed by migration work later on

### Step 3: Modernize

After you've analyzed the sites you want to modernize you can continue with the actual modernization which contains one or more from the below components:

- Replace incompatible customizations with equivalents that work in a modern user interface. Samples are:

  - Replacing JSLink with a [column formatter](https://docs.microsoft.com/en-us/sharepoint/dev/declarative-customization/column-formatting) or with a [SharePoint Framework field customizer extension](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/building-simple-field-customizer)
  - Replace existing first party web parts with [SharePoint Framework client side web parts](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/overview-client-side-web-parts) in case there's no out-of-the-box client side web part available that provides similar capabilities
  - Replace JavaScript embedding via user custom action with a [SharePoint Framework application customizer extension](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/build-a-hello-world-extension)
  - Replace list commands (user custom actions) with [SharePoint Framework ListView command set extensions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/extensions/get-started/building-simple-cmdset-with-dialog-api)

- Modernize your user experience via:

  - Enabling lists and libraries to show in modern by replacing customizations, by removing incompatible columns from the used views or b (as last resort) moving data into a modern user interface compatible list type
  - Connecting your site to an Office 365 Group (so called "groupify") which will give your site a modern home page and will enable our site to use for example use a mailbox or Microsoft Planner, which enabled you to use a modern version of a calendar and task list
  - Creating modern client side pages and configuring these to be "similar" to your key classic wiki and web part pages. Programmatic page transformation should be done for the key pages of your sites, transforming all pages will be resource intensive and often is not needed. To assist in this "triage" the [SharePoint Modernization scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.Modernization) will give you usage information about the current wiki and web part pages

- Communicate to your end users about the done changes: things will work different in a modern version, so your users need to be aware of that.

## Learn more

You can learn more about the user interface modernization via below articles:

- [Maximize your use of the modern list and library user interface](modernize-userinterface-lists-and-libraries.md)
- [Transforming classic pages to modern client side pages](modernize-userinterface-lists-and-libraries.md)
