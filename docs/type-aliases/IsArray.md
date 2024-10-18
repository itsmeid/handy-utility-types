[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / IsArray

> **IsArray**\<`T`\>: `T` *extends* infer \_[] ? `true` : `false`

Checks if a type is an array.

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

The type to check.

</td>
</tr>
</tbody>
</table>

## Example

```ts
type IsMyTypeArray = IsArray<number[]>; // true
type IsNotArray = IsArray<string>; // false
```

## Defined in

utility-types.ts:218
