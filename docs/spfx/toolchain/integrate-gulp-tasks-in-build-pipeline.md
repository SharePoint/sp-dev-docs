---
title: Integrate gulp tasks in SharePoint Framework toolchain
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Integrate gulp tasks in SharePoint Framework toolchain

SharePoint client-side development tools use [gulp](http://gulpjs.com/) as the build process task runner to:

* Bundle and minify JavaScript and CSS files.
* Run tools to call the bundling and minification tasks before each build.
* Compile LESS or SASS files to CSS.
* Compile TypeScript files to JavaScript.

One common task you would want to add to the SharePoint Framework toolchain is to integrate your custom gulp tasks in the build pipeline.

## Gulp tasks
Normally gulp tasks are defined in the `gulpfile.js` as:

```js
gulp.task('somename', function() {
  // Do stuff
});
```

When working with the SharePoint Framework toolchain, it is necessary to define your tasks in the framework's build pipeline. Once defined and registered with the pipeline, the task will be added to the toolchain.

SharePoint Framework uses a [common build toolchain](sharepoint-framework-toolchain.md#common-build-tool-packages) which consists of a set of npm packages that share common build tasks. And hence, the default tasks are defined in the common package as opposed to your client-side project's `gulpfile.js`. To see the available tasks, you can execute the following command in a console within your project directory:

```
gulp --tasks
```

The command above will list all the available tasks.

![Available gulp tasks](../../images/gulp-tasks-available.png)

## Custom gulp tasks
To add your custom tasks, you will define the custom tasks in the `gulpfile.js`. Open the `gulpfile.js` in your code editor. The default code initializes the SharePoint Framework toolchain and the global `gulp` instance for the toolchain. Any custom tasks added should be defined before initializing the global `gulp` instance.

### Add your custom task
To add your custom gulp task, you will add a new sub task to the SharePoint Framework build pipeline using the [`build.subTask`](https://github.com/Microsoft/gulp-core-build#defining-a-custom-task) function:

```js
let helloWorldSubtask = build.subTask('log-hello-world-subtask', function(gulp, buildOptions, done) {
  this.log('Hello, World!');   
  // use functions from gulp task here  
});
```

In the case of a stream, you will return the stream:

```js
let helloWorldSubtask = build.subTask('log-hello-world-subtask', function(gulp, buildOptions, done) {
  return gulp.src('images/*.png')
             .pipe(gulp.dest('public'));
});
```

### Register your task with gulp command line
Once the custom task is defined, you can then register this custom task with the gulp command line using the `build.task` function:

```js
// Register the task with gulp command line
let helloWorldTask = build.task('hello-world', helloWorldSubtask);
```

>Note: Any custom tasks added should be defined before initializing the global `gulp` instance, that is before the following line of code: `build.initialize(gulp);`

Now you can execute your custom command in the command line as follows:

```js
gulp hello-world
```

>Note: You cannot execute the sub task registered using the `build.subTask` function directly from the command line. You can only execute the task registered using the `build.task` function.

### Execute your custom task before or after available tasks
You can also add this custom task to be executed before or after certain available gulp tasks. The following gulp tasks allow you to inject your custom task before or after task:

- Generic build task (that consists all the available tasks)
- TypeScript task

The SharePoint Framework tasks are available in the default build rig. The build rig is a collection of tasks defined for a specific purpose. In our case, building client-side packages. You can access this default rig using the `build.rig` object and get access to the pre and post task functions:
 
```js
//execute before the typescript subtask
build.rig.addPreBuildTask(helloWorldTask);

// execute after TypeScript task
build.rig.addPostTypescriptTask(helloWorldTask);

//execute after all tasks
build.rig.addPostBuildTask(helloWorldTask);
```

## Example: Custom image resize task
As an example, let's use the [image resize gulp task](https://www.npmjs.com/package/gulp-image-resize).  It's a simple task that allows you to resize images.

You can download the completed sample [here](https://aka.ms/spfx-extend-gulp-sample).

In the [image resize task's documentation](https://www.npmjs.com/package/gulp-image-resize#example), it shows how to use this custom task:

```js
var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
gulp.task('default', function () {
  gulp.src('test.png')
    .pipe(imageResize({
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});
```

We will use this information to add this task in our project using the `build.subTask` and `build.task` functions:

```js
var imageResize = require('gulp-image-resize');

let imageResizeSubTask = build.subTask('image-resize-subtask', function(gulp, buildOptions, done){
    return gulp.src('images/*.jpg')
               .pipe(imageResize({
                   width: 100,
                   height: 100,
                   crop: false                   
               }))
               .pipe(gulp.dest(path.join(buildOptions.libFolder, 'images')))
});

let imageResizeTask = build.task('resize-images', imageResizeSubTask);
```

Since we are defining the stream, we return the stream in the `build.subTask` function to the build pipeline. The build pipeline will then asynchronously execute this gulp stream. 

Now, you can execute this task from the gulp command line as follows:

```js
gulp resize-images
```

![image-resize-task](../../images/gulp-extend-image-resize-task.png)

You will also see this `resize-images` task in the available tasks for your project when you execute `gulp --tasks`:

![image-resize-task with available tasks](../../images/gulp-extend-image-resize-available-tasks.png)




