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

> [!TIP]
> To provision and manage the SharePoint Embedded resources behind these experiences from a coding agent, use the [SharePoint Embedded MCP server](sharepoint-embedded-mcp-server.md).

## How SharePoint Embedded grounds agents

SharePoint Embedded grounds AI agents on enterprise content while keeping that content and its compliance controls inside the customer's Microsoft 365 tenant. You don't copy content into an external vector database. Key facts:

- **Content discoverability is a setting on the container type** that governs whether Microsoft 365 Copilot can surface the content. Tenant governance controls this setting, so an app can't expose content by changing its own configuration.
- **Retrieve content with the Microsoft Search API**, scoped by the container type ID (`ContainerTypeId`), or with a Foundry SharePoint knowledge source.
- **Content stays in the customer's Microsoft 365 tenant**, so Microsoft Purview data loss prevention (DLP), retention, and eDiscovery apply.
- **Nothing is auto-exposed.** SharePoint Embedded content isn't available to Copilot until discoverability is enabled on the container type.

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

### Filter retrieval by custom metadata

Use `filterExpression` to limit retrieval to files with specific custom metadata. First, create an indexed custom column, set the file values, and wait for search indexing to finish. For instructions, see [Store and query container metadata](container-metadata.md).

SharePoint Embedded stores a file's custom column values on its associated `listItem/fields` resource. Retrieval filters on the column's indexed SharePoint managed property, not the stored field name.

For example, a single-line text column named `ClientMatterCode` typically has this managed property:

```text
ClientMatterCodeOWSTEXT
```

Automatically created managed properties are text properties, even when their source columns use another data type. The suffix and indexed value format depend on the column type. Confirm the generated property name and value format in the target tenant. For naming details, see [Automatically created managed properties in SharePoint Server](/sharepoint/technical-reference/automatically-created-managed-properties-in-sharepoint).

This request limits candidates to files with an exact indexed metadata value. It also returns the value with each matching hit:

```http
POST https://graph.microsoft.com/v1.0/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What obligations are described in the client agreement?",
  "dataSource": "sharePointEmbedded",
  "dataSourceConfiguration": {
    "sharePointEmbedded": {
      "containerTypeId": "{containerTypeId}"
    }
  },
  "filterExpression": "ClientMatterCodeOWSTEXT=\"aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee\"",
  "resourceMetadata": [
    "title",
    "containerTypeId",
    "ClientMatterCodeOWSTEXT"
  ],
  "maximumNumberOfResults": 10
}
```

Use `=` when the complete indexed value must match:

```text
ClientMatterCodeOWSTEXT="aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
```

Don't use the `:` operator for an exact boundary. The colon operator performs term matching and can match related values or prefixes. For more information, see [Keyword Query Language syntax reference](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference).

The filter limits the candidate files before `queryString` ranks semantically relevant extracts. A file with matching metadata might not appear when its content doesn't relate to `queryString`.

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


## Ground answers in Copilot with custom column metadata

Your app often knows business facts about a file that aren't written in the file itself, such as the customer it belongs to, its document type, or its stage in a workflow. When you store those facts in [custom columns](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-post-columns?view=graph-rest-1.0&tabs=http), SharePoint packages eligible values into a managed property named **AdditionalGroundingData**. That property is indexed with the file and supplied with the file content as grounding data, so Microsoft 365 Copilot and agents can recognize the metadata and explain why a file is relevant.

> [!IMPORTANT]
> AdditionalGroundingData improves how Copilot understands files that were already retrieved. It doesn't filter results or control access. To restrict retrieval to files with specific values, see [Filter retrieval by custom metadata](#filter-retrieval-by-custom-metadata).

### Why metadata grounding matters

Search can match a query against column values. If a file's `CustomerName` column contains `Contoso` and a user asks about Contoso, search can return the file. Without metadata in the grounding data, Copilot receives only the file content. If the agreement never mentions Contoso, Copilot can conclude the file is unrelated and drop it or fail to explain why it's included. AdditionalGroundingData supplies the metadata that produced the match, alongside the content.

### How AdditionalGroundingData is built

You don't create or write AdditionalGroundingData. SharePoint Embedded builds it from your custom columns whenever a file's content or field values change:

1. **Collect.** SharePoint Embedded reads the container's column definitions and the file's field values.
2. **Qualify.** Built-in SharePoint Embedded properties, excluded fields, empty values, and unsupported or malformed values are skipped.
3. **Serialize.** Eligible column-and-value pairs are serialized into a JSON object.
4. **Index.** The JSON object is stored in the file's AdditionalGroundingData managed property and indexed with the file.
5. **Ground.** When the file is returned as a result, AdditionalGroundingData is included in the grounding data with the file content, and Copilot reasons over both.

Processing is asynchronous. New or changed values aren't available until the file is reindexed.

### AdditionalGroundingData format

AdditionalGroundingData contains a flat JSON object. Each key is a column's internal name, and each value is the file's field value serialized as a string. For a file with these field values:

