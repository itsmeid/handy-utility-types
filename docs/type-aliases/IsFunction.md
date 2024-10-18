[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / IsFunction

> **IsFunction**\<`T`\>: `T` *extends* [`Fn`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CFn.md) ? `true` : `false`

A utility type that checks if a given type `T` is a function.

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
type IsMyTypeFunction = IsFunction<() => void>; // true
type IsNotFunction = IsFunction<string>; // false
```

## Defined in

utility-types.ts:238
