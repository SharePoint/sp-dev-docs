---
title: Architecture of the Windows Phone SharePoint List Application template
ms.prod: SHAREPOINT
ms.assetid: 2c09bd02-bed0-4293-a4d4-1778692e246a
---


# Architecture of the Windows Phone SharePoint List Application template
Understand the design pattern of projects created from the Windows Phone SharePoint List Application template.
The Windows Phone SharePoint List Application template installed by the Windows Phone SharePoint Software Development Kit has been designed to generate Windows Phone apps based on a pattern that separates parts of the project into different components. The template does the work of creating the classes and files to establish the pattern, allowing developers to focus on extending generated projects based on their particular requirements, business logic, and data.
  
    
    


## The Windows Phone SharePoint List Application template and the MVVM design pattern
<a name="BKMK_MVVMDesignPattern"> </a>

The Windows Phone SharePoint List Application template generates a Visual Studio 2010 project for a Silverlight-based Windows Phone app developed according to a software design pattern known as the View-Model-ViewModel (MVVM) pattern. The MVVM pattern is a way of organizing and compartmentalizing code in a project into manageable layers, which can be independently developed, tested, and modified. It is a particularly effective development pattern for Windows Presentation Foundation (WPF) and Silverlight projects because, among other benefits, the pattern allows for the presentation layer of a given application to have a less rigid dependency on the structure of underlying data, freeing developers to adapt the presentation layer for different contexts (as, for instance, Web browsers, mobile device interfaces, or desktop applications) while retaining the same underlying data structures.
  
    
    
As opposed to a simpler approach of, say, writing all of your data-management code in the code-behind files associated with particular XAML files in a Silverlight application, organizing a project according to the MVVM pattern involves an additional initial investment of effort to plan and develop the necessary classes, the inheritance model, and the methods of communication between the components of the pattern. The Windows Phone SharePoint List Application template takes care of this initial configuration and development work to set up the pattern for you, allowing you to customize and extend the project to develop a functional MVVM application quickly.
  
    
    
The three main components or layers of the MVVM pattern are the View, the Model, and the ViewModel. In projects based on the Windows Phone SharePoint List Application template, these components are implemented by various project files, as shown in Figure 1.
  
    
    

**Figure 1. Windows Phone SharePoint List Application files in the MVVM pattern**

  
    
    

  
    
    
![Template files in MVVM pattern](images/96681da7-ceab-40f3-8d08-441aea9b4a6f.gif)
  
    
    
The following sections explain some of the details related to the implementation of these components in the Windows Phone SharePoint List Application template.
  
    
    

### The Model component

The Model component in the MVVM pattern refers to the classes and structures used to represent the data for an application. For an app based on a SharePoint list, the list and its items serve as the underlying data. In the Windows Phone SharePoint List Application, the **ListDataProvider** class handles the standard SharePoint client object model operations for connecting to a SharePoint list; for example, creating an instance of the **ClientContext** class and setting its properties. The exact implementation details of the **ListDataProvider** class in the template depend on the options specified in the steps of the SharePoint Phone Application Wizard when you create a project based on the template.
  
    
    
The base class, **ListDataProviderBase** (in the Microsoft.SharePoint.Phone.Application.dll), from which the **ListDataProvider** class is derived implements a caching mechanism for SharePoint list data. When list items are retrieved from the server, they are cached by the **ListDataProvider** class in the local memory allocated to the phone app and when those items are needed in the app, the cache is checked first in order to conserve resources and reduce trips to the server.
  
    
    
If you want to filter the data retrieved from the SharePoint list or specify exactly what data to retrieve, you can modify the code in the **ListDataProvider** class (in the ListDataProvider.cs file). The parts of the file you would most likely modify for these purposes are the **LoadDataFromServer** method and the implementation of the static **CamlQueryBuilder** class. You can also derive your own class from the **ListDataProviderBase** class. If you do so, be sure to implement the abstract methods from the base class, **LoadData** and **LoadItem**, and also implement the **Context** property member of the base class, providing a suitable **get** accessor method.
  
    
    

### The View component

