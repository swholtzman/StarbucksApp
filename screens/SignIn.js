import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from '@react-navigation/native';

import React from "react";
import Header from "../components/header";
import InputLine from "../components/inputLine";
import Forgettable from "../components/greenPressable";
import StickyButton from "../components/greenButton";

export default function SignIn() {

  const navigation = useNavigation();

  return (
    <>
      <Header 
        title="Sign in to Rewards" 
        iconName="close" 
        functionHandler={() => navigation.navigate('Landing')} 
        />

      <View style={styles.inputContainer}>
        <InputLine
            title="Email or username"
            style={styles.inputLine}
        />
        <InputLine class="password" 
            title="Password" 
            style={styles.inputLine} 
            mainIcon={"visibility-off"}
            secondaryIcon={"visibility"}
            functionHandler={null}/>
      </View>

      <View style={styles.forgettableContainer}>
        <Forgettable 
            title="Forgot password?" 
            style={styles.forgettableLines} />
        <Forgettable 
            title="Forgot username?" 
            style={styles.forgettableLines} />
      </View>

      <View style={styles.buttonContainer}>
        <StickyButton title={ "Join now" } />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 97.5%)",
    alignItems: "center",
  },
  inputContainer: {
    paddingTop: 25,
  },
  inputLine: {},
  forgettableContainer: {
    padding: 25,
    paddingTop: 30,

    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 200,
    height: 120,
  },
  forgettableLines: {
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    right: 15,
  }
});
