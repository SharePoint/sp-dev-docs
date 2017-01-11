# onPropertyPaneConfigurationComplete()
**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.



This API is invoked when the configuration is completed on the PropertyPane. It's invoked in the following cases: - When the CONFIGURATION_COMPLETE_TIMEOUT((currently the value is 5 secs) elapses after the last change. - When user clicks 'x'(close) button before the CONFIGURATION_COMPLETE_TIMEOUT elapses. - When user clciks 'Apply' button before the CONFIGURATION_COMPLETE_TIMEOUT elapses. - When the user switches web parts then the current web part gets this event.

**Signature:** _@virtual protected onPropertyPaneConfigurationComplete(): void;_

**Returns**: `void`





#### Parameters
None


