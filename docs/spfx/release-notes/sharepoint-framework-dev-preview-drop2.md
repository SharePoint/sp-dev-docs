# Release notes: SharePoint Framework Developer Preview Drop 2

We should get into a steady cadence where we make a new drop every week.  Some drops will have more changes, some drops will have minor ones.
 
It’s been an interesting couple of weeks since we shipped the first preview.  Lots of interest, posts, issues, comments and feedback.  Please continue to give us any and all feedback that you wish.  One of the main pieces of feedback so far has been around the build tools.  It’s a fairly large departure from your typical SharePoint development environment, and to be honest, it’s the first time we’ve really done something like this.  We had been polishing the framework itself, but perhaps not paying enough attention to the toolchain.  This drop should help alleviate some of the original issues around the node packages and sizes.  We’ll have a post up soon describing the modules that we create and consume, and a brief description of what they do.  In the meantime, we have done work to remove the various duplicate entries, and over the past week or two we have made adjustments to the tutorials and getting started pages to ensure that things should be smoother.  You should no longer wind up with 500+ MB folders.  A clean project with a built web part should be around 165 MB now, with some more work planned to reduce that further, depending on the options that you need in your project.

The default is now to run the local server in https mode, which will swap the unsafe mixed mode warnings with certificate warnings.  You'll note when you run gulp serve that a warning appears stating "Warning - [serve] When serving in HTTPS mode, a PFX cert path or a cert path and a key path must be provided. If a SSL certificate isn't provided, a default, self-signed certificate will be used. Expect browser security warnings."
 
We also have some minor updates to the framework in this drop, mostly around the PageContext and property pane objects.  We’ll continue to improve and enrich these objects with subsequent drops.  Finally, we've fixed a few code issues tracked in the Issues list.  We'll mark those as closed.

# Getting the new bits
This is pretty simple.  You want to make sure that your @microsoft/generator-sharepoint npm package is version 0.1.0 .  To get the latest version, run `npm i -g @microsoft/generator-sharepoint@latest`. It is also recommended you uninstall the previous version and install the latest.

```
npm uninstall @microsoft/generator-sharepoint -g
npm i -g @microsoft/generator-sharepoint@latest 
```

# Updating your existing projects
We're working on an update utility for future drops that can do this automatically, but for now here are manual steps to get your existing project migrated.

## Getting your node modules set up correctly
1. Open package.json and set the versions of the following packages:

	```
	"@microsoft/sp-client-base": "~0.2.0"
	"@microsoft/sp-client-preview": "~0.2.0"
	"@microsoft/sp-build-web": "~0.5.0"
	"@microsoft/sp-module-interfaces": "~0.2.0"
	"@microsoft/sp-webpart-workbench": "~0.2.0"
	```

2. If you are consuming any other packages (other than the above, which are the packages added by the generator), you  should do a minor version bump and use a “~” (similar to the above packages). If you have any questions about which packages are available, run npm view <package> versions

3. Run `npm update` then `npm prune` then `npm dedupe`. This will update all the packages then optimize the node_modules folder size.

4. Run `gulp nuke` to clean up any old build artifacts

5. Run `gulp serve` to build your updated project

## Changes to configuration files

1. Introduction of gulp serve via “https”. To enable, update `config/serve.json` to include: `"https": "true"` and update the `initialPage` property to point to `https`

2. The TSLint file was completely updated, You should update your `config/tslint.json` file with [this Gist of the new file](https://gist.github.com/nickpape-msft/b3a0e0a4d64c029794eb4d2318d54308).

## General project cleanup
* Deleted the `config/text.json` file as it is no longer needed.
* Added `*.spapp` to `.gitignore`


# Detailed API changes
## Changes in `sp-client-base`
 
### Changed Properties
Wherever possible we will create a new property and deprecate the old one. Occasionally this doesn’t really work, and we’ll need to change it in place.

* `SPSite::id` has been changed from a `string` to a `Guid`
 
### New properties

* CultureInfo::isRightToLeft
* SPUser::email
* SPWeb::permissions
 
## Changes in `sp-client-preview`
### New properties

* BaseClientSideWebPart::canOpenPopupOnRender
* BaseClientSideWebPart::description
* BaseClientSideWebPart::title
* BaseClientSideWebPart::onAfterPropertyPaneChangesApplied
* BaseClientSideWebPart::onPropertyPaneConfigurationComplete
* BaseClientSideWebPart::onPropertyPaneConfigurationStart
* BaseClientSideWebPart::onPropertyPaneRendered
* BaseClientSideWebPart::propertyPaneRenderedByWebPart
* IPropertyPaneData::onConfigurationEvent replaces previous on calls
* IWebPartData::description
* WebPartConfigurationEvent enum cleaned up

## Partial list of issues resolved
* Relax lint rules, use opt-in rules.
* ModuleLoader: set defaultJSExtensions to false.
* Updating gulp-core-build to point at the @microsoft scope.
* Fix NonAMD loader logic and update typings.
* Stop loc-import from creating extra loc files.
* Change SPSite id to guid.
* Add email property to SPUser.
* Fixing debug locale in globalize compile task.
* Added isRightToLeft Property to PageContext's CultureInfo class.
* Updated generator to allow multiple instances of a web part.
* Fixing minor bug in debug localization.
* Downgrade tslint severity from a warning based on customer feedback.
* Add Permissions to PageContext.
* Fixing default localization logic.
* Fix casing of paths.
* Fix the localized string name in yeoman template.
