import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  ReferenceLine,
  ComposedChart,
  Line,
  LabelList,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { subsData } from "./data";

function Chart() {
  const [subscriptionData, setSubscriptionData] = useState(subsData);

  useEffect(() => {
    //setting state for subscriptionData
    setSubscriptionData(
      subscriptionData.map((item) => {
        item.subsDiff = item.subsGained - item.subsLost; //Calculating net gain of subscriber
        item.subsLost = item.subsLost * -1; //negating lost subs for negative chart
        item.weekNo = "W" + item.weekNo; //concatening label for X axis eg."W14"
        return item;
      })
    );
  }, []);

  //Customized legend text
  const renderLegend = (value) => {
    let labelText;
    value == "subsGained"
      ? (labelText = "Sum of report.subscribersGained")
      : value == "subsLost"
      ? (labelText = "Sum of report.subscribersLost")
      : (labelText = "Sum of Net subscribers Gained");
    return <span style={{ color: "black" }}>{labelText}</span>;
  };

  return (
    <div style={{ width: "100%", height: 600 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          stackOffset="sign"
          data={subscriptionData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="weekNo" fontWeight={"bold"} tick={{ fill: "#000" }} />
          <YAxis
            dataKey="subsGained"
            domain={[-1000, 7000]}
            tickCount={9}
            fontWeight={"bold"}
            tick={{ fill: "#000" }}
          />
          <Tooltip />
          <Legend formatter={renderLegend} iconSize={20} />
          <ReferenceLine y={0} stroke="#e7e7e7" />

          {/* Positive Bar Chart for gain*/}
          <Bar
            dataKey="subsGained"
            barSize={30}
            fill="#e1f1d9"
            stackId="stack"
            legendType="rect"
          />
          {/* Negative Bar Chart for loss*/}
          <Bar
            dataKey="subsLost"
            barSize={30}
            fill="#e5c3d2"
            stackId="stack"
            legendType="rect"
          />
          {/* Line Chart for net gain */}
          <Line
            type="line"
            dataKey="subsDiff"
            stroke="#73ae4a"
            strokeWidth={3}
            dot={false}
            legendType="plainline"
          >
            <LabelList
              dataKey="subsDiff"
              position="right"
              offset={10}
              fontWeight="bold"
              fill="#000"
            />
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
