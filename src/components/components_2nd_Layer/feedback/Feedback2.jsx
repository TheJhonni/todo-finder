import { ResponsiveLine } from "@nivo/line";

export default function Feedback2({ posts }) {
  // console.log(posts);
  const title = posts.map((p) => p.title);
  const data = [
    {
      id: title[0].slice(0, 8) + "...",
      color: "hsl(249, 70%, 50%)",
      data: [
        {
          x: "January",
          y: 10,
        },
        {
          x: "February",
          y: 13,
        },
        {
          x: "March",
          y: 54,
        },
        {
          x: "April",
          y: 112,
        },
      ],
    },
    {
      id: title[1].slice(0, 8) + "...",
      color: "hsl(327, 70%, 50%)",
      data: [
        {
          x: "January",
          y: 13,
        },
        {
          x: "February",
          y: 6,
        },
        {
          x: "March",
          y: 49,
        },
        {
          x: "April",
          y: 174,
        },
      ],
    },
    {
      id: title[2].slice(0, 8) + "...",
      color: "hsl(218, 70%, 50%)",
      data: [
        {
          x: "January",
          y: 30,
        },
        {
          x: "February",
          y: 101,
        },
        {
          x: "March",
          y: 61,
        },
        {
          x: "April",
          y: 47,
        },
      ],
    },
    {
      id: title[3].slice(0, 8) + "...",
      color: "hsl(221, 70%, 50%)",
      data: [
        {
          x: "January",
          y: 28,
        },
        {
          x: "February",
          y: 35,
        },
        {
          x: "March",
          y: 30,
        },
        {
          x: "April",
          y: 213,
        },
      ],
    },
    {
      id: title[4].slice(0, 8) + "...",
      color: "hsl(144, 70%, 50%)",
      data: [
        {
          x: "January",
          y: 24,
        },
        {
          x: "February",
          y: 19,
        },
        {
          x: "March",
          y: 242,
        },
        {
          x: "April",
          y: 52,
        },
      ],
    },
  ];
  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Months",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "How many",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
}
