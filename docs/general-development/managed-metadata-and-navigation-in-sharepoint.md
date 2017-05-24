---
title: Managed metadata and navigation in SharePoint
ms.prod: SHAREPOINT
ms.assetid: b66d4ec1-a2ef-49cc-8ca5-a6b516bff02e
---


# Managed metadata and navigation in SharePoint

  
    
    
![Conceptual overview topic](../../images/mod_icon_badge_conoverview.png)
  
    
    

  
    
    

  
    
    
Learn about enterprise managed metadata (EMM) and navigation features in SharePoint.
## Managed metadata feature enhancements in SharePoint for developers
<a name="SP15_ManagedMetadataAndNav_ManagedMetadataFeatureEnhancements"> </a>

You can use managed metadata to build taxonomies and tagging strategies that meet specific, detailed business needs. In SharePoint, the basic managed metadata API set is expanded and enhanced to provide more capabilities and scenario support.
  
    
    

## .NET client object model (CSOM) support for managed metadata APIs
<a name="SP15_ManagedMetadataAndNav_CSOMSupport"> </a>

The SharePoint CSOM supports taxonomy customization and development. Taxonomy is available in .NET client (CSOM), Silverlight, and JavaScript programming models. Developing with it is logically similar to developing with the .NET server programming model. You may find it useful to develop CSOM solutions to support scenarios where reading content is more common than authoring or administering it. You need to use CSOM to enable taxonomy use in a cloud scenario like SharePoint Online or for a subset of scenarios that are available on premises.
  
    
    
When you want to create a new CSOM project in Visual Studio that uses taxonomy functionality, set the following references:
  
    
    

- Microsoft.SharePoint.Client.dll
    
  
- Microsoft.SharePoint.Client.Runtime.dll
    
  
- Microsoft.SharePoint.Client.Taxonomy.dll
    
  
Developing customizations with CSOM is very similar to developing .NET server taxonomy solutions: get a reference to the **TaxonomySession** object and the **TermStore** object, **Group** objects, **TermSet** objects, and **Term** objects required for the session.
  
    
    

### Code Examples: Basic operations with the Taxonomy CSOM
<a name="SP15_ManagedMetadataAndNav_ExampleBasicOperations"> </a>

You can use the following code examples to complete basic operations with the taxonomy CSOM. The first example creates a **Group** object, a **TermSet** object, and **Term** objects. The second example iterates on a **Group** object and writes its contents.
  
    
    

```cs

       private void CreateColorsTermSet(string siteUrl)
        {
           ClientContext clientContext = new ClientContext(siteUrl);
 
           TaxonomySession taxonomySession = TaxonomySession.GetTaxonomySession(clientContext);
            clientContext.Load(taxonomySession,
                ts => ts.TermStores.Include(
                    store => store.Name,
                    store => store.Groups.Include(
                        group => group.Name
                        )
                    )
                );
            clientContext.ExecuteQuery();
 
           if( taxonomySession != null )
            {
               TermStore termStore = taxonomySession.GetDefaultSiteCollectionTermStore();
               if (termStore != null)
                {
                   //
                   //  Create group, termset, and terms.
                   //
                   TermGroup myGroup = termStore.CreateGroup("MyGroup",Guid.NewGuid());
                   TermSet myTermSet = myGroup.CreateTermSet("Color",Guid.NewGuid(), 1033);
                    myTermSet.CreateTerm("Red", 1033,Guid.NewGuid());
                    myTermSet.CreateTerm("Orange", 1033,Guid.NewGuid());
                    myTermSet.CreateTerm("Yellow", 1033,Guid.NewGuid());
                    myTermSet.CreateTerm("Green", 1033,Guid.NewGuid());
                    myTermSet.CreateTerm("Blue", 1033,Guid.NewGuid());
                    myTermSet.CreateTerm("Purple", 1033,Guid.NewGuid());
 
                    clientContext.ExecuteQuery();
                }
            }
        }
 
       private void DumpTaxonomyItems(string siteUrl)
        {
           ClientContext clientContext = new ClientContext(siteUrl);
 
           //
           // Load up the taxonomy item names.
           //
            TaxonomySession taxonomySession =TaxonomySession.GetTaxonomySession(clientContext);
           TermStore termStore = taxonomySession.GetDefaultSiteCollectionTermStore();
            clientContext.Load(termStore,
                    store => store.Name,
                    store => store.Groups.Include(
                        group => group.Name,
                        group => group.TermSets.Include(
                            termSet => termSet.Name,
                            termSet => termSet.Terms.Include(
                                term => term.Name)
                        )
                    )
            );
            clientContext.ExecuteQuery();
 
 
           //
           //Writes the taxonomy item names.
           //
           if( taxonomySession != null )
            {
               if (termStore != null)
                {
                   foreach( TermGroup groupin termStore.Groups)
                    {
                       Console.WriteLine("Group " + group.Name);
 
                       foreach( TermSet termSetin group.TermSets )
                        {
                           Console.WriteLine("TermSet " + termSet.Name);
 
                            foreach(Term term in termSet.Terms)
                            {
                               //Writes root-level terms only.
                               Console.WriteLine("Term " + term.Name);
                            }
                        }
                    }
                }
            }
 
        }

```


  
    
    

