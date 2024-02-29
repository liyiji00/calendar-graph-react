import dayjs from "dayjs"

export function classNames(names: any[]) {
  return names.filter(i => i).join(" ")
}

export function getRandomRecords(year: number) {
  const days = dayjs().year(year).endOf("y").dayOfYear()
  function getRandom() {
    return Math.max(0, (Math.random() * 20 - Math.random() * 5) >> 0)
  }
  return new Array(days).fill(null).map(_ => getRandom())
}
