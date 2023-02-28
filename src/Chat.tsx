import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";


const Chat = () => {
    return (
        <View>
            <Text></Text>
            <Input />
        </View>
    )
}


const styles =  StyleSheet.create({
    input : {
        borderColor: "black",
        borderWidth: 1
    }
})

export default Chat;