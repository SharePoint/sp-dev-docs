## Category

- [ ] Content fix
- [x] New article

## Related issues

- fixes #issuenumber
- partially #issuenumber
- mentioned in #issuenumber

## What's in this Pull Request?

This PR added documentation for a new Power Automate trigger and two actions for SP connector. Following are the details of the trigger and actions.

**1. Trigger: When a form is submitted**

Triggers a flow when a form in SharePoint is submitted.

Customers can use this trigger to start a Power Automate flow when a supported form in SharePoint receives a response. Supported form types include list forms, file upload forms, and document generation forms. This enables automation of downstream processes such as approvals, notifications, routing, or document workflows based on submitted responses.
The trigger provides submission-level details, including the form ID, responder information, submission time, and responses to form questions. For forms that support file uploads or document generation, the trigger also includes metadata about uploaded or generated documents, where applicable.

**Impact:**
Enables automated workflows to start instantly when a form is submitted across list, file upload, and document generation experiences.
Reduces manual effort by eliminating the need to monitor and trigger follow‑up actions on submissions.
Supports common scenarios such as approvals, notifications, and task routing based on form responses.
Provides a single, consistent trigger across different form experiences, simplifying flow creation.
Lays the foundation for end‑to‑end automation scenarios, including document generation and downstream integrations.

**2. Action: Get form metadata**
Gets info about the form. Customers can use this action to obtain the metadata and schema definition of a selected form before executing downstream automation logic in a flow. The returned metadata includes information such as the form identifier, title, link, form type, defined output format, and the questions used to collect responses. This action can be used in automation scenarios where the structure of the form must be evaluated dynamically at runtime before performing additional operations such as validation, transformation, or routing of collected data.
 
**Impact:**
Agents that are driven by flows can dynamically read form structure and map responses without manual configuration.
Reduces fragility in automation by avoiding dependency on fixed field IDs.
Enables more scalable scenarios such as integrating form responses with other systems, routing, or orchestration.
 
**3. Action: Generate a document from a form**
Creates a document using a document generation template associated with a document generation form in SharePoint. Use this action to generate documents by mapping template fields to corresponding content from supported data sources such as SharePoint lists, Excel, or dynamic values provided within a flow.
This allows customers to automate document creation scenarios using published document generation forms as part of business processes. The generated output includes file metadata such as the Name, link, location, and generation status of the created document. This action is supported only for document generation (DocGen) forms.
**Impact: **
Automates document creation workflows end-to-end within Power Automate.
Eliminates manual steps required to generate documents from templates.
Enables integration with upstream data sources such as lists, Excel, or dynamic inputs.
Supports scalable document generation scenarios across business processes (e.g., HR onboarding, approvals, contract generation).

## Submission guidelines

> - **!!IMPORTANT!!** - All submissions must complete the baseline sections included in this template. Ignoring or deleting this template may result in closing the issue with the label **type:incomplete-submission**.
> - Follow our guidance on [How To Create Good Pull Requests](https://github.com/SharePoint/sp-dev-docs/wiki/How-to-Create-Good-Pull-Requests).
> - Target the `main` branch of this repo.
> - When changing a page, ensure you update the `ms.date` front matter wih the current date in the format `MM/DD/YYYY`.
> - Review all build checks and address the automated errors, warnings, and suggestions.
> - *NOTE: The live site is based on the `live` branch. Site owners periodically refresh `live` branch from the `main` branch so merged PRs won't immediately appear on the live site. Please be patient to see your changes appear on the live site.*
>

