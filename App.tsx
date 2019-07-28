import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Record from './screens/Record';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Record: { screen: Record },
});

const App = createAppContainer(MainNavigator);

export default App;
