# CultureInfo class





This class is primarily used with the PageContext class. It provides culture info 
for the current user of the application.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`currentCultureName`     | `public` | `string` | This string determines the language default format for dates,times,numbers,currency values,  the sorting order of text, casing conventions, and string comparisons. This property may have  an empty string, but will never be undefined.  Example: If the currentCultureName is "en-au" then the application could use this information  to display the date as 1/8 instead of 8/1. |
|`currentUICultureName`     | `public` | `string` | This string determines the default user interface language. This used for localization and  translation of text. This property may have an empty string, but will never be undefined.  Example: If the currentUICultureName is "es-mx", then the application could use this  information to translate the word "hello" to "hola". |






