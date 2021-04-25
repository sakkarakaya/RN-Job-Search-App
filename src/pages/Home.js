import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'

import { LangItems } from '../components'

const languages = [
    {
        id: 0,
        name: 'Python',
        color: '#fb5607'
    },
    {
        id: 1,
        name: 'Java',
        color: '#007f5f'
    },
    {
        id: 2,
        name: 'PHP',
        color: '#ffb703'
    },
    {
        id: 3,
        name: 'Javascript',
        color: '#023e7d'
    },
    {
        id: 4,
        name: 'Ruby',
        color: '#001845'
    },
    {
        id: 5,
        name: 'C#',
        color: '#93f13a'
    },
]

const Home = (props) => {
    const renderItem = ({ item }) => (<LangItems item={item} onSelect={() => props.navigation.navigate('Jobs', {selected: item.name})} />)
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 1}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center', marginTop: '20%'}}>Find jobs in IT Field</Text>
                <FlatList
                    data={languages}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={{alignSelf: 'center', top:'40%'}}
                />
            </View>
        </SafeAreaView>
    )
}

export { Home }
