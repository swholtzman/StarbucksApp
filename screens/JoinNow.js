import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import Section from "../components/sectionHeader";
import InputLine from "../components/inputLine";
import GreenText from "../components/greenPressable";
import GreenButton from "../components/greenButton";
import IconSwitch from "../components/switchingIcons";
import CheckBox from "../components/checkbox";
import FirstName from "../components/fNameInput";
import LastName from "../components/lNameInput";
import EmailInput from "../components/emailInput";
import Password from "../components/passwordInput";

import { useNavigation } from "@react-navigation/native";

export default function JoinNow() {
  const navigation = useNavigation();
  const [isEmailSelected, setIsEmailSelected] = useState(false);
  const [isFasterSelected, setIsFasterSelected] = useState(false);
  const [isTermsSelected, setIsTermsSelected] = useState(false);

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          {/* <View style={styles.headerContainer}> */}
          <AntDesign
            name="close"
            size={25}
            color="grey"
            style={styles.iconButton}
            onPress={() => navigation.navigate("Landing")}
          />
          <Text style={styles.header}>Sign up</Text>
          {/* </View> */}

          {/* PERSONAL INFO SECTION BEGINS */}
          <Section title={"Personal info"} style={styles.sections} />

          <View style={styles.inputContainer}>
            <InputLine
              class="fName"
              title="First name"
              style={styles.inputLine}
            />

            <InputLine
              class="lName"
              title="Last name"
              style={styles.inputLine}
            />
          </View>

          <View style={styles.giftcardContainer}>
            <GreenText
              title="Have a Starbucks gift card? (optional)"
              style={styles.greenLines}
            />
            <IconSwitch primaryIcon="down" secondaryIcon="up" />
          </View>
          {/* PERSONAL INFO SECTION ENDS */}

          {/* SECURITY SECTION BEGINS */}
          <Section title={"Security"} style={styles.sections} />

          <View style={styles.inputContainer}>
            <EmailInput style={styles.inputLine} />
            <InputLine
              class="password"
              title="Password"
              style={styles.inputLine}
              mainIcon={"visibility-off"}
              secondaryIcon={"visibility"}
              functionHandler={null}
            />
          </View>
          {/* SECURITY SECTION ENDS */}

          {/* TERMS SECTION BEGINS */}
          <View style={styles.termsContainer}>
            <Section title={"Terms"} style={styles.sections} />

            <View style={styles.checkboxContainer}>
              <CheckBox
                text="Yes, I'd like emails from Starbucks (optional)"
                caption="Know about product offers, 
                        announcements, and initiatives."
                isChecked={isEmailSelected}
                onPress={() => setIsEmailSelected(!isEmailSelected)} 
                style={styles.checkbox}
              />
              <CheckBox
                text="I'd like to sign in faster (optional)"
                caption="Use Face ID and iCloud Keychain to sign in, authorize 
                        purchases, preloads, and more."
                isChecked={isFasterSelected}
                onPress={() => setIsFasterSelected(!isFasterSelected)} 
                style={styles.checkbox}
              />
              <CheckBox
                text="I accept the Terms of Use"
                caption="By joining, I agree to Starbucks Rewards Terms, 
                        Starbucks Card Terms, the Aplication Terms, and have 
                        read the iOS Privacy Statement"
                isChecked={isTermsSelected}
                onPress={() => setIsTermsSelected(!isTermsSelected)} 
                style={styles.checkbox} 
              />
            </View>

            <View style={styles.greenContainer}>
              <GreenText 
                title="Rewards Terms" 
                style={styles.greenLines} />
              <GreenText 
                title="Application Terms" 
                style={styles.greenLines} />
              <GreenText
                title="Card Terms" 
                style={styles.greenLines} />
              <GreenText 
                title="Privacy Statement" 
                style={styles.greenLines} />
            </View>
          </View>

          <View style={styles.greenButtonContainer}>
            <GreenButton title="Create Account" style={styles.greenButton} />
          </View>

          {/* TERMS SECTION ENDS */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    height: "100%",
    marginTop: 75,
    padding: 20,
  },
  headerContainer: {
    width: "100%",
    paddingBottom: 10,

    borderBottomColor: "hsla(0, 0%, 50%, 0.5)",
    borderBottomWidth: 1.5,
  },
  iconButton: {
    position: "absolute",
    top: 0,
    right: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    paddingBottom: 10,
  },
  sections: {
    paddingTop: 0,
  },
  inputContainer: {
    paddingVertical: 15,
    justifyContent: "space-between",
    height: 140,
  },
  inputLine: {
    paddingVertical: 10,
    paddingBottom: 15,
  },
  giftcardContainer: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  termsContainer: {
    paddingTop: 15,
  },
  checkboxContainer: {
    paddingTop: 20,
    justifyContent: 'space-between',
    height: 300,
    paddingBottom: 30,
  },
  checkbox: {
  },
  greenContainer: {
    paddingHorizontal: 40,
    justifyContent: "space-between",
    height: 160,
    marginBottom: 100,
  },
  greenLines: {},
  greenButtonContainer: {
    position: "absolute",
    bottom: 100,
    width: 200,
    right: 20,
  },
  greenButton: {},
});
