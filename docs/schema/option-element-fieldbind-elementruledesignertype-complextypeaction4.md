---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 72988312-4f49-08bd-e43d-09c5a6c15857
---

# Option element 

(FieldBind element) (ruleDesignerType complexType) (Action4)

**Applies to**: SharePoint Server 2013

Used to populate **DesignerType** drop-down list box controls that are not data bound. The **Option** element contains text/value pairs that are used to build a workflow sentence. They also contain information about their Microsoft .NET data types.

## Usage

```XML
    <RuleDesigner>
      <FieldBind>
            <Option />
            <DataSourceRef />
      </FieldBind>
    </RuleDesigner>
```

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <xs:element name="Option" minOccurs="0" maxOccurs="unbounded">
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="Value" type="s:string" use="required" />
         <xs:attribute name="TypeFilter" type="s:string" />
         <xs:attribute name="UnaryHides" type="s:string" />
    </xs:element>  
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="fieldbind-element-ruledesignertype-complextypeaction4.md">FieldBind</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="30%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The value displayed in the drop-down list box control.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TypeFilter**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Used only if the parent **FieldBind DesignerType** is **Operator**. The **TypeFilter** attribute enables options to be hidden or displayed in the workflow editor, based on the data type of the parent element. You can define multiple types for the **TypeFilter** attribute; separate the type/value pairs by using commas.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UnaryHides**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Used only if the parent **FieldBind RuleDesigner** type is **Operator**. The value that is specified in this attribute should be synchronized with the **Field** attribute of a **FieldBind** element. If this option is selected, the **FieldBind** specified here is hidden in the workflow editor.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Represents the value of the selected drop-down list item. For available values and their descriptions, see the following table.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>

#### Value attributes and descriptions

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
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







