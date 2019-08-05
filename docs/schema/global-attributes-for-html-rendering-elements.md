---
title: Global attributes for HTML-rendering elements
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 7df37d74-2663-4100-905a-5bd1509c0e2b
description: The View schema of Collaborative Application Markup Language (CAML) provides several universal attributes that can be used to describe any CAML rendering element. These attributes can be implemented in standard and specialized elements in the View schema.
---

# Global attributes for HTML-rendering elements

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
The View schema of [Collaborative Application Markup Language (CAML)](introduction-to-collaborative-application-markup-language-caml.md) provides several universal attributes that can be used to describe any CAML rendering element. These attributes can be implemented in standard and specialized elements in the [View schema](view-schema.md).
  
> [!NOTE]
> The presence of any one of these attributes implies that it is **TRUE** (for example, **HTMLEncode** cannot be set to **FALSE**). 
  
Universal attributes include the following.
  
### AutoHyperLink

When **TRUE**, scans the rendering for strings that appear to be hyperlinks (for example, www.microsoft.com). When it finds these strings, it automatically adds an appropriate `<A>` tag around the text so that the user can follow the hyperlink. **HTMLEncode** is assumed **TRUE** when **AutoHyperLink** is set to **TRUE**.
    
### AutoNewLine

When **TRUE**, inserts `<BR>` tags into the text stream and replaces multiple spaces with a nonbreaking space (`&nbsp;`). **AutoHyperLink** must be **TRUE** for this attribute to take effect. **HTMLEncode** is assumed **TRUE** when **AutoNewLine** is set to **TRUE**.
    
### Default

If the spanned text is nothing, render this text instead. For example, `<ows:XML><ListProperty Select="Description" Default="This list has no description"/></ows:XML>`. The previous example renders the default text if there is no description for the list in question. 
    
### ExpandXML

When **TRUE**, reviews the rendered content and sends it on another pass through the CAML interpreter. This allows CAML to render CAML.
    
### HTMLEncode

When **TRUE**, converts any embedded characters so that they are all displayed as text in the browser. This means that any characters that could be confused with HTML tags are converted to entities such as `&amp;gt;` instead of `>`.
    
### StripWS

When **TRUE**, strips whitespace from the beginning and end of an element. For example, `<ows:XML StripWS="TRUE"> Microsoft </ows:XML>` renders "Microsoft" without surrounding spaces.
    
### URLEncode

When **TRUE**, converts special characters, such as spaces, to quoted UTF-8 format (for example, `%c3%ab` for character `ë`).
    
### URLEncodeAsURL

Similar to **URLEncode**, but assumes that what is being encoded is a path component of a URL. For example, `<ows:XML URLEncodeAsURL="TRUE">SharePoint website</ows:XML>` renders `SharePoint%20website`. This attribute, unlike **URLEncode**, does not encode the forward slash (`/`).
    
<br/>
