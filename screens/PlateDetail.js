import React, { useContext } from 'react';
import { Image } from 'react-native';
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
  CardItem
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '../styles/global';

import OrderContext from '../context/order/OrderContext';
const PlateDetail = () => {
  const { plate } = useContext(OrderContext);
  const { name, price, description, image } = plate;
  const navigation = useNavigation();

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
      </Content>
      <Footer>
        <FooterTab>
          <Button
            style={globalStyles.btn}
            onPress={() => navigation.navigate('FormPlate')}>
            <Text
              uppercase={false}
              style={[globalStyles.txtBtn, { fontSize: 16 }]}>
              Order plate
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default PlateDetail;
