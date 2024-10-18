[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ObjectPathValue

> **ObjectPathValue**\<`T`, `K`\>: `K` *extends* `""` ? `T` : `K` *extends* \`$\{infer Key\}.$\{infer Rest\}\` ? `Key` *extends* keyof `T` ? `Rest` *extends* [`ObjectPath`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectPath.md)\<`T`\[`Key`\]\> ? [`ObjectPathValue`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectPathValue.md)\<`T`\[`Key`\], `Rest`\> : `never` : `never` : `K` *extends* keyof `T` ? `T`\[`K`\] : `never`

Get the type of a property based on a given path.

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

The object type to extract value from.

</td>
</tr>
<tr>
<td>

`K` *extends* [`ObjectPath`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectPath.md)\<`T`\> \| `""`

</td>
<td>

The path string to navigate through the object.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the property at the specified path.

## Example

```ts
type MyType = { a: { b: number }; c: string };
type ValueType = ObjectPathValue<MyType, 'a.b'>; // number
```

## Defined in

[utility-types.ts:143](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L143)
