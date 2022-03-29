import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

export default function MyResponsiveAreaBump({ posts, comments }) {
  const postNames = posts.map(({ title }) => title);

  const commentsRef1 = comments.filter((c) => c.postId === posts[0].id);
  const commentsRef2 = comments.filter((c) => c.postId === posts[1].id);
  const commentsRef3 = comments.filter((c) => c.postId === posts[2].id);
  const commentsRef4 = comments.filter((c) => c.postId === posts[3].id);

  const GenericData = [
    {
      id: postNames[0],
      data: [
        {
          x: "Likes",
          y: posts[0].likes.length,
        },
        {
          x: "Dislikes",
          y: posts[0].dislikes.length,
        },
        {
          x: "Comments",
          y: commentsRef1.length,
        },
      ],
    },
    {
      id: postNames[1],
      data: [
        {
          x: "Likes",
          y: posts[1].likes.length,
        },
        {
          x: "Dislikes",
          y: posts[1].dislikes.length,
        },
        {
          x: "Comments",
          y: commentsRef2.length,
        },
      ],
    },
    {
      id: postNames[2],
      data: [
        {
          x: "Likes",
          y: posts[2].likes.length,
        },
        {
          x: "Dislikes",
          y: posts[2].dislikes.length,
        },
        {
          x: "Comments",
          y: commentsRef3.length,
        },
      ],
    },
    {
      id: postNames[3],
      data: [
        {
          x: "Likes",
          y: posts[3].likes.length,
        },
        {
          x: "Dislikes",
          y: posts[3].dislikes.length,
        },
        {
          x: "Comments",
          y: commentsRef4.length,
        },
      ],
    },
  ];
  return (
    <ResponsiveRadialBar
      data={GenericData}
      valueFormat=">-.2f"
      padding={0.4}
      cornerRadius={2}
      margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 80,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: "left-to-right",
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
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
