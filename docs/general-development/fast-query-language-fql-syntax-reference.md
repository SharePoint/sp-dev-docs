---
title: FAST Query Language (FQL) syntax reference
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: bd98a41b-623c-41d4-a15d-26c0d4ba4311
---



# FAST Query Language (FQL) syntax reference
Learn about constructing complex search queries for Search in SharePoint using the FAST Query Language (FQL). This reference describes the elements of an FQL query and how to use property specifications, token expressions, and operators in your FQL queries.
## Introduction to FQL and query language subexpressions and expressions in SharePoint
<a name="SP15FQL_about"> </a>

The FAST Query Language (FQL) is a powerful query language that enables developers to perform exact searches and to narrow the scope of your search to values that belong to a specific managed property or a full-text index.
  
    
    
A query language expression can contain nested subexpressions that include query terms, property specifications, and operators, as described in Table 1.
  
    
    

**Table 1. Subexpressions in query language expressions**


|**Item**|**Description**|
|:-----|:-----|
|Token expressions  <br/> |One or more query terms, phrases, or numeric values to search for in a query.  <br/> |
|Property specification  <br/> |A property or full-text index to match with the affected expression.  <br/> |
|Operators  <br/> |Keywords that specify Boolean operations (such as **AND**, **OR**) or other constraints to operands (such as **FILTER**.)  <br/> |
   

### FQL query example

The following FQL query example searches for the terms "hello" and "world" in the **body** managed property of an indexed item:
  
    
    
 `body:string("hello world", mode="and")`
  
    
    
In the example:
  
    
    

-  `body:` limits the scope of the query to the body managed property within the item.
    
  
-  `"hello world"` is the operand to the **STRING** operator, which indicates the terms to search for.
    
  
-  `mode="and"` indicates that the logical query operator **AND** will be applied to `"hello world"`.
    
  
The length of FAST Query Language queries is limited to 2,048 characters.
  
    
    

## Property specification in FQL
<a name="property_specification"> </a>

A property specification limits the scope of the affected expression to specific regions of the indexed content. Such a region can be identified by a full-text index or a managed property. 
  
    
    
Managed properties of type **Text** and **YesNo** are evaluated as text. All other managed property types, including the **Datetime** type, are evaluated as numeric values.
  
    
    
If you don't include a property specification for an expression, the search engine attempts to match the default full-text index defined in the index schema.
  
    
    
The property name must always precede a colon ( **In** operator), and numeric operators must always include a property specification.
  
    
    
A property specification (the **In** Operator) may be applied to the following query entities:
  
    
    

- A single term or phrase, as follows:

    `author:shakespeare`
    
    `title:"to be or not to be"`
- An operator, for example, the **STRING** operator, as follows:
```
    title:string("to be or not to be")
```
    In this case the property specification applies to the complete operator expression.

### Examples

Each of the following expressions matches items that have both "much" and "nothing" in the **title** managed property.

 `title:and(much, nothing)`

 `and(title:much, title:nothing)`

 `title:string("much nothing", mode="and")`

## Token expressions in FQL
<a name="token_expressions"> </a>

Token expressions are words, phrases, or numeric values that are matched against the index.
  
    
    
A text token expression can be a single word or a phrase enclosed in double quotation marks.
  
    
    
A numeric token expression can be a single value or a value range expression.
  
    
    

### Wildcard expressions

A wildcard expression indicates a single term or phrase that includes the Asterisk ("**\***") character; asterisk implies a match of zero or more characters, excluding whitespace. FQL supports prefix search for individual text managed properties and full-text indexes.
  
    
    

#### Wildcard expression examples

The following is a list of valid uses of wildcard expressions in FQL:
  
    
    

-  `text*`
    
  
-  `string("this examp*")`
    
  

### Numeric term expressions
<a name="fql_token_numeric"> </a>

Each numeric term expression must include a property specification of a compatible index schema data type. Table 2 lists the numeric data types that can be used in FQL. 
  
    
    

**Table 2. Numeric data types that can be used in FQL**


|**FQL type**|**Compatible index schema types**|**Description**|
|:-----|:-----|:-----|
|**Int** <br/> |**Integer** <br/> |64 bit integer.  <br/> |
|**Float** <br/> |**Double** <br/> |64-bit (double precision) floating point.  <br/> |
|**Decimal** <br/> |**Decimal** <br/> |128-bit decimal  <br/> |
|**Datetime** <br/> |**Datetime** <br/> |A date and time value.  <br/>The date/time support in FQL enables the same numeric operations on date/time values as on other numeric values.  <br/> |
   

#### Date and time query expressions
<a name="fql_token_datetime"> </a>

FQL provides the **datetime** data type for date and time.
  
    
    
The following ISO 8601-compatible **datetime** formats are supported in queries:
  
    
    

- YYYY-MM-DD 
    
  
- YYYY-MM-DDThh:mm:ss 
    
  
- YYYY-MM-DDThh:mm:ssZ 
    
  
- YYYY-MM-DDThh:mm:ssfrZ
    
  
In these **datetime** formats:
  
    
    

-  _YYYY_ specifies a four-digit year.
    
    > [!NOTE]
    > Only four-digit years are supported. 

-  _MM_ specifies a two-digit month. For example, 01 = January.
    
  
-  _DD_ specifies a two-digit day of the month (01 through 31).
    
  
-  _T_ specifies the letter "T".
    
  
-  _hh_ specifies a two-digits hour (00 through 23); A.M./P.M. indication is not allowed.
    
  
-  _mm_ specifies a two-digit minute (00 through 59).
    
  
-  _ss_ specifies a two-digit second (00 through 59).
    
  
-  _fr_ specifies an optional fraction of seconds, _ss_; between 1 to 7 digits that follows the **.** after the seconds. For example, 2012-09-27T11:57:34.1234567.
    
  
All date/time values must be specified according to the UTC (Coordinated Universal Time), also known as GMT (Greenwich Mean Time) time zone. The UTC time zone identifier (a trailing "Z" character) is optional.
  
    
    

