import { StackNavigator } from 'react-navigation';

import MapsScreen from './MapsScreen';

const MapsTab = StackNavigator({
  Settings: {
    screen: MapsScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Customer Address',
      headerTitleStyle :{textAlign: 'center', alignSelf:'center', fontWeight:'normal'},
    }),
  },
});

export default MapsTab;
