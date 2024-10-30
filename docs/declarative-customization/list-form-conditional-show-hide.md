---
title: Show or hide columns in a list form
description: Customize which columns to show or hide using a conditional formula in the list form by constructing a simple formula that are equations performing conditional checks on values in a SharePoint list or library.
ms.date: 10/30/2024
ms.localizationpriority: high
---

# Show or hide columns in a list or library form

You can show or hide columns in a list or library form as an alternative to deleting them. When you hide a column, it doesn't affect the column or the data in the column, as it would if you delete it. To re-use the column, you can simply show it again in the form.

To show or hide a column in a list or library form:

1. Go to the list or library for which you want to show or hide columns in the form.
1. If you are in a list:

    - Open an item to view the item details in the display form.

1. If you are in a document library:

    - Select a file.
    - In the **Information Pane**:
        - Locate the **Properties** section.
        - Click **Edit all**.

1. At the top of the form, select **Edit form > Edit columns**.
1. In the **Edit columns** pane, check (to show) or uncheck (to hide) the checkbox for the column or columns as needed.

    > [!NOTE]
    > If you want to re-arrange the order of the columns, either drag-and-drop the column name, or first select the far right hand edge of the column name to display the options menu **(...)** and then select Move Up or Move Down as preferred.

1. When you're finished, select **Save**.

## Specify conditional formula to show or hide columns

You can show or hide columns in a list form based on another column's value by specifying a formula that are equations performing conditional checks on values in a SharePoint list or library.

To specify a conditional formula for a column, in the **Edit columns** pane:

1. Navigate to the desired column for which you want to set a conditional formula
1. Select the far right-hand edge of the column name to display the options menu **(...)**
1. In the more options, select **Edit conditional formula**.
1. In the **Edit conditional formula** dialog:
    - To determine whether this column is shown or hidden, specify a conditional formula based on the value of another column.
    - To clear the condition, leave it blank.

1. When you are finished, select **Save**.

### Get started with conditional formulas

Formulas are equations that perform conditional checks on column values in a list or library. A formula starts with an equal sign (=) followed by the _if_ function that returns either a _true_ or a _false_ result.

For example, the following formula checks if the value for the *Category* column is *Product Management*:

```
=if([$Category] == 'Product Management', 'true', 'false')
```

Returning _true_ shows the column on the form while returning _false_ hides the column.

The column is represented by specifying the **internal name** of the field surrounded by square brackets and preceded by a dollar sign: `[$InternalName]`. For example, to get the value of a field with an internal name of "ProductName", use `[$ProductName]`.

#### Unsupported column types in conditional formulas

While the formula supports many of the available column types, we do not currently support the following column types:

- Person or Group with multiple selections
- Choice with multiple selections
- Time calculations in **Date and Time** column
- Currency columns
- Location columns
- Calculated columns
- Managed Metadata columns

#### Quick formula reference

##### Choice column

The following formula checks if the choice column `[$Category]` has a value *Product Management*:

```
=if([$Category] == 'Product Management', 'true', 'false')
```

##### Number column

The following formula checks if the number column `[$Flightscost]` is less than or equal to *120*:

```
=if([$Flightscost] <= 120, 'true', 'false')
```

You can also do arithmetic calculations, such as adding the value of two columns and checking its sum as given in the following formula:

```
=if(([$Flightscost] + [$Hotelcost]) > 500, 'true', 'false')
```

##### Date column

The following formula checks if the date column `[$StartDate]` equals a specific date. To do so, it uses the *Date()* function to convert a given string into a date:

```
=if([$StartDate] == Date('4/6/2020'), 'true', 'false')
```

An example of checking if the date column `[$StartDate]` is less than or equal to a specific date:

```
=if([$StartDate] <= Date('4/6/2020'), 'true', 'false')
```

An example of checking if the dates from `[$StartDate]` and `[$EndDate]` columns are between specific dates:

```
=if([$StartDate] >= Date('4/6/2020') && [$EndDate] <= Date('6/10/2020'), 'true', 'false')
```

##### Person column

The following formula checks if an email of person column `[$Owner]` is equal to a specific user's email:

```
=if([$Owner.email] == 'nestorw@contoso.com', 'true', 'false')
```

##### Boolean (Yes/No) column

The following formula checks if the Yes/No column `[$Promoted]` equals a Yes. To do so, it checks for the value _true_ which maps to _Yes_ for users.

```
=if([$Promoted] == true, 'true', 'false')
```

The following are also valid:

```
=if([$Promoted], 'true', 'false')
```

```
=[$Promoted]
```

##### Lookup column

> [!NOTE]
> When accessing lookup columns in a column or view formatting, you can access the lookup value and lookup id as separate values. In form formatting and conditional field expressions, both values are returned as a single line of text. For instance, a lookup column referencing an item with item ID 1 (in the source list) with a value of `Toronto` will have a value of `1;#Toronto` when used in form formatting or conditional field expressions.

The following formula checks if the lookup column `[$City]` has a value equal to *Toronto*. To do so, it splits the lookup value result by the separator and checks against the value.

```
=if(substring([$City],indexOf([$City],';#')+2,1000) == 'Toronto', 'true', 'false')
```

Similarly, you can compare against the ID portion of the lookup using this expression:

```
=if(Number(substring([$City],0,indexOf([$City],';#'))) == 1, 'true', 'false')
```
