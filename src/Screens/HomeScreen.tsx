import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const HomeScreen =()=>{
    return(
        <View style={styles.container}>
            <View style={{height:'30%', width:'100%', backgroundColor:'yellow', borderBottomEndRadius:30}}>
            <Image source={require('../assets/images/flight.gif')} style={styles.image}/>
            </View>
            <View style={styles.formBox}>
                <View style={{height:'10%',width:'100%', backgroundColor:'#3199da', borderBottomEndRadius:100, borderBottomStartRadius:100}}></View>
                
            <Text style={{fontSize:20}}>{"Welcome To Home Screen"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
    },
    image:{
        height:'100%',
        width:'100%',
        borderCurve:'circular',
        borderBottomEndRadius:50
    },
    formBox:{
        flex:1,
        alignItems:'center',
        width:'100%'
    }
})