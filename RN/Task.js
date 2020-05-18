import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Task(props) {
    // The JSX part
    return (
        <TouchableOpacity onPress={() => props.removeTask(props.task.key)} key={props.task.key}>
            <Text style={styles.Task}>{props.task.title}</Text>
        </TouchableOpacity>
    );
}

// The styling area
const styles = StyleSheet.create({
    Task: {
        padding: 15,
        marginTop: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        fontSize: 19
    }
});