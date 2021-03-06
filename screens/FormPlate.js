import React, { useState, useContext, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  FooterTab,
  Footer,
  Text,
  Grid,
  Col,
  Icon,
  Button,
  H3,
  Row
} from 'native-base';
import OrderContext from '../context/order/OrderContext';

import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/global';

const FormPlate = () => {
  const { plate, addPlateFn } = useContext(OrderContext);
  const { price } = plate;

  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    calculatesubtotal();
  }, [quantity]);

  const calculatesubtotal = () => {
    const subtotalPay = price * quantity;
    setSubtotal(subtotalPay);
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddPlate = () => {
    const subOrder = {
      ...plate,
      quantity,
      subtotal
    };
    addPlateFn(subOrder);
    navigation.navigate('SummaryOrder');
  };

  const confirmOrderPlate = () => {
    Alert.alert(
      'Order plate confirmation',
      'Are you sure you want to add this plate to your order?',
      [
        { text: 'Yes',
          onPress: () => handleAddPlate() },
        { text: 'Cancel',
          style: 'cancel' }
      ],
      { cancelable: false }
    );
  };

  return (
    <Container style={globalStyles.container}>
      <Content style={styles.content}>
        <Form>
          <Grid>
            <Row>
              <Col style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
              }}>
                <Button
                  style={[styles.btn, globalStyles.btnCir]}
                  onPress={() => decrement()}>
                  <Icon name="remove" />
                </Button>
              </Col>
              <Col style={{ alignItems: 'center',
                justifyContent: 'center' }}>
                <H3>{quantity}</H3>
              </Col>
              <Col style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center' 
              }}>
                <Button
                  style={[styles.btn, globalStyles.btnCir]}
                  onPress={() => increment()}>
                  <Icon name="add" />
                </Button>
              </Col>
            </Row>
          </Grid>
          <Text style={globalStyles.quantity}>
            Subtotal: ${Number.parseFloat(subtotal).toFixed(2)}
          </Text>
        </Form>
      </Content>
      <Footer>
        <FooterTab>
          <Button style={globalStyles.btn} onPress={() => confirmOrderPlate()}>
            <Text
              uppercase={false}
              style={[globalStyles.txtBtn, { fontSize: 16 }]}>
              Order plate 2352
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default FormPlate;

const styles = StyleSheet.create({
  btn: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  content: {
    marginTop: 40
  }
});
