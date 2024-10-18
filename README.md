***

<div align="center">
    
# handy-utility-types
    
[![Status](https://img.shields.io/badge/status-active-success.svg)](#)
[![Github](https://img.shields.io/badge/github-repo-242424)](https://github.com/itsmeid/handy-utility-types)
[![NPM](https://img.shields.io/badge/npm-package-red)](https://www.npmjs.com/package/@itsmeid/handy-utility-types)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

<p align="center">Unlock the power of TypeScript with a collection of handy utility types.</p>

</div>

***

## 📝 Table of Contents

-   [About](#about)
-   [Installation](#installation)
-   [Built Using](#built_using)
-   [Docs](#docs)

## 🤔 About <a name="about"></a>

This package offers a suite of versatile utility types that simplify common tasks, improve type safety, and boost productivity.

* Easy to use
* Zero third party dependencies
* Type level only
* No more copy paste "type definitions" between projects

## 🔌 Installation <a name="installation"></a>

```bash
# NPM
npm install --save-dev @itsmeid/handy-utility-types

# BUN
bun add -d @itsmeid/handy-utility-types
```

## ⛏️ Built Using <a name="built_using"></a>

-   [Typescript](https://www.typescriptlang.org/)<br/>
    Strongly typed programming language that builds on JavaScript.
-   [Bun](https://bun.sh/)<br/>
    All-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.

## 📔 Docs <a name="docs"></a>



<table>
<thead>
<tr>
<th>Type alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[BypassAny](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/BypassAny.md)

</td>
<td>

Type to bypass any lint or type coverage checks.
Please use only in circumstances that require it.
See [this link](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any).

**Remarks**

Basically the same as built-in any from typescript.
**Do not use carelessly**

</td>
</tr>
<tr>
<td>

[Fn](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/Fn.md)

</td>
<td>

Type representing a function that takes specified argument types and returns a specified type.

**Example**

```ts
type MyFunction = Fn<[number, string], boolean>;
// MyFunction is (arg1: number, arg2: string) => boolean
```

</td>
</tr>
<tr>
<td>

[Class](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/Class.md)

</td>
<td>

Type representing a class constructor that takes specified argument types and returns an instance of a specified type.

**Example**

```ts
type MyClass = Class<[number, string], TempClass>;
// MyClass is a constructor function that takes (arg1: number, arg2: string) and returns an instance of TempClass
```

</td>
</tr>
<tr>
<td>

[Nullable](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/Nullable.md)

</td>
<td>

Type that allows a value to be T, null, or undefined.

**Example**

```ts
const example: Nullable<string> = null; // valid
```

</td>
</tr>
<tr>
<td>

[NullableStrict](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/NullableStrict.md)

</td>
<td>

Type that allows a value to be T or null, but not undefined.

**Example**

```ts
const example: NullableStrict<string> = null; // valid
```

</td>
</tr>
<tr>
<td>

[ObjectGeneric](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ObjectGeneric.md)

</td>
<td>

Extended TypeScript Record to define a generic object type.

**Example**

```ts
const obj: ObjectGeneric<number> = { a: 1, b: 2 };
```

</td>
</tr>
<tr>
<td>

[RequiredProps](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/RequiredProps.md)

</td>
<td>

Extended TypeScript Required to enforce specific properties as required.

**Example**

```ts
type MyType = RequiredProps<{ a?: number; b?: string }, 'a'>;
const example: MyType = { a: 1, b: 'test' }; // 'a' is required
```

</td>
</tr>
<tr>
<td>

[PartialProps](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/PartialProps.md)

</td>
<td>

Extended TypeScript Partial to make specific properties optional.

**Example**

```ts
type MyType = PartialProps<{ a: number; b: string }, 'a'>;
const example: MyType = { b: 'test' }; // 'a' is optional
```

</td>
</tr>
<tr>
<td>

[ObjectRequiredKeys](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ObjectRequiredKeys.md)

</td>
<td>

Get the required keys from an object or record type.

**Example**

```ts
type MyType = { a: number; b?: string; c: boolean };
type ObjectRequiredKeysType = ObjectRequiredKeys<MyType>; // "a" | "c"
```

</td>
</tr>
<tr>
<td>

[ObjectOptionalKeys](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ObjectOptionalKeys.md)

</td>
<td>

Get the optional keys from an object or record type.

**Example**

```ts
type MyType = { a: number; b?: string; c?: boolean };
type ObjectOptionalKeysType = ObjectOptionalKeys<MyType>; // "b" | "c"
```

</td>
</tr>
<tr>
<td>

[ObjectPath](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ObjectPath.md)

</td>
<td>

Get all of the paths from an object T as a string union.

**Example**

```ts
type MyType = { a: { b: number }; c: string };
type Paths = ObjectPath<MyType>; // "a" | "a.b" | "c"
```

</td>
</tr>
<tr>
<td>

[ObjectPathValue](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ObjectPathValue.md)

</td>
<td>

Get the type of a property based on a given path.

**Example**

```ts
type MyType = { a: { b: number }; c: string };
type ValueType = ObjectPathValue<MyType, 'a.b'>; // number
```

</td>
</tr>
<tr>
<td>

[ObjectOverwrite](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ObjectOverwrite.md)

</td>
<td>

Combines two types by overwriting properties in T with those in U.

**Example**

```ts
type Original = { a: number; b: string; c: boolean };
type Updates = { b: number; c?: string };

type Result = Overwrite<Original, Updates>;
// Result is { a: number; b: number; c?: string }
```

</td>
</tr>
<tr>
<td>

[IsEqual](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/IsEqual.md)

</td>
<td>

Check the type equality between A and B.

**Example**

```ts
type IsEqualExample = IsEqual<string, string>; // true
```

</td>
</tr>
<tr>
<td>

[IsNotEqual](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/IsNotEqual.md)

</td>
<td>

Check the type inequality between A and B.

**Example**

```ts
type IsNotEqualExample = IsNotEqual<string, number>; // true
```

</td>
</tr>
<tr>
<td>

[IsObjectLiteral](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/IsObjectLiteral.md)

</td>
<td>

Checks if a type is a plain object literal (not an array or a function).

**Example**

```ts
type MyType = { a: number; b: string };
type NotObject = string[];

type IsMyTypeObjectLiteral = IsObjectLiteral<MyType>; // true
type IsNotObjectLiteral = IsObjectLiteral<NotObject>; // false
```

</td>
</tr>
<tr>
<td>

[IsArray](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/IsArray.md)

</td>
<td>

Checks if a type is an array.

**Example**

```ts
type IsMyTypeArray = IsArray<number[]>; // true
type IsNotArray = IsArray<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsPromise](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/IsPromise.md)

</td>
<td>

A utility type that determines if a given type `T` is a Promise.

**Example**

```ts
type IsMyTypePromise = IsPromise<Promise<number>>; // true
type IsNotPromise = IsPromise<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsFunction](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/IsFunction.md)

</td>
<td>

A utility type that checks if a given type `T` is a function.

**Example**

```ts
type IsMyTypeFunction = IsFunction<() => void>; // true
type IsNotFunction = IsFunction<string>; // false
```

</td>
</tr>
<tr>
<td>

[IsClass](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/IsClass.md)

</td>
<td>

A utility type that checks if a given type `T` is a class.

**Example**

```ts
class MyClass {}
type IsMyTypeClass = IsClass<MyClass>; // true
type IsNotClass = IsClass<string>; // false
```

</td>
</tr>
<tr>
<td>

[ExtractArray](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ExtractArray.md)

</td>
<td>

Extract the value type from an array type.

**Example**

```ts
type ValueType = ExtractArray<number[]>; // number
```

</td>
</tr>
<tr>
<td>

[ExtractPromise](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ExtractPromise.md)

</td>
<td>

Extract the value type from a promise type.

**Example**

```ts
type ValueType = ExtractPromise<Promise<number>>; // number
```

</td>
</tr>
<tr>
<td>

[ExcludeOptional](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ExcludeOptional.md)

</td>
<td>

Excludes all optional keys from an object type.

**Example**

```ts
type MyType = { a: number; b?: string; c: boolean; d?: undefined };
type RequiredOnly = ExcludeOptional<MyType>;
// RequiredOnly is { a: number; c: boolean }
```

</td>
</tr>
<tr>
<td>

[ExcludeOptionalDeep](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ExcludeOptionalDeep.md)

</td>
<td>

Recursively excludes all optional keys from an object type.

**Example**

```ts
type MyType = {
  a: number;
  b?: string;
  c: { d: boolean; e?: number };
  f?: { g: string; h?: string }
};

type RequiredOnly = ExcludeOptionalDeep<MyType>;
// RequiredOnly is { a: number; c: { d: boolean } }
```

</td>
</tr>
<tr>
<td>

[ExcludeRequired](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ExcludeRequired.md)

</td>
<td>

Excludes all required keys from an object type.

**Example**

```ts
type MyType = { a: number; b?: string; c: boolean };
type OptionalOnly = ExcludeRequired<MyType>;
// OptionalOnly is { b?: string }
```

</td>
</tr>
<tr>
<td>

[ExcludeRequiredDeep](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ExcludeRequiredDeep.md)

</td>
<td>

Recursively excludes all required keys from an object type.

**Example**

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

</td>
</tr>
<tr>
<td>

[ExcludeNullable](https://github.com/itsmeid/handy-utility-types/tree/main/docs/type-aliases/ExcludeNullable.md)

</td>
<td>

Exclude null and undefined types from T excluding null and undefined.

**Example**

```ts
type NonNullableType = ExcludeNullable<string | null | undefined>; // string
```

</td>
</tr>
</tbody>
</table>
