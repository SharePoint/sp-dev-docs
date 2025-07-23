---
title: Debug SharePoint Framework solutions in Visual Studio Code
description: Prerequisites and steps for configuring Visual Studio Code for debugging SharePoint Framework solutions.
ms.date: 04/26/2025
ms.localizationpriority: high
---
# Debug SharePoint Framework solutions in Visual Studio Code

Visual Studio Code is a popular code editor frequently used for building SharePoint Framework solutions. By setting up debugging of your SharePoint Framework solution in Visual Studio Code, you can more efficiently step through your code and fix errors.

You can also see the required steps to enable debugging in Visual Studio Code in this video on the Microsoft 365 Platform Community (PnP) YouTube Channel:

> [!VIDEO https://www.youtube.com/embed/oNChcluMrm8]

## Prerequisites

The easiest way to configure Visual Studio Code (VS Code) to debug SharePoint Framework solutions is to use the [JavaScript Debugger](https://github.com/microsoft/vscode-js-debug) included in VS Code to debug Chrome & Edge.

You also need **Google Chrome** or **Microsoft Edge**.

## Debug configurations

You can locate the debug configurations in the **./vscode/launch.json** file under the Visual Studio Code workspace folder.

### Configure a breakpoint

1. In Visual Studio Code, open the main web part source file, and add a breakpoint in the first line of the `render()` method by either selecting the margin that is left to the line number or by highlighting the code line in the editor and selecting the F9 key.

    ![Breakpoint configured in a SharePoint Framework client-side web part in Visual Studio Code](../images/vscode-debugging-breakpoint-configured.png)

1. In Visual Studio Code, on the **View** menu, select the **Integrated Terminal** option or select <kbd>ctrl</kbd>+<kbd>`</kbd> on the keyboard.
1. In the terminal, run the following command:

    ```console
    gulp serve --nobrowser
    ```

    Running this command builds your SharePoint Framework solution and starts the local web server to serve the output files. Because the debugger starts an instance of the browser, you use the **--nobrowser** argument to prevent the **serve** task from opening a browser window.

    ![The gulp serve command typed in the integrated terminal in Visual Studio Code](../images/vscode-debugging-gulp-serve.png)

### Start debugging in Visual Studio Code

After the gulp task is finished, move the focus to the code area of Visual Studio Code and select <kbd>F5</kbd> (or on the **Debug** menu, select the **Start Debugging** option).

The debug mode in Visual Studio Code starts, changing the color of the status bar to orange and opening a new window of Google Chrome showing the SharePoint Workbench.

> [!NOTE]
> At this point, the breakpoint is disabled because the web part's code hasn't been loaded yet. SharePoint Framework loads web parts on demand only after they have been added to the page.

![Visual Studio Code in debug mode displayed next to Google Chrome showing the SharePoint workbench](../images/vscode-debugging-chrome-started.png)

### Add a web part to the canvas

To verify that debugging is working, in the workbench, add your web part to the canvas.

![Web part toolbox open in SharePoint workbench](../images/vscode-debugging-adding-web-part-to-canvas.png)

Notice that with the code loaded on the page, the breakpoint indicator changed to active.

![Breakpoint active after adding web part to the canvas](../images/vscode-debugging-breakpoint-active.png)

If you now reload the page, your breakpoint in Visual Studio Code is hit, and you're able to inspect all the properties and step through the code.

![Breakpoint hit in Visual Studio Code](../images/vscode-debugging-breakpoint-hit.png)

## Debug solution using hosted workbench

When building SharePoint Framework solutions that communicate with SharePoint, you might want to verify the interaction between your solution in SharePoint. To do this easily, you can use the hosted version of the SharePoint Workbench, which is available on every Microsoft 365 tenant at **https://yourtenant.sharepoint.com/_layouts/workbench.aspx**.

When building SharePoint Framework solutions, you'll be doing such tests regularly, and it is a good idea to create a separate debug configuration for the hosted version of the SharePoint Workbench.

### Debug Web Part solution using hosted workbench

1. Open **.vscode/launch.json**, and update the `url` property under the *Hosted workbench* configuration to your SharePoint site URL.

    ```json
    "url": "https://enter-your-SharePoint-site/_layouts/workbench.aspx",
    ```

1. In Visual Studio Code, activate the **Debug** pane, and in the **Configurations** list, select the newly added **Hosted workbench** configuration.

    ![The hosted workbench configuration selected in the debug configurations drop-down in Visual Studio Code](../images/vscode-debugging-debugging-hosted-workbench.png)

1. Start debugging either by selecting <kbd>F5</kbd> or by selecting the **Start Debugging** option on the **Debug** menu. Visual Studio Code switches into debug mode, indicated by the orange status bar, and the Debugger for Chrome extension opens a new instance of Google Chrome with the Microsoft 365 sign-in page.

    ![Microsoft 365 login page displayed in Google Chrome after starting debugging in the hosted workbench](../images/vscode-debugging-o365-login.png)

1. After you sign in, add the web part to the canvas and refresh the workbench. You will see the breakpoint in Visual Studio Code be hit, and you're able to inspect variables and step through the code.

    ![Breakpoint hit in Visual Studio Code when debugging a SharePoint Framework client-side web part in the hosted workbench](../images/vscode-debugging-breakpoint-hit-o365.png)

### Debug Extension solution using hosted workbench

Debugging an Extension in a hosted workbench is similar to the steps for a Web Part with a few key differences.

1. Open **.vscode/launch.json**, and update the `url` property under the *Hosted workbench* configuration to your SharePoint site URL.

    ```json
    "url": "https://enter-your-SharePoint-site/_layouts/workbench.aspx",
    ```

1. In Visual Studio Code, activate the **Debug** pane, and in the **Configurations** list, select the newly added **Hosted workbench** configuration.

    ![The hosted workbench configuration selected in the debug configurations drop-down in Visual Studio Code](../images/vscode-debugging-debugging-hosted-workbench.png)

1. After initiating the gulp serve in the Terminal, start debugging either by selecting <kbd>F5</kbd> or by selecting the **Start Debugging** option on the **Debug** menu. Visual Studio Code switches into debug mode, indicated by the orange status bar, and the Debugger for Chrome extension opens a new instance of Google Chrome with the Microsoft 365 sign-in page.

    ![Microsoft 365 login page displayed in Google Chrome after starting debugging in the hosted workbench](../images/vscode-debugging-o365-login.png)

1. In the workbench tab that was opened in your browser, navigate to a SharePoint Online page that you wish to test your extension.
1. Append the following query string parameters to the URL. Notice that you need to update the ID to match your own extension identifier. This is available in the **HelloWorldApplicationCustomizer.manifest.json** file.

    > [!CAUTION]
    > Line breaks & indentation have been added to the following snippet for readability. The following text should be on a single line with no whitespace.

    ```json
    ?loadSPFX=true
    &debugManifestsFile=https://localhost:4321/temp/build/manifests.js
    &customActions={"e5625e23-5c5a-4007-a335-e6c2c3afa485":{
        "location":"ClientSideExtension.ApplicationCustomizer",
        "properties":{
          "testMessage":"Hello as property!"
        }
    }}
    ```

    > [!NOTE]
    > The development URL was changed in the SPFx v1.21 release from `https://localhost:4321/temp/manifests.js` to `https://localhost:4321/temp/build/manifests.js`.

    Additional details about the URL parameters:

    - **loadSPFX=true**: Ensures that the SharePoint Framework is loaded on the page. For performance reasons, the framework does not load unless at least one extension is registered. Because no components are registered, you must explicitly load the framework.
    - **debugManifestsFile**: Specifies that you want to load SPFx components that are locally served. The loader only looks for components in the app catalog (for your deployed solution) and the SharePoint manifest server (for the system libraries).
    - **customActions**: Simulates a custom action. When you deploy and register this component in a site, you'll create this **CustomAction** object and describe all the different properties you can set on it.
        - **Key**: Use the GUID of the extension as the key to associate with the custom action. This has to match the ID value of your extension, which is available in the extension manifest.json file.
        - **Location**: The type of custom action. Use `ClientSideExtension.ApplicationCustomizer` for the Application Customizer extension.
        - **Properties**: An optional JSON object that contains properties that are available via the `this.properties` member. In this HelloWorld example, it defines a `testMessage` property.

    The full URL should look similar to the following:

    > [!CAUTION]
    > Line breaks & indentation have been added to the following snippet for readability. The following text should be on a single line with no whitespace.

    ```json
    https://contoso.sharepoint.com/Lists/Contoso/AllItems.aspx
        ?loadSPFX=true
        &debugManifestsFile=https://localhost:4321/temp/build/manifests.js
        &customActions={"e5625e23-5c5a-4007-a335-e6c2c3afa485":{
            "location":"ClientSideExtension.ApplicationCustomizer",
            "properties":{
              "testMessage":"Hello as property!"
            }
        }}
    ```

1. Select **Load debug scripts** to continue loading scripts from your local host.

    ![Allow Debug Manifest question from the page](../images/ext-app-debug-manifest-message.png)

    When the page loads, you should now be able to see the Extension on your page (in this case, a list view command extension):

    ![SPFx extension loaded in the page](../images/debug-Extension-Loaded.png)

    In addition, you can now toggle Breakpoints and step through the code:

    ![Hitting Breakpoints in the Visual Studio Code](../images/debug-Extension-Breakpoints.png)

## Debugging with Microsoft Edge or older projects

If you're using an older version of the SharePoint Framework Yeoman generator or want to debug with Microsoft Edge, follow these steps to create the launch.json file manually.

> [!NOTE]
> In order for you to debug with Microsoft Edge, you'll have to install the **Windows 10 April 2018 Update**, which includes the Microsoft Edge DevTools Protocol.

### Create debug configuration for hosted workbench

1. In Visual Studio Code, open the **.vscode/launch.json** file.
1. For **Edge**, copy the existing debug configuration and use the URL of the hosted workbench:

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Hosted workbench",
          "type": "msedge",
          "request": "launch",
          "url": "https://contoso.sharepoint.com/_layouts/workbench.aspx",
          "webRoot": "${workspaceRoot}",
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

1. For **Chrome**, copy the existing debug configuration and use the URL of the hosted workbench:

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Hosted workbench",
          "type": "pwa-chrome",
          "request": "launch",
          "url": "https://contoso.sharepoint.com/_layouts/workbench.aspx",
          "webRoot": "${workspaceRoot}",
          "sourceMaps": true,
          "sourceMapPathOverrides": {
            "webpack:///.././src/*": "${webRoot}/src/*",
            "webpack:///../../../src/*": "${webRoot}/src/*",
            "webpack:///../../../../src/*": "${webRoot}/src/*",
            "webpack:///../../../../../src/*": "${webRoot}/src/*"
          },
          "runtimeArgs": [
            "--remote-debugging-port=9222",
            "-incognito"
          ]
        }
      ]
    }
    ```

## See also

- [How to debug your SharePoint Framework web part (Elio Struyf)](https://www.eliostruyf.com/how-to-debug-your-sharepoint-framework-web-part/)
- [Debug SPFx React web part with Visual Studio Code (Velin Georgiev)](https://blog.velingeorgiev.com/how-debug-sharepoint-framework-webpart-visual-studio-code)
- [Yeoman generator for the SharePoint Framework](yeoman-generator-for-spfx-intro.md)
- [SharePoint Framework Overview](sharepoint-framework-overview.md)
