import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const HtmlPage = () => {
    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={require("../images/learn.jpg")}
            />
            <Text style={styles.title}>A brief introduction to HTML</Text>
            <Text style={styles.content}>
                The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.
                HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as "img" and "input" directly introduce content into the page. Other tags such as "p" tag surround and provide information about document text and may include sub-element tags. Browsers do not display the HTML tags but use them to interpret the content of the page. HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. The inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997. A form of HTML, known as HTML5, is used to display video and audio, primarily using the "canvas" element, together with JavaScript.
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

export default HtmlPage;