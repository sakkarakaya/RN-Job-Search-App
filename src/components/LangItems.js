import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { langItems } from '../styles'

const LangItems = (props) => {
    return (
        <TouchableOpacity 
            style={[langItems.container, { backgroundColor: props.item.color}]}
            onPress={props.onSelect}
        >
            <Text 
                style={langItems.text}>{props.item.name}
            </Text>
        </TouchableOpacity>
    )
}

export { LangItems }
