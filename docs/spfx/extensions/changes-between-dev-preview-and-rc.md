# Changes between Dev Preview and Release Candidate for SharePoint Framework Extensions (preview)

If you have created SharePoint Framework Extensions with the developer preview version (released June 2017), you'll have to perform some changes to make them work with Release Candidate (RC) version. Here's a short list of the changes, which were introduced with the latest version.

Release Candidate is enabled in the First Release tenants in Office 365, but is not supported yet in production use.

## General solution package changes

- All SharePoint Framework packages are now standardized to version 1.2. All future updates will also have version standardization cross all packages to avoid any confusions around used versions.
- Upgrade to use TypeScript 2.4 and React 15 typings
- Update to Fabric React 4.32.0.

### Application Customizer Changes

- Placeholder logic has been changed slightly and they have been renamed.
- Typical placeholders are now called `'top'` and `'bottom'`
- `onRender` method is deprecated - you should call render from the onInit, if needed and also add event handling for the possible events when placeholders should be re-rendered. See [updated placeholder tutorial](./get-started/using-page-placeholder-with-extensions.md) for details.
- Schema definition URL has been updated in the manifest file to point json schema file from the dev.office.com.

### Field Customizer Changes

- There are changes in the APIs for accessing the actual field values. You should be using `event.fieldValue`. Other options are deprecated.
- API to access UI element to render the field customizer output has been changed from `event.cellDiv` to `event.domElement`. 
- Schema definition URL has been updated in the manifest file to point json schema file from the dev.office.com.

### ListView Command Set Changes

- `onRefreshCommand` method deprecated and replaced with `onListViewUpdated`.
- Manifest json changes around the commands structure. Is using now `items` collections and changes in the title handling of the commands in the json definition.
- Schema definition URL has been updated in the manifest file to point json schema file from the dev.office.com.
