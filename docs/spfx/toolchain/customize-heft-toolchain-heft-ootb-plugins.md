---
title: Customize the build toolchain with Heft plugins
description: In this article, you'll learn TODO_TODO_TODO_TODO_TODO_TODO_TODO_TODO
ms.date: 11/18/2025
ms.localizationpriority: high
---
# Customize the build toolchain with Heft plugins

<!-- TODO: overview -->

## Add fake licensing file

<!--TODO: ./assets/LICENSE.md -->

```text
Bacon ipsum dolor amet sirloin tri-tip kielbasa pork burgdoggen kevin ham fatback pork belly. Brisket chislic tail spare ribs, bacon pig pancetta. Bresaola pork short ribs pork belly ground round, burgdoggen sirloin swine frankfurter venison ham ham hock. Swine chicken flank, fatback pastrami bresaola meatloaf tenderloin turkey pig cupim chislic alcatra. Flank alcatra ham, meatball cupim pork chop pork pastrami shankle chislic beef andouille landjaeger chuck.

Tail tongue burgdoggen andouille. Kielbasa alcatra strip steak boudin. Spare ribs leberkas ground round hamburger venison. Short ribs tri-tip spare ribs tail turkey chislic corned beef. Biltong brisket turducken shankle, filet mignon sirloin leberkas pork.

Tail prosciutto porchetta ham meatloaf. Ground round fatback hamburger picanha. Pig meatball salami, prosciutto strip steak buffalo sausage boudin cupim ham beef. Shoulder spare ribs swine, ham hock turducken andouille sirloin pastrami short loin strip steak. Sirloin shankle beef filet mignon tri-tip. Ham hock hamburger pastrami t-bone pork belly, pig ball tip shank.

Prosciutto pork loin boudin strip steak, kevin ground round beef buffalo. Prosciutto cupim capicola, pig beef ribs frankfurter pork belly andouille boudin alcatra sirloin buffalo tenderloin porchetta t-bone. Pork chop hamburger pork, venison picanha pork belly landjaeger short ribs porchetta turkey tongue ham turducken ribeye doner. Tail salami ham strip steak sausage meatloaf capicola tri-tip doner boudin meatball. Pork loin chislic boudin pastrami, capicola prosciutto chicken corned beef meatloaf kevin shoulder. Drumstick andouille rump, salami swine tail spare ribs shoulder jerky cupim buffalo flank frankfurter filet mignon. Capicola corned beef pork chop, jerky t-bone filet mignon pastrami hamburger.

Tongue beef ribs sausage, pork chop turducken chuck turkey flank picanha frankfurter ham hock shoulder ham pancetta. Turkey cupim leberkas pig swine cow pork shankle frankfurter pastrami short loin. Short loin strip steak chislic chuck shankle shoulder turducken buffalo pork chop cupim tail. Turkey ground round alcatra brisket andouille, swine spare ribs pork loin ham hock pig. Capicola rump brisket filet mignon. Kielbasa boudin biltong, buffalo prosciutto drumstick leberkas landjaeger ball tip flank. Tenderloin shoulder doner ham hock chislic hamburger cupim strip steak chicken jerky.

Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
```

## Customize SPFx Heft rig

<!--TODO: brief summary how heft.json = build config containing phases, tasks, & task config -->
<!--TODO: ... refer to overview how it works -->
<!--TODO: ... look at existing spfx rig -->
<!--TODO: ... reference OOTB plugins -->

### Add heft.json

<!--TODO: add ./config/heft.json -->

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/heft.json",
}
```

### Customize the SPFx package-solution phase

<!--TODO: modify the `package-solution -->

```json
"phasesByName": {
  "package-solution": {
  }
}
```

### Add new task to package-solution phase

```json
"tasksByName": {
  "copy-license": {
    "taskPlugin": {
      "pluginPackage": "@rushstack/heft",
      "pluginName": "copy-files-plugin",
      "options": {
        "copyOperations": [{
          "sourcePath": "./assets",
          "destinationFolders": ["./sharepoint/solution"],
          "includeGlobs": ["LICENSE.md"]
        }]
      }
    }
  }
}
```

### Configure the task execution order

<!--TODO: explain: if no dep, runs parallel with others -->

```json
"taskDependencies": ["package-solution"]
```

<!--TODO: explain another task needs to run before this one, need to replace it here -->

## Test

<!--TODO: recap -->

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/heft/v0/heft.schema.json",
  "extends": "@microsoft/spfx-web-build-rig/profiles/default/config/heft.json",
  "phasesByName": {
    "package-solution": {
      "tasksByName": {
        "copy-license": {
          "taskDependencies": ["package-solution"],
          "taskPlugin": {
            "pluginPackage": "@rushstack/heft",
            "pluginName": "copy-files-plugin",
            "options": {
              "copyOperations": [{
                "sourcePath": "./assets",
                "destinationFolders": ["./sharepoint/solution"],
                "includeGlobs": ["LICENSE.md"]
              }]
            }
          }
        }
      }
    }
  }
}
```

<!--TODO: -->


## See also

- [SharePoint Framework Toolchain: Rush Stack, Heft, & Webpack](sharepoint-framework-toolchain-rushstack-heft.md)
- [Migrate from the Gulp Toolchain to Heft Toolchain](migrate-gulptoolchain-hefttoolchain.md)
<!--TODO: add other customization pages -->
