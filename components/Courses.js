import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const Courses = ({ navigation }) => {
    return (
        <>
            <Text style={styles.text}>These are some of the courses that will be taught</Text>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Image
                        style={styles.image}
                        source={require('../images/html.png')}
                    />
                    <Text style={styles.title}>HTML</Text>
                    <Button title='Learn' onPress={() => navigation.navigate("Learn HTML")} />
                </View>
                <View style={styles.box}>
                    <Image
                        style={styles.image}
                        source={require('../images/css.png')}
                    />
                    <Text style={styles.title}>CSS</Text>
                    <Button title='Learn' onPress={() => navigation.navigate("Learn CSS")} />
                </View>
                <View style={styles.box}>
                    <Image
                        style={styles.image}
                        source={require('../images/js.png')}
                    />
                    <Text style={styles.title}>JavaScript</Text>
                    <Button title='Learn' onPress={() => navigation.navigate("Learn JavaScript")} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
    },
    box: {
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 90,
        height: 90,
    },
    title: {
        marginVertical: 10
    }
});

export default Courses