### Reserved words, special characters, and escaping
<a name="fql_token_numeric"> </a>

The following words are reserved within FQL.
  
    
    
`and, or, any, andnot, count, decimal, rank, near, onear, int, in32, int64, float, double, datetime, max, min, range, phrase, scope, filter, not, string, starts-with, ends-with, equals, words, xrank.`
  
    
    
If you want to express any of these words as terms in a query expression, you must enclose them in double quotation marks as shown in the following examples: 
  
    
    

-  `or("any", "and", "xrank")`
    
  
-  `string("any and xrank", mode="OR")`
    
  
-  `phrase(this, is, a, "phrase")`
    
  

> **Tip:**
> Reserved words and characters are not case-sensitive, but using lowercase characters are recommended for future compatibility. 
  
    
    

FQL does not always require a string to be enclosed in double quotation marks. For example,  `and(cat, dog)` is valid FQL even though `cat` and `dog` are not in double quotation marks. However, we recommend that you use double quotation marks to avoid conflicts with reserved words.
  
    
    
The query terms are tokenized according to your locale setting. The tokenization process removes certain special characters. Because special characters are removed, the following FQL expressions are equivalent.
  
    
    
 `and("[king]", "<queen>")`
  
    
    
 `and("king", "queen")`
  
    
    
When a query includes terms from user input or another application, use the  `string("<query terms>", mode="AND|OR|PHRASE")` operator to avoid conflict with reserved words in the query language. You must also remove possible double quotation marks from the user-provided query.
  
    
    

## FQL Operators
<a name="fql_operators"> </a>

FAST Query Language (FQL) operators are keywords that specify Boolean operations or other constraints to operands. The FQL operator syntax is as follows:
  
    
    
 `[property-spec:]operator(operand [,operand]* [, parameter="value"]*)`
  
    
    
In the syntax:
  
    
    

-  _property-spec_ is an optional property specification followed by the "in" operator.
    
  
-  _operator_ is a keyword that specifies an operation to perform.
    
  
-  _operand_ is a term expression or another operator.
    
  
-  _parameter_ is the name of a value that changes the behavior of the operator.
    
  
-  _value_ is the value to use for the parameter name.
    
  
Operator names, parameter names, and parameter text values are case-insensitive. White space is allowed within the operator body, but is ignored unless it is enclosed in double quotation marks. The length of FAST Query Language queries is limited to 2,048 characters.
  
    
    
Table 3 lists the types of operators supported by FQL. 
  
    
    

**Table 3. FQL supported operator types**


