---
title: Build your first Copilot UX component
description: Create a Copilot UX component with SPFx, test it in the Copilot Workbench, package and deploy it to the app catalog, and use it in Microsoft 365 Copilot.
ms.date: 10/28/2026
ms.localizationpriority: high
ms.custom: scenarios:getting-started
---

# Build your first Copilot UX component

In this tutorial, you build a baseline Copilot UX component from scratch, test it locally in the Copilot Workbench, package it, deploy it to the SharePoint app catalog, and use it inside Microsoft 365 Copilot. This gives you the complete end-to-end path for the model: create, test, package, deploy, and use.

> [!div class="mx-imgBorder"]
> ![The finished Copilot component running in Microsoft 365 Copilot](../../../images/copilot/tutorial-outcome.png)

For a conceptual overview, see [Overview of Copilot UX components](../overview-copilot-apps.md).

You can follow these steps by watching the video on the Microsoft Community Learning YouTube Channel:

> [!Video https://www.youtube.com/embed/1TaK6osdvc0]

## Prerequisites

Before you start, make sure you have the following in place:

- A Microsoft 365 tenant with the SharePoint app catalog provisioned. For more information, see [Set up your SharePoint Framework development environment](../../set-up-your-development-environment.md).
- The SharePoint Framework **1.24.0** development toolchain installed, including a supported [Node.js](https://nodejs.org) version and a code editor such as [Visual Studio Code](https://code.visualstudio.com). See the [compatibility reference](../../compatibility.md).
- Permission to upload and deploy solution packages to your tenant app catalog.
- A Microsoft 365 Copilot add-on USL (user-specific license) on top of your normal E3, E5, or E7 license for development, testing in Copilot Workbench, and use of the component in Copilot.
- A supported browser or desktop client. iOS and Android, including Teams mobile, aren't supported at GA.

> [!NOTE]
> Copilot UX components don't incur consumption-based charges, but APIs/services used by an implementation can have separate charges. For licensing and distribution details, see [Availability](../overview-copilot-apps.md#availability).

> [!IMPORTANT]
> If you add SPFx Teams functionality to this solution, automatic **Sync to Teams** has a mismatch at GA. Use a manually created Teams package for the combined solution. See [GA limitations](../overview-copilot-apps.md#ga-limitations).

## Create a Copilot component project

1. Create a new project directory in your favorite location.

    ```console
    md my-copilot-app
    ```

1. Go to the project directory.

    ```console
    cd my-copilot-app
    ```

1. Create a new Copilot component by running the Yeoman SharePoint generator.

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted, enter the following values (*select the default option for all prompts omitted below*):

    - **What is your solution name?**: my-copilot-app
    - **Which type of client-side component to create?**: Copilot Component
    - **What is your Copilot component name?**: MyCopilotApp
    - **Which template would you like to use?**: No framework

    The generator installs the required dependencies and scaffolds the solution files along with the **MyCopilotApp** component.

    > [!div class="mx-imgBorder"]
    > ![The scaffolded Copilot component project prompts](../../../images/copilot/tutorial-generator-prompts.png)

1. Start Visual Studio Code (or your preferred editor) in the project folder.

    ```console
    code .
    ```

## Review the project structure

A Copilot UX component solution groups the component source with the declarative agent definition in a single SPFx solution. The following files and folders are the most important ones to understand.

> [!div class="mx-imgBorder"]
> ![The project structure, highlighting the copilot and copilotComponents folders](../../../images/copilot/tutorial-structure.png)

- **src/copilotComponents/myCopilotApp** contains the Copilot component source.
- **copilot** contains the declarative agent definition (`manifest.json`, `declarativeAgent.json`, `ai-plugin.json`, and `instruction.txt`).
- **config/copilot-agent.json** groups the Copilot component into an agent.

### The Copilot component

Open **./src/copilotComponents/myCopilotApp/MyCopilotAppCopilotComponent.ts**.

The component derives from `BaseCopilotComponent`, imported from the **@microsoft/sp-copilot-component** package. Its `render()` method reads the current host context, such as the display mode and theme, and writes the component's UI into `this.context.domElement`. It also wires up an affordance that requests fullscreen through `requestDisplayModeAsync('fullscreen')`.

```typescript
import { BaseCopilotComponent } from '@microsoft/sp-copilot-component';

export default class MyCopilotAppCopilotComponent extends BaseCopilotComponent<IMyCopilotAppCopilotComponentProperties> {
  protected render(): void {
    const displayMode: string = this.hostContext.displayMode || strings.UnknownTheme;
    const isFullscreen: boolean = this.hostContext.displayMode === 'fullscreen';
    // ...render UI into this.context.domElement using this.properties
  }

  private _handleRequestFullscreen = async (): Promise<void> => {
    await this.requestDisplayModeAsync('fullscreen');
  };
}
```

### The component manifest

Open **./src/copilotComponents/myCopilotApp/MyCopilotAppCopilotComponent.manifest.json**.

The manifest declares the component `id`, the display modes it supports, and the tools it exposes. Each tool becomes an action the declarative agent can invoke, and points to a properties schema that describes the parameters it accepts.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-component-manifest.schema.json",
  "id": "7931d745-bd5d-4b2c-9c67-9e8ce7e34432",
  "alias": "MyCopilotAppCopilotComponent",
  "componentType": "CopilotComponent",
  "copilotType": "Ux",
  "version": "*",
  "manifestVersion": 2,

  "capabilities": {
    "availableDisplayModes": ["inline", "fullscreen"]
  },

  "tools": [
    {
      "name": "MyCopilotAppTool",
      "description": {
        "default": "MyCopilotApp description"
      },
      "propertiesSchema": {
        "id": "$../../../lib/copilotComponents/myCopilotApp/MyCopilotAppCopilotComponentProperties.js:default;"
      }
    }
  ]
}
```

The properties schema in **MyCopilotAppCopilotComponentProperties.ts** uses [Zod](https://zod.dev) to describe the parameters the tool accepts. The default template defines a single `message` property.

```typescript
const propertiesSchema = z.object({
  message: z.string().describe('A message to display.')
});
```

### The declarative agent

The **copilot** folder contains the declarative agent definition. Open **./copilot/declarativeAgent.json** to see the agent name, description, instructions, conversation starters, and the action that maps to your Copilot component's tool.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/copilot/declarative-agent/v1.7/schema.json",
  "version": "v1.7",
  "name": "MyCopilotApp Agent",
  "description": "MyCopilotApp description",
  "instructions": "$[file('instruction.txt')]",
  "conversation_starters": [
    {
      "title": "Get started",
      "text": "What can you do?"
    }
  ],
  "actions": [
    {
      "id": "myCopilotAppAction",
      "file": "ai-plugin.json"
    }
  ]
}
```

The **config/copilot-agent.json** file groups one or more Copilot components into the agent by referencing their component `id` values.

```json
{
  "$schema": "../node_modules/@microsoft/spfx-heft-plugins/lib-commonjs/plugins/copilotAgentPlugin/copilot-agent.schema.json",
  "agents": [
    {
      "name": {
        "default": "MyCopilotApp Agent"
      },
      "description": {
        "default": "MyCopilotApp description"
      },
      "components": [
        "7931d745-bd5d-4b2c-9c67-9e8ce7e34432"
      ]
    }
  ]
}

```

## Test in the Copilot Workbench

The Copilot Workbench lets you run and debug your component while it is hosted locally on your development machine, without deploying anything to the app catalog.

1. Compile your code and start the local development server.

    ```console
    heft start --nobrowser
    ```

    When the code compiles without errors, the manifest is served from `https://localhost:4321`. The `--nobrowser` switch prevents the browser from opening automatically, so browse to the Copilot Workbench yourself. The Workbench is always available at the `/_layouts/15/copilotworkbench.aspx` path of any site in your tenant, for example `https://yourtenantname.sharepoint.com/_layouts/15/copilotworkbench.aspx`.

1. When prompted, accept the loading of debug manifests so the debug version of your component loads in the Workbench.

    > [!div class="mx-imgBorder"]
    > ![The component under test in the Copilot Workbench](../../../images/copilot/tutorial-workbench.png)

1. Activate the component from the left side of the screen and select the **Fire turn** button to pass the properties JSON to the component and initialize it in the debug canvas.

1. Interact with the component, switch between the inline and fullscreen display modes, and iterate on the code. Changes are reflected as you rebuild, giving you a fast inner-loop before you package and deploy.

## Package the solution

When you are satisfied with the experience in the Workbench, build the solution package.

1. Bundle the solution in production mode.

    ```console
    heft build --production
    ```

1. Create the solution package.

    ```console
    heft package-solution --production
    ```

    The command creates the package at **./sharepoint/solution/my-copilot-app.sppkg**. Because `includeClientSideAssets` is set to `true` in **config/package-solution.json**, the component assets are bundled into the package and hosted automatically in the tenant where the app is installed.

    > [!div class="mx-imgBorder"]
    > ![The generated solution package](../../../images/copilot/tutorial-package.png)

## Deploy to the SharePoint app catalog

1. Go to your tenant's **app catalog** and open the **Apps for SharePoint** library.

1. Upload the **./sharepoint/solution/my-copilot-app.sppkg** file. SharePoint displays a dialog and asks you to trust the client-side solution. Notice that the **Enable this app and add it to all sites** option is enabled by default. This is required for the Copilot integration to work properly.

1. Select **Enable app**.

    > [!div class="mx-imgBorder"]
    > ![Deploying the package in the SharePoint app catalog](../../../images/copilot/tutorial-deploy.png)

1. In the app catalog list, select the uploaded app and select **Add to Teams**. This deploys the declarative agent to the tenant's agent catalog and makes it available to users in Microsoft 365 Copilot.

    > [!NOTE]
    > **Add to Teams** performs the initial **Sync to Teams** operation and deploys the baseline agent. Deployment can take time. Later component/parameter changes don't require another sync unless the baseline agent configuration also changes. See [Develop and deploy Copilot UX components](../development-and-deployment.md).

    > [!div class="mx-imgBorder"]
    > ![Syncing the agent to the tenant agent catalog with Add to Teams](../../../images/copilot/tutorial-sync-teams.png)

## Use the app in Microsoft 365 Copilot

1. Open **Microsoft 365 Copilot** and locate the **MyCopilotApp Agent** in the list of available agents. Select the agent, and then select **Add** to add it to your list of agents in Copilot.

    > [!NOTE]
    > There can be a delay before the agent appears in the all-agents listing. You can also go to the Microsoft 365 admin center and install the agent directly for users, which can speed up the deployment process.

    > [!div class="mx-imgBorder"]
    > ![Selecting the MyCopilotApp agent in Microsoft 365 Copilot](../../../images/copilot/tutorial-selecting-agent.png)

1. Start a conversation with the agent by entering "Call MyCopilotAppTool" and submitting it to Copilot. Copilot invokes your tool and renders the Copilot component inline in the conversation.

    > [!NOTE]
    > This is a reliable way to ensure the tool is called directly. It's also needed in this tutorial because we didn't adjust the tool description and the conversation starter to explain the tool's use case. When that information is adjusted, Copilot automatically calls the tool based on user intent.

1. The first time the tool (UX component) is accessed, Copilot confirms the call with the user. Select **Allow** when prompted. The prompt might currently appear a few times before the UX renders. After that, Copilot renders the UX component in the Copilot canvas.

    > [!div class="mx-imgBorder"]
    > ![The Copilot component rendered inline in the conversation](../../../images/copilot/tutorial-inline-experience.png)

1. Expand the component to fullscreen to see the display mode switch in action. In the default **No framework** component, an expand button is rendered in the top-right corner, next to the user's name.

    > [!div class="mx-imgBorder"]
    > ![The Copilot component expanded to fullscreen](../../../images/copilot/tutorial-fullscreen-experience.png)

## Next steps

- [Overview of Copilot UX components](../overview-copilot-apps.md)
- [Display modes in Copilot UX components](../displayMode.md)
- [Develop and deploy Copilot UX components](../development-and-deployment.md)
- [Configure components and agents](../component-and-agent-configuration.md)
- [Provide Copilot with context from your component](../provide-context-to-copilot.md): use `createCopilotTextContent` with the bridge to describe the visible UX. The GA text-context limit is 10 KB; larger text context blocks sending the message.
- Review available samples in the [Copilot UX component sample gallery](https://aka.ms/spfx/copilot/samples). Check each sample's declared SPFx version before using it as a GA baseline.
