import React, { useCallback, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header } from '../components/Header'
import { flightData } from './BookingScreen';
import { useFocusEffect } from '@react-navigation/native';
import { getFlightDetails } from '../actions/getFlightDetails';
import { FlightCard } from '../components/FlightCards';

export const AllFlightsScreen =({navigation})=>{
    const [tripData, setTripData] = useState<flightData[]>([]);
    const [activeFiler, setActiveFilter] = useState('');
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                try {
                    const flightData = await getFlightDetails();
                    setTripData(flightData);

                } catch (error) {
                    Alert.alert("Error", error);
                }
            };
            fetchData();
        }, []));

    const renderCard =()=>{
        if(tripData.length){
            return(
                tripData.map(item=>{
                    return (<FlightCard  airlineName={item.airline} price={item.price} duration={item.duration}/>)
                })
            )
        }
    }
    return(
        <View style={styles.container}>
            <Header handleGoBack={() => { navigation.goBack() }}/>
            <View style={styles.box}>
                <View style={styles.filterBox}>
                    <Text style={styles.title}>{'Filter By'}</Text>
                    <Text style={[styles.normalText,activeFiler == 'price' && {color:'#3199da', fontWeight:'700'}]} onPress={()=>setActiveFilter('price')}>{"Price"}</Text>
                    <Text style={styles.title}>{'Sort By'}</Text>
                    <Text style={[styles.normalText,activeFiler == 'airlines' && {color:'#3199da', fontWeight:'700'}]} onPress={()=>setActiveFilter('airlines')}>{"Airlines"}</Text>
                </View>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} >
                {renderCard()}
                </ScrollView>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    box: {
        flex:1,
        alignItems:'center',
        marginTop:'15%',
        paddingVertical:'3%'
    },
    filterBox:{
        width:'100%',
        height:'10%',
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'center'
    },
    scroll:{
        width:'100%',
        flex:1
    },
    title:{
        fontSize:20,
        color:'#000',
        fontWeight:'600'
    },
    normalText:{
        fontSize:16,
        color:'#000'
    }
}) 