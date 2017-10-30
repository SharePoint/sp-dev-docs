---
title: Removing Excel Interactive View from a webpage
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 407b3aa3-7286-462b-905f-811a3b7f3f1c
---


# Removing Excel Interactive View from a webpage

The Excel Interactive View feature has been disabled. If you have inserted an Excel Interactive View into your web page, you can remove it by removing the  `<script>` tag and the placeholder `<a>` tags for the button from the HTML of your web page.
  
    
    

To remove the  `<script>` tag, search for and delete the following HTML.


```HTML

<script src="http://r.office.microsoft.com/r/rlidExcelButton?v=1&amp;amp;kip=1" type="text/javascript"></script>
```

To remove the placeholder  `<a>` tags, find <a> tags that are located directly before any <table> elements in your HTML. Because <a> tags are customizable, parse your HTML for the first part of the string to find all the instances of the button.


```HTML
<a href="#" name="MicrosoftExcelButton" data-xl-tableTitle="" data-xl-buttonStyle="Standard" data-xl-fileName="Book1" data-xl-attribution="" ></a>
```


## Workarounds

We encourage you to  [embed Excel into your web pages ](https://support.office.com/en-au/article/Share-it-Embed-an-Excel-workbook-on-your-blog-804e1845-5662-487e-9b38-f96307144081?ui=en-US&amp;rs=en-AU&amp;ad=AU) as an alternative.
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Excel Services in SharePoint](excel-services-in-sharepoint.md)
    
  
-  [Embed an Excel workbook on your blog](https://support.office.com/en-au/article/Share-it-Embed-an-Excel-workbook-on-your-blog-804e1845-5662-487e-9b38-f96307144081?ui=en-US&amp;rs=en-AU&amp;ad=AU)
    
  

