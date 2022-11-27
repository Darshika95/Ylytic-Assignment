// import React, { useEffect, useState } from "react";
// import {
//   ResponsiveContainer,
//   ReferenceLine,
//   ComposedChart,
//   Line,
//   LabelList,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from "recharts";

// import { subsData } from "./data";

// function BarChartVisual() {
//   const [subscriptionData, setSubscriptionData] = useState(subsData);
//   useEffect(() => {
//     setSubscriptionData(
//       subscriptionData.map((item) => {
//         item.subsDiff = item.subsGained - item.subsLost;
//         item.subsLost = item.subsLost * -1;
//         item.weekNo = "W" + item.weekNo;
//         return item;
//       })
//     );
//     console.log(subscriptionData);
//   }, []);

//   const renderLegend = (value, entry) => {
//     let labelText = "";
//     value == "subsGained"
//       ? (labelText = "Sum of report.subscribersGained")
//       : value == "subsLost"
//       ? (labelText = "Sum of report.subscribersLost")
//       : (labelText = "Sum of Net subscribers Gained");
//     return <span style={{ color: "black" }}>{labelText}</span>;
//   };

//   return (
//     <div style={{ width: "100%", height: 500 }}>
//       <ResponsiveContainer>
//         <ComposedChart
//           width={500}
//           height={400}
//           stackOffset="sign"
//           data={subscriptionData}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <XAxis dataKey="weekNo" fontWeight={"bold"} />
//           <YAxis
//             dataKey="subsGained"
//             domain={[-1000, 7000]}
//             tickCount={9}
//             fontWeight={"bold"}
//             fill={"#000000"}
//           />
//           <Tooltip />

//           <Legend formatter={renderLegend} iconSize={30} />
//           {/* <Legend /> */}
//           <ReferenceLine y={0} stroke="#e7e7e7" />
//           <Bar
//             dataKey="subsGained"
//             barSize={30}
//             fill="#e1f1d9"
//             stackId="stack"
//             legendType="rect"
//           />
//           <Bar
//             dataKey="subsLost"
//             barSize={30}
//             fill="#e5c3d2"
//             stackId="stack"
//             legendType="rect"
//           />
//           <Line
//             type="line"
//             dataKey="subsDiff"
//             stroke="#73ae4a"
//             strokeWidth={3}
//             dot={false}
//             legendType="plainline"
//             labelText="hiiiii"
//           >
//             <LabelList
//               dataKey="subsDiff"
//               position="right"
//               offset={10}
//               fontWeight="bold"
//               fill="#000"
//             />
//           </Line>
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default BarChartVisual;
