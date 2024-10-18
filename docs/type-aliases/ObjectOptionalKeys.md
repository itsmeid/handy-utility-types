[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ObjectOptionalKeys

> **ObjectOptionalKeys**\<`T`\>: `T` *extends* [`ObjectGeneric`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectGeneric.md) ? `{ [K in keyof T]-?: undefined extends T[K] ? K : never }`\[keyof `T`\] : `never`

Get the optional keys from an object or record type.

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

The object type to extract optional keys from.

</td>
</tr>
</tbody>
</table>

## Returns

The keys of T that are optional.

## Example

```ts
type MyType = { a: number; b?: string; c?: boolean };
type ObjectOptionalKeysType = ObjectOptionalKeys<MyType>; // "b" | "c"
```

## Defined in

[utility-types.ts:110](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L110)
