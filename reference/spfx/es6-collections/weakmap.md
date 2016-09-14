# WeakMap interface

## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`delete`](#delete)      | `boolean` |  |
|[`clear`](#clear)      | `void` |  |
|[`get`](#get)      | `V` |  |
|[`has`](#has)      | `boolean` |  |
|[`set`](#set)      | [`WeakMap<K,V>`](../es6-collections/weakmap.md) |  |

### delete

#### Signature

```ts
delete(key: K): boolean
```

#### Returns

```ts
boolean
```

#### Parameters

| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |

### clear

#### Signature

```ts
clear(): void
```

#### Returns

```ts
void
```

#### Parameters

None

### get

#### Signature

```ts
get(key: K): V
```

#### Returns

```ts
V
```

#### Parameters

| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |

### has

#### Signature

```ts
has(key: K): boolean
```

#### Returns

```ts
boolean
```

#### Parameters

| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |

### set

#### Signature

```ts
set(key: K,value?: V): WeakMap<K,V>
```

#### Returns

[`WeakMap<K,V>`](../es6-collections/weakmap.md)

#### Parameters

| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `key`    | `K` |  |
| `value`    | `V` | _Optional._ |

