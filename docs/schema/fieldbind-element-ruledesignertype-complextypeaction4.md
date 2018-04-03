---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7fbdbd63-d0b4-d888-9f7c-e9f029f87478
---

# FieldBind element 

(ruleDesignerType complexType) (Action4)

**Applies to**: SharePoint Server 2013

The **FieldBind** element is a child of the **RuleDesigner** element. Used together, these elements create a readable sentence that describes a condition that needs to be evaluated or an activity that must be executed. These elements can also be used to insert variables (such as hyperlinks) within the sentence, so that the visual workflow designer can substitute dynamic values into a workflow while it is running. The **FieldBind** element maps the inputs from the workflow creator to parameters that are then passed to SharePoint Foundation. Note that using custom designer types or custom field types is not supported when creating workflows using SharePoint Designer.

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
    <xs:element name="FieldBind" minOccurs="0" maxOccurs="unbounded">
               <xs:complexType>
               <xs:choice>
         <xs:element name="Option" minOccurs="0" maxOccurs="unbounded">
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="Value" type="s:string" use="required" />
         <xs:attribute name="TypeFilter" type="s:string" />
         <xs:attribute name="UnaryHides" type="s:string" />
      </xs:element>  
         <xs:element name="DataSourceRef" minOccurs="1" maxOccurs="unbounded">
         <xs:attribute name="Ref" type="s:string" />
      </xs:element>  
           </xs:choice>
         <xs:attribute name="Field"   type="s:string" />
         <xs:attribute name="Text"   type="s:string"  />
         <xs:attribute name="Id" type="s:positiveInteger"  use="required"  />
         <xs:attribute name="DesignerType" type="s:string" use="required"  />
         <xs:attribute name="OperatorTypeFrom" type="s:string" />
         <xs:attribute name="TypeFrom"   type="s:string"  />
         <xs:attribute name="Function"   type="s:boolean" />
         <xs:attribute name="Value"   type="s:string" />
         <xs:attribute name="EventCategory"   type="s:string" />
         <xs:attribute name="DisplayName"   type="s:string" />
           </xs:complexType>
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
<td align="left"><p><a href="ruledesigner-element-flow-elementflows-elementworkflowinfo-elementaction4.md">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ruledesigner-element-defaultelementtype-complextypeaction4.md">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="ruledesigner-element-action-elementactions-elementworkflowinfo-elementaction4.md">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ruledesigner-element-default-elementconditions-elementworkflowinfo-elementaction.md">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="ruledesigner-element-condition-elementconditions-elementworkflowinfo-elementacti.md">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

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
<td align="left"><p><a href="datasourceref-element-fieldbind-elementruledesignertype-complextypeaction4.md">DataSourceRef</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="option-element-fieldbind-elementruledesignertype-complextypeaction4.md">Option</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>**DesignerType**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the type of control or user input that is presented in the workflow editor user interface. If you do not specify a **DesignerType** attribute, the default is used. The default **DesignerType** is a text box followed by an ellipsis button (...) and a lookup button.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The name of the designer type as rendered in the user interface.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EventCategory**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The category associated with the event; for example, **ListItemEvent** or **ProjectEvent**.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Field**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Represents a **Parameter** element that is used to build a workflow. The **Field** attribute maps directly to one or more **Parameter** elements when a parameter type and direction are defined.</p>
<p>If you use more than one parameter for a given **Field** attribute, separate the parameter by using commas (for example, **Field="Variable,ValueType"**).</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Function**</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>When set to **true**, this attribute inserts the name of the associate **Action** method into the sentence.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>s:positiveInteger</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>An integer that serves as a relational key to associate a **FieldBind** element with the **Sentence** property of the parent **RuleDesigner** element.</p></td>
<td align="left"><p>Values of the s:positiveInteger type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OperatorTypeFrom**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the types of operators that are available to the user, based on the Microsoft .NET data type listed in the corresponding **Parameter** element. The parameter that is specified for the **OperatorTypeFrom** attribute can be different from the parameter that is listed in the **Field** attribute.</p>
<p>**Note**: This attribute is used only when the **DesignerType** attribute is set to **Operator**.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Text**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Text displayed to the user as a hyperlink in the condition sentence.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TypeFrom**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the .NET data types that are valid for use with an instance of the **FieldBind** element. This attribute is associated with the **Parameter** element that contains the type definition.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Reserved for future use.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








