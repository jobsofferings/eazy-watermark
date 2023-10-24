export = OPUtils
export as namespace OPUtils

declare namespace OPUtils {
  type Key = string | number

  type StringMap = Map<string, string>

  type InputChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => void

  type Maybe<T> = null | undefined | T

  type Record<K extends string | number | symbol = any, T = any> = {
    [P in K]: T
  }
}
