---
title: Subscribe to container change notifications with webhooks in SharePoint Embedded
description: Register a webhook endpoint, create a Microsoft Graph subscription on a SharePoint Embedded container's drive, and receive change notifications.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A Microsoft Graph subscription is active on a SharePoint Embedded container's drive, and the reader's webhook endpoint receives a notification whenever a file in the container is added or updated.
  estimated_minutes: 25
  difficulty: intermediate
  roles: [app-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
    - capability: container-type-owner
  api_surface:
    # createSubscription is a standard Graph operation, not yet curated in api-surface.json.
    # Validate against https://learn.microsoft.com/graph/api/subscription-post-subscriptions before publishing.
    - id: createSubscription
      method: POST
      path: /subscriptions
      permissions: [FileStorageContainer.Selected]
      stability_note: not-in-api-surface.json — standard Graph change-notification subscription
    - id: getContainerDrive
      method: GET
      path: /storage/fileStorage/containers/{containerId}/drive
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: container-id
      type: string
      source: prior-step
    - name: notification-url
      type: uri
      source: generated
    - name: token
      type: string
      source: prior-step
    - name: expiration-date-time
      type: string
      source: generated
    - name: client-state
      type: string
      source: user-supplied
  outputs:
    - name: subscription-id
      type: string
      verify: GET /subscriptions/{subscription-id} returns 200 with the active subscription
  next_steps:
    - uri: /sharepoint/dev/embedded/development/tutorials/doc-processing-acs
      when: always
    - uri: /sharepoint/dev/embedded/development/tutorials/metadata
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/tutorials/doc-processing-acs
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
  stability: ga
  last_validated: proposed
---

# Subscribe to container change notifications with webhooks in SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

By the end of this how-to, you have a webhook endpoint that Microsoft Graph validates, an active subscription on a SharePoint Embedded container's drive, and a notification arriving at your endpoint whenever a file in the container is added or updated. A common follow-on is to trigger downstream processing — for example, invoking Azure AI services on each new or updated file.

## Prerequisites

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — you have an active container whose changes you want to track.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — you can acquire a bearer token with `FileStorageContainer.Selected`.
- Capability: `container-type-owner` — your app owns the container type for the target container.
- A running SharePoint Embedded application (for example, the [create-app training module](https://learn.microsoft.com/training/modules/sharepoint-embedded-create-app/)) and a tunneling tool such as [ngrok](https://ngrok.com/docs/getting-started/) to expose it publicly.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{token}` | string | A bearer token with `FileStorageContainer.Selected` ([auth](/sharepoint/dev/embedded/development/auth)) |
| `{container-id}` | string | The container drive id to subscribe to (a prior step); used as `driveId` |
| `{notification-url}` | uri | Your public webhook URL with `driveId` appended (from [Step 2](#step-2)) |
| `{expiration-date-time}` | string | An ISO 8601 UTC timestamp ≤ 4230 minutes ahead (generated, see [Step 3](#step-3)) |
| `{client-state}` | string | An opaque value echoed in each notification for validation (user-supplied; may be empty) |

## Steps

### Step 1 — Add a webhook endpoint to your app {#step-1}

Microsoft Graph delivers notifications by POST to a public HTTPS endpoint. Add an `onReceiptAdded` route to your server's `index.ts` and register the query-parser plugin so query parameters are parsed at startup.

```typescript
server.use(restify.plugins.bodyParser(), restify.plugins.queryParser());

server.post('/api/onReceiptAdded', async (req, res, next) => {
  try {
    const response = await onReceiptAdded(req, res);
    res.send(200, response);
  } catch (error: any) {
    res.send(500, { message: `Error in API server: ${error.message}` });
  }
  next();
});
```

Implement `onReceiptAdded` in `onReceiptAdded.ts`. Graph makes a one-time validation call carrying a `validationToken`, which you must echo back as `text/plain`. Subsequent calls carry the `driveId` of the changed container.

```typescript
require('isomorphic-fetch');

export const onReceiptAdded = async (req: Request, res: Response) => {
  const validationToken = req.query['validationToken'];
  if (validationToken) {
    res.send(200, validationToken, { "Content-Type": "text/plain" });
    return;
  }

  const driveId = req.query['driveId'];
  if (!driveId) {
    res.send(200, "Notification received without driveId, ignoring", { "Content-Type": "text/plain" });
    return;
  }

  console.log(`Received driveId: ${driveId}`);
  res.send(200, "");
  return;
};
```

**Expected response:** No service call yet. Your app exposes `POST /api/onReceiptAdded`, which returns `200 OK` and echoes the `validationToken` when present.

**On failure:**
- Endpoint returns non-200 on validation → the `validationToken` is not echoed as `text/plain`. Return it verbatim with that content type.
- Query parameters are `undefined` → the query-parser plugin is not registered. Add `restify.plugins.queryParser()` before the route.

### Step 2 — Expose the endpoint publicly {#step-2}

Graph must reach your endpoint over the public internet. Start your app, then open a tunnel with ngrok on the app's port.

```console
ngrok http 3001
```

**Expected response:** ngrok prints a public HTTPS forwarding URL (for example `https://5ac2-...ngrok-free.app`). Form `{notification-url}` by appending your route and the container's `driveId` as a query parameter: `https://<public-host>/api/onReceiptAdded?driveId={container-id}`.

**On failure:**
- ngrok exits with `address already in use` → the tunnel port is wrong. Use the port your app listens on.
- Validation call never arrives → the forwarding URL is HTTP, not HTTPS, or the app is not running. Use the HTTPS URL and confirm the app is up.

### Step 3 — Compute the subscription expiration {#step-3}

A drive-item subscription lives at most 4230 minutes. Compute an ISO 8601 UTC timestamp no further ahead than that. This snippet (for example, in a Postman pre-request script) sets `{expiration-date-time}` into an environment variable.

```javascript
var now = new Date();
var duration = 1000 * 60 * 4230; // max lifespan of a driveItem subscription is 4230 minutes
var expiry = new Date(now.getTime() + duration);
var expiryDateTime = expiry.toISOString();

pm.environment.set("ContainerSubscriptionExpiry", expiryDateTime);
```

**Expected response:** No service call. `{expiration-date-time}` holds a valid future ISO 8601 UTC timestamp within the 4230-minute limit.

**On failure:**
- Subscription create later returns `400` for `expirationDateTime` → the value is more than 4230 minutes ahead or is in the past. Recompute within the limit.

### Step 4 — Create the Graph subscription {#step-4}

Subscribe to changes on the container's drive root. Graph immediately POSTs the validation handshake to `{notification-url}` ([Step 1](#step-1)); the subscription is created only if your endpoint echoes the token.

```http
POST https://graph.microsoft.com/v1.0/subscriptions
Authorization: Bearer {token}
Content-Type: application/json

{
  "changeType": "updated",
  "notificationUrl": "{notification-url}",
  "resource": "drives/{container-id}/root",
  "expirationDateTime": "{expiration-date-time}",
  "clientState": "{client-state}"
}
```

**Expected response:** `201 Created` with a `subscription` resource. Record its `id` as `{subscription-id}`.

**On failure:**
- `400 Bad Request` (`InvalidRequest`, "endpoint did not respond") → the validation handshake failed. Confirm the endpoint echoes `validationToken` ([Step 1](#step-1)) and is reachable ([Step 2](#step-2)).
- `403 Forbidden` (`accessDenied`) → the token lacks `FileStorageContainer.Selected` or the app has no permission on the container.
- `400 Bad Request` on `expirationDateTime` → the value exceeds 4230 minutes ahead. Recompute ([Step 3](#step-3)).

> [!NOTE]
> Append the `driveId` to `notificationUrl` as a query parameter (as in [Step 2](#step-2)) so each notification identifies the source container. Set `clientState` to an opaque secret and compare it on every notification to reject spoofed calls.

## Verify {#verify}

Confirm the subscription is active.

```http
GET https://graph.microsoft.com/v1.0/subscriptions/{subscription-id}
Authorization: Bearer {token}
```

Returns `200 OK` with `expirationDateTime` in the future. Then add or update a file in the container: your endpoint logs `Received driveId: {container-id}`, confirming end-to-end delivery.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `400 Bad Request` ("endpoint did not respond") on create | Validation handshake failed | Echo `validationToken` as `text/plain` ([Step 1](#step-1)); confirm the endpoint is public ([Step 2](#step-2)) |
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a token with `FileStorageContainer.Selected` (see **Inputs**) |
| `403 Forbidden` | App has no permission on the container | Grant access via [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm) |
| `400 Bad Request` on `expirationDateTime` | Beyond the 4230-minute limit or in the past | Recompute within the limit ([Step 3](#step-3)) |
| No notifications arrive | Tunnel down or wrong `resource` path | Restart the tunnel; confirm `resource` is `drives/{container-id}/root` |
| Subscription expires silently | Not renewed before `expirationDateTime` | PATCH `/subscriptions/{subscription-id}` with a new `expirationDateTime` before it lapses |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Document processing with Azure AI](/sharepoint/dev/embedded/development/tutorials/doc-processing-acs)
- [Add queryable metadata to containers and files](/sharepoint/dev/embedded/development/tutorials/metadata)

## Related

- [Document processing with Azure AI](/sharepoint/dev/embedded/development/tutorials/doc-processing-acs)
- [Microsoft Graph: Create subscription](https://learn.microsoft.com/graph/api/subscription-post-subscriptions)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
