import {
    StyleSheet, View, Text, Image
} from 'react-native'

export default function Card(props) {
    let typeStatus

    if (props.status === 'Alive') {
        typeStatus = <Text style={styles.textStatusAlive}>
        <Text style={{ color: '#777777' }}>Status: </Text> {props.status} </Text>
    } else {
        typeStatus = <Text style={styles.textStatusDead}>
        <Text style={{ color: '#777777' }}>Status: </Text> {props.status} </Text>
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imageCard} resizeMode='cover' source={{ uri: props.url }} />

            <View style={styles.boxTextCard}>
                <Text style={styles.textName}>
                    <Text style={{ color: '#777777' }}>Name: </Text>
                    {props.name}
                </Text>

                <Text style={styles.textSpecies}>
                    <Text style={{ color: '#777777' }}>Specie: </Text>
                    {props.specie}
                </Text>

                {typeStatus}        
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#161B22',
        borderRadius: 4,
        marginVertical: 10
    },
    imageCard: {
        width: '100%',
        height: 300,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    boxTextCard: {
        padding: 10,
    },
    textName: {
        fontSize: 16,
        color: '#FFD93D',
    },
    textSpecies: {
        fontSize: 16,
        color: '#46C2CB'
    },
    textStatusAlive: {
        fontSize: 16,
        color: '#C3FF99'
    },
    textStatusDead: {
        fontSize: 16,
        color: '#FF8787'
    },
})