import { ResponsiveStream } from "@nivo/stream";

const data = [
  {
    Raoul: 10,
    Josiane: 199,
    Marcel: 200,
    René: 190,
    Paul: 46,
    Jacques: 17,
  },
  {
    Raoul: 110,
    Josiane: 187,
    Marcel: 48,
    René: 139,
    Paul: 160,
    Jacques: 29,
  },
  {
    Raoul: 49,
    Josiane: 199,
    Marcel: 88,
    René: 76,
    Paul: 83,
    Jacques: 173,
  },
  {
    Raoul: 36,
    Josiane: 79,
    Marcel: 13,
    René: 30,
    Paul: 24,
    Jacques: 179,
  },
  {
    Raoul: 197,
    Josiane: 146,
    Marcel: 166,
    René: 114,
    Paul: 138,
    Jacques: 115,
  },
  {
    Raoul: 103,
    Josiane: 140,
    Marcel: 110,
    René: 173,
    Paul: 139,
    Jacques: 78,
  },
  {
    Raoul: 92,
    Josiane: 36,
    Marcel: 131,
    René: 59,
    Paul: 103,
    Jacques: 60,
  },
  {
    Raoul: 195,
    Josiane: 66,
    Marcel: 146,
    René: 52,
    Paul: 198,
    Jacques: 22,
  },
  {
    Raoul: 112,
    Josiane: 17,
    Marcel: 62,
    René: 111,
    Paul: 181,
    Jacques: 99,
  },
];

export default function Streams() {
  return (
    <ResponsiveStream
      data={data}
      keys={["Raoul", "Josiane", "Marcel", "René", "Paul", "Jacques"]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
      }}
      enableGridX={true}
      enableGridY={false}
      offsetType="silhouette"
      colors={{ scheme: "nivo" }}
      fillOpacity={0.85}
      borderColor={{ theme: "background" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#2c998f",
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: "squares",
          type: "patternSquares",
          background: "inherit",
          color: "#e4c912",
          size: 6,
          padding: 2,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: {
            id: "Paul",
          },
          id: "dots",
        },
        {
          match: {
            id: "Marcel",
          },
          id: "squares",
        },
      ]}
      dotSize={8}
      dotColor={{ from: "color" }}
      dotBorderWidth={2}
      dotBorderColor={{
        from: "color",
        modifiers: [["darker", 0.7]],
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
              },
            },
          ],
        },
      ]}
    />
  );
}
