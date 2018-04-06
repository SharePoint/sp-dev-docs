---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f0cb0e1e-0871-4193-b0e9-519e34d7e839
---

# List Instances

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The [ListInstance](listinstance-element-list-instance.md) element specifies default data with which to provision the given list type. This element maps to the **List** element previously located within the [Configuration](configuration-element-site.md) element in [Onet.xml](https://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx).

> [!WARNING] 
> When a list instance is provisioned in a Feature, the **Title** attribute must be specified and unique.

<br/>

- [Elements](elements-element-list-instance.md)

- [ListInstance](listinstance-element-list-instance.md)

- [Data](data-element-list-instance.md)

- [Rows](rows-element-list-instance.md)

- [Row](row-element-list-instance.md)

- [Field](field-element-list-instance.md)

## Example

The following example shows the contents of an XML file in which the [ListInstance](listinstance-element-list-instance.md) element is used to specify default data for a list instance.

```XML
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
```

## See also

- [List Instance](https://msdn.microsoft.com/en-us/library/office/ms469947.aspx)








