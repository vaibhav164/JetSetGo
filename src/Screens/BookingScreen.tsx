import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { getFlightDetails } from '../actions/getFlightDetails';
export const BookingScreen = ({ navigation }) => {
    const [tripData, setTripData] = useState([]);
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
              try {
                const flightData = await getFlightDetails();
                setTripData(flightData);
              } catch (error) {
                Alert.alert("Error", error);
                // console.error("Error fetching flight details:", error);
              }
            };
        
            fetchData();
            },[]))
        //   }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={() => { navigation.goBack() }} name="arrow-back" size={30} color="#fff" />
            </View>
            <View style={styles.viewBox}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: '8%',
        width: '100%',
        backgroundColor: '#3199da',
        justifyContent: 'center',
        padding: '2%'
    },
    viewBox:{
        flex:1
    }
})