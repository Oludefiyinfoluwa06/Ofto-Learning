import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';

const JsPage = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../images/learn2.jpg")}
      />
      <Text style={styles.title}>A brief introduction to JavaScript</Text>
      <Text style={styles.content}>
        JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.
        JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
        The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.
        JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.
        Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  content: {
    marginBottom: 30,
  }
});

export default JsPage;
