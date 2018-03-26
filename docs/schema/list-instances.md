---


manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f0cb0e1e-0871-4193-b0e9-519e34d7e839
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
<td align="left"># List Instances</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

The [ListInstance](listinstance-element-list-instance.htm) element
specifies default data with which to provision the given list type. This
element maps to the **List** element previously
located within the
[Configuration](configuration-element-site.htm) element in
[Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx).

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_caution.gif" title="Caution note" alt="Caution note" /><strong>Caution</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>When a list instance is provisioned in a Feature, the **Title** attribute must be specified and unique.</p></td>
</tr>
</tbody>
</table>

[Elements](elements-element-list-instance.htm)

  [ListInstance](listinstance-element-list-instance.htm)

    [Data](data-element-list-instance.htm)

      [Rows](rows-element-list-instance.htm)

        [Row](row-element-list-instance.htm)

          [Field](field-element-list-instance.htm)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows the contents of an XML file in which the
[ListInstance](listinstance-element-list-instance.htm) element is used
to specify default data for a list instance.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <?xml version="1.0" encoding="utf-8" ?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
       <ListInstance 
          Id="WssAdminTasks" Title="Administrator Tasks" 
          Description="Create an Administrator Tasks list to track a group of admin work items."
          TemplateType="1200" Url="Lists/AdminTasks">
          <Data>
             <Rows>
                <Row>
                   <Field Name="Action">/_admin/globalemailconfig.aspx?Source=/default.aspx, Configure Outgoing E-Mail Settings</Field>
                   <Field Name="Description">Specify the SMTP e-mail server to use for alerts and administrator notifications.</Field>
                   <Field Name="Title">Outgoing e-mail settings</Field>
                   <Field Name="SystemTask">True</Field>
                   <Field Name="Priority">01</Field>
                   <Field Name="Service">SMTP</Field>
                </Row>
             </Rows>
          </Data>
       </ListInstance>
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[List
Instance](http://msdn.microsoft.com/library/8fb93773-06d8-4d42-9095-4a6af5dc8ef1(Office.15).aspx)








