---
applyTo: "docs/spfx/release-*"
---

# SharePoint Framework release notes

Follow the [release notes template](../../docs/spfx/release-0.0.0.md.template) and the established upgrade pattern in the [1.24.0](../../docs/spfx/release-1.24.0.md) and [1.24.1](../../docs/spfx/release-1.24.1.md) release notes.

## Release versions

- Use the full `major.minor.patch` version for specific releases in filenames, front matter, headings, prose, link labels, and commands. For example, use `1.25.0`, not `1.25`.
- Preserve prerelease suffixes such as `1.25.0-rc.0`. Shorter versions are appropriate only when intentionally referring to an entire minor release line.
- Replace template version placeholders with complete versions; don't append another `.0` to a version that already includes its patch number.
- Update `ms.date` to the current date in `MM/DD/YYYY` format when editing a page. Preserve the actual release date.

## Upgrade guidance

For stable release notes, provide an upgrade section with the following elements in order:

1. The shared warning:
   `[!INCLUDE [spfx-release-upgrade-warning](../../includes/snippets/spfx-release-upgrade-warning.md)]`
2. A version-specific `[!TIP]` containing a `console` code block with this command, replacing `X.Y.Z` with the exact target release:

   ```console
   npx -p @pnp/cli-microsoft365@latest m365 spfx project upgrade --toVersion X.Y.Z --output md
   ```

3. The shared community support disclaimer:
   `[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]`

- Keep the explicit `@latest` tag on the CLI package and the full version on `--toVersion`; don't substitute an unversioned CLI package or an implicit upgrade target.
- Explain that the command generates an upgrade report and doesn't modify project files. Don't promise a complete executable migration script without verifying that behavior.
- Verify that the CLI supports the target release. Flag unsupported targets rather than inventing fallback procedures.
- Reuse the shared warning and disclaimer rather than duplicating their content. The warning concerns upgrades across minor versions.
- Preserve the common release notes include and existing upgrade headings or anchors that other pages link to.

## Keep changes focused

- Preserve existing release-specific guidance and facts.
- When applying these optimisations, limit changes to version consistency, the upgrade section, shared includes, and required metadata.
- Don't add unrelated generator reminders, manual fallback procedures, dependency comparisons, or build, test, and lockfile workflows. Add new release-specific guidance only when requested or supported by verified release information.
