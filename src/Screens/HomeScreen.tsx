import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeScreen =()=>{
    return(
        <View style={styles.container}>
            <Text>{"Welcome To Home Screen"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
})