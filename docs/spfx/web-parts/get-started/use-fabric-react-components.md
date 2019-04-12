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

<br/>

> [!Video https://www.youtube.com/embed/RnXD10a-2ww]

<br/>
  
## Create a new web part project

1. Create a new project directory in your favorite location:

  ```
  md documentcardexample-webpart
  ```
    
2. Go to the project directory:

  ```
  cd documentcardexample-webpart
  ```

3. Make sure you have the latest version of `@microsoft/generator-sharepoint` installed and create a new web part by running the Yeoman SharePoint generator:

  ```
  yo @microsoft/sharepoint
  ```
    
4. When prompted:

  * Accept the default **documentcardexample-webpart** as your solution name, and select Enter.
  * Select **SharePoint Online only (latest)**, and select Enter.
  * Select **Use the current folder** for where to place the files.
  * Select **N** to require the extension to be installed on each site explicitly when it's being used.
  - Select **N** on the question if solution contains unique permissions.  
  * Select **WebPart** as the client-side component type to be created. 

5. The next set of prompts ask for specific information about your web part:

  * Use **DocumentCardExample** for your web part name, and select Enter.
  * Accept the default **DocumentCardExample description**, and select Enter.
  * Select **React** as the framework, and select Enter.

  At this point, Yeoman installs the required dependencies and scaffolds the solution files. This might take a few minutes. Yeoman scaffolds the project to include your DocumentCardExample web part as well.

6. When initial scaffolding is completed, enter the following to explicitly install the 5.x version of the Office UI Fabric to your solution:

  ```
  npm install office-ui-fabric-react@5.132.0 --save
  ```

> [!NOTE]
> Starting with SharePoint Framework 1.8, you can use either Office UI Fabric version 5 or version 6. In this case we are using specifically Office UI Fabric version 5.132.0, so we are adding the needed dependency on it. If you would be using Office UI Fabric version 6.x, you'd also need to update the used TypeScript version of the solution.


7. Next, enter the following to open the web part project in Visual Studio Code:

  ```
  code .
  ```
	
  You now have a web part project with the React framework.
  
8. Open **DocumentCardExampleWebPart.ts** from the **src\webparts\documentCardExample** folder. 

  As you can see, the `render` method creates a react element and renders it in the web part DOM.

  ```typescript
    public render(): void {
      const element: React.ReactElement<IDocumentCardExampleProps > = React.createElement(
        DocumentCardExample,
        {
          description: this.properties.description
        }
      );
  ```
	
9. Open **DocumentCardExample.tsx** from the **src\webparts\documentCardExample\components** folder. 
	
  This is the main react component that Yeoman added to your project that renders in the web part DOM.

  ```HTML
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

> [!NOTE]
> With the current release of the SharePoint Framework, we recommend that you use the Office UI Fabric and Fabric React that ships with the generator. We do **not** recommend that you update the Office UI Fabric and Fabric React packages independently because that might conflict with the already available version in SharePoint, and as a result, your web part may fail to function as expected.

### To add an Office UI Fabric component

1. Open **DocumentCardExample.tsx** from the **src\webparts\documentCardExample\components** folder. 

2. Add the following `import` statement to the top of the file to import Fabric React components that we want to use.

  ```typescript
  import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity,
    IDocumentCardPreviewProps
  } from 'office-ui-fabric-react/lib/DocumentCard';
  ```

3. Delete the current `render` method, and add the following updated `render` method:

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

4. Save the file.

  In this code, the DocumentCard component includes some extra sections:

  * DocumentCardPreview
  * DocumentCardTitle
  * DocumentCardActivity

  The `previewProps` property includes some properties of the DocumentCardPreview.

5. Notice the use of the relative path with a `require` statement to load images. Currently, you need to perform a small configuration in the gulpfile.js to enable these images to get processed properly by webpack.
	
6. Open **gulpfile.js** from the **root** folder. 
	
7. Add the following code just above the `build.initialize(gulp);` code line.
	
  ```js
  build.configureWebpack.mergeConfig({  
      additionalConfiguration: (generatedConfiguration) => {
          if (build.getConfig().production) {
              var basePath = build.writeManifests.taskConfig.cdnBasePath;
              if (!basePath.endsWith('/')) {
                  basePath += '/';
              }
              generatedConfiguration.output.publicPath = basePath;
          }
          else {
              generatedConfiguration.output.publicPath = "/dist/";
          }
          return generatedConfiguration;
      }
  });
  ```
	
8. Save the file.

  Your full **gulpfile.js** file should look as follows.

  ```js
  'use strict';

  const gulp = require('gulp');
  const build = require('@microsoft/sp-build-web');
  build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

  build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        if (build.getConfig().production) {
            var basePath = build.writeManifests.taskConfig.cdnBasePath;
            if (!basePath.endsWith('/')) {
                basePath += '/';
            }
            generatedConfiguration.output.publicPath = basePath;
        }
        else {
            generatedConfiguration.output.publicPath = "/dist/";
        }
        return generatedConfiguration;
    }
  });

  build.initialize(gulp);

  ```

## Copy the image assets

Copy the following images to your **src\webparts\documentCardExample\components** folder:

* [avatar-kat.png](https://github.com/SharePoint/sp-dev-docs/blob/master/assets/avatar-kat.png)
* [icon-ppt.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/icon-ppt.png)
* [document-preview.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/document-preview.png)

## Preview the web part in Workbench

1. In the console, enter the following to preview your web part in Workbench:
	
  ```
  gulp serve
  ```
	
2. In the toolbox, select your `DocumentCardExample` web part to add:
	
  ![Image of a DocumentCard Fabric component in a SharePoint workbench](../../../images/fabric-components-doc-card-view-ex.png)

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, report that to SharePoint engineering by using the [issue list at the sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues). Thanks for your input in advance.

## See also

- [Build your first SharePoint client-side web part](build-a-hello-world-web-part.md)
