import { describe, expect, test } from 'bun:test';
import { readFile, stat } from 'node:fs/promises';
import { $, type ShellOutput } from 'bun';

const TestType = {
	Equal: <A, B>(_expected: [A] extends [B] ? ([B] extends [A] ? true : false) : false) => {},
	Include: <A, B>(_expected: (A extends B ? true : false) & (B extends A ? true : false)) => {}
};

type TObj = {
	a: string;
	b?: string;
	c: { a: string; b?: string };
	d?: { a: string; b?: string }[];
	e: { a: string; b?: string }[];
};

const createDefaultObj = <TOverwrite extends ObjectGeneric>(
	overwrite: TOverwrite
): ObjectOverwrite<TObj, TOverwrite> => {
	return {
		a: '',
		b: '',
		c: {
			a: '',
			b: ''
		},
		d: [
			{
				a: '',
				b: ''
			}
		],
		e: [
			{
				a: '',
				b: ''
			}
		],
		...overwrite
	};
};

const getRandomElement = <A extends Array<BypassAny>>(arr: A) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

describe('utility-types > type test', () => {
	test('BypassAny can be anything and bypass warn', () => {
		let temp: BypassAny;
		temp = 1;
		temp = '1';
		temp = {};
		temp = [];
		temp = null;
		temp = undefined;

		// biome-ignore lint/suspicious/noExplicitAny: Expected
		TestType.Equal<typeof temp, any>(true);
		expect(temp).toBeUndefined();
	});

	test('Fn is function', () => {
		const temp: Fn<[status: boolean], boolean> = (status: boolean) => {
			return status;
		};

		TestType.Equal<typeof temp, (status: boolean) => boolean>(true);
		TestType.Equal<typeof temp, () => void>(false);
		expect(temp).toBeFunction();
	});

	test('Class is class', () => {
		class TempClass {
			public id: number | string;

			constructor(id: string);
			constructor(id: number);
			constructor(id: number | string) {
				this.id = id;
			}
		}

		const temp: Class<[id: string], TempClass> = TempClass;
		TestType.Equal<typeof temp.prototype, TempClass>(true);
		expect(temp).toBeObject();
	});

	test('Nullable append null and undefined to type', () => {
		let temp: Nullable<string>;
		TestType.Equal<typeof temp, string | null | undefined>(true);
		temp = '';
		TestType.Equal<typeof temp, string>(true);
		temp = null;
		TestType.Equal<typeof temp, null>(true);
		temp = undefined;
		TestType.Equal<typeof temp, undefined>(true);
		expect(temp).toBeUndefined();
	});

	test('NullableStrict append null to type', () => {
		let temp: NullableStrict<string>;
		TestType.Equal<typeof temp, string | null>(true);
		temp = '';
		TestType.Equal<typeof temp, string>(true);
		temp = null;
		TestType.Equal<typeof temp, null>(true);
		TestType.Equal<typeof temp, undefined>(false);
		expect(temp).toBeNull();
	});

	test('ObjectGeneric is object', () => {
		let temp: ObjectGeneric<string> = {};
		temp = {
			id: 'test'
		};
		TestType.Equal<typeof temp, Record<PropertyKey, string>>(true);
		TestType.Equal<typeof temp, Record<PropertyKey, number>>(false);
		expect(temp).toBeObject();
	});

	test('RequiredProps makes specified keys required', () => {
		const temp: RequiredProps<TObj, 'b'> = createDefaultObj({ b: '' });
		TestType.Equal<typeof temp.b, string>(true);
		TestType.Equal<typeof temp.b, undefined>(false);
		TestType.Equal<typeof temp, TObj>(false);
		expect(temp).toBeObject();
	});

	test('PartialProps makes specific properties optional', () => {
		const temp: PartialProps<TObj, 'a'> = createDefaultObj({ a: undefined });
		TestType.Equal<typeof temp.a, string | undefined>(true);
		TestType.Equal<typeof temp, TObj>(false);
		expect(temp).toBeObject();
	});

	test('ObjectRequiredKeys extracts required keys', () => {
		const possibleValue: ObjectRequiredKeys<TObj>[] = ['a', 'c', 'e'] as (typeof temp)[];
		const temp: ObjectRequiredKeys<TObj> = getRandomElement(possibleValue);
		TestType.Equal<typeof temp, 'a' | 'c' | 'e'>(true);
		TestType.Equal<typeof temp, 'b' | 'd'>(false);
		TestType.Equal<typeof temp, keyof TObj>(false);
		expect(temp).toBeOneOf(possibleValue);
	});

	test('ObjectOptionalKeys extracts optional keys', () => {
		const possibleValue: ObjectOptionalKeys<TObj>[] = ['b', 'd'];
		const temp: ObjectOptionalKeys<TObj> = getRandomElement(possibleValue);
		TestType.Equal<typeof temp, 'b' | 'd'>(true);
		TestType.Equal<typeof temp, 'a' | 'c' | 'e'>(false);
		TestType.Equal<typeof temp, keyof TObj>(false);
		expect(temp).toBeOneOf(possibleValue);
	});

	test('ObjectPath extracts paths from an object', () => {
		const possibleValue: ObjectPath<TObj>[] = ['a', 'b', 'c', 'c.a', 'c.b', 'd', 'e'];
		const temp: ObjectPath<TObj> = getRandomElement(possibleValue);
		TestType.Equal<typeof temp, 'a' | 'b' | 'c' | 'c.a' | 'c.b' | 'd' | 'e'>(true);
		TestType.Equal<typeof temp, 'a' | 'b' | 'x' | 'x.a' | 'x.b' | 'y' | 'z'>(false);
		TestType.Equal<typeof temp, keyof TObj>(false);
		expect(temp).toBeOneOf(possibleValue);
	});

	test('ObjectPathValue extracts value type from path', () => {
		const temp: ObjectPathValue<TObj, 'c.a'> = '';
		TestType.Equal<typeof temp, TObj['c']['a']>(true);
		TestType.Equal<typeof temp, string>(true);
		TestType.Equal<typeof temp, number>(false);
		expect(temp).toBeString();
	});

	test('ObjectOverwrite combines two types', () => {
		const value: TObj = createDefaultObj({});
		TestType.Equal<typeof value.a, string>(true);
		TestType.Equal<typeof value.a, number>(false);
		expect(value.a).toBeString();

		const temp: ObjectOverwrite<TObj, { a: number }> = Object.assign(value, { a: 1 });
		TestType.Equal<typeof temp.a, number>(true);
		TestType.Equal<typeof temp.a, string>(false);
		expect(temp.a).toBeNumber();
	});

	test('IsEqual checks type equality', () => {
		type A = 'a' | 'b';
		type B = 'a' | 'b';
		const temp: IsEqual<A, B> = true;
		TestType.Equal<typeof temp, IsEqual<A, B>>(true);
		TestType.Equal<typeof temp, IsEqual<A, B | 'c'>>(false);
		expect(temp).toBeTrue();
	});

	test('IsNotEqual checks type inequality', () => {
		type A = 'a' | 'b';
		type B = 'a' | 'b' | 'c';
		const temp: IsNotEqual<A, B> = true;
		TestType.Equal<typeof temp, IsNotEqual<A, B>>(true);
		TestType.Equal<typeof temp, IsNotEqual<A, A>>(false);
		expect(temp).toBeTrue();
	});

	test('IsObjectLiteral checks if type is an object literal', () => {
		const temp: IsObjectLiteral<TObj> = true;
		TestType.Equal<typeof temp, true>(true);
		TestType.Equal<typeof temp, false>(false);
		expect(temp).toBeTrue();
	});

	test('IsArray checks if type is an array', () => {
		const temp: IsArray<[]> = true;
		TestType.Equal<typeof temp, true>(true);
		TestType.Equal<typeof temp, false>(false);
		expect(temp).toBeTrue();
	});

	test('IsPromise checks if type is a promise', () => {
		const temp: IsPromise<Promise<boolean>> = true;
		TestType.Equal<typeof temp, true>(true);
		TestType.Equal<typeof temp, false>(false);
		expect(temp).toBeTrue();
	});

	test('IsFunction checks if type is a function', () => {
		class TempClass {}
		const temp: IsFunction<() => void> = true;
		TestType.Equal<typeof temp, true>(true);
		TestType.Equal<typeof temp, false>(false);
		TestType.Equal<IsFunction<TempClass>, true>(false);
		TestType.Equal<IsFunction<string>, true>(false);
		expect(temp).toBeTrue();
	});

	test('IsClass checks if type is a class', () => {
		class TempClass {}
		const temp: IsClass<TempClass> = true;
		TestType.Equal<typeof temp, true>(true);
		TestType.Equal<typeof temp, false>(false);
		TestType.Equal<IsClass<() => void>, true>(false);
		TestType.Equal<IsClass<string>, true>(false);
		expect(temp).toBeTrue();
	});

	test('ExtractArray extracts value type from array', () => {
		const temp: ExtractArray<boolean[]> = true;
		TestType.Equal<typeof temp, true>(true);
		TestType.Equal<typeof temp, false>(false);
		expect(temp).toBeTrue();
	});

	test('ExtractPromise extracts value type from promise', () => {
		const temp: ExtractPromise<Promise<boolean>> = true;
		TestType.Equal<typeof temp, true>(true);
		TestType.Equal<typeof temp, false>(false);
		expect(temp).toBeTrue();
	});

	test('ExcludeOptional excludes optional keys from an object', () => {
		const temp: ExcludeOptional<TObj> = { a: '', c: { a: '', b: undefined }, e: [{ a: '', b: undefined }] };
		TestType.Equal<keyof typeof temp, 'a' | 'c' | 'e'>(true);
		TestType.Equal<typeof temp.c, { a: string; b?: string }>(true);
		TestType.Equal<typeof temp.e, { a: string; b?: string }[]>(true);
		TestType.Equal<keyof typeof temp, keyof TObj>(false);
		expect(temp).toBeObject();
	});

	test('ExcludeOptionalDeep recursively excludes optional keys', () => {
		const temp: ExcludeOptionalDeep<TObj> = { a: '', c: { a: '' }, e: [{ a: '' }] };
		TestType.Equal<keyof typeof temp, 'a' | 'c' | 'e'>(true);
		TestType.Equal<typeof temp.c, { a: string }>(true);
		TestType.Equal<typeof temp.e, { a: string }[]>(true);
		TestType.Equal<keyof typeof temp, keyof TObj>(false);
		expect(temp).toBeObject();
	});

	test('ExcludeRequired excludes required keys', () => {
		const temp: ExcludeRequired<TObj> = { b: '', d: [{ a: '', b: undefined }] };
		TestType.Equal<keyof typeof temp, 'b' | 'd'>(true);
		TestType.Equal<typeof temp.b, string | undefined>(true);
		TestType.Equal<typeof temp.d, { a: string; b?: string }[] | undefined>(true);
		TestType.Equal<keyof typeof temp, keyof TObj>(false);
		expect(temp).toBeObject();
	});

	test('ExcludeRequiredDeep recursively excludes required keys', () => {
		const temp: ExcludeRequiredDeep<TObj> = { b: undefined, d: [{ b: undefined }] };
		TestType.Equal<keyof typeof temp, 'b' | 'd'>(true);
		TestType.Equal<typeof temp.b, string | undefined>(true);
		TestType.Equal<typeof temp.d, { b?: string }[] | undefined>(true);
		TestType.Equal<keyof typeof temp, keyof TObj>(false);
		expect(temp).toBeObject();
	});

	test('ExcludeNullable excludes null and undefined', () => {
		const temp: ExcludeNullable<TObj['b']> = '';
		TestType.Equal<typeof temp, string>(true);
		TestType.Equal<typeof temp, string | null | undefined>(false);
		expect(temp).toBeString();
	});
});

describe('utility-types > modular & reference comparison', () => {
	test('should be the same', async () => {
		const modular = (await readFile('lib/modular/utility-types.ts', 'utf-8')).replaceAll('export ', '');
		const reference = await readFile('lib/reference/utility-types.d.ts', 'utf-8');
		expect(modular).toBe(reference);
	});
});

describe('utility-types > snapshot', () => {
	test('modular', async () => {
		const { size } = await stat('lib/modular/utility-types.ts');
		expect(size).toMatchSnapshot();
	});

	test('reference', async () => {
		const { size } = await stat('lib/reference/utility-types.d.ts');
		expect(size).toMatchSnapshot();
	});
});

describe('utility-types > ts compiler check', () => {
	test('should be no error', async () => {
		const result = await $`bunx tsc`.catch((error: ShellOutput) => {
			return error;
		});
		expect(result.exitCode).toBe(0);
	});
});
