import React from "react";
import { Text, StyleSheet, Image } from "react-native";

function Item({ idata }) {
    console.log(idata.thumb_img);
  return (
    <Text style={styles.itemcard}>
      <Text style={styles.poster}>
      {idata.thumb_img !=null  && (
          <Image
            source={{ uri: idata.thumb_img.files.file }}
            style={styles.imgelement}
          />
        )}
      </Text>
      <Text style={styles.bot}>
        <Text style={styles.title}>{idata.name}</Text>
      </Text>
    </Text>
  );
}
export default Item;
const styles = StyleSheet.create({
  itemcard: {
      display:'flex',
      width:'100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgelement:{
      borderRadius:10,
      width:100,
      height:100
  },
  poster:{
      borderRadius:10,
      width:200,
      height:150,
      overflow:'hidden'
  }
});
