[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / Fn

> **Fn**\<`Args`, `Return`\>: (...`args`) => `Return`

Type representing a function that takes specified argument types and returns a specified type.

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

`Args` *extends* [`BypassAny`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CBypassAny.md)[]

</td>
<td>

[]

</td>
<td>

The argument types of the function as an array.

</td>
</tr>
<tr>
<td>

`Return`

</td>
<td>

[`BypassAny`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CBypassAny.md)

</td>
<td>

The return type of the function.

</td>
</tr>
</tbody>
</table>

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

...`args`

</td>
<td>

`Args`

</td>
</tr>
</tbody>
</table>

## Returns

`Return`

## Example

```ts
type MyFunction = Fn<[number, string], boolean>;
// MyFunction is (arg1: number, arg2: string) => boolean
```

## Defined in

utility-types.ts:21
