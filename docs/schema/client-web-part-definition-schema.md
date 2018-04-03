---


manager: soliver
ms.date: 12/7/2015
ms.audience: Developer
ms.topic: article
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8924f546-44db-4308-90f9-8b5d9b2ffa4f
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
<td align="left"># Client Web Part Definition Schema</td>
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

**Last modified:** December 07, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Client Web Part is the backing structure of app parts. App parts are
defined in XML documents and deployed as part of a Feature.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

An XML document that defines Client Web Parts must validate with the
schema defined in the file wss.xsd. This file is located on the
following path: %ProgramFiles%\\Common Files\\Microsoft Shared\\web
server extensions\\15\\TEMPLATE\\XML.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[Elements](elements-element-custom-action.md)

  [ClientWebPart](customactiongroup-element-custom-action.md)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The [ClientWebPart](customactiongroup-element-custom-action.md) element
contains the core definition for a Client Web Part. A Client Web Part is
an UI extensibility mechanism that lets apps show information in the
host web. You can render the HTML contents of a page in an **IFrame**
embedded in a SharePoint page.

You define the page to be rendered inside the **IFrame** using the Src
attribute of the Content element. The target page must be allowed to be
displayed in a frame, otherwise the SharePoint page displays the
following error: <span class="ui">This content cannot be displayed in a
frame</span>. Some pages contain an **X-FRAME-OPTIONS** http header as a
mechanism to prevent
[ClickJacking](http://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx)
attacks. You must carefully evaluate if the page supports a scenario
that could be targeted by a ClickJacking attack, such as a bank
transaction page or a purchase page in an online store. After assessing
the risk of allowing your target page to be framed by external pages you
can remove the **X-FRAME-OPTIONS** http header to display your page in a
Client Web Part.

By default, SharePoint pages include an **X-FRAME-OPTIONS** http header.
If you are using a SharePoint page as the target for your Client Web
Part you can remove the **X-FRAME-OPTIONS** header by adding the
**AllowFraming** Web Part. The following code snippet shows you how to
add an **AllowFraming** Web Part to your SharePoint page:

<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
        <WebPartPages:AllowFraming ID="AllowFraming1" runat="server" />
        <div>
            Your content
        </div>
    </asp:Content>

You can add custom properties to your Client Web Part. You define the
custom properties in the **Elements.xml** file of the feature. There are
four types of custom properties:

-   string

-   integer

-   boolean

-   enumeration

You can detect when the user is editing your Client Web Part by using
the **\_editMode\_** token. The <span
class="keyword">\_editMode\_</span> token returns 1 if the Client Web
Part is in edit mode and 0 otherwise.

The target page can dynamically resize the Client Web Part's **IFrame**.
You can use JavaScript to issue a **postmessage** with the desired
height and width. For a code sample that shows you how to resize an app
part, see [Resize app parts dynamically in apps for
SharePoint](http://code.msdn.microsoft.com/officeapps/SharePoint-2013-Resize-app-594acc88).

Client Web Parts don't support Web Part connections.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows an XML file that declares a Client Web Part.
For an article that shows the steps for creating and deploying an app
part, see [Create add-in parts to install with your SharePoint
Add-in](http://msdn.microsoft.com/library/a2664289-6c56-4cb1-987a-22367fad55eb(Office.15).aspx).

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <?xml version="1.0" encoding="UTF-8"?>
    <Elements xmlns="http://schemas.microsoft.com/sharepoint/">
        <ClientWebPart
            Title="Basic app part"
            Name="Basic app part"
            Description="This is a basic app part with custom properties." >
            
            <!--  The properties are passed through the query string 
                    using the following notation: _propertyName_
                    in the Src property of the Content element  
              -->
            <Content
                Src="~remoteAppUrl/AppPartContent.aspx?strProp=_strProp_&amp;intProp=_intProp_&amp;boolProp=_boolProp_&amp;enumProp=_enumProp_&amp;editmode=_editMode_"
                Type="html"/>
            <Properties>
                <Property
                    Name="strProp"
                    Type="string"
                    RequiresDesignerPermission="true"
                    DefaultValue="String default value"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type string.">
                </Property>
                <Property
                    Name="intProp"
                    Type="int"
                    RequiresDesignerPermission="true"
                    DefaultValue="0"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type integer.">
                </Property>
                <Property
                    Name="boolProp"
                    Type="boolean"
                    RequiresDesignerPermission="true"
                    DefaultValue="false"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type boolean.">
                </Property>
                <Property
                    Name="enumProp"
                    Type="enum"
                    RequiresDesignerPermission="true"
                    DefaultValue="1st"
                    WebCategory="Basic app part category"
                    WebDisplayName="A property of type enum.">
                    <EnumItems>
                        <EnumItem WebDisplayName="First option" Value="1st"/>
                        <EnumItem WebDisplayName="Second option" Value="2nd"/>
                        <EnumItem WebDisplayName="Third option" Value="3rd"/>
                    </EnumItems>
                </Property>
            </Properties>
        </ClientWebPart>
    </Elements>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Custom
Action](http://msdn.microsoft.com/library/961f74b3-77c7-4e3d-ba4c-e7a13ed95b5f(Office.15).aspx)

[UX design for SharePoint
Add-ins](http://msdn.microsoft.com/library/d60f409a-b292-4c06-8128-88629091b753(Office.15).aspx)

[Create add-in parts to install with your SharePoint
Add-in](http://msdn.microsoft.com/library/a2664289-6c56-4cb1-987a-22367fad55eb(Office.15).aspx)








