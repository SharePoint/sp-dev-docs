# sp-application-base package






## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`ApplicationCustomizerContext`](./sp-application-base/class/applicationcustomizercontext.md)     | This object provides contextual information for BaseApplicationCustomizer. |
| [`BaseApplicationCustomizer`](./sp-application-base/class/baseapplicationcustomizer.md)     | This is the base class that third parties should extend when implementing a client-side extension that runs when an application is first starting. In the component manifest, the "extensionType" should be set to "ApplicationCustomizer". |
| [`Placeholder`](./sp-application-base/class/placeholder.md)     | A content placeholder is a designated region on the page (i.e. empty HTML "div" element) where third party extensions can inject HTML content. |
| [`PlaceholderCollection`](./sp-application-base/class/placeholdercollection.md)     | Exposes a collection of content placeholders for use by third parties. |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IPlaceholderAttachOptions`](./sp-application-base/interface/iplaceholderattachoptions.md)   | Options for the PlaceholderCollection.tryAttach() method.  |






