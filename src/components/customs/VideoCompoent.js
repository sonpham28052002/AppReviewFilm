import React from "react";
import { View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function VideoCompoent(props) {
  return (
    <View className="overflow-hidden rounded-lg shadow-xl">
      <YoutubePlayer
        videoId="MCsG9zH7DJE"
        height={220}
        width={400}
        className="rounded-lg h-96 w-96"
        webViewStyle={{ backgroundColor: "#000", borderRadius: 50 }}
      />
    </View>
  );
}
