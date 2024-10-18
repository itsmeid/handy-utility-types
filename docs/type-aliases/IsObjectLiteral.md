[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / IsObjectLiteral

> **IsObjectLiteral**\<`T`\>: `T` *extends* [`ObjectGeneric`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectGeneric.md) ? [`IsFunction`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CIsFunction.md)\<`T`\> *extends* `true` ? `false` : [`IsArray`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CIsArray.md)\<`T`\> *extends* `true` ? `false` : `true` : `false`

Checks if a type is a plain object literal (not an array or a function).

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
type MyType = { a: number; b: string };
type NotObject = string[];

type IsMyTypeObjectLiteral = IsObjectLiteral<MyType>; // true
type IsNotObjectLiteral = IsObjectLiteral<NotObject>; // false
```

## Defined in

utility-types.ts:202
