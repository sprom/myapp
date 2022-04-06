import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import axios from "axios";

function Authorisation() {

  const [userName, setUserName] = useState("");
  const [pasword, setPasword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setDisabled(true);
    try {
      setErrorMessage('');
      const response = await axios.post(
        "https://cms.vendoo.ge/api/customer/login",
        {
          password: pasword,
          username: userName,
        }
      );
      dispatch({ type: "SETAUTH", payload: true });
      setDisabled(false);
    } catch (e) {
      setErrorMessage(e.response.data.message);
      setDisabled(false);
    }


  };

  return (
    <View style={styles.login}>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        placeholder="მომხმარებლის ელ-ფოსტა"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPasword}
        placeholder="პაროლი"
        secureTextEntry={true}
      />

      <Pressable
      disabled={disabled}
        style={disabled?styles.disabled:styles.loginbtn}
        onPress={handleLogin}
      >
        {disabled && <ActivityIndicator style={styles.lod} size="small" color="#fff" />}
        
        <Text style={styles.btntext}>ავტორიზაცია</Text>
      </Pressable>
      <Text style={styles.er}>{errorMessage}</Text>

      {/* {load && (
          <ActivityIndicator size="small" color="#0000ff" />
        ) } */}
    </View>
  );
}
export default Authorisation;

const styles = StyleSheet.create({
  login: {
    padding: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#212121",
    marginBottom: 20,
    padding: 10,
    height:60,
    borderRadius:6
  },
  loginbtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 1,
    backgroundColor: "green",
    borderRadius: 4,
    height:40
  },
  btntext: {
    color: "#fff",
    
  },
  er: {
    color: "red",
    marginTop: 20,
    textAlign:'center'
  },
  disabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 1,
    backgroundColor: "grey",
    borderRadius: 4,
    height:40,
    display:'flex',
    flexDirection:'row'
  },
  lod:{
    marginRight:5,
  }
});
