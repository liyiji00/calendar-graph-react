# React Calendar Graph

A calendar graph react-component inspired by github's contribution graph. [**Try it out on CodeSandbox**](https://codesandbox.io/p/sandbox/demo-react-calendar-graph-5r5uql).

![md-1](https://llx.cool/calendar-graph/md-1.png)

[See vue version](https://www.npmjs.com/package/vue-calendar-graph)

## Setup

Install the npm module with yarn or pnpm:

```bash
pnpm add react-calendar-graph
```

## Usage

Import the component:

```ts
import CalendarGraph from "react-calendar-graph";
```

Import styles. You can directly import from the module, which requires a CSS loader:

```ts
import "react-calendar-graph/dist/style.css";
```

## Props

```ts
type TypeColorKey = 0 | 1 | 2 | 3 | 4;
type TypeLevels = 0 | 1 | 2 | 3;
type TypeRecord = {
  /** The nth day of the year */
  days: number;
  /** Count of the day */
  count: number;
};
type TypeProps = {
  year: number;
  isDark?: boolean;
  colors?: { [key in TypeColorKey]: string };
  levels?: { [key in TypeLevels]: number };
  /** Sort by days, need consecutive */
  records?: number[];
  /** The function runs when you click the `<rd/>` element */
  recordHandle?: (record: TypeRecord) => any;
  /** When you hove `<rd/>` element, the result of running the function is displayed */
  renderTootip?: (record: TypeRecord) => string;
};
```

## MIT License

Copyright &copy; 2023 [Yiji Li](https://liyiji00.github.io)

[See more LICENSE](https://github.com/liyiji00/calendar-graph-react/blob/main/LICENSE)
