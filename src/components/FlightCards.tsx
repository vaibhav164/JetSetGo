import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface flightCardProps {
    airlineName: string; 
    price:number; 
    duration:string
}
export const FlightCard =({airlineName, price, duration}:flightCardProps)=>{
    return(
        <View style={styles.box}>
            <Text style={styles.airline}>{airlineName}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.price}>{duration}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        borderColor:'#3199da',
        alignSelf:'center',
        marginVertical:'2%',
        paddingVertical:'3%'
    },
    airline:{
        fontSize:20,
        fontWeight:'700',
        color:'#000'
    },
    price:{
        fontSize:15,
        color:'#000'
    }
})