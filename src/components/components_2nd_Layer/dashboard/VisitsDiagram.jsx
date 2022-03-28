import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";

export default function VisitsDiagram({ userInfo }) {
  const createdDate = userInfo.map((u) => u.created);

  let currentTimestamp = Date.now(createdDate);

  const date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(currentTimestamp);

  console.log(createdDate, date);

  const data = [
    {
      day: "Monday",
      created: 2,
    },
    {
      day: "Tuesday",
      created: 1,
    },
    {
      day: "Wednesday",
      created: 0,
    },
    {
      day: "Thursday",
      created: 3,
    },
    {
      day: "Friday",
      created: 2,
    },
    {
      day: "Saturday",
      created: 1,
    },
    {
      day: "Sunday",
      created: 2,
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
        legend: "Created at",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}
