import ical from "ical";


export const xpto = async () => {
  const currentDate = new Date();

  // const ics = await fetch(
  //   "/api/ical/pasdedeux.pt%40gmail.com/public/basic.ics",
  //   {
  //     mode: "cors",
  //   }
  // );


  const ics = await fetch("/mock/basic.ics");
  const data = ical.parseICS(await ics.text());
  const xpto = Object.entries(data).map(([_key, value]) => value).filter(item => item.type === "VEVENT" && item.start && item?.start > currentDate)


  const qq = xpto.sort((firstItem, secondItem) => firstItem.start - secondItem.start)

    console.info(qq[0])

    return qq
};
