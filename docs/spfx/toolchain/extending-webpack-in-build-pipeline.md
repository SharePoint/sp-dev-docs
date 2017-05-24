# Extending webpack in the SharePoint Framework toolchain

[Webpack](https://webpack.github.io/) is a JavaScript module bundler that takes your JavaScript files and its dependencies and generates one or more JavaScript bundles so you can load different bundles for different scenarios.

The framework tool chain uses CommonJS for bundling. This enables you to define modules and where you want to use them. The tool chain also uses SystemJS, a universal module loader, to load your modules. This helps you to scope your web parts by making sure that each web part is executed in its own namespace.

One common task you would want to add to the SharePoint Framework toolchain is to extend the webpack configuration with custom loaders and plugins.

## Using webpack loaders
There are many cases where one would like to import and utilize a non-JavaScript resource during development, typically this is done with images or templates. A [webpack loader](https://webpack.github.io/docs/loaders.html) will convert the resource into something that can be utilized by your JavaScript application. For example, a Markdown template may be compiled and converted to a text string, while a image resource may be converted to Base64 image.

There are a number of useful loaders, several of which are already used by the standard SharePoint Framework webpack configuration, such as:

- html-loader
- json-loader
- loader-load-themed-styles

Extending the framework webpack configuration with custom loaders is a straightforward process which is documented [here in the webpack documentation](https://webpack.github.io/docs/loaders.html#writing-a-loader).

> You can find more details on the loaders from [webpack loaders documentation](https://webpack.github.io/docs/loaders.html)

## Example: Using the markdown-loader package
As an example, let's use the [markdown-loader package](https://www.npmjs.com/package/markdown-loader).  It's a loader which allows you to reference an `.md` file and output it as HTML string.

You can download the completed sample [here](https://aka.ms/spfx-extend-webpack-sample).

### Step 1 - Install the package
Let's reference markdown-loader in our project.

```
npm i --save markdown-loader 
```

### Step 2 - Configure Webpack 
Now that we have the package installed, lets now configure the SharePoint Framework webpack configuration to include the markdown-loader. 

In the [documentation of markdown-loader](https://github.com/peerigon/markdown-loader), it shows how to extend the webpack configuration to include the loader:

```JavaScript
{
  module: {
    loaders: [
      { test: /\.md$/, loader: "html!markdown" }
    ]
  }
}
```

We will use this information to configure it in our project. 

In order to add this custom loader into the SharePoint Framework webpack configuration, we will need to instruct the build task to configure webpack. The build tasks are defined in the gulp file - `gulpfile.js` - which is located at the root of your project. SharePoint Framework uses [gulp](http://gulpjs.com/) as its task runner and hence we use it to define and register custom tasks with the gulp task runner.

Edit the `gulpfile.js` and add the following code right before `build.initialize(gulp);`:

```JavaScript 
build.configureWebpack.mergeConfig({ 
  additionalConfiguration: (generatedConfiguration) => { 
    generatedConfiguration.module.loaders.push([ 
      { test: /\.md$/, loader: "html!markdown" } 
    ]); 

    return generatedConfiguration; 
  } 
});
```

Notice that we simply push the loader config onto the list of existing loaders in the toolchain. It's important to ensure that your `additionalConfiguration` function ends with the `return generatedConfiguration` line, as this ensures that it  returns the loader configuration to the toolchain. 

> While you are able to completely replace the toolchain's default webpack configuration using this approach, to get the maximum benefit with performance and optimization, it is not recommended to do so unless stated otherwise in the documentation. 

### Step 3 - Update your code
Now that we have configured the loader, lets update our code and add few files to test the scenario. 

Create a file `my-markdown.md` in the `src` directory of your project folder with some Markdown text in it.

```md
#Hello Markdown

*Markdown* is a simple markup format to write content. 

You can also format text as **bold** or *italics* or ***bold italics***  
```

When you build the project, the webpack markdown-loader will convert this markdown text to a HTML string. To use this HTML string in any of your source `*.ts` files, add the following `require()` line at the top of the file after your imports, for example:


```TypeScript
const strMarkdownString = require("../../../../src/readme.md") as string;
```

Webpack by default will look in the `lib` folder for the file, but by default `.md` files don't get copied to the `lib` folder, meaning we need to create a rather lengthy relative path. We can control this setting by defining a config file to tell the toolchain to copy `md` files to the lib folder. 

Create a file `copy-static-assets.json` in the `config` directory to tell the build system to copy some additional files from `src` to `lib`. By default, this build task copies files with extensions that the default toolchain webpack configuration understands (like `png` and `json`), so we just need to tell it to also copy `md` files.

```JSON
{
  "includeExtensions": [
    "md"
  ]
}
```

Now instead of using the relative path, you can use the file path in your `require` statement, for example:

```TypeScript
const strMarkdownString = require("../../readme.md") as string;
```
 
You can then reference this string in your code, for example:

``` TypeScript
public render(): void {
  this.domElement.innerHTML = strMarkdownString;
}
```

### Step 4 - Build and test your code
To build and test your code, execute the following command in a console in the root of your project directory:

```
gulp serve
```