# Team-based development on the SharePoint Framework

SharePoint Framework is a new development model for building SharePoint customizations. Unlike other SharePoint development models available to date, the SharePoint Framework focuses on client-side development and is built on top of popular open source tools such as gulp and webpack. One big benefit of this change is that developers on any platform can build SharePoint customizations.

SharePoint Framework is a development model, and despite the differences in the underlying technology, the same concepts apply when using it for building solutions, as to other development models SharePoint developers used in the past. Developers use the SharePoint Framework toolchain to build and test their solutions and once ready, they hand over the solution package to be deployed on the SharePoint tenant for further testing and release.

SharePoint Framework consists of a few different packages. A set of these packages, each in its own specific version, make up a version of the SharePoint Framework. For a project to target a specific version of the SharePoint Framework it has to reference all the different packages in the correct versions. When scaffolding new projects, the SharePoint Framework Yeoman generator automatically adds the necessary references to the package from the corresponding version of the SharePoint Framework. But when upgrading the project to a newer version of the SharePoint Framework developers have to pay extra attention to correctly update version numbers of the SharePoint Framework packages.

## Preparing the development environment

In order to build SharePoint Framework solutions developers need specific tools on the development machines. Comparing to other SharePoint development models, the SharePoint Framework is less restrictive and allows developers to use the tools that make them the most productive going even as far as choosing the operating system.

There are a few different ways in which developers can configure their development environment. Each of them has different advantages and it's important that developer teams have a good understanding of the different options.

### SharePoint Framework toolchain

Building SharePoint Framework solutions requires developers to use a certain set of tools. Following list covers the basic set of tools required on every SharePoint Framework development environment.

#### Node.js v4 LTS

SharePoint Framework requires Node.js v4 LTS to be installed on the developer machine. Node.js is used as the runtime for design-time tools used to build and package the project. While other Node.js versions might work as well, v4 is the only officially supported version. Node.js is installed globally on the developer machine and there are solutions available to support running multiple versions of Node.js side-by-side if necessary.

#### Npm

Npm is the equivalent of NuGet in .NET projects: it allows developers to acquire and install packages for use in SharePoint Framework projects. Npm is also used to install the SharePoint Framework toolchain. Typically developers will use the latest version of npm and install it globally on their machine. Npm itself is a Node.js package so if you're running multiple versions of Node.js side-by-side each will have its own version of npm installed.

#### gulp

gulp is the equivalent of MSBuild in .NET project and is responsible for running tasks such as building or packaging a SharePoint Framework project. gulp is distributed as a Node.js package and is typically installed globally using npm.

#### Yeoman and SharePoint Framework Yeoman generator

Using Yeoman and the SharePoint Framework Yeoman generator developers create new SharePoint Framework projects. Both Yeoman and its generators are distributed as Node.js packages and are typically installed using npm as global packages. The benefit of a global installation is that developers can install Yeoman and the generators once and use them to easily create new projects.

The SharePoint Framework Yeoman generator is tied to a specific version of the SharePoint Framework. Projects scaffolded using the generator, reference the specific versions of the SharePoint Framework packages and the generated web parts reference the specific pieces of the framework. The SharePoint Framework Yeoman generator is used for creating new projects but also for adding web parts to existing projects. If you install it globally and would have to add a new web part to an existing project created in the past, the newly created web part might be inconsistent with the rest of the project which might even lead to build errors. There are a number of ways in which you can work around this limitation which this article discusses later on.

#### TypeScript

SharePoint Framework uses TypeScript to help developers be more productive by writing better code and catching errors already during development. SharePoint Framework projects ship with their own version of TypeScript which is used in the build process and which doesn't require developers to install it separately.

### Building a SharePoint Framework development environment

In the past SharePoint developers typically used virtual machines as their development environments. Virtual machines allowed them to ensure that the solution they were building would work on the environment used by that particular organization. In their virtual machines developers would install SharePoint and patch it to the same level as the production environment used by the particular organization. In some cases they would install additional software to match the target environment where the solution would run as closely as possible. This approach allowed developers to catch any errors caused by the difference in environments earlier at the cost of complexity and managing the different environments.

Moving to developing solutions for the cloud solved these issues only partly. While developers no longer needed to run a SharePoint Farm on their development machines, they had to take into account how their solution would be hosted and how it would communicate with SharePoint Online.

