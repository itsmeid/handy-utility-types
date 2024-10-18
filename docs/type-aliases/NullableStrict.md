[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / NullableStrict

> **NullableStrict**\<`T`\>: `T` \| `null`

Type that allows a value to be T or null, but not undefined.

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

The original type.

</td>
</tr>
</tbody>
</table>

## Example

```ts
const example: NullableStrict<string> = null; // valid
```

## Defined in

[utility-types.ts:53](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L53)
