---
title: How to Use code to pin terms to navigation term sets in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 4a2811dc-25fd-4eb2-b0ab-1edded64c556
---


# How to: Use code to pin terms to navigation term sets in SharePoint
Learn how to use code to pin terms to navigation term sets.
In taxonomy creation, pinning is the ability to attach a term to a target. SharePoint introduces term pinning. A pinned term is just like a term that is reused, except it is read-only and cannot be changed in the location where the term is used.
  
    
    

In SharePoint managed navigation, the API enables you to pin new or existing terms to a  [NavigationTermSet](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.Navigation.NavigationTermSet.aspx) object. In Microsoft SharePoint Server 2010, users could reuse terms (and all terms nested under the reused terms) in other locations in the term hierarchy. After these terms were reused, they could be modified in any location and changes would be seen everywhere the terms were reused.
## Term pinning essentials
<a name="SP15_H2UseCodeToPinTerms_TermPinningEssentials"> </a>

To understand pinning in SharePoint, you may want to learn about managed metadata, terms, term sets, managed navigation, the term store, and other related concepts and APIs. Table 1 describes articles that give more information about pinning. 
  
    
    

**Table 1. Core concepts for pinning**


|**Article title**|**Description**|
|:-----|:-----|
| [A Brief Introduction to Enterprise Metadata Management for Microsoft SharePoint Server 2010 Developers](http://msdn.microsoft.com/library/113a5d75-ac4d-498b-8436-725e04fb685d%28Office.15%29.aspx) <br/> |Written for SharePoint Server 2010, this article provides a basic overview of the enterprise managed metadata programming model and core concepts, such as terms and term sets.  <br/> |
| [Managed navigation in SharePoint](managed-navigation-in-sharepoint.md) <br/> |An introduction to the taxonomy-driven managed navigation feature in SharePoint.  <br/> |
   

## Use code to complete pinning tasks
<a name="SP15_H2UseCodeToPinTerms_UseCodeToCompletePinning"> </a>

You can use custom code from the .NET server, .NET client (CSOM), Silverlight, or JavaScript programming models to complete pinning operations on terms and term sets. The following .NET server code examples include a test for pinning terms to navigation term sets, and a method that you can use to test whether a **Term** object is pinned to a specified **TermSet** object. Then, the test creates **Term** objects, and pins one of them to the specified **NavigationTermSet** object.
  
    
    

### To pin terms to navigation term sets


- The following sample tests pinning terms to navigation term sets. It uses the  [NavigationTermSet](https://msdn.microsoft.com/library/Microsoft.SharePoint.SharePoint.NavigationTermSet.aspx) object, which contains methods and properties that are handy in managed navigation scenarios, such as creating taxonomy-driven site navigation menus.
    
    The sample first checks whether a **NavigationTermSet** object exists. If one doesn't exist, then the code creates a **NavigationTermSet**. (If one already exists, the code deletes the old one before it creates a new one). Then, after the code creates some **Term** objects to pick from, it creates a publishing page (.aspx) file for demonstration purposes, sets it as the custom target page for pinned terms, and then pins some navigation properties to the page.
    


```cs
  
public void TermPinningTest()
        {
using (SPSite site = new SPSite(TestConfig.ServerUrl))
            {
                using (SPWeb web = site.OpenWeb())
                {
                    TaxonomySession taxonomySession = new TaxonomySession(site, updateCache: true);

                    // Create the navigation term set.
                    NavigationTermSet menuNavTermSet = DemoUtilities.SetUpSampleNavTermSet(
                        this.TestContext, taxonomySession, web);
                    TermSet menuTaxTermSet = menuNavTermSet.GetTaxonomyTermSet();

                    TermStore termStore = menuTaxTermSet.TermStore;
                    Group group = menuTaxTermSet.Group;

                    // Does the tagging Taxonomy term set already exist?
                    TermSet taggingTaxTermSet = group.TermSets.FirstOrDefault(
                        ts => ts.Id == TestConfig.TaggingTermSetId);

                    if (taggingTaxTermSet != null)
                    {
                        Log("Deleting old tagging term set");

                        // If the tagging Taxonomy term set already exists, delete the old one.
                        taggingTaxTermSet.Delete();
                        termStore.CommitAll();
                    }

                    Log("Creating the tagging term set");

                    taggingTaxTermSet = group.CreateTermSet("Demo Tagging TermSet", TestConfig.TaggingTermSetId);

                    int lcid = termStore.WorkingLanguage;

                    // Create some terms.
                    Term taggingProductsTaxTerm = taggingTaxTermSet.CreateTerm("Products", lcid);
                    taggingProductsTaxTerm.CreateTerm("Electronics", lcid);
                    taggingProductsTaxTerm.CreateTerm("Footwear", lcid);
                    taggingProductsTaxTerm.CreateTerm("Sports", lcid);

                    termStore.CommitAll();

                    /// Pinning the products subtree. Pins the "Products" Term object to the NavigationTermSet object.
                    Term menuProductsTaxTerm = menuTaxTermSet.ReuseTermWithPinning(taggingProductsTaxTerm);
                    termStore.CommitAll();

                    /// Creating the publishing page template DemoTargetPage.aspx");
                    PublishingWeb publishingWeb = PublishingWeb.GetPublishingWeb(web);

                    SPListItem pageListItem = null;
                    PublishingPage publishingPage;
                    try
                    {
                        pageListItem = web.GetListItem(web.Url + "/Pages/DemoTargetPage.aspx");
                        publishingPage = PublishingPage.GetPublishingPage(pageListItem);
   
                    }
                    catch (FileNotFoundException)
                    {
                        Log("Creating new target page");
                        publishingPage = publishingWeb.AddPublishingPage("DemoTargetPage.aspx", publishingWeb.DefaultPageLayout);
                        Log("Checking in target page draft");
                        publishingPage.CheckIn("TermPinningTest");
                    }

                    // Set a custom target page for the pinned terms and then set some navigation properties.

                    // Normally the navigation objects are obtained by way of an optimized function such as
                    // TaxonomyNavigation.GetTermSetForWeb() or TaxonomyNavigationContext.Current.NavigationTerm.
                    // The function guarantees that URLs will be resolved using a valid NavigationTerm.View.
                    // But because we are populating totally new data, the cache will probably not be updated
                    // yet, so instead we manually construct a view using GetAsResolvedByWeb().
                    NavigationTerm menuProductsNavTerm = NavigationTerm.GetAsResolvedByWeb(menuProductsTaxTerm,
                        web, StandardNavigationProviderNames.GlobalNavigationTaxonomyProvider);

                    menuProductsNavTerm.TargetUrl.Value = publishingPage.Uri.AbsolutePath;
                    menuProductsNavTerm.TargetUrlForChildTerms.Value = publishingPage.Uri.AbsolutePath;

                    termStore.CommitAll();

                    Log("TermPinningTest completed successfully");
                }
            }

}
```


## Additional resources
<a name="SP15_H2UseCodeToPinTerms_AdditionalResources"> </a>


-  [Managed metadata and navigation in SharePoint](managed-metadata-and-navigation-in-sharepoint.md)
    
  
-  [Microsoft.SharePoint.Publishing.Navigation](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.Navigation.aspx)
    
  

