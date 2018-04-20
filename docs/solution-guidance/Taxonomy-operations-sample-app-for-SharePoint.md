---
title: Taxonomy operations sample app for SharePoint
ms.date: 11/03/2017
---
# Taxonomy operations sample app for SharePoint

As part of your Enterprise Content Management (ECM) strategy, you can create and read taxonomy data on a SharePoint list.
    
_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

The Core.MMS sample console application shows you how to interact with the SharePoint managed metadata service to create and retrieve terms, term sets, and groups. This sample will also run in a provider-hosted app, such as an ASP.NET MVC web application. Use this solution if you want to migrate terms between SharePoint farms or display terms in your custom app.   

## Before you begin
<a name="sectionSection0"> </a>

To get started, download the  [Core.MMS](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMS) sample app from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

Before you run this app, you'll need:

- The URL of your SharePoint site.
    
- Permission to access the term store in the managed metadata service. Figure 1 shows the Office 365 admin center where these permissions are assigned. 
    
    **Figure 1. Assigning permissions to the term store in the SharePoint admin center**

    ![Screenshot of the SharePoint admin center with the term store, taxonomy term store search box, and term store administrators boxes highlighted.](media/5a9d8c07-afce-4d9e-b0d1-10b28e089278.png)
    
To assign permissions to the term store:

  1. From the Office 365 admin center, choose  **term store**.
    
  2. In  **TAXONOMY TERM STORE**, choose the term set that you want to assign an administrator to.
    
  3. In  **Term Store Administrators**, enter the organizational account that requires term store administrator permissions.

## Using the Core.MMS sample app
<a name="sectionSection1"> </a>

When you start the app, you see a console application similar to Figure 2. You are prompted to enter the URL of your SharePoint 2013 or SharePoint Online site and your credentials. 

**Figure 2. Core.MMS console application**

![Screenshot of the Core.MMS sample app console, prompting for the SharePoint user name and password.](media/5ddaf3f1-2d7c-4818-9a9a-b0e905226db5.png)

After you supply the SharePoint URL and your credentials, user authentication occurs. The following code performs user authentication in SharePoint Online.
    
> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```csharp
ClientContext cc = new ClientContext(siteUrl);
cc.AuthenticationMode = ClientAuthenticationMode.Default;
// For SharePoint Online.
cc.Credentials = new SharePointOnlineCredentials(userName, pwd);
```

The following code performs user authentication in SharePoint Online Dedicated or in an on-premises SharePoint 2013 farm.

```csharp
ClientContext cc = new ClientContext(siteUrl);
cc.AuthenticationMode = ClientAuthenticationMode.Default;
// For SharePoint Online Dedicated or on-premises .
cc.Credentials = new NetworkCredential(userName, pwd);
```

The  **CreateNecessaryMMSTermsToCloud** method creates a group, term set, and several terms in the managed metadata service. The code first gets a reference to the **TaxonomySession** object, then the **TermStore** object, before creating the custom **TermGroup**,  **TermSet**, and new terms. 

```csharp
private static void CreateNecessaryMMSTermsToCloud(ClientContext cc)
        {
            // Get access to taxonomy CSOM.
            TaxonomySession taxonomySession = TaxonomySession.GetTaxonomySession(cc);
            cc.Load(taxonomySession);
            cc.ExecuteQuery();

            if (taxonomySession != null)
            {
                TermStore termStore = taxonomySession.GetDefaultSiteCollectionTermStore();
                if (termStore != null)
                {
                    //
                    // Create group, termset, and terms.
                    //
                    TermGroup myGroup = termStore.CreateGroup("Custom", Guid.NewGuid());
                    TermSet myTermSet = myGroup.CreateTermSet("Colors", Guid.NewGuid(), 1033);
                    myTermSet.CreateTerm("Red", 1033, Guid.NewGuid());
                    myTermSet.CreateTerm("Orange", 1033, Guid.NewGuid());
                    myTermSet.CreateTerm("Yellow", 1033, Guid.NewGuid());
                    myTermSet.CreateTerm("Green", 1033, Guid.NewGuid());
                    myTermSet.CreateTerm("Blue", 1033, Guid.NewGuid());
                    myTermSet.CreateTerm("Purple", 1033, Guid.NewGuid());

                    cc.ExecuteQuery();
                }
            }
        }
```

After creating the new terms, the  **GetMMSTermsFromCloud()** method retrieves all term groups, term sets, and terms from the managed metadata service. Similar to the **CreateNecessaryMMSTermsToCloud()** method, the code first gets a reference to the **TaxonomySession** object, then the **TermStore** object, before retrieving and displaying the term information.

```csharp
private static void GetMMSTermsFromCloud(ClientContext cc)
        {
            //
            // Load up the taxonomy item names.
            //
            TaxonomySession taxonomySession = TaxonomySession.GetTaxonomySession(cc);
            TermStore termStore = taxonomySession.GetDefaultSiteCollectionTermStore();
            cc.Load(termStore,
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
            cc.ExecuteQuery();

            //
            // Writes the taxonomy item names.
            //
            if (taxonomySession != null)
            {
                if (termStore != null)
                {
                    foreach (TermGroup group in termStore.Groups)
                    {
                        Console.WriteLine("Group " + group.Name);

                        foreach (TermSet termSet in group.TermSets)
                        {
                            Console.WriteLine("TermSet " + termSet.Name);

                            foreach (Term term in termSet.Terms)
                            {
                                // Writes root-level terms only.
                                Console.WriteLine("Term " + term.Name);
                            }
                        }
                    }
                }
            }
        }
```

You will see your term data from your managed metadata service displayed in the console application, as shown in Figure 3, and in the term store in your managed metadata service, as shown in Figure 4.

**Figure 3. Console application showing Groups, TermSets, and Terms in the managed metadata service**

![Screenshot of the console application with term data output.](media/a8907a10-8b4d-463f-89bc-811f9af4b34e.png)

**Figure 4. SharePoint admin center showing Groups, TermSets, and Terms in the managed metadata service**

![Screenshot of the SharePoint admin center with the taxonomy term store expanded.](media/9e623deb-569b-457a-ad1c-fa6d0d4d0a38.png)

## See also
<a name="bk_addresources"> </a>

-  [Enterprise Content Management solutions for SharePoint 2013 and SharePoint Online](Enterprise-Content-Management-solutions-for-SharePoint-2013-and-SharePoint-Online.md)
    
-  [Core.MMSSync sample](https://github.com/SharePoint/PnP/tree/master/Samples/Core.MMSSync)
    
-  [Core.ContentTypesAndFields sample](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ContentTypesAndFields)
