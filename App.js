import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Post />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