The View component in the MVVM pattern refers to the user interface (UI) of an app. In Silverlight-based Windows Phone app, the View component is constituted by XAML files for declaring and qualifying UI elements and code-behind files associated with those XAML files that implement event handlers and other code to determine how users interact with the UI elements.
  
    
    
It is important to distinguish between two senses of the word "view" in the context of developing SharePoint list apps for Windows Phone. A SharePoint list is associated with one or more views, as, for example, the default All Items view for a list, or the Current Events view for a list based on the Calendar list template. These views represent ways of organizing and displaying list items in a SharePoint list. Depending on the kind of SharePoint list (and on whether custom views have been added to the list) you target for your app, the views associated with the list, such as All Tasks or Current Events, are made available for you to choose to include in your app in the SharePoint Phone Application Wizard when you create a project from the template. If you include a given view, the template generates a **PivotItem** control (contained within a **Pivot** control) to render the view of the list.
  
    
    
This sense of the word "view" is to be distinguished from the sense of the word as it applies to the Views in the template. In a project based on the Windows Phone SharePoint List Application template, the Views (implemented as XAML files in the Views folder of the project) refer conceptually to the View component of the MVVM pattern. That is, the Views in the project represent the presentation layer for the data (or, Model) of a given entity. In this case, the entity is either a SharePoint list or a SharePoint list item.
  
    
    
Although the List form (List.xaml) in the project can be said to correspond to the default view associated with a SharePoint list, the conceptual distinction between the default view of a SharePoint list and the View as represented by the List form should still be maintained, because the List form in the project doesn't necessarily map to the default view of the list on the server. If, for example, you modify the default list view on the server (by, say, specifying a given sort order or displaying certain fields and not others), the modifications will not be represented in the XAML that constitutes the List form in the project. You set the order of the items as they are shown in the List form in your app based on your choices in the SharePoint Phone Application Wizard (or based on your subsequent customizations of the List form), regardless of the order configured for the default view associated with the SharePoint list on the server.
  
    
    
The List form represents the View (or presentation layer) for the SharePoint list. The other three View files pertain to individual list items, and they can be said to correspond to the forms available (generally) from the list item menu for a list item in SharePoint.
  
    
    

- The Display form (DisplayForm.xaml) corresponds to the View Item form (DispForm.aspx) for a SharePoint list. This form presents a View for an individual item in a SharePoint list.
    
  
- The Edit form (EditForm.xaml) corresponds to the Edit Item form (EditForm.aspx) for a SharePoint list. This form presents a View for a given item as it is exposed for editing.
    
  
- The New form (NewForm.xaml) file corresponds to the New Item form (NewForm.aspx) for a SharePoint list. This form presents a View for a given item that is to be created and added to the list.
    
  
The List form is always included by default in a project based on the Windows Phone SharePoint List Application template. The XAML files for the other forms in the Views folder of the project are generated based on the list operations (New, Display, or Edit) selected in the SharePoint Phone Application Wizard.
  
    
    

### The ViewModel component

The ViewModel component in the MVVM pattern is intended to serve as a kind of broker to facilitate the interactions between the View component and the Model component, while decoupling the View component from the Model component so it is easier to change one or the other without adversely affecting the other. Strictly speaking, the ViewModel component could be considered part of the presentation layer, because it often includes logic for "shaping" underlying data for presentation in the View component. In projects based on the Windows Phone SharePoint List Application template, the ViewModels implement the code for binding SharePoint list data retrieved from the Model component (that is, from an object of the **ListDataProvider** class) to UI controls in a part of the View component (for example, the Edit form). Depending on the kind of control used to display the data from the list and the type of data (that is, whether the field type for the list item is text or numerical data or something like a SharePoint Choice field), the ViewModel first processes or converts the data such that it can be bound to a given UI control.
  
    
    
In particular, the ViewModel classes in the project (as, for example, the **EditItemViewModel** class) are derived from a base class, **ViewModelBase** (in the Microsoft.SharePoint.Phone.Application.dll), which implements the **INotifyPropertyChanged** interface so that the Silverlight controls constituting the user interface of the app can be updated when values in the underlying data change, and (going in the other direction) changes to the values stored in UI controls can be applied to the underlying data (if bi-directional, or "two-way", binding is configured for a control).
  
    
    
