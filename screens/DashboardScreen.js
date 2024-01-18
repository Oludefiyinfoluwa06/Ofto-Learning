import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import Courses from '../components/Courses';

const DashboardScreen = ({ navigation, route }) => {
  const username = route.params?.username;

  return (
    <View style={{
      padding: 10,
    }}>
      <Navbar username={username} />
      <Courses navigation={navigation} />

      <Text style={styles.text}>To continue with these courses, click on the buttons corresponding to the courses above</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 20,
  }
});

export default DashboardScreen;
