import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useSelector } from "react-redux";
import Cart from "../pages/cart/cart";
import { useNavigation } from '@react-navigation/native';

function Header() {
  const auth = useSelector((state) => state.auth);
  const cartitems = useSelector((state) => state.cartitems);

  const Navigation = useNavigation();

  return (
    <View style={styles.TabHeaderView}>
      <View style={styles.headcont}>
        <Image
          source={require('../resources/logo.jpg')}
          style={styles.imgelement}
        />
        {auth && <Text onPress={()=>Navigation.navigate(Cart)} style={styles.carti}>კალათა <Text style={styles.count}>{cartitems.cartItems.length}</Text> </Text>}
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
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carti: {
    fontSize: 14,
    fontWeight: "bold",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  count:{
    color:'green',
  },
  imgelement: {
    width: 160,
    height: 26,
    resizeMode: 'contain'
  },
});
