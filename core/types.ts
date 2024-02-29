export type TypeColorKey = 0 | 1 | 2 | 3 | 4
export type TypeLevels = 0 | 1 | 2 | 3
export type TypeRecord = {
  /** The nth day of the year */
  days: number
  /** Count of the day */
  count: number
}
export type TypeProps = {
  year: number
  isDark?: boolean
  colors?: { [key in TypeColorKey]: string }
  levels?: { [key in TypeLevels]: number }
  /** Sort by days, need consecutive */
  records?: number[]
  /** The function runs when you click the `<rd/>` element */
  recordHandle?: (record: TypeRecord) => void
  /** When you hove `<rd/>` element, the result of running the function is displayed */
  renderTootip?: (record: TypeRecord) => string
}
