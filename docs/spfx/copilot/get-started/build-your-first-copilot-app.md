---
title: Build your first SharePoint Copilot App
description: Create a SharePoint Copilot App with SPFx, test it in the Copilot Workbench, package and deploy it to the app catalog, and use it in Microsoft 365 Copilot.
ms.date: 07/08/2026
ms.localizationpriority: high
---

# Build your first SharePoint Copilot App

> [!IMPORTANT]
> SharePoint Copilot Apps are currently in **preview** and are subject to change. Do not use them in production environments.

In this tutorial, you build a baseline SharePoint Copilot App from scratch, test it locally in the Copilot Workbench, package it, deploy it to the SharePoint app catalog, and use it inside Microsoft 365 Copilot. This gives you the complete end-to-end path for the model: create, test, package, deploy, and use.

<!-- PLACEHOLDER: hero screenshot of the finished Copilot component running in Microsoft 365 Copilot -->
> [!div class="mx-imgBorder"]
> ![Placeholder: the finished Copilot component running in Microsoft 365 Copilot](../assets/tutorial-hero-placeholder.png)

For a conceptual overview of how SharePoint Copilot Apps work, see [Overview of SharePoint Copilot Apps](../overview-copilot-apps.md).

You can follow these steps by watching the video on the Microsoft Community Learning YouTube Channel:

