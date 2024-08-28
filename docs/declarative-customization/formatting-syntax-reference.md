---
title: Formatting syntax reference
description: Formatting syntax reference
ms.date: 08/28/2024
ms.localizationpriority: high
---

# Formatting syntax reference

## elmType

Specifies the type of element to create. Valid elements include:

- `div`
- `span`
- `a`
- [`img`](#img-src-security)
- `svg`
- `path`
- `button`
- `p`
- [`filepreview`](#filepreview)

Any other value will result in an error.

### filepreview

Use the special `elmType` `filepreview` with the `src` attribute set to [`@thumbnail.<Size>`](#thumbnails) to view thumbnails for files in your document library.

If the thumbnail loads successfully, a small [brand type icon](https://developer.microsoft.com/fluentui#/styles/web/office-brand-icons) is visible on the bottom left. If the thumbnail fails to load (or if the file type doesn't support thumbnails), a [file type icon](https://developer.microsoft.com/fluentui#/styles/web/file-type-icons) is shown instead.

```json
"elmType": "filepreview",
"attributes": {
  "src": "@thumbnail.medium"
}
```

### img src security

Images from the following domains are allowed:

- tenant domain, configured multi-geo domains and vanity domains (`company.sharepoint.com`)
- `cdn.office.net`, `akamaihd.net`, `static2.sharepointonline.com` CDNs

Most other external image sources are blocked by default in custom formatters. To include external images and allow specific domains or CDNs, the domain needs to be added to a site-level setting. For more information see: [Allow or restrict the ability to embed content on SharePoint pages](https://support.microsoft.com/office/allow-or-restrict-the-ability-to-embed-content-on-sharepoint-pages-e7baf83f-09d0-4bd1-9058-4aa483ee137b)

## txtContent

An optional property that specifies the text content of the element specified by `elmType`. The value of this property can either be a string (including special strings) or an Expression object.

## style

An optional property that specifies style attributes to apply to the element specified by `elmType`. This is an object with name-value pairs that correspond to CSS names and values. The values of each property in the style object can either be a string (including special strings) or an Expression object. The following style attributes are allowed.

```javascript
'background-color'
'fill'
'background-image'
'border'
'border-bottom'
'border-bottom-color'
'border-bottom-style'
'border-bottom-width'
'border-color'
'border-left'
'border-left-color'
'border-left-style'
'border-left-width'
'border-right'
'border-right-color'
'border-right-style'
'border-right-width'
'border-style'
'border-top'
'border-top-color'
'border-top-style'
'border-top-width'
'border-width'
'outline'
'outline-color'
'outline-style'
'outline-width'
'border-bottom-left-radius'
'border-bottom-right-radius'
'border-radius'
'border-top-left-radius'
'border-top-right-radius'
'box-decoration-break'
'box-shadow'
'box-sizing'

'overflow-x'
'overflow-y'
'overflow-style'
'rotation'
'rotation-point'

'opacity'
'cursor'

'height'
'max-height'
'max-width'
'min-height'
'min-width'
'width'

'flex-grow'
'flex-shrink'
'flex-flow'
'flex-direction'
'flex-wrap'
'flex'
'justify-content'
'align-items'

'box-align'
'box-direction'
'box-flex'
'box-flex-group'
'box-lines'
'box-ordinal-group'
'box-orient'
'box-pack'

'font'
'font-family'
'font-size'
'font-style'
'font-variant'
'font-weight'
'font-size-adjust'
'font-stretch'

'grid-columns'
'grid-rows'

'margin'
'margin-bottom'
'margin-left'
'margin-right'
'margin-top'

'column-count'
'column-fill'
'column-gap'
'column-rule'
'column-rule-color'
'column-rule-style'
'column-rule-width'
'column-span'
'column-width'
'columns'

'padding'
'padding-bottom'
'padding-left'
'padding-right'
'padding-top'

'bottom'
'clear'
'clip'
'display'
'float'
'left'
'overflow'
'position'
'right'
'top'
'visibility'
'z-index'

'border-collapse'
'border-spacing'
'caption-side'
'empty-cells'
'table-layout'

'color'
'direction'
'letter-spacing'
'line-height'
'text-align'
'text-decoration'
'text-indent'
'text-transform'
'unicode-bidi'
'vertical-align'
'white-space'
'word-spacing'
'hanging-punctuation'
'punctuation-trim'
'text-align-last'
'text-justify'
'text-outline'
'text-overflow'
'text-shadow'
'text-wrap'
'word-break'
'word-wrap'

'stroke'
'fill-opacity'

'--inline-editor-border-width'
'--inline-editor-border-style'
'--inline-editor-border-radius'
'--inline-editor-border-color'

'-webkit-line-clamp'

'object-fit'
'transform' // Only translate(arg) and translate(arg, arg) are currently supported
```

The following example shows the value of a style object. In this example, two style properties (`padding` and `background-color`) will be applied. The `padding` value is a hard-coded string value. The `background-color` value is an Expression that is evaluated to either red (`#ff0000`) or green (`#00ff00`) depending on whether the value of the current field (specified by `@currentField`) is less than 40. For more information, see the [Expression object section](#expressions).

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "style": {
    "padding": "4px",
    "background-color": {
      "operator": "?",
      "operands": [
        {
          "operator": "<",
          "operands": [
            "@currentField",
            40
          ]
        },
        "#ff0000",
        "#00ff00"
      ]
    }
  }
}
```

Here's the same sample from above, using the Excel-style expression syntax:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "style": {
  "padding": "4px",
  "background-color": "=if(@currentField < 40, '#ff0000', '#00ff00')"
  }
}
```

## attributes

The `attributes` optional property specifies more attributes to add to the element specified by `elmType`. This is an object with name-value pairs. Attribute names must be one of the following:

- href
- rel
- src
- class
- target
- title
- role
- iconName
- d
- aria
- data-interception
- viewBox
- preserveAspectRatio
- draggable

Any other attribute name will result in an error. Attribute values can either be Expression objects or strings. The following example adds two attributes (`target` and `href`) to the element specified by `elmType`. The `target` attribute is hard-coded to a string. The `href` attribute is an expression that will be evaluated at runtime to `http://finance.yahoo.com/quote/` + the value of the current field (`@currentField`).

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "target": "_blank",
  "href": "='http://finance.yahoo.com/quote/' + @currentField"
}
```

## children

The `children` optional property specifies child elements of the element specified by `elmType`. The value is specified as an array of `elm` objects. There can be an arbitrary level of nesting. If an element has the `txtContent` property, the child properties are ignored.

## debugMode

The `debugMode` optional property is meant for debugging. It outputs error messages and logs warnings to the console.

## forEach

The `forEach` optional property allows an element to duplicate itself for each member of a specific multi-value field or an array. The value of `"forEach"` property should be in the format of either `"iteratorName in @currentField"` or `"iteratorName in [$FieldName]"` or `"iteratorName in Expression-Returning-An-Array"`.

`iteratorName` represents the name of the iterator variable that is used to represent the current member of the multi-value field. The name of the iterator can be any combination of alphanumeric characters and an underscore (`_`) that doesn't start with a digit.

The field used in the loop must be in a supported field type with multi-value options enabled: Person, Lookup, and Choice. An expression returning an array can also be used.

In the element with `forEach` or its children elements, the iterator variable can be referred to as if it's a new field. The index of the iterator can be accessed with `loopIndex` operator.

`forEach` can't be applied to the root element, and will render no element if there's no value in the field.

See [Formatting multi-value fields](column-formatting.md#formatting-multi-value-fields) for examples.

## customRowAction

`button` elements can be used to launch a specific action on the parent item. Every `button` element has a required property, `customRowAction`, that specifies an `action` that's taken when the button is selected. This action must be one of the following values:

- **defaultClick**: buttons with this action will do the same thing as clicking the list item in an uncustomized view. The following example demonstrates a button that, when selected, simulates a selection on the item, which results in opening the list item. Adding this example button to a document library simulates a selection on the file or folder, which results in the file or folder being opened.

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
      "elmType": "button",
      "txtContent": "Open this item",
      "customRowAction": {
        "action": "defaultClick"
      }
    }
    ```

- **share**:  Selecting the button will open the sharing dialog. The following is an example of this type of button:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
      "elmType": "button",
      "txtContent": "Share this item",
      "customRowAction": {
        "action": "share"
      }
    }
    ```

- **delete**: Selecting the button will open the delete confirmation dialog.
- **editProps**:  Selecting the button will open the item properties page in edit mode.
- **openContextMenu**:  Selecting the button will open the item's default context menu.
- **setValue**:  Selecting the element will update the item with the field values provided.

    ```json
    {
      "elmType": "div",
      "txtContent": "[$FieldName]",
      "customRowAction":{
        "action": "setValue",
        "actionInput": {
          "FieldInternalName_1": "FieldValue_1",
          "FieldInternalName_2": "FieldValue_2",
        }
      }
    }
    ```

- **executeFlow**: Selecting the button will launch the specified Flow, specified by ID inside the `actionParams` attribute. For an example of this, see [Create a button to launch a Flow](./formatting-advanced.md#create-a-button-to-launch-a-flow). The following example demonstrates this type of button:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/sp/column-formatting.schema.json",
      "elmType": "button",
      "txtContent": "It's Flow Time!",
      "customRowAction": {
        "action": "executeFlow",
        "actionParams": "{\"id\":\"f7ecec0b-15c5-419f-8211-302a5d4e94f1\", \"headerText\":\"It's Flow Time!\",\"runFlowButtonText\":\"Do it\"}"
      }
    }
    ```

    The `actionParams` attribute can have the following options when using the `executeFlow` action:

  - **id**: ID of the Flow to launch _(required)_
  - **headerText**: Sets the text at the top of the flow panel _(optional)_
  - **runFlowButtonText**: Sets the text of the primary button in the flow panel _(optional)_

- **embed**: Clicking on the button will open a callout with content embedded in it. The content will be determined by the URL provided in the `src` attribute in `actionInput`. You can also control the `height` and `width` of the callout using the `actionInput`.

    > [!NOTE]
    > 
    > - The `src` needs to be just the `url` part of an embeddable code generated by an app (usually found in the `src` attribute of the `iframe` element).
    > - This action is only available in the newer version of the Microsoft Lists App.

    For more information about allowing or restricting domains, see [Allow or restrict the ability to embed content on SharePoint Lists using custom formatters](https://go.microsoft.com/fwlink/p/?linkid=2258033).


    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
      "elmType": "button",
      "customRowAction": {
        "action": "embed",
        "actionInput": {
          "src": "https://www.relecloud.com/embed/ll00hWQMJxQ",
          "height": "350",
          "width": "700"
        }
      },
      "txtContent": "Click here to open recipe video 👩‍🍳"
    }
    ```

  The `actionInput` attribute can have the following options when using the `embed` action:

  - **src**: The URL of the content you want to embed. _(required)_
  - **height**: The height of the callout within which the embedded content will render. The default value is 300. _(optional)_
  - **width**: The width of the callout within which the embedded content will render. The default value is 300. _(optional)_

## customCardProps

Add a custom card to the element, that shows up on hover or `click` event. The following customizations are available:

- `"formatter"`: JSON object that defines formatting for custom cards.
- `"openOnEvent"`: Event on which the customCard should open.
  - Valid values: `click`, `hover`
- `"directionalHint"`: Specify the direction relative to the target in which the custom card will be positioned. This is the preferred location but it isn't guaranteed depending on space.
  - Valid values: `bottomAutoEdge`, `bottomCenter`, `bottomLeftEdge`, `bottomRightEdge`, `leftBottomEdge`, `leftCenter`, `leftTopEdge`, `rightBottomEdge`, `rightCenter`, `rightTopEdge`, `topAutoEdge`, `topCenter`, `topLeftEdge`, `topRightEdge`
- `"isBeakVisible"`: Specify if the beak is to be shown or not.
- `"beakStyle"`: Specifies the style object for the custom card's beak.

## defaultHoverField

Adds the profile card for the people fields or file hovercard for files in the document library.

- `"defaultHoverField": "[$Editor]"` adds a profile card for the editor field
- `"defaultHoverField": "[$FileLeafRef]"` adds a file hover card in documentLibrary

## columnFormatterReference

This will be replaced with the referenced column's formatter JSON. Multi-level reference isn't supported.

References for multi-choice column formatter templates and column formatters not based on templates are not supported.

```json
{
  "columnFormatterReference": "[$FieldName]"
}
```

## inlineEditField

Adds the field editor for the referenced column.

```json
{
  "elmType": "div",
  "inlineEditField": "[$FieldName]",
  "txtContent": "[$FieldName]"
}
```

## filePreviewProps

The `filePreviewProps` is an optional property that allows overriding the default styles of file type icon and brand type icon in `filepreview`.elmType.

The `fileTypeIconClass` and `brandTypeIconClass` can be used to provide CSS class names to the file type icon and the brand type icon elements respectively.

The `fileTypeIconStyle` and `brandTypeIconStyle` can be used to provide [styles](#style) to the file type icon and the brand type icon respectively. These styles will take precedence over the same styles coming from the CSS classes provided by the above two properties.

```json
"elmType": "filepreview",
"attributes": {
  "src": "@thumbnail.medium",
 },
"filePreviewProps": {
  "fileTypeIconClass": "sp-css-borderColor-neutralLight",
  "fileTypeIconStyle": {
    "width": "100px"
  },
  "brandTypeIconClass": "sp-css-borderColor-neutralLight",
  "brandTypeIconStyle": {
    "width": "68px"
  }
}
```

## Expressions

Values for `txtContent`, style properties, and attribute properties can be expressed as expressions so that they're evaluated at runtime based on the context of the current field (or row). Expression objects can be nested to contain other Expression objects.

Expressions can be written using Excel-style expressions in SharePoint Online and SharePoint Server Subscription Edition starting with the 22H2 feature update, or by using Abstract Syntax Tree expressions in SharePoint Online, SharePoint Server Subscription Edition, and SharePoint Server 2019.

All fields in `ViewFields` can be referred to in expressions, even if it's marked `Explicit`.

### Excel-style expressions

All Excel-style expressions begin with an equal (`=`) sign. This style of expression is only available in SharePoint Online and SharePoint Server Subscription Edition starting with the 22H2 feature update. This style of expression isn't available in SharePoint Server 2019 or SharePoint Server Subscription Edition prior to the 22H2 feature update.

This simple conditional expression evaluates to `none` if `@me` isn't equal to `[$Author.email]`, and evaluates to `''` otherwise:

```json
=if(@me != [$Author.email], 'none', '')
```

More complex if/else statements can be written like the following:

```json
=if([$Sentiment] <= 0.3, 'sp-field-severity--blocked', if([$Sentiment] < 0.9,'sp-field-severity--warning','sp-field-severity--good'))
```

Non-conditional operators that take one or two operands can be written like the following:

```json
=[$foo] * -7
```

```json
=sin(@currentField)
```

```json
=toString(60 + (sin(6.2831853 * @currentField) * 60))
```

### Abstract Syntax Tree expressions

The following example contains an Expression object that performs the expression:

`(@currentField > 40) ? '100%' : (((@currentField * 2.5).toString() + '%')`

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "operator": "?",
  "operands": [
    {
      "operator": ">",
      "operands": [
        "@currentField",
        "40"
      ]
    },
    "100%",
    {
      "operator": "+",
      "operands": [
        {
          "operator": "toString()",
          "operands": [
            {
              "operator": "*",
              "operands": [
                "@currentField",
                2.5
              ]
            }
          ]
        },
        "%"
      ]
    }
  ]
}
```

## Operators

Operators specify the type of operation to perform. Valid operator values include:

- `+`
- `-`
- `/`
- `*`
- `<`
- `>`
- `%`
- `==`
- `!=`
- `<=`
- `>=`
- `||`
- `&&`
- `toString()`
- `Number()`
- `Date()`
- `cos`
- `sin`
- `?`
- `:`
- `toLocaleString()`
- `toLocaleDateString()`
- `toLocaleTimeString()`
- `indexOf`
- `toLowerCase`
- `join`
- `length`
- `abs`
- `loopIndex`
- `floor`
- `ceiling`
- `pow`
- `substring`
- `getDate`
- `getMonth`
- `getYear`
- `toUpperCase`
- `lastIndexOf`
- `startsWith`
- `endsWith`
- `replace`
- `replaceAll`
- `padStart`
- `padEnd`
- `getThumbnailImage`
- `getUserImage`
- `addDays`
- `addMinutes`
- `appendTo`
- `removeFrom`
- `split`

**Binary arithmetic operators** - The standard arithmetic binary operators that expect two operands include are:

- `+`
- `-`
- `/`
- `*`
- `<`
- `>`
- `%`
- `==`
- `!=`
- `<=`
- `>=`

**Unary operators** - The standard unary operators that expect only one operand are:

- `toString()`: returns a string representing the object
  - `"txtContent": "=toString(45)"` results in _"45"_
- `Number()`: returns the numeric value, if the operand isn't a number, NaN is returned
  - `"txtContent": "=Number('365')"` results in _365_
  - `"txtContent": "=Number('Wowee')"` results in _NaN_
  - `"txtContent": "=Number(Date('12/26/1981'))"` results in _378190800000_
- `Date()`: returns a datetime object from the parameter (converts strings or numbers to dates, sensitive to locale)
  - `"txtContent": "=Date('12/26/1981')"` results in _12/26/1981, 12:00:00 AM_
- `cos`: returns the cosine of the specified angle that should be specified in radians
  - `"txtContent": "=cos(5)"` results in _0.28366218546322625_
- `sin`: returns the sine of a number
  - `"txtContent": "=sin(90)"` results in _0.8939966636005579_
- `toDateString()`: returns a date in a short-friendly format
  - `"txtContent": "=toDateString(@now)"` result doesn't vary based on the user's locale and it will look like _"Wed Aug 03 2022"_
- `toLocaleString()`: returns a language-sensitive representation of a date
  - `"txtContent":"=toLocaleString(@now)"` results vary based on the user's locale, but en-us looks like _"2/5/2019, 1:22:24 PM"_
- `toLocaleDateString()`: returns a language-sensitive representation of just the date portion of a date
  - `"txtContent":"=toLocaleDateString(@now)"` results vary based on the user's locale, but en-us looks like _"2/5/2019"_
- `toLocaleTimeString()`: returns a language-sensitive representation of just the time portion of a date
  - `"txtContent":"=toLocaleTimeString(@now)"` results vary based on the user's locale, but en-us looks like _"1:22:24 PM"_
- `toLowerCase`: returns the value converted to lower case (only works on strings) - _Only available in SharePoint Online_
  - `"txtContent":"=toLowerCase('DogFood')"` results in _"dogfood"_
- `abs`: returns the absolute value for a given number - _Only available in SharePoint Online_
  - `"txtContent":"=abs(-45)"` results in _45_
- `length`: returns the number of items in an array (multi-select person or choice field), for all other value types it returns 1 when true and 0 when false. It does NOT provide the length of a string value (*see the `indexOf` workaround explained later on for such operation*). - _Only available in SharePoint Online_
  - `"txtContent":"=length(@currentField)"` might result in _2_ if there are two selected values
  - `"txtContent":"=length('Some Text')"` results in _1_
  - `"txtContent":"=length('')"` results in _0_
  - `"txtContent":"=length(45)"` results in _1_
  - `"txtContent":"=length(0)"` results in _0_
- `floor`: returns the largest integer less than or equal to a given number. - _Only available in SharePoint Online_
  - `"txtContent":"=floor(45.5)"` results in _45_
- `ceiling`: rounds the given number up to the next largest whole number or integer. - _Only available in SharePoint Online_
  - `"txtContent":"=ceiling(45.5)"` results in _46_
- `getDate`: returns the day of the month of the given date. - _Only available in SharePoint Online_
  - `"txtContent":"=getDate(Date('12/26/1981'))"` results in _26_
- `getMonth`:  returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year). - _Only available in SharePoint Online_
  - `"txtContent":"=getMonth(Date('12/26/1981'))"` results in _11_
- `getYear`: returns the year of the given date. - _Only available in SharePoint Online_
  - `"txtContent":"=getYear(Date('12/26/1981'))"` results in _1981_
- `toUpperCase`: returns the value converted to upper case (only works on strings) - _Only available in SharePoint Online_
  - `"txtContent":"=toUpperCase('DogFood')"` results in _"DOGFOOD"_

**Binary operators** - The following are operators that expect two operands:

- `indexOf`: takes two operands. The first is the text (or array) you would like to search within, the second is the text you would like to search for. Returns the index value of the first occurrence of the search term within the string (or array). Indexes start at 0. If the search term isn't found within the text (or array), -1 is returned. This operator is case-sensitive. - _Only available in SharePoint Online_
  - `"txtContent": "=indexOf('DogFood', 'Dog')"` results in _0_
  - `"txtContent": "=indexOf('DogFood', 'F')"` results in _3_
  - `"txtContent": "=indexOf('DogFood', 'Cat')"` results in _-1_
  - `"txtContent": "=indexOf('DogFood', 'f')"` results in _-1_
- `join`: takes two operands. The first is an array (multi-select person or choice field) and the second is the separating string. Returns a string concatenation of the array values separated by the separating string. - _Only available in SharePoint Online_
  - `"txtContent": "=join(@currentField, ', ')"` might result in _"Apple, Orange, Cherry"_ (depending on the selected values)
  - `"txtContent": "=join(@currentField.title, '|')"` might result in _"Megan Bowen|Alex Wilber"_ (depending on the selected persons)
- `pow`: returns the base to the exponent power. - _Only available in SharePoint Online_
  - `"txtContent":"=pow(2,3)"` results in _8_
- `lastIndexOf`: returns the position of the last occurrence of a specified value in a string (or array)
  - `"txtContent": "=lastIndexOf('DogFood DogFood', 'Dog')"` results in _8_
  - `"txtContent": "=lastIndexOf('DogFood DogFood', 'F')"` results in _11_
  - `"txtContent": "=lastIndexOf('DogFood DogFood', 'Cat')"` results in _-1_
  - `"txtContent": "=lastIndexOf('DogFood DogFood', 'f')"` results in _-1_
- `startsWith`: determines whether a string begins with the characters of a specified string
  - `"txtContent":"=startsWith('DogFood', 'Dog')"` results in _true_
  - `"txtContent":"=startsWith('DogFood', 'Food')"` results in _false_
- `endsWith`: determines whether a string ends with the characters of a specified string
  - `"txtContent":"=endsWith('DogFood', 'Dog')"` results in _false_
  - `"txtContent":"=endsWith('DogFood', 'Food')"` results in _true_
- `getUserImage`: returns a URL pointing to user's profile image for a given email and preferred size
  - `"src":"=getUserImage('kaylat@contoso.com', 'small')"` returns a URL pointing to user's profile picture in small resolution
  - `"src":"=getUserImage('kaylat@contoso.com', 's')"` returns a URL pointing to user's profile picture in small resolution
  - `"src":"=getUserImage('kaylat@contoso.com', 'medium')"` returns a URL pointing to user's profile picture in medium resolution
  - `"src":"=getUserImage('kaylat@contoso.com', 'm')"` returns a URL pointing to user's profile picture in medium resolution
  - `"src":"=getUserImage('kaylat@contoso.com', 'large')"` returns a URL pointing to user's profile picture in large resolution
  - `"src":"=getUserImage('kaylat@contoso.com', 'l')"` returns a URL pointing to user's profile picture in large resolution
- `appendTo`: returns an array with the given entry appended to the given array
  - `"txtContent": "=appendTo(@currentField, 'Choice 4')"` returns an array with 'Choice 4' added to the @currentField array
  - `"txtContent": "=appendTo(@currentField, 'kaylat@contoso.com')"` returns an array with 'kaylat@contoso.com' added to the @currentField array
- `removeFrom`: returns an array with the given entry removed from the given array, if present
  - `"txtContent": "=removeFrom(@currentField, 'Choice 4')"` returns an array with 'Choice 4' removed from the @currentField array
  - `"txtContent": "=removeFrom(@currentField, 'kaylat@contoso.com')"` returns an array with 'kaylat@contoso.com' removed from the @currentField array
- `split`: divides the given string into an ordered list of substrings by searching for the given pattern, and returns an array of these substrings
  - `"txtContent": "=split('Hello World', ' ')"` returns an array with two strings - 'Hello' and 'World'
- `addDays`: returns a datetime object with days added (or deducted) from the given datetime value
  - `"txtContent": "=addDays(Date('11/14/2021'), 3)"` returns a 11/17/2021, 12:00:00 AM
  - `"txtContent": "=addDays(Date('11/14/2021'), -1)"` returns a 11/13/2021, 12:00:00 AM
- `addMinutes`: returns a datetime object with minutes added (or deducted) from the given datetime value
  - `"txtContent": "=addMinutes(Date('11/14/2021'), 3)"` returns a 11/14/2021, 12:03:00 AM
  - `"txtContent": "=addMinutes(Date('11/14/2021'), -1)"` returns a 11/13/2021, 11:59:00 AM

**Ternary operators** - The following are operators that expect three operands:

- `substring`: returns the part of the string between the start and end indices. - _Only available in SharePoint Online_
  - `"txtContent":"=substring('DogFood', 3, 4)"` results in _F_
  - `"txtContent":"=substring('DogFood', 4, 3)"` results in _F_
  - `"txtContent":"=substring('DogFood', 3, 6)"` results in _Foo_
  - `"txtContent":"=substring('DogFood', 6, 3)"` results in _Foo_

  The substring() method returns the part of the string between the start and end indexes or to the end of the string.

- `replace`: searches a string (or array) for a specified value and returns a new string (or array) where the specified value is replaced. For strings, only the first instance of the value will be replaced.
  - `"txtContent":"=replace('Hello world', 'world', 'everyone')"` results in _Hello everyone_
  - `"txtContent":"=replace([$MultiChoiceField], 'Choice 1', 'Choice 2')"` returns an array replacing Choice 1 with Choice 2
  - `"txtContent":"=replace([$MultiUserField], @me, 'kaylat@contoso.com')"` returns an array replacing @me with 'kaylat@contoso.com'
- `replaceAll`: searches a string for a specified value and returns a new string (or array) where the specified value is replaced. For strings, all instances of the value will be replaced.
  - `"txtContent":"=replaceAll('H-e-l-l-o W-o-r-l-d', '-', '')"` results in _Hello World_
- `padStart`: pads the current string with another string until the resulting string reaches the given length. The padding is applied from the start of the current string.
  - `"txtContent":"=padStart('DogFood', 10, 'A')"` results in _AAADogFood_
  - `"txtContent":"=padStart('DogFood', 10, 'AB')"` results in _ABADogFood_
  - `"txtContent":"=padStart('DogFood', 5, 'A')"` results in _DogFood_
- `padEnd`: pads the current string with a given string until the resulting string reaches the given length. The padding is applied from the end of the current string.
  - `"txtContent":"=padEnd('DogFood', 10, 'A')"` results in _DogFoodAAA_
  - `"txtContent":"=padEnd('DogFood', 10, 'AB')"` results in _DogFoodABA_
  - `"txtContent":"=padEnd('DogFood', 5, 'A')"` results in _DogFood_
- `getThumbnailImage`: returns a URL pointing to an image for a given image field and preferred size.
  - `"src":"=getThumbnailImage([$ImageField], 400, 200)"` results in a URL pointing to an image for a given image field with 400 width and 200 height

**Conditional operator** - The conditional operator is:

- `?`: Conditional operations written in Abstract Tree Syntax use `?` as the operator. This is to achieve an expression equivalent to `a ? b : c`, where if the expression `a` evaluates to true, then the result is `b`, else the result is `c`. For Excel-style expressions, you write these with an `if` statement. Regardless, there are three operands. The first is the condition to evaluate. The second is the result when the condition is true. The third is the result when the condition is false.
  - `"txtContent":"=if(4 < 5, 'yes', 'no')"` results in _"yes"_
  - `"txtContent":"=if(4 > 5, 'yes', 'no')"` results in _"no"_

**Multi-value field-related operators** - The following operators are only used in a context with multi-value fields of type Person, Lookup, or Choice.

- `length`
- `join`
- `loopIndex`

`length`, when provided with a field name, returns the number of members in a multi-valued field. When a single-value field is provided, `length` will return 1 when there's a value in that field.

`join` concatenates values in a multi-value field with a specified separator. The first operand shall point to a value in a multi-value field, for example `"@currentField.lookupValue"`, `"[$AssignedTo.title]"`. The second operand shall be a string literal that is the separator that joins the values together.

`loopIndex`, when provided with the name of the iterator variable, returns the current index (starting from 0) of the iterator. The name of the iterator must be provided as a string literal. `loopIndex` would only work within the element with respective `forEach` enabled or its children elements.

For examples, see [Formatting multi-value fields](column-formatting.md#formatting-multi-value-fields).

**String-related operators** - Some of the previously detailed operators can be used when working with string values:

- `+`
- `indexOf` (*for string length workaround*)

`+` can be used when there's a need to concatenate strings, for instance:

```txt
"txtContent": "=[$column1] + ' ' + [$column2] + 'some other text'"
```

`indexOf` Since the operator `length` doesn't work for string value types (it will return 1 or 0), `indexOf` can serve us as a nice workaround to get the length of a string, for instance: `indexOf([$column1] + '^', '^')`. We'll use `'^'` or any other character to use to find out the end of the string.

## Operands

Specifies the parameters, or operands for an expression. This is an array of Expression objects or base values.

## Special string values

The values for `txtContent`, styles, and attributes can be either strings or Expression objects. A few special string patterns for retrieving values from the fields in the list and the user's context are supported.

### "@currentField"

Will evaluate the value of the current field.

Some field types are represented as objects. To output a value from an object, refer to a particular property inside that object. For example, if the current field is a person/group field, specify `@currentField.title` to retrieve the person's name, which is normally displayed in list views. The following are the field types that are represented as objects with a list of their properties.

> [!NOTE]
> The `@currentField.title` returns a person's name by default. However, if the person field's Show Field has been adjusted, it may change the value of the `title` property. For example, a person field with the Show Field configured as Department will have the person's department for the `title` property.

**People fields**

The people field object has the following properties (with example values):

```json
{
  "id": "122",
  "title": "Kalya Tucker",
  "email": "kaylat@contoso.com",
  "sip": "kaylat@contoso.com",
  "picture": "https://contoso.sharepoint.com/kaylat_contoso_com_MThumb.jpg?t=63576928822",
  "department":"Human Resources",
  "jobTitle":"HR Manager"
}
```

People field can have profile hover cards along with formatting:

```json
{
  "elmType": "div",
  "txtContent": "[$Editor.title]",
  "defaultHoverField": "[$Editor]"
}
```

**Date/Time fields**

The value of Date/Time fields can be retrieved a few different ways, depending on the date format you'd like to display. The following methods for converting date values to specific formats are supported:

- `toLocaleString()` - Displays a date type fully expanded with date and time.
- `toLocaleDateString()` - Displays a date type with just the date.
- `toLocaleTimeString()` - Displays a date type with just the time.

For example, the following JSON will display the current field (assuming it's a date field) as a date and time string.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "txtContent": {
    "operator": "toLocaleString()",
    "operands" : ["@currentField"]
  }
}
```

Here's the same sample from above, using the Excel-style expression syntax:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "txtContent": "=toLocaleString(@currentField)"
}
```

**Location fields**

The location field object has the following properties (with example values):

```json
{
  "Address": {
    "City": "Knoxville",
    "CountryOrRegion": "United States",
    "State": "TN",
    "Street": "963 Worlds Fair Park Dr"
  },
  "Coordinates": {
    "Latitude": "35.961673736572266",
    "Longitude": "-83.92420959472656"
  },
  "DisplayName": "World's Fair Park",
  "LocationUri": "https://www.bingapis.com/api/v6/localentities/8346bf26-6da4-104c-6ba5-2334b83f6ac8?setLang=en"
}
```

The following example shows how a location field might be used on a current field.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/column-formatting.schema.json",
  "elmType": "div",
  "style": {
    "display": "block"
  },
  "children": [
    {
      "elmType": "a",
      "txtContent": "@currentField.DisplayName",
      "attributes": {
        "href": "='https://www.bing.com/maps?cp=' + @currentField.Coordinates.Latitude + '~' + @currentField.Coordinates.Longitude + '&lvl=17&sV=2'",
        "target": "_blank",
        "title": "=@currentField.Coordinates.Latitude + ', ' + @currentField.Coordinates.Longitude"
      },
      "style": {
        "display": "block"
      }
    },
    {
      "elmType": "div",
      "txtContent": "@currentField.Address.Street"
    },
    {
      "elmType": "div",
      "txtContent": "=@currentField.Address.City + ', ' + @currentField.Address.State"
    },
    {
      "elmType": "div",
      "txtContent": "@currentField.Address.CountryOrRegion"
    }
  ]
}
```

**Lookup fields**

The lookup field object has the following properties (with example values):

```json
{
  "lookupId": "100",
  "lookupValue": "North America",
}
```

The following example shows how a lookup field might be used on a current field.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "a",
  "txtContent": "@currentField.lookupValue",
  "attributes": {
    "href": {
      "operator": "+",
      "operands": [
        "https://contoso.sharepoint.com/teams/Discovery/Lists/Regions/DispForm.aspx?ID=",
        "@currentField.lookupId"
      ]
    },
    "target": "_blank"
  }
}
```

**Hyperlink fields**

The hyperlink field object has the following property (with example value):

```json
{
  "desc": "SharePoint Patterns and Practices",
}
```

To reference the URL value, use `@currentField`.

The following example shows how a hyperlink field might be used on a current field.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "a",
  "txtContent": "@currentField.desc",
  "attributes": {
    "href": "@currentField",
    "target": "_blank"
  }
}
```

**Image fields**

The image field object has the following `fileName` property:

```json
{
  "fileName": "image.png",
}
```
> [!NOTE]
> As of July 2024, just the `fileName` property has a value.


The following example shows how an image field can be used on a current field.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "img",
  "attributes": {
    "src": "=getThumbnailImage(@currentField, 400, 300)",
    "alt": "@currentField.fileName"
  },
  "style": {
    "width": "100%",
    "max-width": "100%"
  }
}
```

**Approval Status fields**

The Approval Status field object has the following property (with example value):

```json
{
  "displayValue": "Approved",
  "numeric": 0
}
```

`displayValue` is a localized string of the approval status.

`@currentField` or `[$__ModerationStatus]` will also internally map to the following internal numeric value:

- 0: Approved
- 1: Denied
- 2: Pending
- 3: Draft
- 4: Scheduled

`[$_ModerationStatus]` field supports comparisons to both strings and the numeric value. The numeric comparisons work across locales and languages which will be the recommended way for this field.

The following expressions evaluate to the output on the right, for when the status is `Pending`:

```javascript
// reading field value
"[$_ModerationStatus]" => "Pending"

// obtaining the internal numeric value:
"=Number([$_ModerationStatus])" => 2
"=[$_ModerationStatus.numeric]" => 2

// addition results in string concatenation:
"='status:'+[$_ModerationStatus]" => 'status:Pending'

// numeric comparisons
"=([$_ModerationStatus] == 2)" => true
"=([$_ModerationStatus] != 1)" => true

// other comparators are rarely useful, for cases where you want might want to exclude Draft & Scheduled
"=([$_ModerationStatus] < 3)" => true

// localized string comparison, works only with one locale (en-us here)
"=if([$_ModerationStatus]=='Pending','This Works too!', 'Nope!')" => 'This Works too!'
```

The following example shows how an approval status field might be used on a current field:

```json
{
  "elmType": "div",
  "txtContent": "@currentField.displayValue",
  "style": {
    "color": "=if(@currentField == 2, 'red', '')"
  }
}
```

### "[$FieldName]"

The column is formatted within the context of the entire row. You can use this context to reference the values of other fields within the same row by specifying the **internal name** of the field surrounded by square brackets and preceded by a dollar sign: `[$InternalName]`. For example, to get the value of a field with an internal name of "MarchSales", use `[$MarchSales]`.

> [!NOTE]
> Reference to other fields will work only if they are included in the same view.

If the value of a field is an object, the object's properties can be accessed. For example, to access the "Title" property of a person field named "SalesLead", use "[$SalesLead.title]".

### "[!FieldName]"

In column and view formatting, you can refer to any field's metadata by specifying the **internal name** of the field surrounded by square brackets and preceded by an exclamation mark: `[!InternalName]`.

Currently field's display name is available in this metadata, and can be accessed using `DisplayName` property: `[!SalesLead.DisplayName]`.

### "@currentWeb"

This will evaluate the absolute URL for the site. This is equivalent to the `webAbsoluteUrl` value within the page context. This value is only available in SharePoint Online.

### "@me"

This will evaluate the email address of the currently logged-in user.

This field can be used to display the current user's email address, but more likely it will be used within conditions. The following is an example of setting the color for a person field to red when it's equal to the currently logged-in user and blue otherwise:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "txtContent": "@currentField.title",
  "style": {
    "color": {
      "operator": "?",
      "operands": [
        {
            "operator": "==",
            "operands": [
              "@me",
              "@currentField.email"
            ]
        },
          "red",
          "blue"
      ]
    }
  }
}
```

Here's the same sample from above, using the Excel-style expression syntax:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "txtContent": "@currentField.title",
  "style": {
    "color": "=if(@me == @currentField.email, 'red', 'blue')"
  }
}
```

