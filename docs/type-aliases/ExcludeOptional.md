[handy-utility-types](https://github.com/itsmeid/handy-utility-types/tree/main/docs/README.md) / ExcludeOptional

> **ExcludeOptional**\<`T`\>: `T` *extends* [`ObjectGeneric`](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases%5CObjectGeneric.md) ? `{ [K in keyof T as undefined extends T[K] ? never : K]: T[K] }` : `never`

Excludes all optional keys from an object type.

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
type MyType = { a: number; b?: string; c: boolean; d?: undefined };
type RequiredOnly = ExcludeOptional<MyType>;
// RequiredOnly is { a: number; c: boolean }
```

## Defined in

utility-types.ts:280
