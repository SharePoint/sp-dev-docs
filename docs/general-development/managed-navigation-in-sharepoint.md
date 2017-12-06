---
title: Managed navigation in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Managed navigation in SharePoint

  
    
    
![Conceptual overview topic](../images/mod_icon_badge_conoverview.png)
  
    
    

  
    
    

  
    
    
Learn about the taxonomy-driven managed navigation feature in SharePoint.
## Introducing managed navigation
<a name="SP15_ManagedNav_Introducing"> </a>

A well-designed navigation tells your site's users a lot about the business, products, and services that the website offers. By updating the taxonomy behind the navigation, businesses can drive and keep up with change without having to recreate their site navigation in the process. In SharePoint, the managed navigation feature enables you to design site navigation that is driven by managed metadata and create SEO-friendly URLs that are derived from the managed navigation structure. Managed navigation provides an alternative to the traditional SharePoint navigation feature—structured navigation—that is based on the structure of SharePoint. Because managed navigation is driven by taxonomy, you can use it to design site navigation around important business concepts without changing the structure of your sites or site components.
  
    
    

## How managed navigation works
<a name="SP15_ManagedNav_HowManagedNavWorks"> </a>

Managed navigation provides a framework for dynamically generated pages and provides an associated SEO-friendly URL. Each generated page is represented in the navigation hierarchy. Instead of requiring separate pages to be authored for each category in the taxonomy, the framework provides a templating and inheritance mechanism that creates the landing pages for each navigation link. You can use the topic pages feature to customize the landing page experience.
  
    
    
