---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 57efcd92-6cd3-465e-af3b-12a17d6b2c35
---

# Workflow Element (Elements)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a workflow.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Workflow
  Title="Text"
  Name="Text"
  CodeBesideAssembly="Text"
  CodeBesideClass="Text"
  Description="Text"
  Id="Text"
  EngineClass="Text"
  EngineAssembly="Text"
  AssociationUrl="Text"
  InstantiationUrl="Text"
  ModificationUrl="Text"
  StatusUrl="Text"
  TaskListContentTypeId="Text" >
</Workflow></code></pre></td>
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
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Specifies the workflow name that is displayed in the SharePoint Foundation interface. The workflow name can be up to 256 characters long.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CodeBesideAssembly**</p></td>
<td align="left"><p>Required **Text**. Specifies the strong name of the code beside assembly.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CodeBesideClass**</p></td>
<td align="left"><p>Required **Text**. Specifies the name of the workflow class in the code-beside file used to generate the workflow assembly. This should include the namespace of the class.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Specifies the workflow description to be displayed in the SharePoint Foundation interface. The workflow description can be up to 256 characters long.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required **Text**. Specifies the globally unique identifier (GUID) for the workflow.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EngineClass**</p></td>
<td align="left"><p>Reserved for future use.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EngineAssembly**</p></td>
<td align="left"><p>Reserved for future use.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AssociationUrl**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the URL of the association form for this workflow. Set the value of the **AssociationURL** attribute to the custom form page you want to use for workflow association. For example:</p>
<div class="code">
<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)" onkeypress="CopyCode_CheckKey(this, event)" onmouseover="ChangeCopyCodeIcon(this)" onmouseout="ChangeCopyCodeIcon(this)" tabindex="0"><img src=".." title="Copy code" alt="Copy code" />Copy code</span>
<pre><code>AssociationURL = "MyWkflAssociationPage.aspx"</code></pre>
</div>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SharePoint Foundation supports absolute or server-relative paths in the workflow template definition. All form path URLs must be expressed in one of these formats. For example, an absolute path, such as "<span class="code">http://site/library/page.aspx</span>"; or a server-relative path, such as <span class="code">"/layouts/page.aspx</span>". SharePoint Foundation does not support link fix-up in workflow template definitions.</p></td>
</tr>
</tbody>
</table>
</div>
<p>To use the same form for instantiation and association of the workflow, set both elements to that form.</p>
<p>For more information about association forms, see <a href="http://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx">Workflow Association and Initiation Forms (Windows SharePoint Services)</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**InstantiationUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL of the initiation form for this workflow. For example:</p>
<div class="code">
<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)" onkeypress="CopyCode_CheckKey(this, event)" onmouseover="ChangeCopyCodeIcon(this)" onmouseout="ChangeCopyCodeIcon(this)" tabindex="0"><img src=".." title="Copy code" alt="Copy code" />Copy code</span>
<pre><code>InstantiationURL = "MyWorkflowInitiationPage.aspx"</code></pre>
</div>
<div class="alert">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SharePoint Foundation supports absolute or server-relative paths in the workflow template definition. All form path URLs must be expressed in one of these formats. For example, an absolute path, such as <span class="code">"http://site/library/page.aspx</span>"; or a server-relative path, such as <span class="code">"/layouts/page.aspx"</span>. SharePoint Foundation does not support link fix-up in workflow template definitions.</p></td>
</tr>
</tbody>
</table>
</div>
<p>For more information about initiation forms, see <a href="http://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx">Workflow Association and Initiation Forms (Windows SharePoint Services)</a>.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ModificationUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL of the form handling the modifications for this workflow. If your workflow includes multiple modifications, you can program the form you specify with this attribute to:</p>
<ul>
<li><p>Display a different view of the form, based on the modification identifier passed to this form.</p></li>
<li><p>Redirect to a separate form, based on the modification identifier passed to this form.</p></li>
</ul>
<p>For more information about modification forms, see <a href="http://msdn.microsoft.com/library/fba5147d-70a7-4f83-8efc-2fe0a5d0b4a7(Office.15).aspx">Workflow Modification Forms (Windows SharePoint Services)</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StatusUrl**</p></td>
<td align="left"><p>Obsolete. Do not use.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TaskListContentTypeId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the content type ID of the content type assigned to the workflow task list.</p>
<p>For more information about task forms, see <a href="http://msdn.microsoft.com/library/327137dd-9a2b-4df6-be48-582a4b41aaa9(Office.15).aspx">Workflow Task Forms (Windows SharePoint Services)</a>.</p></td>
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
<td align="left"><p><span sdata="link"><a href="associationdata-element-workflow.md">AssociationData Element (Workflow)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="metadata-element-workflow.md">MetaData Element (Workflow)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="categories-element-workflow.md">Categories Element (Workflow)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="elements-element-workflow.md">Elements Element (Workflow)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For more information about association and initiation forms, see
[Workflow Association and Initiation Forms (Windows SharePoint
Services)](http://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx).


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Following is an example of the **Workflow**
element in a workflow definition elements file. The example has been
edited for clarity.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8" ?> 
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
      <Workflow
            Name="AdventureWorksWorkflow"
            Description="Use this workflow to track sequential tasks of users."
            Id="C6964BFF-BG8D-41ac-AC5E-B61EC111731C"
            CodeBesideClass="AdventureWorks.Workflow1"
            CodeBesideAssembly="AdventureWorks, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e3bce121e9429c"
            TaskListContentTypeId="0x01080100C9C9515DE4E24001905074F980F93160"
            AssociationUrl="_layouts/myAssocPage.aspx"
            InstantiationUrl="_layouts/myIniPage.aspx"
            ModificationUrl="_layouts/myModPage.aspx">
        <Categories/>
        <AssociationData>
          …
        </AssociationData>
        <MetaData>
          …
        </MetaData>
      </Workflow>
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Workflow
Definitions](workflow-definitions.md)</span>

#### Other resources

[Workflows in Windows SharePoint
Services](http://msdn.microsoft.com/library/be0888d4-20b2-4d39-bf28-2d8a71829d8e(Office.15).aspx)

[Workflow Deployment Using
Features](http://msdn.microsoft.com/library/ad294f09-483d-4e87-bd19-fa37795ed558(Office.15).aspx)

[Workflow Association and Initiation Forms (Windows SharePoint
Services)](http://msdn.microsoft.com/library/ffdfe5a7-f860-47b0-80e0-2dc2bd36ed38(Office.15).aspx)

[Workflow Modification Forms (Windows SharePoint
Services)](http://msdn.microsoft.com/library/fba5147d-70a7-4f83-8efc-2fe0a5d0b4a7(Office.15).aspx)

[Workflow Task Forms (Windows SharePoint
Services)](http://msdn.microsoft.com/library/327137dd-9a2b-4df6-be48-582a4b41aaa9(Office.15).aspx)








