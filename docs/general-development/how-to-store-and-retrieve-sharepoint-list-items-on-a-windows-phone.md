---
title: How to Store and retrieve SharePoint list items on a Windows Phone
ms.prod: SHAREPOINT
ms.assetid: 14ca37a2-5b45-430d-9004-ff3016f89834
---


# How to: Store and retrieve SharePoint list items on a Windows Phone
Learn about the Windows Phone application life cycle and storing network data locally.
One of the most important considerations in the development of Windows Phone apps is the management of state information, both for the overall application and for individual pages or data items within the application. If you're developing Windows Phone apps, you must take into account that users of your apps might lose connectivity to network resources (such as SharePoint lists). The development infrastructure for Windows Phone apps provides mechanisms for handling state information at various stages in the life cycle of an app.
  
    
    


> [!IMPORTANT]
> If you are developing an app for Windows Phone 8, you must use Visual Studio Express 2012 instead of Visual Studio 2010 Express. Except for the development environment, all information in this article applies to creating apps for both Windows Phone 8 and Windows Phone 7. > For more information, see  [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md). 
  
    
    


## Store SharePoint list data locally on a Windows Phone
<a name="BKMK_StoringDataLocally"> </a>

On a Windows Phone, only one app runs at a time, and when a user switches to another app on the phone (by pressing the **Start** button on the phone, for example), the app currently running is deactivated, or, in the terms of Windows Phone development,tombstoned. If the user switches back to the deactivated app (by pressing the **Back** button), the app can be reactivated, but unless you provide logic to handle application state information over the course of the app life cycle, that state information is not preserved by default in the transition from activation to deactivation and back again. (For more information about the application life cycle for Windows Phone apps, see [Execution Model Overview for Windows Phone](http://msdn.microsoft.com/en-us/library/ff817008%28v=VS.92%29.aspx).)
  
    
    
For Windows Phone apps, the **PhoneApplicationService** class exposes standard life-cycle events that can be used to manage application state. In projects created from the Windows Phone SharePoint List Application template (as with projects created from all **Silverlight for Windows Phone** templates), these standard Windows Phone application life-cycle events are declared in the App.xaml file and associated with event handlers in the code-behind file, App.xaml.cs. The declarations in the App.xaml file for your SharePoint list apps should look like the following markup.
  
    
    



```

<Application.ApplicationLifetimeObjects>
    <!--Required object that handles lifetime events for the application-->
    <shell:PhoneApplicationService 
        Launching="Application_Launching" Closing="Application_Closing"Activated="Application_Activated" Deactivated="Application_Deactivated"/>
</Application.ApplicationLifetimeObjects>
```

The **Application_Activated** and **Application_Deactivated** event handlers declared in the App.xaml file are implemented in the App.xaml.cs code-behind file with default logic that caches application state information for use in the phone app as long as the app is not terminated. The implementation of the handlers for these events uses the **State** property (which provides access to a **Dictionary** object) of the **PhoneApplicationService** class to store data. Data stored in this **State** property is transient. That is, it is preserved when the app is deactivated or tombstoned, but not when the app is terminated. It is important to keep in mind as you handle application life-cycle events in your projects that if a Windows app is deactivated when a user switches to another app, that deactivated app is subject to termination by the Windows Phone operating system, depending on circumstances. Any data on the phone that isn't saved to persistent storage is lost, even if that data was saved to transient storage by using the **State** property of the **PhoneApplicationService**.
  
    
    
In a Windows Phone app that gets data from a SharePoint list, the data used on the phone from session to session can of course be retrieved from the server running SharePoint Server, if the server is available. But continuous connectivity to a SharePoint Server may not be available for a Windows Phone device, owing to variations in service coverage by location and other factors. To provide users of your app with access to data in the event of lost connectivity with the server running SharePoint Server, or simply to save data to persistent storage between sessions of the app regardless of server availability, you can take advantage of the **Closing** and **Launching** events of the **PhoneApplicationService** class.
  
    
    
The **Application_Launching** and **Application_Closing** handlers for these events are declared in App.xaml and defined in the App.xaml.cs file, but they are not implemented. To handle storing and retrieving application state information in the context of app termination, you can provide an implementation for the **Application_Closing** event handler to store data in the isolated storage designated for the app so that the data persists between sessions of the app, and you can provide an implementation for the **Application_Launching** event handler to retrieve data from isolated storage when a new session of the app is started (when the app is launched), even if connectivity to the server running SharePoint Server that is the original source of the data is not available.
  
    
    

> [!TIP]
> Data should be encrypted before you save it to a local device. For more information about how to encrypt the data, see  [How to: Encrypt Data in a Windows Phone Application](http://msdn.microsoft.com/en-us/library/hh487164%28v=vs.92%29.aspx)
  
    
    


### To implement event handlers for storing and retrieving application state


1. Create a Windows Phone app by using the Windows Phone SharePoint List Application template in Visual Studio by following the steps in  [How to: Create a Windows Phone SharePoint 2013 list app](how-to-create-a-windows-phone-sharepoint-list-app.md).
    
  
2. In **Solution Explorer**, choose the App.xaml file.
    
  
3. Press F7 to open the code-behind file, App.xaml.cs, for editing.
    
  
4. Locate the (empty) implementation of the **Application_Launching** event handler and replace the event handler with the following code.
    
  ```cs
  
private void Application_Launching(object sender, LaunchingEventArgs e)
{
    if (IsolatedStorageSettings.ApplicationSettings.Contains(DataProvider.ListTitle))
    {
        App.MainViewModel = (ListViewModel)IsolatedStorageSettings.ApplicationSettings
                                              [DataProvider.ListTitle];                
        App.MainViewModel.Initialize();
    }
}
  ```

5. Locate the (empty) implementation of the **Application_Closing** event handler and replace that event handler with the following code.
    
  ```cs
  
private void Application_Closing(object sender, ClosingEventArgs e)
{
    if (IsolatedStorageSettings.ApplicationSettings.Contains(DataProvider.ListTitle))
    {
        IsolatedStorageSettings.ApplicationSettings[DataProvider.ListTitle] = App.MainViewModel;
    }
    else
    {
        IsolatedStorageSettings.ApplicationSettings.Add(DataProvider.ListTitle, App.MainViewModel);
    }
    IsolatedStorageSettings.ApplicationSettings.Save();
}
  ```

6. Save the file.
    
  
With these implementations in place, run your app to initialize the main ViewModel in the app with data from the server running SharePoint Server. Exit the app on the phone (by pressing the **Back** button to navigate past the first page of the app) to trigger the **Application_Closing** event. If you then run your app without connectivity to the server, the ViewModel that was saved to the **IsolatedStorageSettings** **Dictionary** object (in the **Application_Closing** event) is retrieved and initialized. The SharePoint list items that were saved to isolated storage in a previous session of the app are displayed in the List form (List.xaml) of the app.
  
    
    

## Implement a mechanism for editing list items offline
<a name="BKMK_ImplementingOfflineEditing"> </a>

If you follow the procedure in the previous section to implement handlers for the **Closing** and **Launching** events in your app, SharePoint list data that was retrieved from the server when connectivity was available can be displayed in your app even if connectivity to the server is lost in a subsequent session of the app, because the list items are retrieved from local persistent storage on the phone. Based on the implementation in the previous section, however, the list items made available in this way for display while offline can't be edited and saved back to the server unless connectivity is restored. In the following procedure, you'll add a mechanism to your app to provide for storing edited versions of list items locally when connectivity is unavailable. When connectivity to the server is available again, you can retrieve these edited list items and save your changes back to the server.
  
    
    
For the procedures in this section, we assume you're working in the context of a Windows Phone app project created from the Windows Phone SharePoint List Application template and that your app is based on a Product Orders list created from the Custom List template on the server and contains the columns and field types shown in Table 1.
  
    
    

**Table 1. Sample Product Orders list**


|**Column**|**Type**|**Required**|
|:-----|:-----|:-----|
|Product (for example, Title)  <br/> |Single line of text (Text)  <br/> |Yes  <br/> |
|Description  <br/> |Single line of text (Text)  <br/> |No  <br/> |
|Quantity  <br/> |Number  <br/> |Yes  <br/> |
|Order Date  <br/> |Date and Time (DateTime)  <br/> |No  <br/> |
|Fulfillment Date  <br/> |Date and Time (DateTime)  <br/> |No  <br/> |
|Contact Number  <br/> |Single line of text (Text)  <br/> |No  <br/> |
   

### To implement a class to support editing items while offline


1. Starting with a Visual Studio project that was created based on the Product Orders list represented by Table 1, in **Solution Explorer**, choose the node that represents the project (for example, SPListAppLocalStorage).
    
  
2. On the **Project** menu, choose **Add Class**. 
    
    The **Add New Item** dialog box appears with the C# **Class** template selected.
    
  
3. Name the class file DraftItemStore.cs, and then choose **Add**.
    
    The class file is added to the project and opened for editing.
    
  
4. Replace the contents of the class file with the following code.
    
  ```cs
  
using System;
using System.Net;
using System.Windows;
using System.Collections.Generic;
using System.IO.IsolatedStorage;

namespace SPListAppLocalStorage // Based on project name by default.
{
    public class DraftItemStore
    {
        const string DraftsKey = "Drafts";

        public static void AddDraftItem(string id, EditItemViewModel model)
        {
            Dictionary<string, EditItemViewModel> draftCollection = GetDraftItemCollection();
            draftCollection[id] = model;
            SaveDrafts(draftCollection);
        }

        public static void RemoveDraftItem(string id)
        {
            Dictionary<string, EditItemViewModel> draftCollection = GetDraftItemCollection();
            draftCollection.Remove(id);
            SaveDrafts(draftCollection);
        }

        public static void SaveDrafts(Dictionary<string, EditItemViewModel> draft)
        {
            if (IsolatedStorageSettings.ApplicationSettings.Contains(DraftsKey))
            {
                IsolatedStorageSettings.ApplicationSettings[DraftsKey] = draft;
            }
            else
            {
                IsolatedStorageSettings.ApplicationSettings.Add(DraftsKey, draft);
            }
        }

        public static List<EditItemViewModel> Drafts
        {
            get
            {
                Dictionary<string, EditItemViewModel> draftCollection = GetDraftItemCollection();

                List<EditItemViewModel> modelCollection = new List<EditItemViewModel>();
                foreach (KeyValuePair<string, EditItemViewModel> entry in draftCollection)
                {
                    modelCollection.Add(entry.Value);
                }

                return modelCollection;
            }
        }

        public static Dictionary<string, EditItemViewModel> GetDraftItemCollection()
        {
            Dictionary<string, EditItemViewModel> draftCollection = null;
            if (IsolatedStorageSettings.ApplicationSettings.Contains(DraftsKey))
                draftCollection = (Dictionary<string,
                EditItemViewModel>)IsolatedStorageSettings.ApplicationSettings[DraftsKey];

            if (draftCollection == null)
                draftCollection = new Dictionary<string, EditItemViewModel>();

            return draftCollection;
        }

        public static EditItemViewModel GetDraftItemById(string id)
        {
            Dictionary<string, EditItemViewModel> draftCollection = GetDraftItemCollection();
            return !draftCollection.ContainsKey(id) ? null : draftCollection[id];
        }
    }
}
  ```


    The namespace specified in this code is based on the name of the project (SPListAppLocalStorage in this case). You might want to specify a different namespace, based on the name of your project.
    
  
5. Save the file.
    
  
A specific instance of the **EditItemViewModel** class represents a SharePoint list item that is being edited on the phone. You can consider a list item that was edited as a "draft item" before changes to the item are saved to the server. In the code in this class, the **AddDraftItem** method adds a specific instance of the **EditItemViewModel** class (that is, a draft item) as a value to a **Dictionary** object, associating the **EditItemViewModel** in the **Dictionary** with a key based on the identifier for the given list item. (An identifier is assigned by SharePoint Server to each item in a list. In a project based on the Windows Phone SharePoint List Application template, that identifier is stored in the **ID** property of the given **ViewModel** class, such as **EditItemViewModel** or **DisplayItemViewModel**, which represents the list item.) The **RemoveDraftItem** method removes an **EditItemViewModel** from the **Dictionary** object based on a specified identifier. Both of these methods use the **GetDraftItemCollection** method to retrieve the **Dictionary** object containing the **EditItemViewModel** objects from isolated storage and both methods use the **SaveDrafts** method to save the modified **Dictionary** object (with a draft item either added to it or removed from it) back to isolated storage. The **GetDraftItemCollection** method first determines whether a "Drafts" **Dictionary** object has been saved to isolated storage. If so, the method returns that **Dictionary** object; otherwise, the method initializes and returns a new **Dictionary** object. The **Drafts** property of the class provides access to the **Dictionary** of draft items by returning a list (that is, an object based on the **List<T>** generic) of draft items as **EditItemViewModel** objects. The **GetDraftItemById** method returns a given draft item from the **Dictionary** object based on a specified identifier value.
  
    
    
Now you can add elements to the user interface of the phone app and configure them to use the **DraftItemStore** class for editing list items offline. In the following procedures, you will:
  
    
    

- Add and configure a Windows Phone page to display all list items that were saved as draft items to isolated storage on the phone.
    
  
- Add and configure another page, bound to an **EditItemViewModel**, for editing an individual draft item, analogous to the Edit form (EditForm.xaml) for list items.
    
  
- Add a method, **SaveAsDraft**, to the **EditItemViewModel** class that executes the **AddDraftItem** method of the **DraftItemStore** class implemented in the previous procedure.
    
  
- Add an **ApplicationBar** button to the EditForm.xaml file to call the **SaveAsDraft** method.
    
  
- Add an **ApplicationBar** button to the List.xaml file to navigate to the page that displays all list items saved as drafts.
    
  

### To add a page for displaying all draft items saved on the phone


1. In **Solution Explorer**, choose the **Views** folder.
    
  
2. On the **Project** menu, choose **Add New Item**. 
    
    The **Add New Item** dialog box opens.
    
  
3. In the **Add New Item** dialog box, under the **Visual C#** node, choose the **Silverlight for Windows Phone** node.
    
  
4. In the **Templates** pane, choose the **Windows Phone Portrait Page** template.
    
  
5. Name the file Drafts.xaml, and then choose **Add**. 
    
    The file is added to the project under the **Views** node and opened for editing.
    
  
6. In the XAML pane of the designer, replace the contents of the file with the following XAML.
    
  ```
  
<phone:PhoneApplicationPage
    x:Class="SPListAppLocalStorage.Views.Drafts"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:phone="clr-namespace:Microsoft.Phone.Controls;assembly=Microsoft.Phone"
    xmlns:shell="clr-namespace:Microsoft.Phone.Shell;assembly=Microsoft.Phone"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    FontFamily="{StaticResource PhoneFontFamilyNormal}"
    FontSize="{StaticResource PhoneFontSizeNormal}"
    Foreground="{StaticResource PhoneForegroundBrush}"
    SupportedOrientations="Portrait" Orientation="Portrait"
    mc:Ignorable="d" d:DesignHeight="696" d:DesignWidth="480"
    shell:SystemTray.IsVisible="True">

    <!--LayoutRoot is the root grid where all page content is placed-->
    <Grid x:Name="LayoutRoot" Background="Transparent">
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto"/>
            <RowDefinition Height="*"/>
        </Grid.RowDefinitions>

        <!--TitlePanel contains the name of the application and page title-->
        <StackPanel x:Name="TitlePanel" Grid.Row="0" Margin="12,17,0,28">
            <TextBlock x:Name="ApplicationTitle" Text="Product Orders" 
                                    Style="{StaticResource PhoneTextNormalStyle}"/>
            <TextBlock x:Name="PageTitle" Text="Draft Items" Margin="9,-7,0,0" 
                                      Style="{StaticResource PhoneTextTitle1Style}"/>
        </StackPanel>

        <!--ContentPanel - place additional content here-->
        <Grid x:Name="ContentPanel" Grid.Row="1" Margin="12,0,12,0">
            <ListBox x:Name="lstBoxDraftItems" ItemsSource="{Binding}"
                                  SelectionChanged="lstBoxDraftItems_SelectionChanged">
                <ListBox.ItemTemplate>
                    <DataTemplate>
                        <StackPanel>
                            <TextBlock Text="{Binding [Title]}" Style="
                                           {StaticResource PhoneTextTitle2Style}"></TextBlock>
                            <TextBlock Text="{Binding [Description]}" Style="
                                            {StaticResource PhoneTextNormalStyle}"></TextBlock>
                            <TextBlock Text="{Binding [Contact_x0020_Number]}" Style="
                                           {StaticResource PhoneTextNormalStyle}"></TextBlock>
                        </StackPanel>
                    </DataTemplate>
                </ListBox.ItemTemplate>
            </ListBox>
        </Grid>
    </Grid>
 
    <phone:PhoneApplicationPage.ApplicationBar>
        <shell:ApplicationBar IsVisible="True" IsMenuEnabled="True">
            <shell:ApplicationBarIconButton x:Name="btnCancel" 
             IconUri="/Images/appbar.cancel.rest.png" Text="Cancel" Click="OnCancelButtonClick" />
        </shell:ApplicationBar>
    </phone:PhoneApplicationPage.ApplicationBar>

</phone:PhoneApplicationPage>
  ```


    The value of the namespace designation  `<x:Class>` in this code ("SPListAppLocalStorage.Views.Drafts") will vary depending on the name of your project.
    
  
7. With the Drafts.xaml file selected in **Solution Explorer**, press F7 to open the associated code-behind file, Drafts.xaml.cs, for editing.
    
  
8. Replace the contents of the file with the following code.
    
  ```cs
  
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;

namespace SPListAppLocalStorage.Views
{
    public partial class Drafts : PhoneApplicationPage
    {
        public Drafts()
        {
            InitializeComponent();
            this.Loaded += new RoutedEventHandler(Drafts_Loaded);
        }

        private void lstBoxDraftItems_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            ListBox lstBox = sender as ListBox;
            if (lstBox.SelectedIndex == -1)
                return;

            EditItemViewModel selectedDraftItem = lstBox.SelectedItem as EditItemViewModel;
            NavigationService.Navigate(new Uri(string.Format("/Views/DraftItemEditForm.xaml?ID={0}",
                                                   selectedDraftItem.ID), UriKind.Relative));

            lstBox.SelectedIndex = -1;
        }

        void Drafts_Loaded(object sender, RoutedEventArgs e)
        {
            this.DataContext = DraftItemStore.Drafts;
        }

        private void OnCancelButtonClick(object sender, EventArgs e)
        {
            // Navigate back to initial List View form.
            NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
        }
    }
}
  ```

9. Save the files.
    
  

### To add a page for editing individual draft items


1. In **Solution Explorer**, choose the **Views** folder.
    
  
2. On the **Project** menu, choose **Add New Item**. 
    
    The **Add New Item** dialog box opens.
    
  
3. In the **Add New Item** dialog box, under the **Visual C#** node, choose the **Silverlight for Windows Phone** node.
    
  
4. In the **Templates** pane, choose the **Windows Phone Portrait Page** template.
    
  
5. Name the file DraftItemEditForm.xaml, and then choose **Add**. 
    
    The file is added to the project under the **Views** node and opened for editing.
    
  
6. In the XAML pane of the designer, replace the contents of the file with the following XAML.
    
  ```
  
<phone:PhoneApplicationPage
    x:Class="SPListAppLocalStorage.DraftItemEditForm"
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:phone="clr-namespace:Microsoft.Phone.Controls;assembly=Microsoft.Phone"
    xmlns:shell="clr-namespace:Microsoft.Phone.Shell;assembly=Microsoft.Phone"
    xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
    xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
    mc:Ignorable="d" d:DesignWidth="480" d:DesignHeight="696"
    FontFamily="{StaticResource PhoneFontFamilyNormal}"
    FontSize="{StaticResource PhoneFontSizeNormal}"
    Foreground="{StaticResource PhoneForegroundBrush}"
    SupportedOrientations="Portrait" Orientation="Portrait"
    shell:SystemTray.IsVisible="True" x:Name="DraftItemEditPage">

    <!--LayoutRoot is the root grid where all page content is placed-->
    <Grid x:Name="LayoutRoot" Background="Transparent"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" 
             xmlns:controls="clr-namespace:Microsoft.Phone.Controls;assembly=
                Microsoft.Phone.Controls">
        <StackPanel>
            <ProgressBar Background="Red" x:Name="progressBar" Opacity="1" 
                                    HorizontalAlignment="Center" VerticalAlignment="Top" 
                                    Height="15" Width="470" IsIndeterminate="{Binding IsBusy}" 
                                    Visibility="{Binding ShowIfBusy}" />
            <ScrollViewer HorizontalScrollBarVisibility="Auto" Height="700">
                <Grid x:Name="ContentPanel" Width="470">
                    <StackPanel Margin="0,5,0,5">
                        <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                            <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                                Style="{StaticResource PhoneTextNormalStyle}">Product*</TextBlock>
                            <TextBox Style="{StaticResource TextValidationTemplate}" 
                         FontSize="{StaticResource   PhoneFontSizeNormal}" Width="470" 
                         HorizontalAlignment="Left" Name="txtTitle" Text="{Binding [Title], 
                                   Mode=TwoWay,ValidatesOnNotifyDataErrors=True,NotifyOnValidationError=True}" 
                                                                         TextWrapping="Wrap" />
                        </StackPanel>
                        <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                            <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                               Style="{StaticResource PhoneTextNormalStyle}">Description</TextBlock>
                            <TextBox Style="{StaticResource TextValidationTemplate}" 
                               FontSize="{StaticResource PhoneFontSizeNormal}" Width="470" 
                                HorizontalAlignment="Left" Name="txtDescription" 
                                                           Text="{Binding [Description],
                                                           Mode=TwoWay, ValidatesOnNotifyDataErrors=True, 
                                                           NotifyOnValidationError=True}" 
                                       TextWrapping="Wrap" />
                        </StackPanel>
                        <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                            <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                               Style="{StaticResource PhoneTextNormalStyle}">
                                                           Product Category</TextBlock>
                            <ListBox MaxHeight="400" Width="Auto" x:Name="lstBoxProduct_x0020_Category"
                                              ItemsSource="{Binding [Product_x0020_Category]}">
                                <ListBox.ItemTemplate>
                                    <DataTemplate>
                                        <RadioButton FontSize="{StaticResource PhoneFontSizeNormal}" 
                                          HorizontalAlignment="Left" GroupName="Product_x0020_Category" 
                                                                 Content="{Binding Name}" 
                               IsChecked="{Binding IsChecked, Mode=TwoWay}" />
                                    </DataTemplate>
                                </ListBox.ItemTemplate>
                            </ListBox>
                        </StackPanel>
                        <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                            <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                                       Style="{StaticResource PhoneTextNormalStyle}">Quantity*</TextBlock>
                            <TextBox Style="{StaticResource TextValidationTemplate}" 
                                   FontSize="{StaticResource PhoneFontSizeNormal}" Width="470" 
                                      HorizontalAlignment="Left" Name="txtQuantity" Text="{Binding [Quantity], 
                                        Mode=TwoWay, ValidatesOnNotifyDataErrors=True, 
                                           NotifyOnValidationError=True}"
                                             TextWrapping="Wrap" />
                        </StackPanel>
                        <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                            <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                                Style="{StaticResource PhoneTextNormalStyle}">Order Date</TextBlock>
                            <TextBox Height="Auto" Style="{StaticResource TextValidationTemplate}"
                                               FontSize="{StaticResource PhoneFontSizeNormal}" Width="470"  
                                                         HorizontalAlignment="Left" Name="txtOrder_x0020_Date" 
                         Text="{Binding [Order_x0020_Date], Mode=TwoWay, ValidatesOnNotifyDataErrors=True, 
                                           NotifyOnValidationError=True}" TextWrapping="Wrap" />
                            <TextBlock FontSize="16" TextWrapping="Wrap" HorizontalAlignment="Left" 
                                                 Style="{StaticResource PhoneTextSubtleStyle}" 
                                                             Text="{Binding DateTimeFormat}" />
                        </StackPanel>
                        <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                            <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                         Style="{StaticResource PhoneTextNormalStyle}">Fulfillment Date</TextBlock>
                            <TextBox Height="Auto" Style="{StaticResource TextValidationTemplate}"
                                          FontSize="{StaticResource PhoneFontSizeNormal}" Width="470" 
                                          HorizontalAlignment="Left" Name="txtFulfillment_x0020_Date" 
                        Text="{Binding [Fulfillment_x0020_Date], Mode=TwoWay, 
                     ValidatesOnNotifyDataErrors=True, NotifyOnValidationError=True}" 
                         TextWrapping="Wrap" />
                            <TextBlock FontSize="16" TextWrapping="Wrap" HorizontalAlignment="Left"
                                                    Style="{StaticResource PhoneTextSubtleStyle}" Text="{Binding
                                                           DateTimeFormat}" />
                        </StackPanel>
                        <StackPanel Orientation="Horizontal">
                            <TextBlock TextWrapping="Wrap" Width="150" HorizontalAlignment="Left"
                                                  Style="{StaticResource PhoneTextNormalStyle}">Rush 
                                                                   :</TextBlock>
                            <CheckBox Name="txtRush" FontSize="{StaticResource PhoneFontSizeNormal}" 
                                          HorizontalAlignment="Left" IsChecked="{Binding [Rush], Mode=TwoWay, 
                               ValidatesOnNotifyDataErrors=True, NotifyOnValidationError=True}" />
                        </StackPanel>
                        <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                            <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                        Style="{StaticResource PhoneTextNormalStyle}">Contact Number</TextBlock>
                            <TextBox Style="{StaticResource TextValidationTemplate}" 
                                   FontSize="{StaticResource PhoneFontSizeNormal}" Width="470"
                                              HorizontalAlignment="Left" Name="txtContact_x0020_Number"
                                                         Text="{Binding [Contact_x0020_Number], 
                                                         Mode=TwoWay, ValidatesOnNotifyDataErrors=True, 
                                                         NotifyOnValidationError=True}" 
                                                                           TextWrapping="Wrap" />
                        </StackPanel>
                    </StackPanel>
                </Grid>
            </ScrollViewer>
        </StackPanel>
    </Grid>

    <phone:PhoneApplicationPage.ApplicationBar>
        <shell:ApplicationBar IsVisible="True" IsMenuEnabled="True">
            <shell:ApplicationBarIconButton x:Name="btnSubmit" 
                                IconUri="/Images/appbar.save.rest.png" 
                                Text="Submit" Click="OnSubmitButtonClick"/>
            <shell:ApplicationBarIconButton x:Name="btnBack" 
                                IconUri="/Images/appbar.back.rest.png" 
                                 Text="Back to List" Click="OnBackButtonClick"/>
        </shell:ApplicationBar>
    </phone:PhoneApplicationPage.ApplicationBar>

</phone:PhoneApplicationPage>
  ```


    The XAML for defining this page is similar to that of the EditForm.xaml file. You can copy the EditForm.xaml file to use as a basis for DraftItemEditForm.xaml, making the modifications to the file as indicated in this markup.
    
  
7. With the DraftItemEditForm.xaml file chosen in **Solution Explorer**, press F7 to open the associated code-behind file, DraftItemEditForm.xaml.cs, for editing.
    
  
8. Replace the contents of the file with the following code.
    
  ```cs
  
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;
using Microsoft.SharePoint.Client;
using Microsoft.Phone.Tasks;
using System.Device.Location;
using Microsoft.Phone.Shell;
using Microsoft.SharePoint.Phone.Application;

namespace SPListAppLocalStorage
{
    public partial class DraftItemEditForm : PhoneApplicationPage
    {
        EditItemViewModel viewModel;

        /// <summary>
        /// Constructor for Draft Item Edit Form.
        /// </summary>
        public DraftItemEditForm()
        {
            InitializeComponent();
        }

        protected override void OnNavigatedTo(System.Windows.Navigation.NavigationEventArgs e)
        {
 // Include initialization of ViewModel here rather than in constructor to be able to use QueryString value.
            if (viewModel == null)
            {
                viewModel = DraftItemStore.GetDraftItemById(NavigationContext.QueryString["ID"].ToString());
            }

            viewModel.Initialize();
            this.DataContext = viewModel;

            base.OnNavigatedTo(e);
            viewModel.ItemUpdated += new EventHandler<ItemUpdatedEventArgs>(OnItemUpdated);
        }

        protected override void OnNavigatedFrom(System.Windows.Navigation.NavigationEventArgs e)
        {
            base.OnNavigatedFrom(e);
            viewModel.ItemUpdated -= new EventHandler<ItemUpdatedEventArgs>(OnItemUpdated);
        }

        private void OnViewModelInitialization(object sender, InitializationCompletedEventArgs e)
        {
            this.Dispatcher.BeginInvoke(() =>
            {
                // If initialization has failed show error message and return.
                if (e.Error != null)
                {
                    MessageBox.Show(e.Error.Message, e.Error.GetType().Name, MessageBoxButton.OK);
                    return;
                }

                // Set Page's DataContext to current ViewModel instance.
                this.DataContext = (sender as EditItemViewModel);
            });
        }

        private void OnCancelButtonClick(object sender, EventArgs e)
        {
            NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
        }

        private void OnSubmitButtonClick(object sender, EventArgs e)
        {
            viewModel.UpdateItem();
        }

        private void OnItemUpdated(object sender, ItemUpdatedEventArgs e)
        {
            this.Dispatcher.BeginInvoke(() =>
            {
                if (e.Error != null)
                {
                    MessageBox.Show(e.Error.Message, e.Error.GetType().Name, MessageBoxButton.OK);
                    return;
                }

                // Remove Draft Item from local storage if update to server succeeds.
                DraftItemStore.RemoveDraftItem(viewModel.ID.ToString());
                this.NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
            });
        }

        private void OnBackButtonClick(object sender, EventArgs e)
        {
            NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
        }
    }
}
  ```


    As you can see, the namespace used in this file is based on the name of the project (SPListAppLocalStorage).
    
  
9. Add the appbar.back.rest.png image to your project for the **ApplicationBar** button (btnBack) declared in the DraftItemEditForm.xaml file. In **Solution Explorer**, choose the **Images** folder node in the project.
    
  
10. On the **Project** menu, choose **Add Existing Item**. 
    
  
11. In the browser that opens, navigate to the folder in which the standard Windows Phone icon images were installed by the Windows Phone SDK 7.1.
    
    > [!NOTE]
      > The images with a light foreground and a dark background are in  `%PROGRAMFILES%(x86)\\Microsoft SDKs\\Windows Phone\\v7.1\\Icons\\dark` in a standard installation of the SDK.
12. Choose the image file named appbar.back.rest.png, and choose **Add**. The image is added to the project under the **Images** node.
    
  
13. In **Solution Explorer**, choose the image file you just added, and in the **Properties Window** for the file, set the **Build Action** property for the image file to **Content**, and set the **Copy to Output Directory** property to **Copy if newer**.
    
  
14. Save the files.
    
  

### To add an ApplicationBar button to the Edit Form for saving an item as a draft


1. In **Solution Explorer**, choose the EditItemViewModel.cs file under the **ViewModels** node in the project. Press F7 to open the file for editing.
    
  
2. Within the code block (demarcated by opening and closing braces) that implements the **EditItemViewModel** class, add the following public method to the file.
    
  ```cs
  
public void SaveAsDraft()
{
    DraftItemStore.AddDraftItem(this.ID.ToString(), this);
}
  ```

3. In **Solution Explorer**, under the **Views** node in the project, double-click the EditForm.xaml file.
    
    The file is opened for editing in the designer.
    
  
4. In the XAML pane of the designer, add another button to the  `<shell:ApplicationBar>` tag (in addition to the existing **Submit** and **Cancel** buttons), as shown in the following XAML.
    
  ```
  
<phone:PhoneApplicationPage.ApplicationBar>
    <shell:ApplicationBar IsVisible="True" IsMenuEnabled="True">
        <shell:ApplicationBarIconButton x:Name="btnSubmit" 
              IconUri="/Images/appbar.save.rest.png" 
              Text="Submit" Click="OnBtnSubmitClick"/>
        <shell:ApplicationBarIconButton x:Name="btnSaveDraft"            IconUri="/Images/appbar.save.rest.png" Text="Save Draft"            Click="OnSaveDraftButtonClick"/>
        <shell:ApplicationBarIconButton x:Name="btnCancel" 
                      IconUri="/Images/appbar.cancel.rest.png" 
                      Text="Cancel" Click="OnCancelButtonClick"/>
    </shell:ApplicationBar>
</phone:PhoneApplicationPage.ApplicationBar>
  ```

5. With the EditForm.xaml file chosen in **Solution Explorer**, press F7 to open the associated code-behind file, EditForm.xaml.cs, for editing.
    
  
6. Within the code block (demarcated by opening and closing braces) that implements the **EditForm** partial class, add the following event handler to the file.
    
  ```cs
  
private void OnSaveDraftButtonClick(object sender, EventArgs e)
{
    viewModel.SaveAsDraft();
}
  ```

7. Save the files.
    
  

### To add an ApplicationBar button to the List View Form to display all draft items


1. In **Solution Explorer**, under the **Views** node, double-click the List.xaml file.
    
    The file is opened for editing in the designer.
    
  
2. In the XAML pane of the designer, add another button to the **<shell:ApplicationBar>** tag (in addition to the existing **New** and **Refresh** buttons), as shown in the following XAML markup.
    
  ```
  
<phone:PhoneApplicationPage.ApplicationBar>
    <shell:ApplicationBar IsVisible="True" IsMenuEnabled="True">
        <shell:ApplicationBarIconButton x:Name="btnNew" 
        IconUri="/Images/appbar.new.rest.png" Text="New" 
                    Click="OnNewButtonClick"/>
        <shell:ApplicationBarIconButton x:Name="btnRefresh" 
                   IconUri="/Images/appbar.refresh.rest.png" 
        Text="Refresh" IsEnabled="True" Click="OnRefreshButtonClick"/>
        <shell:ApplicationBarIconButton x:Name="btnDrafts"            IconUri="/Images/appbar.folder.rest.png"            Text="View Drafts" IsEnabled="True"            Click="OnDraftsButtonClick"/>
    </shell:ApplicationBar>
</phone:PhoneApplicationPage.ApplicationBar>
  ```

3. Add an icon image to your project for the **Drafts** button. In **Solution Explorer**, choose the **Images** folder node in the project.
    
  
4. On the **Project** menu, choose **Add Existing Item**. 
    
  
5. In the browser that opens, navigate to the folder in which the standard Windows Phone icon images were installed by the Windows Phone SDK 7.1.
    
    > [!NOTE]
      > The images with a light foreground and a dark background are in  `%PROGRAMFILES%(x86)\\Microsoft SDKs\\Windows Phone\\v7.1\\Icons\\dark` in a standard installation of the SDK.
6. Choose the image file named appbar.folder.rest.png, and then choose **Add**. 
    
    The image is added is added to the project under the **Images** node.
    
  
7. In **Solution Explorer**, choose the image file you just added and in the **Properties Window**, set the **Build Action** property for the image file to **Content** and set the **Copy to Output Directory** property to **Copy if newer**.
    
  
8. In **Solution Explorer**, choose the List.xaml file under the **Views** node and press F7. The associated code-behind file, List.xaml.cs, is opened for editing.
    
  
9. Add the following event handler to the file, within the code block (demarcated by opening and closing braces) that implements the **ListForm** partial class.
    
  ```cs
  
private void OnDraftsButtonClick(object sender, EventArgs e)
{
    NavigationService.Navigate(new Uri("/Views/Drafts.xaml", UriKind.Relative));
}
  ```

10. Save all the files in the solution and press F6 to compile the solution.
    
  
If you start the project and deploy it to a Windows Phone Emulator, you see a **View Drafts** button on the **ApplicationBar** of the List form (Figure 1), which brings up all list items stored as drafts.
  
    
    

**Figure 1. Modified List Form with View Drafts button**

  
    
    

  
    
    
![Modified List Form with View Drafts button](images/921bd9ab-d9a4-4cb6-b168-9ae53401d6d6.gif)
  
    
    
At first, because no drafts are saved, the page to display drafts will be empty. Choose an item from the List form (to show the Display form (DisplayForm.xaml) for an item), and then choose the **Edit** button to display the Edit form. If you should lose connectivity with the SharePoint Server, you can then choose the **Save Draft** button on the Edit Form (Figure 2) to save any changes you've made to the list item to isolated storage.
  
    
    

**Figure 2. Modified Edit Form with Save Draft button**

  
    
    

  
    
    
![Modified Edit Form with Save Draft button](images/ce88b78d-5d41-406f-bf51-bee45ad2fe8f.gif)
  
    
    
When the server becomes available again, you can choose the **View Drafts** button on the List form to display the Drafts page (Figure 3).
  
    
    

**Figure 3. Drafts page displaying items saved as drafts to isolated storage**

  
    
    

  
    
    
![Drafts page displaying list items saved as drafts](images/99ff6118-ed5d-4a21-9c11-3aabec8df1e5.gif)
  
    
    
If you choose an item on the Drafts page, the Draft Item Edit form (DraftItemEditForm.xaml) is displayed (Figure 4) and you can make any additional changes, and then click the **Submit** button to save the edited item to the server. At that point, the item is removed from isolated storage because it's no longer treated as a draft item after it's saved with its changes to the server.
  
    
    

**Figure 4. Draft Item Edit Form**

  
    
    

  
    
    
![The Draft Item Edit Form](images/e3718687-682a-41a8-92b5-4eff9070348d.gif)
  
    
    
Notice the similarity between the Draft Item Edit form (Figure 4) and the standard Edit form (Figure 2) in this app. The editing experience for items as draft items should be about the same as the editing experience for items in the context of the Edit form.
  
    
    

## Additional resources
<a name="SP15StoreSPlist_addlresources"> </a>


-  [Build Windows Phone apps that access SharePoint 2013](build-windows-phone-apps-that-access-sharepoint.md)
    
  
-  [Local Data Storage for Windows Phone](http://msdn.microsoft.com/library/fdf7e973-5de5-4cfa-bf63-1e65c90744cc%28Office.15%29.aspx)
    
  
-  [How to: Preserve and Restore Application State for Windows Phone](http://msdn.microsoft.com/library/342e97c1-ff92-4cb2-81fa-e46f87c3cfc2%28Office.15%29.aspx)
    
  
-  [Windows Phone SDK 8.0](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 8](http://www.microsoft.com/en-us/download/details.aspx?id=36818)
    
  
-  [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md)
    
  
-  [Windows Phone SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=27570)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=30476)
    
  

