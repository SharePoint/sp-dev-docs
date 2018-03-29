---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: ce8f6c58-a488-4eb0-a5fb-941e97b2bd92
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># ContentType Element (ContentType)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Defines a single content type.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ContentType
  BaseType=&quot;Text&quot;
  ID=&quot;Text&quot;
  Name=&quot;Text&quot;
  Description=&quot;Text&quot;
  DocumentTemplate=&quot;Text&quot;
  FeatureId=&quot;Text&quot;
  Group=&quot;Text&quot;
  Hidden=&quot;TRUE&quot; | &quot;FALSE&quot;
  Inherits=&quot;TRUE&quot; | &quot;FALSE&quot;
  ProgId=&quot;Text&quot;
  NewDocumentControl=&quot;Text&quot;
  Overwrite=&quot;TRUE&quot; | &quot;FALSE
  PushDownChangedResourceFilesOnly=&quot;TRUE&quot; | &quot;FALSE
  ReadOnly=&quot;TRUE&quot; | &quot;FALSE&quot;
  RequireClientRenderingOnNew=&quot;TRUE&quot; | &quot;FALSE&quot;
  ResourceFolder=&quot;Text&quot;
  Sealed=&quot;TRUE&quot; | &quot;FALSE&quot;
  V2ListTemplateName=&quot;Text&quot;
  Version=&quot;Integer&quot;
