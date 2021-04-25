import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { JobItems } from '../components'

const SavedJobs = (props) => {
    const [bookmark, setBookmark] = useState([])
    AsyncStorage.getItem("@My_Key")
    .then( res => {
        const list = JSON.parse(res)
        setBookmark(list)
    }) 
    
        
    return (
        <SafeAreaView>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>Bookmarks</Text>
            <FlatList
                data={bookmark}
                renderItem={({item}) => <JobItems data={item}/>}
            />
        </SafeAreaView>
    )
}

export { SavedJobs } 
