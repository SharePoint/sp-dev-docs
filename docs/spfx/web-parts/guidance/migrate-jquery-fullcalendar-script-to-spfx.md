---
title: Migrate jQuery and FullCalendar solution built using Script Editor web part to SharePoint Framework
description: Migrate a SharePoint customization by using FullCalendar built with the Script Editor web part to the SharePoint Framework.
ms.date: 08/19/2020
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---
# Migrate jQuery and FullCalendar solution built using Script Editor web part to SharePoint Framework

When building SharePoint solutions, SharePoint developers often use the [FullCalendar](https://fullcalendar.io) jQuery plug-in to display data in calendar view. FullCalendar is a great alternative to the standard SharePoint calendar view, as it allows you to render as calendar data from multiple calendar lists, data from non-calendar lists, or even data from outside SharePoint. This article illustrates how you would migrate a SharePoint customization by using FullCalendar built with the Script Editor web part to the SharePoint Framework.

## List of tasks displayed as a calendar built using the Script Editor web part

To illustrate the process of migrating a SharePoint customization using FullCalendar to the SharePoint Framework, you'll use the following solution that shows a calendar view of tasks retrieved from a SharePoint list.

![Calendar view of tasks displayed on a SharePoint page](../../../images/fullcalendar-sewp.png)

The solution is built using the standard SharePoint Script Editor web part. Following is the code used by the customization.

```html
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js"></script>
<link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.css" />
<div id="calendar"></div>

<script>
  var PATH_TO_DISPFORM = _spPageContextInfo.webAbsoluteUrl + "/Lists/Tasks/DispForm.aspx";
  var TASK_LIST = "Tasks";
  var COLORS = ['#466365', '#B49A67', '#93B7BE', '#E07A5F', '#849483', '#084C61', '#DB3A34'];

  displayTasks();

  function displayTasks() {
    $('#calendar').fullCalendar('destroy');
    $('#calendar').fullCalendar({
      weekends: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      displayEventTime: false,
      // open up the display form when a user clicks on an event
      eventClick: function (calEvent, jsEvent, view) {
        window.location = PATH_TO_DISPFORM + "?ID=" + calEvent.id;
      },
      editable: true,
      timezone: "UTC",
      droppable: true, // this allows things to be dropped onto the calendar
      // update the end date when a user drags and drops an event
      eventDrop: function (event, delta, revertFunc) {
        updateTask(event.id, event.start, event.end);
      },
      // put the events on the calendar
      events: function (start, end, timezone, callback) {
        var startDate = start.format('YYYY-MM-DD');
        var endDate = end.format('YYYY-MM-DD');

        var restQuery = "/_api/Web/Lists/GetByTitle('" + TASK_LIST + "')/items?$select=ID,Title,\
Status,StartDate,DueDate,AssignedTo/Title&$expand=AssignedTo&\
$filter=((DueDate ge '" + startDate + "' and DueDate le '" + endDate + "')or(StartDate ge '" + startDate + "' and StartDate le '" + endDate + "'))";

        $.ajax({
          url: _spPageContextInfo.webAbsoluteUrl + restQuery,
          type: "GET",
          dataType: "json",
          headers: {
            Accept: "application/json;odata=nometadata"
          }
        })
          .done(function (data, textStatus, jqXHR) {
            var personColors = {};
            var colorNo = 0;

            var events = data.value.map(function (task) {
              var assignedTo = task.AssignedTo.map(function (person) {
                return person.Title;
              }).join(', ');

              var color = personColors[assignedTo];
              if (!color) {
                color = COLORS[colorNo++];
                personColors[assignedTo] = color;
              }
              if (colorNo >= COLORS.length) {
                colorNo = 0;
              }

              return {
                title: task.Title + " - " + assignedTo,
                id: task.ID,
                color: color, // specify the background color and border color can also create a class and use className parameter.
                start: moment.utc(task.StartDate).add("1", "days"),
                end: moment.utc(task.DueDate).add("1", "days") // add one day to end date so that calendar properly shows event ending on that day
              };
            });

            callback(events);
          });
      }
    });
  }

  function updateTask(id, startDate, dueDate) {
    // subtract the previously added day to the date to store correct date
    var sDate = moment.utc(startDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
      startDate.format("hh:mm") + ":00Z";
    if (!dueDate) {
      dueDate = startDate;
    }
    var dDate = moment.utc(dueDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
      dueDate.format("hh:mm") + ":00Z";

    $.ajax({
      url: _spPageContextInfo.webAbsoluteUrl + '/_api/contextinfo',
      type: 'POST',
      headers: {
        'Accept': 'application/json;odata=nometadata'
      }
    })
      .then(function (data, textStatus, jqXHR) {
        return $.ajax({
          url: _spPageContextInfo.webAbsoluteUrl +
          "/_api/Web/Lists/getByTitle('" + TASK_LIST + "')/Items(" + id + ")",
          type: 'POST',
          data: JSON.stringify({
            StartDate: sDate,
            DueDate: dDate,
          }),
          headers: {
            Accept: "application/json;odata=nometadata",
            "Content-Type": "application/json;odata=nometadata",
            "X-RequestDigest": data.FormDigestValue,
            "IF-MATCH": "*",
            "X-Http-Method": "PATCH"
          }
        });
      })
      .done(function (data, textStatus, jqXHR) {
        alert("Update Successful");
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        alert("Update Failed");
      })
      .always(function () {
        displayTasks();
      });
  }
</script>
```

> [!NOTE]
> This solution is based on the work of [Mark Rackley](http://www.markrackley.net), Office Servers and Services MVP and Chief Strategy Officer at PAIT Group. For more information about the original solution, see [Using FullCalendar.io to Create Custom Calendars in SharePoint](http://www.markrackley.net/2017/06/07/using-fullcalendar-io-to-create-custom-calendars-in-sharepoint/).

First, the customization loads the libraries it uses: jQuery, Moment.js, and FullCalendar in the first few `<script>` and `<link>` elements.

Next, it defines the `<div>` into which the generated calendar view is injected.

It then defines two functions: `displayTasks()`, used to display tasks in the calendar view, and `updateTask()`, which is triggered after dragging and dropping a task to a different date and which updates the dates on the underlying list item. Each function defines its own REST query, which is then used to communicate with the SharePoint List REST API to retrieve or update list items.

Using the FullCalendar jQuery plug-in, with little effort users get rich solutions capable of things such as using different colors to mark different events or using drag and drop to reorganize events.

![Dragging events in FullCalendar to reschedule underlying tasks](../../../images/fullcalendar-sewp-draganddrop.png)

## Migrate the Tasks calendar solution from the Script Editor web part to the SharePoint Framework

Transforming a Script Editor web part-based customization to the SharePoint Framework offers a number of benefits such as more user-friendly configuration and centralized management of the solution. Following is a step-by-step description of how you would migrate the solution to the SharePoint Framework.

First, you migrate the solution to the SharePoint Framework with as few changes to the original code as possible. Later, you transform the solution's code to TypeScript to benefit from its development-time type safety features, and replace some of the code with the SharePoint Framework API to fully benefit from its capabilities and simplify the solution even further.

> [!NOTE]
> The source code of the project in the different stages of migration is available at [Tutorial: Migrate jQuery and FullCalendar solution built using Script Editor web part to SharePoint Framework](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/tutorials/tutorial-migrate-fullcalendar).

### Create new SharePoint Framework project

1. Start by creating a new folder for your project:

    ```console
    md fullcalendar-taskscalendar
    ```

1. Navigate to the project folder:

    ```console
    cd fullcalendar-taskscalendar
    ```

1. In the project folder, run the SharePoint Framework Yeoman generator to scaffold a new SharePoint Framework project:

    ```console
    yo @microsoft/sharepoint
    ```

1. When prompted, enter the following values (*select the default option for all prompts omitted below*):

    - **What is your solution name?**: fullcalendar-taskscalendar
    - **Which baseline packages do you want to target for your component(s)?**: SharePoint Online only (latest)
    - **Which type of client-side component to create?**: WebPart
    - **What is your Web part name?**: Tasks calendar
    - **What is your Web part description?**: Shows tasks in the calendar view
    - **Which framework would you like to use?**: No JavaScript framework

1. Open your project folder in your code editor. In this tutorial, you'll use Visual Studio Code.

### Load JavaScript libraries

Similar to the original solution built by using the Script Editor web part, you first need to load the JavaScript libraries required by the solution. In SharePoint Framework, this usually consists of two steps: specifying the URL of the library to load, and referencing the library in the code.

1. Specify the URLs of libraries to load.

    In the code editor, open the **./config/config.json** file, and change the `externals` section to:

    ```json
    {
      // ..
      "externals": {
        "jquery": {
          "path": "https://code.jquery.com/jquery-1.11.1.min.js",
          "globalName": "jQuery"
        },
        "fullcalendar": {
          "path": "https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.js",
          "globalName": "jQuery",
          "globalDependencies": [
            "jquery"
          ]
        },
        "moment": "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"
      },
      // ..
    }
    ```

1. Open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file and after the last `import` statement, add the following code:

    ```typescript
    import 'jquery';
    import 'moment';
    import 'fullcalendar';
    ```

### Define container div

As in the original solution, the next step is to define the location where the calendar should be rendered.

In the code editor, open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file, and change the `render()` method to:

```typescript
export default class ItRequestsWebPart extends BaseClientSideWebPart<IItRequestsWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
      <div class="${styles.tasksCalendar}">
        <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.css" />
        <div id="calendar"></div>
      </div>`;
  }
  // ...
}
```

### Initialize FullCalendar and load data

The last step is to include the code that initializes the FullCalendar jQuery plug-in and loads the data from SharePoint.

1. In the **./src/webparts/tasksCalendar** folder, create a new file named **script.js**, and paste in the following code:

    ```javascript
    var moment = require('moment');

    var PATH_TO_DISPFORM = window.webAbsoluteUrl + "/Lists/Tasks/DispForm.aspx";
    var TASK_LIST = "Tasks";
    var COLORS = ['#466365', '#B49A67', '#93B7BE', '#E07A5F', '#849483', '#084C61', '#DB3A34'];

    displayTasks();

    function displayTasks() {
      $('#calendar').fullCalendar('destroy');
      $('#calendar').fullCalendar({
        weekends: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        displayEventTime: false,
        // open up the display form when a user clicks on an event
        eventClick: function (calEvent, jsEvent, view) {
          window.location = PATH_TO_DISPFORM + "?ID=" + calEvent.id;
        },
        editable: true,
        timezone: "UTC",
        droppable: true, // this allows things to be dropped onto the calendar
        // update the end date when a user drags and drops an event
        eventDrop: function (event, delta, revertFunc) {
          updateTask(event.id, event.start, event.end);
        },
        // put the events on the calendar
        events: function (start, end, timezone, callback) {
          var startDate = start.format('YYYY-MM-DD');
          var endDate = end.format('YYYY-MM-DD');

          var restQuery = "/_api/Web/Lists/GetByTitle('" + TASK_LIST + "')/items?$select=ID,Title,\
              Status,StartDate,DueDate,AssignedTo/Title&$expand=AssignedTo&\
              $filter=((DueDate ge '" + startDate + "' and DueDate le '" + endDate + "')or(StartDate ge '" + startDate + "' and StartDate le '" + endDate + "'))";

          $.ajax({
            url: window.webAbsoluteUrl + restQuery,
            type: "GET",
            dataType: "json",
            headers: {
              Accept: "application/json;odata=nometadata"
            }
          })
            .done(function (data, textStatus, jqXHR) {
              var personColors = {};
              var colorNo = 0;

              var events = data.value.map(function (task) {
                var assignedTo = task.AssignedTo.map(function (person) {
                  return person.Title;
                }).join(', ');

                var color = personColors[assignedTo];
                if (!color) {
                  color = COLORS[colorNo++];
                  personColors[assignedTo] = color;
                }
                if (colorNo >= COLORS.length) {
                  colorNo = 0;
                }

                return {
                  title: task.Title + " - " + assignedTo,
                  id: task.ID,
                  color: color, // specify the background color and border color can also create a class and use className parameter.
                  start: moment.utc(task.StartDate).add("1", "days"),
                  end: moment.utc(task.DueDate).add("1", "days") // add one day to end date so that calendar properly shows event ending on that day
                };
              });

              callback(events);
            });
        }
      });
    }

    function updateTask(id, startDate, dueDate) {
      // subtract the previously added day to the date to store correct date
      var sDate = moment.utc(startDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
        startDate.format("hh:mm") + ":00Z";
      if (!dueDate) {
        dueDate = startDate;
      }
      var dDate = moment.utc(dueDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
        dueDate.format("hh:mm") + ":00Z";

      $.ajax({
        url: window.webAbsoluteUrl + '/_api/contextinfo',
        type: 'POST',
        headers: {
          'Accept': 'application/json;odata=nometadata'
        }
      })
        .then(function (data, textStatus, jqXHR) {
          return $.ajax({
            url: window.webAbsoluteUrl +
            "/_api/Web/Lists/getByTitle('" + TASK_LIST + "')/Items(" + id + ")",
            type: 'POST',
            data: JSON.stringify({
              StartDate: sDate,
              DueDate: dDate,
            }),
            headers: {
              Accept: "application/json;odata=nometadata",
              "Content-Type": "application/json;odata=nometadata",
              "X-RequestDigest": data.FormDigestValue,
              "IF-MATCH": "*",
              "X-Http-Method": "PATCH"
            }
          });
        })
        .done(function (data, textStatus, jqXHR) {
          alert("Update Successful");
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          alert("Update Failed");
        })
        .always(function () {
          displayTasks();
        });
    }
    ```

  This code is almost identical to the original code of the Script Editor web part customization. The only difference is that where the original code retrieved the URL of the current web from the global `_spPageContextInfo` variable set by SharePoint, the code in the SharePoint Framework uses a custom variable that you have to set in the web part.

  SharePoint Framework client-side web parts can be used both on classic and modern pages. While the `_spPageContextInfo` variable is present on classic pages, it's not available on modern pages, which is why you can't rely on it and need a custom property that you can control yourself instead.

1. To reference this file in the web part, in the code editor, open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file, and change the `render()` method to:

    ```typescript
    export default class ItRequestsWebPart extends BaseClientSideWebPart<IItRequestsWebPartProps> {
      public render(): void {
        this.domElement.innerHTML = `
          <div class="${styles.tasksCalendar}">
            <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.css" />
            <div id="calendar"></div>
          </div>`;

        (window as any).webAbsoluteUrl = this.context.pageContext.web.absoluteUrl;
        require('./script');
      }
      // ...
    }
    ```

1. Verify that the web part is working as expected by executing the following in the command line:

    ```console
    gulp serve --nobrowser
    ```

    Because the web part loads its data from SharePoint, you have to test the web part by using the hosted SharePoint Framework workbench.

1. Navigate to **https://{your-tenant-name}.sharepoint.com/_layouts/workbench.aspx** and add the web part to the canvas. You should now see the tasks displayed in a calendar view by using the FullCalendar jQuery plug-in.

    ![Tasks displayed in a calendar view in a SharePoint Framework client-side web part](../../../images/fullcalendar-spfx.png)

## Add support to configure the web part through web part properties

In the previous steps, you migrated the Tasks calendar solutions from the Script Editor web part to the SharePoint Framework. While the solution already works as expected, it doesn't use any of the SharePoint Framework benefits. The name of the list from which tasks are loaded is included in the code, and the code itself is plain JavaScript, which is harder to refactor than TypeScript.

The following steps illustrate how to extend the existing solution to allow users to specify the name of the list to load the data from. Later, you transform the code to TypeScript to benefit from its type safety features.

### Define web part property to store the name of the list

1. Define a web part property to store the name of the list from which tasks should be loaded. In the code editor, open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.manifest.json** file, and rename the default `description` property to `listName` and clear its value.
1. Update the web part properties interface to reflect the changes in the manifest. In the code editor, open the **./src/webparts/tasksCalendar/ITasksCalendarWebPartProps.ts** file, and change its contents to:

    ```typescript
    export interface ITasksCalendarWebPartProps {
      listName: string;
    }
    ```

1. Update the display labels for the `listName` property.

    Open the **./src/webparts/tasksCalendar/loc/mystrings.d.ts** file, and change its contents to:

    ```typescript
    declare interface ITasksCalendarStrings {
      PropertyPaneDescription: string;
      BasicGroupName: string;
      ListNameFieldLabel: string;
    }

    declare module 'tasksCalendarStrings' {
      const strings: ITasksCalendarStrings;
      export = strings;
    }
    ```

1. Open the **./src/webparts/tasksCalendar/loc/en-us.js** file, and change its contents to:

    ```javascript
    define([], function() {
      return {
        "PropertyPaneDescription": "Tasks calendar settings",
        "BasicGroupName": "Data",
        "ListNameFieldLabel": "List name"
      }
    });
    ```

1. Update the web part to use the newly defined property. In the code editor, open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file, and change the **getPropertyPaneConfiguration** method to:

    ```typescript
    export default class TasksCalendarWebPart extends BaseClientSideWebPart<ITasksCalendarWebPartProps> {
      // ...
      protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
          pages: [
            {
              header: {
                description: strings.PropertyPaneDescription
              },
              groups: [
                {
                  groupName: strings.BasicGroupName,
                  groupFields: [
                    PropertyPaneTextField('listName', {
                      label: strings.ListNameFieldLabel
                    })
                  ]
                }
              ]
            }
          ]
        };
      }

      protected get disableReactivePropertyChanges(): boolean {
        return true;
      }
    }
    ```

To prevent the web part from reloading as users type the name of the list, you've also configured the web part to use the non-reactive property pane by adding the `disableReactivePropertyChanges()` method and setting its return value to `true`.

### Use the configured name of the list to load the data from

Initially, the name of the list from which the data should be loaded was embedded in the REST queries. Now that users can configure this name, the configured value should be injected into the REST queries before executing them. The easiest way to do that is by moving the contents of the **script.js** file to the main web part file.

1. In the code editor, open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file.
1. Locate the following code you previously added to the file:

    ```typescript
    import 'jquery';
    import 'moment';
    import 'fullcalendar';
    ```

    Update the code to the following code:

    ```typescript
    var $: any = require('jquery');
    var moment: any = require('moment');

    import 'fullcalendar';

    var COLORS = ['#466365', '#B49A67', '#93B7BE', '#E07A5F', '#849483', '#084C61', '#DB3A34'];
    ```

    Because Moment.js is referenced in the code that you'll be using later, its name must be known to TypeScript or building the project will fail. The same applies to jQuery.

    Because FullCalendar is a jQuery plug-in that attaches itself to the jQuery object, you don't need to change how it's imported.

    The last part includes copying the list of colors to use for marking the different events.

1. Copy the `displayTasks()` and `updateTask()` functions from the **script.js** file, and paste them as follows inside the `TasksCalendarWebPart` class:

    ```typescript
    export default class TasksCalendarWebPart extends BaseClientSideWebPart<ITasksCalendarWebPartProps> {
      // ...

      private displayTasks() {
        $('#calendar').fullCalendar('destroy');
        $('#calendar').fullCalendar({
          weekends: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          },
          displayEventTime: false,
          // open up the display form when a user clicks on an event
          eventClick: (calEvent, jsEvent, view) => {
            (window as any).location = this.context.pageContext.web.absoluteUrl +
              "/Lists/" + escape(this.properties.listName) + "/DispForm.aspx?ID=" + calEvent.id;
          },
          editable: true,
          timezone: "UTC",
          droppable: true, // this allows things to be dropped onto the calendar
          // update the end date when a user drags and drops an event
          eventDrop: (event, delta, revertFunc) => {
            this.updateTask(event.id, event.start, event.end);
          },
          // put the events on the calendar
          events: (start, end, timezone, callback) => {
            var startDate = start.format('YYYY-MM-DD');
            var endDate = end.format('YYYY-MM-DD');

            var restQuery = "/_api/Web/Lists/GetByTitle('" + escape(this.properties.listName) + "')/items?$select=ID,Title,\
    Status,StartDate,DueDate,AssignedTo/Title&$expand=AssignedTo&\
    $filter=((DueDate ge '" + startDate + "' and DueDate le '" + endDate + "')or(StartDate ge '" + startDate + "' and StartDate le '" + endDate + "'))";

            $.ajax({
              url: this.context.pageContext.web.absoluteUrl + restQuery,
              type: "GET",
              dataType: "json",
              headers: {
                Accept: "application/json;odata=nometadata"
              }
            })
              .done((data, textStatus, jqXHR) => {
                var personColors = {};
                var colorNo = 0;

                var events = data.value.map((task) => {
                  var assignedTo = task.AssignedTo.map((person) => {
                    return person.Title;
                  }).join(', ');

                  var color = personColors[assignedTo];
                  if (!color) {
                    color = COLORS[colorNo++];
                    personColors[assignedTo] = color;
                  }
                  if (colorNo >= COLORS.length) {
                    colorNo = 0;
                  }

                  return {
                    title: task.Title + " - " + assignedTo,
                    id: task.ID,
                    color: color, // specify the background color and border color can also create a class and use className parameter.
                    start: moment.utc(task.StartDate).add("1", "days"),
                    end: moment.utc(task.DueDate).add("1", "days") // add one day to end date so that calendar properly shows event ending on that day
                  };
                });

                callback(events);
              });
          }
        });
      }

      private updateTask(id, startDate, dueDate) {
        // subtract the previously added day to the date to store correct date
        var sDate = moment.utc(startDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
          startDate.format("hh:mm") + ":00Z";
        if (!dueDate) {
          dueDate = startDate;
        }
        var dDate = moment.utc(dueDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
          dueDate.format("hh:mm") + ":00Z";

        $.ajax({
          url: this.context.pageContext.web.absoluteUrl + '/_api/contextinfo',
          type: 'POST',
          headers: {
            'Accept': 'application/json;odata=nometadata'
          }
        })
          .then((data, textStatus, jqXHR) => {
            return $.ajax({
              url: this.context.pageContext.web.absoluteUrl +
              "/_api/Web/Lists/getByTitle('" + escape(this.properties.listName) + "')/Items(" + id + ")",
              type: 'POST',
              data: JSON.stringify({
                StartDate: sDate,
                DueDate: dDate,
              }),
              headers: {
                Accept: "application/json;odata=nometadata",
                "Content-Type": "application/json;odata=nometadata",
                "X-RequestDigest": data.FormDigestValue,
                "IF-MATCH": "*",
                "X-Http-Method": "PATCH"
              }
            });
          })
          .done((data, textStatus, jqXHR) => {
            alert("Update Successful");
          })
          .fail((jqXHR, textStatus, errorThrown) => {
            alert("Update Failed");
          })
          .always(() => {
            this.displayTasks();
          });
      // ...
    }
    ```

    There are a few changes in the code compared to the previous situation.

    - Plain JavaScript functions are now changed into TypeScript methods by replacing the `function` keyword with the `private` modifier. This is required to be able to add them to the `TaskCalendarWebPart` class.
    - Because both methods are now in the same file as the web part, instead of defining a global variable to hold the URL of the current site, you can access it directly from the web part context by using the `this.context.pageContext.web.absoluteUrl` property.
    - In all REST queries, the fixed list name is replaced with the value of the `listName` property, which holds the name of the list as configured by the user. Before using the value, it's being escaped by using the lodash's `escape()` function to disallow script injection.

1. As the last step, change the `render()` method to call the newly added `displayTasks()` method:

    ```typescript
    export default class TasksCalendarWebPart extends BaseClientSideWebPart<ITasksCalendarWebPartProps> {
      public render(): void {
        this.domElement.innerHTML = `
          <div class="${styles.tasksCalendar}">
            <link type="text/css" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.min.css" />
            <div id="calendar"></div>
          </div>`;

        this.displayTasks();
      }
      // ...
    }
    ```

1. Because you have moved the contents of the **script.js** file into the main web part file, the **script.js** is no longer necessary and you can delete it from the project.
1. To verify that the web part is working as expected, run the following in the command line:

    ```console
    gulp serve --nobrowser
    ```

1. Navigate to the hosted Workbench and add the web part to the canvas. Open the web part property pane, specify the name of the list with tasks, and select the **Apply** button to confirm the changes. You should now see tasks displayed in a calendar view in the web part.

    ![Tasks loaded from the configured list and displayed in a SharePoint Framework client-side web part](../../../images/fullcalendar-spfx-list-configured.png)

## Transform the plain JavaScript code to TypeScript

Using TypeScript over plain JavaScript offers a number of benefits. Not only is TypeScript easier to maintain and refactor, but it also allows you to catch errors earlier. The following steps describe how you would transform the original JavaScript code to TypeScript.

### Add type declarations for used libraries

To function properly, TypeScript requires type declarations for the different libraries used in the project. Type declarations are often distributed as npm packages in the @types namespace.

1. Install type declarations for jQuery by executing the following in the command line:

    ```console
    npm install @types/jquery@1 --save-dev
    ```

    Type declarations for Moment.js are distributed together with the Moment.js package. Even though you're loading Moment.js from a URL, to use its typings, you still need to install the Moment.js package in the project.

1. Install the Moment.js package by executing the following in the command line:

    ```console
    npm install moment --save
    ```

> [!NOTE]
> You'll notice we aren't installing a type declaration for the FullCalendar library. The solution this article started with is using an old version of FullCalendar that didn't have valid type declarations at the time, therefore we're going to only selectively use TypeScript types within our solution.
>
> Ideally, you'd consider upgrading the project to a new version of the FullCalendar library. That is beyond the scope of this article as there are numerous API changes from the version our starter solution is based on.

### Update package references

To use types from the installed type declarations, you have to change how you reference libraries.

1. In the code editor, open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file
1. Locate the following code you previously added to the file:

    ```typescript
    var $: any = require('jquery');
    var moment: any = require('moment');

    import 'fullcalendar';
    ```

    Update the code to the following code:

    ```typescript
    import * as $ from 'jquery';
    import 'fullcalendar';
    import * as moment from 'moment';
    ```

### Update main web part files to TypeScript

Now that you have type declarations for all libraries installed in the project, you can start transforming the plain JavaScript code to TypeScript.

1. Define an interface for a task that you retrieve from the SharePoint list. In the code editor, open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file, and just above the web part class, add the following code snippet:

    ```typescript
    interface ITask {
      ID: number;
      Title: string;
      StartDate: string;
      DueDate: string;
      AssignedTo: [{ Title: string }];
    }
    ```

1. In the web part class, change the `displayTasks()` and `updateTask()` methods to:

    ```typescript
    private displayTasks() {
      ($('#calendar') as any).fullCalendar('destroy');
      ($('#calendar') as any).fullCalendar({
        weekends: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        displayEventTime: false,
        // open up the display form when a user clicks on an event
        eventClick: (calEvent: any, jsEvent: MouseEvent, view: any): void => {
          (window as any).location = this.context.pageContext.web.absoluteUrl +
            "/Lists/" + escape(this.properties.listName) + "/DispForm.aspx?ID=" + calEvent.id;
        },
        editable: true,
        timezone: "UTC",
        droppable: true, // this allows things to be dropped onto the calendar
        // update the end date when a user drags and drops an event
        eventDrop: (event: any, delta: moment.Duration, revertFunc: Function): void => {
          this.updateTask(<number>event.id, <moment.Moment>event.start, <moment.Moment>event.end);
        },
        // put the events on the calendar
        events: (start: moment.Moment, end: moment.Moment, timezone: string, callback: Function): void => {
          var startDate = start.format('YYYY-MM-DD');
          var endDate = end.format('YYYY-MM-DD');

          var restQuery = "/_api/Web/Lists/GetByTitle('" + escape(this.properties.listName) + "')/items?$select=ID,Title,\
      Status,StartDate,DueDate,AssignedTo/Title&$expand=AssignedTo&\
      $filter=((DueDate ge '" + startDate + "' and DueDate le '" + endDate + "')or(StartDate ge '" + startDate + "' and StartDate le '" + endDate + "'))";

          $.ajax({
            url: this.context.pageContext.web.absoluteUrl + restQuery,
            type: "GET",
            dataType: "json",
            headers: {
              Accept: "application/json;odata=nometadata"
            }
          })
            .done((data: { value: ITask[] }, textStatus: string, jqXHR: JQueryXHR) => {
              let personColors: { [person: string]: string; } = {};
              var colorNo = 0;

              var events = data.value.map((task: ITask): any => {
                var assignedTo = task.AssignedTo.map((person: { Title: string }): string => {
                  return person.Title;
                }).join(', ');

                var color = personColors[assignedTo];
                if (!color) {
                  color = COLORS[colorNo++];
                  personColors[assignedTo] = color;
                }
                if (colorNo >= COLORS.length) {
                  colorNo = 0;
                }

                return {
                  title: task.Title + " - " + assignedTo,
                  id: task.ID,
                  color: color, // specify the background color and border color can also create a class and use className parameter.
                  start: moment.utc(task.StartDate).add("1", "days"),
                  end: moment.utc(task.DueDate).add("1", "days") // add one day to end date so that calendar properly shows event ending on that day
                };
              });

              callback(events);
            });
        }
      });
    }

    private updateTask(id: number, startDate: moment.Moment, dueDate: moment.Moment) {
      // subtract the previously added day to the date to store correct date
      var sDate = moment.utc(startDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
        startDate.format("hh:mm") + ":00Z";
      if (!dueDate) {
        dueDate = startDate;
      }
      var dDate = moment.utc(dueDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
        dueDate.format("hh:mm") + ":00Z";

      $.ajax({
        url: this.context.pageContext.web.absoluteUrl + '/_api/contextinfo',
        type: 'POST',
        headers: {
          'Accept': 'application/json;odata=nometadata'
        }
      })
        .then((data: { FormDigestValue: string }, textStatus: string, jqXHR: JQueryXHR): JQueryXHR => {
          return $.ajax({
            url: this.context.pageContext.web.absoluteUrl +
              "/_api/Web/Lists/getByTitle('" + escape(this.properties.listName) + "')/Items(" + id + ")",
            type: 'POST',
            data: JSON.stringify({
              StartDate: sDate,
              DueDate: dDate,
            }),
            headers: {
              Accept: "application/json;odata=nometadata",
              "Content-Type": "application/json;odata=nometadata",
              "X-RequestDigest": data.FormDigestValue,
              "IF-MATCH": "*",
              "X-Http-Method": "PATCH"
            }
          });
        })
        .done((data: {}, textStatus: string, jqXHR: JQueryXHR): void => {
          alert("Update Successful");
        })
        .fail((jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => {
          alert("Update Failed");
        })
        .always((): void => {
          this.displayTasks();
        });
      // ...
    }
    ```

  The first change when transforming plain JavaScript to TypeScript are explicit types. While they aren't required, they make it clear which type of data is expected. Any deviation from the specified contract is immediately caught by TypeScript, helping you find possible issues during the development process. This is useful when working with AJAX responses and their data.

  Another change that you might have noticed already is the TypeScript string interpolation. Using string interpolation simplifies dynamic string composition and increases the readability of your code.

  Compare plain JavaScript:

  ```javascript
  var restQuery = "/_api/Web/Lists/GetByTitle('" + TASK_LIST + "')/items?$select=ID,Title,\
  Status,StartDate,DueDate,AssignedTo/Title&$expand=AssignedTo&\
  $filter=((DueDate ge '" + startDate + "' and DueDate le '" + endDate + "')or(StartDate ge '" + startDate + "' and StartDate le '" + endDate + "'))";
  ```

  to:

  ```typescript
  const restQuery: string = `/_api/Web/Lists/GetByTitle('${escape(this.properties.listName)}')/items?$select=ID,Title,\
  Status,StartDate,DueDate,AssignedTo/Title&$expand=AssignedTo&\
  $filter=((DueDate ge '${startDate}' and DueDate le '${endDate}')or(StartDate ge '${startDate}' and StartDate le '${endDate}'))`;
  ```

  The additional benefit of using TypeScript string interpolation is that you don't need to escape quotes, which also simplify composing REST queries.

1. To confirm that everything is working as expected, execute the following in the command line:

    ```console
    gulp serve --nobrowser
    ```

1. Go to the hosted Workbench and add the web part to the canvas. Although visually nothing has changed, the new code base uses TypeScript and its type declarations to help you maintain the solution.

### Replace jQuery AJAX calls with SharePoint Framework API

The solution currently uses jQuery AJAX calls to communicate with the SharePoint REST API. For regular GET requests, the jQuery AJAX API is as convenient as using the SharePoint Framework **SPHttpClient** API. The real difference is when doing POST requests such as the one for updating the event:

```typescript
$.ajax({
  url: this.context.pageContext.web.absoluteUrl + '/_api/contextinfo',
  type: 'POST',
  headers: { 'Accept': 'application/json;odata=nometadata'}
})
  .then((data: { FormDigestValue: string }, textStatus: string, jqXHR: JQueryXHR): JQueryXHR => {
    return $.ajax({
      url: `${this.context.pageContext.web.absoluteUrl}\
/_api/Web/Lists/getByTitle('${escape(this.properties.listName)}')/Items(${id})`,
      type: 'POST',
      data: JSON.stringify({
        StartDate: sDate,
        DueDate: dDate,
      }),
      headers: {
        Accept: "application/json;odata=nometadata",
        "Content-Type": "application/json;odata=nometadata",
        "X-RequestDigest": data.FormDigestValue,
        "IF-MATCH": "*",
        "X-Http-Method": "PATCH"
      }
    });
  })
  .done((data: {}, textStatus: string, jqXHR: JQueryXHR): void => {
    alert("Update Successful");
  });
  // ...
```

Because you want to update a list item, you need to provide SharePoint with a valid request digest token. While the digest is available on classic pages, it's only valid for 3 minutes. Therefore, it's always the safest to retrieve a valid token yourself before doing an update operation. After you obtain the request digest, you have to add it to request headers of the update request. If you don't, the request fails.

The SharePoint Framework **SPHttpClient** API simplifies communicating with SharePoint because it automatically detects if the request is a POST request and needs a valid request digest. If it does, the **SPHttpClient** API automatically retrieves it from SharePoint and adds it to the request. By comparison, the same request issued using the **SPHttpClient** API would look like this:

```typescript
this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}\
/_api/Web/Lists/getByTitle('${escape(this.properties.listName)}')/Items(${id})`, SPHttpClient.configurations.v1, {
  body: JSON.stringify({
    StartDate: sDate,
    DueDate: dDate,
  }),
  headers: {
    Accept: "application/json;odata=nometadata",
    "Content-Type": "application/json;odata=nometadata",
    "IF-MATCH": "*",
    "X-Http-Method": "PATCH"
  }
})
.then((response: SPHttpClientResponse): void => {
  // ...
});
```

1. To replace the original jQuery AJAX calls with the SharePoint Framework **SPHttpClient** API, in the code editor open the **./src/webparts/tasksCalendar/TasksCalendarWebPart.ts** file. Add the following to the list of existing `import` statements:

    ```typescript
    import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
    ```

1. In the `TasksCalendarWebPart` class, replace the `displayTasks()` and `updateTask()` methods with the following code:

    ```typescript
    private displayTasks() {
      ($('#calendar') as any).fullCalendar('destroy');
      ($('#calendar') as any).fullCalendar({
        weekends: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        displayEventTime: false,
        // open up the display form when a user clicks on an event
        eventClick: (calEvent: any, jsEvent: MouseEvent, view: any): void => {
          (window as any).location = this.context.pageContext.web.absoluteUrl +
            "/Lists/" + escape(this.properties.listName) + "/DispForm.aspx?ID=" + calEvent.id;
        },
        editable: true,
        timezone: "UTC",
        droppable: true, // this allows things to be dropped onto the calendar
        // update the end date when a user drags and drops an event
        eventDrop: (event: any, delta: moment.Duration, revertFunc: Function): void => {
          this.updateTask(<number>event.id, <moment.Moment>event.start, <moment.Moment>event.end);
        },
        // put the events on the calendar
        events: (start: moment.Moment, end: moment.Moment, timezone: string, callback: Function): void => {
          var startDate = start.format('YYYY-MM-DD');
          var endDate = end.format('YYYY-MM-DD');

          var restQuery = "/_api/Web/Lists/GetByTitle('" + escape(this.properties.listName) + "')/items?$select=ID,Title,\
      Status,StartDate,DueDate,AssignedTo/Title&$expand=AssignedTo&\
      $filter=((DueDate ge '" + startDate + "' and DueDate le '" + endDate + "')or(StartDate ge '" + startDate + "' and StartDate le '" + endDate + "'))";

          this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + restQuery, SPHttpClient.configurations.v1, {
            headers: {
              'Accept': "application/json;odata.metadata=none"
            }
          })
            .then((response: SPHttpClientResponse): Promise<{ value: ITask[] }> => {
              return response.json();
            })
            .then((data: { value: ITask[] }): void => {
              let personColors: { [person: string]: string; } = {};
              var colorNo = 0;

              var events = data.value.map((task: ITask): any => {
                var assignedTo = task.AssignedTo.map((person: { Title: string }): string => {
                  return person.Title;
                }).join(', ');

                var color = personColors[assignedTo];
                if (!color) {
                  color = COLORS[colorNo++];
                  personColors[assignedTo] = color;
                }
                if (colorNo >= COLORS.length) {
                  colorNo = 0;
                }

                return {
                  title: task.Title + " - " + assignedTo,
                  id: task.ID,
                  color: color, // specify the background color and border color can also create a class and use className parameter.
                  start: moment.utc(task.StartDate).add("1", "days"),
                  end: moment.utc(task.DueDate).add("1", "days") // add one day to end date so that calendar properly shows event ending on that day
                };
              });

              callback(events);
            });
        }
      });
    }

    private updateTask(id: number, startDate: moment.Moment, dueDate: moment.Moment) {
      // subtract the previously added day to the date to store correct date
      var sDate = moment.utc(startDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
        startDate.format("hh:mm") + ":00Z";
      if (!dueDate) {
        dueDate = startDate;
      }
      var dDate = moment.utc(dueDate).add("-1", "days").format('YYYY-MM-DD') + "T" +
        dueDate.format("hh:mm") + ":00Z";

      this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}\
    /_api/Web/Lists/getByTitle('${escape(this.properties.listName)}')/Items(${id})`, SPHttpClient.configurations.v1, {
        body: JSON.stringify({
          StartDate: sDate,
          DueDate: dDate,
        }),
        headers: {
          Accept: "application/json;odata=nometadata",
          "Content-Type": "application/json;odata=nometadata",
          "IF-MATCH": "*",
          "X-Http-Method": "PATCH"
        }
      })
        .then((response: SPHttpClientResponse): void => {
          if (response.ok) {
            alert("Update Successful");
          } else {
            alert("Update Failed");
          }

          this.displayTasks();
        });
    }
    ```

    > [!IMPORTANT]
    > If you're suppressing metadata in the responses of the SharePoint REST API, when using the SharePoint Framework **SPHttpClient** you have to ensure that you're using `application/json;odata.metadata=none` and not `application/json;odata=nometadata` as the value of the **Accept** header. **SPHttpClient** uses OData 4.0 and requires the first value. If you use the latter instead, the request fails with a **406 Not Acceptable** response.

1. To confirm that everything is working as expected, execute the following in the command line:

    ```console
    gulp serve --nobrowser
    ```

1. Go to the hosted Workbench and add the web part to the canvas. Although there are still no visual changes, the new code uses the SharePoint Framework SPHttpClient, which simplifies your code and maintains your solution.
