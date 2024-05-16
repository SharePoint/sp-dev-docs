# SharePoint Embedded Meters
SharePoint Embedded uses pay-as-you-go (PAYG) billing through an Azure subscription. Billing is determined by how much data in GB you store in SharePoint Embedded, transactions used to modify and data that is egressed while using application built on SharePoint Embedded. Company will be able to view this usage as meter events through the Azure subscription it chooses. 
SharePoint Embedded Feature Preview pricing is as follows:

| SharePoint Embedded Service Meters   |  Meter Unit   |
| :--------------------------------:   | :----------:   |
|              Storage                 |   GB/Day     |
|   Graph API Transactions             | 1 API call    |
|           Egress                     |     GB        |
## Storage
Storage consumption meter charges for storage consumed on SharePoint Embedded containers. The storage pricing in SharePoint is calculated per gigabyte (GB) per month, averaged daily. This means that the storage usage is measured daily, and the total storage cost for the month is calculated as the sum of the daily average of storage usage. 

Here are some scenarios to depict how the storage meters calculation work

Storage Scenario   |  Meter Decision   |
| :--------------------------------:   | :----------:   |
|User uploads 10GB file on 1st day of the month and do not upload or delete any files. What will be the usage on the 10th day?|On 10th of the month, consumption meter should show charges as 10GB (size)* 10 (days)     
|User uploads 10GB in the container on 1st day of the month and then deletes the 10GB on 2nd day of the month and keeps the container empty for rest of the month           |On the last day of the month,storage consumption should record it as 10GB on 1st day and then charge for 0GB storage for rest of the days of the month |

## API Transactions 
Graph API calls that the SharePoint Embedded application explicitly makes towards containers or container content are counted as a transaction, and customers are charged based on the number of transactions they make. Any calls that internal services make to the containers, like ediscovery search, are not chargeable.

## Egress
Egress refers to the data transferred out of the SharePoint Embedded platform to external destinations. Egress is data (bytes) leaving the SharePoint Embedded application server to the users desktop or mobile client. Egress charges are associated with the actual data transfer, i.e., the content of files or media being moved from a server to a user's client. Therefore, the following are eligible for egress charge: 
1.	Downloading files from SharePoint Embedded app to customer’s client. 
2.	Downloading video from SharePoint Embedded app to customer’s client.

Please note 
1. file download from SharePoint Embedded application server to the customer's Office Desktop client is NOT charged.
2. file download from the SharePoint Embedded application server to WAC is NOT charged.
