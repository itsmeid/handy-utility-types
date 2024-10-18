[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ObjectOverwrite

> **ObjectOverwrite**\<`T`, `U`\>: `Omit`\<`T`, keyof `U`\> & `U`

Combines two types by overwriting properties in T with those in U.

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

The original type.

</td>
</tr>
<tr>
<td>

`U`

</td>
<td>

The type with properties to overwrite T's properties.

</td>
</tr>
</tbody>
</table>

## Example

```ts
type Original = { a: number; b: string; c: boolean };
type Updates = { b: number; c?: string };

type Result = Overwrite<Original, Updates>;
// Result is { a: number; b: number; c?: string }
```

## Defined in

utility-types.ts:167
