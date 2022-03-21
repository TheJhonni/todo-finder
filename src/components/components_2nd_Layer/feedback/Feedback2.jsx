import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(249, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 46,
      },
      {
        x: "helicopter",
        y: 113,
      },
      {
        x: "boat",
        y: 164,
      },
      {
        x: "train",
        y: 112,
      },
      {
        x: "subway",
        y: 20,
      },
      {
        x: "bus",
        y: 51,
      },
      {
        x: "car",
        y: 230,
      },
      {
        x: "moto",
        y: 22,
      },
      {
        x: "bicycle",
        y: 116,
      },
      {
        x: "horse",
        y: 70,
      },
      {
        x: "skateboard",
        y: 297,
      },
      {
        x: "others",
        y: 19,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(327, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 34,
      },
      {
        x: "helicopter",
        y: 159,
      },
      {
        x: "boat",
        y: 49,
      },
      {
        x: "train",
        y: 174,
      },
      {
        x: "subway",
        y: 51,
      },
      {
        x: "bus",
        y: 156,
      },
      {
        x: "car",
        y: 153,
      },
      {
        x: "moto",
        y: 24,
      },
      {
        x: "bicycle",
        y: 24,
      },
      {
        x: "horse",
        y: 6,
      },
      {
        x: "skateboard",
        y: 223,
      },
      {
        x: "others",
        y: 152,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(218, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 30,
      },
      {
        x: "helicopter",
        y: 101,
      },
      {
        x: "boat",
        y: 61,
      },
      {
        x: "train",
        y: 47,
      },
      {
        x: "subway",
        y: 271,
      },
      {
        x: "bus",
        y: 147,
      },
      {
        x: "car",
        y: 179,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 163,
      },
      {
        x: "horse",
        y: 66,
      },
      {
        x: "skateboard",
        y: 298,
      },
      {
        x: "others",
        y: 181,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(221, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 228,
      },
      {
        x: "helicopter",
        y: 208,
      },
      {
        x: "boat",
        y: 30,
      },
      {
        x: "train",
        y: 213,
      },
      {
        x: "subway",
        y: 3,
      },
      {
        x: "bus",
        y: 121,
      },
      {
        x: "car",
        y: 196,
      },
      {
        x: "moto",
        y: 37,
      },
      {
        x: "bicycle",
        y: 152,
      },
      {
        x: "horse",
        y: 109,
      },
      {
        x: "skateboard",
        y: 7,
      },
      {
        x: "others",
        y: 193,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(144, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 83,
      },
      {
        x: "helicopter",
        y: 19,
      },
      {
        x: "boat",
        y: 242,
      },
      {
        x: "train",
        y: 52,
      },
      {
        x: "subway",
        y: 136,
      },
      {
        x: "bus",
        y: 265,
      },
      {
        x: "car",
        y: 37,
      },
      {
        x: "moto",
        y: 242,
      },
      {
        x: "bicycle",
        y: 191,
      },
      {
        x: "horse",
        y: 145,
      },
      {
        x: "skateboard",
        y: 30,
      },
      {
        x: "others",
        y: 30,
      },
    ],
  },
];
export default function Feedback2() {
  return (
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
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
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
  );
}
