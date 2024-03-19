import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
interface TitleBoxProps {
    topTitle: string;
    cityShortName: string;
    cityName: string;
    handlePress:()=>void;
}
export const TitleBox = ({ topTitle, cityShortName, cityName, handlePress }: TitleBoxProps) => {
    return (
        <Pressable onPress={handlePress} style={styles.titleBox}>
            <Text style={styles.toptitle}>{topTitle}</Text>
            <Text style={styles.boldTitle}>{cityShortName}</Text>
            <Text style={styles.baseTitle}>{cityName}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    titleBox: {
        height: '100%',
        width: '48%',
        padding: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:2,
        borderColor:'#3199da',
        alignSelf:'center',
    },
    toptitle: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'right',
        color:'#000'
    },
    boldTitle: {
        fontSize: 50,
        color: '#000',
        textAlign: 'right'
    },
    baseTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'right',
        color:'#000'
    }
})