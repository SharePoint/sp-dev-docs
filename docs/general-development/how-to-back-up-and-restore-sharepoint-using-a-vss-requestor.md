---
title: Back up and restore SharePoint using a VSS requestor
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: cab5ba90-bd23-4cec-82d7-529e3f86ba88
---


# Back up and restore SharePoint using a VSS requestor

Learn how to back and restore using a Volume Shadow Copy Service (VSS) requestor for Microsoft SharePoint.

## Backing up and restoring with the requestor

Use the following procedure to back up and restore Microsoft SharePoint Foundation data using your VSS requestor.
  
    
    

### To back up and restore data by using your requestor


1. Manually start the SharePoint Foundation VSS Writer service. Open **Administrative Tools**, navigate to and open **Services** and start the services called **Volume Shadow Copy** and **SharePoint 2010 VSS Writer**.
    
  
2. Register the writer in the Windows registry by running the  `STSADM -o registerwsswriter` command from a system console. The executable is located in the %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\BIN directory.
    
  
3. Repeat steps 1 and 2 on all SharePoint Foundation servers.
    
  
4. Use your requestor to back up and restore data. You can either use your requestor (as outlined in the  [Volume Shadow Copy Service Overview](http://msdn.microsoft.com/en-us/library/aa384649%28VS.85%29.aspx)) or the BETest test utility (available in the  [VSS SDK](http://www.microsoft.com/downloads/details.aspx?FamilyID=0B4F56E4-0CCC-4626-826A-ED2C4C95C871&amp;displaylang=en)) to back up or restore from SharePoint Foundation. 
    
  

## Security for Running VSS

VSS has special requirements for the accounts running the writers on all targeted server instances for backup and restore
  
    
    

- The running account must have permission to call into VSS. By default, VSS requires a VSS writer to be a member of the Administrator or Backup Operators group on the targeted server instance. You can configure a registry key to allow other accounts to have access to VSS.
    
  
- The account must have permission to issue **BACKUP DATABASE** and **RESTORE DATABASE** commands against the database servers.
    
  
- The account must have permission to open up VDI against SQL Server, which requires the client to be a member of the SQL Server sysadmin group.
    
  
- The account must be able to perform queries against the sys.master_files catalog view in the master database on the SQL server.
    
  
Also, to be hosted by the SharePoint Foundation Timer service (owstimer.exe), the writer service must run under the administration application pool account, which is the "Network Service" account in a basic installation of SharePoint Foundation. 
  
> [!NOTE]
> It is very unlikely that this account will be a local machine admin account, which differs from the requirement for VSS where the processing account must be running as local system.
  
    
    

## See also
<a name="bk_addresources"> </a>


-  [Overview of SharePoint and the Volume Shadow Copy Service](overview-of-sharepoint-and-the-volume-shadow-copy-service.md)
    
  

