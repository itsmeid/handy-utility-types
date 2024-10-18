[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ExcludeRequiredDeep

> **ExcludeRequiredDeep**\<`T`\>: `T` *extends* [`ObjectGeneric`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectGeneric.md) ? `{ [K in keyof T as undefined extends T[K] ? K : never]: BypassAny[] extends T[K] ? ExcludeRequiredDeep<ExtractArray<T[K]>>[] : ExcludeRequiredDeep<T[K]> }` : `T`

Recursively excludes all required keys from an object type.

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
</tbody>
</table>

## Example

```ts
type MyType = {
  a: number;
  b?: string;
  c: { d: boolean; e?: number };
  f?: { g: string; h?: string }[];
  i: { j: string; k?: string }
};

type OptionalOnly = ExcludeRequiredDeep<MyType>;
// OptionalOnly is { b?: string; c: { e?: number }; f?: { g: string; h?: string }[]; i: { k?: string } }
```

## Defined in

[utility-types.ts:340](https://github.com/itsmeid/handy-utility-types/blob/361f33ed663ecb70e7a5632aeff8b3063307bcd0/lib/modular/utility-types.ts#L340)
