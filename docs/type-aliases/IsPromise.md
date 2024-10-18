[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / IsPromise

> **IsPromise**\<`T`\>: `T` *extends* `Promise`\<infer \_\> ? `true` : `false`

A utility type that determines if a given type `T` is a Promise.

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
type IsMyTypePromise = IsPromise<Promise<number>>; // true
type IsNotPromise = IsPromise<string>; // false
```

## Defined in

[utility-types.ts:228](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L228)
