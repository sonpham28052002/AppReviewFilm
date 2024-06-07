import { StyleSheet, Text, View } from "react-native";
import PieChartDonut from "./src/components/customs/PieChartDonut";
import VideoCompoent from "./src/components/customs/VideoCompoent";

export default function App() {
  return (
    <View style={styles.container}>
      <PieChartDonut />
      <VideoCompoent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
