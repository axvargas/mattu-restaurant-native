import { Dimensions } from 'react-native';

/**
 * 
 * @param {{ 
 *  height: Number, 
 *  width: Number 
 * }} dimension - dimensiones to get to get porcetage
 * @returns {{ 
 *  height: Number, 
 *  width: Number 
 * }} object with height and with porcentages
 */
export const getDims = ({ height, width }) => {
  let payload = {};
  if (height) {
    payload.height = Dimensions.get('window').height * height;
  }
  if (width) {
    payload.width = Dimensions.get('window').width * width;
  }
  return payload;
};

/**
 * 
 * @param {String} dim - dimesion to calc porcentage
 * @param {Number} porc - porcentage
 * @returns {Number} porcentage result
 */
export const calcValue = (dim, porc) => (
  Dimensions.get('window')[dim] * porc
);

/**
 * 
 * @param {{ [String]: Any} | String} error
 * @returns {String} message for error passed as param
 */
export const parseError = (error) => {
  if (error) {
    if (typeof error === 'object') {
      if (typeof error.message === 'string') {
        return error.message;
      }
      if (typeof error.error === 'string') {
        return error.error;
      }
      if (typeof error.payload?.message === 'string') {
        return error.payload.message;
      }
      if (typeof error.payload?.error === 'string') {
        return error.payload.error;
      }
    }
    if (typeof error === 'string') {
      return error;
    }
  }
  return 'Something went wrong, please try again';
};
