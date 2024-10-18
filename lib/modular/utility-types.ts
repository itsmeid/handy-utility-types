/**
 * Type to bypass any lint or type coverage checks.
 * Please use only in circumstances that require it.
 * See {@link https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any this link}.
 *
 * @remarks Basically the same as built-in any from typescript.
 * **Do not use carelessly**
 */
// biome-ignore lint/suspicious/noExplicitAny: Bypassed
export type BypassAny = any;

/**
 * Type representing a function that takes specified argument types and returns a specified type.
 *
 * @template Args - The argument types of the function as an array.
 * @template Return - The return type of the function.
 * @example
 * type MyFunction = Fn<[number, string], boolean>;
 * // MyFunction is (arg1: number, arg2: string) => boolean
 */
export type Fn<Args extends Array<BypassAny> = [], Return = BypassAny> = (...args: Args) => Return;

/**
 * Type representing a class constructor that takes specified argument types and returns an instance of a specified type.
 *
 * @template Args - The argument types of the constructor as an array.
 * @template Return - The type of the instance returned by the constructor.
 * @example
 * type MyClass = Class<[number, string], TempClass>;
 * // MyClass is a constructor function that takes (arg1: number, arg2: string) and returns an instance of TempClass
 */
export type Class<Args extends Array<BypassAny> = [], Return = BypassAny> = {
	new (...args: Args): Return;
	prototype: Return;
};

/**
 * Type that allows a value to be T, null, or undefined.
 *
 * @template T - The original type.
 * @example
 * const example: Nullable<string> = null; // valid
 */
export type Nullable<T> = T | null | undefined;

/**
 * Type that allows a value to be T or null, but not undefined.
 *
 * @template T - The original type.
 * @example
 * const example: NullableStrict<string> = null; // valid
 */
export type NullableStrict<T> = T | null;

/**
 * Extended TypeScript {@link Record} to define a generic object type.
 *
 * @template T - The type of the values in the object, defaults to 'any'.
 * @example
 * const obj: ObjectGeneric<number> = { a: 1, b: 2 };
 */
export type ObjectGeneric<T = BypassAny> = Record<PropertyKey, T>;

/**
 * Extended TypeScript {@link Required} to enforce specific properties as required.
 *
 * @template T - The original object type.
 * @template K - The keys of T that should be required.
 * @example
 * type MyType = RequiredProps<{ a?: number; b?: string }, 'a'>;
 * const example: MyType = { a: 1, b: 'test' }; // 'a' is required
 */
export type RequiredProps<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/**
 * Extended TypeScript {@link Partial} to make specific properties optional.
 *
 * @template T - The original object type.
 * @template K - The keys of T that should be optional.
 * @example
 * type MyType = PartialProps<{ a: number; b: string }, 'a'>;
 * const example: MyType = { b: 'test' }; // 'a' is optional
 */
export type PartialProps<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

/**
 * Get the required keys from an object or record type.
 *
 * @template T - The object type to extract required keys from.
 * @returns The keys of T that are required.
 * @example
 * type MyType = { a: number; b?: string; c: boolean };
 * type ObjectRequiredKeysType = ObjectRequiredKeys<MyType>; // "a" | "c"
 */
export type ObjectRequiredKeys<T> = T extends ObjectGeneric
	? {
			[K in keyof T]-?: undefined extends T[K] ? never : K;
		}[keyof T]
	: never;

/**
 * Get the optional keys from an object or record type.
 *
 * @template T - The object type to extract optional keys from.
 * @returns The keys of T that are optional.
 * @example
 * type MyType = { a: number; b?: string; c?: boolean };
 * type ObjectOptionalKeysType = ObjectOptionalKeys<MyType>; // "b" | "c"
 */
export type ObjectOptionalKeys<T> = T extends ObjectGeneric
	? {
			[K in keyof T]-?: undefined extends T[K] ? K : never;
		}[keyof T]
	: never;

/**
 * Get all of the paths from an object T as a string union.
 *
 * @template T - The object type to extract paths from.
 * @returns A string union of paths in the object.
 * @example
 * type MyType = { a: { b: number }; c: string };
 * type Paths = ObjectPath<MyType>; // "a" | "a.b" | "c"
 */
export type ObjectPath<T> = T extends Array<BypassAny>
	? never
	: T extends ObjectGeneric
		? {
				[K in keyof T]-?: K extends string ? K | `${K}.${ObjectPath<T[K]>}` : never;
			}[keyof T]
		: never;

/**
 * Get the type of a property based on a given path.
 *
 * @template T - The object type to extract value from.
 * @template K - The path string to navigate through the object.
 * @returns The type of the property at the specified path.
 * @example
 * type MyType = { a: { b: number }; c: string };
 * type ValueType = ObjectPathValue<MyType, 'a.b'>; // number
 */
export type ObjectPathValue<T, K extends ObjectPath<T> | ''> = K extends ''
	? T
	: K extends `${infer Key}.${infer Rest}`
		? Key extends keyof T
			? Rest extends ObjectPath<T[Key]>
				? ObjectPathValue<T[Key], Rest>
				: never
			: never
		: K extends keyof T
			? T[K]
			: never;

/**
 * Combines two types by overwriting properties in T with those in U.
 *
 * @template T - The original type.
 * @template U - The type with properties to overwrite T's properties.
 * @example
 * type Original = { a: number; b: string; c: boolean };
 * type Updates = { b: number; c?: string };
 *
 * type Result = Overwrite<Original, Updates>;
 * // Result is { a: number; b: number; c?: string }
 */
export type ObjectOverwrite<T, U> = Omit<T, keyof U> & U;

/**
 * Check the type equality between A and B.
 *
 * @template A - The first type to compare.
 * @template B - The second type to compare.
 * @returns true if types A and B are equal, otherwise false.
 * @example
 * type IsEqualExample = IsEqual<string, string>; // true
 */
