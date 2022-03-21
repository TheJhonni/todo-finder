import { ResponsivePie } from "@nivo/pie";

const pieData = [
  {
    id: "female",
    label: "female",
    value: 195,
    color: "hsl(65, 70%, 50%)",
  },
  {
    id: "not registered",
    label: "not registered",
    value: 419,
    color: "hsl(90, 70%, 50%)",
  },
  {
    id: "unknown",
    label: "unknown",
    value: 407,
    color: "hsl(103, 70%, 50%)",
  },
  {
    id: "male",
    label: "male",
    value: 474,
    color: "hsl(186, 70%, 50%)",
  },
  {
    id: "admins",
    label: "admins",
    value: 71,
    color: "hsl(104, 70%, 50%)",
  },
];

export default function Pie() {
  return (
    <ResponsivePie
      data={pieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#000"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    />
  );
}
