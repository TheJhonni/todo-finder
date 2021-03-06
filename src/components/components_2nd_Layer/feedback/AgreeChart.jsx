import { ResponsiveMarimekko } from "@nivo/marimekko";

export default function AgreeChart({ posts, myColor }) {
  // console.log(posts);
  const howmanyLikes = posts.filter((l) => l.likes.length > 0).map((p) => p);

  const howmanyDislikes = posts
    .filter((l) => l.dislikes.length > 0)
    .map((p) => p);

  const category = posts.map((_p) => _p.category);
  // console.log(howmanyLikes.length, howmanyDislikes.length, category);

  const AgreeData = [
    {
      statement: "Interesting",
      participation: howmanyLikes.length,
      Likes: howmanyLikes.length,
    },
    {
      statement: "Not interesting",
      participation: howmanyDislikes.length,
      Dislikes: howmanyDislikes.length,
    },
  ];
  return (
    <ResponsiveMarimekko
      data={AgreeData}
      id="statement"
      value="participation"
      dimensions={[
        {
          id: "Likes",
          value: "Likes",
        },
        {
          id: "Dislikes",
          value: "Dislikes",
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
            id: "Dislikes",
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
