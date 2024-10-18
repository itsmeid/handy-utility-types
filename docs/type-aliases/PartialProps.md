[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / PartialProps

> **PartialProps**\<`T`, `K`\>: `Pick`\<`Partial`\<`T`\>, `K`\> & `Omit`\<`T`, `K`\>

Extended TypeScript Partial to make specific properties optional.

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

The keys of T that should be optional.

</td>
</tr>
</tbody>
</table>

## Example

```ts
type MyType = PartialProps<{ a: number; b: string }, 'a'>;
const example: MyType = { b: 'test' }; // 'a' is optional
```

## Defined in

utility-types.ts:84
