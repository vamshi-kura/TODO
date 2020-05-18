import * as React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';


export default function Form(props) {
    // The state to capture the value of the form input
    const [input, setInput] = React.useState('');

    // The JSX part
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='Enter your task' 
            onChangeText={(text) => setInput(text)} 
            defaultValue={input}/>
            <Button title="Add task" onPress={() => props.updateTask(input)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
