---
title: Overview of the SharePoint mobile object model
ms.prod: SHAREPOINT
ms.assetid: 72319846-d02d-49e7-b830-48eb8f5715cb
---


# Overview of the SharePoint mobile object model
Learn about the new public classes in the SharePoint server object model and Silverlight client object model that are used to develop integrated solutions for SharePoint and Windows Phone 7.5.
## Client object model for mobile Silverlight
<a name="SP15OM_ClientOM"> </a>

All classes in this section are in the **Microsoft.SharePoint.Client** namespace. In addition to the APIs in this section, most of the classes and members in the section Server Object Model for SharePoint Mobility are also callable in the client object model. For classes that begin with "SP", the client object model name has the "SP" removed. In other cases, the client object model name is specified. Member names are the same in the client object model except where specified otherwise.
  
    
    

### AlternateUrl class

Represents an alternative URL for a web application and the zone to which it applies.
  
    
    

```cs

public class AlternateUrl
```


#### Properties

 **Uri** (read-only)
  
    
    
Gets the URI of the alternate URL.
  
    
    



```cs
public String Uri
```

 **UrlZone** (read-only)
  
    
    
Gets the zone of the alternate URL.
  
    
    



```
public UrlZone UrlZone
```

The UrlZone class is the client object model version of the SPUrlZone class in the server object model. For more information about it, see the  [SharePoint 2010 Software Development Kit (SDK)](http://msdn.microsoft.com/en-us/library/ee557253.aspx).
  
    
    

### AuthenticationCompletedEventArgs class

Provides data about an **AuthenticationCompleted** event.
  
    
    

```cs
public sealed class AuthenticationCompletedEventArgs : AsyncCompletedEventArgs

```


#### Constructors

Initializes a new instance of the AuthenticationCompletedEventArgs class.
  
    
    

```cs

public AuthenticationCompletedEventArgs(Exception error, bool canceled, HttpStatusCode userState)
```

 **Parameters**
  
    
    

-  _error_ is the Exception object if there was an exception thrown in the authentication attempt.
    
  
-  _canceled_ is true if the authentication attempt was canceled before it could succeed or fail.
    
  
-  _userState_ is the HttpStatusCode returned by the server.
    
  

#### Properties

 **HttpStatusCode** (read-only)
  
    
    
Gets the status returned by the server after an authentication attempt.
  
    
    



```cs
public HttpStatusCode HttpStatusCode
```


### AuthenticationStatus enum

Specifies the current state of an authentication attempt.
  
    
    

- **NotStarted**
    
  
- **InProgress**
    
  
- **CompletedSuccess**
    
  
- **CompletedException**
    
  

### Authenticator class

Provides methods for authenticating a user on a SharePoint website.
  
    
    

```
public class Authenticator : ICredentials
```


#### Constructors

Initializes a new instance of the class.
  
    
    

```cs
public Authenticator()

public Authenticator(Uri uagServerUrl)
```

 **Parameters**
  
    
    
 _uagServerUrl_ is the absolute URL of a United Access Gateway (UAG) server.
  
    
    



```cs

public Authenticator(string userName, string password)
```

 **Parameters**
  
    
    
 _userName_ is the name for the credentials.
  
    
    
 _password_ is the password for the credentials.
  
    
    



```cs
public Authenticator(string userName, string password, string domain)
```

 **Parameters**
  
    
    
 _userName_ is the name for the credentials.
  
    
    
 _password_ is the password for the credentials.
  
    
    
 _domain_ is the name of the domain or computer where the credentials are verified, typically the domain of the current user.
  
    
    



```cs
public Authenticator(string userName, string password, Uri uagServerUrl)
```

 **Parameters**
  
    
    
 _userName_ is the name for the credentials.
  
    
    
 _password_ is the password for the credentials.
  
    
    
 _uagServerUrl_ is the absolute URL of a United Access Gateway (UAG) server.
  
    
    



```cs
public Authenticator(string userName, string password, string domain, Uri uagServerUrl)
```

 **Parameters**
  
    
    
 _userName_ is the name for the credentials.
  
    
    
 _password_ is the password for the credentials.
  
    
    
 _domain_ is the name of the domain or computer where the credentials are verified, typically the domain of the current user.
  
    
    
 _uagServerUrl_ is the absolute URL of a United Access Gateway (UAG) server.
  
    
    

#### Methods

 **ClearAllApplicationSettings**
  
    
    
Clears all cookies, credentials, and UAG settings from the cache.
  
    
    



```cs
public static void ClearAllApplicationSettings
```

 **ClearAllCookies**
  
    
    
Clears all stored cookies and sets the **Status** property of all **Authenticator** objects to **NotStarted**.
  
    
    



```cs
public static void ClearAllCookies()
```

 **ClearAllCredentials**
  
    
    
Clears all credentials from the cache and sets the **Status** property of all **Authenticator** objects to **NotStarted**.
  
    
    



```cs
public static void ClearAllCredentials()
```

 **GetCredential**
  
    
    
Gets a credential object for the specified uri and authentication type.
  
    
    



```
public NetworkCredential GetCredential(Uri uri, string authType)
```

 **Parameters**
  
    
    

-  _uri_ is the URI, including port, for which the client is providing authentication.
    
  
-  _authType_ is the type of authentication requested.
    
  
This method is only used for anonymous authentication. If  _authType_ is not "Basic", an empty object is returned. For more information about the **NetworkCredential** class, see [NetworkCredential Class](http://msdn.microsoft.com/en-us/library/system.net.networkcredential.aspx).
  
    
    
 **IsRequestUnauthorized**
  
    
    
Returns true if the authorization request failed because of an invalid cookie or credentials.
  
    
    



```cs
public static bool IsRequestUnauthorized(ClientRequestFailedEventArgs failedEventArgs)
```


#### Properties

 **AllowSmartRouting**
  
    
    
Gets or sets an indicator of whether smart routing is enabled.
  
    
    



```
public bool AllowSmartRouting
```

When smart routing is enabled, the **Authenticator** object tries to connect to the server that is running SharePoint and the UAG server and uses whichever responds first as its communication channel. If there is no UAG server, this property is ignored. The default is **true**. If set to **false**, the UAG server is always used.
  
    
    
 **AuthenticatorMode**
  
    
    
Gets or sets the authentication mode.
  
    
    



```cs
public ClientAuthenticationMode AuthenticationMode
```

For more information about the **ClientAuthenticationMode** enum, see later in this document.
  
    
    
 **CookieCachingEnabled**
  
    
    
Gets or sets an indicator of whether cookies are cached.
  
    
    



```
public bool CookieCachingEnabled
```

If you enable caching of cookies, consider that the cookies expire at some point. If they are expired when **ExecuteQueryAsync** is called, then it fails and the callback for failure runs. Accordingly, if you set this property to true, you must add code to the callback for failure that clears the cache if this happens. Here is an example, where `execQueryArgs` is of the type **ClientRequestFailedEventArgs** passed in the failure callback of **ExecuteQueryAsync**.
  
    
    



```cs
if (Authenticator.IsRequestUnauthorized(execQueryArgs))
{
    (sender as Authenticator).ClearCookies();
}
```

 **CredentialCachingEnabled**
  
    
    
Gets or sets an indicator of whether credentials are cached.
  
    
    



```cs

public bool CredentialCachingEnabled
```

 **Domain**
  
    
    
Gets or sets the domain or computer for the credential, usually this is the domain of the current user.
  
    
    



```cs
public string Domain
```

When this property is set to a new value, the **Status** property is set to NotStarted.
  
    
    
 **NavigateBackAfterAuthentication**
  
    
    
Gets or sets a indicator of whether the user should be navigated back to the previous page from the login page.
  
    
    



```cs
public bool NavigateBackAfterAuthentication
```

 **Password**
  
    
    
Gets or sets the password for the credential.
  
    
    



```cs
public string Password
```

When this property is set to a new value, the **Status** property is set to **NotStarted**.
  
    
    
 **PromptOnFailure**
  
    
    
Gets or sets an indicator of whether the user should be prompted to enter a name and password if initial authentication fails.
  
    
    



```cs
public bool PromptOnFailure
```

 **Status** (read-only)
  
    
    
Gets the status of the attempt to authenticate.
  
    
    



```cs
public AuthenticationStatus Status
```

See earlier in this document for information about the **AuthenticationStatus** class.
  
    
    
 **UagServerUrl**
  
    
    
Gets or sets the URL of the UAG server.
  
    
    



```cs
public Uri UagServerUrl
```

 **UserName**
  
    
    
Gets or sets the user name for the credential.
  
    
    



```cs
public string UserName
```

When this property is set to a new value, the **Status** property is set to **NotStarted**.
  
    
    

#### Events

 **AuthenticationCompleted**
  
    
    
Raised when the authentication attempt is completed, regardless of whether it succeeded.
  
    
    



```cs
public event EventHandler<AuthenticationCompletedEventArgs> AuthenticationCompleted;
```


### ClientAuthenticationMode enum

Specifies an authentication mode for an **Authenticator** object. This is an existing enum to which a new value, **BrowserBasedAuthentication** has been added.
  
    
    


|**Default**||
|:-----|:-----|
|**FormsAuthentication** <br/> |Represents forms-based authentication mode  <br/> |
|**Anonymous** <br/> |Represents anonymous access mode  <br/> |
|**BrowserBasedAuthentication** <br/> |Represents Microsoft Office Forms Based Authentication (MSOFBA) mode  <br/> |
   

### ODataAuthenticator class

Provides methods for authenticating a user on a SharePoint website.
  
    
    

```cs
public class ODataAuthenticator : Authenticator
```


#### Constructors

The constructors are identical to the parent class constructors. For more information, see Authenticator Class earlier in this document.
  
    
    

#### Methods

 **Authenticate**
  
    
    
Authenticates a user to the specified website.
  
    
    



```cs
public new void Authenticate(Uri serverUrl)
```

The  `new` keyword is used because the parent class has an internal method of the same name.
  
    
    

#### Properties

 **CookieContainer** (read-only)
  
    
    
Gets a container with the cookies for requests to the website.
  
    
    



```cs
public new CookieContainer CookieContainer
```

The  `new` keyword is used because the parent class has an internal method of the same name.
  
    
    
 **ResolvedUrl** (read-only)
  
    
    
Gets the URL that is used for communication to the server that is running SharePoint when an **ODataAuthenticator** is being used. This may be the URL published on the UAG server or, if the **AllowSmartRouting** property is true, this may be the SharePoint intranet URL if it is reached first when the **Authenticate** method is called.
  
    
    



```cs
public Uri ResolvedUrl
```


### ServerSettings class

Provides a method for getting the Alternate URLs of the web application that contains a website.
  
    
    

```cs
public static class ServerSettings
```


#### Methods

 **GetAlternateUrls**
  
    
    
Gets the alternate URLs of the specified website.
  
    
    



```cs
public static ClientObjectList<AlternateUrl> GetAlternateUrls(ClientRuntimeContext context)
```

 **Parameters**
  
    
    
 _context_ is the an object that represents the current client context.
  
    
    
See earlier in this document for information about the **AlternateUrl** class.
  
    
    

## Server object model for SharePoint mobility
<a name="SP15OM_ServerOM"> </a>

All classes in this section are in the **Microsoft.SharePoint** namespace. Except where specified, these are all available also in the client object model. For classes that begin with "SP", the client object model name has the "SP" removed. In other cases, the client object model name is specified. Member names are the same in the client object model except where specified otherwise.
  
    
    

### GeolocationFieldControl class

(Not available in client object model.) 
  
    
    
Governs the rendering of **SPFieldGeolocation** fields. An object of this type is used as the value of the **FieldRenderingControl** property of a **SPFieldGeolocation** object.
  
    
    



```cs
public class GeolocationFieldControl : BaseFieldControl
```

In connection with this class, note also that there are two rendering templates, one for Display mode and one for New and Edit mode. They are defined in the file %SHAREPOINTROOT%\\TEMPLATE\\ControlTemplates\\DefaultTemplates.ascx.
  
    
    

#### Fields

The following are used to render the field in the New and Edit modes.
  
    
    

```cs
protected TextBox m_latitudeBox;
protected TextBox m_longitudeBox;
protected Label m_longitudeLabel;
protected Label m_latitudeLabel;
```


#### Methods

No non-derived public properties are introduced with this class. There are standard overrides of some derived methods as indicated in the following table.
  
    
    


|**Method**|**This override???**|
|:-----|:-----|
|CreateChildControls  <br/> |Creates the child controls including a JavaScript map control for Display mode.  <br/> |
|Focus  <br/> |Gives focus to the longitude textbox child control.  <br/> |
|OnPreRender  <br/> |Calls the base method.  <br/> |
|Validate  <br/> |Validates the latitude and longitude values that appear in the user interface (UI). This does not validate the **Longitude** and **Latitude** properties of the underlying **SPFieldGeolocatonValue** object, which will differ if the user has changed one or more of these values in the UI and not yet saved the changes. <br/> |
   

#### Properties

No non-derived public properties are introduced with this class. There are standard overrides of some derived properties as indicated in the following table.
  
    
    


|**Property**|**This override...**|
|:-----|:-----|
|CssClass  <br/> |Behaves just like the parent implementation.  <br/> |
|DefaultTemplateName  <br/> |Returns "GeolocationField"  <br/> |
|DisplayTemplateName  <br/> |Returns "GeolocationDisplayField"  <br/> |
|Value  <br/> |Gets or sets the value that is rendered by using a **SPFieldGeolocationValue** object. <br/> |
   

### SPFieldGeolocation class

Represents a field (column) that holds a location on the globe defined by longitude, latitude, and possibly altitude.
  
    
    

```cs

public class SPFieldGeolocation : SPField
```

In connection with this class, the **Geolocation** field type is defined in % _SHAREPOINTROOT%_\\TEMPLATE\\XML\\fldtypes.xml.
  
    
    

#### Constructors (overloaded)

Initializes a new instance of the **SPFieldGeolocation** class.
  
    
    

```cs
public SPFieldGeolocation(SPFieldCollection fields, string fieldName)
public SPFieldGeolocation(SPFieldCollection fields, string fieldName, string displayName)
```

 **Parameters**
  
    
    

-  _fields_ is the collection of field types to which the new field type object is added.
    
  
-  _fieldName_ is an internal name of the new field type.
    
  
-  _displayName_ is a friendly name of the new field type.
    
  

#### Methods

 **GetFieldValueForClientRender**
  
    
    
Gets the value of the field so that it can be rendered on the client.
  
    
    



```cs

public override object GetFieldValueForClientRender(SPItem item, SPControlMode mode)
```

Parameters
  
    
    

-  _item_ is the current list item.
    
  
-  _mode_ is the current rendering mode such as New, Edit, or Display.
    
  
 **GetJsonClientFormFieldSchema**
  
    
    
Gets the field schema as JavaScript Object Notation (JSON).
  
    
    



```cs
public override Dictionary<string, object> GetJsonClientFormFieldSchema(SPControlMode mode)
```

 **Parameters**
  
    
    
 _mode_ is the current rendering mode such as New, Edit, or Display.
  
    
    
 **ValidateAndParseValue**
  
    
    
Verifies that the specified list item is not null and then verifies that the string is structured in compliance with Open Geospatial Consortium (OGC) standards and returns it as an object that is castable to the **SPFieldGeolocationValue** type.
  
    
    



```cs
public override object ValidateAndParseValue(SPListItem item, string value)
```

 **Parameters**
  
    
    

-  _item_ is a list item that is to be updated with the value.
    
  
-  _value_ is a string representation of a geolocation value.
    
  
The following methods are standard overrides of inherited methods that were in SharePoint 2010. The specific information for this class is in the following table.
  
    
    


|**Method**|**This override...**|
|:-----|:-----|
|GetFieldValue(String s)  <br/> |Returns the specified value as an Object that is castable to SPFieldGeolocationValue.  <br/> |
|GetFieldValueAsText(Object o)  <br/> |Wraps GetValidatedString.  <br/> |
|GetValidatedString(Object o)  <br/> |Verifies that the specified value is structured in compliance with Open Geospatial Consortium (OGC) standards and returns it as a string.  <br/> |
   

#### Properties

 **JSLink**
  
    
    
Gets or sets the name of the JavaScript file that renders the fields of the **SPFieldGeolocation** type.
  
    
    

> **Note:**
> The JSLink property is not supported on Survey or Events lists. A SharePoint calendar is an Events list. 
  
    
    




```cs
public override string JSLink
```

The default value is "clienttemplates.js|Geolocationfieldtemplate.js|sp.map.js".
  
    
    
 **FieldRenderingMobileWebControl**
  
    
    
Gets the **SPMobileGeolocationField** object that renders the field.
  
    
    



```cs
public override SPMobileBaseFieldControl FieldRenderingMobileControl
```

This property replaces the obsolete **FieldRenderingMobileControl**.
  
    
    
The other properties are standard overrides of inherited properties that were in SharePoint 2010. The specific information for this class is in the following table.
  
    
    


|**Property**|**The override...**|
|:-----|:-----|
|FieldValueType  <br/> |Returns **typeof(SPFieldGeolocationValue)**.  <br/> |
|FieldRenderingControl  <br/> |Returns a **GeolocationFieldControl** object. <br/> |
|Filterable  <br/> |Returns **false**.  <br/> |
|Sortable  <br/> |Returns **false**.  <br/> |
|[Obsolete]  <br/> FieldRenderingMobileControl  <br/> |Returns a **SPMobileGeolocationField** object. <br/> |
   

### SPFieldGeolocationValue class

Represents a location on the globe defined by longitude, latitude, and possibly altitude too.
  
    
    

```cs
public class SPFieldGeolocationValue : SPFieldGeographyValue
```


#### Constructors (overloaded)

Initializes a new instance of the **SPFieldGeolocationValue** class.
  
    
    

```cs
public SPFieldGeolocationValue()
public SPFieldGeolocationValue(string fieldValue)
public SPFieldGeolocationValue(double latitude, double longitude)
public SPFieldGeolocationValue(double latitude, double longitude, double altitude, double measure)

```

 **Parameters**
  
    
    

-  _fieldValue_ is a string in one of the following Well-Known Text (WKT) formats:
    
  - "Point( _longitude_ _latitude_)", where  _longitude_ and _latitude_ are strings of one or more numerals, optionally including one period (which is interpreted as a decimal point) and optionally beginning with a hyphen (which is interpreted as a negative sign).
    
  
  - "Point( _longitude_ _latitude_ _altitude_ _measure_)", where  _longitude_,  _latitude_,  _altitude_, and  _measure_ are strings of one or more numerals, optionally including one period (which is interpreted as a decimal point) and optionally beginning with a hyphen (which is interpreted as a negative sign).
    
  
-  _latitude_ is the latitude and must be between -90.0 and 90.0.
    
  
-  _longitude_ is the longitude and must be between -180.0 and 180.0.
    
  
-  _altitude_ is the altitude.
    
  
-  _measure_ is an alternate designation of the point. See the **Measure** property later in this section for more information.
    
  

#### Methods

 **ToString**
  
    
    
This override returns one of the following, depending on whether the **Altitude** or **Measure** properties have been assigned a non-null value.
  
    
    

- If neither Altitude nor Measure have been assigned a non-null value:
    
    "Point( _longitude_ _latitude_)", where  _longitude_ and _latitude_ are strings of one or more numerals, optionally including one period (which is interpreted as a decimal point) and optionally beginning with a hyphen (which is interpreted as a negative sign).
    
  
- Otherwise (at least one of **Altitude** or **Measure** have been assigned a non-null value):
    
    "Point(longitude latitude altitude measure)", where  _longitude_,  _latitude_,  _altitude_, and  _measure_ are strings of one or more numerals, optionally including one period (which is interpreted as a decimal point) and optionally beginning with a hyphen (which is interpreted as a negative sign). If either **Altitude** or **Measure** has not been assigned a non-null value, it is reported as "0" in the value of the **WellKnownText** property. The converse does not hold: if either **Altitude** or **Measure** is reported as 0, that might be because it was never assigned a non-null value, but it might be because it was assigned 0.
    
  



```cs

public override string ToString()
```

 **ToWellKnownText**
  
    
    
Wraps **ToString**.
  
    
    



```cs
public string ToWellKnownText()
```


#### Properties

 **Altitude**
  
    
    
Gets or sets the altitude of the location. Use of this property is optional and the assumed unit-of-measure (for example, meters) and zero-point (for example, sea level or center-of-the-earth) is user-defined.
  
    
    



```cs
public double Altitude
```

 **Latitude**
  
    
    
Gets or sets the latitude of the location.
  
    
    



```cs
public double Latitude
```

The value must be between -90.0 and 90.0.
  
    
    
 **Longitude**
  
    
    
Gets or sets the longitude of the location.
  
    
    



```cs
public double Longitude
```

The value must be between -180.0 and 180.0..
  
    
    
 **Measure**
  
    
    
Gets or sets a user-defined alternate designation of the location point. For example, if the point is along a highway with milestone markers, this property could be used to hold the number of the milestone that is nearest to the point. If the point is in a public camping area with numbered campsites, this property could be used to hold the number of the nearest campsite. The semantics of the property are entirely user-determined and its use is optional.
  
    
    



```cs
public double Measure
```


### SPFieldType enum

A new value has been added to this enum:
  
    
    

```cs
Geolocation
```


### SPPhoneNotificationContent class

A base class for classes that represent the content of a phone notification. Derived classes must declare one or more fields or properties to hold the content and must implement the **PreparePayload** method to transform the content into a byte array.
  
    
    

```cs
public abstract class SPPhoneNotificationContent
```


#### Methods

 **PreparePayload**
  
    
    
When implemented in a derived class, transforms the content into a Byte array that is sent over the wire to the notification service. There is no default implementation so a derived class must implement this method.
  
    
    



```cs
protected internal abstract byte[] PreparePayload();
```


#### Properties

 **NotificationType** (read-only)
  
    
    
Gets the type of notification (for example, tile or toast) for which the content is intended.
  
    
    



```cs
public SPPhoneNotificationType NotificationType

```

For information about the **SPPhoneNotificationType**, see later in this document.
  
    
    
 **SubscriberType** (read-only)
  
    
    
Gets the type of the subscriber's device, for example, a Windows Phone.
  
    
    



```cs

public SPPhoneNotificationSubscriberType SubscriberType
```

For information about the **SPPhoneNotificationSubscriberType**, see later in this document.
  
    
    

### SPPhoneNotificationResponse class

Represents the outcome of an attempt to send a notification.
  
    
    

```cs
public class SPPhoneNotificationResponse
```


#### Methods

 **Create**
  
    
    
Creates an **SPPhoneNotificationResponse** object.
  
    
    



```cs
public static SPPhoneNotificationResponse
Create(SPPhoneNotificationSubscriberType subscriberType, 
SPPhoneNotificationType notificationType, HttpWebResponse response)
```

 **Parameters**
  
    
    

-  _subscriberType_ is the device, such as Windows Phone 7.5.
    
  
-  _notificationType_ is the type of notification, such as toast or tile.
    
  
-  _response_ is the HTTP response object that was generated by the server.
    
  
For more information about **SPPhoneNotificationSubscriberType** and **SPPhoneNotificationType**, see later in this document.
  
    
    

#### Properties

 **NotificationType** (read-only)
  
    
    
Gets the type of notification (for example, toast or tile).
  
    
    



```cs

public SPPhoneNotificationType NotificationType
```

For information about the SPPhoneNotificationType, see later in this document.
  
    
    
 **ServiceToken** (read-only)
  
    
    
Gets the token of the notification service that was used in the notification.
  
    
    



```cs
public string ServiceToken
```

 **StatusCode** (read-only)
  
    
    
Gets the HTTP status code. A string version of a **HttpStatusCode** value.
  
    
    



```cs
public string StatusCode
```

 **SubscriberType**
  
    
    
Gets or sets the type of device to which the notification was sent.
  
    
    



```cs
public SPPhoneNotificationSubscriberType SubscriberType
```

For information about the **SPPhoneNotificationSubscriberType**, see later in this document.
  
    
    
 **TimeStamp** (read-only)
  
    
    
The UTC time of the notification.
  
    
    



```cs
public DateTime Timestamp
```


### SPPhoneNotificationSubscriber class

A base class for classes that represent a subscriber to notifications issued by a server-side SharePoint application.
  
    
    

```cs
public abstract class SPPhoneNotificationSubscriber
```


#### Methods

Notify
  
    
    
Sends the specified notification content to the subscriber with error checking.
  
    
    



```cs
public SPPhoneNotificationResponse Notify(SPPhoneNotificationContent notificationContent)
```

 **Parameters**
  
    
    
 _notificationContent_ is information about the event that triggered the notification.
  
    
    
This method cannot be overridden. It wraps the abstract **NotifyInternal** method and ensures that certain error checking is done when **NotifyInternal** is called.
  
    
    
For more information about the **SPPhoneNotificationContent** and **SPPhoneNotificationResponse** classes, see earlier in this document.
  
    
    
 **NotifyInternal**
  
    
    
When overridden in a derived class, sends the specified notification content to the subscriber.
  
    
    



```cs
protected abstract SPPhoneNotificationResponse NotifyInternal(SPPhoneNotificationContent notificationContent);
```

 **Parameters**
  
    
    
 _notificationContent_ is information about the event that triggered the notification.
  
    
    
For more information about the **SPPhoneNotificationContent** and **SPPhoneNotificationResponse** classes, see earlier in this document.
  
    
    
 **ToString**
  
    
    
Returns selected properties of the object as a string.
  
    
    



```cs
public override string ToString()
```

The default implementation includes the **ParentWeb**, **ApplicationTag**, and **DeviceAppInstanceId** properties.
  
    
    
Update
  
    
    
Saves a (possibly changed) **SPPhoneNotificationSubscriber** object to the website's Subscriber Store.
  
    
    



```cs
public void Update()
```

 **ValidateSubscriberProperties**
  
    
    
When implemented in a derived class, validates selected properties of the object.
  
    
    



```cs
protected abstract void ValidateSubscriberProperties();
```


#### Properties

 **CustomArgs**
  
    
    
Gets or sets a custom arguments string which represents the state of the notifications subscription. This string could be used by the application logic to differentiate between its notification subscribers for different kinds of notifications.
  
    
    



```cs
public string CustomArgs
```

 **DeviceAppInstanceId** (read-only)
  
    
    
Gets an ID for the specific instance of the application on the phone or other mobile device.
  
    
    



```cs
public Guid DeviceAppInstanceId
```

 **LastModifiedTimeStamp** (read-only)
  
    
    
Gets the date and time when the subscriber was last modified.
  
    
    



```cs
public DateTime LastModifiedTimeStamp
```

 **RegistrationTimeStamp** (read-only)
  
    
    
Gets the date and time when the subscriber registered for notifications.
  
    
    



```cs
public DateTime RegistrationTimeStamp
```

 **ServiceToken**
  
    
    
Gets or sets delivery channel information that is needed by a notification service, such as channel URI.
  
    
    



```cs
public string ServiceToken
```

 **SubscriberType** (read-only)
  
    
    
Gets the type of the device, such as Windows Phone 7.
  
    
    



```cs
public SPPhoneNotificationSubscriberType SubscriberType
```

For information about the **SPPhoneNotificationSubscriberType** class, see later in this document.
  
    
    
 **User** (read-only)
  
    
    
Gets the user who registered for notifications.
  
    
    



```cs
public SPUser User
```


### SPPhoneNotificationSubscriberCollection class

A collection of notification subscribers. The collection object takes **Int32** indexers.
  
    
    

```cs
public sealed class SPPhoneNotificationSubscriberCollection : SPBaseCollection
```


#### Properties

 **Count**
  
    
    
Gets the number of items in the collection.
  
    
    



```cs
public override int Count
```


### SPPhoneNotificationSubscriberType enum

Specifies a type of device that can receive notifications.
  
    
    


|**Notification**|**Device**|
|:-----|:-----|
|||
|**WP7** <br/> |Windows Phone 7.5  <br/> |
|**Custom** <br/> |Any device other than Windows Phone 7.5  <br/> |
   

### SPPhoneNotificationType enum

Specifies the type of notification.
  
    
    


|||
|:-----|:-----|
|**None** <br/> ||
|**Tile** <br/> ||
|**Toast** <br/> ||
|**Raw** <br/> ||
   

### SPWeb class

The following members have been added to this class.
  
    
    

#### Methods

 **DoesPhoneNotificationSubscriberExist**
  
    
    
Gets a value that indicates whether the current user is a subscriber for the specified instance of the specified app.
  
    
    



```cs
public bool DoesPhoneNotificationSubscriberExist(Guid deviceAppInstanceId)
```

 **GetPhoneNotificationSubscriber**
  
    
    
Gets a notification subscriber with the specified application and phone IDs from the website's notification Subscription Store list.
  
    
    



```cs
public SPPhoneNotificationSubscriber GetPhoneNotificationSubscriber(Guid deviceAppInstanceId)
```

 **Parameters**
  
    
    
 _deviceAppInstanceId_ is an ID for the instance of the application on a specific phone or device.
  
    
    
For information about the **SPPhoneNotificationSubscriber** class see earlier in this document.
  
    
    
 **GetPhoneNotificationSubscribers** (overloaded)
  
    
    
Gets a collection of notification subscribers from the website's notification Subscription Store list, optionally filtering on the ID of the phone applications and possibly also on one of the following: the user or some custom arguments.
  
    
    



```cs
public SPPhoneNotificationSubscriberCollection GetPhoneNotificationSubscribers(string customArgs)
```


> **Note:**
> Client object model name is **GetPhoneNotificationSubscribersByArgs**. 
  
    
    




```cs
public SPPhoneNotificationSubscriberCollection GetPhoneNotificationSubscribers(string user)

```


> **Note:**
> Client object model name is **GetPhoneNotificationSubscribersByUser**. 
  
    
    

 **Parameters**
  
    
    

-  _customArgs_ are additional custom information that some notification-enabled applications may use.
    
  
-  _user_ is the user who registered for the notifications.
    
  
For information about the **SPPhoneNotificationSubscriberCollection** class see earlier in this document.
  
    
    
 **RegisterPhoneNotificationSubscriber**
  
    
    
Registers a phone app on a phone to receive notifications.
  
    
    



```cs

public SPPhoneNotificationSubscriber RegisterPhoneNotificationSubscriber(SPPhoneNotificationSubscriberType subscriberType, Guid deviceAppInstanceId, string serviceToken)
```

 **Parameters**
  
    
    

-  _subscriberType_ is the device type, such as Windows Phone 7.
    
  
-  _deviceAppInstanceId_ is an ID for the instance of the app on a specific phone or device.
    
  
-  _serviceToken_ is the token that is used by the notification service that sends notifications to the subscriber.
    
  
For information about **SPPhoneNotificationSubscriberType**, see earlier in this document.
  
    
    
 **UnregisterPhoneNotificationSubscriber**
  
    
    
Unregisters a phone app on a phone from receiving notifications.
  
    
    



```cs
public void UnregisterPhoneNotificationSubscriber(Guid deviceAppInstanceId)
```

 **Parameters**
  
    
    
 _deviceAppInstanceId_ is an ID for the instance of the app on a specific phone or device.
  
    
    

#### Properties

 **PhoneNotificationSubscribers** (read-only)
  
    
    
Gets a collection of all the phone notification subscribers in the website's Subscriber Store.
  
    
    



```cs
public SPPhoneNotificationSubscriberCollection PhoneNotificationSubscribers
```

For information about the **SPPhoneNotificationSubscriberCollection** class, see earlier in this document.
  
    
    

### WP7NotificationTileContent class

Represents the content of a tile notification.
  
    
    

```cs
public sealed class WP7NotificationTileContent : SPPhoneNotificationContent
```


#### Constructors

Initializes a new instance of the WP7NotificationTileContent class.
  
    
    

```cs
public WP7NotificationTileContent()
```


#### Methods

 **PreparePayload**
  
    
    
Transforms the content into a **Byte** array that is sent over the wire to the notification service.
  
    
    



```cs
protected internal override byte[] PreparePayload();
```


#### Properties

 **Count**
  
    
    
Gets or sets the count of the notification. Must be from -1 to 99 inclusive.
  
    
    



```cs
public int Count
```

Setting the property to -1 will not change the count over the tile.
  
    
    
 **Title**
  
    
    
Gets or sets the title of the tile notification.
  
    
    



```cs
public string Title
```

 **BackgroundImagePath**
  
    
    
Gets or sets the path to the tile's background image.
  
    
    



```cs
public string BackgroundImagePath
```

 **BackBackgroundImagePath**
  
    
    
Gets or sets the background image of the back side of a flipping tile.
  
    
    



```cs
public string BackBackgroundImagePath
```

 **BackContent**
  
    
    
Gets or sets the content of the back side of a flipping tile.
  
    
    



```cs
public string BackContent
```

 **BackTitle**
  
    
    
Gets or sets of the title that appears on the back side of a flipping tile.
  
    
    



```cs
public string BackTitle
```

 **TileId**
  
    
    
Gets or sets the ID of the tile.
  
    
    



```cs
public string TileId
```


### WP7NotificationToastContent class

Represents the content of a toast notification.
  
    
    

```cs
public sealed class WP7NotificationToastContent : SPPhoneNotificationContent
```


#### Constructors

Initializes a new instance of the WP7NotificationToastContent class.
  
    
    

```cs
public WP7NotificationToastContent()
```


#### Methods

 **PreparePayload**
  
    
    
Transforms the content into a **Byte** array that is sent over the wire to the notification service.
  
    
    



```cs
protected internal override byte[] PreparePayload();
```


#### Properties

 **Message**
  
    
    
Gets or sets the message of the toast notification.
  
    
    



```cs
public string Message
```

 **Title**
  
    
    
Gets or sets the title of the toast notification.
  
    
    



```cs
public string Title
```

 **Param**
  
    
    
Gets or sets custom settings data that is passed to the receiving application if the user responds to the toast notification.
  
    
    



```cs
public string Param
```

This property can be used to pass information to the receiving application such as a URL or a set of name-value pairs.
  
    
    

### WP7NotificationRawContent class

Represents the content of a raw notification.
  
    
    

```cs
public sealed class WP7NotificationRawContent : SPPhoneNotificationContent
```


#### Constructors

Initializes a new instance of the WP7NotificationRawContent class.
  
    
    

```cs
public WP7NotificationRawContent()
```


#### Methods

 **PreparePayload**
  
    
    
Transforms the content into a Byte array that is sent over the wire to the notification service.
  
    
    



```cs
protected internal override byte[] PreparePayload();
```


#### Properties

 **Message**
  
    
    
Gets or sets the message of the raw notification.
  
    
    



```cs
public string Message
```


### WP7PhoneNotificationResponse class

Represents the outcome of an attempt to send a notification to a Windows Phone 7 subscriber.
  
    
    

```cs
public WP7PhoneNotificationResponse(SPPhoneNotificationType notificationType, HttpWebResponse response)
```

 **Parameters**
  
    
    

-  _notificationType_ is the type of notification, such as toast or tile.
    
  
-  _response_ is the HTTP response object that was generated by the server.
    
  
For more information about **SPPhoneNotificationType**, see earlier in this document.
  
    
    

#### Properties

 **NotificationStatus** (read-only)
  
    
    
Gets the notification status, for example, success or failure.
  
    
    



```cs
public string NotificationStatus
```

 **DeviceConnectionStatus** (read-only)
  
    
    
Gets the status of the device at the time of the notification.
  
    
    



```cs
public string DeviceConnectionStatus
```

 **SubscriptionStatus** (read-only)
  
    
    
The subscription status of the device at the time of the notification.
  
    
    



```cs
public string SubscriptionStatus
```

 **MessageId** (read-only)
  
    
    
Gets the ID of the message that was sent in the notification.
  
    
    



```
public string MessageId
```


## Additional resources
<a name="SP15MobileOM_addlresources"> </a>


-  [Build Windows Phone apps that access SharePoint](build-windows-phone-apps-that-access-sharepoint.md)
    
  
-  [How to: Configure and use push notifications in SharePoint apps for Windows Phone](how-to-configure-and-use-push-notifications-in-sharepoint-apps-for-windows.md)
    
  
-  [Integrating location and map functionality in SharePoint](integrating-location-and-map-functionality-in-sharepoint.md)
    
  
-  [Overview of the SharePoint mobile client authentication object model](overview-of-the-sharepoint-mobile-client-authentication-object-model.md)
    
  

