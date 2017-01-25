<<<<<<< Updated upstream
# Extending Webpack in the build pipeline used in SPFX

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.

As part of the SPFX tooling, we have tried to stick closely to using common open source tooling.  We've wrapped some of it up into a build pipeline that we use internally, and have [published it to GitHub] (https://github.com/Microsoft/web-build-tools).  One common request that has been made is to extend the [Webpack](https://webpack.github.io/) step of the build.

## What is a Webpack loader
=======
# Extending webpack in the SharePoint Framework build pipeline
The SharePoint Framework toolchain is the set of build tools, framework packages, and other items that manage building and deploying your client side projects. SharePoint Framework uses a common set of [open source build tools](https://github.com/Microsoft/web-build-tools) to perform build tasks such as compiling TypeScript code to JavaScript, converting SCSS to CSS etc.,.  One common request that has been made is to extend the [Webpack](https://webpack.github.io/) step of the build.

## Using webpack loaders
>>>>>>> Stashed changes
There are many cases where one would like to import and utilize a non-JavaScript resource during development, typically this is done with images or templates. A [Webpack loader](https://webpack.github.io/docs/loaders.html) will convert the resource into something that can be utilized by your JS application. For example, a Markdown template may be compiled and converted to a text string, while a image resource may be converted to Base64 or the `require()` statement might return a path to that particular file.

There are a number of useful loaders, several of which are already used by the standard SPFx webpack configuration:
* `html-loader`
* `json-loader`
* `loader-load-themed-styles`

Writing loaders is a straightforward process which is [documented here](https://webpack.github.io/docs/loaders.html#writing-a-loader).

> You can find more details on the Webpack loader from [webpack documentation](https://webpack.github.io/docs/loaders.html)

## Using the Markdown-loader package
As an example, let's use the [markdown-loader package](https://www.npmjs.com/package/markdown-loader).  It's a loader which allows you to reference an .md file and output it as HTML.

### Step 1 - Install the package
Let's reference markdown-loader in our project.
`npm i --save markdown-loader `

### Step 2 - Configure Webpack 
In the documentation of markdown-loader, it shows how to extend the Webpack configuration. 

```JavaScript
{
  module: {
    loaders: [
      { test: /\.md$/, loader: "html!markdown" }
    ]
  }
}
```

 Here's how to do that in the SPFX toolchain:

Edit the `gulpfile.js` and add the following code right before `build.initialize(gulp);`:

```javascript
build.configureWebpack.mergeConfig({ 
  additionalConfiguration: (generatedConfiguration) => { 
    generatedConfiguration.module.loaders.push([ 
      { test: /\.md$/, loader: "html!markdown" } 
    ]); 

    return generatedConfiguration; 
  } 
});
```

Notice that we simply push the loader config onto the list of existing loaders in the toolchain. It's important to ensure that your `additionalConfiguration` function ends with the `return generatedConfiguration` line, as this function allows you to completely replace the Webpack configuration. Completely replacing the Webpack configuration is not recommended except in very advanced scenarios, however.

### Step 3 - Update your code
Create a file (say `readme.md`) in your `src/webparts/helloworld` folder (or whatever your folder name is) with some Markdown in it.

Next, add the following `require()` line at the top of you `HelloWorldWebPart.ts` file after your imports:


```TypeScript
const html : string = require("../../../src/webparts/helloworld/readme.md");
```

Then reference it in your render method:

``` TypeScript
public render(): void {
  this.domElement.innerHTML = html;
}
```


### Step 4 - Go!
run `gulp serve` and see your new part in action.

### Step 5 - One more thing
So that require statement is pretty ugly. Webpack will look in the `lib` folder for the file, but by default `.md` files don't get copied to the `lib` folder, meaning we need to create a rather ugly relative path. There is a better way though.

Create a file `copy-static-assets.json` in the `config` directory to tell the build system to copy some additional files from `src` to `lib`. By default, this build task copies files with extensions that the default SPFx Webpack configuration understands (like `png` and `json`), so we just need to tell it to also copy `md` files.

```JSON
{
  "includeExtensions": [
    "md"
  ]
}
```

This says "copy everything in the source directory with a .md extension to the lib directory, and keep the same directory structure."

Next, clean up your require statement to look like:

```TypeScript
const html: string = require("./readme.md");
```

`ctrl+c` any running `gulp serve` task and rebuild (`gulp serve`) your project again. You should see a `readme.md` file in your lib directory under `webparts\helloworld`.