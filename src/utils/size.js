import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export default size = (value) => width * value / 100;
