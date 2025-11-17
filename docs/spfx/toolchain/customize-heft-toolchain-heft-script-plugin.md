---
title: Customize the build with the Heft Run script plugin
description: In this article, you'll learn TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO
ms.date: 11/18/2025
ms.localizationpriority: high
---
# Customize the build with the Heft Run script plugin

[!INCLUDE [spfx-prerelease-related](../../../includes/snippets/spfx-prerelease-related.md)]

<!-- TODO: overview -->
<!-- TODO: draw comparison to gulp-toolchain scenarios -->

> [!IMPORTANT]
> This article assumes you understand how the Heft build toolchain works, basic architectural concepts, and a high-level understanding of the toolchain customization options.
>
> Learn more in this overview: [Understanding the Heft-based toolchain (how it works)](customize-heft-toolchain-overview.md).

## Add Stylelint to project

<!--TODO: install stylelint -->

```console
npm install stylelint stylelint-config-standard-scss -DE
```

<!--TODO: add .stylelintrc -->

```json
{
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    "value-list-comma-space-after": "always-single-line",
    "declaration-empty-line-before": "never"
  }
}
```

## Customize the SPFx Heft rig

<!--TODO: brief summary how heft.json = build config containing phases, tasks, & task config -->
<!--TODO: ... refer to overview how it works -->
<!--TODO: ... reference OOTB plugins... nothing here, but choice = create new plugin or create new task -->
<!--TODO: ... look at existing spfx rig... hook into the build phase, follow pattern of lint, run after sass -->

### Add new script file

<!--TODO... make sure to create using MJS (ESM) due to deprecation issue with stylelint -->

```javascript
#!/usr/bin/env node
import stylelint from 'stylelint';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

async function stylelint() {
}

// support direct exec (outside of heft)
if (require.main === module) {
  stylelint().catch(e => {
    console.error('Error: ', e);
    process.exit(1);
  });
}
```

### Export new `runAsync()` function

<!--TODO -->

```javascript
// support run as script (inside of heft)
async function runAsync() {
  await stylelint(true);
}
module.exports = { runAsync };
```

### Add stylelint version message

<!--TODO -->

```javascript
const execAsync = promisify(exec);

try {
  const projectFolder = path.join(__dirname, './..');

  // output stylelint version
  const stylelintPkg = require('stylelint/package.json');
  console.log(`Using Stylelint version ${stylelintPkg.version}`);
} catch (e) {
  console.error(`Error running stylelint:`, e.message);
}
```

<!--TODO: test it from outside heft -->


### Execute stylelint with config settings

<!--TODO: -->

```javascript
const result = await stylelint.lint({
  files: 'src/**/*.scss',
  configFile: path.join(projectFolder, '.stylelintrc'),
  cwd: projectFolder
});
```

### Process stylelint findings results

<!--TODO: -->
<!--TODO: when stylelint finds an issue, it throws an error... let's treat it like eslint does-->
<!--TODO: stylelint's responses don't match other heft plugin responses, like eslint -->

```javascript
if (result.errored || result.results.some(r => r.warnings.length > 0)) {
  for (const fileResult of result.results) {
    if (fileResult.warnings.length > 0) {
      for (const warning of fileResult.warnings) {
        const relativePath = path.relative(projectFolder, fileResult.source);
        const formattedWarning = `${relativePath}:${warning.line}:${warning.column} - (${warning.rule}) ${warning.text}`;
      }
    }
  }
}
```

## Test

<!--TODO: -->

## Going further

<!--TODO: explain...-->
<!--TODO: - this runs in every build... -->
<!--TODO: - what if i only wanted to run lint, no build? -->

### Create new phase to run specific task

<!--TODO: update heft.json -->
<!--TODO: ... add to `phasesByName` -->

```json
"stylelint": {
  "tasksByName": {
    "stylelint": {
      "taskPlugin": {
        "pluginPackage": "@rushstack/heft",
        "pluginName": "run-script-plugin",
        "options": {
          "scriptPath": "scripts/stylelint.mjs"
        }
      }
    }
  }
}
```

```console
heft stylelint
```

## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Migrate from the Gulp Toolchain to Heft Toolchain](migrate-gulptoolchain-hefttoolchain.md)
<!--TODO: add other customization pages -->
