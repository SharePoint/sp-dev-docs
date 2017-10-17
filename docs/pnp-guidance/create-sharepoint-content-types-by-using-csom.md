# Create SharePoint content types by using CSOM

Create SharePoint content types by using CSOM, and make localization changes by using features introduced in SharePoint 2013 SP1.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

You can use the [Core.SPD](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.SPD) sample to programmatically create site columns and content types and link them together. You can also use the SharePoint 2013 SP1 CSOM APIs, available in the [SharePoint Server 2013 Client Components SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35585), to add a specific content type identifier, and localize content types, lists, and site titles. 

## Before you begin

To get started, download the [Core.SPD](https://github.com/SharePoint/PnP/tree/dev/Samples/Core.SPD) sample from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Create content types and site columns

The following code example shows how to create a content type by using the  **ContentTypeCreationInformation** class, including setting the ID.

**Note:**  The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```C#
ContentTypeCollection contentTypes = web.ContentTypes;
cc.Load(contentTypes);
cc.ExecuteQuery();

foreach (var item in contentTypes)
{
  if (item.StringId == "0x0101009189AB5D3D2647B580F011DA2F356FB2")
    return;
}

// Create a Content Type Information object.
ContentTypeCreationInformation newCt = new ContentTypeCreationInformation();
// Set the name for the content type.
newCt.Name = "Contoso Document";
// Inherit from oob document - 0x0101 and assign. 
newCt.Id = "0x0101009189AB5D3D2647B580F011DA2F356FB2";
// Set content type to be available from specific group.
newCt.Group = "Contoso Content Types";
// Create the content type.
ContentType myContentType = contentTypes.Add(newCt);
cc.ExecuteQuery();

Using AddFieldAsXml you can add fields to the FieldCollection of a site collection:
FieldCollection fields = web.Fields;
cc.Load(fields);
cc.ExecuteQuery();

string FieldAsXML = @"<Field ID='{4F34B2ED-9CFF-4900-B091-4C0033F89944}' Name='ContosoString' DisplayName='Contoso String' Type='Text' Hidden='False' Group='Contoso Site Columns' Description='Contoso Text Field' />";
Field fld = fields.AddFieldAsXml(FieldAsXML, true, AddFieldOptions.DefaultValue);
cc.Load(fields);
cc.Load(fld);
cc.ExecuteQuery();

```

Link the fields to the content type by using the  **FieldLinkCollection** and **FieldLinkCreationInformation** classes.

```C#
FieldCollection fields = web.Fields;
Field fld = fields.GetByInternalNameOrTitle("ContosoString");
cc.Load(fields);
cc.Load(fld);
cc.ExecuteQuery();

FieldLinkCollection refFields = myContentType.FieldLinks;
cc.Load(refFields);
cc.ExecuteQuery();

foreach (var item in refFields)
{
  if (item.Name == "ContosoString")
    return;
  }

FieldLinkCreationInformation link = new FieldLinkCreationInformation();
link.Field = fld;
myContentType.FieldLinks.Add(link);
myContentType.Update(true);
cc.ExecuteQuery();

```

## Localize content types, list, and site titles

Use the following code to localize the site title and site description.

```C#
web.TitleResource.SetValueForUICulture("fi-FI", "KielikÃ¤Ã¤nnÃ¤ minut");
web.DescriptionResource.SetValueForUICulture("fi-FI", "KielikÃ¤Ã¤nnetty saitti");

```

For a list, you use the same approach as for a site.

```C#
list.TitleResource.SetValueForUICulture("fi-FI", "KielikÃ¤Ã¤nnÃ¤ minut");
list.DescriptionResource.SetValueForUICulture("fi-FI", "TÃ¤mÃ¤ esimerkki nÃ¤yttÃ¤Ã¤ miten voit kielikÃ¤Ã¤ntÃ¤Ã¤ listoja.");

```

For content types, you have the option to localize the name and description. for fields, you can localize the title and description values.

```C#
myContentType.NameResource.SetValueForUICulture("fi-FI", "Contoso Dokumentti");
myContentType.DescriptionResource.SetValueForUICulture("fi-FI", "TÃ¤mÃ¤ on geneerinen Contoso dokumentti.");

fld.TitleResource.SetValueForUICulture("fi-FI", "Contoso Teksti");
fld.DescriptionResource.SetValueForUICulture("fi-FI", "TÃ¤Ã¤ on niiku Contoso metadatalle.");

```

## Create document content types and site columns

The following example shows how to create document content types and then associate a document template with the content type. 

This example adds a new content type called 'Contoso Document' to the site collection. This content type has a custom template associated with it when a new document is created.

```C#
ContentType ct = web.ContentTypes.GetById("0x0101009189AB5D3D2647B580F011DA2F356FB2");
            cc.Load(ct); cc.ExecuteQuery();
            string ctFolderServerRelativeURL = "_cts/" + ct.Name;
            Folder ctFolder = web.GetFolderByServerRelativeUrl(ctFolderServerRelativeURL);
            cc.Load(ctFolder);
            cc.ExecuteQuery();

            string path = @"C:\Data\Test Documents\Doc CT File.docx";
            string fileName = System.IO.Path.GetFileName(path);
            byte[] filecontent = System.IO.File.ReadAllBytes(path);

            using (System.IO.FileStream fs = new System.IO.FileStream(path, System.IO.FileMode.Open))
            {
                FileCreationInformation newFile = new FileCreationInformation();
                newFile.Content = filecontent;
                newFile.Url = ctFolderServerRelativeURL + "/" + fileName;

                Microsoft.SharePoint.Client.File uploadedFile = ctFolder.Files.Add(newFile);
                cc.Load(uploadedFile);
                cc.ExecuteQuery();
                //Microsoft.SharePoint.Client.File.SaveBinaryDirect(clientContext, ctFolderServerRelativeURL + "/" + fileName, fs, true);

                
                cc.Load(ct); cc.ExecuteQuery();
                ct.DocumentTemplate = fileName;
                ct.Update(false);
                cc.Load(ct); cc.ExecuteQuery();
                Console.WriteLine("Content type updates");
            }

```

## Additional resources
<a name="bk_addresources"> </a>

- [SharePoint site provisioning solutions](sharepoint-site-provisioning-solutions.md)
    
- [FTC to CAM - Create Content Types with specific IDs using CSO](http://blogs.msdn.com/b/vesku/archive/2014/02/28/ftc-to-cam-create-content-types-with-specific-ids-using-csom.aspx)
    
- [SharePoint Server 2013 Client Components SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35585)
