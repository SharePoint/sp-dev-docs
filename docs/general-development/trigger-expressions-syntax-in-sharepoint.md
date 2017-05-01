---
title: Trigger expressions syntax in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: d50536f6-d02e-4060-9286-634dfd06206c
---


# Trigger expressions syntax in SharePoint 2013
Learn about trigger expressions you can use to create trigger conditions to configure the web service callout in SharePoint Server 2013. 
## Elements used in the syntax of trigger expressions
<a name="SP15triggerex_elements"> </a>

Elements that can be used in a trigger expression are:
  
    
    

- Operators
    
  
- Managed property value access
    
  
- Literals
    
  
- Functions
    
  
- Constants
    
  

> **Note:**
> The string " **Null**" is reserved for the value **Null**. 
  
    
    


## Operators in trigger expression syntax
<a name="SP15triggerex_operators"> </a>

Table 1 describes the operators supported by the trigger expression language, with order of precedence being from highest to lowest. Operators in the same category have equal precedence. Several operators have two versions of their syntax.
  
    
    

**Table 1. Supported operators for trigger expression syntax**


|**Category**|**Expression**|**Description**|
|:-----|:-----|:-----|
|Unary  <br/> |-  <br/> !, NOT  <br/> |Arithmetic negation  <br/> Logical negation  <br/> |
|Multiplicative  <br/> |*  <br/> /  <br/> %, mod  <br/> |Multiplication  <br/> Division  <br/> Remainder  <br/> |
|Additive  <br/> |+  <br/> -  <br/> &amp;  <br/> |Addition  <br/> Subtraction  <br/> String concatenation  <br/> |
|Relational  <br/> |=, ==  <br/> !=, <>  <br/> <  <br/> >  <br/> <=  <br/> >=  <br/> |Equality  <br/> Inequality  <br/> Less than  <br/> Greater than  <br/> Less than or equal  <br/> Greater than or equal  <br/> |
|Logical AND  <br/> |&amp;&amp;, AND  <br/> |Logical AND  <br/> |
|Logical OR  <br/> |||, OR  <br/> |Logical OR  <br/> |
   

## Managed property access in trigger expressions
<a name="SP15triggerex_managed"> </a>

Managed properties in the crawled items are referenced by their name; the name is not in quotation marks ("") and is case-sensitive.
  
    
    

## Literals in trigger expressions
<a name="SP15triggerex_literals"> </a>

The following data types can be expressed as literals: **String**, **Int32**, **Double**, and **Boolean**.
  
    
    

## Functions in trigger expressions
<a name="SP15triggerex_functions"> </a>

A wide collection of functions ranging from mathematical functions such as  `Floor` to functions for use with particular data types, such as `Lists`. You can use these functions individually or you can nest them.
  
    
    

-  `bool? ListContains<T>(IList<T> list, T obj)`
    
  
-  `int? Count<TElement>(IList<TElement> list)`
    
  
-  `TElement Item<TElement>(IList<TElement> list, int? index)`
    
  
-  `bool IsInsideRange(DateTime? date, long? fromTicks, long? toTicks)`
    
  
-  `DateTime Now()`
    
  
-  `DateTime? ToDate(string date, string format)`
    
  
-  `int? Day(DateTime? date)`
    
  
-  `int? DayOfWeek(DateTime? date)`
    
  
-  `int? DayOfYear(DateTime? date)`
    
  
-  `int? GetDatePart(DateTime? date, DatePartConstant datePartConstant)`
    
  
-  `int? Hour(DateTime? date)`
    
  
-  `int? Minute(DateTime? date)`
    
  
-  `int? Month(DateTime? date)`
    
  
-  `int? Quarter(DateTime? date)`
    
  
-  `int? Second(DateTime? date)`
    
  
-  `int? Year(DateTime? date)`
    
  
-  `long? GetDateDiff(DateTime? occursFirst, DateTime? occursLast, DatePartConstant datePartConstant)`
    
  
-  `string Extension(string arg)`
    
  
-  `string FileName(string arg)`
    
  
-  `string FileName(string arg, bool? excludeExtension)`
    
  
-  `bool IsNull(object value)`
    
  
-  `bool? IsDate(string input, string format)`
    
  
-  `object IfThenElse(bool? condition, object thenBranch, object elseBranch)`
    
  
-  `decimal? Ceiling(decimal? number)`
    
  
-  `decimal? Floor(decimal? number)`
    
  
-  `double? Ceiling(double? number)`
    
  
-  `double? Floor(double? number)`
    
  
-  `double? Sqrt(double? number)`
    
  
-  `bool? Contains(string arg, string contained)`
    
  
-  `bool? EndsWith(string arg, string suffix)`
    
  
-  `bool? IsMatch(string input, string pattern)`
    
  
-  `bool? IsMatch(string input, string pattern, int? start, RegexOptionConstant options)`
    
  
-  `bool? IsMatch(string input, string pattern, RegexOptionConstant options)`
    
  
-  `bool? IsNullOrEmpty(string input)`
    
  
-  `bool? StartsWith(string arg, string prefix)`
    
  
-  `int? IndexOf(string arg, string toFind)`
    
  
-  `int? IndexOfRegex(string input, string regex)`
    
  
-  `int? LastIndexOf(string arg, string toFind)`
    
  
-  `int? Length(string arg)`
    
  
-  `string Match(string input, string pattern)`
    
  
-  `string Match(string input, string pattern, int? start, int? length, RegexOptionConstant options)`
    
  
-  `string Match(string input, string pattern, int? start, RegexOptionConstant options)`
    
  
-  `string Match(string input, string pattern, RegexOptionConstant options)`
    
  
-  `string Substring(string arg, int? start)`
    
  
-  `string Substring(string arg, int? start, int? length)`
    
  
-  `string ToLower(string arg)`
    
  
-  `string Trim(string value)`
    
  

## Constants in trigger expressions
<a name="SP15triggerex_constants"> </a>

There are two sets of constants that can be used with specific functions: **DatePartConstant** and **RegexOptionConstant**. Table 2 lists the two examples of these constants and where you can use them.
  
    
    

**Table 2. Trigger expression constants and usage in SharePoint 2013**


|**Group of constants**|**Examples**|**Usage**|
|:-----|:-----|:-----|
|**DatePartConstant** <br/> |**Day**, **Month**, **Year**, **Hour**, **Minute**, **Second**.  <br/> |With the **GetDatePart** function <br/> |
|**RegexOptionConstant** <br/> |**IgnoreCase** <br/> |With the **IsMatch**, **Match**, **ReplaceRegex**, and **IndexOfRegex** functions. <br/> |
   

## Additional resources
<a name="SP15triggerex_addresources"> </a>


-  [Custom content processing with the Content Enrichment web service callout](custom-content-processing-with-the-content-enrichment-web-service-callout.md)
    
  
-  [How to: Use the Content Enrichment web service callout for SharePoint Server](how-to-use-the-content-enrichment-web-service-callout-for-sharepoint-server.md)
    
  

  
    
    

