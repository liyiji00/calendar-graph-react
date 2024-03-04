import dayjs from "dayjs"
import React, { useEffect, useMemo, useState } from "react"

import {
  getDateByDays,
  dayFormat,
  getMouthFirstDay,
  getMouthColspan,
  showWeek,
} from "./utils/day"
import { classNames } from "./utils/tools"
import defaultConfig from "./defaultConfig.json"
import { TypeColorKey, TypeLevels, TypeProps, TypeRecord } from "./types"

export default function CalendarGraph(props: TypeProps) {
  const { recordHandle, renderTootip } = props

  function getLevel(count: number): TypeLevels {
    const levels = props.levels || defaultConfig.levels
    if (count > levels[3]) return 3
    if (count > levels[2]) return 2
    if (count > levels[1]) return 1
    return 0
  }
  function getFillColor(count: number) {
    return props.colors
      ? props.colors[getLevel(count)]
      : defaultConfig.colors[getLevel(count)][props.isDark ? "dark" : "light"]
  }
  function getPaletteColors() {
    const keys: TypeColorKey[] = [0, 1, 2, 3, 4]
    return props.colors
      ? keys.map(key => props.colors![key])
      : keys.map(
          key => defaultConfig.colors[key][props.isDark ? "dark" : "light"]
        )
  }
  function getMap(year: number) {
    const map = [] as TypeRecord[]
    const day = getMouthFirstDay(year, 0)

    map.push(
      ...new Array(day)
        .fill(null)
        .map((_, idx) => ({ count: 0, days: idx - day }))
    )

    const days = dayjs().year(year).endOf("y").dayOfYear()
    for (let i = 0; i < days; i++)
      map.push({
        days: i + 1,
        count: props.records?.[i] || 0,
      })
    return map
  }
  function getTootipText(record: TypeRecord) {
    return renderTootip
      ? renderTootip(record)
      : (record.count || "No") +
          " contributions on " +
          dayFormat(getDateByDays(props.year, record.days))
  }

  const [dataMap, setDataMap] = useState<{
    year: number
    map: TypeRecord[]
  }>({
    year: props.year,
    map: getMap(props.year),
  })
  useEffect(() => {
    if (props.year !== dataMap.year) {
      setDataMap({
        year: props.year,
        map: getMap(props.year),
      })
    }
  }, [props])

  const sortByWeek = useMemo(() => {
    const data = new Array(7).fill(null).map(_ => [] as TypeRecord[])
    dataMap.map.forEach((i, idx) => {
      data[idx % 7].push(i)
    })
    return data
  }, [dataMap.map])

  return (
    <div
      className={classNames([
        "calendar-graph-container",
        props.isDark ? "dark" : null,
      ])}
    >
      <table>
        <thead>
          <tr className="months">
            <td></td>
            {new Array(12).fill(null).map((_, idx) => (
              <td
                key={idx}
                colSpan={getMouthColspan(props.year, idx)}
              >
                {dayjs().month(idx).format("MMM")}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {new Array(7).fill(null).map((_, week) => (
            <tr key={week}>
              <td>{showWeek(dayjs().day(week).format("ddd"))}</td>
              {sortByWeek[week].map((record, idx) =>
                record.days > 0 ? (
                  <td
                    key={idx}
                    className="record"
                    attr-tip={getTootipText(record)}
                    style={{ backgroundColor: getFillColor(record.count) }}
                    onClick={() => {
                      if (recordHandle) {
                        recordHandle(record)
                      }
                    }}
                  />
                ) : (
                  <td
                    key={idx}
                    className="last-year"
                  />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <div className="palette">
          <span>Less</span>
          <div className="svgs">
            {getPaletteColors().map(color => (
              <svg
                width={10}
                height={10}
                key={color}
              >
                <rect
                  width={10}
                  height={10}
                  fill={color}
                />
              </svg>
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
