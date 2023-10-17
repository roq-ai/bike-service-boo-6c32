/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model business_owner
 *
 */
export type business_owner = $Result.DefaultSelection<Prisma.$business_ownerPayload>;
/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model garage
 *
 */
export type garage = $Result.DefaultSelection<Prisma.$garagePayload>;
/**
 * Model garage_manager
 *
 */
export type garage_manager = $Result.DefaultSelection<Prisma.$garage_managerPayload>;
/**
 * Model mechanic
 *
 */
export type mechanic = $Result.DefaultSelection<Prisma.$mechanicPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Business_owners
 * const business_owners = await prisma.business_owner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.business_owner`: Exposes CRUD operations for the **business_owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   */
  get business_owner(): Prisma.business_ownerDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.garage`: Exposes CRUD operations for the **garage** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Garages
   * const garages = await prisma.garage.findMany()
   * ```
   */
  get garage(): Prisma.garageDelegate<ExtArgs>;

  /**
   * `prisma.garage_manager`: Exposes CRUD operations for the **garage_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Garage_managers
   * const garage_managers = await prisma.garage_manager.findMany()
   * ```
   */
  get garage_manager(): Prisma.garage_managerDelegate<ExtArgs>;

  /**
   * `prisma.mechanic`: Exposes CRUD operations for the **mechanic** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Mechanics
   * const mechanics = await prisma.mechanic.findMany()
   * ```
   */
  get mechanic(): Prisma.mechanicDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    business_owner: 'business_owner';
    customer: 'customer';
    garage: 'garage';
    garage_manager: 'garage_manager';
    mechanic: 'mechanic';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'business_owner' | 'customer' | 'garage' | 'garage_manager' | 'mechanic' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      business_owner: {
        payload: Prisma.$business_ownerPayload<ExtArgs>;
        fields: Prisma.business_ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.business_ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.business_ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findFirst: {
            args: Prisma.business_ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.business_ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findMany: {
            args: Prisma.business_ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>[];
          };
          create: {
            args: Prisma.business_ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          createMany: {
            args: Prisma.business_ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.business_ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          update: {
            args: Prisma.business_ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          deleteMany: {
            args: Prisma.business_ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.business_ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.business_ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          aggregate: {
            args: Prisma.Business_ownerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness_owner>;
          };
          groupBy: {
            args: Prisma.business_ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerGroupByOutputType>[];
          };
          count: {
            args: Prisma.business_ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerCountAggregateOutputType> | number;
          };
        };
      };
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      garage: {
        payload: Prisma.$garagePayload<ExtArgs>;
        fields: Prisma.garageFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.garageFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.garageFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload>;
          };
          findFirst: {
            args: Prisma.garageFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.garageFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload>;
          };
          findMany: {
            args: Prisma.garageFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload>[];
          };
          create: {
            args: Prisma.garageCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload>;
          };
          createMany: {
            args: Prisma.garageCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.garageDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload>;
          };
          update: {
            args: Prisma.garageUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload>;
          };
          deleteMany: {
            args: Prisma.garageDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.garageUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.garageUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garagePayload>;
          };
          aggregate: {
            args: Prisma.GarageAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGarage>;
          };
          groupBy: {
            args: Prisma.garageGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GarageGroupByOutputType>[];
          };
          count: {
            args: Prisma.garageCountArgs<ExtArgs>;
            result: $Utils.Optional<GarageCountAggregateOutputType> | number;
          };
        };
      };
      garage_manager: {
        payload: Prisma.$garage_managerPayload<ExtArgs>;
        fields: Prisma.garage_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.garage_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.garage_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload>;
          };
          findFirst: {
            args: Prisma.garage_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.garage_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload>;
          };
          findMany: {
            args: Prisma.garage_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload>[];
          };
          create: {
            args: Prisma.garage_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload>;
          };
          createMany: {
            args: Prisma.garage_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.garage_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload>;
          };
          update: {
            args: Prisma.garage_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload>;
          };
          deleteMany: {
            args: Prisma.garage_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.garage_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.garage_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$garage_managerPayload>;
          };
          aggregate: {
            args: Prisma.Garage_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGarage_manager>;
          };
          groupBy: {
            args: Prisma.garage_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Garage_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.garage_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Garage_managerCountAggregateOutputType> | number;
          };
        };
      };
      mechanic: {
        payload: Prisma.$mechanicPayload<ExtArgs>;
        fields: Prisma.mechanicFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.mechanicFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.mechanicFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          findFirst: {
            args: Prisma.mechanicFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.mechanicFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          findMany: {
            args: Prisma.mechanicFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>[];
          };
          create: {
            args: Prisma.mechanicCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          createMany: {
            args: Prisma.mechanicCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.mechanicDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          update: {
            args: Prisma.mechanicUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          deleteMany: {
            args: Prisma.mechanicDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.mechanicUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.mechanicUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$mechanicPayload>;
          };
          aggregate: {
            args: Prisma.MechanicAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMechanic>;
          };
          groupBy: {
            args: Prisma.mechanicGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MechanicGroupByOutputType>[];
          };
          count: {
            args: Prisma.mechanicCountArgs<ExtArgs>;
            result: $Utils.Optional<MechanicCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type GarageCountOutputType
   */

  export type GarageCountOutputType = {
    garage_manager: number;
  };

  export type GarageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garage_manager?: boolean | GarageCountOutputTypeCountGarage_managerArgs;
  };

  // Custom InputTypes

  /**
   * GarageCountOutputType without action
   */
  export type GarageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GarageCountOutputType
     */
    select?: GarageCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GarageCountOutputType without action
   */
  export type GarageCountOutputTypeCountGarage_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: garage_managerWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    business_owner: number;
    customer: number;
    garage: number;
    garage_manager: number;
    mechanic: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business_owner?: boolean | UserCountOutputTypeCountBusiness_ownerArgs;
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
    garage?: boolean | UserCountOutputTypeCountGarageArgs;
    garage_manager?: boolean | UserCountOutputTypeCountGarage_managerArgs;
    mechanic?: boolean | UserCountOutputTypeCountMechanicArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusiness_ownerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: business_ownerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGarageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: garageWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGarage_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: garage_managerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: mechanicWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model business_owner
   */

  export type AggregateBusiness_owner = {
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  export type Business_ownerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    business_name: string | null;
    business_address: string | null;
    business_city: string | null;
    business_state: string | null;
    business_zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    business_name: string | null;
    business_address: string | null;
    business_city: string | null;
    business_state: string | null;
    business_zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerCountAggregateOutputType = {
    id: number;
    user_id: number;
    business_name: number;
    business_address: number;
    business_city: number;
    business_state: number;
    business_zip_code: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Business_ownerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    business_name?: true;
    business_address?: true;
    business_city?: true;
    business_state?: true;
    business_zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    business_name?: true;
    business_address?: true;
    business_city?: true;
    business_state?: true;
    business_zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    business_name?: true;
    business_address?: true;
    business_city?: true;
    business_state?: true;
    business_zip_code?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Business_ownerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owner to aggregate.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned business_owners
     **/
    _count?: true | Business_ownerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Business_ownerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type GetBusiness_ownerAggregateType<T extends Business_ownerAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness_owner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness_owner[P]>
      : GetScalarType<T[P], AggregateBusiness_owner[P]>;
  };

  export type business_ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithAggregationInput | business_ownerOrderByWithAggregationInput[];
    by: Business_ownerScalarFieldEnum[] | Business_ownerScalarFieldEnum;
    having?: business_ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Business_ownerCountAggregateInputType | true;
    _min?: Business_ownerMinAggregateInputType;
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type Business_ownerGroupByOutputType = {
    id: string;
    user_id: string;
    business_name: string | null;
    business_address: string | null;
    business_city: string | null;
    business_state: string | null;
    business_zip_code: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  type GetBusiness_ownerGroupByPayload<T extends business_ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Business_ownerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Business_ownerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>
          : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>;
      }
    >
  >;

  export type business_ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        business_name?: boolean;
        business_address?: boolean;
        business_city?: boolean;
        business_state?: boolean;
        business_zip_code?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business_owner']
    >;

  export type business_ownerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    business_name?: boolean;
    business_address?: boolean;
    business_city?: boolean;
    business_state?: boolean;
    business_zip_code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type business_ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $business_ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business_owner';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        business_name: string | null;
        business_address: string | null;
        business_city: string | null;
        business_state: string | null;
        business_zip_code: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business_owner']
    >;
    composites: {};
  };

  type business_ownerGetPayload<S extends boolean | null | undefined | business_ownerDefaultArgs> = $Result.GetResult<
    Prisma.$business_ownerPayload,
    S
  >;

  type business_ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    business_ownerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Business_ownerCountAggregateInputType | true;
  };

  export interface business_ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business_owner']; meta: { name: 'business_owner' } };
    /**
     * Find zero or one Business_owner that matches the filter.
     * @param {business_ownerFindUniqueArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends business_ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business_owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {business_ownerFindUniqueOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends business_ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends business_ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends business_ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Business_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Business_owners
     * const business_owners = await prisma.business_owner.findMany()
     *
     * // Get first 10 Business_owners
     * const business_owners = await prisma.business_owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const business_ownerWithIdOnly = await prisma.business_owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends business_ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business_owner.
     * @param {business_ownerCreateArgs} args - Arguments to create a Business_owner.
     * @example
     * // Create one Business_owner
     * const Business_owner = await prisma.business_owner.create({
     *   data: {
     *     // ... data to create a Business_owner
     *   }
     * })
     *
     **/
    create<T extends business_ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerCreateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Business_owners.
     *     @param {business_ownerCreateManyArgs} args - Arguments to create many Business_owners.
     *     @example
     *     // Create many Business_owners
     *     const business_owner = await prisma.business_owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends business_ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business_owner.
     * @param {business_ownerDeleteArgs} args - Arguments to delete one Business_owner.
     * @example
     * // Delete one Business_owner
     * const Business_owner = await prisma.business_owner.delete({
     *   where: {
     *     // ... filter to delete one Business_owner
     *   }
     * })
     *
     **/
    delete<T extends business_ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerDeleteArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Business_owner.
     * @param {business_ownerUpdateArgs} args - Arguments to update one Business_owner.
     * @example
     * // Update one Business_owner
     * const business_owner = await prisma.business_owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends business_ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Business_owners.
     * @param {business_ownerDeleteManyArgs} args - Arguments to filter Business_owners to delete.
     * @example
     * // Delete a few Business_owners
     * const { count } = await prisma.business_owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends business_ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Business_owners
     * const business_owner = await prisma.business_owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends business_ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business_owner.
     * @param {business_ownerUpsertArgs} args - Arguments to update or create a Business_owner.
     * @example
     * // Update or create a Business_owner
     * const business_owner = await prisma.business_owner.upsert({
     *   create: {
     *     // ... data to create a Business_owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business_owner we want to update
     *   }
     * })
     **/
    upsert<T extends business_ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpsertArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerCountArgs} args - Arguments to filter Business_owners to count.
     * @example
     * // Count the number of Business_owners
     * const count = await prisma.business_owner.count({
     *   where: {
     *     // ... the filter for the Business_owners we want to count
     *   }
     * })
     **/
    count<T extends business_ownerCountArgs>(
      args?: Subset<T, business_ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Business_ownerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Business_ownerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Business_ownerAggregateArgs>(
      args: Subset<T, Business_ownerAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusiness_ownerAggregateType<T>>;

    /**
     * Group by Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends business_ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: business_ownerGroupByArgs['orderBy'] }
        : { orderBy?: business_ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, business_ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusiness_ownerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business_owner model
     */
    readonly fields: business_ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business_owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__business_ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business_owner model
   */
  interface business_ownerFieldRefs {
    readonly id: FieldRef<'business_owner', 'String'>;
    readonly user_id: FieldRef<'business_owner', 'String'>;
    readonly business_name: FieldRef<'business_owner', 'String'>;
    readonly business_address: FieldRef<'business_owner', 'String'>;
    readonly business_city: FieldRef<'business_owner', 'String'>;
    readonly business_state: FieldRef<'business_owner', 'String'>;
    readonly business_zip_code: FieldRef<'business_owner', 'String'>;
    readonly created_at: FieldRef<'business_owner', 'DateTime'>;
    readonly updated_at: FieldRef<'business_owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business_owner findUnique
   */
  export type business_ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner findUniqueOrThrow
   */
  export type business_ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the business_owner
       */
      select?: business_ownerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: business_ownerInclude<ExtArgs> | null;
      /**
       * Filter, which business_owner to fetch.
       */
      where: business_ownerWhereUniqueInput;
    };

  /**
   * business_owner findFirst
   */
  export type business_ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findFirstOrThrow
   */
  export type business_ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findMany
   */
  export type business_ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owners to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner create
   */
  export type business_ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a business_owner.
     */
    data: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
  };

  /**
   * business_owner createMany
   */
  export type business_ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many business_owners.
     */
    data: business_ownerCreateManyInput | business_ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business_owner update
   */
  export type business_ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a business_owner.
     */
    data: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
    /**
     * Choose, which business_owner to update.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner updateMany
   */
  export type business_ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update business_owners.
     */
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyInput>;
    /**
     * Filter which business_owners to update
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner upsert
   */
  export type business_ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the business_owner to update in case it exists.
     */
    where: business_ownerWhereUniqueInput;
    /**
     * In case the business_owner found by the `where` argument doesn't exist, create a new business_owner with this data.
     */
    create: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
    /**
     * In case the business_owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
  };

  /**
   * business_owner delete
   */
  export type business_ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter which business_owner to delete.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner deleteMany
   */
  export type business_ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owners to delete
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner without action
   */
  export type business_ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
  };

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    user_id: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    user_id: string;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        zip_code?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly address: FieldRef<'customer', 'String'>;
    readonly city: FieldRef<'customer', 'String'>;
    readonly state: FieldRef<'customer', 'String'>;
    readonly zip_code: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model garage
   */

  export type AggregateGarage = {
    _count: GarageCountAggregateOutputType | null;
    _min: GarageMinAggregateOutputType | null;
    _max: GarageMaxAggregateOutputType | null;
  };

  export type GarageMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type GarageMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type GarageCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    opening_hours: number;
    closing_hours: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type GarageMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type GarageMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type GarageCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type GarageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which garage to aggregate.
     */
    where?: garageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garages to fetch.
     */
    orderBy?: garageOrderByWithRelationInput | garageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: garageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned garages
     **/
    _count?: true | GarageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GarageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GarageMaxAggregateInputType;
  };

  export type GetGarageAggregateType<T extends GarageAggregateArgs> = {
    [P in keyof T & keyof AggregateGarage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarage[P]>
      : GetScalarType<T[P], AggregateGarage[P]>;
  };

  export type garageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: garageWhereInput;
    orderBy?: garageOrderByWithAggregationInput | garageOrderByWithAggregationInput[];
    by: GarageScalarFieldEnum[] | GarageScalarFieldEnum;
    having?: garageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GarageCountAggregateInputType | true;
    _min?: GarageMinAggregateInputType;
    _max?: GarageMaxAggregateInputType;
  };

  export type GarageGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: GarageCountAggregateOutputType | null;
    _min: GarageMinAggregateOutputType | null;
    _max: GarageMaxAggregateOutputType | null;
  };

  type GetGarageGroupByPayload<T extends garageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GarageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GarageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GarageGroupByOutputType[P]>
          : GetScalarType<T[P], GarageGroupByOutputType[P]>;
      }
    >
  >;

  export type garageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      opening_hours?: boolean;
      closing_hours?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      garage_manager?: boolean | garage$garage_managerArgs<ExtArgs>;
      _count?: boolean | GarageCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['garage']
  >;

  export type garageSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    opening_hours?: boolean;
    closing_hours?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type garageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    garage_manager?: boolean | garage$garage_managerArgs<ExtArgs>;
    _count?: boolean | GarageCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $garagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'garage';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      garage_manager: Prisma.$garage_managerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        opening_hours: string | null;
        closing_hours: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['garage']
    >;
    composites: {};
  };

  type garageGetPayload<S extends boolean | null | undefined | garageDefaultArgs> = $Result.GetResult<
    Prisma.$garagePayload,
    S
  >;

  type garageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    garageFindManyArgs,
    'select' | 'include'
  > & {
    select?: GarageCountAggregateInputType | true;
  };

  export interface garageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['garage']; meta: { name: 'garage' } };
    /**
     * Find zero or one Garage that matches the filter.
     * @param {garageFindUniqueArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends garageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, garageFindUniqueArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Garage that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {garageFindUniqueOrThrowArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends garageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, garageFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Garage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garageFindFirstArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends garageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, garageFindFirstArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Garage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garageFindFirstOrThrowArgs} args - Arguments to find a Garage
     * @example
     * // Get one Garage
     * const garage = await prisma.garage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends garageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, garageFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Garages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Garages
     * const garages = await prisma.garage.findMany()
     *
     * // Get first 10 Garages
     * const garages = await prisma.garage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const garageWithIdOnly = await prisma.garage.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends garageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, garageFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Garage.
     * @param {garageCreateArgs} args - Arguments to create a Garage.
     * @example
     * // Create one Garage
     * const Garage = await prisma.garage.create({
     *   data: {
     *     // ... data to create a Garage
     *   }
     * })
     *
     **/
    create<T extends garageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, garageCreateArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Garages.
     *     @param {garageCreateManyArgs} args - Arguments to create many Garages.
     *     @example
     *     // Create many Garages
     *     const garage = await prisma.garage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends garageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, garageCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Garage.
     * @param {garageDeleteArgs} args - Arguments to delete one Garage.
     * @example
     * // Delete one Garage
     * const Garage = await prisma.garage.delete({
     *   where: {
     *     // ... filter to delete one Garage
     *   }
     * })
     *
     **/
    delete<T extends garageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, garageDeleteArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Garage.
     * @param {garageUpdateArgs} args - Arguments to update one Garage.
     * @example
     * // Update one Garage
     * const garage = await prisma.garage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends garageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, garageUpdateArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Garages.
     * @param {garageDeleteManyArgs} args - Arguments to filter Garages to delete.
     * @example
     * // Delete a few Garages
     * const { count } = await prisma.garage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends garageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, garageDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Garages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Garages
     * const garage = await prisma.garage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends garageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, garageUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Garage.
     * @param {garageUpsertArgs} args - Arguments to update or create a Garage.
     * @example
     * // Update or create a Garage
     * const garage = await prisma.garage.upsert({
     *   create: {
     *     // ... data to create a Garage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Garage we want to update
     *   }
     * })
     **/
    upsert<T extends garageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, garageUpsertArgs<ExtArgs>>,
    ): Prisma__garageClient<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Garages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garageCountArgs} args - Arguments to filter Garages to count.
     * @example
     * // Count the number of Garages
     * const count = await prisma.garage.count({
     *   where: {
     *     // ... the filter for the Garages we want to count
     *   }
     * })
     **/
    count<T extends garageCountArgs>(
      args?: Subset<T, garageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GarageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Garage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GarageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GarageAggregateArgs>(
      args: Subset<T, GarageAggregateArgs>,
    ): Prisma.PrismaPromise<GetGarageAggregateType<T>>;

    /**
     * Group by Garage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends garageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: garageGroupByArgs['orderBy'] }
        : { orderBy?: garageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, garageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGarageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the garage model
     */
    readonly fields: garageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for garage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__garageClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    garage_manager<T extends garage$garage_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, garage$garage_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the garage model
   */
  interface garageFieldRefs {
    readonly id: FieldRef<'garage', 'String'>;
    readonly description: FieldRef<'garage', 'String'>;
    readonly location: FieldRef<'garage', 'String'>;
    readonly opening_hours: FieldRef<'garage', 'String'>;
    readonly closing_hours: FieldRef<'garage', 'String'>;
    readonly name: FieldRef<'garage', 'String'>;
    readonly created_at: FieldRef<'garage', 'DateTime'>;
    readonly updated_at: FieldRef<'garage', 'DateTime'>;
    readonly user_id: FieldRef<'garage', 'String'>;
    readonly tenant_id: FieldRef<'garage', 'String'>;
  }

  // Custom InputTypes

  /**
   * garage findUnique
   */
  export type garageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * Filter, which garage to fetch.
     */
    where: garageWhereUniqueInput;
  };

  /**
   * garage findUniqueOrThrow
   */
  export type garageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * Filter, which garage to fetch.
     */
    where: garageWhereUniqueInput;
  };

  /**
   * garage findFirst
   */
  export type garageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * Filter, which garage to fetch.
     */
    where?: garageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garages to fetch.
     */
    orderBy?: garageOrderByWithRelationInput | garageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for garages.
     */
    cursor?: garageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of garages.
     */
    distinct?: GarageScalarFieldEnum | GarageScalarFieldEnum[];
  };

  /**
   * garage findFirstOrThrow
   */
  export type garageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * Filter, which garage to fetch.
     */
    where?: garageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garages to fetch.
     */
    orderBy?: garageOrderByWithRelationInput | garageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for garages.
     */
    cursor?: garageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of garages.
     */
    distinct?: GarageScalarFieldEnum | GarageScalarFieldEnum[];
  };

  /**
   * garage findMany
   */
  export type garageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * Filter, which garages to fetch.
     */
    where?: garageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garages to fetch.
     */
    orderBy?: garageOrderByWithRelationInput | garageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing garages.
     */
    cursor?: garageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garages.
     */
    skip?: number;
    distinct?: GarageScalarFieldEnum | GarageScalarFieldEnum[];
  };

  /**
   * garage create
   */
  export type garageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * The data needed to create a garage.
     */
    data: XOR<garageCreateInput, garageUncheckedCreateInput>;
  };

  /**
   * garage createMany
   */
  export type garageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many garages.
     */
    data: garageCreateManyInput | garageCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * garage update
   */
  export type garageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * The data needed to update a garage.
     */
    data: XOR<garageUpdateInput, garageUncheckedUpdateInput>;
    /**
     * Choose, which garage to update.
     */
    where: garageWhereUniqueInput;
  };

  /**
   * garage updateMany
   */
  export type garageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update garages.
     */
    data: XOR<garageUpdateManyMutationInput, garageUncheckedUpdateManyInput>;
    /**
     * Filter which garages to update
     */
    where?: garageWhereInput;
  };

  /**
   * garage upsert
   */
  export type garageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * The filter to search for the garage to update in case it exists.
     */
    where: garageWhereUniqueInput;
    /**
     * In case the garage found by the `where` argument doesn't exist, create a new garage with this data.
     */
    create: XOR<garageCreateInput, garageUncheckedCreateInput>;
    /**
     * In case the garage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<garageUpdateInput, garageUncheckedUpdateInput>;
  };

  /**
   * garage delete
   */
  export type garageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    /**
     * Filter which garage to delete.
     */
    where: garageWhereUniqueInput;
  };

  /**
   * garage deleteMany
   */
  export type garageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which garages to delete
     */
    where?: garageWhereInput;
  };

  /**
   * garage.garage_manager
   */
  export type garage$garage_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    where?: garage_managerWhereInput;
    orderBy?: garage_managerOrderByWithRelationInput | garage_managerOrderByWithRelationInput[];
    cursor?: garage_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Garage_managerScalarFieldEnum | Garage_managerScalarFieldEnum[];
  };

  /**
   * garage without action
   */
  export type garageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
  };

  /**
   * Model garage_manager
   */

  export type AggregateGarage_manager = {
    _count: Garage_managerCountAggregateOutputType | null;
    _min: Garage_managerMinAggregateOutputType | null;
    _max: Garage_managerMaxAggregateOutputType | null;
  };

  export type Garage_managerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    managed_garage_id: string | null;
    manager_since: Date | null;
    manager_until: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Garage_managerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    managed_garage_id: string | null;
    manager_since: Date | null;
    manager_until: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Garage_managerCountAggregateOutputType = {
    id: number;
    user_id: number;
    managed_garage_id: number;
    manager_since: number;
    manager_until: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Garage_managerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    managed_garage_id?: true;
    manager_since?: true;
    manager_until?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Garage_managerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    managed_garage_id?: true;
    manager_since?: true;
    manager_until?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Garage_managerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    managed_garage_id?: true;
    manager_since?: true;
    manager_until?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Garage_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which garage_manager to aggregate.
     */
    where?: garage_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garage_managers to fetch.
     */
    orderBy?: garage_managerOrderByWithRelationInput | garage_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: garage_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garage_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garage_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned garage_managers
     **/
    _count?: true | Garage_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Garage_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Garage_managerMaxAggregateInputType;
  };

  export type GetGarage_managerAggregateType<T extends Garage_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateGarage_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarage_manager[P]>
      : GetScalarType<T[P], AggregateGarage_manager[P]>;
  };

  export type garage_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: garage_managerWhereInput;
    orderBy?: garage_managerOrderByWithAggregationInput | garage_managerOrderByWithAggregationInput[];
    by: Garage_managerScalarFieldEnum[] | Garage_managerScalarFieldEnum;
    having?: garage_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Garage_managerCountAggregateInputType | true;
    _min?: Garage_managerMinAggregateInputType;
    _max?: Garage_managerMaxAggregateInputType;
  };

  export type Garage_managerGroupByOutputType = {
    id: string;
    user_id: string;
    managed_garage_id: string;
    manager_since: Date | null;
    manager_until: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: Garage_managerCountAggregateOutputType | null;
    _min: Garage_managerMinAggregateOutputType | null;
    _max: Garage_managerMaxAggregateOutputType | null;
  };

  type GetGarage_managerGroupByPayload<T extends garage_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Garage_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Garage_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Garage_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Garage_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type garage_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        managed_garage_id?: boolean;
        manager_since?: boolean;
        manager_until?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        garage?: boolean | garageDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['garage_manager']
    >;

  export type garage_managerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    managed_garage_id?: boolean;
    manager_since?: boolean;
    manager_until?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type garage_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garage?: boolean | garageDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $garage_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'garage_manager';
    objects: {
      garage: Prisma.$garagePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        managed_garage_id: string;
        manager_since: Date | null;
        manager_until: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['garage_manager']
    >;
    composites: {};
  };

  type garage_managerGetPayload<S extends boolean | null | undefined | garage_managerDefaultArgs> = $Result.GetResult<
    Prisma.$garage_managerPayload,
    S
  >;

  type garage_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    garage_managerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Garage_managerCountAggregateInputType | true;
  };

  export interface garage_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['garage_manager']; meta: { name: 'garage_manager' } };
    /**
     * Find zero or one Garage_manager that matches the filter.
     * @param {garage_managerFindUniqueArgs} args - Arguments to find a Garage_manager
     * @example
     * // Get one Garage_manager
     * const garage_manager = await prisma.garage_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends garage_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, garage_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Garage_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {garage_managerFindUniqueOrThrowArgs} args - Arguments to find a Garage_manager
     * @example
     * // Get one Garage_manager
     * const garage_manager = await prisma.garage_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends garage_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, garage_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Garage_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garage_managerFindFirstArgs} args - Arguments to find a Garage_manager
     * @example
     * // Get one Garage_manager
     * const garage_manager = await prisma.garage_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends garage_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, garage_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Garage_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garage_managerFindFirstOrThrowArgs} args - Arguments to find a Garage_manager
     * @example
     * // Get one Garage_manager
     * const garage_manager = await prisma.garage_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends garage_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, garage_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Garage_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garage_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Garage_managers
     * const garage_managers = await prisma.garage_manager.findMany()
     *
     * // Get first 10 Garage_managers
     * const garage_managers = await prisma.garage_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const garage_managerWithIdOnly = await prisma.garage_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends garage_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, garage_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Garage_manager.
     * @param {garage_managerCreateArgs} args - Arguments to create a Garage_manager.
     * @example
     * // Create one Garage_manager
     * const Garage_manager = await prisma.garage_manager.create({
     *   data: {
     *     // ... data to create a Garage_manager
     *   }
     * })
     *
     **/
    create<T extends garage_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, garage_managerCreateArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Garage_managers.
     *     @param {garage_managerCreateManyArgs} args - Arguments to create many Garage_managers.
     *     @example
     *     // Create many Garage_managers
     *     const garage_manager = await prisma.garage_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends garage_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, garage_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Garage_manager.
     * @param {garage_managerDeleteArgs} args - Arguments to delete one Garage_manager.
     * @example
     * // Delete one Garage_manager
     * const Garage_manager = await prisma.garage_manager.delete({
     *   where: {
     *     // ... filter to delete one Garage_manager
     *   }
     * })
     *
     **/
    delete<T extends garage_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, garage_managerDeleteArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Garage_manager.
     * @param {garage_managerUpdateArgs} args - Arguments to update one Garage_manager.
     * @example
     * // Update one Garage_manager
     * const garage_manager = await prisma.garage_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends garage_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, garage_managerUpdateArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Garage_managers.
     * @param {garage_managerDeleteManyArgs} args - Arguments to filter Garage_managers to delete.
     * @example
     * // Delete a few Garage_managers
     * const { count } = await prisma.garage_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends garage_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, garage_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Garage_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garage_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Garage_managers
     * const garage_manager = await prisma.garage_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends garage_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, garage_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Garage_manager.
     * @param {garage_managerUpsertArgs} args - Arguments to update or create a Garage_manager.
     * @example
     * // Update or create a Garage_manager
     * const garage_manager = await prisma.garage_manager.upsert({
     *   create: {
     *     // ... data to create a Garage_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Garage_manager we want to update
     *   }
     * })
     **/
    upsert<T extends garage_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, garage_managerUpsertArgs<ExtArgs>>,
    ): Prisma__garage_managerClient<
      $Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Garage_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garage_managerCountArgs} args - Arguments to filter Garage_managers to count.
     * @example
     * // Count the number of Garage_managers
     * const count = await prisma.garage_manager.count({
     *   where: {
     *     // ... the filter for the Garage_managers we want to count
     *   }
     * })
     **/
    count<T extends garage_managerCountArgs>(
      args?: Subset<T, garage_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Garage_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Garage_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Garage_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Garage_managerAggregateArgs>(
      args: Subset<T, Garage_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetGarage_managerAggregateType<T>>;

    /**
     * Group by Garage_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {garage_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends garage_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: garage_managerGroupByArgs['orderBy'] }
        : { orderBy?: garage_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, garage_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGarage_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the garage_manager model
     */
    readonly fields: garage_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for garage_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__garage_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    garage<T extends garageDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, garageDefaultArgs<ExtArgs>>,
    ): Prisma__garageClient<
      $Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the garage_manager model
   */
  interface garage_managerFieldRefs {
    readonly id: FieldRef<'garage_manager', 'String'>;
    readonly user_id: FieldRef<'garage_manager', 'String'>;
    readonly managed_garage_id: FieldRef<'garage_manager', 'String'>;
    readonly manager_since: FieldRef<'garage_manager', 'DateTime'>;
    readonly manager_until: FieldRef<'garage_manager', 'DateTime'>;
    readonly created_at: FieldRef<'garage_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'garage_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * garage_manager findUnique
   */
  export type garage_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * Filter, which garage_manager to fetch.
     */
    where: garage_managerWhereUniqueInput;
  };

  /**
   * garage_manager findUniqueOrThrow
   */
  export type garage_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the garage_manager
       */
      select?: garage_managerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: garage_managerInclude<ExtArgs> | null;
      /**
       * Filter, which garage_manager to fetch.
       */
      where: garage_managerWhereUniqueInput;
    };

  /**
   * garage_manager findFirst
   */
  export type garage_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * Filter, which garage_manager to fetch.
     */
    where?: garage_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garage_managers to fetch.
     */
    orderBy?: garage_managerOrderByWithRelationInput | garage_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for garage_managers.
     */
    cursor?: garage_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garage_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garage_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of garage_managers.
     */
    distinct?: Garage_managerScalarFieldEnum | Garage_managerScalarFieldEnum[];
  };

  /**
   * garage_manager findFirstOrThrow
   */
  export type garage_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * Filter, which garage_manager to fetch.
     */
    where?: garage_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garage_managers to fetch.
     */
    orderBy?: garage_managerOrderByWithRelationInput | garage_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for garage_managers.
     */
    cursor?: garage_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garage_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garage_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of garage_managers.
     */
    distinct?: Garage_managerScalarFieldEnum | Garage_managerScalarFieldEnum[];
  };

  /**
   * garage_manager findMany
   */
  export type garage_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * Filter, which garage_managers to fetch.
     */
    where?: garage_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of garage_managers to fetch.
     */
    orderBy?: garage_managerOrderByWithRelationInput | garage_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing garage_managers.
     */
    cursor?: garage_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` garage_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` garage_managers.
     */
    skip?: number;
    distinct?: Garage_managerScalarFieldEnum | Garage_managerScalarFieldEnum[];
  };

  /**
   * garage_manager create
   */
  export type garage_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a garage_manager.
     */
    data: XOR<garage_managerCreateInput, garage_managerUncheckedCreateInput>;
  };

  /**
   * garage_manager createMany
   */
  export type garage_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many garage_managers.
     */
    data: garage_managerCreateManyInput | garage_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * garage_manager update
   */
  export type garage_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a garage_manager.
     */
    data: XOR<garage_managerUpdateInput, garage_managerUncheckedUpdateInput>;
    /**
     * Choose, which garage_manager to update.
     */
    where: garage_managerWhereUniqueInput;
  };

  /**
   * garage_manager updateMany
   */
  export type garage_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update garage_managers.
     */
    data: XOR<garage_managerUpdateManyMutationInput, garage_managerUncheckedUpdateManyInput>;
    /**
     * Filter which garage_managers to update
     */
    where?: garage_managerWhereInput;
  };

  /**
   * garage_manager upsert
   */
  export type garage_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the garage_manager to update in case it exists.
     */
    where: garage_managerWhereUniqueInput;
    /**
     * In case the garage_manager found by the `where` argument doesn't exist, create a new garage_manager with this data.
     */
    create: XOR<garage_managerCreateInput, garage_managerUncheckedCreateInput>;
    /**
     * In case the garage_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<garage_managerUpdateInput, garage_managerUncheckedUpdateInput>;
  };

  /**
   * garage_manager delete
   */
  export type garage_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    /**
     * Filter which garage_manager to delete.
     */
    where: garage_managerWhereUniqueInput;
  };

  /**
   * garage_manager deleteMany
   */
  export type garage_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which garage_managers to delete
     */
    where?: garage_managerWhereInput;
  };

  /**
   * garage_manager without action
   */
  export type garage_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
  };

  /**
   * Model mechanic
   */

  export type AggregateMechanic = {
    _count: MechanicCountAggregateOutputType | null;
    _avg: MechanicAvgAggregateOutputType | null;
    _sum: MechanicSumAggregateOutputType | null;
    _min: MechanicMinAggregateOutputType | null;
    _max: MechanicMaxAggregateOutputType | null;
  };

  export type MechanicAvgAggregateOutputType = {
    experience: number | null;
    rating: number | null;
  };

  export type MechanicSumAggregateOutputType = {
    experience: number | null;
    rating: number | null;
  };

  export type MechanicMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    specialization: string | null;
    experience: number | null;
    rating: number | null;
    availability: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MechanicMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    specialization: string | null;
    experience: number | null;
    rating: number | null;
    availability: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MechanicCountAggregateOutputType = {
    id: number;
    user_id: number;
    specialization: number;
    experience: number;
    rating: number;
    availability: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MechanicAvgAggregateInputType = {
    experience?: true;
    rating?: true;
  };

  export type MechanicSumAggregateInputType = {
    experience?: true;
    rating?: true;
  };

  export type MechanicMinAggregateInputType = {
    id?: true;
    user_id?: true;
    specialization?: true;
    experience?: true;
    rating?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MechanicMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    specialization?: true;
    experience?: true;
    rating?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MechanicCountAggregateInputType = {
    id?: true;
    user_id?: true;
    specialization?: true;
    experience?: true;
    rating?: true;
    availability?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MechanicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mechanic to aggregate.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned mechanics
     **/
    _count?: true | MechanicCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MechanicAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MechanicSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MechanicMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MechanicMaxAggregateInputType;
  };

  export type GetMechanicAggregateType<T extends MechanicAggregateArgs> = {
    [P in keyof T & keyof AggregateMechanic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMechanic[P]>
      : GetScalarType<T[P], AggregateMechanic[P]>;
  };

  export type mechanicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mechanicWhereInput;
    orderBy?: mechanicOrderByWithAggregationInput | mechanicOrderByWithAggregationInput[];
    by: MechanicScalarFieldEnum[] | MechanicScalarFieldEnum;
    having?: mechanicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MechanicCountAggregateInputType | true;
    _avg?: MechanicAvgAggregateInputType;
    _sum?: MechanicSumAggregateInputType;
    _min?: MechanicMinAggregateInputType;
    _max?: MechanicMaxAggregateInputType;
  };

  export type MechanicGroupByOutputType = {
    id: string;
    user_id: string;
    specialization: string | null;
    experience: number | null;
    rating: number | null;
    availability: string | null;
    created_at: Date;
    updated_at: Date;
    _count: MechanicCountAggregateOutputType | null;
    _avg: MechanicAvgAggregateOutputType | null;
    _sum: MechanicSumAggregateOutputType | null;
    _min: MechanicMinAggregateOutputType | null;
    _max: MechanicMaxAggregateOutputType | null;
  };

  type GetMechanicGroupByPayload<T extends mechanicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MechanicGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MechanicGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MechanicGroupByOutputType[P]>
          : GetScalarType<T[P], MechanicGroupByOutputType[P]>;
      }
    >
  >;

  export type mechanicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        specialization?: boolean;
        experience?: boolean;
        rating?: boolean;
        availability?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['mechanic']
    >;

  export type mechanicSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    specialization?: boolean;
    experience?: boolean;
    rating?: boolean;
    availability?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type mechanicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $mechanicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'mechanic';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        specialization: string | null;
        experience: number | null;
        rating: number | null;
        availability: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['mechanic']
    >;
    composites: {};
  };

  type mechanicGetPayload<S extends boolean | null | undefined | mechanicDefaultArgs> = $Result.GetResult<
    Prisma.$mechanicPayload,
    S
  >;

  type mechanicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    mechanicFindManyArgs,
    'select' | 'include'
  > & {
    select?: MechanicCountAggregateInputType | true;
  };

  export interface mechanicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mechanic']; meta: { name: 'mechanic' } };
    /**
     * Find zero or one Mechanic that matches the filter.
     * @param {mechanicFindUniqueArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends mechanicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicFindUniqueArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Mechanic that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {mechanicFindUniqueOrThrowArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends mechanicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Mechanic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicFindFirstArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends mechanicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindFirstArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Mechanic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicFindFirstOrThrowArgs} args - Arguments to find a Mechanic
     * @example
     * // Get one Mechanic
     * const mechanic = await prisma.mechanic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends mechanicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__mechanicClient<
      $Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Mechanics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mechanics
     * const mechanics = await prisma.mechanic.findMany()
     *
     * // Get first 10 Mechanics
     * const mechanics = await prisma.mechanic.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mechanicWithIdOnly = await prisma.mechanic.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends mechanicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Mechanic.
     * @param {mechanicCreateArgs} args - Arguments to create a Mechanic.
     * @example
     * // Create one Mechanic
     * const Mechanic = await prisma.mechanic.create({
     *   data: {
     *     // ... data to create a Mechanic
     *   }
     * })
     *
     **/
    create<T extends mechanicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicCreateArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Mechanics.
     *     @param {mechanicCreateManyArgs} args - Arguments to create many Mechanics.
     *     @example
     *     // Create many Mechanics
     *     const mechanic = await prisma.mechanic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends mechanicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Mechanic.
     * @param {mechanicDeleteArgs} args - Arguments to delete one Mechanic.
     * @example
     * // Delete one Mechanic
     * const Mechanic = await prisma.mechanic.delete({
     *   where: {
     *     // ... filter to delete one Mechanic
     *   }
     * })
     *
     **/
    delete<T extends mechanicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicDeleteArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Mechanic.
     * @param {mechanicUpdateArgs} args - Arguments to update one Mechanic.
     * @example
     * // Update one Mechanic
     * const mechanic = await prisma.mechanic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends mechanicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicUpdateArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Mechanics.
     * @param {mechanicDeleteManyArgs} args - Arguments to filter Mechanics to delete.
     * @example
     * // Delete a few Mechanics
     * const { count } = await prisma.mechanic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends mechanicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, mechanicDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Mechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mechanics
     * const mechanic = await prisma.mechanic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends mechanicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Mechanic.
     * @param {mechanicUpsertArgs} args - Arguments to update or create a Mechanic.
     * @example
     * // Update or create a Mechanic
     * const mechanic = await prisma.mechanic.upsert({
     *   create: {
     *     // ... data to create a Mechanic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mechanic we want to update
     *   }
     * })
     **/
    upsert<T extends mechanicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, mechanicUpsertArgs<ExtArgs>>,
    ): Prisma__mechanicClient<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Mechanics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicCountArgs} args - Arguments to filter Mechanics to count.
     * @example
     * // Count the number of Mechanics
     * const count = await prisma.mechanic.count({
     *   where: {
     *     // ... the filter for the Mechanics we want to count
     *   }
     * })
     **/
    count<T extends mechanicCountArgs>(
      args?: Subset<T, mechanicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MechanicCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Mechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MechanicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MechanicAggregateArgs>(
      args: Subset<T, MechanicAggregateArgs>,
    ): Prisma.PrismaPromise<GetMechanicAggregateType<T>>;

    /**
     * Group by Mechanic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mechanicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends mechanicGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mechanicGroupByArgs['orderBy'] }
        : { orderBy?: mechanicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, mechanicGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMechanicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the mechanic model
     */
    readonly fields: mechanicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mechanic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mechanicClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the mechanic model
   */
  interface mechanicFieldRefs {
    readonly id: FieldRef<'mechanic', 'String'>;
    readonly user_id: FieldRef<'mechanic', 'String'>;
    readonly specialization: FieldRef<'mechanic', 'String'>;
    readonly experience: FieldRef<'mechanic', 'Int'>;
    readonly rating: FieldRef<'mechanic', 'Int'>;
    readonly availability: FieldRef<'mechanic', 'String'>;
    readonly created_at: FieldRef<'mechanic', 'DateTime'>;
    readonly updated_at: FieldRef<'mechanic', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * mechanic findUnique
   */
  export type mechanicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic findUniqueOrThrow
   */
  export type mechanicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic findFirst
   */
  export type mechanicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mechanics.
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mechanics.
     */
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * mechanic findFirstOrThrow
   */
  export type mechanicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanic to fetch.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for mechanics.
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of mechanics.
     */
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * mechanic findMany
   */
  export type mechanicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter, which mechanics to fetch.
     */
    where?: mechanicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of mechanics to fetch.
     */
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing mechanics.
     */
    cursor?: mechanicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` mechanics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` mechanics.
     */
    skip?: number;
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * mechanic create
   */
  export type mechanicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * The data needed to create a mechanic.
     */
    data: XOR<mechanicCreateInput, mechanicUncheckedCreateInput>;
  };

  /**
   * mechanic createMany
   */
  export type mechanicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mechanics.
     */
    data: mechanicCreateManyInput | mechanicCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * mechanic update
   */
  export type mechanicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * The data needed to update a mechanic.
     */
    data: XOR<mechanicUpdateInput, mechanicUncheckedUpdateInput>;
    /**
     * Choose, which mechanic to update.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic updateMany
   */
  export type mechanicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mechanics.
     */
    data: XOR<mechanicUpdateManyMutationInput, mechanicUncheckedUpdateManyInput>;
    /**
     * Filter which mechanics to update
     */
    where?: mechanicWhereInput;
  };

  /**
   * mechanic upsert
   */
  export type mechanicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * The filter to search for the mechanic to update in case it exists.
     */
    where: mechanicWhereUniqueInput;
    /**
     * In case the mechanic found by the `where` argument doesn't exist, create a new mechanic with this data.
     */
    create: XOR<mechanicCreateInput, mechanicUncheckedCreateInput>;
    /**
     * In case the mechanic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mechanicUpdateInput, mechanicUncheckedUpdateInput>;
  };

  /**
   * mechanic delete
   */
  export type mechanicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    /**
     * Filter which mechanic to delete.
     */
    where: mechanicWhereUniqueInput;
  };

  /**
   * mechanic deleteMany
   */
  export type mechanicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mechanics to delete
     */
    where?: mechanicWhereInput;
  };

  /**
   * mechanic without action
   */
  export type mechanicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
      customer?: boolean | user$customerArgs<ExtArgs>;
      garage?: boolean | user$garageArgs<ExtArgs>;
      garage_manager?: boolean | user$garage_managerArgs<ExtArgs>;
      mechanic?: boolean | user$mechanicArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
    customer?: boolean | user$customerArgs<ExtArgs>;
    garage?: boolean | user$garageArgs<ExtArgs>;
    garage_manager?: boolean | user$garage_managerArgs<ExtArgs>;
    mechanic?: boolean | user$mechanicArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      business_owner: Prisma.$business_ownerPayload<ExtArgs>[];
      customer: Prisma.$customerPayload<ExtArgs>[];
      garage: Prisma.$garagePayload<ExtArgs>[];
      garage_manager: Prisma.$garage_managerPayload<ExtArgs>[];
      mechanic: Prisma.$mechanicPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business_owner<T extends user$business_ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$business_ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    garage<T extends user$garageArgs<ExtArgs> = {}>(
      args?: Subset<T, user$garageArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$garagePayload<ExtArgs>, T, 'findMany'> | Null>;

    garage_manager<T extends user$garage_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$garage_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$garage_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    mechanic<T extends user$mechanicArgs<ExtArgs> = {}>(
      args?: Subset<T, user$mechanicArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mechanicPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.business_owner
   */
  export type user$business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    cursor?: business_ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.garage
   */
  export type user$garageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage
     */
    select?: garageSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garageInclude<ExtArgs> | null;
    where?: garageWhereInput;
    orderBy?: garageOrderByWithRelationInput | garageOrderByWithRelationInput[];
    cursor?: garageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GarageScalarFieldEnum | GarageScalarFieldEnum[];
  };

  /**
   * user.garage_manager
   */
  export type user$garage_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the garage_manager
     */
    select?: garage_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: garage_managerInclude<ExtArgs> | null;
    where?: garage_managerWhereInput;
    orderBy?: garage_managerOrderByWithRelationInput | garage_managerOrderByWithRelationInput[];
    cursor?: garage_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Garage_managerScalarFieldEnum | Garage_managerScalarFieldEnum[];
  };

  /**
   * user.mechanic
   */
  export type user$mechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mechanic
     */
    select?: mechanicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: mechanicInclude<ExtArgs> | null;
    where?: mechanicWhereInput;
    orderBy?: mechanicOrderByWithRelationInput | mechanicOrderByWithRelationInput[];
    cursor?: mechanicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MechanicScalarFieldEnum | MechanicScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Business_ownerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    business_name: 'business_name';
    business_address: 'business_address';
    business_city: 'business_city';
    business_state: 'business_state';
    business_zip_code: 'business_zip_code';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Business_ownerScalarFieldEnum =
    (typeof Business_ownerScalarFieldEnum)[keyof typeof Business_ownerScalarFieldEnum];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const GarageScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    opening_hours: 'opening_hours';
    closing_hours: 'closing_hours';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type GarageScalarFieldEnum = (typeof GarageScalarFieldEnum)[keyof typeof GarageScalarFieldEnum];

  export const Garage_managerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    managed_garage_id: 'managed_garage_id';
    manager_since: 'manager_since';
    manager_until: 'manager_until';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Garage_managerScalarFieldEnum =
    (typeof Garage_managerScalarFieldEnum)[keyof typeof Garage_managerScalarFieldEnum];

  export const MechanicScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    specialization: 'specialization';
    experience: 'experience';
    rating: 'rating';
    availability: 'availability';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MechanicScalarFieldEnum = (typeof MechanicScalarFieldEnum)[keyof typeof MechanicScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type business_ownerWhereInput = {
    AND?: business_ownerWhereInput | business_ownerWhereInput[];
    OR?: business_ownerWhereInput[];
    NOT?: business_ownerWhereInput | business_ownerWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    business_name?: StringNullableFilter<'business_owner'> | string | null;
    business_address?: StringNullableFilter<'business_owner'> | string | null;
    business_city?: StringNullableFilter<'business_owner'> | string | null;
    business_state?: StringNullableFilter<'business_owner'> | string | null;
    business_zip_code?: StringNullableFilter<'business_owner'> | string | null;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type business_ownerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrderInput | SortOrder;
    business_address?: SortOrderInput | SortOrder;
    business_city?: SortOrderInput | SortOrder;
    business_state?: SortOrderInput | SortOrder;
    business_zip_code?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type business_ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: business_ownerWhereInput | business_ownerWhereInput[];
      OR?: business_ownerWhereInput[];
      NOT?: business_ownerWhereInput | business_ownerWhereInput[];
      user_id?: UuidFilter<'business_owner'> | string;
      business_name?: StringNullableFilter<'business_owner'> | string | null;
      business_address?: StringNullableFilter<'business_owner'> | string | null;
      business_city?: StringNullableFilter<'business_owner'> | string | null;
      business_state?: StringNullableFilter<'business_owner'> | string | null;
      business_zip_code?: StringNullableFilter<'business_owner'> | string | null;
      created_at?: DateTimeFilter<'business_owner'> | Date | string;
      updated_at?: DateTimeFilter<'business_owner'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type business_ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrderInput | SortOrder;
    business_address?: SortOrderInput | SortOrder;
    business_city?: SortOrderInput | SortOrder;
    business_state?: SortOrderInput | SortOrder;
    business_zip_code?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: business_ownerCountOrderByAggregateInput;
    _max?: business_ownerMaxOrderByAggregateInput;
    _min?: business_ownerMinOrderByAggregateInput;
  };

  export type business_ownerScalarWhereWithAggregatesInput = {
    AND?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    OR?: business_ownerScalarWhereWithAggregatesInput[];
    NOT?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business_owner'> | string;
    user_id?: UuidWithAggregatesFilter<'business_owner'> | string;
    business_name?: StringNullableWithAggregatesFilter<'business_owner'> | string | null;
    business_address?: StringNullableWithAggregatesFilter<'business_owner'> | string | null;
    business_city?: StringNullableWithAggregatesFilter<'business_owner'> | string | null;
    business_state?: StringNullableWithAggregatesFilter<'business_owner'> | string | null;
    business_zip_code?: StringNullableWithAggregatesFilter<'business_owner'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
  };

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    address?: StringNullableFilter<'customer'> | string | null;
    city?: StringNullableFilter<'customer'> | string | null;
    state?: StringNullableFilter<'customer'> | string | null;
    zip_code?: StringNullableFilter<'customer'> | string | null;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      user_id?: UuidFilter<'customer'> | string;
      address?: StringNullableFilter<'customer'> | string | null;
      city?: StringNullableFilter<'customer'> | string | null;
      state?: StringNullableFilter<'customer'> | string | null;
      zip_code?: StringNullableFilter<'customer'> | string | null;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    address?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    city?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    state?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'customer'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type garageWhereInput = {
    AND?: garageWhereInput | garageWhereInput[];
    OR?: garageWhereInput[];
    NOT?: garageWhereInput | garageWhereInput[];
    id?: UuidFilter<'garage'> | string;
    description?: StringNullableFilter<'garage'> | string | null;
    location?: StringNullableFilter<'garage'> | string | null;
    opening_hours?: StringNullableFilter<'garage'> | string | null;
    closing_hours?: StringNullableFilter<'garage'> | string | null;
    name?: StringFilter<'garage'> | string;
    created_at?: DateTimeFilter<'garage'> | Date | string;
    updated_at?: DateTimeFilter<'garage'> | Date | string;
    user_id?: UuidFilter<'garage'> | string;
    tenant_id?: StringFilter<'garage'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    garage_manager?: Garage_managerListRelationFilter;
  };

  export type garageOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    garage_manager?: garage_managerOrderByRelationAggregateInput;
  };

  export type garageWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: garageWhereInput | garageWhereInput[];
      OR?: garageWhereInput[];
      NOT?: garageWhereInput | garageWhereInput[];
      description?: StringNullableFilter<'garage'> | string | null;
      location?: StringNullableFilter<'garage'> | string | null;
      opening_hours?: StringNullableFilter<'garage'> | string | null;
      closing_hours?: StringNullableFilter<'garage'> | string | null;
      name?: StringFilter<'garage'> | string;
      created_at?: DateTimeFilter<'garage'> | Date | string;
      updated_at?: DateTimeFilter<'garage'> | Date | string;
      user_id?: UuidFilter<'garage'> | string;
      tenant_id?: StringFilter<'garage'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      garage_manager?: Garage_managerListRelationFilter;
    },
    'id'
  >;

  export type garageOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: garageCountOrderByAggregateInput;
    _max?: garageMaxOrderByAggregateInput;
    _min?: garageMinOrderByAggregateInput;
  };

  export type garageScalarWhereWithAggregatesInput = {
    AND?: garageScalarWhereWithAggregatesInput | garageScalarWhereWithAggregatesInput[];
    OR?: garageScalarWhereWithAggregatesInput[];
    NOT?: garageScalarWhereWithAggregatesInput | garageScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'garage'> | string;
    description?: StringNullableWithAggregatesFilter<'garage'> | string | null;
    location?: StringNullableWithAggregatesFilter<'garage'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'garage'> | string | null;
    closing_hours?: StringNullableWithAggregatesFilter<'garage'> | string | null;
    name?: StringWithAggregatesFilter<'garage'> | string;
    created_at?: DateTimeWithAggregatesFilter<'garage'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'garage'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'garage'> | string;
    tenant_id?: StringWithAggregatesFilter<'garage'> | string;
  };

  export type garage_managerWhereInput = {
    AND?: garage_managerWhereInput | garage_managerWhereInput[];
    OR?: garage_managerWhereInput[];
    NOT?: garage_managerWhereInput | garage_managerWhereInput[];
    id?: UuidFilter<'garage_manager'> | string;
    user_id?: UuidFilter<'garage_manager'> | string;
    managed_garage_id?: UuidFilter<'garage_manager'> | string;
    manager_since?: DateTimeNullableFilter<'garage_manager'> | Date | string | null;
    manager_until?: DateTimeNullableFilter<'garage_manager'> | Date | string | null;
    created_at?: DateTimeFilter<'garage_manager'> | Date | string;
    updated_at?: DateTimeFilter<'garage_manager'> | Date | string;
    garage?: XOR<GarageRelationFilter, garageWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type garage_managerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    managed_garage_id?: SortOrder;
    manager_since?: SortOrderInput | SortOrder;
    manager_until?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    garage?: garageOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type garage_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: garage_managerWhereInput | garage_managerWhereInput[];
      OR?: garage_managerWhereInput[];
      NOT?: garage_managerWhereInput | garage_managerWhereInput[];
      user_id?: UuidFilter<'garage_manager'> | string;
      managed_garage_id?: UuidFilter<'garage_manager'> | string;
      manager_since?: DateTimeNullableFilter<'garage_manager'> | Date | string | null;
      manager_until?: DateTimeNullableFilter<'garage_manager'> | Date | string | null;
      created_at?: DateTimeFilter<'garage_manager'> | Date | string;
      updated_at?: DateTimeFilter<'garage_manager'> | Date | string;
      garage?: XOR<GarageRelationFilter, garageWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type garage_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    managed_garage_id?: SortOrder;
    manager_since?: SortOrderInput | SortOrder;
    manager_until?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: garage_managerCountOrderByAggregateInput;
    _max?: garage_managerMaxOrderByAggregateInput;
    _min?: garage_managerMinOrderByAggregateInput;
  };

  export type garage_managerScalarWhereWithAggregatesInput = {
    AND?: garage_managerScalarWhereWithAggregatesInput | garage_managerScalarWhereWithAggregatesInput[];
    OR?: garage_managerScalarWhereWithAggregatesInput[];
    NOT?: garage_managerScalarWhereWithAggregatesInput | garage_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'garage_manager'> | string;
    user_id?: UuidWithAggregatesFilter<'garage_manager'> | string;
    managed_garage_id?: UuidWithAggregatesFilter<'garage_manager'> | string;
    manager_since?: DateTimeNullableWithAggregatesFilter<'garage_manager'> | Date | string | null;
    manager_until?: DateTimeNullableWithAggregatesFilter<'garage_manager'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'garage_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'garage_manager'> | Date | string;
  };

  export type mechanicWhereInput = {
    AND?: mechanicWhereInput | mechanicWhereInput[];
    OR?: mechanicWhereInput[];
    NOT?: mechanicWhereInput | mechanicWhereInput[];
    id?: UuidFilter<'mechanic'> | string;
    user_id?: UuidFilter<'mechanic'> | string;
    specialization?: StringNullableFilter<'mechanic'> | string | null;
    experience?: IntNullableFilter<'mechanic'> | number | null;
    rating?: IntNullableFilter<'mechanic'> | number | null;
    availability?: StringNullableFilter<'mechanic'> | string | null;
    created_at?: DateTimeFilter<'mechanic'> | Date | string;
    updated_at?: DateTimeFilter<'mechanic'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type mechanicOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialization?: SortOrderInput | SortOrder;
    experience?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    availability?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type mechanicWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: mechanicWhereInput | mechanicWhereInput[];
      OR?: mechanicWhereInput[];
      NOT?: mechanicWhereInput | mechanicWhereInput[];
      user_id?: UuidFilter<'mechanic'> | string;
      specialization?: StringNullableFilter<'mechanic'> | string | null;
      experience?: IntNullableFilter<'mechanic'> | number | null;
      rating?: IntNullableFilter<'mechanic'> | number | null;
      availability?: StringNullableFilter<'mechanic'> | string | null;
      created_at?: DateTimeFilter<'mechanic'> | Date | string;
      updated_at?: DateTimeFilter<'mechanic'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type mechanicOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialization?: SortOrderInput | SortOrder;
    experience?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    availability?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: mechanicCountOrderByAggregateInput;
    _avg?: mechanicAvgOrderByAggregateInput;
    _max?: mechanicMaxOrderByAggregateInput;
    _min?: mechanicMinOrderByAggregateInput;
    _sum?: mechanicSumOrderByAggregateInput;
  };

  export type mechanicScalarWhereWithAggregatesInput = {
    AND?: mechanicScalarWhereWithAggregatesInput | mechanicScalarWhereWithAggregatesInput[];
    OR?: mechanicScalarWhereWithAggregatesInput[];
    NOT?: mechanicScalarWhereWithAggregatesInput | mechanicScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'mechanic'> | string;
    user_id?: UuidWithAggregatesFilter<'mechanic'> | string;
    specialization?: StringNullableWithAggregatesFilter<'mechanic'> | string | null;
    experience?: IntNullableWithAggregatesFilter<'mechanic'> | number | null;
    rating?: IntNullableWithAggregatesFilter<'mechanic'> | number | null;
    availability?: StringNullableWithAggregatesFilter<'mechanic'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'mechanic'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'mechanic'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    business_owner?: Business_ownerListRelationFilter;
    customer?: CustomerListRelationFilter;
    garage?: GarageListRelationFilter;
    garage_manager?: Garage_managerListRelationFilter;
    mechanic?: MechanicListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business_owner?: business_ownerOrderByRelationAggregateInput;
    customer?: customerOrderByRelationAggregateInput;
    garage?: garageOrderByRelationAggregateInput;
    garage_manager?: garage_managerOrderByRelationAggregateInput;
    mechanic?: mechanicOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      business_owner?: Business_ownerListRelationFilter;
      customer?: CustomerListRelationFilter;
      garage?: GarageListRelationFilter;
      garage_manager?: Garage_managerListRelationFilter;
      mechanic?: MechanicListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type business_ownerCreateInput = {
    id?: string;
    business_name?: string | null;
    business_address?: string | null;
    business_city?: string | null;
    business_state?: string | null;
    business_zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBusiness_ownerInput;
  };

  export type business_ownerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    business_name?: string | null;
    business_address?: string | null;
    business_city?: string | null;
    business_state?: string | null;
    business_zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    business_address?: NullableStringFieldUpdateOperationsInput | string | null;
    business_city?: NullableStringFieldUpdateOperationsInput | string | null;
    business_state?: NullableStringFieldUpdateOperationsInput | string | null;
    business_zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBusiness_ownerNestedInput;
  };

  export type business_ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    business_address?: NullableStringFieldUpdateOperationsInput | string | null;
    business_city?: NullableStringFieldUpdateOperationsInput | string | null;
    business_state?: NullableStringFieldUpdateOperationsInput | string | null;
    business_zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateManyInput = {
    id?: string;
    user_id: string;
    business_name?: string | null;
    business_address?: string | null;
    business_city?: string | null;
    business_state?: string | null;
    business_zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    business_address?: NullableStringFieldUpdateOperationsInput | string | null;
    business_city?: NullableStringFieldUpdateOperationsInput | string | null;
    business_state?: NullableStringFieldUpdateOperationsInput | string | null;
    business_zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    business_address?: NullableStringFieldUpdateOperationsInput | string | null;
    business_city?: NullableStringFieldUpdateOperationsInput | string | null;
    business_state?: NullableStringFieldUpdateOperationsInput | string | null;
    business_zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateInput = {
    id?: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyInput = {
    id?: string;
    user_id: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type garageCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutGarageInput;
    garage_manager?: garage_managerCreateNestedManyWithoutGarageInput;
  };

  export type garageUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    garage_manager?: garage_managerUncheckedCreateNestedManyWithoutGarageInput;
  };

  export type garageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutGarageNestedInput;
    garage_manager?: garage_managerUpdateManyWithoutGarageNestedInput;
  };

  export type garageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    garage_manager?: garage_managerUncheckedUpdateManyWithoutGarageNestedInput;
  };

  export type garageCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type garageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type garageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type garage_managerCreateInput = {
    id?: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    garage: garageCreateNestedOneWithoutGarage_managerInput;
    user: userCreateNestedOneWithoutGarage_managerInput;
  };

  export type garage_managerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    managed_garage_id: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type garage_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    garage?: garageUpdateOneRequiredWithoutGarage_managerNestedInput;
    user?: userUpdateOneRequiredWithoutGarage_managerNestedInput;
  };

  export type garage_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    managed_garage_id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type garage_managerCreateManyInput = {
    id?: string;
    user_id: string;
    managed_garage_id: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type garage_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type garage_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    managed_garage_id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicCreateInput = {
    id?: string;
    specialization?: string | null;
    experience?: number | null;
    rating?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMechanicInput;
  };

  export type mechanicUncheckedCreateInput = {
    id?: string;
    user_id: string;
    specialization?: string | null;
    experience?: number | null;
    rating?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMechanicNestedInput;
  };

  export type mechanicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicCreateManyInput = {
    id?: string;
    user_id: string;
    specialization?: string | null;
    experience?: number | null;
    rating?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    garage?: garageCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    garage?: garageUncheckedCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    garage?: garageUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    garage?: garageUncheckedUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type business_ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_city?: SortOrder;
    business_state?: SortOrder;
    business_zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_city?: SortOrder;
    business_state?: SortOrder;
    business_zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_city?: SortOrder;
    business_state?: SortOrder;
    business_zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type Garage_managerListRelationFilter = {
    every?: garage_managerWhereInput;
    some?: garage_managerWhereInput;
    none?: garage_managerWhereInput;
  };

  export type garage_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type garageCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type garageMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type garageMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type GarageRelationFilter = {
    is?: garageWhereInput;
    isNot?: garageWhereInput;
  };

  export type garage_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    managed_garage_id?: SortOrder;
    manager_since?: SortOrder;
    manager_until?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type garage_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    managed_garage_id?: SortOrder;
    manager_since?: SortOrder;
    manager_until?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type garage_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    managed_garage_id?: SortOrder;
    manager_since?: SortOrder;
    manager_until?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type mechanicCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    rating?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type mechanicAvgOrderByAggregateInput = {
    experience?: SortOrder;
    rating?: SortOrder;
  };

  export type mechanicMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    rating?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type mechanicMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    specialization?: SortOrder;
    experience?: SortOrder;
    rating?: SortOrder;
    availability?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type mechanicSumOrderByAggregateInput = {
    experience?: SortOrder;
    rating?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type Business_ownerListRelationFilter = {
    every?: business_ownerWhereInput;
    some?: business_ownerWhereInput;
    none?: business_ownerWhereInput;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type GarageListRelationFilter = {
    every?: garageWhereInput;
    some?: garageWhereInput;
    none?: garageWhereInput;
  };

  export type MechanicListRelationFilter = {
    every?: mechanicWhereInput;
    some?: mechanicWhereInput;
    none?: mechanicWhereInput;
  };

  export type business_ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type garageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type mechanicOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutBusiness_ownerInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutBusiness_ownerNestedInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    upsert?: userUpsertWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBusiness_ownerInput, userUpdateWithoutBusiness_ownerInput>,
      userUncheckedUpdateWithoutBusiness_ownerInput
    >;
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type userCreateNestedOneWithoutGarageInput = {
    create?: XOR<userCreateWithoutGarageInput, userUncheckedCreateWithoutGarageInput>;
    connectOrCreate?: userCreateOrConnectWithoutGarageInput;
    connect?: userWhereUniqueInput;
  };

  export type garage_managerCreateNestedManyWithoutGarageInput = {
    create?:
      | XOR<garage_managerCreateWithoutGarageInput, garage_managerUncheckedCreateWithoutGarageInput>
      | garage_managerCreateWithoutGarageInput[]
      | garage_managerUncheckedCreateWithoutGarageInput[];
    connectOrCreate?:
      | garage_managerCreateOrConnectWithoutGarageInput
      | garage_managerCreateOrConnectWithoutGarageInput[];
    createMany?: garage_managerCreateManyGarageInputEnvelope;
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
  };

  export type garage_managerUncheckedCreateNestedManyWithoutGarageInput = {
    create?:
      | XOR<garage_managerCreateWithoutGarageInput, garage_managerUncheckedCreateWithoutGarageInput>
      | garage_managerCreateWithoutGarageInput[]
      | garage_managerUncheckedCreateWithoutGarageInput[];
    connectOrCreate?:
      | garage_managerCreateOrConnectWithoutGarageInput
      | garage_managerCreateOrConnectWithoutGarageInput[];
    createMany?: garage_managerCreateManyGarageInputEnvelope;
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutGarageNestedInput = {
    create?: XOR<userCreateWithoutGarageInput, userUncheckedCreateWithoutGarageInput>;
    connectOrCreate?: userCreateOrConnectWithoutGarageInput;
    upsert?: userUpsertWithoutGarageInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutGarageInput, userUpdateWithoutGarageInput>,
      userUncheckedUpdateWithoutGarageInput
    >;
  };

  export type garage_managerUpdateManyWithoutGarageNestedInput = {
    create?:
      | XOR<garage_managerCreateWithoutGarageInput, garage_managerUncheckedCreateWithoutGarageInput>
      | garage_managerCreateWithoutGarageInput[]
      | garage_managerUncheckedCreateWithoutGarageInput[];
    connectOrCreate?:
      | garage_managerCreateOrConnectWithoutGarageInput
      | garage_managerCreateOrConnectWithoutGarageInput[];
    upsert?:
      | garage_managerUpsertWithWhereUniqueWithoutGarageInput
      | garage_managerUpsertWithWhereUniqueWithoutGarageInput[];
    createMany?: garage_managerCreateManyGarageInputEnvelope;
    set?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    disconnect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    delete?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    update?:
      | garage_managerUpdateWithWhereUniqueWithoutGarageInput
      | garage_managerUpdateWithWhereUniqueWithoutGarageInput[];
    updateMany?:
      | garage_managerUpdateManyWithWhereWithoutGarageInput
      | garage_managerUpdateManyWithWhereWithoutGarageInput[];
    deleteMany?: garage_managerScalarWhereInput | garage_managerScalarWhereInput[];
  };

  export type garage_managerUncheckedUpdateManyWithoutGarageNestedInput = {
    create?:
      | XOR<garage_managerCreateWithoutGarageInput, garage_managerUncheckedCreateWithoutGarageInput>
      | garage_managerCreateWithoutGarageInput[]
      | garage_managerUncheckedCreateWithoutGarageInput[];
    connectOrCreate?:
      | garage_managerCreateOrConnectWithoutGarageInput
      | garage_managerCreateOrConnectWithoutGarageInput[];
    upsert?:
      | garage_managerUpsertWithWhereUniqueWithoutGarageInput
      | garage_managerUpsertWithWhereUniqueWithoutGarageInput[];
    createMany?: garage_managerCreateManyGarageInputEnvelope;
    set?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    disconnect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    delete?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    update?:
      | garage_managerUpdateWithWhereUniqueWithoutGarageInput
      | garage_managerUpdateWithWhereUniqueWithoutGarageInput[];
    updateMany?:
      | garage_managerUpdateManyWithWhereWithoutGarageInput
      | garage_managerUpdateManyWithWhereWithoutGarageInput[];
    deleteMany?: garage_managerScalarWhereInput | garage_managerScalarWhereInput[];
  };

  export type garageCreateNestedOneWithoutGarage_managerInput = {
    create?: XOR<garageCreateWithoutGarage_managerInput, garageUncheckedCreateWithoutGarage_managerInput>;
    connectOrCreate?: garageCreateOrConnectWithoutGarage_managerInput;
    connect?: garageWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutGarage_managerInput = {
    create?: XOR<userCreateWithoutGarage_managerInput, userUncheckedCreateWithoutGarage_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutGarage_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type garageUpdateOneRequiredWithoutGarage_managerNestedInput = {
    create?: XOR<garageCreateWithoutGarage_managerInput, garageUncheckedCreateWithoutGarage_managerInput>;
    connectOrCreate?: garageCreateOrConnectWithoutGarage_managerInput;
    upsert?: garageUpsertWithoutGarage_managerInput;
    connect?: garageWhereUniqueInput;
    update?: XOR<
      XOR<garageUpdateToOneWithWhereWithoutGarage_managerInput, garageUpdateWithoutGarage_managerInput>,
      garageUncheckedUpdateWithoutGarage_managerInput
    >;
  };

  export type userUpdateOneRequiredWithoutGarage_managerNestedInput = {
    create?: XOR<userCreateWithoutGarage_managerInput, userUncheckedCreateWithoutGarage_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutGarage_managerInput;
    upsert?: userUpsertWithoutGarage_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutGarage_managerInput, userUpdateWithoutGarage_managerInput>,
      userUncheckedUpdateWithoutGarage_managerInput
    >;
  };

  export type userCreateNestedOneWithoutMechanicInput = {
    create?: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
    connectOrCreate?: userCreateOrConnectWithoutMechanicInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutMechanicNestedInput = {
    create?: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
    connectOrCreate?: userCreateOrConnectWithoutMechanicInput;
    upsert?: userUpsertWithoutMechanicInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMechanicInput, userUpdateWithoutMechanicInput>,
      userUncheckedUpdateWithoutMechanicInput
    >;
  };

  export type business_ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type garageCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<garageCreateWithoutUserInput, garageUncheckedCreateWithoutUserInput>
      | garageCreateWithoutUserInput[]
      | garageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garageCreateOrConnectWithoutUserInput | garageCreateOrConnectWithoutUserInput[];
    createMany?: garageCreateManyUserInputEnvelope;
    connect?: garageWhereUniqueInput | garageWhereUniqueInput[];
  };

  export type garage_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<garage_managerCreateWithoutUserInput, garage_managerUncheckedCreateWithoutUserInput>
      | garage_managerCreateWithoutUserInput[]
      | garage_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garage_managerCreateOrConnectWithoutUserInput | garage_managerCreateOrConnectWithoutUserInput[];
    createMany?: garage_managerCreateManyUserInputEnvelope;
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
  };

  export type mechanicCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
  };

  export type business_ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type garageUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<garageCreateWithoutUserInput, garageUncheckedCreateWithoutUserInput>
      | garageCreateWithoutUserInput[]
      | garageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garageCreateOrConnectWithoutUserInput | garageCreateOrConnectWithoutUserInput[];
    createMany?: garageCreateManyUserInputEnvelope;
    connect?: garageWhereUniqueInput | garageWhereUniqueInput[];
  };

  export type garage_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<garage_managerCreateWithoutUserInput, garage_managerUncheckedCreateWithoutUserInput>
      | garage_managerCreateWithoutUserInput[]
      | garage_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garage_managerCreateOrConnectWithoutUserInput | garage_managerCreateOrConnectWithoutUserInput[];
    createMany?: garage_managerCreateManyUserInputEnvelope;
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
  };

  export type mechanicUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
  };

  export type business_ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type garageUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<garageCreateWithoutUserInput, garageUncheckedCreateWithoutUserInput>
      | garageCreateWithoutUserInput[]
      | garageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garageCreateOrConnectWithoutUserInput | garageCreateOrConnectWithoutUserInput[];
    upsert?: garageUpsertWithWhereUniqueWithoutUserInput | garageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: garageCreateManyUserInputEnvelope;
    set?: garageWhereUniqueInput | garageWhereUniqueInput[];
    disconnect?: garageWhereUniqueInput | garageWhereUniqueInput[];
    delete?: garageWhereUniqueInput | garageWhereUniqueInput[];
    connect?: garageWhereUniqueInput | garageWhereUniqueInput[];
    update?: garageUpdateWithWhereUniqueWithoutUserInput | garageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: garageUpdateManyWithWhereWithoutUserInput | garageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: garageScalarWhereInput | garageScalarWhereInput[];
  };

  export type garage_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<garage_managerCreateWithoutUserInput, garage_managerUncheckedCreateWithoutUserInput>
      | garage_managerCreateWithoutUserInput[]
      | garage_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garage_managerCreateOrConnectWithoutUserInput | garage_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | garage_managerUpsertWithWhereUniqueWithoutUserInput
      | garage_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: garage_managerCreateManyUserInputEnvelope;
    set?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    disconnect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    delete?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    update?:
      | garage_managerUpdateWithWhereUniqueWithoutUserInput
      | garage_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | garage_managerUpdateManyWithWhereWithoutUserInput
      | garage_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: garage_managerScalarWhereInput | garage_managerScalarWhereInput[];
  };

  export type mechanicUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    upsert?: mechanicUpsertWithWhereUniqueWithoutUserInput | mechanicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    set?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    disconnect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    delete?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    update?: mechanicUpdateWithWhereUniqueWithoutUserInput | mechanicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: mechanicUpdateManyWithWhereWithoutUserInput | mechanicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
  };

  export type business_ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type garageUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<garageCreateWithoutUserInput, garageUncheckedCreateWithoutUserInput>
      | garageCreateWithoutUserInput[]
      | garageUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garageCreateOrConnectWithoutUserInput | garageCreateOrConnectWithoutUserInput[];
    upsert?: garageUpsertWithWhereUniqueWithoutUserInput | garageUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: garageCreateManyUserInputEnvelope;
    set?: garageWhereUniqueInput | garageWhereUniqueInput[];
    disconnect?: garageWhereUniqueInput | garageWhereUniqueInput[];
    delete?: garageWhereUniqueInput | garageWhereUniqueInput[];
    connect?: garageWhereUniqueInput | garageWhereUniqueInput[];
    update?: garageUpdateWithWhereUniqueWithoutUserInput | garageUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: garageUpdateManyWithWhereWithoutUserInput | garageUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: garageScalarWhereInput | garageScalarWhereInput[];
  };

  export type garage_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<garage_managerCreateWithoutUserInput, garage_managerUncheckedCreateWithoutUserInput>
      | garage_managerCreateWithoutUserInput[]
      | garage_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: garage_managerCreateOrConnectWithoutUserInput | garage_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | garage_managerUpsertWithWhereUniqueWithoutUserInput
      | garage_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: garage_managerCreateManyUserInputEnvelope;
    set?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    disconnect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    delete?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    connect?: garage_managerWhereUniqueInput | garage_managerWhereUniqueInput[];
    update?:
      | garage_managerUpdateWithWhereUniqueWithoutUserInput
      | garage_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | garage_managerUpdateManyWithWhereWithoutUserInput
      | garage_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: garage_managerScalarWhereInput | garage_managerScalarWhereInput[];
  };

  export type mechanicUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>
      | mechanicCreateWithoutUserInput[]
      | mechanicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: mechanicCreateOrConnectWithoutUserInput | mechanicCreateOrConnectWithoutUserInput[];
    upsert?: mechanicUpsertWithWhereUniqueWithoutUserInput | mechanicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: mechanicCreateManyUserInputEnvelope;
    set?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    disconnect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    delete?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    connect?: mechanicWhereUniqueInput | mechanicWhereUniqueInput[];
    update?: mechanicUpdateWithWhereUniqueWithoutUserInput | mechanicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: mechanicUpdateManyWithWhereWithoutUserInput | mechanicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    garage?: garageCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    garage?: garageUncheckedCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBusiness_ownerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
  };

  export type userUpsertWithoutBusiness_ownerInput = {
    update: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBusiness_ownerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
  };

  export type userUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    garage?: garageUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    garage?: garageUncheckedUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    garage?: garageCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    garage?: garageUncheckedCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    garage?: garageUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    garage?: garageUncheckedUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutGarageInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutGarageInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutGarageInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutGarageInput, userUncheckedCreateWithoutGarageInput>;
  };

  export type garage_managerCreateWithoutGarageInput = {
    id?: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutGarage_managerInput;
  };

  export type garage_managerUncheckedCreateWithoutGarageInput = {
    id?: string;
    user_id: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type garage_managerCreateOrConnectWithoutGarageInput = {
    where: garage_managerWhereUniqueInput;
    create: XOR<garage_managerCreateWithoutGarageInput, garage_managerUncheckedCreateWithoutGarageInput>;
  };

  export type garage_managerCreateManyGarageInputEnvelope = {
    data: garage_managerCreateManyGarageInput | garage_managerCreateManyGarageInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutGarageInput = {
    update: XOR<userUpdateWithoutGarageInput, userUncheckedUpdateWithoutGarageInput>;
    create: XOR<userCreateWithoutGarageInput, userUncheckedCreateWithoutGarageInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutGarageInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutGarageInput, userUncheckedUpdateWithoutGarageInput>;
  };

  export type userUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type garage_managerUpsertWithWhereUniqueWithoutGarageInput = {
    where: garage_managerWhereUniqueInput;
    update: XOR<garage_managerUpdateWithoutGarageInput, garage_managerUncheckedUpdateWithoutGarageInput>;
    create: XOR<garage_managerCreateWithoutGarageInput, garage_managerUncheckedCreateWithoutGarageInput>;
  };

  export type garage_managerUpdateWithWhereUniqueWithoutGarageInput = {
    where: garage_managerWhereUniqueInput;
    data: XOR<garage_managerUpdateWithoutGarageInput, garage_managerUncheckedUpdateWithoutGarageInput>;
  };

  export type garage_managerUpdateManyWithWhereWithoutGarageInput = {
    where: garage_managerScalarWhereInput;
    data: XOR<garage_managerUpdateManyMutationInput, garage_managerUncheckedUpdateManyWithoutGarageInput>;
  };

  export type garage_managerScalarWhereInput = {
    AND?: garage_managerScalarWhereInput | garage_managerScalarWhereInput[];
    OR?: garage_managerScalarWhereInput[];
    NOT?: garage_managerScalarWhereInput | garage_managerScalarWhereInput[];
    id?: UuidFilter<'garage_manager'> | string;
    user_id?: UuidFilter<'garage_manager'> | string;
    managed_garage_id?: UuidFilter<'garage_manager'> | string;
    manager_since?: DateTimeNullableFilter<'garage_manager'> | Date | string | null;
    manager_until?: DateTimeNullableFilter<'garage_manager'> | Date | string | null;
    created_at?: DateTimeFilter<'garage_manager'> | Date | string;
    updated_at?: DateTimeFilter<'garage_manager'> | Date | string;
  };

  export type garageCreateWithoutGarage_managerInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutGarageInput;
  };

  export type garageUncheckedCreateWithoutGarage_managerInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type garageCreateOrConnectWithoutGarage_managerInput = {
    where: garageWhereUniqueInput;
    create: XOR<garageCreateWithoutGarage_managerInput, garageUncheckedCreateWithoutGarage_managerInput>;
  };

  export type userCreateWithoutGarage_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    garage?: garageCreateNestedManyWithoutUserInput;
    mechanic?: mechanicCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutGarage_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    garage?: garageUncheckedCreateNestedManyWithoutUserInput;
    mechanic?: mechanicUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutGarage_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutGarage_managerInput, userUncheckedCreateWithoutGarage_managerInput>;
  };

  export type garageUpsertWithoutGarage_managerInput = {
    update: XOR<garageUpdateWithoutGarage_managerInput, garageUncheckedUpdateWithoutGarage_managerInput>;
    create: XOR<garageCreateWithoutGarage_managerInput, garageUncheckedCreateWithoutGarage_managerInput>;
    where?: garageWhereInput;
  };

  export type garageUpdateToOneWithWhereWithoutGarage_managerInput = {
    where?: garageWhereInput;
    data: XOR<garageUpdateWithoutGarage_managerInput, garageUncheckedUpdateWithoutGarage_managerInput>;
  };

  export type garageUpdateWithoutGarage_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutGarageNestedInput;
  };

  export type garageUncheckedUpdateWithoutGarage_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutGarage_managerInput = {
    update: XOR<userUpdateWithoutGarage_managerInput, userUncheckedUpdateWithoutGarage_managerInput>;
    create: XOR<userCreateWithoutGarage_managerInput, userUncheckedCreateWithoutGarage_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutGarage_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutGarage_managerInput, userUncheckedUpdateWithoutGarage_managerInput>;
  };

  export type userUpdateWithoutGarage_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    garage?: garageUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutGarage_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    garage?: garageUncheckedUpdateManyWithoutUserNestedInput;
    mechanic?: mechanicUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutMechanicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    garage?: garageCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMechanicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    garage?: garageUncheckedCreateNestedManyWithoutUserInput;
    garage_manager?: garage_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMechanicInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
  };

  export type userUpsertWithoutMechanicInput = {
    update: XOR<userUpdateWithoutMechanicInput, userUncheckedUpdateWithoutMechanicInput>;
    create: XOR<userCreateWithoutMechanicInput, userUncheckedCreateWithoutMechanicInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMechanicInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMechanicInput, userUncheckedUpdateWithoutMechanicInput>;
  };

  export type userUpdateWithoutMechanicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    garage?: garageUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMechanicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    garage?: garageUncheckedUpdateManyWithoutUserNestedInput;
    garage_manager?: garage_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type business_ownerCreateWithoutUserInput = {
    id?: string;
    business_name?: string | null;
    business_address?: string | null;
    business_city?: string | null;
    business_state?: string | null;
    business_zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    business_name?: string | null;
    business_address?: string | null;
    business_city?: string | null;
    business_state?: string | null;
    business_zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerCreateOrConnectWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerCreateManyUserInputEnvelope = {
    data: business_ownerCreateManyUserInput | business_ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type garageCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    garage_manager?: garage_managerCreateNestedManyWithoutGarageInput;
  };

  export type garageUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    garage_manager?: garage_managerUncheckedCreateNestedManyWithoutGarageInput;
  };

  export type garageCreateOrConnectWithoutUserInput = {
    where: garageWhereUniqueInput;
    create: XOR<garageCreateWithoutUserInput, garageUncheckedCreateWithoutUserInput>;
  };

  export type garageCreateManyUserInputEnvelope = {
    data: garageCreateManyUserInput | garageCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type garage_managerCreateWithoutUserInput = {
    id?: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    garage: garageCreateNestedOneWithoutGarage_managerInput;
  };

  export type garage_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    managed_garage_id: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type garage_managerCreateOrConnectWithoutUserInput = {
    where: garage_managerWhereUniqueInput;
    create: XOR<garage_managerCreateWithoutUserInput, garage_managerUncheckedCreateWithoutUserInput>;
  };

  export type garage_managerCreateManyUserInputEnvelope = {
    data: garage_managerCreateManyUserInput | garage_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type mechanicCreateWithoutUserInput = {
    id?: string;
    specialization?: string | null;
    experience?: number | null;
    rating?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicUncheckedCreateWithoutUserInput = {
    id?: string;
    specialization?: string | null;
    experience?: number | null;
    rating?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicCreateOrConnectWithoutUserInput = {
    where: mechanicWhereUniqueInput;
    create: XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>;
  };

  export type mechanicCreateManyUserInputEnvelope = {
    data: mechanicCreateManyUserInput | mechanicCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type business_ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    update: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    data: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
  };

  export type business_ownerUpdateManyWithWhereWithoutUserInput = {
    where: business_ownerScalarWhereInput;
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type business_ownerScalarWhereInput = {
    AND?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    OR?: business_ownerScalarWhereInput[];
    NOT?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    business_name?: StringNullableFilter<'business_owner'> | string | null;
    business_address?: StringNullableFilter<'business_owner'> | string | null;
    business_city?: StringNullableFilter<'business_owner'> | string | null;
    business_state?: StringNullableFilter<'business_owner'> | string | null;
    business_zip_code?: StringNullableFilter<'business_owner'> | string | null;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    address?: StringNullableFilter<'customer'> | string | null;
    city?: StringNullableFilter<'customer'> | string | null;
    state?: StringNullableFilter<'customer'> | string | null;
    zip_code?: StringNullableFilter<'customer'> | string | null;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type garageUpsertWithWhereUniqueWithoutUserInput = {
    where: garageWhereUniqueInput;
    update: XOR<garageUpdateWithoutUserInput, garageUncheckedUpdateWithoutUserInput>;
    create: XOR<garageCreateWithoutUserInput, garageUncheckedCreateWithoutUserInput>;
  };

  export type garageUpdateWithWhereUniqueWithoutUserInput = {
    where: garageWhereUniqueInput;
    data: XOR<garageUpdateWithoutUserInput, garageUncheckedUpdateWithoutUserInput>;
  };

  export type garageUpdateManyWithWhereWithoutUserInput = {
    where: garageScalarWhereInput;
    data: XOR<garageUpdateManyMutationInput, garageUncheckedUpdateManyWithoutUserInput>;
  };

  export type garageScalarWhereInput = {
    AND?: garageScalarWhereInput | garageScalarWhereInput[];
    OR?: garageScalarWhereInput[];
    NOT?: garageScalarWhereInput | garageScalarWhereInput[];
    id?: UuidFilter<'garage'> | string;
    description?: StringNullableFilter<'garage'> | string | null;
    location?: StringNullableFilter<'garage'> | string | null;
    opening_hours?: StringNullableFilter<'garage'> | string | null;
    closing_hours?: StringNullableFilter<'garage'> | string | null;
    name?: StringFilter<'garage'> | string;
    created_at?: DateTimeFilter<'garage'> | Date | string;
    updated_at?: DateTimeFilter<'garage'> | Date | string;
    user_id?: UuidFilter<'garage'> | string;
    tenant_id?: StringFilter<'garage'> | string;
  };

  export type garage_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: garage_managerWhereUniqueInput;
    update: XOR<garage_managerUpdateWithoutUserInput, garage_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<garage_managerCreateWithoutUserInput, garage_managerUncheckedCreateWithoutUserInput>;
  };

  export type garage_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: garage_managerWhereUniqueInput;
    data: XOR<garage_managerUpdateWithoutUserInput, garage_managerUncheckedUpdateWithoutUserInput>;
  };

  export type garage_managerUpdateManyWithWhereWithoutUserInput = {
    where: garage_managerScalarWhereInput;
    data: XOR<garage_managerUpdateManyMutationInput, garage_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type mechanicUpsertWithWhereUniqueWithoutUserInput = {
    where: mechanicWhereUniqueInput;
    update: XOR<mechanicUpdateWithoutUserInput, mechanicUncheckedUpdateWithoutUserInput>;
    create: XOR<mechanicCreateWithoutUserInput, mechanicUncheckedCreateWithoutUserInput>;
  };

  export type mechanicUpdateWithWhereUniqueWithoutUserInput = {
    where: mechanicWhereUniqueInput;
    data: XOR<mechanicUpdateWithoutUserInput, mechanicUncheckedUpdateWithoutUserInput>;
  };

  export type mechanicUpdateManyWithWhereWithoutUserInput = {
    where: mechanicScalarWhereInput;
    data: XOR<mechanicUpdateManyMutationInput, mechanicUncheckedUpdateManyWithoutUserInput>;
  };

  export type mechanicScalarWhereInput = {
    AND?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
    OR?: mechanicScalarWhereInput[];
    NOT?: mechanicScalarWhereInput | mechanicScalarWhereInput[];
    id?: UuidFilter<'mechanic'> | string;
    user_id?: UuidFilter<'mechanic'> | string;
    specialization?: StringNullableFilter<'mechanic'> | string | null;
    experience?: IntNullableFilter<'mechanic'> | number | null;
    rating?: IntNullableFilter<'mechanic'> | number | null;
    availability?: StringNullableFilter<'mechanic'> | string | null;
    created_at?: DateTimeFilter<'mechanic'> | Date | string;
    updated_at?: DateTimeFilter<'mechanic'> | Date | string;
  };

  export type garage_managerCreateManyGarageInput = {
    id?: string;
    user_id: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type garage_managerUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutGarage_managerNestedInput;
  };

  export type garage_managerUncheckedUpdateWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type garage_managerUncheckedUpdateManyWithoutGarageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateManyUserInput = {
    id?: string;
    business_name?: string | null;
    business_address?: string | null;
    business_city?: string | null;
    business_state?: string | null;
    business_zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type garageCreateManyUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type garage_managerCreateManyUserInput = {
    id?: string;
    managed_garage_id: string;
    manager_since?: Date | string | null;
    manager_until?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type mechanicCreateManyUserInput = {
    id?: string;
    specialization?: string | null;
    experience?: number | null;
    rating?: number | null;
    availability?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    business_address?: NullableStringFieldUpdateOperationsInput | string | null;
    business_city?: NullableStringFieldUpdateOperationsInput | string | null;
    business_state?: NullableStringFieldUpdateOperationsInput | string | null;
    business_zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    business_address?: NullableStringFieldUpdateOperationsInput | string | null;
    business_city?: NullableStringFieldUpdateOperationsInput | string | null;
    business_state?: NullableStringFieldUpdateOperationsInput | string | null;
    business_zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: NullableStringFieldUpdateOperationsInput | string | null;
    business_address?: NullableStringFieldUpdateOperationsInput | string | null;
    business_city?: NullableStringFieldUpdateOperationsInput | string | null;
    business_state?: NullableStringFieldUpdateOperationsInput | string | null;
    business_zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type garageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    garage_manager?: garage_managerUpdateManyWithoutGarageNestedInput;
  };

  export type garageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    garage_manager?: garage_managerUncheckedUpdateManyWithoutGarageNestedInput;
  };

  export type garageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type garage_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    garage?: garageUpdateOneRequiredWithoutGarage_managerNestedInput;
  };

  export type garage_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    managed_garage_id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type garage_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    managed_garage_id?: StringFieldUpdateOperationsInput | string;
    manager_since?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    manager_until?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type mechanicUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use GarageCountOutputTypeDefaultArgs instead
   */
  export type GarageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    GarageCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use business_ownerDefaultArgs instead
   */
  export type business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    business_ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use garageDefaultArgs instead
   */
  export type garageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    garageDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use garage_managerDefaultArgs instead
   */
  export type garage_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    garage_managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use mechanicDefaultArgs instead
   */
  export type mechanicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    mechanicDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
