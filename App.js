import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewOrder from './screens/NewOrder';
import Menu from './screens/Menu';
import PlateDetail from './screens/PlateDetail';
import FormPlate from './screens/FormPlate';
import SummaryOrder from './screens/SummaryOrder';
import ProgressOrder from './screens/ProgressOrder';

import SummaryBtn from './components/SummaryBtn';

import FirebaseState from './context/firebase/FirebaseState';
import OrderState from './context/order/OrderState';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const Stack = createStackNavigator();


const App = () => {
  return (
    <FirebaseState>
      <OrderState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#ab47bc'
              },
              headerTitleStyle: {
                fontWeight: '500'
              },
              headerTintColor: '#fff'
            }}
          >
            <Stack.Screen
              name="NewOrder"
              component={NewOrder}
              options={{
                title: 'New Order'
              }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title: 'Menu',
                headerRight: () => <SummaryBtn />
              }}
            />
            <Stack.Screen
              name="PlateDetail"
              component={PlateDetail}
              options={{
                title: 'Product Detail'
              }}
            />
            <Stack.Screen
              name="FormPlate"
              component={FormPlate}
              options={{
                title: 'Quantity'
              }}
            />
            <Stack.Screen
              name="SummaryOrder"
              component={SummaryOrder}
              options={{
                title: 'Summary of the order'
              }}
            />
            <Stack.Screen
              name="ProgressOrder"
              component={ProgressOrder}
              options={{
                title: 'Progress of the order',
                headerLeft: null
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </OrderState>
    </FirebaseState>
  );
};

export default App;
