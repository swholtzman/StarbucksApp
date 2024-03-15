// App.js in root
// Handles program
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import SignIn from "./screens/SignIn";
import JoinNow from "./screens/JoinNow";
import Inbox from "./screens/Inbox";
import Profile from "./screens/Profile";
import Main from "./screens/Main"

import { FormProvider } from "./screens/FormContext";

// firebase.auth().onAuthStateChanged()

const Stack = createNativeStackNavigator();

function App() {
  return (
    <FormProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="JoinNow" component={JoinNow} />
          <Stack.Screen name="Inbox" component={Inbox} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}

export default App;
