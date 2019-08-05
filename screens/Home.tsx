import React, { Component } from "react";
import { Button, Text, View } from "react-native";

import { NavigationPropTypes } from "../types/navigationPropTypes";
import styles from "../styles";
import Users from "./Users";
import getUsers from "../utils/users";
import { UserType } from "../types/userType";

interface Props {
  navigation: NavigationPropTypes;
}

interface State {
  users: Array<UserType>;
}

class Home extends Component<Props, State> {
  static navigationOptions = {
    title: "Dashboard"
  };

  state = {
    users: []
  };

  async componentDidMount(): Promise<void> {
    let users = await getUsers();

    this.setState({
      users: JSON.parse(users) as Array<UserType>
    });
  }

  recordNew = () => {
    const { navigate } = this.props.navigation;
    const { users } = this.state;

    return navigate("Record", { users });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <Button
          title="Record New Game"
          color="#841584"
          onPress={this.recordNew}
        />
        <Users navigation={navigation} />
      </View>
    );
  }
}

export default Home;
