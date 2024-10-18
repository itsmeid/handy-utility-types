[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ExtractArray

> **ExtractArray**\<`T`\>: `T` *extends* infer U[] ? `U` : `never`

Extract the value type from an array type.

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

The input type which should be an array.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the elements in the array, or never if T is not an array.

## Example

```ts
type ValueType = ExtractArray<number[]>; // number
```

## Defined in

[utility-types.ts:259](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L259)
