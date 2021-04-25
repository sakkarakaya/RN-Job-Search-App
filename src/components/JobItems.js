import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { jobItems } from '../styles'

const JobItems = (props) => {
    return (
        <TouchableOpacity style={jobItems.container} onPress={props.onSelect}>
            <Text style={jobItems.text}>{props.data.title}</Text>
            <Text>{props.data.company}</Text>
            <Text>{props.data.type} / {props.data.location}</Text>
        </TouchableOpacity>
    )
}

export { JobItems }
