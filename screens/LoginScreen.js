import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const name = route.params?.username;
    const userPassword = route.params?.password;

    const handleLogin = () => {
        if (username === "" || password === "") {
            setError("Input fields cannot be empty, you might want to register first");
        } else if (username !== name) {
            setError("Username is incorrect, you might want to register first");
        } else if (password !== userPassword) {
            setError("Username is incorrect, you might want to register first");
        } else {
            setError("");
            navigation.replace("Learn Coding", { username });
        }

    }

    return (
        <View style={{
            marginHorizontal: 'auto',
            marginVertical: 40,
            padding: 20,
        }}>


            <Text style={{
                textAlign: 'center',
                marginVertical: 10,
                textTransform: 'uppercase',
                fontSize: 30,
            }}>Login Here</Text>

            <Text style={{
                textAlign: 'center',
                color: '#721c24',
                marginVertical: 10
            }}>{error}</Text>

            <TextInput
                placeholder="Enter your username"
                value={username}
                onChangeText={e => setUsername(e)}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={e => setPassword(e)}
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
            
            <Text style={{ marginTop: 20, textAlign: 'center' }}>Don't have an account?</Text>

            <Button title="Register" onPress={() => navigation.navigate("Register")} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
});

export default LoginScreen;
