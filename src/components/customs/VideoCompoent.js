import React from "react";
import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoCompoent(props) {
  return (
    <View className="overflow-hidden rounded-lg shadow-xl bg-white">
      <YoutubePlayer videoId="MCsG9zH7DJE" height={220} width={400} />
    </View>
  );
}
