---
title: Page Transformation Functions and Selectors
description: Page Transformation Functions and Selectors
ms.date: 06/07/2022
ms.prod: sharepoint
ms.localizationpriority: medium
---

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
### ConcatenateWithSemiColonDelimiter

**Description:** Concatenates 2 strings with a semicolon in between.

**Example:** `{CompleteString} = ConcatenateWithSemiColonDelimiter({String1},{String2})`

#### Input parameters

Name|Description
:-----|:----------
{String1}|First string
{String2}|Second string
#### Output parameters

Name|Description
:-----|:----------
{CompleteString}|Concatenation of the passed strings
### ConcatenateWithPipeDelimiter

**Description:** Concatenates 2 strings with a pipe character in between.

**Example:** `{CompleteString} = ConcatenateWithSemiColonDelimiter({String1},{String2})`

#### Input parameters

Name|Description
:-----|:----------
{String1}|First string
{String2}|Second string
#### Output parameters

Name|Description
:-----|:----------
{CompleteString}|Concatenation of the passed strings
### StaticString

**Description:** Returns an the (static) string provided as input

**Example:** `StaticString('static string')`

#### Input parameters

Name|Description
:-----|:----------
{'static string'}|Static input string
#### Output parameters

Name|Description
:-----|:----------
{return value}|String provided as input
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
### ContainsScript

**Description:** Checks if the provided html contains JavaScript

**Example:** `{HasScript} = ContainsScript({Text})`

#### Input parameters

Name|Description
:-----|:----------
{Text}|Html content to check
#### Output parameters

Name|Description
:-----|:----------
{HasScript}|True is the html contains script, false otherwise
### ListCrossSiteCheck

**Description:** Returns the cross site collection save list id.

**Example:** `{ListId} = ListCrossSiteCheck({ListId})`

#### Input parameters

Name|Description
:-----|:----------
{ListId}|Guid of the list to use
#### Output parameters

Name|Description
:-----|:----------
{ListId}|Cross site collection safe list id
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
### ListHideToolBar

**Description:** Checks if an XSLTListView web part has a hidden toolbar.

**Example:** `{HideToolBar} = ListHideToolBar({XmlDefinition})`

#### Input parameters

Name|Description
:-----|:----------
{XmlDefinition}|XmlDefinition attribute of the XSLTListViewWebPart
#### Output parameters

Name|Description
:-----|:----------
{HideToolBar}|Boolean indicating if the toolbar should be hidden
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
### ReturnCrossSiteRelativePath

**Description:** Transforms the incoming path into a server relative path. If the page is located on another page the asset is transferred and url updated. Any failures keep to the original value.

**Example:** `{ServerRelativeFileName} = ReturnCrossSiteRelativePath({ImageLink})`

#### Input parameters

Name|Description
:-----|:----------
{ImageLink}|Original value for the image link
#### Output parameters

Name|Description
:-----|:----------
{ServerRelativeFileName}|New target location for the asset if transferred.
### ImageAnchorUrlRewrite

**Description:** Rewrite the image anchor tag url.

**Example:** `ImageAnchorUrlRewrite({Anchor},{ImageUrl},{ServerRelativeFileName})`

#### Input parameters

Name|Description
:-----|:----------
{Anchor}|Original anchor tag fetched from the source image
{ImageUrl}|Original image url
{ServerRelativeFileName}|New image url
#### Output parameters

Name|Description
:-----|:----------
{Anchor}|The url after url rewrite. If the anchor and original image url were the same then the anchor will be set to the new image url
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
### ContentEmbedCrossSiteCheck

**Description:** Throws an exception when link to .aspx file.

**Example:** `{Temp} = ContentEmbedCrossSiteCheck({ContentLink})`

#### Input parameters

Name|Description
:-----|:----------
{ContentLink}|Link value if set
#### Output parameters

Name|Description
:-----|:----------
{Temp}|Unused variable
### LoadContentFromFile

**Description:** Loads contents of a file as a string.

**Example:** `{FileContents} = LoadContentFromFile({ContentLink})`

#### Input parameters

Name|Description
:-----|:----------
{ContentLink}|Server relative url to the file to load
#### Output parameters

Name|Description
:-----|:----------
{FileContents}|Text content of the file. Return empty string if file was not found
### UserDocumentsToHighlightedContentProperties

