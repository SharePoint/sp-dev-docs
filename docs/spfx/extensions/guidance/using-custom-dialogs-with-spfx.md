---
title: Tutorial - Use custom dialog boxes with SharePoint Framework Extensions
description: 
ms.date: 01/11/2018
ms.prod: sharepoint
---

# Use custom dialog boxes with SharePoint Framework Extensions

You can use custom dialog boxes, available from the **@microsoft/sp-dialog** package, within the context of SharePoint Framework Extensions or client-side web parts. 

This article describes how to create a custom dialog box and use it within the context of a ListView Command Set extension.

You can access the sample code that this article is based on in the [sp-dev-fx-extensions](https://github.com/SharePoint/sp-dev-fx-extensions/tree/master/samples/react-command-dialog) repo.

## Set up your development environment

To create a custom dialog box, you'll need to follow the steps in the [Set up your development environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment). Make sure that you're using the latest SharePoint Framework Yeoman templates.

## Create a new project

Create a new folder for the project using your console of choice:

```sh
md dialog-cmd
```

Then enter that folder:

```sh
cd dialog-cmd
```

Run the Yeoman generator for the SharePoint Framework:

```sh
yo @microsoft/sharepoint
```

When prompted:

* Accept the default value of **dialog-cmd** as your solution name and press **Enter**.
* Choose **SharePoint Online only (latest)**, and press **Enter**.
* Choose **Use the current folder** and press **Enter**.
* Choose **N** to require extension to be installed on each site explicitly when it's being used.
* Choose **Extension** as the client-side component type to be created. 
* Choose **ListView Command Set** as the extension type to be created.

The next set of prompts will ask for specific information about your extension:

* Use the value of **DialogDemo** as your extension name and press **Enter**.
* Accept the default value of **DialogDemo description** as your extension description and press **Enter**.

![Yeoman SharePoint generator prompts to create an extension solution](../../../images/ext-com-dialog-yeoman-prompts.png)

At this point, Yeoman will install the required dependencies and scaffold the solution files along with the *DialogDemo* extension. This might take a few minutes.

When the scaffold is complete, you should see the following message indicating a successful scaffold:

![SharePoint client-side solution scaffolded successfully](../../../images/ext-com-dialog-yeoman-complete.png)

Once the scaffolding completes, lock down the version of the project dependencies by running the following command:

```sh
npm shrinkwrap
```

Next, open your project folder in your code editor. This article uses Visual Studio Code in the steps and screenshots, but you can use any editor you prefer. To open the folder in Visual Studio Code, use the following command in the console:

```sh
code .
```

![Initial Visual Studio Code structure after scaffolding](../../../images/ext-com-dialog-vs-code-initial.png)

## Modify the extension manifest

In the extension manifest, configure the extension to have only one button. In the code editor, open the **./src/extensions/dialogDemo/DialogDemoCommandSet.manifest.json** file. Replace the commands section with the following JSON:

```json
{
  //...
  "items": {
    "COMMAND_1": {
      "title": { "default": "Open Custom Dialog" },
      "iconImageUrl": "icons/request.png",
      "type": "command"
    }
  }
}
```

## Create a custom dialog box

Create a new file called **ColorPickerDialog.tsx** in the **./src/extensions/dialogDemo/** folder.

Add the following import statements at the top of the newly created file. You're creating your custom dialog box using the [Office UI Fabric React components](https://dev.office.com/fabric#/components), so the implementation will be in React. 


```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import {
  autobind,
  ColorPicker,
  PrimaryButton,
  Button,
  DialogFooter,
  DialogContent
} from 'office-ui-fabric-react';

```

Add the following interface definition just below the import statements. This will be used to pass information and functions between your ListView Command Set extension and your custom dialog box.

```ts
interface IColorPickerDialogContentProps {
  message: string;
  close: () => void;
  submit: (color: string) => void;
  defaultColor?: string;
}
```

Add the following class just below the interface definition. This React class is responsible for rendering the UI experiences inside the custom dialog box. Notice that you use the Office UI Fabric React components for actual rendering and just pass the needed properties.  

```ts
class ColorPickerDialogContent extends React.Component<IColorPickerDialogContentProps, {}> {
  private _pickedColor: string;

  constructor(props) {
    super(props);
    // Default Color
    this._pickedColor = props.defaultColor || '#FFFFFF';
  }

  public render(): JSX.Element {
    return <DialogContent
      title='Color Picker'
      subText={this.props.message}
      onDismiss={this.props.close}
      showCloseButton={true}
    >
      <ColorPicker color={this._pickedColor} onColorChanged={this._onColorChange} />
      <DialogFooter>
        <Button text='Cancel' title='Cancel' onClick={this.props.close} />
        <PrimaryButton text='OK' title='OK' onClick={() => { this.props.submit(this._pickedColor); }} />
      </DialogFooter>
    </DialogContent>;
  }

  @autobind
  private _onColorChange(color: string): void {
    this._pickedColor = color;
  }
}
```
Add the following class definition for your custom dialog box under the `ColorPickerDialogContent` class that you just added. This is the actual custom dialog box that will be called from the ListView Command Set button click and is inherited from the `BaseDialog`.

```ts
export default class ColorPickerDialog extends BaseDialog {
  public message: string;
  public colorCode: string;

  public render(): void {
    ReactDOM.render(<ColorPickerDialogContent
      close={ this.close }
      message={ this.message }
      defaultColor={ this.colorCode }
      submit={ this._submit }
    />, this.domElement);
  }

  public getConfig(): IDialogConfiguration {
    return {
      isBlocking: false
    };
  }

  @autobind
  private _submit(color: string): void {
    this.colorCode = color;
    this.close();
  }
}
```

## Associate the custom dialog box with the ListView Command Set button click
To associate the custom dialog box with your custom ListView Command Set, add the code to initiate the dialog box within the button click operation.

In the code editor, open the **DialogDemoCommandSet.ts** file from the **./src/extensions/dialogDemo/** folder.

Add the following import statements under the existing **strings** import. These are for using the custom dialog box in the context of your ListView Command Set. 

```ts
import ColorPickerDialog from './ColorPickerDialog';
```

Add the following `_colorCode` variable definition above the `onInit` function in the `DialogDemoCommandSet` class. This is used to store the color picker dialog box result.

```ts
  private _colorCode: string;
```

Update the `onExecute` function as follows. This code does the following:

* Initiates the custom dialog box.
* Passes a message for the dialog box, which is used for the title.
* Passed a color code for the dialog box with a default value, if not yet set.
* Shows the custom dialog box.
* Receives and stores the return value from the dialog box.
* Shows the received value in a default dialog box using the `Dialog.alert()` function.

```ts
  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
        const dialog: ColorPickerDialog = new ColorPickerDialog();
        dialog.message = 'Pick a color:';
        // Use 'EEEEEE' as the default color for first usage
        dialog.colorCode = this._colorCode || '#EEEEEE';
        dialog.show().then(() => {
          this._colorCode = dialog.colorCode;
          Dialog.alert(`Picked color: ${dialog.colorCode}`);
        });
        break;
      default:
        throw new Error('Unknown command');
    }
  }
```

## Test the custom dialog box in your tenant

Open the **serve.json** file in the **./config/** folder and update review the current settings in the the file. This file is used to make debugging on SharePoint Framework Extensions easier. You can update the file content to match your own tenant and site details where you want to test your extension. Key value to update is the `pageUrl` property in the json definition to match your own tenant.

Update `pageUrl` to point to a list URL where you want to test the dialog functionality.

```sh
  "serveConfigurations": {
    "default": {
      "pageUrl": "https://sppnp.sharepoint.com/sites/team/Shared%20Documents/Forms/AllItems.aspx",
      "customActions": {
        "9b98b919-fe5e-4758-ac91-6d62e582c4fe": {
          "location": "ClientSideExtension.ListViewCommandSet.CommandBar",
          "properties": {
            "sampleTextOne": "One item is selected in the list",
            "sampleTextTwo": "This command is always visible."
          }
        }
      }
    },
```

> [!NOTE]
> Unique identifier of your extension is automatically updated to this file during initial scaffolding. If you update the properties which your extension will use, you should be updating **serve.json** before you start debuggin.

Return to the console and run the following command:

```sh
gulp serve
```

This will start the bundling of your solution and will serve the resulting manifest from the `localhost` address. Due the configuration in the **serve.json** file, it also opens up a browser in the specific URL with automatically setting the query parameters based on the solution configuration.

Accept the loading of Debug Manifests by choosing **Load debug scripts** when prompted.

![Allow debug scripts warning](../../../images/ext-com-dialog-debug-scripts.png)

Notice that the new button is NOT visible in the toolbar by default, since default solution require that you'll need to select one item from the list. If you do not have any items in the list or library, create an item or upload a document. 

Select item from the list or library and notice how button will be visible in the toolbar with the text *Open Custom Dialog box*.

![Open Cusotm Dialog button visible in the toolbar](../../../images/ext-com-dialog-button-in-toolbar.png)

Click the *Open Custom Dialog box* button to see your custom dialog box rendered within the list view. 

![Color Picker rendered in dialog mode](../../../images/ext-com-dialog-visible-dialog.png)

Choose a color in the *Color Picker* and choose **OK** to test how the code is returning the selected value back to the caller. The selection is then shown using the default alert dialog box.

![Dialog with picked color details](../../../images/ext-com-dialog-oob-alert-dialog.png)

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, please report that to SharePoint engineering using the [issue list at sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues). Thanks for your input advance.