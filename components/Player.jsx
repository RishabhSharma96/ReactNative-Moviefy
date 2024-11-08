import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {addTrack, setupPlayer} from "../musicPlayerService.js"

const Player = () => {

    const [isPlayerReady, setIsPlayerReady] = useState(false)

    const setup = async () => {
        let isSetup = await setupPlayer()
        if(isSetup){
            await addTrack()
        }
        setIsPlayerReady(isSetup)
    }
    useEffect(() => {
        setup()
    }, [])


    return (
        <View>

        </View>
    )
}

export default Player