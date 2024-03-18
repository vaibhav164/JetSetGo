import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Buttons'

export const HomeScreen =({ navigation })=>{
    return(
        <View style={styles.container}>
            <View style={styles.imageBox}>
            <Image source={require('../assets/images/flight.gif')} style={styles.image}/>
            </View>
            <View style={styles.formBox}>
                <View style={styles.textBox}>
                <Text style={styles.text}>{"JetSetGo!"}</Text>
                </View>
                <View style={styles.buttonBox}>
                <Button title='Start Booking' handleSubmit={()=>{navigation.navigate('BookingScreen')}}/>
                </View>
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
        width:'100%'
    },
    formBox:{
        flex:1,
        alignItems:'center',
        width:'100%',
    },
    imageBox:{
        height:'30%', 
        width:'100%', 
        borderBottomEndRadius:30
    },
    buttonBox:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    textBox:{
        height:'10%',
        width:'100%', 
        backgroundColor:'#3199da', 
        borderBottomEndRadius:100, 
        borderBottomStartRadius:100, 
        justifyContent:'center', 
        alignItems:'center'
},
    text:{fontSize:22, 
        fontWeight:'600', 
    color:'#fff'
}
})