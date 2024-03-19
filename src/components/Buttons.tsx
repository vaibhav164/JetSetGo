import React from 'react'
import { ActivityIndicator, Text, TouchableWithoutFeedback, View } from 'react-native';
interface ButtonProps {
    title: string;
    handleSubmit: () => void;
    isLoading?: boolean;
    color?:string
}
function Button(props: ButtonProps) {
    const { title, handleSubmit, isLoading, color } = props;
    return (
        <TouchableWithoutFeedback disabled={isLoading} onPress={handleSubmit}>
            <View style={{ width: '65%', backgroundColor:color ? color : '#fff', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderColor: '#3199da', borderWidth: 1, paddingVertical: '3%'}}>
                {
                    isLoading ?
                        <ActivityIndicator
                            animating={true}
                            size='large'
                            color='#fff'
                        /> :
                        <Text style={{ color:color ? '#fff' : '#3199da', fontSize: 20}}>{title}</Text>
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Button;