# SharePoint Framework Development with SharePoint 2016 Feature Pack 2

SharePoint 2016 Feature Pack 2 supports SharePoint Framework client-side web parts hosted in classic SharePoint pages. 

An introduction to SharePoint Framework development in SharePoint 2016 using Feature Pack 2 is also covered in the following video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=LGLMxnmHk6U&list=PLR9nK3mnD-OXZbEvTEPxzIOMGXj_aZKJG). 

<a href="https://www.youtube.com/watch?v=LGLMxnmHk6U&list=PLR9nK3mnD-OXZbEvTEPxzIOMGXj_aZKJG">
<img src="../../images/spfx-fp2-youtube-video.png" alt="Screenshot of the YouTube video player for this tutorial" />
</a>

## Which Version of the SharePoint Framework to use

Since SharePoint Online and SharePoint 2016 have different release cycles for new capabilities, they also have different capabilities when it comes to the SharePoint Framework. SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint 2016 only supports the version which matches the server-side dependencies of the deployed packages. 

SharePoint 2016 Feature Pack 2 supports SharePoint Framework client-side web parts hosted in classic SharePoint pages built using the SharePoint Framework v1.0. This means that when you are targeting the SharePoint 2016 platform, you'll need to use the SharePoint Framework v1.0.2 due to the server-side version dependencies. 

If you are planning to use the same client-side web parts in both SharePoint 2016 and in SharePoint Online, you will need to use the SharePoint Framework v1.0.2 as your baseline version to ensure that the web part works in both environments. 

## Installing the SharePoint Framework Version Needed for SP2016 Development

You should ensure that you are using the right version of the SharePoint Framework on your development machine. You can check the currently globally installed SharePoint Framework Yeoman template package version using the following command: 

```
npm list -g --depth 0
```

This will list the globally installed packages, including their versions. If the `@microsoft/generator-sharepoint` package version is incorrect, you can uninstall the generator by using the following command:

```
npm uninstall -g @microsoft/generator-sharepoint
```

To install v1.0.2 of the SharePoint Framework Yeoman templates, you can use the following command:

```
npm install -g @microsoft/generator-sharepoint@1.0.2
```

## Hosting your SharePoint Framework Solution for On-Premises Deployment

Getting SharePoint Framework client-side web parts deployed to on-premises requires two distinct actions:

- Deployment of the solution package to the SharePoint app catalog
- Hosting the JavaScript files in a centralized location

You can host the JavaScript files in the location that best fits your environment. For example, these files can be hosted in any of the following locations:

- **Azure CDN** - Similar setup as with SharePoint Online. Requires end users to have Internet connectivity.
- **Local server in your network** - A server hosting the JavaScript files for your corporate network. This can be using whatever technology desired as long as the files are accessible through http requests.
- **SharePoint 2016** - You can also host your files in the local SharePoint farm itself. You can, for example, define a standardized site in your farm where all the SharePoint Framework assets are being hosted. Take note, however, that by default .json files are not allowed to be uploaded to SharePoint 2016 libraries. So farm level settings will need to be adjusted for this option.

> You can find more details on blocked file types in SharePoint 2016 from the following support article: [Types of files that cannot be added to a list or library](https://support.office.com/en-us/article/Types-of-files-that-cannot-be-added-to-a-list-or-library-30be234d-e551-4c2a-8de8-f8546ffbf5b3#ID0EAADAAA=2016)

## Development Environment Considerations 

When you are developing SharePoint Framework client-side web parts you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded using the SharePoint Framework Yeoman templates.

If Internet access is not available for the development machines, you can setup a local on-premises registry for the required npm packages. However, this requires additional software and a significant amount of work to setup and maintain local package versions with packages in the actual npm gallery.

> The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions. 

## How to Determine Which SharePoint Framework Version was Used for a Solution

If you have existing SharePoint Framework solutions and you'd like to confirm which version of the SharePoint Framework was used for them, you'll need to check the following locations:

- **.yo-rc.json** - file in the solution's root folder that stores the SharePoint Framework Yeoman template version used when the solution was created.
- **package.json** - file in the solution's root folder that contains references to package versions used in the solution.
- **npm-shrinkwrap.json** - file in the solution's root folder that contains information about the exact versions used (if you used the `npm shrinkwrap` command to lock-down the exact versions of the solution).
-- **package.json** - file in the *node_modules/@microsoft/sp-webpart-base* folder that contains a *version* attribute matching the used SharePoint Framework version, if you have installed packages to your solution.
