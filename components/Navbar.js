import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Navbar = ({ username }) => {
    return (
        <View style={styles.nav}>
            <Text style={styles.text}>Welcome, {username}</Text>
            <View>
                <Button
                    title="Logout"
                    onPress={() => navigation.replace("Login")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default Navbar;
