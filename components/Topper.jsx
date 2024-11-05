import { View, Text } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Topper = () => {
    return (
        <>
            <View className='flex flex-row justify-between items-center px-5 h-20'>

                <View>
                    <FontAwesome6 name="arrow-down-a-z" size={26} color="white" />
                </View>

                <View className='flex justify-center items-center'>
                    <Text className="uppercase text-white font-poppins font-extrabold">Playing From playlist</Text>
                    <Text className='text-white font-poppins'>Rishabh's Favs</Text>
                </View>

                <View>
                    <Entypo name="dots-three-vertical" color={"white"} size={24} />
                </View>

            </View>
        </>
    )
}

export default Topper