Managed navigation APIs are built into the taxonomy and publishing libraries in SharePoint. Managed metadata components like term sets and the term store are used to enable taxonomy-driven navigation for your site. In the .NET server class library, the  [Microsoft.SharePoint.Publishing.Navigation](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.Navigation.aspx) namespace contains term, term set, and other class objects that mirror the **Term** class and **TermSet** class in the [Microsoft.SharePoint.Taxonomy](https://msdn.microsoft.com/library/Microsoft.SharePoint.Taxonomy.aspx) navigation namespace, providing methods and properties specifically designed to associate those metadata items with navigation elements. Other classes, like [TaxonomySiteMapNode](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.Navigation.TaxonomySiteMapNode.aspx) , enable you to provide metadata with various site navigation elements, such as site map nodes and other parts of your site's navigation. Other classes enable caching and context for managed navigation.
  
    
    
You can display taxonomy-driven navigation links in the Global Navigation. The Global Navigation is a navigation layer with one or more layers that's always present, which often appears at the top of a site and displays the top-level content categories. You can also display these links in the current navigation control that often appears on the left side of a page. The current navigation control represents the next level of hierarchy for the category chosen in Global Navigation, or a set of links that belong to that category.
  
    
    

## Friendly URLs and the managed navigation provider
<a name="SP15_ManagedNav_FriendlyURLs"> </a>

When you browse to a SharePoint site for the first time, you may notice that the URL format has changed. Instead of an address with a  `/Pages/default.aspx` extension, the page URL ends with only `/`. Managed navigation provides a scheme for friendly URLs that is consistent across site, category, and item pages.
  
    
    
The managed navigation provider enables this experience. When you navigate to the root of any site that uses the managed navigation provider, the Site Welcome Page setting controls the page that's loaded and displayed in the browser, but the URL you see (and that appears in search results) is rewritten to this friendlier format.
  
    
    
Any page, including your site's Welcome Page, can have a friendly URL. Depending on how you configure your site, most pages automatically get a friendly URL. Friendly URLs can be localized.
  
    
    

## Managed Navigation APIs
<a name="SP15_ManagedNav_ManagedNavAPIs"> </a>

The taxonomy API provides several new methods and properties in SharePoint that you can use to customize terms, term sets, and other metadata elements in the term store for use in site navigation scenarios. These APIs are available in the .NET client, .NET server, Silverlight, and JavaScript programming models.
  
    
    

## Code Example: Customizing managed navigation with the .NET client object model (CSOM) API
<a name="SP15_ManagedNav_CustomizingManagedNavWithNETCSOM"> </a>

When you use the .NET client object model for taxonomy, you can create a new navigation term set if a term store exists for the current site collection, or convert an existing term set into one that supports managed navigation.
  
    
    

  
    
    



```cs

///Create a navigation term set.
public class NavigationTermSetTests
    {
      public void CreateNavigationTermSet()
              {
               ClientContext clientContext = new ClientContext(TestConfig.ServerUrl);
            
                 TaxonomySession taxonomySession = TaxonomySession.GetTaxonomySession(clientContext);
                 taxonomySession.UpdateCache();

                 clientContext.Load(taxonomySession, ts => ts.TermStores);
                 clientContext.ExecuteQuery();

                 if (taxonomySession.TermStores.Count == 0)
                 throw new InvalidOperationException("The Taxonomy Service is offline or missing");

                 TermStore termStore = taxonomySession.TermStores[0];
                 clientContext.Load(termStore, 
                 ts => ts.Name, 
                 ts => ts.WorkingLanguage);

                 // Does the TermSet object already exist?
                 TermSet existingTermSet;

                 // Handles an error that occurs if the return value is null.
                 ExceptionHandlingScope exceptionScope = new ExceptionHandlingScope(clientContext);
             using (exceptionScope.StartScope())
                 {
                 using (exceptionScope.StartTry())
                 {
                 existingTermSet = termStore.GetTermSet(TestConfig.NavTermSetId);
                 }
                 using (exceptionScope.StartCatch())
                {
                }
                }
                clientContext.ExecuteQuery();

                if (!existingTermSet.ServerObjectIsNull.Value)
                {
                Log("CreateNavigationTermSet(): Deleting old TermSet");
                existingTermSet.DeleteObject();
                termStore.CommitAll();
                clientContext.ExecuteQuery();
                }

                Log("CreateNavigationTermSet(): Creating new TermSet");

               // Creates a new TermSet object.
            TermGroup siteCollectionGroup = termStore.GetSiteCollectionGroup(clientContext.Site, 
                createIfMissing: true);
            TermSet termSet = siteCollectionGroup.CreateTermSet("Navigation Demo", TestConfig.NavTermSetId, 
                termStore.WorkingLanguage);

            termStore.CommitAll();
            clientContext.ExecuteQuery();

            NavigationTermSet navTermSet = NavigationTermSet.GetAsResolvedByWeb(clientContext,
                termSet, clientContext.Web, "GlobalNavigationTaxonomyProvider");

            navTermSet.IsNavigationTermSet = true;
            navTermSet.TargetUrlForChildTerms.Value = "~site/Pages/Topics/Topic.aspx";

            termStore.CommitAll();
            clientContext.ExecuteQuery();

            NavigationTerm term1 = navTermSet.CreateTerm("Term 1", NavigationLinkType.SimpleLink, Guid.NewGuid());
            term1.SimpleLinkUrl = "http://www.bing.com/";

            Guid term2Guid = new Guid("87FAA433-4E3E-4500-AA5B-E04330B12ACD");
            NavigationTerm term2 = navTermSet.CreateTerm("Term 2", NavigationLinkType.FriendlyUrl,
                term2Guid);

            NavigationTerm childTerm = term2.CreateTerm("Term 2 child", NavigationLinkType.FriendlyUrl, Guid.NewGuid());

            childTerm.GetTaxonomyTerm().TermStore.CommitAll();
            clientContext.ExecuteQuery();
}


```


## Code Example: Customizing managed navigation with the .NET server object model API
<a name="SP15_ManagedNav_CustomizingManagedNavNETServerObjectModel"> </a>

You can use the .NET server taxonomy classes and methods in the  [Microsoft.SharePoint.Taxonomy](https://msdn.microsoft.com/library/Microsoft.SharePoint.Taxonomy.aspx) and [Microsoft.SharePoint.Publishing.Navigation](https://msdn.microsoft.com/library/Microsoft.SharePoint.Publishing.Navigation.aspx) namespaces to create a new navigation term set.
  
    
    

  
    
    



```cs

///Create a navigation term set.
using (SPSite site = new SPSite(TestConfig.ServerUrl))
            {
                using (SPWeb web = site.OpenWeb())
                {
                    TaxonomySession taxonomySession = new TaxonomySession(site, updateCache: true);

                    /// Use the first TermStore object in the list.
                    if (taxonomySession.TermStores.Count == 0)
                        throw new InvalidOperationException("The Taxonomy Service is offline or missing");

                    TermStore termStore = taxonomySession.TermStores[0];

                    /// Does the TermSet object already exist?
                    TermSet existingTermSet = termStore.GetTermSet(TestConfig.NavTermSetId);
                    if (existingTermSet != null)
                    {
                        Log("CreateNavigationTermSet(): Deleting old TermSet");
                        existingTermSet.Delete();
                        termStore.CommitAll();
                    }

                    Log("CreateNavigationTermSet(): Creating new TermSet");

                    /// Create a new TermSet object.
                    Group siteCollectionGroup = termStore.GetSiteCollectionGroup(site);
                    TermSet termSet = siteCollectionGroup.CreateTermSet("Navigation Demo", TestConfig.NavTermSetId);

                    NavigationTermSet navTermSet = NavigationTermSet.GetAsResolvedByWeb(termSet, web,
                        StandardNavigationProviderNames.GlobalNavigationTaxonomyProvider);

                    navTermSet.IsNavigationTermSet = true;
                    navTermSet.TargetUrlForChildTerms.Value = "~site/Pages/Topics/Topic.aspx";

                    NavigationTerm term1 = navTermSet.CreateTerm("Term 1", NavigationLinkType.SimpleLink);
                    term1.SimpleLinkUrl = "http://www.bing.com/";

                    Guid term2Guid = new Guid("87FAA433-4E3E-4500-AA5B-E04330B12ACD");
                    NavigationTerm term2 = navTermSet.CreateTerm("Term 2", NavigationLinkType.FriendlyUrl,
                        term2Guid);

                    /// Verify that the NavigationTermSetView is being applied correctly.
                    Assert.AreEqual(web.ServerRelativeUrl + "/term-2", term2.GetResolvedDisplayUrl(null).ToString());

                    string expectedTargetUrl = web.ServerRelativeUrl 
                        + "/Pages/Topics/Topic.aspx?TermStoreId=" + termStore.Id.ToString() 
                        + "&amp;TermSetId=" + TestConfig.NavTermSetId.ToString()
                        + "&amp;TermId=" + term2Guid.ToString();
                    Assert.AreEqual(expectedTargetUrl, term2.GetResolvedTargetUrl(null, null).ToString());

                    NavigationTerm childTerm = term2.CreateTerm("Term 2 child", NavigationLinkType.FriendlyUrl);
                    Assert.AreEqual(web.ServerRelativeUrl + "/term-2/term-2-child", childTerm.GetResolvedDisplayUrl(null).ToString());

                    /// Commit changes.
                    childTerm.GetTaxonomyTerm().TermStore.CommitAll();
                }
            }
```


## See also
<a name="SP15_ManagedNav_AdditionalResources"> </a>


-  [Content Search Web Part in SharePoint](content-search-web-part-in-sharepoint.md)
    
  

