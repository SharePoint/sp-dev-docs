# EnvironmentType enumeration
An enum that describes which type of enviroment the framework is running in.

| Member	   | Description|
|:-------------|:-------|
|`ClassicSharePoint`       | Indicates that the framework was loaded from a classic server-rendered SharePoint page |
|`Local`       | Represents the scenario of the framework hosted on a localhost server, which typically cannot access any SharePoint REST APIs. Example: A developer uses gulp serve command to test their changes in their browser of choice. |
|`SharePoint`       | Indicates that the framework was loaded by a client-rendered SharePoint page |
|`Test`       | Represents the scenario of the framework hosted in a unit/integration test. Example: A developer running a unit test to verify changes to their web part. |
