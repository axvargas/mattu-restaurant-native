import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
  Button,
  Icon,
  Footer,
  FooterTab,
  View
} from 'native-base';
import OrderContext from '../context/order/OrderContext';

import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';
import FirebaseContext from '../context/firebase/FirebaseContext';

const SummaryOrder = () => {
  const {
    order,
    total,
    showSummaryFn,
    deletePlateFromOrderFn,
    orderDoneFn
  } = useContext(OrderContext);
  const { db } = useContext(FirebaseContext);

  const navigation = useNavigation();
  useEffect(() => {
    calculateTotal();
  }, [order]);

  const calculateTotal = () => {
    let newTotal = 0;
    newTotal = order.reduce((acumTotal, plate) => acumTotal + plate.subtotal, 0);
    showSummaryFn(newTotal);
  };

  const handleFinalOrder = async () => {
    const finalOrder = {
      order,
      total: Number(Number.parseFloat(total).toFixed(2)),
      completed: false,
      timeToBeReady: 0,
      created: Date.now()
    };

    try {
      const dbOrder = await db.collection('orders').add(finalOrder);
      orderDoneFn(dbOrder.id);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('ProgressOrder');
  };

  const confirmFinalOrder = () => {
    Alert.alert(
      'Final order confirmation',
      'Are you sure you want to order all the plates of this order?',
      [
        { text: 'Yes',
          onPress: () => handleFinalOrder() },
        { text: 'Cancel',
          style: 'cancel' }
      ],
      { cancelable: false }
    );
  };

  const confirmDeletePlateFromOrder = (id) => {
    Alert.alert(
      'Delete plate from order',
      'Are you sure you want to delete this plate of the order?',
      [
        { text: 'Yes',
          onPress: () => deletePlateFromOrderFn(id) },
        { text: 'Cancel',
          style: 'cancel' }
      ],
      { cancelable: false }
    );
  };
  return (
    <Container style={globalStyles.container}>
      <Content style={globalStyles.content}>
        {order.map((plate, i) => {
          const {
            id,
            name,
            price,
            /* category, description, */ image,
            quantity /* subtotal */
          } = plate;

          return (
            <List key={id + i}>
              <ListItem>
                <Thumbnail large square source={{ uri: image }} />
                <Body>
                  <Text>{name}</Text>
                  <Text>Quantity: {quantity}</Text>
                  <Text>Price: $ {price}</Text>
                </Body>
                <View style={{ alignItems: 'flex-end' }}>
                  <Button
                    style={globalStyles.btnSecondary}
                    onPress={() => confirmDeletePlateFromOrder(id)}>
                    <Icon name="md-trash" />
                  </Button>
                </View>
              </ListItem>
            </List>
          );
        })}
        <Text style={globalStyles.quantity}>
          {' '}
          Total: ${Number.parseFloat(total).toFixed(2)}
        </Text>
        <Button
          full
          transparent
          style={globalStyles.btn}
          onPress={() => navigation.navigate('Menu')}>
          <Text uppercase={false} style={[globalStyles.txtBtn, { fontSize: 16 }]}>
            Keep ordering
          </Text>
        </Button>
      </Content>
      <Footer>
        <FooterTab>
          <Button style={globalStyles.btn} onPress={() => confirmFinalOrder()}>
            <Text
              uppercase={false}
              style={[globalStyles.txtBtn, { fontSize: 16 }]}>
              Confirm order
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default SummaryOrder;
