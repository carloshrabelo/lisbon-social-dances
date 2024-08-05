export type Event = {
  kind: string,
  etag: string,
  id: string,
  status: string,
  htmlLink: string,
  created: string,
  updated: string,
  summary: string,
  description: string,
  location: string,
  creator: {
    email: string,
  },
  organizer: {
    email: string,
    self: true
  },
  start: Date,
  end: Date,
  transparency: string,
  iCalUID: string,
  sequence: number,
  eventType: string,
}