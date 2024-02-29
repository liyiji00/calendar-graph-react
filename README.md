# React Calendar Graph

<!-- todo: codesandbox url -->

A calendar graph react-component inspired by github's contribution graph. [**Try it out on CodeSandbox**]().

![md-1](https://llx.cool/calendar-graph/md-1.png)

<!-- todo: npmjs url -->

[See vue version]()

## Setup

Install the npm module:

```bash
npm install @liyiji00/calendar-graph-react
```

## Usage

Import the component & styles:

```ts
import CalendarGraph from "@liyiji00/calendar-graph-react"
// or
// import CalendarGraph from "@liyiji00/calendar-graph-vue"
import "@liyiji00/calendar-graph-react/dist/style.css"
```

## Props

```ts
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
  recordHandle?: (record: TypeRecord) => any
  /** When you hove `<rd/>` element, the result of running the function is displayed */
  renderTootip?: (record: TypeRecord) => string
}
```

## MIT License

Copyright &copy; 2024 [Yiji Li](https://liyiji00.github.io)

[See more LICENSE](./LICENSE)
