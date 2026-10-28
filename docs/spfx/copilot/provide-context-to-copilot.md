---
title: Provide Copilot with context from your component
description: Use createCopilotTextContent to describe the visible component state, update model context, and send contextual follow-up messages within the 10 KB limit.
ms.date: 10/28/2026
ms.localizationpriority: high
---

# Provide Copilot with context from your component

Rendering an interactive component doesn't by itself tell Copilot what the user is looking at. Provide a concise textual description of the **current visible state** so Copilot can explain the UX in natural language and use the information in subsequent conversation turns.

Use `createCopilotTextContent` from `@microsoft/sp-copilot-component` to create a text content block. The helper accepts the text and returns content for the Copilot bridge. **It doesn't send a message on its own**, and Copilot doesn't automatically read your component's DOM.

## Choose the appropriate bridge operation

| Goal | Operation |
| --- | --- |
| Make the current view available as context for the next user message | Call `this.context.copilotBridge.updateModelContextAsync` with a `content` array containing the block returned by `createCopilotTextContent`. |
| Send a follow-up message on behalf of the user, such as when they choose **Explain this selection** | Call `this.context.copilotBridge.sendFollowUpMessageAsync` with an array of content blocks. Check the returned `isError` value and handle rejected promises. |

Each model-context update replaces the previous context. It doesn't start a new response by itself: the most recent update is supplied to the model on the next user message. A follow-up message is different: it adds a message to the existing conversation on the user's behalf. Don't send follow-ups automatically on every render.

## Describe what is visible

Build the summary from your component's current application state rather than copying its HTML. Include only the details that help interpret the view:

- The purpose of the view and whether it is loading, ready, empty, or showing an error.
- Filters, date ranges, sorting, and the current selection.
- Relevant values, units, and whether totals cover all results or only the displayed subset.
- Whether an operation is a draft, submitted, or awaiting confirmation.

For example, a travel-expense view could provide:

> The component shows three travel expenses for the Helsinki visit, filtered to October. The displayed total is EUR 184. The selected expense is a EUR 42 taxi ride and is still a draft. No reimbursement has been submitted.

If the user asks **What is included in this total?**, the supplied context gives Copilot information to explain the visible summary alongside the component. The wording of the answer depends on the user's request and the agent; context isn't a guarantee of a particular response.

For a SharePoint list view, describe the site/list the user chose, the visible columns, the number of displayed rows, and the selected item. Don't send every item in the list just because the API returned it.

## Respect the 10 KB limit

> [!IMPORTANT]
> At GA, text context supplied using `createCopilotTextContent` has a maximum size of **10 KB**. Text context larger than the limit **blocks sending the message to Copilot**. It isn't silently truncated.

Keep text context concise. JavaScript string length isn't a reliable byte count, especially for localized text. Don't equate 10 KB with 10,000 characters.

When the context is too large:

1. Show an actionable error, such as **The current view contains too much information to send to Copilot. Select fewer rows or send a shorter summary.**
1. Let the user deliberately narrow the selection or choose a summary.
1. Rebuild context from that reduced view and retry.
1. Report success only after the bridge operation succeeds. For follow-up messages, also check `isError`; a resolved promise can still represent host rejection.

Handle transport errors, cancellation, and host rejection explicitly. Don't discard the context and then display a success notification. Don't silently shorten a financial total, truncate an identifier, or remove a qualification that changes the meaning.

## Keep context current and authorized

Update context after the visible data or selection changes. Avoid overlapping requests that can publish an older view after a newer one; serialize or cancel superseded updates as appropriate for your component. Stop pending work when the component is disposed.

Only include data the signed-in user is authorized to access. Don't send hidden fields, tokens, credentials, internal diagnostics, or unrelated personal information. Content provided to Copilot doesn't grant permission to an API or replace server-side authorization.

For consequential actions, keep review and confirmation in the component and enforce authorization in the service. A contextual message saying that an expense was submitted is not evidence that the backend accepted it.

## Test contextual behavior

Validate both the content and the user experience:

- The summary accurately describes the current visible values and selection.
- An update replaces outdated context and doesn't generate an unsolicited follow-up.
- User-triggered follow-ups include useful context and handle rejection visibly.
- Oversized content blocks sending and offers a deliberate reduction/retry path.
- Localized and multibyte text is covered, not only ASCII.
- A deployed agent can answer a follow-up about the visible data.

Copilot Workbench is useful for component development, but a local render isn't proof of the complete conversation flow. Test with a licensed user in a supported Copilot client. See [Develop and deploy Copilot UX components](development-and-deployment.md).

## See also

- [Access data from a Copilot UX component](access-data.md)
- [Troubleshoot Copilot UX components](troubleshooting-copilot-ux-components.md)
- [Copilot UX component samples](https://aka.ms/spfx/copilot/samples)
