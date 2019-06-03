---
title: Use Office UI Fabric React components in your SharePoint client-side web part
description: Build a simple web part that uses the DocumentCard component of Office UI Fabric React.
ms.date: 11/08/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Use Office UI Fabric React components in your SharePoint client-side web part

This article describes how to build a simple web part that uses the DocumentCard component of [Office UI Fabric React](https://github.com/OfficeDev/office-ui-fabric-react). Office UI Fabric React is the front-end framework for building experiences for Office and Office 365. Fabric React includes a robust collection of responsive, mobile-first components that make it easy for you to create web experiences by using the Office Design Language.

The following image shows a DocumentCard component created with Office UI Fabric React.

![Image of a DocumentCard Fabric component in a SharePoint workbench](../../../images/fabric-components-doc-card-view-ex.png)

You can also follow these steps by watching this video on the SharePoint PnP YouTube Channel:

> [!Video https://www.youtube.com/embed/RnXD10a-2ww]

## Create a new web part project

1. Create a new project directory in your favorite location:

    ```shell
    md documentcardexample-webpart
    ```

1. Go to the project directory:

    ```shell
    cd documentcardexample-webpart
    ```

1. Make sure you have the latest version of `@microsoft/generator-sharepoint` installed and create a new web part by running the Yeoman SharePoint generator:

    ```shell
    yo @microsoft/sharepoint
    ```

1. When prompted:

    - Accept the default **documentcardexample-webpart** as your solution name, and select Enter.
    - Select **SharePoint Online only (latest)**, and select <kbd>ENTER</kbd>.
    - Select **Use the current folder** for where to place the files.
    - Select **Y** to require the extension to be installed on each site explicitly when it's being used.
    - Select **N** on the question if solution contains unique permissions.cd
    - Select **WebPart** as the client-side component type to be created.

1. The next set of prompts ask for specific information about your web part:

    - Use **DocumentCardExample** for your web part name, and select <kbd>ENTER</kbd>.
    - Accept the default **DocumentCardExample description**, and select <kbd>ENTER</kbd>.
    - Select **React** as the framework, and select <kbd>ENTER</kbd>.

    At this point, Yeoman installs the required dependencies and scaffolds the solution files. This might take a few minutes. Yeoman scaffolds the project to include your DocumentCardExample web part as well.

    Starting from 1.8.2 version, Yeoman will automatically associate the recommended `@microsoft/sp-office-ui-fabric-core` package version to your solution when you select the **React** as the framework.

    > [!NOTE]
    > Starting with SharePoint Framework 1.8, you can use either Office UI Fabric React v5 or v6. In this case we are using specifically Office UI Fabric React version 5.132.0, so we are adding the needed dependency on it. If you would be using Office UI Fabric React v6.x, you'd also need to update the used TypeScript version of the solution. To use Office UI Fabric React v6, you need to be on at least rush-stack-compiler-2.9. The default project created with SPFx v1.8.2 for SharePoint Online will use rush-stack-compiler-2.9 and Office UI Fabric React v6 (*it won't need the step to add office-ui-fabric-react to your package.json file*). Previous versions use either rush-stack-compiler-2.7 or a build system that is locked to TypeScript 2.4. In those cases, you'll need to reference Office UI FabricReact v5.132.0. If you are targeting SharePoint Server 2016 / SharePoint Server 2019 on-prem, you will also want to use Office UI Fabric React v5.132.0.

1. Next, execute the following command to open the web part project in Visual Studio Code:

    ```shell
    code .
    ```

    You now have a web part project with the React web framework.
  
1. Open **DocumentCardExampleWebPart.ts** from the **src\webparts\documentCardExample** folder.

    As you can see, the `render` method creates a react element and renders it in the web part DOM.

    ```typescript
    public render(): void {
      const element: React.ReactElement<IDocumentCardExampleProps > = React.createElement(
        DocumentCardExample,
        {
          description: this.properties.description
        }
      );

      ReactDom.render(element, this.domElement);
    }
    ```

1. Open **DocumentCardExample.tsx** from the **src\webparts\documentCardExample\components** folder.

    This is the main react component that Yeoman added to your project that renders in the web part DOM.

    ```tsx
    export default class DocumentCardExample extends React.Component<IDocumentCardExampleProps, {}> {
      public render(): React.ReactElement<IDocumentCardExampleProps> {
        return (
          <div className={ styles.documentCardExample }>
            <div className={ styles.container }>
              <div className={ styles.row }>
                <div className={ styles.column }>
                  <span className={ styles.title }>Welcome to SharePoint!</span>
                  <p className={ styles.subTitle }>Customize SharePoint experiences using web parts.</p>
                  <p className={ styles.description }>{escape(this.props.description)}</p>
                  <a href="https://aka.ms/spfx" className={ styles.button }>
                    <span className={ styles.label }>Learn more</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
    ```

## Add an Office UI Fabric component

The *new modern experiences* in SharePoint use Office UI Fabric and Office UI Fabric React as the default front-end framework for building the new experiences. As a result, SharePoint Framework ships with a default version of Office UI Fabric and Fabric React that matches the version available in SharePoint. This ensures that the web part you are building uses the right version of the Fabric styles and components when deployed to SharePoint.

Because we chose React as our framework when creating the solution, the generator installed the right version of Office UI Fabric React as well. You can directly import the Fabric components in your react components without any additional work.

### To add an Office UI Fabric component

1. Open **DocumentCardExample.tsx** from the **src\webparts\documentCardExample\components** folder. 

1. Add the following `import` statement to the top of the file to import Fabric React components that we want to use.

    ```typescript
    import {
      DocumentCard,
      DocumentCardPreview,
      DocumentCardTitle,
      DocumentCardActivity,
      IDocumentCardPreviewProps
    } from 'office-ui-fabric-react/lib/DocumentCard';
    ```

1. Replace the existing `render` method with the following:

    ```typescript
    public render(): JSX.Element {
      const previewProps: IDocumentCardPreviewProps = {
        previewImages: [
          {
            previewImageSrc: String(require('./document-preview.png')),
            iconSrc: String(require('./icon-ppt.png')),
            width: 318,
            height: 196,
            accentColor: '#ce4b1f'
          }
        ],
      };

      return (
        <DocumentCard onClickHref='http://bing.com'>
          <DocumentCardPreview { ...previewProps } />
          <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx' />
          <DocumentCardActivity
            activity='Created Feb 23, 2016'
            people={
              [
                { name: 'Kat Larrson', profileImageSrc: String(require('./avatar-kat.png')) }
              ]
            }
          />
        </DocumentCard>
      );
    }
    ```

1. Save the file.

    In this code, the `DocumentCard` component includes some extra sections:

    - DocumentCardPreview
    - DocumentCardTitle
    - DocumentCardActivity

    The `previewProps` property includes some properties of the DocumentCardPreview.

## Copy the image assets

Copy the following images to your **src\webparts\documentCardExample\components** folder:

- [avatar-kat.png](https://github.com/SharePoint/sp-dev-docs/blob/master/assets/avatar-kat.png)
- [icon-ppt.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/icon-ppt.png)
- [document-preview.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/document-preview.png)

> [!NOTE]
> In the code we were referencing these images using relative path from the root location. As your reference the images in the code, it will cause them to be included in the sppkg solution package as long as you have the `includeClientSideAssets` set as `true` in the **package-solution.json** file.

## Preview the web part in Workbench

1. In the console, enter the following to preview your web part in Workbench:

    ```shell
    gulp serve
    ```

1. In the toolbox, select your `DocumentCardExample` web part to add:

    ![Image of a DocumentCard Fabric component in a SharePoint workbench](../../../images/fabric-components-doc-card-view-ex.png)

## See also

- [Build your first SharePoint client-side web part](build-a-hello-world-web-part.md)
