import ical from "ical";
import { create } from "zustand"


export const parseData = async (val: string) => {
  const currentDate = new Date();
  const data = ical.parseICS(val);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const xpto = Object.entries(data).map(([_key, value]) => value).filter(item => item.type === "VEVENT" && item.start && item?.start > currentDate)


  const qq = xpto.sort((firstItem, secondItem ) =>  Number(firstItem.start) - Number(secondItem.start))

    return qq
};


export const useFishStore = create((set) => ({
  data: [],
  fetch: async () => {
    const response = await fetch("/mock/basic.ics")
    set({ data: await parseData(await response.text()) })
  },
}))

export default useFishStore

