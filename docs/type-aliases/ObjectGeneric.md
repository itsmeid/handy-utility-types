[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ObjectGeneric

> **ObjectGeneric**\<`T`\>: `Record`\<`PropertyKey`, `T`\>

Extended TypeScript Record to define a generic object type.

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

[`BypassAny`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CBypassAny.md)

</td>
<td>

The type of the values in the object, defaults to 'any'.

</td>
</tr>
</tbody>
</table>

## Example

```ts
const obj: ObjectGeneric<number> = { a: 1, b: 2 };
```

## Defined in

[utility-types.ts:62](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L62)
