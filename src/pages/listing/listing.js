import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Itemcard from "../../components/itemCard";

const screenHeight = Dimensions.get("window").height;

function Listng() {
  const [items, setItems] = useState();
  const [load, setLoading] = useState(true);

  const ApiUrl = "https://cms.vendoo.ge/api/beta/catalog?url=saaxalwlo-nivtebi";
  async function fetchData() {
    try {
      const response = await axios.get(ApiUrl);
      setItems(response.data.products);
      setLoading(false);
    } catch (e) {
      seterror(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ScrollView style={styles.listng}>
        {load ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          items?.map((item,index) => <Itemcard key={index} idata={item} action='add' />)
        )}
      </ScrollView>
    </>
  );
}
export default Listng;
const styles = StyleSheet.create({
  listng: {
    display: "flex",
    flexDirection: "column",
    height: screenHeight - 50,
    padding: 10,
  },
});
