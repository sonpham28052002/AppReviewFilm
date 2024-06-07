import React from "react";
import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function PieChartDonut(props) {
  const value = 70;
  return (
    <View className="p-1 bg-white rounded-full h-fit w-fit">
      <PieChart
        donut
        radius={15}
        innerRadius={12}
        canvasWidth={12}
        canvasHeight={12}
        data={[
          { value: value, color: "yellow" },
          { value: 100 - value, color: "black" },
        ]}
        centerLabelComponent={() => {
          return (
            <Text
              style={{ fontSize: 9, fontWeight: "bold" }}
            >{`${value}%`}</Text>
          );
        }}
      />
    </View>
  );
}
