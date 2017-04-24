---
title: SharePoint Server 2013 Application Lifecycle Management
ms.prod: SHAREPOINT
ms.assetid: caaf9a09-2e6a-49e3-a8d6-aaf7f93a842a
---


# SharePoint Server 2013 Application Lifecycle Management
Applies common application lifecycle management (ALM) concepts and practices to application development using SharePoint Server 2013 technologies.
 * **Provided by: *** Eric Charran, Microsoft Corporation
  
    
    

 * **Contributors:*** Vesa Juvonen, Microsoft Corporation | Steve Peschka, Microsoft Corporation

  
    
    


> [!IMPORTANT]
> This topic refers to autohosted SharePoint Add-ins. The preview program for autohosted apps has ended. Please disregard all references to autohosted SharePoint Add-ins. 
  
    
    


## Overview of application lifecycle management (ALM)
<a name="Overview"> </a>

Microsoft SharePoint Server 2013 gives developers several options for creating and deploying applications that are based on SharePoint technologies, for both on-premises and in hosted or public cloud platforms. SharePoint Server 2013 offers increased flexibility in the shape applications can take as well as new options for using standards-based technologies with applications. Although these application capabilities and deployment options afforded by the new application model inSharePoint provide an effective means for developers to create new and immersive applications, developers must be able to infuse quality, testing and ALM considerations into the development process. This article applies common ALM concepts and practices to application development using SharePoint Server 2013 technologies.
  
    
    

### What's new
<a name="WhatsNew"> </a>

SharePoint Server 2013 establishes a new paradigm for implementing applications. Because of this shift in application development with SharePoint technologies, developers and architects should have a thorough understanding of the new application development patterns, practices, and deployment models for SharePoint Server 2013. It's important to note that while the application model for developing solutions with SharePoint has changed, many of the patterns used for solution development including choice of technologies, implementation techniques are in line with existing web application development technologies.
  
    
    
The following resources outline the application types that can be constructed using SharePoint Server 2013 technologies and contain considerations for both on-premises and cloud applications. To understand hosting options for SharePoint Add-ins, see  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx).
  
    
    
Additionally, Microsoft advises customers to evaluate the technologies used when developing applications with SharePoint Server 2013 as there is a wider set of choices for solution implementation. When creating applications, customers can focus on leveraging standards-based technologies such as HTML5 and JavaScript for presentation and user experience layers, while OData and OAuth can be leveraged for service-based access to back end services including SharePoint. Customers should consider carefully whether full trust code (that is, compiled assemblies deployed to SharePoint) are required. although continuing to use that development paradigm, while still valid and required in some situations, does impose significant overhead on the ALM process.
  
    
    
For more information about the new flexible development technologies for applications on SharePoint Server 2013, see  [SharePoint 2013 development overview](sharepoint-development-overview.md).
  
    
    

### Benefits and changes
<a name="Benefits"> </a>

Because SharePoint-supported application development technologies now offer a more flexible assortment of languages and programming architectures, developers need to adapt existing ALM practices around mainstream development techniques to accommodate for their presence within SharePoint. Concepts such as testing, build establishment, deployment, and quality control, can be expanded to include deployment to SharePoint as a SharePoint application. This may mean that although many developers that are accustomed to writing and deploying server-side farm solutions that extend the core capabilities of SharePoint, common ALM practices for the new flexible development model facilitated by SharePoint Server 2013 applications must be applied to the implementation process.
  
    
    
As customers continue the transition to cloud-hosted implementations of SharePoint Server 2013, developers will need to understand how to extend ALM concepts to include development, testing, and deployment target environments that sit outside the physical boundaries of the organization. This includes evaluating the technology strategy for conducting application development, testing, and deployment.
  
    
    
Developers and architects alike can become well-versed in synthesizing solutions that consist of multiple application components that span or combine different types of hosting options. During this adaptation process, ALM procedures should be applied unilaterally to these applications. For example, developers may need to deploy an application that spans on-premises services deployment (that is, IIS, ASP.NET, MVC, WebAPI, and WCF), Microsoft Azure, SharePoint Server 2013, and SQL Azure, while also being able to test the application components to determine quality or whether any regressions have been introduced since a previous build. These requirements may signify a significant shift in how developers and teams regard the daily build and deployment process that is a well-known procedure for on-premises or server-side solutions.
  
    
    

### Development team considerations
<a name="DevTeam"> </a>

