[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / RequiredProps

> **RequiredProps**\<`T`, `K`\>: `T` & `{ [P in K]-?: T[P] }`

Extended TypeScript Required to enforce specific properties as required.

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

The original object type.

</td>
</tr>
<tr>
<td>

`K` *extends* keyof `T`

</td>
<td>

The keys of T that should be required.

</td>
</tr>
</tbody>
</table>

## Example

```ts
type MyType = RequiredProps<{ a?: number; b?: string }, 'a'>;
const example: MyType = { a: 1, b: 'test' }; // 'a' is required
```

## Defined in

utility-types.ts:73
