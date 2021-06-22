---
title: Implement Continuous Integration and Continuous deployment using Azure Pipelines
description: Streamlining the build and deployment process by automating manual steps using Azure Pipelines.
ms.date: 12/02/2020
ms.prod: sharepoint
localization_priority: Priority
---
# Implement Continuous Integration and Continuous deployment using Azure Pipelines
Azure Pipelines is the newer version of the Azure DevOps build and release features.  

This article explains the steps involved in setting up your Azure Pipelines environment with Continuous Integration and Continuous Deployment to automate your SharePoint Framework builds, unit tests, and deployment.  

## Choosing between Azure Multi-stage Pipelines and Azure DevOps builds and releases

There are currently two approaches available to implement continuous integration, and deployment in Azure DevOps.  
Azure builds and releases is the historic one, featuring a graphical edition experience and storing the definitions in a JSON document hidden from the user.  

Azure multi-stage Pipelines relies on pipeline definitions stored as YAML files on the repository providing transparency, version history, and repeatability.  
Both approaches are described for the SharePoint Framework:

- [Azure Build and Release](./implement-ci-cd-with-azure-devops.md)
- Azure Multi-stage Pipelines (this article)

## Implementing Continuous Integration and Continuous testing

The continuous integration and continuous testing stage are described by the following YAML template.  
Copy the following content in a new file at the root of the project called __azure-pipelines-build-template.yml__. 

```YAML
parameters:
  name: ''
jobs:
  - job: ${{ parameters.name }}
    pool:
      vmImage: 'ubuntu-latest'
      demands:
      - npm
      - node.js
      - java
    variables:
      npm_config_cache: $(Pipeline.Workspace)/.npm

    steps:
      - checkout: self

      - task: NodeTool@0
        displayName: 'Use Node 10.x'
        inputs:
          versionSpec: 10.x
          checkLatest: true

      - task: CacheBeta@1
        inputs:
          key: npm | $(Agent.OS) | package-lock.json
          path: $(npm_config_cache)
          cacheHitVar: CACHE_RESTORED
      - script: npm ci
        displayName: 'npm ci'

      - task: Gulp@0
        displayName: 'Bundle project'
        inputs:
          targets: bundle
          arguments: '--ship'

      - script: npm test
        displayName: 'npm test'

      - task: PublishTestResults@2
        displayName: Publish test results
        inputs:
          testResultsFormat: JUnit
          testResultsFiles: '**/junit.xml'
          #failTaskOnFailedTests: true #if we want to fail the build on failed unit tests

      - task: PublishCodeCoverageResults@1
        displayName: 'Publish code coverage results'
        inputs:
          codeCoverageTool: Cobertura
          summaryFileLocation: '$(System.DefaultWorkingDirectory)/**/*coverage.xml'

      - task: Gulp@0
        displayName: 'Package Solution'
        inputs:
          targets: 'package-solution'
          arguments: '--ship'

      - task: CopyFiles@2
        displayName: 'Copy Files to: $(Build.ArtifactStagingDirectory)'
        inputs:
          Contents: |
            sharepoint/**/*.sppkg
          TargetFolder: '$(Build.ArtifactStagingDirectory)'

      - task: PublishBuildArtifacts@1
        displayName: 'Publish Artifact: drop'
```

> [!NOTE] 
> You can comment out/remove the _PublishCodeCoverageResults_, _PublishTestResults_ and _npm test_ tasks if you do not have any unit test implement and/or do not want unit tests to run.

