import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {
    return ( 
    <View style={styles.ButtonOutercontainer}>
        <Pressable 
        style={({pressed}) =>
        pressed 
        ? [styles.pressed, styles.ButtonInnercontainer]
        : styles.ButtonInnercontainer
    } 
        onPress={onPress} 
        android_ripple={{color: '#644202'}}
        >
        <Text style={styles.Buttontext}>{children}</Text>
        </Pressable>
    </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    ButtonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    ButtonInnercontainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
        borderRadius: 28,
    },
    Buttontext: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
}); 