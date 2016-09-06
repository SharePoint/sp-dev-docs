# SharePoint list webhooks

The SharePoint list webhooks cover the events corresponding to list item changes for a given SharePoint list or a document library. SharePoint webhooks provide a simple notification pipeline so your application can be aware of changes to a SharePoint list without polling the service.

## Common tasks
| Task                                                | HTTP method                                                  |
|-----------------------------------------------------|--------------------------------------------------------------|
| [Create a new subscription](./create-subscription) | `POST    /_api/web/lists('list-guid')/subscriptions`         |
| [Get subscription(s)](./get-subscription)          | `GET     /_api/web/lists('list-guid')/subscriptions`         |
| [Delete subscription](./delete-subscription)       | `DELETE  /_api/web/lists('list-guid')/subscriptions('id')`   |
| [Update a subscription](./update-subscription)     | `PATCH   /_api/web/lists('list-guid')/subscriptions('id')`   |

## List event types
Notifications will be sent to your application for the following **asynchronous list item events** in SharePoint:

1.	ItemAdded
2.	ItemUpdated
3.	ItemDeleted
4.	ItemCheckedOut
5.	ItemCheckedIn
6.	ItemUncheckedOut
7.	ItemAttachmentAdded
8.	ItemAtttachmentDeleted
9.	ItemFileMoved
10.	ItemVersonDeleted
11.	ItemFileConverted

Synchronous events are not supported in webhooks.

## Additional resources

- [Overview of SharePoint webhooks](../sharepoint-webhooks-overview)