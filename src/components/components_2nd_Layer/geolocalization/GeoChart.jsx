// import { ResponsiveChoropleth } from "@nivo/geo";
// import geoFile from "../../../assets/geoFile.json";

// const data = [
//   {
//     id: "AFG",
//     value: 3886,
//   },
//   {
//     id: "AGO",
//     value: 835436,
//   },
//   {
//     id: "ALB",
//     value: 987512,
//   },
//   {
//     id: "ARE",
//     value: 700875,
//   },
//   {
//     id: "ARG",
//     value: 183485,
//   },
//   {
//     id: "ARM",
//     value: 603891,
//   },
//   {
//     id: "ATA",
//     value: 39728,
//   },
//   {
//     id: "ATF",
//     value: 795373,
//   },
//   {
//     id: "AUT",
//     value: 393105,
//   },
//   {
//     id: "AZE",
//     value: 635666,
//   },
//   {
//     id: "BDI",
//     value: 211933,
//   },
//   {
//     id: "BEL",
//     value: 465624,
//   },
//   {
//     id: "BEN",
//     value: 56755,
//   },
//   {
//     id: "BFA",
//     value: 271327,
//   },
//   {
//     id: "BGD",
//     value: 567067,
//   },
//   {
//     id: "BGR",
//     value: 195548,
//   },
//   {
//     id: "BHS",
//     value: 393137,
//   },
//   {
//     id: "BIH",
//     value: 484113,
//   },
//   {
//     id: "BLR",
//     value: 590388,
//   },
//   {
//     id: "BLZ",
//     value: 518232,
//   },
//   {
//     id: "BOL",
//     value: 106501,
//   },
//   {
//     id: "BRN",
//     value: 700532,
//   },
//   {
//     id: "BTN",
//     value: 304036,
//   },
//   {
//     id: "BWA",
//     value: 28357,
//   },
//   {
//     id: "CAF",
//     value: 801028,
//   },
//   {
//     id: "CAN",
//     value: 456709,
//   },
//   {
//     id: "CHE",
//     value: 330389,
//   },
//   {
//     id: "CHL",
//     value: 662736,
//   },
//   {
//     id: "CHN",
//     value: 657301,
//   },
//   {
//     id: "CIV",
//     value: 790829,
//   },
//   {
//     id: "CMR",
//     value: 470021,
//   },
//   {
//     id: "COG",
//     value: 996821,
//   },
//   {
//     id: "COL",
//     value: 482399,
//   },
//   {
//     id: "CRI",
//     value: 126814,
//   },
//   {
//     id: "CUB",
//     value: 84985,
//   },
//   {
//     id: "-99",
//     value: 772538,
//   },
//   {
//     id: "CYP",
//     value: 759424,
//   },
//   {
//     id: "CZE",
//     value: 412958,
//   },
//   {
//     id: "DEU",
//     value: 109903,
//   },
//   {
//     id: "DJI",
//     value: 979275,
//   },
//   {
//     id: "DNK",
//     value: 142584,
//   },
//   {
//     id: "DOM",
//     value: 29028,
//   },
//   {
//     id: "DZA",
//     value: 797528,
//   },
//   {
//     id: "ECU",
//     value: 65663,
//   },
//   {
//     id: "EGY",
//     value: 156534,
//   },
//   {
//     id: "ERI",
//     value: 404690,
//   },
//   {
//     id: "ESP",
//     value: 219545,
//   },
//   {
//     id: "EST",
//     value: 635523,
//   },
//   {
//     id: "ETH",
//     value: 938811,
//   },
//   {
//     id: "FIN",
//     value: 90321,
//   },
//   {
//     id: "FJI",
//     value: 310497,
//   },
//   {
//     id: "FLK",
//     value: 899747,
//   },
//   {
//     id: "FRA",
//     value: 170349,
//   },
//   {
//     id: "GAB",
//     value: 688301,
//   },
//   {
//     id: "GBR",
//     value: 328056,
//   },
//   {
//     id: "GEO",
//     value: 278042,
//   },
//   {
//     id: "GHA",
//     value: 766448,
//   },
//   {
//     id: "GIN",
//     value: 229211,
//   },
//   {
//     id: "GMB",
//     value: 700715,
//   },
//   {
//     id: "GNB",
//     value: 70970,
//   },
//   {
//     id: "GNQ",
//     value: 847849,
//   },
//   {
//     id: "GRC",
//     value: 860057,
//   },
//   {
//     id: "GTM",
//     value: 939413,
//   },
//   {
//     id: "GUY",
//     value: 736511,
//   },
//   {
//     id: "HND",
//     value: 71436,
//   },
//   {
//     id: "HRV",
//     value: 641664,
//   },
//   {
//     id: "HTI",
//     value: 132419,
//   },
//   {
//     id: "HUN",
//     value: 462424,
//   },
//   {
//     id: "IDN",
//     value: 729562,
//   },
//   {
//     id: "IND",
//     value: 109356,
//   },
//   {
//     id: "IRL",
//     value: 383260,
//   },
//   {
//     id: "IRN",
//     value: 568153,
//   },
//   {
//     id: "IRQ",
//     value: 679648,
//   },
//   {
//     id: "ISL",
//     value: 571679,
//   },
//   {
//     id: "ISR",
//     value: 995055,
//   },
//   {
//     id: "ITA",
//     value: 858374,
//   },
//   {
//     id: "JAM",
//     value: 496985,
//   },
//   {
//     id: "JOR",
//     value: 131133,
//   },
//   {
//     id: "JPN",
//     value: 72773,
//   },
//   {
//     id: "KAZ",
//     value: 117036,
//   },
//   {
//     id: "KEN",
//     value: 524702,
//   },
//   {
//     id: "KGZ",
//     value: 748807,
//   },
//   {
//     id: "KHM",
//     value: 203810,
//   },
//   {
//     id: "OSA",
//     value: 215084,
//   },
//   {
//     id: "KWT",
//     value: 832105,
//   },
//   {
//     id: "LAO",
//     value: 386844,
//   },
//   {
//     id: "LBN",
//     value: 993297,
//   },
//   {
//     id: "LBR",
//     value: 492554,
//   },
//   {
//     id: "LBY",
//     value: 993241,
//   },
//   {
//     id: "LKA",
//     value: 229689,
//   },
//   {
//     id: "LSO",
//     value: 489570,
//   },
//   {
//     id: "LTU",
//     value: 745227,
//   },
//   {
//     id: "LUX",
//     value: 375055,
//   },
//   {
//     id: "LVA",
//     value: 825671,
//   },
//   {
//     id: "MAR",
//     value: 244916,
//   },
//   {
//     id: "MDA",
//     value: 835901,
//   },
//   {
//     id: "MDG",
//     value: 607155,
//   },
//   {
//     id: "MEX",
//     value: 499967,
//   },
//   {
//     id: "MKD",
//     value: 358942,
//   },
//   {
//     id: "MLI",
//     value: 965459,
//   },
//   {
//     id: "MMR",
//     value: 634849,
//   },
//   {
//     id: "MNE",
//     value: 571289,
//   },
//   {
//     id: "MNG",
//     value: 22471,
//   },
//   {
//     id: "MOZ",
//     value: 635482,
//   },
//   {
//     id: "MRT",
//     value: 537589,
//   },
//   {
//     id: "MWI",
//     value: 804515,
//   },
//   {
//     id: "MYS",
//     value: 187192,
//   },
//   {
//     id: "NAM",
//     value: 742542,
//   },
//   {
//     id: "NCL",
//     value: 55877,
//   },
//   {
//     id: "NER",
//     value: 695139,
//   },
//   {
//     id: "NGA",
//     value: 330907,
//   },
//   {
//     id: "NIC",
//     value: 830513,
//   },
//   {
//     id: "NLD",
//     value: 340805,
//   },
//   {
//     id: "NOR",
//     value: 775226,
//   },
//   {
//     id: "NPL",
//     value: 401626,
//   },
//   {
//     id: "NZL",
//     value: 606655,
//   },
//   {
//     id: "OMN",
//     value: 951478,
//   },
//   {
//     id: "PAK",
//     value: 960093,
//   },
//   {
//     id: "PAN",
//     value: 732058,
//   },
//   {
//     id: "PER",
//     value: 974655,
//   },
//   {
//     id: "PHL",
//     value: 198203,
//   },
//   {
//     id: "PNG",
//     value: 421861,
//   },
//   {
//     id: "POL",
//     value: 933156,
//   },
//   {
//     id: "PRI",
//     value: 766570,
//   },
//   {
//     id: "PRT",
//     value: 779435,
//   },
//   {
//     id: "PRY",
//     value: 188826,
//   },
//   {
//     id: "QAT",
//     value: 588945,
//   },
//   {
//     id: "ROU",
//     value: 355731,
//   },
//   {
//     id: "RUS",
//     value: 617999,
//   },
//   {
//     id: "RWA",
//     value: 611990,
//   },
//   {
//     id: "ESH",
//     value: 576796,
//   },
//   {
//     id: "SAU",
//     value: 178400,
//   },
//   {
//     id: "SDN",
//     value: 515520,
//   },
//   {
//     id: "SDS",
//     value: 892493,
//   },
//   {
//     id: "SEN",
//     value: 749045,
//   },
//   {
//     id: "SLB",
//     value: 494479,
//   },
//   {
//     id: "SLE",
//     value: 264446,
//   },
//   {
//     id: "SLV",
//     value: 528072,
//   },
//   {
//     id: "ABV",
//     value: 566870,
//   },
//   {
//     id: "SOM",
//     value: 362916,
//   },
//   {
//     id: "SRB",
//     value: 737376,
//   },
//   {
//     id: "SUR",
//     value: 479064,
//   },
//   {
//     id: "SVK",
//     value: 144019,
//   },
//   {
//     id: "SVN",
//     value: 45069,
//   },
//   {
//     id: "SWZ",
//     value: 613786,
//   },
//   {
//     id: "SYR",
//     value: 812339,
//   },
//   {
//     id: "TCD",
//     value: 493919,
//   },
//   {
//     id: "TGO",
//     value: 209657,
//   },
//   {
//     id: "THA",
//     value: 566945,
//   },
//   {
//     id: "TJK",
//     value: 254288,
//   },
//   {
//     id: "TKM",
//     value: 926087,
//   },
//   {
//     id: "TLS",
//     value: 313451,
//   },
//   {
//     id: "TTO",
//     value: 483631,
//   },
//   {
//     id: "TUN",
//     value: 233181,
//   },
//   {
//     id: "TUR",
//     value: 44591,
//   },
//   {
//     id: "TWN",
//     value: 618436,
//   },
//   {
//     id: "TZA",
//     value: 964380,
//   },
//   {
//     id: "UGA",
//     value: 392661,
//   },
//   {
//     id: "UKR",
//     value: 214539,
//   },
//   {
//     id: "URY",
//     value: 74626,
//   },
//   {
//     id: "USA",
//     value: 691998,
//   },
//   {
//     id: "UZB",
//     value: 771745,
//   },
//   {
//     id: "VEN",
//     value: 88653,
//   },
//   {
//     id: "VNM",
//     value: 409460,
//   },
//   {
//     id: "VUT",
//     value: 956554,
//   },
//   {
//     id: "PSE",
//     value: 932605,
//   },
//   {
//     id: "YEM",
//     value: 617903,
//   },
//   {
//     id: "ZAF",
//     value: 343499,
//   },
//   {
//     id: "ZMB",
//     value: 908403,
//   },
//   {
//     id: "ZWE",
//     value: 384619,
//   },
//   {
//     id: "KOR",
//     value: 936248,
//   },
// ];

// export default function GeoChart() {
//   return (
//     <ResponsiveChoropleth
//       data={data}
//       features={geoFile.features}
//       margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
//       colors="nivo"
//       domain={[0, 1000000]}
//       unknownColor="#666666"
//       label="properties.name"
//       valueFormat=".2s"
//       projectionTranslation={[0.5, 0.5]}
//       projectionRotation={[0, 0, 0]}
//       enableGraticule={true}
//       graticuleLineColor="#dddddd"
//       borderWidth={0.5}
//       borderColor="#152538"
//       legends={[
//         {
//           anchor: "bottom-left",
//           direction: "column",
//           justify: true,
//           translateX: 20,
//           translateY: -100,
//           itemsSpacing: 0,
//           itemWidth: 94,
//           itemHeight: 18,
//           itemDirection: "left-to-right",
//           itemTextColor: "#444444",
//           itemOpacity: 0.85,
//           symbolSize: 18,
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemTextColor: "#000000",
//                 itemOpacity: 1,
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   );
// }
