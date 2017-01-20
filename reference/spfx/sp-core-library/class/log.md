# Log class







The Log class provides static methods for logging messages at different levels (verbose, info, warning, error) and with context information. Context information helps identify which component generated the messages and makes the messages useful and filterable.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error(source,error,scope)`](error-log.md)     | `public, static` | `void` | Logs an error |
|[`info(source,message,scope)`](info-log.md)     | `public, static` | `void` | Logs an informational message |
|[`verbose(source,message,scope)`](verbose-log.md)     | `public, static` | `void` | Logs a verbose message |
|[`warn(source,message,scope)`](warn-log.md)     | `public, static` | `void` | Logs a warning |





