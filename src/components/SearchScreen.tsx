import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
interface SearchScreenProps {
    handleClose: ()=> void;
    placesList:Array<string>;
}
export const SearchScreen =({handleClose, placesList}:SearchScreenProps)=>{
    return(
        <View style={styles.container}>
            <Icon name='close' size={30} color={'#000'} onPress={handleClose}/>
            {placesList.map(item=>{return(<Text>{item}</Text>)})}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:'5%'
    }
})