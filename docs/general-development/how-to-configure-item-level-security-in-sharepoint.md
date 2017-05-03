---
title: How to Configure item-level security in SharePoint
ms.prod: SHAREPOINT
ms.assetid: ffd730f2-e7b7-4707-b677-d073da7df7d7
---


# How to: Configure item-level security in SharePoint
Learn how to configure item level security when crawling external data with BCS indexing connectors in SharePoint.
## External systems with NTLM authentication
<a name="ItemLevelSecurity_NTLMAuth"> </a>

For external systems that support NTLM authentication, the security descriptor can be obtained for each instance of the external content type at crawl time and stored in the content index. During query time, the security descriptor of the user who is submitting the search query is compared to the stored security descriptor to determine whether the user has access to the item. This is the fastest way to perform security trimming on the result set. The metadata model for the external system must indicate where the security descriptor can be found as an external content type field or method.
  
    
    

### External content type field
<a name="ItemLevelSecurity_ExtTypeField"> </a>

Microsoft SharePoint stores the security descriptor if the field of the external content type that contains the descriptor is marked by using the **WindowsSecurityDescriptorField** property, as shown in the following example.
  
    
    

```XML

<Method Name="Item SpecificFinder ">
  <Properties>
    <Property Name="RdbCommandType" Type="System.Data.CommandType, System.Data, 
 Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089">Text</Property>
    <Property Name="RdbCommandText" Type="System.String">SELECT [Identifier] , 
 [SecurityDescriptor] FROM [Test].[dbo].[Items] WHERE [Identifier] = @Identifier</Property>
    <Property Name="BackEndObjectType" Type="System.String">SqlServerTable</Property>
    <Property Name="BackEndObject" Type="System.String">Items</Property>
    <Property Name="Schema" Type="System.String">dbo</Property>
  </Properties>
  <Parameters>
    <Parameter Direction="In" Name="@Identifier">
      <TypeDescriptor TypeName="System.Int32" IdentifierName="Identifier" Name="Identifier" />
    </Parameter>
    <Parameter Direction="Return" Name="BaseItemsRead Item">
      <TypeDescriptor TypeName="System.Data.IDataReader, System.Data, Version=2.0.0.0, 
Culture=neutral, PublicKeyToken=b77a5c561934e089" IsCollection="true" Name="BaseItemsRead Item">
        <TypeDescriptors>
          <TypeDescriptor TypeName="System.Data.IDataRecord, System.Data, Version=2.0.0.0, 
Culture=neutral, PublicKeyToken=b77a5c561934e089" Name="BaseItemsRead ItemElement">
          <TypeDescriptors>
            <TypeDescriptor TypeName="System.Int32" IdentifierName="Identifier" Name="Identifier"/>
            <TypeDescriptor TypeName="System.Byte[], mscorlib, Version=2.0.0.0, 
Culture=neutral, PublicKeyToken=b77a5c561934e089" IsCollection="true" Name="SecurityDescriptor">
              <TypeDescriptors>
                <TypeDescriptor TypeName="System.Byte" Name="SecurityDescriptorElement" />
              </TypeDescriptors>
            </TypeDescriptor>
            </TypeDescriptors>
          </TypeDescriptor>
          </TypeDescriptors>
        </TypeDescriptor>
      </Parameter>
    </Parameters>
    <MethodInstances>
      <MethodInstance Type="SpecificFinder" ReturnParameterName="BaseItemsRead Item"
 ReturnTypeDescriptorName="BaseItemsRead ItemElement" Name="BaseItemsRead Item"
DefaultDisplayName="ReadSecurity">
        <Properties>
          <Property Name="WindowsSecurityDescriptorField" Type="System.String">
                SecurityDescriptor
          </Property>
        </Properties>
      </MethodInstance>
    </MethodInstances>
</Method>
```


> **Note:**
> If you return the security descriptor as a field of the external content type, you cannot use client caching. This is because cached items are limited to a specific size, which access control lists (ACL) can easily exceed. Therefore, the Search connector framework ignores requests to cache items if they contain a security descriptor field. 
  
    
    


### External content type method
<a name="ItemLevelSecurity_ExtTypeMethod"> </a>

