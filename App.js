import { SafeAreaView, StatusBar } from "react-native";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";
import SearchResultsScreen from "./src/screens/SearchResults";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
}
