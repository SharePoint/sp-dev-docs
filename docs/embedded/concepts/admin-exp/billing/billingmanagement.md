

# Manage SharePoint Embedded consumption in Azure portal

1. Sign in to **[Azure Portal](https://portal.azure.com/)**.
1. Search for **Cost Management + Billing**.
1. Select **Cost Analysis** to see:

    - **Actual cost**

      ![Azure Cost Analysis - Actual Cost.](../../images/billing-1.png)

    - Select '**+ Add Filter**' to see breakdown of cost by **containertypeid** and **tenantid**
        - Select **Tag**
        - In the key-value pair, select **containertypeid** or **tenantid** and select respective **containertypeid** and **tenantid**

        ![Azure Cost Analysis - Filter by Tag.](../../images/billing-2.png)

1. Select **Billing** on the left navigation to see monthly invoices.
1. Set up **Budget alerts** on cost by following steps [here](/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending).
