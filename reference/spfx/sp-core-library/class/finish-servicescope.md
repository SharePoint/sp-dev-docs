# finish()



When a ServiceScope is first started, it is in an "unfinished" state where provide() is allowed but consume() is not allowed. After calling finish(), then consume() is allowed but provide() is not allowed. This formalism completely eliminates a number of tricky bugs such as: Scope2 is a child of Scope1, and Scope1 provides instance A1 of interface A; if someone consumes A1 from Scope2 (via inheritance) before Scope2.provide() is called with A2, then a subsequent call to Scope2.consume() might return a different result than the previous call, which would be very confusing for developers.

**Signature:** _public finish(): void;_

**Returns**: `void`





#### Parameters
None


