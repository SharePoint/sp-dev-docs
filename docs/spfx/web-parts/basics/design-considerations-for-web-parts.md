# Design considerations for SharePoint client-side web parts

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environnments.
>

To get started designing web parts, you will need to be familiar with Office UI Fabric. You can use Fabric as a starting point for iconography, font ramp, color usage, animation, and the responsive grid. Building from this foundation is a good starting point even if your goal is to depart visually in order to match your own company’s brand or look and feel.

## Office UI Fabric React Components

Along with Office UI Fabric, you can use Office UI Fabric React components to build your web parts. Fabric React is a responsive, mobile-first collection of  components designed to make it quick and simple for you to create web experiences using the Office Design Language.

The following To Do list example uses Fabric components in the property pane that lets the page author configure a web part.

![Example of a Todo web part that uses Fabric](../../../../images/design-wp-todo-example.png)

You can find a complete list of the Office UI Fabric styles, typography, color, icons, and animations at [Office UI Fabric styles](http://dev.office.com/fabric/styles).


## Responsive behavior

Pages in the new SharePoint authoring experience use the Office UI Fabric responsive grid to help ensure that each page will look great. 

### Max width

We recommend that all web parts use a 100% maximum width to ensure that they will re-flow and function properly on any page. The page and column widths are defined by the page template but can be modified by the author. If a max pixel value is set in the web part, there could be unexpected results in both functionality and layout when the page is seen at different widths.

![Max width web part responsive behavior](../../../../images/design-wp-responsive-max-width.png)

### Min width

All web parts should be designed to reflow as the page/column width gets smaller down to a min width of 320 px.

![Min width web part responsive behavior](../../../../images/design-wp-responsive-min-width.png)

## Web part published mode vs edit mode

The new SharePoint page authoring experience has two modes:

* **Published mode** which allows your team or audience to view content and interact with web parts.
* **Edit mode** which allows page author(s) to add and configure web parts to add content to a page.

### Edit mode

#### Add hint and Toolbox

The add hint is a horizontal line with a plus icon that is visible when a web part is selected and on hover to indicate where page authors can add new web parts to their page. The toolbox opens when a user clicks/taps the plus icon. The toolbox contains all the web parts that can be added to a page.

![Web part add hint and toolbox](../../../../images/design-wp-toolbox.png)

#### Toolbar

A vertical toolbar and bounding box is part of the framework for every web part and provided by the page. Each web part has an edit and delete action in the toolbar.

![Web part vertical toolbar](../../../../images/design-wp-toolbar.png)

#### Contextual edits

A WYSIWYG experience should be designed for web parts to fill in information or add content that will be displayed to the user when published. Entering this content should be done in page so the user understands how the viewer will see the content. For example, titles and descriptions should be filled out where the text displays or new tasks should be added and modified in context of the page.

![Web part contextual edits](../../../../images/design-wp-contexual-edits.png)

#### Item-level edits

UI can change within the web part; for example, turning text into a text field to fill out links or when displaying UI to reorder items or to check of tasks in a web part

![Web part item level edits](../../../../images/design-wp-item-level-edits.png)

## Property panes

Property panes are invoked via the edit action icon on the toolbar. Panes should primarily contain configuration settings that enable/disable features that either show on page or that make a call to a service to display content.

![Web part property pane design](../../../../images/design-wp-pp.png)

There are three types of property panes to enable you to design and develop web parts that fit your business or customer needs.

### Single pane

A single pane is used for simple web parts that only have a small number of properties to configure.

![Web part single property pane design](../../../../images/design-wp-pp-single.png)

### Accordion pane

A accordion pane is used for containing a group or groups of properties with many options and where the groups would result in a long scrolling list of options. For example, you might have three groups named Properties, Appearance, and Layout, each with ten components.

#### Accordion - One group open

![Web part accordion property pane with one group open](../../../../images/design-wp-pp-accordion.png)

#### Accordion- Two groups open and scrolled

![Web part accordion property pane with two groups open and scrolled](../../../../images/design-wp-pp-accordion-groups.png)


### Property pane steps/pages

A steps pane is used for grouping properties in multiple steps or pages when you need the web part to be configured in a linear order or when choices made on the first step affect options that display on the second step.

**Step 1 of 3**
![Property pane with steps design 1 of 3](../../../../images/design-wp-pp-pages-step1.png)

**Step 2 of 3**
![Property pane with steps design 2 of 3](../../../../images/design-wp-pp-pages-step2.png)

**Step 3 of 3**
![Property pane with steps design 3 of 3](../../../../images/design-wp-pp-pages-step3.png)


## Reactive vs non-reactive web parts

Reactive web parts are designed to be full client-side web parts, which mean that each component that is configured in the properties pane will reflect as the change is made within the web part on the page. For the To-Do List web part, unchecking “Completed Tasks” will hide this view in the web part.

![Reactive web part design](../../../../images/design-wp-pp-reactive.png)

Non-reactive web parts are not fully client side and generally one or more properties need to make a call to set/pull or store data on a server. In this case, you should enable the Apply and Cancel buttons at the bottom of the properties pane.

![Non-reactive web part design](../../../../images/design-wp-pp-non-reactive.png)

## Constructing the To-Do List property pane

The To-Do List example uses the single pane and is a reactive web part. The following shows each Fabric React component and the resulting design.

Adding a description for To-Do List
![Adding a description for To-Do List](../../../../images/design-wp-todo-pp-description.png)

Drop down – to select tasks from an existing list
![Drop down to select tasks from an existing list](../../../../images/design-wp-todo-pp-dropdown.png)

Checkbox– to allow authors to show or hide different views
![Checkbox to allow authors to show or hide different views](../../../../images/design-wp-todo-pp-checkbox.png)

Slider – to set the number of tasks visible
![Slider to set the number of tasks visible](../../../../images/design-wp-todo-pp-slider.png)

After selecting a list from the drop down the web part shows and indicator of items loading onto the page
![Web part showing loading indicator to load items](../../../../images/design-wp-todo-loading-indicator.png)

When the new tasks are loaded the fade into view using animation styles from Office UI Fabric
![Web part with fabric animations](../../../../images/design-wp-todo-fabric-animations.png)
