import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Itemcard from "../../components/itemCard";

const screenHeight = Dimensions.get("window").height;

function Cart() {
  const auth = useSelector((state) => state.auth);
  const cartitems = useSelector((state) => state.cartitems);
  return (
      <>
    <ScrollView style={styles.listng}>
      {
        cartitems.cartItems?.map((item, index) => <Itemcard key={index} idata={item} action='remove' />)
     } 
     {
        cartitems.cartItems.length==0 && <Text style={styles.empty}>კალათა ცარიელია</Text>
    }
    </ScrollView>
    
    <Text style={styles.sum}>ჯამური თანხა: {cartitems.totalPrice}</Text>
    </>
  );
}
export default Cart;

const styles = StyleSheet.create({
    listng: {
      display: "flex",
      flexDirection: "column",
      height: screenHeight - 100,
      padding: 10,
    },
    empty: {
     textAlign:'center',
     padding:20
    },
    sum: {
      display: "flex",
      flexDirection: "column",
      height: 50,
      padding: 10,
      textAlign:'right',
      fontWeight:'bold',
      lineHeight:30,
      backgroundColor:'#fff',
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
    },
  });
 