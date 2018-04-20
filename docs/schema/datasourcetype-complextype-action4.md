---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 71b6dbb4-e10c-8b08-c564-ce64ddb91382
---

# dataSourceType complexType (Action4)

**Applies to**: SharePoint Server 2013

## Type information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Extension base</span></p></td>
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>

## Definition

```XML
    <s:complexType name="dataSourceType">
        <s:sequence>
          <s:element name="SchemaSource">
            <s:complexType>
              <s:choice>
                <s:element name="Fields" minOccurs="0" maxOccurs="1">
                  <s:complexType>
                    <s:sequence>
                      <s:element name="Field" minOccurs="1" maxOccurs="unbounded">
                        <s:complexType>
                          <s:sequence>
                            <s:element name="CHOICES" minOccurs="0" maxOccurs="1">
                              <s:complexType>
                                <s:sequence>
                                  <s:element name="CHOICE" minOccurs="1" maxOccurs="unbounded">
                                    <s:complexType>
                                      <s:simpleContent>
                                        <s:extension base="s:string">
                                          <s:attribute name="DisplayName" type="s:string" />
                                        </s:extension>
                                      </s:simpleContent>
                                    </s:complexType>
                                  </s:element>
                                </s:sequence>
                              </s:complexType>
                            </s:element>
                          </s:sequence>
                          <s:attribute name="Name" type="s:string" />
                          <s:attribute name="DisplayName" type="s:string" />
                          <s:attribute name="Type" type="s:string" />
                        </s:complexType>
                      </s:element>
                    </s:sequence>
                  </s:complexType>
                </s:element>
                <s:element name="ContentType" minOccurs="0" maxOccurs="1">
                  <s:complexType>
                    <s:attribute name="IDFrom" type="s:string" />
                  </s:complexType>
                </s:element>
                <s:element name="Dictionary" minOccurs="0" maxOccurs="1">
                  <s:complexType>
                    <s:attribute name="ValueFrom" type="s:string" />
                  </s:complexType>
                </s:element>
                <s:element name="NestedInitiationFieldNodes" minOccurs="0" maxOccurs="1" />
              </s:choice>
            </s:complexType>
          </s:element>
          <s:element name="Evaluation">
            <s:complexType>
              <s:choice>
                <s:element name="ActivitySource">
                  <s:complexType>
                  </s:complexType>
                </s:element>
                <s:element name="HashtableSource">
                  <s:complexType>
                    <s:attribute name="HashtableFrom" type="s:string" />
                  </s:complexType>
                </s:element>
              </s:choice>
            </s:complexType>
          </s:element>
        </s:sequence>
        <s:attribute name="InternalName" type="s:string" use="required" />
        <s:attribute name="Name" type="s:string" use="required" />
        <s:attribute name="NameProperty" type="s:string" use="required" />
      </s:complexType>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Child elements

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="50%" />
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
<td align="left"><p><a href="evaluation-element-datasourcetype-complextypeaction4.md">Evaluation</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>Specifies whether values are retrieved from the data source fields of the parent action or composite step, or from a hash table.</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="schemasource-element-datasourcetype-complextypeaction4.md">SchemaSource</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p>Specifies how data source fields are displayed.</p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="15%" />
<col width="15%" />
<col width="15%" />
<col width="20%" />
<col width="35%" />
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
<td align="left"><p>**InternalName**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NameProperty**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