| Internal name    | Type     | Value      |
| ---------------- | -------- | ---------- |
| `CustomerName` | text     | Contoso    |
| `DocumentType` | choice   | Agreement  |
| `ReviewStatus` | choice   | Legal      |
| `RenewalDate`  | dateTime | 2027-02-15 |

the property contains:

```json
{
  "CustomerName": "Contoso",
  "DocumentType": "Agreement",
  "ReviewStatus": "Legal",
  "RenewalDate": "2027-02-15"
}
```

<!-- Reviewer: confirm before publishing - (1) keys are internal names rather than display names, (2) date serialization format, (3) serialization of multi-value choice and personOrGroup values, (4) whether to publish the size limit, (5) supported surfaces (Microsoft 365 Copilot, Foundry knowledge source, Retrieval API), (6) whether AdditionalGroundingData can be requested in resourceMetadata. -->

- **Keys are internal names.** Copilot sees `CustomerName`, not the display name *Customer Name*, so choose internal names that are readable on their own.
- **Values are text,** regardless of column type.
- **Size is limited.** When eligible values exceed the size budget, larger values are trimmed or dropped before smaller ones.
- **Fields aren't guaranteed.** The fields present depend on eligibility, size, and indexing state. Don't write prompts or agent instructions that depend on a specific field always being present.

> [!NOTE]
> This JSON shows how metadata is represented for grounding. It isn't a public API contract and can change.

### How Copilot uses the metadata

Copilot treats AdditionalGroundingData as evidence about a retrieved file. For the prompt *"Summarize the Contoso agreements currently under legal review,"* the file content supplies the obligations and terms, and the metadata confirms that the file is a Contoso agreement in legal review, even though neither fact appears in the text.

Metadata grounding is most useful when:

- **An identifier links many files,** such as a claim or matter number that not every document mentions.
- **Workflow state isn't in the document,** such as approval or review status.
- **Scope is contextual,** such as region, product family, or market.

Metadata can affect an answer in three ways:

| Capability                          | What it does                                                       | What it doesn't guarantee                                |
| ----------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------- |
| Matching                            | Column values can contribute to search relevance.                  | Exact field equality                                     |
| Grounding (AdditionalGroundingData) | Copilot reasons over metadata with the content of retrieved files. | That a file is retrieved, or that every field is present |
| Filtering (`filterExpression`)    | Limits candidates to files whose indexed values match.             | That every matching file has relevant content            |

> [!WARNING]
> Phrases such as "only approved documents" or "due this week" aren't converted into field predicates. When an answer must use only files that meet specific conditions, use [`filterExpression`](#filter-retrieval-by-custom-metadata).

### Example prompts that benefit from metadata grounding

These examples assume the columns shown earlier (`CustomerName`, `DocumentType`, `ReviewStatus`, `RenewalDate`). In each case, the metadata — not the file text — is what lets Copilot connect the file to the question.

| Prompt                                                        | How the metadata helps                                                                                                                                                        |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *"What do we have on file for Contoso?"*                    | `CustomerName` identifies Contoso files even when the customer name never appears in the document body.                                                                     |
| *"Summarize the agreements in legal review."*               | `DocumentType` and `ReviewStatus` confirm each retrieved file is an agreement under legal review, so Copilot doesn't drop contracts whose text never says "legal review." |
| *"Which Contoso agreements renew early next year?"*         | `RenewalDate` gives Copilot the date context to interpret "early next year" against files already retrieved.                                                                |
| *"Draft a status update on the Contoso agreement renewal."* | Copilot combines the agreement's terms (content) with its customer, type, and review state (metadata) to describe the file accurately.                                        |

In agent instructions, you can make the same expectation explicit, for example: *"When you answer questions about a customer, check the file's metadata for the customer name and review status, and say when a file's metadata doesn't match the question."*

### Design columns for metadata grounding

- Use readable, stable internal names, because they appear as JSON keys. Renaming a column changes the key and requires reindexing.
- Keep values short: a word, phrase, identifier, or date. Avoid long text, serialized JSON, and copies of the document body.
- Use controlled vocabularies, so `Legal` is always `Legal`.
- Prefer meaningful strings such as `Contoso` to opaque identifiers.

> [!CAUTION]
> AdditionalGroundingData can reach the grounding data of any user who can access the file. Don't store information in columns that those users shouldn't see.

### Metadata grounding limitations

- Files that haven't changed since metadata grounding became available might not have AdditionalGroundingData until they're updated and reindexed.
- AdditionalGroundingData doesn't cause a file to be retrieved; it's attached to files that are already results.
- Security trimming always applies.
- Semantic vectorization of metadata is separate from AdditionalGroundingData.


## Next steps

- [Set up SharePoint Embedded as a Foundry knowledge source](sharepoint-embedded-knowledge-source.md)
- [Billing meters](../reference/billing-meters.md)
- [Choose a billing model](../plan/choose-billing-model.md)
