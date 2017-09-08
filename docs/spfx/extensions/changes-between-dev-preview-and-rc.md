# Changes introduced in the SharePoint Framework Extensions (preview) Release Candidate release

If you used the developer preview version of the SharePoint Framework Extensions (released in June 2017), you'll have to make some changes to ensure that your extensions work with the Release Candidate (RC) release. This article provides a short list of the changes that were introduced in the SharePoint Framework Extensions RC release.

>**Note:** The RC release is enabled on the First Release tenants in Office 365, but is not yet supported for use in production.

## General solution package changes

- All SharePoint Framework packages are now standardized to version 1.2. All future updates will also have standard versions across all packages.
- Upgraded to use TypeScript 2.4 and React 15 typings.
- Updated to Fabric React 4.32.0.

## Application Customizer changes

- Placeholder logic has changed slightly and placeholders have been renamed. Typical placeholders are now called `'top'` and `'bottom'`.
- The **`onRender`** method has been deprecated. Instead, call **`render`** from the **`onInit`** method, and add event handling for the possible events when placeholders should be re-rendered. For details, see [Using page placeholders](./get-started/using-page-placeholder-with-extensions.md).
- The schema definition URL has been updated in the manifest file to point to the online documentation for the JSON schema.

## Field Customizer changes

- Changes were made to the APIs that access field values. Use **`event.fieldValue`**. Other options are deprecated.
- The API to access UI elements to render the Field Customizer output has changed from **`event.cellDiv`** to **`event.domElement`**. 
- The schema definition URL has been updated in the manifest file to point to the online documentation for the JSON schema.

## ListView Command Set changes

- The **`onRefreshCommand`** method has been deprecated and replaced with **`onListViewUpdated`**.
- Changes were made to the commands structure in the manifest json file. Commands now use the **`items`** collection and command title handling was updated in the json definition.
- The schema definition URL has been updated in the manifest file to point to the online documentation for the JSON schema.
