import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
interface headerProps {
    handleGoBack:()=>void;
}
export const Header =({handleGoBack}:headerProps)=>{
    return(
        <View style={styles.header}>
                <Icon onPress={handleGoBack} name="arrow-back" size={30} color="#fff" />
            </View>
    )
} 

const styles = StyleSheet.create({
    header: {
        height: '8%',
        width: '100%',
        backgroundColor: '#3199da',
        justifyContent: 'center',
        padding: '2%',
        position: 'absolute'
    },
})