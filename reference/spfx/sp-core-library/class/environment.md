# Environment class







This class contains contextual information about the enviroment that is hosting the framework and its components.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`applicationSessionId`     | `public` | [`Guid`](../sp-core-library/class/guid.md) | _Read-only._ A unique identifier used to correlate logging and other diagnostic information. Its lifetime persists for the duration of the client-side application instance, i.e. it begins with the server request that renders the page, and ends e.g. when the browser tab is closed or F5 is pressed to reload the page. Note that if the application's router supports in-place navigation (via the history.pushState() API), the application session persists across these transitions. |
|`pageSessionId`     | `public` | [`Guid`](../sp-core-library/class/guid.md) | _Read-only._ A unique identifier used to correlate logging and other diagnostic information. Whereas the applicationSessionId tracks the entire lifetime of the client-side application instance, the pageSessionId tracks an individual "page" that is rendered. For example, suppose that the application initially loads PageA, then the user does in-place navigation (via the history.pushState() API) to PageB, then navigates back to PageA, and finally they close the browser tab. During this sequence, the applicationSessionId will remain the same, however the pageSessionId will change on each navigation. The 3 different pageSessionId values are used by the diagnostics e.g. to track success/failure statistics for PageA independently of PageB. The concept of a "page" is application-defined. |
|`type`     | `public` | [`EnvironmentType`](../sp-core-library/enum/environmenttype.md) | _Read-only._ An enum that describes which type of enviroment the framework is running in. |







