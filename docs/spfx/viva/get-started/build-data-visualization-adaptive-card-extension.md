---
title: Create a Data Visualization Adaptive Card Extension
description: Step by step guide on creating Data Visualization Adaptive Card Extension.
ms.date: 03/03/2024
ms.localizationpriority: high
---
# Create a Data Visualization Adaptive Card Extension

SharePoint Framework 1.19 introduces a new Data Visualization Template that can be used to implement line charts.
This tutorial provides step-by-step guidance on implementing Data Visualization with ACEs.

> [!NOTE]
> This tutorial assumes that you have installed the SPFx v1.19
>
Before you start, complete the procedures in the following articles to ensure that you understand the basic flow of creating a custom Adaptive Card Extension
- [Build your first SharePoint Adaptive Card Extension](./build-first-sharepoint-adaptive-card-extension.md)

## Scaffold an Adaptive Card Extension project

Create a new project directory for your project and change your current folder to that directory.

Create a new project by running the Yeoman SharePoint Generator from within the new directory you created:

```console
yo @microsoft/sharepoint
```

When prompted, enter the following values (select the default option for all prompts omitted below):

- **What is your solution name?** dataVisualization-tutorial
- **Which type of client-side component to create?** Adaptive Card Extension
- **Which template do you want to use?** Data Visualization Card Template (preview) 
- **What is your Adaptive Card Extension name?** DataVisualization

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This process might take few minutes.

## Update your project's hosted workbench URL.

When you use the gulp task **serve**, by default it will launch a browser with the specified hosted workbench URL specified in your project. The default URL for the hosted workbench in a new project points to an invalid URL.

- Locate and open the file **./config/serve.json** in your project.
- Locate the property `initialPage`:

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/core-build/serve.schema.json",
      "port": 4321,
      "https": true,
      "initialPage": "https://{tenantDomain}/ _layouts/workbench.aspx"
    }
    ```

- Change the `{tenantDomain}` domain to the URL of your SharePoint tenant and site you want to use for testing. For example: `https://contoso.sharepoint.com/sites/devsite/_layouts/workbench.aspx`.

At this point, if you do `gulp serve`, then you will see the **Data Visualization** card:

![See the Data Visualization card icon in the workbench toolbox](../../../../docs/images/viva-extensibility/data-visualization/toolbox.png)

If you add the ACE to the workbench, you will see it already prepared for mock line chart:
![Default Data Visualization card](../../../../docs/images/viva-extensibility/data-visualization/ace-default.png)

## Explore the scaffolded code
### Explore the Card View
Locate and open the following file in your project: **./src/adaptiveCardExtensions/dataVisualization/cardView/CardView.ts**.
The card view implements `BaseComponentsCardView` class and implements `cardViewParameters` getter to specify the card configuration:
```ts
// Sample Data
const seriesData : IDataPoint<Date>[] = [
  {
    x: new Date(2024, 1, 1),
    y: 1000
  },
  {
    x: new Date(2024, 2, 1),
    y: 2400
  },
  {
    x: new Date(2024, 3, 1),
    y: 2000
  },
  {
    x: new Date(2024, 4, 1),
    y: 2900
  },
  {
    x: new Date(2024, 5, 1),
    y: 3000
  },
  {
    x: new Date(2024, 6, 1),
    y: 3100
  }
];

export class CardView extends BaseComponentsCardView<
  IDataVisualizationAdaptiveCardExtensionProps,
  IDataVisualizationAdaptiveCardExtensionState,
  IDataVisualizationCardViewParameters
> {
  public get cardViewParameters(): IDataVisualizationCardViewParameters {
    return LineChartCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      body: {
        componentName: 'dataVisualization',
        dataVisualizationKind: 'line',
        series: [{
            data: seriesData,
            lastDataPointLabel: '3.1K'
        }]
      }
    });
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
    };
  }
}
```
The **body** section of the card view specifies the dataVisualization component. 

### Explore possible layouts ###

Based on the configuration in cardView, a chart can be rendered in 2 layouts

#### Regular ####

Adding 0 or 1 components along with a dataVisualization component in the body

![Regular](../../../../docs/images/viva-extensibility/data-visualization/regular-chart.png)

#### Right side ####

Adding more than 1 component in the cardView along with dataVisualization component in the body will render the chart on the right side of the card.

For example: Header and Footer along with dataVisualization component in body.

![Chart on the right side](../../../../docs/images/viva-extensibility/data-visualization/chart-on-right-side.png)


### Explore the Quick Views
The ACE class is located in the following file: **./src/adaptiveCardExtensions/dataVisualization/quickView/QuickView.ts** and mostly has the same code as [Generic Card View](./build-first-sharepoint-adaptive-card-extension.md).

### Explore the ACE class
The ACE class is located in the following file: **./src/adaptiveCardExtensions/dataVisualization/dataVisualizationAdaptiveCardExtension.ts** and mostly has the same code as [Generic Card View](./build-first-sharepoint-adaptive-card-extension.md).