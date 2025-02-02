// Promise.d.ts
// Type the onrejected arguments as unknown so they inferred rather then
// specified everywhere. This extends Cellule's work by typing then().
// See https://github.com/microsoft/TypeScript/issues/45602.
interface Promise<T> {
  then<TFul, TRej = never>(
    onfulfilled?: ((value: T) => TFul | PromiseLike<TFul>) | null,
    onrejected?: ((reason: unknown) => TRej | PromiseLike<TRej>) | null,
  ): Promise<TFul | TRej>

  catch<TRej = never>(onrejected?: ((reason: unknown) => TRej | PromiseLike<TRej>) | null): Promise<T | TRej>
}
