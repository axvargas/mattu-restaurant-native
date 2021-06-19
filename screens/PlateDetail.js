import React, { useContext } from 'react';
import { Image, Alert } from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H3,
  Card,
  CardItem,
  Icon
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../styles/global';

import OrderContext from '../context/order/OrderContext';
import FormPlate from './FormPlate';

const PlateDetail = () => {
  const { plate, addPlateFn } = useContext(OrderContext);
  const { name, price, description, image } = plate;
  const navigation = useNavigation();
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
      <Content style={globalStyles.content}>
        <Card style={{ marginTop: 20 }}>
          <CardItem>
            <Body style={{ alignItems: 'center' }}>
              <H3 style={{ fontWeight: '500' }}>{name}</H3>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image
              // style={globalStyles.img}
              style={{ height: 250,
                width: null,
                flex: 1 }}
              source={{ uri: image }}
            />
          </CardItem>
          <CardItem>
            <Body>
              <Text note style={{ marginTop: 8 }}>
                {description}
              </Text>
              <Text style={globalStyles.quantity}>$ {price}</Text>
            </Body>
          </CardItem>
        </Card>
        <FormPlate/>
      </Content>
      <Footer>
        <FooterTab>
          <Button
            style={{
              ...globalStyles.btn,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={() => confirmOrderPlate()}>
            <Text
              style={[globalStyles.txtBtn, { fontSize: 16,
                marginRight: -20 }]}>
              Add to car
            </Text>
            <Icon style={{ color: '#FFFFFF' }} name='add'/>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default PlateDetail;