**Description:** Maps the user documents web part data into a properties collection and supporting serverProcessedContent nodes for the content rollup (= Highlighted Content) web part

**Example:** `SiteDocumentsToHighlightedContentProperties()`

#### Output parameters

Name|Description
:-----|:----------
{JsonProperties}|Properties collection for the contentrollup (= Highlighted Content) web part
{SearchablePlainTexts}|SearchablePlainTexts nodes to be added in the serverProcessedContent node
{Links}|Links nodes to be added in the serverProcessedContent node
{ImageSources}|ImageSources nodes to be added in the serverProcessedContent node
### ContentBySearchToHighlightedContentProperties

**Description:** Maps content by search web part data into a properties collection and supporting serverProcessedContent nodes for the content rollup (= Highlighted Content) web part

**Example:** `ContentBySearchToHighlightedContentProperties({DataProviderJSON}, {SelectedPropertiesJson}, {ResultsPerPage}, {RenderTemplateId})`

#### Input parameters

Name|Description
:-----|:----------
{DataProviderJson}|
{SelectedPropertiesJson}|
{ResultsPerPage}|
{RenderTemplateId}|
#### Output parameters

Name|Description
:-----|:----------
{JsonProperties}|Properties collection for the contentrollup (= Highlighted Content) web part
{SearchablePlainTexts}|SearchablePlainTexts nodes to be added in the serverProcessedContent node
{Links}|Links nodes to be added in the serverProcessedContent node
{ImageSources}|ImageSources nodes to be added in the serverProcessedContent node
### ContentByQueryToHighlightedContentProperties

**Description:** Maps content by query web part data into a properties collection and supporting serverProcessedContent nodes for the content rollup (= Highlighted Content) web part

**Example:** `ContentByQueryToHighlightedContentProperties({WebUrl},{ListGuid},{ListName},{ServerTemplate},{ContentTypeBeginsWithId},{FilterField1},{Filter1ChainingOperator},{FilterDisplayValue1},{FilterOperator1},{FilterField2},{Filter2ChainingOperator},{FilterDisplayValue2},{FilterOperator2},{FilterField3},{FilterDisplayValue3},{FilterOperator3},{SortBy},{SortByDirection},{GroupBy},{GroupByDirection},{ItemLimit},{DisplayColumns},{DataMappings})`

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
{SearchablePlainTexts}|SearchablePlainTexts nodes to be added in the serverProcessedContent node
{Links}|Links nodes to be added in the serverProcessedContent node
{ImageSources}|ImageSources nodes to be added in the serverProcessedContent node
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
### SummaryLinksToQuickLinksProperties

**Description:** Maps summarylinks web part data into a properties collection and supporting serverProcessedContent nodes for the quicklinks web part

**Example:** `SummaryLinksToQuickLinksProperties({Text},{QuickLinksJsonProperties})`

#### Input parameters

Name|Description
:-----|:----------
{Text}|Original wiki html content
{QuickLinksJsonProperties}|QuickLinks JSON properties blob (optional)
#### Output parameters

Name|Description
:-----|:----------
{JsonProperties}|Properties collection for the quicklinks web part
{SearchablePlainTexts}|SearchablePlainTexts nodes to be added in the serverProcessedContent node
{Links}|Links nodes to be added in the serverProcessedContent node
{ImageSources}|ImageSources nodes to be added in the serverProcessedContent node
### LookupPerson

**Description:** Looks up a person from the UserInfo list and returns the needed details

**Example:** `LookupPerson({ContactLoginName})`

#### Input parameters

