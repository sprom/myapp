import axios from "axios";
import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";

function Authorisation() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("Useless Text");
  const [pasword, setPasword] = useState("Useless Text");
  const [errorMessage, setErrorMessage] = useState("");
  const [load, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setErrorMessage("");
      setLoading(true);
      const response = await axios.post(
        "https://cms.vendoo.ge/api/customer/login",
        {
          password: pasword,
          username: userName,
        }
      );
      dispatch({ type: "SETAUTH", payload: true });
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.response.data.message);
      setLoading(false);
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
        style={styles.loginbtn}
        onPress={handleLogin}
      >
        <Text style={styles.btntext}>ავტორიზაცია</Text>
      </Pressable>
      <Text style={styles.er}>{errorMessage}</Text>

      {load && (
          <ActivityIndicator size="small" color="#0000ff" />
        ) }
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
});
