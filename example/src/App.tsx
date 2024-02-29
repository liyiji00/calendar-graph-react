import dayjs from "dayjs";
import { useState } from "react";

import CalendarGraph from "@lib/core";
import { dF, getDateByDays, getRandomRecords } from "@lib/core/utils";

export default () => {
  const thisYear = new Date().getFullYear();

  const [year, setYear] = useState(thisYear);
  const FirstDay = getDateByDays(year, 1);
  const EndDay = getDateByDays(year, getDateByDays(year));

  return (
    <div>
      <h2>
        {dF(FirstDay)} - {dF(EndDay)}
      </h2>
      <div>
        {/* <select v-model="year">
        <option v-for="_y in 4" :value="(thisYear-_y+1)">
          {{ thisYear-_y+1 }}
        </option>
      </select> */}
        <select
          defaultValue={thisYear}
          onChange={(e) => {
            setYear(+e.target.value);
          }}
        >
          {new Array(4).fill(null).map((_, idx) => (
            <option
              key={idx}
              value={thisYear - idx}
            >
              {thisYear - idx}
            </option>
          ))}
        </select>
      </div>
      <CalendarGraph
        year={year}
        records={getRandomRecords(year)}
      />
      <CalendarGraph
        isDark
        year={year}
        records={getRandomRecords(year)}
      />
    </div>
  );
};