Name|Description| Membership
:-----|:----------|:----
{ContactLoginName}|User account to lookup (in i:0#.f|joe@contoso.onmicrosoft.com
#### Output parameters

Name|Description
:-----|:----------
{PersonName}|Name of the user
{PersonEmail}|User's email
{PersonUPN}|UPN of the user
{PersonRole}|Role of the user
{PersonDepartment}|User's department
{PersonPhone}|Phone number of the user
{PersonSip}|SIP address of the user
### EmptyString

**Description:** Returns an empty string

**Example:** `EmptyString()`

#### Output parameters

Name|Description
:-----|:----------
{return value}|Empty string
### StaticString

**Description:** Returns an the (static) string provided as input

**Example:** `StaticString('static string')`

#### Input parameters

Name|Description
:-----|:----------
{'static string'}|Static input string
#### Output parameters

Name|Description
:-----|:----------
{return value}|String provided as input
### Prefix

**Description:** Prefixes the input text with another text. The applyIfContentIsEmpty parameter controls if the prefix also needs to happen when the actual content is empty

**Example:** `Prefix('&lt;H1&gt;Prefix some extra text&lt;/H1&gt;', {PublishingPageContent}, 'false')`

#### Input parameters

Name|Description
:-----|:----------
{'prefix string'}|Static input string which will be used as prefix
{PublishingPageContent}|The actual publishing page HTML field content to prefix
{'static boolean value'}|Static bool ('true', 'false') to indicate if the prefixing still needs to happen when the {PublishingPageContent} field content is emty
#### Output parameters

Name|Description
:-----|:----------
{return value}|Value of {PublishingPageContent} prefixed with the provided prefix value
### Suffix

**Description:** Suffixes the input text with another text. The applyIfContentIsEmpty parameter controls if the suffix also needs to happen when the actual content is empty

**Example:** `Suffix('&lt;H1&gt;Suffix some extra text&lt;/H1&gt;', {PublishingPageContent}, 'false')`

#### Input parameters

Name|Description
:-----|:----------
{'suffix string'}|Static input string which will be used as suffix
{PublishingPageContent}|The actual publishing page HTML field content to suffix
{'static boolean value'}|Static bool ('true', 'false') to indicate if the suffixing still needs to happen when the {PublishingPageContent} field content is emty
#### Output parameters

Name|Description
:-----|:----------
{return value}|Value of {PublishingPageContent} suffixed with the provided suffix value
### PrefixAndSuffix

**Description:** Prefixes and suffixes the input text with another text. The applyIfContentIsEmpty parameter controls if the prefix/suffix also needs to happen when the actual content is empty

**Example:** `PrefixAndSuffix('&lt;H1&gt;Prefix some extra text&lt;/H1&gt;','&lt;H1&gt;Suffix some extra text&lt;/H1&gt;',{PublishingPageContent},'false')`

#### Input parameters

Name|Description
:-----|:----------
{'prefix string'}|Static input string which will be used as prefix
{'suffix string'}|Static input string which will be used as suffix
{PublishingPageContent}|The actual publishing page HTML field content to prefix/suffix
{'static boolean value'}|Static bool ('true', 'false') to indicate if the prefixing/suffixing still needs to happen when the {PublishingPageContent} field content is emty
#### Output parameters

Name|Description
:-----|:----------
{return value}|Value of {PublishingPageContent} prefixed/suffixed with the provided values
### ToImageUrl

**Description:** Returns the server relative image url of a Publishing Image field value.

**Example:** `ToImageUrl({PublishingPageImage})`

#### Input parameters

Name|Description
:-----|:----------
{PublishingPageImage}|Publishing Image field value
#### Output parameters

Name|Description
:-----|:----------
{return value}|Server relative image url
### ToImageAltText

**Description:** Returns the image alternate text of a Publishing Image field value.

**Example:** `ToImageAltText({PublishingPageImage})`

#### Input parameters

Name|Description
:-----|:----------
{PublishingPageImage}|Publishing Image field value
#### Output parameters

Name|Description
:-----|:----------
{return value}|Image alternate text
### ToImageAnchor

**Description:** Returns the image anchor url of a Publishing Image field value.

**Example:** `ToImageAnchor({PublishingPageImage})`

#### Input parameters

Name|Description
:-----|:----------
{PublishingPageImage}|Publishing Image field value
#### Output parameters

Name|Description
:-----|:----------
{return value}|Image anchor url
### ToImageCaption

**Description:** Returns the image caption of a Publishing Html image caption field

**Example:** `ToImageCaption({PublishingImageCaption})`

#### Input parameters

Name|Description
:-----|:----------
{PublishingImageCaption}|Publishing Html image caption field value
#### Output parameters

Name|Description
:-----|:----------
{return value}|Image caption
### ToPreviewImageUrl

**Description:** Returns a page preview image url.

**Example:** `ToPreviewImageUrl({PreviewImage})`

#### Input parameters

Name|Description
:-----|:----------
{PreviewImage}|A publishing image field value or a string containing a server relative image path
#### Output parameters

Name|Description
:-----|:----------
{return value}|A formatted preview image url
### ToAuthors

**Description:** Looks up user information for passed user id

**Example:** `ToAuthors({PublishingContact})`

#### Input parameters

Name|Description
:-----|:----------
{userId}|The id (int) of a user
#### Output parameters

Name|Description
:-----|:----------
{return value}|A formatted json blob describing the user's details
### DefaultTaxonomyFieldValue

**Description:** Populate a taxonomy field based upon provided term id's. You can configure to optionally overwrite existing values

**Example:** `DefaultTaxonomyFieldValue({TaxField2},'a65537e8-aa27-4b3a-bad6-f0f61f84b9f7|69524923-a5a0-44d1-b5ec-7f7c6d0ec160','true')`

#### Input parameters

Name|Description
:-----|:----------
{Taxonomy Field}|The taxonomy field to update
{'term ids split by &#124;'}|List of term id's to set, multiple values can also be used when the taxonomy field is configured to accept multiple terms
{'static boolean value'}|Static bool ('true', 'false') to indicate if the default term values have to be set in case the fields already contains terms
#### Output parameters

Name|Description
:-----|:----------
{return value}|String with term information needed to set the taxonomy field
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
{ViewXml}|Definition of the selected view
#### Output values

Name|Description
:-----|:----------
Library|The list is a document library
List|The list is a document list
Issue|The list is an issue list
TaskList|The list is an task list
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

**Description:** Content editor can be transformed in various ways depending on whether a link was used, what file type was used, if script is used or not...

**Example:** `ContentEmbedSelectorContentLink({ContentLink}, {Content}, {FileContents}, {UseCommunityScriptEditor})`

#### Input parameters

Name|Description
:-----|:----------
{ContentLink}|Link value if set
{Content}|Content embedded inside the web part
{FileContents}|Text content of the file. Return empty string if file was not found
{UseCommunityScriptEditor}|The UseCommunityScriptEditor mapping property provided via the PageTransformationInformation instance
#### Output values

Name|Description
:-----|:----------
Link|If the link was not empty and it was an aspx file
NonASPXLink|If the link was not empty and it was not an aspx file but the file contents did contain JavaScript
NonASPXLinkNoScript|If the link was not empty and it was not an aspx file and the contents did not contain JavaScript
NonASPXUseCommunityScriptEditor|Use the community script editor to host the content
Content|If no link was specified but content was embedded and it contains JavaScript
ContentNoScript|If no link was specified and the embedded content and it does not contain JavaScript
ContentUseCommunityScriptEditor|Use the community script editor to host the content
### ContentByQuerySelector

**Description:** Analyzes a list and returns if the list can be transformed.

**Example:** `ContentByQuerySelector({ListGuid},{ListName})`

#### Input parameters

Name|Description
:-----|:----------
{ListGuid}|Guid of the list used by the CBQ web part
{ListName}|Name of the list used by the CBQ web part
#### Output values

Name|Description
:-----|:----------
Default|Transform the list
NoTransformation|Don't transform the list
### SummaryLinkSelector

**Description:** Uses the SummaryLinksToQuickLinks mapping property provided via the PageTransformationInformation instance to determine the mapping

**Example:** `SummaryLinkSelector({SummaryLinksToQuickLinks})`

#### Input parameters

Name|Description
:-----|:----------
{SummaryLinksToQuickLinks}|The SummaryLinksToQuickLinks mapping property provided via the PageTransformationInformation instance
#### Output values

Name|Description
:-----|:----------
UseQuickLinks|Transform to the QuickLinks web part
UseText|Transform to the formatted text
### ScriptEditorSelector

**Description:** Uses the UseCommunityScriptEditor mapping property provided via the PageTransformationInformation instance to determine the mapping

**Example:** `ScriptEditorSelector({UseCommunityScriptEditor})`

#### Input parameters

Name|Description
:-----|:----------
{UseCommunityScriptEditor}|The UseCommunityScriptEditor mapping property provided via the PageTransformationInformation instance
#### Output values

Name|Description
:-----|:----------
UseCommunityScriptEditor|Transform to the community script editor web part
NoScriptEditor|Don't transform as there's no script editor
### UserExistsSelector

**Description:** Checks if the passed value is a user or not

**Example:** `UserExistsSelector({PersonEmail})`

#### Input parameters

Name|Description
:-----|:----------
{PersonEmail}|Account of the user
#### Output values

Name|Description
:-----|:----------
InvalidUser|User is invalid
ValidUser|User info is valid