## Pinning
<a name="SP15_ManagedMetadataAndNav_Pinning"> </a>

In Microsoft SharePoint Server 2010, users could reuse terms (and all terms nested under the reused terms) in other locations in the term hierarchy. After these terms were reused, they could be modified and changes would be seen everywhere the terms were reused. SharePoint introduces term pinning. A pinned term is just like a term that is reused, except it is read only and cannot be changed in the locations where the term is reused. For an example, see  [How to: Use code to pin terms to navigation term sets in SharePoint](how-to-use-code-to-pin-terms-to-navigation-term-sets-in-sharepoint).
  
    
    

  
    
    

## Datasheet view support for managed metadata column types
<a name="SP15_ManagedMetadataAndNav_DatasheetViewSupport"> </a>

In SharePoint, the datasheet view functionality has changed. Now, the datasheet uses a double-click action to open standard view for grid editing. You can now edit metadata columns using the same features that are available when you edit individual items. This includes access to the term set that is behind the column. This feature is all about bringing the metadata modification functionality available when editing an individual item to datasheet editing.
  
    
    

## Managed navigation
<a name="SP15_ManagedMetadataAndNav_ManagedNav"> </a>

Managed navigation uses managed metadata features, such as the ability to tag items with terms and manage terms in a term store, to provide highly customized site navigation. The structured navigation that depends on the SharePoint infrastructure is also still available in SharePoint.
  
    
    

## Friendly URLs
<a name="SP15_ManagedMetadataAndNav_FriendlyURLs"> </a>

Friendly URLs are a shorter URL format displayed in the address bar of most SharePoint publishing pages, including the Welcome Page of your site. They are SEO-friendly and appear in search results. 
  
    
    

## Support for new scenarios
<a name="SP15_ManagedMetadataAndNav_SupportForNewScenarios"> </a>

A term store manager can enhance and expand term usage models based on more flexible and powerful managed metadata functionality in :
  
    
    

- Link to another site collection and view others' terms. If you want to make your term set available to other site collections connected to the managed metadata service, create a **global term set**. If you want to create a private term set that is available only to a specific site collection when it is stored in the managed metadata service, create a **local term set**. 
    
  
- Block users from using keywords outside of a specific term set.
    
  
- Gain additional multilingual support, including support for automated translation and flexible LCIDs. 
    
  

## Unsupported scenarios for working with custom site definitions
<a name="SP15_ManagedMetadataAndNav_UnsupportedScenarios"> </a>


- SharePoint does not support creating taxonomy fields (managed metadata site columns) declaratively by way of XML definition.
    
  
- SharePoint does not support the use of taxonomy fields (managed metadata site columns) in site templates.
    
  
- For more information, see Microsoft Support Article #898631:  [Supported and unsupported scenarios](http://support2.microsoft.com/default.aspx?scid=kb;EN-US;898631
)
    
  

## Additional resources
<a name="SP15_ManagedMetadataAndNav_AdditionalResources"> </a>


-  [Managed navigation in SharePoint](managed-navigation-in-sharepoint)
    
  
-  [Content Search Web Part in SharePoint](content-search-web-part-in-sharepoint)
    
  

