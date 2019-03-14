---
title: Building solutions with the library component type in SharePoint Framework
description: Building solutions with the library component type in SharePoint Framework
ms.date: 03/14/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Building solutions with the library component type in SharePoint Framework 

> [!IMPORTANT]
> The library component type capability is currently in preview.

## How to create a 3rd party SPFx library
1. Using the instructions [here](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment), set up the dev environment.
1. Create a new project directory in your favorite location
 
    ```
    md corporate-library
    ```
 
1. Go to the project directory

    ```
    cd corporate-library
    ```
 
1. Create a new library by running the **beta** bits from the Yeoman SharePoint Generator

    ```
    yo @microsoft/sharepoint --plusbeta
    ```
 
1. When prompted:

    - Accept the default **corporate-library** as your solution name, and then select Enter.
    - Select **SharePoint Online only (latest)**, and select Enter.
    - Select **Use the current folder** for where to place the files.
    - Select **Y** to allow solution to be deployed to all sites immediately.
    - Select **N** on the question if solution contains unique permissions.
    - Select **Library** as the client-side component type to be created.
    - The next set of prompts ask for specific information about your library:
    - Change the default Library name to **CorporateLibrary** as your library name, and then select Enter.
    - Accept the default **CorporateLibrary description** as your library description, and then select Enter.
 
1. Once the project is scaffolded, you will see the library created with an `index.ts` file containing an export from the `CorporateLibrary` created.
 
1. Open the solution in your favorite editor and navigate to ```src\corporateLibrary\CorporateLibraryLibrary.ts```

1. You will notice that a default method, ```name()``` has been created. Rename this method as follows:

    ```typescript
    public getCurrentTime(): string {
        return 'The current time as returned from the corporate library is ' + new Date().toTimeString();
    }
    ```
1. Run `gulp` on the command prompt to see everything builds fine.

## How to consume a 3rd party SPFx library (for local testing)
1. Run `npm link` from the root directory of library solution. In this case it would be from the **```corporate-library```** folder.
 
1. This will create a local npm link to the library with the name which is provided in the ```package.json```.
 
1. Create a web part project in a **separate project folder, so not in the library project folder structure**, following the instructions from [here](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/build-a-hello-world-web-part#to-create-a-new-web-part-project). Name your web part 'CorporateWebPart'
 
1. From the root of the new web part folder, run the command ```npm link corporate-library```
 
1. This will create a symbolic link to that locally built library in to the web part and will make it available to your web part.
 
1. Open the web part solution in your preferred editor and navigate to `src\webparts\corporateWebPart\CorporateWebPartWebPart.ts`

1. Add an import to refer to your library:

    ```
    import * as myLibrary from 'corporate-library';
    ```

1. Change the ```render``` method as follows:

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

    Notice that we are creating a new instance of the library, and then refer to the ```getCurrentTime``` method to retrieve the current time string from the library.
    
1. Test your webpart by launching the local workbench and add the webpart to the page:

    ```
    gulp serve
    ```

## How to deploy and consume a 3rd party SPFx library from tenant app catalog
1. Navigate to the ```corporate-library``` root folder and bundle and package the solution:

    ```
    gulp bundle --ship
    gulp package-solution --ship
    ```
   
    This will build any local changes made and package the solution into an _sppkg_ file which is located in the _sharepoint\solution_ folder.
 
1. Deploy this package in the tenant app catalog and make it tenant wide deployed by checking the ```Make this solution available to all sites in the organization``` option.
 
1. Navigate to the web part solution folder, and open the ```package.json``` file in the root of that folder.

1. Add an entry to reflect the library entry and its version to the ```dependencies``` section (you can find this in the _package.json_ file of the library solution your created earlier) as follows:

    ```json
    "dependencies": {
        "corporate-library": "0.0.1", // here we added the reference to the library
        "@microsoft/sp-core-library": "1.8.0-prbeta.1",
        "@types/webpack-env": "1.13.1",
        "@types/es6-promise": "0.0.33"
    },
    ```

    > [!NOTE]
    > ```npm install``` will throw an error if you create a web part and you just added a reference to ```package.json``` and do not create a local reference using ```npm link```. If you have created a link using ```npm link``` and run ```npm install``` you will not receive an error during ```npm install``` but the symbolic link will be removed. If you want to run ```npm install``` you will have to temporarily remove the reference to the corporate library and re-establish the reference by running ```npm link corporate-library``` and update the reference in ```package.json```. 
 
1. Build the web part:

    ```
    gulp bundle --ship
    gulp package-solution --ship
    ```
 
1. Deploy the web part solution to the tenant app catalog.
 
1. Add the newly added web part to a page and notice that the library is automatically made available to the web part the web part functions.
 
1. Making any changes to the library, and publishing the library to the app catalog again will automatically update the web part without the need to rebuild/republish the web part.

## See also

- [Using library component type in SharePoint Framework](./library-component-overview.md)