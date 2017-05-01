---
title: Use Feature upgrade to apply new SharePoint 2013 master pages when upgrading from SharePoint 2010
ms.prod: SHAREPOINT
ms.assetid: de3169f1-715e-4f80-bfbf-caea744e2a0b
---


# Use Feature upgrade to apply new SharePoint 2013 master pages when upgrading from SharePoint 2010
Learn how to reset a custom master page during the  `FeatureUpgrading` event when you're upgrading a SharePoint 2013 site from the 2010 to the 2013 compatibility mode.
When you upgrade your SharePoint 2010 customizations to SharePoint 2013, any references to custom master pages you've created switch back to the default.master page. If you've deployed a feature that contains one or more custom master pages to an upgraded SharePoint 2013 site collection that is running in SharePoint 2010 compatibility mode you'll need to reset your SharePoint 2013 master pages when you upgrade to the 2013 compatibility mode. This topic explains how to use a feature receiver to make sure that your SharePoint 2013 custom master pages get reset when you upgrade from SharePoint 2010. 
  
    
    


## Use custom upgrade code to reset a master page

As the guidance in  [Deploy custom features to upgraded site collections in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn673579%28v=office.15%29.aspx) explains, when you upgrade from SharePoint 2010 to SharePoint 2013, the site collections in your farm will run in SharePoint 2010 compatibility mode by default. Depending on the approach to upgrading your custom features that you've taken, you'll have deployed any given feature by using either one or two solution packages:
  
    
    

- A single solution package that can be deployed to both the "14" and the "15" compatibility levels, either because of custom logic for the "15" compatibility level, or because the feature works without any problems in both the "14" and the "15" compatibility levels.
    
  
- Two solution packages that contain different versions of the same feature. This approach is called "feature masking."
    
  
In either case, during upgrade any custom master pages you've created will revert to the default.master page. If you don't reset these pages with logic inside your feature, you'll need to reactivate the feature (or the "15" version of the feature) to reset the master pages to your custom versions. You can reset your 2013 custom master pages by using a feature receiver that is tied to the  `FeatureUpgrading` event.
  
    
    

### To reset a 2013 custom master page with a feature receiver


1. Open your solution in Visual Studio. Find your feature under the **Features** node in Solution Explorer, and open the feature.xml file for your feature.
    
  
2. Add an  `<UpgradeActions>` section to the feature.xml file and make sure that the action applies only to the version of the feature that is currently in use for the "14" compatibility level. This section specifies the name of an action to perform when the feature is upgraded. The following example specifies an upgrade when version 1.0.0.0 of the feature is in use. In the example, the action `UpgradeFeature` is passed to the implementation of the **FeatureUpgrading(SPFeatureReceiverProperties, String, IDictionary<String, String>)** method that you'll define later after you've added a feature receiver.
    
XML
  
<UpgradeActions
    ReceiverAssembly="MyFeatureReceiver, Version=2.0.0.0, Culture=neutral, PublicKeyToken=<token>"
    ReceiverClass="MyFeature.MyFeatureEventReceiver">
  <VersionRange BeginVersion="1.0.0.0" EndVersion="1.0.0.0">
   <CustomUpgradeAction Name="UpgradeFeature"/>
<ApplyElementManifests>
<ElementManifest Location="MasterPages\\UpgradeElements.xml" />
</ApplyElementManifests>
  </VersionRange>
</UpgradeActions>




    You place the master page or pages in the **MasterPages** folder of the project, and any metadata related to the master page(s) in the **UpgradeElements.xml** file.
    
  
3. Add a  `<Properties>` section to the feature.xml file. This section contains key-value pairs that specify the 2013 custom master page or pages that you want to set when the site is upgraded. The following example specifies the value of the `My15MasterPage` key that you'll use in the feature receiver.
    

  
<Properties>
  <Property Key="My15MasterPage" Value="_catalogs/masterpage/My15MasterPage.master" />
</Properties>



4. In Solution Explorer, under the **Features** node, right click the name of your feature, and then choose **Add Event Receiver** to add an event receiver to the feature.
    
    This adds a code file under your feature in Solution Explorer. Figure 1 shows where a sample Feature1.EventReceiver.cs file appears under the feature in the **Features** folder.
    

   **Figure 1. The code file for an event receiver in a feature**

  

  ![After you create an event receiver to your feature, a code file appears under the feature.](../../images/SP15_FeatureReceiverVS.png)
  

    This file contains a commented and empty  `FeatureUpgrading` method. You'll use this method in the following step.
    
  
5. Open the code file and uncomment the FeatureUpgrading method, which overrides the **FeatureUpgrading(SPFeatureReceiverProperties, String, IDictionary<String, String>)** method. The following example applies the `My15MasterPage` file that was specified earlier in the feature.xml file.
    
cs
  
public override void FeatureUpgrading(SPFeatureReceiverProperties properties, string upgradeActionName, System.Collections.Generic.IDictionary<string, string> parameters)
        {
 
            try
            {
            if (upgradeActionName != "UpgradeFeature")
                return;
                //Set the master page to a value stored as a property in the feature.xml file
                string masterPage = properties.Definition.Properties[My15MasterPage].Value;
                string baseURL;
                var currentWeb = properties.Feature.Parent as SPWeb;
 
                //Checks to see that the API returns a string that ends in a "/" and if not adds it.
                if (currentWeb.ServerRelativeUrl.Substring(currentWeb.ServerRelativeUrl.Length - 1) == "/")
                {
                    baseURL = currentWeb.ServerRelativeUrl;
                }
                else
                {
                    baseURL = currentWeb.ServerRelativeUrl + "/";
                }
 
                masterPage = baseURL + masterPage;
                currentWeb.CustomMasterUrl = masterPage;
 
                currentWeb.Properties.Update();
                currentWeb.Update();
            }
            }
 
            catch (Exception ex)
            {
             //Handle exception
            }
        }



Once you're done with the upgrade, you'll want to think about the future and long-term maintenance of your feature. Refer to  [Application Lifecycle Management in SharePoint 2010](http://msdn.microsoft.com/en-us/library/office/gg604045%28v=office.14%29.aspx) for guidance on maintaining full-trust code. Although this article refers to SharePoint 2010 specifically, it applies equally well to full-trust code in SharePoint 2013. If you aren't familiar with feature versioning and upgrade actions, refer to the [Models for Solution Lifecycle Management](http://msdn.microsoft.com/en-us/library/office/gg604045%28v=office.14%29.aspx#sectionSection7) section of this article. You should also look at [Best Practices for Using Feature Versions](http://msdn.microsoft.com/en-us/library/office/ee535064%28v=office.14%29.aspx).
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Deploy custom features to upgraded site collections in SharePoint Server 2013](http://technet.microsoft.com/en-us/library/dn673579%28v=office.15%29.aspx)
    
  
-  [Upgrade site customizations for SharePoint 2013](upgrade-site-customizations-for-sharepoint.md)
    
  
-  [Upgrade to SharePoint 2013](http://technet.microsoft.com/en-us/library/cc303420%28v=office.15%29.aspx)
    
  
-  [SharePoint 2013 and SharePoint Online solution pack for branding and site provisioning](http://www.microsoft.com/en-us/download/details.aspx?id=42030)
    
  
-  [Install and manage solutions for SharePoint 2013](http://technet.microsoft.com/en-us/library/cc263205%28v=office.15%29.aspx)
    
  