If you have a method defined in the metadata model that returns the security descriptor for an item based on its identifier, you can use the **BinarySecurityDescriptorAccessor** method stereotype, as shown in the following example.
  
    
    

```XML

<Method Name="GetItemSecurity" LobName="GetItemSecurity">
  <Parameters>
    <Parameter Name="itemId" Direction="In">
      <TypeDescriptor Name="itemId" TypeName="System.Int32, mscorlib, 
Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" 
IdentifierEntityNamespace="MS.Internal.Test.Automation.Search.Scater" 
IdentifierEntityName="Item" IdentifierName="ItemId" /> 
    </Parameter>
    <Parameter Name="Return" Direction="Return">
      <TypeDescriptor Name="SecurityDescriptor" TypeName="System.Byte[],
mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" 
IsCollection="true">
        <TypeDescriptors>
          <TypeDescriptor Name="Item" TypeName="System.Byte, mscorlib, 
Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" />
        </TypeDescriptors>
      </TypeDescriptor>
    </Parameter>
  </Parameters>
  <MethodInstances>
    <MethodInstance Name="GetItemSecurity_Instance" Type="BinarySecurityDescriptorAccessor"
 ReturnParameterName="Return" ReturnTypeDescriptorName="SecurityDescriptor" 
ReturnTypeDescriptorLevel="0">
      <Properties>
        <Property Name="WindowsSecurityDescriptorField" Type="System.String">
            SecurityDescriptor
        </Property>
      </Properties>
      <AccessControlList>
        <AccessControlEntry Principal="NT AUTHORITY\\Authenticated Users">
          <Right BdcRight="Execute" />
        </AccessControlEntry>
      </AccessControlList>
    </MethodInstance>
  </MethodInstances>
</Method>
```

The following code is the method signature for the method that is specified in the previous example.
  
    
    



```cs

Public static Byte[]GetItemSecurity (string  id)
{

}
```


## External systems with authentication schemes that can be mapped to NTLM authentication
<a name="ItemLevelSecurity_MappedToNTLM"> </a>

If the external system does not support NTLM authentication, but the external system users can be mapped to Windows users by using a mapping table, you can use the approach described in the previous two code examples to provide item level security. For this to work, the web service or Windows Communication Foundation (WCF) service exposed by the external system must include a method that converts the external system users to Windows users internally, and then returns a Windows security descriptor for each URL. The following example shows how you could code this method. 
  
    
    

```cs

/// Returns the security descriptor for a user.
/// </summary>
/// <param name="domain"></param>
/// <param name="username"></param>
/// <returns></returns>

private Byte[] GetSecurityDescriptor(string domain, string username)
{
   NTAccount acc = new NTAccount(domain, username);
   SecurityIdentifier sid = (SecurityIdentifier)acc.Translate(typeof(SecurityIdentifier));
   CommonSecurityDescriptor sd = new CommonSecurityDescriptor(false, false, ControlFlags.None,
sid, null, null, null);
   sd.SetDiscretionaryAclProtection(true, false);

//Deny access to all users.
   SecurityIdentifier everyone = new SecurityIdentifier(WellKnownSidType.WorldSid, null);
   sd.DiscretionaryAcl.RemoveAccess(AccessControlType.Allow, everyone, 
unchecked((int)0xffffffffL), InheritanceFlags.None, PropagationFlags.None);

//Grant full access to a specified user.
   sd.DiscretionaryAcl.AddAccess(AccessControlType.Allow, sid, 
unchecked((int)0xffffffffL), InheritanceFlags.None, PropagationFlags.None);
 
   byte[] secDes = new Byte[sd.BinaryLength];
   sd.GetBinaryForm(secDes, 0);

   return secDes;
}
```


## Additional resources
<a name="SP15Itemlevelsec_addlresources"> </a>


-  [Search connector framework in SharePoint](search-connector-framework-in-sharepoint.md)
    
  
-  [Implementing a BinarySecurityDescriptorAccessor](http://msdn.microsoft.com/library/6cf70490-dd3c-49cd-bb13-ed33e938435d%28Office.15%29.aspx)
    
  
-  [Enhancing the BDC model file for Search in SharePoint](enhancing-the-bdc-model-file-for-search-in-sharepoint.md)
    
  

