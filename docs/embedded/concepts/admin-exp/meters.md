# SharePoint Embedded Meters
SharePoint Embedded uses pay-as-you-go (PAYG) billing through an Azure subscription. Billing is determined by how much data in GB you store in SharePoint Embedded, transactions used to modify and data that is egressed while using application built on SharePoint Embedded. Company will be able to view this usage as meter events through the Azure subscription it chooses. 

# Meter Description
## Storage
Storage consumption meter charges for storage consumed on SharePoint Embedded containers. The storage pricing in SharePoint is calculated per gigabyte (GB) per month, averaged daily. This means that the storage usage is measured daily, and the total storage cost for the month is calculated based on the average daily storage usage.
## API Transactions 
Foo offers a powerful API that allows customers to interact with the platform programmatically. Each API call is counted as a transaction, and customers are charged based on the number of transactions they make. This pricing model encourages efficient use of the API and rewards customers who optimize their workflows.
## Egress
Egress refers to the data transferred out of the Foo platform to external destinations. Customers are charged based on the volume of data egressed from Foo. In SPE context, egress is data (bytes) leaving the SharePoint Embedded application server to the consuming tenant users’ desktop or mobile client. Egress charges are associated with the actual data transfer, i.e., the content of files or media being moved from a server to a user's client. Therefore, the following are eligible for egress charge: 
1.	Downloading files from third party SPE app to costumer’s client. 
2.	Downloading video from third party SPE app to customer’s client. 
