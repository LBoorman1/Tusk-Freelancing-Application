import React from "react";
import { Text, View, TextInput, Pressable, SafeAreaView } from "react-native";

import Register from "./src/screens/Register/Register";
import Login from "./src/screens/Login/Login";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import ConfirmEmail from "./src/screens/ConfirmEmail/ConfirmEmail";
import Home from "./src/screens/Home/Home";

Amplify.configure(amplifyconfig);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
