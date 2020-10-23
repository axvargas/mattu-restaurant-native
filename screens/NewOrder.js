import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text } from 'native-base'
import globalStyles from '../styles/global'

import { useNavigation } from '@react-navigation/native'

const NewOrder = () => {
    const navigation = useNavigation()

    return (
        <Container style={globalStyles.container}>
            <View style={[globalStyles.content, styles.content]}>
                <Button
                    rounded
                    block
                    style={globalStyles.btn}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text uppercase={false} style={[globalStyles.txtBtn, { fontSize: 16 }]}>New Order</Text>
                </Button>
            </View>
        </Container>
    )
}

export default NewOrder

const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})