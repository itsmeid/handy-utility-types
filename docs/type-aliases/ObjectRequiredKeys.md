[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ObjectRequiredKeys

> **ObjectRequiredKeys**\<`T`\>: `T` *extends* [`ObjectGeneric`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectGeneric.md) ? `{ [K in keyof T]-?: undefined extends T[K] ? never : K }`\[keyof `T`\] : `never`

Get the required keys from an object or record type.

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

The object type to extract required keys from.

</td>
</tr>
</tbody>
</table>

## Returns

The keys of T that are required.

## Example

```ts
type MyType = { a: number; b?: string; c: boolean };
type ObjectRequiredKeysType = ObjectRequiredKeys<MyType>; // "a" | "c"
```

## Defined in

[utility-types.ts:95](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L95)
