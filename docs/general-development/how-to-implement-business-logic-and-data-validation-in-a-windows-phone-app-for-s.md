---
title: How to Implement business logic and data validation in a Windows Phone app for SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: fbbedc38-9651-4cd6-b523-d93cbf1cd39d
---


# How to: Implement business logic and data validation in a Windows Phone app for SharePoint 2013
Implement data validation in a Windows Phone app created by using the Windows Phone SharePoint List Application template.
In a Windows Phone app intended for production use, you likely need to validate data entered by users to, for example, enforce business logic relevant to your particular circumstances, or to ensure appropriate formatting of entered values, or simply to catch mistakes before saving values to a SharePoint list. Projects based on the Windows Phone SharePoint List Application template include default data validation logic, but such projects also provide a mechanism for developers to implement custom data validation.
  
    
    


> **Important:**
> If you are developing an app for Windows Phone 8, you must use Visual Studio Express 2012 instead of Visual Studio 2010 Express. Except for the development environment, all information in this article applies to creating apps for both Windows Phone 8 and Windows Phone 7. > For more information, see  [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md). 
  
    
    


## Default data validation rules
<a name="BKMK_DefaultValidation"> </a>

Some data types for fields in SharePoint lists are associated by default with simple formatting or data validation. If you enter an invalid URL for a field based on the Hyperlink or Picture field type in a SharePoint list and attempt to save your changes, you see a message indicating that the address you entered is invalid. If you enter a customer name as a value for a field based on the Date and Time field type, you receive a message directing you to enter a date within a valid range for the field.
  
    
    

> **Note:**
> Date input validation is with respect to SharePoint date format. If the date format of the phone locale is required, customize the field and add validations accordingly. 
  
    
    

Some of these basic validation rules are also enforced by default in a Windows Phone app created from the Windows Phone SharePoint List Application template. If you enter anything other than a date value in a field that is bound to a SharePoint field of Date and Time type in the Edit form of a Windows Phone app based on a SharePoint list, you see a validation error message when the focus shifts from the **TextBox** control associated with the field. (See Figure 1.)
  
    
    

**Figure 1. Validation error cue in a Windows Phone app**

  
    
    

  
    
    
![Validation error cue in a Windows Phone app](images/49a93d59-6755-4afc-a703-ca8469b6fa74.gif)
  
    
    
The text box labeled "Start Time" in the Edit form is bound to a Date and Time field in the SharePoint list on which this sample app is based. The validation error cue (in red text) shown in Figure 1 appears if an invalid date is entered in the text box (and the text box subsequently loses focus) because the **ValidatesOnNotifyDataErrors** property of the **Binding** object associated with the **Text** property of the **TextBox** control is set to **True** in the XAML declaration that defines the **TextBox** in the EditForm.xaml file.
  
    
    



```XML

<StackPanel Orientation="Vertical" Margin="0,5,0,5">
   <TextBlock TextWrapping="Wrap" HorizontalAlignment="Left" 
                    Style="{StaticResource PhoneTextNormalStyle}">Start Time*
   </TextBlock>
   <TextBox Height="Auto" Style="{StaticResource TextValidationTemplate}"
    FontSize="{StaticResource PhoneFontSizeNormal}" Width="470" 
        HorizontalAlignment="Left" Name="txtEventDate"
    Text="{Binding [EventDate], Mode=TwoWay, ValidatesOnNotifyDataErrors=True,
                       NotifyOnValidationError=True}"
    TextWrapping="Wrap" />
   <TextBlock FontSize="16" TextWrapping="Wrap" HorizontalAlignment="Left"
    Style="{StaticResource PhoneTextSubtleStyle}" Text="{Binding DateTimeFormat}" />
</StackPanel>
```

(If the **ValidatesOnNotifyDataErrors** property is set to **False**, the user has no indication that the entered data is invalid until the **Save** button is chosen. At that point, the user sees an error message regarding validation errors, because format validation on entered date values is still carried out by the base class from which the **EditItemViewModel** class is derived.)
  
    
    
But some fields may not provide any notification for invalid data in the Windows Phone app. And well-designed Visual Studio project templates are necessarily generalized to be used as a starting point for many different applications. The Windows Phone SharePoint List Application template can't include validation rules relevant to specific contexts and yet retain its value as a generalized template. Depending on your needs and the circumstances in which your particular Windows Phone app will be used, you likely will want to implement your own custom data-validation rules.
  
    
    

## Implement custom data-validation rules
<a name="BKMK_CustomValidation"> </a>

