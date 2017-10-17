Information management policy in the SharePoint add-in model
============================================================

Summary
-------

The approach you take to apply information management policy is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, information management policy was managed and applied via the SharePoint Server Side Object Model and deployed via SharePoint Farm Solutions, usually as part of a Timer Job. 

In a SharePoint Add-in model scenario, the SharePoint Client Side Object Model (CSOM) and remote timer jobs are used to manage and apply information management policy.

High Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high level guidelines to manage and apply information management policies to SharePoint sites.  

- Keep in mind, when information management policies are defined at the site collection level then site collection owners may disable them.
	+ When using the remote model and CSOM to set information management policies a site collection owner cannot disable them.  The remote model approach is a more enterprise friendly model that ensures information management policies are always enabled throughout a SharePoint environment.
- Use the SharePoint CSOM in a remote timer job to manage and apply information management policies.

- Ensure you are not violating the Office 365 SharePoint API throttle limits when working with large data sets and recursive crawls as you inspect artifacts in your SharePoint sites and apply information management policies to them accordingly.
	+ The [Core.Throttling (O365 Pnp Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.Throttling) demonstrates how to write intelligent code to handle Office 365 SharePoint API throttling.

**Note:** Currently, the CSOM does not have methods to set retention on content types (only on sites).

**Getting Started**

The following O365 PnP Code Sample and video demonstrates how to manage and apply information management policy for SharePoint sites.  In this example, the code iterates through the content types applied to document libraries in SharePoint site collections and applies a retention policy.

- [Governance.ContentTypeEnforceRetention (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Governance.ContentTypeEnforceRetention)

The following video walks through the code sample.

- [Information management policy with app model (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Information-management-policy-wtih-app-model)

Related links
=============
- [Information management policy with app model (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Information-management-policy-wtih-app-model)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Governance.ContentTypeEnforceRetention (O365 PnP Code Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Governance.ContentTypeEnforceRetention)
- Samples and content at https://github.com/SharePoint/PnP

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) *partly*
- SharePoint 2013 on-premises – *partly*

*Patterns for dedicated and on-premises are identical with SharePoint Add-in model techniques, but there are differences on the possible technologies that can be used.*
