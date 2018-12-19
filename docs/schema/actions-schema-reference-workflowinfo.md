---
manager: laurawi
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 9758b06a-a1ff-4352-bc25-7fd84a8932bd
---

# Actions Schema Reference (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The Actions schema that is used to validate custom .ACTIONS files does not actually exist in the form of an .xsd file on the server file system. The following XML is only a representation of that schema, to ease development. Valid values have been furnished where available and strings that represent the type of data that is required for an attribute have also been provided.

> [!NOTE] 
> This schema reference is for XML development purposes and should be used only when creating .ACTIONS files in a developer environment, not a production environment. This XML has been formatted for readability.

## Actions schema example

```XML 
    <?xml version="1.0" encoding="utf-8"?>
    <xs:schema elementFormDefault="qualified"  
               xmlns:xs="http://www.w3.org/2001/XMLSchema">
      <xs:element name="WorkflowInfo">
        <xs:complexType>
          <xs:sequence>
            <xs:element name="Conditions">
              <xs:complexType>
                <xs:sequence>
                  <xs:choice minOccurs="0" 
                             maxOccurs="unbounded">
                    <xs:element name="Default" 
                                type="defaultElementType"
                                maxOccurs="1" 
                                minOccurs="0" />
                    <xs:element name="Condition" 
                                minOccurs="0" 
                                maxOccurs="unbounded">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:element name="RuleDesigner" 
                                      type="ruleDesignerType" />
                          <xs:element name="Parameters" 
                                      type="parametersType" />
                        </xs:sequence>
                        <xs:attribute name="Type">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Advanced" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="Name">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Name 
                                     displayed Workflow editor."/>
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="AppliesTo" 
                                      type="appliesToTypes" />
                        <xs:attribute name="UsesCurrentItem" 
                                      type="xs:boolean" />
                        <xs:attribute name="FunctionName">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Boolean
                                                     method 
                                                     implemented
                                                     in class" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="Assembly">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration 
                                       value="Assembly.Name, 
                                       Version=0.0.0.0, 
                                       Culture=neutral, 
                                       PublicKeyToken=PublicKeyToken" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="ClassName">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Namespace
                                                     Qualified
                                                     class name"
                                                             />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                      </xs:complexType>
                    </xs:element>
                  </xs:choice>
                </xs:sequence>
                <xs:attribute name="And">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="and" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="Or">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="or" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="When">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="If" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="Else">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="Else If" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="Not" >
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="not" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
              </xs:complexType>
            </xs:element>
            <xs:element name="Actions">
              <xs:complexType>
                <xs:sequence>
                  <xs:choice minOccurs="0" 
                             maxOccurs="unbounded">
                    <xs:element name="Default" 
                                type="defaultElementType" />
                    <xs:element name="Action">
                      <xs:complexType>
                        <xs:sequence>
                          <xs:choice minOccurs="0" 
                                     maxOccurs="unbounded">
                            <xs:element name="Parameters" 
                                        type="parametersType" />
                            <xs:element name="RuleDesigner"
                                        type="ruleDesignerType" />
                          </xs:choice>
                        </xs:sequence>
                        <xs:attribute name="Name">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Name displayed
                                               in workflow editor" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="ClassName">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Namespace qualified 
                                                     class name" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="Assembly">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration 
                                     value="Assembly.Name, 
                                     Version=0.0.0.0, 
                                     Culture=neutral, 
                                     PublicKeyToken=PublicKeyToken" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="Category">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Filter 
                                                     category" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="CreatesTask" 
                                      type="xs:boolean" />
                        <xs:attribute name="CreatesInList">
                          <xs:simpleType>
                            <xs:restriction base="xs:string">
                              <xs:enumeration value="Parameter name
                                                     containing ID
                                                     of list" />
                            </xs:restriction>
                          </xs:simpleType>
                        </xs:attribute>
                        <xs:attribute name="AppliesTo" 
                                      type="appliesToTypes" />
                        <xs:attribute name="ListModeration" 
                                      type="xs:boolean" />
                        <xs:attribute name="UsesCurrentItem" 
                                      type="xs:boolean" />
                      </xs:complexType>
                    </xs:element>
                  </xs:choice>
                </xs:sequence>
                <xs:attribute name="Sequential">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="then" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="Parallel">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="and" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
              </xs:complexType>
            </xs:element>
          </xs:sequence>
          <xs:attribute name="Language">
            <xs:simpleType>
              <xs:restriction base="xs:string">
                <xs:enumeration value="en-us" />
              </xs:restriction>
             </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
      </xs:element>
      <xs:complexType name="ruleDesignerType">
       <xs:sequence>
         <xs:element name="FieldBind" minOccurs="0" maxOccurs="unbounded">
           <xs:complexType>
             <xs:sequence>
               <xs:element name="Option" 
                           minOccurs="0" 
                           maxOccurs="unbounded">
                 <xs:complexType>
                   <xs:sequence>
                   </xs:sequence>
                   <xs:attribute name="Name" type="xs:string" />
                   <xs:attribute name="TypeFilter" 
                                 type="xs:string" />
                   <xs:attribute name="UnaryHides" 
                                 type="xs:string" />
                   <xs:attribute name="Value" type="xs:string" />
                 </xs:complexType>
               </xs:element>
             </xs:sequence>
             <xs:attribute name="Field">
               <xs:simpleType>
                 <xs:restriction base="xs:string">
                   <xs:enumeration value="Parameter name that this 
                                          FieldBind maps to" />
                 </xs:restriction>
               </xs:simpleType>
             </xs:attribute>
             <xs:attribute name="OperatorTypeFrom">
               <xs:simpleType>
                 <xs:restriction base="xs:string">
                   <xs:enumeration value="Parameter that an Operator 
                                          derives its type from" />
                 </xs:restriction>
               </xs:simpleType>
             </xs:attribute>
             <xs:attribute name="TypeFrom">
               <xs:simpleType>
                 <xs:restriction base="xs:string">
                   <xs:enumeration value="Parameter that non-
                                          Operator derives its type 
                                          from" />
                 </xs:restriction>
               </xs:simpleType>
              </xs:attribute>
              <xs:attribute name="Function" type="xs:boolean" />
                <xs:attribute name="Value">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="Reserved for future use" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="DesignerType">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="Bool" />
                      <xs:enumeration value="ChooseDoclibItem" />
                      <xs:enumeration value="ChooseListItem" />
                      <xs:enumeration value="CreateListItem" />
                      <xs:enumeration value="Date" />
                      <xs:enumeration value="Dropdown" />
                      <xs:enumeration value="Email" />
                      <xs:enumeration value="fieldNames" />
                      <xs:enumeration value="float" />
                      <xs:enumeration value="hyperlink" />
                      <xs:enumeration value="Integer" />
                      <xs:enumeration value="ListNames" />
                      <xs:enumeration value="Operator" />
                      <xs:enumeration value="ParameterNames" />
                      <xs:enumeration value="Person" />
                      <xs:enumeration value="SinglePerson" />
                      <xs:enumeration value="stringbuilder" />
                      <xs:enumeration value="Survey" />
                      <xs:enumeration value="Text" />
                      <xs:enumeration value="TextArea" />
                      <xs:enumeration value="UpdateListItem" />
                      <xs:enumeration value="writablefieldNames" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="Id">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="Unique positive Integer" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
                <xs:attribute name="Text">
                  <xs:simpleType>
                    <xs:restriction base="xs:string">
                      <xs:enumeration value="Text to be displayed 
                                             as a hyperlink" />
                    </xs:restriction>
                  </xs:simpleType>
                </xs:attribute>
              </xs:complexType>
            </xs:element>
          </xs:sequence>
          <xs:attribute name="Sentence">
            <xs:simpleType>
              <xs:restriction base="xs:string">
                <xs:enumeration value="Sentence to be displayed to the 
                                       workflow editor" />
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
        <xs:complexType name="defaultElementType">
          <xs:sequence>
            <xs:element name="RuleDesigner" type="ruleDesignerType" />
          </xs:sequence>
        </xs:complexType>
        <xs:complexType name="parametersType">
          <xs:sequence>
            <xs:element name="Parameter" 
                        minOccurs="0" 
                        maxOccurs="unbounded">
        <xs:complexType>
        <xs:sequence />
          <xs:attribute name="Type" type="xs:string" />
          <xs:attribute name="Direction">
            <xs:simpleType>
              <xs:restriction base="xs:string">
                <xs:enumeration value="In" />
                <xs:enumeration value="Out" />
                <xs:enumeration value="Optional" />
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        <xs:attribute name="Name">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Parameter name referred to in 
                                   FieldBind Field attribute" />
          </xs:restriction>
        </xs:simpleType>
      </xs:attribute>
      <xs:attribute name="InitialValue">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Initial value displayed 
                                   by FieldBind control" />
                </xs:restriction>
              </xs:simpleType>
            </xs:attribute>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
      <xs:simpleType name="appliesToTypes">
        <xs:restriction base="xs:string">
          <xs:enumeration value="list" />
          <xs:enumeration value="doclib" />
          <xs:enumeration value="all" />
        </xs:restriction>
      </xs:simpleType>
    </xs:schema>
```

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Actions](default-workflow-actions-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








