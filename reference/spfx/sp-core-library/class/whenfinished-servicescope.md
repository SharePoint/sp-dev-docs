# whenFinished(callback)



It is an error to call ServiceScope.consume() before finish() has been called. The most reliable way to protect your component against this error is to perform the consume() calls inside a whenFinished() callback. If the service scope is already finished, then the callback will be executed immediately; otherwise, it will be executed later when the scope is finished.

**Signature:** _public whenFinished(callback: () => void): void;_

**Returns**: `void`





#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `callback`    | `() => void` | A block of code that needs to call ServiceScope.consume() |


