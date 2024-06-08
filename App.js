import { Text, View } from "react-native";
import PieChartDonut from "./src/components/customs/PieChartDonut";
import VideoCompoent from "./src/components/customs/VideoCompoent";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
export default function App() {
  return (
    <View className=" flex flex-col justify-center items-center h-full">
      <PieChartDonut />
      <VideoCompoent />
      <Text>{`${process.env.EXPO_PUBLIC_API_KEY}`}</Text>
    </View>
  );
}
