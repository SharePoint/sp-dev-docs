# IPropertyPaneCustomFieldProps interface







PropertyPane CustomPropertyField props.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`context`      | `any` | Instance specific context. This context is passed back to the web part in the onRender and onDispose APIs. The web part can use this context to manage state information. |
|`key`      | `string` | An UNIQUE key indicates the identity of this contorl. The PropertyPane uses ReactJS to render its components. ReactJS uses keys to identify a component and if it should be re-rendered or not. This is a performance feature in ReactJS. Please read the following link to understand how to pick the value of the key. |
|`onDispose`      | `(domElement: HTMLElement, context?: any) => void` | This API is called when the component is unmounted from the host element. |
|`onRender`      | `(domElement: HTMLElement, context?: any) => void` | This API will be called once the custom field is mounted on the host element. |






