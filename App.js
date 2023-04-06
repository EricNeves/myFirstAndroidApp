import {
    StyleSheet, SafeAreaView, ScrollView, Alert
} from 'react-native'
import { useState, useEffect } from 'react'

import Header  from './components/Header'
import Loading from './components/Loading'
import Card    from './components/Card'

export default function App() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    async function getData() {
        try {
            const url = 'https://rickandmortyapi.com/api/character'
            const response = await fetch(url)
            const data = await response.json()
            setData(data.results)
            setLoading(false)
        } catch (err) {
            Alert.alert('Something went wrong!')
        }
    }

    useEffect(() => {
        getData()
    })
    
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            
            <ScrollView style={styles.scroll}>
                {loading ? <Loading /> : data.map(item => 
                <Card key={item.id} url={item.image} name={item.name}  specie={item.species} status={item.status} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#0D1117'
    },
    scroll: {
        width: '85%',
        alignSelf: 'center'
    }
})