> [!NOTE] 
> You can find the latest version of this file on the [sample](https://github.com/SharePoint/sp-dev-build-extensions/tree/master/samples/azure-devops-ci-cd-spfx)

## Implementing Continuous Deployment

The continuous deployment stage is described by the following YAML template.  
Copy the following content in a new file at the root of the project called __azure-pipelines-deploy-template.yml__.  

```YAML
parameters:
  # unique name of the job
  job_name: deploy_sppkg
  # friendly name of the job
  display_name: Upload & deploy *.sppkg to SharePoint app catalog
  # name of target environment deploying to
  target_environment: ''
  # app catalog scope (tenant|sitecollection)
  m365cli_app_catalog_scope: 'tenant'
  variable_group_name: ''
jobs:
- deployment: ${{ parameters.job_name }}
  displayName: ${{ parameters.display_name }}
  pool:
    vmImage: 'ubuntu-latest'
  environment: ${{ parameters.target_environment }}
  variables:
  - group: ${{parameters.variable_group_name}} #m365_user_login, m365_user_password, m365_app_catalog_site_url
  strategy:
    runOnce:
      deploy:
        steps:
        - checkout: none
        - download: current
          artifact: drop
          patterns: '**/*.sppkg'
        - script: sudo npm install --global @pnp/cli-microsoft365
          displayName: Install CLI for Microsoft365
        - script: m365 login $(m365_app_catalog_site_url) --authType password --userName $(m365_user_login) --password $(m365_user_password)
          displayName: Login to Microsoft 365
        - script: |
            CMD_GET_SPPKG_NAME=$(find $(Pipeline.Workspace)/drop -name '*.sppkg' -exec basename {} \;)
            echo "##vso[task.setvariable variable=SpPkgFileName;isOutput=true]${CMD_GET_SPPKG_NAME}"
          displayName: Get generated *.sppkg filename
          name: GetSharePointPackage
        - script: m365 spo app add --filePath "$(Pipeline.Workspace)/drop/sharepoint/solution/$(GetSharePointPackage.SpPkgFileName)" --appCatalogUrl $(m365_app_catalog_site_url) --scope ${{ parameters.m365cli_app_catalog_scope }} --overwrite
          displayName: Upload SharePoint package to Site Collection App Catalog
        - script: m365 spo app deploy --name $(GetSharePointPackage.SpPkgFileName) --appCatalogUrl $(m365_app_catalog_site_url) --scope ${{ parameters.m365cli_app_catalog_scope }}
          displayName: Deploy SharePoint package
```

> [!NOTE] 
> You can find the latest version of this file on the [sample](https://github.com/SharePoint/sp-dev-build-extensions/tree/master/samples/azure-devops-ci-cd-spfx)

## Defining the Pipeline structure

Now that the build and deploy stages are defined in their respective templates, it needs to be assembled as a Multi-stage pipeline.  
This document will describe the structure of the pipeline as well as the different environments in use.  
Copy the following content in a new file at the root of the project called __azure-pipelines.yml__.  

```YAML
name: $(TeamProject)_$(BuildDefinitionName)_$(SourceBranchName)_$(Date:yyyyMMdd)$(Rev:.r)
resources:
- repo: self

trigger:
  branches:
    include:
    - master
    - develop

stages:
- stage: build
  displayName: build
  jobs:
    - template: ./azure-pipelines-build-template.yml
      parameters:
        name: 'buildsolution'
- stage: 'deployqa'
  # uncomment if you want deployments to occur only for a specific branch
  #condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/develop'))
  jobs:
    - template: ./azure-pipelines-deploy-template.yml
      parameters:
        job_name: deploy_solution
        target_environment: 'qa'
        variable_group_name: qa_configuration
```

> [!NOTE] 
> You can find the latest version of this file on the [sample](https://github.com/SharePoint/sp-dev-build-extensions/tree/master/samples/azure-devops-ci-cd-spfx)

> [!NOTE] 
> You can define multiple environments and by duplicating the __deployqa__ stage and providing different parameters. If you do so, make sure the stage name, the job name, the target environment and the variable group name are unique.

> [!NOTE] 
> You can conditionally deploy to different environments leveraging [conditions](/azure/devops/pipelines/process/conditions?tabs=yaml)

## Configuring the credentials for the environments

Secrets should never be committed to a repository for security reasons. The pipeline described in the previous steps makes use of _variable groups_ to keep configuration values secret. The variable groups need to be created for each environment and the name needs to match what is described in the pipeline definition (here __qa_configuration__).  
To create the variable group, follow these steps:

1. Sign-in to Azure DevOps, navigate to your project
1. Under __Pipelines__ select __Library__
1. Add a new __Variable Group__ making sure the name matches what is defined in the pipeline definition
1. Add the following variables to the group and select __Save__
    - m365_user_login: the user login of a SharePoint tenant administrator
    - m365_user_password: the user password of the account
    - m365_app_catalog_site_url: the url of the app catalog site collection

> [!NOTE] 
> You can select the lockpad icon next to the variable value input to mark it as sensitive and have Azure DevOps hide the value from other users and from the logs.
