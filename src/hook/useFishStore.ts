import ical from "ical";
import { create } from "zustand"


export const parseData = async (val) => {
  console.info('parseData')
  const currentDate = new Date();
  const data = ical.parseICS(val);
  const xpto = Object.entries(data).map(([_key, value]) => value).filter(item => item.type === "VEVENT" && item.start && item?.start > currentDate)


  const qq = xpto.sort((firstItem, secondItem) => firstItem.start - secondItem.start)

    console.info(qq[0])
    console.info('parseData')

    return qq
};


export const useFishStore = create((set) => ({
  data: [],
  fetch: async () => {
    const response = await fetch("/mock/basic.ics")
    set({ data: 'await parseData(await response.text())' })
  },
}))

export default useFishStore

