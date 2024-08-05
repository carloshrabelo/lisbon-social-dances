// src/hooks/useEvent.ts
import ical, { type CalendarComponent } from "ical"
import useFetch from "../hook/useFetch"

interface EventState {
  data: CalendarComponent[] | null
  isLoading: boolean
  error: string | null
}

export const transformData = async (val: string): Promise<CalendarComponent[]> => {
  const currentDate = new Date()
  const data = ical.parseICS(val)
  
  return Object.values(data)
    .filter((item)=> item.type === "VEVENT" && item.start instanceof Date && item.start > currentDate)
    .sort((firstItem, secondItem) => firstItem.start.getTime() - secondItem.start.getTime())
}


export const useEvent = () => {
  const { data, ...mod } = useFetch<CalendarComponent[]>("/mock/basic.ics", { type: 'text' }, transformData)
  // console.info(data)
  return { ...mod, data }
}

export default useEvent
