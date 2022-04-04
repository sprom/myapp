import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

function Authorisation() {
  const dispatch = useDispatch();
  
 
  return (
    <View style={styles.login}>
      <Text onPress={() =>
            dispatch({
              type: "SETAUTH",
              payload:true
            })}>Authorisation</Text>
    </View>
  );
}
export default Authorisation;

const styles = StyleSheet.create({
  login: {
    height: 50,
  }
  
});
