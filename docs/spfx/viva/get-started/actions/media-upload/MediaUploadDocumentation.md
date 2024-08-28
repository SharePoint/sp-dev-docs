---
title: Media upload in Adaptive Card Extension
description: Media upload is a new action that the SharePoint Adaptive Card Extension framework supports, which enable third-party developers to upload data content to sharepoint.
ms.date: 08/28/2024
ms.localizationpriority: high
---
# Media upload in Adaptive Card Extension

Microsoft added support for an action to upload media, unique to Viva Connections, in the [SharePoint Framework (SPFx) v1.15.2](../../../../release-1.15.2.md) release.

> [!NOTE]
> This tutorial also assumes that you've already built an SPFx Adaptive Card Extension.
>
> To learn how to create your first SPFx Adaptive Card Extension, try out [this tutorial](../../../get-started/build-first-sharepoint-adaptive-card-extension.md).

## Action type for media uploads

### Select Media

Allows users to upload media content via an Adaptive Card Extension (ACE). The current size limitation is 1 MB per image. A user can specify any image type to be uploaded.

> [!WARNING]
> If an image type isn't specified, then an error indicating only images can be uploaded is displayed.

The ACE action for Select Media is: `VivaAction.SelectMedia`.

```json
{
  "type": "VivaAction.SelectMedia",
  "id": "Select Media",
  "title": "Select Files",
  "parameters": {
    "mediaType": "MediaType.Image"
  }
}
```

The parameters that it takes are as follows:

- `mediaType`: Currently set as image by default. Audio and documents, such as PDFs, are supported as well.
- `allowMultipleCapture` [OPTIONAL]: Enables multiple files to be added at once.
  - This is enabled by default.
- `maxSizePerFile` [OPTIONAL]: The limitation for the file size to be uploaded, suggested limitation is 1 MB.
- `supportedFileFormats` [OPTIONAL]:  Space-delimited format on allowed types. If none are supplied, then standard image files are used for type checking.
  - Any file that is attempted to be upload that doesn't match the allowed type results in an error message stating: _This isn't a file type we support. You can only upload images._

```typescript
{
    /**
     * Specify the specific media type that should be selected
     */
    mediaType: MediaType;
    /**
     * Allow multiple images to be selected.
     */
    allowMultipleCapture?: boolean;
    /**
     * Max file size that can be uploaded.
     */
    maxSizePerFile?: number;
    /**
     * File formats supported for upload.
     */
    supportedFileFormats?: string[];
}
```

> [!WARNING]
> If a user uploads a file that is not supported in the format parameters, an error code of **InCorrectFileFormat** is thrown.

## Tutorial and Examples

You can take a look at [this tutorial](./MediaUploadTutorial.md) which goes over a step-by-step guide on how to create a card with the available media upload action.

1. **Upload an image**

    In your template json file, add the following action:

    ```json
    "actions": [
      {
        "type": "VivaAction.SelectMedia",
        "id": "Select Media",
        "title": "Upload Image",
        "parameters": {
          "mediaType": MediaType.Image
        }
      }
    ]
    ```

1. **Upload multiple images**

    In your template json file, add the following action:

    ```json
    "actions": [
      {
        "type": "VivaAction.SelectMedia",
        "id": "Select Media",
        "title": "Upload Image",
        "parameters": {
            "mediaType": MediaType.Image,
            "allowMultipleCapture": true
        }
      }
    ]
    ```

1. **Upload only JPG images**

    In your template json file, add the following action:

    ```json
    "actions": [
      {
        "type": "VivaAction.SelectMedia",
        "id": "Select Media",
        "title": "Upload Image",
        "parameters": {
          "mediaType": MediaType.Image,
          "supportedFileFormats": "jpg"
        }
      }
    ]
    ```

1. **Upload allow only small images to be uploaded**

    In your template json file, add the following action:

    ```json
    "actions": [
      {
        "type": "VivaAction.SelectMedia",
        "id": "Select Media",
        "title": "Upload Image",
        "parameters": {
          "mediaType": MediaType.Image,
          "supportedFilemaxSizePerFileFormats": 1000
        }
      }
    ]
    ```

## Access media upload action via card-designer card's property pane

If you don't want to write up a new ACE but still want to see the media upload in action, be sure to explore [this tutorial](./MediaUploadPropertyPane.md) which allows you to explore this through the property pane.

> [!NOTE]
> The media upload action can be added on the Card View, buttons of the Card View, or inside the Quick View itself.

## Availability of media upload action

   Action    | Viva Connection Desktop | Viva Connections Mobile |  Browser
------------ | ----------------------- | ----------------------- | ---------
Select Media | Supported               | Supported               | Supported

## See Also

- [Microsoft Learning: Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections](/training/modules/sharepoint-spfx-adaptive-card-extension-card-types)
