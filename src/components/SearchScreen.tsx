import React from 'react'
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
interface SearchScreenProps {
    handleClose: ()=> void;
}
export const SearchScreen =({handleClose}:SearchScreenProps)=>{
    return(
        <View style={styles.container}>
            <Icon name='close' size={30} color={'#000'} onPress={handleClose}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:'5%'
    }
})