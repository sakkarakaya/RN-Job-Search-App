import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { JobItems } from '../components'
import { jobs } from '../styles'

const Jobs = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [selectedJob, setSelectedJob] = useState("");

    const selectedLang = props.route.params.selected

    const fetchData = () => {
        axios.get(`https://jobs.github.com/positions.json?description=${selectedLang}&location=germany`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderItem = ({ item }) => (<TouchableOpacity>
        <JobItems data={item} onSelect={() => toggleModal(item)} />
    </TouchableOpacity>)

    const toggleModal = (job) => {
        setModalVisible(!isModalVisible);
        setSelectedJob(job)
    };



    const addBookmark = async () => {

        let getjsonValue = await AsyncStorage.getItem('@My_Key')
        getjsonValue = getjsonValue != null ? JSON.parse(getjsonValue) : [];



        const updatedValue = [...getjsonValue, selectedJob]

        const setjsonValue = JSON.stringify(updatedValue)
        await AsyncStorage.setItem('@My_Key', setjsonValue)


    }


    return (
        <SafeAreaView>
            <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Jobs for {selectedLang}</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: 'lightblue',
                    borderRadius: 8,
                    padding: 8,
                    position: 'absolute'
                    
                }}
                onPress={() => props.navigation.navigate("SavedJobs")}
            >
                <Text style={{ color: 'white'}}>Bookmarks</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
                <View style={jobs.container}>
                    <View style={{ borderBottomWidth: 1, margin: 5 }}>
                        <Text style={jobs.text}>{selectedJob.title}</Text>
                        <Text>{selectedJob.company}</Text>
                        <Text>{selectedJob.type} / {selectedJob.location}</Text>
                    </View>
                    <Text numberOfLines={5}>{selectedJob.description}</Text>
                    <Button title="Add a Bookmark" onPress={addBookmark} />
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export { Jobs }
