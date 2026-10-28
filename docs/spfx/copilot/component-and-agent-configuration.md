---
title: Configure Copilot UX components and agents
description: Understand component manifests, tool parameters, agent grouping, declarative-agent files, and versioning in an SPFx Copilot UX component solution.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# Configure Copilot UX components and agents

A solution can contain multiple Copilot UX components and expose multiple tools through a declarative agent. Component configuration defines the runtime-discovered tools and their inputs. Baseline agent configuration defines the agent's identity, instructions, starter prompts, and other capabilities.

Start with a project from [Build your first Copilot UX component](get-started/build-your-first-copilot-app.md). Preserve generated identifiers and configuration unless you intend to change the corresponding behavior.

## Configuration responsibilities

| File or setting | Responsibility |
| --- | --- |
| Component `*.manifest.json` | Component identity, `componentType: CopilotComponent`, `copilotType: Ux`, display capabilities, and tools. |
| Component properties schema | Parameters accepted by the tool, including types and descriptions used for argument generation. |
| `config/copilot-agent.json` | Groups component IDs into agents for packaging. |
| `copilot/manifest.json` | Teams/Microsoft 365 app identity, numeric app version, icons, and app metadata. |
| `copilot/declarativeAgent.json` | Declarative-agent schema version, name, instructions, conversation starters, and actions. |
| `copilot/ai-plugin.json` | Plugin metadata used when packaging the agent's actions. |
| `copilot/instruction.txt` | Natural-language instructions referenced by the agent definition. |
| `config/package-solution.json` | SharePoint solution identity/version, packaging, and requested API permissions. |

## Component tools and parameters

Each entry in the component manifest's `tools` array has a tool name, localized description, and properties schema. The tool name is distinct from the component's `alias`. Choose tool names and descriptions that separate the intended operations, such as viewing existing expenses versus creating a draft expense.

The generated properties schema can be defined with Zod and converted to JSON Schema. The manifest references the exported schema through the build-time `propertiesSchema.id` reference; the build resolves that reference to the compiled module. Keep the export, path, and manifest reference aligned when moving files.

Descriptions help the model choose a tool and supply arguments; they aren't a security boundary. Validate arguments at runtime and enforce permissions in the data service. Explain missing or invalid input to the user rather than allowing an empty view or an unhandled failure.

## Display capabilities

Declare supported modes with `capabilities.availableDisplayModes`. For the GA Copilot experience, use `inline` and/or `fullscreen`.

Use `capabilities.defaultDisplayMode` to express the preferred startup mode. It must also appear in `availableDisplayModes`; an unsupported preference is ignored. SPFx requests a supported fullscreen preference at initial invocation, but the host decides the granted mode. The host's later updates are authoritative.

See [Display modes](displayMode.md) for startup, close, and reopen behavior. A type or capability field mentioning another mode or mobile platform isn't evidence that the host supports it at GA.

## Add a second component to an existing agent

1. Add the component source, its manifest, and its properties schema using the supported generator workflow.
1. Give the new component its own component ID and distinct tool names.
1. Add the component ID to the existing agent's `components` list in `config/copilot-agent.json`.
1. Check that the tool descriptions distinguish the existing and new capabilities.
1. Build, package, and redeploy the solution.
1. Test both tools in a new conversation with the deployed agent.

Dynamic discovery detects changes to the number of components/functions. If the baseline agent definition hasn't changed, adding the component doesn't require another sync. If you also change starter prompts or agent instructions to introduce the new capability, that baseline change **does** require sync. See the [deployment decision table](development-and-deployment.md#decide-whether-an-update-needs-another-sync).

Don't hand-maintain a duplicate list of the component's parameter definitions in a separate service. SPFx manages discovery for the packaged components. The build and deployment process supplies the integration needed by the agent.

## Agent schemas and validation

New SPFx 1.24 Copilot projects use declarative-agent schema **v1.8**. The schema version in `declarativeAgent.json` selects the allowed structure; it isn't an app-update counter. Keep the schema reference and version aligned, and use the [declarative-agent manifest reference](/microsoft-365/copilot/extensibility/declarative-agent-manifest) for supported fields.

The build validates the declarative-agent definition. Resolve validation failures before packaging and deployment: check required fields, file references, JSON syntax, and schema versions. Inspect generated output, but make durable changes in the source configuration rather than editing temporary build files.

The numeric version in `copilot/manifest.json`, the SPFx solution version, and the declarative-agent schema version serve different purposes. See [Keep version fields separate](development-and-deployment.md#keep-version-fields-separate).

## See also

- [Develop and deploy Copilot UX components](development-and-deployment.md)
- [Provide Copilot with context from your component](provide-context-to-copilot.md)
- [Copilot UX component samples](https://aka.ms/spfx/copilot/samples)
