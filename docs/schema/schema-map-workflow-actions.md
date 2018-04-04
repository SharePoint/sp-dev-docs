---
manager: laurawi
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d7e60875-b06d-9475-d823-08079b376ef3
---

# Schema map (Workflow actions)

**Applies to**: SharePoint Server 2013

This topic shows the schema definition for **Schema file name**.

```XML
<?xml version="1.0" encoding="utf-8"?>
<xs:schema
      elementFormDefault
        =" qualified"
                                  
        s
        =" http://www.w3.org/2001/XMLSchema"
                                  
        core
        =" http://schemas.microsoft.com/sharepoint/soap/"
                                  >
      <xs:element name="WorkflowInfo"
      >
              <xs:complexType>
              <xs:all>
      <xs:element name="Conditions"
        minOccurs="0"
        maxOccurs="1"
       >
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Default"
        minOccurs="0"
        maxOccurs="1"
       >
  <xs:complexType>
    <xs:sequence>
      <xs:element name="RuleDesigner"
         type="ruleDesignerType">
      </xs:element>
     
          </xs:sequence>
        <xs:attribute name="ItemKeyType"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
        <xs:element name="Condition"
         minOccurs="0"
        maxOccurs="unbounded"
       >
              <xs:complexType>
              <xs:all>
        <xs:element name="RuleDesigner"
         type="ruleDesignerType" minOccurs="1"
        maxOccurs="1"
       >
     </xs:element>
     
        <xs:element name="Parameters"
         type="parametersType" minOccurs="1"
        maxOccurs="1"
       >
     </xs:element>
     
          </xs:all>
        <xs:attribute name="Type"
      type="s:string"
        />
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="AppliesTo"
      type="appliesToTypes"
         use="required"
        />
        <xs:attribute name="UsesCurrentItem"
      type="s:boolean"
        />
        <xs:attribute name="ItemKeyType"
      type="s:string"
        />
        <xs:attribute name="FunctionName"
      type="s:string"
        />
        <xs:attribute name="Assembly"
      type="s:string"
        />
        <xs:attribute name="ClassName"
      type="s:string"
        />
        <xs:attribute name="ShapeImageUrl"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
          </xs:sequence>
        <xs:attribute name="And"
      type="s:string"
        />
        <xs:attribute name="Or"
      type="s:string"
        />
        <xs:attribute name="When"
      type="s:string"
        />
        <xs:attribute name="Else"
      type="s:string"
        />
        <xs:attribute name="Not"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
        <xs:element name="Actions"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="Default"
         type="defaultElementType" minOccurs="0"
        maxOccurs="1"
       >
     </xs:element>
     
        <xs:element name="Action"
         minOccurs="0"
        maxOccurs="unbounded"
       >
              <xs:complexType>
              <xs:all>
        <xs:element name="Parameters"
         type="parametersType" minOccurs="0"
        maxOccurs="1"
       >
     </xs:element>
     
        <xs:element name="RuleDesigner"
         type="ruleDesignerType" minOccurs="1"
        maxOccurs="1"
       >
     </xs:element>
     
        <xs:element name="DataSources"
         type="dataSourcesType" minOccurs="0"
        maxOccurs="1"
       >
     </xs:element>
     
        <xs:element name="Modifications"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="Modification"
         minOccurs="1"
        maxOccurs="unbounded"
       >
        <xs:attribute name="TypeId"
      type="s:string"
         use="required"
        />
        <xs:attribute name="NameFormat"
      type="s:string"
         use="required"
        />
        <xs:attribute name="FormURN"
      type="s:string"
         use="required"
        />
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="ActionVariables"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="ActionVariables"
        >
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="ActionBody"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="ActionBody"
        >
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="ActionConditions"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="ActionConditions"
        >
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
          </xs:all>
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="ClassName"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Assembly"
      type="s:string"
        />
        <xs:attribute name="FunctionName"
      type="s:string"
        />
        <xs:attribute name="Category"
      type="s:string"
        />
        <xs:attribute name="CreatesTask"
      type="s:boolean"
        />
        <xs:attribute name="CreatesInList"
      type="s:string"
        />
        <xs:attribute name="AppliesTo"
      type="appliesToTypes"
         use="required"
        />
        <xs:attribute name="IsError"
      type="s:boolean"
        />
        <xs:attribute name="ListModeration"
      type="s:boolean"
        />
        <xs:attribute name="UsesCurrentItem"
      type="s:boolean"
        />
        <xs:attribute name="CreatedTaskFormType"
      type="s:string"
        />
        <xs:attribute name="__SolutionId"
      type="s:string"
        />
        <xs:attribute name="SandboxedFunction"
      type="s:boolean"
        />
        <xs:attribute name="ShapeImageUrl"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
          </xs:sequence>
        <xs:attribute name="Sequential"
      type="s:string"
        />
        <xs:attribute name="Parallel"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
        <xs:element name="CompositeSteps"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence minOccurs="0" maxOccurs="unbounded">
        <xs:element name="CompositeStep"
        >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="DataSources"
         type="dataSourcesType" minOccurs="0"
        maxOccurs="1"
       >
     </xs:element>
     
          </xs:sequence>
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="ClassName"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Assembly"
      type="s:string"
         use="required"
        />
        <xs:attribute name="AppliesTo"
      type="appliesToTypes"
         use="required"
        />
        <xs:attribute name="Order"
      type="s:nonNegativeInteger"
        />
        <xs:attribute name="Description"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="VariableTypes"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence minOccurs="0" maxOccurs="unbounded">
        <xs:element name="VariableType"
        >
        <xs:attribute name="Type"
      type="s:string"
         use="required"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Assembly"
      type="s:string"
        />
        <xs:attribute name="Default"
      type="s:boolean"
        />
        <xs:attribute name="ItemIdType"
      type="s:boolean"
        />
        <xs:attribute name="Hidden"
      type="s:boolean"
        />
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="AssemblyRedirects"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence minOccurs="0" maxOccurs="unbounded">
        <xs:element name="AssemblyRedirect"
        >
        <xs:attribute name="From"
      type="s:string"
         use="required"
        />
        <xs:attribute name="To"
      type="s:string"
         use="required"
        />
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="Coercions"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence minOccurs="0" maxOccurs="unbounded">
        <xs:element name="Coercion"
         minOccurs="0"
        maxOccurs="unbounded"
       >
              <xs:complexType>
              <xs:all>
        <xs:element name="Parameters"
         type="coercionParametersType" minOccurs="0"
        maxOccurs="1"
       >
     </xs:element>
     
          </xs:all>
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Assembly"
      type="s:string"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
         use="required"
        />
        <xs:attribute name="CatchAll"
      type="s:boolean"
         use="required"
        />
        <xs:attribute name="RankDefault"
      type="s:integer"
         use="required"
        />
        <xs:attribute name="SourceType"
      type="s:string"
        />
        <xs:attribute name="SourceFieldType"
      type="s:string"
        />
        <xs:attribute name="DestinationType"
      type="s:string"
         use="required"
        />
        <xs:attribute name="DestinationFieldType"
      type="s:string"
        />
        <xs:attribute name="ClassName"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Id"
      type="s:string"
         use="required"
        />
        <xs:attribute name="SourceProperty"
      type="s:string"
         use="required"
        />
          </xs:complexType>
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="Events"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="Event"
         minOccurs="0"
        maxOccurs="unbounded"
       >
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
         use="required"
        />
        <xs:attribute name="EventGroup"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Category"
      type="s:string"
         use="required"
        />
        <xs:attribute name="RankDefault"
      type="s:string"
         use="required"
        />
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="Flows"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="Flow"
         minOccurs="0"
        maxOccurs="unbounded"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="RuleDesigner"
         type="ruleDesignerType" minOccurs="1"
        maxOccurs="1"
       >
     </xs:element>
     
        <xs:element name="Parameters"
         type="parametersType" minOccurs="1"
        maxOccurs="1"
       >
     </xs:element>
     
          </xs:sequence>
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Category"
      type="s:string"
         use="required"
        />
          </xs:complexType>
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="Blocks"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="Block"
         type="propertiesType" minOccurs="0"
        maxOccurs="unbounded"
       >
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
          </xs:all>
        <xs:attribute name="Language"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
              <xs:complexType name="ruleDesignerType">
              <xs:sequence>
        <xs:element name="FieldBind"
         minOccurs="0"
        maxOccurs="unbounded"
       >
              <xs:complexType>
              <xs:choice>
        <xs:element name="Option"
         minOccurs="0"
        maxOccurs="unbounded"
       >
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Value"
      type="s:string"
         use="required"
        />
        <xs:attribute name="TypeFilter"
      type="s:string"
        />
        <xs:attribute name="UnaryHides"
      type="s:string"
        />
     </xs:element>
     
        <xs:element name="DataSourceRef"
         minOccurs="1"
        maxOccurs="unbounded"
       >
        <xs:attribute name="Ref"
      type="s:string"
        />
     </xs:element>
     
          </xs:choice>
        <xs:attribute name="Field"
      type="s:string"
        />
        <xs:attribute name="Text"
      type="s:string"
        />
        <xs:attribute name="Id"
      type="s:positiveInteger"
         use="required"
        />
        <xs:attribute name="DesignerType"
      type="s:string"
         use="required"
        />
        <xs:attribute name="OperatorTypeFrom"
      type="s:string"
        />
        <xs:attribute name="TypeFrom"
      type="s:string"
        />
        <xs:attribute name="Function"
      type="s:boolean"
        />
        <xs:attribute name="Value"
      type="s:string"
        />
        <xs:attribute name="EventCategory"
      type="s:string"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
          </xs:sequence>
        <xs:attribute name="Sentence"
      type="s:string"
        />
          </xs:complexType>
              <xs:complexType name="defaultElementType">
              <xs:sequence>
        <xs:element name="RuleDesigner"
         type="ruleDesignerType">
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
              <xs:complexType name="parametersType">
              <xs:sequence>
        <xs:element name="Parameter"
         minOccurs="0"
        maxOccurs="unbounded"
       >
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Type"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Direction"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Description"
      type="s:string"
        />
        <xs:attribute name="DesignerType"
      type="s:string"
        />
        <xs:attribute name="ShowLookupForDropdown"
      type="s:boolean"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
        />
        <xs:attribute name="InitialValue"
      type="s:string"
        />
        <xs:attribute name="InitialBinding"
      type="s:string"
        />
        <xs:attribute name="EventCategory"
      type="s:string"
        />
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
              <xs:complexType name="propertiesType">
              <xs:sequence>
        <xs:element name="Property"
         minOccurs="0"
        maxOccurs="unbounded"
       >
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="DesignerType"
      type="s:string"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
        />
        <xs:attribute name="Description"
      type="s:string"
        />
        <xs:attribute name="TypeFrom"
      type="s:string"
        />
     </xs:element>
     
          </xs:sequence>
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
         use="required"
        />
          </xs:complexType>
              <xs:complexType name="dataSourcesType">
              <xs:sequence>
        <xs:element name="DataSource"
         type="dataSourceType" minOccurs="0"
        maxOccurs="unbounded"
       >
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
              <xs:complexType name="dataSourceType">
              <xs:sequence>
        <xs:element name="SchemaSource"
        >
              <xs:complexType>
              <xs:choice>
        <xs:element name="Fields"
         minOccurs="0"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="Field"
         minOccurs="1"
        maxOccurs="unbounded"
       >
        <xs:attribute name="Name"
      type="s:string"
        />
        <xs:attribute name="DisplayName"
      type="s:string"
        />
        <xs:attribute name="Type"
      type="s:string"
        />
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="ContentType"
         minOccurs="0"
        maxOccurs="1"
       >
        <xs:attribute name="IDFrom"
      type="s:string"
        />
     </xs:element>
     
        <xs:element name="Dictionary"
         minOccurs="0"
        maxOccurs="1"
       >
        <xs:attribute name="ValueFrom"
      type="s:string"
        />
     </xs:element>
     
        <xs:element name="NestedInitiationFieldNodes"
         minOccurs="0"
        maxOccurs="1"
       >
     </xs:element>
     
          </xs:choice>
          </xs:complexType>
     </xs:element>
     
        <xs:element name="Evaluation"
        >
              <xs:complexType>
              <xs:choice>
        <xs:element name="ActivitySource"
        >
     </xs:element>
     
        <xs:element name="HashtableSource"
        >
        <xs:attribute name="HashtableFrom"
      type="s:string"
        />
     </xs:element>
     
          </xs:choice>
          </xs:complexType>
     </xs:element>
     
          </xs:sequence>
        <xs:attribute name="InternalName"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="NameProperty"
      type="s:string"
         use="required"
        />
          </xs:complexType>
        <xs:simpleType name="appliesToTypes">
          <xs:restriction base="s:string">
          <xs:enumeration value="none"/>
          <xs:enumeration value="list"/>
          <xs:enumeration value="doclib"/>
          <xs:enumeration value="all"/>
          <xs:enumeration value="displayonly"/>
          </xs:restriction>

        </xs:simpleType>
              <xs:complexType name="coercionParametersType">
              <xs:sequence>
        <xs:element name="Parameter"
         minOccurs="0"
        maxOccurs="unbounded"
       >
              <xs:complexType>
              <xs:all>
        <xs:element name="ActivityBody"
         minOccurs="1"
        maxOccurs="1"
       >
              <xs:complexType>
              <xs:sequence>
        <xs:element name="ActivityBody"
        >
     </xs:element>
     
          </xs:sequence>
          </xs:complexType>
     </xs:element>
     
          </xs:all>
        <xs:attribute name="Name"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Type"
      type="s:string"
         use="required"
        />
        <xs:attribute name="Value"
      type="s:string"
        />
          </xs:complexType>
     </xs:element>
     
    </xs:sequence>
  </xs:complexType>
</xs:schema>
```                        








