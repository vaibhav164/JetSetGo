import React, { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header } from '../components/Header'
import { flightData } from './BookingScreen';
import { useFocusEffect } from '@react-navigation/native';
import { getFlightDetails } from '../actions/getFlightDetails';
import { FlightCard } from '../components/FlightCards';
import Icon from 'react-native-vector-icons/AntDesign';
import { FilterModal } from '../components/FilterModal';
import { SortModal } from '../components/SortModal';

export const AllFlightsScreen = ({ navigation }) => {
    const [tripData, setTripData] = useState<flightData[]>([]);
    const [renderList, setRenderList] = useState<flightData[]>([]);
    const [activeFiler, setActiveFilter] = useState('');
    const [airLineList, setAirLineList] = useState([]);
    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [sortModalVisible, setsortModalVisible] = useState(false);
    useEffect(()=>{
        setRenderList(tripData);
    },[tripData])
    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                try {
                    const flightData = await getFlightDetails();
                    setTripData(flightData);
                    let list = flightData.map(item=>{
                        return item.airline
                    });
                    console.log("sdfsdfsdfsdfsd", list);
                    setAirLineList([...new Set(list)])
                } catch (error) {
                    Alert.alert("Error", error);
                }
            };
            fetchData();
        }, []));

    const renderCard = ({ item }: any) => {
        if (tripData.length) {
            return (<FlightCard airlineName={item.airline} price={item.price} duration={item.duration} />)
        }
    }
    const filterList =(airline:string)=>{
        const sortedList =tripData.filter(item=>{
                return (item.airline == airline)
        })
        setFilterModalVisible(false);
        setRenderList(sortedList);
    }
    return (
        <View style={styles.container}>
            <Header handleGoBack={() => { navigation.goBack() }} />
            <View style={styles.box}>
                <View style={styles.filterBox}>
                    <Text style={styles.title}>{'Filter By'}</Text>
                    <Text style={[styles.normalText, activeFiler == 'airlines' && { color: '#3199da', fontWeight: '700' }]} onPress={() => {setActiveFilter('airlines'), setFilterModalVisible(true)}}>{"Airlines"}</Text>
                    <Text style={styles.title}>{'Sort By'}</Text>
                    <Text style={[styles.normalText, activeFiler == 'price' && { color: '#3199da', fontWeight: '700' }]} onPress={() => {setActiveFilter('price'), setsortModalVisible(true)}}>{"Price"}</Text>
                </View>
                <View style={styles.clearBox}>
                    <Text style={[styles.clearAllText, activeFiler == 'clearAll' && { color: '#3199da', fontWeight: '700' }]} onPress={() => {setActiveFilter('clearAll'), setRenderList(tripData)}}>{"ClearAll"}</Text>
                    <Icon name='close' size={25} color={activeFiler == 'clearAll' ? '#3199da' : '#000'} onPress={() => {setActiveFilter('clearAll'), setRenderList(tripData)}} />
                </View>
                <FlatList data={renderList} renderItem={renderCard} />
                {<Modal visible={sortModalVisible || filterModalVisible} transparent={true} style={styles.modal}>
                    {filterModalVisible && <FilterModal handleItemList={val=>filterList(val)} handleClose={() => {setFilterModalVisible(false), setRenderList(tripData)}} title="Filer By" airlineList={airLineList} />}
                    {sortModalVisible && <SortModal handleClose={() => {setsortModalVisible(false), setRenderList(tripData)}} title="Price By" />}
                </Modal>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        flex: 1,
        alignItems: 'center',
        marginTop: '15%',
        paddingVertical: '3%'
    },
    filterBox: {
        width: '100%',
        height: '10%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    scroll: {
        width: '100%'
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600'
    },
    normalText: {
        fontSize: 16,
        color: '#000'
    },
    clearAllText: {
        fontSize: 18,
        color: '#000',
        fontWeight: '800',
        marginRight: '4%'
    },
    clearBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '4%'
    },
    scrollBox: {
        width: '100%',
        flex: 1,
        paddingBottom: '45%',
        height: '100%',
        backgroundColor: 'red'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
}) 