import React from "react";
import { View,  StyleSheet, Text,  } from "react-native";
import { useSelector } from "react-redux";
import Authorisation from "../components/authorisation";
import Header from "../components/header";
import Listng from "./listing/listing";

function Main() {

    const auth = useSelector((state) => state.auth);
    console.log(auth);


  return (
    <View style={styles.main}>
        <Header />
        {
            auth?  <Listng/>:<Authorisation/>
        }
      
    </View>
  );
}
export default Main;
const styles = StyleSheet.create({
    main: {
    
  },

});
