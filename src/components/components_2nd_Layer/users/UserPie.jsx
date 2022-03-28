import { ResponsivePie } from "@nivo/pie";

export default function Pie({ userInfo }) {
  const pieData = [
    {
      id: "female",
      label: "female",
      value: userInfo && userInfo.filter((_e) => _e.gender === "Female").length,
      color: "#5FD38D",
    },
    {
      id: "Undefined",
      label: "Undefined",
      value:
        userInfo && userInfo.filter((_e) => _e.gender === "Undefined").length,
      color: "hsl(144, 56%, 60%)",
    },
    {
      id: "male",
      label: "male",
      value: userInfo && userInfo.filter((_e) => _e.gender === "Male").length,
      color: "hsl(186, 70%, 50%)",
    },
  ];

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
