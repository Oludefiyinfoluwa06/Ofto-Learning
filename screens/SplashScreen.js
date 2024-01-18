import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Register");
        }, 5000);
    }, [navigation]);

    return (
        <View style={styles.splash}>
            <Image
                style={styles.image}
                source={require('../images/OFTO.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    splash: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
