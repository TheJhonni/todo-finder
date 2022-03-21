// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/marimekko
import { ResponsiveMarimekko } from "@nivo/marimekko";
const data = [
  {
    statement: "it's good",
    participation: 32,
    stronglyAgree: 22,
    agree: 20,
    disagree: 3,
    stronglyDisagree: 8,
  },
  {
    statement: "it's sweet",
    participation: 9,
    stronglyAgree: 7,
    agree: 6,
    disagree: 32,
    stronglyDisagree: 24,
  },
  {
    statement: "it's spicy",
    participation: 13,
    stronglyAgree: 30,
    agree: 9,
    disagree: 30,
    stronglyDisagree: 32,
  },
  {
    statement: "worth eating",
    participation: 7,
    stronglyAgree: 27,
    agree: 18,
    disagree: 14,
    stronglyDisagree: 5,
  },
  {
    statement: "worth buying",
    participation: 29,
    stronglyAgree: 1,
    agree: 21,
    disagree: 10,
    stronglyDisagree: 13,
  },
];

export default function AgreeChart() {
  return (
    <ResponsiveMarimekko
      data={data}
      id="statement"
      value="participation"
      dimensions={[
        {
          id: "disagree strongly",
          value: "stronglyDisagree",
        },
        {
          id: "disagree",
          value: "disagree",
        },
        {
          id: "agree",
          value: "agree",
        },
        {
          id: "agree strongly",
          value: "stronglyAgree",
        },
      ]}
      innerPadding={9}
      axisTop={null}
      axisRight={{
        orient: "right",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 0,
      }}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "participation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "opinions",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
      colors={{ scheme: "spectral" }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "rgba(0, 0, 0, 0)",
          color: "inherit",
          rotation: -45,
          lineWidth: 4,
          spacing: 8,
        },
      ]}
      fill={[
        {
          match: {
            id: "agree strongly",
          },
          id: "lines",
        },
        {
          match: {
            id: "disagree strongly",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 80,
          itemsSpacing: 0,
          itemWidth: 140,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "right-to-left",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "square",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
}
