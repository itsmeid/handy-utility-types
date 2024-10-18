[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ExcludeNullable

> **ExcludeNullable**\<`T`\>: `Exclude`\<`T`, `null` \| `undefined`\>

Exclude null and undefined types from T excluding null and undefined.

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
type NonNullableType = ExcludeNullable<string | null | undefined>; // string
```

## Defined in

utility-types.ts:355