Figure 2 shows a simplified representation of the class inheritance hierarchy for the **EditItemViewModel** class and the binding for a given UI control in the Edit form with the corresponding field in the ViewModel.
  
    
    

**Figure 2. The EditItemViewModel and EditForm classes**

  
    
    

  
    
    
![The EditItemViewModel and EditForm classes](images/9faa4fbc-5fd6-4960-ba25-8a8cc0195562.gif)
  
    
    
The **EditForm** class (which represents the View component from the MVVM pattern) is defined and implemented by two files, the EditForm.xaml file and its associated code-behind file, EditForm.xaml.cs. In the EditForm.xaml.cs file, the **EditItemViewModel** class (representing the ViewModel component of the MVVM pattern) is bound to the View in the EditForm.xaml.cs file by setting the **DataContext** property of the **EditForm** class to an object of the **EditItemViewModel** class.
  
    
    
Software designs based on the MVVM pattern often confine business logic and validation routines to the Model component of the pattern. In projects based on the Windows Phone SharePoint List Application template, however, some operations that are typically considered part of the Model component have been implemented in the ViewModel component to make it more convenient for developers to extend the projects, at the cost of slightly blurring the conceptual distinction between the data layer (Model) and the presentation layer (ViewModel). For example, the ViewModel classes for editing and creating list items (that is, the **EditItemViewModel** and **NewItemViewModel** classes) expose a **Validate** method that developers can override to implement validation of data entered by users. (For information on implementing data validation with these ViewModels, see [How to: Implement business logic and data validation in a Windows Phone app for SharePoint 2013](how-to-implement-business-logic-and-data-validation-in-a-windows-phone-app-for-s.md).)
  
    
    

    
> **Note:**
> The **ListDataProvider** object only loads the data from server. Other operations, such as **Add**, **Update**, and **Delete**, are performed in the ViewModel itself, followed by a refresh call to update the ViewModel data from the server. This design reduces cluttering of the code. 
  
    
    


## The App.xaml file and the Silverlight application model
<a name="BKMK_ApplicationModel"> </a>

The App.xaml file and its associated code-behind file, App.xaml.cs, are standard components of a managed Silverlight application. Applications that use the managed API for Silverlight must include a class derived from the Silverlight  [Application](http://msdn.microsoft.com/en-us/library/system.windows.application%28VS.95%29.aspx) class, in order to implement the Silverlight application model. The **Application** class supports application life-cycle events and facilities for managing resources like images, strings, and XAML templates.
  
    
    
For information about the kinds of modifications you might make to the App.xaml.cs file in your projects, see  [How to: Store and retrieve SharePoint list items on a Windows Phone](how-to-store-and-retrieve-sharepoint-list-items-on-a-windows-phone.md) on implementing event handlers in the App.xaml.cs file to preserve application state information, and [How to: Use multiple SharePoint 2013 lists in a Windows Phone app](how-to-use-multiple-sharepoint-lists-in-a-windows-phone-app.md) on instantiating and configuring additional **ListDataProvider** objects in App.xaml.cs.
  
    
    

## Additional resources
<a name="SP15Winphoneover_addlresources"> </a>


-  [Using the Model-View-ViewModel Pattern](http://msdn.microsoft.com/en-us/library/hh821028.aspx)
    
  
-  [Pivot Control Architecture for Windows Phone](http://msdn.microsoft.com/en-us/library/ff941097%28VS.92%29.aspx)
    
  
-  [Silverlight Application Model](http://msdn.microsoft.com/en-us/library/cc872869%28VS.95%29.aspx)
    
  
-  [Developing a Windows Phone Application using the MVVM Pattern](http://msdn.microsoft.com/en-us/library/hh848247.aspx)
    
  
-  [WPF Apps With The Model-View-ViewModel Design Pattern](http://msdn.microsoft.com/en-us/magazine/dd419663.aspx)
    
  
-  [Windows Phone SDK 8.0](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 8](http://www.microsoft.com/en-us/download/details.aspx?id=36818)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=30476)
    
  

