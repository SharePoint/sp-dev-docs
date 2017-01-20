# ISerializedServerProcessedData interface







Contains collections of data that can be processed by server side services like search index and link fixup




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`htmlStrings`      | `{ [key: string]: string }` | A key-value map where keys are string identifiers and values are rich text with HTML format. SharePoint servers treat the values as HTML content and run services like safety checks, search index and link fixup on them Example: { 'myRichDescription': '<div>Some standard <b>HTML content</b><a href='http://somelink'>A Link</a></div>' 'anotherRichText': <div class='aClass'><span style='color:red'>Some red text</div> } |
|`imageSources`      | `{ [key: string]: string }` | A key-value map where keys are string identifiers and values are image sources. SharePoint servers treat the values as image sources and run services like search index and link fixup on them Example: { 'myImage1': 'http://res.contoso.com/path/to/file' 'myImage2': 'https://res.contoso.com/someName.jpg' } |
|`links`      | `{ [key: string]: string }` | A key-value map where keys are string identifiers and values are links. SharePoint servers treat the values as links and run services like link fixup on them Example: { 'myWebURL': 'http://contoso.com' 'myFileLink': 'https://res.contoso.com/file.docx' } |






