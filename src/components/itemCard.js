import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useDispatch } from "react-redux";
const elementWidth = "100%";

function Item({ idata, action }) {
  const [added, setAdded] = useState(false);
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
            !added ? (
              <Pressable style={styles.addcart} onPress={HandlerAdd}>
                <Text style={styles.btntext}>კალათაში დამატება</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.addcart} onPress={HandlerAdd}>
                <Text style={styles.btntext}> დამატებულია</Text>
              </Pressable>
            )
          ) : (
            <Pressable style={styles.remcart} onPress={HandlerDelete}>
              <Text style={styles.btntext}>კალათიდან წაშლა</Text>
            </Pressable>
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
    backgroundColor: "#f8f8f8",
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 1,
    backgroundColor: "green",
    borderRadius: 4,
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
});
