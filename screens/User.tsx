import React from "react";
import { AsyncStorage, Button, Text, TextInput, View } from "react-native";

import { Navigation } from "../types/navigation";
import styles from "../styles";
import { User } from "../types/user";
import { calculateUserAttributes } from "../utils/userCalculator";

interface Props {
  navigation: Navigation;
  users: User[];
}

interface State {
  user: User;
  users: User[];
}

class Users extends React.Component<Props, State> {
  static navigationOptions = {
    title: "Create New User"
  };

  constructor(props) {
    super(props);
    const {
      navigation: { getParam }
    } = props;
    const users = getParam("users") || [];
    let id = 1;

    if (users && users.length) {
      users.map(user => {
        if (user.id > id) {
          id = user.id + 1;
        }
      });
    }

    this.state = {
      user: calculateUserAttributes({ id }),
      users
    };
  }

  onChangeText = (text: string) => {
    const { user } = this.state;

    // TODO: this.setState({ ...user, name: text });
  };

  createNew = async () => {
    const {
      navigation: { navigate }
    } = this.props;
    const { user, users } = this.state;

    await AsyncStorage.setItem("Users", JSON.stringify([...users, user]));

    return navigate("Users");
  };

  render() {
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <Text>Create New User</Text>
        <TextInput
          key={"name"}
          placeholder={"Name"}
          style={{
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={this.onChangeText}
          value={user.name}
        />
        <Button
          title="Create New User"
          color="#841584"
          onPress={this.createNew}
        />
      </View>
    );
  }
}

export default Users;