As SharePoint Framework focuses on client-side development it no longer requires SharePoint to be installed on the development machines. With a few exceptions, all dependencies to the framework and other packages are specified in the project and contained in the project folder. As the SharePoint Framework has its origins in the cloud and evolves frequently, developers must ensure that they are using the correct version of the toolchain corresponding to their SharePoint Framework project.

#### Shared or a personal development environment

SharePoint customizations range from simple scripts being added directly to the page to sophisticated solutions deployed as solution packages. SharePoint Framework is a development model targeting the structured and repeatable deployment model of SharePoint customizations. When building SharePoint Framework solutions each developer on the team uses his own development environment and shares the source code of the project with other developers on the team through a source control system. This way developers can work on the same project simultaneously and test their solution without affecting each others productivity.

In the past it was challenging for many organizations to justify providing SharePoint developers with very powerful development machines and in some cases multiple developers had to share the same machine at the cost of productivity. With SharePoint Framework developers can use market-standard developer machines to build SharePoint customizations.

#### Developing on the host

Probably the easiest option to setup a development environment for SharePoint Framework projects is to install all the tools directly on the host machine. If your team is working only on SharePoint Framework projects, then they can install Node.js v4 LTS on their machines. If they work on other Node.js projects as well then they could use third party solutions such as [nvm](https://github.com/creationix/nvm) to run multiple versions of Node.js side-by-side.

Following the tools required by the SharePoint Framework toolchain, developers would install Yeoman and the SharePoint Framework Yeoman generator. Typically both these tools are installed globally. Given however, that the SharePoint Framework Yeoman generator is tied to a specific version of the SharePoint Framework and developers might need to work with projects created using a different version, they would have to uninstall and install the version of the generator specific for the particular project they are working on at the moment. A more viable approach would be to install both Yeoman and the SharePoint Framework Yeoman generator locally in the given project. While it introduces some overhead it helps developers ensure that should they need to add new elements to the project in the future they would be compatible with the rest of the project.

Big benefit of developing on the host is that developers can configure their machine to their preferences once and use it across all projects. Also, as the software executes on the host, it has direct access to the CPU, memory and disk I/O without a virtualization layer in between which leads to a better performance than when running the same software virtualized.

#### Developing in a virtual machine

In the past the most common approach amongst SharePoint developers was to use virtual machines as their primary development environment for building SharePoint solutions. Using virtual machines developers could accommodate the different requirements for the different projects.

When building solutions on the SharePoint Framework organizations can use the same benefits as they used with building SharePoint solutions in the past. Using virtual machines they can isolate the development software from the host operating system which is a common requirement particularly in large organizations. By creating a separate virtual machine for each project developers can ensure that the toolchain they use is compatible with the project even if they need to pick up the particular project in the future.

Using virtual machines is not without drawbacks. Virtual machines are big and require developers to use computers powerful enough to run them with acceptable performance to allow developers to be productive. Additionally, particularly over longer periods of time, developers have to keep the operating system up-to-date and ensure they run all the necessary security updates. As developers work in a virtual machine they either have to spend some time at the beginning of a new project to configure the standard virtual machine to their preferences or have to give in to the standard setup at the cost of their productivity. Because virtual machines run a complete operating system with all its components it's much harder to ensure that all virtual machines used by all developers on the team are consistent.

#### Developing using Docker

An interesting middle ground between developing on the host and in a virtual machine is using Docker. Docker is a software virtualization technology similar to virtual machines with a few big differences. The most important benefits of using Docker images over virtual machines are that Docker images are easier to create, maintain and distribute, they are more lightweight (few hundred MBs comparing to tens of GBs disk space required for virtual machines) and they allow developers to use the tools and preferences they already have installed and configured on their host machine.

Similarly to virtual machines, Docker containers run a virtualized instance of an operating system (most commonly based on Linux). All software installed in the image used to create the container runs isolated inside that container and has only access to the portion of the host file system explicitly shared with the container. As all changes to the filesystem inside a Docker container are discarded once the container is closed, developers share folders from their host to store the source code.

Read more about [using Docker for building SharePoint Framework solutions](https://www.spcaf.com/blog/try-sharepoint-framework-without-installing/).

## Development workflow in SharePoint Framework projects

SharePoint Framework is based on open source toolchain and follows the general development workflow present in other projects built on the same stack. Following is a description of how that workflow looks like in a typical SharePoint Framework project.

### Create new SharePoint Framework project

When building SharePoint customizations using the SharePoint Framework the first step is to scaffold new SharePoint Framework project. This is done using the SharePoint Framework Yeoman generator. The generator will prompt you to answer a few questions regarding the name of the project or its location. It will also allow you to create the first web part. The important thing to remember is, that the framework you choose to build the first web part with, will be automatically used for all other web parts you will add to the project later on. While you are free to manually change the framework yourself, the general recommendation is to use a single framework per SharePoint Framework project.

### Lock dependencies version

A new SharePoint Framework project scaffolded by the SharePoint Framework Yeoman generator has dependencies on the SharePoint Framework packages as well as other packages required for it to run correctly. As you build your web parts you might want to include additional dependencies such as Angular or jQuery. In SharePoint Framework projects dependencies are installed using npm. Each dependency is a Node.js package with a specific version. By default dependencies are referenced using a version range which is meant to help developers keep their dependencies up-to-date more easily. A consequence of this approach is that restoring dependencies for the same project at two points in time might give different results which could even lead to breaking the project.

A common solution to avoid the risk of dependencies changing during the project, in projects built on the open source toolchain, is to lock the version of all dependencies. When adding a dependency to the project developers can choose to install the dependency with a specific version rather than a version range by calling the `npm install` command with the `--save-exact` argument. This however doesn't affect the child dependencies of the particular package. To effectively lock the version of all dependencies and their children in the project, developers can use the `npm shrinkwrap` command. Once executed, it will generate a list of all dependencies and their versions at the moment of execution and record it in the **npm-shrinkwrap.json** file which should be included in the source control. When restoring dependencies npm will use the exact versions from this file rather than the latest version satisfying the particular version range.

> Note: if you have any packages installed in the **node_modules** folder that are not listed as dependencies in the **package.json** file or are not a dependency of one of the packages, you will likely see an error when generating the **npm-shrinkwrap.json** file. In this case you can either see which packages are causing the error and add them to the **packacge.json** or remove them from the **node_modules** folder, or you can delete the **node_modules** folder altogether, restore all dependencies and generate the shrinkwrap file then.

### Add the project to source control

To allow the rest of the team to work on the same project add it to the source control system that your team is using. The exact steps will differ depending on the system used by your team.

SharePoint Framework projects are scaffolded with the **.gitignore** file which describes which files should be excluded from the source control. If your team is using a source control system other than Git (such as Visual Studio Team System with Team Foundation System repositories), you should ensure that you are including the correct files from the project in the source control. Also excluding the dependencies and autogenerated files during the build process allows you to ensure that your team will work efficiently.

### Get the project from source control

The first time you will get the project from source control, you will get the project's source code but none of the SharePoint Framework libraries required to build the project. Similarly to when working with .NET projects and using NuGet packages, you have to restore the dependencies first. In SharePoint Framework projects, similarly to all other projects built on top of Node.js, you do that by executing `npm install` in the command line. npm will use the information from the **package.json** file combined with the information from the **npm-shrinkwrap.json** file and install all packages.

> Note: Typically restoring dependencies using the `npm install` command requires internet connectivity as packages are downloaded from _registry.npmjs.org_. If you experience network connectivity issues or the npmjs registry is unavailable your build will fail. There are a number of ways to mitigate this limitation. One of them is using [shrinkpack](https://github.com/JamieMason/shrinkpack) to download tarballs of all dependencies and have them stored in the source control. Shrinkpack automatically updates the npm-shrinkwrap.json file to use the local tarballs allowing for offline installation of the project's dependencies.

Some of the packages are compiled into binaries during the installation process. This compilation process is specific to the architecture and operating system. If you would for example restore dependencies in a Docker container running Linux and would then try to build the project on your Windows host you would get an error reporting the mismatch in the environment type used to build and run the binaries.

As your team develops the solution, new or updated dependencies might be added to the project. If the **package.json** file has changed since you last got the project from the source control, you will have to run `npm install` in the command line to install the missing dependencies. If you are unsure if the **package.json** file has changed, you can run `npm install` in the command line just to be sure that you have the latest dependencies, without any harm to the project.

### Add packages to your project

Using existing packages to accomplish specific tasks allows you to be more productive. npmjs.com is a public registry of packages that you can use in your project.

> Note: Since there is no formal verification process before a package is published to npmjs.com, you should carefully examine if you can use the particular package both from the contents and license point of view.

To add a package to your SharePoint Framework project execute the `npm install <package> --save` or `npm install <package> --save-dev` command in the command line, eg. `npm install angular --save`. Using the `--save` or `--save-dev` argument ensures that the package is added to the **package.json** file and other developers on your team will get it as well when restoring dependencies. Without it building the project on a machine other than your own will fail. When adding packages that are required by your solution on runtime, such as Angular or jQuery, you should use the `--save` argument. Packages that are required in the build process, such as additional gulp tasks, should be installed with the `--save-dev` argument.

When installing a package, if you don't specify a version, npm will install the latest version available in the package registry (npmjs.com by default), which usually is the version that you will want to use. One specific case when you have to specify the version of the package is when you're using **npm-shrinkwrap.json** and want to upgrade an existing package to a newer version. By default npm will install the version listed in the **npm-shrinkwrap.json** file. Specifying the version number in the `npm install` command, like `npm install angular@1.5.9 --save`, will install that package and update the version number in the **npm-shrinkwrap.json** file.

## Working with internal packages

As your team is developing client-side solutions, you will very likely build common libraries of code that you would like to reuse across all your project. In many cases such libraries contain proprietary code not shared publicly outside the organization, beyond the bundles deployed to production. When working with SharePoint Framework projects, there are a number of ways your team can leverage your internal libraries in their projects.

### Hosting private package registry

In the past, many organizations building .NET solutions hosted private NuGet repositories to benefit of the NuGet package management system for their internal packages. As SharePoint Framework uses npm for package management, organizations could similarly use a private registry for their internal packages. Packages developed internally would be published to the private registry and be used in all projects within the organization.

When using private package registries organizations can choose between different offerings hosted in the cloud or they can host their own registry on their own infrastructure.

Using a private package registry allows organizations to centrally manage common code used across the different projects. By defining a separate governance plan around contributing changes to the shared code base, organizations can ensure that the code library is of high quality and that it offers all developers benefits as intended rather than being a burden slowing projects down.

### Linking packages using npm link

An alternative to using a private registry is linking packages. While it doesn't involve setting up a registry, it requires careful coordination on all developer machines and the build server.

First, every developer on the team must get a copy of the shared package on their development machine. In the command line they have to change the working directory to the one of the shared package and then they must execute the `npm link` command. This command registers the particular package as a global package on that particular development machine.
Next, developers have to change the working directory to the directory of the project in which they would like to use the shared package. Then they install the package the same way they would install any other package by executing the `npm install <shared_package> --save` command in the command line. As the shared package is installed globally, npm will use that version as the source to install the package from. At this point, from the project point of view, the package is installed just like any other public package and developers can choose how they want to bundle the package with the project.

Linking the package must be executed on all development machines as well as on the build server. If the shared package isn't linked using the `npm link` command, restoring project dependencies will fail breaking the build.

Referencing linked packages is particularly helpful early in the project when you are developing the shared package and the project at the same time. Thanks to linking you don't need to publish new version of the package to the registry in order to use the latest code in your project. A risk worth keeping in mind is that if developers would reference a version of the shared library that they changed locally and which they haven't committed to the source control, it would break the build for the rest of the team.

### Combining private package registry and linking packages

Linking packages can be combined with a private registry. You could for example work in a way where developers reference a linked package and the build server pulls the shared library from a private registry. From the project perspective nothing changes: the package reference in the **package.json** file can be resolved both from a linked package as well as from a private registry. The only thing your team has to keep in mind is to publish the latest changes to the shared library to the private registry before executing the build.

As the code of the shared library stabilizes over time and fewer changes are needed to accommodate the needs of the specific projects, developers would be more likely to just reference the published package from the private registry rather than changing it.

## Ensuring code consistency and quality

Software development teams often struggle with maintaining consistency and high quality of their projects. Different developers have different coding styles and preferences. In every team there are more skilled individuals as well as developers who are less experienced in the particular domain. Also, many organizations or verticals have specific regulations with which the software must comply. All these challenges make it harder for developers to stay on track. Particularly when the deadline is nearby developers tend to get things done at the cost of the quality which in the long run is more harmful than not meeting the deadline.

### Choose JavaScript framework for your team and use coding standards

If your team has been building SharePoint customizations in the past, you very likely have coding standards that describe how you build customizations and which tools and libraries you use in your projects. Using coding standards allows you to eliminate the personal preferences of the individual developers from the code which makes it significantly easier to be picked up by other members of your team. Also your coding standards reflect the experience your team gathered over the years allowing you to build customizations more efficiently and of better quality.

Unlike other SharePoint customization models available to date, SharePoint Framework focuses on client-side development. While not strictly required, SharePoint Framework recommends using TypeScript to help developers write better code and catch any inconsistencies already in the build process. There are also hundreds of client-side libraries available to accomplish the same task. If your team has done client-side development in the past, you might already have preference for a particular library. If not, it would be highly beneficial for you to research a few of the most popular libraries and pick one for your team or preferably the whole organization.

By using the same library in all your projects you make it easier to onboard new team members and exchange team members between projects. As you gain more experience with client-side development, your organization will be able to benefit of it across all its projects. Standardizing your projects across the whole organization also shortens the time of delivery and lowers the costs of maintenance of your projects. New libraries are published on the internet every day and if you keep switching between the latest libraries you will find yourself working inefficiently delivering solutions of poor quality.

Choosing one of the most popular libraries allows you to reuse the knowledge and experience of other developers who have been using that library for a longer period of time and have already solved many of the issues you will likely experience yourself. Also for the most popular libraries there are coding standards available that your team could adopt. By using existing market standards for the particular library you make it easier for your organization to grow your team by hiring developers and helping them become productive faster.

For example, for building first-party solutions on the SharePoint Framework, Microsoft chose React. Also many other teams at Microsoft such as OneDrive or Delve use React in their projects. This doesn't mean that you should be using React in all your SharePoint Framework projects as well, but it proves the importance of choosing a client-side library that works for your organization. If your team has for example experience with Angular or Knockout, there is no reason why you shouldn't benefit of that experience and stay productive when building SharePoint Framework solutions.

### Enforce coding standards and policies throughout the whole lifecycle of your solution

Using coding standards offers you clear advantages, but just having coding standards doesn't mean that they are being actively used throughout the whole development and testing process of a SharePoint customization. The longer developers wait and the harder it is for your team to verify that your solution adheres to your team's coding standards and organizational policies, the more costly it will be to fix any defects discovered in the project. Following are a few means that your team should use as a part of their development process to enforce the governance plan for the SharePoint solution.

#### Linting

Linting is the process of verifying that the code meets specific rules. By default SharePoint Framework projects are built using TypeScript. On each build TSLint - the linter for TypeScript, analyzes the project against the predefined set of rules and reports any inconsistencies. Developers can choose which rules they want to enable and if necessary can build their own rules that reflect their team's or organization's guidelines.

Developers can use linting to verify not only the contents of TypeScript files. There are linters available for most popular languages such as CSS, JavaScript or Markdown, and if your team has specific guidelines for these languages it would be beneficial to implement them in a linter so that they can be validated automatically every time a developer builds the project.

#### Automated testing

Using automated tests developers can easily verify that after applying the latest changes to the project, all elements continue working as expected. As the project grows so does the importance of automated tests: with the code base expanding every change has bigger impact and risk of affecting some other pieces of code. Automated tests allow developers to verify that the solution works correctly and catch any possible issues early on.

SharePoint Framework offers standard support for the [Karma](http://karma-runner.github.io/1.0/index.html) test runner and the [Mocha](http://mochajs.org) framework that developers can use to write tests. If necessary developers can use additional building blocks provided with the SharePoint Framework such as [PhantomJS](http://phantomjs.org) to further extend the coverage of their tests. All tests in the SharePoint Framework projects can be run using the standard `gulp test` task.

#### Code analysis

Where linting is helpful to validate the syntax of the particular file, often developers need more support in order to verify that the project as a whole meets the guidelines. Generally linters focus on the code itself but miss the context of what the particular code file represents. In SharePoint Framework solutions artifacts have specific requirements, for example a web part should have a unique ID in the project. Also organizations might have other requirements such as not referencing scripts from CDN or only using a specific version of a particular library. This is where linters generally fall short and developers need other tools.

[SharePoint Code Analysis Framework](https://spcaf.com) (SPCAF) is a third part solution frequently used by SharePoint developers, administrators and employees in quality assurance and security roles to verify that SharePoint customizations meet organizational quality guidelines. SPCAF integrates with the whole application lifecycle process helping organizations lower the total cost of ownership of SharePoint customizations. SPCAF offers a set of rules that specifically target SharePoint Framework solutions.

## Upgrading SharePoint Framework projects

Deploying a SharePoint customization to production usually doesn't mean the end of its lifecycle. Frequently the requirements change or new requirements are added in both cases leading to changes in the solution. To properly update a customization previously deployed to production developers have to take a number of things into account.

### Semantic versioning (SemVer)

With a few exceptions SharePoint Framework uses semantic versioning (SemVer) for tracking version numbers. Semantic versioning is a versioning pattern widely adopted by software developers worldwide. A SemVer number consists of three numbers MAJOR.MINOR.PATCH and optional labels, eg. 1.0.1.

> Note: Currently SharePoint Frameworks supports only the usage of the three numbers without labels.

Different parts of a SemVer number are increased depending on the type of change applied to the solution:

- MAJOR, if the changes are not backwards-compatible
- MINOR, if the changes introduce new functionality that is backwards-compatible
- PATCH, if the changes are backwards-compatible bug fixes

It's important to keep in mind that SemVer is merely a contract. It's up to your team to follow it to make clear the changes in the latest release.

You can read more about semantic versioning at [http://semver.org](http://semver.org).

### Increase version number

When updating a part of a SharePoint Framework solution, developers should increase version numbers of the affected pieces to clearly denote which elements have changed and what the impact of the changes is.

#### Increase package version in package.json

SharePoint Framework package is structured like a Node.js package. Its dependencies and metadata are stored in the **package.json** file in the project folder. One of the properties in the **package.json** file is the version property that denotes the version of the whole project. Although it's purely informational and it's not used by any of the deployed artifacts, developers should increase the version number in the **package.json** every time a new release of the project is planned following the SemVer convention.

#### Increase solution package version in package-solution.json

SharePoint Framework solutions are deployed using an **.spapp** file installed in the App Catalog on a SharePoint tenant. An **.spapp** file is similar to a SharePoint add-in package and follows the same versioning conventions. The current version of the **.spapp** package is defined using a four-part (MAJOR.MINOR.REVISION.BUILD) number stored in the **config/package-solution.json** file. For clarity, developers should keep this number in sync with the version number in the **package.json** file as both number refer to the version of the project as a whole.

> Note: Increasing the version number in the package-solution.json file between releases is required in order for the new version of the package to be correctly deployed in SharePoint.

#### Increase web part version in the web part manifest

Each client-side web part built on the SharePoint Framework contains a manifest that provides the SharePoint Framework with information about that web part such as its title, icon, properties and where the code bundle is located. Each web part also has its own version number stored in the manifest of each web part in the **version** property. The **version** property follows the SemVer schema with three numbers without a label. Web part manifest is included in the **.spapp** package which is deployed to SharePoint.

When updating a web part, developers should change its version number in a way that corresponds to the scope of applied changes. If the project contains multiple web parts and the particular web part hasn't been changed between releases then the version number of that web part shouldn't be changed.

### Update dependencies

One of the reasons for an update of a SharePoint Framework project might be a change to one of the underlying dependencies, for example a new release of Angular with bug fixes and performance improvements. If your team follows the recommended approach of using npm shrinkwrap for locking dependencies' versions then you would use the `npm install <package>@<version> --save` command to update your dependency to the specific version and test your project to verify that it works as expected with the latest updates. Depending on how the changes to the underlying dependencies impact the project, the overall project update might vary from a patch to a full major release.

### Build and package project in release mode

Once you verified that the solution is working as expected, build the project in release mode using the `gulp bundle --ship` command. Then create a new package using the `gulp package-solution --ship` command. Without running the `gulp bundle --ship` command first, the package will include previous version of your project.

### Deploy new version of your solution

After building and packaging the project the next step is to deploy it. First deploy the updated web part bundles located in the **./temp/deploy** folder in your project. Publish the files next to web part bundles of the previous version of your solution.

> Note: You shouldn't remove the previous versions of your solution as long as there are active instances of web parts using them. Each version of the bundle files has a unique name and removing previous versions before updating web parts will break these web parts.

Next, deploy the new solution package to SharePoint app catalog. This is necessary to notify SharePoint of the new version of the solution which it should apply.