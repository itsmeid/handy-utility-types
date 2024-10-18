[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / IsNotEqual

> **IsNotEqual**\<`A`, `B`\>: [`IsEqual`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CIsEqual.md)\<`A`, `B`\> *extends* `false` ? `true` : `false`

Check the type inequality between A and B.

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

`A`

</td>
<td>

The first type to compare.

</td>
</tr>
<tr>
<td>

`B`

</td>
<td>

The second type to compare.

</td>
</tr>
</tbody>
</table>

## Returns

true if types A and B are not equal, otherwise false.

## Example

```ts
type IsNotEqualExample = IsNotEqual<string, number>; // true
```

## Defined in

utility-types.ts:189
