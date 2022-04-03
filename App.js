import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "./src/components/header";
import Listing from "./src/pages/listing/listing";
export default function App() {
  return (
    <View style={styles.MainContainer}>
      <StatusBar hidden />
      <Header />
      <Listing />
    </View>
  );
}
// https://cms.vendoo.ge/api/beta/catalog?url=saaxalwlo-nivtebi
const styles = StyleSheet.create({
  MainContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
  },
});