### "@now"

This will evaluate the current date and time.

### "@rowIndex"

This will evaluate the rendered index of a row within a view. This value is based on render position and will remain consistent based on position even as views are sorted and filtered. Indexes start at 0. This value is only available in SharePoint Online.

Here's an example of using the value within a view format to apply alternating styles to rows:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/view-formatting.schema.json",
  "additionalRowClass": "=if(@rowIndex % 2 == 0,'ms-bgColor-themeLighter ms-bgColor-themeLight--hover','')"
}
```

### "@window.innerHeight"

This will be evaluated to a number equal to the height of the browser window (in pixels) when the list is rendered.

### "@window.innerWidth"

This will evaluate to a number equal to the width of the browser window (in pixels) when the list was rendered.

### Thumbnails

In a document library, there's a series of tokens that can be used to retrieve the URL to the thumbnail of a file, including:

- `@thumbnail.small`, `@thumbnail.medium`, and `@thumbnail.large` evaluate the thumbnail URL in three predefined sizes.
- `@thumbnail.<bounding size>` evaluates the URL to the largest thumbnail that isn't larger than the bounding size in both width and height. For example, `@thumbnail.150` evaluates to the URL to a thumbnail not larger than 150×150 pixels.
- `@thumbnail.<bounding width>x<bounding height>` evaluates the URL to the largest thumbnail that isn't larger than the bounding width and bounding height. For example, `@thumbnail.100x200` evaluates to the URL to a thumbnail not wider than 100 pixels and not higher than 200 pixels.

These tokens will yield no value on non-file items including folders.

> [!NOTE]
> The aspect ratio of the thumbnail generated is the same as how the file looks, changing the bounding sizes will not affect the aspect ratio of the thumbnail.

> [!TIP]
> Thumbnails are only available for a list of supported file formats. It means that sometimes the URL generated is not accessible due to lack of support on certain formats. However, if a valid thumbnail token is set as the _only_ `src` attribute of an `img` tag, we will take care of it and hide the image when it is not available.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "img",
  "attributes": {
    "src": "@thumbnail.200x150",
    "alt": "='Thumbnail of file ' + [$FileLeafRef]"
  },
  "style": {
    "width": "100%",
    "max-width": "100%"
  }
}
```

Default file hover card using FileLeafRef

```json
{
  "elmType": "img",
  "style": {
    "width": "100%",
    "height": "100%",
    "display": "=if([$File_x0020_Type] == '', 'none', '')"
  },
  "attributes": {
    "src": "@thumbnail.300x300"
  },
  "defaultHoverField": "[$FileLeafRef]"
}
```

### displayValue

The following column types can use `displayValue` property to get the default-rendered value, based on the column setting:

- Date/Time
- Number
- Yes/No
- Currency
- Approval Status

```json
{
  "elmType": "div",
  "txtContent": "@currentField.displayValue"
}
```

This also works with field name:

```json
{
  "elmType": "div",
  "txtContent": "[$FieldName.displayValue]"
}
```

### "@isSelected"

This will evaluate to `true` for the selected item(s) in a view and `false` otherwise.

### "@lcid"

This will evaluate to the LCID of the current culture. This can be used to format the date, time, and numbers.

### "@UIlcid"

This will evaluate to the LCID of the current UI culture. This can be used to show localized display strings.
