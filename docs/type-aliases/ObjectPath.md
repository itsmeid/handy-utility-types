[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ObjectPath

> **ObjectPath**\<`T`\>: `T` *extends* [`BypassAny`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CBypassAny.md)[] ? `never` : `T` *extends* [`ObjectGeneric`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectGeneric.md) ? \{ \[K in keyof T\]-?: K extends string ? K \| \`$\{K\}.$\{ObjectPath\<T\[K\]\>\}\` : never \}\[keyof `T`\] : `never`

Get all of the paths from an object T as a string union.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The object type to extract paths from.

</td>
</tr>
</tbody>
</table>

## Returns

A string union of paths in the object.

## Example

```ts
type MyType = { a: { b: number }; c: string };
type Paths = ObjectPath<MyType>; // "a" | "a.b" | "c"
```

## Defined in

utility-types.ts:125
