import { SafeAreaView, StatusBar } from "react-native";
import Post from "./src/components/Post";
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestsScreen from "./src/screens/Guests";
import HomeScreen from "./src/screens/Home";
import SearchResultsScreen from "./src/screens/SearchResults";

export default function App() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
}
