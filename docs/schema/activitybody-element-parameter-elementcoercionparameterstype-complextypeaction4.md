---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e5188d8b-08c7-bb23-b6d8-6cc21993f7a6
---

# ActivityBody element 

(Parameter element) (coercionParametersType complexType) (Action4)

**Applies to**: SharePoint Server 2013

An element in the complex type **coercionParametersType**, **ActivityBody** for complex binding of an activity that is used as a coercion. The element provides a xaml fragment that provides the argument binding of the activity.

## Usage

```XML
    <complexType name="coercionParametersType">
        <Parameter>
            <ActivityBody />
        </Parameter>
    </complexType>
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
    <xs:element name="ActivityBody"   minOccurs="1"   maxOccurs="1" >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActivityBody" >

      </xs:element>  
           </xs:sequence>
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
<td align="left"><p><a href="parameter-element-coercionparameterstype-complextypeaction4.md">Parameter</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Attributes

None.

## Example definition

The following presents a sample definition of a coercion that employs the **ActivityBody** element.

```
    <Coercion Name="DateTimeToStringShortDate"
     DisplayName="Short Date"
     CatchAll="false"
     RankDefault="160"
     SourceType="System.DateTime"
     DestinationType="System.String"
     Id="F806859B-1D48-443C-ADF8-E014D9ECCE7B"
     ClassName="Microsoft.Activities.Expressions.ToString"
     Assembly="Microsoft.Activities, Version=2.0.0.0, Culture=neutral,
       PublicKeyToken=31bf3856ad364e35"
     SourceProperty="Object">
       <Parameters>
          <Parameter Name="CultureName" Type="System.String">
             <ActivityBody>
                <p:GetConfigurationValue
                xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities"
                xmlns:p="http://schemas.microsoft.com/workflow
                     /2012/xaml/activities"
                Name="Microsoft.SharePoint.ActivationProperties.CultureName">
                </p:GetConfigurationValue>
             </ActivityBody>
          </Parameter>
          <Parameter Name="Format" Type="System.String" Value="d" />
       </Parameters>
    </Coercion>
```

The coercion definition above injects the following XAML fragment into the workflow:

```xaml
    <p:ToString Format="d">
       <p:ToString.CultureName>
          <InArgument x:TypeArguments="x:String">
             <p:GetConfigurationValue
                 Name="Microsoft.SharePoint.ActivationProperties.CultureName">
             </p:GetConfigurationValue>
          </InArgument>
       </p:ToString.CultureName>
    </p:ToString>
```







