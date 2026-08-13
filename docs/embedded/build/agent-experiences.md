---
title: Add Microsoft 365 Copilot and agent experiences
description: Ground agents in SharePoint Embedded content with Microsoft Foundry knowledge sources and the Copilot Retrieval API.
ms.date: 07/10/2026
ms.reviewer: pemtaira
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Add Microsoft 365 Copilot and agent experiences

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Configure Foundry knowledge sources and the Copilot Retrieval API over SharePoint Embedded containers.
next: migrate-azure-blob-storage.md
-->

SharePoint Embedded agent experiences let your app answer questions over files stored in SharePoint Embedded containers. Two separate products ground those experiences in container content:

- **Microsoft Foundry Agent Service with a SharePoint knowledge source** — for agents you build on Foundry. Foundry runs retrieval for you as part of the agent. For setup steps, see [Set up SharePoint Embedded as a Foundry knowledge source](sharepoint-embedded-knowledge-source.md).
- **Microsoft 365 Copilot Retrieval API** — for custom agents and apps that run their own grounding step. Call it from any app, including a Foundry agent that doesn't use the SharePoint knowledge source.

Choose the knowledge source when you want Foundry to manage retrieval and agent orchestration. Choose the Retrieval API when you want to control the grounding step, the prompt, and the model yourself.

## How SharePoint Embedded grounds agents

SharePoint Embedded grounds AI agents on enterprise content while keeping that content and its compliance controls inside the customer's Microsoft 365 tenant. You don't copy content into an external vector database. Key facts:

- **Content discoverability is a container-type setting.** You control whether Microsoft 365 Copilot can surface content from a container type.
- **Retrieve content with the Microsoft Search API**, scoped by `ContainerTypeId`, or with a Foundry SharePoint knowledge source.
- **Content stays in the customer's Microsoft 365 tenant**, so Microsoft Purview data loss prevention (DLP), retention, and eDiscovery apply.
- **Nothing is auto-exposed.** SharePoint Embedded content isn't available to Copilot until you enable discoverability on the container type.

For the decision context, see [Ground AI without an external vector database](../plan/ground-ai-without-a-vector-db.md).

> [!CAUTION]
> The earlier **SharePoint Embedded agent SDK** (the React `ChatEmbedded` control) was **deprecated in March 2026** and replaced by [Microsoft Foundry Agent Service](/azure/foundry/agents/overview) with a [SharePoint knowledge source (preview)](/azure/search/agentic-knowledge-source-how-to-sharepoint-remote) configured for SharePoint Embedded. Use one of the two options in this article for new work.

## Use the Retrieval API

The [Microsoft 365 Copilot Retrieval API](/microsoft-365/copilot/extensibility/api/ai-services/retrieval/copilotroot-retrieval) returns relevant text extracts that your app passes to its own model as grounding data. Set `dataSource` to `sharePointEmbedded` to retrieve from SharePoint Embedded content.

> [!NOTE]
> Retrieval API support for the `sharePointEmbedded` data source is in preview.

### Retrieval API prerequisites

- A SharePoint Embedded app with at least one container, plus the container type ID.
- Pay-as-you-go billing configured for the container type.
- At least one user in the tenant with a Microsoft 365 Copilot license, so the semantic index initializes. For more information, see [Semantic index for Microsoft 365 Copilot](/microsoftsearch/semantic-index-for-copilot).

The `sharePointEmbedded` data source bills pay-as-you-go, so each user who queries the Retrieval API doesn't need an individual Microsoft 365 Copilot license.

### Retrieve content from a container type

Call `POST /copilot/retrieval` with a delegated token. Set `dataSource` to `sharePointEmbedded` and pass your container type ID in `dataSourceConfiguration`. The request needs the `FileStorageContainer.Selected` delegated permission, and the service trims results to content the signed-in user can access.

```http
POST https://graph.microsoft.com/v1.0/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What are the terms of the Contoso agreement?",
  "dataSource": "sharePointEmbedded",
  "dataSourceConfiguration": {
    "sharePointEmbedded": {
      "containerTypeId": "{containerTypeId}"
    }
  }
}
```

Replace `{containerTypeId}` with your container type ID.

The response returns a `retrievalHits` collection. Each hit identifies a source file through `webUrl` and carries one or more `extracts`, ordered by `relevanceScore`.

```json
{
  "retrievalHits": [
    {
      "webUrl": "https://contoso.com/spe/file",
      "extracts": [
        {
          "text": "The agreement renews annually unless either party gives 30 days' notice.",
          "relevanceScore": 0.8421
        }
      ]
    }
  ]
}
```

The shape of `webUrl` depends on the container type's `urlTemplate` setting, so treat it as an opaque link rather than parsing it. To resolve file details, call [Get a driveItem](/graph/api/driveitem-get). For more information about `urlTemplate`, see [Create and configure a container type](create-container-type.md#configure-container-type-behavior).

To return extra fields such as `title` or `author` with each hit, add a `resourceMetadata` collection to the request. Request only the fields your app uses, because each field adds to the response payload.

Pass the extracts to your own model or answer-generation step as grounding data. This snippet sends the query and reads the top extract from each hit:

```javascript
const response = await fetch("https://graph.microsoft.com/v1.0/copilot/retrieval", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`
  },
  body: JSON.stringify({
    queryString: query,
    dataSource: "sharePointEmbedded",
    dataSourceConfiguration: {
      sharePointEmbedded: { containerTypeId: containerTypeId }
    }
  })
});

const data = await response.json();
const grounding = (data.retrievalHits ?? []).map(hit => ({
  url: hit.webUrl,
  text: hit.extracts?.[0]?.text?.trim(),
  score: hit.extracts?.[0]?.relevanceScore
}));
```

Retrieval covers every container of the container type that the signed-in user can access. If a request returns no hits, confirm that the semantic index initialized, that indexing finished, and that the user has access to the content.

### Retrieval API billing

Retrieval API requests that use the `sharePointEmbedded` data source bill on the Copilot Studio message meter. Charges follow the billing model configured for the container type. Standard billing charges the owning tenant's Azure subscription, and pass-through billing charges the consuming tenant's subscription.

For meter details, see [Billing meters](../reference/billing-meters.md). To compare models, see [Choose a billing model](../plan/choose-billing-model.md).

## Test user experience

Sign in with a user who can access the container content. Upload supported files to a container, wait for indexing, open the chat, and ask questions the file content can answer. If answers omit expected files, check:

- Discoverability.
- Supported file formats.
- App access.
- User access.
- Scope selection.
- Indexing delay.

## Next steps

- [Set up SharePoint Embedded as a Foundry knowledge source](sharepoint-embedded-knowledge-source.md)
- [Billing meters](../reference/billing-meters.md)
- [Choose a billing model](../plan/choose-billing-model.md)
