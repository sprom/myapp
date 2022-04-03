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
      <Text style={styles.TabHeaderView}>
        <Header />
      </Text>
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
    backgroundColor: "tomato",
  },
  TabHeaderView: {
    height: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
