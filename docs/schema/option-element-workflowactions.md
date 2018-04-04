---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5525a26e-ae81-42f1-84e1-97dfd7336360
---

# Option Element (WorkflowActions)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Used to populate **DesignerType** drop-down list box controls that are not data bound. **Option** elements contain text and value pairs that can be used to build a workflow sentence. They also contain information about their Microsoft .NET data types.

## Definition

```XML
<RuleDesigner>
  <FieldBind>
        <Option />
        <DataSourceRef />
  </FieldBind>
</RuleDesigner>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>**String**. The value displayed in the drop-down list box control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TypeFilter**</p></td>
<td align="left"><p>**String**. Used only if the parent **FieldBind DesignerType** is **Operator**. The **TypeFilter** attribute enables options to be hidden or displayed in the workflow editor, based on the data type of the parent element.</p>
<p>You can define multiple types for the **TypeFilter** attribute, but they must be separated by commas.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UnaryHides**</p></td>
<td align="left"><p>**String**. Used only if the parent **FieldBind RuleDesigner** type is **Operator**. The value that is specified in this attribute should be synchronized with the **Field** attribute of a **FieldBind **element. If this option is selected, the **FieldBind** specified here is hidden from the workflow editor.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>**String**. Represents the value of the selected drop-down list item.</p></td>
</tr>
</tbody>
</table>

#### Value attribute

The following table contains attribute values that are used with a **TypeFilter** attribute of **Operator** that performs conditional comparisons. Custom values can be substituted.

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Equal**</p></td>
<td align="left"><p>Returns **true** if queried values are equal. Case sensitivity must match.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EqualNoCase**</p></td>
<td align="left"><p>Returns **true** if queried values are equal. Case sensitivity does not have to match.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NotEqual**</p></td>
<td align="left"><p>Returns **true** if queried values are not equal. Case sensitivity must match.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotEqualNoCase**</p></td>
<td align="left"><p>Returns **true** if queried values are not equal. Case sensitivity does not have to match.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StartsWith**</p></td>
<td align="left"><p>Returns **true** if queried values start with a specific pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotStartsWith**</p></td>
<td align="left"><p>Returns **true** if queried values do not start with a specific pattern.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EndsWith**</p></td>
<td align="left"><p>Returns **true** if queried values end with a specific pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotEndsWith**</p></td>
<td align="left"><p>Returns **true** if queried values do not end with a specific pattern.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Contains**</p></td>
<td align="left"><p>Returns **true** if queried values contain the specified pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotContains**</p></td>
<td align="left"><p>Returns **true** if queried values do not contain the specified pattern.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ContainsNoCase**</p></td>
<td align="left"><p>Returns **true** if queried values contain the specified pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Matches**</p></td>
<td align="left"><p>Returns **true** if queried values match a specified regular expression.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsEmpty**</p></td>
<td align="left"><p>Specifies empty string.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="fieldbind-element-workflowactions.md">FieldBind</a></p></td>
</tr>
</tbody>
</table>


## Example

The following XML demonstrates how to construct an **Option** element so that it is visible to the workflow designer.

```XML
    <RuleDesigner Sentence="%1">
       <FieldBind Field="MyParameter1" 
                  Text="text" Id="1"       
                  DesignerType="Operator" 
                  OperatorTypeFrom="MyParameter1">
            <Option Name="equals" Value="Equal"/>
            <Option Name="not equals" Value="NotEqual"/>
            <Option Name="is greater than" 
                    Value="GreaterThan"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is greater than or equal to"   
                    Value="GreaterThanOrEqual"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is less than" 
                    Value="LessThan"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is less than or equal to" 
                    Value="LessThanOrEqual"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is empty" 
                    Value="IsEmpty"
                    TypeFilter="System.String" 
                    UnaryHides="right"/>
            <Option Name="is not empty" 
                    Value="NotIsEmpty"
                    TypeFilter="System.String" 
                    UnaryHides="right"/>
            <Option Name="begins with" 
                    Value="StartsWith"
                    TypeFilter="System.String"/>
            <Option Name="does not begin with" 
                    Value="NotStartsWith"
                    TypeFilter="System.String"/>
            <Option Name="ends with" 
                    Value="EndsWith"
                    TypeFilter="System.String"/>
            <Option Name="does not end with" 
                    Value="NotEndsWith"
                    TypeFilter="System.String"/>
            <Option Name="contains" 
                    Value="Contains"
                    TypeFilter="System.String"/>
            <Option Name="does not contain" 
                    Value="NotContains"
                    TypeFilter="System.String"/>
            <Option Name="matches regular expression" 
                    Value="Matches"
                    TypeFilter="System.String"/>
            <Option Name="equals (ignoring case)" 
                    Value="EqualNoCase"
                    TypeFilter="System.String"/>
            <Option Name="contains (ignoring case)" 
                    Value="ContainsNoCase"
                    TypeFilter="System.String"/>
            <Option Name="equals (ignoring time)" 
                    Value="EqualNoTime"
                    TypeFilter="System.DateTime"/>
         </FieldBind>
    </RuleDesigner>
```

## See also

- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)






