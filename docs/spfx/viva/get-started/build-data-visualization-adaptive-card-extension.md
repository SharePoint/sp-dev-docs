---
title: Create a Data Visualization Adaptive Card Extension
description: Step-by-step guide on creating Data Visualization Adaptive Card Extension.
ms.date: 04/05/2024
ms.localizationpriority: high
---
# Create a Data Visualization Adaptive Card Extension

The [SharePoint Framework v1.19](../../release-1.19.md) introduces a new Data Visualization Template that can be used to implement line charts. This tutorial provides step-by-step guidance on implementing Data Visualization with Adaptive Card Extensions (ACEs).

[!INCLUDE [developer-preview-notice](../../../../includes/snippets/developer-preview-notice.md)]

> [!NOTE]
> Before you start, complete the procedures in the following articles to ensure that you understand the basic flow of creating a custom Adaptive Card Extension: [Build your first SharePoint Adaptive Card Extension](./build-first-sharepoint-adaptive-card-extension.md)

## Scaffold an Adaptive Card Extension project

Create a new project directory for your project and change your current folder to that directory.

Create a new project by running the Yeoman SharePoint Generator from within the new directory you created:

```console
yo @microsoft/sharepoint
```

When prompted, enter the following values (select the default option for all other prompts):

- **What is your solution name?** dataVisualization-tutorial
- **Which type of client-side component to create?** Adaptive Card Extension
- **Which template do you want to use?** Data Visualization Card Template (preview)
- **What is your Adaptive Card Extension name?** DataVisualization

At this point, Yeoman installs the required dependencies and scaffolds the solution files. This process might take few minutes.

Next, run **gulp serve** from the command line in the root of the project. Select the add icon in the hosted workbench to open the toolbox, you'll see the **Data Visualization** card:

![See the Data Visualization card icon in the workbench toolbox](../../../../docs/images/viva-extensibility/data-visualization/toolbox.png)

Select the **DataVisualization** component to add it to the workbench. The default rendering renders the line chart using mock data:

![Default Data Visualization card](../../../../docs/images/viva-extensibility/data-visualization/ace-default.png)

## Explore the scaffolded code

### Explore the Card View

Locate and open the following file: **./src/adaptiveCardExtensions/dataVisualization/cardView/CardView.ts**. The card view implements the `BaseComponentsCardView` base class `cardViewParameters` getter to specify the card configuration:

```typescript
const seriesData : IDataPoint<Date>[] = [
  ... // omitted for brevity
];

export class CardView extends BaseComponentsCardView<..> {
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
}
```

Notice how the `body` section of the card view specifies the `dataVisualization` component.

### Explore possible layouts

Based on the configuration in card view, a chart can be rendered in two layouts:

#### Regular

Adding zero or one component along with a `dataVisualization` component in the body:

![Regular](../../../../docs/images/viva-extensibility/data-visualization/regular-chart.png)

#### Right side

Adding more than one component in the card view along with `dataVisualization` component in the body will render the chart on the right side of the card. For example: Header and Footer along with `dataVisualization` component in body.

Locate & replace the `cardViewParameters()` getter with the following code to add a `header` and `footer` to the card:

```typescript
public get cardViewParameters(): IDataVisualizationCardViewParameters {
  return LineChartCardView({
    cardBar: {
      componentName: 'cardBar',
      title: this.properties.title
    },
    header: {
      componentName: 'text',
      text: 'Sales Projection'
    },
    body: {
      componentName: 'dataVisualization',
      dataVisualizationKind: 'line',
      series: [{
          data: seriesData,
          lastDataPointLabel: '3.1K'
      }]
    },
    footer: {
      componentName: 'cardButton',
      title: 'View Details',
      action: {
        type: 'QuickView',
        parameters: {
          view: QUICK_VIEW_REGISTRY_ID
        }
      }
    }
  });
}
```

![Chart on the right side](../../../../docs/images/viva-extensibility/data-visualization/chart-on-right-side.png)

### Explore the Quick Views

The ACE class is located in the following file: **./src/adaptiveCardExtensions/dataVisualization/quickView/QuickView.ts** and mostly has the same code as [Generic Card View](./build-first-sharepoint-adaptive-card-extension.md).

### Explore the ACE class

The ACE class is located in the following file: **./src/adaptiveCardExtensions/dataVisualization/dataVisualizationAdaptiveCardExtension.ts** and mostly has the same code as [Generic Card View](./build-first-sharepoint-adaptive-card-extension.md).
