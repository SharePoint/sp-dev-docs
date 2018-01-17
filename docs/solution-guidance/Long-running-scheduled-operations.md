---
title: Long-running and scheduled operations
ms.date: 01/18/2018
---
# Long-running and scheduled operations

## Summary

Use timer jobs in SharePoint to perform background tasks to manage or govern your environment, such as displaying a message on the site when certain criteria are not met, or enforcing retention policies or running scheduled processes that are processor-intensive.

## High-level guideline/general rules

- Timer jobs should be implemented outside of SharePoint.
- Scheduling timer jobs should be implemented outside of SharePoint.
- Timer jobs should authenticate via a service account or OAuth.

## Available options

### Azure WebJobs

_**Applies to:** Office 365_

In this pattern, the Azure WebJob handles the scheduling aspects associated with a timer job and includes the implementation code.+

- Does not require additional hardware to run the Azure WebJob (scheduling and implementation code).
- Advantageous because it uses the Azure WebJob for scheduling as well as the implementation code, which makes it easy to manage in one location.

#### Related resources

##### Articles

- [Remote timer jobs in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/remote-timer-jobs-sharepoint-add-in)
- [Getting Started with azure WebJobs ("timer jobs") for your Office 365 Sites](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/getting-started-with-building-azure-webjobs-for-your-office365-sites)
- [PnP remote timer job framework](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/timerjob-framework)
- [Create remote timer jobs in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/create-remote-timer-jobs-in-sharepoint)
- [Use Microsoft Azure WebJobs with Office 365](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/use-microsoft-azure-webjobs-with-office-365)
- [Transform farm solutions to the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/transform-farm-solutions-to-the-sharepoint-app-model)
- [Transforming your SharePoint customizations to add-in model - Resources](https://dev.office.com/blogs/transforming-your-sharePoint-customizations)
- [Use asynchronous operations in SharePoint Add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/use-asynchronous-operations-in-sharepoint-add-ins)
- [Azure WebJobs SDK](https://github.com/Azure/azure-webjobs-sdk/wiki)

##### Videos

- [Creating simple remote timer job](https://channel9.msdn.com/Blogs/Office-365-Dev/Simple-remote-timer-job-that-interacts-with-SharePoint-Online-Office-365-Developer-Patterns-and-Prac)
- [PnP Webcast - Provisioning with PnP PowerShell and Azure WebJobs](https://www.youtube.com/watch?v=7GrRTFSK0qc)
- [How to get SharePoint Online to add OneDrive site branding, people pickers and timer jobs](https://www.youtube.com/watch?v=jLDrRBTVVSE)

##### Solutions

- [PnP Partner Pack](https://github.com/SharePoint/PnP-Partner-Pack)

##### Samples

- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples)
- [Using Remote Event Receivers and Remote Timer Jobs (training)](https://github.com/OfficeDev/TrainingContent/tree/master/O3658/05%20Using%20Remote%20Event%20Receivers%20and%20Remote%20Timer%20Jobs)
- [External Sharing Expiration Service](https://dev.office.com/patterns-and-practices-detail/1944)
- [Sample Office 365 Application](https://dev.office.com/patterns-and-practices-detail/10980)
- [Asynchronous operations with Azure storage queues and WebJobs](https://dev.office.com/patterns-and-practices-detail/2254)
- [Content Type Enforce Retention](https://dev.office.com/patterns-and-practices-detail/2266)

### PnP Timer Job Framework

_**Applies to:** Office 365 and SharePoint Server_

The PnP Timer Job Framework is a set of classes designed to ease the creation of background processes that operate against SharePoint sites. The Timer Job Framework is similar to on-premises full trust code Timer Jobs (`SPJobDefinition`). The primary difference with between the Timer Job Framework and the full trust code Timer Job is that the Timer Job Framework only uses client side APIs and therefore can (and should) be run outside of SharePoint. The Timer Job Framework makes it possible to build Timer Jobs that operate against SharePoint Online.

#### Related resources

##### Articles

- [The Timer Job Framework](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/timerjob-framework)
- [Create remote timer jobs in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/create-remote-timer-jobs-in-sharepoint)

##### Videos

- [PnP Core Component - Remote Timer Job Framework](https://www.youtube.com/watch?v=nzL6jCv0dKQ)
- [Introduction to the PnP timer job framework](http://channel9.msdn.com/blogs/OfficeDevPnP/Introduction-to-the-PnP-timer-job-framework)
- [Creating simple remote timer job](https://channel9.msdn.com/Blogs/Office-365-Dev/Simple-remote-timer-job-that-interacts-with-SharePoint-Online-Office-365-Developer-Patterns-and-Prac)

##### Solutions

- [PnP Partner Pack](https://github.com/SharePoint/PnP-Partner-Pack)

##### Samples

- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Solutions/Core.TimerJobs.Samples)
- [Transformation Tool - CSOM](https://github.com/SharePoint/PnP-Transformation/tree/master/Transformation%20Tool%20-%20CSOM)
- [Using Remote Event Receivers and Remote Timer Jobs (training)](https://github.com/OfficeDev/TrainingContent/tree/master/O3658/05%20Using%20Remote%20Event%20Receivers%20and%20Remote%20Timer%20Jobs)

### Windows scheduled tasks

_**Applies to:** Office 365 and SharePoint Server_

In this pattern, the Windows Scheduler handles the scheduling aspects associated with a timer job. Implementation code can be a console application or a PowerShell script or any other code that the Windows Scheduler can invoke.

#### Related resources

##### Articles

- [Remote timer jobs in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/remote-timer-jobs-sharepoint-add-in)
- [Building a SharePoint App as a Timer Job (MSDN Blog)](https://blogs.msdn.microsoft.com/kaevans/2014/03/02/building-a-sharepoint-app-as-a-timer-job/)
- [PnP remote timer job framework](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/timerjob-framework)
- [Create remote timer jobs in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/create-remote-timer-jobs-in-sharepoint)
- [Transform farm solutions to the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/transform-farm-solutions-to-the-sharepoint-app-model)
- [Transforming your SharePoint customizations to add-in model - Resources](https://dev.office.com/blogs/transforming-your-sharePoint-customizations)
- [Simulate Timer Job Solution for SharePoint 2013/Online using App Model & CSOM](https://blogs.msdn.microsoft.com/shariq/2013/12/09/simulate-timer-job-solution-for-sharepoint-2013online-using-app-model-csom/)

##### Videos

- [Creating simple remote timer job](https://channel9.msdn.com/Blogs/Office-365-Dev/Simple-remote-timer-job-that-interacts-with-SharePoint-Online-Office-365-Developer-Patterns-and-Prac)

##### Samples

- [Core.SimpleTimerJob (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SimpleTimerJob) - End-to-end article about this pattern with accompanying video.
- [Using Remote Event Receivers and Remote Timer Jobs (training)](https://github.com/OfficeDev/TrainingContent/tree/master/O3658/05%20Using%20Remote%20Event%20Receivers%20and%20Remote%20Timer%20Jobs)
- [Moving Full Trust Code to the Cloud](https://github.com/OfficeDev/TrainingContent/blob/master/O3651/O3651-4%20Moving%20Full%20Trust%20Code%20to%20the%20cloud%20using%20repeatable%20patterns%20and%20best%20practices/Lab.md)

### SharePoint TimerJobs

_**Applies to:** SharePoint Server_

A timer job is a trigger to start to run a specific Windows service for one of the Microsoft SharePoint Products and Technologies. It contains a definition of the service to run and specifies how frequently the service should be started. The Windows SharePoint Services Timer service (SPTimer) runs timer jobs. Many features in SharePoint Products and Technologies rely on timer jobs to run services according to a schedule.

#### Related resources

##### Articles

- [Transform farm solutions to the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/transform-farm-solutions-to-the-sharepoint-app-model)
- [How to: Run Code on All Web Servers](https://msdn.microsoft.com/library/1bbb11b4-a342-4bed-9e7a-b8b13edd0ccc(Office.15).aspx)

##### Samples

- [Transformation Tool - CSOM](https://github.com/SharePoint/PnP-Transformation/tree/master/Transformation%20Tool%20-%20CSOM)
- [Moving Full Trust Code to the Cloud](https://github.com/OfficeDev/TrainingContent/blob/master/O3651/O3651-4%20Moving%20Full%20Trust%20Code%20to%20the%20cloud%20using%20repeatable%20patterns%20and%20best%20practices/Lab.md)