|**Type**|**Description**|**Operators**|
|:-----|:-----|:-----|
|String  <br/> |Enables you to specify query operations on a string of terms. This is the most common operator to use on text terms.  <br/> | [STRING](fast-query-language-fql-syntax-reference.md#fql_string_operator) <br/> |
|Boolean  <br/> |Enables you to combine terms and sub-expressions in a query.  <br/> | [AND](fast-query-language-fql-syntax-reference.md#fql_and_operator),  [OR](fast-query-language-fql-syntax-reference.md#fql_or_operator),  [ANY](fast-query-language-fql-syntax-reference.md#fql_any_operator),  [ANDNOT](fast-query-language-fql-syntax-reference.md#fql_andnot_operator),  [NOT](fast-query-language-fql-syntax-reference.md#fql_not_operator),  [COUNT](fast-query-language-fql-syntax-reference.md#fql_count_operator),  [COUNT](fast-query-language-fql-syntax-reference.md#fql_count_operator) <br/> |
|Proximity  <br/> |Enables you to specify the proximity of the query terms in a matching sequence of text.  <br/> | [NEAR](fast-query-language-fql-syntax-reference.md#fql_near_operator),  [ONEAR](fast-query-language-fql-syntax-reference.md#fql_onear_operator),  [PHRASE](fast-query-language-fql-syntax-reference.md#fql_phrase_operator),  [STARTS-WITH](fast-query-language-fql-syntax-reference.md#fql_startswith_operator),  [ENDS-WITH](fast-query-language-fql-syntax-reference.md#fql_endswith_operator),  [EQUALS](fast-query-language-fql-syntax-reference.md#fql_equals_operator) <br/> |
|Numeric  <br/> |Enables you to specify numeric conditions in the query.  <br/> | [RANGE](fast-query-language-fql-syntax-reference.md#fql_range_operator) , [INT](fast-query-language-fql-syntax-reference.md#fql_int_operator),  [FLOAT](fast-query-language-fql-syntax-reference.md#fql_float_operator),  [DATETIME](fast-query-language-fql-syntax-reference.md#fql_datetime_operator),  [DECIMAL](#fql_decimal_operator) <br/> |
|Relevance  <br/> |Enables you to impact the relevance evaluation of a query.  <br/> | [XRANK](fast-query-language-fql-syntax-reference.md#fql_xrank_operator) and  [FILTER](fast-query-language-fql-syntax-reference.md#fql_filter_operator) <br/> |
   
Table 4 provides a list of the supported operators.
  
    
    

**Table 4. FQL supported operators**


|**Operator**|**Description**|**Type**|
|:-----|:-----|:-----|
| [AND](fast-query-language-fql-syntax-reference.md#fql_and_operator) <br/> |Returns only items that match all **AND** operands. <br/> |Boolean  <br/> |
| [ANDNOT](fast-query-language-fql-syntax-reference.md#fql_andnot_operator) <br/> |Returns only items that match the first operand and that don't match the subsequent operands.  <br/> |Boolean  <br/> |
| [ANY](fast-query-language-fql-syntax-reference.md#fql_any_operator) <br/> |Similar to the **OR** operator except that the dynamic rank (the relevance score in the result set.md) is affected by neither the number of operands that match nor the distance between the terms in the item. <br/> |Boolean  <br/> |
| [COUNT](fast-query-language-fql-syntax-reference.md#fql_count_operator) <br/> |Enables you to specify the number of query term occurrences an item must include to be returned as a result. The operand may be a single query term, a phrase, or wildcard query term.  <br/> |Boolean  <br/> |
| [DATETIME](fast-query-language-fql-syntax-reference.md#fql_datetime_operator) <br/> |Provides explicit typing of numeric values.  <br/> The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.  <br/> |Numeric  <br/> |
| [DECIMAL](fast-query-language-fql-syntax-reference.md#fql_decimal_operator) <br/> |Provides explicit typing of numeric values.  <br/> The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.  <br/> |Numeric  <br/> |
| [ENDS-WITH](fast-query-language-fql-syntax-reference.md#fql_endswith_operator) <br/> |Specifies that a word or phrase must appear in the end of a managed property.  <br/> |Proximity  <br/> |
| [EQUALS](fast-query-language-fql-syntax-reference.md#fql_equals_operator) <br/> |Specifies that a word or phrase term or phrase must provide an exact token match with the managed property.  <br/> |Proximity  <br/> |
| [FILTER](fast-query-language-fql-syntax-reference.md#fql_filter_operator) <br/> |Used to query metadata or other structured data.  <br/> |Relevance  <br/> |
| [FLOAT](fast-query-language-fql-syntax-reference.md#fql_float_operator) <br/> |Provides explicit typing of numeric values.  <br/> The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.  <br/> |Numeric  <br/> |
| [INT](fast-query-language-fql-syntax-reference.md#fql_int_operator) <br/> |Provides explicit typing of numeric values.  <br/> The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.  <br/> |Numeric  <br/> |
| [NEAR](fast-query-language-fql-syntax-reference.md#fql_near_operator) <br/> |Restricts the result set to items that have  `N` terms within a certain distance of one another. <br/> |Proximity  <br/> |
| [NOT](fast-query-language-fql-syntax-reference.md#fql_not_operator) <br/> |Returns only items that exclude the operand.  <br/> |Boolean  <br/> |
| [ONEAR](fast-query-language-fql-syntax-reference.md#fql_onear_operator) <br/> |The ordered variant of **NEAR**, and requires an ordered match of the terms. The **ONEAR** operator can be used to restrict the result set to items that have `N` terms within a certain distance of Returns only items that don't match the operand. The operand may be any valid FQL expression.one another. <br/> |Proximity  <br/> |
| [OR](fast-query-language-fql-syntax-reference.md#fql_or_operator) <br/> |Returns only items that match at least one of the **OR** operands. Items that match will get a higher dynamic rank (relevance score in the result set.md) if more of the **OR** operands match. <br/> |Boolean  <br/> |
| [PHRASE](fast-query-language-fql-syntax-reference.md#fql_phrase_operator) <br/> | Returns only items that match an exact string of tokens. <br/> |Proximity  <br/> |
| [RANGE](fast-query-language-fql-syntax-reference.md#fql_range_operator) <br/> | Enables range matching expressions. The **RANGE** operator is used for numeric and date/time managed properties. <br/> |Numeric  <br/> |
| [STARTS-WITH](fast-query-language-fql-syntax-reference.md#fql_startswith_operator) <br/> |Specifies that a word or phrase must appear in the start of a managed property.  <br/> |Proximity  <br/> |
| [STRING](fast-query-language-fql-syntax-reference.md#fql_string_operator) <br/> |Define a Boolean matching condition to a text string.  <br/> |String  <br/> |
| [XRANK](fast-query-language-fql-syntax-reference.md#fql_xrank_operator) <br/> |Enables you to boost the dynamic rank of items based on certain term occurrences without changing which items match the query. A **XRANK** expression contains one component that must be matched, and one or more components that contribute only to dynamic ranking. <br/> |Relevance  <br/> |
   
> [!NOTE]
> In SharePoint, the **RANK** operator is deprecated and will no longer have any effect. Use **XRANK** instead.
  
    
    


### AND
<a name="fql_and_operator"> </a>

Returns only items that match all **AND** operands. The operands may be a single term or any valid FQL sub-expression.
  
    
    

#### Syntax

 `and(operand, operand [, operand]*)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

The following expression matches items for which the default full-text index contains "cat", "dog", and "fox".
  
    
    
 `and(cat, dog, fox)`
  
    
    

### ANDNOT
<a name="fql_andnot_operator"> </a>

Returns only items that match the first operand and that don't match the subsequent operands. The operands may be a single term or any valid FQL sub-expression.
  
    
    

#### Syntax

 `andnot(operand, operand [,operand]*)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

 **Example 1.** The following expression matches items for which the default full-text index contains "cat" but not "dog".
  
    
    
 `andnot(cat, dog)`
  
    
    
 **Example 2.** The following expression matches items for which the default full-text index contains "dog" but neither "beagle" nor "chihuahua".
  
    
    
 `andnot(dog, beagle, chihuahua)`
  
    
    

### ANY
<a name="fql_any_operator"> </a>

> [!NOTE]
> In SharePoint, the **ANY** operator is deprecated. Use the **OR** operator instead.
  
    
    

Similar to the  [OR](fast-query-language-fql-syntax-reference.md#fql_or_operator) operator except that the dynamic rank (the relevance score in the result set) is affected by neither the number of operands that match nor the distance between the terms in the item. The operands may be a single term or any valid FQL sub-expression.
  
    
    
The dynamic ranking component for this part of the query is based on the best matching term within the **ANY** expression.
  
> [!NOTE]
> he difference from **OR** is related only to the ranking within the result set. The same total set of items will match the query.
  
    
    


#### Syntax

 `any(operand, operand [,operand]*)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

 The following expression matches items for which the default full-text index contains "cat" or "dog".
  
    
    
If the index contains both "cat" and "dog", but "cat" is considered a better match, the 'item's dynamic rank will be based on "cat" with no consideration given to "dog".
  
    
    
 `any(cat, dog)`
  
    
    

### COUNT
<a name="fql_count_operator"> </a>

Specifies the of number query term occurrences an item must include for the item to be returned as a result. The operand may be a single query term, a phrase, or a wildcard query term.
  
    
    

#### Syntax

 `property-spec:count(operand [,from=<numeric value>, to=<numeric value>])`
  
    
    

#### Parameters



|**Parameter**|**Value**|**Description**|
|:-----|:-----|:-----|
| _From_ <br/> | _\<numeric_value\>_ <br/> |The value of the  _from_ parameter must be a positive integer that specifies the minimum number of times that the specified operand must be matched. <br/> If the  _from_ parameter is not specified, no lower limit will exist. <br/> |
| _to_ <br/> | _\<numeric_value\>_ <br/> |The value of the  _to_ parameter must be a positive integer that specifies the non-inclusive maximum number of times that the specified operand must be matched. For example, a _to_ value of **11** specifies 10 times or fewer. <br/> If the  _to_ parameter is not specified, no upper limit will exist. <br/> |
   

#### Examples

 **Example 1.** The following expression matches at least 5 occurrences of the word "cat".
  
    
    
 `count(cat, from=5)`
  
    
    
 **Example 2.** The following expression matches at least 5 but not 10 or more occurrences of the word "cat".
  
    
    
 `count(cat, from=5, to=10)`
  
    
    
 **Example 3.** Each of the following expressions matches at least 3 occurrences of a certain word, and that word can be either "cat" or "dog".
  
    
    
 `count(or(cat, dog), from=3)count(string("cat dog", mode="or"), from=3)`
  
    
    
The following table contains examples of managed property string values and states whether they match the two expressions in Example 3.
  
    
    


|**Match?**|**Text**|
|:-----|:-----|
|Yes  <br/> |My cat likes my dog, but my dog hates my cat.  <br/> |
|No  <br/> |My bird likes my newt, but my dog hates my cat.  <br/> |
   

### DATETIME
<a name="fql_datetime_operator"> </a>

Provides explicit typing of date/time numeric values. The operand is a date/time string formatted according to the syntax specified in  [Token expressions in FQL](fast-query-language-fql-syntax-reference.md#token_expressions).
  
    
    
The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.
  
    
    

#### Syntax

 `datetime(<date/time string>)`
  
    
    

#### Parameters

Not applicable.
  
    
    

### DECIMAL
<a name="fql_decimal_operator"> </a>

Provides explicit typing of decimal values. The operand is a decimal value according to the syntax specified in  [Token expressions in FQL](fast-query-language-fql-syntax-reference.md#token_expressions).
  
    
    
The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.
  
    
    

#### Syntax

 `decimal(<decimal point value>)`
  
    
    

#### Parameters

Not applicable.
  
    
    

### ENDS-WITH
<a name="fql_endswith_operator"> </a>

Specifies that a word or phrase must appear in the end of a managed property (boundary matching).
  
    
    
Boundary matching is not supported on numeric managed properties. Numeric managed properties will always be subject to exact or value range matching. 
  
    
    
Some applications may require that you are able to perform an exact match of a managed property. For example, this may be a **product name** managed property, where the full name of one product is a substring of another product name.
  
    
    

#### Syntax

 `ends-with(<term or phrase>)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

The following expression matches items with the values "Mr Adam Jones" and "Adam Jones" in the "author" managed property. It will not match items with the value "Adam Jones sr".
  
    
    
 `author:ends-with("adam jones")`
  
    
    

#### Remarks

Boundary matching can be applied to all the text of the managed property, or to individual strings within a managed property that contains a list of string values, for example, a list of names. In this case, you may want to match the exact content of each string, and to avoid query matching across string boundaries. 
  
    
    
To apply boundary match queries, you must configure the relevant managed property in the index schema. 
  
    
    
By enabling the Boundary Match feature for the managed property, you can do the following: 
  
    
    

- Use explicit boundary match queries. 
    
  
- Prevent phrases from matching across string boundaries. For managed properties that contain multiple strings, this feature will ensure that a string does not match words before or after a boundary indication.
    
  

### EQUALS
<a name="fql_equals_operator"> </a>

Specifies that a word or phrase must provide an exact token match with the managed property.
  
    
    

#### Syntax

 `equals(<term or phrase>)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

The following example will match items with the values "Adam Jones" in the "author" managed property. It will not match items with the values "Adam Jones sr" or "Mr Adam Jones".
  
    
    
 `author:equals("adam jones")`
  
    
    

#### Remarks

See also  [ENDS-WITH](fast-query-language-fql-syntax-reference.md#fql_endswith_operator).
  
    
    

### FILTER
<a name="fql_filter_operator"> </a>

Used to query metadata or other structured data. 
  
    
    
Using the **FILTER** operator automatically implies the following for the specified query:
  
    
    

- Linguistics will be set to linguistics="OFF".
    
  
- Ranking will be disabled.
    
  
- No query highlighting will be used in the hit highlighted summary for the query result hit.
    
  

> **Tip:**
> If you use the **STRING** operator inside a **FILTER** expression, by default, linguistics is disabled. You can enable linguistics processing within each **STRING** expression inside **FILTER** by using the operand `linguistics="ON"`. 
  
    
    


#### Syntax

 `filter(<any valid FQL operator expression>)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

The following expression matches items that have a **Title** managed property that contains "sonata" and a **Doctype** managed property that contains only the token "audio". No linguistic matching will be performed on "audio". Because the **FILTER** token will be used to match "audio", that text will not be highlighted in the hit highlighted summary.
  
    
    
 `and(title:sonata, filter(doctype:equals("audio")))`
  
    
    

#### Remarks

If you must restrict your query to match at least one of a large set of integer values in a numeric property, you can express this in two functionally equivalent ways: 
  
    
    

-  `and(string("hello world"), filter(property-spec:or(1, 20, 453, ... , 3473)))`
    
  
-  `and(string("hello world"), filter(property-spec:int("1 20 453 ... 3473", mode="or")))`
    
  
The second example uses the **INT** operator by using a string with the set of numeric values in double quotation marks. This provides a significantly better query performance when filtering with a large set of numeric values.
  
    
    
If you must filter a large set of values, you should consider using numeric values instead of string values, and express your queries by using the optimized syntax.
  
    
    

### FLOAT
<a name="fql_float_operator"> </a>

Provides explicit typing of floating point numeric values. The operand is a floating point value according to the syntax specified in  [Token expressions in FQL](fast-query-language-fql-syntax-reference.md#token_expressions).
  
    
    
The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.
  
    
    

#### Syntax

 `float(<floating point value>)`
  
    
    

#### Parameters

Not applicable.
  
    
    

### INT
<a name="fql_int_operator"> </a>

Provides explicit typing of integer values. The operand is an integer value according to the syntax specified in  [Token expressions in FQL](fast-query-language-fql-syntax-reference.md#token_expressions).
  
    
    
The explicit type conversion is optional and usually is not needed. The type of the query term is detected according to the type of the target numeric managed property.
  
    
    
The **INT** operator can also be used to express a set of integer values as arguments to Boolean FQL operators. This provides a performance efficient way to provide a set of integer values in a query, as the values that are passed by using the **INT** operator are not parsed by the FQL query parser but passed directly to the query matching component.
  
    
    

#### Syntax

 `int(<integer value>)`
  
    
    
 `int("value, value, ??? , value")`
  
    
    
The first syntax specifies a single integer. The second syntax specifies a comma-separated list of integer values enclosed in double quotation marks.
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

If you need to restrict your query to match at least one of a large set of integer values in a numeric property, you can express this by using the **INT** operator:
  
    
    
 `and(string("hello world"), filter(id:int("1 20 49 124 453 985 3473", mode="or")))`
  
    
    

### NEAR
<a name="fql_near_operator"> </a>

Restricts the result set to items that have  _N_ terms within a certain distance of one another.
  
    
    
The order of the query terms is not important for the matching, only the distance. 
  
    
    
Any number of terms can be combined with the **NEAR** operators.
  
    
    
 **NEAR** operands may be single terms, phrases, or Boolean **OR** or **ANY** operator expressions. Wildcards are accepted.
  
    
    
If multiple operands of the **NEAR** operator match the same indexed token, they are considered near one another.
  
    
    

#### Syntax

 `near(arg, arg [, arg]* [, N=<numeric value>])`
  
    
    

#### Parameters



|**Parameter**|**Value**|**Description**|
|:-----|:-----|:-----|
| _N_ <br/> | _\<numeric_value\>_ <br/> |Specifies the maximum number of words that is allowed to appear between the terms (explicit proximity).  <br/> If **NEAR** includes more than two operands, the maximum number of words allowed between the terms ( _N_) is counted within the whole expression.  <br/> Default: **4** <br/> |
   

#### Examples

 **Example 1.** The following expression matches strings that contain both "cat" and "dog" if no more than four indexed tokens (default) separate them.
  
    
    
 `near(cat, dog)`
  
    
    
 **Example 2.** The following expression matches strings that contain "cat", "dog", "fox", and "wolf" if no more than four indexed tokens separate them.
  
    
    
 `near(cat, dog, fox, wolf)`
  
    
    
The following table contains examples of managed property string values and states whether they match the previous expression in Example 2.
  
    
    


|**Match?**|**Text**|
|:-----|:-----|
|Yes  <br/> |The picture shows a cat, a dog, a fox, and a wolf.  <br/> |
|Yes (with stemming)  <br/> |Dogs, foxes, and wolves are canines, but cats are felines.  <br/> |
|No  <br/> |The picture shows a cat with a dog, a fox, and a wolf.  <br/> |
   
The following expression matches all the strings in the previous table.
  
    
    
 `near(cat, dog, fox, wolf, N=5)`
  
    
    

#### Remarks

 **NEAR/ONEAR term distance considerations**
  
    
    
 _N_ indicates the maximum number of words that are allowed to appear between the query terms within the matching segment of the item. If **NEAR** or **ONEAR** includes more than two operands, the maximum number of words allowed between the query terms ( _N_) is counted within the segment of the item matching all the **NEAR** or **ONEAR** terms.
  
    
    
 **NEAR** or **ONEAR** operates on tokenized text. This means that special characters such as comma (" **,** "), period (" **.** "), colon (" **:** "), or semicolon (" **;** ") will be treated as white space. The term "distance" relates to tokens within the indexed text.
  
    
    
If you use **ONEAR** or **NEAR** with equal operands, the operator will work as follows:
  
    
    
 `near(a, a, n=x)`
  
    
    
This query will always return **true** if at least one instance of '' `a`'' appears within the context. This also means that **NEAR** cannot be used as a **COUNT** operator. For more information about counting term occurrences, see the [COUNT](fast-query-language-fql-syntax-reference.md#fql_count_operator) operator.
  
    
    
 **NEAR** applied to phrases will also match overlapping phrases in the text.
  
    
    
If a token in the matching segment matches more than one operand to the **NEAR** or **ONEAR** expression, the query may match even if the number of nonmatching tokens within the matching segment exceeds the value of ' _N_' in the **NEAR** or **ONEAR** operator expression. For example, an overlap can be overlapping phrases. If the number of token overlap matches is ' `O`', the query will match if not more than ' `N+O`' non-matching tokens appear within the matching segment of the item. 
  
    
    
**NEAR or ONEAR with NOT**
  
    
    
The **NOT** operator cannot be used inside the **NEAR** or **ONEAR** operator. The following is incorrect FQL syntax:
  
    
    
 `near(audi,not(bmw),n=2)`
  
    
    

### NOT
<a name="fql_not_operator"> </a>

Returns only items that don't match the operand. The operand may be any valid FQL expression.
  
    
    

#### Syntax

 `not(operand)`
  
    
    

#### Parameters

Not applicable.
  
    
    

### ONEAR
<a name="fql_onear_operator"> </a>

The ordered variant of **NEAR**, and requires an ordered match of the terms. The **ONEAR** operator can be used to restrict the result set to items that have _N_ terms within a certain distance of one another.
  
    
    

#### Syntax

 `onear(arg, arg [, arg]* [, N=<numeric value>])`
  
    
    

#### Parameters



|**Parameter**|**Value**|**Description**|
|:-----|:-----|:-----|
| _N_ <br/> | _\<numeric_value\>_ <br/> |Specifies the maximum number of words that are allowed to appear between the terms (explicit proximity).  <br/> If **ONEAR** includes more than two operands, the maximum number of words allowed between the terms ( _N_) is counted within the whole expression.  <br/> Default: **4** <br/> |
   

#### Examples

 **Example 1.** The following expression matches all the occurrences of the words "cat", "dog", "fox", and "wolf" that appears in order, if no more than four indexed tokens separate them.
  
    
    
 `onear(cat, dog, fox, wolf)`
  
    
    
The following table contains examples of managed property string values, and states whether they match the previous expression.
  
    
    


|**Match?**|**Text**|
|:-----|:-----|
|Yes  <br/> |The picture shows a cat, a dog, a fox, and a wolf.  <br/> |
|No  <br/> |Dogs, foxes, and wolves are canines, but cats are felines.  <br/> |
|No  <br/> |The picture shows a cat with a dog, a fox, and a wolf.  <br/> |
   
 **Example 2.** The following expression matches (with stemming) the text in the second row of the previous table.
  
    
    
 `onear(dog, fox, wolf, cat, N=5)`
  
    
    
 **Example 3.** The following expression matches the text in the first and third rows of the preceding table.
  
    
    
 `onear(cat, dog, fox, wolf, N=5)`
  
    
    

#### Remarks

See also  [NEAR](fast-query-language-fql-syntax-reference.md#fql_near_operator).
  
    
    

### OR
<a name="fql_or_operator"> </a>

Returns only items that match at least one of the **OR** operands. Items that match will get a higher dynamic rank (relevance score in the result set) if more of the **OR** operands match. The operands may be a single term or any valid FQL sub-expression.
  
    
    

#### Syntax

 `or(operand, operand [,operand]*)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

The following expression matches all the items for which the default full-text index contains either "cat" or "dog". If an item's default full-text index contains both "cat" and "dog", it will match and have a higher dynamic rank than it would if it contained only one of the tokens.
  
    
    
 `or(cat, dog)`
  
    
    

### PHRASE
<a name="fql_phrase_operator"> </a>

Searches for an exact string of tokens. 
  
    
    
The **PHRASE** operands can be single terms. Wildcards are accepted.
  
    
    

#### Syntax

 `phrase(term [, term]*)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Remarks

See also  [STRING](fast-query-language-fql-syntax-reference.md#fql_string_operator).
  
    
    

### RANGE
<a name="fql_range_operator"> </a>

Use the **RANGE** operator for numeric and date/time managed properties. The operator enables range matching expressions.
  
    
    

#### Syntax

 `range(start, stop [,from="GE"|"GT"] [,to="LE"|"LT"])`
  
    
    

#### Parameters



|**Parameter**|**Value**|**Description**|
|:-----|:-----|:-----|
| _start_ <br/> | _\<numeric_value\>\|\<date/time_value\>_ <br/> |Start value for the range.  <br/> To specify that the range has no lower bound, use the reserved word **min**. <br/> |
| _stop_ <br/> | _\<numeric_value\>\|\<date/time_value\>_ <br/> |End value for the range.  <br/> To specify that the range has no upper bound, use the reserved word **max**. <br/> |
| _from_ <br/> |**GE\|GT** <br/> | Optional parameter that indicates the open or close start interval. <br/>  Valid values: <br/><ul><li> **GE** Greater than or equal to the start value (>= start of interval). </li><li> **GT** Greater than the start value (> start of interval). </li></ul>  Default: **GE**  |
| _to_ <br/> |**LE\|LT** <br/> | Optional parameter that indicates the open or close end interval. <br/>  Valid values: <br/><ul><li> **LE** Less than or equal to the end value (<= end of interval). </li><li> **LT** Less than the end value (< end of interval). </li></ul>  Default: **LT** |
   

#### Examples

The following expression matches a description property starting with the phrase "big accomplishments" appearing in items with a size of at least 10 000 bytes.
  
    
    
 `and(size:range(10000, max), description:starts-with("big accomplishments"))`
  
    
    

### STARTS-WITH
<a name="fql_startswith_operator"> </a>

Specifies a word or phrase that must appear at the start of a managed property.
  
    
    

#### Syntax

 `starts-with(<term or phrase>)`
  
    
    

#### Parameters

Not applicable.
  
    
    

#### Examples

The following expression will match items with the values "Adam Jones sr" and "Adam Jones" in the **author** managed property. It will not match items with the value "Mr Adam Jones".
  
    
    
 `author:starts-with("adam jones")`
  
    
    

#### Remarks

For additional remarks on boundary matching, see  [ENDS-WITH](fast-query-language-fql-syntax-reference.md#fql_endswith_operator).
  
    
    

### STRING
<a name="fql_string_operator"> </a>

Defines a Boolean matching condition to a text string.
  
    
    
The operand is a text string (one or more terms) that is to be matched. The string is followed by zero or more parameters. 
  
    
    
The **STRING** operator can also be used as a type conversion. The query `string("24.5")`, for example, will treat the numeric value "24.5" as a text string.
  
    
    

#### Syntax

 `string("<text string>"`
  
    
    
 ` [, mode=<mode>]`
  
    
    
 ` [, n=<near>]`
  
    
    
 ` [, weight=<n>]`
  
    
    
 ` [, linguistics=<on|off>]`
  
    
    
 ` [, wildcard=<on|off>])`
  
    
    

#### Parameters



|**Parameter**|**Value**|**Description**|
|:-----|:-----|:-----|
| _mode_ <br/> | _\<mode\>_ <br/> | The _mode_ parameter specifies how to evaluate the \<text string\> value. The following list shows valid values. <br/> **"PHRASE"** - `phrase(term [,term]*)` <br/> <table><tr><th>**Mode**</th><th>**Equivalent operator expression**</th></tr><tr><td>**"PHRASE"**  </td><td> `phrase(term [,term]*)` </td></tr><tr><td>**"AND"** </td><td> `and(term, term [,term]*)` </td></tr><tr><td>**"OR"** </td><td> `or(term, term [,term]*)` </td></tr><tr><td>**"ANY"** </td><td> `any(term, term [,term]*)` </td></tr><tr><td>**"NEAR"** </td><td> `near(term, term [,term]*, N)` </td></tr><tr><td>**"ONEAR"** </td><td> `onear(term, term [,term]*, N)` </td></tr></table><br/>Default: **"PHRASE"** |
| _n_ <br/> | _\<numeric_value\>_ <br/> |This parameter indicates the maximum term distance for  _mode_= **"NEAR"** or _mode_= **"ONEAR"**. <br/> The following expressions are equivalent:  <br/>  `string("hello world", mode="NEAR", n=5)` <br/>  `near(hello, world, n=5)` <br/> Default: **4** <br/> |
| _weight_ <br/> | _\<numeric_value\>_ <br/> |This parameter is a positive numeric value indicating term weight for dynamic ranking.  <br/> A lower value indicates that a term should contribute less to the ranking. A higher value indicates that a term should contribute more to the ranking. A value of zero for the weight parameter specifies that a term should not affect dynamic rank.  <br/> The  _weight_ parameter applies to all the terms in the **STRING** expression. <br/> **TIP:** The weight parameter will affect only full-text index queries.           Default: **100**. <br/> |
| _linguistics_ <br/> |**on\|off** <br/> |Disables/enables all linguistics features for the string (lemmatization, synonyms, spelling checking) if they are enabled for the query.  <br/> You can use this parameter to switch off linguistic processing for a given term or string while you still want the term or string to contribute to ranking.  <br/> Default: **"ON"** <br/> |
| _wildcard_ <br/> |**on\|off** <br/> | This parameter controls wildcard expansion of terms inside the _\<text string\>_. This setting overrides any wildcard settings in query parameters, and allows extended wildcard characters to be enabled or disabled on specific parts of the query.  <br/>  The following are valid values: <br/><ul><li> **"ON"** Specifies that the character "\*" is evaluated as wildcard. A "\*" character matches zero or more characters.  </li><li> **"OFF"** Specifies that the characters "\*" is not evaluated as wildcard.  </li></ul>  Default: **"ON"** <br/> |
   
> [!NOTE]
> In SharePoint the  _minexpansion_,  _maxexpansion_ and _annotation_class_ parameters for the **STRING** operator are obsolete.
  
    
    


#### Examples

 **Example 1.** Because the default string mode is " **PHRASE** ", each of the following expressions returns the same results.
  
    
    
 `"what light through yonder window breaks"string("what light through yonder window breaks")string("what light through yonder window breaks", mode="phrase")phrase(what, light, through, yonder, window, breaks)`
  
    
    
 **Example 2.** The following string token expression and the **AND** operator expression return the same results.
  
    
    
 `string("cat dog fox", mode="and")and(cat, dog, fox)`
  
    
    
 **Example 3.** The following string token expression and **OR** operator expression return the same results.
  
    
    
 `string("coyote saguaro", mode="or")or(coyote, saguaro)`
  
    
    
 **Example 4.** The following string token expression and **ANY** operator expression return the same results.
  
    
    
 `string("coyote saguaro", mode="any")any(coyote, saguaro)`
  
    
    
 **Example 5.** The following string token expression and **NEAR** operator expression return the same results.
  
    
    
 `string("coyote saguaro", mode="near")near(coyote, saguaro)`
  
    
    
 **Example 6.** The following string token expression and **NEAR** operator expression return the same results.
  
    
    
 `string("cat dog fox wolf", mode="near", N=4)near(cat, dog, fox, wolf, N=4)`
  
    
    
 **Example 7.** The following string token expression and **ONEAR** operator expression return the same results.
  
    
    
 `string("cat dog fox wolf", mode="onear")onear(cat, dog, fox, wolf)`
  
    
    
 **Example 8.** The following string token expression matches the word "nobler" with linguistic features disabled, so other forms of the word (such as "ennobling") are not matched by using stemming.
  
    
    
 `string("nobler", linguistics="off")`
  
    
    
 **Example 9.** The following expression matches items that contain either "cat" or "dog ", but the expression increases the dynamic rank of items that contain "dog" more than items that contain "cat".
  
    
    
 `or(string("cat", weight="200"), string("dog", weight="500"))`
  
    
    

#### Remarks

 **Relevance weight for dynamic ranking**
  
    
    
The main effect of the **weight** parameter is for **OR** queries. It can also have some effect on **AND** queries. The dynamic rank algorithm can imply that different terms give different rank contribution depending on where in the item the term match occurs.
  
    
    
The difference in rank contribution can also be based on term frequency and inverse item frequency. The following is an example:
  
    
    

- Query:  `and(string("a"), string("b", weight=200))`
    
  
- Index schema: The **title** managed property has more weight than the **body** managed property.
    
  
- Index item 1 includes term 'a' in the title and term 'b' in the body. 
    
  
- Index item 2 includes term 'a' in the body and term 'b' in the title. 
    
  
In this example, item 2 will get the highest total rank, as the items with higher dynamic rank contribution will get even more boost.
  
    
    

> **Tip:**
> The relative term boost (positive or negative) is applied to the dynamic rank component of the total rank. However, proximity boost (distance between words) rank calculations are not affected by the term weighting. The relative weighting does not always imply that the total rank for the item is modified according to the percentage given. > The following query will search for the terms "peter", "paul", or "mary", where "peter" will have twice as much rank contribution as the two other terms. >  `or(peter, string("paul mary", mode="OR", weight=50))`
  
    
    

 **Handling strings with special characters**
  
    
    
Special characters such as comma (","), semicolon (";"), colon (":"), period ("."), minus ("-"), underline ("_"), or forward slash ("/") are treated as white space inside a string expression enclosed in double quotation marks. This is related to the tokenization process. These characters also imply an implicit phrasing of the tokens separated by these characters. 
  
    
    
The following query expressions are equivalent.
  
    
    
 `title:string("animals birds", mode="phrase")title:"animals/birds"title:string("animals/birds", mode="and")title:string("animals/birds", mode="or")`
  
    
    
The following query expressions are equivalent.
  
    
    
 `title:or(string("animals birds", mode="phrase"), string("animals insects", mode="phrase"))title:string("animals/birds animals/insects", mode="or")`
  
    
    
The following query expressions are equivalent.
  
    
    
 `body:string("help contoso com", mode="phrase")body:string("help@contoso.com")`
  
    
    
 **Tokenized phrase matching**
  
    
    
You can search for an exact string of tokens by using the **STRING** operator with _mode_="phrase" or the **PHRASE** operator.
  
    
    
All such phrase operations imply a tokenized phrase match. This means that special characters such as comma (" **,** "), semicolon (" **;** "), colon (" **:** "), underscore (" \_ "), minus (" **-** "), or forward slash (" **/** ") are treated as white space. This is related to the tokenization process.
  
    
    

### XRANK
<a name="fql_xrank_operator"> </a>

Boosts the dynamic rank of items based on certain term occurrences within the  _match expression_, without changing which items match the query. An **XRANK** expression consists of one component that must be matched, the _match expression_, and one or more components that contribute only to dynamic ranking, the  _rank expression_. At least **one** of the parameters, excluding _n_, must be specified for an XRANK expression to be valid.
  
    
    
 _Match expressions_ may be any valid FQL expression, including nested **XRANK** expressions. _Rank expressions_ may be any valid FQL expression without **XRANK** expressions. If your FQL queries have multiple **XRANK** operators, the final dynamic rank value is calculated as a sum of boosts across all **XRANK** operators.
  
> [!NOTE]
> In SharePoint Server 2010, the **XRANK** operator had two parameters: _boost_ and _boostall_, as well as the following syntax:  `xrank(operand, rank-operand [, rank-operand]* [,boost=n] [,boostall=yes])`. This syntax along with its parameters is deprecated in SharePoint. We recommend the use of the new syntax and parameters instead. 
  
    
    


#### Syntax

 `xrank(<match expression> [, <rank-expression>]*, rank-parameter[, rank-parameter]*)`
  
    
    

#### Formula


  
    
    
![Formula for XRANK operator](../images/XRANKFormula.gif)
  
    
    

  
    
    

  
    
    

#### Parameters



|**Parameter**|**Value**|**Description**|
|:-----|:-----|:-----|
| _N_ <br/> | _\<integer_value\>_ <br/> |Specifies the number of results to compute statistics from.  <br/> This parameter does not affect the number of results that the dynamic rank contributes to; it is just a means to exclude irrelevant items from the statistics calculations.  <br/> Default: **0**. A zero value carries the sematic of *all documents*  . <br/> |
| _Nb_ <br/> | _\<float_value\>_ <br/> |The  _nb_ parameter refers to normalized boost. This parameter specifies the factor that is multiplied with the product of the variance and average score of the rank values of the results set. <br/>  _f_ in the XRANK formula. <br/> |
   
Typically normalized boost,  _nb_, is the only parameter that is modified. This parameter provides the necessary control to promote or demote a particular item, without taking standard deviation into account. 
  
    
    

#### Advanced parameters

The following advanced parameters are also available. However, typically they aren't used.
  
    
    


|**Parameter**|**Value**|**Description**|
|:-----|:-----|:-----|
| _cb_ <br/> | _\<float_value\>_ <br/> |The  _cb_ parameter refers to constant boost. <br/> Default: **0**. <br/>  _a_ in the XRANK formula. <br/> |
| _stdb_ <br/> | _\<float_value\>_ <br/> |The  _stdb_ parameter refers to standard deviation boost. <br/> Default: **0**. <br/>  _e_ in the XRANK formula. <br/> |
| _avgb_ <br/> | _\<float_value\>_ <br/> |The  _avgb_ parameter refers to average boost. This factor is multiplied with the average rank value of the results set. <br/> Default: **0**. <br/>  _d_ in the XRANK formula. <br/> |
| _rb_ <br/> | _\<float_value\>_ <br/> |The  _rb_ parameter refers to range boost. This factor is multiplied with the range of rank values in the results set. <br/> Default: **0**. <br/>  _b_ in the XRANK formula. <br/> |
| _pb_ <br/> | _\<float_value\>_ <br/> |The  _pb_ parameter refers to percentage boost. This factor is multiplied with the item's own rank compared to the minimum value in the corpus. <br/> Default: **0**. <br/>  _c_ in the XRANK formula. <br/> |
   

#### Examples

 **Example 1.** The following expression matches items for which the default full-text index contains either "cat" or "dog". The expression increases dynamic rank of those items with a constant boost of 100 for items that also contain "thoroughbred".
  
    
    
 `xrank(or(cat, dog), thoroughbred, cb=100)`
  
    
    
 **Example 2.** The following expression matches items for which the default full-text index contains either "cat" or "dog". The expression increases dynamic rank of those items with a normalized boost of 1.5 for items that also contain "thoroughbred".
  
    
    
 `xrank(or(cat, dog), thoroughbred, nb=1.5)`
  
    
    
 **Example 3.** The following expression matches items for which the default full-text index contains either "cat" or "dog". The expression increases dynamic rank of those items with a constant boost of 100 and a normalized boost of 1.5, for items that also contain "thoroughbred".
  
    
    
 `xrank(or(cat, dog), thoroughbred, cb=100, nb=1.5)`
  
    
    
 **Example 4.** The following expression matches all items containing the term "animals", and boosts dynamic rank as follows:
  
    
    

- Dynamic rank of items that contain the term "dogs" is boosted by 100 points.
    
  
- Dynamic rank of items that contain the term "cats" is boosted by 200 points.
    
  
- Dynamic rank of items that contain both the terms "dogs" and "cats" is boosted by 300 points.
    
  
 `xrank(xrank(animals, dogs, cb=100), cats, cb=200)`
  
    
    

## See also
<a name="SP15FQL_addlresources"> </a>


-  [Building search queries in SharePoint](building-search-queries-in-sharepoint.md)
    
  
