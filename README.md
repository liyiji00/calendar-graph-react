# Calendar Graph React

A calendar graph react-component inspired by github's contribution graph. [**Try it out on CodeSandbox**](https://codesandbox.io/p/devbox/demo-calendar-graph-react-gx3gkg).

![md-1](https://llx.cool/calendar-graph/md-1.png)

## Vue version

[Github](https://github.com/liyiji00/calendar-graph-vue)

## Setup

Install the npm module:

```bash
npm install @liyiji00/calendar-graph-react
```

## Usage

Import the component & styles:

```tsx
import CalendarGraph from "@liyiji00/calendar-graph-react"
import { getRandomRecords } from "@liyiji00/calendar-graph-react/dist/utils"
import "@liyiji00/calendar-graph-react/dist/style.css"

function App() {
  const thisYear = new Date().getFullYear()
  const records = getRandomRecords(thisYear)

  return (
    <CalendarGraph
      year={thisYear}
      records={records}
    />
  )
}
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
