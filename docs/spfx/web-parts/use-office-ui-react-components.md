# Use Office UI Fabric React components in your SharePoint client-side web part

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not supported for use in production environments.

This article describes how to build a simple web part that uses the DocumentCard [Office UI Fabric](https://github.com/OfficeDev/office-ui-fabric-react) component.

>Please note that Office UI Fabric React Components are in *in a pre-v1 state*, so we strongly encourage you to check out the [Roadmap](https://github.com/OfficeDev/office-ui-fabric-react/blob/master/ghdocs/ROADMAP.md) to see what the v1 we're working towards entails and what this means for your usage of the controls set. 

![DocumentBaseCard fabric component example](../../../images/fabric-components-doc-card-view-ex.png)

The React-based front-end framework for building experiences for Office and Office 365, Fabric React is a responsive, mobile-first collection of robust components designed to make it quick and simple for you to create web experiences using the Office Design Language.

Each step below will build on the previous so you will need to go through each step one by one to successfully complete this lab.

## Step 1: Project directory
Create a new project directory in your favorite location:

```
md documentcardexample-webpart
```
    
Navigate to the project directory:

```
cd documentcardexample-webpart
```

## Step 2: Create a new web part Project
Create a new webpart by running the Yeoman SharePoint Generator:

```
yo @microsoft/sharepoint
```
    
You will be prompted with a series of questions:
* Accept the default `documentcardexample-webpart` as your solution name and press `Enter`.
* Select "Use the current folder" to place the files.
The next set of prompts will ask specific information about your web part:
* Type `DocumentCardExample` as your web part name and press `Enter`.
* Accept the default `DocumentCardExample description` as your web part description and press `Enter`.
* Select `React` as the framework you would like to use and press `Enter`.

At this point, yeoman will install the required dependencies and scaffold the solution files. This might take a few minutes. Yeoman will scaffold the project to include your `DocumentCardExample` web part as well.

Once the scaffold is complete, in the console, type the following to open the web part project in Visual Studio Code:

```
code .
```
You now have a web part project with react framework.

Open `DocumentCardExampleWebPart.ts` from `src\webparts\documentCardExample` folder. 

As you can see, the `render` method creates a react element and renders it in the web part DOM.

```ts
public render(mode: DisplayMode, data?: IWebPartData): void {
  const element: React.ReactElement<IDocumentCardProps> = React.createElement(DocumentCard, {
    description: this.properties.description
  });

  ReactDom.render(element, this.domElement);
}
```
Open `DocumentCardExample.tsx` from `src\webparts\documentCardExample\components` folder. 

This is the main react component that was added by yeoman to your project that renders in the web part DOM.

```ts
export default class DocumentCardExample extends React.Component<IDocumentCardProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={styles.documentcard}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', styles.row)}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                Welcome to SharePoint!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                {this.props.description}
              </p>
              <a
                className={css('ms-Button', styles.button)}
                href='https://github.com/SharePoint/sp-dev-docs/wiki'
              >
                <span className='ms-Button-label'>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

```

## Step 3: Add Office UI Fabric component
In order to use the Office UI Fabric Components, first you will need to install the npm package.

Switch to the console window and type the following to install the Office UI Fabric Component npm package:

```
npm i office-ui-fabric-react --save
```

> If you are using Windows, you might get following exception during this installation: "Error: EPERM: operation not permitted,...". To solve the issue, please re-open your console application using administrative permissions, by right clicking the short-cut and selecting "Run as administrator". This is due permission denied while performing file rename as part of the npm package installation.

## Step 4: Add the DocumentCard component
Now that we have the fabric react components installed, lets go and add the component in our web part. 

Open `DocumentCardExample.tsx` from `src\webparts\components\documentCardExample` folder. 

Add the following `import` statement to to the top of the file to import fabric react components that we want to use.

```ts
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
```

In this example, we will use the DocumentCard component.

Delete the current `render` method and add the following updated `render` method:

```ts
public render() {
  let previewProps: IDocumentCardPreviewProps = {
    previewImages: [
      {
        previewImageSrc: require('document-preview.png'),
        iconSrc: require('icon-ppt.png'),
        width: 318,
        height: 196,
        accentColor: '#ce4b1f'
      }
    ],
  };

  return (
      <DocumentCard onClickHref='http://bing.com'>
        <DocumentCardPreview { ...previewProps } />
        <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx'/>
        <DocumentCardActivity
          activity='Created Feb 23, 2016'
          people={
            [
              { name: 'Kat Larrson', profileImageSrc: require('avatar-kat.png') }
            ]
          }
        />
      </DocumentCard>
  );
}
```

Save the file.

As you can see, in the code:
* We use the DocumentCard component with some extra sections, that is:
   * DocumentCardPreview
   * DocumentCardTitle
   * DocumentCardActivity
* We defined a property `previewProps` to hold some of the properties that we want the DocumentCardPreview to behave

Notice the use of relative path with a `require` statement to load images. This currently uses webpack public path plugin and hence you need to input the file's relative path from your source file/folder to the `lib` folder. This should be same as from your current working source location.

Open `DocumentCardExampleWebPart.ts` from `src\webparts\documentCardExample` folder. 

Add the following code at the top of the file to require the webpack public path plugin.

```ts
require('set-webpack-public-path!');
```

>NOTE: Including and referencing assets like images will be improved post Developer Preview builds. This is the current state which requires the public path plugin.

Save the file.

## Step 5: Copy the image assets
Copy the following images from GitHub to `src\webparts\documentCardExample` folder.
* [avatar-kat.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/avatar-kat.png)
* [icon-ppt.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/icon-ppt.png)
* [document-preview.png](https://github.com/SharePoint/sp-dev-docs/tree/master/assets/document-preview.png)

## Step 6: Preview the web part in workbench
Switch to the console and type the following to preview your web part in workbench:

```
gulp serve
```

In the toolbox, select your `DocumentCardExample` web part to add:

![DocumentBaseCard fabric component example](./images/fabric-components-doc-card-view-ex.png)

