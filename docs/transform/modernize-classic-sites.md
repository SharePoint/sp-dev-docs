# Introduction

SharePoint Online is continuously evolving and improving, which is a great thing for you as consumer from the service. One of the key improvements is the availability of modern sites, being modern Office 365 Group connected team sites or communication sites, combined with more and more functionality that can be consumed from a beautiful modern user interface. All of this is great...but you might ask yourself the question: "I've lots of classic (team) sites...how do I bring those into the modern SharePoint world?". There's no magic switch that automatically transforms your classic sites into modern sites, but it possible to transform a classic site into a modern site following the guidance described in this article series.

## Steps in a site modernization

If you want to transform (or also referred to as "modernize") a classic site into a modern group connected site then you can do this by following the below outlined steps.

### Enable your sites to fully leverage the modern user interface

The most visible aspect of modern sites is obviously it's modern user interface. If you've not turned of the modern experience at tenant level (**SharePoint Lists and Libraries experience** setting in tenant admin center) then already certain pages will show up using a modern user interface:

- List and library pages for most list and libraries
- Site Contents page
- Site Usage page
- Recycle Bin pages

If you scan over your site you'll however notice that following pages are still shown using the classic user interface:

- Home page and all other site pages
- List and library pages for certain lists and libraries

If you want to maximize the use of the modern user interface for your site pages plus list and library pages then checkout the [Modernize your user interface](modernize-userinterface.md) article.

### Connect your sites to Office 365 Groups

Classic (team) sites are not connected to an Office 365 Group whereas modern team sites are: the connection to an Office 365 Group does open the site to consume other Office 365 Services like Teams, Planner, Outlook,...So connecting your sites to an Office 365 Group is an essential part of a site modernization. There are two options to make this happen:

- You can have each site owner do this on their behalf using a wizard that can be launched from the user interface
- You perform a bulk operation in which you connect an Office 365 Group to a series of sites in one go

You can read up on all the details needed to make this happen in our [Connect to Office 365 Group](modernize-connect-to-office365-group.md) article.

### Switch to a modern tenant scoped branding

Having SharePoint (team) sites use your company branding is a very common thing and for classic sites you've used one or more of the following component: site themes, CSS and master pages. Master pages and CSS are however not compatible with the modern user interface, so you will need to evaluate if these branding customizations are still relevant or not. Classic site themes are respected in a modern user interface but since we now have tenant controlled site theming switching over to that model will future proof your modernized site.

Learn more via the [Modernize your site branding](modernize-branding.md) article.

## What process to follow

There's on one size fits all process for site modernization: the previous chapter introduced the possible steps in a site modernization but whether you run all steps and in which order you run them is up to you to decide. Although there's no one size fits all process there's a recommended approach for site modernization:

### Step 1: Enable the out-of-the-box modern user interface for lists and libraries

Given you typically already have this enabled at tenant level and are already using this option it makes sense to further maximize the use. SharePoint will try to show your lists and libraries using the modern user interface but you might have customizations / configurations that prevent this. Checkout the [Maximize your use of the modern list and library user interface](modernize-userinterface-lists-and-libraries.md) article to learn more about how to unblock your lists and libraries for using the modern user interface.

### Step 2: Connect your site to an Office 365 Group + switch to modern branding when needed

Connecting your site to an Office 365 Group does not only give you the benefits of a group connected site, but it will also bring you a new modern home page for your site. Depending on your needs this new home page might be good but do know that you can also opt to create your own modern home page as well. If you need a custom home page or if you want to perform a bulk "groupify" then you'll need to use a PowerShell script...and at that point it makes sense to include other modernization tasks as well, like switching to a modern site theme.

You can learn more about "groupify" and switching to a modern site theme in these articles:

- [Connect to Office 365 Group](modernize-connect-to-office365-group.md)
- [Modernize your site branding](modernize-branding.md)

### Step 3: Transform your key classic site pages into modern pages

The final step in a site transformation is transforming your site pages: if you've done step 1 and 2 then the pages in your site are the last thing that still shows up in a classic user interface. Page transformation is not a simple process as there's no one-on-one mapping between functionality offered by classic web parts versus what's offered by the 1st party client side web parts on modern pages. Therefore we recommend to only transform the pages that are frequently used. You can learn more about page transformation from the [Transforming classic pages to modern client side pages](modernize-userinterface-lists-and-libraries.md) article.
