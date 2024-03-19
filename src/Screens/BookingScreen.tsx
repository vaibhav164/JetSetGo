import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { Alert, Modal, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ReplaceIcon from 'react-native-vector-icons/AntDesign';
import { getFlightDetails } from '../actions/getFlightDetails';
import { TitleBox } from '../components/TitleBox';
import Button from '../components/Buttons';
import { SearchScreen } from '../components/SearchScreen';

interface flightData {
    aircraft: string;
    airline: string;
    arrivalTime: string;
    departureTime: string;
    destination: string;
    duration: string;
    flightNumber: string;
    gate: string;
    id: number;
    origin: string;
    price: number;
    seatsAvailable: number;
}
export const BookingScreen = ({ navigation }) => {
    const [tripData, setTripData] = useState<flightData[]>([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [flightModalOpen, setFlightModalOpen] = useState(false);
    const [list, setList] = useState<string[]>([])
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
        }, []))
    //   }, [])
    useEffect(() => {
        if (tripData.length) {
            setOrigin(tripData[0]?.origin)
            setDestination(tripData[0]?.destination)
        }
    }, [tripData]);


    const handleFlipValue = () => {
        const storeValue = origin;
        setOrigin(destination)
        setDestination(storeValue);
    }

    const handleFlightSearch = () => {
        console.log("search Pressed");
    }

    const handleTitleBoxTouch = () => {
        const DestinaationList =tripData.map(item=>{return item.destination});
        const OriginList = tripData.map(item=>{return item.origin}); 
        const placeArrayUnique = ()=>{
            return [[...new Set(DestinaationList.concat(OriginList))]]
        }
        setList(placeArrayUnique()[0]);
        setFlightModalOpen(true)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon onPress={() => { navigation.goBack() }} name="arrow-back" size={30} color="#fff" />
            </View>
            <View style={styles.viewBox}>
                <View style={{ height: '30%', width: '95%', flexDirection: 'row', paddingHorizontal: '2%', justifyContent: 'center', alignItems: 'center' }}>
                    <TitleBox handlePress={handleTitleBoxTouch} cityName={origin} cityShortName={origin.slice(0, 3)} topTitle='From' />
                    <ReplaceIcon name='retweet' size={30} onPress={() => handleFlipValue()} color={'#000'} />
                    <TitleBox handlePress={handleTitleBoxTouch} cityName={destination} cityShortName={destination.slice(0, 3)} topTitle='To' />
                </View>
                <Button title='Search Flights' handleSubmit={() => { handleFlightSearch() }} />
                <View style={styles.divider}>
                    <Text>OR</Text>
                </View>
                <Button title='Search All Flights' color={'#3199da'} handleSubmit={() => { handleFlightSearch() }} />
                <Modal visible={flightModalOpen} animationType='none' transparent={false}>
                    <SearchScreen placesList={list} handleClose={()=>setFlightModalOpen(false)}/>
                </Modal>
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
        padding: '2%',
        position: 'absolute'
    },
    viewBox: {
        flex: 1,
        marginTop: '15%',
        paddingTop: '15%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    divider:{
        marginVertical:'4%',
        borderBottomWidth:2,
        borderColor:'#000',
        width:'60%',
        paddingVertical:'2%',
        alignItems:'center'
    }
})