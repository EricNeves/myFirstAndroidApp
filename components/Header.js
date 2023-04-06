import {
    StyleSheet, View, Image, Text, 
} from 'react-native'

export default function Header() {
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/et.png')} />
            <Text style={styles.title}>Rick and Morty</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 32,
        height: 32,
        alignSelf: 'center'
    },
    title: {
        color: '#C3F839',
        fontSize: 15,
        marginVertical: 10
    }
})