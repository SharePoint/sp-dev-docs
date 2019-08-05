---
title: Performance considerations in the SharePoint Add-in model
ms.date: 11/03/2017
localization_priority: Normal
---
Performance considerations in the SharePoint Add-in model
=========================================================

Summary
-------

The approaches you take to ensure optimal performance with SharePoint is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario most code operations took place in the SharePoint Server-side Object Model code.

In an SharePoint Add-in model scenario, the SharePoint Client-side Object Model (CSOM) and/or the SharePoint REST API are used to execute code.

The major difference between the two models is server-side code versus client-side code. In the SharePoint Add-in model, because code is executed via clients, additional network traffic occurs.  Minimizing the number of API call round trips to the SharePoint server will increase the performance of your SharePoint Add-ins and reduce the amount of resources consumed by your SharePoint site.

Additionally, in the SharePoint Add-in model, because code is executed via clients there could be long delays before a response is received. Caching data for long running operations (like the User Profile APIs) can reduce the amount of time it takes to return information or receive confirmation a process is complete.

High-level guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines to ensure optimal performance with SharePoint in the new SharePoint Add-in model.

- Minimize client-side API calls to the SharePoint server.
- Use server-side and client-side caching techniques to store information.
- It is not recommended that you store clientIDs, clientSecrets, usernames, passwords, tokens, or other sensitive security information in caches.

Options to ensure optimal performance with SharePoint
-----------------------------------------------------
You have a couple of options to ensure optimal performance with SharePoint.

- Use client-side caching 
- Use server-side caching 

Use client-side caching 
-----------------------
In this pattern, client-side caching techniques such as HTML5 LocalStorage and cookies are used to cache data. Information stored in these locations is used to determine if it is necessary to make API calls to a SharePoint server.

- This pattern stores data returned from SharePoint API calls in client-side caches.
- This pattern uses client-side code (JavaScript) to evaluate data stored in client-side caches.
- Cookies are limited to storing 4095 bytes of data.
	+ Cookies have a built-in data expiration mechanism.
- HTML5 LocalStorage is limited to 5MB of data.
	- HTML5 LocalStorage does not have a built-in data expiration mechanism. However, such an expiration mechanism may be quickly and easily implemented in JavaScript.
	
		See the **setLocalStorageKeyExpiry** and **isLocalStorageExpired** functions in the [App.js JavaScript file](https://github.com/SharePoint/PnP/blob/master/Samples/Performance.Caching/Performance.LocalStorage/Scripts/App.js) in the [Performance.LocalStorage (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Performance.Caching/Performance.LocalStorage) for an example.

		**Setting an expiration key in LocalStorage:**

		```
		function setLocalStorageKeyExpiry(key) 
		{		
		    // Check for expiration config values
		    var expiryConfig = localStorage.getItem(expiryConfigKey);
		    
		    // Check for existing expiration stamp
		    var existingStamp = localStorage.getItem(key + expiryKeySuffix);    
		
		    // Override cached setting if a user has entered a value that is different than what is stored
		    if (expiryConfig != null) 
			{		                
		        var currentTime = Math.floor((new Date().getTime()) / 1000);
		        expiryConfig = parseInt(expiryConfig);
		        
		        var newStamp = Math.floor((currentTime + expiryConfig));
		        localStorage.setItem(key + expiryKeySuffix, newStamp);
		        
		        // Log status to window        
		        cachingStatus += "\n" + "Setting expiration for the " + key + " key...";
		        $('#status').val(cachingStatus);
		    }    
		    else 
			{
		       
		    }
		}
		```

		**Check to see if the expiration key is expired in LocalStorage:**
		```
		function isLocalStorageExpired(key, keyTimeStampName) 
		{
		    // Retrieve the example setting for expiration in seconds
		    var expiryConfig = localStorage.getItem(expiryConfigKey);
		    
		    // Retrieve the example setting for expiration in seconds
		    var expiryStamp = localStorage.getItem(keyTimeStampName);
		
		    if (expiryStamp != null && expiryConfig != null) {
		
		        // Retrieve the expiration stamp and compare against specified settings to see if it is expired
		        var currentTime = Math.floor((new Date().getTime()) / 1000);
		
		        if (currentTime - parseInt(expiryStamp) > parseInt(expiryConfig)) {
		            cachingStatus += "\n" + "The " + key + " key time stamp has expired...";
		            $('#status').val(cachingStatus);
		            return true;
		        }
		        else 
				{
		            var estimatedSeconds = parseInt(expiryStamp) - currentTime;
		            cachingStatus += "\n" + "The " + key + " time stamp expires in " + estimatedSeconds + " seconds...";
		            $('#status').val(cachingStatus);
		            return false;
		        }
		    }
		    else 
			{
		        //default
		        return true;
		    }
		}
		```

**When is it a good fit?**

When you need to use the SharePoint ECMA Client-side Object Model API (sp.js) and evaluate client-side data to determine if the API calls need to be made.

**Getting started**

The [Performance.Caching (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Performance.Caching) demonstrates how to implement both LocalStorage and cookie-based client-side caching in the Add-in model and provides links to several samples and articles.

Use server-side caching 
-----------------------
In this pattern, server-side caching techniques such as session and server-side cookie evaluation are used to access cached data. Information stored in these locations is used to determine if it is necessary to make API calls to a SharePoint server.

- This pattern stores data returned from SharePoint API calls in server-side caches.	
- This pattern uses server-side code to evaluate data stored in server-side locations.
	+ Server-side locations may include session-based data, server-side caches stored in RAM, or other third-party server-based caching technologies.
- This pattern uses server-side code to evaluate data stored in cookies.
- Cookies are limited to storing 4095 bytes of data.
	+ Cookies have a built-in data expiration mechanism.
	
	See the **CookieCheckSkip** method in the [Customizer.aspx.cs Class](https://github.com/SharePoint/PnP/blob/master/Solutions/OD4B.Configuration.Async/OD4B.Configuration.AsyncWeb/Pages/Customizer.aspx.cs) in the [OD4B.Configuration.Async (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/OD4B.Configuration.Async) to see how server-side code is used to evaluate cookies.

**Implementing your own 'man-in-the-middle' cache layer**
Sometimes, it makes sense to create your own custom cache layer. A good example is when you need to return information from a user's profile. The User Profile APIs sometimes take a long time to execute. To provide end users with a fast user interface experience, you can create a remote timer job to query the user profile service and store the information in a variety of data stores. Then, you can create a service to allow you to query the data stores via JavaScript calls from SharePoint Add-ins.  

Azure has many different storage mechanisms that may be used to store information, many of which perform extremely fast, like Table storage and Blob storage. Azure also allows you to create a web app to host the service and secure all of the data and the service with the same Azure Active Directory as an Office 365 SharePoint tenancy, or even an on-premises SharePoint environment with DirSync enabled.

**When is it a good fit?**

- When you need to use the SharePoint Managed Code Client-side Object Model API (Microsoft.SharePoint.Client.dll) and evaluate server-side data or cookies to determine if the API calls need to be made.
- When you have long-running operations, such as an Azure Web Job, that should only be initiated once per given time frame, no matter how many times a user tries to initiate an operation.  
	+ Applying customized OneDrive for Business configurations are a good example of such a scenario.

**Getting started**

The [Performance.Caching (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Performance.Caching) describes how to implement both LocalStorage and cookie-based client-side caching in the Add-in model and provides links to several samples and articles.

Related links
=============
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
