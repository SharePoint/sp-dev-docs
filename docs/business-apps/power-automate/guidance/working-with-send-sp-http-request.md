---
title: Working with the SharePoint Send HTTP Request Power Automate action
ms.date: 03/11/2020
---

# Working with the SharePoint Send HTTP Request Power Automate action

The SharePoint Send HTTP Request flow action allows you to construct and execute SharePoint REST API queries. This action is particularly useful in the cases when the existing SharePoint flow actions do not suffice the need or just that the action you are looking is not available yet in the SharePoint connector.

Below are some of the tips on how to work effectively with the SharePoint Send HTTP Request action.

> [!NOTE]
> This is a developer focused action and hence you will need to understand how SharePoint REST API works and also how to parse JSON strings in Microsoft Flow.

## Get to know the SharePoint REST/OData APIs

SharePoint has many APIs. The one we are interested in is the REST/OData APIs. You can find the complete set of REST/OData APIs [here](https://docs.microsoft.com/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service#bk_learnmore).

Though you can use the SharePoint 2010 REST APIs (_vti_bin/listdata.svc) in some cases, it is recommended to use REST/OData APIs instead.

## Use JSON light

SharePoint REST/OData APIs support [JSON light](https://www.microsoft.com/microsoft-365/blog/2014/08/13/json-light-support-rest-sharepoint-api-released/). This means that you can set headers in your API request that will tell SharePoint whether to include any metadata in the response. In many cases, you will not require the metadata. It just makes things easier to parse the output of the action.

To do this, just add the following header:

```http
Accept: application/json; odata=nometadata
```

## Parsing the response

If you execute a GET request, then you most probably want to parse the response. Good thing is that the default response is JSON and that makes things easier.

You can do that by querying the body of the action and then parsing through the JSON array or object depending on your response.

You can easily build an expression to do that:

```http
body('Send_an_HTTP_request_to_SharePoint' )['Id']
```

In cases where you have an array, then you have a JSON array object. You can use the above expression but then construct an apply to each action and use the following expression to input the variable to work with.

```http
body('Send_an_HTTP_request_to_SharePoint' )['value']
```

Inside the apply to each action, you can then access the individual  elements with the following expression:

```http
items('Apply_to_each')['Title']
```

## Accessing all dynamic content

Since the fields in the SharePoint HTTP Request action are text fields, the flow designer filters the default items in the Dynamic Content to be of string properties.

To get the non-string properties, all you need to do is click See more for that action in the Dynamic Content and you will see all the non-string properties as well.

This is particularly useful when you want to build queries where you need to pass the ID of an item which is a number and not a string.
