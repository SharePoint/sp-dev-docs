---
title: View SharePoint Embedded consumption in Microsoft Cost Management
description: Track SharePoint Embedded pay-as-you-go costs by app, tenant, and container type using Microsoft Cost Management in the Azure portal.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: The reader can view, filter, and forecast SharePoint Embedded consumption costs in Microsoft Cost Management and set budget alerts.
  estimated_minutes: 20
  difficulty: beginner
  roles: [owning-admin, consuming-admin, m365-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/administration/billing/billing
      kind: concept
    - uri: /sharepoint/dev/embedded/administration/billing/meters
      kind: reference
    - capability: azure-subscription
  api_surface: []
  inputs:
    - name: azure-subscription-id
      type: uuid
      source: user-supplied
    - name: budget-amount
      type: string
      source: user-supplied
  outputs:
    - name: cost-analysis-view
      type: string
      verify: Cost analysis in Microsoft Cost Management shows SharePoint Embedded meter costs filtered by app ID, tenant ID, or container type ID
    - name: budget-alert
      type: string
      verify: A budget with at least one alert threshold exists in Cost Management for the subscription
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/billing/meters
      when: always
    - uri: /sharepoint/dev/embedded/administration/developer-admin/dev-admin
      when: always
  related:
    - uri: /sharepoint/dev/embedded/administration/billing/billing
    - uri: /sharepoint/dev/embedded/administration/billing/meters
    - uri: /sharepoint/dev/embedded/administration/developer-admin/dev-admin
  stability: ga
  last_validated: proposed
---

# View SharePoint Embedded consumption in Microsoft Cost Management
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this task you can see SharePoint Embedded pay-as-you-go costs in Microsoft Cost Management, broken down by SharePoint Embedded meters and filtered by app ID, tenant ID, or container type ID, and you have a budget with at least one spending alert.

> [!NOTE]
> Microsoft Cost Management is a portal and Cost Management REST experience; SharePoint Embedded exposes no Graph API for reading consumption. The steps below are portal actions captured in `manual:` blocks. There is no api-surface.json operation for this workflow.

## Prerequisites

- [Pay-as-you-go billing](/sharepoint/dev/embedded/administration/billing/billing) — to know which billing model (standard or passthrough) determines who is charged.
- [SharePoint Embedded meters](/sharepoint/dev/embedded/administration/billing/meters) — to interpret the storage, archived storage, API transaction, and egress lines.
- Capability: an Azure subscription with a SharePoint Embedded billing profile attached, and an account with read access to that subscription's costs (for example, a Billing reader or subscription Reader role).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{azure-subscription-id}` | uuid | The Azure subscription attached to the container type's billing profile (user-supplied) |
| `{budget-amount}` | string | The monthly spending cap you want to track against (user-supplied) |

## Steps

### Step 1 — Open Microsoft Cost Management for your subscription {#step-1}

Sign in to the Azure portal and open Cost Management scoped to the subscription that carries SharePoint Embedded consumption.

```yaml
manual:
  description: Open Cost Management + Billing in the Azure portal and select the subscription with SharePoint Embedded consumption.
  ui_path: https://portal.azure.com → Cost Management + Billing → Billing scopes / Subscriptions → select {azure-subscription-id}
  api_equivalent: none — no Graph API; Cost Management exposes a separate Azure REST API (Microsoft.CostManagement). See api-surface.json (no SPE operation for consumption reads).
  verify:
    ui_path: The subscription Overview page loads and shows current spend, forecasted cost, and any spending anomalies for {azure-subscription-id}.
```

**Expected response:** the subscription **Overview** page renders with current spending, forecasted costs, and any spending anomalies.

**On failure:**
- Subscription not listed → the signed-in account lacks a cost role on `{azure-subscription-id}`, or the wrong directory is selected. Switch directory or request a Billing reader / Reader assignment.
- No SharePoint Embedded costs shown → no billing profile is attached to the container type, or no consumption has been metered yet. Confirm billing setup in [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin).

### Step 2 — Break down cost by SharePoint Embedded meter and tag {#step-2}

Open **Cost analysis** and filter to isolate SharePoint Embedded consumption by meter and by SharePoint Embedded tags.

```yaml
manual:
  description: In Cost analysis, set the date range and group/filter SharePoint Embedded costs by meter and by app ID, tenant ID, or container type ID.
  ui_path: Cost Management + Billing → (subscription {azure-subscription-id}) → Cost Management → Cost analysis → set date range → Filter/Group by → Meter, and by tag (app ID, tenant ID, container type ID)
  api_equivalent: none — Cost Management query is the Azure REST API Query - Usage (Microsoft.CostManagement); not part of the SPE Graph surface.
  verify:
    ui_path: Cost analysis displays SharePoint Embedded meter rows (Storage, Archived Storage, API Transactions, Egress) and the chart updates when filtered by app ID, tenant ID, or container type ID.
```

**Expected response:** Cost analysis shows SharePoint Embedded meter rows (storage, archived storage, API transactions, egress); filtering by tag (app ID, tenant ID, or container type ID) updates the chart.

**On failure:**
- No meter rows appear → the date range predates any consumption, or filters exclude all rows. Widen the date range and clear filters.
- Tag filter empty → tags propagate after consumption is metered and may lag. Re-check after the next metering cycle. See [SharePoint Embedded meters](/sharepoint/dev/embedded/administration/billing/meters).

### Step 3 — Download invoices {#step-3}

Retrieve invoices for any billing period from the **Invoices** section under Billing.

```yaml
manual:
  description: View and download SharePoint Embedded invoices for a billing period.
  ui_path: Cost Management + Billing → Billing → Invoices → select billing period → Download
  api_equivalent: none — invoice retrieval is the Azure REST API Invoices (Microsoft.Billing); not part of the SPE Graph surface.
  verify:
    ui_path: The selected billing period's invoice downloads as a PDF.
```

**Expected response:** the invoice for the selected billing period downloads.

**On failure:**
- Invoices section empty or hidden → the account lacks an invoice-capable billing role (for example, Billing reader). Request the role on the billing account.

### Step 4 — Create a budget and spending alerts {#step-4}

Create a budget so spending against `{azure-subscription-id}` triggers alerts before it exceeds `{budget-amount}`.

```yaml
manual:
  description: Create a Cost Management budget for the subscription and add at least one alert threshold.
  ui_path: Cost Management + Billing → Cost Management → Budgets → Add → set amount {budget-amount} and time period → add alert conditions (for example, 80% and 100%) → Create
  api_equivalent: none — budget creation is the Azure REST API Budgets - Create Or Update (Microsoft.Consumption); not part of the SPE Graph surface.
  verify:
    ui_path: The new budget appears in the Budgets list for {azure-subscription-id} with at least one alert threshold.
```

**Expected response:** the new budget appears in the **Budgets** list with at least one alert threshold configured.

**On failure:**
- Save blocked → the account lacks Cost Management Contributor on the scope. Request the role.
- Alerts never fire → no notification recipients were set on the budget. Edit the budget and add alert recipients.

## Verify {#verify}

```yaml
manual:
  description: Confirm SharePoint Embedded consumption is visible and a budget alert is in place.
  ui_path: Cost Management → Cost analysis (SPE meters visible, filterable by app/tenant/container type) AND Cost Management → Budgets (a budget with ≥1 alert exists for {azure-subscription-id})
  api_equivalent: none — see api-surface.json (no SPE consumption-read operation)
  verify:
    ui_path: Both views render as described.
```

Cost analysis shows the four SharePoint Embedded meters and a budget with at least one alert exists for the subscription.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| Subscription not visible in Cost Management | Wrong Entra directory, or no cost role on the subscription | Switch directory; request Billing reader or Reader on `{azure-subscription-id}` |
| No SharePoint Embedded meter rows | No billing profile attached, or no consumption yet | Confirm billing setup in [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin); widen the date range |
| Tag filter (app/tenant/container type ID) returns nothing | Tags propagate after metering and can lag | Re-check after the next metering cycle |
| Budget save fails | Missing Cost Management Contributor on the scope | Request the role, then retry |
| Costs lower than expected | Exempt transactions/egress (eDiscovery, admin actions, Office/WAC downloads) aren't billed | Confirm against [meter exemptions](/sharepoint/dev/embedded/administration/billing/meters#api-transaction-exemptions) |

## Next steps

- [SharePoint Embedded meters](/sharepoint/dev/embedded/administration/billing/meters)
- [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin)

## Related

- [Pay-as-you-go billing](/sharepoint/dev/embedded/administration/billing/billing)
- [SharePoint Embedded meters](/sharepoint/dev/embedded/administration/billing/meters)
- [Microsoft Cost Management](https://ms.portal.azure.com/)
