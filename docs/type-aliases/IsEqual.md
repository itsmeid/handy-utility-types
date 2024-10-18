[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / IsEqual

> **IsEqual**\<`A`, `B`\>: [`A`] *extends* [`B`] ? [`B`] *extends* [`A`] ? `true` : `false` : `false`

Check the type equality between A and B.

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

true if types A and B are equal, otherwise false.

## Example

```ts
type IsEqualExample = IsEqual<string, string>; // true
```

## Defined in

[utility-types.ts:178](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L178)