export type IsEqual<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

/**
 * Check the type inequality between A and B.
 *
 * @template A - The first type to compare.
 * @template B - The second type to compare.
 * @returns true if types A and B are not equal, otherwise false.
 * @example
 * type IsNotEqualExample = IsNotEqual<string, number>; // true
 */
export type IsNotEqual<A, B> = IsEqual<A, B> extends false ? true : false;

/**
 * Checks if a type is a plain object literal (not an array or a function).
 *
 * @template T - The type to check.
 * @example
 * type MyType = { a: number; b: string };
 * type NotObject = string[];
 *
 * type IsMyTypeObjectLiteral = IsObjectLiteral<MyType>; // true
 * type IsNotObjectLiteral = IsObjectLiteral<NotObject>; // false
 */
export type IsObjectLiteral<T> = T extends ObjectGeneric
	? IsFunction<T> extends true
		? false
		: IsArray<T> extends true
			? false
			: true
	: false;

/**
 * Checks if a type is an array.
 *
 * @template T - The type to check.
 * @example
 * type IsMyTypeArray = IsArray<number[]>; // true
 * type IsNotArray = IsArray<string>; // false
 */
export type IsArray<T> = T extends Array<infer _> ? true : false;

/**
 * A utility type that determines if a given type `T` is a Promise.
 *
 * @template T - The type to check.
 * @example
 * type IsMyTypePromise = IsPromise<Promise<number>>; // true
 * type IsNotPromise = IsPromise<string>; // false
 */
export type IsPromise<T> = T extends Promise<infer _> ? true : false;

/**
 * A utility type that checks if a given type `T` is a function.
 *
 * @template T - The type to check.
 * @example
 * type IsMyTypeFunction = IsFunction<() => void>; // true
 * type IsNotFunction = IsFunction<string>; // false
 */
export type IsFunction<T> = T extends Fn ? true : false;

/**
 * A utility type that checks if a given type `T` is a class.
 *
 * @template T - The type to check.
 * @example
 * class MyClass {}
 * type IsMyTypeClass = IsClass<MyClass>; // true
 * type IsNotClass = IsClass<string>; // false
 */
export type IsClass<T> = Class extends T ? true : false;

/**
 * Extract the value type from an array type.
 *
 * @template T - The input type which should be an array.
 * @returns The type of the elements in the array, or never if T is not an array.
 * @example
 * type ValueType = ExtractArray<number[]>; // number
 */
export type ExtractArray<T> = T extends Array<infer U> ? U : never;

/**
 * Extract the value type from a promise type.
 *
 * @template T - The input type which should be a promise.
 * @returns The type of the return value in the promise, or never if T is not a promise.
 * @example
 * type ValueType = ExtractPromise<Promise<number>>; // number
 */
export type ExtractPromise<T> = T extends Promise<infer U> ? U : never;

/**
 * Excludes all optional keys from an object type.
 *
 * @template T - The original object type.
 * @example
 * type MyType = { a: number; b?: string; c: boolean; d?: undefined };
 * type RequiredOnly = ExcludeOptional<MyType>;
 * // RequiredOnly is { a: number; c: boolean }
 */
export type ExcludeOptional<T> = T extends ObjectGeneric
	? {
			[K in keyof T as undefined extends T[K] ? never : K]: T[K];
		}
	: never;

/**
 * Recursively excludes all optional keys from an object type.
 *
 * @template T - The original object type.
 * @example
 * type MyType = {
 *   a: number;
 *   b?: string;
 *   c: { d: boolean; e?: number };
 *   f?: { g: string; h?: string }
 * };
 *
 * type RequiredOnly = ExcludeOptionalDeep<MyType>;
 * // RequiredOnly is { a: number; c: { d: boolean } }
 */
export type ExcludeOptionalDeep<T> = T extends ObjectGeneric
	? {
			[K in keyof T as undefined extends T[K] ? never : K]: T[K] extends Array<infer E>
				? Array<ExcludeOptionalDeep<E>>
				: ExcludeOptionalDeep<T[K]>;
		}
	: T;

/**
 * Excludes all required keys from an object type.
 *
 * @template T - The original object type.
 * @example
 * type MyType = { a: number; b?: string; c: boolean };
 * type OptionalOnly = ExcludeRequired<MyType>;
 * // OptionalOnly is { b?: string }
 */
export type ExcludeRequired<T> = T extends ObjectGeneric
	? {
			[K in keyof T as undefined extends T[K] ? K : never]: T[K];
		}
	: never;

/**
 * Recursively excludes all required keys from an object type.
 *
 * @template T - The original object type.
 * @example
 * type MyType = {
 *   a: number;
 *   b?: string;
 *   c: { d: boolean; e?: number };
 *   f?: { g: string; h?: string }[];
 *   i: { j: string; k?: string }
 * };
 *
 * type OptionalOnly = ExcludeRequiredDeep<MyType>;
 * // OptionalOnly is { b?: string; c: { e?: number }; f?: { g: string; h?: string }[]; i: { k?: string } }
 */
export type ExcludeRequiredDeep<T> = T extends ObjectGeneric
	? {
			[K in keyof T as undefined extends T[K] ? K : never]: Array<BypassAny> extends T[K]
				? Array<ExcludeRequiredDeep<ExtractArray<T[K]>>>
				: ExcludeRequiredDeep<T[K]>;
		}
	: T;

/**
 * Exclude null and undefined types from T excluding null and undefined.
 *
 * @template T - The original type.
 * @example
 * type NonNullableType = ExcludeNullable<string | null | undefined>; // string
 */
export type ExcludeNullable<T> = Exclude<T, null | undefined>;
