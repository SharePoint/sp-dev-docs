---
title: Media upload in Adaptive Card Extension
description: Media upload is a new action that the SharePoint Adaptive Card Extension framework supports, which enables third party developers to upload data content to sharepoint.
ms.date: 07/20/2022
---
# Media upload in Adaptive Card Extension

> [!NOTE]
> The media upload capability in Adaptive Card Extension will be available in SPFx v1.15.
>
> So make sure that you have installed it before proceeding further.
>
> For more information on installing the SPFx v1.15 Preview, see [SharePoint Framework v1.15 release notes](../../../../release-1.15.md).
>
> This tutorial also assumes that you have already built a SharePoint Adaptive Card Extension.
>
> To learn how to create your first SharePoint Adaptive Card Extension, try out [this tutorial](../../../get-started/build-first-sharepoint-adaptive-card-extension.md).


### Action type for media upload

#### Select Media

This allows users to upload media content via an ACE. The current size limitation is 1MB per image. A user may specify any image type to be uploaded. **Note**: _If an image type is not specified then an error indicating only images can be uploaded will show up._

The ACE action for Select Media is: `VivaAction.SelectMedia`.

The parameters that it takes are as follows:

- `mediaType`: This is set to image by default as audio is still under works.
- `allowMultipleCapture` [OPTIONAL]: This enables multiple files to be added at once.
  - This is enabled by default.
- `maxSizePerFile` [OPTIONAL]: The limitation for the file size to be uploaded, suggested limitation is 1mb.
- `supportedFileFormats` [OPTIONAL]:  This is a space delimited format on allowed types. If none are supplied then standard image files are used for type checking.
  - Any file which is attempted to be upload that doesn't match the allowed type results in an error message stating: _This isn't a file type we support. You can only upload images._

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

### Tutorial and Examples

You can take a look at [this tutorial](./MediaUploadTutorial.md) which goes over a step by step guide on how to create a card with the available media upload action.

1. **Upload an image**
  
    In your template json file add the following action:
  
    ```json
    "actions": [
        {
            "type": "VivaAction.SelectMedia",
            "id": "Select Media",
            "title": "Upload Image",
            "parameters": {
              "mediaType": "MediaType.Image"
            }
        }
    ]
    ```

1. **Upload multiple images**
  
    In your template json file add the following action:
  
    ```json
    "actions": [
        {
            "type": "VivaAction.SelectMedia",
            "id": "Select Media",
            "title": "Upload Image",
            "parameters": {
                  "mediaType": "MediaType.Image",
                  "allowMultipleCapture": true
            }
        }
    ]
    ```

1. **Upload only JPG images**
  
    In your template json file add the following action:
  
    ```json
    "actions": [
        {
            "type": "VivaAction.SelectMedia",
            "id": "Select Media",
            "title": "Upload Image",
            "parameters": {
                "mediaType": "MediaType.Image",
                "supportedFileFormats": "jpg"
            }
        }
    ]
    ```

1. **Upload allow only small images to be uploaded**

    In your template json file add the following action:
  
    ```json
    "actions": [
        {
            "type": "VivaAction.SelectMedia",
            "id": "Select Media",
            "title": "Upload Image",
            "parameters": {
                "mediaType": "MediaType.Image",
                "supportedFilemaxSizePerFileFormats": 1000
            }
        }
    ]
    ```

### Access media upload action via card-designer card's property pane

If you don't want to write up a new ACE but still wich to see the media upload in action, be sure to explore [this tutorial](./MediaUploadPropertyPane.md) which allows you to explore this through the property pane.

> [!NOTE]
> The media upload action can be added on the card view, buttons ofthe card view, or inside the quick view itself.

### Availability of media upload action

> [!NOTE]
> Currently this feature is not supported in teams mobile and will throw an error indicating that this.

Action       | Viva Connection Desktop | Viva Connections Mobile | Browser
------------- | ------------- | ------------- | -------------
Select Media | Supported | Not Supported | Supported