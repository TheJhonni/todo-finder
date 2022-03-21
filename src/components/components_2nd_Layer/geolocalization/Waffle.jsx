import { ResponsiveWaffle } from "@nivo/waffle";

const data = [
  {
    id: "men",
    label: "men",
    value: 1.8544489787840908,
    color: "#468df3",
  },
  {
    id: "women",
    label: "women",
    value: 8.514963469500984,
    color: "#ba72ff",
  },
  {
    id: "children",
    label: "children",
    value: 14.710533744107344,
    color: "#a1cfff",
  },
];

export default function Waffle() {
  return (
    <ResponsiveWaffle
      data={data}
      total={100}
      rows={18}
      columns={14}
      margin={{ top: 120, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.3]],
      }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          justify: false,
          translateX: -100,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          itemTextColor: "#fff",
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
                itemBackground: "#f7fafb",
              },
            },
          ],
        },
      ]}
    />
  );
}