> [!Video https://www.youtube.com/embed/1TaK6osdvc0]

## Prerequisites

Before you start, make sure you have the following in place:

- A Microsoft 365 tenant with the SharePoint app catalog provisioned. For more information, see [Set up your SharePoint Framework development environment](/sharepoint/dev/spfx/set-up-your-development-environment).
- The SharePoint Framework development toolchain installed, including [Node.js](https://nodejs.org) (the version required by SPFx v1.24) and a code editor such as [Visual Studio Code](https://code.visualstudio.com).
- Permission to upload and deploy solution packages to your tenant app catalog.

> [!NOTE]
> During the public preview, no Microsoft 365 Copilot license is required to build, deploy, or run SharePoint Copilot Apps. For more information, see [Availability during preview](../overview-copilot-apps.md#availability-during-preview).

## Create a Copilot component project

1. Create a new project directory in your favorite location.

    ```console
    md my-awesome-copilot-experience
    ```

1. Go to the project directory.

    ```console
    cd my-awesome-copilot-experience
    ```

1. Create a new Copilot component by running the Yeoman SharePoint generator.

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted, enter the following values (*select the default option for all prompts omitted below*):

    - **What is your solution name?**: my-awesome-copilot-experience
    - **Which type of client-side component to create?**: Copilot component
    - **What is your Copilot component name?**: MyAwesomeCopilotComponent
    - **Which template would you like to use?**: No framework

    The generator installs the required dependencies and scaffolds the solution files along with the **MyAwesomeCopilotComponent** component.

    <!-- PLACEHOLDER: screenshot of the generator prompts and scaffolded project -->
    > [!div class="mx-imgBorder"]
    > ![Placeholder: the scaffolded Copilot component project](../assets/tutorial-scaffold-placeholder.png)

1. Start Visual Studio Code (or your preferred editor) in the project folder.

    ```console
    code .
    ```

## Review the project structure

A SharePoint Copilot App groups the Copilot component source with the declarative agent definition in a single SPFx solution. The following files and folders are the most important ones to understand.

<!-- PLACEHOLDER: screenshot highlighting the copilot folder and copilotComponents folder -->
> [!div class="mx-imgBorder"]
> ![Placeholder: the project structure, highlighting the copilot and copilotComponents folders](../assets/tutorial-structure-placeholder.png)

- **src/copilotComponents/myAwesomeCopilotComponent** contains the Copilot component source.
- **copilot** contains the declarative agent definition (`manifest.json`, `declarativeAgent.json`, `ai-plugin.json`, and `instruction.txt`).
- **config/copilot-agent.json** groups the Copilot component into an agent.

### The Copilot component

Open **./src/copilotComponents/myAwesomeCopilotComponent/MyAwesomeCopilotComponentCopilotComponent.ts**.

The component derives from `BaseCopilotComponent`, imported from the **@microsoft/sp-copilot-component** package. Its `render()` method reads the current host context, such as the display mode and theme, and writes the component's UI into `this.context.domElement`. It also wires up an affordance that requests fullscreen through `requestDisplayModeAsync('fullscreen')`.

```typescript
import { BaseCopilotComponent } from '@microsoft/sp-copilot-component';

export default class MyAwesomeCopilotComponentCopilotComponent extends BaseCopilotComponent<IMyAwesomeCopilotComponentCopilotComponentProperties> {
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

Open **./src/copilotComponents/myAwesomeCopilotComponent/MyAwesomeCopilotComponentCopilotComponent.manifest.json**.

The manifest declares the component `id`, the display modes it supports, and the tools it exposes. Each tool becomes an action the declarative agent can invoke, and points to a properties schema that describes the parameters it accepts.

```json
{
  "id": "e7055511-e147-4b0e-a99b-3f2567ca16e3",
  "componentType": "CopilotComponent",
  "copilotType": "Ux",
  "capabilities": {
    "availableDisplayModes": ["inline", "fullscreen"]
  },
  "tools": [
    {
      "name": "MyAwesomeCopilotComponentTool",
      "description": { "default": "MyAwesomeCopilotComponent description" },
      "propertiesSchema": {
        "id": "$../../../lib/copilotComponents/myAwesomeCopilotComponent/MyAwesomeCopilotComponentCopilotComponentProperties.js:default;"
      }
    }
  ]
}
```

The properties schema in **MyAwesomeCopilotComponentCopilotComponentProperties.ts** uses [Zod](https://zod.dev) to describe the parameters the tool accepts. The default template defines a single `message` property.

```typescript
const propertiesSchema = z.object({
  message: z.string().describe('A message to display.')
});
```

### The declarative agent

The **copilot** folder contains the declarative agent definition. Open **./copilot/declarativeAgent.json** to see the agent name, description, instructions, conversation starters, and the action that maps to your Copilot component's tool.

```json
{
  "version": "v1.7",
  "name": "MyAwesomeCopilotComponent Agent",
  "instructions": "$[file('instruction.txt')]",
  "conversation_starters": [
    { "title": "Get started", "text": "What can you do?" }
  ],
  "actions": [
    { "id": "myAwesomeCopilotComponentAction", "file": "ai-plugin.json" }
  ]
}
```

The **config/copilot-agent.json** file groups one or more Copilot components into the agent by referencing their component `id` values.

```json
{
  "agents": [
    {
      "name": { "default": "MyAwesomeCopilotComponent Agent" },
      "description": { "default": "MyAwesomeCopilotComponent description" },
      "components": [
        "e7055511-e147-4b0e-a99b-3f2567ca16e3"
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

    When the code compiles without errors, the manifest is served from `https://localhost:4321` and your default browser opens the Copilot Workbench. The Workbench is always available at the `/_layouts/15/copilotworkbench.aspx` path of any site in your tenant, for example `https://yourtenantname.sharepoint.com/_layouts/15/copilotworkbench.aspx`.

1. When prompted, accept the loading of debug manifests so the debug version of your component loads in the Workbench.

    <!-- PLACEHOLDER: screenshot of the component running in the Copilot Workbench -->
    > [!div class="mx-imgBorder"]
    > ![Placeholder: the component under test in the Copilot Workbench](../assets/tutorial-workbench-placeholder.png)

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

    The command creates the package at **./sharepoint/solution/my-awesome-copilot-experience.sppkg**. Because `includeClientSideAssets` is set to `true` in **config/package-solution.json**, the component assets are bundled into the package and hosted automatically in the tenant where the app is installed.

    <!-- PLACEHOLDER: screenshot of the generated .sppkg package -->
    > [!div class="mx-imgBorder"]
    > ![Placeholder: the generated solution package](../assets/tutorial-package-placeholder.png)

## Deploy to the SharePoint app catalog

1. Go to your tenant's **app catalog** and open the **Apps for SharePoint** library.

1. Upload the **./sharepoint/solution/my-awesome-copilot-experience.sppkg** file. SharePoint displays a dialog and asks you to trust the client-side solution.

1. Select **Deploy**.

    <!-- PLACEHOLDER: screenshot of the trust/deploy dialog in the app catalog -->
    > [!div class="mx-imgBorder"]
    > ![Placeholder: deploying the package in the SharePoint app catalog](../assets/tutorial-deploy-placeholder.png)

1. In the app catalog list, select the uploaded app and select **Add to Teams**. This deploys the declarative agent to the tenant's agent catalog and makes it available to users in Microsoft 365 Copilot.

    > [!NOTE]
    > The **Add to Teams** button label will be updated in a future release to better reflect that it also publishes the agent to the tenant agent catalog. Deployment of the agent can take some time to complete.

## Use the app in Microsoft 365 Copilot

1. Open **Microsoft 365 Copilot** and locate the **MyAwesomeCopilotComponent Agent** in the list of available agents.

1. Start a conversation with the agent, for example by selecting the **Get started** conversation starter. Copilot invokes your tool and renders the Copilot component inline in the conversation.

1. Expand the component to fullscreen to see the display mode switch in action.

    <!-- PLACEHOLDER: screenshot of the agent available and running in Microsoft 365 Copilot -->
    > [!div class="mx-imgBorder"]
    > ![Placeholder: the deployed agent available in Microsoft 365 Copilot](../assets/tutorial-use-placeholder.png)

## Next steps

- [Overview of SharePoint Copilot Apps](../overview-copilot-apps.md)
- [Display modes in SharePoint Copilot components](../displayMode.md)
- Review available samples in the [GitHub sample repository](https://github.com/pnp/spfx-copilot-apps).