You can validate data entered by users of your Windows Phone app in several ways. A project created by using the Windows Phone SharePoint List Application template includes classes that serve as intermediaries between the forms (that is, the views) of the data in the Windows Phone app (for example, the EditForm.xaml file) and the data itself in the SharePoint list on which the app is based. These classes can be considered implementations of the ViewModel component of the  [Model-View-ViewModel design pattern](http://blogs.msdn.com/b/johngossman/archive/2005/10/08/478683.aspx) (Figure 2). (For more information about how the Windows Phone SharePoint List Application template conforms to the MVVM software design pattern, see [Architecture of the Windows Phone SharePoint List Application template](architecture-of-the-windows-phone-sharepoint-list-application-template.md).)
  
    
    

> **Note:**
> The SharePoint list templates do not include default validations (such as percentage complete in a SharePoint task list, post check for a team discussion list, and SP decimal field type validation), but you can implement such validations. 
  
    
    


**Figure 2. Template files in ViewModel component**

  
    
    

  
    
    
![Template files in ViewModel component](images/2df9591d-a837-4130-98e4-5863d0c717e8.gif)
  
    
    
In applications designed based on the MVVM pattern, data validation is often handled in the data layer (that is, in the Model component). In projects created from the Windows Phone SharePoint List Application template, an extensible mechanism for data validation has been "pushed up" a layer and implemented in the ViewModel component, to make it easier for developers to manage data validation. In projects based on the template, therefore, the most suitable place for custom code that validates user input or otherwise manages data is in these ViewModel classes. In terms of data validation, the **EditItemViewModel** class and the **NewItemViewModel** class (the classes associated with the forms most likely to involve editing and updating list data) both provide an open implementation of a validation method (named **Validate**) that overrides the base validation method in the class from which these two classes are derived.
  
    
    



```cs

public override void Validate(string fieldName, object value)
   {
      base.Validate(fieldName, value);
   }
```

This method provides a convenient mechanism to the developer for adding custom validation logic that targets individual fields. The general approach is to check the value of the **fieldName** argument passed to the **Validate** method to identify the field you want to associate with your custom validation code. You can, for example, use a **switch** statement in your implementation of this method to supply validation logic specific to various fields in the Edit form (EditForm.xaml) of your Windows app.
  
    
    
For the following code example, assume that an installation of SharePoint Server has a Product Orders list created from the Custom List template. The list has been created with the columns and field types shown in Table 1.
  
    
    

**Table 1. Product Orders list**


|**Column**|**Type**|**Required**|
|:-----|:-----|:-----|
|Product (i.e., Title)  <br/> |Single line of text (Text)  <br/> |Yes  <br/> |
|Description  <br/> |Single line of text (Text)  <br/> |No  <br/> |
|Quantity  <br/> |Number  <br/> |Yes  <br/> |
|Order Date  <br/> |Date and Time (DateTime)  <br/> |No  <br/> |
|Fulfillment Date  <br/> |Date and Time (DateTime)  <br/> |No  <br/> |
|Contact Number  <br/> |Single line of text (Text)  <br/> |No  <br/> |
   
Again, for the purposes of this example, assume that the following simple validation rules are to be enforced, based on the business logic employed at the fictitious company Contoso, Ltd., for a given product ordering system:
  
    
    

- Fulfillment dates for orders must be later than the date on which the order was placed.
    
  
- If a customer wants to place an order for a product named Fuzzy Dice, the dice must be ordered in pairs. According to the peculiar rules at Contoso, Ltd., there is simply no such thing as a Fuzzy Die.
    
  
- In the Product Orders list, the field type for phone numbers is "Single line of text" (that is, Text), which can be any text (up to 255 characters by default). For this sample, a formatting validation rule will be enforced that requires entered data to be in one of the common phone number formats; for example, "(555) 555-5555".
    
  

### To implement custom validation rules


1. Assuming you have created a SharePoint list based on the Custom List template that includes the columns and types specified in Table 1, create a Windows Phone app by using the Windows Phone SharePoint List Application template in Visual Studio by following the steps detailed in  [How to: Create a Windows Phone SharePoint 2013 list app](how-to-create-a-windows-phone-sharepoint-list-app.md).
    
  
2. In **Solution Explorer**, in the ViewModels folder for the project, double-click the EditItemViewModel.cs file (or choose the file and press F7) to open the file for editing.
    
  
3. Add the following **using** directives to the list of directives at the top of the file.
    
cs
  
using System.Globalization;
using System.Text.RegularExpressions;


4. Replace the default implementation of the **Validate** method in the file with the following code.
    
cs
  
public override void Validate(string fieldName, object value)
{
    string fieldValue = value.ToString();
    if (!string.IsNullOrEmpty(fieldValue)) //Allowing for blank fields.
    {
        bool isProperValue = false;

        switch (fieldName)
        {
            case "Quantity":
                // Enforce ordering Fuzzy Dice in pairs only.
                int quantityOrdered;
                isProperValue = Int32.TryParse(fieldValue, out quantityOrdered);
                if (isProperValue)
                {
                    if ((quantityOrdered % 2) != 0) // Odd number of product items ordered.
                    {
                        if ((string)this["Title"] == "Fuzzy Dice")
                        {
                            AddError("Item[Quantity]", "Fuzzy Dice must be ordered in pairs. 
                                                                   No such thing as a Fuzzy Die!");
                        }
                        else
                        {
                            // Restriction on ordering in pairs doesn't apply to other products.
                            RemoveAllErrors("Item[Quantity]");
                        }
                    }
                    else
                    {
                        RemoveAllErrors("Item[Quantity]");
                    }
                }
                break;
            case "Fulfillment_x0020_Date":
                // Determine whether fulfillment date is later than order date.
                DateTime fulfillmentDate;
                isProperValue = DateTime.TryParse(fieldValue, CultureInfo.CurrentCulture, 
                              DateTimeStyles.AssumeLocal, out fulfillmentDate);
                if (isProperValue)
                {
                    DateTime orderDate;
                    isProperValue = DateTime.TryParse((string)this["Order_x0020_Date"], 
                               CultureInfo.CurrentCulture, DateTimeStyles.AssumeLocal, out orderDate);

                    if (fulfillmentDate.CompareTo(orderDate) > 0)
                    {
                        RemoveAllErrors("Item[Fulfillment_x0020_Date]");
                    }
                    else
                    {
                        AddError("Item[Fulfillment_x0020_Date]", 
                                "Fulfillment Date must be later than Order Date.");
                    }
                }
                break;
            case "Contact_x0020_Number":
                // Check that contact number is in an appropriate format.
                Regex rx = new Regex(@"^\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$");
                if (rx.IsMatch(fieldValue))
                {
                    RemoveAllErrors("Item[Contact_x0020_Number]");
                }
                else
                {
                    //Specified Contact Number is not a valid phone number.
                    AddError("Item[Contact_x0020_Number]", "Specified Contact Number is invalid.");
                }
                break;
            default:
                // Not adding custom validation for other fields.
                break;
        }
    }

    //And then proceed with default validation from base class.
    base.Validate(fieldName, value);
}



    Keep in mind that the field names specified in this code sample are based on properties of the sample Product Orders list specified in Table 1. (Notice that in the XML schema for list fields in SharePoint Server, spaces in the names of fields are replaced with the string "_x0020_" for the **Name** attribute of the **Field** element that defines a given field. The template uses the **Name** attribute for a **Field** element as it is defined in the XML schema on the server, not the **DisplayName** attribute.) You can identify the field names of those fields for which you want to implement validation logic by looking at the **Binding** declarations of the **Text** properties for the **TextBox** objects defined in EditForm.xaml or by examining the **ViewFields** string of the **CamlQueryBuilder** class in the ListProvider.cs file.
    
  
5. Save the file.
    
  
The custom validation code in this sample is executed only if the **value** argument passed to the **Validate** method is not a null or empty string. As indicated in Table 1, the Fulfillment Date and Contact Number fields are not required to contain data (as the list is defined for the purposes of this sample in SharePoint Server), so we want to allow these fields to be blank. A simple check to determine whether the **value** argument is null is not sufficient, because the value passed could be a zero-length string (which doesn't equate to a null value), and for this sample we don't want to invalidate zero-length strings for fields that can be blank. The validation logic for the Quantity and Fulfillment Date fields includes additional checks of the values passed in to ensure that they are of the appropriate type. If the initial check here (before the **switch** statement) confirmed only that the value passed in were not null (instead of checking against the narrower condition of being a zero-length string), those validations would still not execute if the value were a zero-length string, but the logic to validate data for the **Contact Number** field *would*  still execute if the value passed were a zero-length string. And in this sample we want to allow for the Contact Number field to be blank (a zero-length string), especially when a user starts editing a list item by opening the Edit form.
  
    
    
If you build the project and deploy it to Windows Phone Emulator to run it, you can test your validation logic by entering data that violates your business rules into the fields of the list in the Edit form of the app. (See Figure 3.)
  
    
    

**Figure 3. Custom validation error cues**

  
    
    

  
    
    
![Custom validation error cues](images/fada902b-fa38-4ac8-8566-3693b736ac35.gif)
  
    
    
The code in this sample, if it is included in the EditItemViewModel.cs file only, enforces these validation rules for data entered by users only on the Edit Form. If you want to enforce the validation rules both when users  *add*  new items as well as when they edit them, you must include the same validation logic in the **Validate** method in the NewItemViewModel.cs file (or, preferably, create a separate class file with a function that includes this validation logic and call that same function from the **Validate** methods in both the EditItemViewModel.cs file and the NewItemViewModel.cs file).
  
    
    
The validation logic in this sample enforces given business rules by indicating to the user that entered data is not in a format permitted by the rules, but the entered data is not intercepted and changed by this code. To intercept and, for example, format phone numbers in a consistent way before saving the data to the SharePoint list, you can implement custom data conversion for entered phone numbers. For an explanation of custom data conversion for list item fields, see  [How to: Support and convert SharePoint 2013 field types for Windows Phone apps](how-to-support-and-convert-sharepoint-field-types-for-windows-phone-apps.md).
  
    
    

## Additional resources
<a name="SP15Implementbuslogic_addlresources"> </a>


-  [Build Windows Phone apps that access SharePoint 2013](build-windows-phone-apps-that-access-sharepoint.md)
    
  
-  [Silverlight Data Binding](http://msdn.microsoft.com/en-us/library/cc278072.aspx)
    
  
-  [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md)
    
  
-  [Windows Phone SDK 8.0](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 8](http://www.microsoft.com/en-us/download/details.aspx?id=36818)
    
  
-  [Windows Phone SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=27570)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=30476)
    
  

