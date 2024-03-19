import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
export interface modalprops {
    handleClose:()=>void;
    title:string;
}
export const SortModal =({handleClose}:modalprops)=>{
    return(
        <View style={styles.box}>
             <Icon name='close' size={25} color={'#000'} onPress={handleClose}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        height:'50%',
        width:'100%',
        paddingTop:'8%',
        paddingHorizontal:'8%',
        backgroundColor:'#fff',
        marginTop:'100%',
        borderTopEndRadius:50,
        borderTopStartRadius:50
    }
})