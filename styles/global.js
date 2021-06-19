import { StyleSheet } from 'react-native';
import { calcValue } from '../utils';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginHorizontal: '2.5%',
    flex: 1
  },
  btn: {
    backgroundColor: '#ab47bc'
  },
  btnCir: {
    backgroundColor: '#ab47bc',
    borderRadius: 200,
    width: calcValue('width', 0.15),
    height: calcValue('width', 0.15)
  },
  txtBtn: {
    textTransform: 'none',
    fontWeight: 'bold',
    color: '#FFF'
  },
  title: {
    textAlign: 'center'
  },
  img: {
    height: 300,
    width: '100%'
  },
  quantity: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700'
  },
  btnSecondary: {
    backgroundColor: '#26a69a'
  },
  pv8: {
    flex: 1,
    marginHorizontal: '2.5%',
    marginVertical: 20
  }
});

export default globalStyles;