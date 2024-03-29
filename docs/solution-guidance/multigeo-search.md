---
title: Search in a Multi-Geo tenant
description: In a Multi-Geo tenant, each geo location has its own search index, as well as its own independent search center. When a user searches, the query is fanned out to all the indexes, and the returned results are merged.
ms.date: 6/18/2019
ms.localizationpriority: medium
---

# Search in a Multi-Geo tenant

In a Multi-Geo tenant, each geo location has its own search index, as well as its own independent search center. When a user searches, the query is fanned out to all the indexes, and the returned results are merged.

For example, a user in one geo location can search for content stored in another geo location, or for content on a SharePoint site that’s restricted to a different geo location. If the user has access to this content, search shows the result. 

To work programmatically with search in a Multi-Geo tenant, see [Get custom search applications to show results from all or some geo locations](/office365/enterprise/configure-search-for-multi-geo#get-custom-search-applications-to-show-results-from-all-or-some-geo-locations).


## See also

- [How does search work in a Multi-Geo environment](/office365/enterprise/configure-search-for-multi-geo#how-does-search-work-in-a-multi-geo-environment)
- [OneDrive and SharePoint Online Multi-Geo](multigeo-introduction.md)
