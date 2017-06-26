import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';

const MainTab = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: {
      title: 'Sample Apps',
      headerTitleStyle :{textAlign: 'center', alignSelf:'center', fontWeight:'normal'},
    },
  },
  Product: {
    screen: ProductScreen,
    path: 'productID=:productID',
    navigationOptions: ({ navigation }) => ({
      title: 'Product Details',
      headerTitleStyle :{fontWeight:'normal'},
    }),
  },
});

export default MainTab;
