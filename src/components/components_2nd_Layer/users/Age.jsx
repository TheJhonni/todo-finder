import { ResponsiveSunburst } from "@nivo/sunburst";

const data = {
  name: "nivo",
  color: "hsl(240, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(292, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(312, 70%, 50%)",
          children: [
            {
              name: "cchart",
              color: "hsl(324, 70%, 50%)",
              loc: 32162,
            },
            {
              name: "xAxis",
              color: "hsl(42, 70%, 50%)",
              loc: 182958,
            },
            {
              name: "yAxis",
              color: "hsl(256, 70%, 50%)",
              loc: 43036,
            },
            {
              name: "layers",
              color: "hsl(141, 70%, 50%)",
              loc: 108673,
            },
          ],
        },
        {
          name: "ppie",
          color: "hsl(314, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(186, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(201, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(262, 70%, 50%)",
                      loc: 104379,
                    },
                    {
                      name: "slices",
                      color: "hsl(351, 70%, 50%)",
                      loc: 32053,
                    },
                    {
                      name: "bbox",
                      color: "hsl(327, 70%, 50%)",
                      loc: 159245,
                    },
                  ],
                },
                {
                  name: "donut",
                  color: "hsl(286, 70%, 50%)",
                  loc: 113988,
                },
                {
                  name: "gauge",
                  color: "hsl(252, 70%, 50%)",
                  loc: 112198,
                },
              ],
            },
            {
              name: "legends",
              color: "hsl(119, 70%, 50%)",
              loc: 191346,
            },
          ],
        },
      ],
    },
    {
      name: "colors",
      color: "hsl(180, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(216, 70%, 50%)",
          loc: 180971,
        },
        {
          name: "hsl",
          color: "hsl(276, 70%, 50%)",
          loc: 106255,
        },
      ],
    },
    {
      name: "utils",
      color: "hsl(53, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(121, 70%, 50%)",
          loc: 134496,
        },
        {
          name: "resetClock",
          color: "hsl(223, 70%, 50%)",
          loc: 63191,
        },
        {
          name: "noop",
          color: "hsl(139, 70%, 50%)",
          loc: 51431,
        },
        {
          name: "tick",
          color: "hsl(240, 70%, 50%)",
          loc: 86118,
        },
        {
          name: "forceGC",
          color: "hsl(208, 70%, 50%)",
          loc: 88644,
        },
        {
          name: "stackTrace",
          color: "hsl(59, 70%, 50%)",
          loc: 87274,
        },
        {
          name: "dbg",
          color: "hsl(55, 70%, 50%)",
          loc: 199689,
        },
      ],
    },
    {
      name: "generators",
      color: "hsl(245, 70%, 50%)",
      children: [
        {
          name: "address",
          color: "hsl(201, 70%, 50%)",
          loc: 166155,
        },
        {
          name: "city",
          color: "hsl(345, 70%, 50%)",
          loc: 77478,
        },
        {
          name: "animal",
          color: "hsl(282, 70%, 50%)",
          loc: 195628,
        },
        {
          name: "movie",
          color: "hsl(180, 70%, 50%)",
          loc: 11978,
        },
        {
          name: "user",
          color: "hsl(43, 70%, 50%)",
          loc: 86836,
        },
      ],
    },
    {
      name: "set",
      color: "hsl(26, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(330, 70%, 50%)",
          loc: 145920,
        },
        {
          name: "intersect",
          color: "hsl(29, 70%, 50%)",
          loc: 42031,
        },
        {
          name: "merge",
          color: "hsl(350, 70%, 50%)",
          loc: 90489,
        },
        {
          name: "reverse",
          color: "hsl(300, 70%, 50%)",
          loc: 184397,
        },
        {
          name: "toArray",
          color: "hsl(220, 70%, 50%)",
          loc: 132740,
        },
        {
          name: "toObject",
          color: "hsl(266, 70%, 50%)",
          loc: 118613,
        },
        {
          name: "fromCSV",
          color: "hsl(303, 70%, 50%)",
          loc: 91870,
        },
        {
          name: "slice",
          color: "hsl(275, 70%, 50%)",
          loc: 137895,
        },
        {
          name: "append",
          color: "hsl(21, 70%, 50%)",
          loc: 148521,
        },
        {
          name: "prepend",
          color: "hsl(351, 70%, 50%)",
          loc: 41981,
        },
        {
          name: "shuffle",
          color: "hsl(355, 70%, 50%)",
          loc: 41474,
        },
        {
          name: "pick",
          color: "hsl(341, 70%, 50%)",
          loc: 28703,
        },
        {
          name: "plouc",
          color: "hsl(353, 70%, 50%)",
          loc: 92771,
        },
      ],
    },
    {
      name: "text",
      color: "hsl(48, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(24, 70%, 50%)",
          loc: 68016,
        },
        {
          name: "slugify",
          color: "hsl(19, 70%, 50%)",
          loc: 95703,
        },
        {
          name: "snakeCase",
          color: "hsl(291, 70%, 50%)",
          loc: 179943,
        },
        {
          name: "camelCase",
          color: "hsl(183, 70%, 50%)",
          loc: 26147,
        },
        {
          name: "repeat",
          color: "hsl(131, 70%, 50%)",
          loc: 182372,
        },
        {
          name: "padLeft",
          color: "hsl(251, 70%, 50%)",
          loc: 7838,
        },
        {
          name: "padRight",
          color: "hsl(117, 70%, 50%)",
          loc: 44999,
        },
        {
          name: "sanitize",
          color: "hsl(207, 70%, 50%)",
          loc: 177220,
        },
        {
          name: "ploucify",
          color: "hsl(43, 70%, 50%)",
          loc: 122541,
        },
      ],
    },
    {
      name: "misc",
      color: "hsl(248, 70%, 50%)",
      children: [
        {
          name: "greetings",
          color: "hsl(187, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(222, 70%, 50%)",
              loc: 118184,
            },
            {
              name: "HOWDY",
              color: "hsl(205, 70%, 50%)",
              loc: 3677,
            },
            {
              name: "aloha",
              color: "hsl(284, 70%, 50%)",
              loc: 167891,
            },
            {
              name: "AHOY",
              color: "hsl(105, 70%, 50%)",
              loc: 123513,
            },
          ],
        },
        {
          name: "other",
          color: "hsl(185, 70%, 50%)",
          loc: 174008,
        },
        {
          name: "path",
          color: "hsl(254, 70%, 50%)",
          children: [
            {
              name: "pathA",
              color: "hsl(2, 70%, 50%)",
              loc: 188648,
            },
            {
              name: "pathB",
              color: "hsl(85, 70%, 50%)",
              children: [
                {
                  name: "pathB1",
                  color: "hsl(43, 70%, 50%)",
                  loc: 33333,
                },
                {
                  name: "pathB2",
                  color: "hsl(309, 70%, 50%)",
                  loc: 30440,
                },
                {
                  name: "pathB3",
                  color: "hsl(82, 70%, 50%)",
                  loc: 133543,
                },
                {
                  name: "pathB4",
                  color: "hsl(193, 70%, 50%)",
                  loc: 65819,
                },
              ],
            },
            {
              name: "pathC",
              color: "hsl(120, 70%, 50%)",
              children: [
                {
                  name: "pathC1",
                  color: "hsl(347, 70%, 50%)",
                  loc: 173901,
                },
                {
                  name: "pathC2",
                  color: "hsl(34, 70%, 50%)",
                  loc: 129918,
                },
                {
                  name: "pathC3",
                  color: "hsl(234, 70%, 50%)",
                  loc: 69881,
                },
                {
                  name: "pathC4",
                  color: "hsl(175, 70%, 50%)",
                  loc: 51679,
                },
                {
                  name: "pathC5",
                  color: "hsl(99, 70%, 50%)",
                  loc: 189723,
                },
                {
                  name: "pathC6",
                  color: "hsl(278, 70%, 50%)",
                  loc: 182714,
                },
                {
                  name: "pathC7",
                  color: "hsl(344, 70%, 50%)",
                  loc: 77886,
                },
                {
                  name: "pathC8",
                  color: "hsl(166, 70%, 50%)",
                  loc: 52456,
                },
                {
                  name: "pathC9",
                  color: "hsl(350, 70%, 50%)",
                  loc: 150049,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
export default function Age() {
  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      id="name"
      value="loc"
      cornerRadius={2}
      borderColor={{ theme: "background" }}
      colors={{ scheme: "nivo" }}
      childColor={{
        from: "color",
        modifiers: [["brighter", 0.1]],
      }}
      enableArcLabels={true}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 1.4]],
      }}
    />
  );
}
