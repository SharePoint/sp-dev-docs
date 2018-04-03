---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: 60a72dbc-6c85-4adc-98d9-f75129458482
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
<td align="left"># Layout Element</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Defines the layout of controls in a template.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Layout
  Title="Text"
  LayoutTitle="Text"
/></code></pre></td>
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
<td align="left"><p>Required. A string that identifies the element within its parent <a href="grouptemplate-element.md">GroupTemplate</a> element. The element's ID in the Document Object Model (DOM) is formed on the pattern "ParentId-Title".</p></td>
</tr>
<tr class="even">
<td align="left"><p>**LayoutTitle**</p></td>
<td align="left"><p>Optional. An alternative identifier for the element. Use this attribute to provide a title when the value of the **Title** attribute is "Popup".</p></td>
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
<td align="left"><p><a href="section-element.md">Section</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="overflowsection-element.md">OverflowSection</a></p></td>
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
<td align="left"><p><a href="grouptemplate-element.md">GroupTemplate</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: unbounded</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example is an XML fragment that defines a group template
that has several **Layout** elements.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <GroupTemplate Id="Ribbon.Templates.FontGroup">
      <Layout Title="Large">
        <Section Type="TwoRow" Alignment="Middle">
          <Row>
            <ControlRef TemplateAlias="font" DisplayMode="Medium" />
            <ControlRef TemplateAlias="fontsize" DisplayMode="Medium" />
          </Row>
          <Row>
            <Strip>
              <ControlRef TemplateAlias="bold" DisplayMode="Small" />
              <ControlRef TemplateAlias="italics" DisplayMode="Small" />
              <ControlRef TemplateAlias="underline" DisplayMode="Small" />
              <ControlRef TemplateAlias="strikethrough" DisplayMode="Small" />
              <ControlRef TemplateAlias="subscript" DisplayMode="Small" />
              <ControlRef TemplateAlias="superscript" DisplayMode="Small" />
            </Strip>
            <Strip>
              <ControlRef TemplateAlias="backgroundcolor" DisplayMode="Small" />
              <ControlRef TemplateAlias="fontcolor" DisplayMode="Small" />
            </Strip>
            <Strip>
              <ControlRef TemplateAlias="clearformat" DisplayMode="Small" />
            </Strip>
          </Row>
        </Section>
        <OverflowSection Type="OneRow" TemplateAlias="o1" DisplayMode="Large"/>
      </Layout>
      <Layout Title="Medium">
        <Section Type="ThreeRow">
          <Row>
            <ControlRef TemplateAlias="font" DisplayMode="Medium" />
            <ControlRef TemplateAlias="fontsize" DisplayMode="Medium" />
          </Row>
          <Row>
            <Strip>
              <ControlRef TemplateAlias="bold" DisplayMode="Small" />
              <ControlRef TemplateAlias="italics" DisplayMode="Small" />
              <ControlRef TemplateAlias="underline" DisplayMode="Small" />
              <ControlRef TemplateAlias="strikethrough" DisplayMode="Small" />
              <ControlRef TemplateAlias="subscript" DisplayMode="Small" />
              <ControlRef TemplateAlias="superscript" DisplayMode="Small" />
            </Strip>
          </Row>
          <Row>
            <Strip>
              <ControlRef TemplateAlias="backgroundcolor" DisplayMode="Small" />
              <ControlRef TemplateAlias="fontcolor" DisplayMode="Small" />
            </Strip>
            <Strip>
              <ControlRef TemplateAlias="clearformat" DisplayMode="Small" />
            </Strip>
          </Row>
        </Section>
        <OverflowSection Type="ThreeRow" TemplateAlias="o1" DisplayMode="Medium"/>
      </Layout>
      <Layout Title="Popup" LayoutTitle="Large" />
    </GroupTemplate>








