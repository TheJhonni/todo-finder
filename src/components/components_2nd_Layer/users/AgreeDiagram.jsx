import { ResponsiveChord } from "@nivo/chord";

const data = [
  [1773, 455, 1882, 1702, 687],
  [363, 1, 258, 132, 1294],
  [362, 1944, 427, 462, 146],
  [359, 173, 68, 1997, 473],
  [439, 755, 67, 89, 826],
];

export default function AgreeDiagram() {
  return (
    <ResponsiveChord
      data={data}
      keys={["Jane", "Davide", "John", "Raul", "Marcel"]}
      margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
      valueFormat=".2f"
      padAngle={0.02}
      innerRadiusRatio={0.96}
      innerRadiusOffset={0.02}
      inactiveArcOpacity={0.25}
      arcBorderColor={{
        from: "color",
        modifiers: [["darker", 0.6]],
      }}
      activeRibbonOpacity={0.75}
      inactiveRibbonOpacity={0.25}
      ribbonBorderColor={{
        from: "color",
        modifiers: [["darker", 0.6]],
      }}
      labelRotation={-90}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
      colors={{ scheme: "nivo" }}
      motionConfig="stiff"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 70,
          itemWidth: 80,
          itemHeight: 14,
          itemsSpacing: 0,
          itemTextColor: "#000000",
          itemDirection: "left-to-right",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#B39DDB",
              },
            },
          ],
        },
      ]}
    />
  );
}
