import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
export interface modalprops {
    handleClose:()=>void;
    title:string;
    handleSortOrder:(item:string)=>void;
}
export const SortModal =({handleClose, title, handleSortOrder}:modalprops)=>{
    const handlePress =(item)=>{
        handleSortOrder(item);
    }
    return(
        <View style={styles.box}>
             <Icon name='close' size={25} color={'#000'} onPress={handleClose}/>
             <View style={{height:'100%', width:'100%', alignItems:'center'}}>
                            <Pressable onPress={()=>handlePress('increase')} style={styles.listBox}>
                                <Text style={styles.listText}>{'Icreasing Order'}</Text>
                                <Icon size={25} name={'arrowup'} color={'#000'}/>
                            </Pressable>
                            <Pressable onPress={()=>handlePress('decrease')} style={styles.listBox}>
                            <Text style={styles.listText}>{'Decreasing Order'}</Text>
                                <Icon size={25} name={'arrowdown'} color={'#000'}/>
                            </Pressable>
             </View>
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
    },
    listText:{
        fontSize:15,
        color:'#000',
        fontWeight:'600'
    },
    listBox:{
    marginVertical:'2%', 
    justifyContent:'space-between', 
    alignItems:'center', 
    width:'40%', 
    alignSelf:'center', 
    flexDirection:'row',
}
})