/&gt;</code></pre></td>
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
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Reserved for internal use.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the content type ID of the content type. A content type ID has a very specific format. If the value that you assign the **ID** attribute is not in the correct format, you will get an error when the Feature activates. For more information, see <a href="http://msdn.microsoft.com/library/81fa8d81-c4f5-4750-8f70-811620fdffcf(Office.15).aspx">Content Type IDs</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the content type name. The value can be a reference to a resource in the format <span class="code">$Resources:String</span>. For more information, see <a href="http://msdn.microsoft.com/en-us/library/ee696750(VS.100).aspx">Localizing SharePoint Solutions</a>.The name itself cannot be longer than 128 characters and cannot contain the characters <span class="code">\ / : * ? &quot; # % &lt; &gt; { } | ~ &amp;</span>, two consecutive periods (<span class="code">..**), or special characters such as a tab.</p>
<p>An error occurs if another content type with the same name exists in the collection where the content type is added.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text</span>. Provides a description for the content type, to display in the SharePoint Foundation user interface. The value can be a reference to a resource in the format <span class="code">$Resources:String**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentTemplate**</p></td>
<td align="left"><p>Obsolete. Use the <a href="documenttemplate-element-contenttype.md">DocumentTemplate</a> element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Optional **Text**. Provides the ID of the feature with which the content type is associated. The value should be the string representation of a GUID structure, including braces.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Group**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the content type group to which the content type is assigned. Content type groups are user-defined groups that help you organize content types into logical categories. The value can be a reference to a resource in the format <span class="code">$Resources:String**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to define the content type as hidden. If you define a content type as hidden, SharePoint Foundation does not display that content type on the <span class="ui">New** button in list views.</p>
<p>If you do not include this attribute, SharePoint Foundation treats the content type as if the attribute was set to **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Inherits**</p></td>
<td align="left"><p>Optional **Boolean**. The value of this attribute determines whether the content type inherits fields from its parent content type when it is created.</p>
<p>If **Inherits</span> is **TRUE**, the child content type inherits all fields that are in the parent, including fields that users have added.</p>
<p>If **Inherits</span> is **FALSE** or absent and the parent content type is a built-in type, the child content type inherits only the fields that were in the parent content type when SharePoint Foundation was installed. The child content type does not have any fields that users have added to the parent content type.</p>
<p>If **Inherits</span> is **FALSE** or absent and the parent content type was provisioned by a sandboxed solution, the child does not inherit any fields from the parent.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NewDocumentControl**</p></td>
<td align="left"><p>Optional **Text**. The programmatic identifier for the preferred application to create a new document of this content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Overwrite**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to overwrite an existing content type with the same ID.</p>
<p>The default is **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ProgId**</p></td>
<td align="left"><p>Optional **Text**. The programmatic identifier for the preferred application to open a document of this content type. This attribute distinguishes between applications that save files with a specified file extension.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PushDownChangedResourceFilesOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to copy only changed resource files to derived content types during a push down operation.</p>
<p>The default is **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify that the content type cannot be edited without explicitly removing the read-only setting. This can be done either in the user interface or in code. For more information, see <a href="http://msdn.microsoft.com/library/203da792-bd6e-41b9-8f42-ffe397d0cbdd(Office.15).aspx">Content Type Change Control</a>.</p>
<p>If you do not include this attribute, SharePoint Foundation treats the content type as if the attribute was set to **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequireClientRenderingOnNew**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to require the browser to use the application specified by the **ProgId** attribute for creating a new item.</p>
<p>The default is **TRUE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ResourceFolder**</p></td>
<td align="left"><p>Obsolete. Use the <a href="folder-element-contenttype.md">Folder</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sealed**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to prevent changes to this content type. You cannot change the value of this attribute through the user interface, but you can change it in code if you have sufficient rights. You must have site collection administrator rights to unseal a content type.</p>
<p>If you do not include this attribute, SharePoint Foundation treats the content type as if the attribute was set to **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**V2ListTemplateName**</p></td>
<td align="left"><p>Optional **Text**. Specifies the Windows SharePoint Services 2.0 list template type to which this content type maps. For example, the Document content type maps to the Document Library list template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>Reserved for future use.</p></td>
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
<td align="left"><p><a href="documenttemplate-element-contenttype.md">DocumentTemplate</a>, <a href="fieldrefs-element-contenttype.md">FieldRefs</a>, <a href="folder-element-contenttype.md">Folder</a>, <a href="xmldocuments-element-contenttype.md">XMLDocuments</a></p></td>
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
<td align="left"><p><a href="contenttypes-element-list.md">ContentTypes</a>, <a href="elements-element-contenttype.md">Elements</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example is the content type definition of the <span
class="keyword">Document</span> content type.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <ContentType ID="0x0101"
      Name="$Resources:Document"
      Group="$Resources:Document_Content_Types"
      Description="$Resources:DocumentCTDesc"
      V2ListTemplateName="doclib"
      Version="0">
      <FieldRefs>
        <RemoveFieldRef ID="{67df98f4-9dec-48ff-a553-29bece9c5bf4}" Name="Attachments" />
        <!-- Attachments -->
        <RemoveFieldRef ID="{f1e020bc-ba26-443f-bf2f-b68715017bbc}" Name="WorkflowVersion" />
        <!-- WorkflowVersion -->
        <RemoveFieldRef ID="{bc91a437-52e7-49e1-8c4e-4698904b2b6d}" Name="LinkTitleNoMenu" />
        <!-- LinkTitleNoMenu -->
        <RemoveFieldRef ID="{82642ec8-ef9b-478f-acf9-31f7d45fbc31}" Name="LinkTitle" />
        <!-- LinkTitle -->
        <RemoveFieldRef ID="{ae069f25-3ac2-4256-b9c3-15dbc15da0e0}" Name="GUID" />
        <!-- GUID -->
        <RemoveFieldRef ID="{de8beacf-5505-47cd-80a6-aa44e7ffe2f4}" Name="WorkflowInstanceID" />
        <!-- WorkflowInstanceID -->
        <FieldRef ID="{5f47e085-2150-41dc-b661-442f3027f552}" Name="SelectFilename" />
        <!-- SelectFilename -->
        <FieldRef ID="{8553196d-ec8d-4564-9861-3dbe931050c8}" Name="FileLeafRef" Required="TRUE"/>
        <!-- FileLeafRef -->
        <FieldRef ID="{8c06beca-0777-48f7-91c7-6da68bc07b69}" Name="Created" Hidden="TRUE" />
        <!-- Created -->
        <FieldRef ID="{fa564e0f-0c70-4ab9-b863-0177e6ddd247}" Name="Title" Required="FALSE" ShowInNewForm="FALSE" ShowInEditForm="TRUE"/>
        <!-- Title -->
        <FieldRef ID="{28cf69c5-fa48-462a-b5cd-27b6f9d2bd5f}" Name="Modified"  Hidden="TRUE" />
        <!-- Modified -->
        <FieldRef ID="{822c78e3-1ea9-4943-b449-57863ad33ca9}" Name="Modified_x0020_By" Hidden="FALSE"/>
        <!-- Modified_x0020_By -->
        <FieldRef ID="{4dd7e525-8d6b-4cb4-9d3e-44ee25f973eb}" Name="Created_x0020_By" Hidden="FALSE" />
        <!-- Created_x0020_By -->
      </FieldRefs>
      <XmlDocuments>
        <XmlDocument NamespaceURI="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms">
          <FormTemplates xmlns="http://schemas.microsoft.com/sharepoint/v3/contenttype/forms">
            <Display>DocumentLibraryForm</Display>
            <Edit>DocumentLibraryForm</Edit>
            <New>DocumentLibraryForm</New>
          </FormTemplates>
        </XmlDocument>
      </XmlDocuments>
    </ContentType>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Content Type
Definitions](content-type-definitions.md)</span>

#### Other resources

[Content
Types](http://msdn.microsoft.com/library/f5e56c7c-f699-466c-a7ad-3d91a7d219a1(Office.15).aspx)

[How to: Add a Content Type to a
Site](http://msdn.microsoft.com/library/8c448bfb-4036-451c-ac7d-2eccf13ccd5e(Office.15).aspx)

[How to: Add a Content Type to a
List](http://msdn.microsoft.com/library/5ae6e295-a406-4f90-920f-030c0dfcd666(Office.15).aspx)








