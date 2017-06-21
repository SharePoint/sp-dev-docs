# Version class







This class represents versions that follow the string format of MAJOR.MINOR[.PATCH[.REVISION]] where MAJOR, MINOR, PATCH and REVISION are integers. PATCH and REVISION are optional. Leading zeros are allowed, but have no meaning in comparisons. Examples: 1.0, 1.0.0, 1.0.0.0, 1.01, 01.02.03, 001.002.003.004



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`major`     | `public` | `number` | _Read-only._ The first number in the version string indicating the major version |
|`minor`     | `public` | `number` | _Read-only._ The second number in the version string indicating the minor version |
|`patch`     | `public` | `number `,` undefined` | _Read-only._ The thrid number in the version string indicating the patch number in a semantic version or the build number in a .NET System.Version class Set to undefined if the third number does not exist |
|`revision`     | `public` | `number `,` undefined` | _Read-only._ The fourth number in the version string indicating the revision number Set to undefined if the fourth number does not exist |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`compare(v1,v2)`](compare-version.md)     | `public, static` | `number` | Compares two Version classes |
|[`equals(compareWith)`](equals-version.md)     | `public` | `boolean` | Checks if this version is equal to the input parameter. Missing patch number is treated as zero. Examples: 1.0.0 equals 1.0.0 -> true 2.0.1 equals 2.0.0 -> false 3.0 equals 3.0.0 -> true 04.01 equals 4.1 -> true |
|[`greaterThan(compareWith)`](greaterthan-version.md)     | `public` | `boolean` | Checks if this version is greater (i.e. newer) than the input parameter. Missing patch number is treated as zero Examples: 1.0.0 greaterThan 0.0.9 -> true 2.0 greaterThan 2.0.0 -> false 3.0.1 greaterThan 3.0 -> true |
|[`isValid(versionString)`](isvalid-version.md)     | `public, static` | `boolean` | Indicates whether a version string is valid |
|[`lessThan(compareWith)`](lessthan-version.md)     | `public` | `boolean` | Checks if this version is less (i.e. older) than the input parameter. Missing patch number is treated as zero Examples: 0.9.9 lessThan 1.0.0 -> true 2.0 lessThan 2.0.0 -> false 3.0 lessThan 3.0.1 -> true 04.01 lessThan 4.1 -> false |
|[`parse(versionString)`](parse-version.md)     | `public, static` | [`Version`](../../sp-core-library/class/version.md) | Constructs a new Version instance using the version string. tryParse validates the input version string and throws error if it is invalid |
|[`satisfies(compareWith)`](satisfies-version.md)     | `public` | `boolean` | Checks if this version satisfies the input parameter, therefore it's backwards compatible. They have to share the same major version, and the input parameter must be an equal or more recent version. Examples: 1.0.0 satisfies 1.0.0 -> true 1.1.0 satisfies 1.0.0 -> true 2.0.0 satisfies 1.0.0 -> false 1.0.0 satisfies 1.1.0 -> false |
|[`toString()`](tostring-version.md)     | `public` | `string` | Object.prototype.toString override The version string in MAJOR.MINOR[.PATCH[.REVISION]] |
|[`tryParse(versionString)`](tryparse-version.md)     | `public, static` | [`Version `](../../sp-core-library/class/version.md),` undefined` | Tries to construct a new Version instance using the version string. Returns undefined if not successful. |





