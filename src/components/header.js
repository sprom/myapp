import React from "react";
import { Text, StyleSheet, View } from "react-native";
function Header({ idata }) {
  return (
    <View style={styles.TabHeaderView}>
      <View style={styles.headcont}>
        <Text style={styles.logo}>Vendoo</Text>
        <Text style={styles.carti}>carti</Text>
      </View>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  TabHeaderView: {
    height: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    paddingHorizontal:  20,
    paddingVertical:10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  headcont: {
    display: "flex",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  carti:{
    fontSize:14,
    fontWeight:'bold'
  },
  logo:{
    fontSize:20,
    fontWeight:"bold"
  }
  
});
