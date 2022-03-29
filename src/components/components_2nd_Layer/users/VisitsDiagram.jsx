import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { compareAsc, format } from "date-fns";

export default function VisitsDiagram({ userInfo }) {
  // console.log(userInfo);
  const createdDate = userInfo.map((u) =>
    new Date(u.created.seconds * 1000).toString()
  );

  let Monday = createdDate.filter((c) => c.includes("Mon")).map((cr) => cr);
  let Tuesday = createdDate.filter((c) => c.includes("Tue")).map((cr) => cr);
  let Wednesday = createdDate.filter((c) => c.includes("Wed")).map((cr) => cr);
  let Thursday = createdDate.filter((c) => c.includes("Thu")).map((cr) => cr);
  let Friday = createdDate.filter((c) => c.includes("Fri")).map((cr) => cr);
  let Saturday = createdDate.filter((c) => c.includes("Sat")).map((cr) => cr);
  let Sunday = createdDate.filter((c) => c.includes("Sun")).map((cr) => cr);

  // console.log(createdDate, Monday);
  const data = [
    {
      day: "Monday",
      created: Monday.length,
    },
    {
      day: "Tuesday",
      created: Tuesday.length,
    },
    {
      day: "Wednesday",
      created: Wednesday.length,
    },
    {
      day: "Thursday",
      created: Thursday.length,
    },
    {
      day: "Friday",
      created: Friday.length,
    },
    {
      day: "Saturday",
      created: Saturday.length,
    },
    {
      day: "Sunday",
      created: Sunday.length,
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["created"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#1E667C"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "How many",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}
