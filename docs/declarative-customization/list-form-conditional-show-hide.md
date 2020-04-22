---
title: Show or hide columns in a list form
description: Customize which columns to show or hide using a conditional formula in the list form by constructing a simple formula that are equations performing conditional checks on values in a SharePoint list or library. 
ms.date: 03/16/2020
localization_priority: Priority
---

# Show or hide columns in a list or library form
You can show or hide columns in a list or library form as an alternative to deleting them. When you hide a column, it doesn't affect the column or the data in the column, as it would if you deleted it. To re-use the column, you can simply show it again in the form.

To show or hide a column in a list or library form:

1. Go to the list or library for which you want to show or hide columns in the form.

2. If you are in a list:

- Open an item to view the item details in the display form.

3. If you are in a document library:

- Select a file.
- In the **Information Pane**:
    - Locate the **Properties** section.
    - Click **Edit all**.

4. At the top of the form, select **Edit Form > Edit columns**.

5. In the **Edit columns** pane, check (to show) or uncheck (to hide) the box for the column or columns as needed.

> [!NOTE] If you want to re-arrange the order of the columns, either drag-and-drop the column name, or select the up or down arrow next to the column name as preferred.

6. When you're finished, select **Save**.

## Specify conditional formula to show or hide columns
You can show or hide columns in a list form based on another column's value by specifying a formula that are equations performing conditional checks on values in a SharePoint list or library.

To specify a conditional formula for a column, in the **Edit columns** pane:

1. Navigate to the desired column for which you want to set a conditional formula and find the more options menu (...) next to that column

2. In the more options, select **Edit conditional formula**.

3. In the **Edit conditional formula** dialog:
- To determine whether this column is shown or hidden, specify a conditional formula based on the value of another column.
- To clear the condition, leave it blank.

4. When you are finished, select **Save**.

### Get started with conditional formulas
Formulas are equations that perform conditional expressions on column values in a list or library. A formula starts with an equal sign (=) followed by the _if_ function that returns either a _true_ or a _false_ result. 

For example, the following formula checks if the value for the *Category* column is *Product Management*.

```
=if([$Category]=='Product Management','true', 'false')
```

Returning _true_ results in hiding the column in the form while returning _false_ does not.

The column is represented by specifying the **internal name** of the field surrounded by square brackets and preceeded by a dollar sign: [$InternalName]. For example, to get the value of a field with an internal name of "ProductName", use [$ProductName].

#### Supported column types in conditional show or hide
While the formula supports many of the available column types, we do not currently support the following column types:
* Currency columns
* Location columns
* Calculated columns

#### Quick formula reference

##### Choice column
The following formula checks if the choice column [$Category] has a value *Product Management*:

```
=if([$Category]=='Product Management','true', 'false')
```

##### Number column
The following formula checks if the choice column [$Flightscost] is less than or equal to *120*:

```
=if([$Flightscost]<=120, 'true','false')
```

You can also do arithmetic calculations, such as adding the value of two columns and checking its sum as follows in the following formula:

```
=if(([$Flightscost]+[$Hotelcost])>500, 'true','false')
```

##### Date column
The following formula checks if the date column [$StartDate] is equal to a specific date. To do so, it uses the *Date()* function to convert a given string into a date:

```
=if([$StartDate]==Date('4/6/2020'),'true','false')
```

An example checking if the date column [$StartDate] is less than a specific date:

```
=if([$StartDate] >= Date('4/6/2020'),'true','false')
```

An example checking if the dates from [$StartDate] and [$EndDate] columns are between specific dates:

```
=if([$StartDate] >= Date('4/6/2020') && [$EndDate] <= Date('6/10/2020'),'true','false')
```



