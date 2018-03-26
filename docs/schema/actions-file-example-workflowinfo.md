---


manager: laurawi
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8c6e3c71-4e1b-4068-bb03-6d5b0dcdd888
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
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
<td align="left"># .ACTIONS File Example (WorkflowInfo)</td>
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

**Last modified:** July 15, 2011

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

This example shows the general structure of a valid .ACTIONS file that
can be used to import custom conditions and actions into a declarative,
rules-based code-free workflow editor, such as Microsoft SharePoint
Designer 2010.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following XML is an example of how an .ACTIONS file could be
constructed to add **Conditions** or <span
class="keyword">Actions</span> elements to the default list.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8"?>
    <WorkflowInfo Language="en-us">
       <Conditions And="and"
                   Else="Else If"
                   Not="not"
                   Or="or"
                   When="If">
          <Condition AppliesTo="list"
                     Assembly="Assembly.Name, 
                               Version=0.0.0.0, 
                               Culture=neutral, 
                               PublicKeyToken=GUID"
                     ClassName="Fully qualified 
                                class name"
                     FunctionName="Boolean method name
                                   implemented in 
                                   class"
                     Name="Name to be displayed in 
                           workflow editor"
                     Type="Advanced"
                     UsesCurrentItem="true">
             <RuleDesigner Sentence="Sentence to be 
                                     displayed to the 
                                     workflow editor">
                <FieldBind DesignerType="Date"
                           Field="Parameter that 
                                  FieldBind maps to"
                           Function="true"
                           Id="Unique positive Integer"
                           Text="Text to be displayed 
                                 as a hyperlink"
                           TypeFrom="Parameter that a 
                                     non-Operator derives 
                                     its type from"
                           Value="Reserved for future use">
                   <Option Name="Option1" Value="Value1" />
                </FieldBind>
             </RuleDesigner>
             <Parameters>
                <Parameter Direction="In"
                           InitialValue=""
                           Name="MyParameter"
                           Type="System.String, mscorlib" />
             </Parameters>
          </Condition>
       </Conditions>
       <Actions>
          <Action Name="Action name displayed in editor">
             <RuleDesigner Sentence="Sentence to be 
                                     displayed to the
                                     workflow editor">
                <FieldBind DesignerType="CreateListItem"
                           Field="Parameter that FieldBind 
                                  maps to"
                           Function="true"
                           Id="Unique positive Integer"
                           OperatorTypeFrom="Parameter 
                                             Operator derives 
                                             its type from"
                           Text="Text to be displayed 
                                 as a hyperlink"
                           TypeFrom="Parameter non-Operator 
                                     derives its type from"
                           Value="Reserved for future use">
                </FieldBind>
             </RuleDesigner>
          </Default>
       </Actions>
    </WorkflowInfo>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Tasks

[.ACTIONS File Example](actions-file-example-workflowinfo.md)

#### Concepts

[Default Workflow Actions](default-workflow-actions-workflowinfo.md)

[Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)

#### Other resources

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Workflow Actions Schema
Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








