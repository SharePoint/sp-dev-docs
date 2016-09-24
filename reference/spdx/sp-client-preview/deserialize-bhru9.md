# deserialize(data)

This API is called once during the lifetime of the web part during the intial render and just before the onInit 
API call. The purpose of this API is to help a web part developer deserialize the web part data and manage the 
versioning of their data as the web part code evolves. The web part data may have been persisted with an older 
or newer version of the web part code. This API gives the web part developer an opportunity to re-structure their 
data to the appropriate data schema. The persisted data contains the version number information. That information 
can be used to make decisions on how to re-structure the data. 


**Signature:** _deserialize(data: [IWebPartData](../sp-client-preview/iwebpartdata.md)): TProperties_

**Returns**: `TProperties`

- web part property bag. 


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `data`    | [`IWebPartData`](../sp-client-preview/iwebpartdata.md) | - web part persisted data. |

