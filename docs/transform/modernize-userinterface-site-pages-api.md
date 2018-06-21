# Page Transformation Functions and Selectors

## Summary

The default page transformation configuration (webpartmapping.xml) uses built-in functions and selectors to drive the mapping from classic web parts to modern 1st party and 3rd party web parts. This page lists all the available functions.

> [!NOTE]
> This page is auto-generated, if you see issues please create a PR against the respective Transformation framework code base.

## Functions

### HtmlEncode

**Description:** Returns the html encoded value of this string.

**Example:** `{EncodedText} = HtmlEncode({Text})`

#### Input parameters

Name|Description
:-----|:----------
{Text}|Text to html encode
#### Output parameters

Name|Description
:-----|:----------
{EncodedText}|Html encoded text
### HtmlEncodeForJson

**Description:** Returns the json html encoded value of this string.

**Example:** `{JsonEncodedText} = HtmlEncodeForJson({Text})`

#### Input parameters

Name|Description
:-----|:----------
{Text}|Text to html encode for inclusion in json
#### Output parameters

Name|Description
:-----|:----------
{JsonEncodedText}|Html encoded text for inclusion in json file
### ReturnTrue

**Description:** Simply returns the string true.

**Example:** `{UsePlaceHolders} = ReturnTrue()`

#### Output parameters

Name|Description
:-----|:----------
{UsePlaceHolders}|Value true
### ReturnFalse

**Description:** Simply returns the string false.

**Example:** `{UsePlaceHolders} = ReturnFalse()`

#### Output parameters

Name|Description
:-----|:----------
{UsePlaceHolders}|Value false
### ReturnServerRelativePath

**Description:** Transforms the incoming path into a server relative path.

**Example:** `{ServerRelativePath} = ReturnServerRelativePath({Path})`

#### Input parameters

Name|Description
:-----|:----------
{Path}|Path to transform
#### Output parameters

Name|Description
:-----|:----------
{ServerRelativePath}|Server relative path
### ReturnFileName

**Description:** Returns the filename of the given path.

**Example:** `{FileName} = ReturnFileName({Path})`

#### Input parameters

Name|Description
:-----|:----------
{Path}|Path to analyze
#### Output parameters

Name|Description
:-----|:----------
{FileName}|File name with extension from the given path
### Concatenate

**Description:** Concatenates 2 strings.

**Example:** `{CompleteString} = Concatenate({String1},{String2})`

#### Input parameters

Name|Description
:-----|:----------
{String1}|First string
{String2}|Second string
#### Output parameters

Name|Description
:-----|:----------
{CompleteString}|Concatenation of the passed strings
### TextCleanup

**Description:** Rewrites wiki page html to be compliant with the html supported by the client side text part.

**Example:** `{CleanedText} = TextCleanup({Text},{UsePlaceHolders})`

#### Input parameters

Name|Description
:-----|:----------
{Text}|Original wiki html content
{UsePlaceHolders}|Parameter indicating if placeholders must be included for unsupported img/iframe elements inside wiki html
#### Output parameters

Name|Description
:-----|:----------
{CleanedText}|Html compliant with client side text part
### TextCleanUpSummaryLinks

**Description:** Rewrites summarylinks web part html to be compliant with the html supported by the client side text part.

**Example:** `{CleanedText} = TextCleanUpSummaryLinks({Text})`

#### Input parameters

Name|Description
:-----|:----------
{Text}|Original wiki html content
#### Output parameters

Name|Description
:-----|:----------
{CleanedText}|Html compliant with client side text part
### ListAddServerRelativeUrl

**Description:** Returns the server relative url of a list.

**Example:** `{ListServerRelativeUrl} = ListAddServerRelativeUrl({ListId})`

#### Input parameters

Name|Description
:-----|:----------
{ListId}|Guid of the list to use
#### Output parameters

Name|Description
:-----|:----------
{ListServerRelativeUrl}|Server relative url of the list
### ListAddWebRelativeUrl

**Description:** Returns the web relative url of a list.

**Example:** `{ListWebRelativeUrl} = ListAddWebRelativeUrl({ListId})`

#### Input parameters

Name|Description
:-----|:----------
{ListId}|Guid of the list to use
#### Output parameters

Name|Description
:-----|:----------
{ListWebRelativeUrl}|Web relative url of the list
### ListDetectUsedView

**Description:** Detects the list view id that was used by the webpart by mapping the web part xmldefinition to the list views. If no view found the list default view id is returned.

**Example:** `{ListViewId} = ListDetectUsedView({ListId},{XmlDefinition})`

#### Input parameters

Name|Description
:-----|:----------
{ListId}|Guid of the list to analyze
{XmlDefinition}|XmlDefinition attribute of the XSLTListViewWebPart
#### Output parameters

Name|Description
:-----|:----------
{ListViewId}|Id of the view to be used
### ImageLookup

