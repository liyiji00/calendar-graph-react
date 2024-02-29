import React, { useMemo, useState } from "react"
import CalendarGraph, {
  dayFormat,
  getDateByDays,
  getRandomRecords,
} from "@lib/core"

export default () => {
  const thisYear = new Date().getFullYear()

  const [year, setYear] = useState(thisYear)
  const FirstDay = getDateByDays(year, 1)
  const EndDay = getDateByDays(year, getDateByDays(year))
  const records = useMemo(() => {
    return getRandomRecords(year)
  }, [year])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <h2 style={{ margin: 0 }}>
          {dayFormat(FirstDay)} - {dayFormat(EndDay)}
        </h2>
        <button onClick={() => setYear(year - 1)}>prev year</button>
        <button onClick={() => setYear(year + 1)}>next year</button>
      </div>

      <CalendarGraph
        year={year}
        records={records}
      />
      <CalendarGraph
        isDark
        year={year}
        records={records}
      />
    </div>
  )
}
