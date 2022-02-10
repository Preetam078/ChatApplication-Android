import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Button, Input, Text, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'


//because we are using stack navigation hence we get a props called navigation....
const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");



    const register = () => {

    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style='light' />

            <Image source={{
                uri: "https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Messaging_alt.png"
            }}
                style={{ width: 100, height: 100, marginBottom: 20, borderRadius: 100 }}
            />

            <Text h4 style={{ marginBottom: 50 }}>
                Create a ChatAPP Account
            </Text>


            {/**input field for the full name */}
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full Name'
                    type="text"
                    value={name}
                    onChange={(text) => setName(text)}
                />
            </View>

            {/**input field for the Email */}
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"

                    type="Email"
                    value={email}
                    onChange={(text) => setEmail(text)}
                />
            </View>

            {/**input field for the Password */}
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Password'
                    type="password"
                    secureTextEntry
                    value={password}
                    onChange={(text) => setPassword(text)}
                />
            </View>


            {/**input field for the Image url */}
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Profile Picture URL (Optional)'
                    type="text"
                    value={imageUrl}
                    onChange={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <View>
                <Button
                    containerStyle={styles.button}
                    raised
                    onPress={register}
                    title="Register"
                />
            </View>
            <View style={{ marginBottom: 40 }} />

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    button: {

        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 340
    }
})