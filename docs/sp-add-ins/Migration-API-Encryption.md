---
title: "OneDrive for Business and SharePoint Online Migration API – Encryption"
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.date: 5/150/2018
ms.audience: ITPro
ms.topic: article
ms.prod: sharepoint-server-itpro
localization_priority: Priority
ms.collection: 
- IT_Sharepoint_Server_Top
ms.custom: 
ms.assetid: 
description: "How to pass encrypted content at rest to the API securely."
---
# OneDrive for Business and SharePoint Online Migration API encryption

Using the Migration API requires a temporary storage container in Azure. This Azure container is already only openable by someone having a SAS key access to the container. The gGoal of this feature is to allow to pass eEncrypted content at rest to the API meaning that even if a malicious user has access to the Container he won’t be able to use its content.

## What is stored in the Azure blob container
The Migration API requires the Azure Container for content passing and also for log and queue reporting back. It can be split down as a summary into those buckets:<br><bR>
Content
- Files
- Manifest
    - Metadata
    - Permissions
    - List items
    - Taxonomy
    - Logs (created by SharePoint Online to report back on the migration results)
- Queue
    - Real time reportig on the progress

## What is the encryption feature?
When using the encryption parameter, everything listed above will be encrypted at rest and the key will need to be preserved in order to read the logs and the real time progress. 
The main benefits is making the content useless for a malicious user who would manage to breach into the Azure container. This comes with a small cost of performance. This feature is optional when using the API and it is recommended to only use it for the most confidential information since it does reduce the speed of the migration by a small portion. Microsoft destroys the key once the migration job is finished and there is no way to recover the key if lost, not even from support. 

## As a 3rd party developer how do I take advantage of the Encryption feature?
### Calling the API
The method for calling the Migration Job has a different name and an additional parameter at the end. The new name is: 
- CreateMigrationJobEncrypted <br>

The new parameter is: 

    EncryptionOption

For now, it only supports receiving an AES256CBC Encryption Key.

Example:

```csharp
[ClientNS.ClientCallableMethod]
        public Guid CreateMigrationJobEncrypted(
            Guid gWebId,
            string azureContainerSourceUri,
            string azureContainerManifestUri,
            string azureQueueReportUri,
            EncryptionOption AES256CBCKey)
```

## Extra requirement
For the encryption, each file must be encrypted and have an IV assigned to it. The encryption method should follow the AES CBC 256 Standard. The IV should be different for every file including the manifests in the package and should be stored as a property on each files. 

Name = [IV] <br>
Value = [Base64encoded byte array of the IV] <br>

## Reading the queue when encrypted
When using the encryption option, the messages in the queue will also get encrypted.<br>

It is important to remember the Job ID. Without the specific key used for the job, you won’t be able to read the message back.

Here is the JSON content in the queue message
```json
{"Label", "Encrypted"},
{"JobId", "[JobId value]"},
{"IV", ”[IV value in base64format]”},     
{"Content", “[encrypted message in base64string]”}  
```

Once the messages are decrypted, they will be the same as the API without encryption.
