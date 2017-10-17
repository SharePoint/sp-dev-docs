# Sandbox solution transformation guidance - InfoPath
When you're using InfoPath forms with code-behind then these InfoPath forms do depend on code-based sandbox solutions for executing the code-behind. This article will help you to either fix or transform your InfoPath forms so that there's no sandbox solution dependency anymore.

_**Applies to:** InfoPath forms for SharePoint Online | SharePoint 2013 | SharePoint 2016_

Code-based sandbox solutions [were deprecated](https://blogs.msdn.microsoft.com/sharepointdev/2014/01/14/deprecation-of-custom-code-in-sandboxed-solutions/) back in 2014 and SharePoint online has started the process to completely remove this capability. Code-based sandbox solutions are also deprecated in SharePoint 2013 and in SharePoint 2016.

## Analyze and if possible fix your InfoPath forms
<a name="sectionSection1"> </a>

In this section we show you an analysis and fixing model that you can apply to your InfoPath forms. Depending on your form you can simply **fix** the form and redeploy it or you need to **move away from InfoPath** and use an alternative approach to realize the needed functionality. However before taking those actions **it's important to assess the business need for your form**: we often see a lot of old forms which are not business relevant anymore and in those cases it's easier to simply drop the form. 

### How do I know that I've InfoPath forms with code behind?
The recommended option is to use the **[SharePoint SandBox Solution scanner tool](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.SandBoxTool)** as the report from this tool will indicate if the sandbox solution is coming from an InfoPath file. Additionally the tool will also tell you if the used assembly in the solution is "useless" as described later on in this article.

### Are my forms still relevant?
Before diving into the remediation/transformation work it's important to ask the question: is this form still critical for my business. If so then please continue to the next chapter, if not you need to think about the data created using this form. Typically the data was created as InfoPath XML files which live in a SharePoint list. If you remove the form you'll not be able to visualize the data anymore: sometimes that's fine since form and data are not relevant anymore but in case you want to ensure access to the data you can convert the InfoPath XML files to SharePoint list (items) data. The [PnP-Transformation repository contains a sample showing how you can achieve this](https://github.com/SharePoint/PnP-Transformation/tree/master/InfoPath/Migration/EmpRegConsole "Sample showing how to transform from InfoPath XML to list data").

### Downloading the InfoPath form (XSN file) for inspection
In the section step you've confirmed that you have InfoPath forms that require work, in this section you'll learn how to download these forms. InfoPath forms with code behind are either deployed as "Form Library" or as "Site Content Type". Depending on the chosen publishing model you can download the forms as follows.

#### Download "Form Library" deployed InfoPath forms
In this case the XSN file is inside the Forms folder of the form library to which the InfoPath form was deployed. To know the form library you can take a look at the WSP package name as if follows this convention: "InfoPath Form_**LibName**_id". So once you have the library you need to download the template.xsn file from the Forms folder of the library. You can do so by constructing an url like this: **library url + "Forms/template.xsn"** like shown in this sample `https://contoso.sharepoint.com/sites/infopath1/IHaveCodeBehind/Forms/template.xsn` and using the browser to download the file.

#### Download "Site Content Type" deployed InfoPath forms
InfoPath forms deployed as content type do have their XSN file stored in a form library which was connected to the content type as form deployment time. Like in the previous section you can obtain the library name from the WSP package name. What's different this time is that the form is actually stored as a file in the found library, so you can simply download it from the form library. 

### Fixing your InfoPath forms
Previous sections have shown and given you the InfoPath forms with code behind but do they really contain useful code behind? What we see is that there's quite a lot of forms for which the form author accidentally clicked on the **Code Editor** button in the **Developer** ribbon of InfoPath:

![InfoPath code behind](media/Sandbox-Solution-Transformation-Guidance-InfoPath/InfoPathCodeBehind.png)

Once you've done this you'll have code behind...but this code behind is not doing anything and by removing it you can convert your InfoPath form with code behind to a regular InfoPath form which has no code behind and as such no dependency on sandbox solutions!

#### How do I know the code behind is "useless"?
The [SharePoint Sandbox Solution scanner](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.SandBoxTool) will tell you if your InfoPath has useless code, but if you want to learn more then continue reading. You might wonder how to distinguish between useless and needed code behind as you can only fix the first category. If you still have the original deployed form (so not the one you've downloaded in previous steps) you can simply have a peek at the code. The default empty code is shown below and if you've similar code then this form can be fixed by dropping the code:

```C#
using Microsoft.Office.InfoPath;
using System;
using System.Xml;
using System.Xml.XPath;

namespace Form1
{
    public partial class FormCode
    {
        // Member variables are not supported in browser-enabled forms.
        // Instead, write and read these values from the FormState
        // dictionary using code such as the following:
        //
        // private object _memberVariable
        // {
        //     get
        //     {
        //         return FormState["_memberVariable"];
        //     }
        //     set
        //     {
        //         FormState["_memberVariable"] = value;
        //     }
        // }

        // NOTE: The following procedure is required by Microsoft InfoPath.
        // It can be modified using Microsoft InfoPath.
        public void InternalStartup()
        {
        }
    }
}
```

In case you only have the XSN file which you've downloaded in the previous step you can rename your XSN file to a cab file (e.g. template.cab), extract the assembly and use .Net reflection tools (like the open source [ILSpy](http://ilspy.net/ "ILSpy is the open-source .NET assembly browser and decompiler")) to inspect the code. A typical view of useless code behind looks like this in ILSpy:

![Useless code as seen in ILSpy](media/Sandbox-Solution-Transformation-Guidance-InfoPath/ilspyoutput.png)

#### Dropping code behind from InfoPath forms to fix them
If you've confirmed your code behind is useless you can easily drop it by:
- Opening up the form in **InfoPath designer** (right-click - Design)
- Go to **Form Options** via File - Info
- Select the **Programming** category and click on **Remove Code**
- **Publish the form again** via File - Info - Quick Publish
- **Deactivate the linked sandbox solution** via Site Settings - Solutions
- **Confirm** the form works as expected
- **Delete** the sandbox solution

If you don't have access to the InfoPath XSN file and source code anymore **you can still fix these forms by simply deactivating the sandbox solutions that have "useless" code only**. Only do this for the ones mentioned in the sandbox solution report output with IsEmptyInfoPathAssembly = true.

## Migrate your InfoPath forms
<a name="sectionSection2"> </a>
If the guidance in the previous chapter was not applicable for your InfoPath form it essentially means your form is still business relevant and contains code behind that you cannot drop. If that's the case the typical solution is moving away from InfoPath which can be done in various ways:
- Create an app using [Azure PowerApps](https://powerapps.microsoft.com/en-us/ "Azure PowerApps") or [Microsoft Flow](https://flow.microsoft.com/en-us/search/?q=sharepoint "Microsoft Flow") 

![Azure PowerApps and Microsoft Flow](media/Sandbox-Solution-Transformation-Guidance-InfoPath/powerappsflow.png)

- Build a SharePoint Add-In that leverages remote API's to read/write SharePoint data

### Building SharePoint Add-In's to replace your InfoPath forms
When you opt to use regular SharePoint Add-In's to replace your InfoPath forms you do have several options. Below are three options we've worked out in more detail, but as said you can perfectly use variations of these. The three options we would like to dive into are:
- [A Single Page Application (SPA) based on knockout.js](https://github.com/SharePoint/PnP-Transformation/tree/master/InfoPath/Samples/EmployeeRegistration.KnockOut.SinglePageApp "SPA sample using knockout.js")

![Knockout sample](media/Sandbox-Solution-Transformation-Guidance-InfoPath/knockoutsample.png)

- [An ASP.Net MVC SharePoint Add-In](https://github.com/SharePoint/PnP-Transformation/tree/master/InfoPath/Samples/EmployeeRegistration.MVC "SharePoint Add-In using ASP.Net MVC")
- [An ASP.Net Forms SharePoint Add-In](https://github.com/SharePoint/PnP-Transformation/tree/master/InfoPath/Samples/EmployeeRegistration.Forms "SharePoint Add-In using ASP.Net Forms")

To better help you with converting your InfoPath form **we've listed 11 common InfoPath coding patterns and show you how you can implement those patterns using the above 3 mentioned SharePoint Add-In options**. To do so we've first developed a [reference InfoPath form](https://github.com/SharePoint/PnP-Transformation/tree/master/InfoPath/Reference/EmployeeRegistration "Reference InfoPath form") which uses the most common InfoPath coding patterns and then we've migrated that form to 3 SharePoint Add-In flavors. Below links show these common patterns:
- [Populating fields on form load - set user information](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Populating%20fields%20on%20form%20load-set%20user%20information.md "Populating fields on form load - set user information")
- [Populating fields on form load - read list information](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Populating%20fields%20on%20form%20load-read%20list%20information.md "Populating fields on form load - read list information")
- [Populating fields on form load - read list data](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Populating%20fields%20on%20form%20load-read%20list%20data.md "Populating fields on form load - read list data")
- [Submit the form via code](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Submit%20the%20form%20via%20code.md "Submit the form via code")
- [Switching view after form submission](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Switching%20view%20after%20form%20submission.md "Switching view after form submission")
- [Retrieving user data](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Retrieving%20user%20data.md "Retrieving user data")
- [Read data collection and set multiple controls](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Read%20data%20collection%20and%20set%20multiple%20controls.md "Read data collection and set multiple controls")
- [Cascading data load](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Cascading%20data%20load.md "Cascading data load")
- [Upload or delete attachments](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Upload%20or%20Delete%20Attachments.md "Upload or delete attachments")
- [Add or remove user from site groups](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Add%20or%20remove%20user%20from%20site%20groups.md "Add or remove user from site groups")
- [Load existing item in form](https://github.com/SharePoint/PnP-Transformation/blob/master/InfoPath/Guidance/Patterns/Load%20existing%20item%20in%20form.md "Load existing item in form")


### Migrating your InfoPath data
Once you've moved over your InfoPath form to a new solution you might also want to migrate your data from InfoPath XML to regular SharePoint list data or to the data layer of your choice. Since InfoPath files are XML files it's fairly easy to read and transform those. The [PnP-Transformation repository contains a sample showing how you can achieve this](https://github.com/SharePoint/PnP-Transformation/tree/master/InfoPath/Migration/EmpRegConsole "Sample showing how to transform from InfoPath XML to list data").

### Code-based operations are disabled and now my existing forms don't open anymore
As soon as code based operations are disabled it means that no code can run anymore in the sandbox. If you've forms that execute code it also means that opening of existing forms will not work anymore. Below steps will help you handle this:
 - If you've migrated your InfoPath form to a new solution then you've most likely already converted your data and as such you're good
 -  If you opted to keep the form as is (e.g. since it's not business critical anymore) but you still want to open the existing forms then you can take one of the following steps:
	- Remove the code behind from your form and republish it (see the **Dropping code behind from InfoPath forms to fix them** section above)
	- Use InfoPath Client to open the forms
	- Migrate the form data to plain SharePoint list data (see the **Migrating your InfoPath data** section above)

