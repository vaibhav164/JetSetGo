import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from '../components/Header'

export const AllFlightsScreen =({navigation})=>{
    return(
        <View style={styles.container}>
            <Header handleGoBack={() => { navigation.goBack() }}/>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
}) 