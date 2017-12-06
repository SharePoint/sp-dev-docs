---
title: Implement a SharePoint site classification solution
ms.date: 11/03/2017
---
# Implement a SharePoint site classification solution

Implement a site classification solution in SharePoint.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

Even with good governance, SharePoint sites can proliferate and grow out of control. Sites are created as they are needed, but are rarely deleted. Search crawl is burdened by unused site collections, and search produces outdated and irrelevant results. Site classification allows you to identify and preserve sensitive data. This article shows you how to use the [Core.SiteClassification](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.SiteClassification) sample to implement a site classification solution, as well as use SharePoint site policies to enforce deletion. You can integrate this solution into your existing site provisioning solution to better manage your sites.

## Before you begin

To get started, download the [Core.SiteClassification](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.SiteClassification) sample from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Define and set site policies

Initially, you need to define and set the site policies that will be available in all your site collections. The Core.SiteClassification sample applies to SharePoint Online MT, but can be used as well in SharePoint Online Dedicated or SharePoint on-premises. Site polices are set in the Content Type Hub, which in SharePoint Online MT is located at  `https://[tenanatname]/sites/contentTypeHub`. To set site policies, go to  **Settings** > **Site Collection Administration** > **Site Policies** > ** create**. The  **New Site Policy** page appears. For more information about site policy options, see [Overview of site policies in SharePoint 2013](http://technet.microsoft.com/en-US/library/jj219569%28v=office.15%29.aspx).

On the  **New Site Policy** page, enter the following fields:

-  **Name:** HBI
    
-  **Description:** This is super secret.
    
- Set radio button  **Delete sites automatically**.
    
- For  **Deletion Event:**, use Site created date + 1 years.
    
- Select the  **Send an email notification to site owners this far in advance of deletion:** check box, and set it to 1 months.
    
- Select the  **Send follow-up notifications every:** check box, and set it to 14 days.
    
- Select the  **Owners can postpone imminent deletion for:** check box, and set it to 1 months.
    
- Select the  **The site collection will be read-only when it is closed** check box.
    
Repeat these steps two more times, for the names  **MBI** and **LBI**. Use different settings for deletion or retention policies. When you're finished, you can publish the new policies.

## Insert a custom action

You can insert a custom action for site classification to the  **Settings** page and the **SharePoint gear** icon. This action is only available to users with **ManageWeb** permission. For more information, see [Default Custom Action Locations and IDs](http://msdn.microsoft.com/en-us/library/office/bb802730%28v=office.15%29.aspx).

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```C#
/// <summary>
/// Adds a custom Action to a Site Collection.
/// </summary>
/// <param name="ctx">The Authenticated client context.</param>
/// <param name="hostUrl">The Provider hosted URL for the Application</param>

static void AddCustomAction(ClientContext ctx, string hostUrl)
{
    var _web = ctx.Web;
    ctx.Load(_web);
    ctx.ExecuteQuery();

    // You only want the action to show up if you have manage web permissions.
    BasePermissions _manageWebPermission = new BasePermissions();
    _manageWebPermission.Set(PermissionKind.ManageWeb);

    CustomActionEntity _entity = new CustomActionEntity()
    {
        Group = "SiteTasks",
        Location = "Microsoft.SharePoint.SiteSettings",
        Title = "Site Classification",
        Sequence = 1000,
        Url = string.Format(hostUrl, ctx.Url),
        Rights = _manageWebPermission,
    };

    CustomActionEntity _siteActionSC = new CustomActionEntity()
    {
        Group = "SiteActions",
        Location = "Microsoft.SharePoint.StandardMenu",
        Title = "Site Classification",
        Sequence = 1000,
        Url = string.Format(hostUrl, ctx.Url),
        Rights = _manageWebPermission
    };
    _web.AddCustomAction(_entity);
    _web.AddCustomAction(_siteActionSC);
}
```

## Custom site classification

You can use the  **Edit Site Information** page to choose the following specific classification options:

-  **Audience Scope:** Set to **Enterprise**,  **Organization**, or  **Team**.
    
-  **Security Classification:** Set to one of the Classification categories you have entered, such as **LBI**.
    
-  **Expiration Date:** Override the default expiration date, which is based on the classification previously entered.
    
Both  **Audience Reach** and **Site Classification** are searchable and will have managed properties associated with them after a crawl takes place. You can then use these properties to search for specific types of sites by using a custom hidden list within the site collection. This list is implemented in the [Core.SiteClassification.Common](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.SiteClassification/Core.SiteClassification.Common) project in the **SiteManagerImpl** class.

```C#
private void CreateSiteClassificationList(ClientContext ctx)
{
  var _newList = new ListCreationInformation()
    {
    Title = SiteClassificationList.SiteClassificationListTitle,
    Description = SiteClassificationList.SiteClassificationDesc,
    TemplateType = (int)ListTemplateType.GenericList,
    Url = SiteClassificationList.SiteClassificationUrl,
    QuickLaunchOption = QuickLaunchOptions.Off
    };

  if(!ctx.Web.ContentTypeExistsById(SiteClassificationContentType.SITEINFORMATION_CT_ID))
    {
    // Content type.
    ContentType _contentType = ctx.Web.CreateContentType(SiteClassificationContentType.SITEINFORMATION_CT_NAME,
    SiteClassificationContentType.SITEINFORMATION_CT_DESC,
    SiteClassificationContentType.SITEINFORMATION_CT_ID,
    SiteClassificationContentType.SITEINFORMATION_CT_GROUP);

    FieldLink _titleFieldLink = _contentType.FieldLinks.GetById(new Guid("fa564e0f-0c70-4ab9-b863-0177e6ddd247"));
    titleFieldLink.Required = false;
    contentType.Update(false);

    // Key Field.
    ctx.Web.CreateField(SiteClassificationFields.FLD_KEY_ID, 
      SiteClassificationFields.FLD_KEY_INTERNAL_NAME, 
      FieldType.Text, 
      SiteClassificationFields.FLD_KEY_DISPLAY_NAME, 
      SiteClassificationFields.FIELDS_GROUPNAME);

    // Value field.
    ctx.Web.CreateField(SiteClassificationFields.FLD_VALUE_ID, 
      SiteClassificationFields.FLD_VALUE_INTERNAL_NAME, 
      FieldType.Text, 
      SiteClassificationFields.FLD_VALUE_DISPLAY_NAME, 
      SiteClassificationFields.FIELDS_GROUPNAME);

    // Add Key Field to content type.
    ctx.Web.AddFieldToContentTypeById(SiteClassificationContentType.SITEINFORMATION_CT_ID, 
      SiteClassificationFields.FLD_KEY_ID.ToString(), 
      true);

    // Add Value Field to content type.
    ctx.Web.AddFieldToContentTypeById(SiteClassificationContentType.SITEINFORMATION_CT_ID,
      SiteClassificationFields.FLD_VALUE_ID.ToString(),
      true);
    }

  var _list = ctx.Web.Lists.Add(_newList);

  list.Hidden = true;
  list.ContentTypesEnabled = true;
  list.Update();
  ctx.Web.AddContentTypeToListById(SiteClassificationList.SiteClassificationListTitle,
    SiteClassificationContentType.SITEINFORMATION_CT_ID, true);
  this.CreateCustomPropertiesInList(_list);
  ctx.ExecuteQuery();
  this.RemoveFromQuickLaunch(ctx, SiteClassificationList.SiteClassificationListTitle);

}
```

By default, when you create a list either out of the box or by using CSOM, the list will be available in the  **Recent** menu. The list needs to be hidden, however. The following code removes the item from the Recent menu.

```C#
private void RemoveFromQuickLaunch(ClientContext ctx, string listName)
  {
  Site _site = ctx.Site;
  Web _web = _site.RootWeb;

  ctx.Load(_web, x => x.Navigation, x => x.Navigation.QuickLaunch);
  ctx.ExecuteQuery();

  var _vNode = from NavigationNode _navNode in _web.Navigation.QuickLaunch
      where _navNode.Title == "Recent"
      select _navNode;

  NavigationNode _nNode = _vNode.First<NavigationNode>();
  ctx.Load(_nNode.Children);
  ctx.ExecuteQuery();
  var vcNode = from NavigationNode cn in _nNode.Children
     where cn.Title == listName
     select cn;
  NavigationNode _cNode = vcNode.First<NavigationNode>();
 _cNode.DeleteObject();
  ctx.ExecuteQuery();    
  }
```

The Core.SiteClassification sample provides for the possibility that a site administrator or someone with permission can remove the new list. When this page is accessed, the list is created again, but the sample doesn't set the properties back. You can avoid this by extending the sample to modify the permissions on the list so that only site collection administrators have access. Alternatively, you can use the [Core.SiteEnumeration](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.SiteEnumeration) PnP sample to do checks on the list and notify site administrators accordingly.

The list verification check is also implemented in the  **SiteManagerImpl** class, in the **Initialize** member.

```C#
internal void Initialize(ClientContext ctx)
{
try {
       	 var _web = ctx.Web;
         var lists = _web.Lists;
         ctx.Load(_web);
         ctx.Load(lists, lc => lc.Where(l => l.Title == SiteClassificationList.SiteClassificationListTitle));
         ctx.ExecuteQuery();
                
          if (lists.Count == 0) {
                this.CreateSiteClassificationList(ctx); 
          }
      }
      catch(Exception _ex)
         {

         }
     }
}
```

> [!NOTE] 
> For more information, see [Create a list in the host web when your SharePoint add-in is installed, and remove it from the recent stuff list](http://blogs.technet.com/b/speschka/archive/2014/05/07/create-a-list-in-the-host-web-when-your-sharepoint-app-is-installed-and-remove-it-from-the-recent-stuff-list.aspx).

## Add a classification indicator to site page

You can add an indicator to a site page to show its classification. The Core.SiteClassificationsample shows how an image showing classification is embedded next to the  **Site Title**. In earlier versions of SharePoint, this is done via a server-side delegate control. Although you can use a custom master page with JavaScript, this sample uses an embedded JavaScript pattern. When you change the **Site Policy** in the **Edit Site Information** page, this changes the site indicator to show a small box using different background colors for each of the site classification options.

The following method is defined in the Core.SiteClassificationWeb project, scripts, and classifier.js. The images are stored in a Microsoft Azure website. You will have to change the hard-coded URLs to match your environment.

```C#
function setClassifier() {
    if (!classified)
    {
        var clientContext = SP.ClientContext.get_current();
        var query = "<View><Query><Where><Eq><FieldRef Name='SC_METADATA_KEY'/><Value Type='Text'>sc_BusinessImpact</Value></Eq></Where></Query><ViewFields><FieldRef Name='ID'/><FieldRef Name='SC_METADATA_KEY'/><FieldRef Name='SC_METADATA_VALUE'/></ViewFields></View>";
        var list = clientContext.get_web().get_lists().getByTitle("Site Information");
        clientContext.load(list);
        var camlQuery = new SP.CamlQuery();
        camlQuery.set_viewXml(query);
        var listItems = list.getItems(camlQuery);
        clientContext.load(listItems);

        clientContext.executeQueryAsync(Function.createDelegate(this, function (sender, args) {
            var listItemInfo;
            var listItemEnumerator = listItems.getEnumerator();

            while (listItemEnumerator.moveNext()) {
                listItemInfo = listItemEnumerator.get_current().get_item('SC_METADATA_VALUE');
                
                var pageTitle = $('#pageTitle')[0].innerHTML;
                if (pageTitle.indexOf("img") > -1) {
                    classified = true;
                }
                else {
                    var siteClassification = listItemInfo;
                    if (siteClassification == "HBI") {
                        var img = $("<a href='http://insertyourpolicy' target=_blank><img id=classifer name=classifer src='https://spmanaged.azurewebsites.net/content/img/hbi.png' title='Site contains personally identifiable information (PII), or unauthorized release of information on this site would cause severe or catastrophic loss to Contoso.' alt='Site contains personally identifiable information (PII), or unauthorized release of information on this site would cause severe or catastrophic loss to Contoso.'></a>");
                        $('#pageTitle').prepend(img);
                        classified = true;
                    }
                    else if (siteClassification == "MBI") {
                        var img = $("<a href='http://insertyourpolicy' target=_blank><img id=classifer name=classifer src='https://spmanaged.azurewebsites.net/content/img/mbi.png' title='Unauthorized release of information on this site would cause severe impact to Contoso.' alt='Unauthorized release of information on this site would cause severe impact to Contoso.'></a>");
                        $('#pageTitle').prepend(img);
                        classified = true;
                    }
                    else if (siteClassification == "LBI") {
                        var img = $("<a href='http://insertyourpolicy' target=_blank><img id=classifer name=classifer src='https://spmanaged.azurewebsites.net/content/img/lbi.png' title='Limited or no impact to Contoso if publically released.' alt='Limited or no impact to Contoso if publically released.'></a>");
                        $('#pageTitle').prepend(img);
                        classified = true;
                    }
                }
            }
        }));
    }
```

## Alternative approach

You can use extension method  **Web.AddIndexedPropertyBagKey** in the ObjectPropertyBagEntry.cs file in[OfficeDevPnP.Core](https://github.com/SharePoint/PnP/tree/96eff6153389d6d21358480878de9cc8fa21abab/OfficeDevPnP.Core) to store the classification values in site property bags instead of a list. The method enables property bags to be crawled or searchable.

## Additional resources
<a name="bk_addresources"> </a>

- [SharePoint site provisioning solutions](sharepoint-site-provisioning-solutions.md)
    
- [OfficeDevPnP.Core sample](https://github.com/SharePoint/PnP/tree/96eff6153389d6d21358480878de9cc8fa21abab/OfficeDevPnP.Core)
    
- [Core.SiteEnumeration sample](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.SiteEnumeration)
