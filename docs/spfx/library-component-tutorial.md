---
title: Build solutions with the library component type in SharePoint Framework
description: Build solutions with the library component type in SharePoint Framework
ms.date: 12/13/2021
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---

# Build solutions with the library component type in SharePoint Framework

In this tutorial, you'll create a SharePoint Framework (SPFx) library component and use it within a client-side web part.

## How to create a third-party SPFx library

1. Create a new project directory in your favorite location

    ```console
    md corporate-library
    ```

1. Go to the project directory

    ```console
    cd corporate-library
    ```

1. Create a new library by running the Yeoman SharePoint Generator

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted, enter the following values (*select the default option for all prompts omitted below*):

    - **Do you want to allow the tenant admin the choice of being able to deploy the solution to all sites immediately without running any feature deployment or adding apps in sites?**: Yes
    - **Which type of client-side component to create?**: Library
    - **What is your Library name?**: CorporateLibrary
    - **What is your Library description?**: CorporateLibrary description

1. Once the project is scaffolded, you'll see the library created with an **index.ts** file containing an export from the `CorporateLibrary` created.
1. Open the solution in your favorite editor and navigate to **src/corporateLibrary/CorporateLibraryLibrary.ts**
1. You'll notice that a default method, `name()` has been created. Rename this method as follows:

    ```typescript
    public getCurrentTime(): string {
      return 'The current time as returned from the corporate library is ' + new Date().toTimeString();
    }
    ```

1. Run `gulp` on the command prompt to see everything builds fine.

## How to consume a third-party SPFx library (for local testing)

1. Run `gulp bundle --ship` from the root directory of library solution. a simple `gulp build` not work.
1. Run `npm link` from the root directory of library solution. In this case, it would be from the **corporate-library** folder.
1. Right after creating the symbolic link to your new SPFx library component, don't forget to run at least once `gulp build`. Compile your library component at least once in order to be able to import it as a module into a different project. Remember that the **package.json** says that `"main": "lib/index.js"`, so that location needs to exist before any **import** attempt.
1. This will create a local npm link to the library with the name, which is provided in the **package.json**.
1. Create a web part project in a **separate project folder, so not in the library project folder structure**, following the instructions from [here](/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part#to-create-a-new-web-part-project). Name your web part **CorporateWebPart**.
1. From the root of the new web part folder, run the command `npm link corporate-library`
1. This will create a symbolic link to that locally built library in to the web part and will make it available to your web part.
1. Open the web part solution in your preferred editor and navigate to **src/webparts/corporateWebPart/CorporateWebPartWebPart.ts**
1. Add an import to refer to your library:

    ```typescript
    import * as myLibrary from 'corporate-library';
    ```

1. Change the `render()` method as follows:

    ```typescript
    public render(): void {
      const myInstance = new myLibrary.CorporateLibraryLibrary();

      this.domElement.innerHTML = `
      <div class="${ styles.corporateWebPart }">
          <div class="${ styles.container }">
          <div class="${ styles.row }">
              <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p>${myInstance.getCurrentTime()}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                  <span class="${ styles.label }">Learn more</span>
              </a>
              </div>
          </div>
          </div>
      </div>`;
    }
    ```

    Notice that we're creating a new instance of the library, and then refer to the `getCurrentTime()` method to retrieve the current time string from the library.

1. Test your web part by launching the local workbench and add the web part to the page:

    ```console
    gulp serve
    ```

## How to deploy and consume a third-party SPFx library from tenant App Catalog

1. Navigate to the **corporate-library** root folder to bundle and package the solution:

    ```console
    gulp bundle --ship
    gulp package-solution --ship
    ```

    This will build any local changes made and package the solution into an **\*.sppkg** file in the **sharepoint/solution** folder.

1. Deploy this package in the tenant App Catalog and make it tenant wide deployed by checking the **Make this solution available to all sites in the organization** option.
1. Navigate to the web part solution folder, and open the **./package.json** file.
1. Add an entry to reflect the library entry and its version to the `dependencies` section (you can find this in the **package.json** file of the library solution you're created earlier) as follows:

    ```json
    "dependencies": {
      "corporate-library": "0.0.1", // here we added the reference to the library
      "@microsoft/sp-core-library": "1.9.0",
      "@types/webpack-env": "1.13.1",
      "@types/es6-promise": "0.0.33"
    },
    ```

    > [!NOTE]
    > **npm install** will throw an error if you create a web part and you just added a reference to **package.json** and don't create a local reference using **npm link**. If you have created a link using **npm link** and run **npm install**, you will not receive an error during **npm install** but the symbolic link will be removed. If you want to run **npm install**, you will have to temporarily remove the reference to the corporate library and re-establish the reference by running **npm link corporate-library** and update the reference in **package.json**.

1. Build the web part:

    ```console
    gulp bundle --ship
    gulp package-solution --ship
    ```

1. Deploy the web part solution to the tenant App Catalog.
1. Add the newly added web part to a page and notice that the library is automatically made available to the web part functions.
1. Making any changes to the library, and publishing the library to the App Catalog again will automatically update the web part without the need to rebuild/republish the web part.

## How to unlink SPFx library

To unlink a SPFx library that was symlinked during development in your SPFx project, navigate to SPFx project root folder and run the command.

```console
npm unlink corporate-library
```

To check the folder location of SPFx library.

```console
npm ls -g 'corporate-library'
```

To remove local npm link to the library, navigate to the SPFx library root folder and run the command.

```console
npm unlink
```

## See also

- [Using library component type in SharePoint Framework](./library-component-overview.md)
