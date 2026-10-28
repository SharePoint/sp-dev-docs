---
title: Debug SharePoint Framework solutions in Visual Studio Code
description: Configure the built-in Visual Studio Code JavaScript debugger to debug SharePoint Framework solutions on SharePoint pages.
ms.date: 10/25/2026
ms.localizationpriority: high
---
# Debug SharePoint Framework solutions in Visual Studio Code

Use Visual Studio Code's built-in JavaScript debugger to set breakpoints, inspect variables, and step through SharePoint Framework (SPFx) code running in Microsoft Edge or Google Chrome.

For web parts and extensions, debug on actual SharePoint pages with the [SharePoint Framework Debug Toolbar (developer toolbar)](debug-toolbar.md). This article uses the Heft-based toolchain in SPFx 1.22 and later. For older projects, use the commands for the [legacy gulp-based toolchain](toolchain/sharepoint-framework-toolchain.md).

## Prerequisites

- [Set up your development environment](set-up-your-development-environment.md) with the dependencies supported by your project's SPFx version.
- Install a current version of [Visual Studio Code](https://code.visualstudio.com/) and Microsoft Edge or Google Chrome. A separate Debugger for Chrome extension isn't required.
- Use a development SharePoint site and a modern page that you can edit. For Field Customizers and ListView Command Sets, use a suitable list or library view.
- Install project dependencies and trust the local HTTPS certificate by running `heft trust-dev-cert` from the project folder.

## Debug configurations

Open **.vscode/launch.json** in the project folder. If the generator created a **Hosted workbench** configuration, replace it with a configuration targeting your development page.

The following configuration uses Microsoft Edge. Replace the example site and page with your own URL:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "SharePoint page",
      "type": "msedge",
      "request": "launch",
      "url": "https://contoso.sharepoint.com/sites/dev/SitePages/Test.aspx?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/build/manifests.js",
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true,
      "sourceMapPathOverrides": {
        "webpack:///.././src/*": "${webRoot}/src/*",
        "webpack:///../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../src/*": "${webRoot}/src/*",
        "webpack:///../../../../../src/*": "${webRoot}/src/*"
      }
    }
  ]
}
```

To use Google Chrome, change `type` to `chrome`. Both browser types use the [built-in JavaScript debugger](https://code.visualstudio.com/docs/nodejs/browser-debugging).

The manifest URL above applies to SPFx 1.21 and later, including Heft-based SPFx 1.24 projects. Earlier projects use `https://localhost:4321/temp/manifests.js`. Use your project's configured HTTPS port if it isn't 4321. If the page URL already has query parameters, append the debug parameters with `&` instead of a second `?`.

### Configure a breakpoint

1. Open your web part source file and set a breakpoint in `render()` by selecting the margin beside the line number or pressing <kbd>F9</kbd>.
1. Open the integrated terminal in Visual Studio Code.
1. From the project folder, start the local development server:

    ```console
    heft start --nobrowser
    ```

1. Wait for the initial build to complete and leave the server running.

### Start debugging in Visual Studio Code

1. In **Run and Debug**, select **SharePoint page** and press <kbd>F5</kbd>.
1. Sign in to the development tenant in the browser window opened by the debugger.
1. Select **Load debug scripts** only when the manifest URL points to your trusted development server.
1. Edit the page and add your local web part from the toolbox. The [Debug Toolbar](debug-toolbar.md) is available while debugging is enabled.
1. When the web part loads, the breakpoint becomes active. If necessary, reload the page to hit it.

Local web parts are loaded on demand, so a breakpoint might remain unbound until the component is added to the page. If a breakpoint doesn't bind, confirm the local build succeeded, the manifest URL is reachable, the development certificate is trusted, and the source map paths match your project.

Use **Stop** on the Debug Toolbar when you're finished to disable loading debug scripts for the browser session.

## Debug extensions

Extensions must be tested on an appropriate modern SharePoint page, list, or library, not in a workbench. Configure the extension's `serveConfigurations` in **config/serve.json**, or add its debug parameters to the page URL in **.vscode/launch.json**.

The parameters depend on the extension type. An Application Customizer uses `customActions` with its manifest ID and `ClientSideExtension.ApplicationCustomizer` location; Field Customizers and ListView Command Sets require their own parameters. See [Debug SharePoint Framework extensions on modern SharePoint pages](debug-modern-pages.md#debug-sharepoint-framework-extensions-on-modern-sharepoint-pages) for the configuration and URL formats.

Set a breakpoint in the extension's initialization or event handler, start the local server, and launch the matching page configuration with <kbd>F5</kbd>.

## Debug solution using hosted workbench

The SharePoint Online workbench is no longer the recommended debug target. Replace existing hosted-workbench launch configurations with the SharePoint page configuration above. The local workbench was removed in SPFx 1.13.

[!INCLUDE [spfx-online-workbench-deprecation](../../includes/snippets/spfx-online-workbench-deprecation.md)]

For Copilot UX components, use the fully supported [Copilot Workbench](copilot/overview-copilot-apps.md#test-with-the-copilot-workbench) and its host-specific setup.

## See also

- [Debug SharePoint Framework solutions on modern SharePoint pages](debug-modern-pages.md)
- [SharePoint Framework Debug Toolbar](debug-toolbar.md)
- [Yeoman generator for the SharePoint Framework](yeoman-generator-for-spfx-intro.md)
- [SharePoint Framework Overview](sharepoint-framework-overview.md)
