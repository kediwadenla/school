import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Mapel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Mapel</Text>
            </View>
        );
    }
}
export default Mapel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});