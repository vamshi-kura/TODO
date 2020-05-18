import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To-Do Appliation</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 40,
        backgroundColor: '#00FFFF'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});