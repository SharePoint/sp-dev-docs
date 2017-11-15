---
title: Back up and restore a search service application in SharePoint using VSS
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 87ee28e6-8170-4dba-8c9d-f04ab9e632dc
---


# Back up and restore a search service application in SharePoint using VSS

Learn how to back up and restore a search service application in SharePoint by using the Volume Shadow Copy Service (VSS).

## Prerequisites for backing up and restoring SharePoint with the Volume Shadow Copy Service

To program a backup and restore solution for SharePoint, you need to understand how VSS works and the SharePoint interface with it.
  
    
    

**Table 1. Core concepts for backing up and restoring SharePoint with the Volume Shadow Copy Service**


|**Article**|**Description**|
|:-----|:-----|
| [Volume Shadow Copy Service](http://msdn.microsoft.com/en-us/library/windows/desktop/bb968832%28v=vs.85%29.aspx) and its child articles. <br/> |Learn about the VSS and how to program for it.  <br/> |
| [Windows SharePoint Services and the Volume Shadow Copy Service](http://msdn.microsoft.com/library/adae101a-078e-40b9-9cfa-db2cfb10270a%28Office.15%29.aspx) and its child articles. <br/> |Overview information and step-by-step, how-to procedures for backing up and restoring SharePoint data using the VSS and the SharePoint interface with VSS.  <br/> |
   

## Use the Volume Shadow Copy Service to back up and restore a search service application
<a name="Use"> </a>

The following procedures are intended to help developers with creating a backup/restore application that uses the VSS. If you are an IT professional looking for instructions for how to back up or restore a SharePoint search service application, see  [Backup and restore SharePoint](http://technet.microsoft.com/en-us/library/ee662536.aspx). 
  
    
    
 **Prerequisite:** Download and install [Microsoft Windows SDK for Windows 7 and .NET Framework 4](http://www.microsoft.com/en-us/download/details.aspx?id=8279) to the server with the search service application (SSA) and to every server with a search index component. Among other things, this will install vshadow.exe and betest.exe to `C:\\Program Files\\Microsoft SDKs\\Windows\\v7.1\\Bin\\x64\\vsstools`.
  
    
    

> **Tip:**
> For details about the Windows PowerShell cmdlets mentioned in this article, see  [Windows PowerShell for SharePoint reference](http://technet.microsoft.com/en-us/library/ee890108.aspx). 
  
    
    


### To register the SharePoint VSS Writer and prepare the servers for backing up and restoring


- Register the SharePoint VSS Writer with either of these methods:
    
  - Open **Services** in **Administrative Tools** and start the **SharePoint VSS Writer** service.
    
  
  - Open a command console and execute  `stsadm.exe -o registerwsswriter`. The stsadm utility is found in %ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\BIN. Verify that the service is running in **Services** in **Administrative Tools**.
    
  

### To back up a SharePoint search service application using VSS


1. Get VSS metadata by executing  `vshadow.exe -wm > writers.txt` at a command line on each server that contains an index component and also on the computer that is running SQL Server where the search databases are located. The writers.txt file that is created lists all VSS writers associated with the server. You use this file in the next steps to generate manifest files for the search service application (SSA) and search index.
    
  
2. Follow these steps to create a manifest for the SSA on the computer that is running SQL Server where the search databases are located.
    
1. Create an XML file and copy the following into it: 
    
```XML
  
<BETest>
  <Writer writerid="SharePoint Services Writer ID">
    <Component logicalPath="PathSSA" componentName="SearchAppOffice" />
    <Component logicalPath="PathC" componentName="SearchAppOffice_CrawlStore" />
    <Component logicalPath="PathA" componentName="SearchAppOffice_AnalyticsReportingStore" />
    <Component logicalPath="PathL" componentName="SearchAppOffice_LinksStore" />
  </Writer>
  <Writer writerid="SQL Server Writer ID">
    <Component logicalPath="PathDbSSA" componentName="SearchAppOffice" />
    <Component logicalPath="PathDbC" componentName="SearchAppOffice_CrawlStore" />
    <Component logicalPath="PathDbA" componentName="SearchAppOffice_AnalyticsReportingStore" />
    <Component logicalPath="PathDbL" componentName="SearchAppOffice_LinksStore" />
  </Writer>
</BETest>

```

2. Replace the 10 placeholders in this file with appropriate values from the writer.txt file that you generated in the first step. Use the following table as a guide. 
    
    > **Note:**
      > In the right-hand column,  _SSA_ is itself a placeholder for the name of the Search Service Application.

   **Table 2. SSA manifest file placeholders and values from writers.txt**


|**Placeholder**|**Where the information is located in writers.txt.**|
|:-----|:-----|
| _SharePoint Services Writer ID_ <br/> |The WriterId GUID listed under the "SharePoint Services Writer" entry  <br/> |
| _PathSSA_ <br/> |The logical path entry listed with the name of the Search Service Application in the "SharePoint Services Writer" entry  <br/> |
| _PathC_ <br/> |The logical path entry listed for the component named " _SSA__CrawlStore" in the "SharePoint Services Writer" entry  <br/> |
| _PathA_ <br/> |The logical path entry listed for the component named " _SSA_ _AnalyticsReportingStore" in the "SharePoint Services Writer" entry <br/> |
| _PathL_ <br/> |The logical path entry listed for the component named " _SSA__LinksStore" in the "SharePoint Services Writer" entry  <br/> |
| _SQL Server Writer ID_ <br/> |The WriterId GUID listed under the "SqlServerWriter" entry  <br/> |
| _PathDbSSA_ <br/> |The logical path entry listed for the component with the name of the Search Service Application in the "SqlServerWriter" entry  <br/> |
| _PathDbC_ <br/> |The logical path entry listed for the component named " _SSA__CrawlStore" in the "SqlServerWriter" entry  <br/> |
| _PathDbA_ <br/> |The logical path entry listed for the component named " _SSA__AnalyticsReportingStore" in the "SqlServerWriter" entry  <br/> |
| _PathDbL_ <br/> |The logical path entry listed for the component named " _SSA__LinksStore" in the "SqlServerWriter" entry  <br/> |
   

    This is the SSA manifest file. For an example of a completed SSA manifest file, see  [Example manifest files](#Examples).
    
  
3. Follow these steps to create a manifest for the search index files. Repeat these steps on every server that has an index component.
    
1. Create an XML file and copy the following into it:
    
```XML
  
<BETest>
   <Writer writerid="SharePoint Services Writer ID">
      <Component logicalPath="PathIndex" componentName="NameIndex" />
   </Writer>
   <Writer writerid="OSearch15 Writer ID">
      <Component logicalPath="PathOSearch15" componentName="IndexComponentGroup" />
   </Writer>    
</BETest>
```

2. Replace the six placeholders in this file with appropriate values from the writer.txt file that you generated in the first step. Use the following table as a guide.
    
   **Table 3. Search index manifest file placeholders and values from writer.txt**


|**Placeholder**|**Where the information is located in writers.txt**|
|:-----|:-----|
| _SharePoint Services Writer ID_ <br/> |The WriterId GUID listed under the "SharePoint Services Writer" entry  <br/> |
| _PathIndex_ <br/> |The logical path entry listed for the component whose name starts with "IndexComponentGroup" in the "SharePoint Services Writer" entry  <br/> |
| _NameIndex_ <br/> |The name entry listed for the component whose name starts with "IndexComponentGroup" in the "SharePoint Services Writer" entry  <br/> |
| _OSearch15 Writer ID_ <br/> |The WriterId GUID listed under the "OSearch15 VSS Writer" entry  <br/> |
| _PathOSearch15_ <br/> |The logical path entry listed for the component whose name starts with "IndexComponentGroup" in the "OSearch15 VSS Writer" entry. It is normally empty.  <br/> |
| _IndexComponentGroup_ <br/> |The name entry listed for the component whose name starts with "IndexComponentGroup" in the "OSearch15 VSS Writer" entry  <br/> |
   

    This is the search index manifest file. For an example of a completed search index manifest file, see  [Example manifest files](#Examples).
    
  
4. (Optional) Record the sizes of **IndexComponent** folders on each server that contains an index component. You can use this information later to verify the backup.
    
  
5. On any server in the farm, open the SharePoint Management Shell and execute the following lines, where  _name of search service application_ is the SSA that you want to back up. Leave the SharePoint Management Shell window open afterward.
    
```
  
$ssa = Get-SpenterpriseSearchServiceApplication -Identity "name of search service application"
Suspend-SPEnterpriseSearchServiceApplication -Identity $ssa
```

6. Perform backups of the SSA databases and the index by following these steps:
    
1. On the server with the SSA databases, execute the following command at a command line, where  _destination backup folder_ is the full path of the folder for the backup files, _backup log file_ is the full path and name of the backup log file, and _SSA manifest file_ is the path and file name of the SSA manifest file.
    
```
  
betest.exe /v /b /d "destination backup folder" /s "backup log file" /x "SSA manifest file"
```

2. On the server with the open SharePoint Management Shell window, execute the following line, where  _topology file name_ is the full path and name of the exported file containing the topology information. You will use this file in the restore procedure for the SSA.
    
```
  Export-SPEnterpriseSearchTopology -SearchApplication $ssa -Filename "topology file name"
```

3. Verify that the file is created.
    
  
4. On each server that has an index component, execute the following at a command line, where  _destination backup folder_ is the full path of the folder for the backup files, _backup log file_ is the full path and name of the backup log file, and _index manifest file_ is the path and file name of the index manifest.
    
```
  betest.exe /v /b /d "destination backup folder" /s "backup log file" /x "index manifest file"
```

5. (Optional) Inspect the index folders that have been backed up. Verify that folder names and sizes match with those recorded in the earlier step.
    
  

### To restore a SharePoint search service application using VSS


1. On any server in the farm, open the SharePoint Management Shell and execute the following lines to remove the existing search service application and its proxy, where  _name of search service application_ is the SSA that you want to restore and _name of proxy_ is its application proxy. Note that _name of SSA proxy_ is normally the same as the name of the SSA with the word "Proxy" added to the end. The `RemoveData` switch ensures that the search databases are removed.
    
```
  $ssa = Get-SPEnterpriseSearchServiceApplication -Identity "name of search service application"
Remove-SPEnterpriseSearchServiceApplication -Identity $ssa -RemoveData
Remove-SPEnterpriseSearchServiceApplicationProxy -Identity "name of SSA proxy"
```

2. On the same server, execute the following at a command line to restore the SSA databases, where  _destination backup folder_ is the full path of the folder for the backup files, _backup log file_ is the full path and name of the backup log file, and _SSA manifest file_ is the path and file name of the SSA manifest file.
    
```
  
betest.exe /v /r /d "destination backup folder" /s "backup log file" /x SSA_manifest_file
```

3. On the same server, open a SharePoint Management Shell and execute the following lines to restore the SSA, where  _application pool name_ is the name of the new pool, _domain\\user_ is the domain name of the user that the application pool logs in as, _name of the search service application_ is the name of the SSA, and _topology_file_name_ is the path and name of the typology file you created when the SSA was backed up.
    
    > **Tip:**
      > This code creates a new application pool identity to run the restored SSA, but you can also use an existing account with the **Get-SPServiceApplicationPool** cmdlet.

```
  $applicationPool = New-SPServiceApplicationPool -name "application pool name" -account "domain\\user"
Restore-SPEnterpriseSearchServiceApplication -Name "name of the search service application" -ApplicationPool $applicationPool -TopologyFile "topology_file_name" -KeepId
```

4. Create a proxy for the SSA with the following cmdlets. We recommend that you use the same values for  _name of the search service application_ and _name of SSA proxy_ as you used in step 1.
    
```
  
$ssa = Get-SpenterpriseSearchServiceApplication -Identity "name of search service application"
New-SPEnterpriseSearchServiceApplicationProxy -Name "name of SSA proxy" -SearchApplication $ssa
```

5. (Optional) Verify that the SSA and its proxy exist by opening **Central Administration**. Choose **Manage Service Applications** and verify that the SSA and its proxy are listed.
    
  
6. (Optional) Click the SSA on the list of services, and then, on the page that opens, verify that the **Search Application Topology** table matches the typology that you exported in the backup procedure. (You can also verify the topology with the cmdlet **Get-SPEnterpriseSearchStatus**.)
    
  
7. Restore the index files with the following procedure **on all servers with index components**.
    
1. Stop the Host Controller service either in **Administrative Tools > Services**, or by executing the following cmdlet in SharePoint Management Shell:
    
```
  
stop-service SPSearchHostController
```

2. On the same servers, execute the following at a command line, where  _index manifest file_ is the path and file name of the index manifest that you created in the backup procedure.
    
```
  betest.exe /v /r /d "destination backup folder" /s "backup log file" /x "index manifest file"
```

3. (Optional) Verify that the folder names and sizes match those that you recorded in the backup procedure.
    
  
4. For every index component, rename data under the data folder by following these steps:
    
1. In SharePoint Management Shell, execute the following cmdlet.
    
```
  Get-SPEnterpriseSearchVssDataPath
```

2. From the output of the cmdlet, record the last part of each GUID. For example, if one line of the output is  `IndexComponentGroup_e255918b-6ab0-4d7c-8049-720b2744c62f`, record 720b2744c62f.
    
  
3. In **File Explorer** (or **Windows Explorer** on Windows Server 2008), navigate to `C:\\Program Files\\Microsoft Office Servers\\15.0\\Data\\Office Server\\Applications\\Search\\Nodes\\24488A\\IndexComponentN\\storage\\data`, where  *N*  is the number of an index component.
    
  
4. Each of these folders has a subfolder whose name begins with "SP" followed by 12 hex digits followed by a version number. For each of these subfolders where the 12 hex digits match one of the GUID endings that you recorded in the earlier step, rename the subfolder to importindex. In the continuing example, you would rename the subfolder  `SP720b2744c62f.1.I.1.0` toimportindex.
    
  
5. Restart the host controller service either in **Administrative Tools > Services**, or by executing the following cmdlet in SharePoint Management Shell:
    
```
  start-service SPSearchHostController
```

6. Verify that the index data folder names have reverted back to their previous name. (In the continuing example, this would be "'SP720b2744c62f.1.I.1.0".)
    
  
8. (Optional) Verify that the sizes of **IndexComponent** folders match the sizes you recorded in the backup procedure.
    
  
9. Restart the SSA.
    
  
10. On all the affected servers, run the following cmdlet in SharePoint Management Shell to verify that the search application service is running properly:
    
```
  Get-SPEnterpriseSearchStatus
```

11. Verify that feeding and searching for new documents works. For example, check the size of the index by using the query "size>=0". Also add a new document and verify that it is searchable.
    
  

## Example manifest files
<a name="Examples"> </a>

 **SSA manifest file**
  
    
    

```XML
<BETest>
  <Writer writerid="da452614-4858-5e53-a512-38aab25c61ad">
    <Component logicalPath="3bca1050-c15a-4987-93dc-8f911d35a0ba\\2e1f9435-d714-4bcb-be8d-ae1214e2ea22" componentName="SearchAppOffice" />
    <Component logicalPath="3bca1050-c15a-4987-93dc-8f911d35a0ba\\b8bb09b8-a823-43b0-a131-7bd5464f91fb" componentName="SearchAppOffice_CrawlStore" />
    <Component logicalPath="3bca1050-c15a-4987-93dc-8f911d35a0ba\\20c0c0b5-2086-4b16-8ce8-2cecb5186ebe" componentName="SearchAppOffice_AnalyticsReportingStore" />
    <Component logicalPath="3bca1050-c15a-4987-93dc-8f911d35a0ba\\15004c47-21ca-441e-80fe-9e068ef4ad14" componentName="SearchAppOffice_LinksStore" />
  </Writer>
  <Writer writerid="a65faa63-5ea8-4ebc-9dbd-a0c4db26912a">
    <Component logicalPath="DDDVSS4\\SQLEXPRESS" componentName="SearchAppOffice" />
    <Component logicalPath="DDDVSS4\\SQLEXPRESS" componentName="SearchAppOffice_CrawlStore" />
    <Component logicalPath="DDDVSS4\\SQLEXPRESS" componentName="SearchAppOffice_AnalyticsReportingStore" />
    <Component logicalPath="DDDVSS4\\SQLEXPRESS" componentName="SearchAppOffice_LinksStore" />
  </Writer>
</BETest>

```

 **Index manifest file**
  
    
    



```XML

<BETest>
  <Writer writerid="da452614-4858-5e53-a512-38aab25c61ad">
    <Component logicalPath="3bca1050-c15a-4987-93dc-8f911d35a0ba\\cfbddb07-2409-4b3d-997b-ee1b936c3dbd" componentName="IndexComponentGroup_3bca1050-c15a-4987-93dc-8f911d35a0ba" />
  </Writer>
  <Writer writerid="0ff1ce15-0201-0000-0000-000000000000">
    <Component logicalPath="" componentName="IndexComponentGroup_3bca1050-c15a-4987-93dc-8f911d35a0ba" />
  </Writer>
</BETest>
```


## Additional resources
<a name="bk_addresources"> </a>


-  [Windows SharePoint Services and the Volume Shadow Copy Service](http://msdn.microsoft.com/library/adae101a-078e-40b9-9cfa-db2cfb10270a%28Office.15%29.aspx)
    
  

