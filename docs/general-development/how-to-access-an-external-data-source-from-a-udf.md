---
title: How to Access an External Data Source from a UDF
keywords: how to,howdoi,howto,UDF
f1_keywords:
- how to,howdoi,howto,UDF
ms.prod: OFFICE365
ms.assetid: 7a1876da-aeb5-4017-8eb6-3fed47912f70
---


# How to: Access an External Data Source from a UDF

This example shows how to access an external database from a user-defined function (UDF). 
  
    
    


## Example


```cs

using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Office.Excel.Server.Udf;
using System.Data.SqlClient;
using System.Web;
using System.Security.Principal;

namespace DatabaseAccessUdfTest1
{
    [UdfClass]
    public class
    {
        [UdfMethod(IsVolatile=true)]
        public string GetRowCount()
        {
            try
            {
                SqlConnection sqlConnection = new SqlConnection
                   ("Data Source=myDatabaseServer002;Initial 
                   Catalog=northwind;Integrated Security=SSPI;");
                SqlCommand sqlCommand = new SqlCommand("SELECT COUNT(*) 
                    FROM Customers", sqlConnection);
                sqlConnection.Open();
                string rowCount = (string)sqlCommand.ExecuteScalar();
                sqlConnection.Close();
                return (rowCount);
            }
            catch (Exception e)
            {
                return (e.ToString());
            }
        }

        [UdfMethod(IsVolatile=true)]
        public string GetSqlUserName()
        {
            try
            {
                SqlConnection sqlConnection = new SqlConnection("Data 
                    Source= myDatabaseServer003;Initial 
                    Catalog=northwind;Integrated Security=SSPI;");
                SqlCommand sqlCommand = new SqlCommand("SELECT 
                    CURRENT_USER", sqlConnection);

                sqlConnection.Open();
                string userName = (string)sqlCommand.ExecuteScalar();
                sqlConnection.Close();
                return (userName);
            }
            catch (Exception e)
            {
                return (e.ToString());
            }
        }

        [UdfMethod(ReturnsPersonalInformation=true)]
        public string GetUserName()
        {
            return 
              (System.Threading.Thread.CurrentPrincipal.Identity.Name);
        }

        [UdfMethod(ReturnsPersonalInformation=true)]
        public string GetUserAuthenticationType()
        {
            return 
(System.Threading.Thread.CurrentPrincipal.Identity.AuthenticationType);
        }
    }
}
```


```VB.net

Imports System
Imports System.Collections.Generic
Imports System.Text
Imports Microsoft.Office.Excel.Server.Udf
Imports System.Data.SqlClient
Imports System.Web
Imports System.Security.Principal

Namespace DatabaseAccessUdfTest1
    <UdfClass> _
    Public Class
        <UdfMethod(IsVolatile:=True)> _
        Public Function GetRowCount() As String
            Try
                Dim sqlConnection As New SqlConnection("Data Source=myDatabaseServer002;Initial Catalog=northwind;Integrated Security=SSPI;")
                Dim sqlCommand As New SqlCommand("SELECT COUNT(*) FROM Customers", sqlConnection)
                sqlConnection.Open()
                Dim rowCount As String = CStr(sqlCommand.ExecuteScalar())
                sqlConnection.Close()
                Return (rowCount)
            Catch e As Exception
                Return (e.ToString())
            End Try
        End Function

        <UdfMethod(IsVolatile:=True)> _
        Public Function GetSqlUserName() As String
            Try
                Dim sqlConnection As New SqlConnection("Data Source= myDatabaseServer003;Initial Catalog=northwind;Integrated Security=SSPI;")
                Dim sqlCommand As New SqlCommand("SELECT CURRENT_USER", sqlConnection)

                sqlConnection.Open()
                Dim userName As String = CStr(sqlCommand.ExecuteScalar())
                sqlConnection.Close()
                Return (userName)
            Catch e As Exception
                Return (e.ToString())
            End Try
        End Function

        <UdfMethod(ReturnsPersonalInformation:=True)> _
        Public Function GetUserName() As String
            Return (System.Threading.Thread.CurrentPrincipal.Identity.Name)
        End Function

        <UdfMethod(ReturnsPersonalInformation:=True)> _
        Public Function GetUserAuthenticationType() As String
            Return (System.Threading.Thread.CurrentPrincipal.Identity.AuthenticationType)
        End Function
    End Class
End Namespace
```


## See also


#### Tasks


  
    
    
 [How to: Create a UDF That Calls a Web Service](how-to-create-a-udf-that-calls-a-web-service)
  
    
    
 [How to: Trust a Location](how-to-trust-a-location)
  
    
    
 [How to: Catch Exceptions](how-to-catch-exceptions)
  
    
    
 [How to: Enable UDFs](how-to-enable-udfs)
#### Concepts


  
    
    
 [Walkthrough: Developing a Managed-Code UDF](walkthrough-developing-a-managed-code-udf)
  
    
    
 [Frequently Asked Questions About Excel Services UDFs](frequently-asked-questions-about-excel-services-udfs)
  
    
    
 [Excel Services Architecture](excel-services-architecture)
  
    
    
 [Excel Services Alerts](excel-services-alerts)
  
    
    
 [Excel Services Known Issues and Tips](excel-services-known-issues-and-tips)
  
    
    
 [Excel Services Best Practices](excel-services-best-practices)
