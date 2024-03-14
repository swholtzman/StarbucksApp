import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import IconButton from "./iconTextButton";

import { useNavigation } from '@react-navigation/native';

export default function Header() {

const navigation = useNavigation();

  return (
    <View>
      {/* header starts */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>It's a great day for coffee</Text>
          <Text style={styles.headerText}>☕</Text>
        </View>

        <View style={styles.headerButtonContainer}>
          <View style={{ flexDirection: "row" }}>
            <IconButton
              title="Sign in"
              simpleName="login"
              evilName={null}
              functionHandler={() => navigation.navigate('SignIn')} 
              />
            <IconButton
              title="Inbox"
              simpleName={null}
              evilName="envelope"
              functionHandler={() => navigation.push('Inbox')} 
              />
          </View>

          <View style={styles.profileButton}>
            <IconButton 
                title={null}
                simpleName={null}
                evilName="user"
                functionHandler={() => navigation.push('Profile')} 
             />
          </View>
        </View>
      </View>
      {/* header ends */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    marginTop: "auto",
    paddingTop: 85,

    borderBottomColor: "hsla(0, 0%, 50%, 0.5)",
    borderBottomWidth: 1.5,
  },
  headerText: {
    textAlign: "left",
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  headerButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '105%',
    paddingTop: "7%",
    paddingLeft: 40,
  },
  profileButton: {
    marginRight: -20,
  },
});
