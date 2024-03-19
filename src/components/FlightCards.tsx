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
        width:'90%',
        height:'15%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderWidth:1,
        borderRadius:10,
        marginVertical:'1%',
        alignItems:'center',
        borderColor:'#3199da',
        alignSelf:'center'
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