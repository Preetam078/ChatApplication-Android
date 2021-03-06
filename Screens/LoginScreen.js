import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image, Text } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {

    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' />

            <Text h4 style={{ marginBottom: 50, }}>
                Welcome to ChatAPP
            </Text>

            <Image source={{
                uri: "https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Messaging_alt.png"
            }}
                style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 100 }}
            />
            <View style={styles.inputContainer}>
                <Input placeholder='Email' autoFocus type="Email" value={email} onChangeText={(text) => getEmail(text)} />
                <Input placeholder='Password' secureTextEntry type="password"
                    value={password} onChangeText={(text) => getEmail(text)} />
            </View>
            <View>

                <Button raised containerStyle={styles.button} onPress={signIn} title="Login" />

                {/**see the onPress function, how we navigated using stack navigation */}
                <Button raised onPress={() => { navigation.navigate("Register") }}
                    containerStyle={styles.button} type="outline" title="Register" />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,

    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})