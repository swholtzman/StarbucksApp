import { View, Text } from 'react-native'
import React from 'react' 

export default function SignIn() {
    return (
        <View className = "SignIn-Container" style={styles.container}> 
            <Text>Sign in</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'hsl(0, 0%, 97.5%)',
      alignItems: "center",
    },
});