[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / Class

> **Class**\<`Args`, `Return`\>: (...`args`) => `Return`

Type representing a class constructor that takes specified argument types and returns an instance of a specified type.

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

The argument types of the constructor as an array.

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

The type of the instance returned by the constructor.

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

## Type declaration

### prototype

> **prototype**: `Return`

## Example

```ts
type MyClass = Class<[number, string], TempClass>;
// MyClass is a constructor function that takes (arg1: number, arg2: string) and returns an instance of TempClass
```

## Defined in

[utility-types.ts:32](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L32)
