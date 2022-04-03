import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Dimensions } from "react-native";
import Itemcard from "../../components/itemCard";

const screenHeight = Dimensions.get('window').height;

function Listng() {
  const [items, setItems] = useState();

  const ApiUrl = "https://cms.vendoo.ge/api/beta/catalog?url=saaxalwlo-nivtebi";
  async function fetchData() {
    try {
      const response = await axios.get(ApiUrl);
      setItems(response.data.products);
      console.log(response.data.products);
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
      {

items?.map((item) => <Itemcard key={item.id} idata={item} />)
}
      </ScrollView>
       
        </>
       
  );
}
export default Listng;
const styles = StyleSheet.create({
  listng: {
    display: "flex",
    flexDirection: "column",
    height:screenHeight-50,
    padding:10

  },
});
