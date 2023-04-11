import { useState } from "react";
import { TextInput, View , StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const ChosenNumber = parseInt(enteredNumber);

        if (isNaN(ChosenNumber) || ChosenNumber <= 0 || ChosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 'Number has to be a number between 1 and 99.',
                [{text: 'okay', style: 'destructive', onPress: resetInputHandler }]
                );
            return;
        }

        onPickNumber(ChosenNumber);
    }

    return (
         <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} 
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
    </View>
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0629',
        marginTop: 100,
        borderRadius: 10,
        elevation: 8
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});