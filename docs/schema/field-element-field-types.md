---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Field Types XML
ms.assetid: c168e8bc-8aba-4b72-a9c4-a0ad7a4aff9a
---

# Field Element (Field Types)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a characteristic of the field type.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Field
  Name="Text"&gt;
&lt;/Field&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
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
<td align="left"><p>Required **Text</span>. A string that represents the name of the specific aspect of the field type that the **Field** element represents. The value must be one of the strings listed in the table below.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="fieldtype-element-field-types.md">FieldType Element (Field Types)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Field element children of **FieldType**
elements are configured in fldtypes\*.xml files in
%ProgramFiles%\\Common Files\\Microsoft Shared\\web server
extensions\\15\\TEMPLATE\\XML.

Each **FieldType** element has several required
and optional **Field** elements distinguished
by their **Name** attribute. The following
table describes these elements. In the object model, a field type is
represented by the <span sdata="cer"
target="T:Microsoft.SharePoint.SPFieldTypeDefinition"><span
class="nolink">SPFieldTypeDefinition</span></span> class. The latter
class has a read-only property corresponding to all but two of the rows
of the table. (The exceptions are <span
class="keyword">InternalType</span> and <span
class="keyword">SQLType</span>.) Except where noted otherwise, the
property names match the value of the corresponding Name attribute.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value of Field Element's Name Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**AllowBaseTypeRendering**</p></td>
<td align="left"><p>Optional **Boolean</span>. The default is **FALSE</span>. Specifies whether a client application renders the field as its base type (also called the **ParentType</span>), if the client application cannot determine how to properly render the custom field type. If set to **TRUE**, and the client application cannot properly render the custom field type, the client application renders the field as the default SharePoint Foundation parent field type from which it inherits.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CAMLRendering**</p></td>
<td align="left"><p>Optional **Boolean</span>. The default is **FALSE</span>. Specifies whether the field is rendered on list views using the CAML markup in a **RenderPattern</span> element elsewhere within the parent **FieldType</span> element. The default **FALSE</span> means that the field is rendered on list views by an XSL transform in a fldtypes*.xsl file, which is the standard system for field rendering on list views. (However, this element has no effect on field rendering on Display, New, and Edit forms. A **RenderPattern** would still be the standard way of rendering the field on a Display form.)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FieldTypeClass**</p></td>
<td align="left"><p>Optional **String</span>, <em>but required for all your custom field types</em>. Represents the strong name of the field type class library. **"</span><span class="label">FieldTypeClass</span>**"</span> includes the class name and assembly name with **Version</span>, **Culture</span>, and **PublicKeyToken**, for example, &lt;Field Name="FieldTypeClass"&gt;CustomFieldTypes.RegularExpression.RegularExpressionField, CustomFieldTypes.RegularExpression, Version=1.0.0.0, Culture=neutral, PublicKeyToken=57e55365ec0ce80a&lt;/Field&gt; (Only the fully qualified class name is included for field types built into SharePoint Foundation.)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FieldEditorUserControl**</p></td>
<td align="left"><p>Optional **String</span>. Represents the relative path to a <em>field_type</em>FieldEditor.ascx file that defines a control that appears, in SharePoint Foundation, in the <span class="ui">Additional Column Settings</span> section on the <span class="ui">New Site Column </span>page. The control enables column creators to set, for a particular column, the variable properties of the field type. E.g. <span class="code">"/_controltemplates/RegularExpressionFieldEditor.ascx"</span>. If there is no &lt;Field Name="FieldEditorUserControl"&gt; element, then the special properties of the field type are rendered by the <span sdata="link"><a href="propertyschema-element-field-types.md">PropertySchema Element (Field Types)</a>** element.</p>
<p>**FieldEditorUserControl** should be a fixed, nonlocalizable string.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Filterable**</p></td>
<td align="left"><p>Required **Boolean</span>. Represents whether a list with a column that is based on this field type can be filtered according to the value of the column that uses this type. If set to **TRUE**, the header of the column is a control that users can use to filter the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**InternalType**</p></td>
<td align="left"><p>Optional **String**. Represents an internal base type. <em>Do not use a</em> &lt;Field Name="InternalType"&gt;<em>element in your custom field type definitions.</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentType**</p></td>
<td align="left"><p>Required **String</span> (but can be an empty string). Represents the name of the type from which the field class is derived. The possible values are exactly the same as the possible values for the **Type </span>attribute of the <span sdata="link"><a href="field-element-list.md">Field Element (List)</a>** element. If the field type is not derived from another type, then the value is an empty string:</p>
<p>DOCS-LESSTHANField Name="ParentType"DOCS-GREATERTHANDOCS-LESSTHAN/FieldDOCS-GREATERTHAN. <em>It must never be empty in your custom field types. All custom types inherit from another type.</em></p>
<p>In the SharePoint Foundation object model **ParentType</span> is called <span sdata="cer" target="P:Microsoft.SharePoint.SPFieldTypeDefinition.BaseRenderingTypeName"><span class="nolink">BaseRenderingTypeName</span>**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowOnListAuthoringPages**</p></td>
<td align="left"><p>Optional **Boolean</span>. The default is **TRUE</span>. Represents whether this field type is displayed for inclusion on lists. If set to **TRUE**, SharePoint Foundation displays this field type on list authoring pages so that users can include the field type on their lists.</p>
<p>In the SharePoint Foundation object model **ShowOnListAuthoringPages</span> is called <span sdata="cer" target="P:Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnListCreate"><span class="nolink">ShowOnListCreate</span>**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowOnDocumentLibraryAuthoringPages**</p></td>
<td align="left"><p>Optional **Boolean</span>. The default is **TRUE</span>. Represents whether this field type is displayed for inclusion in document libraries. If set to **TRUE**, SharePoint Foundation displays this field type on document library authoring pages so that users can include the field type in their document libraries.</p>
<p>In the SharePoint Foundation object model **ShowOnDocumentLibraryAuthoringPages</span> is called <span sdata="cer" target="P:Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnDocumentLibraryCreate"><span class="nolink">ShowOnDocumentLibraryCreate</span>**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowOnSurveyAuthoringPages**</p></td>
<td align="left"><p>Optional **Boolean</span>. The default is **TRUE</span>. Represents whether this field type is displayed for inclusion on surveys. If set to **TRUE**, SharePoint Foundation displays this field type on survey authoring pages so that users can include the field type in their surveys.</p>
<p>In the SharePoint Foundation object model **ShowOnSurveyAuthoringPages</span> is called <span sdata="cer" target="P:Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnSurveyCreate"><span class="nolink">ShowOnSurveyCreate</span>**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowOnColumnTemplateAuthoringPages**</p></td>
<td align="left"><p>Optional **Boolean</span>. The default is **TRUE</span>. Represents whether this field type should be displayed as a column template field type. If set to **TRUE**, SharePoint Foundation displays this field type on column template authoring pages so that users can select to create a column template of this field type.</p>
<p>In the SharePoint Foundation object model **ShowOnColumnTemplateAuthoringPages</span> is called <span sdata="cer" target="P:Microsoft.SharePoint.SPFieldTypeDefinition.ShowOnColumnTemplateCreate"><span class="nolink">ShowOnColumnTemplateCreate</span>**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SQLType**</p></td>
<td align="left"><p>Optional **String**. Represents the SQL data type that will be used to store the data in the content database. <em>Do not use a</em> &lt;Field Name="SQLType"&gt;<em>element in your custom field type definitions.</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sortable**</p></td>
<td align="left"><p>Required **Boolean</span>. Represents whether a list with a column that is based on this field type can be sorted on the column that uses this type. If set to **TRUE**, the header of the column is a control that users can use to sort the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TypeDisplayName**</p></td>
<td align="left"><p>Required **String</span>. Represents the display name of the field type in the user interface (UI). In SharePoint Foundation, it appears in the <span class="ui">Type</span> column on the <span class="ui">Customize</span> [list] page (listedit.aspx). It is also used in place of **"</span><span class="label">TypeShortDescription</span>**"** if the latter is not present.</p>
<p>**"</span><span class="label">TypeDisplayName</span>**"** should be a localizable string.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TypeName**</p></td>
<td align="left"><p>Required **String**. Represents the name of the field type. This must be unique among all field type names on the SharePoint server farm.</p>
<p>**"TypeName"** should be a fixed, nonlocalizable string.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TypeShortDescription**</p></td>
<td align="left"><p>Optional **String</span>. Represents the short description of the field type that is displayed in the UI. In SharePoint Foundation it appears with a radio button in the <span class="ui">Name and Type </span>section of the <span class="ui">New Site Column</span> and <span class="ui">Create Column</span> pages and in the <span class="ui">Type</span> column of the <span class="ui">Site Column Gallery</span>. If there is no &lt;Field Name="TypeShortDescription"&gt; element, then **"TypeDisplayName"** is used.</p>
<p>**"</span><span class="label">TypeShortDescription</span>**"** should be a localizable string.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UserCreatable**</p></td>
<td align="left"><p>Optional **Boolean</span>. The default is **TRUE</span> which enables users to add fields of this field type to lists. Setting the value to **FALSE</span> allows use of the field type in list schemas, but hides the field type from users on the <span class="ui">Name and Type </span>section of the <span class="ui">New Site Column</span> and <span class="ui">Create Column** pages.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example defines a custom field type.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src=".." title="Important note" alt="Important note" /><strong>Important</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The **RenderPattern** is obsolete. It is shown here solely to assist in the debugging of custom fields that were originally developed against earlier versions of SharePoint Foundation.</p></td>
</tr>
</tbody>
</table>

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
      <FieldType>
        <Field Name="TypeName">SocialSecurityNumber</Field>
        <Field Name="ParentType">Text</Field>
        <Field Name="TypeDisplayName">Social Security Number</Field>
        <Field Name="TypeShortDescription">Social Security Number (123456789, 123-45-6789)</Field>
        <Field Name="AllowBaseTypeRendering">TRUE</Field>
        <Field Name="FieldTypeClass">
          AdventureWorks.FieldTypes.SPFieldSSN, AdventureWorks.FieldTypes.SPFieldSSN,
          Version=1.0.0.0,Culture=neutral,PublicKeyToken=90734cc53324b79c
        </Field>
        <RenderPattern Name="DisplayPattern">
            <Column HTMLEncode="TRUE" /> 
            <Column HTMLEncode="TRUE" UseRelatedField="TRUE"/> 
        </RenderPattern>
      </FieldType>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Custom Field
Types](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13(Office.15).aspx)

[Custom Field
Classes](http://msdn.microsoft.com/library/436a9d9b-7a6f-4e8f-86e8-f42ded85c069(Office.15).aspx)

[Custom Field Type Property
Rendering](http://msdn.microsoft.com/library/a959ad5b-6f3a-462c-80b9-e2d00bb0d62a(Office.15).aspx)

[Custom Field Type
Definition](http://msdn.microsoft.com/library/b3315997-671f-4c29-9518-48cc4592f205(Office.15).aspx)

[Walkthrough: Creating a Custom Field
Type](http://msdn.microsoft.com/library/089a1b8a-cafc-4050-b445-16650602fe4f(Office.15).aspx)








