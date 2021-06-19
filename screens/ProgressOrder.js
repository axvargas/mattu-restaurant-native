import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { H2, Container, Text, View, H3, Content, Button } from 'native-base';
import OrderContext from '../context/order/OrderContext';
import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../context/firebase/FirebaseContext';

import Countdown from 'react-countdown';

const ProgressOrder = () => {
  const { orderId, resetFn } = useContext(OrderContext);
  const { db } = useContext(FirebaseContext);
  const [actualTime, setActualTime] = useState(0);
  const [completed, setCompleted] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    const getOrderStatus = () => {
      db.collection('orders').doc(orderId).onSnapshot(handleSnapshot);
    };
    getOrderStatus();
  }, []);

  const handleSnapshot = (doc) => {
    setActualTime(doc.data().timeToBeReady);
    setCompleted(doc.data().completed);
  };

  const updateToCompleted = async () => {
    try {
      db.collection('orders').doc(orderId).update({ completed: true });
    } catch (error) {
      console.log(error);
    }
  };

  const renderer = ({ minutes, seconds, completedRender }) => {
    const minutesRender =
      Number(minutes).toString().length === 1 ? `0${minutes}` : minutes;
    const secondsRender =
      Number(seconds).toString().length === 1 ? `0${seconds}` : seconds;
    if (completedRender) {
      updateToCompleted();
    }
    return (
      <Text style={styles.timer}>
        {minutesRender}:{secondsRender}
      </Text>
    );
  };
  return (
    <Container style={globalStyles.container}>
      <Content style={globalStyles.content}>
        <View style={styles.view}>
          {actualTime === 0 && (
            <>
              <Text style={globalStyles.title}>
                We have received your order with id: {orderId}
              </Text>
              <Text style={globalStyles.title}>
                We are estimating the time of readiness...
              </Text>
            </>
          )}
          {!completed && actualTime > 0 && (
            <>
              <Text style={globalStyles.title}>
                Your order will be ready in:
              </Text>
              <View>
                <Countdown
                  date={Date.now() + actualTime * 60000}
                  renderer={renderer}
                />
              </View>
            </>
          )}
          {completed && (
            <View style={styles.viewReady}>
              <H2>Order ready</H2>
              <H3>Please, pick up your order</H3>
              <Button
                rounded
                block
                style={[globalStyles.btn, { marginTop: 44 }]}
                onPress={() => {
                  resetFn();
                  navigation.navigate('NewOrder');
                }}>
                <Text
                  uppercase={false}
                  style={[globalStyles.txtBtn, { fontSize: 16 }]}>
                  Make a new order
                </Text>
              </Button>
            </View>
          )}
        </View>
      </Content>
    </Container>
  );
};

export default ProgressOrder;

const styles = StyleSheet.create({
  view: {
    marginTop: 20
  },
  timer: {
    fontSize: 60,
    fontWeight: '500',
    textAlign: 'center'
  },
  viewReady: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
