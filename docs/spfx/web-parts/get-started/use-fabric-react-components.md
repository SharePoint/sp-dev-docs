---
title: Use Office UI Fabric React components in your SharePoint client-side web part
description: Build a web part that uses the DocumentCard component of Office UI Fabric React.
ms.date: 02/14/2022
ms.localizationpriority: high
ms.custom: scenarios:getting-started
---

# Use Fluent UI React components in your SharePoint client-side web part

Fluent UI is the front-end framework for building experiences for Office and Office 365. It includes a robust collection of responsive, mobile-first components that make it easy for you to create web experiences by using the Office Design Language.

This article describes how to build a web part like in the following image, that uses the DocumentCard component of Fluent UI React.

![Image of a DocumentCard Fabric component in a SharePoint workbench](../../../images/fabric-components-doc-card-view-ex.png)

## Office UI Fabric React & Fluent UI React

> [!NOTE]
> Microsoft renamed Office UI Fabric to Fluent UI in early 2020.

The transition from Office UI Fabric to Fluent UI, and the respective React components, is currently in a state of transition. To learn more about the current state and their roadmap, see the FAQ provided by the Fluent UI team: [FAQ Fabric and Stardust to Fluent UI](https://github.com/microsoft/fluentui/wiki/FAQ---Fabric-and-Stardust-to-Fluent-UI).

SharePoint Framework (SPFx) packages now reference the new Fluent UI React NPM Packages.

- [Fluent UI website](https://developer.microsoft.com/fluentui#/controls/web) - detailed API documentation along with implementation code examples for each control.
- [API reference](/javascript/api/office-ui-fabric-react) - detailed API reference documentation.
- [Office UI Fabric React / Fluent UI React](https://github.com/microsoft/fluentui) - source code repository on github.

## Create a new web part project

1. Create a new project directory in your favorite location:

    ```console
    md documentcardexample-webpart
    ```

1. Go to the project directory:

    ```console
    cd documentcardexample-webpart
    ```

1. Create a new project by running the Yeoman SharePoint Generator from within the new directory you created:

    ```console
    yo @microsoft/sharepoint
    ```

    The Yeoman SharePoint Generator will prompt you with a series of questions. For all questions, accept the default options except for the following questions:

    - **Which type of client-side component to create?**: Web Part
    - **Which template would you like to use?**: React

    At this point, Yeoman installs the required dependencies and scaffolds the solution files.

    Starting with SPFx v1.8.2 version, Yeoman will include the recommended **\@microsoft/sp-office-ui-fabric-core** package version to your solution when you select the **React** as the desired web framework.

    > [!NOTE]
    > Starting with SPFx v1.8, you can use either Office UI Fabric React v5 or v6. Each version of SPFx upgrades the version of Office UI Fabric React in new projects. For example:
    >
    > - SPFx v1.8 projects use Office UI Fabric React v5.132.0 by default
    > - SPFx v1.9 & v1.10 projects use Office UI Fabric React v6.189.2 by default
    >
    > Different versions of Office UI Fabric React have different dependencies on versions of TypeScript. If you want to upgrade an existing SPFx project to a newer version of Office UI Fabric React, see the following section: [Appendix: Upgrading Office UI Fabric React versions](#appendix-upgrading-office-ui-fabric-react-versions)
    >
    > This page assumes you are using the latest version of the SharePoint Framework.

1. Next, execute the following command to open the web part project in Visual Studio Code:

    ```console
    code .
    ```

    You now have a web part project with the React web framework.

1. Open **DocumentCardExampleWebPart.ts** from the **src\webparts\documentCardExample** folder.

    As you can see, the `render()` method creates a react element and renders it in the web part DOM.

    ```typescript
    public render(): void {
      const element: React.ReactElement<IDocumentCardExampleProps> = React.createElement(
        DocumentCardExample,
        {
          description: this.properties.description,
          isDarkTheme: this._isDarkTheme,
          environmentMessage: this._environmentMessage,
          hasTeamsContext: !!this.context.sdks.microsoftTeams,
          userDisplayName: this.context.pageContext.user.displayName
        }
      );

      ReactDom.render(element, this.domElement);
    }
    ```

1. Open **DocumentCardExample.tsx** from the **src\webparts\documentCardExample\components** folder.

    This is the main react component that Yeoman added to your project that renders in the web part DOM.

    ```tsx
    export default class DocumentCardExample extends React.Component<IDocumentCardExampleProps> {
      public render(): React.ReactElement<IDocumentCardExampleProps> {
        const {
          description,
          isDarkTheme,
          environmentMessage,
          hasTeamsContext,
          userDisplayName
        } = this.props;

        return (
          <section className={`${styles.documentCardExample} ${hasTeamsContext ? styles.teams : ''}`}>
            <div className={styles.welcome}>
              <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
              <h2>Well done, {escape(userDisplayName)}!</h2>
              <div>{environmentMessage}</div>
              <div>Web part property value: <strong>{escape(description)}</strong></div>
            </div>
            <div>
              <h3>Welcome to SharePoint Framework!!!</h3>
              <p>
                The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
              </p>
              <h4>Learn more about SPFx development:</h4>
              <ul className={styles.links}>
                <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
                <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
                <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
                <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
                <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
                <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
                <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
              </ul>
            </div>
          </section>
        );
      }
    }
    ```

## Add an Office UI Fabric component

The *new modern experiences* in SharePoint use Office UI Fabric and Office UI Fabric React as the default front-end framework for building the new experiences. As a result, SharePoint Framework ships with a default version of Office UI Fabric and Fabric React that matches the version available in SharePoint. This ensures that the web part you're building uses the right version of the Fabric styles and components when deployed to SharePoint.

Because we chose React as our framework when creating the solution, the generator installed the right version of Office UI Fabric React as well. You can directly import the Fabric components in your react components without any additional work.

### To add an Office UI Fabric component

1. Open **DocumentCardExample.tsx** from the **src\webparts\documentCardExample\components** folder.

1. Add the following `import` statement to the top of the file to import Fabric React components that we want to use.

    ```typescript
    import {
      DocumentCard,
      DocumentCardActivity,
      DocumentCardPreview,
      DocumentCardTitle,
      IDocumentCardPreviewProps,
    } from '@fluentui/react/lib/DocumentCard';
    import { ImageFit } from '@fluentui/react/lib/Image';
    ```

1. Replace the existing `render()` method with the following:

    ```typescript
    public render(): React.ReactElement<IDocumentCardExampleProps> {
    
      const previewProps: IDocumentCardPreviewProps = {
        previewImages: [
          {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: require('./document-preview.png'),
            iconSrc: require('./icon-ppt.png'),
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
        ],
      };

      const documentCardActivityPeople = [{ name: 'Kat Larrson', profileImageSrc: require('./avatar-kat.png') }];

      return (
        <DocumentCard
          aria-label="Default Document Card with large file name. Created by Kat Larrson a few minutes ago."
          onClickHref="http://bing.com"
        >
          <DocumentCardPreview {...previewProps} />
          <DocumentCardTitle
            title={
              'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
              'it_needs_truncating.pptx'
            }
            shouldTruncate
          />
          <DocumentCardActivity activity="Created a few minutes ago" people={documentCardActivityPeople} />
        </DocumentCard>
      );
    }
    ```

1. Remove unused imports

   Delete the following imports as they are no longer used.

   ```
   import styles from './MyFluentWebPart1.module.scss';
   import { escape } from '@microsoft/sp-lodash-subset';
   ```

1. Save the file.

    In this code, the `DocumentCard` component includes some extra sections:

    - DocumentCardPreview
    - DocumentCardTitle
    - DocumentCardActivity

    The `previewProps` property includes some properties of the **DocumentCardPreview** component.

## Copy the image assets

Copy the following images to your **src\webparts\documentCardExample\components** folder:

- [avatar-kat.png](https://github.com/SharePoint/sp-dev-docs/blob/master/assets/avatar-kat.png)
- [icon-ppt.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/icon-ppt.png)
- [document-preview.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/document-preview.png)

> [!NOTE]
> In the code, we were referencing these images using relative path from the root location. As your reference the images in the code, it will cause them to be included in the **\*.sppkg** solution package as long as you have the `includeClientSideAssets` set as `true` in the **package-solution.json** file.

## Preview the web part in the hosted workbench

1. In the console, enter the following to preview your web part in the SharePoint hosted workbench:

    ```console
    gulp serve --nobrowser
    ```

1. Open a browser and navigate to your SharePoint site's hosted workbench: `https://enter-your-SharePoint-site/_layouts/workbench.aspx`.
1. In the toolbox, select your `DocumentCardExample` web part to add:

    ![Image of a DocumentCard Fabric component in a SharePoint workbench](../../../images/fabric-components-doc-card-view-ex.png)

## Appendix: Upgrading Office UI Fabric React versions

Starting with SPFx v1.8, you can use either Office UI Fabric React v5 or v6. Each version of SPFx upgrades the version of Office UI Fabric React in new projects. For example:

- SPFx v1.8 and prior versions projects use Office UI Fabric React v5.x by default
- SPFx v1.9 & v1.10 projects use Office UI Fabric React v6.x by default

Different versions of Office UI Fabric React support different minimum versions of TypeScript.

Office UI Fabric React v5 depends on TypeScript v2.x. SPFx v1.8 and prior projects also depend on TypeScript v2.x.

Office UI Fabric React v6 require TypeScript v3.x. All SPFx v1.9 and later projects are configured to use TypeScript v3 or higher that matches the same dependency of Office UI Fabric React v6.

In the case where you want to upgrade an SPFx v1.8 project to Office UI Fabric React v6, you'll also need to upgrade the version of TypeScript on the project. See the SPFx v1.8 release notes for details: [SharePoint Framework v1.8 release notes: Support for TypeScript 2.7, 2.9 and 3.x](https://github.com/SharePoint/sp-dev-docs/wiki/SharePoint-Framework-v1.8-release-notes#support-for-typescript-27-29-and-3x).

