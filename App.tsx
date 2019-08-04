import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "./screens/Home";
import Record from "./screens/Record";
import Users from "./screens/Users";
import User from "./screens/User";

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Record: { screen: Record },
  Users: { screen: Users },
  User: { screen: User }
});

export default createAppContainer(MainNavigator);
