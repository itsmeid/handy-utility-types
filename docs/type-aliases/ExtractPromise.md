[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ExtractPromise

> **ExtractPromise**\<`T`\>: `T` *extends* `Promise`\<infer U\> ? `U` : `never`

Extract the value type from a promise type.

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

The input type which should be a promise.

</td>
</tr>
</tbody>
</table>

## Returns

The type of the return value in the promise, or never if T is not a promise.

## Example

```ts
type ValueType = ExtractPromise<Promise<number>>; // number
```

## Defined in

[utility-types.ts:269](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L269)
