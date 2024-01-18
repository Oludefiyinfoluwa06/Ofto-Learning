import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = () => {
        if (username == "" || password == "" || email == "") {
            setError("Input fields cannot be empty");
        } else {
            setError("");
            navigation.navigate("Login", { username, password });
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
            }}>Register Here</Text>

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
                placeholder="Enter your email"
                value={email}
                onChangeText={e => setEmail(e)}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={e => setPassword(e)}
                style={styles.input}
            />
            <Button title="Register" onPress={handleRegister} />
            
            <Text style={{ marginTop: 20, textAlign: 'center' }}>Already have an account?</Text>

            <Button title="Login" onPress={() => navigation.navigate("Login")} />
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

export default RegisterScreen;
