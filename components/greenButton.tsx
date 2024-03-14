import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function GreenButton({ title, functionHandler }) {
  return (
    <View> 
      {/* sticky button starts */}
      <TouchableOpacity onPress={functionHandler} style={styles.stickyButton}>
        <Text style={styles.boldWhiteText}>{ title }</Text>
      </TouchableOpacity>
      {/* sticky button ends */}
    </View>
  );
}

const styles = StyleSheet.create({
  stickyButton: {

    borderColor: "none",
    borderRadius: 30,

    paddingHorizontal: 27.5,
    paddingVertical: 20,

    backgroundColor: "hsl(142, 100%, 22.5%)",

    shadowColor: "hsla(0, 0%, 30%, 0.6)",
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 10 },
  },
  boldWhiteText: {
    fontWeight: "bold",
    color: "hsl(0, 0%, 100%)",
    fontSize: 17.5,
  },
});