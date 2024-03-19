import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
interface modalprops {
    handleClose:()=>void;
    title:string;
    airlineList:array;
    handleItemList:(item:string)=>void;
}
export const FilterModal =({handleClose, airlineList, handleItemList, title}:modalprops)=>{
    const handlePress =(item)=>{
        handleItemList(item);
    }
    return(
        <View style={styles.box}>
             <Icon name='close' size={25} color={'#000'} onPress={handleClose}/>
             <Text style={styles.titleText}>{title}</Text>
             <View style={{height:'100%', width:'100%', alignItems:'center'}}>
                    {airlineList.map((item)=>{
                        return(
                            <Pressable onPress={()=>handlePress(item)} style={styles.listBox}>
                                <Text style={styles.listText}>{item}</Text>
                            </Pressable>
                        )
                    })}
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
        color:'#000'
    },
    listBox:{marginVertical:'2%', justifyContent:'flex-start', alignItems:'flex-start', width:'40%', alignSelf:'center'},
    titleText:{
        fontSize:20,
        fontWeight:'600',
        color:'#000',
        marginTop:'3%'
    }
})