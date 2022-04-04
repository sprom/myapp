import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  View,
} from "react-native";

import { createStore } from "redux";
import AllReducers from "./src/reducers";
import { Provider } from "react-redux";
import Main from "./src/pages/main";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Cart from "./src/pages/cart/cart";
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const store = createStore(
    AllReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      {/* <View style={styles.MainContainer}> */}
        <StatusBar hidden />
        {/* <Main /> */}
        <NavigationContainer>
          <Stack.Navigator  >
            <Stack.Screen name="Main" component={Main} options={{
                title: "Awesome app",
                headerShown: false,
              }}/>
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                title: "უკან დაბრუნება",
                headerStyle: {  height: 50 },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </View> */}
    </Provider>
  );
}

// https://cms.vendoo.ge/api/beta/catalog?url=saaxalwlo-nivtebi
const styles = StyleSheet.create({
  MainContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
  },
});
