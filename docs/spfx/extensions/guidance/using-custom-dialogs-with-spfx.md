# Using Custom Dialogs with SharePoint Framework Extensions

Custom dialogs are available from the **@microsoft/sp-dialog** package and can be used within the context of SharePoint Framework Extensions or client-side web parts. 

This tutorial demonstrates the creation of a custom dialog and using it within the context of a ListView Command Set extension.

> The SharePoint Framework dialog is currently in preview status and we are looking to collect feedback before it's officially released. Please provide feedback by using the [sp-dev-docs repository Issue list](https://github.com/SharePoint/sp-dev-docs/issues).

> Please note that debugging Custom ListView Command Sets in SharePoint Online is currently only available from the modern list experience within classic team sites hosted in a **developer tenant**.

> The end result of this tutorial is available as source code at https://github.com/SharePoint/sp-dev-fx-extensions/tree/master/samples/react-command-dialog.  

## Setup your Environment

Before you can complete this guide, you will need to ensure you have [setup your environment](https://dev.office.com/sharepoint/docs/spfx/set-up-your-development-environment) for development 
using the SharePoint Framework (SPFx) and that you are using the latest SharePoint Framework Yeoman templates. 

> You can update your SharePoint Framework Yeoman templates by running the following command:
> ```sh
> npm install -g @microsoft/generator-sharepoint`
> ```

## Create a New Project

Start by creating a new folder for the project using your console of choice:

```sh
md dialog-cmd
```

Then enter that folder:

```sh
cd dialog-cmd
```

Then run the Yeoman generator for the SharePoint Framework:

```sh
yo @microsoft/sharepoint
```

When prompted:

* Accept the default value of **dialog-cmd** as your solution name and press **Enter**.
* Choose **Extension (Preview)** as the client-side component type to be created. 
* Choose **ListView Command Set (Preview)** as the extension type to be created.

The next set of prompts will ask for specific information about your extension:

* Use the value of **DialogDemo** as your extension name and press **Enter**.
* Accept the default value of **DialogDemo description** as your extension description and press **Enter**.

![Yeoman SharePoint generator prompts to create an extension solution](../../../../images/ext-com-dialog-yeoman-prompts.png)

At this point, Yeoman will install the required dependencies and scaffold the solution files along with the *DialogDemo* extension. This might take a few minutes. 

When the scaffold is complete, you should see the following message indicating a successful scaffold:

![SharePoint client-side solution scaffolded successfully](../../../../images/ext-com-dialog-yeoman-complete.png)

> For information about troubleshooting any errors, see [Known issues](../basics/known-issues).

Once the scaffolding completes, open your project folder in your code editor. This article uses Visual Studio Code in the steps and screenshots, but you can use any editor you prefer. To open the folder in Visual Studio Code use the following command in the console:

```sh
code .
```

![Initial Visual Studio Code structure after scaffolding](../../../../images/ext-com-dialog-vs-code-initial.png)

## Modify the Extension Manifest

In the extension manifest, configure the extension to have only one button. In the code editor, open the **./src/extensions/dialogDemo/DialogDemoCommandSet.manifest.json** file. Replace the commands section with the following JSON:

```json
{
  //...
  "commands": {
    "COMMAND_1": {
      "title": "Open Custom Dialog",
      "iconImageUrl": "icons/request.png"
    }
  }
}
```

## Adding the sp-dialog Package to the Solution

Return to the console and execute the following command to include the dialog API in your solution:

```sh
npm install @microsoft/sp-dialog --save
```

Since we are using the `--save` option, this dependency will be added to the **package.json** file. This will ensure that it will be automatically installed when the `npm install` command is executed (this is important when restoring or cloning your project elsewhere).

Return to Visual Studio Code (or your preferred editor).

## Creating a Custom Dialog
Create a new file called **ColorPickerDialog.tsx** in the **./src/extensions/dialogDemo/** folder.

Add the following import statements at the top of the newly created file. We are creating our custom dialog using the [Office UI Fabric React components](https://dev.office.com/fabric#/components), so the implementation will be in React. 

> Currently the `DialogContent` component is coming from `@microsoft/sp-dialog`, but will be included as part of the Office UI Fabric React components soon, as mentioned in the code comments below. 

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseDialog, IDialogConfiguration } from '@microsoft/sp-dialog';
import {
  autobind,
  ColorPicker,
  PrimaryButton,
  Button,
  DialogFooter
  // DialogContent <- This should be imported here for third parties
} from 'office-ui-fabric-react';
// Note: DialogContent is available in v2.32.0 of office-ui-fabric-react
// As a workaround we're importing it from sp-dialog until the next version bump
import { DialogContent } from '@microsoft/sp-dialog';
```

Add the following interface definition just below the import statements. This wil be used to pass information and functions between your ListView Command Set extension and your custom dialog.

```ts
interface IColorPickerDialogContentProps {
  message: string;
  close: () => void;
  submit: (color: string) => void;
  defaultColor?: string;
}
```

Add the following class just below the interface definition. This React class is responsible for rendering the UI experiences inside of the custom dialog. Notice that we use the Office UI Fabric React components for actual rendering and just pass the needed properties.  

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
Add the following class definition for our custom dialog under the just added `ColorPickerDialogContent` class. This is the actual custom dialog which will be called from the ListView Command Set button click and is inherited from the `BaseDialog`.

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

## Associating the Custom Dialog with the ListView Command Set Button Click
To associate the custom dialog with your custom ListView Command Set, the code to initiate the dialog has to be added within the button click operation.

In the code editor, open the **DialogDemoCommandSet.ts** file from the **./src/extensions/dialogDemo/** folder.

Add the following import statements under the existing **strings** import. These are for using the just created custom dialog in the context of your ListView Command Set. 

```ts
import { Dialog } from '@microsoft/sp-dialog';
import ColorPickerDialog from './ColorPickerDialog';
```

Add the following `_colorCode` variable definition above the `onInit` function in the `DialogDemoCommandSet` class. This is used to store the color picker dialog result.

```ts
  private _colorCode: string;
```

Update the `onExecute` function as follows. In this code we are doing the following:

* Initiate our custom dialog
* Pass a message for the dialog, which will be used as the title
* Pass a color code for the dialog with a default value, if not yet set
* Show our custom dialog
* Receive and store the return value from the dialog
* Show the received value in an out-of-the-box dialog using the `Dialog.alert()` function

```ts
  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.commandId) {
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

## Testing the Custom Dialog in your Tenant

Open the **DialogDemoCommandSet.manifest.json** file in **./src/extensions/dialogDemo/** folder and copy the **id** value, which will be used in the debug query parameter.

Return to the console and execute the following command:

```sh
gulp serve --nobrowser
```

Notice that we used the `--nobrowser` option, since there's no value in launching the local workbench since you currently cannot debug extensions locally.

This will start the bundling of your solution and will serve the resulting manifest from the `localhost` address.

![Initial Visual Studio Code structure after scaffolding](../../../../images/ext-com-dialog-gulp-serve.png)

To test your extension, navigate to a site in your SharePoint Online developer tenant.

Navigate to an existing custom list within the site with some items or create a new list and add a few items to it for testing purposes. 

Append the following query string parameters to the URL. Notice that you will need to update the **id** to match your own extension identifier as listed in the **DialogDemoCommandSet.manifest.json** file:

```
?loadSpfx=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&customActions={"8701f44c-8c81-4e54-999d-62763e8f34d2":{"location":"ClientSideExtension.ListViewCommandSet.CommandBar"}}
```

Accept the loading of Debug Manifests by clicking **Load debug scripts** when prompted:

![Allow debug scripts warning](../../../../images/ext-com-dialog-debug-scripts.png)

Notice the new button is visible in the toolbar of the list with the text *Open Custom Dialog*.

![Allow debug scripts warning](../../../../images/ext-com-dialog-button-in-toolbar.png)

Click the *Open Custom Dialog* button to see your custom dialog rendered within the list view. 

![Allow debug scripts warning](../../../../images/ext-com-dialog-visible-dialog.png)

Choose a color in the *Color Picker* and click **OK** to test how the code is returning the selected value back to the caller. The selection is then shown using the out-of-the-box alert dialog.

![Out-of-the-box alert dialog](../../../../images/ext-com-dialog-oob-alert-dialog.png)
