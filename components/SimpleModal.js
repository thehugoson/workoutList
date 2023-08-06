import React from 'react';
import {
    KeyboardAvoidingView, StyleSheet, Text, View,
    TouchableOpacity, Dimensions, TextInput
} from 'react-native'

const SimpleModal = ({ onRequestClose, setInput1, setInput2, setInput3, setInput4, addingSub }) => {

    return (
        
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >

            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeSubWrapper}
            >
            <TextInput
            style={styles.input}
            placeholder={'weight'}
            onChangeText={setInput1}
            />
            <TextInput
            style={styles.input}
            placeholder={'repetitions'}
            onChangeText={setInput2}
            />
            <TextInput
            style={styles.input}
            placeholder={'sets'}
            onChangeText={setInput3}
            />
            <TextInput
            style={styles.input}
            placeholder={'rest time'}
            onChangeText={setInput4}
            />

            </KeyboardAvoidingView>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={addingSub}>
                    <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onRequestClose}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    writeSubWrapper: {
        bottom: 50,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
    buttonWrapper: {
        bottom: 10,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        flex: 1,
        marginRight: 10,
      },

})

export {SimpleModal}