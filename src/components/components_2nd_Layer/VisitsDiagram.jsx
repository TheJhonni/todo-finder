import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    day: "Monday",
    visits: 59,
  },
  {
    day: "Tuesday",
    visits: 61,
  },
  {
    day: "Wednesday",
    visits: 55,
  },
  {
    day: "Thursday",
    visits: 78,
  },
  {
    day: "Friday",
    visits: 71,
  },
  {
    day: "Saturday",
    visits: 56,
  },
  {
    day: "Sunday",
    visits: 67,
  },
];

export default function VisitsDiagram() {
  return (
    <ResponsiveBar
      data={data}
      keys={["visits"]}
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
        legend: "visits",
        legendPosition: "middle",
        legendOffset: -40,
      }}
    />
  );
}
