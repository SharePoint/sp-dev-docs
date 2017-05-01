---
title: How to Crawl binary large objects (BLOBs) in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 99b3dd51-1651-4300-a2de-33681f4cc258
---


# How to: Crawl binary large objects (BLOBs) in SharePoint 2013
Learn how to modify the BDC model file for a database BCS indexing connector to enable the Search in SharePoint 2013 crawler to crawl binary large object (BLOB) data stored in a SQL Server database.
## Crawling BLOB data
<a name="HowToCrawlBlobs_CrawlingBlobData"> </a>

The Business Data Connectivity (BDC) service supports reading BLOB data types, which is useful for streaming BLOB data from external systems. For this to work, you need to ensure that the database table containing the external data is set up to support this. You then add a **StreamAccessor** method to the BDC model file for the external content source's BCS indexing connector.
  
    
    

## Configuring the SQL Server database table for BLOB data
<a name="HowToCrawlBlobs_ConfiguringSQL"> </a>

The Microsoft SQL Server database table must have a column that specifies either the extension or the MIME type of the BLOB data. If the database table schema does not include a column with this information, you must add it to the schema. The following tables contain an example of a database table schema with this column and sample values for it that are stored in the database table.
  
    
    

**Table 1. Sample database table schema**


|**Column Name**|**Data Type**|
|:-----|:-----|
|Id  <br/> |Int  <br/> |
|DisplayName  <br/> |nvarchar(50)  <br/> |
|Extension  <br/> |nvarchar(50)  <br/> |
|Data  <br/> |varbinary(MAX)  <br/> |
|ContentType  <br/> |nvarchar(MAX)  <br/> |
   

**Table 2. Sample database table values**


|**Id**|**Display Name**|**Extension**|**Data**|**Content Type**|
|:-----|:-----|:-----|:-----|:-----|
|1  <br/> |File1  <br/> |.docx  <br/> |0x504B…  <br/> |application/vnd.openxmlformats-officedocument.wordprocessingml.document  <br/> |
|2  <br/> |File2  <br/> |.doc  <br/> |0xD…  <br/> |application/msword  <br/> |
|3  <br/> |File3  <br/> |.txt  <br/> |OxE…  <br/> |text/plain  <br/> |
   

## Modifying the BDC model file to enable crawling of BLOB data
<a name="HowToCrawlBlobs_BDCModelFile"> </a>

After you confirm that the database table contains the extension or MIME type information for the BLOB data, you can use Microsoft SharePoint Designer to create an external content type that is based on the table containing the BLOB data. Then, you can create all the operations. For more information, see  [How to: Create External Content Types](http://msdn.microsoft.com/library/811b458c-e209-46df-ba02-8db02bc658db%28Office.15%29.aspx) and [How to: Create an External Content Type Based on a SQL Server Table](http://msdn.microsoft.com/library/5c42a679-d71d-46c6-aabc-d63c6cad3846%28Office.15%29.aspx). 
  
    
    
After you create the BLOB external content type, you are ready to modify the BDC model file to enable crawling. You cannot make these modifications in SharePoint Designer. So you must export the BDC model file, and use an XML editor to make these changes manually.
  
    
    

### To export the BDC model file for the BLOB external content type


1. In SharePoint Designer, click **External Content Types** in the left navigation to display the external content types that are defined in that site's service application's BDC metadata store.
    
  
2. In the **External Content Types** list, select the BLOB external content type. Then, click **Export BDC Model** on the Server ribbon.
    
  
3. Type a name in the **BDC Model Name** text box, and then click **OK**.
    
  
4. Select the location where you want to save the BDC model (.bdcm) file, and then click **Save**.
    
  

### To enable crawling of the BLOB external content type


1. In an XML editor, open the BDC model file you created in the previous section.
    
  
2. Create a new method that returns the BLOB field. You should define a **StreamAccessor** type method instance for this method, as shown in the following example.
    
    > [!NOTE]
      > The table name in this example is Attachment. 

XML
  
<Method Name="GetData">
  <Properties>
    <Property Name="RdbCommandText" Type="System.String">SELECT Data FROM [dbo].[Attachment] WHERE [Id] = @Id </Property>
    <Property Name="RdbCommandType" Type="System.Data.CommandType, System.Data, Version=2.0.0.0, Culture=neutral, 
      PublicKeyToken=b77a5c561934e089">Text</Property>
  </Properties>
  <Parameters>
    <Parameter Direction="In" Name="@Id">
      <TypeDescriptor TypeName="System.Int32" IdentifierName="Id" Name="Id" />
    </Parameter>
    <Parameter Name="StreamData" Direction="Return">
      <TypeDescriptor TypeName="System.Data.IDataReader, System.Data, 
        Version=2.0.3600.0, Culture=neutral, 
        PublicKeyToken=b77a5c561934e089" 
        IsCollection="true" Name="DataReaderTypeDescriptorName">
        <TypeDescriptors>
          <TypeDescriptor TypeName="System.Data.IDataRecord, System.Data, 
            Version=2.0.3600.0, 
            Culture=neutral, 
            PublicKeyToken=b77a5c561934e089" 
            Name="DataRecordTypeDescriptorName">
            <TypeDescriptors>
              <TypeDescriptor TypeName="System.Data.SqlTypes.SqlBytes, System.Data, 
                Version=2.0.3600.0, 
                Culture=neutral, 
                PublicKeyToken=b77a5c561934e089" Name="Data" />
            </TypeDescriptors>
          </TypeDescriptor>
        </TypeDescriptors>
      </TypeDescriptor>
     </Parameter>
    </Parameters>
  <MethodInstances>
    <MethodInstance Name="DataAccessor" 
      Type="StreamAccessor" 
      ReturnParameterName="StreamData" 
      ReturnTypeDescriptorName="Data">
      <Properties>
<!-- If extension field is available-->
        <Property Name="Extension" Type="System.String">Extension</Property>
<!--If MimeType is available-->
        <Property Name="ContentType" Type="System.String">ContentType</Property>
<!--If attachments is to be displayed in profile pages, add the following property-->
        <Property Name="MimeTypeField" Type="System.String">ContentType</Property>
      </Properties>
    </MethodInstance>
  </MethodInstances>
</Method>



    If the MIME type is the same for all the BLOBs, you can replace this line of code from the previous example: 
  
    
    
 `<Property Name="ContentType" Type="System.String">ContentType</Property>`
  
    
    
with the following line of code: 
  
    
    
 `<Property Name=" ContentType " Type="System.String">application/vnd.openxmlformats-officedocument.wordprocessingml.document</Property>`
    
  
3. Re-import the model file by using the Business Connectivity Services service application administration UI. 
    
  
4. Create the content source for the external content type.
    
  
5. Launch a full crawl of the content source. 
    
  

## Additional resources
<a name="SP15Crawlblobs_addlresources"> </a>


-  [Search connector framework in SharePoint 2013](search-connector-framework-in-sharepoint.md)
    
  
-  [How to: Create External Content Types](http://msdn.microsoft.com/library/811b458c-e209-46df-ba02-8db02bc658db%28Office.15%29.aspx)
    
  
-  [XML Snippet: Modeling a StreamAccessor Method](http://msdn.microsoft.com/library/bd60cc2e-f7f6-421c-9d2a-60e8512b9893%28Office.15%29.aspx)
    
  

