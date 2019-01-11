---
title: SPO provided Migration Azure container and queue
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.date: 6/20/2018
description: "One of the Main requirement for using our Migration API is the usage of an Azure container as a temporary storage. We now provide a default container that can be used for using the migration API."
localization_priority: Normal
---

# SPO provided Migration Azure container and queue

Microsoft’s Migration API requires the use of an Azure container for temporary storage. To simplify the process, you are now provided with a default container while using the migration API. If you choose, you can still provide your own Azure container.

## Encryption is required

For the Migration API to accept a Migration Job coming from a SPO provided Azure container, the data needs to be encrypted at rest. The customer is still allowed to provide their own Azure account if they prefer to not use encryption.

##  Advantages

|Advantage|Description|
|:-----|:-----|
|Cost of Azure container goes to SPO|Since we are providing the containers, those containers are now part of the basic SharePoint online Offering. Every tenant who signs up for SharePoint Online will get this for free).|
|Containers and queues are unique per request and not reused|Once a container is given to a customer this container will not be reused or shared.|
|Containers and queue are automatically deleted|As per the standard SharePoint Online Compliance, we will destroy the container within 30 to 90 days automatically.|
|Containers and queues are in the customer’s datacenter location|We make sure to provision containers that are in the same physical location than their SharePoint online tenant.| 
|They are obtainable programmatically|There is no need to interact with Azure unless the user chooses.

## How to use it

### Getting Containers

```csharp
    public SPProvisionedMigrationContainersInfo ProvisionMigrationContainers()
```

The call will return an object that contains two strings containing two SAS tokens for accessing the two required containers and a byte array for the AES256CBC encryption. 

This key will need to be used when encrypting the data. We forget the key once we give it out, therefore you must keep it to pass it again for the Submit Migration Job call.

```csharp
    Uri DataContainerUri 

    Uri MetadataContainer Uri

    byte[] EncryptionKey 
```

### Getting Queue

```csharp
    public SPProvisionedMigrationQueueInfo ProvisionMigrationQueue()
```

This method will return a string containing the SAS token for accessing the Azure queue.

The queue can be reused across multiple migration jobs so this call should not be that frequently as the `SPProvisionedMigrationContainersInfo()` call.

```csharp
    Uri JobQueueUri
```

### After getting the Container and the Queue:

Once those calls have been made, the rest of the flow remains the same for using the Migration API.
