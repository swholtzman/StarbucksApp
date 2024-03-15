import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { signUp } from "aws-amplify/auth";
import { useForm, Controller } from "react-hook-form";

async function handleSignUp({ username, password, email, fName, lName }) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          given_name: fName,
          family_name: lName, // E.164 number convention
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });

    console.log(userId);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

type EmailForm = {
  email: string
}

export default function InputLine({ title, icon, functionHandler }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>({
    defaultValues: {
      email: ''
    },
  });

  async function onSubmit(data: EmailForm) {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="black"
            />
          )}
          name="email"
        />
        <View style={styles.underline} />
      </View>
      {/* <TouchableOpacity
        style={styles.icon}
        onPress={functionHandler}
      >
        <EvilIcons name='envelope' size={20} color="grey" />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
  },
  inputContainer: {
    flex: 1,
    paddingRight: 35,
  },
  input: {
    fontSize: 15,
    paddingVertical: 0,
  },
  underline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -10,
    height: 1,
    backgroundColor: "hsla(0, 0%, 50%, 0.2)",
  },
  icon: {
    position: "absolute",
    right: 15,
    bottom: 20,
  },
});