For organizations that have more than one application developer or architect, team development for SharePoint Server 2013 should be carefully planned to provide the highest-quality applications as well as support sufficient developer productivity. Because the method for conducting application development has increased in flexibility, teams will need to be clear and confident not only on ALM practices and patterns, but also on how each developer will write code and ensure that quality code becomes part of the application build process.
  
    
    
These considerations begin with selecting the appropriate development environment. Traditionally, development has been relegated to conducting separate development in virtual machines that are connected to a common code repository that provided build, deployment, and testing capabilities, like Visual Studio TFS 2012. TFS is still a strong instrumental component of an ALM strategy, and central to the development effort, but teams should consider how to leverage TFS across the different types of development environment options.
  
    
    
Depending on the target environment, the solution type (that is, which components will be on-premises and which will be hosted in cloud infrastructure or services), developers can now select from a combination of new development environment options. These options will consist of new choices such as the SharePoint developer site template, an Office 365 developer tenant, as well as legacy choices such as virtual machine-based development using Hyper-V in Windows 8 or Windows Server 2012.
  
    
    
The following section describes development environment considerations for application developers and development teams.
  
    
    

## Development environment considerations
<a name="DevEnvironment"> </a>

The selection of a development environment should be made based on multiple factors. These considerations are largely influenced by the type of application being developed as well as the target platform for the application. Traditionally, when creating applications for SharePoint Server 2010, developers would provision virtual machines and conduct development in isolation. This was due to the fact that deployment of full trust solutions may have required restarts of core SharePoint dependencies, such as IIS, which would prevent multiple developers from using a single SharePoint environment. Because development technologies have changed and the options for developers creating applications have increased, developers and teams should understand the choice of development environments available to them. Figure 1 shows the development environment and tool mix, and includes the types of solutions that can be deployed to the target environments.
  
    
    

**Figure 1. Development environment components and tools**

  
    
    
 [![The app development environment can include Office 365, Visual Studio, and virtual machines.](images/AppDevelopmentEnvironment.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391723) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391723)
  
    
    

### Development environment philosophy
<a name="DevPhilosophy"> </a>

Because of the investments made in how applications can be designed and implemented using SharePoint Server 2013, developers should determine if there is a need to conduct development using server-side code. As developers create applications that use the cloud-hosted model, the requirement to conduct development that relies on virtualized environments, specifically for SharePoint, diminishes. Developers should seek to build solutions with the remote-development model that uses existing cloud-based (both public and private) infrastructure. If development environments can be quickly and easily provisioned without having to create and orchestrate virtualization, developers can invest more time in focusing on development productivity and quality, rather than infrastructure management.
  
    
    
The decision to require a virtualized instance of SharePoint Server 2013 versus the new SharePoint development site template will depend on whether or not the application requires full trust code to be deployed to SharePoint and run there. If no full trust code is required, we recommend using the developer site template, which can be found in Office 365 development tenants or within an organization's implementation of on-premises SharePoint. Developer site templates are designed for developers to deploy applications directly to SharePoint from Visual Studio. Office 365 developer sites are preconfigured for application isolation and OAuth so that developers can begin writing and testing applications right away.
  
    
    
The following sections describe in detail when developers can use the different environment options to build applications.
  
    
    

### O365 development sites (public cloud)
<a name="O365Development"> </a>

Figure 2 shows how developers can use Office 365 as a development environment and includes the types of tools produce SharePoint applications that can be hosted in Office 365.
  
    
    

**Figure 2. Office 365 app development**

  
    
    
 [![Build apps for SharePoint with Office 365, Visual Studio, and "Napa."](images/Office365AppDevelpment.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391724) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391724)
  
    
    
