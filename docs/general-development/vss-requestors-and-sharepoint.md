---
title: VSS requestors and SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 0b2e5a4e-40f0-4ccf-a21a-7274921f2169
---


# VSS requestors and SharePoint
 **Summary:** Learn about how the requestor system of the Volume Shadow Copy Service (VSS) system works with Microsoft SharePoint.
VSS in Windows Server can be used to create applications that back up and restore Microsoft SharePoint Foundation. The VSS provides an infrastructure that enables third-party storage management programs, business programs, and hardware providers to cooperate in creating and managing shadow copies. Solutions based on this infrastructure can use the shadow copies (or mirrored copies) to back up and restore one or more SharePoint Foundation databases.
  
    
    


## VSS requestor system

The VSS coordinates communication among requestors (backup applications), Writers (Windows applications such as SharePoint Foundation and Microsoft SQL Server), and Providers (system, software, or hardware components that create the shadow copies). To use the VSS feature to back up SharePoint Foundation, the backup program must include a VSS requestor that is aware of SharePoint Foundation. Because the backup program that is provided with Windows Server has no such requestor, organizations must use third-party backup applications.
  
    
    
To be compliant with SharePoint Foundation, backup applications that are based on VSS must follow two basic requirements to ensure the integrity and recoverability of shadow copy backups. Customers should verify with their backup vendors that the backup application fulfills the compliance requirements for SharePoint Foundation listed in this topic.
  
    
    
Following are the SharePoint Foundation requirements that a shadow copy backup application must follow to ensure the integrity and recoverability of SharePoint Foundation databases: 
  
    
    

- SharePoint Foundation databases and search index files must be backed up exclusively through the SPF-VSS Writer.
    
  
- The backup application must validate the integrity of the shadow copy backup set. Restore operations to original location must be done exclusively with the SPF-VSS Writer.
    
  

## Restoring

Before executing a restoration, the following conditions must be met:
  
    
    

- The following services must be  *started*  :
    
  - SharePoint VSS Writer
    
  
  - Volume Shadow Copy
    
  
  - SharePoint Tracing
    
  
- The following services must be  *stopped*  :
    
  - SharePoint Administration
    
  
  - SharePoint Search
    
  
  - SharePoint Timer
    
  
  - SharePoint Server Search (If SharePoint Server is installed.)
    
  
- If the whole farm is being restored, SharePoint Foundation *and Internet Information Server (IIS)*  must be shutdown.
    
  
- If only selected Web applications or other components are being restored, the Web applications must be shutdown and the components may not be in use during the restoration.
    
  

## Next steps
<a name="Next"> </a>

Learn how to create and use a VSS requestor for SharePoint:
  
    
    

-  [How to: Create a VSS requestor for use with SharePoint](how-to-create-a-vss-requestor-for-use-with-sharepoint.md)
    
  
-  [How to: Back up and restore SharePoint using a VSS requestor](how-to-back-up-and-restore-sharepoint-using-a-vss-requestor.md)
    
  
-  [How to: Back up and restore a search service application in SharePoint using VSS](how-to-back-up-and-restore-a-search-service-application-in-sharepoint-using.md)
    
  

## See also
<a name="bk_addresources"> </a>


-  [Overview of SharePoint and the Volume Shadow Copy Service](overview-of-sharepoint-and-the-volume-shadow-copy-service.md)
    
  
-  [How to: Create a VSS requestor for use with SharePoint](how-to-create-a-vss-requestor-for-use-with-sharepoint.md)
    
  
-  [How to: Back up and restore SharePoint using a VSS requestor](how-to-back-up-and-restore-sharepoint-using-a-vss-requestor.md)
    
  
-  [How to: Back up and restore a search service application in SharePoint using VSS](how-to-back-up-and-restore-a-search-service-application-in-sharepoint-using.md)
    
  

