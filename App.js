import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