Developers with MSDN subscriptions can obtain a development tenant that contains aSharePointDeveloper Site. The SharePointDeveloper Site is preconfigured for developing applications. Users can use not only Visual Studio 2012 in developing applications, but with Office 365 developer sites, Napa can be used within the site to construct applications. For more information about getting started with anOffice 365 Developer Site, see  [Set up a development environment for SharePoint Add-ins on Office 365](http://msdn.microsoft.com/library/b22ce52a-ae9e-4831-9b68-c9210af6dc54%28Office.15%29.aspx).
  
    
    
Developers can start creating applications that will be hosted in Office 365, on-premises or on other infrastructure in a provider-hosted model. The benefit of this environment is that infrastructure, virtualization and other hosting considerations for a SharePoint development environment are abstracted by Office 365, allowing developers to create applications instantly. A prime consideration for this type of development environment is that applications that require full trust code to be deployed toSharePoint cannot be accommodated. Microsoft recommends using the SharePoint client-side object model (CSOM) and client-side technologies such asJavaScript as much as possible. In the event that full trust code is required (but deployment of the code to run on SharePoint is not required), we recommend deploying the server-side code in an autohosted or provider-hosted model. Note that these full trust code solutions that are deployed to provider-hosted infrastructure also use the CSOM but can use languages such as C#. It's also important to note that these applications deployed in a provider-hosted model can use other technology stacks and still use the CSOM to interact with SharePoint Server 2013.
  
    
    
Development teams creating separate features or applications that contain a larger solution will need a centralized deployment target to integration test components. Because each developer is creating features or applications on their own Office 365 developer site, a centralized site collection in a target tenant or on-premises environment should be provisioned so that each developer's application components can be deployed there. This approach will allow for a centralized place to conduct integration testing between solution components. The  [testing section of this document](#Testing) reviews this process in more detail.
  
    
    

#### NapaOffice 365 development tools
<a name="NapaDevelopment"> </a>

The Napadevelopment tools can be used by developers for the simpler creation of applications within an Office 365 developer site. The intention of the Napa tools is for developers, or power users who are proficient in client-side technologies, to quickly develop and deploy applications in a prototype, proof-of-concept or rapid business solution scenario. These tools provide a means of developing application functionality on SharePoint. However, during the lifecycle of an application, there may be points at which the application should be imported into Visual Studio. These conditions are outlined as follows"
  
    
    

- When more than one developer has to contribute or develop part of the solution
    
  
- When an application reaches a level of dependence by users whom requires the application of lifecycle management practices
    
  
- When functional requirements for the application change over time to require supplementary solution components (such as compiled services or data sources)
    
  
- When the application requires integration with other applications or solution components
    
  
- When developers have to use quality control measures such as automated builds and testing
    
  
Once these or other similar conditions occur, developers must export the solution into a source controlled environment such as TFS and apply ALM design considerations and procedures to the application's future development.
  
    
    

### Development sites (remote development)
<a name="OnPremDevelopment"> </a>

For organizations or developers who choose not to use Office 365 developer sites as a primary means for SharePoint application development, on-premises developer sites can be used to develop SharePoint applications. In this model, the Office 365 developer sites' capability is replaced with on-premises developer sites hosted within a SharePoint farm. Customers can create a development private cloud by deploying a SharePoint farm to house developer site instances. Customers can supply their own governance automation in order to provide developer site template creation or use the SharePoint in-product capabilities to provision developer site instances. Figure 3 illustrates this setup.
  
    
    

**Figure 3. On-premises app development with the developer site template**

  
    
    
 [![Build apps for SharePoint in an on-premises deployment of SharePoint 2013 with the developer site template](images/OnPremDevSites.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391725) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391725)
  
    
    
Figure 3 describes the development tools and application types that can be enabled with developer sites when using an on-premises SharePoint farm as a host. Note that NapaOffice 365 development tools cannot be used in this environment as they are a capability only present in Office 365 development sites.
  
    
    
TheSharePoint farm that hosts Developer Site instances must be monitored and meet service and recovery point and time level objectives so that developers who rely on them to create applications can be productive and not experience outages. Customers can apply private cloud concepts such as elasticity and scale units and a management fabric to this environment. Operations and management have to be applied to the SharePoint farm where the developer sites are hosted also. This will help control unmonitored sprawl of multiple developer sites that are stale or unused and provide a way to understand when the environment has to scale.
  
    
    
Customers can decide to use infrastructure as a service (IaaS) capabilities like Microsoft Azure to host theSharePoint farms that contain and host developer sites, or their own on-premises virtual or physical environments. Note that using this model does not require a SharePoint installation for each developer. Remote application development will only require Visual Studio and Office and SharePoint 2013 development tools on the developer work station.
  
    
    
Developers must establish provider-hosted infrastructure to deploy the provider-hosted applications. Although provider-hosted components of a SharePoint application can be implemented in a wide-array of technologies, developers must provide an infrastructure for hosting those components of the application that run outside SharePoint. For example, if a team is developing a SharePoint application whose user experience and other components reside in anASP.NET application, the development team should use local versions of IIS,SQL Server, and so on engage in traditional ALM team development patterns for ASP.NET.
  
    
    

### Self-contained farm environments (virtualized farm development)
<a name="SelfContained"> </a>

For those solutions that require the deployment of full trust code to run on a SharePoint farm a full (often virtualized) implementation of SharePoint Server 2013 will be required. For guidance on how to create an on-premises development environment for SharePoint, see  [Set up an on-premises development environment for SharePoint Add-ins](http://msdn.microsoft.com/library/b0878c12-27c9-4eea-ae3b-7e79e5a8838d%28Office.15%29.aspx).
  
    
    
Figure 4 shows the types of applications that can be created using an on-premises virtualized environment.
  
    
    

**Figure 4. On-premises development with a virtual environment**

  
    
    
 [![Build apps for SharePoint in a virtual on-premises environment](images/AppDevelopmentVirtualEnvironment.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391726) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391726)
  
    
    
Developers can conduct remote development for the SharePoint and cloud-hosted applications within their own SharePoint farms as well as the development of full trust farm solutions. These farms are often hosted within a virtualization server running either on the developer's workstation or in a centralized virtualization private cloud that can easily be accessible to developers. The SharePoint farm environment is usually separate from other developers' farms and provides a level of isolation that is required when developing full trust code that may require the restart of critical services (that is IIS).
  
    
    
Remote development can occur within the self-contained farm as well as the development of full trust code as each development farm is isolated and dedicated to a single developer.
  
    
    
Organizations or developers will have to manage and update the SharePoint farms running within the virtual computers. For developers who are contributing to a single application, parity across the development farms running inside the virtual computers must be maintained. This practice ensures that each component of code developed for the application has consistency. Other common considerations are a standard configuration for the farms including domain access and credentials, service application credentials, testing identities or accounts and other environmental configuration elements (such as certificates).
  
    
    
Similar to a centralized farm for development sites, these virtual machines running developerSharePoint farms can be hosted in IaaS platforms such as Microsoft Azure, and on-premises private cloud offerings.
  
    
    
Note that, although virtual machines offer a great deal of isolation and independence from other developer virtual machines, teams should strive to have uniformity between the virtual machine configurations. This includes common domain, account and security, SharePoint configurations and a connection to a source control repository such as Visual Studio Team Foundation Server (TFS).
  
    
    

## ALM design considerations
<a name="ALMDesign"> </a>

When constructing SharePoint applications, there are several considerations that have to be addressed to provide governance and common development practices for consistency and quality. When applying ALM principles to SharePoint application development, developers must focus on technical considerations as well as process-driven considerations.
  
    
    
The support of an ALM platform, such as Visual Studio Team Foundation Server 2012, is usually a requirement when conducting application development especially with teams of developers working on the same set of projects. SharePoint applications, like other technical solutions, require code repository management and versioning, build services, testing services, and release management practices. The following section describes considerations for ALM as applied to the different application models for SharePoint applications.
  
    
    

### Overview
<a name="ALMDesignOverview"> </a>

For each type of SharePoint application, the ALM considerations must be applied without variation in concept. However, practices and procedures around build, testing, and change management must be adjusted.
  
    
    
Some SharePoint applications will use client-side technologies. Most developers who have SharePoint Server 2010 application development experience will have to adjust to developing and applying ALM principles to non-compiled code. This adjustment includes applying concepts such as a "build" to a solution that may not have compiled code. ALM platforms such as Visual Studio 2012 have built-in capabilities to validate builds by first compiling the code, and second, by running build verification tests (BVTs) against the build.
  
    
    
For SharePoint applications, the process relating to build and testing should remain consistent with traditional application development processes. This includes the creation of a build schedule by the ALM platform, which will compile the solution and deploy it into the target environment.
  
    
    

### Build processes
<a name="ALMBuildProcess"> </a>

The SharePoint application build processes are facilitated by the ALM platform. Visual Studio Team Foundation Server 2012 provides both build and test services that can be triggered on solution check in from Visual Studio 2012 (continuous integration) or at specified scheduled intervals.
  
    
    

#### SharePoint build components
<a name="ALMBuildComponents"> </a>

When planning build processes for SharePoint application development, developers have to consider the interactions between the components, as shown in Figure 5.
  
    
    

**Figure 5. SharePoint-hosted app build components**

  
    
    

  
    
    
![Visual Studio builds work with app manifests, pages, and supporting files.](images/AppDevelopmentClientBuildComponents.png)
  
    
    
The illustration in Figure 5 is a logical representation of a SharePoint application. This illustration shows a SharePoint-hosted add-in and highlights key application objects as part of a Visual Studio 2012SharePoint-hosted add-in project. The SharePoint app project contains the features, package, and manifest that will be registered with SharePoint. The project also contains pages, script libraries, and other elements of user experience that constitute the SharePoint application. In addition, the SharePoint project has supporting files which include the necessary certificates for deployment to a target SharePoint environment.
  
    
    

**Figure 6. Provider-hosted and autohosted app build components**

  
    
    

  
    
    
![Provider-hosted apps contain both SharePoint app packages and cloud-hosted components.](images/ProviderHostedAppBuildComponents.png)
  
    
    
Figure 6 shows a SharePoint cloud-hosted application (that is, autohosted or provider-hosted). The main difference in the project structure is that the Visual Studio 2012 solution contains a SharePoint application project in addition to one or more projects that contain the cloud-hosted application components. These may include web applications, SQL database projects, or service applications that will be deployed to Azure or an on-premises provider hosted infrastructure (such as ASP.NET) and other solution components. For guidance on packaging and deployment with high-trust applications, see  [Package and publish high-trust SharePoint Add-ins](http://msdn.microsoft.com/library/3c28aed8-c037-407c-9154-39a74073e170%28Office.15%29.aspx).
  
    
    

**Figure 7. ALM with Visual Studio Team Foundation Server**

  
    
    

  
    
    
![TFS can be configured to conduct build and deployment activities with a SharePoint application through build definitions.](images/ALMWithTFS.png)
  
    
    
Figure 7 shows TFS as the ALM platform. Teams will use TFS to store code and conduct team development either using TFS deployed on-premises or using Microsoft cloud-based TFS services. TFS can be configured to conduct build and deployment activities with a SharePoint application through build definitions. TFS can also be used to conduct build verification tests (BVTs) that may be automated through the execution of coded UI tests that are part of the build definition.
  
    
    

**Figure 8. TFS build targets**

  
    
    

  
    
    
![Scripts executed by a TFS build definition will deploy the SharePoint application components to SharePoint Online and on-premises SharePoint.](images/TFSBuildTargets.png)
  
    
    
Figure 8 shows the target environments where scripts executed by a TFS build definition will deploy the SharePoint application components. For SharePoint-hosted applications this includes deployment to either SharePoint Online or to on-premises SharePoint application catalogs.
  
    
    
For cloud-hosted SharePoint applications, the components of the solution that require additional infrastructure outside SharePoint are deployed to target environments. For autohosted applications, this will be Microsoft Azure. For provider-hosted applications, this infrastructure can be Microsoft Azure, or other on-premises or IaaS-hosted environments.
  
    
    

#### Creating a build for SharePoint applications
<a name="CreateBuild"> </a>

TFS provides build services that can compile solutions checked into source control and place the output in a centralized drop location for deployment to target environments in an automated manner. The primary method of configuring TFS to conduct automated builds, deployments, and testing of SharePoint applications is to create a build definition in Visual Studio. The build definition contains information about which code projects to compile, as well as any post-compilation activities such as testing and actual deployment to the target environments. For more information about the Team Foundation Build Service, see  [Set up Team Foundation Build Service](http://msdn.microsoft.com/en-us/library/vstudio/ee259687.aspx).
  
    
    
To achieve continuous integration, the build definition can be triggered when developers check in code. Additionally, the build definition can be scheduled to execute at set intervals.
  
    
    
ForSharePoint applications, developers should use the  [Office/SharePoint 2013 Continuous Integration with TFS 2012](http://officesharepointci.codeplex.com/) build definitions project to achieve scheduled builds or continuous integration. This project provides build definitions, Windows PowerShell scripts, and process instructions on how to configure Visual Studio Online or an on-premises version of TFS to build and deploy SharePoint applications in a continuous integration model. Developers should download the components in this project and configure their instance of TFS accordingly. For instructions on how to configure TFS with the provided build definition for SharePoint applications and configure the build definition to use the Windows PowerShell scripts to deploy the SharePoint application to a target environment, see the [Office/SharePoint 2013 Continuous Integration with TFS 2012 documentation](http://officesharepointci.codeplex.com/documentation).
  
    
    

#### Configuring build and deployment procedures
<a name="ConfigureBuilds"> </a>

Figure 9 shows a standard process for SharePoint application builds and deployments when the build definition has been created, configured, and deployed to the team's instance of TFS.
  
    
    

**Figure 9. Build and deployment process with TFS**

  
    
    
 [![TFS build services execute the steps defined by the SharePoint application build definition.](images/ALMBuildDeployProcess.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391727) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391727)
  
    
    
The developer checks in the SharePoint application Visual Studio 2012 solution. Depending on the desired configuration (that is, continuous integration or scheduled build), TFS build services will execute the steps defined by the SharePoint application build definition. This definition, configured by developers, contains the continuous integration build process template as well as post-build instructions to execute Windows PowerShell scripts for application deployment. Note that the SharePoint Online Management Shell extensions will be required in order to deploy the application to SharePoint Online. For more information about SharePoint Online Management Shell extensions, see  [SharePoint Online Management Shell page](http://www.microsoft.com/en-us/download/details.aspx?id=35588) on the Download Center.
  
    
    
Once the build has been triggered, TFS will compile the projects associated with the SharePoint application and execute Windows PowerShell scripts to deploy the solution to the target SharePoint environment.
  
    
    

#### Trusting the SharePoint application
<a name="TrustingApp"> </a>

Following deployment of the application components to the target environments, it is important to note that before anyone accessing the application, including automated tests that may be part of the build, a tenant (or site collection) administrator will have to trust the application on the app information page in SharePoint. This requirement applies to autohosted and SharePoint-hosted apps. This manual process represents a change in the build process as tests that would typically run following the deployment to the target environment will have to be suspended until the application is trusted.
  
    
    
Note that for cloud-hosted (auto and provider) applications, developers can deploy the non-SharePoint components to the cloud-hosted infrastructure separately from the application package that is deployed to SharePoint.
  
    
    

**Figure 10. Deploying non-SharePoint components**

  
    
    
 [![As developers make changes to the solution that represents the SharePoint application, there may be circumstances where changes are made to the projects within the solution that do not apply to the SharePoint application project itself.](images/ALMChangeManagement.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391728) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391728)
  
    
    
As shown in Figure 10, when developers make changes to the solution that represents the SharePoint application, there may be circumstances where changes are made to the projects within the solution that do not apply to theSharePoint application project itself. In this circumstance, the SharePoint application project does not have to be redeployed as it has not changed. The changes associated with the cloud-hosted projects must be redeployed.
  
    
    
Changes to the application that will be deployed to infrastructure outside SharePoint can be done so separately from the application components that get deployed into the target site collection or tenant. For developers, this means that an automated build process can be created to deploy the cloud-hosted components on a frequent (triggered) basis and separately from the SharePoint application project. Thus, the manual step to approve the application's permission on the app information page in SharePoint is not required, allowing for a more continuous deployment and testing process for the build definition. The SharePoint application component of the solution would only have to be deployed in a circumstance were the items within this project changed and required redeployment.
  
    
    

### Testing
<a name="Testing"> </a>

As described in the  [build processes section](#ALMBuildProcess), application testing is a method of determining whether the compilation and deployment of the application was successful. By using testing as a means of verifying the build and deployment of the application, the team is provided with an understanding of quality, as well as a way of knowing when a recent change to the application's code has compromised the SharePoint application.
  
    
    
Figure 11 shows the types of testing approaches that are best used with SharePoint application models.
  
    
    

**Figure 11. Testing approaches**

  
    
    
 [![Coded UI tests should be leveraged against SharePoint-hosted applications where the business logic and the user experience reside in the same layer.](images/ALMTestingTypes.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391729) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391729)
  
    
    
Figure 11 suggests the use of different types of tests for testing SharePoint applications by type. Coded UI tests should be used against SharePoint-hosted applications where the business logic and the user experience reside in the same layer. While business logic can be abstracted to JavaScript libraries, a primary means of testing that logic will be through the user experience.
  
    
    
Cloud-hosted applications (that is, autohosted and provider-hosted) can use fully coded UI tests while also using unit tests for verification of the service components of the solution. This provides developer confidence in the quality of the application's hosted infrastructure implementation from a functional perspective.
  
    
    
The following sections review the considerations for coded UI tests and other test types in relation to SharePoint applications.
  
    
    

#### Client-side code and coded UI tests
<a name="CodedUITests"> </a>

For build verification testing (BVT) as well as complete system testing, coded UI tests are recommended. These tests rely on recorded actions to test not only the business logic and middle tier of the application, but the user experience as well. For SharePoint applications that use client-side code, much of the business logic's entry points and execution may exist in the user experience tier. For this reason, coded UI tests can not only test the user experience, but the business logic of the application as well. For more information about the coded UI test, see  [Verifying Code by Using UI Automation](http://msdn.microsoft.com/en-us/library/dd286726.aspx).
  
    
    
Coded UI tests can be used in SharePoint-hosted add-ins where much of the UX and the business logic may be intermixed. These tests, like others can be run from a build definition in TFS so that they can verify an application's functionality after deployment (and the application is trusted by SharePoint).
  
    
    

#### Non-coded UI tests
<a name="NonCodedUITests"> </a>

For circumstances where the application logic exists outside the application's UX layer, such as in cloud-hosted applications, a combination of coded UI tests and non-coded UI tests should be leveraged. Tests such as traditional unit tests can be used to validate the build quality of service logic that is implemented on a provider-hosted infrastructure. This provides the developer with a holistic confidence in the provider-hosted components of the solution function, and are covered from a testing point of view.
  
    
    

#### Web performance and load tests
<a name="LoadTests"> </a>

Web performance and load tests provide developers with the confidence that the application functions under expected or anticipated user loads. This testing includes determining the application's capability to concurrently handle a predictable user base that will reasonably scale over time. Both coded UI and unit tests can be the source of the web performance and load test. Using an ALM platform like TFS, these tests can be used to load test the application.
  
    
    
Note that the testing of the infrastructure is not a primary goal of these tests when using them to test SharePoint applications. The infrastructure, whether SharePoint-hosted or provider-hosted, should have a similar load and performance baseline established. The web performance and load tests for the application will highlight infrastructure challenges, but should be regarded primarily as a means to test the application's performance.
  
    
    
For more information about web performance and load tests, see  [Run performance tests on an application before a release](http://msdn.microsoft.com/en-us/library/vstudio/dn250793.aspx).
  
    
    

#### Quality and testing environments
<a name="TestingEnvironments"> </a>

Many organizations have several testing environments that may be either physical, or virtual and separate from each other. These environments can vary based on a team's ALM process, regulatory requirements or a combination of both. To determine the number and types of testing environments that teams should use, the following guidance is based on functional practices specific to SharePoint applications, but also uses ALM practices for software development at large.
  
    
    

#### Developer testing
<a name="DevTesting"> </a>

Developer testing can occur in the environment where the developers are creating their component of the solution. Multiple developers, working on different aspects or components of a larger application, will each have unit tests, coded UI tests, and the application code deployed into their development site.
  
    
    

**Figure 12. Developer testing process**

  
    
    
 [![Developers will execute tests from Visual Studio against the solution components deployed in their own Office 365 or on-premises developer site.](images/ALMDeveloperTesting.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391731) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391731)
  
    
    
Developers will execute tests from Visual Studio against the solution components deployed in their own Office 365 or on-premises developer site. For cloud-hosted applications, the tests will also be executed from Visual Studio against the solution components that reside on provider-hosted infrastructure. These components will reside in the developer's Microsoft Azure subscription.
  
    
    
Note that this approach assumes that developers either have individual Office 365 developer sites and Microsoft Azure subscriptions, which are supplied through MSDN subscriptions. Even if developers are creating applications for on-premises deployment, these developer services can be used for development and testing.
  
    
    
If developers do not have these services, or are required to do development entirely on-premises, then they will execute tests for their components against an on-premises farm's developer site collection and developer-specific, provider-hosted infrastructure. The provider-hosted infrastructure can reside in developer-dedicated virtual machines. For the development of full-trust solutions, developers would require their own virtual SharePoint farm and provider-hosted infrastructure.
  
    
    

#### Integration and systems testing
<a name="IntegrationTesting"> </a>

In order to test the application, all of the development components should be assembled and deployed in a centralized environment. This integration environment provides a place where developers can deploy and observe the components of the solution they created interacting with other solution components written by other developers.
  
    
    

**Figure 13. Integration testing environment**

  
    
    
 [![TFS will build and deploy the SharePoint application and any required components to the target environments.](images/ALMIntegrationTesting.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391732) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391732)
  
    
    
For this type of testing, the ALM platform will build and deploy the SharePoint application and any required components to the target environments. For SharePoint-hosted applications, this will either be an Office 365 site or an on-premises/IaaS SharePoint Server 2013 site collection specifically established for integration and systems testing. For SharePoint cloud-hosted applications, TFS will also deploy the components to a centralized Microsoft Azure subscription where the services will be configured specifically for integration/systems testing. TFS will then execute coded UI or unit tests against the SharePoint application, as well as any components that the solution requires on hosted infrastructure.
  
    
    

#### UAT and QA testing
<a name="UATTesting"> </a>

For user acceptance testing (UAT), organizations often have separate environments where this function is performed apart from integration and systems testing. Separating these testing environments prevents the cadence of automated continuous release and testing from interfering with UAT activities where users may be executing tests against a specified build of the application over an extended period of time.
  
    
    

**Figure 14. UAT testing**

  
    
    
 [![Users assigned to conduct acceptance testing or organizational testing resources conduct test scripts in a stable environment that is focused on a well-publicized build version of the application.](images/ALMUATTesting.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391733) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391733)
  
    
    
As shown in Figure 14, users assigned to conduct acceptance testing or organizational testing resources conduct test scripts in a stable environment that is focused on a well-publicized build of the application. While code deployment and testing continues in the integration environment, users will conduct manual testing to validate that the application meets required use or test cases. The application and any provider-hosted infrastructure will be deployed, typically by a release manager, into this testing environment. An automated deployment is possible as well. This sort of deployment uses a dedicated UAT build definition in TFS that mirrors the one that conducts deployment for the integration and systems testing environment.
  
    
    
For cloud-hosted infrastructure, deployment into a Microsoft Azure subscription that is shared with the integration and systems test environments is possible if the services are named and configured to be deployed side by side as different services or databases. This approach provides a set of services and databases in the testing Microsoft Azure subscription for integration and systems testing as well as UAT and QA testing, as shown in Figure 15.
  
    
    

**Figure 15. Integration and UAT testing**

  
    
    
 [![Deployment into a Microsoft Azure subscription that is shared with the integration/systems test environment is possible if the services are named and configured to be deployed side by side as different services or databases.](images/ALMIntegrationandUAT.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391734) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391734)
  
    
    

#### Code promotion practices
<a name="CodePromotion"> </a>

The code promotion process between the development and testing environments as well as the production environment should be done using a well-defined release management process. In Figure 16, developers conduct deployment of their solution components to development environments for unit testing.
  
    
    

**Figure 16. Release management process**

  
    
    
 [![Following a check-in to TFS, an automated build procedure will compile and deploy the solution to the target environment where build verification tests will be executed as part of the build definition in TFS.](images/ALMCodePromotion.png)
  
    
    
](http://go.microsoft.com/fwlink/?LinkId=391735) [Click to see enlargement.](http://go.microsoft.com/fwlink/?LinkId=391735)
  
    
    
Following a check-in to TFS, an automated build procedure will compile and deploy the solution to the target integration and system testing environment where build verification tests will be executed as part of the build definition in TFS. This approach includes deploying the provider-hosted components of the solution to the target environment (Microsoft Azure or on-premises environments). Note that for Microsoft Azure infrastructure, the Microsoft Azure subscription can be the same one used for both integration and system testing as well as UAT and QA assuming they are deployed to different namespaces and separate SQL databases.
  
    
    
A release manager or a separate TFS build definition, manually invoked in most cases, can deploy to the UA or TQA environment. This approach helps control the build version that users will be testing against. Release managers can pick up the builds from a TFS share and execute the deployment process themselves. From promotion to production, release management will be involved to deploy the application to the production environment and monitor its installation and build verification through tests.
  
    
    

## Application patching and upgrades
<a name="AppPatching"> </a>

Microsoft has specific guidance on how application developers can upgrade applications. The SharePoint Server 2013 platform supports the notification of new application versions to users.
  
    
    
For considerations on establishing a strategy around SharePoint application upgrades and patching, see  [Update SharePoint Add-ins](http://msdn.microsoft.com/library/3edcb33c-fa9e-4e9e-82d6-5519fd981324%28Office.15%29.aspx).
  
    
    
For changes to applications, the recommended pattern to follow is consistent with existing code development and sustained engineering patterns. This includes disciplined branching and merging for bug fixes and feature development as well as incremental deployments to target application catalogs. The preceding guidance can be used to complete changes to applications for SharePoint and deploy them to target application catalogs or the store.
  
    
    
The information in  [SharePoint Add-ins update process](http://msdn.microsoft.com/library/3dba209d-cb98-4e5d-b4b2-fad31e667ca1%28Office.15%29.aspx) provides additional tactical guidance on the techniques for updating SharePoint applications. This includes accelerating deployment testing by shortening the cycle by which application updates are reflected in the farm in test environments. Additionally, this article has guidance on how to accommodate for state within various application deployment models.
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx)
    
  
-  [Set up Team Foundation Build Service](http://msdn.microsoft.com/en-us/library/vstudio/ee259687.aspx)
    
  
-  [Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site](http://msdn.microsoft.com/library/2f65ba3f-b246-4064-b4fb-ad18399d387a%28Office.15%29.aspx)
    
  
-  [SharePoint 2013 development overview](sharepoint-development-overview.md)
    
  
-  [What is the Open Data Protocol?](http://www.odata.org/)
    
  
-  [The OAuth 2.0 authorization framework](http://oauth.net/)
    
  

  
    
    