**Description:** Does lookup a file based on the given server relative path and return needed properties of the file. Returns null if file was not found.

**Example:** `ImageLookup({ServerRelativeFileName})`

#### Input parameters

Name|Description
:-----|:----------
{ServerRelativeFileName}|Server relative file name of the image
#### Output parameters

Name|Description
:-----|:----------
{ImageListId}|Id of the list holding the file
{ImageUniqueId}|UniqueId of the file
### ExtractWebpartProperties

**Description:** Extracts the client side web part properties so they can be reused.

**Example:** `{JsonProperties} = ExtractWebpartProperties({ClientSideWebPartData})`

#### Input parameters

Name|Description
:-----|:----------
{ClientSideWebPartData}|Web part data defining the client side web part configuration
#### Output parameters

Name|Description
:-----|:----------
{JsonProperties}|Json properties to configure the client side web part
### DocumentEmbedLookup

**Description:** Does lookup a file based on the given server relative path and return needed properties of the file. Returns null if file was not found.

**Example:** `DocumentEmbedLookup({ServerRelativeFileName})`

#### Input parameters

Name|Description
:-----|:----------
{ServerRelativeFileName}|Server relative file name
#### Output parameters

Name|Description
:-----|:----------
{DocumentListId}|Id of the list holding the file
{DocumentUniqueId}|UniqueId of the file
{DocumentAuthor}|User principal name of the document author
{DocumentAuthorName}|Name of the file author
### ContentByQueryToHighlightedContentProperties

**Description:** Maps content by query web part data into a properties collection for the contentrollup (= Highlighted Content) web part

**Example:** `{JsonProperties} = ContentByQueryToHighlightedContentProperties({WebUrl},{ListGuid},{ListName},{ServerTemplate},{ContentTypeBeginsWithId},{FilterField1},{Filter1ChainingOperator},{FilterDisplayValue1},{FilterOperator1},{FilterField2},{Filter2ChainingOperator},{FilterDisplayValue2},{FilterOperator2},{FilterField3},{FilterDisplayValue3},{FilterOperator3},{SortBy},{SortByDirection},{GroupBy},{GroupByDirection},{ItemLimit},{DisplayColumns},{DataMappings})`

#### Input parameters

Name|Description
:-----|:----------
{WebUrl}|
{ListGuid}|
{ListName}|
{ServerTemplate}|
{ContentTypeBeginsWithId}|
{FilterField1}|
{Filter1ChainingOperator}|
{FilterField1Value}|
{FilterOperator1}|
{FilterField2}|
{Filter2ChainingOperator}|
{FilterField2Value}|
{FilterOperator2}|
{FilterField3}|
{FilterField3Value}|
{FilterOperator3}|
{SortBy}|
{SortByDirection}|
{GroupBy}|
{GroupByDirection}|
{ItemLimit}|
{DisplayColumns}|
{DataMappings}|
#### Output parameters

Name|Description
:-----|:----------
{JsonProperties}|Properties collection for the contentrollup (= Highlighted Content) web part
## Selectors
### TextSelector

**Description:** Allows for option to include a spacer for empty text wiki text parts.

**Example:** `TextSelector({CleanedText})`

#### Input parameters

Name|Description
:-----|:----------
{CleanedText}|Client side text part compliant html (cleaned via TextCleanup function)
#### Output values

Name|Description
:-----|:----------
Text|Will be output if the provided wiki text was not considered empty
Spacer|Will be output if the provided wiki text was considered empty
### ListSelectorListLibrary

**Description:** Analyzes a list and returns the list base type.

**Example:** `ListSelectorListLibrary({ListId})`

#### Input parameters

Name|Description
:-----|:----------
{ListId}|Guid of the list to use
#### Output values

Name|Description
:-----|:----------
Library|The list is a document library
List|The list is a document list
Issue|The list is an issue list
DiscussionBoard|The list is a discussion board
Survey|The list is a survey
Undefined|The list base type is undefined
### ContentEmbedSelectorSourceType

**Description:** Analyzes sourcetype and return recommended mapping.

**Example:** `ContentEmbedSelectorSourceType({SourceType})`

#### Input parameters

Name|Description
:-----|:----------
{SourceType}|Sourcetype of the viewed page in pageviewerwebpart
#### Output values

Name|Description
:-----|:----------
WebPage|The embedded content is a page
ServerFolderOrFile|The embedded content points to a server folder or file
### ContentEmbedSelectorContentLink

**Description:** If ContentLink is set (content editor) then return Link, otherwise return Content.

**Example:** `ContentEmbedSelectorContentLink({ContentLink})`

#### Input parameters

Name|Description
:-----|:----------
{ContentLink}|Link value if set
#### Output values

Name|Description
:-----|:----------
Link|If the link was not empty
Content|If no link was specified
