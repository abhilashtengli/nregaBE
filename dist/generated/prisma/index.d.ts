
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model WorkDetail
 * 
 */
export type WorkDetail = $Result.DefaultSelection<Prisma.$WorkDetailPayload>
/**
 * Model WorkDocuments
 * 
 */
export type WorkDocuments = $Result.DefaultSelection<Prisma.$WorkDocumentsPayload>
/**
 * Model VendorDetail
 * 
 */
export type VendorDetail = $Result.DefaultSelection<Prisma.$VendorDetailPayload>
/**
 * Model QuotationCallLetter
 * 
 */
export type QuotationCallLetter = $Result.DefaultSelection<Prisma.$QuotationCallLetterPayload>
/**
 * Model MaterialItem
 * 
 */
export type MaterialItem = $Result.DefaultSelection<Prisma.$MaterialItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  viewer: 'viewer'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workDetail`: Exposes CRUD operations for the **WorkDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkDetails
    * const workDetails = await prisma.workDetail.findMany()
    * ```
    */
  get workDetail(): Prisma.WorkDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workDocuments`: Exposes CRUD operations for the **WorkDocuments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkDocuments
    * const workDocuments = await prisma.workDocuments.findMany()
    * ```
    */
  get workDocuments(): Prisma.WorkDocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendorDetail`: Exposes CRUD operations for the **VendorDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorDetails
    * const vendorDetails = await prisma.vendorDetail.findMany()
    * ```
    */
  get vendorDetail(): Prisma.VendorDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quotationCallLetter`: Exposes CRUD operations for the **QuotationCallLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuotationCallLetters
    * const quotationCallLetters = await prisma.quotationCallLetter.findMany()
    * ```
    */
  get quotationCallLetter(): Prisma.QuotationCallLetterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialItem`: Exposes CRUD operations for the **MaterialItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialItems
    * const materialItems = await prisma.materialItem.findMany()
    * ```
    */
  get materialItem(): Prisma.MaterialItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    WorkDetail: 'WorkDetail',
    WorkDocuments: 'WorkDocuments',
    VendorDetail: 'VendorDetail',
    QuotationCallLetter: 'QuotationCallLetter',
    MaterialItem: 'MaterialItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "workDetail" | "workDocuments" | "vendorDetail" | "quotationCallLetter" | "materialItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      WorkDetail: {
        payload: Prisma.$WorkDetailPayload<ExtArgs>
        fields: Prisma.WorkDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          findFirst: {
            args: Prisma.WorkDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          findMany: {
            args: Prisma.WorkDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>[]
          }
          create: {
            args: Prisma.WorkDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          createMany: {
            args: Prisma.WorkDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>[]
          }
          delete: {
            args: Prisma.WorkDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          update: {
            args: Prisma.WorkDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          deleteMany: {
            args: Prisma.WorkDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>[]
          }
          upsert: {
            args: Prisma.WorkDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDetailPayload>
          }
          aggregate: {
            args: Prisma.WorkDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkDetail>
          }
          groupBy: {
            args: Prisma.WorkDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkDetailCountArgs<ExtArgs>
            result: $Utils.Optional<WorkDetailCountAggregateOutputType> | number
          }
        }
      }
      WorkDocuments: {
        payload: Prisma.$WorkDocumentsPayload<ExtArgs>
        fields: Prisma.WorkDocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkDocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkDocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>
          }
          findFirst: {
            args: Prisma.WorkDocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkDocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>
          }
          findMany: {
            args: Prisma.WorkDocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>[]
          }
          create: {
            args: Prisma.WorkDocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>
          }
          createMany: {
            args: Prisma.WorkDocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkDocumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>[]
          }
          delete: {
            args: Prisma.WorkDocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>
          }
          update: {
            args: Prisma.WorkDocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>
          }
          deleteMany: {
            args: Prisma.WorkDocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkDocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkDocumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>[]
          }
          upsert: {
            args: Prisma.WorkDocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkDocumentsPayload>
          }
          aggregate: {
            args: Prisma.WorkDocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkDocuments>
          }
          groupBy: {
            args: Prisma.WorkDocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkDocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkDocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkDocumentsCountAggregateOutputType> | number
          }
        }
      }
      VendorDetail: {
        payload: Prisma.$VendorDetailPayload<ExtArgs>
        fields: Prisma.VendorDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>
          }
          findFirst: {
            args: Prisma.VendorDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>
          }
          findMany: {
            args: Prisma.VendorDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>[]
          }
          create: {
            args: Prisma.VendorDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>
          }
          createMany: {
            args: Prisma.VendorDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>[]
          }
          delete: {
            args: Prisma.VendorDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>
          }
          update: {
            args: Prisma.VendorDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>
          }
          deleteMany: {
            args: Prisma.VendorDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>[]
          }
          upsert: {
            args: Prisma.VendorDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorDetailPayload>
          }
          aggregate: {
            args: Prisma.VendorDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorDetail>
          }
          groupBy: {
            args: Prisma.VendorDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorDetailCountArgs<ExtArgs>
            result: $Utils.Optional<VendorDetailCountAggregateOutputType> | number
          }
        }
      }
      QuotationCallLetter: {
        payload: Prisma.$QuotationCallLetterPayload<ExtArgs>
        fields: Prisma.QuotationCallLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuotationCallLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuotationCallLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>
          }
          findFirst: {
            args: Prisma.QuotationCallLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuotationCallLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>
          }
          findMany: {
            args: Prisma.QuotationCallLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>[]
          }
          create: {
            args: Prisma.QuotationCallLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>
          }
          createMany: {
            args: Prisma.QuotationCallLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuotationCallLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>[]
          }
          delete: {
            args: Prisma.QuotationCallLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>
          }
          update: {
            args: Prisma.QuotationCallLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>
          }
          deleteMany: {
            args: Prisma.QuotationCallLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuotationCallLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuotationCallLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>[]
          }
          upsert: {
            args: Prisma.QuotationCallLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuotationCallLetterPayload>
          }
          aggregate: {
            args: Prisma.QuotationCallLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuotationCallLetter>
          }
          groupBy: {
            args: Prisma.QuotationCallLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuotationCallLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuotationCallLetterCountArgs<ExtArgs>
            result: $Utils.Optional<QuotationCallLetterCountAggregateOutputType> | number
          }
        }
      }
      MaterialItem: {
        payload: Prisma.$MaterialItemPayload<ExtArgs>
        fields: Prisma.MaterialItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>
          }
          findFirst: {
            args: Prisma.MaterialItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>
          }
          findMany: {
            args: Prisma.MaterialItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>[]
          }
          create: {
            args: Prisma.MaterialItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>
          }
          createMany: {
            args: Prisma.MaterialItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>[]
          }
          delete: {
            args: Prisma.MaterialItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>
          }
          update: {
            args: Prisma.MaterialItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>
          }
          deleteMany: {
            args: Prisma.MaterialItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>[]
          }
          upsert: {
            args: Prisma.MaterialItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialItemPayload>
          }
          aggregate: {
            args: Prisma.MaterialItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialItem>
          }
          groupBy: {
            args: Prisma.MaterialItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialItemCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    workDetail?: WorkDetailOmit
    workDocuments?: WorkDocumentsOmit
    vendorDetail?: VendorDetailOmit
    quotationCallLetter?: QuotationCallLetterOmit
    materialItem?: MaterialItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type QuotationCallLetterCountOutputType
   */

  export type QuotationCallLetterCountOutputType = {
    materialItems: number
  }

  export type QuotationCallLetterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materialItems?: boolean | QuotationCallLetterCountOutputTypeCountMaterialItemsArgs
  }

  // Custom InputTypes
  /**
   * QuotationCallLetterCountOutputType without action
   */
  export type QuotationCallLetterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetterCountOutputType
     */
    select?: QuotationCallLetterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuotationCallLetterCountOutputType without action
   */
  export type QuotationCallLetterCountOutputTypeCountMaterialItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    verificationAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    verificationAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    panchayatCode: string | null
    isVerifiedEmail: boolean | null
    isAdminVerifiedUser: boolean | null
    verificationCode: string | null
    resetPasswordToken: string | null
    resetTokenExpires: Date | null
    verificationExpires: Date | null
    verificationAttempts: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    panchayatCode: string | null
    isVerifiedEmail: boolean | null
    isAdminVerifiedUser: boolean | null
    verificationCode: string | null
    resetPasswordToken: string | null
    resetTokenExpires: Date | null
    verificationExpires: Date | null
    verificationAttempts: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    panchayatCode: number
    isVerifiedEmail: number
    isAdminVerifiedUser: number
    verificationCode: number
    resetPasswordToken: number
    resetTokenExpires: number
    verificationExpires: number
    verificationAttempts: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    verificationAttempts?: true
  }

  export type UserSumAggregateInputType = {
    verificationAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    panchayatCode?: true
    isVerifiedEmail?: true
    isAdminVerifiedUser?: true
    verificationCode?: true
    resetPasswordToken?: true
    resetTokenExpires?: true
    verificationExpires?: true
    verificationAttempts?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    panchayatCode?: true
    isVerifiedEmail?: true
    isAdminVerifiedUser?: true
    verificationCode?: true
    resetPasswordToken?: true
    resetTokenExpires?: true
    verificationExpires?: true
    verificationAttempts?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    panchayatCode?: true
    isVerifiedEmail?: true
    isAdminVerifiedUser?: true
    verificationCode?: true
    resetPasswordToken?: true
    resetTokenExpires?: true
    verificationExpires?: true
    verificationAttempts?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    panchayatCode: string
    isVerifiedEmail: boolean
    isAdminVerifiedUser: boolean
    verificationCode: string | null
    resetPasswordToken: string | null
    resetTokenExpires: Date | null
    verificationExpires: Date | null
    verificationAttempts: number | null
    createdAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    panchayatCode?: boolean
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: boolean
    resetPasswordToken?: boolean
    resetTokenExpires?: boolean
    verificationExpires?: boolean
    verificationAttempts?: boolean
    createdAt?: boolean
    updateAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    panchayatCode?: boolean
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: boolean
    resetPasswordToken?: boolean
    resetTokenExpires?: boolean
    verificationExpires?: boolean
    verificationAttempts?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    panchayatCode?: boolean
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: boolean
    resetPasswordToken?: boolean
    resetTokenExpires?: boolean
    verificationExpires?: boolean
    verificationAttempts?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    panchayatCode?: boolean
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: boolean
    resetPasswordToken?: boolean
    resetTokenExpires?: boolean
    verificationExpires?: boolean
    verificationAttempts?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "panchayatCode" | "isVerifiedEmail" | "isAdminVerifiedUser" | "verificationCode" | "resetPasswordToken" | "resetTokenExpires" | "verificationExpires" | "verificationAttempts" | "createdAt" | "updateAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      panchayatCode: string
      isVerifiedEmail: boolean
      isAdminVerifiedUser: boolean
      verificationCode: string | null
      resetPasswordToken: string | null
      resetTokenExpires: Date | null
      verificationExpires: Date | null
      verificationAttempts: number | null
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly panchayatCode: FieldRef<"User", 'String'>
    readonly isVerifiedEmail: FieldRef<"User", 'Boolean'>
    readonly isAdminVerifiedUser: FieldRef<"User", 'Boolean'>
    readonly verificationCode: FieldRef<"User", 'String'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetTokenExpires: FieldRef<"User", 'DateTime'>
    readonly verificationExpires: FieldRef<"User", 'DateTime'>
    readonly verificationAttempts: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    userAgent: number
    ipAddress: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userAgent" | "ipAddress" | "createdAt" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userAgent: string | null
      ipAddress: string | null
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model WorkDetail
   */

  export type AggregateWorkDetail = {
    _count: WorkDetailCountAggregateOutputType | null
    _avg: WorkDetailAvgAggregateOutputType | null
    _sum: WorkDetailSumAggregateOutputType | null
    _min: WorkDetailMinAggregateOutputType | null
    _max: WorkDetailMaxAggregateOutputType | null
  }

  export type WorkDetailAvgAggregateOutputType = {
    estimatedCost: Decimal | null
    actualExpenditure: Decimal | null
  }

  export type WorkDetailSumAggregateOutputType = {
    estimatedCost: Decimal | null
    actualExpenditure: Decimal | null
  }

  export type WorkDetailMinAggregateOutputType = {
    id: string | null
    state: string | null
    district: string | null
    panchayat: string | null
    block: string | null
    workCode: string | null
    workName: string | null
    workCategory: string | null
    workType: string | null
    workStatus: string | null
    implementingAgency: string | null
    estimatedCost: Decimal | null
    actualExpenditure: Decimal | null
    sanctionYear: string | null
    workStartDate: Date | null
    financialYear: string | null
    estimatedPersonDays: string | null
    actualPersonDays: string | null
    vendorName: string | null
    vendorGstNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkDetailMaxAggregateOutputType = {
    id: string | null
    state: string | null
    district: string | null
    panchayat: string | null
    block: string | null
    workCode: string | null
    workName: string | null
    workCategory: string | null
    workType: string | null
    workStatus: string | null
    implementingAgency: string | null
    estimatedCost: Decimal | null
    actualExpenditure: Decimal | null
    sanctionYear: string | null
    workStartDate: Date | null
    financialYear: string | null
    estimatedPersonDays: string | null
    actualPersonDays: string | null
    vendorName: string | null
    vendorGstNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkDetailCountAggregateOutputType = {
    id: number
    state: number
    district: number
    panchayat: number
    block: number
    workCode: number
    workName: number
    workCategory: number
    workType: number
    workStatus: number
    implementingAgency: number
    estimatedCost: number
    actualExpenditure: number
    sanctionYear: number
    workStartDate: number
    financialYear: number
    estimatedPersonDays: number
    actualPersonDays: number
    vendorName: number
    vendorGstNo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkDetailAvgAggregateInputType = {
    estimatedCost?: true
    actualExpenditure?: true
  }

  export type WorkDetailSumAggregateInputType = {
    estimatedCost?: true
    actualExpenditure?: true
  }

  export type WorkDetailMinAggregateInputType = {
    id?: true
    state?: true
    district?: true
    panchayat?: true
    block?: true
    workCode?: true
    workName?: true
    workCategory?: true
    workType?: true
    workStatus?: true
    implementingAgency?: true
    estimatedCost?: true
    actualExpenditure?: true
    sanctionYear?: true
    workStartDate?: true
    financialYear?: true
    estimatedPersonDays?: true
    actualPersonDays?: true
    vendorName?: true
    vendorGstNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkDetailMaxAggregateInputType = {
    id?: true
    state?: true
    district?: true
    panchayat?: true
    block?: true
    workCode?: true
    workName?: true
    workCategory?: true
    workType?: true
    workStatus?: true
    implementingAgency?: true
    estimatedCost?: true
    actualExpenditure?: true
    sanctionYear?: true
    workStartDate?: true
    financialYear?: true
    estimatedPersonDays?: true
    actualPersonDays?: true
    vendorName?: true
    vendorGstNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkDetailCountAggregateInputType = {
    id?: true
    state?: true
    district?: true
    panchayat?: true
    block?: true
    workCode?: true
    workName?: true
    workCategory?: true
    workType?: true
    workStatus?: true
    implementingAgency?: true
    estimatedCost?: true
    actualExpenditure?: true
    sanctionYear?: true
    workStartDate?: true
    financialYear?: true
    estimatedPersonDays?: true
    actualPersonDays?: true
    vendorName?: true
    vendorGstNo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkDetail to aggregate.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkDetails
    **/
    _count?: true | WorkDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkDetailMaxAggregateInputType
  }

  export type GetWorkDetailAggregateType<T extends WorkDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkDetail[P]>
      : GetScalarType<T[P], AggregateWorkDetail[P]>
  }




  export type WorkDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkDetailWhereInput
    orderBy?: WorkDetailOrderByWithAggregationInput | WorkDetailOrderByWithAggregationInput[]
    by: WorkDetailScalarFieldEnum[] | WorkDetailScalarFieldEnum
    having?: WorkDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkDetailCountAggregateInputType | true
    _avg?: WorkDetailAvgAggregateInputType
    _sum?: WorkDetailSumAggregateInputType
    _min?: WorkDetailMinAggregateInputType
    _max?: WorkDetailMaxAggregateInputType
  }

  export type WorkDetailGroupByOutputType = {
    id: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName: string | null
    workCategory: string | null
    workType: string | null
    workStatus: string | null
    implementingAgency: string | null
    estimatedCost: Decimal | null
    actualExpenditure: Decimal | null
    sanctionYear: string | null
    workStartDate: Date | null
    financialYear: string | null
    estimatedPersonDays: string | null
    actualPersonDays: string | null
    vendorName: string | null
    vendorGstNo: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkDetailCountAggregateOutputType | null
    _avg: WorkDetailAvgAggregateOutputType | null
    _sum: WorkDetailSumAggregateOutputType | null
    _min: WorkDetailMinAggregateOutputType | null
    _max: WorkDetailMaxAggregateOutputType | null
  }

  type GetWorkDetailGroupByPayload<T extends WorkDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkDetailGroupByOutputType[P]>
            : GetScalarType<T[P], WorkDetailGroupByOutputType[P]>
        }
      >
    >


  export type WorkDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    district?: boolean
    panchayat?: boolean
    block?: boolean
    workCode?: boolean
    workName?: boolean
    workCategory?: boolean
    workType?: boolean
    workStatus?: boolean
    implementingAgency?: boolean
    estimatedCost?: boolean
    actualExpenditure?: boolean
    sanctionYear?: boolean
    workStartDate?: boolean
    financialYear?: boolean
    estimatedPersonDays?: boolean
    actualPersonDays?: boolean
    vendorName?: boolean
    vendorGstNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDocuments?: boolean | WorkDetail$workDocumentsArgs<ExtArgs>
    vendorDetails?: boolean | WorkDetail$vendorDetailsArgs<ExtArgs>
    quotationCallLetter?: boolean | WorkDetail$quotationCallLetterArgs<ExtArgs>
  }, ExtArgs["result"]["workDetail"]>

  export type WorkDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    district?: boolean
    panchayat?: boolean
    block?: boolean
    workCode?: boolean
    workName?: boolean
    workCategory?: boolean
    workType?: boolean
    workStatus?: boolean
    implementingAgency?: boolean
    estimatedCost?: boolean
    actualExpenditure?: boolean
    sanctionYear?: boolean
    workStartDate?: boolean
    financialYear?: boolean
    estimatedPersonDays?: boolean
    actualPersonDays?: boolean
    vendorName?: boolean
    vendorGstNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workDetail"]>

  export type WorkDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    district?: boolean
    panchayat?: boolean
    block?: boolean
    workCode?: boolean
    workName?: boolean
    workCategory?: boolean
    workType?: boolean
    workStatus?: boolean
    implementingAgency?: boolean
    estimatedCost?: boolean
    actualExpenditure?: boolean
    sanctionYear?: boolean
    workStartDate?: boolean
    financialYear?: boolean
    estimatedPersonDays?: boolean
    actualPersonDays?: boolean
    vendorName?: boolean
    vendorGstNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workDetail"]>

  export type WorkDetailSelectScalar = {
    id?: boolean
    state?: boolean
    district?: boolean
    panchayat?: boolean
    block?: boolean
    workCode?: boolean
    workName?: boolean
    workCategory?: boolean
    workType?: boolean
    workStatus?: boolean
    implementingAgency?: boolean
    estimatedCost?: boolean
    actualExpenditure?: boolean
    sanctionYear?: boolean
    workStartDate?: boolean
    financialYear?: boolean
    estimatedPersonDays?: boolean
    actualPersonDays?: boolean
    vendorName?: boolean
    vendorGstNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state" | "district" | "panchayat" | "block" | "workCode" | "workName" | "workCategory" | "workType" | "workStatus" | "implementingAgency" | "estimatedCost" | "actualExpenditure" | "sanctionYear" | "workStartDate" | "financialYear" | "estimatedPersonDays" | "actualPersonDays" | "vendorName" | "vendorGstNo" | "createdAt" | "updatedAt", ExtArgs["result"]["workDetail"]>
  export type WorkDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDocuments?: boolean | WorkDetail$workDocumentsArgs<ExtArgs>
    vendorDetails?: boolean | WorkDetail$vendorDetailsArgs<ExtArgs>
    quotationCallLetter?: boolean | WorkDetail$quotationCallLetterArgs<ExtArgs>
  }
  export type WorkDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkDetail"
    objects: {
      workDocuments: Prisma.$WorkDocumentsPayload<ExtArgs> | null
      vendorDetails: Prisma.$VendorDetailPayload<ExtArgs> | null
      quotationCallLetter: Prisma.$QuotationCallLetterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      state: string
      district: string
      panchayat: string
      block: string
      workCode: string
      workName: string | null
      workCategory: string | null
      workType: string | null
      workStatus: string | null
      implementingAgency: string | null
      estimatedCost: Prisma.Decimal | null
      actualExpenditure: Prisma.Decimal | null
      sanctionYear: string | null
      workStartDate: Date | null
      financialYear: string | null
      estimatedPersonDays: string | null
      actualPersonDays: string | null
      vendorName: string | null
      vendorGstNo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workDetail"]>
    composites: {}
  }

  type WorkDetailGetPayload<S extends boolean | null | undefined | WorkDetailDefaultArgs> = $Result.GetResult<Prisma.$WorkDetailPayload, S>

  type WorkDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkDetailCountAggregateInputType | true
    }

  export interface WorkDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkDetail'], meta: { name: 'WorkDetail' } }
    /**
     * Find zero or one WorkDetail that matches the filter.
     * @param {WorkDetailFindUniqueArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkDetailFindUniqueArgs>(args: SelectSubset<T, WorkDetailFindUniqueArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkDetailFindUniqueOrThrowArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailFindFirstArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkDetailFindFirstArgs>(args?: SelectSubset<T, WorkDetailFindFirstArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailFindFirstOrThrowArgs} args - Arguments to find a WorkDetail
     * @example
     * // Get one WorkDetail
     * const workDetail = await prisma.workDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkDetails
     * const workDetails = await prisma.workDetail.findMany()
     * 
     * // Get first 10 WorkDetails
     * const workDetails = await prisma.workDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workDetailWithIdOnly = await prisma.workDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkDetailFindManyArgs>(args?: SelectSubset<T, WorkDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkDetail.
     * @param {WorkDetailCreateArgs} args - Arguments to create a WorkDetail.
     * @example
     * // Create one WorkDetail
     * const WorkDetail = await prisma.workDetail.create({
     *   data: {
     *     // ... data to create a WorkDetail
     *   }
     * })
     * 
     */
    create<T extends WorkDetailCreateArgs>(args: SelectSubset<T, WorkDetailCreateArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkDetails.
     * @param {WorkDetailCreateManyArgs} args - Arguments to create many WorkDetails.
     * @example
     * // Create many WorkDetails
     * const workDetail = await prisma.workDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkDetailCreateManyArgs>(args?: SelectSubset<T, WorkDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkDetails and returns the data saved in the database.
     * @param {WorkDetailCreateManyAndReturnArgs} args - Arguments to create many WorkDetails.
     * @example
     * // Create many WorkDetails
     * const workDetail = await prisma.workDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkDetails and only return the `id`
     * const workDetailWithIdOnly = await prisma.workDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkDetail.
     * @param {WorkDetailDeleteArgs} args - Arguments to delete one WorkDetail.
     * @example
     * // Delete one WorkDetail
     * const WorkDetail = await prisma.workDetail.delete({
     *   where: {
     *     // ... filter to delete one WorkDetail
     *   }
     * })
     * 
     */
    delete<T extends WorkDetailDeleteArgs>(args: SelectSubset<T, WorkDetailDeleteArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkDetail.
     * @param {WorkDetailUpdateArgs} args - Arguments to update one WorkDetail.
     * @example
     * // Update one WorkDetail
     * const workDetail = await prisma.workDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkDetailUpdateArgs>(args: SelectSubset<T, WorkDetailUpdateArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkDetails.
     * @param {WorkDetailDeleteManyArgs} args - Arguments to filter WorkDetails to delete.
     * @example
     * // Delete a few WorkDetails
     * const { count } = await prisma.workDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDetailDeleteManyArgs>(args?: SelectSubset<T, WorkDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkDetails
     * const workDetail = await prisma.workDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkDetailUpdateManyArgs>(args: SelectSubset<T, WorkDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkDetails and returns the data updated in the database.
     * @param {WorkDetailUpdateManyAndReturnArgs} args - Arguments to update many WorkDetails.
     * @example
     * // Update many WorkDetails
     * const workDetail = await prisma.workDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkDetails and only return the `id`
     * const workDetailWithIdOnly = await prisma.workDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkDetail.
     * @param {WorkDetailUpsertArgs} args - Arguments to update or create a WorkDetail.
     * @example
     * // Update or create a WorkDetail
     * const workDetail = await prisma.workDetail.upsert({
     *   create: {
     *     // ... data to create a WorkDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkDetail we want to update
     *   }
     * })
     */
    upsert<T extends WorkDetailUpsertArgs>(args: SelectSubset<T, WorkDetailUpsertArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailCountArgs} args - Arguments to filter WorkDetails to count.
     * @example
     * // Count the number of WorkDetails
     * const count = await prisma.workDetail.count({
     *   where: {
     *     // ... the filter for the WorkDetails we want to count
     *   }
     * })
    **/
    count<T extends WorkDetailCountArgs>(
      args?: Subset<T, WorkDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkDetailAggregateArgs>(args: Subset<T, WorkDetailAggregateArgs>): Prisma.PrismaPromise<GetWorkDetailAggregateType<T>>

    /**
     * Group by WorkDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDetailGroupByArgs} args - Group by arguments.
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
      T extends WorkDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkDetailGroupByArgs['orderBy'] }
        : { orderBy?: WorkDetailGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkDetail model
   */
  readonly fields: WorkDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workDocuments<T extends WorkDetail$workDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, WorkDetail$workDocumentsArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vendorDetails<T extends WorkDetail$vendorDetailsArgs<ExtArgs> = {}>(args?: Subset<T, WorkDetail$vendorDetailsArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    quotationCallLetter<T extends WorkDetail$quotationCallLetterArgs<ExtArgs> = {}>(args?: Subset<T, WorkDetail$quotationCallLetterArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkDetail model
   */
  interface WorkDetailFieldRefs {
    readonly id: FieldRef<"WorkDetail", 'String'>
    readonly state: FieldRef<"WorkDetail", 'String'>
    readonly district: FieldRef<"WorkDetail", 'String'>
    readonly panchayat: FieldRef<"WorkDetail", 'String'>
    readonly block: FieldRef<"WorkDetail", 'String'>
    readonly workCode: FieldRef<"WorkDetail", 'String'>
    readonly workName: FieldRef<"WorkDetail", 'String'>
    readonly workCategory: FieldRef<"WorkDetail", 'String'>
    readonly workType: FieldRef<"WorkDetail", 'String'>
    readonly workStatus: FieldRef<"WorkDetail", 'String'>
    readonly implementingAgency: FieldRef<"WorkDetail", 'String'>
    readonly estimatedCost: FieldRef<"WorkDetail", 'Decimal'>
    readonly actualExpenditure: FieldRef<"WorkDetail", 'Decimal'>
    readonly sanctionYear: FieldRef<"WorkDetail", 'String'>
    readonly workStartDate: FieldRef<"WorkDetail", 'DateTime'>
    readonly financialYear: FieldRef<"WorkDetail", 'String'>
    readonly estimatedPersonDays: FieldRef<"WorkDetail", 'String'>
    readonly actualPersonDays: FieldRef<"WorkDetail", 'String'>
    readonly vendorName: FieldRef<"WorkDetail", 'String'>
    readonly vendorGstNo: FieldRef<"WorkDetail", 'String'>
    readonly createdAt: FieldRef<"WorkDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkDetail findUnique
   */
  export type WorkDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail findUniqueOrThrow
   */
  export type WorkDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail findFirst
   */
  export type WorkDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkDetails.
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkDetails.
     */
    distinct?: WorkDetailScalarFieldEnum | WorkDetailScalarFieldEnum[]
  }

  /**
   * WorkDetail findFirstOrThrow
   */
  export type WorkDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetail to fetch.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkDetails.
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkDetails.
     */
    distinct?: WorkDetailScalarFieldEnum | WorkDetailScalarFieldEnum[]
  }

  /**
   * WorkDetail findMany
   */
  export type WorkDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter, which WorkDetails to fetch.
     */
    where?: WorkDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDetails to fetch.
     */
    orderBy?: WorkDetailOrderByWithRelationInput | WorkDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkDetails.
     */
    cursor?: WorkDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDetails.
     */
    skip?: number
    distinct?: WorkDetailScalarFieldEnum | WorkDetailScalarFieldEnum[]
  }

  /**
   * WorkDetail create
   */
  export type WorkDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkDetail.
     */
    data: XOR<WorkDetailCreateInput, WorkDetailUncheckedCreateInput>
  }

  /**
   * WorkDetail createMany
   */
  export type WorkDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkDetails.
     */
    data: WorkDetailCreateManyInput | WorkDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkDetail createManyAndReturn
   */
  export type WorkDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * The data used to create many WorkDetails.
     */
    data: WorkDetailCreateManyInput | WorkDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkDetail update
   */
  export type WorkDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkDetail.
     */
    data: XOR<WorkDetailUpdateInput, WorkDetailUncheckedUpdateInput>
    /**
     * Choose, which WorkDetail to update.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail updateMany
   */
  export type WorkDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkDetails.
     */
    data: XOR<WorkDetailUpdateManyMutationInput, WorkDetailUncheckedUpdateManyInput>
    /**
     * Filter which WorkDetails to update
     */
    where?: WorkDetailWhereInput
    /**
     * Limit how many WorkDetails to update.
     */
    limit?: number
  }

  /**
   * WorkDetail updateManyAndReturn
   */
  export type WorkDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * The data used to update WorkDetails.
     */
    data: XOR<WorkDetailUpdateManyMutationInput, WorkDetailUncheckedUpdateManyInput>
    /**
     * Filter which WorkDetails to update
     */
    where?: WorkDetailWhereInput
    /**
     * Limit how many WorkDetails to update.
     */
    limit?: number
  }

  /**
   * WorkDetail upsert
   */
  export type WorkDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkDetail to update in case it exists.
     */
    where: WorkDetailWhereUniqueInput
    /**
     * In case the WorkDetail found by the `where` argument doesn't exist, create a new WorkDetail with this data.
     */
    create: XOR<WorkDetailCreateInput, WorkDetailUncheckedCreateInput>
    /**
     * In case the WorkDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkDetailUpdateInput, WorkDetailUncheckedUpdateInput>
  }

  /**
   * WorkDetail delete
   */
  export type WorkDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
    /**
     * Filter which WorkDetail to delete.
     */
    where: WorkDetailWhereUniqueInput
  }

  /**
   * WorkDetail deleteMany
   */
  export type WorkDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkDetails to delete
     */
    where?: WorkDetailWhereInput
    /**
     * Limit how many WorkDetails to delete.
     */
    limit?: number
  }

  /**
   * WorkDetail.workDocuments
   */
  export type WorkDetail$workDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    where?: WorkDocumentsWhereInput
  }

  /**
   * WorkDetail.vendorDetails
   */
  export type WorkDetail$vendorDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    where?: VendorDetailWhereInput
  }

  /**
   * WorkDetail.quotationCallLetter
   */
  export type WorkDetail$quotationCallLetterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    where?: QuotationCallLetterWhereInput
  }

  /**
   * WorkDetail without action
   */
  export type WorkDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDetail
     */
    select?: WorkDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDetail
     */
    omit?: WorkDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDetailInclude<ExtArgs> | null
  }


  /**
   * Model WorkDocuments
   */

  export type AggregateWorkDocuments = {
    _count: WorkDocumentsCountAggregateOutputType | null
    _min: WorkDocumentsMinAggregateOutputType | null
    _max: WorkDocumentsMaxAggregateOutputType | null
  }

  export type WorkDocumentsMinAggregateOutputType = {
    id: string | null
    workCode: string | null
    annualActionPlan: string | null
    technicalEstimate: string | null
    technicalSanction: string | null
    administrativeSanction: string | null
    convergenceFunds: string | null
    demandApplicationForm: string | null
    workAllocationForm: string | null
    filledEMusterRolls: string | null
    measurementBook: string | null
    materialProcurement: string | null
    wageListFTO: string | null
    skilledMusterRolls: string | null
    materialVouchers: string | null
    geotaggedPhotographs: string | null
    workCompletionCertificate: string | null
    musterRollMovementSlip: string | null
    socialAuditReport: string | null
    otherStateDocuments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkDocumentsMaxAggregateOutputType = {
    id: string | null
    workCode: string | null
    annualActionPlan: string | null
    technicalEstimate: string | null
    technicalSanction: string | null
    administrativeSanction: string | null
    convergenceFunds: string | null
    demandApplicationForm: string | null
    workAllocationForm: string | null
    filledEMusterRolls: string | null
    measurementBook: string | null
    materialProcurement: string | null
    wageListFTO: string | null
    skilledMusterRolls: string | null
    materialVouchers: string | null
    geotaggedPhotographs: string | null
    workCompletionCertificate: string | null
    musterRollMovementSlip: string | null
    socialAuditReport: string | null
    otherStateDocuments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkDocumentsCountAggregateOutputType = {
    id: number
    workCode: number
    annualActionPlan: number
    technicalEstimate: number
    technicalSanction: number
    administrativeSanction: number
    convergenceFunds: number
    demandApplicationForm: number
    workAllocationForm: number
    filledEMusterRolls: number
    measurementBook: number
    materialProcurement: number
    wageListFTO: number
    skilledMusterRolls: number
    materialVouchers: number
    geotaggedPhotographs: number
    workCompletionCertificate: number
    musterRollMovementSlip: number
    socialAuditReport: number
    otherStateDocuments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkDocumentsMinAggregateInputType = {
    id?: true
    workCode?: true
    annualActionPlan?: true
    technicalEstimate?: true
    technicalSanction?: true
    administrativeSanction?: true
    convergenceFunds?: true
    demandApplicationForm?: true
    workAllocationForm?: true
    filledEMusterRolls?: true
    measurementBook?: true
    materialProcurement?: true
    wageListFTO?: true
    skilledMusterRolls?: true
    materialVouchers?: true
    geotaggedPhotographs?: true
    workCompletionCertificate?: true
    musterRollMovementSlip?: true
    socialAuditReport?: true
    otherStateDocuments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkDocumentsMaxAggregateInputType = {
    id?: true
    workCode?: true
    annualActionPlan?: true
    technicalEstimate?: true
    technicalSanction?: true
    administrativeSanction?: true
    convergenceFunds?: true
    demandApplicationForm?: true
    workAllocationForm?: true
    filledEMusterRolls?: true
    measurementBook?: true
    materialProcurement?: true
    wageListFTO?: true
    skilledMusterRolls?: true
    materialVouchers?: true
    geotaggedPhotographs?: true
    workCompletionCertificate?: true
    musterRollMovementSlip?: true
    socialAuditReport?: true
    otherStateDocuments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkDocumentsCountAggregateInputType = {
    id?: true
    workCode?: true
    annualActionPlan?: true
    technicalEstimate?: true
    technicalSanction?: true
    administrativeSanction?: true
    convergenceFunds?: true
    demandApplicationForm?: true
    workAllocationForm?: true
    filledEMusterRolls?: true
    measurementBook?: true
    materialProcurement?: true
    wageListFTO?: true
    skilledMusterRolls?: true
    materialVouchers?: true
    geotaggedPhotographs?: true
    workCompletionCertificate?: true
    musterRollMovementSlip?: true
    socialAuditReport?: true
    otherStateDocuments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkDocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkDocuments to aggregate.
     */
    where?: WorkDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDocuments to fetch.
     */
    orderBy?: WorkDocumentsOrderByWithRelationInput | WorkDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkDocuments
    **/
    _count?: true | WorkDocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkDocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkDocumentsMaxAggregateInputType
  }

  export type GetWorkDocumentsAggregateType<T extends WorkDocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkDocuments[P]>
      : GetScalarType<T[P], AggregateWorkDocuments[P]>
  }




  export type WorkDocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkDocumentsWhereInput
    orderBy?: WorkDocumentsOrderByWithAggregationInput | WorkDocumentsOrderByWithAggregationInput[]
    by: WorkDocumentsScalarFieldEnum[] | WorkDocumentsScalarFieldEnum
    having?: WorkDocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkDocumentsCountAggregateInputType | true
    _min?: WorkDocumentsMinAggregateInputType
    _max?: WorkDocumentsMaxAggregateInputType
  }

  export type WorkDocumentsGroupByOutputType = {
    id: string
    workCode: string
    annualActionPlan: string | null
    technicalEstimate: string | null
    technicalSanction: string | null
    administrativeSanction: string | null
    convergenceFunds: string | null
    demandApplicationForm: string | null
    workAllocationForm: string | null
    filledEMusterRolls: string | null
    measurementBook: string | null
    materialProcurement: string | null
    wageListFTO: string | null
    skilledMusterRolls: string | null
    materialVouchers: string | null
    geotaggedPhotographs: string | null
    workCompletionCertificate: string | null
    musterRollMovementSlip: string | null
    socialAuditReport: string | null
    otherStateDocuments: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkDocumentsCountAggregateOutputType | null
    _min: WorkDocumentsMinAggregateOutputType | null
    _max: WorkDocumentsMaxAggregateOutputType | null
  }

  type GetWorkDocumentsGroupByPayload<T extends WorkDocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkDocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkDocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkDocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkDocumentsGroupByOutputType[P]>
        }
      >
    >


  export type WorkDocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workCode?: boolean
    annualActionPlan?: boolean
    technicalEstimate?: boolean
    technicalSanction?: boolean
    administrativeSanction?: boolean
    convergenceFunds?: boolean
    demandApplicationForm?: boolean
    workAllocationForm?: boolean
    filledEMusterRolls?: boolean
    measurementBook?: boolean
    materialProcurement?: boolean
    wageListFTO?: boolean
    skilledMusterRolls?: boolean
    materialVouchers?: boolean
    geotaggedPhotographs?: boolean
    workCompletionCertificate?: boolean
    musterRollMovementSlip?: boolean
    socialAuditReport?: boolean
    otherStateDocuments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workDocuments"]>

  export type WorkDocumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workCode?: boolean
    annualActionPlan?: boolean
    technicalEstimate?: boolean
    technicalSanction?: boolean
    administrativeSanction?: boolean
    convergenceFunds?: boolean
    demandApplicationForm?: boolean
    workAllocationForm?: boolean
    filledEMusterRolls?: boolean
    measurementBook?: boolean
    materialProcurement?: boolean
    wageListFTO?: boolean
    skilledMusterRolls?: boolean
    materialVouchers?: boolean
    geotaggedPhotographs?: boolean
    workCompletionCertificate?: boolean
    musterRollMovementSlip?: boolean
    socialAuditReport?: boolean
    otherStateDocuments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workDocuments"]>

  export type WorkDocumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workCode?: boolean
    annualActionPlan?: boolean
    technicalEstimate?: boolean
    technicalSanction?: boolean
    administrativeSanction?: boolean
    convergenceFunds?: boolean
    demandApplicationForm?: boolean
    workAllocationForm?: boolean
    filledEMusterRolls?: boolean
    measurementBook?: boolean
    materialProcurement?: boolean
    wageListFTO?: boolean
    skilledMusterRolls?: boolean
    materialVouchers?: boolean
    geotaggedPhotographs?: boolean
    workCompletionCertificate?: boolean
    musterRollMovementSlip?: boolean
    socialAuditReport?: boolean
    otherStateDocuments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workDocuments"]>

  export type WorkDocumentsSelectScalar = {
    id?: boolean
    workCode?: boolean
    annualActionPlan?: boolean
    technicalEstimate?: boolean
    technicalSanction?: boolean
    administrativeSanction?: boolean
    convergenceFunds?: boolean
    demandApplicationForm?: boolean
    workAllocationForm?: boolean
    filledEMusterRolls?: boolean
    measurementBook?: boolean
    materialProcurement?: boolean
    wageListFTO?: boolean
    skilledMusterRolls?: boolean
    materialVouchers?: boolean
    geotaggedPhotographs?: boolean
    workCompletionCertificate?: boolean
    musterRollMovementSlip?: boolean
    socialAuditReport?: boolean
    otherStateDocuments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkDocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workCode" | "annualActionPlan" | "technicalEstimate" | "technicalSanction" | "administrativeSanction" | "convergenceFunds" | "demandApplicationForm" | "workAllocationForm" | "filledEMusterRolls" | "measurementBook" | "materialProcurement" | "wageListFTO" | "skilledMusterRolls" | "materialVouchers" | "geotaggedPhotographs" | "workCompletionCertificate" | "musterRollMovementSlip" | "socialAuditReport" | "otherStateDocuments" | "createdAt" | "updatedAt", ExtArgs["result"]["workDocuments"]>
  export type WorkDocumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }
  export type WorkDocumentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }
  export type WorkDocumentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }

  export type $WorkDocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkDocuments"
    objects: {
      workDetail: Prisma.$WorkDetailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workCode: string
      annualActionPlan: string | null
      technicalEstimate: string | null
      technicalSanction: string | null
      administrativeSanction: string | null
      convergenceFunds: string | null
      demandApplicationForm: string | null
      workAllocationForm: string | null
      filledEMusterRolls: string | null
      measurementBook: string | null
      materialProcurement: string | null
      wageListFTO: string | null
      skilledMusterRolls: string | null
      materialVouchers: string | null
      geotaggedPhotographs: string | null
      workCompletionCertificate: string | null
      musterRollMovementSlip: string | null
      socialAuditReport: string | null
      otherStateDocuments: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workDocuments"]>
    composites: {}
  }

  type WorkDocumentsGetPayload<S extends boolean | null | undefined | WorkDocumentsDefaultArgs> = $Result.GetResult<Prisma.$WorkDocumentsPayload, S>

  type WorkDocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkDocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkDocumentsCountAggregateInputType | true
    }

  export interface WorkDocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkDocuments'], meta: { name: 'WorkDocuments' } }
    /**
     * Find zero or one WorkDocuments that matches the filter.
     * @param {WorkDocumentsFindUniqueArgs} args - Arguments to find a WorkDocuments
     * @example
     * // Get one WorkDocuments
     * const workDocuments = await prisma.workDocuments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkDocumentsFindUniqueArgs>(args: SelectSubset<T, WorkDocumentsFindUniqueArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkDocuments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkDocumentsFindUniqueOrThrowArgs} args - Arguments to find a WorkDocuments
     * @example
     * // Get one WorkDocuments
     * const workDocuments = await prisma.workDocuments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkDocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkDocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDocumentsFindFirstArgs} args - Arguments to find a WorkDocuments
     * @example
     * // Get one WorkDocuments
     * const workDocuments = await prisma.workDocuments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkDocumentsFindFirstArgs>(args?: SelectSubset<T, WorkDocumentsFindFirstArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkDocuments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDocumentsFindFirstOrThrowArgs} args - Arguments to find a WorkDocuments
     * @example
     * // Get one WorkDocuments
     * const workDocuments = await prisma.workDocuments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkDocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkDocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkDocuments
     * const workDocuments = await prisma.workDocuments.findMany()
     * 
     * // Get first 10 WorkDocuments
     * const workDocuments = await prisma.workDocuments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workDocumentsWithIdOnly = await prisma.workDocuments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkDocumentsFindManyArgs>(args?: SelectSubset<T, WorkDocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkDocuments.
     * @param {WorkDocumentsCreateArgs} args - Arguments to create a WorkDocuments.
     * @example
     * // Create one WorkDocuments
     * const WorkDocuments = await prisma.workDocuments.create({
     *   data: {
     *     // ... data to create a WorkDocuments
     *   }
     * })
     * 
     */
    create<T extends WorkDocumentsCreateArgs>(args: SelectSubset<T, WorkDocumentsCreateArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkDocuments.
     * @param {WorkDocumentsCreateManyArgs} args - Arguments to create many WorkDocuments.
     * @example
     * // Create many WorkDocuments
     * const workDocuments = await prisma.workDocuments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkDocumentsCreateManyArgs>(args?: SelectSubset<T, WorkDocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkDocuments and returns the data saved in the database.
     * @param {WorkDocumentsCreateManyAndReturnArgs} args - Arguments to create many WorkDocuments.
     * @example
     * // Create many WorkDocuments
     * const workDocuments = await prisma.workDocuments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkDocuments and only return the `id`
     * const workDocumentsWithIdOnly = await prisma.workDocuments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkDocumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkDocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkDocuments.
     * @param {WorkDocumentsDeleteArgs} args - Arguments to delete one WorkDocuments.
     * @example
     * // Delete one WorkDocuments
     * const WorkDocuments = await prisma.workDocuments.delete({
     *   where: {
     *     // ... filter to delete one WorkDocuments
     *   }
     * })
     * 
     */
    delete<T extends WorkDocumentsDeleteArgs>(args: SelectSubset<T, WorkDocumentsDeleteArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkDocuments.
     * @param {WorkDocumentsUpdateArgs} args - Arguments to update one WorkDocuments.
     * @example
     * // Update one WorkDocuments
     * const workDocuments = await prisma.workDocuments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkDocumentsUpdateArgs>(args: SelectSubset<T, WorkDocumentsUpdateArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkDocuments.
     * @param {WorkDocumentsDeleteManyArgs} args - Arguments to filter WorkDocuments to delete.
     * @example
     * // Delete a few WorkDocuments
     * const { count } = await prisma.workDocuments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDocumentsDeleteManyArgs>(args?: SelectSubset<T, WorkDocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkDocuments
     * const workDocuments = await prisma.workDocuments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkDocumentsUpdateManyArgs>(args: SelectSubset<T, WorkDocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkDocuments and returns the data updated in the database.
     * @param {WorkDocumentsUpdateManyAndReturnArgs} args - Arguments to update many WorkDocuments.
     * @example
     * // Update many WorkDocuments
     * const workDocuments = await prisma.workDocuments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkDocuments and only return the `id`
     * const workDocumentsWithIdOnly = await prisma.workDocuments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkDocumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkDocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkDocuments.
     * @param {WorkDocumentsUpsertArgs} args - Arguments to update or create a WorkDocuments.
     * @example
     * // Update or create a WorkDocuments
     * const workDocuments = await prisma.workDocuments.upsert({
     *   create: {
     *     // ... data to create a WorkDocuments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkDocuments we want to update
     *   }
     * })
     */
    upsert<T extends WorkDocumentsUpsertArgs>(args: SelectSubset<T, WorkDocumentsUpsertArgs<ExtArgs>>): Prisma__WorkDocumentsClient<$Result.GetResult<Prisma.$WorkDocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDocumentsCountArgs} args - Arguments to filter WorkDocuments to count.
     * @example
     * // Count the number of WorkDocuments
     * const count = await prisma.workDocuments.count({
     *   where: {
     *     // ... the filter for the WorkDocuments we want to count
     *   }
     * })
    **/
    count<T extends WorkDocumentsCountArgs>(
      args?: Subset<T, WorkDocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkDocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkDocumentsAggregateArgs>(args: Subset<T, WorkDocumentsAggregateArgs>): Prisma.PrismaPromise<GetWorkDocumentsAggregateType<T>>

    /**
     * Group by WorkDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkDocumentsGroupByArgs} args - Group by arguments.
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
      T extends WorkDocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkDocumentsGroupByArgs['orderBy'] }
        : { orderBy?: WorkDocumentsGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkDocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkDocuments model
   */
  readonly fields: WorkDocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkDocuments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkDocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workDetail<T extends WorkDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDetailDefaultArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkDocuments model
   */
  interface WorkDocumentsFieldRefs {
    readonly id: FieldRef<"WorkDocuments", 'String'>
    readonly workCode: FieldRef<"WorkDocuments", 'String'>
    readonly annualActionPlan: FieldRef<"WorkDocuments", 'String'>
    readonly technicalEstimate: FieldRef<"WorkDocuments", 'String'>
    readonly technicalSanction: FieldRef<"WorkDocuments", 'String'>
    readonly administrativeSanction: FieldRef<"WorkDocuments", 'String'>
    readonly convergenceFunds: FieldRef<"WorkDocuments", 'String'>
    readonly demandApplicationForm: FieldRef<"WorkDocuments", 'String'>
    readonly workAllocationForm: FieldRef<"WorkDocuments", 'String'>
    readonly filledEMusterRolls: FieldRef<"WorkDocuments", 'String'>
    readonly measurementBook: FieldRef<"WorkDocuments", 'String'>
    readonly materialProcurement: FieldRef<"WorkDocuments", 'String'>
    readonly wageListFTO: FieldRef<"WorkDocuments", 'String'>
    readonly skilledMusterRolls: FieldRef<"WorkDocuments", 'String'>
    readonly materialVouchers: FieldRef<"WorkDocuments", 'String'>
    readonly geotaggedPhotographs: FieldRef<"WorkDocuments", 'String'>
    readonly workCompletionCertificate: FieldRef<"WorkDocuments", 'String'>
    readonly musterRollMovementSlip: FieldRef<"WorkDocuments", 'String'>
    readonly socialAuditReport: FieldRef<"WorkDocuments", 'String'>
    readonly otherStateDocuments: FieldRef<"WorkDocuments", 'String'>
    readonly createdAt: FieldRef<"WorkDocuments", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkDocuments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkDocuments findUnique
   */
  export type WorkDocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which WorkDocuments to fetch.
     */
    where: WorkDocumentsWhereUniqueInput
  }

  /**
   * WorkDocuments findUniqueOrThrow
   */
  export type WorkDocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which WorkDocuments to fetch.
     */
    where: WorkDocumentsWhereUniqueInput
  }

  /**
   * WorkDocuments findFirst
   */
  export type WorkDocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which WorkDocuments to fetch.
     */
    where?: WorkDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDocuments to fetch.
     */
    orderBy?: WorkDocumentsOrderByWithRelationInput | WorkDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkDocuments.
     */
    cursor?: WorkDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkDocuments.
     */
    distinct?: WorkDocumentsScalarFieldEnum | WorkDocumentsScalarFieldEnum[]
  }

  /**
   * WorkDocuments findFirstOrThrow
   */
  export type WorkDocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which WorkDocuments to fetch.
     */
    where?: WorkDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDocuments to fetch.
     */
    orderBy?: WorkDocumentsOrderByWithRelationInput | WorkDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkDocuments.
     */
    cursor?: WorkDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkDocuments.
     */
    distinct?: WorkDocumentsScalarFieldEnum | WorkDocumentsScalarFieldEnum[]
  }

  /**
   * WorkDocuments findMany
   */
  export type WorkDocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which WorkDocuments to fetch.
     */
    where?: WorkDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkDocuments to fetch.
     */
    orderBy?: WorkDocumentsOrderByWithRelationInput | WorkDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkDocuments.
     */
    cursor?: WorkDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkDocuments.
     */
    skip?: number
    distinct?: WorkDocumentsScalarFieldEnum | WorkDocumentsScalarFieldEnum[]
  }

  /**
   * WorkDocuments create
   */
  export type WorkDocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkDocuments.
     */
    data: XOR<WorkDocumentsCreateInput, WorkDocumentsUncheckedCreateInput>
  }

  /**
   * WorkDocuments createMany
   */
  export type WorkDocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkDocuments.
     */
    data: WorkDocumentsCreateManyInput | WorkDocumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkDocuments createManyAndReturn
   */
  export type WorkDocumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * The data used to create many WorkDocuments.
     */
    data: WorkDocumentsCreateManyInput | WorkDocumentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkDocuments update
   */
  export type WorkDocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkDocuments.
     */
    data: XOR<WorkDocumentsUpdateInput, WorkDocumentsUncheckedUpdateInput>
    /**
     * Choose, which WorkDocuments to update.
     */
    where: WorkDocumentsWhereUniqueInput
  }

  /**
   * WorkDocuments updateMany
   */
  export type WorkDocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkDocuments.
     */
    data: XOR<WorkDocumentsUpdateManyMutationInput, WorkDocumentsUncheckedUpdateManyInput>
    /**
     * Filter which WorkDocuments to update
     */
    where?: WorkDocumentsWhereInput
    /**
     * Limit how many WorkDocuments to update.
     */
    limit?: number
  }

  /**
   * WorkDocuments updateManyAndReturn
   */
  export type WorkDocumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * The data used to update WorkDocuments.
     */
    data: XOR<WorkDocumentsUpdateManyMutationInput, WorkDocumentsUncheckedUpdateManyInput>
    /**
     * Filter which WorkDocuments to update
     */
    where?: WorkDocumentsWhereInput
    /**
     * Limit how many WorkDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkDocuments upsert
   */
  export type WorkDocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkDocuments to update in case it exists.
     */
    where: WorkDocumentsWhereUniqueInput
    /**
     * In case the WorkDocuments found by the `where` argument doesn't exist, create a new WorkDocuments with this data.
     */
    create: XOR<WorkDocumentsCreateInput, WorkDocumentsUncheckedCreateInput>
    /**
     * In case the WorkDocuments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkDocumentsUpdateInput, WorkDocumentsUncheckedUpdateInput>
  }

  /**
   * WorkDocuments delete
   */
  export type WorkDocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
    /**
     * Filter which WorkDocuments to delete.
     */
    where: WorkDocumentsWhereUniqueInput
  }

  /**
   * WorkDocuments deleteMany
   */
  export type WorkDocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkDocuments to delete
     */
    where?: WorkDocumentsWhereInput
    /**
     * Limit how many WorkDocuments to delete.
     */
    limit?: number
  }

  /**
   * WorkDocuments without action
   */
  export type WorkDocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkDocuments
     */
    select?: WorkDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkDocuments
     */
    omit?: WorkDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkDocumentsInclude<ExtArgs> | null
  }


  /**
   * Model VendorDetail
   */

  export type AggregateVendorDetail = {
    _count: VendorDetailCountAggregateOutputType | null
    _min: VendorDetailMinAggregateOutputType | null
    _max: VendorDetailMaxAggregateOutputType | null
  }

  export type VendorDetailMinAggregateOutputType = {
    id: string | null
    vendorNameOne: string | null
    vendorNameTwo: string | null
    vendorNameThree: string | null
    vendorGstOne: string | null
    vendorGstTwo: string | null
    vendorGstThree: string | null
    fromDate: Date | null
    toDate: Date | null
    workDetailId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorDetailMaxAggregateOutputType = {
    id: string | null
    vendorNameOne: string | null
    vendorNameTwo: string | null
    vendorNameThree: string | null
    vendorGstOne: string | null
    vendorGstTwo: string | null
    vendorGstThree: string | null
    fromDate: Date | null
    toDate: Date | null
    workDetailId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorDetailCountAggregateOutputType = {
    id: number
    vendorNameOne: number
    vendorNameTwo: number
    vendorNameThree: number
    vendorGstOne: number
    vendorGstTwo: number
    vendorGstThree: number
    fromDate: number
    toDate: number
    workDetailId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorDetailMinAggregateInputType = {
    id?: true
    vendorNameOne?: true
    vendorNameTwo?: true
    vendorNameThree?: true
    vendorGstOne?: true
    vendorGstTwo?: true
    vendorGstThree?: true
    fromDate?: true
    toDate?: true
    workDetailId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorDetailMaxAggregateInputType = {
    id?: true
    vendorNameOne?: true
    vendorNameTwo?: true
    vendorNameThree?: true
    vendorGstOne?: true
    vendorGstTwo?: true
    vendorGstThree?: true
    fromDate?: true
    toDate?: true
    workDetailId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorDetailCountAggregateInputType = {
    id?: true
    vendorNameOne?: true
    vendorNameTwo?: true
    vendorNameThree?: true
    vendorGstOne?: true
    vendorGstTwo?: true
    vendorGstThree?: true
    fromDate?: true
    toDate?: true
    workDetailId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorDetail to aggregate.
     */
    where?: VendorDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorDetails to fetch.
     */
    orderBy?: VendorDetailOrderByWithRelationInput | VendorDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorDetails
    **/
    _count?: true | VendorDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorDetailMaxAggregateInputType
  }

  export type GetVendorDetailAggregateType<T extends VendorDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorDetail[P]>
      : GetScalarType<T[P], AggregateVendorDetail[P]>
  }




  export type VendorDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorDetailWhereInput
    orderBy?: VendorDetailOrderByWithAggregationInput | VendorDetailOrderByWithAggregationInput[]
    by: VendorDetailScalarFieldEnum[] | VendorDetailScalarFieldEnum
    having?: VendorDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorDetailCountAggregateInputType | true
    _min?: VendorDetailMinAggregateInputType
    _max?: VendorDetailMaxAggregateInputType
  }

  export type VendorDetailGroupByOutputType = {
    id: string
    vendorNameOne: string | null
    vendorNameTwo: string | null
    vendorNameThree: string | null
    vendorGstOne: string | null
    vendorGstTwo: string | null
    vendorGstThree: string | null
    fromDate: Date | null
    toDate: Date | null
    workDetailId: string
    createdAt: Date
    updatedAt: Date
    _count: VendorDetailCountAggregateOutputType | null
    _min: VendorDetailMinAggregateOutputType | null
    _max: VendorDetailMaxAggregateOutputType | null
  }

  type GetVendorDetailGroupByPayload<T extends VendorDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorDetailGroupByOutputType[P]>
            : GetScalarType<T[P], VendorDetailGroupByOutputType[P]>
        }
      >
    >


  export type VendorDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorNameOne?: boolean
    vendorNameTwo?: boolean
    vendorNameThree?: boolean
    vendorGstOne?: boolean
    vendorGstTwo?: boolean
    vendorGstThree?: boolean
    fromDate?: boolean
    toDate?: boolean
    workDetailId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorDetail"]>

  export type VendorDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorNameOne?: boolean
    vendorNameTwo?: boolean
    vendorNameThree?: boolean
    vendorGstOne?: boolean
    vendorGstTwo?: boolean
    vendorGstThree?: boolean
    fromDate?: boolean
    toDate?: boolean
    workDetailId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorDetail"]>

  export type VendorDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorNameOne?: boolean
    vendorNameTwo?: boolean
    vendorNameThree?: boolean
    vendorGstOne?: boolean
    vendorGstTwo?: boolean
    vendorGstThree?: boolean
    fromDate?: boolean
    toDate?: boolean
    workDetailId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorDetail"]>

  export type VendorDetailSelectScalar = {
    id?: boolean
    vendorNameOne?: boolean
    vendorNameTwo?: boolean
    vendorNameThree?: boolean
    vendorGstOne?: boolean
    vendorGstTwo?: boolean
    vendorGstThree?: boolean
    fromDate?: boolean
    toDate?: boolean
    workDetailId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorNameOne" | "vendorNameTwo" | "vendorNameThree" | "vendorGstOne" | "vendorGstTwo" | "vendorGstThree" | "fromDate" | "toDate" | "workDetailId" | "createdAt" | "updatedAt", ExtArgs["result"]["vendorDetail"]>
  export type VendorDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }
  export type VendorDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }
  export type VendorDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }

  export type $VendorDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorDetail"
    objects: {
      workDetail: Prisma.$WorkDetailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorNameOne: string | null
      vendorNameTwo: string | null
      vendorNameThree: string | null
      vendorGstOne: string | null
      vendorGstTwo: string | null
      vendorGstThree: string | null
      fromDate: Date | null
      toDate: Date | null
      workDetailId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendorDetail"]>
    composites: {}
  }

  type VendorDetailGetPayload<S extends boolean | null | undefined | VendorDetailDefaultArgs> = $Result.GetResult<Prisma.$VendorDetailPayload, S>

  type VendorDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorDetailCountAggregateInputType | true
    }

  export interface VendorDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorDetail'], meta: { name: 'VendorDetail' } }
    /**
     * Find zero or one VendorDetail that matches the filter.
     * @param {VendorDetailFindUniqueArgs} args - Arguments to find a VendorDetail
     * @example
     * // Get one VendorDetail
     * const vendorDetail = await prisma.vendorDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorDetailFindUniqueArgs>(args: SelectSubset<T, VendorDetailFindUniqueArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorDetailFindUniqueOrThrowArgs} args - Arguments to find a VendorDetail
     * @example
     * // Get one VendorDetail
     * const vendorDetail = await prisma.vendorDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorDetailFindFirstArgs} args - Arguments to find a VendorDetail
     * @example
     * // Get one VendorDetail
     * const vendorDetail = await prisma.vendorDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorDetailFindFirstArgs>(args?: SelectSubset<T, VendorDetailFindFirstArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorDetailFindFirstOrThrowArgs} args - Arguments to find a VendorDetail
     * @example
     * // Get one VendorDetail
     * const vendorDetail = await prisma.vendorDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorDetails
     * const vendorDetails = await prisma.vendorDetail.findMany()
     * 
     * // Get first 10 VendorDetails
     * const vendorDetails = await prisma.vendorDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorDetailWithIdOnly = await prisma.vendorDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorDetailFindManyArgs>(args?: SelectSubset<T, VendorDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorDetail.
     * @param {VendorDetailCreateArgs} args - Arguments to create a VendorDetail.
     * @example
     * // Create one VendorDetail
     * const VendorDetail = await prisma.vendorDetail.create({
     *   data: {
     *     // ... data to create a VendorDetail
     *   }
     * })
     * 
     */
    create<T extends VendorDetailCreateArgs>(args: SelectSubset<T, VendorDetailCreateArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorDetails.
     * @param {VendorDetailCreateManyArgs} args - Arguments to create many VendorDetails.
     * @example
     * // Create many VendorDetails
     * const vendorDetail = await prisma.vendorDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorDetailCreateManyArgs>(args?: SelectSubset<T, VendorDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorDetails and returns the data saved in the database.
     * @param {VendorDetailCreateManyAndReturnArgs} args - Arguments to create many VendorDetails.
     * @example
     * // Create many VendorDetails
     * const vendorDetail = await prisma.vendorDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorDetails and only return the `id`
     * const vendorDetailWithIdOnly = await prisma.vendorDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VendorDetail.
     * @param {VendorDetailDeleteArgs} args - Arguments to delete one VendorDetail.
     * @example
     * // Delete one VendorDetail
     * const VendorDetail = await prisma.vendorDetail.delete({
     *   where: {
     *     // ... filter to delete one VendorDetail
     *   }
     * })
     * 
     */
    delete<T extends VendorDetailDeleteArgs>(args: SelectSubset<T, VendorDetailDeleteArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorDetail.
     * @param {VendorDetailUpdateArgs} args - Arguments to update one VendorDetail.
     * @example
     * // Update one VendorDetail
     * const vendorDetail = await prisma.vendorDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorDetailUpdateArgs>(args: SelectSubset<T, VendorDetailUpdateArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorDetails.
     * @param {VendorDetailDeleteManyArgs} args - Arguments to filter VendorDetails to delete.
     * @example
     * // Delete a few VendorDetails
     * const { count } = await prisma.vendorDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDetailDeleteManyArgs>(args?: SelectSubset<T, VendorDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorDetails
     * const vendorDetail = await prisma.vendorDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorDetailUpdateManyArgs>(args: SelectSubset<T, VendorDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorDetails and returns the data updated in the database.
     * @param {VendorDetailUpdateManyAndReturnArgs} args - Arguments to update many VendorDetails.
     * @example
     * // Update many VendorDetails
     * const vendorDetail = await prisma.vendorDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VendorDetails and only return the `id`
     * const vendorDetailWithIdOnly = await prisma.vendorDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VendorDetail.
     * @param {VendorDetailUpsertArgs} args - Arguments to update or create a VendorDetail.
     * @example
     * // Update or create a VendorDetail
     * const vendorDetail = await prisma.vendorDetail.upsert({
     *   create: {
     *     // ... data to create a VendorDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorDetail we want to update
     *   }
     * })
     */
    upsert<T extends VendorDetailUpsertArgs>(args: SelectSubset<T, VendorDetailUpsertArgs<ExtArgs>>): Prisma__VendorDetailClient<$Result.GetResult<Prisma.$VendorDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorDetailCountArgs} args - Arguments to filter VendorDetails to count.
     * @example
     * // Count the number of VendorDetails
     * const count = await prisma.vendorDetail.count({
     *   where: {
     *     // ... the filter for the VendorDetails we want to count
     *   }
     * })
    **/
    count<T extends VendorDetailCountArgs>(
      args?: Subset<T, VendorDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorDetailAggregateArgs>(args: Subset<T, VendorDetailAggregateArgs>): Prisma.PrismaPromise<GetVendorDetailAggregateType<T>>

    /**
     * Group by VendorDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorDetailGroupByArgs} args - Group by arguments.
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
      T extends VendorDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorDetailGroupByArgs['orderBy'] }
        : { orderBy?: VendorDetailGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorDetail model
   */
  readonly fields: VendorDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workDetail<T extends WorkDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDetailDefaultArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorDetail model
   */
  interface VendorDetailFieldRefs {
    readonly id: FieldRef<"VendorDetail", 'String'>
    readonly vendorNameOne: FieldRef<"VendorDetail", 'String'>
    readonly vendorNameTwo: FieldRef<"VendorDetail", 'String'>
    readonly vendorNameThree: FieldRef<"VendorDetail", 'String'>
    readonly vendorGstOne: FieldRef<"VendorDetail", 'String'>
    readonly vendorGstTwo: FieldRef<"VendorDetail", 'String'>
    readonly vendorGstThree: FieldRef<"VendorDetail", 'String'>
    readonly fromDate: FieldRef<"VendorDetail", 'DateTime'>
    readonly toDate: FieldRef<"VendorDetail", 'DateTime'>
    readonly workDetailId: FieldRef<"VendorDetail", 'String'>
    readonly createdAt: FieldRef<"VendorDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"VendorDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VendorDetail findUnique
   */
  export type VendorDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * Filter, which VendorDetail to fetch.
     */
    where: VendorDetailWhereUniqueInput
  }

  /**
   * VendorDetail findUniqueOrThrow
   */
  export type VendorDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * Filter, which VendorDetail to fetch.
     */
    where: VendorDetailWhereUniqueInput
  }

  /**
   * VendorDetail findFirst
   */
  export type VendorDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * Filter, which VendorDetail to fetch.
     */
    where?: VendorDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorDetails to fetch.
     */
    orderBy?: VendorDetailOrderByWithRelationInput | VendorDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorDetails.
     */
    cursor?: VendorDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorDetails.
     */
    distinct?: VendorDetailScalarFieldEnum | VendorDetailScalarFieldEnum[]
  }

  /**
   * VendorDetail findFirstOrThrow
   */
  export type VendorDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * Filter, which VendorDetail to fetch.
     */
    where?: VendorDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorDetails to fetch.
     */
    orderBy?: VendorDetailOrderByWithRelationInput | VendorDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorDetails.
     */
    cursor?: VendorDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorDetails.
     */
    distinct?: VendorDetailScalarFieldEnum | VendorDetailScalarFieldEnum[]
  }

  /**
   * VendorDetail findMany
   */
  export type VendorDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * Filter, which VendorDetails to fetch.
     */
    where?: VendorDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorDetails to fetch.
     */
    orderBy?: VendorDetailOrderByWithRelationInput | VendorDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorDetails.
     */
    cursor?: VendorDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorDetails.
     */
    skip?: number
    distinct?: VendorDetailScalarFieldEnum | VendorDetailScalarFieldEnum[]
  }

  /**
   * VendorDetail create
   */
  export type VendorDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorDetail.
     */
    data: XOR<VendorDetailCreateInput, VendorDetailUncheckedCreateInput>
  }

  /**
   * VendorDetail createMany
   */
  export type VendorDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorDetails.
     */
    data: VendorDetailCreateManyInput | VendorDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorDetail createManyAndReturn
   */
  export type VendorDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * The data used to create many VendorDetails.
     */
    data: VendorDetailCreateManyInput | VendorDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorDetail update
   */
  export type VendorDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorDetail.
     */
    data: XOR<VendorDetailUpdateInput, VendorDetailUncheckedUpdateInput>
    /**
     * Choose, which VendorDetail to update.
     */
    where: VendorDetailWhereUniqueInput
  }

  /**
   * VendorDetail updateMany
   */
  export type VendorDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorDetails.
     */
    data: XOR<VendorDetailUpdateManyMutationInput, VendorDetailUncheckedUpdateManyInput>
    /**
     * Filter which VendorDetails to update
     */
    where?: VendorDetailWhereInput
    /**
     * Limit how many VendorDetails to update.
     */
    limit?: number
  }

  /**
   * VendorDetail updateManyAndReturn
   */
  export type VendorDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * The data used to update VendorDetails.
     */
    data: XOR<VendorDetailUpdateManyMutationInput, VendorDetailUncheckedUpdateManyInput>
    /**
     * Filter which VendorDetails to update
     */
    where?: VendorDetailWhereInput
    /**
     * Limit how many VendorDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorDetail upsert
   */
  export type VendorDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorDetail to update in case it exists.
     */
    where: VendorDetailWhereUniqueInput
    /**
     * In case the VendorDetail found by the `where` argument doesn't exist, create a new VendorDetail with this data.
     */
    create: XOR<VendorDetailCreateInput, VendorDetailUncheckedCreateInput>
    /**
     * In case the VendorDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorDetailUpdateInput, VendorDetailUncheckedUpdateInput>
  }

  /**
   * VendorDetail delete
   */
  export type VendorDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
    /**
     * Filter which VendorDetail to delete.
     */
    where: VendorDetailWhereUniqueInput
  }

  /**
   * VendorDetail deleteMany
   */
  export type VendorDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorDetails to delete
     */
    where?: VendorDetailWhereInput
    /**
     * Limit how many VendorDetails to delete.
     */
    limit?: number
  }

  /**
   * VendorDetail without action
   */
  export type VendorDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorDetail
     */
    select?: VendorDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorDetail
     */
    omit?: VendorDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorDetailInclude<ExtArgs> | null
  }


  /**
   * Model QuotationCallLetter
   */

  export type AggregateQuotationCallLetter = {
    _count: QuotationCallLetterCountAggregateOutputType | null
    _min: QuotationCallLetterMinAggregateOutputType | null
    _max: QuotationCallLetterMaxAggregateOutputType | null
  }

  export type QuotationCallLetterMinAggregateOutputType = {
    id: string | null
    workDetailId: string | null
    administrativeSanction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuotationCallLetterMaxAggregateOutputType = {
    id: string | null
    workDetailId: string | null
    administrativeSanction: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuotationCallLetterCountAggregateOutputType = {
    id: number
    workDetailId: number
    administrativeSanction: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuotationCallLetterMinAggregateInputType = {
    id?: true
    workDetailId?: true
    administrativeSanction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuotationCallLetterMaxAggregateInputType = {
    id?: true
    workDetailId?: true
    administrativeSanction?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuotationCallLetterCountAggregateInputType = {
    id?: true
    workDetailId?: true
    administrativeSanction?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuotationCallLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationCallLetter to aggregate.
     */
    where?: QuotationCallLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationCallLetters to fetch.
     */
    orderBy?: QuotationCallLetterOrderByWithRelationInput | QuotationCallLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuotationCallLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationCallLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationCallLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuotationCallLetters
    **/
    _count?: true | QuotationCallLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuotationCallLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuotationCallLetterMaxAggregateInputType
  }

  export type GetQuotationCallLetterAggregateType<T extends QuotationCallLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateQuotationCallLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuotationCallLetter[P]>
      : GetScalarType<T[P], AggregateQuotationCallLetter[P]>
  }




  export type QuotationCallLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuotationCallLetterWhereInput
    orderBy?: QuotationCallLetterOrderByWithAggregationInput | QuotationCallLetterOrderByWithAggregationInput[]
    by: QuotationCallLetterScalarFieldEnum[] | QuotationCallLetterScalarFieldEnum
    having?: QuotationCallLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuotationCallLetterCountAggregateInputType | true
    _min?: QuotationCallLetterMinAggregateInputType
    _max?: QuotationCallLetterMaxAggregateInputType
  }

  export type QuotationCallLetterGroupByOutputType = {
    id: string
    workDetailId: string
    administrativeSanction: string
    createdAt: Date
    updatedAt: Date
    _count: QuotationCallLetterCountAggregateOutputType | null
    _min: QuotationCallLetterMinAggregateOutputType | null
    _max: QuotationCallLetterMaxAggregateOutputType | null
  }

  type GetQuotationCallLetterGroupByPayload<T extends QuotationCallLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuotationCallLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuotationCallLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuotationCallLetterGroupByOutputType[P]>
            : GetScalarType<T[P], QuotationCallLetterGroupByOutputType[P]>
        }
      >
    >


  export type QuotationCallLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workDetailId?: boolean
    administrativeSanction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
    materialItems?: boolean | QuotationCallLetter$materialItemsArgs<ExtArgs>
    _count?: boolean | QuotationCallLetterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationCallLetter"]>

  export type QuotationCallLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workDetailId?: boolean
    administrativeSanction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationCallLetter"]>

  export type QuotationCallLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workDetailId?: boolean
    administrativeSanction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quotationCallLetter"]>

  export type QuotationCallLetterSelectScalar = {
    id?: boolean
    workDetailId?: boolean
    administrativeSanction?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuotationCallLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workDetailId" | "administrativeSanction" | "createdAt" | "updatedAt", ExtArgs["result"]["quotationCallLetter"]>
  export type QuotationCallLetterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
    materialItems?: boolean | QuotationCallLetter$materialItemsArgs<ExtArgs>
    _count?: boolean | QuotationCallLetterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuotationCallLetterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }
  export type QuotationCallLetterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workDetail?: boolean | WorkDetailDefaultArgs<ExtArgs>
  }

  export type $QuotationCallLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuotationCallLetter"
    objects: {
      workDetail: Prisma.$WorkDetailPayload<ExtArgs>
      materialItems: Prisma.$MaterialItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workDetailId: string
      administrativeSanction: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quotationCallLetter"]>
    composites: {}
  }

  type QuotationCallLetterGetPayload<S extends boolean | null | undefined | QuotationCallLetterDefaultArgs> = $Result.GetResult<Prisma.$QuotationCallLetterPayload, S>

  type QuotationCallLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuotationCallLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuotationCallLetterCountAggregateInputType | true
    }

  export interface QuotationCallLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuotationCallLetter'], meta: { name: 'QuotationCallLetter' } }
    /**
     * Find zero or one QuotationCallLetter that matches the filter.
     * @param {QuotationCallLetterFindUniqueArgs} args - Arguments to find a QuotationCallLetter
     * @example
     * // Get one QuotationCallLetter
     * const quotationCallLetter = await prisma.quotationCallLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuotationCallLetterFindUniqueArgs>(args: SelectSubset<T, QuotationCallLetterFindUniqueArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuotationCallLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuotationCallLetterFindUniqueOrThrowArgs} args - Arguments to find a QuotationCallLetter
     * @example
     * // Get one QuotationCallLetter
     * const quotationCallLetter = await prisma.quotationCallLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuotationCallLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, QuotationCallLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotationCallLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCallLetterFindFirstArgs} args - Arguments to find a QuotationCallLetter
     * @example
     * // Get one QuotationCallLetter
     * const quotationCallLetter = await prisma.quotationCallLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuotationCallLetterFindFirstArgs>(args?: SelectSubset<T, QuotationCallLetterFindFirstArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuotationCallLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCallLetterFindFirstOrThrowArgs} args - Arguments to find a QuotationCallLetter
     * @example
     * // Get one QuotationCallLetter
     * const quotationCallLetter = await prisma.quotationCallLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuotationCallLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, QuotationCallLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuotationCallLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCallLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuotationCallLetters
     * const quotationCallLetters = await prisma.quotationCallLetter.findMany()
     * 
     * // Get first 10 QuotationCallLetters
     * const quotationCallLetters = await prisma.quotationCallLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quotationCallLetterWithIdOnly = await prisma.quotationCallLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuotationCallLetterFindManyArgs>(args?: SelectSubset<T, QuotationCallLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuotationCallLetter.
     * @param {QuotationCallLetterCreateArgs} args - Arguments to create a QuotationCallLetter.
     * @example
     * // Create one QuotationCallLetter
     * const QuotationCallLetter = await prisma.quotationCallLetter.create({
     *   data: {
     *     // ... data to create a QuotationCallLetter
     *   }
     * })
     * 
     */
    create<T extends QuotationCallLetterCreateArgs>(args: SelectSubset<T, QuotationCallLetterCreateArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuotationCallLetters.
     * @param {QuotationCallLetterCreateManyArgs} args - Arguments to create many QuotationCallLetters.
     * @example
     * // Create many QuotationCallLetters
     * const quotationCallLetter = await prisma.quotationCallLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuotationCallLetterCreateManyArgs>(args?: SelectSubset<T, QuotationCallLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuotationCallLetters and returns the data saved in the database.
     * @param {QuotationCallLetterCreateManyAndReturnArgs} args - Arguments to create many QuotationCallLetters.
     * @example
     * // Create many QuotationCallLetters
     * const quotationCallLetter = await prisma.quotationCallLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuotationCallLetters and only return the `id`
     * const quotationCallLetterWithIdOnly = await prisma.quotationCallLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuotationCallLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, QuotationCallLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuotationCallLetter.
     * @param {QuotationCallLetterDeleteArgs} args - Arguments to delete one QuotationCallLetter.
     * @example
     * // Delete one QuotationCallLetter
     * const QuotationCallLetter = await prisma.quotationCallLetter.delete({
     *   where: {
     *     // ... filter to delete one QuotationCallLetter
     *   }
     * })
     * 
     */
    delete<T extends QuotationCallLetterDeleteArgs>(args: SelectSubset<T, QuotationCallLetterDeleteArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuotationCallLetter.
     * @param {QuotationCallLetterUpdateArgs} args - Arguments to update one QuotationCallLetter.
     * @example
     * // Update one QuotationCallLetter
     * const quotationCallLetter = await prisma.quotationCallLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuotationCallLetterUpdateArgs>(args: SelectSubset<T, QuotationCallLetterUpdateArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuotationCallLetters.
     * @param {QuotationCallLetterDeleteManyArgs} args - Arguments to filter QuotationCallLetters to delete.
     * @example
     * // Delete a few QuotationCallLetters
     * const { count } = await prisma.quotationCallLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuotationCallLetterDeleteManyArgs>(args?: SelectSubset<T, QuotationCallLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationCallLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCallLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuotationCallLetters
     * const quotationCallLetter = await prisma.quotationCallLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuotationCallLetterUpdateManyArgs>(args: SelectSubset<T, QuotationCallLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuotationCallLetters and returns the data updated in the database.
     * @param {QuotationCallLetterUpdateManyAndReturnArgs} args - Arguments to update many QuotationCallLetters.
     * @example
     * // Update many QuotationCallLetters
     * const quotationCallLetter = await prisma.quotationCallLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuotationCallLetters and only return the `id`
     * const quotationCallLetterWithIdOnly = await prisma.quotationCallLetter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuotationCallLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, QuotationCallLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuotationCallLetter.
     * @param {QuotationCallLetterUpsertArgs} args - Arguments to update or create a QuotationCallLetter.
     * @example
     * // Update or create a QuotationCallLetter
     * const quotationCallLetter = await prisma.quotationCallLetter.upsert({
     *   create: {
     *     // ... data to create a QuotationCallLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuotationCallLetter we want to update
     *   }
     * })
     */
    upsert<T extends QuotationCallLetterUpsertArgs>(args: SelectSubset<T, QuotationCallLetterUpsertArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuotationCallLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCallLetterCountArgs} args - Arguments to filter QuotationCallLetters to count.
     * @example
     * // Count the number of QuotationCallLetters
     * const count = await prisma.quotationCallLetter.count({
     *   where: {
     *     // ... the filter for the QuotationCallLetters we want to count
     *   }
     * })
    **/
    count<T extends QuotationCallLetterCountArgs>(
      args?: Subset<T, QuotationCallLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuotationCallLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuotationCallLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCallLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuotationCallLetterAggregateArgs>(args: Subset<T, QuotationCallLetterAggregateArgs>): Prisma.PrismaPromise<GetQuotationCallLetterAggregateType<T>>

    /**
     * Group by QuotationCallLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuotationCallLetterGroupByArgs} args - Group by arguments.
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
      T extends QuotationCallLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuotationCallLetterGroupByArgs['orderBy'] }
        : { orderBy?: QuotationCallLetterGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuotationCallLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuotationCallLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuotationCallLetter model
   */
  readonly fields: QuotationCallLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuotationCallLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuotationCallLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workDetail<T extends WorkDetailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkDetailDefaultArgs<ExtArgs>>): Prisma__WorkDetailClient<$Result.GetResult<Prisma.$WorkDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materialItems<T extends QuotationCallLetter$materialItemsArgs<ExtArgs> = {}>(args?: Subset<T, QuotationCallLetter$materialItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuotationCallLetter model
   */
  interface QuotationCallLetterFieldRefs {
    readonly id: FieldRef<"QuotationCallLetter", 'String'>
    readonly workDetailId: FieldRef<"QuotationCallLetter", 'String'>
    readonly administrativeSanction: FieldRef<"QuotationCallLetter", 'String'>
    readonly createdAt: FieldRef<"QuotationCallLetter", 'DateTime'>
    readonly updatedAt: FieldRef<"QuotationCallLetter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuotationCallLetter findUnique
   */
  export type QuotationCallLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * Filter, which QuotationCallLetter to fetch.
     */
    where: QuotationCallLetterWhereUniqueInput
  }

  /**
   * QuotationCallLetter findUniqueOrThrow
   */
  export type QuotationCallLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * Filter, which QuotationCallLetter to fetch.
     */
    where: QuotationCallLetterWhereUniqueInput
  }

  /**
   * QuotationCallLetter findFirst
   */
  export type QuotationCallLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * Filter, which QuotationCallLetter to fetch.
     */
    where?: QuotationCallLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationCallLetters to fetch.
     */
    orderBy?: QuotationCallLetterOrderByWithRelationInput | QuotationCallLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationCallLetters.
     */
    cursor?: QuotationCallLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationCallLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationCallLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationCallLetters.
     */
    distinct?: QuotationCallLetterScalarFieldEnum | QuotationCallLetterScalarFieldEnum[]
  }

  /**
   * QuotationCallLetter findFirstOrThrow
   */
  export type QuotationCallLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * Filter, which QuotationCallLetter to fetch.
     */
    where?: QuotationCallLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationCallLetters to fetch.
     */
    orderBy?: QuotationCallLetterOrderByWithRelationInput | QuotationCallLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuotationCallLetters.
     */
    cursor?: QuotationCallLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationCallLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationCallLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuotationCallLetters.
     */
    distinct?: QuotationCallLetterScalarFieldEnum | QuotationCallLetterScalarFieldEnum[]
  }

  /**
   * QuotationCallLetter findMany
   */
  export type QuotationCallLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * Filter, which QuotationCallLetters to fetch.
     */
    where?: QuotationCallLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuotationCallLetters to fetch.
     */
    orderBy?: QuotationCallLetterOrderByWithRelationInput | QuotationCallLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuotationCallLetters.
     */
    cursor?: QuotationCallLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuotationCallLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuotationCallLetters.
     */
    skip?: number
    distinct?: QuotationCallLetterScalarFieldEnum | QuotationCallLetterScalarFieldEnum[]
  }

  /**
   * QuotationCallLetter create
   */
  export type QuotationCallLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * The data needed to create a QuotationCallLetter.
     */
    data: XOR<QuotationCallLetterCreateInput, QuotationCallLetterUncheckedCreateInput>
  }

  /**
   * QuotationCallLetter createMany
   */
  export type QuotationCallLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuotationCallLetters.
     */
    data: QuotationCallLetterCreateManyInput | QuotationCallLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuotationCallLetter createManyAndReturn
   */
  export type QuotationCallLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * The data used to create many QuotationCallLetters.
     */
    data: QuotationCallLetterCreateManyInput | QuotationCallLetterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationCallLetter update
   */
  export type QuotationCallLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * The data needed to update a QuotationCallLetter.
     */
    data: XOR<QuotationCallLetterUpdateInput, QuotationCallLetterUncheckedUpdateInput>
    /**
     * Choose, which QuotationCallLetter to update.
     */
    where: QuotationCallLetterWhereUniqueInput
  }

  /**
   * QuotationCallLetter updateMany
   */
  export type QuotationCallLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuotationCallLetters.
     */
    data: XOR<QuotationCallLetterUpdateManyMutationInput, QuotationCallLetterUncheckedUpdateManyInput>
    /**
     * Filter which QuotationCallLetters to update
     */
    where?: QuotationCallLetterWhereInput
    /**
     * Limit how many QuotationCallLetters to update.
     */
    limit?: number
  }

  /**
   * QuotationCallLetter updateManyAndReturn
   */
  export type QuotationCallLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * The data used to update QuotationCallLetters.
     */
    data: XOR<QuotationCallLetterUpdateManyMutationInput, QuotationCallLetterUncheckedUpdateManyInput>
    /**
     * Filter which QuotationCallLetters to update
     */
    where?: QuotationCallLetterWhereInput
    /**
     * Limit how many QuotationCallLetters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuotationCallLetter upsert
   */
  export type QuotationCallLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * The filter to search for the QuotationCallLetter to update in case it exists.
     */
    where: QuotationCallLetterWhereUniqueInput
    /**
     * In case the QuotationCallLetter found by the `where` argument doesn't exist, create a new QuotationCallLetter with this data.
     */
    create: XOR<QuotationCallLetterCreateInput, QuotationCallLetterUncheckedCreateInput>
    /**
     * In case the QuotationCallLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuotationCallLetterUpdateInput, QuotationCallLetterUncheckedUpdateInput>
  }

  /**
   * QuotationCallLetter delete
   */
  export type QuotationCallLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
    /**
     * Filter which QuotationCallLetter to delete.
     */
    where: QuotationCallLetterWhereUniqueInput
  }

  /**
   * QuotationCallLetter deleteMany
   */
  export type QuotationCallLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuotationCallLetters to delete
     */
    where?: QuotationCallLetterWhereInput
    /**
     * Limit how many QuotationCallLetters to delete.
     */
    limit?: number
  }

  /**
   * QuotationCallLetter.materialItems
   */
  export type QuotationCallLetter$materialItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    where?: MaterialItemWhereInput
    orderBy?: MaterialItemOrderByWithRelationInput | MaterialItemOrderByWithRelationInput[]
    cursor?: MaterialItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialItemScalarFieldEnum | MaterialItemScalarFieldEnum[]
  }

  /**
   * QuotationCallLetter without action
   */
  export type QuotationCallLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuotationCallLetter
     */
    select?: QuotationCallLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuotationCallLetter
     */
    omit?: QuotationCallLetterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuotationCallLetterInclude<ExtArgs> | null
  }


  /**
   * Model MaterialItem
   */

  export type AggregateMaterialItem = {
    _count: MaterialItemCountAggregateOutputType | null
    _avg: MaterialItemAvgAggregateOutputType | null
    _sum: MaterialItemSumAggregateOutputType | null
    _min: MaterialItemMinAggregateOutputType | null
    _max: MaterialItemMaxAggregateOutputType | null
  }

  export type MaterialItemAvgAggregateOutputType = {
    slNo: number | null
  }

  export type MaterialItemSumAggregateOutputType = {
    slNo: number | null
  }

  export type MaterialItemMinAggregateOutputType = {
    id: string | null
    slNo: number | null
    quotationCallLetterId: string | null
    materialName: string | null
    quantity: string | null
    price: string | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialItemMaxAggregateOutputType = {
    id: string | null
    slNo: number | null
    quotationCallLetterId: string | null
    materialName: string | null
    quantity: string | null
    price: string | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterialItemCountAggregateOutputType = {
    id: number
    slNo: number
    quotationCallLetterId: number
    materialName: number
    quantity: number
    price: number
    unit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterialItemAvgAggregateInputType = {
    slNo?: true
  }

  export type MaterialItemSumAggregateInputType = {
    slNo?: true
  }

  export type MaterialItemMinAggregateInputType = {
    id?: true
    slNo?: true
    quotationCallLetterId?: true
    materialName?: true
    quantity?: true
    price?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialItemMaxAggregateInputType = {
    id?: true
    slNo?: true
    quotationCallLetterId?: true
    materialName?: true
    quantity?: true
    price?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterialItemCountAggregateInputType = {
    id?: true
    slNo?: true
    quotationCallLetterId?: true
    materialName?: true
    quantity?: true
    price?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterialItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialItem to aggregate.
     */
    where?: MaterialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialItems to fetch.
     */
    orderBy?: MaterialItemOrderByWithRelationInput | MaterialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialItems
    **/
    _count?: true | MaterialItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialItemMaxAggregateInputType
  }

  export type GetMaterialItemAggregateType<T extends MaterialItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialItem[P]>
      : GetScalarType<T[P], AggregateMaterialItem[P]>
  }




  export type MaterialItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialItemWhereInput
    orderBy?: MaterialItemOrderByWithAggregationInput | MaterialItemOrderByWithAggregationInput[]
    by: MaterialItemScalarFieldEnum[] | MaterialItemScalarFieldEnum
    having?: MaterialItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialItemCountAggregateInputType | true
    _avg?: MaterialItemAvgAggregateInputType
    _sum?: MaterialItemSumAggregateInputType
    _min?: MaterialItemMinAggregateInputType
    _max?: MaterialItemMaxAggregateInputType
  }

  export type MaterialItemGroupByOutputType = {
    id: string
    slNo: number
    quotationCallLetterId: string
    materialName: string
    quantity: string
    price: string
    unit: string
    createdAt: Date
    updatedAt: Date
    _count: MaterialItemCountAggregateOutputType | null
    _avg: MaterialItemAvgAggregateOutputType | null
    _sum: MaterialItemSumAggregateOutputType | null
    _min: MaterialItemMinAggregateOutputType | null
    _max: MaterialItemMaxAggregateOutputType | null
  }

  type GetMaterialItemGroupByPayload<T extends MaterialItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialItemGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialItemGroupByOutputType[P]>
        }
      >
    >


  export type MaterialItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slNo?: boolean
    quotationCallLetterId?: boolean
    materialName?: boolean
    quantity?: boolean
    price?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotationCallLetter?: boolean | QuotationCallLetterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialItem"]>

  export type MaterialItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slNo?: boolean
    quotationCallLetterId?: boolean
    materialName?: boolean
    quantity?: boolean
    price?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotationCallLetter?: boolean | QuotationCallLetterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialItem"]>

  export type MaterialItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slNo?: boolean
    quotationCallLetterId?: boolean
    materialName?: boolean
    quantity?: boolean
    price?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quotationCallLetter?: boolean | QuotationCallLetterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialItem"]>

  export type MaterialItemSelectScalar = {
    id?: boolean
    slNo?: boolean
    quotationCallLetterId?: boolean
    materialName?: boolean
    quantity?: boolean
    price?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaterialItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slNo" | "quotationCallLetterId" | "materialName" | "quantity" | "price" | "unit" | "createdAt" | "updatedAt", ExtArgs["result"]["materialItem"]>
  export type MaterialItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotationCallLetter?: boolean | QuotationCallLetterDefaultArgs<ExtArgs>
  }
  export type MaterialItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotationCallLetter?: boolean | QuotationCallLetterDefaultArgs<ExtArgs>
  }
  export type MaterialItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quotationCallLetter?: boolean | QuotationCallLetterDefaultArgs<ExtArgs>
  }

  export type $MaterialItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialItem"
    objects: {
      quotationCallLetter: Prisma.$QuotationCallLetterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slNo: number
      quotationCallLetterId: string
      materialName: string
      quantity: string
      price: string
      unit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["materialItem"]>
    composites: {}
  }

  type MaterialItemGetPayload<S extends boolean | null | undefined | MaterialItemDefaultArgs> = $Result.GetResult<Prisma.$MaterialItemPayload, S>

  type MaterialItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialItemCountAggregateInputType | true
    }

  export interface MaterialItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialItem'], meta: { name: 'MaterialItem' } }
    /**
     * Find zero or one MaterialItem that matches the filter.
     * @param {MaterialItemFindUniqueArgs} args - Arguments to find a MaterialItem
     * @example
     * // Get one MaterialItem
     * const materialItem = await prisma.materialItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialItemFindUniqueArgs>(args: SelectSubset<T, MaterialItemFindUniqueArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialItemFindUniqueOrThrowArgs} args - Arguments to find a MaterialItem
     * @example
     * // Get one MaterialItem
     * const materialItem = await prisma.materialItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialItemFindFirstArgs} args - Arguments to find a MaterialItem
     * @example
     * // Get one MaterialItem
     * const materialItem = await prisma.materialItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialItemFindFirstArgs>(args?: SelectSubset<T, MaterialItemFindFirstArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialItemFindFirstOrThrowArgs} args - Arguments to find a MaterialItem
     * @example
     * // Get one MaterialItem
     * const materialItem = await prisma.materialItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialItems
     * const materialItems = await prisma.materialItem.findMany()
     * 
     * // Get first 10 MaterialItems
     * const materialItems = await prisma.materialItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialItemWithIdOnly = await prisma.materialItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialItemFindManyArgs>(args?: SelectSubset<T, MaterialItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialItem.
     * @param {MaterialItemCreateArgs} args - Arguments to create a MaterialItem.
     * @example
     * // Create one MaterialItem
     * const MaterialItem = await prisma.materialItem.create({
     *   data: {
     *     // ... data to create a MaterialItem
     *   }
     * })
     * 
     */
    create<T extends MaterialItemCreateArgs>(args: SelectSubset<T, MaterialItemCreateArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialItems.
     * @param {MaterialItemCreateManyArgs} args - Arguments to create many MaterialItems.
     * @example
     * // Create many MaterialItems
     * const materialItem = await prisma.materialItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialItemCreateManyArgs>(args?: SelectSubset<T, MaterialItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaterialItems and returns the data saved in the database.
     * @param {MaterialItemCreateManyAndReturnArgs} args - Arguments to create many MaterialItems.
     * @example
     * // Create many MaterialItems
     * const materialItem = await prisma.materialItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaterialItems and only return the `id`
     * const materialItemWithIdOnly = await prisma.materialItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaterialItem.
     * @param {MaterialItemDeleteArgs} args - Arguments to delete one MaterialItem.
     * @example
     * // Delete one MaterialItem
     * const MaterialItem = await prisma.materialItem.delete({
     *   where: {
     *     // ... filter to delete one MaterialItem
     *   }
     * })
     * 
     */
    delete<T extends MaterialItemDeleteArgs>(args: SelectSubset<T, MaterialItemDeleteArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialItem.
     * @param {MaterialItemUpdateArgs} args - Arguments to update one MaterialItem.
     * @example
     * // Update one MaterialItem
     * const materialItem = await prisma.materialItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialItemUpdateArgs>(args: SelectSubset<T, MaterialItemUpdateArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialItems.
     * @param {MaterialItemDeleteManyArgs} args - Arguments to filter MaterialItems to delete.
     * @example
     * // Delete a few MaterialItems
     * const { count } = await prisma.materialItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialItemDeleteManyArgs>(args?: SelectSubset<T, MaterialItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialItems
     * const materialItem = await prisma.materialItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialItemUpdateManyArgs>(args: SelectSubset<T, MaterialItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialItems and returns the data updated in the database.
     * @param {MaterialItemUpdateManyAndReturnArgs} args - Arguments to update many MaterialItems.
     * @example
     * // Update many MaterialItems
     * const materialItem = await prisma.materialItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaterialItems and only return the `id`
     * const materialItemWithIdOnly = await prisma.materialItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaterialItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaterialItem.
     * @param {MaterialItemUpsertArgs} args - Arguments to update or create a MaterialItem.
     * @example
     * // Update or create a MaterialItem
     * const materialItem = await prisma.materialItem.upsert({
     *   create: {
     *     // ... data to create a MaterialItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialItem we want to update
     *   }
     * })
     */
    upsert<T extends MaterialItemUpsertArgs>(args: SelectSubset<T, MaterialItemUpsertArgs<ExtArgs>>): Prisma__MaterialItemClient<$Result.GetResult<Prisma.$MaterialItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialItemCountArgs} args - Arguments to filter MaterialItems to count.
     * @example
     * // Count the number of MaterialItems
     * const count = await prisma.materialItem.count({
     *   where: {
     *     // ... the filter for the MaterialItems we want to count
     *   }
     * })
    **/
    count<T extends MaterialItemCountArgs>(
      args?: Subset<T, MaterialItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialItemAggregateArgs>(args: Subset<T, MaterialItemAggregateArgs>): Prisma.PrismaPromise<GetMaterialItemAggregateType<T>>

    /**
     * Group by MaterialItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialItemGroupByArgs} args - Group by arguments.
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
      T extends MaterialItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialItemGroupByArgs['orderBy'] }
        : { orderBy?: MaterialItemGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialItem model
   */
  readonly fields: MaterialItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quotationCallLetter<T extends QuotationCallLetterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuotationCallLetterDefaultArgs<ExtArgs>>): Prisma__QuotationCallLetterClient<$Result.GetResult<Prisma.$QuotationCallLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaterialItem model
   */
  interface MaterialItemFieldRefs {
    readonly id: FieldRef<"MaterialItem", 'String'>
    readonly slNo: FieldRef<"MaterialItem", 'Int'>
    readonly quotationCallLetterId: FieldRef<"MaterialItem", 'String'>
    readonly materialName: FieldRef<"MaterialItem", 'String'>
    readonly quantity: FieldRef<"MaterialItem", 'String'>
    readonly price: FieldRef<"MaterialItem", 'String'>
    readonly unit: FieldRef<"MaterialItem", 'String'>
    readonly createdAt: FieldRef<"MaterialItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MaterialItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaterialItem findUnique
   */
  export type MaterialItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * Filter, which MaterialItem to fetch.
     */
    where: MaterialItemWhereUniqueInput
  }

  /**
   * MaterialItem findUniqueOrThrow
   */
  export type MaterialItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * Filter, which MaterialItem to fetch.
     */
    where: MaterialItemWhereUniqueInput
  }

  /**
   * MaterialItem findFirst
   */
  export type MaterialItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * Filter, which MaterialItem to fetch.
     */
    where?: MaterialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialItems to fetch.
     */
    orderBy?: MaterialItemOrderByWithRelationInput | MaterialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialItems.
     */
    cursor?: MaterialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialItems.
     */
    distinct?: MaterialItemScalarFieldEnum | MaterialItemScalarFieldEnum[]
  }

  /**
   * MaterialItem findFirstOrThrow
   */
  export type MaterialItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * Filter, which MaterialItem to fetch.
     */
    where?: MaterialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialItems to fetch.
     */
    orderBy?: MaterialItemOrderByWithRelationInput | MaterialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialItems.
     */
    cursor?: MaterialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialItems.
     */
    distinct?: MaterialItemScalarFieldEnum | MaterialItemScalarFieldEnum[]
  }

  /**
   * MaterialItem findMany
   */
  export type MaterialItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * Filter, which MaterialItems to fetch.
     */
    where?: MaterialItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialItems to fetch.
     */
    orderBy?: MaterialItemOrderByWithRelationInput | MaterialItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialItems.
     */
    cursor?: MaterialItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialItems.
     */
    skip?: number
    distinct?: MaterialItemScalarFieldEnum | MaterialItemScalarFieldEnum[]
  }

  /**
   * MaterialItem create
   */
  export type MaterialItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialItem.
     */
    data: XOR<MaterialItemCreateInput, MaterialItemUncheckedCreateInput>
  }

  /**
   * MaterialItem createMany
   */
  export type MaterialItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialItems.
     */
    data: MaterialItemCreateManyInput | MaterialItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialItem createManyAndReturn
   */
  export type MaterialItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * The data used to create many MaterialItems.
     */
    data: MaterialItemCreateManyInput | MaterialItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialItem update
   */
  export type MaterialItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialItem.
     */
    data: XOR<MaterialItemUpdateInput, MaterialItemUncheckedUpdateInput>
    /**
     * Choose, which MaterialItem to update.
     */
    where: MaterialItemWhereUniqueInput
  }

  /**
   * MaterialItem updateMany
   */
  export type MaterialItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialItems.
     */
    data: XOR<MaterialItemUpdateManyMutationInput, MaterialItemUncheckedUpdateManyInput>
    /**
     * Filter which MaterialItems to update
     */
    where?: MaterialItemWhereInput
    /**
     * Limit how many MaterialItems to update.
     */
    limit?: number
  }

  /**
   * MaterialItem updateManyAndReturn
   */
  export type MaterialItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * The data used to update MaterialItems.
     */
    data: XOR<MaterialItemUpdateManyMutationInput, MaterialItemUncheckedUpdateManyInput>
    /**
     * Filter which MaterialItems to update
     */
    where?: MaterialItemWhereInput
    /**
     * Limit how many MaterialItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaterialItem upsert
   */
  export type MaterialItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialItem to update in case it exists.
     */
    where: MaterialItemWhereUniqueInput
    /**
     * In case the MaterialItem found by the `where` argument doesn't exist, create a new MaterialItem with this data.
     */
    create: XOR<MaterialItemCreateInput, MaterialItemUncheckedCreateInput>
    /**
     * In case the MaterialItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialItemUpdateInput, MaterialItemUncheckedUpdateInput>
  }

  /**
   * MaterialItem delete
   */
  export type MaterialItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
    /**
     * Filter which MaterialItem to delete.
     */
    where: MaterialItemWhereUniqueInput
  }

  /**
   * MaterialItem deleteMany
   */
  export type MaterialItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialItems to delete
     */
    where?: MaterialItemWhereInput
    /**
     * Limit how many MaterialItems to delete.
     */
    limit?: number
  }

  /**
   * MaterialItem without action
   */
  export type MaterialItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialItem
     */
    select?: MaterialItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialItem
     */
    omit?: MaterialItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    panchayatCode: 'panchayatCode',
    isVerifiedEmail: 'isVerifiedEmail',
    isAdminVerifiedUser: 'isAdminVerifiedUser',
    verificationCode: 'verificationCode',
    resetPasswordToken: 'resetPasswordToken',
    resetTokenExpires: 'resetTokenExpires',
    verificationExpires: 'verificationExpires',
    verificationAttempts: 'verificationAttempts',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const WorkDetailScalarFieldEnum: {
    id: 'id',
    state: 'state',
    district: 'district',
    panchayat: 'panchayat',
    block: 'block',
    workCode: 'workCode',
    workName: 'workName',
    workCategory: 'workCategory',
    workType: 'workType',
    workStatus: 'workStatus',
    implementingAgency: 'implementingAgency',
    estimatedCost: 'estimatedCost',
    actualExpenditure: 'actualExpenditure',
    sanctionYear: 'sanctionYear',
    workStartDate: 'workStartDate',
    financialYear: 'financialYear',
    estimatedPersonDays: 'estimatedPersonDays',
    actualPersonDays: 'actualPersonDays',
    vendorName: 'vendorName',
    vendorGstNo: 'vendorGstNo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkDetailScalarFieldEnum = (typeof WorkDetailScalarFieldEnum)[keyof typeof WorkDetailScalarFieldEnum]


  export const WorkDocumentsScalarFieldEnum: {
    id: 'id',
    workCode: 'workCode',
    annualActionPlan: 'annualActionPlan',
    technicalEstimate: 'technicalEstimate',
    technicalSanction: 'technicalSanction',
    administrativeSanction: 'administrativeSanction',
    convergenceFunds: 'convergenceFunds',
    demandApplicationForm: 'demandApplicationForm',
    workAllocationForm: 'workAllocationForm',
    filledEMusterRolls: 'filledEMusterRolls',
    measurementBook: 'measurementBook',
    materialProcurement: 'materialProcurement',
    wageListFTO: 'wageListFTO',
    skilledMusterRolls: 'skilledMusterRolls',
    materialVouchers: 'materialVouchers',
    geotaggedPhotographs: 'geotaggedPhotographs',
    workCompletionCertificate: 'workCompletionCertificate',
    musterRollMovementSlip: 'musterRollMovementSlip',
    socialAuditReport: 'socialAuditReport',
    otherStateDocuments: 'otherStateDocuments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkDocumentsScalarFieldEnum = (typeof WorkDocumentsScalarFieldEnum)[keyof typeof WorkDocumentsScalarFieldEnum]


  export const VendorDetailScalarFieldEnum: {
    id: 'id',
    vendorNameOne: 'vendorNameOne',
    vendorNameTwo: 'vendorNameTwo',
    vendorNameThree: 'vendorNameThree',
    vendorGstOne: 'vendorGstOne',
    vendorGstTwo: 'vendorGstTwo',
    vendorGstThree: 'vendorGstThree',
    fromDate: 'fromDate',
    toDate: 'toDate',
    workDetailId: 'workDetailId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorDetailScalarFieldEnum = (typeof VendorDetailScalarFieldEnum)[keyof typeof VendorDetailScalarFieldEnum]


  export const QuotationCallLetterScalarFieldEnum: {
    id: 'id',
    workDetailId: 'workDetailId',
    administrativeSanction: 'administrativeSanction',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuotationCallLetterScalarFieldEnum = (typeof QuotationCallLetterScalarFieldEnum)[keyof typeof QuotationCallLetterScalarFieldEnum]


  export const MaterialItemScalarFieldEnum: {
    id: 'id',
    slNo: 'slNo',
    quotationCallLetterId: 'quotationCallLetterId',
    materialName: 'materialName',
    quantity: 'quantity',
    price: 'price',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterialItemScalarFieldEnum = (typeof MaterialItemScalarFieldEnum)[keyof typeof MaterialItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    panchayatCode?: StringFilter<"User"> | string
    isVerifiedEmail?: BoolFilter<"User"> | boolean
    isAdminVerifiedUser?: BoolFilter<"User"> | boolean
    verificationCode?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationAttempts?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    panchayatCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isAdminVerifiedUser?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetTokenExpires?: SortOrderInput | SortOrder
    verificationExpires?: SortOrderInput | SortOrder
    verificationAttempts?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    panchayatCode?: StringFilter<"User"> | string
    isVerifiedEmail?: BoolFilter<"User"> | boolean
    isAdminVerifiedUser?: BoolFilter<"User"> | boolean
    verificationCode?: StringNullableFilter<"User"> | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    verificationAttempts?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    panchayatCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isAdminVerifiedUser?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetTokenExpires?: SortOrderInput | SortOrder
    verificationExpires?: SortOrderInput | SortOrder
    verificationAttempts?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    panchayatCode?: StringWithAggregatesFilter<"User"> | string
    isVerifiedEmail?: BoolWithAggregatesFilter<"User"> | boolean
    isAdminVerifiedUser?: BoolWithAggregatesFilter<"User"> | boolean
    verificationCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verificationExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verificationAttempts?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type WorkDetailWhereInput = {
    AND?: WorkDetailWhereInput | WorkDetailWhereInput[]
    OR?: WorkDetailWhereInput[]
    NOT?: WorkDetailWhereInput | WorkDetailWhereInput[]
    id?: StringFilter<"WorkDetail"> | string
    state?: StringFilter<"WorkDetail"> | string
    district?: StringFilter<"WorkDetail"> | string
    panchayat?: StringFilter<"WorkDetail"> | string
    block?: StringFilter<"WorkDetail"> | string
    workCode?: StringFilter<"WorkDetail"> | string
    workName?: StringNullableFilter<"WorkDetail"> | string | null
    workCategory?: StringNullableFilter<"WorkDetail"> | string | null
    workType?: StringNullableFilter<"WorkDetail"> | string | null
    workStatus?: StringNullableFilter<"WorkDetail"> | string | null
    implementingAgency?: StringNullableFilter<"WorkDetail"> | string | null
    estimatedCost?: DecimalNullableFilter<"WorkDetail"> | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: DecimalNullableFilter<"WorkDetail"> | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: StringNullableFilter<"WorkDetail"> | string | null
    workStartDate?: DateTimeNullableFilter<"WorkDetail"> | Date | string | null
    financialYear?: StringNullableFilter<"WorkDetail"> | string | null
    estimatedPersonDays?: StringNullableFilter<"WorkDetail"> | string | null
    actualPersonDays?: StringNullableFilter<"WorkDetail"> | string | null
    vendorName?: StringNullableFilter<"WorkDetail"> | string | null
    vendorGstNo?: StringNullableFilter<"WorkDetail"> | string | null
    createdAt?: DateTimeFilter<"WorkDetail"> | Date | string
    updatedAt?: DateTimeFilter<"WorkDetail"> | Date | string
    workDocuments?: XOR<WorkDocumentsNullableScalarRelationFilter, WorkDocumentsWhereInput> | null
    vendorDetails?: XOR<VendorDetailNullableScalarRelationFilter, VendorDetailWhereInput> | null
    quotationCallLetter?: XOR<QuotationCallLetterNullableScalarRelationFilter, QuotationCallLetterWhereInput> | null
  }

  export type WorkDetailOrderByWithRelationInput = {
    id?: SortOrder
    state?: SortOrder
    district?: SortOrder
    panchayat?: SortOrder
    block?: SortOrder
    workCode?: SortOrder
    workName?: SortOrderInput | SortOrder
    workCategory?: SortOrderInput | SortOrder
    workType?: SortOrderInput | SortOrder
    workStatus?: SortOrderInput | SortOrder
    implementingAgency?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    actualExpenditure?: SortOrderInput | SortOrder
    sanctionYear?: SortOrderInput | SortOrder
    workStartDate?: SortOrderInput | SortOrder
    financialYear?: SortOrderInput | SortOrder
    estimatedPersonDays?: SortOrderInput | SortOrder
    actualPersonDays?: SortOrderInput | SortOrder
    vendorName?: SortOrderInput | SortOrder
    vendorGstNo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workDocuments?: WorkDocumentsOrderByWithRelationInput
    vendorDetails?: VendorDetailOrderByWithRelationInput
    quotationCallLetter?: QuotationCallLetterOrderByWithRelationInput
  }

  export type WorkDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workCode?: string
    AND?: WorkDetailWhereInput | WorkDetailWhereInput[]
    OR?: WorkDetailWhereInput[]
    NOT?: WorkDetailWhereInput | WorkDetailWhereInput[]
    state?: StringFilter<"WorkDetail"> | string
    district?: StringFilter<"WorkDetail"> | string
    panchayat?: StringFilter<"WorkDetail"> | string
    block?: StringFilter<"WorkDetail"> | string
    workName?: StringNullableFilter<"WorkDetail"> | string | null
    workCategory?: StringNullableFilter<"WorkDetail"> | string | null
    workType?: StringNullableFilter<"WorkDetail"> | string | null
    workStatus?: StringNullableFilter<"WorkDetail"> | string | null
    implementingAgency?: StringNullableFilter<"WorkDetail"> | string | null
    estimatedCost?: DecimalNullableFilter<"WorkDetail"> | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: DecimalNullableFilter<"WorkDetail"> | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: StringNullableFilter<"WorkDetail"> | string | null
    workStartDate?: DateTimeNullableFilter<"WorkDetail"> | Date | string | null
    financialYear?: StringNullableFilter<"WorkDetail"> | string | null
    estimatedPersonDays?: StringNullableFilter<"WorkDetail"> | string | null
    actualPersonDays?: StringNullableFilter<"WorkDetail"> | string | null
    vendorName?: StringNullableFilter<"WorkDetail"> | string | null
    vendorGstNo?: StringNullableFilter<"WorkDetail"> | string | null
    createdAt?: DateTimeFilter<"WorkDetail"> | Date | string
    updatedAt?: DateTimeFilter<"WorkDetail"> | Date | string
    workDocuments?: XOR<WorkDocumentsNullableScalarRelationFilter, WorkDocumentsWhereInput> | null
    vendorDetails?: XOR<VendorDetailNullableScalarRelationFilter, VendorDetailWhereInput> | null
    quotationCallLetter?: XOR<QuotationCallLetterNullableScalarRelationFilter, QuotationCallLetterWhereInput> | null
  }, "id" | "workCode">

  export type WorkDetailOrderByWithAggregationInput = {
    id?: SortOrder
    state?: SortOrder
    district?: SortOrder
    panchayat?: SortOrder
    block?: SortOrder
    workCode?: SortOrder
    workName?: SortOrderInput | SortOrder
    workCategory?: SortOrderInput | SortOrder
    workType?: SortOrderInput | SortOrder
    workStatus?: SortOrderInput | SortOrder
    implementingAgency?: SortOrderInput | SortOrder
    estimatedCost?: SortOrderInput | SortOrder
    actualExpenditure?: SortOrderInput | SortOrder
    sanctionYear?: SortOrderInput | SortOrder
    workStartDate?: SortOrderInput | SortOrder
    financialYear?: SortOrderInput | SortOrder
    estimatedPersonDays?: SortOrderInput | SortOrder
    actualPersonDays?: SortOrderInput | SortOrder
    vendorName?: SortOrderInput | SortOrder
    vendorGstNo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkDetailCountOrderByAggregateInput
    _avg?: WorkDetailAvgOrderByAggregateInput
    _max?: WorkDetailMaxOrderByAggregateInput
    _min?: WorkDetailMinOrderByAggregateInput
    _sum?: WorkDetailSumOrderByAggregateInput
  }

  export type WorkDetailScalarWhereWithAggregatesInput = {
    AND?: WorkDetailScalarWhereWithAggregatesInput | WorkDetailScalarWhereWithAggregatesInput[]
    OR?: WorkDetailScalarWhereWithAggregatesInput[]
    NOT?: WorkDetailScalarWhereWithAggregatesInput | WorkDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkDetail"> | string
    state?: StringWithAggregatesFilter<"WorkDetail"> | string
    district?: StringWithAggregatesFilter<"WorkDetail"> | string
    panchayat?: StringWithAggregatesFilter<"WorkDetail"> | string
    block?: StringWithAggregatesFilter<"WorkDetail"> | string
    workCode?: StringWithAggregatesFilter<"WorkDetail"> | string
    workName?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    workCategory?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    workType?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    workStatus?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    implementingAgency?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    estimatedCost?: DecimalNullableWithAggregatesFilter<"WorkDetail"> | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: DecimalNullableWithAggregatesFilter<"WorkDetail"> | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    workStartDate?: DateTimeNullableWithAggregatesFilter<"WorkDetail"> | Date | string | null
    financialYear?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    estimatedPersonDays?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    actualPersonDays?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    vendorName?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    vendorGstNo?: StringNullableWithAggregatesFilter<"WorkDetail"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkDetail"> | Date | string
  }

  export type WorkDocumentsWhereInput = {
    AND?: WorkDocumentsWhereInput | WorkDocumentsWhereInput[]
    OR?: WorkDocumentsWhereInput[]
    NOT?: WorkDocumentsWhereInput | WorkDocumentsWhereInput[]
    id?: StringFilter<"WorkDocuments"> | string
    workCode?: StringFilter<"WorkDocuments"> | string
    annualActionPlan?: StringNullableFilter<"WorkDocuments"> | string | null
    technicalEstimate?: StringNullableFilter<"WorkDocuments"> | string | null
    technicalSanction?: StringNullableFilter<"WorkDocuments"> | string | null
    administrativeSanction?: StringNullableFilter<"WorkDocuments"> | string | null
    convergenceFunds?: StringNullableFilter<"WorkDocuments"> | string | null
    demandApplicationForm?: StringNullableFilter<"WorkDocuments"> | string | null
    workAllocationForm?: StringNullableFilter<"WorkDocuments"> | string | null
    filledEMusterRolls?: StringNullableFilter<"WorkDocuments"> | string | null
    measurementBook?: StringNullableFilter<"WorkDocuments"> | string | null
    materialProcurement?: StringNullableFilter<"WorkDocuments"> | string | null
    wageListFTO?: StringNullableFilter<"WorkDocuments"> | string | null
    skilledMusterRolls?: StringNullableFilter<"WorkDocuments"> | string | null
    materialVouchers?: StringNullableFilter<"WorkDocuments"> | string | null
    geotaggedPhotographs?: StringNullableFilter<"WorkDocuments"> | string | null
    workCompletionCertificate?: StringNullableFilter<"WorkDocuments"> | string | null
    musterRollMovementSlip?: StringNullableFilter<"WorkDocuments"> | string | null
    socialAuditReport?: StringNullableFilter<"WorkDocuments"> | string | null
    otherStateDocuments?: StringNullableFilter<"WorkDocuments"> | string | null
    createdAt?: DateTimeFilter<"WorkDocuments"> | Date | string
    updatedAt?: DateTimeFilter<"WorkDocuments"> | Date | string
    workDetail?: XOR<WorkDetailScalarRelationFilter, WorkDetailWhereInput>
  }

  export type WorkDocumentsOrderByWithRelationInput = {
    id?: SortOrder
    workCode?: SortOrder
    annualActionPlan?: SortOrderInput | SortOrder
    technicalEstimate?: SortOrderInput | SortOrder
    technicalSanction?: SortOrderInput | SortOrder
    administrativeSanction?: SortOrderInput | SortOrder
    convergenceFunds?: SortOrderInput | SortOrder
    demandApplicationForm?: SortOrderInput | SortOrder
    workAllocationForm?: SortOrderInput | SortOrder
    filledEMusterRolls?: SortOrderInput | SortOrder
    measurementBook?: SortOrderInput | SortOrder
    materialProcurement?: SortOrderInput | SortOrder
    wageListFTO?: SortOrderInput | SortOrder
    skilledMusterRolls?: SortOrderInput | SortOrder
    materialVouchers?: SortOrderInput | SortOrder
    geotaggedPhotographs?: SortOrderInput | SortOrder
    workCompletionCertificate?: SortOrderInput | SortOrder
    musterRollMovementSlip?: SortOrderInput | SortOrder
    socialAuditReport?: SortOrderInput | SortOrder
    otherStateDocuments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workDetail?: WorkDetailOrderByWithRelationInput
  }

  export type WorkDocumentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workCode?: string
    AND?: WorkDocumentsWhereInput | WorkDocumentsWhereInput[]
    OR?: WorkDocumentsWhereInput[]
    NOT?: WorkDocumentsWhereInput | WorkDocumentsWhereInput[]
    annualActionPlan?: StringNullableFilter<"WorkDocuments"> | string | null
    technicalEstimate?: StringNullableFilter<"WorkDocuments"> | string | null
    technicalSanction?: StringNullableFilter<"WorkDocuments"> | string | null
    administrativeSanction?: StringNullableFilter<"WorkDocuments"> | string | null
    convergenceFunds?: StringNullableFilter<"WorkDocuments"> | string | null
    demandApplicationForm?: StringNullableFilter<"WorkDocuments"> | string | null
    workAllocationForm?: StringNullableFilter<"WorkDocuments"> | string | null
    filledEMusterRolls?: StringNullableFilter<"WorkDocuments"> | string | null
    measurementBook?: StringNullableFilter<"WorkDocuments"> | string | null
    materialProcurement?: StringNullableFilter<"WorkDocuments"> | string | null
    wageListFTO?: StringNullableFilter<"WorkDocuments"> | string | null
    skilledMusterRolls?: StringNullableFilter<"WorkDocuments"> | string | null
    materialVouchers?: StringNullableFilter<"WorkDocuments"> | string | null
    geotaggedPhotographs?: StringNullableFilter<"WorkDocuments"> | string | null
    workCompletionCertificate?: StringNullableFilter<"WorkDocuments"> | string | null
    musterRollMovementSlip?: StringNullableFilter<"WorkDocuments"> | string | null
    socialAuditReport?: StringNullableFilter<"WorkDocuments"> | string | null
    otherStateDocuments?: StringNullableFilter<"WorkDocuments"> | string | null
    createdAt?: DateTimeFilter<"WorkDocuments"> | Date | string
    updatedAt?: DateTimeFilter<"WorkDocuments"> | Date | string
    workDetail?: XOR<WorkDetailScalarRelationFilter, WorkDetailWhereInput>
  }, "id" | "workCode">

  export type WorkDocumentsOrderByWithAggregationInput = {
    id?: SortOrder
    workCode?: SortOrder
    annualActionPlan?: SortOrderInput | SortOrder
    technicalEstimate?: SortOrderInput | SortOrder
    technicalSanction?: SortOrderInput | SortOrder
    administrativeSanction?: SortOrderInput | SortOrder
    convergenceFunds?: SortOrderInput | SortOrder
    demandApplicationForm?: SortOrderInput | SortOrder
    workAllocationForm?: SortOrderInput | SortOrder
    filledEMusterRolls?: SortOrderInput | SortOrder
    measurementBook?: SortOrderInput | SortOrder
    materialProcurement?: SortOrderInput | SortOrder
    wageListFTO?: SortOrderInput | SortOrder
    skilledMusterRolls?: SortOrderInput | SortOrder
    materialVouchers?: SortOrderInput | SortOrder
    geotaggedPhotographs?: SortOrderInput | SortOrder
    workCompletionCertificate?: SortOrderInput | SortOrder
    musterRollMovementSlip?: SortOrderInput | SortOrder
    socialAuditReport?: SortOrderInput | SortOrder
    otherStateDocuments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkDocumentsCountOrderByAggregateInput
    _max?: WorkDocumentsMaxOrderByAggregateInput
    _min?: WorkDocumentsMinOrderByAggregateInput
  }

  export type WorkDocumentsScalarWhereWithAggregatesInput = {
    AND?: WorkDocumentsScalarWhereWithAggregatesInput | WorkDocumentsScalarWhereWithAggregatesInput[]
    OR?: WorkDocumentsScalarWhereWithAggregatesInput[]
    NOT?: WorkDocumentsScalarWhereWithAggregatesInput | WorkDocumentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkDocuments"> | string
    workCode?: StringWithAggregatesFilter<"WorkDocuments"> | string
    annualActionPlan?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    technicalEstimate?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    technicalSanction?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    administrativeSanction?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    convergenceFunds?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    demandApplicationForm?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    workAllocationForm?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    filledEMusterRolls?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    measurementBook?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    materialProcurement?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    wageListFTO?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    skilledMusterRolls?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    materialVouchers?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    geotaggedPhotographs?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    workCompletionCertificate?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    musterRollMovementSlip?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    socialAuditReport?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    otherStateDocuments?: StringNullableWithAggregatesFilter<"WorkDocuments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkDocuments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkDocuments"> | Date | string
  }

  export type VendorDetailWhereInput = {
    AND?: VendorDetailWhereInput | VendorDetailWhereInput[]
    OR?: VendorDetailWhereInput[]
    NOT?: VendorDetailWhereInput | VendorDetailWhereInput[]
    id?: StringFilter<"VendorDetail"> | string
    vendorNameOne?: StringNullableFilter<"VendorDetail"> | string | null
    vendorNameTwo?: StringNullableFilter<"VendorDetail"> | string | null
    vendorNameThree?: StringNullableFilter<"VendorDetail"> | string | null
    vendorGstOne?: StringNullableFilter<"VendorDetail"> | string | null
    vendorGstTwo?: StringNullableFilter<"VendorDetail"> | string | null
    vendorGstThree?: StringNullableFilter<"VendorDetail"> | string | null
    fromDate?: DateTimeNullableFilter<"VendorDetail"> | Date | string | null
    toDate?: DateTimeNullableFilter<"VendorDetail"> | Date | string | null
    workDetailId?: StringFilter<"VendorDetail"> | string
    createdAt?: DateTimeFilter<"VendorDetail"> | Date | string
    updatedAt?: DateTimeFilter<"VendorDetail"> | Date | string
    workDetail?: XOR<WorkDetailScalarRelationFilter, WorkDetailWhereInput>
  }

  export type VendorDetailOrderByWithRelationInput = {
    id?: SortOrder
    vendorNameOne?: SortOrderInput | SortOrder
    vendorNameTwo?: SortOrderInput | SortOrder
    vendorNameThree?: SortOrderInput | SortOrder
    vendorGstOne?: SortOrderInput | SortOrder
    vendorGstTwo?: SortOrderInput | SortOrder
    vendorGstThree?: SortOrderInput | SortOrder
    fromDate?: SortOrderInput | SortOrder
    toDate?: SortOrderInput | SortOrder
    workDetailId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workDetail?: WorkDetailOrderByWithRelationInput
  }

  export type VendorDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workDetailId?: string
    AND?: VendorDetailWhereInput | VendorDetailWhereInput[]
    OR?: VendorDetailWhereInput[]
    NOT?: VendorDetailWhereInput | VendorDetailWhereInput[]
    vendorNameOne?: StringNullableFilter<"VendorDetail"> | string | null
    vendorNameTwo?: StringNullableFilter<"VendorDetail"> | string | null
    vendorNameThree?: StringNullableFilter<"VendorDetail"> | string | null
    vendorGstOne?: StringNullableFilter<"VendorDetail"> | string | null
    vendorGstTwo?: StringNullableFilter<"VendorDetail"> | string | null
    vendorGstThree?: StringNullableFilter<"VendorDetail"> | string | null
    fromDate?: DateTimeNullableFilter<"VendorDetail"> | Date | string | null
    toDate?: DateTimeNullableFilter<"VendorDetail"> | Date | string | null
    createdAt?: DateTimeFilter<"VendorDetail"> | Date | string
    updatedAt?: DateTimeFilter<"VendorDetail"> | Date | string
    workDetail?: XOR<WorkDetailScalarRelationFilter, WorkDetailWhereInput>
  }, "id" | "workDetailId">

  export type VendorDetailOrderByWithAggregationInput = {
    id?: SortOrder
    vendorNameOne?: SortOrderInput | SortOrder
    vendorNameTwo?: SortOrderInput | SortOrder
    vendorNameThree?: SortOrderInput | SortOrder
    vendorGstOne?: SortOrderInput | SortOrder
    vendorGstTwo?: SortOrderInput | SortOrder
    vendorGstThree?: SortOrderInput | SortOrder
    fromDate?: SortOrderInput | SortOrder
    toDate?: SortOrderInput | SortOrder
    workDetailId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorDetailCountOrderByAggregateInput
    _max?: VendorDetailMaxOrderByAggregateInput
    _min?: VendorDetailMinOrderByAggregateInput
  }

  export type VendorDetailScalarWhereWithAggregatesInput = {
    AND?: VendorDetailScalarWhereWithAggregatesInput | VendorDetailScalarWhereWithAggregatesInput[]
    OR?: VendorDetailScalarWhereWithAggregatesInput[]
    NOT?: VendorDetailScalarWhereWithAggregatesInput | VendorDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VendorDetail"> | string
    vendorNameOne?: StringNullableWithAggregatesFilter<"VendorDetail"> | string | null
    vendorNameTwo?: StringNullableWithAggregatesFilter<"VendorDetail"> | string | null
    vendorNameThree?: StringNullableWithAggregatesFilter<"VendorDetail"> | string | null
    vendorGstOne?: StringNullableWithAggregatesFilter<"VendorDetail"> | string | null
    vendorGstTwo?: StringNullableWithAggregatesFilter<"VendorDetail"> | string | null
    vendorGstThree?: StringNullableWithAggregatesFilter<"VendorDetail"> | string | null
    fromDate?: DateTimeNullableWithAggregatesFilter<"VendorDetail"> | Date | string | null
    toDate?: DateTimeNullableWithAggregatesFilter<"VendorDetail"> | Date | string | null
    workDetailId?: StringWithAggregatesFilter<"VendorDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VendorDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VendorDetail"> | Date | string
  }

  export type QuotationCallLetterWhereInput = {
    AND?: QuotationCallLetterWhereInput | QuotationCallLetterWhereInput[]
    OR?: QuotationCallLetterWhereInput[]
    NOT?: QuotationCallLetterWhereInput | QuotationCallLetterWhereInput[]
    id?: StringFilter<"QuotationCallLetter"> | string
    workDetailId?: StringFilter<"QuotationCallLetter"> | string
    administrativeSanction?: StringFilter<"QuotationCallLetter"> | string
    createdAt?: DateTimeFilter<"QuotationCallLetter"> | Date | string
    updatedAt?: DateTimeFilter<"QuotationCallLetter"> | Date | string
    workDetail?: XOR<WorkDetailScalarRelationFilter, WorkDetailWhereInput>
    materialItems?: MaterialItemListRelationFilter
  }

  export type QuotationCallLetterOrderByWithRelationInput = {
    id?: SortOrder
    workDetailId?: SortOrder
    administrativeSanction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workDetail?: WorkDetailOrderByWithRelationInput
    materialItems?: MaterialItemOrderByRelationAggregateInput
  }

  export type QuotationCallLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workDetailId?: string
    AND?: QuotationCallLetterWhereInput | QuotationCallLetterWhereInput[]
    OR?: QuotationCallLetterWhereInput[]
    NOT?: QuotationCallLetterWhereInput | QuotationCallLetterWhereInput[]
    administrativeSanction?: StringFilter<"QuotationCallLetter"> | string
    createdAt?: DateTimeFilter<"QuotationCallLetter"> | Date | string
    updatedAt?: DateTimeFilter<"QuotationCallLetter"> | Date | string
    workDetail?: XOR<WorkDetailScalarRelationFilter, WorkDetailWhereInput>
    materialItems?: MaterialItemListRelationFilter
  }, "id" | "workDetailId">

  export type QuotationCallLetterOrderByWithAggregationInput = {
    id?: SortOrder
    workDetailId?: SortOrder
    administrativeSanction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuotationCallLetterCountOrderByAggregateInput
    _max?: QuotationCallLetterMaxOrderByAggregateInput
    _min?: QuotationCallLetterMinOrderByAggregateInput
  }

  export type QuotationCallLetterScalarWhereWithAggregatesInput = {
    AND?: QuotationCallLetterScalarWhereWithAggregatesInput | QuotationCallLetterScalarWhereWithAggregatesInput[]
    OR?: QuotationCallLetterScalarWhereWithAggregatesInput[]
    NOT?: QuotationCallLetterScalarWhereWithAggregatesInput | QuotationCallLetterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuotationCallLetter"> | string
    workDetailId?: StringWithAggregatesFilter<"QuotationCallLetter"> | string
    administrativeSanction?: StringWithAggregatesFilter<"QuotationCallLetter"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuotationCallLetter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuotationCallLetter"> | Date | string
  }

  export type MaterialItemWhereInput = {
    AND?: MaterialItemWhereInput | MaterialItemWhereInput[]
    OR?: MaterialItemWhereInput[]
    NOT?: MaterialItemWhereInput | MaterialItemWhereInput[]
    id?: StringFilter<"MaterialItem"> | string
    slNo?: IntFilter<"MaterialItem"> | number
    quotationCallLetterId?: StringFilter<"MaterialItem"> | string
    materialName?: StringFilter<"MaterialItem"> | string
    quantity?: StringFilter<"MaterialItem"> | string
    price?: StringFilter<"MaterialItem"> | string
    unit?: StringFilter<"MaterialItem"> | string
    createdAt?: DateTimeFilter<"MaterialItem"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialItem"> | Date | string
    quotationCallLetter?: XOR<QuotationCallLetterScalarRelationFilter, QuotationCallLetterWhereInput>
  }

  export type MaterialItemOrderByWithRelationInput = {
    id?: SortOrder
    slNo?: SortOrder
    quotationCallLetterId?: SortOrder
    materialName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quotationCallLetter?: QuotationCallLetterOrderByWithRelationInput
  }

  export type MaterialItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialItemWhereInput | MaterialItemWhereInput[]
    OR?: MaterialItemWhereInput[]
    NOT?: MaterialItemWhereInput | MaterialItemWhereInput[]
    slNo?: IntFilter<"MaterialItem"> | number
    quotationCallLetterId?: StringFilter<"MaterialItem"> | string
    materialName?: StringFilter<"MaterialItem"> | string
    quantity?: StringFilter<"MaterialItem"> | string
    price?: StringFilter<"MaterialItem"> | string
    unit?: StringFilter<"MaterialItem"> | string
    createdAt?: DateTimeFilter<"MaterialItem"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialItem"> | Date | string
    quotationCallLetter?: XOR<QuotationCallLetterScalarRelationFilter, QuotationCallLetterWhereInput>
  }, "id">

  export type MaterialItemOrderByWithAggregationInput = {
    id?: SortOrder
    slNo?: SortOrder
    quotationCallLetterId?: SortOrder
    materialName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaterialItemCountOrderByAggregateInput
    _avg?: MaterialItemAvgOrderByAggregateInput
    _max?: MaterialItemMaxOrderByAggregateInput
    _min?: MaterialItemMinOrderByAggregateInput
    _sum?: MaterialItemSumOrderByAggregateInput
  }

  export type MaterialItemScalarWhereWithAggregatesInput = {
    AND?: MaterialItemScalarWhereWithAggregatesInput | MaterialItemScalarWhereWithAggregatesInput[]
    OR?: MaterialItemScalarWhereWithAggregatesInput[]
    NOT?: MaterialItemScalarWhereWithAggregatesInput | MaterialItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaterialItem"> | string
    slNo?: IntWithAggregatesFilter<"MaterialItem"> | number
    quotationCallLetterId?: StringWithAggregatesFilter<"MaterialItem"> | string
    materialName?: StringWithAggregatesFilter<"MaterialItem"> | string
    quantity?: StringWithAggregatesFilter<"MaterialItem"> | string
    price?: StringWithAggregatesFilter<"MaterialItem"> | string
    unit?: StringWithAggregatesFilter<"MaterialItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MaterialItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaterialItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    panchayatCode: string
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: string | null
    resetPasswordToken?: string | null
    resetTokenExpires?: Date | string | null
    verificationExpires?: Date | string | null
    verificationAttempts?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    panchayatCode: string
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: string | null
    resetPasswordToken?: string | null
    resetTokenExpires?: Date | string | null
    verificationExpires?: Date | string | null
    verificationAttempts?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    panchayatCode?: StringFieldUpdateOperationsInput | string
    isVerifiedEmail?: BoolFieldUpdateOperationsInput | boolean
    isAdminVerifiedUser?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    panchayatCode?: StringFieldUpdateOperationsInput | string
    isVerifiedEmail?: BoolFieldUpdateOperationsInput | boolean
    isAdminVerifiedUser?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    panchayatCode: string
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: string | null
    resetPasswordToken?: string | null
    resetTokenExpires?: Date | string | null
    verificationExpires?: Date | string | null
    verificationAttempts?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    panchayatCode?: StringFieldUpdateOperationsInput | string
    isVerifiedEmail?: BoolFieldUpdateOperationsInput | boolean
    isAdminVerifiedUser?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    panchayatCode?: StringFieldUpdateOperationsInput | string
    isVerifiedEmail?: BoolFieldUpdateOperationsInput | boolean
    isAdminVerifiedUser?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDetailCreateInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDocuments?: WorkDocumentsCreateNestedOneWithoutWorkDetailInput
    vendorDetails?: VendorDetailCreateNestedOneWithoutWorkDetailInput
    quotationCallLetter?: QuotationCallLetterCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailUncheckedCreateInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDocuments?: WorkDocumentsUncheckedCreateNestedOneWithoutWorkDetailInput
    vendorDetails?: VendorDetailUncheckedCreateNestedOneWithoutWorkDetailInput
    quotationCallLetter?: QuotationCallLetterUncheckedCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDocuments?: WorkDocumentsUpdateOneWithoutWorkDetailNestedInput
    vendorDetails?: VendorDetailUpdateOneWithoutWorkDetailNestedInput
    quotationCallLetter?: QuotationCallLetterUpdateOneWithoutWorkDetailNestedInput
  }

  export type WorkDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDocuments?: WorkDocumentsUncheckedUpdateOneWithoutWorkDetailNestedInput
    vendorDetails?: VendorDetailUncheckedUpdateOneWithoutWorkDetailNestedInput
    quotationCallLetter?: QuotationCallLetterUncheckedUpdateOneWithoutWorkDetailNestedInput
  }

  export type WorkDetailCreateManyInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDocumentsCreateInput = {
    id?: string
    annualActionPlan?: string | null
    technicalEstimate?: string | null
    technicalSanction?: string | null
    administrativeSanction?: string | null
    convergenceFunds?: string | null
    demandApplicationForm?: string | null
    workAllocationForm?: string | null
    filledEMusterRolls?: string | null
    measurementBook?: string | null
    materialProcurement?: string | null
    wageListFTO?: string | null
    skilledMusterRolls?: string | null
    materialVouchers?: string | null
    geotaggedPhotographs?: string | null
    workCompletionCertificate?: string | null
    musterRollMovementSlip?: string | null
    socialAuditReport?: string | null
    otherStateDocuments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDetail: WorkDetailCreateNestedOneWithoutWorkDocumentsInput
  }

  export type WorkDocumentsUncheckedCreateInput = {
    id?: string
    workCode: string
    annualActionPlan?: string | null
    technicalEstimate?: string | null
    technicalSanction?: string | null
    administrativeSanction?: string | null
    convergenceFunds?: string | null
    demandApplicationForm?: string | null
    workAllocationForm?: string | null
    filledEMusterRolls?: string | null
    measurementBook?: string | null
    materialProcurement?: string | null
    wageListFTO?: string | null
    skilledMusterRolls?: string | null
    materialVouchers?: string | null
    geotaggedPhotographs?: string | null
    workCompletionCertificate?: string | null
    musterRollMovementSlip?: string | null
    socialAuditReport?: string | null
    otherStateDocuments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDocumentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    annualActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    technicalEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    technicalSanction?: NullableStringFieldUpdateOperationsInput | string | null
    administrativeSanction?: NullableStringFieldUpdateOperationsInput | string | null
    convergenceFunds?: NullableStringFieldUpdateOperationsInput | string | null
    demandApplicationForm?: NullableStringFieldUpdateOperationsInput | string | null
    workAllocationForm?: NullableStringFieldUpdateOperationsInput | string | null
    filledEMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    measurementBook?: NullableStringFieldUpdateOperationsInput | string | null
    materialProcurement?: NullableStringFieldUpdateOperationsInput | string | null
    wageListFTO?: NullableStringFieldUpdateOperationsInput | string | null
    skilledMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    materialVouchers?: NullableStringFieldUpdateOperationsInput | string | null
    geotaggedPhotographs?: NullableStringFieldUpdateOperationsInput | string | null
    workCompletionCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    musterRollMovementSlip?: NullableStringFieldUpdateOperationsInput | string | null
    socialAuditReport?: NullableStringFieldUpdateOperationsInput | string | null
    otherStateDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDetail?: WorkDetailUpdateOneRequiredWithoutWorkDocumentsNestedInput
  }

  export type WorkDocumentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    annualActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    technicalEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    technicalSanction?: NullableStringFieldUpdateOperationsInput | string | null
    administrativeSanction?: NullableStringFieldUpdateOperationsInput | string | null
    convergenceFunds?: NullableStringFieldUpdateOperationsInput | string | null
    demandApplicationForm?: NullableStringFieldUpdateOperationsInput | string | null
    workAllocationForm?: NullableStringFieldUpdateOperationsInput | string | null
    filledEMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    measurementBook?: NullableStringFieldUpdateOperationsInput | string | null
    materialProcurement?: NullableStringFieldUpdateOperationsInput | string | null
    wageListFTO?: NullableStringFieldUpdateOperationsInput | string | null
    skilledMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    materialVouchers?: NullableStringFieldUpdateOperationsInput | string | null
    geotaggedPhotographs?: NullableStringFieldUpdateOperationsInput | string | null
    workCompletionCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    musterRollMovementSlip?: NullableStringFieldUpdateOperationsInput | string | null
    socialAuditReport?: NullableStringFieldUpdateOperationsInput | string | null
    otherStateDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDocumentsCreateManyInput = {
    id?: string
    workCode: string
    annualActionPlan?: string | null
    technicalEstimate?: string | null
    technicalSanction?: string | null
    administrativeSanction?: string | null
    convergenceFunds?: string | null
    demandApplicationForm?: string | null
    workAllocationForm?: string | null
    filledEMusterRolls?: string | null
    measurementBook?: string | null
    materialProcurement?: string | null
    wageListFTO?: string | null
    skilledMusterRolls?: string | null
    materialVouchers?: string | null
    geotaggedPhotographs?: string | null
    workCompletionCertificate?: string | null
    musterRollMovementSlip?: string | null
    socialAuditReport?: string | null
    otherStateDocuments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDocumentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    annualActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    technicalEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    technicalSanction?: NullableStringFieldUpdateOperationsInput | string | null
    administrativeSanction?: NullableStringFieldUpdateOperationsInput | string | null
    convergenceFunds?: NullableStringFieldUpdateOperationsInput | string | null
    demandApplicationForm?: NullableStringFieldUpdateOperationsInput | string | null
    workAllocationForm?: NullableStringFieldUpdateOperationsInput | string | null
    filledEMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    measurementBook?: NullableStringFieldUpdateOperationsInput | string | null
    materialProcurement?: NullableStringFieldUpdateOperationsInput | string | null
    wageListFTO?: NullableStringFieldUpdateOperationsInput | string | null
    skilledMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    materialVouchers?: NullableStringFieldUpdateOperationsInput | string | null
    geotaggedPhotographs?: NullableStringFieldUpdateOperationsInput | string | null
    workCompletionCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    musterRollMovementSlip?: NullableStringFieldUpdateOperationsInput | string | null
    socialAuditReport?: NullableStringFieldUpdateOperationsInput | string | null
    otherStateDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDocumentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    annualActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    technicalEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    technicalSanction?: NullableStringFieldUpdateOperationsInput | string | null
    administrativeSanction?: NullableStringFieldUpdateOperationsInput | string | null
    convergenceFunds?: NullableStringFieldUpdateOperationsInput | string | null
    demandApplicationForm?: NullableStringFieldUpdateOperationsInput | string | null
    workAllocationForm?: NullableStringFieldUpdateOperationsInput | string | null
    filledEMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    measurementBook?: NullableStringFieldUpdateOperationsInput | string | null
    materialProcurement?: NullableStringFieldUpdateOperationsInput | string | null
    wageListFTO?: NullableStringFieldUpdateOperationsInput | string | null
    skilledMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    materialVouchers?: NullableStringFieldUpdateOperationsInput | string | null
    geotaggedPhotographs?: NullableStringFieldUpdateOperationsInput | string | null
    workCompletionCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    musterRollMovementSlip?: NullableStringFieldUpdateOperationsInput | string | null
    socialAuditReport?: NullableStringFieldUpdateOperationsInput | string | null
    otherStateDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorDetailCreateInput = {
    id?: string
    vendorNameOne?: string | null
    vendorNameTwo?: string | null
    vendorNameThree?: string | null
    vendorGstOne?: string | null
    vendorGstTwo?: string | null
    vendorGstThree?: string | null
    fromDate?: Date | string | null
    toDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDetail: WorkDetailCreateNestedOneWithoutVendorDetailsInput
  }

  export type VendorDetailUncheckedCreateInput = {
    id?: string
    vendorNameOne?: string | null
    vendorNameTwo?: string | null
    vendorNameThree?: string | null
    vendorGstOne?: string | null
    vendorGstTwo?: string | null
    vendorGstThree?: string | null
    fromDate?: Date | string | null
    toDate?: Date | string | null
    workDetailId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorNameOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameThree?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstThree?: NullableStringFieldUpdateOperationsInput | string | null
    fromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    toDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDetail?: WorkDetailUpdateOneRequiredWithoutVendorDetailsNestedInput
  }

  export type VendorDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorNameOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameThree?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstThree?: NullableStringFieldUpdateOperationsInput | string | null
    fromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    toDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workDetailId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorDetailCreateManyInput = {
    id?: string
    vendorNameOne?: string | null
    vendorNameTwo?: string | null
    vendorNameThree?: string | null
    vendorGstOne?: string | null
    vendorGstTwo?: string | null
    vendorGstThree?: string | null
    fromDate?: Date | string | null
    toDate?: Date | string | null
    workDetailId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorNameOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameThree?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstThree?: NullableStringFieldUpdateOperationsInput | string | null
    fromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    toDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorNameOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameThree?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstThree?: NullableStringFieldUpdateOperationsInput | string | null
    fromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    toDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workDetailId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationCallLetterCreateInput = {
    id?: string
    administrativeSanction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workDetail: WorkDetailCreateNestedOneWithoutQuotationCallLetterInput
    materialItems?: MaterialItemCreateNestedManyWithoutQuotationCallLetterInput
  }

  export type QuotationCallLetterUncheckedCreateInput = {
    id?: string
    workDetailId: string
    administrativeSanction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    materialItems?: MaterialItemUncheckedCreateNestedManyWithoutQuotationCallLetterInput
  }

  export type QuotationCallLetterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDetail?: WorkDetailUpdateOneRequiredWithoutQuotationCallLetterNestedInput
    materialItems?: MaterialItemUpdateManyWithoutQuotationCallLetterNestedInput
  }

  export type QuotationCallLetterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDetailId?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialItems?: MaterialItemUncheckedUpdateManyWithoutQuotationCallLetterNestedInput
  }

  export type QuotationCallLetterCreateManyInput = {
    id?: string
    workDetailId: string
    administrativeSanction: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuotationCallLetterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationCallLetterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDetailId?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialItemCreateInput = {
    id?: string
    slNo: number
    materialName: string
    quantity: string
    price: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quotationCallLetter: QuotationCallLetterCreateNestedOneWithoutMaterialItemsInput
  }

  export type MaterialItemUncheckedCreateInput = {
    id?: string
    slNo: number
    quotationCallLetterId: string
    materialName: string
    quantity: string
    price: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slNo?: IntFieldUpdateOperationsInput | number
    materialName?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotationCallLetter?: QuotationCallLetterUpdateOneRequiredWithoutMaterialItemsNestedInput
  }

  export type MaterialItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slNo?: IntFieldUpdateOperationsInput | number
    quotationCallLetterId?: StringFieldUpdateOperationsInput | string
    materialName?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialItemCreateManyInput = {
    id?: string
    slNo: number
    quotationCallLetterId: string
    materialName: string
    quantity: string
    price: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slNo?: IntFieldUpdateOperationsInput | number
    materialName?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slNo?: IntFieldUpdateOperationsInput | number
    quotationCallLetterId?: StringFieldUpdateOperationsInput | string
    materialName?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    panchayatCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isAdminVerifiedUser?: SortOrder
    verificationCode?: SortOrder
    resetPasswordToken?: SortOrder
    resetTokenExpires?: SortOrder
    verificationExpires?: SortOrder
    verificationAttempts?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    verificationAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    panchayatCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isAdminVerifiedUser?: SortOrder
    verificationCode?: SortOrder
    resetPasswordToken?: SortOrder
    resetTokenExpires?: SortOrder
    verificationExpires?: SortOrder
    verificationAttempts?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    panchayatCode?: SortOrder
    isVerifiedEmail?: SortOrder
    isAdminVerifiedUser?: SortOrder
    verificationCode?: SortOrder
    resetPasswordToken?: SortOrder
    resetTokenExpires?: SortOrder
    verificationExpires?: SortOrder
    verificationAttempts?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    verificationAttempts?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type WorkDocumentsNullableScalarRelationFilter = {
    is?: WorkDocumentsWhereInput | null
    isNot?: WorkDocumentsWhereInput | null
  }

  export type VendorDetailNullableScalarRelationFilter = {
    is?: VendorDetailWhereInput | null
    isNot?: VendorDetailWhereInput | null
  }

  export type QuotationCallLetterNullableScalarRelationFilter = {
    is?: QuotationCallLetterWhereInput | null
    isNot?: QuotationCallLetterWhereInput | null
  }

  export type WorkDetailCountOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    district?: SortOrder
    panchayat?: SortOrder
    block?: SortOrder
    workCode?: SortOrder
    workName?: SortOrder
    workCategory?: SortOrder
    workType?: SortOrder
    workStatus?: SortOrder
    implementingAgency?: SortOrder
    estimatedCost?: SortOrder
    actualExpenditure?: SortOrder
    sanctionYear?: SortOrder
    workStartDate?: SortOrder
    financialYear?: SortOrder
    estimatedPersonDays?: SortOrder
    actualPersonDays?: SortOrder
    vendorName?: SortOrder
    vendorGstNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkDetailAvgOrderByAggregateInput = {
    estimatedCost?: SortOrder
    actualExpenditure?: SortOrder
  }

  export type WorkDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    district?: SortOrder
    panchayat?: SortOrder
    block?: SortOrder
    workCode?: SortOrder
    workName?: SortOrder
    workCategory?: SortOrder
    workType?: SortOrder
    workStatus?: SortOrder
    implementingAgency?: SortOrder
    estimatedCost?: SortOrder
    actualExpenditure?: SortOrder
    sanctionYear?: SortOrder
    workStartDate?: SortOrder
    financialYear?: SortOrder
    estimatedPersonDays?: SortOrder
    actualPersonDays?: SortOrder
    vendorName?: SortOrder
    vendorGstNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkDetailMinOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    district?: SortOrder
    panchayat?: SortOrder
    block?: SortOrder
    workCode?: SortOrder
    workName?: SortOrder
    workCategory?: SortOrder
    workType?: SortOrder
    workStatus?: SortOrder
    implementingAgency?: SortOrder
    estimatedCost?: SortOrder
    actualExpenditure?: SortOrder
    sanctionYear?: SortOrder
    workStartDate?: SortOrder
    financialYear?: SortOrder
    estimatedPersonDays?: SortOrder
    actualPersonDays?: SortOrder
    vendorName?: SortOrder
    vendorGstNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkDetailSumOrderByAggregateInput = {
    estimatedCost?: SortOrder
    actualExpenditure?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type WorkDetailScalarRelationFilter = {
    is?: WorkDetailWhereInput
    isNot?: WorkDetailWhereInput
  }

  export type WorkDocumentsCountOrderByAggregateInput = {
    id?: SortOrder
    workCode?: SortOrder
    annualActionPlan?: SortOrder
    technicalEstimate?: SortOrder
    technicalSanction?: SortOrder
    administrativeSanction?: SortOrder
    convergenceFunds?: SortOrder
    demandApplicationForm?: SortOrder
    workAllocationForm?: SortOrder
    filledEMusterRolls?: SortOrder
    measurementBook?: SortOrder
    materialProcurement?: SortOrder
    wageListFTO?: SortOrder
    skilledMusterRolls?: SortOrder
    materialVouchers?: SortOrder
    geotaggedPhotographs?: SortOrder
    workCompletionCertificate?: SortOrder
    musterRollMovementSlip?: SortOrder
    socialAuditReport?: SortOrder
    otherStateDocuments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkDocumentsMaxOrderByAggregateInput = {
    id?: SortOrder
    workCode?: SortOrder
    annualActionPlan?: SortOrder
    technicalEstimate?: SortOrder
    technicalSanction?: SortOrder
    administrativeSanction?: SortOrder
    convergenceFunds?: SortOrder
    demandApplicationForm?: SortOrder
    workAllocationForm?: SortOrder
    filledEMusterRolls?: SortOrder
    measurementBook?: SortOrder
    materialProcurement?: SortOrder
    wageListFTO?: SortOrder
    skilledMusterRolls?: SortOrder
    materialVouchers?: SortOrder
    geotaggedPhotographs?: SortOrder
    workCompletionCertificate?: SortOrder
    musterRollMovementSlip?: SortOrder
    socialAuditReport?: SortOrder
    otherStateDocuments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkDocumentsMinOrderByAggregateInput = {
    id?: SortOrder
    workCode?: SortOrder
    annualActionPlan?: SortOrder
    technicalEstimate?: SortOrder
    technicalSanction?: SortOrder
    administrativeSanction?: SortOrder
    convergenceFunds?: SortOrder
    demandApplicationForm?: SortOrder
    workAllocationForm?: SortOrder
    filledEMusterRolls?: SortOrder
    measurementBook?: SortOrder
    materialProcurement?: SortOrder
    wageListFTO?: SortOrder
    skilledMusterRolls?: SortOrder
    materialVouchers?: SortOrder
    geotaggedPhotographs?: SortOrder
    workCompletionCertificate?: SortOrder
    musterRollMovementSlip?: SortOrder
    socialAuditReport?: SortOrder
    otherStateDocuments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorDetailCountOrderByAggregateInput = {
    id?: SortOrder
    vendorNameOne?: SortOrder
    vendorNameTwo?: SortOrder
    vendorNameThree?: SortOrder
    vendorGstOne?: SortOrder
    vendorGstTwo?: SortOrder
    vendorGstThree?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    workDetailId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorNameOne?: SortOrder
    vendorNameTwo?: SortOrder
    vendorNameThree?: SortOrder
    vendorGstOne?: SortOrder
    vendorGstTwo?: SortOrder
    vendorGstThree?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    workDetailId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorDetailMinOrderByAggregateInput = {
    id?: SortOrder
    vendorNameOne?: SortOrder
    vendorNameTwo?: SortOrder
    vendorNameThree?: SortOrder
    vendorGstOne?: SortOrder
    vendorGstTwo?: SortOrder
    vendorGstThree?: SortOrder
    fromDate?: SortOrder
    toDate?: SortOrder
    workDetailId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialItemListRelationFilter = {
    every?: MaterialItemWhereInput
    some?: MaterialItemWhereInput
    none?: MaterialItemWhereInput
  }

  export type MaterialItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuotationCallLetterCountOrderByAggregateInput = {
    id?: SortOrder
    workDetailId?: SortOrder
    administrativeSanction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuotationCallLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    workDetailId?: SortOrder
    administrativeSanction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuotationCallLetterMinOrderByAggregateInput = {
    id?: SortOrder
    workDetailId?: SortOrder
    administrativeSanction?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuotationCallLetterScalarRelationFilter = {
    is?: QuotationCallLetterWhereInput
    isNot?: QuotationCallLetterWhereInput
  }

  export type MaterialItemCountOrderByAggregateInput = {
    id?: SortOrder
    slNo?: SortOrder
    quotationCallLetterId?: SortOrder
    materialName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialItemAvgOrderByAggregateInput = {
    slNo?: SortOrder
  }

  export type MaterialItemMaxOrderByAggregateInput = {
    id?: SortOrder
    slNo?: SortOrder
    quotationCallLetterId?: SortOrder
    materialName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialItemMinOrderByAggregateInput = {
    id?: SortOrder
    slNo?: SortOrder
    quotationCallLetterId?: SortOrder
    materialName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterialItemSumOrderByAggregateInput = {
    slNo?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type WorkDocumentsCreateNestedOneWithoutWorkDetailInput = {
    create?: XOR<WorkDocumentsCreateWithoutWorkDetailInput, WorkDocumentsUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: WorkDocumentsCreateOrConnectWithoutWorkDetailInput
    connect?: WorkDocumentsWhereUniqueInput
  }

  export type VendorDetailCreateNestedOneWithoutWorkDetailInput = {
    create?: XOR<VendorDetailCreateWithoutWorkDetailInput, VendorDetailUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: VendorDetailCreateOrConnectWithoutWorkDetailInput
    connect?: VendorDetailWhereUniqueInput
  }

  export type QuotationCallLetterCreateNestedOneWithoutWorkDetailInput = {
    create?: XOR<QuotationCallLetterCreateWithoutWorkDetailInput, QuotationCallLetterUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: QuotationCallLetterCreateOrConnectWithoutWorkDetailInput
    connect?: QuotationCallLetterWhereUniqueInput
  }

  export type WorkDocumentsUncheckedCreateNestedOneWithoutWorkDetailInput = {
    create?: XOR<WorkDocumentsCreateWithoutWorkDetailInput, WorkDocumentsUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: WorkDocumentsCreateOrConnectWithoutWorkDetailInput
    connect?: WorkDocumentsWhereUniqueInput
  }

  export type VendorDetailUncheckedCreateNestedOneWithoutWorkDetailInput = {
    create?: XOR<VendorDetailCreateWithoutWorkDetailInput, VendorDetailUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: VendorDetailCreateOrConnectWithoutWorkDetailInput
    connect?: VendorDetailWhereUniqueInput
  }

  export type QuotationCallLetterUncheckedCreateNestedOneWithoutWorkDetailInput = {
    create?: XOR<QuotationCallLetterCreateWithoutWorkDetailInput, QuotationCallLetterUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: QuotationCallLetterCreateOrConnectWithoutWorkDetailInput
    connect?: QuotationCallLetterWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type WorkDocumentsUpdateOneWithoutWorkDetailNestedInput = {
    create?: XOR<WorkDocumentsCreateWithoutWorkDetailInput, WorkDocumentsUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: WorkDocumentsCreateOrConnectWithoutWorkDetailInput
    upsert?: WorkDocumentsUpsertWithoutWorkDetailInput
    disconnect?: WorkDocumentsWhereInput | boolean
    delete?: WorkDocumentsWhereInput | boolean
    connect?: WorkDocumentsWhereUniqueInput
    update?: XOR<XOR<WorkDocumentsUpdateToOneWithWhereWithoutWorkDetailInput, WorkDocumentsUpdateWithoutWorkDetailInput>, WorkDocumentsUncheckedUpdateWithoutWorkDetailInput>
  }

  export type VendorDetailUpdateOneWithoutWorkDetailNestedInput = {
    create?: XOR<VendorDetailCreateWithoutWorkDetailInput, VendorDetailUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: VendorDetailCreateOrConnectWithoutWorkDetailInput
    upsert?: VendorDetailUpsertWithoutWorkDetailInput
    disconnect?: VendorDetailWhereInput | boolean
    delete?: VendorDetailWhereInput | boolean
    connect?: VendorDetailWhereUniqueInput
    update?: XOR<XOR<VendorDetailUpdateToOneWithWhereWithoutWorkDetailInput, VendorDetailUpdateWithoutWorkDetailInput>, VendorDetailUncheckedUpdateWithoutWorkDetailInput>
  }

  export type QuotationCallLetterUpdateOneWithoutWorkDetailNestedInput = {
    create?: XOR<QuotationCallLetterCreateWithoutWorkDetailInput, QuotationCallLetterUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: QuotationCallLetterCreateOrConnectWithoutWorkDetailInput
    upsert?: QuotationCallLetterUpsertWithoutWorkDetailInput
    disconnect?: QuotationCallLetterWhereInput | boolean
    delete?: QuotationCallLetterWhereInput | boolean
    connect?: QuotationCallLetterWhereUniqueInput
    update?: XOR<XOR<QuotationCallLetterUpdateToOneWithWhereWithoutWorkDetailInput, QuotationCallLetterUpdateWithoutWorkDetailInput>, QuotationCallLetterUncheckedUpdateWithoutWorkDetailInput>
  }

  export type WorkDocumentsUncheckedUpdateOneWithoutWorkDetailNestedInput = {
    create?: XOR<WorkDocumentsCreateWithoutWorkDetailInput, WorkDocumentsUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: WorkDocumentsCreateOrConnectWithoutWorkDetailInput
    upsert?: WorkDocumentsUpsertWithoutWorkDetailInput
    disconnect?: WorkDocumentsWhereInput | boolean
    delete?: WorkDocumentsWhereInput | boolean
    connect?: WorkDocumentsWhereUniqueInput
    update?: XOR<XOR<WorkDocumentsUpdateToOneWithWhereWithoutWorkDetailInput, WorkDocumentsUpdateWithoutWorkDetailInput>, WorkDocumentsUncheckedUpdateWithoutWorkDetailInput>
  }

  export type VendorDetailUncheckedUpdateOneWithoutWorkDetailNestedInput = {
    create?: XOR<VendorDetailCreateWithoutWorkDetailInput, VendorDetailUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: VendorDetailCreateOrConnectWithoutWorkDetailInput
    upsert?: VendorDetailUpsertWithoutWorkDetailInput
    disconnect?: VendorDetailWhereInput | boolean
    delete?: VendorDetailWhereInput | boolean
    connect?: VendorDetailWhereUniqueInput
    update?: XOR<XOR<VendorDetailUpdateToOneWithWhereWithoutWorkDetailInput, VendorDetailUpdateWithoutWorkDetailInput>, VendorDetailUncheckedUpdateWithoutWorkDetailInput>
  }

  export type QuotationCallLetterUncheckedUpdateOneWithoutWorkDetailNestedInput = {
    create?: XOR<QuotationCallLetterCreateWithoutWorkDetailInput, QuotationCallLetterUncheckedCreateWithoutWorkDetailInput>
    connectOrCreate?: QuotationCallLetterCreateOrConnectWithoutWorkDetailInput
    upsert?: QuotationCallLetterUpsertWithoutWorkDetailInput
    disconnect?: QuotationCallLetterWhereInput | boolean
    delete?: QuotationCallLetterWhereInput | boolean
    connect?: QuotationCallLetterWhereUniqueInput
    update?: XOR<XOR<QuotationCallLetterUpdateToOneWithWhereWithoutWorkDetailInput, QuotationCallLetterUpdateWithoutWorkDetailInput>, QuotationCallLetterUncheckedUpdateWithoutWorkDetailInput>
  }

  export type WorkDetailCreateNestedOneWithoutWorkDocumentsInput = {
    create?: XOR<WorkDetailCreateWithoutWorkDocumentsInput, WorkDetailUncheckedCreateWithoutWorkDocumentsInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutWorkDocumentsInput
    connect?: WorkDetailWhereUniqueInput
  }

  export type WorkDetailUpdateOneRequiredWithoutWorkDocumentsNestedInput = {
    create?: XOR<WorkDetailCreateWithoutWorkDocumentsInput, WorkDetailUncheckedCreateWithoutWorkDocumentsInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutWorkDocumentsInput
    upsert?: WorkDetailUpsertWithoutWorkDocumentsInput
    connect?: WorkDetailWhereUniqueInput
    update?: XOR<XOR<WorkDetailUpdateToOneWithWhereWithoutWorkDocumentsInput, WorkDetailUpdateWithoutWorkDocumentsInput>, WorkDetailUncheckedUpdateWithoutWorkDocumentsInput>
  }

  export type WorkDetailCreateNestedOneWithoutVendorDetailsInput = {
    create?: XOR<WorkDetailCreateWithoutVendorDetailsInput, WorkDetailUncheckedCreateWithoutVendorDetailsInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutVendorDetailsInput
    connect?: WorkDetailWhereUniqueInput
  }

  export type WorkDetailUpdateOneRequiredWithoutVendorDetailsNestedInput = {
    create?: XOR<WorkDetailCreateWithoutVendorDetailsInput, WorkDetailUncheckedCreateWithoutVendorDetailsInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutVendorDetailsInput
    upsert?: WorkDetailUpsertWithoutVendorDetailsInput
    connect?: WorkDetailWhereUniqueInput
    update?: XOR<XOR<WorkDetailUpdateToOneWithWhereWithoutVendorDetailsInput, WorkDetailUpdateWithoutVendorDetailsInput>, WorkDetailUncheckedUpdateWithoutVendorDetailsInput>
  }

  export type WorkDetailCreateNestedOneWithoutQuotationCallLetterInput = {
    create?: XOR<WorkDetailCreateWithoutQuotationCallLetterInput, WorkDetailUncheckedCreateWithoutQuotationCallLetterInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutQuotationCallLetterInput
    connect?: WorkDetailWhereUniqueInput
  }

  export type MaterialItemCreateNestedManyWithoutQuotationCallLetterInput = {
    create?: XOR<MaterialItemCreateWithoutQuotationCallLetterInput, MaterialItemUncheckedCreateWithoutQuotationCallLetterInput> | MaterialItemCreateWithoutQuotationCallLetterInput[] | MaterialItemUncheckedCreateWithoutQuotationCallLetterInput[]
    connectOrCreate?: MaterialItemCreateOrConnectWithoutQuotationCallLetterInput | MaterialItemCreateOrConnectWithoutQuotationCallLetterInput[]
    createMany?: MaterialItemCreateManyQuotationCallLetterInputEnvelope
    connect?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
  }

  export type MaterialItemUncheckedCreateNestedManyWithoutQuotationCallLetterInput = {
    create?: XOR<MaterialItemCreateWithoutQuotationCallLetterInput, MaterialItemUncheckedCreateWithoutQuotationCallLetterInput> | MaterialItemCreateWithoutQuotationCallLetterInput[] | MaterialItemUncheckedCreateWithoutQuotationCallLetterInput[]
    connectOrCreate?: MaterialItemCreateOrConnectWithoutQuotationCallLetterInput | MaterialItemCreateOrConnectWithoutQuotationCallLetterInput[]
    createMany?: MaterialItemCreateManyQuotationCallLetterInputEnvelope
    connect?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
  }

  export type WorkDetailUpdateOneRequiredWithoutQuotationCallLetterNestedInput = {
    create?: XOR<WorkDetailCreateWithoutQuotationCallLetterInput, WorkDetailUncheckedCreateWithoutQuotationCallLetterInput>
    connectOrCreate?: WorkDetailCreateOrConnectWithoutQuotationCallLetterInput
    upsert?: WorkDetailUpsertWithoutQuotationCallLetterInput
    connect?: WorkDetailWhereUniqueInput
    update?: XOR<XOR<WorkDetailUpdateToOneWithWhereWithoutQuotationCallLetterInput, WorkDetailUpdateWithoutQuotationCallLetterInput>, WorkDetailUncheckedUpdateWithoutQuotationCallLetterInput>
  }

  export type MaterialItemUpdateManyWithoutQuotationCallLetterNestedInput = {
    create?: XOR<MaterialItemCreateWithoutQuotationCallLetterInput, MaterialItemUncheckedCreateWithoutQuotationCallLetterInput> | MaterialItemCreateWithoutQuotationCallLetterInput[] | MaterialItemUncheckedCreateWithoutQuotationCallLetterInput[]
    connectOrCreate?: MaterialItemCreateOrConnectWithoutQuotationCallLetterInput | MaterialItemCreateOrConnectWithoutQuotationCallLetterInput[]
    upsert?: MaterialItemUpsertWithWhereUniqueWithoutQuotationCallLetterInput | MaterialItemUpsertWithWhereUniqueWithoutQuotationCallLetterInput[]
    createMany?: MaterialItemCreateManyQuotationCallLetterInputEnvelope
    set?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    disconnect?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    delete?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    connect?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    update?: MaterialItemUpdateWithWhereUniqueWithoutQuotationCallLetterInput | MaterialItemUpdateWithWhereUniqueWithoutQuotationCallLetterInput[]
    updateMany?: MaterialItemUpdateManyWithWhereWithoutQuotationCallLetterInput | MaterialItemUpdateManyWithWhereWithoutQuotationCallLetterInput[]
    deleteMany?: MaterialItemScalarWhereInput | MaterialItemScalarWhereInput[]
  }

  export type MaterialItemUncheckedUpdateManyWithoutQuotationCallLetterNestedInput = {
    create?: XOR<MaterialItemCreateWithoutQuotationCallLetterInput, MaterialItemUncheckedCreateWithoutQuotationCallLetterInput> | MaterialItemCreateWithoutQuotationCallLetterInput[] | MaterialItemUncheckedCreateWithoutQuotationCallLetterInput[]
    connectOrCreate?: MaterialItemCreateOrConnectWithoutQuotationCallLetterInput | MaterialItemCreateOrConnectWithoutQuotationCallLetterInput[]
    upsert?: MaterialItemUpsertWithWhereUniqueWithoutQuotationCallLetterInput | MaterialItemUpsertWithWhereUniqueWithoutQuotationCallLetterInput[]
    createMany?: MaterialItemCreateManyQuotationCallLetterInputEnvelope
    set?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    disconnect?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    delete?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    connect?: MaterialItemWhereUniqueInput | MaterialItemWhereUniqueInput[]
    update?: MaterialItemUpdateWithWhereUniqueWithoutQuotationCallLetterInput | MaterialItemUpdateWithWhereUniqueWithoutQuotationCallLetterInput[]
    updateMany?: MaterialItemUpdateManyWithWhereWithoutQuotationCallLetterInput | MaterialItemUpdateManyWithWhereWithoutQuotationCallLetterInput[]
    deleteMany?: MaterialItemScalarWhereInput | MaterialItemScalarWhereInput[]
  }

  export type QuotationCallLetterCreateNestedOneWithoutMaterialItemsInput = {
    create?: XOR<QuotationCallLetterCreateWithoutMaterialItemsInput, QuotationCallLetterUncheckedCreateWithoutMaterialItemsInput>
    connectOrCreate?: QuotationCallLetterCreateOrConnectWithoutMaterialItemsInput
    connect?: QuotationCallLetterWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuotationCallLetterUpdateOneRequiredWithoutMaterialItemsNestedInput = {
    create?: XOR<QuotationCallLetterCreateWithoutMaterialItemsInput, QuotationCallLetterUncheckedCreateWithoutMaterialItemsInput>
    connectOrCreate?: QuotationCallLetterCreateOrConnectWithoutMaterialItemsInput
    upsert?: QuotationCallLetterUpsertWithoutMaterialItemsInput
    connect?: QuotationCallLetterWhereUniqueInput
    update?: XOR<XOR<QuotationCallLetterUpdateToOneWithWhereWithoutMaterialItemsInput, QuotationCallLetterUpdateWithoutMaterialItemsInput>, QuotationCallLetterUncheckedUpdateWithoutMaterialItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    panchayatCode: string
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: string | null
    resetPasswordToken?: string | null
    resetTokenExpires?: Date | string | null
    verificationExpires?: Date | string | null
    verificationAttempts?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    panchayatCode: string
    isVerifiedEmail?: boolean
    isAdminVerifiedUser?: boolean
    verificationCode?: string | null
    resetPasswordToken?: string | null
    resetTokenExpires?: Date | string | null
    verificationExpires?: Date | string | null
    verificationAttempts?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    panchayatCode?: StringFieldUpdateOperationsInput | string
    isVerifiedEmail?: BoolFieldUpdateOperationsInput | boolean
    isAdminVerifiedUser?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    panchayatCode?: StringFieldUpdateOperationsInput | string
    isVerifiedEmail?: BoolFieldUpdateOperationsInput | boolean
    isAdminVerifiedUser?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationAttempts?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDocumentsCreateWithoutWorkDetailInput = {
    id?: string
    annualActionPlan?: string | null
    technicalEstimate?: string | null
    technicalSanction?: string | null
    administrativeSanction?: string | null
    convergenceFunds?: string | null
    demandApplicationForm?: string | null
    workAllocationForm?: string | null
    filledEMusterRolls?: string | null
    measurementBook?: string | null
    materialProcurement?: string | null
    wageListFTO?: string | null
    skilledMusterRolls?: string | null
    materialVouchers?: string | null
    geotaggedPhotographs?: string | null
    workCompletionCertificate?: string | null
    musterRollMovementSlip?: string | null
    socialAuditReport?: string | null
    otherStateDocuments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDocumentsUncheckedCreateWithoutWorkDetailInput = {
    id?: string
    annualActionPlan?: string | null
    technicalEstimate?: string | null
    technicalSanction?: string | null
    administrativeSanction?: string | null
    convergenceFunds?: string | null
    demandApplicationForm?: string | null
    workAllocationForm?: string | null
    filledEMusterRolls?: string | null
    measurementBook?: string | null
    materialProcurement?: string | null
    wageListFTO?: string | null
    skilledMusterRolls?: string | null
    materialVouchers?: string | null
    geotaggedPhotographs?: string | null
    workCompletionCertificate?: string | null
    musterRollMovementSlip?: string | null
    socialAuditReport?: string | null
    otherStateDocuments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkDocumentsCreateOrConnectWithoutWorkDetailInput = {
    where: WorkDocumentsWhereUniqueInput
    create: XOR<WorkDocumentsCreateWithoutWorkDetailInput, WorkDocumentsUncheckedCreateWithoutWorkDetailInput>
  }

  export type VendorDetailCreateWithoutWorkDetailInput = {
    id?: string
    vendorNameOne?: string | null
    vendorNameTwo?: string | null
    vendorNameThree?: string | null
    vendorGstOne?: string | null
    vendorGstTwo?: string | null
    vendorGstThree?: string | null
    fromDate?: Date | string | null
    toDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorDetailUncheckedCreateWithoutWorkDetailInput = {
    id?: string
    vendorNameOne?: string | null
    vendorNameTwo?: string | null
    vendorNameThree?: string | null
    vendorGstOne?: string | null
    vendorGstTwo?: string | null
    vendorGstThree?: string | null
    fromDate?: Date | string | null
    toDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorDetailCreateOrConnectWithoutWorkDetailInput = {
    where: VendorDetailWhereUniqueInput
    create: XOR<VendorDetailCreateWithoutWorkDetailInput, VendorDetailUncheckedCreateWithoutWorkDetailInput>
  }

  export type QuotationCallLetterCreateWithoutWorkDetailInput = {
    id?: string
    administrativeSanction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    materialItems?: MaterialItemCreateNestedManyWithoutQuotationCallLetterInput
  }

  export type QuotationCallLetterUncheckedCreateWithoutWorkDetailInput = {
    id?: string
    administrativeSanction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    materialItems?: MaterialItemUncheckedCreateNestedManyWithoutQuotationCallLetterInput
  }

  export type QuotationCallLetterCreateOrConnectWithoutWorkDetailInput = {
    where: QuotationCallLetterWhereUniqueInput
    create: XOR<QuotationCallLetterCreateWithoutWorkDetailInput, QuotationCallLetterUncheckedCreateWithoutWorkDetailInput>
  }

  export type WorkDocumentsUpsertWithoutWorkDetailInput = {
    update: XOR<WorkDocumentsUpdateWithoutWorkDetailInput, WorkDocumentsUncheckedUpdateWithoutWorkDetailInput>
    create: XOR<WorkDocumentsCreateWithoutWorkDetailInput, WorkDocumentsUncheckedCreateWithoutWorkDetailInput>
    where?: WorkDocumentsWhereInput
  }

  export type WorkDocumentsUpdateToOneWithWhereWithoutWorkDetailInput = {
    where?: WorkDocumentsWhereInput
    data: XOR<WorkDocumentsUpdateWithoutWorkDetailInput, WorkDocumentsUncheckedUpdateWithoutWorkDetailInput>
  }

  export type WorkDocumentsUpdateWithoutWorkDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    annualActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    technicalEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    technicalSanction?: NullableStringFieldUpdateOperationsInput | string | null
    administrativeSanction?: NullableStringFieldUpdateOperationsInput | string | null
    convergenceFunds?: NullableStringFieldUpdateOperationsInput | string | null
    demandApplicationForm?: NullableStringFieldUpdateOperationsInput | string | null
    workAllocationForm?: NullableStringFieldUpdateOperationsInput | string | null
    filledEMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    measurementBook?: NullableStringFieldUpdateOperationsInput | string | null
    materialProcurement?: NullableStringFieldUpdateOperationsInput | string | null
    wageListFTO?: NullableStringFieldUpdateOperationsInput | string | null
    skilledMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    materialVouchers?: NullableStringFieldUpdateOperationsInput | string | null
    geotaggedPhotographs?: NullableStringFieldUpdateOperationsInput | string | null
    workCompletionCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    musterRollMovementSlip?: NullableStringFieldUpdateOperationsInput | string | null
    socialAuditReport?: NullableStringFieldUpdateOperationsInput | string | null
    otherStateDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkDocumentsUncheckedUpdateWithoutWorkDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    annualActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    technicalEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    technicalSanction?: NullableStringFieldUpdateOperationsInput | string | null
    administrativeSanction?: NullableStringFieldUpdateOperationsInput | string | null
    convergenceFunds?: NullableStringFieldUpdateOperationsInput | string | null
    demandApplicationForm?: NullableStringFieldUpdateOperationsInput | string | null
    workAllocationForm?: NullableStringFieldUpdateOperationsInput | string | null
    filledEMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    measurementBook?: NullableStringFieldUpdateOperationsInput | string | null
    materialProcurement?: NullableStringFieldUpdateOperationsInput | string | null
    wageListFTO?: NullableStringFieldUpdateOperationsInput | string | null
    skilledMusterRolls?: NullableStringFieldUpdateOperationsInput | string | null
    materialVouchers?: NullableStringFieldUpdateOperationsInput | string | null
    geotaggedPhotographs?: NullableStringFieldUpdateOperationsInput | string | null
    workCompletionCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    musterRollMovementSlip?: NullableStringFieldUpdateOperationsInput | string | null
    socialAuditReport?: NullableStringFieldUpdateOperationsInput | string | null
    otherStateDocuments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorDetailUpsertWithoutWorkDetailInput = {
    update: XOR<VendorDetailUpdateWithoutWorkDetailInput, VendorDetailUncheckedUpdateWithoutWorkDetailInput>
    create: XOR<VendorDetailCreateWithoutWorkDetailInput, VendorDetailUncheckedCreateWithoutWorkDetailInput>
    where?: VendorDetailWhereInput
  }

  export type VendorDetailUpdateToOneWithWhereWithoutWorkDetailInput = {
    where?: VendorDetailWhereInput
    data: XOR<VendorDetailUpdateWithoutWorkDetailInput, VendorDetailUncheckedUpdateWithoutWorkDetailInput>
  }

  export type VendorDetailUpdateWithoutWorkDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorNameOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameThree?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstThree?: NullableStringFieldUpdateOperationsInput | string | null
    fromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    toDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorDetailUncheckedUpdateWithoutWorkDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorNameOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorNameThree?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstOne?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstTwo?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstThree?: NullableStringFieldUpdateOperationsInput | string | null
    fromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    toDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuotationCallLetterUpsertWithoutWorkDetailInput = {
    update: XOR<QuotationCallLetterUpdateWithoutWorkDetailInput, QuotationCallLetterUncheckedUpdateWithoutWorkDetailInput>
    create: XOR<QuotationCallLetterCreateWithoutWorkDetailInput, QuotationCallLetterUncheckedCreateWithoutWorkDetailInput>
    where?: QuotationCallLetterWhereInput
  }

  export type QuotationCallLetterUpdateToOneWithWhereWithoutWorkDetailInput = {
    where?: QuotationCallLetterWhereInput
    data: XOR<QuotationCallLetterUpdateWithoutWorkDetailInput, QuotationCallLetterUncheckedUpdateWithoutWorkDetailInput>
  }

  export type QuotationCallLetterUpdateWithoutWorkDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialItems?: MaterialItemUpdateManyWithoutQuotationCallLetterNestedInput
  }

  export type QuotationCallLetterUncheckedUpdateWithoutWorkDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materialItems?: MaterialItemUncheckedUpdateManyWithoutQuotationCallLetterNestedInput
  }

  export type WorkDetailCreateWithoutWorkDocumentsInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorDetails?: VendorDetailCreateNestedOneWithoutWorkDetailInput
    quotationCallLetter?: QuotationCallLetterCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailUncheckedCreateWithoutWorkDocumentsInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorDetails?: VendorDetailUncheckedCreateNestedOneWithoutWorkDetailInput
    quotationCallLetter?: QuotationCallLetterUncheckedCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailCreateOrConnectWithoutWorkDocumentsInput = {
    where: WorkDetailWhereUniqueInput
    create: XOR<WorkDetailCreateWithoutWorkDocumentsInput, WorkDetailUncheckedCreateWithoutWorkDocumentsInput>
  }

  export type WorkDetailUpsertWithoutWorkDocumentsInput = {
    update: XOR<WorkDetailUpdateWithoutWorkDocumentsInput, WorkDetailUncheckedUpdateWithoutWorkDocumentsInput>
    create: XOR<WorkDetailCreateWithoutWorkDocumentsInput, WorkDetailUncheckedCreateWithoutWorkDocumentsInput>
    where?: WorkDetailWhereInput
  }

  export type WorkDetailUpdateToOneWithWhereWithoutWorkDocumentsInput = {
    where?: WorkDetailWhereInput
    data: XOR<WorkDetailUpdateWithoutWorkDocumentsInput, WorkDetailUncheckedUpdateWithoutWorkDocumentsInput>
  }

  export type WorkDetailUpdateWithoutWorkDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorDetails?: VendorDetailUpdateOneWithoutWorkDetailNestedInput
    quotationCallLetter?: QuotationCallLetterUpdateOneWithoutWorkDetailNestedInput
  }

  export type WorkDetailUncheckedUpdateWithoutWorkDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorDetails?: VendorDetailUncheckedUpdateOneWithoutWorkDetailNestedInput
    quotationCallLetter?: QuotationCallLetterUncheckedUpdateOneWithoutWorkDetailNestedInput
  }

  export type WorkDetailCreateWithoutVendorDetailsInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDocuments?: WorkDocumentsCreateNestedOneWithoutWorkDetailInput
    quotationCallLetter?: QuotationCallLetterCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailUncheckedCreateWithoutVendorDetailsInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDocuments?: WorkDocumentsUncheckedCreateNestedOneWithoutWorkDetailInput
    quotationCallLetter?: QuotationCallLetterUncheckedCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailCreateOrConnectWithoutVendorDetailsInput = {
    where: WorkDetailWhereUniqueInput
    create: XOR<WorkDetailCreateWithoutVendorDetailsInput, WorkDetailUncheckedCreateWithoutVendorDetailsInput>
  }

  export type WorkDetailUpsertWithoutVendorDetailsInput = {
    update: XOR<WorkDetailUpdateWithoutVendorDetailsInput, WorkDetailUncheckedUpdateWithoutVendorDetailsInput>
    create: XOR<WorkDetailCreateWithoutVendorDetailsInput, WorkDetailUncheckedCreateWithoutVendorDetailsInput>
    where?: WorkDetailWhereInput
  }

  export type WorkDetailUpdateToOneWithWhereWithoutVendorDetailsInput = {
    where?: WorkDetailWhereInput
    data: XOR<WorkDetailUpdateWithoutVendorDetailsInput, WorkDetailUncheckedUpdateWithoutVendorDetailsInput>
  }

  export type WorkDetailUpdateWithoutVendorDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDocuments?: WorkDocumentsUpdateOneWithoutWorkDetailNestedInput
    quotationCallLetter?: QuotationCallLetterUpdateOneWithoutWorkDetailNestedInput
  }

  export type WorkDetailUncheckedUpdateWithoutVendorDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDocuments?: WorkDocumentsUncheckedUpdateOneWithoutWorkDetailNestedInput
    quotationCallLetter?: QuotationCallLetterUncheckedUpdateOneWithoutWorkDetailNestedInput
  }

  export type WorkDetailCreateWithoutQuotationCallLetterInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDocuments?: WorkDocumentsCreateNestedOneWithoutWorkDetailInput
    vendorDetails?: VendorDetailCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailUncheckedCreateWithoutQuotationCallLetterInput = {
    id?: string
    state: string
    district: string
    panchayat: string
    block: string
    workCode: string
    workName?: string | null
    workCategory?: string | null
    workType?: string | null
    workStatus?: string | null
    implementingAgency?: string | null
    estimatedCost?: Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: Decimal | DecimalJsLike | number | string | null
    sanctionYear?: string | null
    workStartDate?: Date | string | null
    financialYear?: string | null
    estimatedPersonDays?: string | null
    actualPersonDays?: string | null
    vendorName?: string | null
    vendorGstNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workDocuments?: WorkDocumentsUncheckedCreateNestedOneWithoutWorkDetailInput
    vendorDetails?: VendorDetailUncheckedCreateNestedOneWithoutWorkDetailInput
  }

  export type WorkDetailCreateOrConnectWithoutQuotationCallLetterInput = {
    where: WorkDetailWhereUniqueInput
    create: XOR<WorkDetailCreateWithoutQuotationCallLetterInput, WorkDetailUncheckedCreateWithoutQuotationCallLetterInput>
  }

  export type MaterialItemCreateWithoutQuotationCallLetterInput = {
    id?: string
    slNo: number
    materialName: string
    quantity: string
    price: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialItemUncheckedCreateWithoutQuotationCallLetterInput = {
    id?: string
    slNo: number
    materialName: string
    quantity: string
    price: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialItemCreateOrConnectWithoutQuotationCallLetterInput = {
    where: MaterialItemWhereUniqueInput
    create: XOR<MaterialItemCreateWithoutQuotationCallLetterInput, MaterialItemUncheckedCreateWithoutQuotationCallLetterInput>
  }

  export type MaterialItemCreateManyQuotationCallLetterInputEnvelope = {
    data: MaterialItemCreateManyQuotationCallLetterInput | MaterialItemCreateManyQuotationCallLetterInput[]
    skipDuplicates?: boolean
  }

  export type WorkDetailUpsertWithoutQuotationCallLetterInput = {
    update: XOR<WorkDetailUpdateWithoutQuotationCallLetterInput, WorkDetailUncheckedUpdateWithoutQuotationCallLetterInput>
    create: XOR<WorkDetailCreateWithoutQuotationCallLetterInput, WorkDetailUncheckedCreateWithoutQuotationCallLetterInput>
    where?: WorkDetailWhereInput
  }

  export type WorkDetailUpdateToOneWithWhereWithoutQuotationCallLetterInput = {
    where?: WorkDetailWhereInput
    data: XOR<WorkDetailUpdateWithoutQuotationCallLetterInput, WorkDetailUncheckedUpdateWithoutQuotationCallLetterInput>
  }

  export type WorkDetailUpdateWithoutQuotationCallLetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDocuments?: WorkDocumentsUpdateOneWithoutWorkDetailNestedInput
    vendorDetails?: VendorDetailUpdateOneWithoutWorkDetailNestedInput
  }

  export type WorkDetailUncheckedUpdateWithoutQuotationCallLetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    panchayat?: StringFieldUpdateOperationsInput | string
    block?: StringFieldUpdateOperationsInput | string
    workCode?: StringFieldUpdateOperationsInput | string
    workName?: NullableStringFieldUpdateOperationsInput | string | null
    workCategory?: NullableStringFieldUpdateOperationsInput | string | null
    workType?: NullableStringFieldUpdateOperationsInput | string | null
    workStatus?: NullableStringFieldUpdateOperationsInput | string | null
    implementingAgency?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualExpenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sanctionYear?: NullableStringFieldUpdateOperationsInput | string | null
    workStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    financialYear?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    actualPersonDays?: NullableStringFieldUpdateOperationsInput | string | null
    vendorName?: NullableStringFieldUpdateOperationsInput | string | null
    vendorGstNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDocuments?: WorkDocumentsUncheckedUpdateOneWithoutWorkDetailNestedInput
    vendorDetails?: VendorDetailUncheckedUpdateOneWithoutWorkDetailNestedInput
  }

  export type MaterialItemUpsertWithWhereUniqueWithoutQuotationCallLetterInput = {
    where: MaterialItemWhereUniqueInput
    update: XOR<MaterialItemUpdateWithoutQuotationCallLetterInput, MaterialItemUncheckedUpdateWithoutQuotationCallLetterInput>
    create: XOR<MaterialItemCreateWithoutQuotationCallLetterInput, MaterialItemUncheckedCreateWithoutQuotationCallLetterInput>
  }

  export type MaterialItemUpdateWithWhereUniqueWithoutQuotationCallLetterInput = {
    where: MaterialItemWhereUniqueInput
    data: XOR<MaterialItemUpdateWithoutQuotationCallLetterInput, MaterialItemUncheckedUpdateWithoutQuotationCallLetterInput>
  }

  export type MaterialItemUpdateManyWithWhereWithoutQuotationCallLetterInput = {
    where: MaterialItemScalarWhereInput
    data: XOR<MaterialItemUpdateManyMutationInput, MaterialItemUncheckedUpdateManyWithoutQuotationCallLetterInput>
  }

  export type MaterialItemScalarWhereInput = {
    AND?: MaterialItemScalarWhereInput | MaterialItemScalarWhereInput[]
    OR?: MaterialItemScalarWhereInput[]
    NOT?: MaterialItemScalarWhereInput | MaterialItemScalarWhereInput[]
    id?: StringFilter<"MaterialItem"> | string
    slNo?: IntFilter<"MaterialItem"> | number
    quotationCallLetterId?: StringFilter<"MaterialItem"> | string
    materialName?: StringFilter<"MaterialItem"> | string
    quantity?: StringFilter<"MaterialItem"> | string
    price?: StringFilter<"MaterialItem"> | string
    unit?: StringFilter<"MaterialItem"> | string
    createdAt?: DateTimeFilter<"MaterialItem"> | Date | string
    updatedAt?: DateTimeFilter<"MaterialItem"> | Date | string
  }

  export type QuotationCallLetterCreateWithoutMaterialItemsInput = {
    id?: string
    administrativeSanction: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workDetail: WorkDetailCreateNestedOneWithoutQuotationCallLetterInput
  }

  export type QuotationCallLetterUncheckedCreateWithoutMaterialItemsInput = {
    id?: string
    workDetailId: string
    administrativeSanction: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuotationCallLetterCreateOrConnectWithoutMaterialItemsInput = {
    where: QuotationCallLetterWhereUniqueInput
    create: XOR<QuotationCallLetterCreateWithoutMaterialItemsInput, QuotationCallLetterUncheckedCreateWithoutMaterialItemsInput>
  }

  export type QuotationCallLetterUpsertWithoutMaterialItemsInput = {
    update: XOR<QuotationCallLetterUpdateWithoutMaterialItemsInput, QuotationCallLetterUncheckedUpdateWithoutMaterialItemsInput>
    create: XOR<QuotationCallLetterCreateWithoutMaterialItemsInput, QuotationCallLetterUncheckedCreateWithoutMaterialItemsInput>
    where?: QuotationCallLetterWhereInput
  }

  export type QuotationCallLetterUpdateToOneWithWhereWithoutMaterialItemsInput = {
    where?: QuotationCallLetterWhereInput
    data: XOR<QuotationCallLetterUpdateWithoutMaterialItemsInput, QuotationCallLetterUncheckedUpdateWithoutMaterialItemsInput>
  }

  export type QuotationCallLetterUpdateWithoutMaterialItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workDetail?: WorkDetailUpdateOneRequiredWithoutQuotationCallLetterNestedInput
  }

  export type QuotationCallLetterUncheckedUpdateWithoutMaterialItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workDetailId?: StringFieldUpdateOperationsInput | string
    administrativeSanction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialItemCreateManyQuotationCallLetterInput = {
    id?: string
    slNo: number
    materialName: string
    quantity: string
    price: string
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaterialItemUpdateWithoutQuotationCallLetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    slNo?: IntFieldUpdateOperationsInput | number
    materialName?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialItemUncheckedUpdateWithoutQuotationCallLetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    slNo?: IntFieldUpdateOperationsInput | number
    materialName?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialItemUncheckedUpdateManyWithoutQuotationCallLetterInput = {
    id?: StringFieldUpdateOperationsInput | string
    slNo?: IntFieldUpdateOperationsInput | number
    materialName?: StringFieldUpdateOperationsInput | string
    quantity?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}