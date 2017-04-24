---
title: Unsupported Features in Excel Services REST API
ms.prod: OFFICE365
ms.assetid: 4139901f-255b-4556-b8c8-3d986a07c587
---


# Unsupported Features in Excel Services REST API

The first version of the Excel Services REST API does not support every Excel feature. 
  
    
    


> [!NOTE]
> The Excel Services REST API applies to SharePoint 2013 and SharePoint 2016 on-premises. For Office 365 Education, Business, and Enterprise accounts, use the Excel REST APIs that are part of the  [Microsoft Graph](http://graph.microsoft.io/en-us/docs/api-reference/v1.0/resources/excel
) endpoint.
  
    
    


Following is a partial list of some of the more important features that are currently not supported or working in the Excel Services REST API:
  
    
    


- **No floating charts.** If a range contains a chart, and you request the range through REST, you get only the range.
    
  
- **No sparklines, no icon conditional formatting.** Currently not supported.
    
  
- **Not pixel-perfect with EWA.** The HTML that REST produces is very close to the HTML that Excel Web Access produces. However, the Excel Services REST API cannot access all the Cascading Style Sheets (CSS) elements that Excel Web Access can access. The Excel Services REST API returns an HTML fragment. The HTML fragment must be self-contained.
    
  
- **No distinction in tables.** When a table is requested as Atom to see whether the cell or data is a column head, a total or general data, there is no distinction made in the table. That is, there is no distinction that specifies whether a cell or data is a header, a total or just general data. All table cells throughout a table are treated equally.
    
  
- **URL size limits.** URL size is limited to approximately 2000 characters. This means that, if you have a large number of parameters in a workbook, you may not be able to set all of them. This is especially so if the workbook is located deep in a folder structure.
    
  
- **Special characters.** Characters like "?" and "#" are unsupported. To correctly reference sheet names that contain special characters, the basic guideline is "see what the Excel client does" when referencing a formula to a sheet with special characters and follow that example.
    
  

