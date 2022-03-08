import { SafeAreaView, StatusBar } from "react-native";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";
import feed from "./assets/data/feed";

const post = feed[0];

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Post post={post} />
      </SafeAreaView>
    </>
  );
}
