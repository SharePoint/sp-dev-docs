---
title: Building solutions with the library component type in SharePoint Framework
description: Building solutions with the library component type in SharePoint Framework
ms.date: 03/14/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Building solutions with the library component type in SharePoint Framework 

## How to create a 3rd party SPFx library

1. Using the instructions on [how to set up the dev environment](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment).
1. Create a new project directory in your favorite location
 
    ```
    md corporate-library
    ```
 
1. Go to the project directory

    ```
    cd corporate-library
    ```
 
1. Create a new library by running the Yeoman SharePoint Generator

    ```
    yo @microsoft/sharepoint
    ```
 
1. When prompted:

    - Accept the default **corporate-library** as your solution name, and then select Enter.
    - Select **SharePoint Online only (latest)**, and select Enter.
    - Select **Use the current folder** for where to place the files.
    - Select **Y** to allow the solution to be deployed to all sites immediately.
    - Select **N** on the question if the solution contains unique permissions.
    - Select **Library** as the client-side component type to be created.
    - The next set of prompts ask for specific information about your library:
    - Change the default Library name to **CorporateLibrary** as your library name, and then select Enter.
    - Accept the default **CorporateLibrary description** as your library description, and then select Enter.
 
1. Once the project is scaffolded, you will see the library created with an `index.ts` file containing an export from the `CorporateLibrary` created.
 
1. Open the solution in your favorite editor and navigate to `src\corporateLibrary\CorporateLibraryLibrary.ts`

1. You will notice that a default method, `name()` exist in the code. Rename this method as follows:

    ```typescript
    public getCurrentTime(): string {
        return 'The current time as returned from the corporate library is ' + new Date().toTimeString();
    }
    ```
1. Run `gulp` on the command prompt to see everything builds fine.

## How to consume a 3rd party SPFx library (for local testing)
1. Create a web part project in a **separate project folder, so not in the library project folder structure**, following the instructions on [how to create a new web part project](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part#to-create-a-new-web-part-project). Name your web part **CorporateWebPart**. Like the library before the web part also need to target to **SharePoint Online only (latest)**.
 
1. From the root of the new web part folder, run the command `npm install <path to library component>`. In this case, the command is `npm install ..\corporate-library --save-dev`
 
1. A symbolic link to the library component project gets created in your `node_modules` folder and adds the following entry in the `package.json` file.

    ```
      "devDependencies": {
        ...
        "ajv": "~5.2.2",
        "corporate-library": "file:../corporate-library",
        "gulp": "~3.9.1"
        ...
      }
    ```

> [!NOTE]
> This procedure work when the **corporate-library** and **corporate-webpart** exist in the same repository. `npm install` install offers more options to integrate library components like this. Git and other Repositories are also an option. For more information, look at the [npm install documentation](https://docs.npmjs.com/cli/install).
 
1. Open the web part solution in your preferred editor and navigate to **src\webparts\corporateWebPart\CorporateWebPartWebPart.ts**

1. Add an import to refer to your library:

    ```
    import * as myLibrary from 'corporate-library';
    ```

1. Change the `render` method as follows:

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

    Notice that we are creating a new instance of the library, and then refer to the `getCurrentTime` method to retrieve the current time string from the library.
    
1. Test your webpart by launching the local workbench and add the webpart to the page:

    ```
    gulp serve
    ```

## How to deploy and consume a 3rd party SPFx library from the tenant app catalog

1. Navigate to the **corporate-library** root folder and bundle and package the solution:

    ```
    gulp bundle --ship
    gulp package-solution --ship
    ```
   
    This will build any local changes made and package the solution into an _sppkg_ file which is located in the _sharepoint\solution_ folder.
 
1. Deploy this package in the tenant app catalog and make it tenant wide deployed by checking the **Make this solution available to all sites in the organization** option.
 
1. Navigate to the web part solution folder, and open the `package.json` file in the root of that folder.
 
1. Build the web part:

    ```
    gulp bundle --ship
    gulp package-solution --ship
    ```
 
1. Deploy the web part solution to the tenant app catalog.
 
1. Add the newly added web part to a page and notice that the library is automatically made available to the web part functions.
 
1. Making any changes to the library, and publishing the library to the app catalog again will automatically update the web part without the need to rebuild/republish the web part.

## See also

- [Using library component type in SharePoint Framework](./library-component-overview.md)
- [npm install documentation](https://docs.npmjs.com/cli/install)
- [Tips and Tricks working with SPFx library components](https://n8d.at/blog/tips-and-tricks-working-with-spfx-library-components)
