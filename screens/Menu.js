import React, { useContext, useEffect, Fragment } from 'react'
import { StyleSheet } from 'react-native'
import {
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body
} from 'native-base'
import globalStyles from '../styles/global'

import { useNavigation } from '@react-navigation/native'

import FirebaseContext from '../context/firebase/FirebaseContext'
import OrderContext from '../context/order/OrderContext'

const Menu = () => {
    const { menu, getPlatesFn } = useContext(FirebaseContext)
    const { selectPlateFn } = useContext(OrderContext)
    const navigation = useNavigation()
    useEffect(() => {
        getPlatesFn()
    }, [])
    const showHeading = (category, i) => {
        if (i > 0) {
            const previousCategory = menu[i - 1].category
            if (previousCategory !== category) {
                return (
                    <Separator>
                        <Text style={styles.textSeparator}>{category}</Text>
                    </Separator>
                )
            }
        } else {
            return (
                <Separator>
                    <Text style={styles.textSeparator}>{category}</Text>
                </Separator>
            )
        }
    }
    return (
        <Container style={globalStyles.container}>
            <Content >
                <List>
                    {menu.length > 0 &&
                        menu.map((plate, i) => {
                            const { id, name, price, category, description, image } = plate
                            return (
                                <Fragment key={id}>
                                    {showHeading(category, i)}
                                    <ListItem
                                        onPress={() => {
                                            selectPlateFn(plate)
                                            navigation.navigate('PlateDetail')
                                        }}
                                    >
                                        <Thumbnail
                                            large
                                            square
                                            source={{ uri: image }}
                                        />
                                        <Body>
                                            <Text>{name}</Text>
                                            <Text
                                                note
                                                numberOfLines={2}
                                            >
                                                {description}
                                            </Text>
                                            <Text>$ {price}</Text>
                                        </Body>
                                    </ListItem>
                                </Fragment>
                            )
                        })
                    }
                </List>
            </Content>
        </Container >
    )
}

export default Menu

const styles = StyleSheet.create({
    separator: {

    },
    textSeparator: {
        color: '#ab47bc',
        fontWeight: "500",
        fontSize: 15,
        textTransform: 'capitalize'
    }
})