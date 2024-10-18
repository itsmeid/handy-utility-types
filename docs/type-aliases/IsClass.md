[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / IsClass

> **IsClass**\<`T`\>: [`Class`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CClass.md) *extends* `T` ? `true` : `false`

A utility type that checks if a given type `T` is a class.

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
class MyClass {}
type IsMyTypeClass = IsClass<MyClass>; // true
type IsNotClass = IsClass<string>; // false
```

## Defined in

[utility-types.ts:249](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L249)
