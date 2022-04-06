import React from "react";
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
const elementWidth = "100%";

function Item({ idata, action }) {
  const dispatch = useDispatch();
  const HandlerAdd = () => {
    dispatch({
      type: "SETCARTITEM",
      payload: idata,
    });
  };
  const HandlerDelete = () => {
    dispatch({
      type: "DELCARTITEM",
      payload: idata,
    });
  };

  return (
    <View style={styles.itemcard}>
      {idata.thumb_img != null && (
        <Image
          source={{ uri: idata.thumb_img.files.file }}
          style={styles.imgelement}
        />
      )}
      <View style={styles.textes}>
        <Text style={styles.title}>{idata.name}</Text>
        <View style={styles.price}>
          <Text>{idata.original_price} ლარი</Text>
          {action == "add" ? (
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#ddd' : 'white' }, styles.addcart ]} onPress={HandlerAdd}>
              <Image
                source={require("../resources/cart.png")}
                style={styles.cartimg}
              />
            </Pressable>
          ) : (
            <TouchableOpacity style={styles.remcart} onPress={HandlerDelete}>
              <Text style={styles.btntext}>კალათიდან წაშლა</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
export default Item;
const styles = StyleSheet.create({
  itemcard: {
    display: "flex",
    width: elementWidth,
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    borderRadius: 10,
  },
  textes: {
    flex: 1,
    display: "flex",
    padding: 10,
  },
  imgelement: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#cccccc",
    width: 150,
    height: 100,
    resizeMode: "cover",
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    display: "flex",
    flexWrap: "wrap",
  },
  price: {
    marginTop: 10,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addcart: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dcdfe6",
    marginLeft: 10,
  },
  remcart: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 1,
    backgroundColor: "red",
    borderRadius: 4,
    marginLeft: 10,
  },
  btntext: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: "bold",
    color: "white",
  },
  cartimg: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});
