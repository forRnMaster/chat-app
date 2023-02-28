import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputProps {

}

const Input = ({} : InputProps) => {
    return (
        <View>
            <TextInput style={styles}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    
});


export default Input;