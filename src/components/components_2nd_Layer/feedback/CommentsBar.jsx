import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function CommentsBar({ posts, comments }) {
  const postNames = posts.map(({ title }) => title);

  const commentsRef1 = comments.filter((c) => c.postId === posts[0].id);
  const commentsRef2 = comments.filter((c) => c.postId === posts[1].id);
  const commentsRef3 = comments.filter((c) => c.postId === posts[2].id);
  const commentsRef4 = comments.filter((c) => c.postId === posts[3].id);
  const commentsRef5 = comments.filter((c) => c.postId === posts[4].id);

  const commentsData = [
    {
      post: postNames[0].slice(0, 7) + "...",
      Comments: commentsRef1.length,
      CommentsColor: "hsl(61, 70%, 50%)",
    },
    {
      post: postNames[1].slice(0, 7) + "...",
      Comments: commentsRef2.length,
      CommentsColor: "hsl(61, 70%, 50%)",
    },
    {
      post: postNames[2].slice(0, 7) + "...",
      Comments: commentsRef3.length,
      CommentsColor: "hsl(61, 70%, 50%)",
    },
    {
      post: postNames[3].slice(0, 7) + "...",
      Comments: commentsRef4.length,
      CommentsColor: "hsl(61, 70%, 50%)",
    },
    {
      post: postNames[4].slice(0, 7) + "...",
      Comments: commentsRef5.length,
      CommentsColor: "hsl(61, 70%, 50%)",
    },
  ];
  return (
    <ResponsiveBar
      data={commentsData}
      keys={["Comments"]}
      indexBy="post"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "post",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Comments",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in post: " + e.indexValue;
      }}
    />
  );
}
