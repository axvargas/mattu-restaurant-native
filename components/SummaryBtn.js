import React, { useContext } from 'react'
import { Button, Text } from 'native-base'
import globalStyles from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import OrderContext from '../context/order/OrderContext'

const SummaryBtn = () => {
    const { order } = useContext(OrderContext)

    const navigation = useNavigation()

    if (order.length === 0) return null
    return (
        <Button
            style={globalStyles.btn}
            onPress={() => navigation.navigate('SummaryOrder')}
            transparent
        >
            <Text uppercase={false} style={[globalStyles.txtBtn, { fontSize: 16 }]}>Order</Text>
        </Button >
    )
}

export default SummaryBtn